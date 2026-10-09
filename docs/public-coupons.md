# Public coupons API — integration guide for ranksarthi.com

This guide is for the team building the offers section on ranksarthi.com. It covers everything needed to list the brands' public coupons and send visitors to the right brand with the code ready to use. You don't need access to this repository.

## 1. What it is

Each brand has one open `GET` endpoint that returns its public coupons as JSON:

| Brand | URL |
|---|---|
| JEE Rank Up | `https://api.jeerankup.com/api/v1/public/coupons` |
| NEET Rank Up | `https://api.neetrankup.com/api/v1/public/coupons` |
| NDA Rank Up | `https://api.ndarankup.com/api/v1/public/coupons` |

- No key, no login, no custom headers.
- Only coupons a brand admin has marked **"Show on public website"** are returned. Paused, deleted, institute (B2B) and one-student codes never appear.
- A change made by an admin (publishing, hiding or pausing a code) appears in the API within 60 seconds.

## 2. Filters

All filters are optional query parameters.

| Name | Values | Default | Notes |
|---|---|---|---|
| `platform` | `jee`, `neet`, `nda` | — | Asking a brand for another brand's platform returns an empty list, so the same loop works for all three URLs. |
| `status` | comma list of `active`, `upcoming`, `expired`, `used_up` | `active` | Example: `status=active,upcoming`. |
| `applies_to` | `subscription`, `topup` | — | Plans or top-up packs (the "type" filter). |
| `discount_type` | `percent`, `flat` | — | |
| `plan_id` | a plan id | — | Coupons that work on that plan. |
| `search` | text, up to 32 characters | — | Part of the code, any case. |
| `sort` | `newest`, `ending_soon`, `starting_soon` | `newest` | Codes with no end/start date come last. |
| `page` | 1, 2, … | 1 | |
| `per_page` | 1–100 | 20 | |

What each status means:
- **active** — started, not ended, not used up. People can use it now.
- **upcoming** — starts in the future.
- **expired** — its end date has passed.
- **used_up** — it has a total-use limit and that limit has been reached.

## 3. Fields

Each item in `data.items`:

| Field | Meaning |
|---|---|
| `platform` | `jee`, `neet` or `nda`. |
| `platform_name` | The brand's display name, e.g. "JEE Rank Up". |
| `code` | The coupon code, upper case. |
| `status` | `active`, `upcoming`, `expired` or `used_up`. |
| `headline` | Ready to display: "₹250 off", "25% off", "12.5% off, up to ₹200". |
| `discount_type` | `percent` or `flat`. |
| `percent_off` | Number for a percent code (e.g. `25`), otherwise `null`. |
| `amount_off_paise` | Amount for a flat code, in paise (₹1 = 100 paise), otherwise `null`. |
| `max_discount_paise` | The cap on a percent code, in paise, or `null` for no cap. |
| `min_order_paise` | The minimum order value, in paise (`0` = none). |
| `currency` | `INR`. |
| `applies_to` | `subscription` (plans) or `topup` (top-up packs). |
| `plans` | `[{ "id", "name", "price_paise" }]` for codes limited to some plans, or `null` when the code works on every plan of that kind. |
| `starts_at`, `ends_at` | ISO 8601 dates, or `null` (no start / no end). |
| `limited` | `true` when the code has a total-use limit, so it can run out. |
| `redeem_url` | The "Apply now" link. See below. |

**`redeem_url`** takes the visitor to the brand's site with the code remembered for 7 days:
- a signed-in student goes straight to the brand's Plans page, and the code is applied at checkout;
- anyone else goes to Sign up first (with a link to log in); after they sign up or log in, they land on Plans with the code applied.

The link carries `utm_source=ranksarthi&utm_medium=coupon&utm_campaign=<CODE>`, so purchases are recorded as coming from ranksarthi.com. You can change `utm_campaign` or add `utm_term` / `utm_content` for your own tracking; keep `coupon=` unchanged.

## 4. Sample

Request:

```
GET https://api.jeerankup.com/api/v1/public/coupons?status=active,upcoming&per_page=1
Accept: application/json
```

Response (`200`):

```json
{
  "data": {
    "items": [
      {
        "platform": "jee",
        "platform_name": "JEE Rank Up",
        "code": "DIWALI25",
        "status": "active",
        "headline": "25% off, up to ₹500",
        "discount_type": "percent",
        "percent_off": 25,
        "amount_off_paise": null,
        "max_discount_paise": 50000,
        "min_order_paise": 0,
        "currency": "INR",
        "applies_to": "subscription",
        "plans": null,
        "starts_at": "2026-10-20T00:00:00+00:00",
        "ends_at": "2026-11-05T18:29:59+00:00",
        "limited": true,
        "redeem_url": "https://jeerankup.com/redeem?coupon=DIWALI25&utm_source=ranksarthi&utm_medium=coupon&utm_campaign=DIWALI25"
      }
    ],
    "pagination": { "total": 3, "per_page": 1, "current_page": 1, "last_page": 3 }
  },
  "meta": { "request_id": "9dcda31c-41f3-4d2c-9204-089056a2c634", "timestamp": "2026-10-20T05:20:30+00:00" }
}
```

## 5. Merging the three brands

Call each brand and combine the results. One brand being down shouldn't hide the others.

```js
const BRANDS = [
  "https://api.jeerankup.com/api/v1/public/coupons",
  "https://api.neetrankup.com/api/v1/public/coupons",
  "https://api.ndarankup.com/api/v1/public/coupons",
];

async function loadCoupons(query = "status=active") {
  const results = await Promise.allSettled(
    BRANDS.map((url) =>
      fetch(`${url}?${query}&per_page=100`, { headers: { Accept: "application/json" } })
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
    ),
  );
  const items = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value.data.items);
  // Soonest end date first; codes with no end date last.
  return items.sort((a, b) => (a.ends_at ?? "9999").localeCompare(b.ends_at ?? "9999"));
}
```

To show one brand only, call just that brand's URL (or keep the loop and pass `platform=neet`).

## 6. Limits and caching

- **120 requests per minute per IP address.** Past that you get `429` with a `Retry-After` header (seconds). If you call from your server, every visitor shares your server's IP, so cache on your side.
- Responses are cached for **60 seconds** (`Cache-Control: public, max-age=60`). Caching for 1–5 minutes on your side is fine.
- You can call from the browser or from your server. The API sends `Access-Control-Allow-Origin: *`. A plain `GET` with only `Accept: application/json` needs no CORS preflight, so don't add custom headers.

## 7. Errors

Errors use the same envelope as the rest of the API:

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "The submitted data did not pass validation.",
    "details": { "discount_type": ["The selected discount type is invalid."] }
  },
  "meta": { "request_id": "…", "timestamp": "…" }
}
```

- `422 VALIDATION_FAILED` — an unknown filter value; `details` names the field.
- `429 RATE_LIMITED` — too many requests; wait `Retry-After` seconds.

`meta.request_id` identifies the request if you need to report a problem to the brand.

## 8. Notes for the brands (not needed by ranksarthi.com)

- Admins publish a code with **Show on public website** on `/admin/coupons`. A code for one student can't be public.
- Partners and influencers get their own code (usually not public) and a link from **Copy share link** in the coupon list. The list shows signups, paid orders and revenue per code.
- Anything public can be copied by other coupon sites. Give public codes limits (total uses, one per student, an end date), and pause or hide a code at any time.
- Contracts: `coupon.md` (admin side), `payment.md` (UTM on checkout), `auth.md` (signup attribution).

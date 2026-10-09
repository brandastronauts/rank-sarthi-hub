# Rank Sarthi → RankUp Handoff Contract

Audience: RankUp technical team. Status: frozen (change only with an approved business requirement).

## Ownership boundary
- **Rank Sarthi owns:** Discovery → Trust → "Start My Free Diagnostic" → Exam selection → Attributed RankUp handoff.
- **RankUp owns:** Signup / OTP → Student details → Diagnostic → Result → Dashboard → Plans → Payment.
- Rank Sarthi has no signup, login, diagnostic engine, result, dashboard, checkout or payment.

## Destinations
| Exam | URL |
|------|-----|
| JEE  | https://jeerankup.com/ |
| NEET | https://neetrankup.com/ |
| NDA  | https://ndarankup.com/ |

All diagnostic buttons use one exam chooser and one helper (`buildRankUpHandoff`), so links cannot drift.

## Incoming marketing fields (preserved exactly, never overwritten)
`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `utm_id`, and click IDs `gclid`, `gbraid`, `wbraid`, `msclkid`, `fbclid`. Every other inbound parameter is dropped.

## Rank Sarthi fields (always added)
| Field | Value |
|-------|-------|
| `rs_source` | always `ranksarthi` |
| `rs_exam` | `jee` \| `neet` \| `nda` |
| `rs_entry_path` | Rank Sarthi page path where the click happened (no query/hash), e.g. `/`, `/jee` |
| `rs_cta` | `header` \| `hero` \| `sticky` \| `section` \| `final` \| `pricing` \| `offer` |

## Coupon redeem links (`/offers`)
The offers page lists each platform's public coupons (see `docs/public-coupons.md`). Its "Apply" button uses the same helper with `rs_cta=offer`, sent to the platform's `/redeem` path:
- The coupon link's own fields (`coupon`, `utm_source=ranksarthi`, `utm_medium=coupon`, `utm_campaign=<CODE>`) are kept exactly and never overwritten.
- `utm_content=offers-page` is added (unless the platform's link already sets it). The coupon flow records only `coupon` and the five `utm_*` fields, not `rs_*`, so this is how "came from the offers page" reaches RankUp's reports.
- Inbound marketing fields fill only the gaps (e.g. `utm_term`, click IDs).
- A redeem link that does not point at the platform's own origin is never followed; the documented shape is rebuilt from the code instead.
- The three coupon APIs are cached on the server for 60 s (the APIs' own cache time), concurrent requests share one call, and a failed or rate-limited call serves the last good list.

```
https://jeerankup.com/redeem?coupon=FIRSTUSER&utm_source=ranksarthi&utm_medium=coupon&utm_campaign=FIRSTUSER&utm_content=offers-page&rs_source=ranksarthi&rs_exam=jee&rs_entry_path=%2Foffers&rs_cta=offer
```

## No-PII rule
Handoff URLs never contain name, email, mobile, password, date of birth, parent details, city, school, scores or any personal data. RankUp collects student information after signup.

## Example
Visitor arrives from Google, clicks the hero button on `/jee`, picks JEE:

```
https://jeerankup.com/?utm_source=google&utm_campaign=jee_search&rs_source=ranksarthi&rs_exam=jee&rs_entry_path=%2Fjee&rs_cta=hero
```

Direct visitor, homepage sticky bar, NEET:

```
https://neetrankup.com/?rs_source=ranksarthi&rs_exam=neet&rs_entry_path=%2F&rs_cta=sticky
```

## Event ownership
- **Rank Sarthi emits** (to `dataLayer`/analytics only where configured): `diagnostic_cta_click`, `exam_chooser_view`, `exam_selected`, `rankup_handoff`.
- **RankUp owns:** Rank Sarthi arrival, signup completed, diagnostic started/completed, result viewed, plan viewed, purchase completed. Rank Sarthi does not track these.

## RankUp dependencies (external)
1. Save Rank Sarthi + UTM attribution against the user account.
2. Retain attribution through signup.
3. Capture required student details before the diagnostic.
4. Sign the student in automatically after OTP verification.
5. Launch the correct free diagnostic after setup.
6. Take the student to the result.
7. Give the result/dashboard a clear next-step / plan pathway.
8. Track arrival, signup, diagnostic start/complete, result viewed, plan viewed, purchase.
9. Own full product-side funnel reporting.

## Academic dependency
A diagnostic paper is needed for JEE, NEET and NDA, each with question count, duration and syllabus scope. These values are not defined on Rank Sarthi.

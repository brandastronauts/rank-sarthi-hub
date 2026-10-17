# Institutes intake — Prashant handoff

## Current state

Single public page `/institutes`, two form instances/intents, no working notification provider. Approved notification inbox: info@ranksarthi.com. This approves the address, not monitoring or delivery. Preview noindex remains until separate release approval. Website review/publication need not wait for backend work: direct email/phone fallback stays visible until connected.

## Modules

- UI: `src/components/institutes/InstituteEnquiryForm.tsx`
- Validation/DTO: `src/lib/institute-enquiry-schema.ts`
- App-internal POST RPC: `submitInstituteEnquiry` in `src/lib/institute-enquiry.functions.ts`, invoked via `useServerFn`; do not manually POST JSON to its generated RPC URL.
- Storage processor: `src/lib/institute-enquiry.server.ts`
- Operational flags / exact redirect map: `src/content/institutes/policy.ts`
- Rule tests: `src/lib/institutes.test.ts`, `src/lib/institute-enquiry-process.test.ts`

## Validated request contract

```json
{
  "intent": "quote",
  "fullName": "Example Representative",
  "instituteName": "Example Institute",
  "email": "representative@example.com",
  "phone": "+91 90000 00000",
  "studentCount": "100",
  "exams": ["JEE Main"],
  "city": "",
  "state": "",
  "instituteType": "",
  "futureExams": [],
  "message": "",
  "consent": true,
  "website": "",
  "sourcePage": "/institutes",
  "attribution": {
    "first": {"utm_source": "partner"},
    "last": {"utm_source": "partner"},
    "entryPath": "/institutes"
  }
}
```

Demo uses intent `demo` and exactly one current examination. Quote allows 1–4 distinct current exams. Source stays `/institutes`; never use fragments as HTTP page paths. Intent distinguishes the receiving queue.

Required: fullName 2–100, instituteName 2–150, valid email ≤255, phone ≤20 characters / 7–15 digits, string nonnegative safe whole-number studentCount, current exams, consent true. Optional city/state ≤100, instituteType from defined enum, future exams ≤3 from defined future-only enum, message ≤2000, honeypot website ≤200; unknown object keys rejected. Current exams: JEE Main/JEE Advanced/NEET UG/NDA. Future choices are interest only, never purchase entitlements.

Attribution allowlist: utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, fbclid, msclkid. Restricted token characters, max 150 per value, unknown/email-like fields dropped. Separate first/last touches in session storage. No student records, sensitive payment information or arbitrary URLs.

## Safe behaviour today

Buttons are clickable for frontend validation. Invalid input produces field errors. Valid input produces an honest inactive message without calling the server or writing a lead. Email/phone links are visible above and below each form. No automatic email drafts contain the user's filled data. Backend RPC independently returns inactive before opening storage; frontend cannot enable it.

## Prepared storage and result contracts

Existing protected `contact_enquiries`, service-role writes only. No schema/RLS/grant changes. Maps full_name/email/phone plus enquiry_type `Institute / Quote` or `Institute / Demo`, visitor_type, source_page, hashed client identifier, structured version-1 JSON message. Message includes institute, count, exams, optional location/type/future interests/requirements, consent and bounded attribution. Current prepared delivery status `stored_private_review` MUST be revised or confirmed to reflect the actual receiving process; it is not proof of notification.

Success `{ok:true}` means persisted lead only, not email delivery or confirmed meeting. Failure `{ok:false,reason:"inactive"|"spam"|"rate_limited"|"server"}`. Origin rejection is fail-closed. Avoid reporting notification success unless provider delivery/receipt is verified.

## Prashant’s remaining integration work

1. Confirm monitored inbox owner, backups and quote/demo routing; define consent, attribution and retention handling.
2. Agree existing private lead-review workflow or approved email provider/sender. No new database or mail service without approval; no keys in browser code.
3. Verify hosting proxy overwrites forwarded-IP headers and strict Origin check works on the actual deployment; current non-atomic five/hour count is not distributed abuse protection.
4. Wire real notification/private-review process with delivery status, error handling and safe retry/deduplication. Never silently lose a stored lead on notification failure.
5. Coordinate one test quote and demo; verify actual storage, intended recipient receipt or authorised private review, and failure handling. Preserve public-read denial.
6. After verified operational readiness and authorisation, update the three explicit intake flags. Keep fallback visible on failures; do not claim a demo meeting is booked.
7. Independently of intake readiness, authorised site release should set only canonical `/institutes` indexation to `index`. XML/human sitemaps derive from registry; aliases remain noindex redirects. Test production one-hop redirects and current hashed assets after actual deployment.

Backend integration can follow approved website publication while forms remain safely unconnected. No deployment is authorised by this handoff.

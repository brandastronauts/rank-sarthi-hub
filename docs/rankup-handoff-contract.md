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

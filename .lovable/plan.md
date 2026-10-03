# Rank Sarthi diagnostic-first acquisition redesign

## Objective
Simplify RankSarthi.com around one primary action—**Start Free Diagnostic**—and end its responsibility at a clean, measurable handoff to the correct RankUp product.

No RankUp diagnostic, account, result, lead, plan, or payment functionality will be recreated or modified in this project.

## Current journey
- The homepage contains the right diagnostic idea, exam resources, faculty, trust, product depth, pricing, and FAQs, but presents too many long sections before the visitor reaches a clear next action.
- Diagnostic CTAs already resolve through the shared destination system to JeeRankUp, NeetRankUp, and NDARankUp.
- The current homepage repeats the diagnostic value across several large sections, including scenarios, methodology, product depth, audiences, trust, and pricing.
- The product-side diagnostic, lead capture, account creation, complete result, improvement plan, and purchase flows are outside this project and cannot be verified or changed here.
- No active analytics/event utility was found in the Rank Sarthi source. The redesign will not add a paid analytics vendor.

## Proposed journey
```text
Google / AI Search / Direct
        ↓
Rank Sarthi homepage
        ↓
Start Free Diagnostic
        ↓
Choose JEE Main / NEET UG / NDA
        ↓
Measured outbound handoff with attribution
        ↓
JeeRankUp / NeetRankUp / NDARankUp
```

The RankUp technical team owns the continuation:

```text
Begin diagnostic → partial value → lead/account gate → complete result
→ improvement/account journey → relevant paid plan
```

## Homepage structure
1. **Compact hero** — “Your rank has a reason.”, one concrete benefit sentence, JEE · NEET · NDA context, primary diagnostic CTA, secondary free-resources CTA.
2. **Diagnostic benefits** — four compact, student-first outcomes: weak concepts, knowledge versus execution errors, priority areas, and next actions.
3. **Without diagnosis / With Rank Sarthi** — compressed two-column comparison on desktop and compact horizontally scrollable comparison on mobile.
4. **How it works** — concise four-step website-to-product journey.
5. **Useful features** — only capabilities already supported by current content and product claims, expressed in plain language.
6. **Free exam resources** — compact JEE, NEET, and NDA entry points without duplicating their full content estates.
7. **Academic team** — approved public profiles only, grouped by subject; compact grid on desktop and horizontal swipe on mobile.
8. **Concise trust** — retain only verified proof and product-scale facts; no testimonials or unsupported outcome claims.
9. **High-value FAQs** — a short subset plus a link to the full FAQ page.
10. **Final diagnostic CTA** — repeat the same primary CTA wording.

A small mobile-only sticky **Start Free Diagnostic** action will appear after the hero and remain clear of navigation, content, accordions, and browser controls.

## Homepage duplication decisions

### Keep and move higher
- Approved positioning and brand identity
- Diagnostic chooser
- Student-facing diagnostic outcomes
- JEE, NEET, and NDA resource discovery
- Approved public Academic Team profiles
- Concise verified trust signals
- Short FAQ set

### Merge and compress
- Aspirant problem statement + diagnostic comparison
- Diagnostic idea + methodology + product depth into benefits, features, and four steps
- Product-scale facts + trust into one concise proof section
- Repeated diagnostic CTAs into one consistent CTA system

### Remove from homepage only
- Long example-scenario cards
- Parent/educator audience bands that interrupt the student funnel
- Oversized ten-layer product visualization
- Pre-purchase pricing grid and disabled plan actions
- Repeated brand-trust explanations
- Any decorative or image-heavy section that does not improve the acquisition journey

Associated routes and content remain untouched.

## Exam chooser and outbound handoff
- Reuse the existing chooser interaction rather than add an intermediate route.
- Ask only: **Which exam are you preparing for?**
- Options:
  - JEE Main → `https://jeerankup.com/`
  - NEET UG → `https://neetrankup.com/`
  - NDA → `https://ndarankup.com/`
- Preserve existing valid campaign parameters rather than overwrite them.
- Add Rank Sarthi referral context when absent, using a documented allowlist of non-sensitive parameters such as:
  - `utm_source=ranksarthi`
  - `utm_medium=referral`
  - `utm_campaign=free_diagnostic`
  - exam context
  - originating Rank Sarthi path / CTA location where safely supported
- Keep referral data in the URL only; do not include personal data.
- External RankUp destinations remain the existing production domains—no proxy, imitation, or invented API.

## Rank Sarthi measurement
Create one lightweight internal event interface so the UI is not tied to a vendor. It will emit through an already-present browser analytics object if available and otherwise fail safely without blocking navigation.

Rank Sarthi-owned stages:
- `homepage_view`
- `diagnostic_cta_click`
- `exam_chooser_view`
- `exam_selected`
- `rankup_handoff`

Useful non-sensitive properties:
- exam
- originating Rank Sarthi path
- CTA location
- preserved campaign/source values
- destination origin

Do not claim these product-side events are implemented here:
- `diagnostic_started`
- `lead_capture_viewed`
- `lead_submitted`
- `diagnostic_completed`
- `result_viewed`
- `account_created`
- `plan_viewed`
- `purchase_started`
- `purchase_completed`

## RankUp technical-team interface
Each RankUp product will need to:
1. Accept and persist the approved referral parameters across its session and account creation.
2. Start the diagnostic with minimal friction and avoid immediate registration unless technically necessary.
3. Place the lead/account gate after meaningful interaction but before the complete personalised result.
4. Create or associate the account without losing diagnostic progress or attribution.
5. Present the complete result with clear next actions: improvement plan/account first, paid plan second.
6. Emit product-side funnel events with a shared journey/campaign identifier so marketing and product data can be reconciled.
7. Confirm required lead fields, consent text, privacy handling, analytics destination, and attribution retention period.

## Implementation scope in Rank Sarthi
- Reorder and reduce the homepage block recipe.
- Refactor existing homepage sections into compact reusable blocks rather than duplicate their content.
- Update the hero, diagnostic chooser, comparison, features, resources, Academic Team, trust, FAQ, and final CTA presentations.
- Add the mobile sticky CTA and safe sticky-header offsets.
- Add the attribution-preserving outbound URL helper and focused tests for parameter precedence, exam mapping, and absence of personal data.
- Add the lightweight Rank Sarthi event interface and instrument the five owned funnel stages.
- Preserve the existing destination registry as the source of truth for RankUp origins.
- Record the acquisition/product ownership boundary in the project architecture notes.

## Explicitly unchanged
- JEE, NEET, and NDA content architecture and indexed routes
- Syllabus, chapter, PYQ, answer-key, cutoff, and exam-date content
- Faculty profile pages and approved profile data
- Canonicals, metadata of internal SEO pages, robots.txt, and sitemap
- RankUp diagnostic, account, result, lead, plan, and payment systems
- Existing prices, plans, claims, and product data

SEO routes deleted: **NONE**.

## Validation
- Check homepage at 390px, 768px, and 1440px.
- Verify first-phone-viewport CTA visibility, sticky CTA behavior, header offsets, compact comparison readability, faculty swipe, tap targets, keyboard access, and zero horizontal overflow.
- Verify chooser opens from every primary CTA and each exam reaches the correct production RankUp origin.
- Verify inbound UTMs are preserved, defaults are added only when absent, exam/source context is present, and no personal data is appended.
- Verify all five Rank Sarthi-owned events fire once at the correct stage without blocking handoff.
- Verify free resource links, faculty links, and the full FAQ link remain valid.
- Run homepage guard, relevant route/link regressions, and confirm PYQ data/files are unchanged.
- Confirm no SEO routes were added, removed, redirected, or re-indexed.

## Dependencies and business decisions
Implementation on Rank Sarthi can proceed without RankUp source access. Before end-to-end funnel reporting is possible, the RankUp technical team must confirm:
- whether each destination accepts and persists the proposed attribution keys;
- the shared analytics destination and cross-domain identity/journey method;
- the exact lead fields and consent requirements;
- the technical point of the result unlock gate;
- account association behavior for new and returning students;
- final improvement-plan and paid-plan destinations.

Until those are confirmed, Rank Sarthi will provide a correctly attributed outbound handoff but will not claim downstream completion tracking.

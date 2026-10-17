# Rank Sarthi Institutes — Approval Proposal V1

## Planning-only status
Reviewed both official October 2026 documents, existing project architecture and the live institute journey. No website code, routes, navigation, prices, settings or dependencies have been changed; nothing has been published.

The accompanying **Rank Sarthi Institutes Proposal V1** contains the eight requested deliverables, including complete four-page copy, every major section's desktop/mobile wireframe, SEO metadata, lead workflow and regression criteria. Review the full document before approving this plan.

## Confirmed scope
- Preserve homepage V3.1, hero/tagline, diagnostic journey, student pricing/offers, RankUp handoff, faculty, PYQs, Physics, syllabus and unrelated SEO systems.
- Propose exactly `/institutes`, `/institutes/pricing`, `/institutes/case-studies` and `/institutes/request-demo`.
- Present Rank Sarthi as an assessment, practice and academic performance intelligence platform for schools and coaching institutes.
- Market JEE Main, JEE Advanced, NEET UG and NDA as available; BITSAT, IISER Aptitude Test and NEST are Coming Soon.
- Use 13 supported question formats, 40,000+ JEE-tagged PYQs and 1–300 questions per institute custom test accurately. Monthly creation allowances remain plan-dependent.
- Follow the prompt's availability override for institute branding, printable papers and exam-screen choice despite Document A's older In build labels.
- No institutional prices, unlimited services, invented outcomes, fictional client cases or fake screenshots.

## Recommended navigation
Keep the four-item For institutes dropdown:
1. Overview → `/institutes`
2. Institute Plans → `/institutes/pricing`
3. Institute Use Cases → `/institutes/case-studies`
4. Request a Demo → `/institutes/request-demo`

The live B2B pricing link currently points to student pricing at `/#pricing`. The existing live overview is `/for-institutes`; the proposed pages currently return 404. Recommend a one-hop permanent redirect from the old overview and reconciliation of planned legacy child destinations, not duplicate pages.

Use cases will be explicitly illustrative because no verified published institute cases were found. Recommend suppressing student-offer banners/popups on B2B destinations only, preserving campaign behaviour elsewhere.

## Enquiry workflow
Reuse existing contact presentation, validation, protected storage and basic spam prevention. Add separate demo/quote classification, structured institute fields and bounded incoming attribution without altering RankUp referral handling.

Current general enquiries have no saved UTMs and no configured email notification. Confirm a monitored lead owner and receiving process before active sales-form launch. No CRM, calendar, turnaround deadline or submission destination is assumed. Receipt must mean stored enquiry, not booked meeting or generated quotation.

## Visual direction
Reuse existing typography, colours, header/footer and layout patterns. Prefer readable, benefit-led sections to technical inventories. Only use genuine approved product screenshots with personal data removed; omit images rather than simulate a real interface.

## Technical details and proposed sequence
1. Approve copy, labels, canonical consolidation, scoped campaign suppression, form fields and privacy/attribution approach; confirm lead ownership.
2. Build the four pages within existing TanStack Start routing and server-function content boundaries, with complete initial HTML and shared metadata patterns.
3. Add dedicated B2B validation and server handling using protected enquiry patterns; extend storage only as approved, with no public lead access.
4. Connect institute-only navigation/actions and verify desktop/mobile menus; do not change student acquisition paths.
5. Apply unique metadata, appropriate page/breadcrumb schema, self-canonicals without trailing slashes and registry-gated sitemap/indexation.
6. Run scoped tests and protected regressions. Separately authorise actual production deployment and verify live routes/forms/assets before declaring release complete.

## Acceptance criteria
- Four canonical pages return 200 with complete initial HTML; approved legacy redirects are permanent and one-hop.
- No institute action opens student pricing/checkout; homepage and RankUp behaviour remain unchanged.
- Exam availability, JEE-only inventory and custom-test bounds match approved facts.
- Demo/quote submissions validate and persist correct intent, qualification and attribution, then reach the approved monitored process.
- No personal data in public reads, URLs, logs or analytics; honest consent/receipt/error states.
- No invented commercial terms, customer evidence, screenshots or institutional endorsement.
- At 390px, 768px and 1440px: readable content, accessible menus/FAQs/forms, complete labels and no unintended overflow or overlaps.
- Relevant existing tests/homepage guard pass; protected content, routes, pricing and handoff unchanged.

## Decisions requiring approval or confirmation
- Institute Plans and Institute Use Cases labels.
- Canonical migration and legacy redirects.
- B2B-only student-campaign suppression.
- Proposed qualification fields and privacy/attribution handling.
- Monitored lead owner and notification/private-review process; production form verification.

**No implementation begins without explicit written approval. Plan approval does not authorise publication.** Missing screenshots may be omitted; missing monitored lead intake blocks an active sales-form launch.

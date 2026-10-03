# NEET inaugural offers and pricing rollout

## Outcome

Build the approved NEET commercial experience on `/neet/mock-tests` and `/neet/pricing`, extend the existing offer campaign system to NEET, and add accurate lower-funnel NEET pricing to the V3.1 homepage. JEE content and all protected academic/SEO systems remain unchanged.  
  
**Plan approved. Proceed with implementation with these final refinements:**

1. NEET popup must NOT appear on `/neet/mock-tests` or `/neet/pricing`. These are already commercial destination pages.
2. NEET announcement strip may appear on relevant NEET pages, but avoid duplicate promotional messaging on the offer page itself.
3. Popup remains once-per-session, dismissible, and must not compete aggressively with the diagnostic sticky CTA.
4. Homepage pricing must remain compact: ₹499 / ₹1,599 / ₹3,000 + ₹50 add-on + links to `/neet/mock-tests` and `/neet/pricing`. Keep the full comparison table off the homepage.
5. Keep all NEET prices, add-on values and calculations in one central commercial configuration. Derive ₹1,849 from ₹499 + 27 × ₹50 wherever practical instead of maintaining it independently.
6. Label the pricing appropriately as **Inaugural / Promotional** and preserve the terms qualification from the approved NEET offer document.
7. Everything else in the implementation plan is approved.

Proceed, then return the full validation report specified in the plan.

## Implementation

1. **Create one NEET commercial source of truth**
  - Add one typed NEET offer configuration containing the three packages, the ₹50 add-on price, the corrected ₹1,849 Starter-to-35-paper calculation, comparison rows, benefits, analysis areas, practice access, launch benefits, terms, campaign copy, and page metadata.
  - Apply the business override everywhere: any document wording based on ₹100 becomes ₹50; the old ₹3,199 total becomes ₹1,849.
  - Add focused tests asserting ₹499, ₹1,599, ₹3,000, ₹50, 27 add-ons, and ₹1,849.
2. **Build `/neet/mock-tests` as the product-led offer page**
  - Reuse the current JEE information-page and offer-block architecture, design tokens, package cards, responsive table treatment, and honest CTA rules.
  - Include the concise hero, featured Complete Bundle, three packages, comparison, ₹50 top-ups, common inclusions, analysis-after-every-paper, targeted practice, improvement cycle, launch benefits, terms, and a non-purchase closing action.
  - Add only confirmed source-document details; no invented validity, dates, outcomes, checkout, payment, login, or refund behavior.
3. **Build `/neet/pricing` as the decision-led comparison page**
  - Consume the same central package configuration rather than repeating prices.
  - Emphasize package comparison, access distinctions, ₹50 add-ons, ₹1,849 calculation, and inaugural terms.
  - Register both existing canonical URLs as built/indexable and give each unique commercial metadata, canonical, social metadata, and appropriate page schema through the existing SEO system.
4. **Extend the existing campaign system**
  - Generalize the existing announcement-strip and once-per-session popup components to resolve a JEE or NEET campaign by URL.
  - Preserve JEE copy, destinations, timing, and session behavior exactly.
  - Show NEET messaging only on NEET pages other than the offer page, linking to `/neet/mock-tests`; NDA gets no offer.
  - Keep the homepage free of competing announcement bars so the diagnostic-first opening remains intact.
5. **Add lower-funnel homepage pricing without disturbing V3.1**
  - Add one compact NEET pricing section late in the homepage journey, after product proof/resources and before the final conversion area.
  - Show the three approved NEET prices plus the ₹50 add-on, with `View NEET Offers` and `Compare Plans` internal links.
  - Keep `Start Free Diagnostic`, the chooser, sticky CTA, handoff attribution, and analytics instrumentation primary and unchanged.
6. **Update NEET discovery and commercial references**
  - Expose the now-built mock-test and pricing pages through existing NEET navigation/related-link systems where appropriate.
  - Audit the full repository for NEET pricing/package/top-up references and eliminate stale NEET ₹100 or ₹3,199 values without changing unrelated numeric content.

## Technical details

- Reuse `InfoPageContent`, the generic `/$platform/$subject/` route, offer blocks B50–B53, responsive `DataTable`, registry-driven indexation, and `PageFrame` campaign placement.
- Add only small NEET-specific presentation blocks where the existing prose/table blocks cannot express the analysis grid or improvement cycle cleanly; all consume the central configuration.
- Record the shared commercial-data rule in `AGENTS.md` and keep the existing Rank Sarthi/RankUp ownership boundary.

## Validation

- Verify `/neet/mock-tests`, `/neet/pricing`, `/neet`, and `/` at 390px and 1440px, including readable mobile comparisons and no horizontal overflow.
- Verify NEET strip and session popup scoping; verify JEE strip/popup and all JEE prices are byte-for-byte unchanged in their source data.
- Run exact commercial-rule tests, homepage guard, RankUp handoff tests, JEE/NEET regression scripts, syllabus-link audit, route/link checks, and browser console/runtime checks.
- Confirm repository-wide NEET stale-reference counts are zero for ₹100 and ₹3,199, while ₹50 and ₹1,849 appear in the approved commercial contexts.
- Confirm no PYQ, syllabus, sitemap implementation, robots.txt, canonical logic, or existing academic route was removed or modified outside the two registry status changes.
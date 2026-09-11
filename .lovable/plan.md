# Rank Sarthi Homepage Redesign

## Goal
Transform the existing homepage into a premium, emotionally compelling “Preparation Intelligence” experience for Indian JEE, NEET, and NDA aspirants. Preserve the current navigation, routes, block architecture, honest claims, responsive behavior, pricing, FAQ, and institute proposition.

## What will change

1. **Hero and first impression**
   - Recompose the opening into a strong editorial dark-navy experience with a prominent Indian aspirant image, clearer headline hierarchy, red primary action, gold supporting details, and a compact diagnostic preview.
   - Keep one clear H1 and expose the JEE, NEET, and NDA proposition immediately.

2. **Storytelling rhythm**
   - Reorder and visually consolidate the existing homepage blocks into a clearer journey: aspiration → product diagnosis → exam pathways → methodology → human trust → NDA flagship → parents and institutes → pricing → FAQ → final action.
   - Reduce the repeated “section plus card grid” feeling through alternating full-width editorial, product, image, diagram, and conversion treatments.

3. **Product and exam sections**
   - Strengthen the diagnostic interface demonstration so visitors can understand concept gaps, execution errors, time leaks, and next actions at a glance.
   - Retain the established JEE and NEET tracks while giving NDARankUp disproportionate flagship prominence.

4. **Trust without fabricated proof**
   - Keep all illustrative views and scenarios clearly labelled.
   - Use the existing supplied portraits, methodology, parent reassurance, educator review, and product depth instead of invented results, logos, rankings, or testimonials.

5. **Navigation, pricing, FAQ, and footer**
   - Preserve the current mega-menu behavior and route-aware links while refining its visual treatment to fit the redesigned homepage.
   - Retain pricing, institute messaging, FAQs, and the full footer ecosystem with improved visual hierarchy.

6. **Responsive quality and accessibility**
   - Ensure the page works cleanly at 1440px, 768px, and 390px with no overlap, clipped text, or horizontal overflow.
   - Preserve keyboard navigation, Escape behavior, semantic landmarks, alt text, reduced-motion support, and visible focus states.

## Technical details

- Keep the existing TanStack route, `T01` recipe, `B01–B24` registry contract, `PageFrame F1`, SEO metadata, and JSON-LD unchanged unless a visual block needs different ordering.
- Make focused presentation updates in the existing homepage components and semantic tokens; do not introduce another page framework or page-specific route system.
- Use existing local imagery first. Generate or add imagery only if the current assets cannot support the required composition.
- Preserve destination resolution so built routes remain clickable and unavailable product actions remain honestly disabled.
- Validate with the homepage guard, selective checks, and Playwright screenshots at desktop, tablet, and mobile sizes.

## Scope boundary

Only the homepage presentation and its shared header/footer styling are in scope. Academic pages, resource data, FreshnessWatch, T06 content, indexation states, and backend behavior remain untouched.

# V3.1 mobile compaction pass

## Goal
Reduce the 390px homepage from the measured 14,327px toward 11,000–12,000px without removing any of the 15 V3 sections or changing the diagnostic-first journey.

## Changes
- Rework **How It Works** into a compact four-step mobile layout communicating Choose → Diagnose → Understand → Act; retain the existing wider-screen presentation.
- Reduce mobile-only section padding, heading/content gaps, and card padding across all 15 sections while retaining clear visual separation.
- Make the existing diagnostic report visual scale naturally on mobile without cropping meaningful labels.
- Preserve score-pattern and student-situation horizontal swipers at about one card per viewport.
- Keep the comparison side by side where readable, the JEE/NEET/NDA examples as one visible tab panel, the ten-layer breakdown as a two-column grid, proof as a compact 2×2 grid, and Academic Team as a horizontal swiper.
- Leave desktop substantially unchanged except where shared spacing remains visibly excessive.

## Protected areas
No changes to hero messaging, CTA hierarchy, sticky CTA, chooser, RankUp handoff, attribution, analytics, academic content, PYQ data, syllabus content, routes, sitemap, canonicals, robots, or SEO metadata.

## Validation
- Measure page height before and after at 390px and 1440px.
- Capture full-page screenshots at both widths and inspect readability, card visibility, tabs, report scaling, sticky CTA, and overflow.
- Confirm all 15 sections remain present.
- Run the homepage guard, handoff tests, JEE/NEET regressions, and syllabus-link audit.
- Confirm the preview build and browser console are clean.

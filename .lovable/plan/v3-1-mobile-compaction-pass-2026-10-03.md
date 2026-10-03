# V3.1 mobile compaction pass

&nbsp;

Yes — this is the right V3.1 plan. I would approve it and let Lovable implement.

I would add only **two safeguards** before it runs:

> **Approved. Proceed with V3.1 mobile compaction.**
>
> Two additional rules:
>
> **1. Do not remove or materially shorten any restored V3 content just to hit the page-height target.**  
> If the page still lands above 12,000px after sensible compaction, keep the stronger storytelling and report the final measured height.
>
> **2. Preserve legibility over density.**  
> Do not make cards, diagnostic labels, faculty details, tabs, or the 10-layer breakdown so small that they become hard to read on a 390px screen.
>
> Everything else in the plan is approved.
>
> After implementation, return:
>
> - 390px height before/after
> - 1440px height before/after
> - full-page screenshots
> - exact sections compacted
> - confirmation all 15 sections remain
> - confirmation no content section was removed
> - handoff tests PASS/FAIL
> - homepage tests PASS/FAIL
> - JEE/NEET regressions PASS/FAIL
> - syllabus-link audit PASS/FAIL
> - console/build clean PASS/FAIL

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
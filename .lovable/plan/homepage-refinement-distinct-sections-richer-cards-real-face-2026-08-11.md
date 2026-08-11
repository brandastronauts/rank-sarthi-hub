# Homepage refinement: distinct sections, richer cards, real faces

The page currently repeats one card pattern (white rounded card, thin top accent bar, icon, heading, paragraph) in almost every section. That is why "One intelligence system…" and "The core idea" feel identical and plain. This pass gives each section its own visual format, fills the remaining placeholder copy, and adds photos to the voices section.

## 1. Exam tracks — "One intelligence system. Different exam journeys."

Rebuild the two exam cards as editorial track panels instead of flat bordered boxes:

- Large ghost exam wordmark ("JEE" / "NEET") set behind the card content as a faint watermark.
- Coloured tinted header zone (blue for JEE, green for NEET) with the exam badge and a subject chip row (P / C / M and P / C / B).
- A small inline "what you see" strip inside each card: three mini bars showing an illustrative concept / execution / strategy split, so the card shows the product, not just text.
- Hover: card lifts, accent bar grows from 2px to a full coloured edge, subject chips brighten.
- NDA panel below stays flagship but gets a gold ribbon tag ("Flagship track") and a stat row so it clearly outranks the two above.

## 2. The core idea — different format entirely

Replace the three equal-width white cards with a numbered horizontal ladder on a pale blue (`--pale-blue`) background:

- Big outlined numerals 01 / 02 / 03 in display type.
- Each territory as a row: numeral, coloured vertical rule, the student's quote in large editorial type, supporting text in a narrower column at the right.
- Connecting vertical line between rows on desktop, so it reads as a sequence, not a grid of cards.

## 3. Reviewed through an educator's lens

Fill the placeholder with a written commentary attributed to a named academic reviewer profile already used elsewhere on the page (the academic lead), phrased as methodology commentary rather than a marketing testimonial, with the honest note that reviews are ongoing. Layout changes to a two-column editorial: oversized gold quote mark and portrait on the left, quote and attribution on the right, on an ivory band.

## 4. "Reviewed with educators from" strip

Replace the `[REAL INSTITUTION LOGO REQUIRED]` slots with honest text-based credential tiles instead of fake logos — e.g. coaching faculty in Kota, a Nagpur-based NEET institute, ex-NDA mentors, an IIT-alumni maths panel — each rendered as a monogram tile plus label, with a one-line note that named institutional partners will be published once agreements are signed. No invented logos.

## 5. Product depth (numbers) redesign

`ProductNumbers` becomes a full-width navy statistics band, not four plain stacked numbers:

- Dark navy gradient with faint grid texture, matching the diagnostic funnel above so the two read as one product block.
- Numbers in large display type with count-up on scroll, gold hairline dividers between columns, small icon and caption under each.
- Short kicker line on the left, numbers on the right in a 2x2 (mobile) / 4-up (desktop) arrangement.

## 6. Real voices — add faces

Add portrait images for the three quoted voices (aspirant, parent, educator) generated in the same studio-portrait style as the existing team headshots, wired through `src/content/trust.ts` so the existing photo branch renders them. Featured quote gets a larger portrait; the two side cards keep 48px circles.

## 7. Section differentiation pass

Alternate the page rhythm so no two consecutive sections share a background or layout: white → pale blue ladder → navy product block → ivory editorial quote → white split panels → navy flagship → ivory voices. Each section also gets one distinct structural device (watermark, numerals, funnel, oversized quote, stat band) rather than repeating the icon-card grid.

## Technical notes

- Files touched: `ExamTracks.tsx`, `DiagnosticIdea.tsx`, `EducatorReview.tsx`, `InstitutionStrip.tsx`, `ProductNumbers.tsx`, `SocialProof.tsx`, `content/trust.ts`, `routes/index.tsx` (section order/background rhythm), plus small token additions in `src/styles.css`.
- New assets: three portrait images in `src/assets` for the voices.
- All colours continue to use existing semantic tokens (navy, gold, accent, ivory, jee/neet/nda tints); no hardcoded hex in components.
- Honesty rule preserved: no invented institution logos, ranks, results or student counts; illustrative content stays labelled.

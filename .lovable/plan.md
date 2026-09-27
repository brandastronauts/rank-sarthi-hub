# Academic team and faculty profile system

## Scope
- Build one reusable academic-profile model from the attached approved master document.
- Add exactly eight draft/noindex faculty records, seven supplied photos, and a Vinod Kumar initials fallback.
- Extend the existing About page with a grouped Academic Team section using short profiles.
- Add one dynamic `/about/faculty/$slug` page that renders all eight detailed profiles and returns the existing 404 for unknown slugs.
- Add subject reviewer pools and page-review state contracts without assigning or completing any page review.

## Public presentation
- Reuse Rank Sarthi’s existing page frame, typography, spacing, card, button, and breadcrumb styling.
- Suppress all pending qualifications, experience claims, institutions, ranks, patents, publications, outcomes, contact details, and other unsupported claims.
- Render only WebPage and BreadcrumbList structured data; do not add Person, Review, or rating schema.
- Link profiles only to built subject and syllabus destinations.

## Technical details
- Store the seven uploads through the project asset flow and keep `photo: null` for Vinod Kumar.
- Add eight built/noindex registry records under About so they appear in the human sitemap but not the XML sitemap.
- Add the reusable reviewer snippet and typed review states: `UNASSIGNED`, `REVIEWER_ASSIGNED`, `REVIEW_PENDING`, `REVIEWED`.
- Keep every existing page unassigned unless a later content update explicitly names a reviewer and version.
- Preserve the exact approved spelling `Gandharva Saxena` throughout data, UI, metadata, links, and alt text.

## Validation
- Verify eight unique profiles, cards, routes, titles, canonicals, noindex tags, one H1, seven images plus one fallback, and zero Person schemas.
- Check desktop and 390px layouts, keyboard links, alt text, overflow, console errors, internal links, human/XML sitemaps, and unknown-slug 404 handling.
- Run the homepage 111-point guard and JEE, NEET, NDA, and Tools regressions.

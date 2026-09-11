# J02: JEE Main 2026 and 2025 PYQ Year Pages

## Scope
Build exactly these two draft, noindex pages:
- `/jee/previous-year-papers/2026`
- `/jee/previous-year-papers/2025`

No homepage, PCM, JEE Advanced, NEET, NDA, navigation architecture, B47, FreshnessWatch, T06, CSS, or indexation changes. Shared JEE Main resource-data extraction, the two new `InfoPageContent` records, their two URL-registry activations, and parent related links are explicitly allowed within J02 scope.

## Implementation
1. **Shared JEE Main resource data**
   - Extract the accepted J01 2026 event rows into one reusable JEE Main resource-data module without changing their data.
   - Add the approved J02 2025 event rows and answer-key companions to that same module.
   - Expose year/session filters so the parent and both year pages consume one source of truth rather than duplicate inventories.

2. **Two data-driven pages**
   - Add two `InfoPageContent` records using the existing generic three-segment route, T10/T12 information recipe, and B47 resource library.
   - Render Session 1 and Session 2 as separate resource sections, with 19 exact events per year.
   - Preserve pending, official, reconstruction, answer-key, and analysis-blocked states exactly as supplied.
   - Add only registry-aware links to the parent and already-built companion pages.

3. **Registry and discovery**
   - Change exactly the two existing URL records to built, draft-backed, noindex entries with CollectionPage semantics.
   - Register the two information records.
   - Add parent links to the two live year pages using the existing related-link mechanism.
   - Let the human sitemap update from the registry; leave the XML sitemap unchanged.

4. **Validation**
   - Validate 2/2 routes, SSR 200, one H1, canonical, noindex, safe JSON-LD, event identities, 2025 19/9/10 counts, 2026 10 pending plus 9 official papers, and blocked analysis.
   - Test every active external CTA on parent, both year pages, and answer-key page for exact href, source label, new-tab behavior, and successful response.
   - Verify 1440px and 390px rendering, no overflow or console errors.
   - Run the 111-check homepage guard and light JEE/NEET/NDA route regressions, including the accepted NEET source-pending state.

## Expected architecture result
- New route component: NO
- New page-specific component: NO
- New B-block: NO
- B47 changed: NO
- New CSS: NO
- FreshnessWatch changed: NO
- T06 changed: NO
- PCM changed: NO
- NEET changed: NO
- Homepage changed: NO

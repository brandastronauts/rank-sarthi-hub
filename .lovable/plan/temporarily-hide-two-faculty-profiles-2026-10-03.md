# Temporarily hide two faculty profiles

## Scope
- Hide Prabhat Kumar and Vinod Kumar from the homepage and About academic-team lists.
- Remove both people from public faculty attribution and reviewer displays while preserving the existing internal assignment data.
- Keep both direct profile URLs available, but mark them `noindex` and exclude them from the XML sitemap.
- Leave the other six faculty profiles and all academic content unchanged.

## Validation
- Confirm both names no longer appear in public team or faculty-attribution UI.
- Confirm both profile URLs return 200 with `noindex` and self-canonical metadata.
- Confirm neither profile URL appears in the XML sitemap.
- Check the homepage, About page, and affected Chemistry pages for errors.

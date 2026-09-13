# Blog sample isolation

## Confirmed route ownership

- `blog.index.tsx` is the exact static `/blog` route and takes precedence over the generic `/$platform` route.
- `blog.$slug.tsx` exclusively owns `/blog/:slug`.
- The existing `/blog` registry record remains the authoritative hub record used for canonical, indexation, breadcrumbs, and site navigation.
- No second `/blog` content record or generic renderer will be added.

## Implementation

- Add provider-level environment selection: local sample records are available only when `import.meta.env.DEV` is true.
- In production before WordPress, use an empty provider that returns no articles and no slug matches.
- Keep the current CMS-portable provider contract so a future WordPress provider can replace the selected provider without changing presentation components.
- Keep the approved `/blog` heading, editorial introduction, and JEE/NEET/NDA links; show a neutral editorial-team message when the production provider is empty.
- Ensure sample slugs resolve normally in development but return the standard 404 in production.
- Update the WordPress handoff documents to state this release behavior.

## Verification

- Validate route generation and type safety without editing the generated route tree.
- Verify development `/blog` and one sample article remain available for design QA.
- Verify a production-mode provider exposes zero samples and returns no sample slug.
- Re-run homepage regression checks and focused blog metadata/schema checks.

# Rank Sarthi WordPress-Ready Blog Frontend

## Scope

Build the public blog experience only, preserving the accepted Rank Sarthi design and all existing exam content, navigation, indexation, and global layout.

- Reuse the existing `/blog` URL as the editorial hub.
- Add one generic dynamic route at `/blog/$slug` for all articles.
- Keep WordPress disconnected; use a small local placeholder dataset behind a provider interface.
- Keep every sample article and the existing blog hub `noindex, follow`.
- Leave the 357-record content registry unchanged; the dynamic article route is a route-tree capability rather than hundreds of fabricated registry entries.

## Build

### 1. Blog data boundary

- Add a platform-agnostic `BlogArticle` contract with structured, serialisable content nodes—never raw HTML.
- Support headings, paragraphs, ordered/unordered lists, blockquotes, tables, images, callouts, and safe inline links.
- Add nullable author/reviewer fields, review status, sources, related article slugs, related Rank Sarthi routes, SEO fields, status, and featured state.
- Define `BlogDataProvider` and implement only `LocalBlogDataProvider`.
- Add 6 concise records explicitly labelled in code as `DEVELOPMENT / DESIGN PLACEHOLDER DATA`; use existing local imagery and no invented people, exam facts, dates, or publication history.

### 2. Blog home at `/blog`

- Replace the current generic information-page rendering with a dedicated blog hub route while preserving `SiteHeader`, `SiteFooter`, `PageFrame`, tokens, type scale, cards, buttons, and responsive rules.
- Render the requested breadcrumb, H1, concise introduction, client-side category filter, featured article, latest grid, JEE/NEET/NDA sections, preparation guides, and exam-routing CTA.
- Filter the loaded dataset in place without category archive URLs.
- Resolve JEE, NEET, and NDA calls to action against existing built routes only.
- Render a neutral empty state if the provider returns no articles.

### 3. Generic article route at `/blog/$slug`

- Load by slug through the provider and throw the existing route-level 404 for an unknown or unavailable article.
- Render one reusable `BlogArticle` view with the existing site frame, custom blog breadcrumbs, editorial masthead, responsive featured image, metadata, optional review-pending state, safe structured body, optional key takeaways, sources, related articles, and registry-validated internal resources.
- Generate the table of contents from H2/H3 nodes; keep it sticky on desktop and place it in an accessible collapsed disclosure on mobile.
- Make article tables horizontally scrollable and long content safely wrap at 390px.
- Omit author, reviewer, source, takeaways, and related sections whenever their real data is absent.

### 4. Reusable blog presentation

Create focused, blog-specific reusable pieces:

- `BlogCard`
- `BlogArticle`
- `BlogContentRenderer`
- `TableOfContents`
- Blog breadcrumbs/category filters as small supporting pieces where useful

No article-specific route files, components, stylesheet, or alternate visual system will be created.

### 5. SEO and structured data

- Blog home: unique metadata, Rank Sarthi canonical, `CollectionPage`, and `BreadcrumbList`.
- Sample article: data-driven metadata, canonical `https://ranksarthi.com/blog/{slug}`, explicit `noindex, follow`, `Article`, and `BreadcrumbList`.
- Include publication/updated/image data only when present in the article record.
- Emit no `Person`, `FAQPage`, `Review`, `AggregateRating`, `Product`, or `Offer` schema.
- Do not add sample articles to the XML sitemap or change global indexation policy.

### 6. WordPress handoff documents

Create:

- `Rank_Sarthi_WordPress_Blog_Field_Mapping.md` with frontend-to-WordPress fields, required/optional status, validation, and fallback behavior.
- `Rank_Sarthi_WordPress_API_Contract.md` covering future list/detail requests, pagination, filters, response shape, loading/error states, missing data, draft handling, and duplicate-content protection for the future CMS hostname.

The documents will describe the future adapter only; no WordPress client, SDK, request, environment variable, or API code will be added.

## Technical details

- Use flat TanStack routes `blog.index.tsx` and `blog.$slug.tsx`; do not edit the generated route tree.
- Keep the existing `/blog` registry record as the hub authority and avoid registering placeholder article slugs.
- Use `Link` for internal dynamic navigation and ordinary external anchors with `target="_blank"` and `rel="noopener noreferrer"`.
- Validate related internal resources with the existing registry and suppress blocked/planned destinations.
- Use semantic `main`, `article`, `header`, `nav`, `section`, lists, tables, and time elements.
- Reuse existing local images with descriptive alt text and lazy-load below-the-fold media.

## Verification

- Check `/blog` plus at least three sample slugs at 1440px and 390px.
- Confirm 200 responses, exactly one H1, working filters and TOC anchors, no horizontal overflow, no console errors, and unchanged header/footer/navigation.
- Confirm an unknown slug renders the existing 404 rather than an empty article shell.
- Verify every internal link resolves and no blocked route becomes clickable.
- Inspect canonicals, robots tags, `CollectionPage`, `Article`, and `BreadcrumbList`; confirm forbidden schema types are absent.
- Run focused TypeScript checks and the existing homepage regression guard.
- Report the requested architecture checklist, exact changed files, and credits consumed, then stop.

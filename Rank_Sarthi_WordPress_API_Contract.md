# Rank Sarthi WordPress Blog API Contract

This document defines the future provider boundary. It does not connect WordPress or prescribe a WordPress SDK.

## Transport

- CMS host: preferably `https://cms.ranksarthi.com`.
- Public canonical host: always `https://ranksarthi.com`.
- Requests use HTTPS and return JSON.
- The frontend adapter validates and normalises every response before presentation components receive it.

## List articles

`GET {CMS_ORIGIN}/wp-json/wp/v2/posts`

Expected query capabilities:

- `page`: positive integer, default `1`.
- `per_page`: bounded positive integer, suggested maximum `20`.
- `categories` or approved taxonomy filter.
- `status=publish` for public production requests.
- `_embed` when featured media or verified author data is required.

The provider returns:

```text
items: BlogArticle[]
pagination:
  page: number
  perPage: number
  totalItems: number
  totalPages: number
```

WordPress pagination headers such as `X-WP-Total` and `X-WP-TotalPages` are normalised into the `pagination` object.

## Get article by slug

`GET {CMS_ORIGIN}/wp-json/wp/v2/posts?slug={encodedSlug}&status=publish&_embed=1`

- Exactly one validated result becomes a `BlogArticle`.
- No result returns `undefined`, allowing the frontend route to use the existing 404 experience.
- Multiple results for one slug are a data-integrity error and must not be silently selected.

## Normalised article shape

The provider supplies the `BlogArticle` contract documented in `Rank_Sarthi_WordPress_Blog_Field_Mapping.md`. Presentation components consume only this normalised shape and never WordPress response objects.

## Loading and error states

- List loading: preserve page structure and use a restrained accessible loading state.
- Empty list: show the neutral editorial-library state, not a broken grid.
- Detail loading: use the route's pending experience without rendering an empty article shell.
- Not found: use the existing site 404.
- Network or validation error: use the existing route error experience; do not display raw provider messages.
- A failed related-article request must not prevent the primary article from rendering.

## Missing data

- Missing image: use an approved shared editorial placeholder or an image-free card variant; never show a broken image.
- Missing image alt: do not render that image until descriptive alt text exists.
- Missing author/reviewer: omit the person UI and Person schema.
- Missing dates: omit the corresponding date row and schema property.
- Missing sources, takeaways, or related items: omit the section.
- Invalid internal route: remove the action after registry validation.

## Draft and publication treatment

- Public production lists and detail requests expose only approved published records.
- Draft, pending, private, trashed, and scheduled posts are not public.
- Preview support, if added later, must require authenticated server-side access and must remain noindex.
- The six local sample articles are exposed only by `LocalBlogDataProvider` when `import.meta.env.DEV` is true.
- Before WordPress is connected, production uses an empty provider: `/blog` shows the neutral editorial-team state and every sample `/blog/{slug}` returns the normal 404.
- `noindex` is supplementary protection and is not the access control for local sample content.
- A future WordPress provider replaces the selected provider at this boundary without changing presentation components.

## Route ownership

- The dedicated `/blog` index route owns hub rendering and the dedicated `/blog/{slug}` route owns article rendering.
- The generic first-level resolver does not render `/blog`; the exact static route takes precedence.
- The frozen `/blog` URL registry record remains authoritative for hub canonical, indexation, breadcrumbs, and navigation.

## Security and sanitisation

- Validate response shape before mapping.
- Convert WordPress body content to the supported structured block allow-list.
- Never inject `content.rendered` with `dangerouslySetInnerHTML` unless a separately reviewed sanitizer boundary is introduced.
- Permit external links only with safe protocols; external rendering uses `target="_blank"` and `rel="noopener noreferrer"`.
- Keep credentials and privileged CMS requests server-side.

## Duplicate-content protection

WordPress is content management only. Public WordPress post rendering on the CMS hostname must be disabled, access-restricted, or marked `noindex`. The only public canonical for an article is `https://ranksarthi.com/blog/{slug}`; the CMS URL must never be emitted as canonical by the Rank Sarthi frontend.
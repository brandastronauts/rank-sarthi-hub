# Rank Sarthi WordPress Blog Field Mapping

This specification describes a future adapter from a headless WordPress CMS to the Rank Sarthi `BlogArticle` contract. WordPress is not connected in the current implementation.

The six local sample records are development-only. Production uses an empty provider until WordPress is connected, so no sample cards render and sample slugs return the normal 404. Replacing the provider does not require changes to the frontend components.

| Frontend field | WordPress field | Required | Validation | Fallback |
|---|---|---:|---|---|
| `id` | `id` | Yes | Stable non-empty string or number converted to string | Reject record |
| `title` | `title.rendered` | Yes | Plain text after safe entity decoding; non-empty | Reject record |
| `slug` | `slug` | Yes | Lowercase URL-safe segment; unique | Reject record |
| `excerpt` | `excerpt.rendered` or custom plain-text excerpt | Yes | Sanitise and strip unsupported markup; concise plain text | Derive a bounded plain-text excerpt from approved body content |
| `content` | `content.rendered` mapped into structured blocks | Yes | Parse and sanitise against the supported block allow-list; never pass arbitrary HTML to React | Reject article body and return an error state |
| `featuredImage` | `_embedded.wp:featuredmedia[0].source_url` or media endpoint | Optional | HTTPS image URL from an approved host | Use the shared editorial placeholder or omit the image where layout permits |
| `featuredImageAlt` | Media `alt_text` | Required when image exists | Non-empty descriptive plain text | Omit the image until alt text is supplied |
| `primaryExam` | Custom taxonomy `primary_exam` | Yes | `JEE`, `NEET`, `NDA`, or `GENERAL` | `GENERAL` only when the editorial record explicitly has no exam scope |
| `category` | WordPress category or custom taxonomy | Yes | One supported frontend category | Reject unsupported value or map through an approved taxonomy table |
| `tags` | WordPress tags | Optional | Plain-text array, deduplicated | Empty array |
| `publishedAt` | `date_gmt` | Optional for drafts; required for published posts | Valid ISO-8601 UTC timestamp | Omit for drafts; reject published record without a valid value |
| `updatedAt` | `modified_gmt` | Optional | Valid ISO-8601 UTC timestamp; not earlier than publication | Omit when absent or identical to publication |
| `author` | `_embedded.author` plus verified profile metadata | Optional | Emit only after Rank Sarthi identity verification | `null`; omit UI and Person schema |
| `reviewer` | Custom reviewer relation | Optional | Emit only after Rank Sarthi identity and review verification | `null`; omit UI and Person schema |
| `reviewStatus` | Custom field `review_status` | Yes | `UNASSIGNED`, `REVIEW_PENDING`, or `REVIEWED` | `UNASSIGNED` |
| `sources` | Structured custom field/repeater | Optional | Name, approved source type, valid HTTPS URL, explicit official flag | Empty array; hide section |
| `relatedArticleSlugs` | Related-post relation | Optional | Existing published article slugs only | Empty array; hide section |
| `relatedInternalRoutes` | Structured Rank Sarthi URL field | Optional | Must resolve as built in the frontend route registry | Remove invalid, planned, or blocked routes |
| `seoTitle` | SEO plugin title field or custom field | Yes | Plain text, unique and concise | Approved article title plus ` | Rank Sarthi` |
| `metaDescription` | SEO plugin description or custom field | Yes | Plain text and concise | Approved excerpt |
| `canonicalOverride` | SEO plugin canonical field | Optional | HTTPS URL; allow only approved Rank Sarthi canonical overrides | `https://ranksarthi.com/blog/{slug}` |
| `featured` | Custom boolean | Optional | Boolean; at most one active featured article | `false` |
| `status` | WordPress `status` | Yes | Map only approved `draft` and `publish` states | Treat unknown status as draft and do not expose publicly |

## Structured body mapping

The adapter must map approved WordPress blocks into the frontend union: heading (H2/H3), paragraph, ordered/unordered list, blockquote, table, image, and callout. Inline formatting supports text, bold, italic, and validated links. Scripts, embeds, event handlers, inline styles, iframes, forms, and unrecognised HTML must be removed or rejected.

## Public URL ownership

The frontend canonical is `https://ranksarthi.com/blog/{slug}`. A future CMS should use `cms.ranksarthi.com`, and its public post rendering must be disabled or set to `noindex` so it cannot compete with Rank Sarthi's public article URL.
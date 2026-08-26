# Stage A1 — Milestone 1 (Foundation) — corrections applied

Approved corrections are folded in below. I'm still in plan mode, so I cannot edit source yet — approve this card (or switch to build mode) and I'll execute Milestone 1 only, then stop and report.

Locked: `https://ranksarthi.in`; 357 URLs (Main 22 / JEE 145 / NEET 122 / NDA 68); homepage JSON-LD = WebSite + Organization only; no test/auth engine; no fabricated proof, metrics, reviewers, exam data or formulas.

## Corrections now baked into the architecture

1. **5 rendered URLs, 4 template proofs** — `/`, `/nda`, `/jee/syllabus`, `/jee/physics/electrostatics`, `/jee/physics/current-electricity`.
2. **Page state ≠ component flags.** `buildStatus: planned|building|built` and `indexation: index|noindex|blocked` live on the URL record. Proof flags (`hasInstitutionLogos`, `hasTestimonials`, `hasReviewers`, `hasRealScreenshots`, `testEngineLive`…) only decide whether an optional block renders. Sitemap inclusion = `buildStatus === 'built' && indexation === 'index'`.
3. **No `/coming-soon` fallback.** `destinations.ts` returns a discriminated union: `{kind:'live', href}` | `{kind:'external', href}` | `{kind:'disabled', reason}` | `{kind:'hidden'}`. Hidden destinations remove the CTA entirely; no thin placeholder URLs. The existing `/coming-soon` route stays out of the registry and will be retired as nav links move onto real destinations.
4. **All 357 URL records frozen now** in `src/content/urls.ts` with `url, name, template, platform, section, priority, parent, schemaType, buildStatus, indexation, contentOwner, sourceRequirement, lastVerified?`. Registry architecture only — no new pages.
5. **Unique-content gate.** Electrostatics and Current Electricity ship `indexation: 'noindex'` and stay out of the sitemap until the 7-point gate passes with genuine verified content. No invented academic facts to make the pilot indexable.
6. **Official B-numbers only.** A1 uses B01, B02, B03, B04, B09, B10, B21 FAQ, B23 Breadcrumb + Jump Nav, B25 Structured Data Table, B26 Syllabus Explorer, B27 Weightage/Trend Table, B28 Chapter Priority Map, B29 Formula/Concept Sheet, B30 Common Mistakes, B31 Inline Diagnostic CTA, B32 PYQ Browser, B33 PYQ Trend Analysis, B36 Related Content Rail, B37 Author/Reviewer/Sources Box. Anything smaller is an unnumbered primitive.
7. **Empty proof blocks stay unbuilt** (B05, B07, B44, B45): types + recipe slots only; `RecipeRenderer` omits any block whose data is absent.
8. **No HTML strings.** Content uses a structured rich-text node format (`{type:'paragraph'|'list'|'note'|'heading', ...}`) rendered to semantic server HTML — CMS-portable, no `dangerouslySetInnerHTML`.
9. **ChapterContent strengthened** — PYQ entries carry `year, paper, references?, sourceRef, rightsStatus, sourceType, note?`; trends carry `label, value, analysisWindow, sourceRefs, methodology, confidence, lastVerified`; formulas carry `expression/latex, meaning, variables, units?, useWhen, commonTrap?, accessibleText`. Absent until verified.
10. **Platform route safety** — `$platform` resolves against `platforms.ts`; a platform whose `buildStatus !== 'built'` throws `notFound()` and is never in the sitemap. Only `/nda` is built in A1.
11. **JSON-LD safety** — root WebSite+Organization; BreadcrumbList non-root; T02 CollectionPage; T05 CollectionPage+ItemList; T06 Article+LearningResource. `author`/`reviewedBy` emitted only for real verified people on valid types.
12. **Internal links** from the structured graph (up / lateral / forward), server-rendered anchors, orphan check at build. No footer matrices.
13. **Visual DNA preserved** — the approved homepage is componentised, not redesigned. QA at 1440/1280/1024/768/430/390/360; primary QA URL `/jee/physics/electrostatics`; if a font/image dependency caps Lighthouse, I report the exact bottleneck instead of degrading the design.

## Milestone 1 — exact deliverables

| Area | Files |
|---|---|
| Tokens | `src/styles.css` — exact hexes (Navy 950 `#09163E`, Navy 900 `#101F4C`, Navy 800 `#1E264B`, Red `#B93024`, Red hover `#9D281F`, Gold `#CCA760`, Ivory `#FBF7F0`, Ice `#F1F7FD`, Ink `#141A2B`, Muted `#667085`, Border `#E6E9EF`, Success `#277A52`, Warning `#C57B20`), 1240px container, type/radius/shadow scale |
| Registry | `src/content/urls.ts` (357 records, generated + committed), `src/content/registry.ts` helpers (`getUrl`, `isIndexable`, `sitemapUrls`, `childrenOf`, orphan check) |
| Types | `src/content/types.ts` — `UrlRecord`, `RichTextNode`, `ChapterContent`, `PlatformData`, `ExamData`, `SubjectData`, `SyllabusTree`, `Person`, `SourceRef`, `PageMeta`, `LinkContract` |
| Data stubs | `site.ts`, `platforms.ts` (nda built; jee/neet planned), `sources.ts`, `people.ts` (empty), `flags.ts`, `destinations.ts` |
| Recipe engine | `src/lib/recipe.tsx` — `PageRecipe`, block registry, `RecipeRenderer` with optional-block omission |
| SEO | `src/lib/seo.ts` (`buildHead`), `src/lib/schema.ts` (JSON-LD builders with guards) |
| Shell | `components/shell/PageFrame.tsx` (F1/F2/F3), `Breadcrumbs.tsx` + `JumpNav.tsx` (B23); existing header/footer wired to registry + destinations |
| Content render | `components/content/RichText.tsx` |

Note: the 357-row registry file was already generated from the workbook during planning (`src/content/urls.generated.ts`); Milestone 1 finalises it as `src/content/urls.ts` with the typed record shape.

## Milestone 1 stop report will contain

what was built, files changed, credits consumed, issues found — then I stop for your go-ahead on Milestone 2 (T01 + T02).

Estimated Milestone 1: 8–12 tasks, ~12–18 credits (within the 30/45/65 Stage A1 envelope).

## Absolute success test (Milestone 3)

Current Electricity = 1 ChapterContent record + 1 registry row; zero new route components, zero copied markup, zero custom sections, zero design changes.

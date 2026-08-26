# Stage A1 — Proof of System (4 pages)

Locked: canonical host `https://ranksarthi.in`; inventory 357 (Main 22 / JEE 145 / NEET 122 / NDA 68); homepage JSON-LD = WebSite + Organization only (no FAQPage markup); no test/auth engine in A1; zero fabricated proof, metrics, reviewers, exam data or formulas.

## 1. File architecture

```text
src/
  styles.css                 tokens (@theme): navy950/900/800, red, gold,
                             ivory, ice, ink, muted, border, success, warning,
                             type scale, container 1240, radius, shadow 0-3
  content/
    site.ts                  brand, canonical host, org/website JSON-LD source
    urls.ts                  URL registry (357 rows, seeded with A1 rows)
    platforms.ts             jee | neet | nda (theme accent, nav, promise)
    exams.ts                 exam facts + official source refs
    subjects.ts              subject hubs per platform
    syllabus/jee.ts          syllabus tree (unit -> chapter -> topics)
    chapters/
      schema.ts              ChapterContent type + zod validator
      jee-physics/electrostatics.ts
      jee-physics/current-electricity.ts   (proof record, data only)
      index.ts               registry: slug -> record
    people.ts                reviewers/authors (empty until real; flagged)
    sources.ts               official source refs (UPSC/NTA/JAB...)
    links.ts                 internal-link graph helpers (up/down/lateral)
    flags.ts                 feature/proof flags
  lib/
    seo.ts                   buildHead(recipe) -> meta/links/scripts
    schema.ts                JSON-LD builders per page family
    recipe.ts                PageRecipe type + <RecipeRenderer />
  components/
    shell/  SiteHeader SiteFooter Breadcrumbs JumpNav PageFrame(F1-F5)
    blocks/ B01..B47 (only A1 subset built), each with typed props
  routes/
    index.tsx                          T01  /
    $platform.index.tsx                T02  /nda (also /jee /neet later)
    jee.syllabus.tsx                   T05  /jee/syllabus
    $platform.$subject.$chapter.tsx    T06  chapter engine
    sitemap[.]xml.tsx                  generated from urls.ts
```

Existing homepage components are refactored into `blocks/`, not rewritten.

## 2. Exact routes (A1)

| Route file | URL | Template | Frame |
|---|---|---|---|
| `index.tsx` | `/` | T01 | F1 brand |
| `$platform.index.tsx` | `/nda` | T02 | F2 platform |
| `jee.syllabus.tsx` | `/jee/syllabus` | T05 | F3 search |
| `$platform.$subject.$chapter.tsx` | `/jee/physics/electrostatics`, `/jee/physics/current-electricity` | T06 | F3 |
| `sitemap[.]xml.tsx` | `/sitemap.xml` | — | — |

All prerendered from the URL registry. Max depth 3, lowercase-hyphen slugs.

## 3. Stage-A1 blocks only

Build now (18): B01 Brand Hero, B02 Search Hero (answer-first), B03 Exam Snapshot, B04 Preparation Intelligence Strip, B06 Product Demo Canvas, B08 Diagnostic Pillars, B09 Exam Ecosystem Tiles, B10 NDA Flagship Band, B12 Methodology Band, B13 Depth Ladder, plus the data/academic set needed by T05/T06: Syllabus Table, Jump Nav, Concept Blocks, Formula Table, PYQ/Trend Table, Common-Mistakes list, Source & Method Box + Reviewer Bar, Related Learning Path, Next Best Action CTA, FAQ (semantic only).

Contract-only (rendered as nothing until data exists): B05 institution logos, B07 editorial review quote, results/toppers, case studies, parent quotes, real product screenshots. Each is a real component whose props are `undefined` → renders null, so later data is a content change.

Not built in A1: remaining ~25 blocks (B2B, tools, event, editorial, pricing variants). The block index and prop conventions are established so they slot in with no refactor.

## 4. Content schemas (core shapes)

```ts
type ChapterContent = {
  exam: 'jee-main'|'jee-advanced'|'neet'|'nda';
  platform: 'jee'|'neet'|'nda';
  subject: string; chapter: string; slug: string;
  canonicalIntent: string;
  directAnswer: string;                    // 40-80 words, in HTML
  prerequisites: Ref[]; syllabusMapping: SyllabusRef[];
  conceptBlocks: { heading: string; body: string; note?: string }[];
  formulas?: { expression: string; meaning: string; useWhen: string }[];
  pyq?: { year: number; paper: string; count?: number; note?: string }[];
  trends?: { label: string; value: string; method: string }[];  // needs SourceRef
  commonMistakes?: { pattern: string; why: string; fix: string }[];
  diagnosticCta: { label: string; href: string; context: string };
  relatedChapters: Ref[];
  sources: SourceRef[]; reviewer?: PersonRef;
  updatedAt: string; metadata: PageMeta; schema: SchemaSpec;
  internalLinks: LinkContract; flags?: Partial<ProofFlags>;
};
```

Plus `PlatformData`, `ExamData`, `SubjectData`, `SyllabusTree`, `Person`, `SourceRef`, `UrlRecord {url, template, platform, priority, schema, parent, indexation}`, `PageMeta {title, description, canonical, og}`. All zod-validated at build so a bad record fails the build instead of shipping thin HTML. Field names are CMS-shaped (flat, serialisable) so a headless CMS can later feed the same types.

## 5. PageRecipe

`PageRecipe = { frame: F1..F7, blocks: BlockSpec[], schema: SchemaSpec, links: LinkContract, indexation }`. A route resolves data → builds a recipe → `<RecipeRenderer/>` maps specs to components. Templates are declarative recipe files (`recipes/T01.ts` … `T06.ts`), so a new template is a recipe + data, not new markup.

## 6. SSR / prerender

TanStack Start SSR with static prerender of every registry URL; loaders read typed in-repo data (no client fetch). No indexable content behind `useEffect`, hash state or accordions. Only interactive affordances (jump-nav highlight, table filters) hydrate, and their content is present in HTML first.

## 7. SEO / metadata / schema

Per-route `head()` produces unique title/description, self-referencing canonical on `https://ranksarthi.in/...`, og:title/description/url/type, twitter:card. JSON-LD builders: root WebSite+Organization; BreadcrumbList on every non-root page; T02 CollectionPage; T05 CollectionPage+ItemList; T06 Article + LearningResource + BreadcrumbList, with `author`/`reviewedBy` emitted only when a real person exists. `dateModified` from `updatedAt`. `noindex` for any page failing the unique-content gate. `/sitemap.xml` generated from `urls.ts`, split by platform; `robots.txt` gets the sitemap directive.

## 8. Internal linking

`links.ts` derives up/down/lateral links from the data graph (chapter → subject/syllabus/platform, chapter ↔ related chapters, syllabus → all chapters). Rendered as plain `<a>`/`<Link>` with descriptive anchor text inside designed blocks — no footer keyword walls. A build-time check flags orphan URLs and broken internal targets.

## 9. Mobile

Mobile-first token scale; blocks re-compose rather than shrink (hero text-first, syllabus tables → stacked disclosure rows, jump nav → horizontal scroll / "On this page"). QA at 1440 / 1280 / 1024 / 768 / 430 / 390 / 360 with screenshots; ≥44px targets; sticky-header scroll-margin on anchors.

## 10. Feature flags

`flags.ts` exports proof/product flags (`hasInstitutionLogos`, `hasTestimonials`, `hasRealScreenshots`, `hasReviewers`, `testEngineLive`, `toolsLive`). Blocks read flags; false → block does not render and its URL is excluded from the sitemap. CTAs pointing at unbuilt product resolve through one `destinations.ts` map (currently `/coming-soon`), so switching to the real app is a one-line change.

## 11. Intentionally unbuilt in A1

Mock-test/PYQ attempt engine, auth, database, payments, tools/predictors, event pages, B2B pages, editorial pipeline, pricing page, the other ~25 blocks, NEET/JEE platform hubs (`/neet`, `/jee` come free from the `$platform` route later but are not populated), and all proof modules pending real data.

## 12. Effort

~28–42 agent messages/tasks.

## 13. Stage A1 credit range

**Low 30 · Expected 45 · High 65.** Confidence MEDIUM-HIGH (scope is fixed and data-light). Cloud/runtime cost in A1: effectively zero — no database, no auth, no AI; static prerendered pages only.

## 14. Acceptance checklist

1. `/jee/physics/current-electricity` exists after adding **one data file + one registry row** — no new route, markup, or design work.
2. All four pages render full content in `curl` HTML (answer, syllabus tables, concept/formula/PYQ sections).
3. Unique title/description/canonical/OG per URL; valid JSON-LD per page family; breadcrumbs visible + marked up.
4. Zero fabricated facts: any unsourced number is absent, not invented; reviewer bar hidden while `hasReviewers` is false.
5. Responsive pass at all seven widths; Lighthouse mobile ≥90 performance and ≥95 accessibility on `/jee/physics/electrostatics`.
6. `/sitemap.xml` lists exactly the built, indexable URLs; no orphan or broken internal link.
7. Tokens match the design system hex values exactly; four pages read as one brand with four densities, not four templates.
8. Build fails if a chapter record violates the schema.

## 15. Build order

1. Tokens in `styles.css` + type scale.
2. `flags.ts`, `site.ts`, `urls.ts` registry + `destinations.ts`.
3. Shell: header/mega-menu, footer, breadcrumbs, jump nav, PageFrame F1–F3.
4. `recipe.ts` + `seo.ts` + `schema.ts` foundations.
5. Refactor existing homepage into blocks; ship T01 via recipe.
6. `platforms.ts`/`exams.ts` + B03/B09/B10; ship T02 `/nda`.
7. Syllabus schema + data blocks; ship T05 `/jee/syllabus`.
8. `ChapterContent` schema + validator + academic blocks; ship T06 Electrostatics.
9. Add Current Electricity as data only — run acceptance test 1.
10. sitemap.xml, robots, link-graph/orphan check.
11. Responsive + accessibility pass at seven widths.
12. Acceptance-checklist run and credit-burn report for recalibrating Options B–D.

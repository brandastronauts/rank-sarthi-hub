# Rank Sarthi — Architecture Audit & Lovable Credit Plan

Planning only. No code will be written until you approve.

## 1. Executive verdict

**YES, WITH CONDITIONS.** The current stack (TanStack Start, SSR + static prerender on Cloudflare, Tailwind tokens) already satisfies the workbook's hard rule: "ALL pages must be server-rendered or static; no client-only rendering of body content." The conditions:

1. Content must live in structured data, not 357 hand-written pages.
2. Real content (chapter data, PYQ sets, exam facts, reviewers) must be produced by your team, not by the AI. Lovable builds the machine; it must not invent exam facts.
3. Interactive tools (rank/college predictor, score calculator) need real formulas/datasets before they are built.
4. Proof modules (results, toppers, institution logos, testimonials) stay unbuilt until genuine, consented content exists.

**Audit confirmations.** Workbook: 358 rows (357 URLs) — Main 22, JEE 145, NEET 122, NDA 68; P1 124 / P2 215 / P3 18; sections include JEE chapters 105 (Phy 30, Chem 30, Maths 30, Adv 15), NEET chapters 97 (Bio 38, Chem 30, Phy 29), NDA topics 25 + 15 "Unique" (SSB/physical/wings) + 12 PYQ/events, plus B2B 4, Legal 4, Resources 4. Templates T01–T29 with per-template intent, section flow, schema, internal-link contract, mobile rules and "do not ship" lists. Design system: tokens (Navy 950 #09163E, Action Red #B93024, Gold #CCA760, Ivory #FBF7F0, Ice #F1F7FD, Ink #141A2B), Plus Jakarta Sans + Inter scale, 1240 container / 12-col grid, 390–430px mobile QA, 7 page frames F1–F7, blocks B01–B47, per-template block recipes.

**Contradictions / gaps that must be resolved before build:**
- Domain: workbook says `ranksarthi.com`, your brief and current deploy say `ranksarthi.in`. Pick one canonical host.
- Dev Notes say "NDA (91 pages) first"; the locked inventory has 68 NDA URLs. Stale count.
- Dev Notes assign `FAQPage` to the homepage; the architecture doc explicitly says do not build strategy on FAQ rich results. Architecture doc wins.
- "212 pages use ONE chapter template" vs the doc's unique-content gate — each chapter URL still needs genuine per-chapter data or it must not be published.
- Missing: chapter-data source and owner, PYQ licensing/format, predictor formulas, whether mock tests are attempted on-site (needs auth + DB) or link out to the app, reviewer roster, Hindi/vernacular decision, analytics event spec destination.

## 2. Why this looks bigger than it is

357 URLs ≈ **29 templates + ~47 blocks + one content schema**. 202 chapter/topic URLs are one template fed by rows. Realistic *coded* surface: ~10 route files, ~45 block components, ~8 data collections. The heavy lifting is content authoring, which is not a Lovable cost.

## 3. Recommended technical architecture

```text
design tokens (styles.css @theme)
  -> global shell (header/mega-menu, footer, breadcrumbs, F1-F7 frames)
    -> block library B01-B47 (typed props, no page-specific copy)
      -> template recipes T01-T29 (block sequence + schema + link contract)
        -> content layer (typed data)
          -> file routes + dynamic $param routes, prerendered
            -> 357 crawlable URLs + split sitemaps
```

**Content location — hybrid, deliberately:**
- **In-repo typed TS/MDX** for everything structural and slow-moving: chapter records, syllabus trees, exam facts, template recipes, internal-link graph, redirects. Git-reviewable, diffable, prerenderable, zero runtime cost, and your developers can bulk-edit 200 chapters in one PR.
- **Lovable Cloud (Postgres)** only for things that need writes or freshness: leads/demo forms, resource downloads, newsletter, later mock-test attempts/auth, and exam-event freshness rows (dates, answer-key status) fetched at build/ISR time.
- **No third-party CMS at launch.** Add a headless CMS only when non-technical editors publish weekly (T26 editorial). Design the content schema now so a CMS can back it later without touching the blocks.

Every page renders from a single `PageRecipe` object, so the four "sites" are one platform with per-platform theming.

## 4. SEO capability confirmation

Supported by this architecture, per URL: prerendered HTML, unique title/description via route `head()`, self-referencing canonical, per-route OG/Twitter, JSON-LD by page family (WebSite+Organization root, BreadcrumbList everywhere, Article/LearningResource on chapters, CollectionPage+ItemList on hubs, SoftwareApplication on tools, Person for reviewers), split XML sitemaps per platform generated from the URL registry, robots.txt, semantic H1–H3, visible + marked-up breadcrumbs, real `<a href>` internal links from the link graph, `noindex` rules for thin/utility/proof-pending pages, image/font budget for CWV, WCAG AA states, 390/430px QA, Search Console verification. Zero client-only indexable content.

## 5. Pilot / proof-of-system scope (build this first)

Nine pages that exercise every frame, density mode and data path:

| # | Template | Example URL | Proves |
|---|---|---|---|
| 1 | T01 Brand Homepage | `/` | F1, brand blocks, tokens (largely exists) |
| 2 | T02 Platform hub | `/nda` | F2, ecosystem tiles, exam snapshot |
| 3 | T05 Syllabus | `/jee/syllabus` | F3 dense data, jump nav |
| 4 | T06 Chapter (data-driven) | `/jee/physics/electrostatics` | the 202-page engine, Article schema, link contract |
| 5 | T10/T11 PYQ | `/nda/pyq/2025` | F5 freshness, ItemList |
| 6 | T13 Tool shell | `/nda/tools/score-calculator` | F4 task-first, client interactivity inside SSR page |
| 7 | T18/T19 NDA deep guide | `/nda/ssb-interview` | long-form authority, TOC, reviewer bar |
| 8 | T23 B2B | `/for-institutes` | F6, form → Cloud |
| 9 | T26 Editorial article | `/blog/<slug>` | authoring pipeline, Person/Article |

Acceptance: Lighthouse ≥90 mobile, unique metadata + valid JSON-LD, no orphan pages, 390px pass, one new chapter added by data row only (zero component edits).

## 6. Credit estimate

**Honest limitation:** I cannot predict Lovable credit consumption precisely. Credits track agent messages/tasks and their complexity, which depends on your iteration style, review latency and how ready the content is. Treat these as planning ranges (~1 credit ≈ 1 agent task), and calibrate after the pilot (Section 11).

BUILD CREDITS (excludes Cloud/runtime):

| # | Workstream | Msgs | Low | Expected | High | Confidence |
|---|---|---|---|---|---|---|
| A | Architecture / plan mode | 5–10 | 5 | 10 | 15 | HIGH |
| B | Global shell (F1–F7, nav, footer, breadcrumbs) | 12–20 | 12 | 20 | 30 | HIGH |
| C | Design tokens | 3–6 | 3 | 6 | 10 | HIGH |
| D | B01–B47 block library (~4 blocks/msg + polish) | 35–60 | 35 | 55 | 90 | MEDIUM |
| E | T01–T29 recipe system | 20–35 | 20 | 32 | 55 | MEDIUM |
| F | 9 pilot pages | 18–30 | 18 | 28 | 45 | MEDIUM |
| G | Content schema + authoring pipeline | 10–18 | 10 | 16 | 28 | MEDIUM |
| H | Route/data generation + sitemaps | 10–16 | 10 | 15 | 25 | MEDIUM |
| I | Phase 1 production pages (P1 ≈124) | 25–45 | 25 | 40 | 70 | MEDIUM |
| J | Remaining URLs to 357 (bulk, data-led) | 20–40 | 20 | 34 | 60 | LOW |
| K | Interactive tools (6–10 tools) | 20–40 | 20 | 34 | 60 | LOW |
| L | Forms / auth / DB | 8–20 | 8 | 16 | 34 | LOW |
| M | SEO / schema / robots / GSC | 10–18 | 10 | 16 | 28 | HIGH |
| N | Responsive refinement | 12–22 | 12 | 20 | 36 | MEDIUM |
| O | Accessibility (AA) | 8–14 | 8 | 13 | 22 | MEDIUM |
| P | QA + bug fixing | 15–30 | 15 | 26 | 48 | MEDIUM |
| Q | Design refinement | 15–35 | 15 | 28 | 60 | LOW |
| R | Deployment / domain / redirects | 4–8 | 4 | 7 | 12 | HIGH |
| S | Iteration + rework buffer (~25%) | — | 55 | 105 | 180 | LOW |
| | **TOTAL BUILD** | **250–470** | **~305** | **~520** | **~900** | MEDIUM |

## 7. Option A/B/C/D

| Option | Scope | Credits (low–exp–high) | Iterations | Complexity | Biggest uncertainty | Buffer |
|---|---|---|---|---|---|---|
| A Proof of system | Tokens + shell + blocks + recipes + 9 pilot pages | 110 – 165 – 240 | 80–130 | Medium | Block count creep (B01–B47 fidelity) | +25% |
| B Foundation + first launch | A + P1 124 URLs + SEO/sitemaps + forms + deploy | 220 – 330 – 470 | 170–260 | Med-High | Content readiness for P1 | +30% |
| C Major SEO launch | B + NDA depth (SSB/physical/wings) + priority JEE/NEET chapters | 300 – 430 – 620 | 220–330 | High | Chapter data quality gate | +30% |
| D Complete website | Full 357 URLs + all tools + polish | 400 – 620 – 900 | 300–480 | High | Tools + bulk content + rework | +35% |

## 8. Build credits vs Cloud / runtime cost

- **Build credits** = agent work above. One-off, front-loaded.
- **Cloud / runtime** = separate usage-based billing: Postgres storage + egress for forms/leads/attempts, storage for PDFs/images, server-function invocations, and AI Gateway calls only if you add AI features. A mostly-static 357-page marketing/SEO site with forms sits at the low end of Cloud usage; costs rise materially only if on-site test attempts, user accounts and AI diagnosis run in production. Hosting of prerendered pages is not charged per build credit. Do not budget these from the same pool.

## 9. Lovable-only vs hybrid

| Model | Speed | Cost | SEO control | Maintainability | Bulk pages | Handoff | Risk |
|---|---|---|---|---|---|---|---|
| A All-in-Lovable | Fast | Medium | High (SSR) | Medium — chat is a poor bulk-content editor | Weak for 200 data rows | N/A | Content edits burn credits |
| B Lovable builds system, devs populate via GitHub | Fast then linear | **Lowest total** | High | High | Strong (PRs, scripts) | Native | Needs 1 competent dev |
| C Lovable + dev hybrid, both ongoing | Fastest | Medium-high | High | High | Strong | Native | Coordination/merge discipline |
| D Traditional dev build | Slowest | Highest | High | High | Strong | N/A | 6–10 weeks before first page |

**Recommendation: B, drifting into C.** Lovable builds tokens, shell, B01–B47, T01–T29, the content schema, SEO plumbing and the 9 pilot pages; your developer then bulk-populates chapters/PYQs through GitHub with scripts and returns to Lovable for new templates, tools and design work. This is the cheapest path to 357 URLs and avoids paying agent credits to type chapter rows.

## 10. What to build now vs later

**BUILD NOW:** tokens, shell/nav/footer/breadcrumbs, F1–F7, ~30 of 47 blocks (heroes, snapshot, tables, ladders, CTA, FAQ, related links, reviewer bar, source box), T01/T02/T05/T06/T10/T18/T23/T26 recipes, content schema, sitemaps/robots/schema, forms.

**PLACEHOLDER / COMPONENT CONTRACT (component exists, hidden until data):** institution logo strip (B05), editorial review quote (B07), results/toppers (T25), case studies (T24), weightage/trend tables, parent quotes, product screenshots, mock-test attempt shell.

**BUILD LATER:** interactive tools beyond one pilot, current-affairs archive, college/counselling datasets, editorial volume, Hindi.

**DO NOT BUILD UNTIL REAL DATA EXISTS:** real results/toppers, testimonials, institution logos, proprietary analytics claims, first-party research figures, AI-diagnosis output, predictors/calculators without verified formulas, live exam data feeds. Proof-gated pages ship `noindex` or not at all — never a thin "coming soon" proof page.

## 11. First 10 implementation steps

1. Lock decisions: canonical domain (.in vs .com), NDA count (68), homepage schema (drop FAQPage), mock-test hosting model.
2. Freeze the 357-row workbook as a versioned `urls.ts` registry (URL, template, platform, priority, schema, parent, indexation).
3. Implement design tokens exactly per §2 of the design system; delete ad-hoc values.
4. Build the global shell + F1–F7 page frames + breadcrumbs + jump nav.
5. Build blocks B01–B14 (brand/product core) with typed props and Storybook-style demo route.
6. Build blocks B15–B47 in themed batches (data/table, trust, task, B2B, editorial).
7. Define the content schema + one seeded chapter record and the internal-link graph.
8. Implement T01/T02/T05/T06 recipes and prerender the first 4 pilot URLs.
9. Add remaining 5 pilot pages, split sitemaps, robots, JSON-LD, GSC verification.
10. Run the acceptance gate (Lighthouse, schema validation, 390px, orphan check), then **measure actual credits spent** and re-price Options B–D from real data.

## 12. Recommended budget and confidence

- Keep available now: **~200 credits** for Option A (165 expected + buffer).
- Plan for **~450 credits** to reach Option B/C.
- Full Option D ceiling: **~900 credits**, only if Lovable also does bulk population (which Model B avoids).

**Confidence: MEDIUM.** High on architecture and SEO feasibility; medium on the block/template ranges; low on tools, bulk population and design-iteration volume. Recalibrate after step 10 — the pilot's actual credit burn multiplied by remaining scope is a far better forecast than this table.

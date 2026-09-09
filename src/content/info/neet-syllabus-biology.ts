import type { InfoPageContent } from "../types";

/**
 * NEET Biology syllabus and route ownership — transcribed from the accepted
 * N01 Foundation and Biology Production Package (production date
 * 9 September 2026), record N01-05.
 *
 * This page is the authoritative bridge between the official 2026 Biology
 * syllabus (10 units) and Rank Sarthi's 38 registered Biology routes. Every
 * route is classified into exactly one of four accepted states, transcribed
 * unflattened from the package's Biology route reconciliation (section E):
 *   CURRENT_OFFICIAL_SCOPE (30), CONTEXTUAL_UMBRELLA (4),
 *   PARTIAL_OR_MERGED_SCOPE (1), HISTORICAL_OR_NOT_CURRENTLY_LISTED (3).
 * Final N05 reconciliation supersedes the earlier N01 29/5 aggregate.
 */
export const neetSyllabusBiology: InfoPageContent = {
  url: "/neet/syllabus/biology",
  platform: "neet",
  slug: "biology",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Biology Syllabus 2026: Official Units and Rank Sarthi Route Status",
  eyebrow: "NEET · Syllabus · Biology",
  intent:
    "Show the current official Biology syllabus and explicitly map all 38 frozen Biology chapter/topic routes to one of four controlled states so an old or contextual URL cannot masquerade as a current official topic.",
  chips: [
    "10 official Biology units",
    "38 registered Biology routes reconciled",
    "Four controlled route states",
    "No unsupported weightage",
  ],
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "The official NEET UG 2026 Biology syllabus contains 10 units, from Diversity in Living World through Ecology and Environment. Rank Sarthi has 38 frozen Biology topic routes, but those routes are not all equivalent to current official syllabus headings. In this reconciliation, 30 routes are current official scope, 4 are contextual umbrellas, 1 is partial or merged scope, and 3 are historical or not currently listed.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "table",
      id: "official-biology-units",
      heading: "Official Biology units, NEET UG 2026",
      columns: ["#", "Official unit"],
      rows: [
        ["1", "Diversity in Living World"],
        ["2", "Structural Organisation in Animals and Plants"],
        ["3", "Cell Structure and Function"],
        ["4", "Plant Physiology"],
        ["5", "Human Physiology"],
        ["6", "Reproduction"],
        ["7", "Genetics and Evolution"],
        ["8", "Biology and Human Welfare"],
        ["9", "Biotechnology and Its Applications"],
        ["10", "Ecology and Environment"],
      ],
      note: "Official unit count: 10. Frozen Rank Sarthi Biology topic routes: 38. Route statuses below are editorial classifications against the official 2026 syllabus, not replacements for official wording.",
    },
    {
      kind: "table",
      id: "status-legend",
      heading: "Route-status legend",
      columns: ["Status", "Meaning"],
      rows: [
        ["Current official scope", "The route owns content explicitly represented in the current official syllabus."],
        ["Partial or merged scope", "The route overlaps a current unit but its frozen route title is broader or differently segmented than the explicit official wording."],
        ["Contextual umbrella", "The route is a useful learning or routing layer over current official topics but is not itself treated as an official syllabus heading."],
        ["Historical, not currently listed", "The frozen route is preserved, but the topic is not explicitly present in the current official 2026 Biology syllabus. Default publication state is contextual or historical, draft and noindex."],
      ],
    },
    {
      kind: "table",
      id: "current-official-scope-routes",
      heading: "Current official scope — 30 routes",
      intro: "Each route owns content explicitly represented in the current official NEET UG 2026 Biology syllabus.",
      columns: ["Route slug", "Page", "2026 official relationship", "Editorial boundary"],
      rows: [
        ["human-physiology", "Human Physiology", "Unit 5: Human Physiology", "Exact current official unit umbrella."],
        ["plant-physiology", "Plant Physiology", "Unit 4: Plant Physiology", "Exact current official unit umbrella."],
        ["molecular-basis-of-inheritance", "Molecular Basis of Inheritance", "Unit 7: Genetics and Evolution", "Explicit current topic cluster."],
        ["evolution", "Evolution", "Unit 7: Genetics and Evolution", "Explicit current topic cluster."],
        ["biomolecules", "Biomolecules", "Unit 3: Cell Structure and Function", "Explicit current topic cluster."],
        ["animal-kingdom", "Animal Kingdom", "Unit 1: Diversity in Living World", "Animal classification is explicitly current."],
        ["plant-kingdom", "Plant Kingdom", "Unit 1: Diversity in Living World", "Plant groups are explicitly current."],
        ["morphology-of-plants", "Morphology of Plants", "Unit 2: Structural Organisation in Animals and Plants", "Flowering-plant morphology and modifications are explicitly current."],
        ["anatomy-of-plants", "Anatomy of Plants", "Unit 2: Structural Organisation in Animals and Plants", "Flowering-plant tissues, anatomy and functions are explicitly current."],
        ["biological-classification", "Biological Classification", "Unit 1: Diversity in Living World", "Five-kingdom classification and related groups are explicitly current."],
        ["living-world", "Living World", "Unit 1: Diversity in Living World", "Living world, biodiversity, taxonomy and nomenclature are explicitly current."],
        ["photosynthesis", "Photosynthesis", "Unit 4: Plant Physiology", "Explicit current topic cluster."],
        ["respiration-in-plants", "Respiration in Plants", "Unit 4: Plant Physiology", "Explicit current topic cluster."],
        ["body-fluids-circulation", "Body Fluids Circulation", "Unit 5: Human Physiology", "Explicit current topic cluster."],
        ["excretory-products", "Excretory Products", "Unit 5: Human Physiology", "Explicit current topic cluster."],
        ["locomotion-movement", "Locomotion Movement", "Unit 5: Human Physiology", "Explicit current topic cluster."],
        ["neural-control", "Neural Control", "Unit 5: Human Physiology", "Explicit current topic cluster."],
        ["chemical-coordination", "Chemical Coordination", "Unit 5: Human Physiology", "Explicit current topic cluster."],
        ["breathing-exchange-gases", "Breathing Exchange Gases", "Unit 5: Human Physiology", "Explicit current topic cluster."],
        ["human-reproduction", "Human Reproduction", "Unit 6: Reproduction", "Explicit current topic cluster."],
        ["reproductive-health", "Reproductive Health", "Unit 6: Reproduction", "Explicit current topic cluster."],
        ["sexual-reproduction-plants", "Sexual Reproduction Plants", "Unit 6: Reproduction", "Sexual reproduction in flowering plants is explicitly current."],
        ["principles-of-inheritance", "Principles of Inheritance", "Unit 7: Genetics and Evolution", "Heredity, variation and Mendelian inheritance are explicitly current."],
        ["human-health-disease", "Human Health Disease", "Unit 8: Biology and Human Welfare", "Health and disease topics are explicitly current."],
        ["microbes-human-welfare", "Microbes Human Welfare", "Unit 8: Biology and Human Welfare", "Microbes in human welfare are explicitly current."],
        ["biotechnology", "Biotechnology", "Unit 9: Biotechnology and Its Applications", "Current official scope process owner for principles and process of genetic engineering."],
        ["biotechnology-applications", "Biotechnology Applications", "Unit 9: Biotechnology and Its Applications", "Application topics are explicitly current."],
        ["organisms-populations", "Organisms Populations", "Unit 10: Ecology and Environment", "Organisms, environment and population topics are explicitly current."],
        ["ecosystem", "Ecosystem", "Unit 10: Ecology and Environment", "Ecosystem topics are explicitly current."],
        ["biodiversity-conservation", "Biodiversity Conservation", "Unit 10: Ecology and Environment", "Biodiversity and conservation are explicitly current."],
      ],
    },
    {
      kind: "table",
      id: "contextual-umbrella-routes",
      heading: "Contextual umbrella — 4 routes",
      intro: "Useful learning or routing layers over current official topics; not themselves official syllabus headings.",
      columns: ["Route slug", "Page", "2026 official relationship", "Editorial boundary"],
      rows: [
        ["genetics", "Genetics", "Unit 7: Genetics and Evolution", "Broad routing layer for inheritance, molecular genetics and evolution."],
        ["cell-biology", "Cell Biology", "Unit 3: Cell Structure and Function", "Editorial umbrella aligned to the current cell unit."],
        ["ecology", "Ecology", "Unit 10: Ecology and Environment", "Broad routing layer over current ecology topics."],
        
        ["reproduction", "Reproduction", "Unit 6: Reproduction", "Broad routing layer over current reproduction topics."],
      ],
    },
    {
      kind: "table",
      id: "partial-or-merged-scope-routes",
      heading: "Partial or merged scope — 1 route",
      intro: "The route overlaps a current unit but its frozen title is broader or differently segmented than the explicit official wording.",
      columns: ["Route slug", "Page", "2026 official relationship", "Editorial boundary"],
      rows: [
        [
          "/neet/biology/structural-organisation-animals",
          "Structural Organisation Animals",
          "Unit 2: Structural Organisation in Animals and Plants",
          "Current official scope names animal tissues and gives frog morphology, anatomy and functions in brief; the route title is broader than the explicit wording.",
        ],
      ],
    },
    {
      kind: "table",
      id: "historical-or-not-currently-listed-routes",
      heading: "Historical, not currently listed — 3 routes",
      intro: "Frozen routes preserved for context; the topic is not explicitly present in the current official 2026 Biology syllabus.",
      columns: ["Route slug", "Page", "2026 official relationship", "Editorial boundary"],
      rows: [
        ["digestion-absorption", "Digestion Absorption", "Not explicitly listed in the 2026 official Biology syllabus", "Preserve the frozen route only as contextual or historical unless a future official syllabus restores it."],
        ["environmental-issues", "Environmental Issues", "Not explicitly listed in the 2026 official Biology syllabus", "Preserve the frozen route only as contextual or historical unless a future official syllabus restores it."],
        ["transport-in-plants", "Transport in Plants", "Not explicitly listed in the 2026 official Biology syllabus", "Preserve the frozen route only as contextual or historical unless a future official syllabus restores it."],
      ],
      note: "Route status affects content claims and publication/indexation, not route existence. The frozen URL inventory remains unchanged.",
    },
    {
      kind: "prose",
      id: "ncert-relationship",
      heading: "NCERT relationship",
      concepts: [
        {
          id: "ncert-relationship-body",
          title: "NCERT relationship",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The official Biology syllabus should be connected to NCERT Biology through stable class, book, chapter and concept relationships, not long copied text. NCERT Biology Class XI covers many Unit 1-5 foundations, and Class XII covers reproduction, genetics and evolution, human welfare, biotechnology and ecology areas in the official NCERT Biology sequence. Every route-level NCERT mapping remains subject to the official book, reprint and SME verification.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "current-vs-contextual-boundary",
      heading: "Current vs contextual boundary",
      concepts: [
        {
          id: "boundary-body",
          title: "Current vs contextual boundary",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "This page is the canonical boundary controller for Biology. Any Biology hub or chapter page must inherit its route-status label from this verified mapping, not from legacy page names or competitor chapter lists.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "NEET syllabus", url: "/neet/syllabus", relation: "up" },
    { label: "NEET hub", url: "/neet", relation: "up" },
    { label: "NCERT mapping methodology", url: "/neet/ncert-mapping", relation: "related" },
    { label: "NCERT important pages", url: "/neet/ncert-important-pages", relation: "related" },
    { label: "NEET Biology hub", url: "/neet/biology", relation: "forward" },
  ],
  faqs: [
    {
      question: "How many units are in the official NEET UG 2026 Biology syllabus?",
      answer: [{ type: "paragraph", children: [{ text: "Ten official Biology units." }] }],
    },
    {
      question: "Are all 38 Rank Sarthi Biology routes current syllabus topics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. The 38 routes include current topics, contextual umbrellas, one partial or merged route and three routes not explicitly listed in the 2026 official syllabus.",
            },
          ],
        },
      ],
    },
    {
      question: "Which registered Biology routes are not explicitly listed in the 2026 official syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Digestion and Absorption, Environmental Issues, and Transport in Plants are not explicitly listed in the verified 2026 Biology syllabus used here.",
            },
          ],
        },
      ],
    },
    {
      question: "Why keep those URLs if they are not currently listed?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The frozen architecture must be preserved. The routes can be contextual or historical without being presented as current exam scope.",
            },
          ],
        },
      ],
    },
  ],
  sourceRefs: ["nmc-neet-ug-2026-syllabus", "nta-neet-2026-bulletin", "ncert-biology-11-contents", "ncert-biology-12-contents"],
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Biology SME review is mandatory before publication.",
    "A reviewer should specifically recheck the three historical/not-current labels and the partial/merged structural-organisation route against the live official syllabus at publication time.",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "NEET Biology Syllabus 2026: Official Units & Route Map | Rank Sarthi",
    description:
      "See the official 10-unit NEET Biology syllabus and the status of all 38 Rank Sarthi Biology routes: current, umbrella, partial/merged or historical.",
    ogTitle: "NEET Biology Syllabus 2026: Official Units & Route Map",
    ogDescription: "The verified boundary between official NEET Biology syllabus scope and Rank Sarthi's Biology route inventory.",
    ogType: "article",
  },
};

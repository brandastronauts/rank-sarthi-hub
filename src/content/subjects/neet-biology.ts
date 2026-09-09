import type { SubjectHubContent } from "@/content/types";

/**
 * T04 — NEET Biology subject hub.
 *
 * Content source: accepted N01 Foundation and Biology Production Package
 * (production date 9 September 2026), record N01-06. Chapter names and URLs
 * are NOT listed here; they are derived from the URL registry. This record
 * only carries the approved editorial annotation per route, inheriting its
 * current-vs-contextual truth from /neet/syllabus/biology, so the hub can
 * never drift from the real route inventory or the verified route status.
 */
export const neetBiologyHub: SubjectHubContent = {
  url: "/neet/biology",
  platform: "neet",
  slug: "biology",
  subject: "Biology",
  exam: "NEET (UG)",
  eyebrow: "NEET · Biology",
  title: "NEET Biology: Current Syllabus Map, NCERT Learning Paths and Error Diagnosis",
  intent:
    "Orient a student to the current Biology syllabus, route through all 38 registered Biology topic routes with transparent status, teach a Biology-specific NCERT/retrieval method, and diagnose Biology mistakes using the five-label PI model.",
  contentStatus: "draft",
  chips: ["NEET UG 2026 syllabus", "10 official Biology units", "38 Biology routes reconciled"],
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET Biology preparation should begin with the current official syllabus, then use NCERT-oriented concept relationships and precise retrieval rather than treating all 38 Rank Sarthi routes as equal chapters. The verified route map contains 30 current-scope routes, 4 contextual umbrellas, 1 partial or merged route and 3 historical or not-currently-listed routes.",
        },
      ],
    },
  ],

  taskTable: {
    id: "tasks",
    heading: "Choose your Biology task",
    columns: ["Your task", "Best destination", "What to do there"],
    rows: [
      ["Verify current exam scope", "NEET Biology syllabus and route map", "Check the official 10-unit list and the 38-route status table."],
      ["Learn a current topic", "Use the complete map below", "Open a current-official-scope or partial/merged route and work through it."],
      ["Navigate a broad theme", "Use an umbrella route", "Genetics, Cell Biology, Ecology, Biotechnology and Reproduction route to focused children."],
      ["Check if a topic is still on the syllabus", "Use the scope label on each route", "A historical label means the topic is not currently listed."],
      ["Review a weak attempt", "Use the diagnosis block below", "Classify the cause with the five allowed PI labels, then repair and retest."],
    ],
    note: "Destinations that are not yet built are named rather than linked, so no dead link is rendered.",
  },

  architecture: {
    id: "biology-preparation-model",
    heading: "A Biology-specific preparation model",
    columns: ["Step", "Question to answer"],
    rows: [
      ["1. Entity or process", "What is the biological object or process, named precisely?"],
      ["2. Relationship", "What system, pathway, classification or inheritance relationship does it belong to?"],
      ["3. Current scope", "Is this inside current NEET/NCERT scope, or is it useful context only?"],
      ["4. Distinction", "What similar term can be confused with it, and how are they different?"],
      ["5. Application", "How could the relationship appear in a question: statement, diagram, sequence, classification or option-discrimination?"],
      ["6. Retrieval", "Can it be retrieved without looking, using recall rather than recognition?"],
      ["7. Error diagnosis", "If it was missed, which of the five allowed PI labels applies?"],
    ],
    note: "Biology should not borrow the default structure of a Physics formula page; the chain above replaces it.",
  },

  chapterMap: {
    heading: "All 38 registered Biology routes",
    scopeNote:
      "Scope labels follow the verified reconciliation at /neet/syllabus/biology. Current official scope means the route owns content explicit in the 2026 syllabus. Contextual umbrella route means the route is a navigation layer over current topics, not itself an official heading. Partial or merged official scope means the route overlaps a current unit but is titled more broadly than the explicit official wording. Not currently listed in the official syllabus means the topic is not explicitly present in the current official 2026 Biology syllabus.",
    contextualHeading: "Contextual / Foundation Resources",
    contextualNote:
      "These routes are not explicitly listed in the verified official NEET UG 2026 syllabus. They are preserved as contextual and historical reference only and must not be treated as current exam scope.",
    expectedCount: 38,
    notes: [
      { url: "/neet/biology/living-world", scope: "current official scope", order: 1, note: "Unit 1: Diversity in Living World. Foundation for taxonomy and classification that follows." },
      { url: "/neet/biology/biological-classification", scope: "current official scope", order: 2, note: "Unit 1: Diversity in Living World. Five-kingdom classification and related groups." },
      { url: "/neet/biology/plant-kingdom", scope: "current official scope", order: 3, note: "Unit 1: Diversity in Living World. Plant groups, building toward morphology and anatomy." },
      { url: "/neet/biology/animal-kingdom", scope: "current official scope", order: 4, note: "Unit 1: Diversity in Living World. Animal classification, building toward structural organisation." },
      { url: "/neet/biology/morphology-of-plants", scope: "current official scope", order: 5, note: "Unit 2: Structural Organisation in Animals and Plants. Flowering-plant morphology and modifications." },
      { url: "/neet/biology/anatomy-of-plants", scope: "current official scope", order: 6, note: "Unit 2: Structural Organisation in Animals and Plants. Flowering-plant tissues, anatomy and functions." },
      { url: "/neet/biology/structural-organisation-animals", scope: "partial or merged official scope", order: 7, note: "Unit 2 names animal tissues and frog morphology, anatomy and functions in brief; this route title is broader than the explicit official wording." },
      { url: "/neet/biology/cell-biology", scope: "contextual umbrella route", order: 8, note: "Editorial umbrella aligned to Unit 3: Cell Structure and Function; routes to focused cell-division and organelle content." },
      { url: "/neet/biology/biomolecules", scope: "current official scope", order: 9, note: "Unit 3: Cell Structure and Function. Explicit current topic cluster." },
      { url: "/neet/biology/plant-physiology", scope: "current official scope", order: 10, note: "Unit 4: Plant Physiology. Exact current official unit umbrella." },
      { url: "/neet/biology/photosynthesis", scope: "current official scope", order: 11, note: "Unit 4: Plant Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/respiration-in-plants", scope: "current official scope", order: 12, note: "Unit 4: Plant Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/transport-in-plants", scope: "not currently listed", order: 13, contextual: true, note: "Not explicitly listed in the 2026 official Biology syllabus. Preserved as contextual/historical unless a future syllabus restores it." },
      { url: "/neet/biology/human-physiology", scope: "current official scope", order: 14, note: "Unit 5: Human Physiology. Exact current official unit umbrella." },
      { url: "/neet/biology/digestion-absorption", scope: "not currently listed", order: 15, contextual: true, note: "Not explicitly listed in the 2026 official Biology syllabus. Preserved as contextual/historical unless a future syllabus restores it." },
      { url: "/neet/biology/breathing-exchange-gases", scope: "current official scope", order: 16, note: "Unit 5: Human Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/body-fluids-circulation", scope: "current official scope", order: 17, note: "Unit 5: Human Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/excretory-products", scope: "current official scope", order: 18, note: "Unit 5: Human Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/locomotion-movement", scope: "current official scope", order: 19, note: "Unit 5: Human Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/neural-control", scope: "current official scope", order: 20, note: "Unit 5: Human Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/chemical-coordination", scope: "current official scope", order: 21, note: "Unit 5: Human Physiology. Explicit current topic cluster." },
      { url: "/neet/biology/reproduction", scope: "contextual umbrella route", order: 22, note: "Broad routing layer over Unit 6: Reproduction; routes to the focused children below." },
      { url: "/neet/biology/human-reproduction", scope: "current official scope", order: 23, note: "Unit 6: Reproduction. Explicit current topic cluster." },
      { url: "/neet/biology/reproductive-health", scope: "current official scope", order: 24, note: "Unit 6: Reproduction. Explicit current topic cluster." },
      { url: "/neet/biology/sexual-reproduction-plants", scope: "current official scope", order: 25, note: "Unit 6: Reproduction. Sexual reproduction in flowering plants is explicitly current." },
      { url: "/neet/biology/genetics", scope: "contextual umbrella route", order: 26, note: "Broad routing layer for inheritance, molecular genetics and evolution under Unit 7: Genetics and Evolution." },
      { url: "/neet/biology/principles-of-inheritance", scope: "current official scope", order: 27, note: "Unit 7: Genetics and Evolution. Heredity, variation and Mendelian inheritance are explicitly current." },
      { url: "/neet/biology/molecular-basis-of-inheritance", scope: "current official scope", order: 28, note: "Unit 7: Genetics and Evolution. Explicit current topic cluster." },
      { url: "/neet/biology/evolution", scope: "current official scope", order: 29, note: "Unit 7: Genetics and Evolution. Explicit current topic cluster." },
      { url: "/neet/biology/human-health-disease", scope: "current official scope", order: 30, note: "Unit 8: Biology and Human Welfare. Health and disease topics are explicitly current." },
      { url: "/neet/biology/microbes-human-welfare", scope: "current official scope", order: 31, note: "Unit 8: Biology and Human Welfare. Microbes in human welfare are explicitly current." },
      { url: "/neet/biology/biotechnology", scope: "current official scope", order: 32, note: "Unit 9: Biotechnology and Its Applications. Current-scope process owner for principles and process of genetic engineering." },
      { url: "/neet/biology/biotechnology-applications", scope: "current official scope", order: 33, note: "Unit 9: Biotechnology and Its Applications. Application topics are explicitly current." },
      { url: "/neet/biology/ecology", scope: "contextual umbrella route", order: 34, note: "Broad routing layer over Unit 10: Ecology and Environment; routes to the focused children below." },
      { url: "/neet/biology/organisms-populations", scope: "current official scope", order: 35, note: "Unit 10: Ecology and Environment. Organisms, environment and population topics are explicitly current." },
      { url: "/neet/biology/ecosystem", scope: "current official scope", order: 36, note: "Unit 10: Ecology and Environment. Ecosystem topics are explicitly current." },
      { url: "/neet/biology/biodiversity-conservation", scope: "current official scope", order: 37, note: "Unit 10: Ecology and Environment. Biodiversity and conservation are explicitly current." },
      { url: "/neet/biology/environmental-issues", scope: "not currently listed", order: 38, contextual: true, note: "Not explicitly listed in the 2026 official Biology syllabus. Preserved as contextual/historical unless a future syllabus restores it." },
    ],
  },

  diagnosis: {
    id: "biology-mistake-to-action",
    heading: "Biology mistake-to-action matrix",
    columns: ["PI label", "What failed", "Biology example pattern", "Correct next action"],
    rows: [
      ["Knowledge Gap", "Relationship or mechanism not understood", "Can name terms but cannot explain how they connect", "Rebuild the entity/process map from NCERT-backed explanation."],
      ["Recall Gap", "Exact term, fact or sequence unavailable", "Recognises the answer after seeing it", "Run blind recall and spaced retrieval."],
      ["Execution Error", "Reading, diagram or option handling failed", "Knew the fact but marked the wrong statement or label", "Slow the interpretation step and use a cover-label-check."],
      ["Decision / Selection Error", "Wrong biological principle or comparison chosen", "Applied the wrong distinction to two similar terms", "Use a side-by-side decision rule."],
      ["Needs Review", "Source, scope or wording ambiguous", "Route title conflicts with current syllabus wording", "Hold the claim and escalate to SME/source review."],
    ],
    note: "These are the only five allowed Preparation Intelligence labels for Biology. No alternate error taxonomy is used.",
  },

  relatedLinks: [
    { label: "NEET hub", url: "/neet", relation: "up" },
    { label: "NEET Biology syllabus and route map", url: "/neet/syllabus/biology", relation: "up" },
    { label: "NCERT mapping methodology", url: "/neet/ncert-mapping", relation: "prerequisite" },
    { label: "NCERT important pages", url: "/neet/ncert-important-pages", relation: "related" },
  ],

  faqs: [
    {
      question: "How should I use Rank Sarthi's 38 Biology routes?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Start from the official Biology syllabus map, then choose a current focused route or use an umbrella route for navigation. Do not assume every registered URL is current syllabus.",
            },
          ],
        },
      ],
    },
    {
      question: "What is Rank Sarthi's Biology error model?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Knowledge Gap, Recall Gap, Execution Error, Decision / Selection Error, and Needs Review." },
          ],
        },
      ],
    },
    {
      question: "Does the Biology hub publish chapter weightage?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No unsupported weightage is published. Any future frequency analysis must show its evidence and methodology and be labelled as Rank Sarthi analysis." },
          ],
        },
      ],
    },
    {
      question: "What is the role of NCERT?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "NCERT is the core textbook relationship layer for Biology, while Rank Sarthi adds concept mapping, distinctions, retrieval prompts and error diagnosis without copying the textbook.",
            },
          ],
        },
      ],
    },
  ],

  sourceRefs: ["nmc-neet-ug-2026-syllabus", "nta-neet-2026-bulletin", "ncert-biology-11-contents", "ncert-biology-12-contents", "ncert-exemplar-index"],
  lastVerified: "9 September 2026",

  seo: {
    title: "NEET Biology: Syllabus Map, NCERT Paths & 38 Routes | Rank Sarthi",
    description:
      "Navigate NEET Biology through the current official syllabus, all 38 Rank Sarthi Biology routes, NCERT-oriented learning paths and a precise error-diagnosis model.",
    ogTitle: "NEET Biology: Syllabus Map, NCERT Paths & 38 Routes",
    ogDescription: "Current official Biology scope, route status and error diagnosis, all in one hub.",
    ogType: "website",
  },
};

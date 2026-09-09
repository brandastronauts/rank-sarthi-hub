import type { ChapterContent } from "@/content/types";

/**
 * Morphology of Plants — N02 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or priority claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until Botany SME review is recorded.
 * - Scope check (verified against the current NEET UG 2026 syllabus, Unit 2 —
 *   Structural Organisation in Animals and Plants): morphology and
 *   modifications of root, stem, leaf, inflorescence (cymose and racemose),
 *   flower, fruit and seed, plus the families Malvaceae, Cruciferae,
 *   Leguminosae, Compositae and Graminae, are explicitly named.
 */
export const neetBiologyMorphologyOfPlants: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Morphology of Plants",
  slug: "morphology-of-plants",
  url: "/neet/biology/morphology-of-plants",
  canonicalIntent:
    "Own the current flowering-plant morphology and modification scope by teaching students to identify plant organs and distinguish modifications through structure-function relationships, plus the specified families in the official syllabus.",

  heroChips: [
    "Mapped to NEET UG 2026, Unit 2",
    "Root, stem, leaf, inflorescence, flower, fruit, seed and five families",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Morphology of Plants for NEET UG 2026 focuses on identifying external structures of flowering plants, understanding modifications of root, stem and leaf, distinguishing cymose and racemose inflorescences, interpreting flower, fruit and seed features, and recognising the five families explicitly named in the official syllabus.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The key skill is organ identification from structural evidence rather than memorising an unsupported list of \"important examples.\"",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages." }],
    },
  ],

  prerequisites: [
    {
      label: "Plant Kingdom",
      url: "/neet/biology/plant-kingdom",
      relation: "prerequisite",
      description: "Establish plant-group classification before entering flowering-plant organ detail.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the NEET Biology chapter set.",
    },
    {
      label: "Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Official current-scope reference for every Biology unit.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 2: Structural Organisation in Animals and Plants",
    topics: [
      "Morphology and modifications of root, stem and leaf",
      "Inflorescence: cymose and racemose",
      "Flower",
      "Fruit",
      "Seed",
      "Family Malvaceae",
      "Family Cruciferae",
      "Family Leguminosae",
      "Family Compositae",
      "Family Graminae",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "organ-identification-sequence",
      title: "1. Use an organ-identification sequence",
      keyIdea: "Identify organs from structural evidence, not from memorised examples.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For any unfamiliar plant structure, ask: where is it attached, what structural markers identify the organ, what normal organ features remain visible, what function is modified, and which NCERT example matches. This approach is more robust than memorising \"potato = stem\" or \"carrot = root\" without knowing the evidence that identifies the organ.",
            },
          ],
        },
      ],
    },
    {
      id: "root",
      title: "2. Root",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Teach the external morphology and root-system/modification relationships at NCERT depth. For modifications, identify the structural evidence that keeps the organ classified as root even when its appearance or function changes. Examples are included only when verified from the current NCERT chapter.",
            },
          ],
        },
      ],
    },
    {
      id: "stem",
      title: "3. Stem",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Stem identification focuses on nodes, internodes, buds and attachment relationships. Modified stems can become storage, support, protection or vegetative-propagation structures depending on the NCERT example. Use stem markers rather than shape alone.",
            },
          ],
        },
      ],
    },
    {
      id: "leaf",
      title: "4. Leaf",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Leaf morphology connects leaf base, petiole and lamina at the current textbook level, then distinguishes modifications by retained leaf relationships. Avoid an oversized botany glossary unless each term is necessary for the current chapter.",
            },
          ],
        },
      ],
    },
    {
      id: "inflorescence",
      title: "5. Inflorescence: racemose vs cymose",
      keyIdea: "The high-value distinction is growth pattern and flower-order relationship.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official syllabus explicitly names cymose and racemose inflorescences. Use an original branching diagram with SME-reviewed labels rather than copying NCERT figures.",
            },
          ],
        },
      ],
    },
    {
      id: "flower",
      title: "6. Flower",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Teach the structural organisation of a typical flower, then connect whorls and reproductive structures to the family-comparison section. Floral formulae or diagrams are original and used only after rights-safe review.",
            },
          ],
        },
      ],
    },
    {
      id: "fruit-and-seed",
      title: "7. Fruit and seed",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Fruit and seed relationships to post-fertilisation flowering-plant structures are taught at the morphology level. Detailed embryology and reproduction belong to Sexual Reproduction in Plants, so this chapter avoids duplicating those processes.",
            },
          ],
        },
      ],
    },
    {
      id: "specified-families",
      title: "8. Specified families",
      keyIdea: "The verified 2026 syllabus explicitly names five families.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Malvaceae" }],
            [{ text: "Cruciferae" }],
            [{ text: "Leguminosae" }],
            [{ text: "Compositae" }],
            [{ text: "Graminae" }],
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The family matrix should contain only verified NCERT fields, for example habit, leaf arrangement, inflorescence, floral characters, fruit and examples. This chapter does not add a sixth \"important\" family based on competitor frequency.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "External identification of flowering-plant organs — root, stem, leaf, inflorescence, flower, fruit and seed — plus five specified families, as verified in NEET UG 2026 Unit 2."],
        ["What is the central method choice?", "Identify structural markers that define an organ before classifying it, rather than relying on location or function alone."],
        ["Where do most mistakes begin?", "Classifying an organ by location or function only, reversing cymose/racemose growth logic, and adding families beyond the five specified in the current syllabus."],
        ["What should come before Morphology of Plants?", "Plant Kingdom, for plant-group classification."],
        ["What comes after it?", "Anatomy of Plants, which develops internal tissue organisation for the same organs."],
      ],
      note: "The official NEET syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "inflorescence-comparison",
      jump: true,
      slot: "concepts",
      heading: "Racemose vs cymose inflorescence",
      columns: ["Feature", "Racemose", "Cymose"],
      rows: [
        ["Main-axis relationship", "Continues growth in the standard NCERT model", "Terminates in a flower in the standard NCERT model"],
        ["Flower-order cue", "Younger flowers generally towards the growing region under the described form", "Older/younger arrangement follows the determinate pattern described in NCERT"],
        ["Main risk", "Memorising shape without growth logic", "Reversing determinate and indeterminate growth"],
      ],
      note: "Exact phrasing should be checked against the current NCERT edition.",
    },
    {
      id: "organ-identification-matrix",
      jump: true,
      slot: "concepts",
      heading: "Plant-organ identification and modification matrix",
      columns: ["Observation", "First question", "Likely evidence to inspect", "Avoid this shortcut"],
      rows: [
        ["Underground swollen structure", "Are nodes/internodes/buds present?", "Stem markers vs root markers", "\"Underground = root\""],
        ["Tendril-like structure", "What organ position/attachment does it retain?", "Leaf/stem relationship", "\"All tendrils are modified leaves\""],
        ["Storage organ", "Which normal organ markers remain?", "Root/stem/leaf identity", "Classifying by function only"],
      ],
    },
  ],

  mistakes: [
    {
      id: "organ-by-location-or-function",
      mistake: "Classifies an organ by location or function only.",
      why: [{ type: "paragraph", children: [{ text: "Location and function can mislead when a structure has been modified while retaining its original organ markers." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check structural markers such as nodes, internodes and buds first." }] }],
      errorType: "decision-error",
    },
    {
      id: "forgets-modification-examples",
      mistake: "Forgets modification examples.",
      why: [{ type: "paragraph", children: [{ text: "Examples anchor abstract modification categories to concrete organs." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Retrieve only source-verified examples grouped by organ." }] }],
      errorType: "recall-gap",
    },
    {
      id: "reverses-growth-logic",
      mistake: "Reverses cymose/racemose growth logic.",
      why: [{ type: "paragraph", children: [{ text: "The two patterns are defined by opposite growth-axis behaviour, which is easy to confuse." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the growth-axis diagram to fix the distinction before answering." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "mislabels-organ-in-drawing",
      mistake: "Mislabels an organ in a drawing.",
      why: [{ type: "paragraph", children: [{ text: "Diagram-based questions require careful tracing of attachment and structural cues." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Trace attachment, nodes, buds and organ position before naming the structure." }] }],
      errorType: "execution-error",
    },
    {
      id: "adds-unofficial-family",
      mistake: "Adds an \"important family\" not in current official scope.",
      why: [{ type: "paragraph", children: [{ text: "Only Malvaceae, Cruciferae, Leguminosae, Compositae and Graminae are explicitly named in the current syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold any additional family outside the current-scope table until separately verified." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Anatomy of Plants", url: "/neet/biology/anatomy-of-plants", relation: "related", description: "Internal tissue organisation for the same flowering-plant organs." },
    { label: "Anatomy of Plants", url: "/neet/biology/anatomy-of-plants", relation: "forward", description: "Continue into internal tissue organisation of flowering plants." },
  ],

  sources: ["ncert-biology-11-contents", "nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Verified against the NEET UG 2026 syllabus (Unit 2: Structural Organisation in Animals and Plants) and the official NCERT Biology Class XI chapter Morphology of Flowering Plants. Examples, family fields and modification lists require current NCERT verification before publication.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Botany or Plant Sciences specialist with morphology competence.",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Morphology of Plants: Organs, Modifications & Families | Rank Sarthi",
    description:
      "Learn current NEET plant morphology through root, stem, leaf, inflorescence, flower, fruit, seed, modifications and the five official families.",
  },
};

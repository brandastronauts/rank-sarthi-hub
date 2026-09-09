import type { ChapterContent } from "@/content/types";

/**
 * Anatomy of Plants — N02 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or priority claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until Botany SME review is recorded.
 * - Scope check (verified against the current NEET UG 2026 syllabus, Unit 2 —
 *   Structural Organisation in Animals and Plants): tissues and the anatomy
 *   and functions of flowering-plant parts (root, stem, leaf, inflorescence,
 *   flower, fruit and seed) are explicitly named. Monocot/dicot root, stem
 *   and leaf comparisons are treated as NCERT implementation detail
 *   supporting that current scope, not as separately named official bullets.
 */
export const neetBiologyAnatomyOfPlants: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Anatomy of Plants",
  slug: "anatomy-of-plants",
  url: "/neet/biology/anatomy-of-plants",
  canonicalIntent:
    "Teach current flowering-plant internal organisation through tissue types, tissue systems and structure-function relationships, with NCERT-supported root/stem/leaf comparisons, while remaining within NEET Biology depth rather than university plant anatomy.",

  heroChips: [
    "Mapped to NEET UG 2026, Unit 2",
    "Tissues, tissue systems and root-stem-leaf comparisons",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Anatomy of Plants for NEET UG 2026 focuses on how plant tissues and tissue systems create the internal structure and function of flowering-plant organs.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Study the hierarchy from cell and tissue to epidermal, ground and vascular systems, then use original cross-sections to compare root, stem and leaf organisation at NCERT depth. Monocot/dicot distinctions are useful NCERT implementation details, but should not be mislabelled as separate official syllabus bullets.",
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
      description: "Establish plant-group classification before entering internal tissue detail.",
    },
    {
      label: "Morphology of Plants",
      url: "/neet/biology/morphology-of-plants",
      relation: "prerequisite",
      description: "Establish external organ identification before internal tissue organisation.",
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
      "Tissues",
      "Anatomy and functions of root",
      "Anatomy and functions of stem",
      "Anatomy and functions of leaf",
      "Anatomy and functions of inflorescence, flower, fruit and seed",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "hierarchy",
      title: "1. Build the hierarchy first",
      keyIdea: "Cell -> tissue -> tissue system -> organ anatomy -> biological function.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Students often remember isolated tissue names but fail to place them within an organ. This hierarchy makes every structure answer the question: where is it, what is it made of, and what function does that arrangement support?",
            },
          ],
        },
      ],
    },
    {
      id: "meristematic-and-permanent",
      title: "2. Meristematic and permanent tissues",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The broad distinction is between actively dividing meristematic tissues and differentiated permanent tissues at NCERT depth. Meristem types, positions and functions should be added through an original table only after textbook verification.",
            },
          ],
        },
      ],
    },
    {
      id: "simple-permanent-tissues",
      title: "3. Simple permanent tissues",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Distinguish parenchyma, collenchyma and sclerenchyma through living/dead status at maturity where appropriate, wall characteristics, common location and function at NCERT depth. Avoid rigid \"always found here\" rules when the textbook allows multiple contexts.",
            },
          ],
        },
      ],
    },
    {
      id: "complex-vascular-tissues",
      title: "4. Complex vascular tissues",
      keyIdea: "Xylem and phloem need a component-function relationship rather than a one-line shortcut.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Students should learn the direction/function context and principal tissue components of xylem and phloem at the current NCERT level, not just a \"water vs food\" shortcut.",
            },
          ],
        },
      ],
    },
    {
      id: "tissue-systems",
      title: "5. Tissue systems",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Epidermal tissue system for outer protective/exchange relationships" }],
            [{ text: "Ground tissue system for the internal non-vascular matrix and organ-specific functions" }],
            [{ text: "Vascular tissue system for xylem-phloem organisation" }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "The value is seeing where each system sits in a root, stem or leaf rather than memorising a definition only." }],
        },
      ],
    },
    {
      id: "root-anatomy",
      title: "6. Root anatomy",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An original cross-section with layer-by-layer labels explains how the arrangement of epidermal/root-hair region, cortex, endodermis/pericycle and vascular tissues relates to root function at NCERT depth. Exact terminology and monocot/dicot differences require Botany SME sign-off.",
            },
          ],
        },
      ],
    },
    {
      id: "stem-anatomy",
      title: "7. Stem anatomy",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Original diagrams compare vascular-bundle arrangement and tissue organisation in the NCERT monocot/dicot examples. Those classroom models are not extrapolated into universal claims for all flowering plants.",
            },
          ],
        },
      ],
    },
    {
      id: "leaf-anatomy",
      title: "8. Leaf anatomy",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Dorsiventral/isobilateral or monocot/dicot leaf distinctions are taught only as represented in the current NCERT relationship. Epidermis, mesophyll and vascular bundle organisation connect to photosynthetic and exchange functions without duplicating the full Photosynthesis chapter.",
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
        ["What is the chapter about?", "Internal tissue organisation of flowering plants — tissues, tissue systems, and root/stem/leaf anatomy — as verified in NEET UG 2026 Unit 2."],
        ["What is the central method choice?", "Place every tissue within the cell -> tissue -> tissue system -> organ hierarchy rather than memorising isolated tissue names."],
        ["Where do most mistakes begin?", "Memorising tissue names without placing them in organ anatomy, mislabelling a cross-section, and treating one monocot/dicot clue as a universal plant rule."],
        ["What should come before Anatomy of Plants?", "Plant Kingdom and Morphology of Plants, for plant-group classification and external organ identification."],
        ["What comes after it?", "Plant Physiology child routes, which build on this tissue organisation for physiological processes."],
      ],
      note: "The official NEET syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "xylem-phloem-table",
      jump: true,
      slot: "concepts",
      heading: "Xylem vs phloem",
      columns: ["Tissue system", "Main relationship", "High-risk confusion"],
      rows: [
        ["Xylem", "Conduction of water/minerals plus support relationships", "Calling all xylem elements living or all transport strictly one-way without context review"],
        ["Phloem", "Translocation of organic solutes in the plant", "Treating phloem as the same as xylem because both are vascular tissues"],
      ],
      note: "Exact directionality statements should be checked against NCERT before indexation.",
    },
    {
      id: "anatomy-comparison-matrix",
      jump: true,
      slot: "concepts",
      heading: "Anatomy comparison matrix",
      columns: ["Organ", "Primary tissue-system question", "High-value distinction"],
      rows: [
        ["Root", "How are radial tissues arranged around the vascular region?", "Root-specific vascular and endodermal organisation"],
        ["Stem", "How are vascular bundles arranged in the ground tissue/cortex-pith context?", "NCERT monocot/dicot bundle arrangement"],
        ["Leaf", "How are epidermis, mesophyll and vascular tissues arranged for leaf function?", "Dorsiventral/isobilateral pattern where source-supported"],
      ],
    },
  ],

  mistakes: [
    {
      id: "tissue-names-without-organ-placement",
      mistake: "Memorises tissue names without placing them in organ anatomy.",
      why: [{ type: "paragraph", children: [{ text: "A tissue name alone does not answer where it sits or what function that arrangement supports." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the cell -> tissue -> tissue system -> organ map for every tissue learned." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "forgets-xylem-phloem-components",
      mistake: "Forgets xylem/phloem components or functions.",
      why: [{ type: "paragraph", children: [{ text: "The component-function relationship is easy to reduce to an oversimplified shortcut and then forget." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Blind-retrieve the component/function table for xylem and phloem separately." }] }],
      errorType: "recall-gap",
    },
    {
      id: "mislabels-cross-section",
      mistake: "Mislabels a cross-section.",
      why: [{ type: "paragraph", children: [{ text: "Cross-section questions require correct orientation before tissues can be named accurately." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Orient outside-to-inside before naming tissues." }] }],
      errorType: "execution-error",
    },
    {
      id: "monocot-dicot-universal-rule",
      mistake: "Uses one monocot/dicot clue as a universal plant rule.",
      why: [{ type: "paragraph", children: [{ text: "Monocot/dicot comparisons are NCERT classroom models, not universal claims for every flowering plant." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the organ and the specific NCERT model before generalising." }] }],
      errorType: "decision-error",
    },
    {
      id: "advanced-anatomy-beyond-scope",
      mistake: "Adds advanced anatomy beyond verified depth.",
      why: [{ type: "paragraph", children: [{ text: "Secondary growth and specialised anatomy beyond current NCERT scope are not part of the verified current official scope for this chapter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold such content before indexation until separately verified." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Morphology of Plants", url: "/neet/biology/morphology-of-plants", relation: "related", description: "External organ identification for the same flowering-plant structures." },
    { label: "Plant Physiology", url: "/neet/biology/plant-physiology", relation: "related", description: "Physiological processes that build on tissue organisation taught here." },
    { label: "Plant Physiology", url: "/neet/biology/plant-physiology", relation: "forward", description: "Continue into physiological processes such as photosynthesis and respiration." },
  ],

  sources: ["ncert-biology-11-contents", "nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Verified against the NEET UG 2026 syllabus (Unit 2: Structural Organisation in Animals and Plants) and the official NCERT Biology Class XI chapter Anatomy of Flowering Plants. Monocot/dicot terminology and cross-section labels require Botany SME sign-off before publication.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Botany or Plant Sciences specialist with anatomy competence.",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Anatomy of Plants: Tissues, Root, Stem & Leaf | Rank Sarthi",
    description:
      "Learn current NEET plant anatomy through tissues, tissue systems, xylem/phloem and NCERT-based root, stem and leaf comparisons with original diagrams.",
  },
};

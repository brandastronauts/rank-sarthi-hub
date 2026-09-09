import type { ChapterContent } from "@/content/types";

/**
 * Plant Kingdom — N02 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or priority claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until Botany SME review is recorded.
 * - Scope check (verified against the current NEET UG 2026 syllabus, Unit 1 —
 *   Diversity in Living World): Algae, Bryophytes, Pteridophytes and
 *   Gymnosperms are explicitly named. Angiosperm classification is NOT listed
 *   as a plant-classification group in this Unit 1 bullet, and this page
 *   states that boundary explicitly rather than asserting it as current scope.
 */
export const neetBiologyPlantKingdom: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Plant Kingdom",
  slug: "plant-kingdom",
  url: "/neet/biology/plant-kingdom",
  canonicalIntent:
    "Help students discriminate the plant groups explicitly named in the current syllabus using body organisation, vascular tissue, seed status and reproductive relationships, without turning the chapter into a generic botany encyclopedia.",

  heroChips: [
    "Mapped to NEET UG 2026, Unit 1",
    "Four explicit groups: Algae, Bryophytes, Pteridophytes, Gymnosperms",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET UG 2026, the Plant Kingdom classification scope explicitly names Algae, Bryophytes, Pteridophytes and Gymnosperms.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The most useful way to study them is as a discrimination system: compare body organisation, vascular tissue, seed formation and reproductive relationships, then verify NCERT examples rather than memorising uncontrolled lists.",
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
      label: "Living World",
      url: "/neet/biology/living-world",
      relation: "prerequisite",
      description: "Establish what counts as living and why classification is needed.",
    },
    {
      label: "Biological Classification",
      url: "/neet/biology/biological-classification",
      relation: "prerequisite",
      description: "Understand the five-kingdom framework before entering plant-group detail.",
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
    unit: "Unit 1: Diversity in Living World",
    topics: [
      "Algae: salient features and classification",
      "Bryophytes: salient features and classification",
      "Pteridophytes: salient features and classification",
      "Gymnosperms: salient features and classification",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "discrimination-criteria",
      title: "1. Start from discrimination criteria",
      keyIdea: "Identify the features that separate the groups before memorising examples.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Degree of body differentiation" }],
            [{ text: "Presence or absence of vascular tissue" }],
            [{ text: "Seed presence or absence" }],
            [{ text: "Relationship of reproductive structures and water dependence, where NCERT supports it" }],
            [{ text: "Dominant life-cycle phase, only when explicitly verified from the current textbook treatment" }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "This reduces list memorisation and gives a way to reconstruct group identity from features." }],
        },
      ],
    },
    {
      id: "algae",
      title: "2. Algae",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Algae are taught through the NCERT group framework, body organisation and reproductive/nutritional relationships at the expected depth. Subgroup names and examples should be imported only from the current official textbook source, not generated from a coaching memory list.",
            },
          ],
        },
      ],
    },
    {
      id: "bryophytes",
      title: "3. Bryophytes",
      keyIdea: "Bryophytes are land plants without the vascular-tissue organisation of pteridophytes and seed plants.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The key discrimination is that bryophytes are land plants without vascular tissue organisation. Water dependence in reproduction and gametophyte/sporophyte relationships should be stated only in NCERT-reviewed wording.",
            },
          ],
        },
      ],
    },
    {
      id: "pteridophytes",
      title: "4. Pteridophytes",
      keyIdea: "Pteridophytes introduce vascular tissue but do not produce seeds.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "That vascular-but-seedless combination is a strong decision cue. This connects to roots, stems and leaves at the proper NCERT level, avoiding over-expansion into fossil history or specialised taxonomy.",
            },
          ],
        },
      ],
    },
    {
      id: "gymnosperms",
      title: "5. Gymnosperms",
      keyIdea: "Gymnosperms are vascular seed plants with a naked-seed relationship in the standard textbook sense.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Gymnosperms carefully distinguish seed presence from flowering-fruit formation. Flowering-plant morphology is routed to the separate Unit 2 chapters.",
            },
          ],
        },
      ],
    },
    {
      id: "angiosperm-boundary",
      title: "6. Angiosperm boundary",
      keyIdea: "Angiosperm classification is not explicitly named in the verified 2026 Unit 1 plant-group bullet.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Flowering-plant morphology and anatomy are clearly current in Unit 2. Therefore this chapter does not add an \u201CAngiosperms are another current Plant Kingdom classification group\u201D block as official Unit 1 scope without separate verification. Flowering-plant structure is routed to Morphology of Plants and Anatomy of Plants.",
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
        ["What is the chapter about?", "Discriminating Algae, Bryophytes, Pteridophytes and Gymnosperms using body organisation, vascular tissue and seed status, as verified in NEET UG 2026 Unit 1."],
        ["What is the central method choice?", "Use vascular tissue and seed presence as the primary two-axis discrimination before relying on any single feature or habitat cue."],
        ["Where do most mistakes begin?", "Treating seed presence and vascular tissue as identical, forgetting group examples, and adding Angiosperm classification as explicit current Unit 1 scope."],
        ["What should come before Plant Kingdom?", "Living World and Biological Classification, for classification criteria and the five-kingdom framework."],
        ["What comes after it?", "Morphology of Plants and Anatomy of Plants, which carry flowering-plant organ and tissue detail."],
      ],
      note: "The official NEET syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "group-discrimination-matrix",
      jump: true,
      slot: "concepts",
      heading: "Group discrimination matrix",
      columns: ["Group", "Vascular tissue", "Seeds", "High-level body/reproductive cue", "What not to infer"],
      rows: [
        ["Algae", "Group-level distinction reviewed from NCERT", "No seeds", "Mostly simple thalloid organisation in standard textbook treatment", "Do not treat every aquatic photosynthetic organism as an alga"],
        ["Bryophytes", "Absent in standard vascular-plant sense", "No seeds", "Non-vascular land-plant relationship", "Do not call them seed plants"],
        ["Pteridophytes", "Present", "No seeds", "Vascular spore-bearing plant relationship", "Do not infer seed formation from vascular tissue"],
        ["Gymnosperms", "Present", "Present", "Seed plant without angiosperm fruit enclosure", "Do not equate seed with fruit"],
      ],
      note: "The exact wording of algae/bryophyte organisation and reproductive phase should be SME-checked before indexation.",
    },
  ],

  mistakes: [
    {
      id: "seed-vascular-identical",
      mistake: "Uses seed presence and vascular tissue as if they were the same criterion.",
      why: [{ type: "paragraph", children: [{ text: "Vascular tissue and seed formation are independent structural features; a group can have one without the other." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the two-axis matrix that treats vascular tissue and seed presence separately." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "forgets-group-examples",
      mistake: "Forgets group examples.",
      why: [{ type: "paragraph", children: [{ text: "Examples anchor abstract group definitions to concrete organisms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Retrieve only verified NCERT examples rather than an uncontrolled list." }] }],
      errorType: "recall-gap",
    },
    {
      id: "vascular-seedless-clue-missed",
      mistake: "Misses the \"vascular but seedless\" clue that identifies pteridophytes.",
      why: [{ type: "paragraph", children: [{ text: "Both diagnostic features must be read together to reach the correct group." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Highlight both diagnostic features before selecting a group." }] }],
      errorType: "execution-error",
    },
    {
      id: "habitat-only-classification",
      mistake: "Classifies from habitat alone.",
      why: [{ type: "paragraph", children: [{ text: "Habitat is not one of the defining structural or reproductive criteria used in the NCERT framework." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use multiple structural and reproductive criteria instead of habitat alone." }] }],
      errorType: "decision-error",
    },
    {
      id: "angiosperm-scope-error",
      mistake: "Adds Angiosperm classification as explicit current Unit 1 scope.",
      why: [{ type: "paragraph", children: [{ text: "The verified 2026 Unit 1 plant-group bullet does not name Angiosperms as a classification group." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep this outside the current-scope claim until separately verified." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Animal Kingdom", url: "/neet/biology/animal-kingdom", relation: "related", description: "The parallel classification chapter for the animal groups named in Unit 1." },
    { label: "Morphology of Plants", url: "/neet/biology/morphology-of-plants", relation: "forward", description: "Continue into flowering-plant organ morphology and modifications." },
    { label: "Anatomy of Plants", url: "/neet/biology/anatomy-of-plants", relation: "forward", description: "Continue into internal tissue organisation of flowering plants." },
  ],

  sources: ["ncert-biology-11-contents", "nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Verified against the NEET UG 2026 syllabus (Unit 1: Diversity in Living World) and the official NCERT Biology Class XI chapter Plant Kingdom. Examples, subgroup details and life-cycle phase statements require current NCERT verification before publication.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Botany, Plant Sciences or Life Sciences specialist.",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Plant Kingdom: Algae to Gymnosperms | Rank Sarthi",
    description:
      "Compare current NEET Plant Kingdom groups: Algae, Bryophytes, Pteridophytes and Gymnosperms using vascular tissue, seeds and reviewed NCERT distinctions.",
  },
};

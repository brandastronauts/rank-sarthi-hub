import type { ChapterContent } from "@/content/types";

/**
 * Living World — T06 production content (N02-05).
 * No weightage/trend/PYQ records asserted. contentStatus stays "draft".
 * Taxonomic aids are NOT presented as current official 2026 scope; they are
 * excluded here and would require a CONTEXTUAL / VERIFY BEFORE INDEXATION
 * label if retained in a future editorial module.
 */
export const neetBiologyLivingWorld: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Living World",
  slug: "living-world",
  url: "/neet/biology/living-world",
  canonicalIntent:
    "Teach the verified Unit 1 foundations that let students talk precisely about biodiversity, classification, taxonomy, systematics, species, taxonomic hierarchy and binomial nomenclature without overclaiming a universal philosophical definition of life.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 1 (Diversity in Living World)",
    "Taxonomic aids are treated as contextual, not current scope",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "The Living World is the foundation for NEET diversity and classification. The current 2026 scope asks students to understand what is living at textbook depth, why biodiversity creates a need for classification, how taxonomy and systematics differ, how species fits within a taxonomic hierarchy, and how binomial nomenclature provides a standard naming system.",
        },
      ],
    },
    { type: "note", tone: "caution", children: [{ text: "Taxonomic aids such as herbaria, museums, botanical gardens and zoological parks are not explicitly named in the verified 2026 NEET Unit 1 bullet used here. If retained for NCERT context, they require a CONTEXTUAL / VERIFY BEFORE INDEXATION label." }] },
    { type: "note", tone: "info", children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages." }] },
  ],

  prerequisites: [
    { label: "NEET Biology", url: "/neet/biology", relation: "up", description: "Subject hub for the Biology chapter set." },
    { label: "NEET Biology syllabus", url: "/neet/syllabus/biology", relation: "up", description: "Official current-scope mapping for Biology." },
  ],

  syllabusMapping: {
    unit: "Unit 1: Diversity in Living World",
    topics: [
      "What is living",
      "Biodiversity",
      "Need for classification",
      "Taxonomy and systematics",
      "Concept of species and taxonomical hierarchy",
      "Binomial nomenclature",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "what-is-living",
      title: "1. What is living?",
      keyIdea: "Reason from a coordinated set of biological characteristics, not a one-line philosophical definition.",
      body: [{ type: "paragraph", children: [{ text: "Avoid a brittle checklist that claims one characteristic alone defines life in every edge case. The page reflects the textbook's multi-property discussion and explicitly notes that some properties can appear in non-living systems while some living states complicate simplistic rules." }] }],
    },
    {
      id: "biodiversity-classification",
      title: "2. Biodiversity and need for classification",
      body: [{ type: "paragraph", children: [{ text: "Biodiversity creates a practical need to organise and communicate about living organisms. Classification groups organisms using defined criteria so large biological diversity can be studied and compared systematically. This connects the problem of diversity to the need for stable naming and hierarchical organisation." }] }],
    },
    {
      id: "four-core-terms",
      title: "3. Distinguish four core terms",
      keyIdea: "Classification, taxonomy, systematics and nomenclature are not interchangeable.",
      body: [
        { type: "list", items: [
          [{ text: "Classification arranges organisms into groups based on defined relationships/criteria in the studied framework; it is not the same thing as naming." }],
          [{ text: "Taxonomy covers identification, nomenclature and classification relationship at textbook depth; it is not simply \"all evolutionary history.\"" }],
          [{ text: "Systematics is the broader study of diversity and relationships, including taxonomic organisation in the textbook framework; it is not just memorising category names." }],
          [{ text: "Nomenclature provides standard scientific naming conventions; it is not classification itself." }],
        ] },
        { type: "note", tone: "caution", children: [{ text: "The exact scope wording should be NCERT-reviewed before publication because textbooks may phrase the taxonomy-systematics relationship carefully." }] },
      ],
    },
    {
      id: "species-hierarchy",
      title: "4. Species and hierarchy",
      body: [
        { type: "paragraph", children: [{ text: "Hierarchy is taught as nested categories: species, genus, family, order, class, phylum/division, kingdom. Moving upward generally groups progressively broader sets. A single species definition should not be treated as universally sufficient for all organisms." }] },
      ],
    },
    {
      id: "binomial-nomenclature",
      title: "5. Binomial nomenclature",
      body: [{ type: "paragraph", children: [{ text: "The two-part scientific name relationship is: genus name plus specific epithet under the naming convention. Formatting rules, authorship notation and exact examples should be checked against the current NCERT text before indexation. Original examples are used only if source-verified." }] }],
    },
    {
      id: "taxonomic-aids-boundary",
      title: "6. Taxonomic aids boundary",
      body: [{ type: "note", tone: "caution", children: [{ text: "Taxonomic aids such as herbaria, museums, botanical gardens and zoological parks are present in some NCERT/school syllabus contexts but are not explicitly named in the verified 2026 NEET Unit 1 bullet used here. Any retained taxonomic-aids block must be labelled CONTEXTUAL / VERIFY BEFORE INDEXATION rather than presented as explicit official 2026 scope." }] }],
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "The Unit 1 foundations: what is living, biodiversity, need for classification, taxonomy vs systematics, species and taxonomic hierarchy, and binomial nomenclature."],
        ["What is the central method choice?", "Check whether a question is asking about grouping (classification/taxonomy/systematics) or naming (nomenclature) before answering."],
        ["Where do most mistakes begin?", "Using taxonomy, systematics and nomenclature interchangeably, and treating one characteristic of life as universally sufficient."],
        ["Are taxonomic aids current official scope?", "No. They are not listed in the verified 2026 Unit 1 bullet and are treated as CONTEXTUAL / VERIFY BEFORE INDEXATION if retained."],
      ],
      note: "The official NEET UG 2026 syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "term-distinction-matrix",
      jump: true,
      slot: "concepts",
      heading: "Classification, taxonomy, systematics and nomenclature matrix",
      columns: ["Term", "Main job in the learning system", "What it is not"],
      rows: [
        ["Classification", "Arranges organisms into groups based on defined relationships/criteria in the studied framework", "Not the same thing as naming"],
        ["Taxonomy", "Identification, nomenclature and classification relationship at textbook depth", "Not simply \"all evolutionary history\""],
        ["Systematics", "Broader study of diversity and relationships, including taxonomic organisation in the textbook framework", "Not just memorising category names"],
        ["Nomenclature", "Provides standard scientific naming conventions", "Not classification itself"],
      ],
    },
    {
      id: "hierarchy-ladder",
      jump: true,
      slot: "concepts",
      heading: "Taxonomic hierarchy ladder",
      columns: ["Level", "Relationship to the level above"],
      rows: [
        ["Species", "Most specific level, nested within genus"],
        ["Genus", "Groups related species"],
        ["Family", "Groups related genera"],
        ["Order", "Groups related families"],
        ["Class", "Groups related orders"],
        ["Phylum/Division", "Groups related classes"],
        ["Kingdom", "Broadest level, groups related phyla/divisions"],
      ],
      note: "Moving upward generally groups progressively broader sets; this is a nested relationship, not a strict measurable scale.",
    },
  ],

  mistakes: [
    { id: "terms-used-interchangeably", mistake: "Uses taxonomy, systematics and nomenclature interchangeably.", why: [{ type: "paragraph", children: [{ text: "Each term has a distinct function: grouping, broader relationship study, or naming." }] }], fix: [{ type: "paragraph", children: [{ text: "Use the function-based distinction matrix before answering." }] }], errorType: "knowledge-gap" },
    { id: "hierarchy-sequence-forgotten", mistake: "Cannot retrieve the hierarchy sequence.", why: [{ type: "paragraph", children: [{ text: "The nested species-to-kingdom sequence is a core retrieval item for this chapter." }] }], fix: [{ type: "paragraph", children: [{ text: "Blind-write the hierarchy, then verify against the correct order." }] }], errorType: "recall-gap" },
    { id: "genus-species-reversed", mistake: "Reverses genus and species-level naming roles in a two-part name.", why: [{ type: "paragraph", children: [{ text: "Binomial nomenclature places the genus name before the specific epithet, and mixing them up misreads the name." }] }], fix: [{ type: "paragraph", children: [{ text: "Parse the two-part name before selecting an answer." }] }], errorType: "execution-error" },
    { id: "one-characteristic-of-life", mistake: "Applies one \"characteristic of life\" as a universal rule.", why: [{ type: "paragraph", children: [{ text: "Some properties associated with life can appear in non-living systems, and some living states complicate a single-rule definition." }] }], fix: [{ type: "paragraph", children: [{ text: "Use the multi-property and edge-case check instead of one rule." }] }], errorType: "decision-error" },
    { id: "taxonomic-aids-as-current-scope", mistake: "Treats taxonomic aids as an explicit current 2026 bullet.", why: [{ type: "paragraph", children: [{ text: "Taxonomic aids are not named in the verified 2026 NEET Unit 1 bullet used for this page." }] }], fix: [{ type: "paragraph", children: [{ text: "Keep any taxonomic-aids content contextual until separately verified." }] }], errorType: "needs-review" },
  ],

  relatedChapters: [
    { label: "Biological Classification", url: "/neet/biology/biological-classification", relation: "forward", description: "Extends classification into the five-kingdom system and group-level detail." },
    { label: "Plant Kingdom", url: "/neet/biology/plant-kingdom", relation: "forward", description: "Applies classification foundations to plant groups." },
    { label: "Animal Kingdom", url: "/neet/biology/animal-kingdom", relation: "forward", description: "Applies classification foundations to animal groups." },
  ],

  links: [
    { label: "NEET Biology syllabus", url: "/neet/syllabus/biology", relation: "up", description: "Official current-scope hub for Biology." },
    { label: "NEET Biology", url: "/neet/biology", relation: "up", description: "Biology subject hub." },
  ],

  faqs: [
    { question: "Is taxonomy in the NEET UG 2026 Biology syllabus?", answer: [{ type: "paragraph", children: [{ text: "Yes. Unit 1 explicitly lists taxonomy and systematics, species, taxonomical hierarchy and binomial nomenclature." }] }] },
    { question: "Are taxonomy and nomenclature the same?", answer: [{ type: "paragraph", children: [{ text: "No. Nomenclature is the naming system, while taxonomy covers identification, naming and classification relationships at textbook depth." }] }] },
    { question: "Are taxonomic aids explicitly listed in NEET UG 2026 Unit 1?", answer: [{ type: "paragraph", children: [{ text: "Not in the verified official Unit 1 bullet used for this page. If retained for NCERT context, they require a contextual verification label." }] }] },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "nta-neet-documents", "ncert-biology-11-contents", "ncert-exemplar-index"],
  sourceNote: "Official ePathshala Class XI Biology resources were also reviewed for this page.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Botany, Zoology or Life Sciences specialist with taxonomy/systematics competence.",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Living World: Taxonomy, Systematics & Hierarchy",
    description:
      "Learn current NEET Living World foundations: biodiversity, classification, taxonomy, systematics, species, taxonomic hierarchy and binomial nomenclature.",
  },
};

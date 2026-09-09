import type { ChapterContent } from "@/content/types";

/**
 * Biological Classification — N02 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or priority claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until Biology SME review is recorded.
 * - Scope check (verified against the current NEET UG 2026 syllabus, Unit 1 —
 *   Diversity in Living World): five-kingdom classification, Monera, Protista
 *   and Fungi major groups, lichens, viruses and viroids are explicitly named.
 *   Modern phylogenetic/molecular classification frameworks are treated as a
 *   contextual boundary, not as current official scope.
 */
export const neetBiologyBiologicalClassification: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Biological Classification",
  slug: "biological-classification",
  url: "/neet/biology/biological-classification",
  canonicalIntent:
    "Teach the current NEET/NCERT classification framework and group distinctions, while clearly separating the exam-textbook five-kingdom model from modern phylogenetic frameworks that may use different classifications.",

  heroChips: [
    "Mapped to NEET UG 2026, Unit 1",
    "Five-kingdom framework with an explicit modern-classification boundary",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 explicitly uses the five-kingdom classification framework together with Monera, Protista, Fungi, lichens, viruses and viroids.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This chapter teaches that exam-textbook framework accurately while making one boundary explicit: the NCERT/NEET classification model is a syllabus framework and should not be presented as identical to every modern phylogenetic classification system.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        { text: "This page does not publish invented weightage, expected question counts or trend percentages." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Living World",
      url: "/neet/biology/living-world",
      relation: "prerequisite",
      description: "Establish what counts as living and why classification is needed before working with kingdom-level groups.",
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
      "Five-kingdom classification",
      "Salient features and classification of Monera",
      "Salient features and classification of Protista",
      "Salient features and classification of Fungi",
      "Lichens",
      "Viruses",
      "Viroids",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "criterion-driven-classification",
      title: "1. Classification is criterion-driven",
      keyIdea: "Organisms are grouped using combinations of criteria, not one memorable feature.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Organisms are placed into groups using combinations of cellular organisation, body organisation, mode of nutrition, reproduction and related textbook criteria. Do not classify from one memorable feature if other defining characteristics conflict.",
            },
          ],
        },
      ],
    },
    {
      id: "five-kingdom-framework",
      title: "2. Five-kingdom framework",
      keyIdea: "The five-kingdom system is explicitly current for NEET UG 2026.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The five kingdoms are Monera, Protista, Fungi, Plantae and Animalia. Detailed Plant Kingdom and Animal Kingdom teaching is reserved for their child chapters; this chapter carries current detail for Monera, Protista and Fungi.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "Exact group subdivisions and examples must be checked against current NCERT before publication rather than generated from memory." },
          ],
        },
      ],
    },
    {
      id: "monera",
      title: "3. Monera",
      keyIdea: "Prokaryotic organisation is the anchor for this group.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Teach prokaryotic organisation as the anchor, then layer NCERT group distinctions and examples. Do not import modern bacterial taxonomy or genomic clades as if they were part of the NEET 2026 five-kingdom syllabus.",
            },
          ],
        },
      ],
    },
    {
      id: "protista",
      title: "4. Protista",
      keyIdea: "Protista is the NCERT exam grouping of primarily unicellular eukaryotes.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Protista is taught as the NCERT exam grouping of primarily unicellular eukaryotes. Major NCERT groups are distinguished only after example and source verification.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            { text: "\u201CProtista\u201D in a historical five-kingdom framework is not a modern monophyletic claim." },
          ],
        },
      ],
    },
    {
      id: "fungi",
      title: "5. Fungi",
      keyIdea: "Combine cell type, nutrition and reproductive structures rather than relying on habitat alone.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Fungi are taught using structural, nutritional and reproductive distinctions at NCERT depth. The decision rule should combine cell type, nutrition and reproductive structures rather than rely on habitat alone.",
            },
          ],
        },
      ],
    },
    {
      id: "lichens",
      title: "6. Lichens",
      keyIdea: "A lichen is a textbook association of a fungal partner and a photosynthetic partner.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Lichens are taught as the textbook association involving a fungal partner and a photosynthetic partner, with terminology reviewed against NCERT. This chapter avoids expanding into a complete ecology of lichen symbiosis.",
            },
          ],
        },
      ],
    },
    {
      id: "virus-vs-viroid",
      title: "7. Viruses vs viroids",
      keyIdea: "Both are acellular, but they differ in the standard NCERT comparison by the presence or absence of a protein coat.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In the standard NCERT model, a virus is nucleic acid with a protein coat, while a viroid is an infectious RNA entity without a protein coat. Both are acellular and sit outside the five cellular kingdoms, yet both are explicitly current syllabus items.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "A high-risk confusion is treating a virus as a cellular microbe, or giving a viroid a viral protein capsid." },
          ],
        },
      ],
    },
    {
      id: "exam-vs-modern-boundary",
      title: "8. Exam-textbook vs modern phylogeny boundary",
      keyIdea: "This is the NEET/NCERT exam framework being learned for the current syllabus.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Modern classification uses phylogenetic and molecular evidence and may organise life differently. This chapter does not \u201Ccorrect\u201D the official syllabus into another framework, nor present the five-kingdom model as the final universal scientific consensus.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            { text: "This is the NEET/NCERT exam framework being learned for the current syllabus." },
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
        [
          "What is the chapter about?",
          "The five-kingdom classification framework, Monera, Protista and Fungi major groups, lichens, viruses and viroids, as verified in NEET UG 2026 Unit 1.",
        ],
        [
          "What is the central method choice?",
          "Combine multiple criteria — cellular organisation, body organisation, nutrition and reproduction — rather than classifying from a single memorable feature.",
        ],
        [
          "Where do most mistakes begin?",
          "Classifying from one feature only, mixing up the prokaryote/eukaryote boundary, misreading virus/viroid wording, and treating the five-kingdom model as identical to modern phylogeny.",
        ],
        [
          "What should come before Biological Classification?",
          "Living World, to establish what counts as living and why classification is needed.",
        ],
        [
          "What comes after it?",
          "Plant Kingdom and Animal Kingdom, which carry the detailed group-level classification for plants and animals.",
        ],
      ],
      note: "The official NEET syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "five-kingdom-overview",
      jump: true,
      slot: "concepts",
      heading: "Five-kingdom overview",
      intro: "High-level matrix for orientation; detailed Plant Kingdom and Animal Kingdom teaching lives in their own chapters.",
      columns: ["Kingdom/group", "Cell organisation focus", "Nutrition/organisation cue", "Route depth"],
      rows: [
        ["Monera", "Prokaryotic", "Group-specific modes vary", "Current detail here"],
        ["Protista", "Eukaryotic, primarily unicellular textbook grouping", "Diverse modes", "Current detail here"],
        ["Fungi", "Eukaryotic", "Heterotrophic absorptive relationship at NCERT depth", "Current detail here"],
        ["Plantae", "Eukaryotic multicellular plant framework", "Plant-group depth elsewhere", "Route to Plant Kingdom"],
        ["Animalia", "Eukaryotic multicellular animal framework", "Animal-group depth elsewhere", "Route to Animal Kingdom"],
      ],
    },
    {
      id: "virus-viroid-table",
      jump: true,
      slot: "concepts",
      heading: "Virus vs viroid",
      columns: ["Feature", "Virus", "Viroid"],
      rows: [
        [
          "Basic NCERT relationship",
          "Nucleic acid with a protein coat in the standard model",
          "Infectious RNA entity without a protein coat in the standard NCERT comparison",
        ],
        ["Cellular status", "Acellular", "Acellular"],
        ["High-risk confusion", "Treating virus as a cellular microbe", "Giving viroid a viral protein capsid"],
      ],
    },
  ],

  mistakes: [
    {
      id: "single-feature-classification",
      mistake: "Classifies from one feature only.",
      why: [{ type: "paragraph", children: [{ text: "Using a single memorable trait ignores other defining characteristics that may conflict with it." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the multi-criterion matrix that combines cellular organisation, nutrition and reproduction." }] }],
      errorType: "decision-error",
    },
    {
      id: "prokaryote-eukaryote-boundary",
      mistake: "Forgets the prokaryote/eukaryote group boundary.",
      why: [{ type: "paragraph", children: [{ text: "Without this anchor, Monera cannot be reliably separated from the eukaryotic kingdoms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Retrieve the cell-organisation anchor first, before applying any other criterion." }] }],
      errorType: "recall-gap",
    },
    {
      id: "virus-viroid-wording",
      mistake: "Misreads virus/viroid wording.",
      why: [{ type: "paragraph", children: [{ text: "The distinction depends on precise wording about nucleic acid and protein coat." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Circle the nucleic-acid and protein-coat clues before selecting an answer." }] }],
      errorType: "execution-error",
    },
    {
      id: "five-kingdom-as-final-phylogeny",
      mistake: "Thinks the five-kingdom system equals modern final phylogeny.",
      why: [{ type: "paragraph", children: [{ text: "The five-kingdom model is a syllabus framework, not the final word in modern classification science." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Read the exam-framework boundary note before assuming universal scientific consensus." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "unverified-modern-detail",
      mistake: "Adds unverified modern classification detail.",
      why: [{ type: "paragraph", children: [{ text: "Modern phylogenetic revisions are not part of the verified current official scope for this chapter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold any such detail until source and SME review confirms it belongs in current scope." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Plant Kingdom", url: "/neet/biology/plant-kingdom", relation: "related", description: "Detailed classification of Algae, Bryophytes, Pteridophytes and Gymnosperms." },
    { label: "Animal Kingdom", url: "/neet/biology/animal-kingdom", relation: "related", description: "Detailed classification of nonchordate phyla and chordate classes." },
    { label: "Plant Kingdom", url: "/neet/biology/plant-kingdom", relation: "forward", description: "Continue into detailed plant group classification." },
    { label: "Animal Kingdom", url: "/neet/biology/animal-kingdom", relation: "forward", description: "Continue into detailed animal group classification." },
  ],

  sources: ["ncert-biology-11-contents", "nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Verified against the NEET UG 2026 syllabus (Unit 1: Diversity in Living World) published through the NTA NEET source stack, and the official NCERT Biology Class XI chapter Biological Classification. Group subgroup details and examples require current NCERT verification before publication.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Botany, Zoology, Microbiology or Life Sciences specialist with classification competence.",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Biological Classification: Five Kingdoms | Rank Sarthi",
    description:
      "Learn NEET 2026 biological classification through the five-kingdom framework, Monera, Protista, Fungi, lichens, viruses and viroids with clear exam-context boundaries.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Genetics — NEET Biology umbrella chapter (T06).
 *
 * Scope discipline:
 * - CONTEXTUAL_UMBRELLA: "Genetics" is a Rank Sarthi navigation umbrella, not
 *   a literal official syllabus chapter heading. The current official
 *   academic basis is Unit 7: Genetics and Evolution, which explicitly
 *   includes heredity/variation, Mendelian inheritance, molecular basis of
 *   inheritance and evolution content.
 * - Detailed inheritance teaching belongs to /neet/biology/principles-of-inheritance
 *   and detailed molecular-genetics teaching belongs to
 *   /neet/biology/molecular-basis-of-inheritance. This page maps the
 *   relationship between them without duplicating their depth.
 * - No weightage, PYQ counts or trend claims are asserted.
 * - contentStatus stays "draft" until Genetics SME/academic review is recorded.
 */
export const neetBiologyGenetics: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Genetics",
  slug: "genetics",
  url: "/neet/biology/genetics",
  canonicalIntent:
    "Serve as the broad genetics learning map that connects inheritance, molecular genetics and evolution without duplicating the focused depth owned by Principles of Inheritance and Molecular Basis of Inheritance.",

  heroChips: [
    "Rank Sarthi navigation umbrella, not an official syllabus chapter heading",
    "Current official basis: Unit 7, Genetics and Evolution",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET, genetics is best studied as a relationship map rather than one undifferentiated chapter. Start with inheritance vocabulary and Mendelian relationships, connect those ideas to chromosomes and variation, then move into the molecular basis of inheritance and finally connect variation to evolution.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page keeps the map broad and deliberately shallow; detailed inheritance and molecular-genetics teaching belongs to the focused child routes it links to.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "\"Genetics\" is a Rank Sarthi navigation umbrella and is not a literal official syllabus chapter heading. Its current official academic basis is Unit 7: Genetics and Evolution.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Chromosome, nucleus and genetic-material context needed before inheritance and molecular genetics.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Nucleic-acid and biomolecule context used where the genetics focused pages invoke molecular structure.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the Biology chapter set.",
    },
    {
      label: "NEET Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Current official Biology unit scope, including Unit 7: Genetics and Evolution.",
    },
  ],

  syllabusMapping: {
    unit: "Genetics and Evolution (Unit 7) — Rank Sarthi umbrella route",
    topics: [
      "Heredity and variation",
      "Mendelian inheritance",
      "Genotype, phenotype and allele relationships",
      "Chromosome theory context for inheritance",
      "Molecular basis of inheritance (DNA/RNA, replication, transcription, genetic code, translation)",
      "Variation as a link to evolution",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "genetics-as-dependency-map",
      title: "1. Treat genetics as a dependency map, not one chapter",
      keyIdea: "This umbrella page shows which object or relationship belongs where; it does not compress every genetics chapter into one article.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The purpose of this umbrella is to help a student see which concept belongs to which focused route, so that inheritance rules, molecular mechanisms and evolutionary reasoning are never mixed up on a question. It intentionally stays broad instead of repeating the detail already owned by the focused child pages.",
            },
          ],
        },
      ],
    },
    {
      id: "layer-a-information-objects",
      title: "2. Layer A: biological information objects",
      keyIdea: "A gene, an allele and a chromosome are related but distinct information objects.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A gene is a unit of hereditary information located in the genetic material. An allele is an alternative form of a gene used in inheritance reasoning. Chromosomes organise genetic material inside the cell. These concepts should be taught with NCERT-backed, SME-reviewed wording rather than isolated memorised definitions.",
            },
          ],
        },
      ],
    },
    {
      id: "layer-b-inheritance-relationships",
      title: "3. Layer B: inheritance relationships",
      keyIdea: "Genotype, phenotype, alleles and inheritance patterns must be understood before attempting focused Mendelian problems.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The focused route Principles of Inheritance owns the verified current inheritance scope, including Mendelian inheritance, deviations from Mendelism, chromosome theory, sex determination, linkage/crossing over, sex-linked inheritance and the syllabus-specified disorders. Any pedigree-analysis content is treated as needing verification before it is presented as current official scope.",
            },
          ],
        },
      ],
    },
    {
      id: "layer-c-molecular-information-flow",
      title: "4. Layer C: molecular information flow",
      keyIdea: "DNA as genetic material, replication, transcription and translation are owned in depth by Molecular Basis of Inheritance.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current official syllabus explicitly includes DNA as genetic material, DNA/RNA structure, replication, transcription, the genetic code, translation and related molecular genetics content. This umbrella only shows where those mechanisms sit in the learning graph; it does not re-teach them.",
            },
          ],
        },
      ],
    },
    {
      id: "layer-d-variation-and-evolution",
      title: "5. Layer D: variation and evolution",
      keyIdea: "Variation is the conceptual bridge from inheritance to evolutionary reasoning.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Variation links inheritance to evolutionary reasoning. The Evolution route owns the detailed evidence, mechanisms and current syllabus depth for evolution; this page only makes the dependency visible.",
            },
          ],
        },
      ],
    },
    {
      id: "prerequisite-logic",
      title: "6. Confirm prerequisites before starting genetics",
      keyIdea: "Cell/nucleus/chromosome context and relevant biomolecule context should be secure first.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Before genetics, a student should be secure on cell, nucleus and chromosome context from Cell Biology, biomolecule context from Biomolecules where required, and the basic cell-division relationship that the genetics focused pages rely on when they discuss chromosome behaviour.",
            },
          ],
        },
      ],
    },
    {
      id: "question-classification",
      title: "7. Classify what a question is testing before solving it",
      keyIdea: "Decide whether an item is testing vocabulary, inheritance logic, chromosome/cell-division links, molecular mechanism, or variation/evolution before applying a rule.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A question-facing prompt should ask the student to classify what the item is actually testing: vocabulary/relationship, inheritance logic, chromosome/cell-division link, molecular mechanism, or variation/evolution connection. This classification step reduces the common decision error of applying a Mendelian rule to a molecular-genetics question, or the reverse.",
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
      heading: "What this umbrella page contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is this page about?",
          "A dependency map connecting inheritance vocabulary, Mendelian inheritance, chromosome/variation context, molecular genetics and evolution.",
        ],
        [
          "Is Genetics an official standalone syllabus heading?",
          "No. It is a Rank Sarthi navigation umbrella. The current official academic basis is Unit 7: Genetics and Evolution.",
        ],
        [
          "Where is detailed Mendelian inheritance taught?",
          "Principles of Inheritance.",
        ],
        [
          "Where is DNA replication, transcription and translation taught in depth?",
          "Molecular Basis of Inheritance.",
        ],
        [
          "What should come before Genetics?",
          "Cell Biology (chromosome/nucleus context) and relevant Biomolecules concepts.",
        ],
      ],
      note: "This page does not publish its own PYQ frequency or weightage.",
    },
    {
      id: "distinction-matrix",
      jump: true,
      slot: "concepts",
      heading: "Genetics distinction matrix",
      intro: "High-risk term pairs that are commonly confused across the genetics learning path. Definitions require SME sign-off before publication.",
      columns: ["Term A", "Term B", "What is commonly confused", "Owner route"],
      rows: [
        ["Gene", "Allele", "Treating a gene and one of its alternative forms as the same object.", "Principles of Inheritance"],
        ["Genotype", "Phenotype", "Confusing the genetic constitution with the observable expressed trait.", "Principles of Inheritance"],
        ["Chromosome", "Gene", "Treating a chromosome as a single unit of heredity instead of an organising structure carrying many genes.", "Cell Biology / Principles of Inheritance"],
        ["Replication", "Transcription", "Confusing DNA copying with RNA synthesis from a DNA template.", "Molecular Basis of Inheritance"],
        ["Transcription", "Translation", "Confusing RNA synthesis with protein synthesis from an RNA template.", "Molecular Basis of Inheritance"],
        ["Inheritance statement", "Molecular mechanism", "Applying a Mendelian ratio rule to a question that is actually testing a molecular process, or the reverse.", "Genetics umbrella"],
      ],
      note: "Any exception or contested phrasing is marked Needs Review until SME-approved.",
    },
  ],

  mistakes: [
    {
      id: "genetics-as-single-chapter",
      mistake: "Treating Genetics as one undifferentiated chapter instead of a map of related but distinct topics.",
      why: [{ type: "paragraph", children: [{ text: "Inheritance, chromosome behaviour, molecular mechanisms and evolution are related but tested with different reasoning, so merging them causes wrong-method answers." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the dependency map to place a question in the correct layer before choosing a method." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "vocabulary-without-context",
      mistake: "Can recite a term such as gene, allele or chromosome but cannot relate it to chromosome or inheritance context.",
      why: [{ type: "paragraph", children: [{ text: "Isolated memorised definitions do not transfer to questions that test relationships between objects." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Rebuild the object-relationship map instead of rereading isolated definitions." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "forgetting-exact-vocabulary",
      mistake: "Forgetting exact vocabulary or the sequence of steps in a molecular mechanism.",
      why: [{ type: "paragraph", children: [{ text: "Sequence-based recall degrades quickly without active retrieval practice." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use blind retrieval cards rather than passive rereading." }] }],
      errorType: "recall-gap",
    },
    {
      id: "misreading-genotype-statement",
      mistake: "Misreading a genotype/phenotype notation or a statement-based option.",
      why: [{ type: "paragraph", children: [{ text: "Genetics notation is symbol-dense, and a single misread symbol changes the answer." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Re-parse the symbols or statement conditions carefully before selecting an option." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-layer-selection",
      mistake: "Choosing inheritance logic (such as a Mendelian ratio) for a question that is actually testing a molecular mechanism, or the reverse.",
      why: [{ type: "paragraph", children: [{ text: "Inheritance and molecular genetics use different reasoning frameworks even though both sit under Unit 7." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Classify the question layer first: vocabulary, inheritance, chromosome/cell-division, molecular mechanism, or variation/evolution." }] }],
      errorType: "decision-error",
    },
    {
      id: "unverified-exception",
      mistake: "Treating an unclear exception or contested phrasing (such as an unverified pedigree-analysis claim) as confirmed current scope.",
      why: [{ type: "paragraph", children: [{ text: "Some inheritance-adjacent claims require SME/source confirmation before they can be presented as current official scope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold the claim and check the official syllabus mapping and linked sources before assuming it is current scope." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Principles of Inheritance",
      url: "/neet/biology/principles-of-inheritance",
      relation: "forward",
      description: "Owns the current focused Mendelian inheritance, chromosome theory and sex-linked inheritance scope.",
    },
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "forward",
      description: "Owns the current focused DNA/RNA structure, replication, transcription and translation scope.",
    },
    {
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "related",
      description: "Owns detailed evidence and mechanisms of evolution; this page only shows the variation-to-evolution dependency.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Chromosome, nucleus and genetic-material context needed before genetics.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Nucleic-acid and biomolecule context used across the genetics learning path.",
    },
  ],

  links: [
    {
      label: "NEET Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Current official Biology unit scope hub.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Biology subject hub.",
    },
  ],

  faqs: [
    {
      question: "Is Genetics an official standalone NEET UG 2026 unit name?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. The official unit is \"Genetics and Evolution.\" Rank Sarthi uses this Genetics page as a contextual navigation umbrella over the current genetics topics.",
            },
          ],
        },
      ],
    },
    {
      question: "What should I study before NEET genetics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Cell Biology and relevant Biomolecules concepts are useful prerequisites because genetics depends on cell, chromosome and genetic-material context.",
            },
          ],
        },
      ],
    },
    {
      question: "Where should detailed Mendelian inheritance be studied?",
      answer: [
        { type: "paragraph", children: [{ text: "Principles of Inheritance, which owns the current focused inheritance scope in depth." }] },
      ],
    },
    {
      question: "Where should DNA replication, transcription and translation be studied in depth?",
      answer: [
        { type: "paragraph", children: [{ text: "Molecular Basis of Inheritance, which owns the current focused molecular-genetics scope in depth." }] },
      ],
    },
  ],

  sources: [
    "nmc-neet-ug-2026-syllabus",
    "nta-neet-2026-bulletin",
    "ncert-biology-12-contents",
  ],
  sourceNote:
    "Current official basis verified against the NEET (UG) 2026 syllabus, Unit 7 (Genetics and Evolution), and NCERT Biology Class XII contents (Principles of Inheritance and Variation; Molecular Basis of Inheritance). This umbrella page paraphrases and maps concepts; it does not reproduce NCERT text or diagrams. Any biological claim not yet confirmed by SME review is marked Needs Review rather than presented as final.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Genetics: Inheritance & Molecular Genetics Map | Rank Sarthi",
    description:
      "Learn how NEET genetics connects inheritance, chromosomes, molecular genetics and evolution, with focused routes for inheritance and molecular basis.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Cell Biology — NEET Biology umbrella chapter (T06).
 *
 * Scope discipline:
 * - CONTEXTUAL_UMBRELLA: "Cell Biology" is a Rank Sarthi navigation umbrella
 *   route label, not official unit wording. Its current official basis is
 *   Unit 3: Cell Structure and Function, which explicitly includes cell
 *   theory, prokaryotic/eukaryotic cells, cell envelope/membrane/wall,
 *   organelles, nucleus/chromatin/nucleolus, biomolecules/enzymes, cell
 *   cycle, mitosis and meiosis.
 * - Detailed membrane-transport mechanisms are NOT asserted as guaranteed
 *   current scope; they remain flagged for verification before indexation.
 * - Detailed biomolecule teaching belongs to /neet/biology/biomolecules and
 *   detailed genetics teaching belongs to the Genetics umbrella and its
 *   focused children.
 * - contentStatus stays "draft" until Cell Biology SME/academic review is
 *   recorded, including verification of every organelle-function statement.
 */
export const neetBiologyCellBiology: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Cell Biology",
  slug: "cell-biology",
  url: "/neet/biology/cell-biology",
  canonicalIntent:
    "Create an umbrella learning page aligned to official Unit 3, connecting cell structure, organelles, biomolecules and cell division to later genetics/physiology learning, without silently expanding into detailed membrane-transport teaching.",

  heroChips: [
    "Rank Sarthi umbrella route over official Unit 3: Cell Structure and Function",
    "Detailed membrane transport flagged for verification, not asserted as guaranteed scope",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET Cell Biology, as used on this page, maps to the official Cell Structure and Function unit. The learning sequence is: the cell as the basic structural and functional unit, then prokaryotic and eukaryotic organisation, then cell envelope and organelles, then nucleus and genetic-material context, then biomolecules and enzymes, and finally cell cycle, mitosis and meiosis.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Detailed membrane transport is not assumed as a separate current-syllabus requirement here; that scope decision is held pending publication review against the official syllabus and NCERT.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "\"Cell Biology\" is a Rank Sarthi umbrella route label, not official unit wording. The official 2026 unit is Unit 3: Cell Structure and Function.",
        },
      ],
    },
  ],

  prerequisites: [
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
      description: "Current official Biology unit scope, including Unit 3: Cell Structure and Function.",
    },
  ],

  syllabusMapping: {
    unit: "Cell Structure and Function (Unit 3) — Rank Sarthi umbrella route",
    topics: [
      "Cell theory and cell as the basic unit of life",
      "Prokaryotic and eukaryotic cell organisation",
      "Cell envelope: cell membrane and cell wall",
      "Cell organelles: endomembrane system, mitochondria, ribosomes, plastids, microbodies, cytoskeleton",
      "Cilia, flagella and centrioles",
      "Nucleus, chromatin and nucleolus",
      "Basic constituents of living cells (biomolecules) and enzymes",
      "Cell cycle, mitosis and meiosis, and their significance",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "cell-as-organising-unit",
      title: "1. Treat the cell as the organising unit, not a memorisation list",
      keyIdea: "Cell theory and cell organisation are the foundation for the rest of Biology, not an isolated topic to memorise.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current syllabus establishes that cells are the basic unit of life and that cell theory and cell organisation, along with differences between major cell types, form the foundation for later Biology. The aim here is to relate structure to the biological role described in NCERT rather than reproduce a textbook chapter.",
            },
          ],
        },
      ],
    },
    {
      id: "prokaryotic-eukaryotic-organisation",
      title: "2. Compare prokaryotic and eukaryotic organisation at a high level",
      keyIdea: "Plant and animal cell comparisons are treated as eukaryotic organisation comparisons, not disconnected lists.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A reviewed comparison separates the high-level organisational features of prokaryotic and eukaryotic cells, using only current-scope, NCERT-backed distinctions. Plant and animal cell comparisons sit within this same eukaryotic organisation framework rather than as a separate disconnected list.",
            },
          ],
        },
      ],
    },
    {
      id: "cell-envelope",
      title: "3. Cell envelope, membrane and wall are current scope; detailed transport is flagged",
      keyIdea: "Structure and location/function of the cell envelope is current syllabus content; detailed membrane-transport mechanisms need verification before being presented as guaranteed current scope.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current official Unit 3 explicitly includes the cell envelope, cell membrane and cell wall, so their structural relationship and NCERT-level location/function can be taught here. A broad standalone module on detailed membrane-transport mechanisms remains flagged for verification unless review confirms it is a necessary contextual support rather than scope inflation.",
            },
          ],
        },
      ],
    },
    {
      id: "organelle-relationship-map",
      title: "4. Map organelles to their later dependency, not just their name",
      keyIdea: "Each organelle should be linked to the broad reviewed role it plays and to which later topic depends on it.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official unit lists major organelles including endomembrane-system components, mitochondria, ribosomes, plastids, microbodies and the cytoskeleton, plus cilia, flagella and centrioles. These are mapped to broad reviewed roles rather than presented as a memorisation dump: nucleus/chromatin connects to genetics prerequisites, mitochondria connects to cellular respiration context, plastids/chloroplast context connects to photosynthesis prerequisites, ribosomes connect to molecular genetics/protein-synthesis context, and the cytoskeleton/centrioles connect to cell-division and movement context.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Every organelle-function statement in this relationship map requires NCERT/SME verification before publication.",
            },
          ],
        },
      ],
    },
    {
      id: "nucleus-genetic-material-bridge",
      title: "5. Use the nucleus as the bridge to genetics, without pre-teaching genetics",
      keyIdea: "Nuclear membrane, chromatin and nucleolus set up the structural context for inheritance and molecular-genetics pages.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current unit explicitly includes the nuclear membrane, chromatin and nucleolus. This is the correct place to establish the structural context a student needs before detailed inheritance and molecular-genetics pages, without duplicating DNA replication, transcription or translation, which belong to Molecular Basis of Inheritance.",
            },
          ],
        },
      ],
    },
    {
      id: "biomolecules-enzymes-handoff",
      title: "6. Route biomolecules and enzymes forward rather than re-teach them",
      keyIdea: "Unit 3 includes basic constituents of living cells and enzyme-related content, owned in focused depth by Biomolecules.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Unit 3 also includes the basic constituents of living cells and enzyme-related content. The Biomolecules route owns focused depth on this; this page explains why biomolecules belong in the cell-function map and routes the student forward.",
            },
          ],
        },
      ],
    },
    {
      id: "cell-cycle-mitosis-meiosis",
      title: "7. Build the cell cycle and division bridge to inheritance",
      keyIdea: "Cell cycle, mitosis and meiosis are current explicit scope and set up the prerequisite bridge to inheritance.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official unit explicitly includes the cell cycle, mitosis, meiosis and their significance. This page creates the prerequisite bridge to inheritance without pre-teaching the full genetics child content, using a reviewed distinction between the purpose and context of mitosis and meiosis.",
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
          "Cell theory, cell organisation, the cell envelope, organelles, the nucleus, biomolecules/enzymes, and the cell cycle, mapped to later genetics and physiology topics.",
        ],
        [
          "Is Cell Biology an official unit name?",
          "No. The official unit is Cell Structure and Function (Unit 3). Cell Biology is a Rank Sarthi umbrella route label.",
        ],
        [
          "Is detailed membrane transport guaranteed current scope?",
          "No. Membrane structure is explicitly current, but detailed transport content is flagged for verification before indexation.",
        ],
        [
          "What comes after Cell Biology?",
          "Genetics, Principles of Inheritance, Molecular Basis of Inheritance and Human/Plant Physiology all build on structures introduced here.",
        ],
        [
          "Where are biomolecules taught in depth?",
          "Biomolecules, which owns the focused current scope.",
        ],
      ],
      note: "This page does not publish its own PYQ frequency or weightage.",
    },
    {
      id: "organelle-relationship-matrix",
      jump: true,
      slot: "concepts",
      heading: "Organelle-to-later-topic relationship matrix",
      intro: "Maps each structure to a broad NCERT-backed role and its later dependency. Every row requires SME/source verification before publication.",
      columns: ["Cell structure", "Broad NCERT-backed role", "Later Rank Sarthi dependency"],
      rows: [
        ["Nucleus / chromatin", "Houses and organises genetic material.", "Genetics umbrella and Principles of Inheritance"],
        ["Mitochondria", "Associated with cellular respiration context.", "Cellular respiration context in physiology"],
        ["Plastids / chloroplast context", "Associated with photosynthesis context in plant cells.", "Photosynthesis"],
        ["Ribosomes", "Associated with protein-synthesis context.", "Molecular Basis of Inheritance"],
        ["Cytoskeleton / centrioles", "Associated with cell-division and movement context.", "Cell cycle, mitosis and meiosis; Locomotion and Movement"],
        ["Cell membrane / cell wall", "Cell envelope providing boundary and, in plants, structural support.", "Flagged for verification: detailed membrane-transport scope"],
      ],
      note: "Any relationship not yet confirmed by SME review is marked Needs Review rather than presented as final.",
    },
  ],

  mistakes: [
    {
      id: "organelle-names-without-function",
      mistake: "Memorising organelle names without understanding their relational function.",
      why: [{ type: "paragraph", children: [{ text: "NEET questions typically test what an organelle does and how it connects to a later process, not just its name." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the organelle-to-process map to connect each structure to its later dependency." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "cannot-retrieve-terminology",
      mistake: "Cannot retrieve organelle or cell-component terminology under exam conditions.",
      why: [{ type: "paragraph", children: [{ text: "Passive rereading of diagrams does not build reliable recall of structure names and locations." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Blind-label an original cell diagram from memory and check it against a reviewed key." }] }],
      errorType: "recall-gap",
    },
    {
      id: "mislabelled-structure",
      mistake: "Mislabelling a structure or misreading a diagram under time pressure.",
      why: [{ type: "paragraph", children: [{ text: "Cell diagrams contain visually similar structures that are easy to confuse when read quickly." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use a cover-label-check step, then compare against the reviewed key before finalising an answer." }] }],
      errorType: "execution-error",
    },
    {
      id: "genetics-mechanism-on-structure-question",
      mistake: "Applying a genetics mechanism to a question that is actually testing cell structure.",
      why: [{ type: "paragraph", children: [{ text: "Structure, biomolecule and division questions require different reasoning than inheritance or molecular-genetics questions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Classify whether the item is testing structure, biomolecule content or division before choosing a method." }] }],
      errorType: "decision-error",
    },
    {
      id: "membrane-transport-scope-assumption",
      mistake: "Assuming detailed membrane-transport mechanisms are guaranteed current-syllabus depth because they appear in coaching notes.",
      why: [{ type: "paragraph", children: [{ text: "Cell envelope structure is current scope, but detailed transport mechanisms are not confirmed as a separate current-syllabus requirement without SME/source verification." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold the detail until SME/source verification confirms its current-scope status." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "related",
      description: "Owns the focused current scope for biomolecules and enzymes referenced in the cell-function map.",
    },
    {
      label: "Plant Physiology",
      url: "/neet/biology/plant-physiology",
      relation: "related",
      description: "Uses cell-level context, including plastid/chloroplast structure, for photosynthesis and related processes.",
    },
    {
      label: "Human Physiology",
      url: "/neet/biology/human-physiology",
      relation: "related",
      description: "Builds on cell-level structural context across multiple organ systems.",
    },
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "forward",
      description: "Umbrella route that depends on chromosome and nucleus context established here.",
    },
    {
      label: "Principles of Inheritance",
      url: "/neet/biology/principles-of-inheritance",
      relation: "forward",
      description: "Depends on chromosome-behaviour context established through cell division.",
    },
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "forward",
      description: "Depends on nucleus/genetic-material and ribosome context established here.",
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
      question: "Is \"Cell Biology\" the official NEET UG 2026 unit name?",
      answer: [
        { type: "paragraph", children: [{ text: "No. The official unit is Cell Structure and Function. Rank Sarthi uses Cell Biology as a contextual umbrella route." }] },
      ],
    },
    {
      question: "What does the current Cell Structure and Function unit include?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Cell theory and organisation, prokaryotic/eukaryotic cells, cell envelope/membrane/wall, organelles, nucleus/chromatin/nucleolus, biomolecules/enzymes, cell cycle, mitosis and meiosis.",
            },
          ],
        },
      ],
    },
    {
      question: "Is detailed membrane transport treated as a guaranteed current topic here?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Membrane structure is explicitly current, but detailed transport content remains subject to source/SME verification before indexation." },
          ],
        },
      ],
    },
    {
      question: "Which NCERT chapters are the main relationship anchors for this page?",
      answer: [
        { type: "paragraph", children: [{ text: "Cell: The Unit of Life, Biomolecules, and Cell Cycle and Cell Division from NCERT Biology Class XI." }] },
      ],
    },
  ],

  sources: [
    "nmc-neet-ug-2026-syllabus",
    "nta-neet-2026-bulletin",
    "ncert-biology-11-contents",
  ],
  sourceNote:
    "Current official basis verified against the NEET (UG) 2026 syllabus, Unit 3 (Cell Structure and Function), and NCERT Biology Class XI contents, especially Cell: The Unit of Life, Biomolecules, and Cell Cycle and Cell Division. This umbrella page uses original relationship mapping and paraphrased explanation; it does not reproduce NCERT diagrams or text. Detailed membrane-transport scope and every organelle-function statement require SME/source verification before publication.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Cell Biology: Structure, Organelles & Cell Division | Rank Sarthi",
    description:
      "Learn the current NEET cell-structure scope through cell types, membranes, organelles, biomolecules and cell division, with links into genetics and physiology.",
  },
};

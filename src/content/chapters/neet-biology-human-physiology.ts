import type { ChapterContent } from "@/content/types";

/**
 * Human Physiology — NEET Biology umbrella chapter (T06).
 *
 * Scope discipline:
 * - CURRENT_OFFICIAL_SCOPE: "Human Physiology" is the official Unit 5
 *   umbrella page. Its current official academic basis, Unit 5: Human
 *   Physiology, explicitly covers breathing/gas exchange, body fluids and
 *   circulation, excretory products, locomotion and movement, neural control
 *   and chemical coordination.
 * - Digestion and Absorption is NOT explicitly listed in the verified 2026
 *   Biology syllabus and is therefore treated as historical/not-current, not
 *   as a current Unit 5 child.
 * - Detailed system-level teaching belongs to the six focused child routes;
 *   this page maps relationships between them without duplicating depth.
 * - No medical diagnosis, treatment or dosage guidance is included.
 * - contentStatus stays "draft" until Physiology SME and medical-safety
 *   review are recorded.
 */
export const neetBiologyHumanPhysiology: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Human Physiology",
  slug: "human-physiology",
  url: "/neet/biology/human-physiology",
  canonicalIntent:
    "Own the system-level Human Physiology map, prerequisite relationships, regulation orientation and high-risk system distinctions, without duplicating the complete focused pages for breathing, circulation, excretion, locomotion, neural control and chemical coordination.",

  heroChips: [
    "Rank Sarthi navigation umbrella over official Unit 5: Human Physiology",
    "Digestion and Absorption is treated as historical, not current 2026 scope",
    "Educational NEET Biology resource, not medical advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET Human Physiology is best understood as a network of body systems rather than several isolated chapters. The current syllabus explicitly covers breathing and gas exchange, circulation, excretion, movement, neural control and chemical coordination.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Use this page to see how the systems depend on cell-level processes and on each other, then move to the focused route that owns the detail for a given system.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page is an educational NEET Biology resource. It does not provide medical diagnosis, treatment or dosage guidance.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Cell-level structural context that the six physiology systems build on.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Biomolecule context used where physiology topics rely on molecular-level explanation.",
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
      description: "Current official Biology unit scope, including Unit 5: Human Physiology.",
    },
  ],

  syllabusMapping: {
    unit: "Human Physiology (Unit 5) — Rank Sarthi system map",
    topics: [
      "Breathing and exchange of gases",
      "Body fluids and circulation",
      "Excretory products and their elimination",
      "Locomotion and movement",
      "Neural control and coordination",
      "Chemical coordination and integration",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "current-system-map",
      title: "1. Six current focused system routes",
      keyIdea: "Unit 5 explicitly covers six current system topics, each owned in depth by its own focused route.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Unit 5: Human Physiology is an exact current official Biology unit in the verified 2026 syllabus. Its explicit current topic clusters are breathing/respiration, body fluids/circulation, excretory products, locomotion/movement, neural control and chemical coordination. This page shows the dependency logic between them rather than duplicating a summary of every child page.",
            },
          ],
        },
      ],
    },
    {
      id: "relationship-layer",
      title: "2. How the six systems relate",
      keyIdea: "Exchange, transport, waste removal, movement and regulation form a connected system-level model.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Breathing and gas exchange provides the respiratory-system context that connects external exchange with transport in body fluids. Body fluids and circulation provide the transport network connecting exchange surfaces and tissues. Excretory processes connect metabolism to the removal and regulation of waste and fluid/solute balance within the current syllabus scope. Locomotion and movement depend on coordinated tissue and nervous-system function. Neural control and chemical coordination are major regulatory layers that help coordinate responses across organ systems.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "These are educational relationships to be verified against NCERT and by the Biology/physiology reviewer. This page does not turn them into personal medical explanations.",
            },
          ],
        },
      ],
    },
    {
      id: "regulation-as-organising-idea",
      title: "3. Use regulation as a conceptual organiser, not a diagnostic tool",
      keyIdea: "A generic input -> sensing/coordination -> response -> regulated condition pattern helps organise the systems, without implying every question is a regulation question.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Regulation of the internal environment is used only as a conceptual organising idea for this map. It does not imply that every Unit 5 question tests regulation, and it does not create clinical thresholds or self-diagnostic advice. Specific mechanisms are left to the current syllabus child pages.",
            },
          ],
        },
      ],
    },
    {
      id: "high-risk-distinctions",
      title: "4. Discriminate between systems, not just memorise them",
      keyIdea: "Ventilation, gas exchange and cellular respiration are commonly confused, as are neural signalling and chemical coordination.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The umbrella should prepare a student to discriminate: ventilation/breathing vs gas exchange vs cellular respiration; transport by circulation vs exchange at respiratory surfaces; excretion vs other forms of material removal; neural signalling vs endocrine/chemical coordination; and movement/locomotion vs the regulatory systems that coordinate them. Definitions and examples must remain NCERT-aligned and reviewer-approved.",
            },
          ],
        },
      ],
    },
    {
      id: "digestion-historical-note",
      title: "5. Digestion and Absorption is historical, not current Unit 5 scope",
      keyIdea: "Digestion and Absorption is not explicitly listed in the verified 2026 Biology syllabus and must not carry a current-syllabus badge.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The route for Digestion and Absorption may exist in the frozen site architecture, but it is not explicitly listed in the current Unit 5 for the verified 2026 syllabus. If it is surfaced from this page, it must carry a contextual/historical label rather than being presented as current official scope.",
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
          "A system-level relationship map across breathing/gas exchange, circulation, excretion, locomotion, neural control and chemical coordination.",
        ],
        [
          "Is Human Physiology an official unit?",
          "Yes. Unit 5: Human Physiology is a current official Biology unit in the verified 2026 syllabus.",
        ],
        [
          "Is Digestion and Absorption current Unit 5 scope?",
          "No. It is not explicitly listed in the verified 2026 Biology syllabus and is treated as historical.",
        ],
        [
          "What should come before Human Physiology?",
          "Cell Biology and relevant Biomolecules concepts.",
        ],
        [
          "What comes after it?",
          "Reproduction and Genetics build on regulatory and cellular concepts introduced here.",
        ],
      ],
      note: "This page does not publish its own PYQ frequency or weightage.",
    },
    {
      id: "system-confusion-matrix",
      jump: true,
      slot: "concepts",
      heading: "System confusion matrix",
      intro: "High-risk distinctions across the six current Human Physiology systems. Wording requires SME sign-off before publication.",
      columns: ["System focus", "Commonly confused with", "Focused route"],
      rows: [
        ["Ventilation/breathing", "Gas exchange at the respiratory surface and cellular respiration inside cells.", "Breathing and Exchange of Gases"],
        ["Transport by circulation", "Exchange occurring directly at respiratory or tissue surfaces.", "Body Fluids and Circulation"],
        ["Excretion of nitrogenous/other waste", "Other, non-excretory forms of material removal from the body.", "Excretory Products"],
        ["Locomotion and movement", "The regulatory systems (neural/chemical) that coordinate movement rather than produce it.", "Locomotion and Movement"],
        ["Neural signalling", "Endocrine/chemical coordination, which is slower and hormone-mediated.", "Neural Control"],
        ["Chemical coordination", "Neural control, which uses electrical/synaptic signalling rather than hormones.", "Chemical Coordination"],
      ],
      note: "Any exception or contested phrasing is marked Needs Review until SME-approved.",
    },
  ],

  mistakes: [
    {
      id: "systems-in-isolation",
      mistake: "Learning each organ system in isolation without understanding how systems relate to each other.",
      why: [{ type: "paragraph", children: [{ text: "Integrated NEET questions often require connecting two systems, such as circulation and respiration, rather than recalling one system alone." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the system relationship map to see how breathing, circulation, excretion, locomotion and the regulatory systems connect." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "forgetting-system-detail",
      mistake: "Forgetting a specific term, sequence or regulatory factor covered in a focused child page.",
      why: [{ type: "paragraph", children: [{ text: "Detailed physiological terminology and sequences fade without active retrieval practice." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use focused retrieval prompts on the relevant child page rather than rereading passively." }] }],
      errorType: "recall-gap",
    },
    {
      id: "diagram-misread",
      mistake: "Misreading a labelled diagram or a statement-based physiology question.",
      why: [{ type: "paragraph", children: [{ text: "Physiology diagrams and statements are detail-dense, and one misread label changes the answer." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use a diagram/statement precision check before selecting an answer." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-system-principle",
      mistake: "Applying the wrong system's principle to an integrated question, such as using a circulation rule for an excretion question.",
      why: [{ type: "paragraph", children: [{ text: "Integrated questions require identifying which system relationship is actually being tested before applying a rule." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify which system relationship the question is testing before choosing a method." }] }],
      errorType: "decision-error",
    },
    {
      id: "ambiguous-physiological-wording",
      mistake: "Treating ambiguous or beyond-syllabus physiological wording as settled fact.",
      why: [{ type: "paragraph", children: [{ text: "Some physiology-adjacent wording can drift toward clinical or beyond-syllabus territory without careful review." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold the claim and escalate to SME/medical-safety review rather than assuming it is confirmed." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Breathing and Exchange of Gases",
      url: "/neet/biology/breathing-exchange-gases",
      relation: "forward",
      description: "Owns detailed respiratory mechanics and gas-exchange scope.",
    },
    {
      label: "Body Fluids and Circulation",
      url: "/neet/biology/body-fluids-circulation",
      relation: "forward",
      description: "Owns detailed circulatory-system scope.",
    },
    {
      label: "Excretory Products",
      url: "/neet/biology/excretory-products",
      relation: "forward",
      description: "Owns detailed excretory-system scope.",
    },
    {
      label: "Locomotion and Movement",
      url: "/neet/biology/locomotion-movement",
      relation: "forward",
      description: "Owns detailed skeletal and muscular movement scope.",
    },
    {
      label: "Neural Control",
      url: "/neet/biology/neural-control",
      relation: "forward",
      description: "Owns detailed neural coordination scope.",
    },
    {
      label: "Chemical Coordination",
      url: "/neet/biology/chemical-coordination",
      relation: "forward",
      description: "Owns detailed endocrine/chemical coordination scope.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Cell-level structural context underlying every physiology system.",
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
    {
      label: "Digestion and Absorption",
      url: "/neet/biology/digestion-absorption",
      relation: "related",
      description: "Historical route: not explicitly listed in the verified 2026 Unit 5 scope, kept for architectural continuity only.",
    },
  ],

  faqs: [
    {
      question: "Is Human Physiology in the NEET UG 2026 Biology syllabus?",
      answer: [{ type: "paragraph", children: [{ text: "Yes. Human Physiology is official Unit 5 in the verified 2026 syllabus." }] }],
    },
    {
      question: "Which focused Human Physiology routes are current in this map?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Breathing and Exchange of Gases, Body Fluids and Circulation, Excretory Products, Locomotion and Movement, Neural Control, and Chemical Coordination." },
          ],
        },
      ],
    },
    {
      question: "Is Digestion and Absorption explicitly listed in the 2026 official Biology syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Rank Sarthi keeps the route for architectural continuity but labels it historical/not currently listed for the verified 2026 scope." },
          ],
        },
      ],
    },
    {
      question: "Does this page provide medical advice?",
      answer: [
        { type: "paragraph", children: [{ text: "No. It is an educational NEET Biology resource and stays inside academic syllabus intent." }] },
      ],
    },
  ],

  sources: [
    "nmc-neet-ug-2026-syllabus",
    "nta-neet-2026-bulletin",
    "ncert-biology-11-contents",
  ],
  sourceNote:
    "Current official basis verified against the NEET (UG) 2026 syllabus, Unit 5 (Human Physiology), and NCERT Biology Class XI contents covering Breathing and Exchange of Gases, Body Fluids and Circulation, Excretory Products and their Elimination, Locomotion and Movement, Neural Control and Coordination, and Chemical Coordination and Integration. This umbrella page paraphrases and connects those chapters rather than copying their text or diagrams. Any biological or physiological claim not yet confirmed by SME/medical-safety review is marked Needs Review rather than presented as final.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Human Physiology: System Map & Current Topics | Rank Sarthi",
    description:
      "Navigate current NEET Human Physiology through breathing, circulation, excretion, movement, neural control and chemical coordination, with system relationships and error checks.",
  },
};

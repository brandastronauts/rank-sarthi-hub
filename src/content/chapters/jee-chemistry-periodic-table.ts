import type { ChapterContent } from "@/content/types";

/**
 * Periodic Table — T06 production content.
 * Sourced from Rank Sarthi JEE Batch 08 Chemistry package, section 4.
 * Evidence discipline: no weightage, PYQ counts, or trend claims are asserted.
 * Contributor fields remain unassigned pending academic review.
 */
export const jeeChemistryPeriodicTable: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Periodic Table",
  slug: "periodic-table",
  url: "/jee/chemistry/periodic-table",
  canonicalIntent:
    "Predict and explain periodic properties from electronic configuration, shell structure, effective nuclear attraction, shielding, and electron-electron repulsion.",

  heroChips: [
    "JEE Main 2026: included",
    "JEE Advanced 2026: included",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "The periodic table arranges elements by increasing atomic number so that recurring valence-shell patterns produce recurring chemical properties. To compare two elements, write their relevant configurations, locate period and group, compare shell number, nuclear charge, shielding and subshell occupancy, then check for known electron-pairing or filled and half-filled subshell effects.",
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
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Electronic configuration, shells, and subshells used to explain every trend.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Distinguishing an atom from its ion and understanding electron-pair reasoning.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for the Chemistry chapter set.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Chemistry-level official scope.",
    },
  ],

  syllabusMapping: {
    unit: "Classification of Elements and Periodicity in Properties",
    topics: [
      "Modern periodic law and the present periodic table",
      "Block classification",
      "Atomic and ionic radii",
      "Ionisation enthalpy",
      "Electron-gain enthalpy",
      "Valence and oxidation states",
      "Electronegativity",
      "Reactivity",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "position",
      title: "1. Position: configuration suggests placement",
      keyIdea: "Highest occupied principal shell suggests period; valence configuration supports block and group placement.",
      body: [
        { type: "paragraph", children: [{ text: "Write the electronic configuration first. The highest occupied principal shell indicates the period, and the valence configuration indicates block and group." }] },
      ],
    },
    {
      id: "attraction",
      title: "2. Attraction: increasing nuclear charge",
      keyIdea: "Increasing nuclear charge can pull electrons closer.",
      body: [
        { type: "paragraph", children: [{ text: "A larger nuclear charge tends to pull the valence electron cloud inward, other factors held equal." }] },
      ],
    },
    {
      id: "shielding",
      title: "3. Shielding and shell addition offset attraction",
      keyIdea: "Inner electrons and new shells reduce or offset the attraction felt by a valence electron.",
      body: [
        { type: "paragraph", children: [{ text: "Effective nuclear charge is a model where inner shielding electrons and the addition of new shells reduce the net attraction felt by an outer electron." }] },
      ],
    },
    {
      id: "subshell-pairing",
      title: "4. Subshell occupancy and pairing create exceptions",
      keyIdea: "Penetration, subshell energy, filled or half-filled stability, and electron pairing create local exceptions.",
      body: [
        { type: "paragraph", children: [{ text: "A smooth trend line is only a starting expectation. Subshell energy, penetration, and pairing effects such as filled or half-filled stability can reverse the expected order locally." }] },
      ],
    },
    {
      id: "size",
      title: "5. Size depends on species and comparison set",
      keyIdea: "Atomic and ionic radii depend on species, charge, coordination convention, and comparison set.",
      body: [
        { type: "paragraph", children: [{ text: "A radius comparison is only valid between like species measured under comparable conventions; comparing an atom directly to an unrelated ion is not meaningful." }] },
      ],
    },
    {
      id: "energy",
      title: "6. Energy terms describe different processes",
      keyIdea: "Ionisation enthalpy and electron-gain enthalpy describe different processes. Electronegativity is a bonding concept, not an isolated-atom energy measurement.",
      body: [
        { type: "paragraph", children: [{ text: "Ionisation enthalpy is the energy to remove an electron from an isolated gaseous atom; electron-gain enthalpy is the energy change on adding an electron; electronegativity describes the pull on shared bonding electrons and is a distinct concept." }] },
      ],
    },
    {
      id: "consequence",
      title: "7. Valence, oxidation state, and reactivity are consequences",
      keyIdea: "Valence, oxidation state, bonding and reactivity are outcomes of the electronic pattern, not independent lists.",
      body: [
        { type: "paragraph", children: [{ text: "Rather than memorising reactivity or valence as separate facts, derive them from the electronic configuration and the periodic trend logic already established." }] },
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
          "Predicting and explaining periodic properties from electronic configuration, nuclear attraction, shielding, and electron-electron repulsion.",
        ],
        [
          "What is the central method choice?",
          "Write configuration, locate position, compare species-consistent shells, nuclear charge, and shielding, then check for subshell or pairing exceptions.",
        ],
        [
          "Where do most mistakes begin?",
          "Comparing an atomic radius with an ionic radius as if the definitions were identical, applying the isoelectronic rule before counting electrons, and equating electron-gain enthalpy with electronegativity.",
        ],
        [
          "What should come before Periodic Table?",
          "Electronic configuration and shell and subshell identification from Atomic Structure.",
        ],
        [
          "What comes after it?",
          "s-Block, p-Block, and d- and f-Block Elements apply these trend and exception patterns to detailed group chemistry.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Periodic Table",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Modern periodic law, table, and block classification",
          "Modern periodic law, present periodic table, and block classification are explicitly listed.",
          "Modern law, table, and configurations are explicitly listed.",
          "Learn block classification as the organising structure for group chemistry.",
        ],
        [
          "Radii, ionisation enthalpy, electron-gain enthalpy",
          "Trends in radii, ionisation enthalpy, and electron-gain enthalpy are explicitly listed.",
          "Radii, ionisation enthalpy, and electron-gain enthalpy are explicitly listed.",
          "Practise deriving each trend from configuration rather than memorising a graph.",
        ],
        [
          "Valence, oxidation states, electronegativity, and reactivity",
          "Valence, oxidation states, and reactivity are explicitly listed.",
          "Valence, oxidation states, and electronegativity are explicitly listed.",
          "Advanced names electronegativity explicitly; Main includes reactivity explicitly.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Periodic Table",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Electronic configuration",
          "Write the configuration of a given atom or ion.",
          "Revise Atomic Structure aufbau, Pauli, and Hund rules.",
        ],
        [
          "Shells and subshells",
          "Identify principal shell number and subshell type from a configuration.",
          "Revise quantum-number based shell and subshell identification.",
        ],
        [
          "Atom versus ion",
          "Distinguish a neutral atom's configuration from its cation or anion.",
          "Revise how electron removal or addition changes configuration.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: compare cause before quoting a trend",
      intro: "Match the described prompt to a first move and a final check.",
      columns: ["Prompt", "First move", "Final check"],
      rows: [
        ["Locate an element", "Write configuration", "Period, block, group"],
        ["Compare radii", "Identify species and electron count", "Shells, charge, isoelectronic condition"],
        ["Compare ionisation enthalpy", "Identify electron removed and subshell", "Pairing and filled or half-filled cases"],
        ["Compare electron gain", "State sign convention", "Compact-shell and stable-configuration exception"],
        ["Predict reactivity", "Identify likely electron loss, gain, or sharing", "Do not infer from size alone"],
      ],
    },
  ],

  formulas: [
    {
      id: "effective-nuclear-charge",
      expression: "Z_eff ≈ Z - S",
      latex: "Z_{\\mathrm{eff}}\\approx Z-S",
      meaning: "Effective nuclear charge model for net attraction felt by an electron.",
      variables: [
        { symbol: "Z", meaning: "actual nuclear charge", unit: "dimensionless" },
        { symbol: "S", meaning: "shielding constant, model-dependent", unit: "dimensionless" },
      ],
      useWhen: "Explaining why net attraction increases when nuclear charge rises more than shielding.",
      commonTrap: "Treating one shielding value as exact for every orbital.",
      accessibleText: "Effective nuclear charge is approximately equal to actual nuclear charge minus the shielding constant.",
    },
  ],

  workedExamples: [
    {
      id: "nitrogen-oxygen-ionisation",
      prompt: "Explain why nitrogen has a higher first ionisation enthalpy than oxygen despite oxygen having greater nuclear charge.",
      steps: [
        { type: "paragraph", children: [{ text: "Across Period 2, increasing nuclear charge suggests a rising first ionisation enthalpy, so a simple smooth-trend answer would place oxygen above nitrogen." }] },
        { type: "paragraph", children: [{ text: "Nitrogen has a half-filled 2p3 arrangement. Oxygen is 2p4, so one 2p orbital contains a paired electron." }] },
        { type: "paragraph", children: [{ text: "Electron-electron repulsion within that paired orbital makes removal from oxygen easier than the smooth trend alone would suggest." }] },
      ],
      answer: "Nitrogen has the higher first ionisation enthalpy. The correct workflow is broad trend, configuration, then exception check.",
      sourceRef: "ncert-chem-periodicity",
    },
  ],

  mistakes: [
    {
      id: "mass-number-organising",
      mistake: "Using mass number instead of atomic number as the organising principle.",
      why: [{ type: "paragraph", children: [{ text: "The modern periodic law organises elements by atomic number, not mass number." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always confirm atomic number is the basis for any periodic-table placement claim." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "atomic-vs-ionic-radius",
      mistake: "Comparing an atomic radius with an ionic radius as if definitions were identical.",
      why: [{ type: "paragraph", children: [{ text: "Atomic and ionic radii are defined and measured differently and are not directly interchangeable." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm both species being compared share the same definition type before comparing values." }] }],
      errorType: "decision-error",
    },
    {
      id: "isoelectronic-before-counting",
      mistake: "Applying the isoelectronic rule before counting electrons.",
      why: [{ type: "paragraph", children: [{ text: "The isoelectronic radius rule only applies to species that truly share the same electron count." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Count electrons for each species explicitly before applying the rule." }] }],
      errorType: "execution-error",
    },
    {
      id: "electron-gain-vs-electronegativity",
      mistake: "Saying electron-gain enthalpy and electronegativity are the same quantity.",
      why: [{ type: "paragraph", children: [{ text: "Electron-gain enthalpy describes an isolated-atom energy change; electronegativity describes a bonding-context electron pull." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the two concepts and their definitions separate in any explanation." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "ignoring-subshell-pairing",
      mistake: "Ignoring subshell and pairing effects in ionisation comparisons.",
      why: [{ type: "paragraph", children: [{ text: "A smooth trend line does not account for stability from filled or half-filled subshells or electron-pair repulsion." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check configuration and subshell occupancy for both species before finalising an ionisation-enthalpy comparison." }] }],
      errorType: "recall-gap",
    },
    {
      id: "reactivity-from-radius-alone",
      mistake: "Explaining chemical reactivity with radius alone.",
      why: [{ type: "paragraph", children: [{ text: "Reactivity depends on the full electronic pattern including configuration and energy terms, not radius by itself." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Derive reactivity from configuration, ionisation, and electron-gain reasoning together." }] }],
      errorType: "decision-error",
    },
    {
      id: "exception-free-trend",
      mistake: "Turning a general trend into an exception-free law.",
      why: [{ type: "paragraph", children: [{ text: "Periodic trends are general patterns; subshell and pairing effects create known local exceptions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always run the exception check after stating a general trend." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for JEE Chemistry.",
    },
    {
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Electronic configuration foundation for every periodic trend.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "related",
      description: "Uses periodic trends such as electronegativity in bonding predictions.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "related",
      description: "Uses periodic reactivity and oxidation-state reasoning.",
    },
    {
      label: "s-Block Elements",
      url: "/jee/chemistry/s-block-elements",
      relation: "forward",
      description: "Applies periodic trend and exception logic to s-block group chemistry.",
    },
    {
      label: "p-Block Elements",
      url: "/jee/chemistry/p-block-elements",
      relation: "forward",
      description: "Applies periodic trend and exception logic to p-block group chemistry.",
    },
    {
      label: "d- and f-Block Elements",
      url: "/jee/chemistry/d-and-f-block-elements",
      relation: "forward",
      description: "Applies periodic trend and exception logic to transition and inner-transition chemistry.",
    },
  ],

  links: [
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official syllabus hub.",
    },
    {
      label: "JEE Chemistry syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Chemistry-specific official scope.",
    },
  ],

  faqs: [
    {
      question: "What causes periodicity?",
      answer: [{ type: "paragraph", children: [{ text: "Recurring valence-shell electronic configurations as atomic number increases." }] }],
    },
    {
      question: "How do you compare an isoelectronic series?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Confirm equal electron counts, then expect the species with greater nuclear charge to be smaller, other model conditions being comparable." },
          ],
        },
      ],
    },
    {
      question: "Why are periodic trends not perfectly smooth?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Subshell energy, penetration, electron pairing, stable configurations, and changes in shell structure create local exceptions." },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-periodicity", "nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote:
    "Scope verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents. NCERT Classification and Periodicity resources support the modern law, table, configurations, trends, and exceptions. Official-paper archives are cited for provenance only; no frequency, marks, or trend claims are made from them.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type is a JEE Inorganic Chemistry educator experienced in electronic-structure explanations of periodicity.",
    "Academically reviewed by: unassigned. Reviewer specialization: atomic periodicity, main-group and transition-element trends, and current Main and Advanced scope, holding a postgraduate degree in Inorganic Chemistry, Physical Chemistry, or a closely related discipline.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Periodic Table for JEE 2026: Trends, Causes and Exceptions",
    description:
      "Learn JEE periodicity through electronic configuration, atomic and ionic size, ionisation, electron gain, electronegativity, exceptions, and reasoning.",
    ogTitle: "Periodic Table and Periodicity for JEE 2026",
    ogDescription: "Cause-based periodic trends, species checks, exceptions, and comparison methods.",
    ogType: "article",
  },
};

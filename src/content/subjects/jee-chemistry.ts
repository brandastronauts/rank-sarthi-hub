import type { SubjectHubContent } from "@/content/types";

/**
 * T04 — JEE Chemistry subject hub.
 *
 * Content source: accepted Batch 02 production package (Page 6, JEE Chemistry
 * hub). Chapter names and URLs are derived from the URL registry; this record
 * only carries the approved editorial annotation per route.
 */
export const jeeChemistryHub: SubjectHubContent = {
  url: "/jee/chemistry",
  platform: "jee",
  slug: "chemistry",
  subject: "Chemistry",
  exam: "JEE",
  eyebrow: "JEE · Chemistry",
  title: "JEE Chemistry: Complete Chapter Map and Learning Paths",
  intent:
    "Browse every approved JEE Chemistry chapter route and choose a learning path based on quantitative, structural, reaction, and evidence relationships.",
  contentStatus: "draft",
  chips: ["JEE Main 2026", "JEE Advanced 2026", "30 chapter routes"],
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Chemistry is easier to reason through when every chapter has a job. Mole Concept quantifies matter. Atomic Structure and Bonding explain structure. Thermodynamics and Equilibrium define what is possible and where a system settles. Kinetics explains how fast change occurs. Periodicity and coordination organise inorganic behavior. Organic principles explain how electron movement creates transformations. Practical Chemistry tests whether you can interpret evidence.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        { text: "Direct answer: ", bold: true },
        {
          text: "JEE Chemistry connects four kinds of work: quantify matter and energy, explain structure and periodicity, predict electron-driven transformations, and interpret practical evidence. Verify your target in the Chemistry syllabus, then use the 30-route map below. Advanced-only routes are clearly labelled and should not be presented as current Main 2026 units.",
        },
      ],
    },
  ],

  taskTable: {
    id: "tasks",
    heading: "Choose your Chemistry task",
    columns: ["Your task", "Best action"],
    rows: [
      ["Check current Main or Advanced scope", "Open the Chemistry syllabus and check Main and Advanced separately."],
      [
        "Repair numerical Chemistry",
        "Trace Mole Concept, Thermodynamics, Equilibrium, Solutions, Electrochemistry, and Kinetics in order.",
      ],
      [
        "Repair Inorganic Chemistry",
        "Trace Atomic Structure, Periodicity, Bonding, block chemistry, and Coordination Compounds.",
      ],
      [
        "Repair Organic Chemistry",
        "Trace Bonding, Organic Basics, Hydrocarbons, and functional-group transformations.",
      ],
      ["Review a wrong answer", "Classify the evidence before choosing more practice."],
    ],
    note: "Destinations that are not yet built are named rather than linked, so no dead link is rendered.",
  },

  architecture: {
    id: "concept-architecture",
    heading: "Chemistry concept architecture",
    columns: ["Reasoning layer", "Key question", "Connected route path"],
    rows: [
      [
        "Amount",
        "How much substance or charge is present?",
        "Mole Concept > Redox > Solutions > Electrochemistry",
      ],
      [
        "Structure",
        "Where are electrons, and how does structure affect behavior?",
        "Atomic Structure > Periodic Table > Chemical Bonding > Coordination Compounds",
      ],
      ["Energy", "Is a state or change energetically favourable?", "Thermodynamics > Equilibrium > Electrochemistry"],
      ["Rate", "How quickly does the system move?", "Chemical Kinetics, linked to energy barriers and mechanism"],
      [
        "Transformation",
        "Which bonds form or break, and why?",
        "Organic Basics > Hydrocarbons > Halogen, Oxygen, and Nitrogen families",
      ],
      [
        "Pattern",
        "How do periodic and electronic trends constrain behavior?",
        "Periodic Table > p-Block > d/f-Block > Coordination",
      ],
      [
        "Evidence",
        "What observation supports the conclusion?",
        "Practical Chemistry, qualitative analysis, functional-group tests, and calculation checks",
      ],
    ],
  },

  chapterMap: {
    heading: "All approved Chemistry chapter routes",
    scopeNote:
      "Scope labels: Both indicates verified presence in current Main and Advanced scope. Advanced indicates explicit Advanced scope without a separate current Main 2026 unit. A focused route may represent part of a broader official unit. These are scope labels, not importance claims. JEE Main's Principles Related to Practical Chemistry is covered on the Chemistry syllabus page because the approved registry contains no dedicated child route.",
    expectedCount: 30,
    notes: [
      {
        url: "/jee/chemistry/organic-basics",
        scope: "Both",
        order: 1,
        note: "Foundation for nomenclature, effects, intermediates, mechanism, and all later organic families.",
      },
      {
        url: "/jee/chemistry/chemical-bonding",
        scope: "Both",
        order: 2,
        note: "Connects atomic structure to molecular shape, stability, polarity, periodicity, and organic reasoning.",
      },
      {
        url: "/jee/chemistry/thermodynamics",
        scope: "Both",
        order: 3,
        note: "Defines energy, enthalpy, entropy, Gibbs energy, and spontaneity; supports equilibrium and electrochemistry.",
      },
      {
        url: "/jee/chemistry/equilibrium",
        scope: "Both",
        order: 4,
        note: "Connects mass action, Gibbs energy, disturbances, acids, bases, and solubility.",
      },
      {
        url: "/jee/chemistry/atomic-structure",
        scope: "Both",
        order: 5,
        note: "Explains orbitals and configurations; prerequisite for periodicity and bonding.",
      },
      {
        url: "/jee/chemistry/chemical-kinetics",
        scope: "Both",
        order: 6,
        note: "Separates rate from extent; connects rate laws, temperature, activation energy, and mechanism evidence.",
      },
      {
        url: "/jee/chemistry/electrochemistry",
        scope: "Both",
        order: 7,
        note: "Combines redox, equilibrium, electrical work, potentials, conductance, and cells.",
      },
      {
        url: "/jee/chemistry/coordination-compounds",
        scope: "Both",
        order: 8,
        note: "Builds on bonding, periodicity, d-block behavior, nomenclature, geometry, and magnetism.",
      },
      {
        url: "/jee/chemistry/p-block-elements",
        scope: "Both",
        order: 9,
        note: "Applies electronic configuration and periodic trends to group behavior.",
      },
      {
        url: "/jee/chemistry/d-and-f-block-elements",
        scope: "Both",
        order: 10,
        note: "Connects configuration, oxidation states, colour, magnetism, catalysis, and coordination.",
      },
      {
        url: "/jee/chemistry/hydrocarbons",
        scope: "Both",
        order: 11,
        note: "First full use of organic principles across substitution, addition, elimination, and aromatic chemistry.",
      },
      {
        url: "/jee/chemistry/haloalkanes-haloarenes",
        scope: "Both",
        order: 12,
        note: "Uses bond polarity, nucleophiles, mechanisms, stereochemical consequences, and aromatic substitution.",
      },
      {
        url: "/jee/chemistry/alcohols-phenols-ethers",
        scope: "Both",
        order: 13,
        note: "Connects acidity, substitution, elimination, oxidation, and aromatic effects.",
      },
      {
        url: "/jee/chemistry/aldehydes-ketones",
        scope: "Both",
        order: 14,
        note: "Centres on carbonyl reactivity, nucleophilic addition, redox, condensation, and tests.",
      },
      {
        url: "/jee/chemistry/carboxylic-acids",
        scope: "Both",
        order: 15,
        note: "Connects acidity, derivatives, substitution, preparation, and reduction.",
      },
      {
        url: "/jee/chemistry/amines",
        scope: "Both",
        order: 16,
        note: "Uses basicity, preparation, reactions, diazonium chemistry, and qualitative distinctions.",
      },
      {
        url: "/jee/chemistry/biomolecules",
        scope: "Both",
        order: 17,
        note: "Applies structure and functional groups to carbohydrates, proteins, nucleic acids, and related molecules.",
      },
      {
        url: "/jee/chemistry/polymers",
        scope: "Advanced",
        order: 18,
        note: "Explicit Advanced 2026 topic; not a separate Main 2026 unit.",
      },
      {
        url: "/jee/chemistry/solutions",
        scope: "Both",
        order: 19,
        note: "Builds on amount and equilibrium; connects concentration, vapour pressure, and colligative properties.",
      },
      {
        url: "/jee/chemistry/solid-state",
        scope: "Advanced",
        order: 20,
        note: "Explicit Advanced 2026 topic; not a separate Main 2026 unit.",
      },
      {
        url: "/jee/chemistry/surface-chemistry",
        scope: "Advanced",
        order: 21,
        note: "Explicit Advanced 2026 topic; connects interfaces, adsorption, colloids, emulsions, and micelles.",
      },
      {
        url: "/jee/chemistry/redox-reactions",
        scope: "Both",
        order: 22,
        note: "Foundation for oxidation-number control, balancing, electrochemistry, and inorganic reactions.",
      },
      {
        url: "/jee/chemistry/s-block-elements",
        scope: "Advanced",
        order: 23,
        note: "Explicit Advanced 2026 topic; not a separate Main 2026 unit.",
      },
      {
        url: "/jee/chemistry/states-of-matter",
        scope: "Advanced",
        order: 24,
        note: "Advanced explicitly lists gases and liquids, including intermolecular effects.",
      },
      {
        url: "/jee/chemistry/periodic-table",
        scope: "Both",
        order: 25,
        note: "Organises configuration, radii, ionisation, electron gain, valence, oxidation, and reactivity.",
      },
      {
        url: "/jee/chemistry/mole-concept",
        scope: "Both",
        order: 26,
        note: "Quantitative foundation for stoichiometry, concentration, redox, gases, solutions, and yield reasoning.",
      },
      {
        url: "/jee/chemistry/ionic-equilibrium",
        scope: "Both",
        order: 27,
        note: "Focused route for acids, bases, pH, buffers, hydrolysis, common ion effect, and solubility.",
      },
      {
        url: "/jee/chemistry/gaseous-state",
        scope: "Advanced",
        order: 28,
        note: "Focused route within the explicit Advanced States of Matter topic.",
      },
      {
        url: "/jee/chemistry/environmental-chemistry",
        scope: "Advanced",
        order: 29,
        note: "Explicit Advanced 2026 topic; not a separate Main 2026 unit.",
      },
      {
        url: "/jee/chemistry/chemistry-everyday-life",
        scope: "Advanced",
        order: 30,
        note: "Explicit Advanced 2026 topic; not a separate Main 2026 unit.",
      },
    ],
  },

  pyqNote:
    "The approved Chemistry previous-year-paper destination is /jee/previous-year-papers/chemistry. It is linked only after official paper provenance, answer or solution status, and page state are verified. Paper browsing is never converted into unsupported topic-frequency statements.",

  diagnosis: {
    id: "diagnosis",
    heading: "Diagnose a Chemistry loss",
    columns: ["Attempt evidence", "Likely primary label", "Repair"],
    rows: [
      [
        "The model, rule, or mechanism is not understood",
        "Knowledge Gap",
        "Rebuild the explanation and test it on contrasting examples.",
      ],
      [
        "A reagent, trend, formula, condition, or observation cannot be retrieved",
        "Recall Gap",
        "Use cue-based retrieval with conditions and counterexamples.",
      ],
      [
        "The method is right but stoichiometry, charge, sign, unit, structure, or arithmetic fails",
        "Execution Error",
        "Isolate the step and add a written check.",
      ],
      [
        "The wrong model, reagent path, approximation, or question order is chosen",
        "Decision / Selection Error",
        "Compare competing approaches and state the selection condition.",
      ],
      ["The response could reflect more than one cause", "Needs Review", "Gather a second example before deciding."],
    ],
  },

  relatedLinks: [
    { label: "JEE syllabus", url: "/jee/syllabus", relation: "up" },
    { label: "Chemistry syllabus", url: "/jee/syllabus/chemistry", relation: "up" },
    { label: "JEE Advanced syllabus", url: "/jee/jee-advanced/syllabus", relation: "related" },
    { label: "Physics hub", url: "/jee/physics", relation: "related" },
    { label: "Mathematics hub", url: "/jee/mathematics", relation: "related" },
  ],

  faqs: [
    {
      question: "Should I start Organic Chemistry by memorising reactions?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. First stabilise bonding, electronic effects, intermediates, acidity and basicity, and reaction types. Reaction recall becomes more reliable when the mechanism has a structure.",
            },
          ],
        },
      ],
    },
    {
      question: "Why are some hub routes labelled Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official Advanced 2026 syllabus explicitly lists them, while the official Main 2026 syllabus does not list them as separate units.",
            },
          ],
        },
      ],
    },
    {
      question: "Are all official Main Chemistry units separate registry pages?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. The registry groups some official scope into broader routes, and Practical Chemistry has no dedicated approved child route. The syllabus page remains the controlling coverage map.",
            },
          ],
        },
      ],
    },
    {
      question: "Where is chapter weightage?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is intentionally absent because no approved historical dataset and method is supplied.",
            },
          ],
        },
      ],
    },
  ],

  sourceRefs: ["nta-jee-syllabus", "jee-advanced-syllabus"],
  lastVerified: "8 September 2026",

  seo: {
    title: "JEE Chemistry Chapters: Complete Main and Advanced Map",
    description:
      "Browse all approved JEE Chemistry chapters with official scope labels, prerequisites, domain connections, and structured learning paths.",
    ogTitle: "JEE Chemistry Chapter Map | Rank Sarthi",
    ogDescription:
      "Navigate every approved Chemistry chapter by official scope, prerequisite, and reaction or reasoning relationship.",
    ogType: "website",
  },
};

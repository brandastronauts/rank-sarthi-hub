import type { ChapterContent } from "@/content/types";

/**
 * Surface Chemistry — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, or PYQ-count claims are asserted.
 * - contentStatus stays "draft" until academic review is recorded.
 * - JEE Main 2026: Surface Chemistry is not a named theory unit. The
 *   practical syllabus includes preparation of lyophilic and lyophobic
 *   sols (PARTIAL OR MERGED). JEE Advanced 2026 explicitly INCLUDES
 *   elementary adsorption, physisorption, chemisorption, the Freundlich
 *   isotherm, colloid types and preparation, and elementary emulsions,
 *   surfactants, and micelles. This page owns interfacial and dispersed
 *   system reasoning; Chemical Kinetics owns catalytic rate treatment and
 *   Solid State owns bulk crystal structure.
 */
export const jeeChemistrySurfaceChemistry: ChapterContent = {
  exam: "JEE",
  examVariant: "JEE Advanced",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Surface Chemistry",
  slug: "surface-chemistry",
  url: "/jee/chemistry/surface-chemistry",
  canonicalIntent:
    "Distinguish surface accumulation, adsorption models, colloidal systems, and micellar behaviour by identifying the interface, particles, interactions, and operating conditions.",

  heroChips: [
    "JEE Advanced 2026: included topic",
    "JEE Main 2026: practical-syllabus overlap only",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Surface Chemistry studies behaviour at an interface. In JEE problems, first decide whether the question concerns adsorption on a surface, a colloidal dispersion, an emulsion, or aggregation by a surfactant.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Then identify the interacting species, the dominant forces, the conditions, and whether the statement describes equilibrium amount, rate, stability, or optical and electrical behaviour.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "JEE Main 2026 does not list Surface Chemistry as a theory unit. Its practical section includes preparation of lyophilic and lyophobic sols only. JEE Advanced 2026 includes Surface Chemistry as a full topic.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not publish invented weightage, expected question counts or trend percentages.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Distinguishing intermolecular attraction from chemical bonding underpins physisorption versus chemisorption.",
    },
    {
      label: "States of Matter",
      url: "/jee/chemistry/states-of-matter",
      relation: "prerequisite",
      description: "Phase identification is needed before naming the interface in an adsorption or colloid problem.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "related",
      description: "Concentration reasoning supports dispersed-phase and dispersion-medium classification.",
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
      description: "Exam-level official Chemistry scope.",
    },
  ],

  syllabusMapping: {
    unit: "Surface Chemistry (JEE Advanced General Topics scope)",
    topics: [
      "Elementary adsorption",
      "Physisorption and chemisorption",
      "Freundlich adsorption isotherm",
      "Colloid types, preparation, and general properties",
      "Emulsions, surfactants, and micelles (elementary)",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "interface",
      title: "1. Name the interface first",
      keyIdea: "Identify the two phases that meet and the phase whose surface is being studied.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every Surface Chemistry problem starts with an interface between two phases. Naming which phase provides the surface and which phase interacts with it prevents confusion between adsorption, absorption, and bulk phenomena.",
            },
          ],
        },
      ],
    },
    {
      id: "adsorbent-adsorbate",
      title: "2. Separate the adsorbent from the adsorbate",
      keyIdea: "The adsorbent provides the surface; the adsorbate accumulates at it.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The adsorbent is the solid or liquid surface. The adsorbate is the gas or dissolved species that accumulates at that surface. Keeping the two roles separate avoids reversing cause and effect in an adsorption statement.",
            },
          ],
        },
      ],
    },
    {
      id: "interaction-type",
      title: "3. Classify the interaction as weak or specific",
      keyIdea: "Weak intermolecular attraction suggests physisorption; specific bond formation suggests chemisorption.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Physisorption arises from weak intermolecular forces. Chemisorption involves a more specific chemical interaction between adsorbate and adsorbent. This distinction governs how the adsorption behaves under changing conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "dispersion-stability",
      title: "4. Identify the dispersed phase, medium, and stability factors",
      keyIdea: "A colloid distributes a dispersed phase through a dispersion medium, and its stability depends on particle size, solvation, charge, and added electrolyte.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In a colloidal system, the dispersed phase is distributed through the dispersion medium. Whether particles remain dispersed or coagulate depends on particle size, solvation, charge, collisions, and any added electrolyte.",
            },
          ],
        },
      ],
    },
    {
      id: "aggregation",
      title: "5. Recognise the conditions for micelle formation",
      keyIdea: "Surfactant molecules aggregate into micelles only under suitable concentration and temperature conditions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Surfactant aggregation into micelles requires the surfactant concentration and temperature to meet the conditions needed for the surfactant's hydrophobic and hydrophilic parts to organise into a stable aggregate.",
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
        [
          "What is the chapter about?",
          "Behaviour at an interface: adsorption, colloidal dispersion, emulsions, and surfactant aggregation into micelles.",
        ],
        [
          "What is the central method choice?",
          "Identify the interface and the two phases involved, classify the interaction as physisorption or chemisorption, and confirm the conditions before applying an isotherm or colloid rule.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing adsorption with absorption, treating the Freundlich relation as a universal law, and applying counter-ion rules before identifying the sol's charge.",
        ],
        [
          "What should come before Surface Chemistry?",
          "Chemical Bonding for intermolecular versus chemical interactions, and States of Matter for phase identification.",
        ],
        [
          "What comes after it?",
          "Environmental Chemistry builds on some surface-related applications at an elementary level.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Surface Chemistry",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Surface Chemistry as a theory unit",
          "NOT LISTED as a named theory unit.",
          "INCLUDED. Elementary adsorption, physisorption, chemisorption, the Freundlich isotherm, colloid types and preparation, and general colloidal properties are explicitly listed.",
          "Treat this as an Advanced-focused chapter for theory depth.",
        ],
        [
          "Preparation of sols",
          "PARTIAL. The practical syllabus includes preparation of lyophilic and lyophobic sols.",
          "Covered as part of colloid preparation and types.",
          "Main relevance is limited to the stated practical item; do not assume broader Main theory coverage.",
        ],
        [
          "Emulsions, surfactants, and micelles",
          "NOT LISTED.",
          "INCLUDED at an elementary level, with definitions and examples.",
          "Keep definitions elementary and example-based, matching the official wording.",
        ],
        [
          "Catalysis",
          "Covered under Chemical Kinetics, not this chapter.",
          "Covered under Chemical Kinetics, not under the Surface Chemistry heading.",
          "Route catalyst-depth questions to Chemical Kinetics.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Surface Chemistry",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Intermolecular forces versus chemical bonding",
          "Distinguish a weak intermolecular attraction from a specific chemical bond.",
          "Revise bonding types from Chemical Bonding.",
        ],
        [
          "Phase identification",
          "Name the phases meeting at a given interface.",
          "Revise solid, liquid, and gas phase behaviour from States of Matter.",
        ],
        [
          "Logarithms and proportional relationships",
          "Read a logarithmic plot and interpret slope and intercept.",
          "Practise plotting and reading log-log relationships.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: match the signal to the model",
      intro: "Identify the system type before applying any adsorption or colloid rule.",
      columns: ["Signal", "Use this model", "Check before answering"],
      rows: [
        ["Gas on a solid surface", "Adsorption", "Surface area, pressure, temperature, interaction type"],
        ["Freundlich data or log plot", "Empirical isotherm", "Fixed temperature and valid pressure range"],
        ["Dispersed particles and light", "Colloid", "Particle scale and scattering geometry"],
        ["Motion in an electric field", "Electrophoresis", "Particle charge and electrode direction"],
        ["Coagulation by electrolyte", "Counter-ion action", "Charge on sol particles and counter-ion valence"],
        ["Surfactant aggregation", "Micelle model", "Concentration and temperature conditions"],
      ],
    },
  ],

  formulas: [
    {
      id: "freundlich-isotherm",
      expression: "x/m = k P^(1/n)",
      latex: "\\dfrac{x}{m}=kP^{1/n}",
      meaning: "Empirical relation for the mass of gas adsorbed per unit mass of adsorbent as a function of pressure.",
      variables: [
        { symbol: "x/m", meaning: "mass adsorbed per mass of adsorbent", unit: "depends on data convention" },
        { symbol: "P", meaning: "pressure of the adsorbate gas", unit: "depends on data convention" },
        { symbol: "k", meaning: "empirical constant", unit: "depends on data convention" },
        { symbol: "n", meaning: "empirical constant", unit: "dimensionless" },
      ],
      useWhen: "Adsorption data is being described empirically at a fixed temperature and within a limited pressure range.",
      commonTrap: "Treating the Freundlich relation as a universal law or as a model with a saturation plateau.",
      accessibleText: "Mass adsorbed per mass of adsorbent equals k times pressure raised to the power one over n.",
    },
    {
      id: "freundlich-linear-form",
      expression: "log(x/m) = log k + (1/n) log P",
      latex: "\\log(x/m)=\\log k+(1/n)\\log P",
      meaning: "Linear form of the Freundlich relation used to extract k and n from a log-log plot.",
      variables: [
        { symbol: "slope", meaning: "equal to 1/n", unit: "dimensionless" },
        { symbol: "intercept", meaning: "equal to log k", unit: "matches the logarithm base used" },
      ],
      useWhen: "A straight-line log-log plot of adsorption data is available at a fixed temperature.",
      commonTrap: "Reading the intercept directly as k instead of as the logarithm of k.",
      accessibleText: "Log of mass adsorbed per mass of adsorbent equals log k plus one over n times log pressure.",
    },
  ],

  workedExamples: [
    {
      id: "freundlich-plot-decode",
      prompt:
        "A graph of log(x/m) against log P is a straight line with slope 0.40 and intercept 0.30. Find n and k, and state the limits of the conclusion.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "The slope equals 1/n, so 1/n = 0.40 and n = 2.5." }],
        },
        {
          type: "paragraph",
          children: [{ text: "The intercept equals log k. If base-10 logarithms are used, k = 10^0.30." }],
        },
        {
          type: "paragraph",
          children: [
            { text: "The conclusion is valid only for the stated adsorbent, adsorbate, temperature, units, and empirical pressure range." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Extrapolation to arbitrarily high pressure is not justified, because the Freundlich form does not impose a saturation plateau." },
          ],
        },
      ],
      answer: "n = 2.5; k = 10^0.30, valid only within the stated conditions and data range.",
    },
  ],

  mistakes: [
    {
      id: "adsorption-vs-absorption",
      mistake: "Confusing adsorption with absorption.",
      why: [{ type: "paragraph", children: [{ text: "Adsorption is accumulation at a surface, while absorption involves entry into the bulk of a material; the two describe different locations of the process." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the species stays at the surface or is taken into the bulk before naming the process." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "colloid-not-a-phase",
      mistake: "Calling a colloid a separate thermodynamic phase without identifying its dispersed phase and dispersion medium.",
      why: [{ type: "paragraph", children: [{ text: "A colloid is defined by the combination of a dispersed phase and a dispersion medium, not by being a distinct thermodynamic phase on its own." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Name the dispersed phase and dispersion medium explicitly before classifying the colloidal system." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "physisorption-chemisorption-exclusive",
      mistake: "Treating physisorption and chemisorption as mutually exclusive in every real system.",
      why: [{ type: "paragraph", children: [{ text: "Real adsorption systems can show characteristics of both types depending on conditions such as temperature." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Base the classification on the stated interaction evidence rather than assuming exclusivity." }] }],
      errorType: "decision-error",
    },
    {
      id: "missing-fixed-temperature",
      mistake: "Omitting fixed temperature from an adsorption-isotherm statement.",
      why: [{ type: "paragraph", children: [{ text: "The Freundlich isotherm and similar relations are only valid at the temperature at which the data was recorded." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the temperature explicitly whenever an isotherm relation or constant is used." }] }],
      errorType: "recall-gap",
    },
    {
      id: "counter-ion-before-charge",
      mistake: "Using counter-ion valence rules before identifying the charge on the sol.",
      why: [{ type: "paragraph", children: [{ text: "Coagulation behaviour depends on the counter-ion opposite in charge to the sol particles, so the sol's own charge must be identified first." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the charge on the colloidal particles before applying any counter-ion coagulation rule." }] }],
      errorType: "decision-error",
    },
    {
      id: "main-scope-overclaim",
      mistake: "Claiming JEE Main theory coverage of Surface Chemistry from the narrow practical-sol preparation item.",
      why: [{ type: "paragraph", children: [{ text: "JEE Main 2026 lists sol preparation only in its practical syllabus and does not list Surface Chemistry as a theory unit." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming Main theory relevance." }] }],
      errorType: "needs-review",
    },
    {
      id: "micelle-unsupported-claims",
      mistake: "Extending micelle definitions into numerical claims not supported by the official elementary scope.",
      why: [{ type: "paragraph", children: [{ text: "The official Advanced syllabus lists micelles at an elementary, definitional level rather than a detailed numerical treatment." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep micelle content at the definitional and example level matching the official wording." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Chemical Kinetics",
      url: "/jee/chemistry/chemical-kinetics",
      relation: "related",
      description: "Owns catalytic rate treatment, kept separate from this chapter's interfacial and colloidal reasoning.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "related",
      description: "Concentration reasoning supports dispersion medium and dispersed phase classification.",
    },
    {
      label: "Environmental Chemistry",
      url: "/jee/chemistry/environmental-chemistry",
      relation: "forward",
      description: "Builds on elementary surface-related applications.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Provides the intermolecular-force versus chemical-bond distinction used to classify adsorption.",
    },
    {
      label: "States of Matter",
      url: "/jee/chemistry/states-of-matter",
      relation: "prerequisite",
      description: "Phase identification needed before naming the interface in an adsorption or colloid problem.",
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
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Chemistry subject hub.",
    },
    {
      label: "JEE Chemistry syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "related",
      description: "Official Chemistry scope reference.",
    },
  ],

  faqs: [
    {
      question: "Is Surface Chemistry in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "It is not a named theory unit. The practical syllabus includes preparation of lyophilic and lyophobic sols." },
          ],
        },
      ],
    },
    {
      question: "Is Surface Chemistry in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Yes. The official syllabus includes elementary adsorption, the Freundlich isotherm, colloids, and elementary emulsion, surfactant, and micelle concepts." },
          ],
        },
      ],
    },
    {
      question: "What is the difference between adsorption and absorption?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Adsorption is accumulation at a surface. Absorption involves entry into the bulk of a material." },
          ],
        },
      ],
    },
  ],

  sources: [
    "jee-advanced-syllabus",
    "nta-jee-syllabus",
    "ncert-chem-exemplar",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Official Advanced archive items are used for current theory examples. A Main item is eligible only when it maps to the current practical-sol scope or another explicit current unit. No frequency or weightage is derived from the archive.",
  contributorPolicy: [
    "Contributor fields remain unassigned until a centralized, visible, verified profile is linked.",
  ],

  contentStatus: "draft",
  meta: {
    title: "Surface Chemistry for JEE Advanced 2026: Adsorption and Colloids",
    description:
      "Master JEE Advanced Surface Chemistry through adsorption, the Freundlich isotherm, colloids, emulsions, and micelles, with the exact Main-scope boundary.",
    ogTitle: "Surface Chemistry for JEE Advanced 2026",
    ogDescription: "Interface-first reasoning for adsorption, colloidal systems, and surfactant aggregation.",
    ogType: "article",
  },
};

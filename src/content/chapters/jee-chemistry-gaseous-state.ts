import type { ChapterContent } from "@/content/types";

/**
 * Gaseous State — T06 production content.
 * Sourced from Rank Sarthi JEE Batch 08 Chemistry package, section 3.
 * Scope check: JEE Main 2026 does NOT list Gaseous State as a named Chemistry
 * unit. JEE Advanced 2026 covers gas laws, KTG and real-gas behaviour within
 * the States of Matter: Gases and Liquids unit (PARTIAL OR MERGED). This page
 * is the focused Advanced-scope gas-model route inside that explicit umbrella.
 * Evidence discipline: no weightage, PYQ counts, or trend claims are asserted.
 */
export const jeeChemistryGaseousState: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Gaseous State",
  slug: "gaseous-state",
  url: "/jee/chemistry/gaseous-state",
  canonicalIntent:
    "Select ideal, mixture, kinetic, diffusion, or real-gas models and use each equation only under its stated assumptions.",

  heroChips: [
    "JEE Main 2026: not listed as a named Chemistry unit",
    "JEE Advanced 2026: included within States of Matter",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Identify whether the gas can be treated as ideal, whether a mixture is non-reacting, whether a speed or diffusion result comes from kinetic theory, and whether pressure and temperature make molecular volume or attraction important.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ text: "Convert temperature to kelvin and keep units compatible before using any equation." }],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Gaseous State is not a named JEE Main 2026 Chemistry unit. It is covered on JEE Advanced 2026 within States of Matter: Gases and Liquids. This page does not publish invented weightage, expected question counts or trend percentages.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Moles, molar mass, and proportional reasoning used in every gas equation.",
    },
    {
      label: "States of Matter",
      url: "/jee/chemistry/states-of-matter",
      relation: "up",
      description: "Advanced umbrella and cross-state model selector this focused page sits within.",
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
    unit: "States of Matter: Gases and Liquids (Advanced-focused gas model)",
    topics: [
      "Gas laws and the ideal gas equation",
      "Absolute temperature",
      "Deviations from ideality and van der Waals equation",
      "Kinetic theory and molecular speeds",
      "Partial pressures",
      "Diffusion",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "state-variables",
      title: "1. Start with the state variables",
      keyIdea: "P, V, n, and T describe the macroscopic state under the selected model.",
      body: [
        { type: "paragraph", children: [{ text: "Every gas problem begins by identifying pressure, volume, amount, and temperature, and confirming which of these is fixed, changing, or requested." }] },
      ],
    },
    {
      id: "ideal-limit",
      title: "2. Know the ideal limit",
      keyIdea: "Molecules have negligible volume and no intermolecular force except during elastic collisions.",
      body: [
        { type: "paragraph", children: [{ text: "The ideal-gas model assumes point-like, non-interacting molecules. Real gases only approach this behaviour under suitable pressure and temperature conditions." }] },
      ],
    },
    {
      id: "microscopic-meaning",
      title: "3. Temperature reflects a distribution, not one speed",
      keyIdea: "Temperature links to the distribution of molecular kinetic energies, not one identical molecular speed.",
      body: [
        { type: "paragraph", children: [{ text: "Kinetic theory describes a distribution of molecular speeds at a given temperature; most probable, mean, and rms speeds are three distinct summary values of that distribution." }] },
      ],
    },
    {
      id: "mixture-composition",
      title: "4. Mixture behaviour depends on composition",
      keyIdea: "In an ideal non-reacting gas mixture, composition determines partial pressure.",
      body: [
        { type: "paragraph", children: [{ text: "Dalton's relation applies to a non-reacting ideal mixture where mole fraction determines each component's partial pressure of the total." }] },
      ],
    },
    {
      id: "real-gas-departure",
      title: "5. Real gases depart from ideality under attraction and excluded volume",
      keyIdea: "Attraction and excluded volume modify pressure-volume behaviour.",
      body: [
        { type: "paragraph", children: [{ text: "The van der Waals equation corrects the ideal equation with an attraction term and an excluded-volume term, and should approach ideal behaviour as these corrections become negligible." }] },
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
          "Selecting the correct ideal, mixture, kinetic, diffusion, or real-gas model and using each equation only under its assumptions.",
        ],
        [
          "What is the central method choice?",
          "Decide whether the ideal model applies, whether a mixture is non-reacting, whether a kinetic speed formula is required, and whether real-gas correction terms matter.",
        ],
        [
          "Where do most mistakes begin?",
          "Using Celsius directly in a gas or speed formula, mixing SI R with litre-atmosphere data, and treating rms speed as the speed of every molecule.",
        ],
        [
          "What should come before Gaseous State?",
          "Mole Concept for amount and molar-mass reasoning, and Chemical Bonding for intermolecular-force context.",
        ],
        [
          "What comes after it?",
          "Equilibrium and Chemical Kinetics extend the same state-variable and rate reasoning developed here.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Gaseous State",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Gaseous State as a named unit",
          "Not listed as a current Chemistry unit.",
          "Included within States of Matter: Gases and Liquids.",
          "Do not treat this chapter as current Main scope.",
        ],
        [
          "Gas laws and ideal gas equation",
          "Not stated as a separate line item.",
          "Explicitly included, along with absolute temperature.",
          "Convert to kelvin before every substitution.",
        ],
        [
          "Kinetic theory, molecular speeds, partial pressure, diffusion, real-gas deviations",
          "Not stated as a separate line item.",
          "Explicitly included, along with the van der Waals equation.",
          "Learn the speed ordering and when the ideal model breaks down.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Gaseous State",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Mole and molar mass",
          "Convert between mass, moles, and molar mass confidently.",
          "Revise Mole Concept.",
        ],
        [
          "Pressure, volume, kelvin temperature",
          "Convert between common pressure and temperature units.",
          "Revise unit systems and the kelvin scale.",
        ],
        [
          "Proportional reasoning and square roots",
          "Rearrange a proportional equation and evaluate a square root.",
          "Practise algebraic rearrangement of ratio-based formulas.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the gas model before substituting",
      intro: "Match the described prompt to a model and its required first check.",
      columns: ["Prompt", "Model", "First check"],
      rows: [
        ["One gas state or change", "Ideal gas or combined relation", "Amount fixed or variable, kelvin, units"],
        ["Non-reacting mixture", "Dalton relation", "Mole fractions after all stated mixing"],
        ["Molecular speed", "Kinetic theory", "Correct speed type and kg/mol units"],
        ["Diffusion or effusion comparison", "Graham relation", "Matched conditions and molecular mass"],
        ["High-pressure or low-temperature departure", "Real-gas model", "Whether attraction or excluded volume is dominant in the asked comparison"],
      ],
    },
  ],

  formulas: [
    {
      id: "ideal-gas-equation",
      expression: "PV = nRT",
      latex: "PV=nRT",
      meaning: "Ideal-gas state equation.",
      variables: [
        { symbol: "P", meaning: "pressure", unit: "Pa" },
        { symbol: "V", meaning: "volume", unit: "m^3" },
        { symbol: "n", meaning: "amount of substance", unit: "mol" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
        { symbol: "R", meaning: "molar gas constant, 8.314462618 J/(mol K)", unit: "J mol^-1 K^-1" },
      ],
      useWhen: "The ideal-gas model or an acceptable limit applies, with SI inputs.",
      commonTrap: "Mixing R with incompatible pressure-volume units.",
      accessibleText: "Pressure times volume equals moles times the gas constant times absolute temperature.",
    },
    {
      id: "dalton-mixture",
      expression: "P = sum(p_i), p_i = x_i P",
      latex: "P=\\sum_i p_i,\\ p_i=x_iP",
      meaning: "Dalton mixture relation for partial pressure.",
      variables: [{ symbol: "x_i", meaning: "mole fraction of component i", unit: "dimensionless" }],
      useWhen: "An ideal, non-reacting mixture is at a common temperature and volume.",
      commonTrap: "Using mole fraction after a reaction changes composition.",
      accessibleText: "Total pressure equals the sum of partial pressures; each partial pressure equals mole fraction times total pressure.",
    },
    {
      id: "most-probable-speed",
      expression: "u_mp = sqrt(2RT/M)",
      latex: "u_{mp}=\\sqrt{2RT/M}",
      meaning: "Most probable molecular speed.",
      variables: [{ symbol: "M", meaning: "molar mass", unit: "kg/mol" }],
      useWhen: "An ideal-gas Maxwell speed distribution applies.",
      commonTrap: "Inserting molar mass in g/mol with SI R.",
      accessibleText: "Most probable speed equals the square root of two R T over M.",
    },
    {
      id: "mean-speed",
      expression: "u_bar = sqrt(8RT/(pi M))",
      latex: "\\bar u=\\sqrt{8RT/(\\pi M)}",
      meaning: "Mean molecular speed.",
      variables: [{ symbol: "u_bar", meaning: "mean speed", unit: "m/s" }],
      useWhen: "Same ideal distribution as the most probable speed.",
      commonTrap: "Calling it rms speed.",
      accessibleText: "Mean speed equals the square root of eight R T over pi M.",
    },
    {
      id: "rms-speed",
      expression: "u_rms = sqrt(3RT/M)",
      latex: "u_{rms}=\\sqrt{3RT/M}",
      meaning: "Root-mean-square molecular speed.",
      variables: [{ symbol: "u_rms", meaning: "root-mean-square speed", unit: "m/s" }],
      useWhen: "Same ideal distribution.",
      commonTrap: "Assuming every molecule moves at this speed.",
      accessibleText: "Root-mean-square speed equals the square root of three R T over M.",
    },
    {
      id: "van-der-waals",
      expression: "(P + a n^2/V^2)(V - nb) = nRT",
      latex: "(P+a n^2/V^2)(V-nb)=nRT",
      meaning: "Van der Waals correction for attraction and excluded volume.",
      variables: [
        { symbol: "a", meaning: "attraction correction constant, gas-specific" },
        { symbol: "b", meaning: "excluded-volume correction constant, gas-specific" },
      ],
      useWhen: "A model for a specified real gas is required; constants are gas-specific.",
      commonTrap: "Swapping the physical roles of a and b.",
      accessibleText: "Pressure plus a n squared over V squared, times volume minus n b, equals n R T.",
    },
    {
      id: "compressibility-factor",
      expression: "Z = PV/(nRT)",
      latex: "Z=PV/(nRT)",
      meaning: "Compressibility factor.",
      variables: [{ symbol: "Z", meaning: "compressibility factor", unit: "dimensionless" }],
      useWhen: "Defined from a measured state and chosen amount.",
      commonTrap: "Saying Z equals 1 proves a gas is ideal at all states.",
      accessibleText: "Compressibility factor equals pressure times volume divided by moles times R times temperature.",
    },
    {
      id: "graham-comparison",
      expression: "r1/r2 ≈ sqrt(M2/M1)",
      latex: "r_1/r_2\\approx\\sqrt{M_2/M_1}",
      meaning: "Graham-type rate comparison for diffusion or effusion.",
      variables: [{ symbol: "r1, r2", meaning: "rates being compared", unit: "same unit" }],
      useWhen: "Comparable temperature, pressure gradient, aperture, and ideal-like conditions apply.",
      commonTrap: "Using it for arbitrary bulk flow.",
      accessibleText: "The ratio of rate one to rate two approximately equals the square root of molar mass two over molar mass one.",
    },
  ],

  workedExamples: [
    {
      id: "partial-pressures-from-composition",
      prompt:
        "A non-reacting ideal mixture contains 2.0 mol helium and 1.0 mol neon at total pressure 3.0 bar. Find each partial pressure.",
      steps: [
        { type: "paragraph", children: [{ text: "Total amount is 3.0 mol." }] },
        { type: "paragraph", children: [{ text: "Mole fraction of helium is 2/3 and of neon is 1/3." }] },
        { type: "paragraph", children: [{ text: "Partial pressure of helium = (2/3)(3.0) = 2.0 bar. Partial pressure of neon = (1/3)(3.0) = 1.0 bar." }] },
        { type: "paragraph", children: [{ text: "Check: 2.0 + 1.0 = 3.0 bar, matching the stated total." }] },
      ],
      answer: "p(He) = 2.0 bar, p(Ne) = 1.0 bar. The result relies on the stated ideal, non-reacting mixture and is not a claim that all gas mixtures obey ideality.",
      sourceRef: "ncert-chem-basic-concepts",
    },
  ],

  mistakes: [
    {
      id: "gaseous-state-scope-error",
      mistake: "Calling Gaseous State current Main Chemistry scope.",
      why: [{ type: "paragraph", children: [{ text: "Gaseous State is not a named Chemistry unit in the current JEE Main 2026 syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming Main relevance." }] }],
      errorType: "needs-review",
    },
    {
      id: "celsius-in-formula",
      mistake: "Using Celsius directly in a gas or speed formula.",
      why: [{ type: "paragraph", children: [{ text: "Every ideal-gas and kinetic-theory formula requires absolute (kelvin) temperature." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert Celsius to kelvin before substitution." }] }],
      errorType: "execution-error",
    },
    {
      id: "unit-mismatch-R",
      mistake: "Mixing SI R with litre-atmosphere data.",
      why: [{ type: "paragraph", children: [{ text: "R has different numerical values depending on the pressure-volume unit system used." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Choose one consistent unit system and matching R value throughout." }] }],
      errorType: "execution-error",
    },
    {
      id: "molar-mass-unit-error",
      mistake: "Inserting g/mol into SI kinetic-speed formulas.",
      why: [{ type: "paragraph", children: [{ text: "SI kinetic-speed formulas require molar mass in kg/mol to produce a speed in m/s." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert molar mass to kg/mol before substituting into a speed formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "rms-as-universal-speed",
      mistake: "Treating rms speed as the speed of every molecule.",
      why: [{ type: "paragraph", children: [{ text: "Rms speed is a statistical summary of a speed distribution, not the actual speed of every molecule." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Remember the speed ordering: most probable speed less than mean speed less than rms speed." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "dalton-after-reaction",
      mistake: "Applying Dalton's law across a reacting mixture without updating composition.",
      why: [{ type: "paragraph", children: [{ text: "Dalton's relation assumes a non-reacting mixture; a reaction changes the mole fractions used in the formula." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Recompute mole fractions after any stated reaction before applying Dalton's relation." }] }],
      errorType: "decision-error",
    },
    {
      id: "a-b-swap",
      mistake: "Interchanging the attraction correction a and volume correction b in the van der Waals equation.",
      why: [{ type: "paragraph", children: [{ text: "a corrects for intermolecular attraction and b corrects for molecular excluded volume; they play different physical roles." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm which constant is which for the given gas before substituting." }] }],
      errorType: "recall-gap",
    },
    {
      id: "graham-for-bulk-flow",
      mistake: "Using Graham's law for arbitrary convective flow.",
      why: [{ type: "paragraph", children: [{ text: "Graham's relation applies to diffusion or effusion under matched conditions, not general bulk gas flow." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the situation is diffusion or effusion under comparable conditions before applying the relation." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "States of Matter",
      url: "/jee/chemistry/states-of-matter",
      relation: "up",
      description: "Advanced umbrella and cross-state model selector that Gaseous State sits within.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Amount and molar-mass reasoning used throughout this chapter.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Intermolecular-force context for real-gas deviations.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "related",
      description: "Shares concentration-model reasoning at a lateral level.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "related",
      description: "Shares state-variable and energy reasoning at a lateral level.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "forward",
      description: "Extends reaction-quotient reasoning built on state-variable foundations.",
    },
    {
      label: "Chemical Kinetics",
      url: "/jee/chemistry/chemical-kinetics",
      relation: "forward",
      description: "Extends rate reasoning that draws on molecular-speed concepts.",
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
    {
      label: "Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for JEE Chemistry.",
    },
  ],

  faqs: [
    {
      question: "Is Gaseous State in JEE Main 2026 Chemistry?",
      answer: [{ type: "paragraph", children: [{ text: "No. It is not listed as a current Chemistry unit." }] }],
    },
    {
      question: "Where is Gaseous State in JEE Advanced 2026?",
      answer: [
        { type: "paragraph", children: [{ text: "Its gas laws, kinetic theory, partial pressure, diffusion, and real-gas topics appear within States of Matter: Gases and Liquids." }] },
      ],
    },
    {
      question: "When is PV = nRT appropriate?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "When an ideal-gas model is stated or is an acceptable approximation at the specified conditions, with compatible units and absolute temperature." },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-basic-concepts", "nist-codata-gas-constant", "jee-advanced-paper-archive"],
  sourceNote:
    "Gaseous State is not a named JEE Main 2026 Chemistry unit; it is covered as a merged focus within JEE Advanced 2026 States of Matter: Gases and Liquids. NCERT resources support gas laws, kinetic theory, mixtures, diffusion, and real-gas models. NIST CODATA supports the molar gas constant value. Official Advanced paper archives are cited for provenance only; no frequency, marks, or trend claims are made from them.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type is a JEE Physical Chemistry educator experienced in gas models, kinetic theory, and unit-safe numericals.",
    "Academically reviewed by: unassigned. Reviewer specialization: molecular thermodynamics, statistical interpretation of gas speeds, real-gas equations, and current Advanced scope, holding a postgraduate degree in Physical Chemistry, Chemical Physics, or a closely related discipline.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Gaseous State for JEE Advanced 2026: Gas Laws and KTG",
    description:
      "Learn ideal and real gases, partial pressures, kinetic-theory speeds, diffusion, van der Waals equation, units, assumptions, and traps.",
    ogTitle: "Gaseous State for JEE Advanced 2026",
    ogDescription: "Condition-aware gas laws, molecular speeds, mixtures, diffusion, and real-gas reasoning.",
    ogType: "article",
  },
};

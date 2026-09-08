import type { ChapterContent } from "@/content/types";

/**
 * Chemical Thermodynamics — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or expected-question claims are made.
 * - Official-paper archives are linked, not summarised into counts.
 * - Author/reviewer stay unassigned until academic review is recorded.
 * - contentStatus stays "draft".
 * - Scope check (verified against JEE Main 2026 and JEE Advanced 2026
 *   syllabus documents, 8 September 2026): Main names system and
 *   surroundings, extensive and intensive properties, state functions,
 *   entropy and process types, the first law with work, heat, internal
 *   energy, enthalpy and heat capacity, Hess law, named enthalpy changes,
 *   the second law, spontaneity, entropy of the universe, Gibbs energy,
 *   standard Gibbs energy and the equilibrium constant. Advanced names
 *   intensive and extensive properties, state functions, the first law
 *   limited in its listed work treatment to pressure-volume work and heat,
 *   enthalpy, heat capacity, standard state, Hess law, reaction, fusion,
 *   vaporization and lattice enthalpy, the second law, entropy, Gibbs
 *   energy, equilibrium and spontaneity criteria. This page treats the
 *   Physics Thermodynamics chapter as frozen and separate.
 */
export const jeeChemistryThermodynamics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Chemical Thermodynamics",
  slug: "thermodynamics",
  url: "/jee/chemistry/thermodynamics",
  canonicalIntent:
    "Decide energy change, heat, work, spontaneity and equilibrium tendency by defining the system, path, sign convention and constraints before applying any thermodynamic relation.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Boundary and constraint first, equation second",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Chemical thermodynamics predicts energy changes and the direction of spontaneous change from macroscopic states. A valid solution must define the system, state the sign convention, distinguish state functions from path functions, and apply each relation only under its pressure, temperature, reversibility and composition conditions.",
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
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Balancing equations and molar quantities are used throughout enthalpy and Hess-law calculations.",
    },
    {
      label: "States of Matter",
      url: "/jee/chemistry/states-of-matter",
      relation: "prerequisite",
      description: "Gas behaviour and phase concepts underlie pressure-volume work and phase-change enthalpies.",
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
    unit: "Chemical Thermodynamics",
    topics: [
      "System and surroundings; extensive and intensive properties; state functions",
      "Entropy and process types",
      "First law: work, heat, internal energy, enthalpy and heat capacity",
      "Hess law",
      "Named enthalpy changes: reaction, fusion, vaporization, lattice enthalpy",
      "Second law: spontaneity, entropy of the universe",
      "Gibbs energy, standard Gibbs energy and the equilibrium constant",
      "Standard state (JEE Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "boundary",
      title: "1. Define the boundary",
      keyIdea: "Define the system, surroundings and whether matter or energy can cross the boundary.",
      body: [{ type: "paragraph", children: [{ text: "Every thermodynamic problem starts by defining the system, the surroundings, and whether matter or energy can cross the boundary between them." }] }],
    },
    {
      id: "state",
      title: "2. Specify the state",
      keyIdea: "Internal energy, enthalpy, entropy and Gibbs energy are state functions; they depend only on the current state.",
      body: [{ type: "paragraph", children: [{ text: "Specify composition, temperature, pressure and phase. Internal energy, enthalpy, entropy and Gibbs energy are state functions, meaning their value depends only on the current state, not on how it was reached." }] }],
    },
    {
      id: "path",
      title: "3. Track path functions separately",
      keyIdea: "Heat and work describe energy transfer along a process, not stored contents of a state.",
      body: [{ type: "paragraph", children: [{ text: "Heat and work are path functions: they describe energy transfer during a process and depend on the path taken, unlike state functions." }] }],
    },
    {
      id: "first-law-ledger",
      title: "4. Apply the first-law ledger with the Chemistry sign convention",
      keyIdea: "Under the Chemistry sign convention, energy entering as heat or work is positive for the system.",
      body: [{ type: "paragraph", children: [{ text: "Under the Chemistry sign convention used on this page, heat or work entering the system is taken as positive, and the internal energy change equals heat plus work." }] }],
    },
    {
      id: "enthalpy-route",
      title: "5. Use the enthalpy route at constant pressure",
      keyIdea: "At constant pressure with only pressure-volume work, the heat exchanged equals the enthalpy change.",
      body: [{ type: "paragraph", children: [{ text: "At constant pressure, with only pressure-volume work occurring, the heat exchanged by the system equals its enthalpy change." }] }],
    },
    {
      id: "entropy-gibbs-criteria",
      title: "6. Use the constraint-appropriate entropy or Gibbs criterion",
      keyIdea: "At constant temperature and pressure, a negative Gibbs energy change indicates a spontaneous forward change for the defined process.",
      body: [{ type: "paragraph", children: [{ text: "At constant temperature and pressure, a negative Gibbs energy change indicates spontaneity for the defined process; other constraints require the entropy-of-universe criterion instead." }] }],
    },
    {
      id: "equilibrium-link",
      title: "7. Link to equilibrium correctly",
      keyIdea: "At equilibrium, the reaction Gibbs change is zero, while the standard Gibbs energy change need not be zero.",
      body: [{ type: "paragraph", children: [{ text: "At equilibrium under constant temperature and pressure, the Gibbs energy change for the reaction's progress is zero, while the standard Gibbs energy change need not be zero." }] }],
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
          "How to predict energy change and spontaneity direction using system boundaries, state and path functions, the first and second laws, enthalpy, entropy and Gibbs energy.",
        ],
        [
          "What is the central method choice?",
          "Define the boundary, specify the state, track path functions separately, apply the first-law ledger with the correct sign convention, and use the constraint-appropriate entropy or Gibbs criterion.",
        ],
        [
          "Where do most mistakes begin?",
          "Mixing sign conventions for work, calling heat or work a state function, and using q_p = deltaH without checking the constant-pressure, pressure-volume-work restriction.",
        ],
        [
          "What should come before Chemical Thermodynamics?",
          "Mole Concept for stoichiometric calculation and States of Matter for gas and phase behaviour.",
        ],
        [
          "What comes after it?",
          "Equilibrium develops composition and reaction-quotient response, and Electrochemistry links Gibbs energy to cell potential.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Chemical Thermodynamics",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "System, surroundings and process types",
          "System and surroundings and process types are explicitly listed.",
          "Not stated as a separate line item; treated as background to the listed state-function and law content.",
          "Keep the system-surroundings definition explicit even where Advanced does not list it separately.",
        ],
        [
          "Work",
          "Work is listed generally alongside heat and internal energy.",
          "Work treatment is explicitly limited to pressure-volume work.",
          "Do not assume non-pressure-volume work is Advanced-scope unless separately confirmed.",
        ],
        [
          "Enthalpy changes",
          "Named enthalpy changes are listed as a broader group.",
          "Reaction, fusion, vaporization and lattice enthalpy are explicitly named, alongside standard state.",
          "Both examinations expect Hess-law based calculation of these enthalpy changes.",
        ],
        [
          "Second law and Gibbs energy",
          "Second law, spontaneity, entropy of the universe, Gibbs energy, standard Gibbs energy and the equilibrium constant are explicitly listed.",
          "Second law, entropy, Gibbs energy, equilibrium and spontaneity criteria are explicitly listed.",
          "The relation between standard Gibbs energy and the equilibrium constant is common ground between Main and Advanced.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Chemical Thermodynamics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Mole concept and stoichiometry",
          "Balance a chemical equation and compute moles from mass or volume.",
          "Revise Mole Concept before continuing.",
        ],
        [
          "Gas and phase behaviour",
          "Identify gaseous stoichiometric change and distinguish phases of matter.",
          "Revise States of Matter.",
        ],
        [
          "Unit and temperature handling",
          "Convert Celsius to kelvin and keep energy, pressure and volume units consistent.",
          "Practise SI unit conversion before substituting into a thermodynamic relation.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the constraint-appropriate relation",
      intro: "Match the question signal to the correct relation and its operating constraint before any calculation.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Heat and work", "First-law ledger", "Chemistry sign convention and system boundary"],
        ["Constant-pressure calorimetry", "Enthalpy change", "Only pressure-volume work and stated pressure constraint"],
        ["Multiple reaction steps", "Hess law", "Stoichiometric scaling and reaction reversal"],
        ["Spontaneity at stated temperature", "Gibbs criterion", "Constant temperature and pressure"],
        ["Phase change or heating", "Segment-by-segment enthalpy", "Phase, heat capacity and transition condition"],
        ["Link to equilibrium constant", "Standard Gibbs relation", "Temperature and standard states"],
      ],
    },
    {
      id: "sign-table",
      jump: true,
      slot: "concepts",
      heading: "Worked reasoning: when can increasing temperature change spontaneity?",
      intro:
        "For a process under constant temperature and pressure, deltaG = deltaH - T deltaS. This sign table assumes deltaH and deltaS are approximately constant over the temperature range; near phase changes or over a broad range, that approximation requires review.",
      columns: ["Enthalpy sign", "Entropy sign", "Spontaneity behaviour"],
      rows: [
        ["Negative", "Positive", "Spontaneous at all temperatures in the model"],
        ["Positive", "Negative", "Non-spontaneous at all temperatures in the model"],
        ["Positive", "Positive", "Entropy term can dominate above a threshold temperature"],
        ["Negative", "Negative", "Enthalpy term can dominate at sufficiently low temperature"],
      ],
    },
  ],

  formulas: [
    {
      id: "first-law",
      expression: "deltaU = q + w",
      latex: "\\Delta U = q + w",
      meaning: "First law of thermodynamics in the Chemistry sign convention.",
      variables: [
        { symbol: "q", meaning: "heat transferred to the system", unit: "J" },
        { symbol: "w", meaning: "work done on the system", unit: "J" },
      ],
      units: "J",
      useWhen: "q and w are positive when energy enters the system, under the Chemistry sign convention.",
      commonTrap: "Importing the Physics work-by-system sign convention without noting the switch.",
      accessibleText: "Internal energy changes by heat and work transferred to the system.",
    },
    {
      id: "pv-work",
      expression: "w = -P_ext * deltaV",
      latex: "w = -P_{ext}\\Delta V",
      meaning: "Pressure-volume work for a one-step process against constant external pressure.",
      variables: [
        { symbol: "P_ext", meaning: "constant external pressure", unit: "Pa" },
        { symbol: "deltaV", meaning: "volume change", unit: "m^3" },
      ],
      units: "J",
      useWhen: "The process occurs against a constant external pressure.",
      commonTrap: "Replacing P_ext with the gas's own pressure in an irreversible step.",
      accessibleText: "Expansion does work on the surroundings, so system work is negative under constant external pressure.",
    },
    {
      id: "reversible-work",
      expression: "w_rev = -integral of P_ext dV",
      latex: "w_{rev} = -\\int P_{ext}\\,dV",
      meaning: "Reversible pressure-volume work along a quasistatic path.",
      variables: [{ symbol: "P_ext", meaning: "external pressure, matching internal pressure at every step", unit: "Pa" }],
      units: "J",
      useWhen: "The path is quasistatic and reversible.",
      commonTrap: "Calling every slow-looking process reversible without checking the quasistatic condition.",
      accessibleText: "Work depends on the path through the external pressure.",
    },
    {
      id: "enthalpy-definition",
      expression: "H = U + PV",
      latex: "H = U + PV",
      meaning: "Definition of enthalpy for a macroscopic thermodynamic state.",
      variables: [
        { symbol: "H", meaning: "enthalpy", unit: "J" },
        { symbol: "U", meaning: "internal energy", unit: "J" },
        { symbol: "P", meaning: "pressure", unit: "Pa" },
        { symbol: "V", meaning: "volume", unit: "m^3" },
      ],
      units: "J",
      useWhen: "A macroscopic thermodynamic state is defined.",
      commonTrap: "Calling enthalpy the same as heat under all conditions.",
      accessibleText: "Enthalpy combines internal energy with the pressure-volume term.",
    },
    {
      id: "constant-pressure-heat",
      expression: "q_p = deltaH",
      latex: "q_p = \\Delta H",
      meaning: "Heat exchanged at constant pressure equals the enthalpy change.",
      variables: [{ symbol: "q_p", meaning: "heat at constant pressure", unit: "J" }],
      units: "J",
      useWhen: "The system is closed, pressure is constant, and only pressure-volume work occurs.",
      commonTrap: "Applying it when electrical or other non-pressure-volume work also acts.",
      accessibleText: "Under these limits, constant-pressure heat measures enthalpy change.",
    },
    {
      id: "enthalpy-internal-energy",
      expression: "deltaH = deltaU + deltaN_g * R * T",
      latex: "\\Delta H = \\Delta U + \\Delta n_g RT",
      meaning: "Relation between reaction enthalpy and internal-energy change for gas-phase stoichiometric change.",
      variables: [
        { symbol: "deltaN_g", meaning: "change in gaseous stoichiometric moles only", unit: "mol" },
        { symbol: "R", meaning: "gas constant", unit: "J/(mol K)" },
        { symbol: "T", meaning: "temperature", unit: "K" },
      ],
      units: "J/mol",
      useWhen: "Ideal gases at one temperature, with deltaN_g counting only gaseous species.",
      commonTrap: "Counting liquids and solids in deltaN_g.",
      accessibleText: "Gas expansion changes the pressure-volume contribution between internal energy and enthalpy.",
    },
    {
      id: "standard-reaction-enthalpy",
      expression: "deltaH_rxn(standard) = sum(v * deltaHf(products)) - sum(v * deltaHf(reactants))",
      latex: "\\Delta H^\\circ_{rxn}=\\sum\\nu\\Delta H_f^\\circ(products)-\\sum\\nu\\Delta H_f^\\circ(reactants)",
      meaning: "Standard reaction enthalpy computed from standard formation enthalpies.",
      variables: [{ symbol: "v", meaning: "stoichiometric coefficient", unit: "dimensionless" }],
      units: "J/mol",
      useWhen: "The same standard-state convention applies and the reaction is balanced.",
      commonTrap: "Omitting stoichiometric coefficients when summing formation enthalpies.",
      accessibleText: "Build the reaction enthalpy from standard formation steps.",
    },
    {
      id: "gibbs-fixed-temperature",
      expression: "deltaG = deltaH - T * deltaS",
      latex: "\\Delta G=\\Delta H-T\\Delta S",
      meaning: "Gibbs energy change at fixed temperature for the compared states.",
      variables: [{ symbol: "deltaS", meaning: "entropy change", unit: "J/(mol K)" }],
      units: "J/mol",
      useWhen: "Temperature is consistent, and the criterion is used at constant temperature and pressure.",
      commonTrap: "Using Celsius, or ignoring the units of entropy relative to enthalpy.",
      accessibleText: "Enthalpy and entropy compete through temperature.",
    },
    {
      id: "gibbs-reaction-quotient",
      expression: "deltaG = deltaG(standard) + R * T * ln(Q)",
      latex: "\\Delta G=\\Delta G^\\circ+RT\\ln Q",
      meaning: "Gibbs energy change away from standard composition.",
      variables: [{ symbol: "Q", meaning: "reaction quotient at the current composition", unit: "dimensionless" }],
      units: "J/mol",
      useWhen: "Activities are defined and the temperature matches the standard-state reference.",
      commonTrap: "Using the equilibrium constant in place of the current reaction quotient.",
      accessibleText: "Composition changes the current driving force away from the standard value.",
    },
    {
      id: "standard-gibbs-equilibrium",
      expression: "deltaG(standard) = -R * T * ln(K)",
      latex: "\\Delta G^\\circ=-RT\\ln K",
      meaning: "Relation between standard Gibbs energy change and the equilibrium constant.",
      variables: [{ symbol: "K", meaning: "dimensionless thermodynamic equilibrium constant", unit: "dimensionless" }],
      units: "J/mol",
      useWhen: "Equilibrium is established at temperature T with a properly defined dimensionless K.",
      commonTrap: "Saying deltaG(standard) becomes zero once an equilibrium mixture forms.",
      accessibleText: "Standard tendency determines the equilibrium position, but the reaction's own Gibbs change is zero at equilibrium, not the standard one.",
    },
  ],

  workedExamples: [
    {
      id: "temperature-spontaneity",
      prompt: "For a reaction with deltaH > 0 and deltaS > 0, explain when it becomes spontaneous.",
      steps: [
        { type: "paragraph", children: [{ text: "Use deltaG = deltaH - T deltaS at constant temperature and pressure." }] },
        { type: "paragraph", children: [{ text: "With deltaH positive and deltaS positive, the -T deltaS term becomes more negative as T increases." }] },
        { type: "paragraph", children: [{ text: "Above a threshold temperature, the entropy term outweighs the positive enthalpy term and deltaG becomes negative, provided deltaH and deltaS are approximately constant over the range considered." }] },
      ],
      answer: "The reaction becomes spontaneous above the temperature where T deltaS exceeds deltaH, under the constant-deltaH-and-deltaS approximation.",
    },
  ],

  mistakes: [
    {
      id: "sign-convention-mixup",
      mistake: "Mixing work done on the system with work done by the system.",
      why: [{ type: "paragraph", children: [{ text: "Chemistry and Physics commonly use opposite sign conventions for work, and switching mid-calculation produces the wrong sign for deltaU." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Fix one sign convention at the start of the problem and apply it consistently." }] }],
      errorType: "execution-error",
    },
    {
      id: "heat-work-as-state-functions",
      mistake: "Calling heat and work state functions.",
      why: [{ type: "paragraph", children: [{ text: "Heat and work depend on the path taken, unlike internal energy, enthalpy, entropy and Gibbs energy." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Classify each quantity as a state function or a path function before using it." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "qp-deltah-misuse",
      mistake: "Using q_p = deltaH without the constant-pressure and pressure-volume-work-only restrictions.",
      why: [{ type: "paragraph", children: [{ text: "This equality holds only when pressure is constant and no non-pressure-volume work occurs." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check both conditions before equating measured heat with enthalpy change." }] }],
      errorType: "decision-error",
    },
    {
      id: "condensed-species-in-deltang",
      mistake: "Counting condensed species (liquids or solids) in deltaN_g.",
      why: [{ type: "paragraph", children: [{ text: "Only gaseous stoichiometric moles contribute to the pressure-volume work term linking deltaH and deltaU." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the physical state of every species before computing deltaN_g." }] }],
      errorType: "execution-error",
    },
    {
      id: "celsius-in-tds",
      mistake: "Using Celsius in the T deltaS term.",
      why: [{ type: "paragraph", children: [{ text: "The Gibbs and entropy relations require an absolute temperature scale." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert temperature to kelvin before substituting into any T deltaS or deltaG expression." }] }],
      errorType: "execution-error",
    },
    {
      id: "spontaneous-means-fast",
      mistake: "Saying a spontaneous reaction must be fast.",
      why: [{ type: "paragraph", children: [{ text: "Thermodynamics addresses favourability of a change, not the rate at which it proceeds; rate is governed by kinetics." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep spontaneity and rate as separate questions, and route rate questions to Chemical Kinetics." }] }],
      errorType: "decision-error",
    },
    {
      id: "standard-gibbs-zero-at-equilibrium",
      mistake: "Saying deltaG(standard) becomes zero when an equilibrium mixture forms.",
      why: [{ type: "paragraph", children: [{ text: "At equilibrium, the reaction's own Gibbs change is zero, but the standard Gibbs energy change is a fixed reference value related to K, not to the current mixture." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep deltaG (current) and deltaG(standard) as distinct quantities linked by deltaG = deltaG(standard) + RT ln Q." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "related",
      description: "Develops composition and reaction-quotient response beyond the Gibbs-energy link established here.",
    },
    {
      label: "Electrochemistry",
      url: "/jee/chemistry/electrochemistry",
      relation: "related",
      description: "Connects Gibbs energy change to electrochemical cell potential.",
    },
    {
      label: "Chemical Kinetics",
      url: "/jee/chemistry/chemical-kinetics",
      relation: "forward",
      description: "Addresses reaction rate, which is a separate question from thermodynamic spontaneity.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "forward",
      description: "Applies thermodynamic reasoning to solution formation and colligative behaviour.",
    },
    {
      label: "States of Matter",
      url: "/jee/chemistry/states-of-matter",
      relation: "related",
      description: "Gas behaviour and phase concepts used throughout enthalpy and work calculations.",
    },
  ],

  links: [
    { label: "JEE Chemistry", url: "/jee/chemistry", relation: "up", description: "Chemistry subject hub." },
    { label: "JEE syllabus", url: "/jee/syllabus", relation: "up", description: "Exam-level official syllabus hub." },
    { label: "Chemistry syllabus", url: "/jee/syllabus/chemistry", relation: "up", description: "Official Chemistry scope for Main and Advanced." },
  ],

  faqs: [
    {
      question: "What is the Chemistry sign convention for work?",
      answer: [{ type: "paragraph", children: [{ text: "Work done on the system is positive, so expansion against positive external pressure gives negative w." }] }],
    },
    {
      question: "Does spontaneity mean a reaction is fast?",
      answer: [{ type: "paragraph", children: [{ text: "No. Thermodynamics addresses favourability; kinetics addresses rate." }] }],
    },
    {
      question: "Is standard Gibbs energy zero at equilibrium?",
      answer: [{ type: "paragraph", children: [{ text: "Not generally. At equilibrium the reaction Gibbs change is zero, while deltaG(standard) = -RT ln K." }] }],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-chem-thermodynamics",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
    "nist-codata-gas-constant",
  ],
  sourceNote:
    "Scope claims are verified against the current NTA JEE Main and JEE Advanced syllabus documents. Sign convention, laws, enthalpy, entropy and Gibbs-energy treatment follow NCERT Thermodynamics. The gas constant value follows NIST CODATA. Official-paper archives are linked for provenance only; no counts, weightage or frequency are asserted.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Physical Chemistry educator experienced in thermodynamic reasoning.",
    "Academically reviewed by: unassigned. Required specialization: physical chemistry, thermodynamics and current JEE scope.",
    "Minimum relevant qualification: postgraduate degree in Chemistry, preferably Physical Chemistry, or a closely related discipline with documented expertise.",
    "A real reviewer must be linked to a centralized verified contributor profile before any Person schema is emitted.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Chemical Thermodynamics for JEE: Enthalpy, Entropy, Gibbs",
    description:
      "Learn JEE chemical thermodynamics through system boundaries, first law, enthalpy, Hess law, entropy, Gibbs energy, conditions, reasoning and traps.",
    ogTitle: "Chemical Thermodynamics for JEE",
    ogDescription: "A constraint-aware guide to heat, work, enthalpy, entropy, Gibbs energy and spontaneity.",
    ogType: "article",
  },
};

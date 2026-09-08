import type { ChapterContent } from "@/content/types";

/**
 * Chemical Kinetics — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, or PYQ-count records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Thermodynamics owns feasibility and state energy; Equilibrium owns
 *   final composition; this chapter owns the time path, empirical rate
 *   law, activation barrier, and catalyst route, per the frozen
 *   cannibalization boundary.
 */
export const jeeChemistryChemicalKinetics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Chemical Kinetics",
  slug: "chemical-kinetics",
  url: "/jee/chemistry/chemical-kinetics",
  canonicalIntent:
    "Infer and use rate laws, integrated forms, half-life, temperature dependence, and catalysis without confusing mechanism, order, and thermodynamic favourability.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Order comes from evidence, not stoichiometry",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Chemical kinetics studies how reaction extent changes with time. For an overall reaction, the rate-law powers are determined experimentally unless the step is explicitly elementary. Order comes from the rate law; molecularity belongs to a single elementary event.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct solution normalizes the rate by stoichiometry, lets experimental evidence choose the order and integrated form, and treats Arrhenius behaviour and catalysis as separate from equilibrium composition and thermodynamic feasibility.",
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
      description: "Concentration and time units are needed before building or interpreting a rate law.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Distinguishing rate from final equilibrium composition avoids a common confusion in kinetics.",
    },
    {
      label: "Chemical Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "prerequisite",
      description: "Separates thermodynamic feasibility from the kinetic rate at which a reaction proceeds.",
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
    unit: "Chemical Kinetics",
    topics: [
      "Reaction rate and effects of concentration, temperature, pressure and catalyst",
      "Elementary and complex reactions",
      "Order, molecularity, rate law and rate constant with units",
      "Differential and integrated zero- and first-order forms and half-lives",
      "Arrhenius theory and activation-energy calculation",
      "Collision theory for bimolecular gaseous reactions, without derivation",
      "Homogeneous and heterogeneous catalysis",
      "Activity and selectivity of solid catalysts",
      "Enzyme catalysis with mechanism",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "stoichiometric-rate",
      title: "1. Define the stoichiometric rate before anything else",
      keyIdea: "Normalize each species' concentration change by its stoichiometric coefficient.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For a balanced reaction, the rate is defined by normalizing each species' rate of concentration change by its own stoichiometric coefficient, so a single reaction rate can describe every species consistently.",
            },
          ],
        },
      ],
    },
    {
      id: "measure-dependence",
      title: "2. Measure how rate depends on concentration",
      keyIdea: "Change initial concentrations systematically, or use concentration-time data.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Rate dependence on concentration is measured either through initial-rate experiments that change one reactant concentration at a time, or through a full concentration-time data set for a single run.",
            },
          ],
        },
      ],
    },
    {
      id: "infer-rate-law",
      title: "3. Infer the rate law from evidence, not from the overall equation",
      keyIdea: "Rate-law powers come from experimental evidence unless the step is explicitly elementary.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The rate-law exponents for an overall reaction must be determined experimentally. They should never be copied directly from the balanced overall equation's stoichiometric coefficients unless the reaction is explicitly stated to be a single elementary step.",
            },
          ],
        },
      ],
    },
    {
      id: "order-via-integrated-form",
      title: "4. Confirm order through units and the correct integrated form",
      keyIdea: "Each order produces a distinct linear plot and half-life behaviour.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Each reaction order has its own integrated rate law, characteristic linear plot, and half-life dependence on initial concentration. Checking which linear plot fits the data, and how the half-life behaves, confirms the assumed order.",
            },
          ],
        },
      ],
    },
    {
      id: "temperature-arrhenius",
      title: "5. Interpret temperature dependence through the Arrhenius model",
      keyIdea: "Arrhenius behaviour links the rate constant to activation energy within its own model.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The Arrhenius relation links the rate constant to temperature and activation energy for one dominant mechanism, assuming the pre-exponential factor and activation energy stay approximately constant over the temperature range considered.",
            },
          ],
        },
      ],
    },
    {
      id: "catalysts-change-pathway",
      title: "6. A catalyst changes the pathway and barrier, not the equilibrium constant",
      keyIdea: "Catalysis alters the kinetic route without changing thermodynamic feasibility at fixed temperature.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A catalyst provides an alternative reaction pathway with a different kinetic barrier, changing the rate at which equilibrium is reached. It does not change the reaction's equilibrium constant or standard Gibbs energy change at a fixed temperature.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanism-must-fit-rate-law",
      title: "7. Separate mechanism from rate law",
      keyIdea: "A proposed mechanism must reproduce the observed rate law and overall stoichiometry.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A proposed reaction mechanism is only acceptable if its elementary steps reproduce both the experimentally observed rate law and the correct overall balanced stoichiometry. A single rate observation is not enough to confirm a full mechanism.",
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
          "How reaction extent changes with time, how experimental evidence determines the rate law and order, and how temperature and catalysts affect the rate without changing final equilibrium composition.",
        ],
        [
          "What is the central method choice?",
          "Normalize the rate by stoichiometry, let evidence (initial-rate data or concentration-time data) choose the order and integrated form, then apply Arrhenius or catalyst reasoning as separate layers.",
        ],
        [
          "Where do most mistakes begin?",
          "Copying overall stoichiometric coefficients into the rate law, confusing order with molecularity, misapplying a half-life formula for the wrong order, and believing a catalyst changes the equilibrium constant.",
        ],
        [
          "What should come before Chemical Kinetics?",
          "Mole concept and concentration units, the rate-versus-composition distinction from Equilibrium, and thermodynamic feasibility from Chemical Thermodynamics.",
        ],
        [
          "What comes after it?",
          "Electrochemistry and Solutions extend related physical-chemistry reasoning; Surface Chemistry develops catalytic surface behaviour further.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Chemical Kinetics",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Rate, order, molecularity, rate law and constant",
          "Reaction rate and effects of concentration, temperature, pressure and catalyst; order, molecularity, rate law, rate constant and units are explicitly listed.",
          "Reaction rates; order and molecularity; rate law, rate constant and half-life are explicitly listed.",
          "Always let evidence, not the overall equation, set the rate-law powers.",
        ],
        [
          "Integrated forms and half-life",
          "Differential and integrated zero- and first-order forms and half-lives are explicitly listed.",
          "Differential and integrated zero- and first-order expressions are explicitly listed.",
          "Match the correct integrated form and half-life expression to the confirmed order.",
        ],
        [
          "Arrhenius theory and activation energy",
          "Arrhenius theory and activation-energy calculation are explicitly listed.",
          "Arrhenius temperature dependence and activation energy are explicitly listed.",
          "Use kelvin temperature and confirm the mechanism is unchanged across the compared temperatures.",
        ],
        [
          "Elementary and complex reactions, collision theory",
          "Elementary and complex reactions, and collision theory for bimolecular gaseous reactions without derivation, are explicitly listed.",
          "Not stated as separate line items beyond order and molecularity.",
          "Collision theory detail beyond the qualitative bimolecular gas picture is a Main-specific addition.",
        ],
        [
          "Catalysis",
          "Effect of catalyst is explicitly listed at a general level.",
          "Homogeneous and heterogeneous catalysis, activity and selectivity of solid catalysts, and enzyme catalysis with mechanism are explicitly listed.",
          "Advanced expects deeper catalysis and enzyme-mechanism treatment than Main.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Chemical Kinetics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Balancing reactions",
          "Write a correctly balanced equation before defining a rate.",
          "Revise reaction balancing and stoichiometric coefficients.",
        ],
        [
          "Concentration and time units",
          "Work with mol per litre and seconds consistently.",
          "Revise Mole Concept and unit conversion for concentration.",
        ],
        [
          "Natural logarithms and slopes",
          "Read a slope from a linearized plot and use natural logarithms confidently.",
          "Practise logarithm rules and straight-line graph interpretation.",
        ],
        [
          "Rate versus equilibrium distinction",
          "Explain that reaching equilibrium faster does not change the final composition.",
          "Revise the Equilibrium chapter's Q versus K reasoning before starting kinetics.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Match the question signal to the correct first model before any algebra.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Initial-rate table", "Concentration ratios and rate ratios", "Change one reactant at a time where possible"],
        ["Concentration versus time", "Integrated-law linearization", "Assume zero or first order only unless another law is supplied"],
        ["Half-life data", "Order-specific dependence", "A constant half-life across runs suggests first order under fixed conditions"],
        ["Two temperatures given", "Arrhenius ratio form", "Use kelvin and assume a constant mechanism over the range"],
        ["Catalyst statement", "Alternative pathway model", "Equilibrium and thermodynamics remain unchanged at fixed temperature"],
        ["Only an overall equation is given", "Do not infer order from coefficients", "Check whether the reaction is explicitly stated to be elementary"],
      ],
    },
  ],

  formulas: [
    {
      id: "stoichiometric-rate",
      expression: "r = -(1/a) d[A]/dt = (1/p) d[P]/dt",
      latex: "r=-\\frac1a\\frac{d[A]}{dt}=\\frac1p\\frac{d[P]}{dt}",
      meaning: "Stoichiometrically normalized reaction rate for a balanced reaction a A -> p P.",
      variables: [
        { symbol: "a", meaning: "stoichiometric coefficient of reactant A" },
        { symbol: "p", meaning: "stoichiometric coefficient of product P" },
      ],
      units: "mol m^-3 s^-1, often expressed as mol L^-1 s^-1",
      useWhen: "A balanced reaction a A -> p P is given.",
      commonTrap: "Comparing raw species rates directly without dividing by their stoichiometric coefficients.",
      accessibleText: "One reaction rate, normalized by stoichiometry, describes every species consistently.",
    },
    {
      id: "empirical-rate-law",
      expression: "r = k [A]^m [B]^n",
      latex: "r=k[A]^m[B]^n",
      meaning: "Empirical differential rate law with experimentally determined exponents.",
      variables: [
        { symbol: "k", meaning: "rate constant" },
        { symbol: "m", meaning: "order with respect to A" },
        { symbol: "n", meaning: "order with respect to B" },
      ],
      units: "Depends on overall order",
      useWhen: "Fixed temperature and defined reaction conditions.",
      commonTrap: "Setting m and n equal to the overall reaction's stoichiometric coefficients without experimental justification.",
      accessibleText: "Experiments, not the balanced equation, determine how concentration affects rate.",
    },
    {
      id: "zero-order-integrated",
      expression: "[A]_t = [A]_0 - k t",
      latex: "[A]_t=[A]_0-kt",
      meaning: "Zero-order integrated rate law.",
      variables: [
        { symbol: "[A]_0", meaning: "initial concentration of A" },
        { symbol: "[A]_t", meaning: "concentration of A at time t" },
      ],
      units: "Concentration",
      useWhen: "Constant rate constant k and a confirmed zero-order regime.",
      commonTrap: "Extending the linear decrease beyond the point where [A] reaches zero.",
      accessibleText: "Concentration falls linearly with time in a zero-order reaction.",
    },
    {
      id: "zero-order-half-life",
      expression: "t(1/2) = [A]_0 / (2k)",
      latex: "t_{1/2}=[A]_0/(2k)",
      meaning: "Half-life of a zero-order reaction.",
      variables: [{ symbol: "t(1/2)", meaning: "half-life", unit: "s" }],
      units: "s",
      useWhen: "Same zero-order conditions as the integrated law.",
      commonTrap: "Calling zero-order half-life independent of initial concentration, when it is not.",
      accessibleText: "More starting material takes longer to halve in a zero-order reaction.",
    },
    {
      id: "first-order-integrated",
      expression: "ln( [A]_0 / [A]_t ) = k t",
      latex: "\\ln([A]_0/[A]_t)=kt",
      meaning: "First-order integrated rate law.",
      variables: [{ symbol: "k", meaning: "first-order rate constant", unit: "s^-1" }],
      units: "Dimensionless logarithm",
      useWhen: "Constant rate constant k and a confirmed first-order regime.",
      commonTrap: "Taking the logarithm of a dimensional concentration value instead of a concentration ratio.",
      accessibleText: "The concentration ratio decays exponentially in a first-order reaction.",
    },
    {
      id: "first-order-half-life",
      expression: "t(1/2) = ln(2) / k",
      latex: "t_{1/2}=\\ln2/k",
      meaning: "Half-life of a first-order reaction.",
      variables: [{ symbol: "t(1/2)", meaning: "half-life", unit: "s" }],
      units: "s",
      useWhen: "Confirmed first-order reaction.",
      commonTrap: "Applying this formula to a zero-order or other-order reaction.",
      accessibleText: "The half-life of a first-order reaction is independent of the starting concentration.",
    },
    {
      id: "arrhenius-relation",
      expression: "k = A × e^(-Ea / (R T))",
      latex: "k=Ae^{-E_a/(RT)}",
      meaning: "Arrhenius relation between the rate constant, temperature, and activation energy.",
      variables: [
        { symbol: "A", meaning: "pre-exponential (frequency) factor" },
        { symbol: "Ea", meaning: "activation energy", unit: "J mol^-1" },
        { symbol: "R", meaning: "gas constant" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
      ],
      units: "Units of k follow the rate law's overall order",
      useWhen: "One dominant mechanism, with A and Ea approximately constant over the temperature range considered.",
      commonTrap: "Using Celsius temperature, or treating the pre-exponential factor as constant over an unjustified range.",
      accessibleText: "Higher temperature increases the fraction of molecules able to cross the activation barrier.",
    },
    {
      id: "arrhenius-two-temperature",
      expression: "ln(k2/k1) = -(Ea/R) × (1/T2 - 1/T1)",
      latex: "\\ln(k_2/k_1)=-\\frac{E_a}{R}(1/T_2-1/T_1)",
      meaning: "Two-temperature form of the Arrhenius relation, used to find activation energy from two rate constants.",
      variables: [
        { symbol: "k1", meaning: "rate constant at temperature T1" },
        { symbol: "k2", meaning: "rate constant at temperature T2" },
      ],
      units: "Dimensionless logarithm",
      useWhen: "Same mechanism and Arrhenius parameters apply at both temperatures.",
      commonTrap: "Reversing the two temperatures or rate constants without matching the corresponding sign.",
      accessibleText: "Comparing rate constants at two temperatures reveals the activation energy.",
    },
  ],

  workedExamples: [
    {
      id: "constant-half-life-evidence",
      prompt:
        "A reactant's concentration falls from 0.80 to 0.40 mol/L, and then from 0.40 to 0.20 mol/L, taking the same amount of time for both intervals under unchanged conditions. What order is consistent with this evidence, and how would you confirm it?",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Both intervals represent one half-life each, since the concentration halves in both cases." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "A half-life that stays the same regardless of the starting concentration is the defining behaviour of a first-order reaction." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "The evidence is therefore consistent with first-order behaviour, though it should be confirmed by checking whether ln[A] plotted against time is linear with slope -k." },
          ],
        },
      ],
      answer:
        "The equal half-life evidence is consistent with a first-order reaction; confirm with a linear ln[A] versus time plot before finalising the order.",
      sourceRef: "ncert-chem-kinetics",
    },
  ],

  mistakes: [
    {
      id: "copying-stoichiometric-coefficients",
      mistake: "Copying overall stoichiometric coefficients into the rate law.",
      why: [{ type: "paragraph", children: [{ text: "Rate-law exponents for an overall reaction are experimentally determined and generally differ from the balanced-equation coefficients unless the step is elementary." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use initial-rate or concentration-time evidence to determine the actual order with respect to each species." }] }],
      errorType: "knowledge-gap",
      sourceRefs: ["ncert-chem-kinetics"],
    },
    {
      id: "order-vs-molecularity",
      mistake: "Calling reaction order and molecularity the same quantity.",
      why: [{ type: "paragraph", children: [{ text: "Order is the sum of experimental rate-law exponents for an overall reaction; molecularity counts reacting species in a single elementary step." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State molecularity only for an individual elementary step, and order only from the experimental rate law." }] }],
      errorType: "recall-gap",
      sourceRefs: ["ncert-chem-kinetics"],
    },
    {
      id: "wrong-half-life-formula",
      mistake: "Using the first-order half-life formula for zero-order data.",
      why: [{ type: "paragraph", children: [{ text: "Each order has its own half-life dependence on initial concentration; the first-order formula is independent of initial concentration while the zero-order one is not." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the order from the data before selecting the matching half-life formula." }] }],
      errorType: "decision-error",
      sourceRefs: ["ncert-chem-kinetics"],
    },
    {
      id: "logarithm-of-dimensional-value",
      mistake: "Taking logarithms of dimensional concentrations rather than a ratio or standardized quantity.",
      why: [{ type: "paragraph", children: [{ text: "A logarithm should act on a dimensionless ratio; applying it directly to a dimensional concentration value is not well defined." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Form the concentration ratio [A]0/[A]t before applying the logarithm in the first-order integrated law." }] }],
      errorType: "execution-error",
      sourceRefs: ["ncert-chem-kinetics"],
    },
    {
      id: "celsius-in-arrhenius",
      mistake: "Using Celsius temperature in the Arrhenius equation.",
      why: [{ type: "paragraph", children: [{ text: "The Arrhenius relation requires absolute temperature in kelvin; using Celsius produces an incorrect exponential term." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert temperature to kelvin before substituting into any Arrhenius-based relation." }] }],
      errorType: "execution-error",
      sourceRefs: ["ncert-chem-kinetics"],
    },
    {
      id: "catalyst-changes-k-or-g",
      mistake: "Saying a catalyst changes the equilibrium constant K or the standard Gibbs energy change at fixed temperature.",
      why: [{ type: "paragraph", children: [{ text: "A catalyst changes only the kinetic pathway and activation barrier; K and the standard Gibbs energy change are thermodynamic quantities unaffected by the catalyst at a fixed temperature." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State that a catalyst changes only the rate at which equilibrium is reached, not K or the thermodynamic feasibility." }] }],
      errorType: "knowledge-gap",
      sourceRefs: ["ncert-chem-kinetics"],
    },
    {
      id: "mechanism-from-one-observation",
      mistake: "Inferring a full mechanism from one rate observation without testing all steps.",
      why: [{ type: "paragraph", children: [{ text: "A single observed rate law is consistent with more than one possible mechanism; each proposed mechanism's steps must be checked to reproduce both the rate law and the overall stoichiometry." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Test whether every elementary step in a proposed mechanism is consistent with the full experimental rate law and the overall balanced equation." }] }],
      errorType: "needs-review",
      sourceRefs: ["ncert-chem-kinetics"],
    },
  ],

  relatedChapters: [
    {
      label: "Chemical Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "related",
      description: "Owns thermodynamic feasibility and state energy, separate from the rate at which a reaction proceeds.",
    },
    {
      label: "Surface Chemistry",
      url: "/jee/chemistry/surface-chemistry",
      relation: "related",
      description: "Develops catalytic surface behaviour further, building on the catalysis concepts introduced here.",
    },
    {
      label: "Electrochemistry",
      url: "/jee/chemistry/electrochemistry",
      relation: "forward",
      description: "Extends physical-chemistry reasoning into electrode kinetics and cell behaviour.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "forward",
      description: "Shares concentration-based reasoning used throughout kinetics calculations.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Concentration and time-unit reasoning used throughout rate-law construction.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Distinguishing rate from final composition avoids a common confusion carried into kinetics.",
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
      label: "JEE syllabus: Chemistry",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Official Chemistry scope for Main and Advanced.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Chemistry subject hub.",
    },
  ],

  faqs: [
    {
      question: "Can reaction order be read from a balanced overall equation?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No, unless the process is explicitly a single elementary step. Overall rate-law powers are experimental." },
          ],
        },
      ],
    },
    {
      question: "What is the difference between order and molecularity?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Order is the sum of exponents in an experimental rate law; molecularity counts reacting species in one elementary event." },
          ],
        },
      ],
    },
    {
      question: "Does a catalyst change the equilibrium constant?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. At fixed temperature it changes the pathway and rates, not the equilibrium constant." },
          ],
        },
      ],
    },
    {
      question: "Does this chapter cover whether a reaction is thermodynamically favourable?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Thermodynamic feasibility and state energy are covered in Chemical Thermodynamics; this chapter covers the time path and rate of a reaction." },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-chem-kinetics",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and rate-law, integrated-form, Arrhenius, and catalysis treatment is tied to NCERT Chemistry Chemical Kinetics. Spontaneity questions remain under Thermodynamics and final-composition questions under Equilibrium. No chapter weightage, question frequency, trend or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Physical Chemistry educator experienced in data-led rate-law and mechanism reasoning.",
    "Academic reviewer: postgraduate degree in Chemistry, preferably Physical Chemistry, Chemical Engineering, or a closely related discipline with documented kinetics expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies order evidence, integrated-law conditions, units, and Arrhenius signs separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Chemical Kinetics for JEE: Rate Laws, Order, Arrhenius",
    description:
      "Learn JEE chemical kinetics through rate data, order, zero and first order laws, half-life, Arrhenius behaviour, catalysis, and common traps. No invented weightage.",
    ogTitle: "Chemical Kinetics for JEE",
    ogDescription:
      "An evidence-first guide to rate laws, integrated forms, activation energy, and catalysis for JEE.",
  },
};

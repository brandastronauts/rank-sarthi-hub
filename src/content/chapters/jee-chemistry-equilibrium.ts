import type { ChapterContent } from "@/content/types";

/**
 * Equilibrium — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, or PYQ-count records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - This umbrella page owns chemical plus ionic equilibrium direction and
 *   response reasoning, and routes deep ionic-equilibrium calculation
 *   (pH, buffers, hydrolysis, solubility) to the dedicated Ionic Equilibrium
 *   chapter, per the frozen cannibalization boundary.
 */
export const jeeChemistryEquilibrium: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Equilibrium",
  slug: "equilibrium",
  url: "/jee/chemistry/equilibrium",
  canonicalIntent:
    "Determine reaction direction, equilibrium composition response, acid-base state, buffer behaviour, and solubility by comparing the current state with the relevant equilibrium constant.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every relation carries its conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Chemical equilibrium is dynamic: forward and reverse processes continue at equal rates while macroscopic composition remains constant. To predict direction, construct the reaction quotient Q for the current state and compare it with the equilibrium constant K at the same temperature.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct solution identifies the equilibrium family first (physical, chemical gas-phase, acid-base, buffer, hydrolysis, or precipitation), builds the quotient from the current state, and only then applies a disturbance or approximation.",
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
      description: "Concentration and mole-based units are needed to build any equilibrium quotient.",
    },
    {
      label: "Chemical Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "prerequisite",
      description: "Standard Gibbs energy and its relation to Q and K underlie equilibrium direction.",
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
    unit: "Equilibrium",
    topics: [
      "Dynamic and physical equilibria, including Henry's law",
      "Law of chemical equilibrium, Kp and Kc",
      "Gibbs energy significance for equilibrium",
      "Effect of concentration, pressure, temperature and catalyst",
      "Le Chatelier's principle",
      "Weak and strong electrolytes",
      "Arrhenius, Bronsted-Lowry and Lewis acids and bases",
      "Multistage ionization, water ionization and pH",
      "Common-ion effect and salt hydrolysis",
      "Solubility product and buffers",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "dynamic-not-stopped",
      title: "1. Equilibrium is dynamic, not stopped",
      keyIdea: "Forward and reverse rates are equal, not zero, at equilibrium.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At equilibrium, forward and reverse processes continue at equal rates while macroscopic composition stays constant. Nothing has stopped; the observable concentrations simply no longer change with time.",
            },
          ],
        },
      ],
    },
    {
      id: "write-balanced-reaction",
      title: "2. Write the balanced reversible reaction first",
      keyIdea: "Stoichiometric coefficients become powers in the reaction quotient and the equilibrium constant.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every equilibrium expression begins from a correctly balanced reversible reaction. The stoichiometric coefficients of each species become the exponents applied to that species' activity or concentration term.",
            },
          ],
        },
      ],
    },
    {
      id: "activity-approximation",
      title: "3. Choose activities or the permitted approximation",
      keyIdea: "Pure solids and pure liquids have unit activity and do not appear as variable concentration terms.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Thermodynamic equilibrium constants are built from activities. Pure solids and pure liquids are assigned unit activity and are omitted as variable terms, while gases and solutes are approximated by partial pressure or concentration ratios under the stated convention.",
            },
          ],
        },
      ],
    },
    {
      id: "q-vs-k",
      title: "4. Compare Q with K to get direction",
      keyIdea: "Q less than K favours forward change; Q greater than K favours reverse change; Q equal to K is equilibrium.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Build the reaction quotient Q from the current state using the same expression form as K. If Q is less than K, the system moves forward; if Q is greater than K, the system moves in reverse; if Q equals K, the system is already at equilibrium.",
            },
          ],
        },
      ],
    },
    {
      id: "disturbance-response",
      title: "5. A disturbance changes Q immediately; it may or may not change K",
      keyIdea: "Concentration and pressure changes shift Q; only temperature changes K.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Changing concentration or pressure immediately alters the reaction quotient without changing the equilibrium constant, so the system responds by shifting until Q again equals K. Temperature change is different: it changes K itself.",
            },
          ],
        },
      ],
    },
    {
      id: "catalyst-does-not-shift",
      title: "6. A catalyst does not change K or the equilibrium composition",
      keyIdea: "A catalyst accelerates both forward and reverse rates equally through a lower-energy pathway.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A catalyst provides a lower-energy pathway for both the forward and reverse reactions equally, so equilibrium is reached faster but the equilibrium constant and final composition are unchanged at a fixed temperature.",
            },
          ],
        },
      ],
    },
    {
      id: "ionic-families",
      title: "7. Identify the ionic-equilibrium family before calculating",
      keyIdea: "Weak acid-base, buffer, hydrolysis, precipitation, and coupled equilibria each need a different setup.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For ionic systems, first decide whether the problem is a weak acid or base ionization, a buffer, salt hydrolysis, a precipitation or solubility comparison, or a coupled equilibrium. Deep ionic calculation, including full derivations for pH, buffers, hydrolysis and solubility, is treated in Ionic Equilibrium.",
            },
          ],
        },
      ],
    },
    {
      id: "validate-approximation",
      title: "8. Validate every approximation before finalising an answer",
      keyIdea: "Check charge balance, mass balance, and whether concentration can substitute for activity.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Before accepting a numerical answer, check charge balance, mass balance, any neglected terms, and whether the dilute-solution approximation of activity by concentration is justified for the given system.",
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
          "Chemical equilibrium is dynamic. Direction and response are predicted by comparing the current reaction quotient Q with the equilibrium constant K at a fixed temperature, extending to acid-base, buffer, hydrolysis and solubility equilibria.",
        ],
        [
          "What is the central method choice?",
          "Identify the equilibrium family, build Q from the current state using the correct activity or concentration convention, compare it with K, then apply any disturbance.",
        ],
        [
          "Where do most mistakes begin?",
          "Believing equilibrium means the reactions stop, including pure solids or liquids as variable terms, assuming a catalyst shifts equilibrium composition, or applying a buffer equation before completing neutralization.",
        ],
        [
          "What should come before Equilibrium?",
          "Mole concept and concentration units, and standard Gibbs energy from Chemical Thermodynamics.",
        ],
        [
          "What comes after it?",
          "Ionic Equilibrium develops the deeper pH, buffer, hydrolysis and solubility calculations; Electrochemistry and Chemical Kinetics extend the physical-chemistry reasoning further.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Equilibrium",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Physical and chemical equilibria, Kp, Kc, Gibbs significance",
          "Dynamic and physical equilibria including Henry's law; law of chemical equilibrium, Kp, Kc, and Gibbs significance are explicitly listed.",
          "Law of mass action, Gibbs energy significance, Kp, Kc and reaction quotient are explicitly listed.",
          "Learn to build Q and K from the same balanced reaction before comparing them.",
        ],
        [
          "Concentration, pressure, temperature, catalyst and Le Chatelier",
          "Explicitly listed.",
          "Le Chatelier effects of concentration, temperature and pressure are explicitly listed.",
          "Separate what changes Q immediately from what changes K itself.",
        ],
        [
          "Acids, bases and electrolytes",
          "Weak and strong electrolytes; Arrhenius, Bronsted-Lowry and Lewis acids and bases are explicitly listed.",
          "Bronsted and Lewis acids and bases are explicitly listed.",
          "Confirm which acid-base definition the question requires before assigning conjugate pairs.",
        ],
        [
          "pH, common-ion effect, hydrolysis, solubility product and buffers",
          "Multistage ionization, water ionization, pH, common-ion effect, salt hydrolysis, solubility product and buffers are explicitly listed.",
          "Solubility product, common-ion effect, pH, buffers and salt hydrolysis are explicitly listed.",
          "Route deep calculation practice to Ionic Equilibrium; this page covers the shared reasoning model.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Equilibrium",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Mole concept and concentration units",
          "Convert between mass, moles and concentration without error.",
          "Revise Mole Concept before building any equilibrium expression.",
        ],
        [
          "Standard Gibbs energy",
          "Relate the sign of Gibbs energy change to spontaneity and connect it to Q and K.",
          "Revise Chemical Thermodynamics, particularly the Gibbs energy relation to equilibrium.",
        ],
        [
          "Logarithms",
          "Manipulate logarithmic expressions for pH-style relations.",
          "Practise logarithm rules before attempting acid-base problems.",
        ],
        [
          "Partial pressure versus total pressure",
          "Distinguish a component's partial pressure from the total system pressure in a gas mixture.",
          "Revise mole-fraction and partial-pressure relations for gas mixtures.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the equilibrium family before calculating",
      intro: "Match the question signal to the correct first model before any algebra.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Direction after mixing", "Compare Q with K", "Same temperature and correct reaction orientation"],
        ["Pressure or volume change", "Recalculate gas quotient", "Count gaseous stoichiometric change, not total moles alone"],
        ["Catalyst added", "Rate-path statement", "Catalyst does not change K or equilibrium composition"],
        ["Weak acid or base", "Ionization equilibrium", "Initial concentration and approximation check"],
        ["Buffer", "Conjugate pair and mole accounting", "Complete any neutralization before applying the buffer relation"],
        ["Precipitation", "Ionic product versus Ksp", "Correct dissolution stoichiometry and common ions"],
        ["Gas dissolved in liquid", "Henry's law relation", "Use the defined convention for the Henry constant"],
      ],
    },
  ],

  formulas: [
    {
      id: "equilibrium-constant",
      expression: "K = product of a_i to the power nu_i",
      latex: "K=\\prod a_i^{\\nu_i}",
      meaning: "Thermodynamic equilibrium constant built from activities and signed stoichiometric numbers.",
      variables: [
        { symbol: "a_i", meaning: "activity of species i" },
        { symbol: "nu_i", meaning: "signed stoichiometric coefficient of species i" },
      ],
      units: "Dimensionless",
      useWhen: "Defined standard states are fixed at a given temperature.",
      commonTrap: "Inserting a pure solid or pure liquid concentration as a variable term instead of treating its activity as unity.",
      accessibleText: "K records the equilibrium composition tendency as a product of activities raised to their stoichiometric powers.",
    },
    {
      id: "kp-kc-relation",
      expression: "Kp = Kc × (RT) ^ Δn_g",
      latex: "K_p=K_c(RT)^{\\Delta n_g}",
      meaning: "Gas-phase relation between the pressure-based and concentration-based equilibrium constants under the common ideal-gas convention.",
      variables: [
        { symbol: "Δn_g", meaning: "change in moles of gas, products minus reactants" },
        { symbol: "R", meaning: "gas constant" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
      ],
      units: "Convention dependent",
      useWhen: "Ideal gases, a consistent standard-state convention, and the same balanced reaction.",
      commonTrap: "Counting solids or liquids in Δn_g instead of only gaseous species.",
      accessibleText: "Pressure and concentration equilibrium constants differ through gas stoichiometry.",
    },
    {
      id: "gibbs-q-relation",
      expression: "ΔG = ΔG° + RT ln Q",
      latex: "\\Delta G=\\Delta G^\\circ+RT\\ln Q",
      meaning: "Current reaction Gibbs energy change at a given composition, expressed through the reaction quotient.",
      variables: [
        { symbol: "ΔG°", meaning: "standard Gibbs energy change", unit: "J mol^-1" },
        { symbol: "Q", meaning: "reaction quotient at the current state" },
      ],
      units: "J mol^-1",
      useWhen: "A defined reaction, activities, and a fixed temperature are given.",
      commonTrap: "Comparing Q with K for different reaction directions without matching the reaction as written.",
      accessibleText: "The reaction quotient tells how the present composition shifts the current driving force away from standard conditions.",
    },
    {
      id: "water-autoionization",
      expression: "Kw = a(H+) × a(OH-)",
      latex: "K_w=a_{H^+}a_{OH^-}",
      meaning: "Water autoionization constant relating hydrogen-ion and hydroxide-ion activities.",
      variables: [{ symbol: "Kw", meaning: "water autoionization constant" }],
      units: "Dimensionless thermodynamically",
      useWhen: "A fixed temperature is specified.",
      commonTrap: "Treating 10^-14 as exact at every temperature instead of a value specific to 25 degrees Celsius.",
      accessibleText: "Acid and base ion activities in water remain linked through the autoionization constant.",
    },
    {
      id: "ph-definition",
      expression: "pH = -log10( a(H+) )",
      latex: "\\mathrm{pH}=-\\log_{10}a_{H^+}",
      meaning: "Thermodynamic definition of pH as the negative logarithm of hydrogen-ion activity.",
      variables: [{ symbol: "pH", meaning: "logarithmic measure of hydrogen-ion activity" }],
      units: "Dimensionless",
      useWhen: "Hydrogen-ion activity is known or can be approximated.",
      commonTrap: "Replacing activity with concentration without stating the dilute-solution approximation being used.",
      accessibleText: "pH is a logarithmic measure of hydrogen-ion activity.",
    },
    {
      id: "henderson-buffer",
      expression: "pH ≈ pKa + log( [A-] / [HA] )",
      latex: "\\mathrm{pH}\\approx\\mathrm{p}K_a+\\log([A^-]/[HA])",
      meaning: "Henderson relation for an acid buffer, relating pH to the conjugate-base to acid concentration ratio.",
      variables: [
        { symbol: "pKa", meaning: "negative logarithm of the acid ionization constant" },
        { symbol: "[A-]", meaning: "conjugate base concentration" },
        { symbol: "[HA]", meaning: "weak acid concentration" },
      ],
      units: "Dimensionless",
      useWhen: "The same solution contains a suitable weak-acid buffer and the concentration ratio approximates the activity ratio.",
      commonTrap: "Using it before completing reaction stoichiometry, or at an equivalence point where it does not apply.",
      accessibleText: "Buffer pH depends on the logarithm of the conjugate-base to acid concentration ratio.",
    },
    {
      id: "solubility-product",
      expression: "Ksp = product of a_i to the power nu_i",
      latex: "K_{sp}=\\prod a_i^{\\nu_i}",
      meaning: "Solubility product for the dissolution ions of a sparingly soluble salt at saturation.",
      variables: [{ symbol: "Ksp", meaning: "solubility product" }],
      units: "Dimensionless thermodynamically",
      useWhen: "A saturated solution is in equilibrium with its solid.",
      commonTrap: "Equating molar solubility directly to every ion concentration without applying dissolution stoichiometry.",
      accessibleText: "Dissolution stoichiometry controls the ion powers used in the solubility product.",
    },
    {
      id: "henry-law",
      expression: "p = kH × x",
      latex: "p=k_Hx",
      meaning: "One common Henry's law convention relating gas partial pressure to dissolved mole fraction.",
      variables: [
        { symbol: "p", meaning: "partial pressure of the gas", unit: "Pa" },
        { symbol: "kH", meaning: "Henry's law constant in the stated convention" },
        { symbol: "x", meaning: "mole fraction of dissolved gas" },
      ],
      units: "Pa if kH is expressed in Pa",
      useWhen: "Dilute gas solubility is described under a stated convention and temperature.",
      commonTrap: "Mixing reciprocal Henry-constant conventions from different sources.",
      accessibleText: "Gas partial pressure is proportional to dissolved mole fraction in this convention.",
    },
  ],

  workedExamples: [
    {
      id: "ammonia-direction",
      prompt:
        "For N2(g) + 3H2(g) ⇌ 2NH3(g), the current partial pressures give a reaction quotient Qp built the same way as Kp. Determine the direction of net change if Qp is less than Kp, and describe the effect of adding a catalyst.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Build Qp from the current partial pressures using the same expression form as Kp for the same balanced reaction." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Since Qp is less than Kp, the mixture has too little product relative to equilibrium, so net forward change is favoured." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Adding a catalyst accelerates both the forward and reverse directions through a lower-energy pathway but does not change Qp, Kp, or the final equilibrium composition." },
          ],
        },
      ],
      answer: "Net forward change occurs because Qp is less than Kp; a catalyst speeds up reaching equilibrium without shifting it.",
      sourceRef: "ncert-chem-equilibrium",
    },
  ],

  mistakes: [
    {
      id: "equilibrium-means-stopped",
      mistake: "Saying equilibrium means both reactions stop.",
      why: [{ type: "paragraph", children: [{ text: "Equilibrium is dynamic: forward and reverse rates are equal, not zero, so the reaction never actually stops." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Describe equilibrium as equal opposing rates producing constant macroscopic composition." }] }],
      errorType: "knowledge-gap",
      sourceRefs: ["ncert-chem-equilibrium"],
    },
    {
      id: "changing-k-with-reactant",
      mistake: "Believing K changes after adding a reactant at constant temperature.",
      why: [{ type: "paragraph", children: [{ text: "K depends only on temperature for a given reaction; adding a reactant changes Q and the composition shifts, not K itself." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate what changes Q immediately (concentration, pressure) from what changes K (temperature only)." }] }],
      errorType: "knowledge-gap",
      sourceRefs: ["ncert-chem-equilibrium"],
    },
    {
      id: "solid-liquid-in-k",
      mistake: "Including pure solids or pure liquids as variable terms in K.",
      why: [{ type: "paragraph", children: [{ text: "Pure solids and pure liquids are assigned unit activity and do not vary with the amount present." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Omit pure solid and pure liquid terms from the equilibrium expression." }] }],
      errorType: "execution-error",
      sourceRefs: ["ncert-chem-equilibrium"],
    },
    {
      id: "catalyst-shifts-equilibrium",
      mistake: "Using a catalyst to predict a different equilibrium composition.",
      why: [{ type: "paragraph", children: [{ text: "A catalyst speeds up both forward and reverse reactions equally, so it does not change K or the final composition." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State that a catalyst affects only the rate of reaching equilibrium." }] }],
      errorType: "knowledge-gap",
      sourceRefs: ["ncert-chem-equilibrium"],
    },
    {
      id: "buffer-before-neutralization",
      mistake: "Applying a buffer equation before completing strong acid-base neutralization.",
      why: [{ type: "paragraph", children: [{ text: "The Henderson relation assumes a genuine conjugate acid-base pair already coexists in solution after any neutralization reaction is complete." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Complete the stoichiometric neutralization first, then identify the remaining conjugate pair before applying the buffer relation." }] }],
      errorType: "decision-error",
      sourceRefs: ["ncert-chem-equilibrium"],
    },
    {
      id: "ksp-as-solubility",
      mistake: "Treating Ksp as molar solubility without stoichiometry.",
      why: [{ type: "paragraph", children: [{ text: "Ksp is a product of ion activities raised to their stoichiometric powers, not the molar solubility itself." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Write the dissolution equation and express each ion concentration in terms of molar solubility before substituting." }] }],
      errorType: "execution-error",
      sourceRefs: ["ncert-chem-equilibrium"],
    },
    {
      id: "reverse-k-without-reciprocal",
      mistake: "Using K for the reverse reaction without taking the reciprocal.",
      why: [{ type: "paragraph", children: [{ text: "Reversing a reaction inverts the equilibrium constant because the roles of products and reactants swap." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Take the reciprocal of K whenever the reaction direction is reversed relative to the given constant." }] }],
      errorType: "execution-error",
      sourceRefs: ["ncert-chem-equilibrium"],
    },
  ],

  relatedChapters: [
    {
      label: "Ionic Equilibrium",
      url: "/jee/chemistry/ionic-equilibrium",
      relation: "related",
      description: "Owns deep pH, buffer, hydrolysis and solubility calculation beyond this chapter's shared reasoning model.",
    },
    {
      label: "Electrochemistry",
      url: "/jee/chemistry/electrochemistry",
      relation: "forward",
      description: "Extends equilibrium reasoning into electrode potentials and cell behaviour.",
    },
    {
      label: "Chemical Kinetics",
      url: "/jee/chemistry/chemical-kinetics",
      relation: "forward",
      description: "Covers how fast equilibrium is reached, separate from the final composition covered here.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Concentration and mole-based units used throughout equilibrium expressions.",
    },
    {
      label: "Chemical Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "prerequisite",
      description: "Standard Gibbs energy underlies the relation between Q and K.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "related",
      description: "Shares concentration-based reasoning used in equilibrium calculations.",
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
      question: "What is dynamic equilibrium?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Forward and reverse reactions continue at equal rates while macroscopic composition remains constant." },
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
            { text: "No. It changes the rate of reaching equilibrium, not K at a fixed temperature." },
          ],
        },
      ],
    },
    {
      question: "What is the safest way to predict reaction direction?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Construct the current reaction quotient and compare it with the equilibrium constant for the same reaction orientation and temperature." },
          ],
        },
      ],
    },
    {
      question: "Does this page cover buffers, hydrolysis and solubility in full depth?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "This page covers the shared reasoning model for chemical and ionic equilibrium. Deep pH, buffer, hydrolysis and solubility calculation is covered in Ionic Equilibrium." },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-chem-equilibrium",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and reaction and formula treatment is tied to NCERT Chemistry Equilibrium. Deep ionic-equilibrium derivations are directed to the Ionic Equilibrium chapter. No chapter weightage, question frequency, trend or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Physical Chemistry educator experienced in chemical and ionic equilibrium.",
    "Academic reviewer: postgraduate degree in Chemistry, preferably Physical or Analytical Chemistry, or a closely related discipline with documented equilibrium expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies equilibrium expressions, units, syllabus-boundary claims and worked reasoning separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Chemical Equilibrium for JEE: K, Q, pH, Buffers, Ksp",
    description:
      "Learn JEE equilibrium through Q versus K, Le Chatelier response, acids, bases, buffers, solubility, conditional formulas, worked reasoning, and traps. No invented weightage.",
    ogTitle: "Chemical Equilibrium for JEE",
    ogDescription:
      "A state-comparison guide to equilibrium direction, response, pH, buffers, and solubility for JEE.",
  },
};

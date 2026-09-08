import type { ChapterContent } from "@/content/types";

/**
 * Mole Concept — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, or PYQ-count claims are asserted.
 * - contentStatus stays "draft" until academic review is recorded.
 * - JEE Main 2026 and JEE Advanced 2026 both INCLUDE the mole concept and
 *   stoichiometry. This page owns quantity translation and stoichiometric
 *   control; Solutions owns detailed concentration and colligative models,
 *   Redox Reactions owns redox balancing.
 */
export const jeeChemistryMoleConcept: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Mole Concept",
  slug: "mole-concept",
  url: "/jee/chemistry/mole-concept",
  canonicalIntent:
    "Translate reliably among particles, amount, mass, composition, chemical equations, and limiting quantities using units and stoichiometric constraints.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every relation carries its unit and condition",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Convert every given quantity to moles, use coefficients from a balanced equation as mole ratios, apply the limiting constraint, and convert the result into the requested unit.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A numerical answer is not complete until formula identity, equation balance, units, significant information, and limiting reagent have been checked.",
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
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Formula writing and particle identity rely on atomic composition.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "related",
      description: "Review this when the reaction itself requires redox balancing before stoichiometry.",
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
    unit: "Some Basic Concepts in Chemistry",
    topics: [
      "Atomic and molecular masses",
      "Mole concept and molar mass",
      "Percentage composition",
      "Empirical and molecular formulae",
      "Chemical equations and stoichiometry",
      "Limiting reagent",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "entity",
      title: "1. Decide the counted entity before anything else",
      keyIdea: "The counted object may be an atom, molecule, ion, electron, or formula unit.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every mole calculation begins by naming exactly what is being counted. Confusing atoms with molecules, or molecules with formula units of an ionic solid, produces a wrong answer even when the arithmetic is correct.",
            },
          ],
        },
      ],
    },
    {
      id: "mole-bridge",
      title: "2. Use moles as the bridge between quantities",
      keyIdea: "Mass, particle count, gas amount, and concentration-volume data all convert to moles first.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mass converts to moles through molar mass. Particle count converts through Avogadro's constant. Gas amount under stated conditions and concentration-volume data convert through their own relations. None of these quantities should be combined directly without first passing through the mole.",
            },
          ],
        },
      ],
    },
    {
      id: "balanced-relation",
      title: "3. Equation coefficients are mole ratios only after balancing",
      keyIdea: "An unbalanced equation gives incorrect mole ratios even if every species is written correctly.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Coefficients in a balanced chemical equation express the ratio of moles reacting and produced. This ratio is not valid until the equation is confirmed balanced for atoms.",
            },
          ],
        },
      ],
    },
    {
      id: "constraint",
      title: "4. Identify the operating constraint",
      keyIdea: "Limiting reagent, purity, yield, and composition each change how the final quantity is calculated.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A reaction with several reactants is governed by the reagent that permits the fewest reaction units, not the reagent present in the smallest raw mass or mole count. Purity and yield further limit the usable or realised amount.",
            },
          ],
        },
      ],
    },
    {
      id: "requested-form",
      title: "5. Convert to the requested form and audit the result",
      keyIdea: "The final answer must be converted into the unit the question actually asks for, then checked for plausibility.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "After the stoichiometric amount in moles is found, convert to mass, particle count, formula, or concentration as requested. Then check units, atom balance, and whether the magnitude is physically reasonable.",
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
          "Translating among particles, amount, mass, composition, chemical equations, and limiting quantities using amount of substance as the common bridge.",
        ],
        [
          "What is the central method choice?",
          "Convert every given quantity to moles first, apply a balanced equation's coefficients as mole ratios, then identify the limiting or constraining condition before converting to the requested unit.",
        ],
        [
          "Where do most mistakes begin?",
          "Skipping the balancing step, selecting a limiting reagent by raw mass instead of coefficient-normalised moles, and mixing units mid-calculation.",
        ],
        [
          "What should come before Mole Concept?",
          "Reading chemical formulae and atomic structure basics.",
        ],
        [
          "What comes after it?",
          "Solutions develops detailed concentration and colligative models, and Redox Reactions develops electron-transfer balancing that also uses mole ratios.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Mole Concept",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Mole concept, molar mass, percentage composition, empirical and molecular formulae, equations, and stoichiometry",
          "INCLUDED. Explicitly listed in Unit 1.",
          "INCLUDED. Mole concept, formulae, and balanced equations are listed in General Topics.",
          "Build the entity-to-mole-to-formula chain before attempting stoichiometry problems.",
        ],
        [
          "Redox, neutralisation, and displacement stoichiometry; concentration measures",
          "Covered through the equations and stoichiometry line, without a separate reaction-type heading.",
          "Explicitly listed as calculations involving common redox, neutralisation, and displacement reactions, with stated concentration forms, in General Topics.",
          "Treat redox and concentration calculations as applications of the same mole bridge, not a separate framework.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Mole Concept",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Formula writing",
          "Read and write a chemical formula and identify its constituent atoms.",
          "Revise valency and formula-writing rules from Atomic Structure.",
        ],
        [
          "Equation balancing",
          "Balance a simple chemical equation for atoms.",
          "Practise balancing with small integer coefficients.",
        ],
        [
          "Ratio and unit handling",
          "Use ratios, powers of ten, and consistent SI or CGS units without mixing them.",
          "Revise unit conversion and scientific notation.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the conversion path before calculating",
      intro: "Match the given quantity to its mole-bridge conversion before any stoichiometric algebra.",
      columns: ["Given", "Convert first to", "Then use"],
      rows: [
        ["Mass", "Moles through molar mass", "Stoichiometric ratio"],
        ["Particle count", "Moles through Avogadro's constant", "Formula or equation ratio"],
        ["Composition percentages", "Relative masses, then moles", "Simplest ratio and empirical formula"],
        ["Several reactants", "Available moles divided by coefficients", "Smallest reaction extent identifies the limiting reagent"],
        ["Purity", "Mass of active substance", "Mole conversion"],
        ["Percentage yield", "Theoretical and actual amounts on same basis", "100 times actual divided by theoretical"],
      ],
    },
  ],

  formulas: [
    {
      id: "amount-from-mass",
      expression: "n = m / M",
      latex: "n = \\dfrac{m}{M}",
      meaning: "Amount of substance from mass and molar mass.",
      variables: [
        { symbol: "n", meaning: "amount of substance", unit: "mol" },
        { symbol: "m", meaning: "mass", unit: "g (matching M)" },
        { symbol: "M", meaning: "molar mass", unit: "g/mol" },
      ],
      useWhen: "Mass and molar mass are known, or mass has been corrected for purity.",
      commonTrap: "Mixing mass units, such as grams with a molar mass expressed in kilograms per mole.",
      accessibleText: "Amount equals mass divided by molar mass.",
    },
    {
      id: "number-of-entities",
      expression: "N = n × N_A",
      latex: "N = nN_A",
      meaning: "Number of a specified entity from amount of substance.",
      variables: [
        { symbol: "N", meaning: "number of entities", unit: "count" },
        { symbol: "n", meaning: "amount of substance", unit: "mol" },
        { symbol: "N_A", meaning: "Avogadro constant", unit: "6.02214076 × 10^23 per mol, exact" },
      ],
      useWhen: "The entity being counted (atom, molecule, ion, or formula unit) has been named explicitly.",
      commonTrap: "Counting atoms when the question asked for molecules or formula units.",
      accessibleText: "Number of entities equals amount of substance times the Avogadro constant.",
    },
    {
      id: "mass-percentage",
      expression: "% by mass = (mass of component / mass of sample) × 100",
      latex: "\\%\\ \\text{by mass} = \\dfrac{m_{component}}{m_{sample}}\\times100",
      meaning: "Mass fraction of a component expressed as a percentage.",
      variables: [
        { symbol: "m_component", meaning: "mass of the component", unit: "consistent mass unit" },
        { symbol: "m_sample", meaning: "mass of the whole sample", unit: "consistent mass unit" },
      ],
      useWhen: "The sample basis is clearly defined and both masses use the same unit.",
      commonTrap: "Substituting moles directly into a mass-percentage formula instead of masses.",
      accessibleText: "Mass percentage equals mass of component divided by mass of sample, times one hundred.",
    },
    {
      id: "molecular-formula-multiplier",
      expression: "k = M_molecular / M_empirical",
      latex: "k = \\dfrac{M_{molecular}}{M_{empirical}}",
      meaning: "Whole-number multiplier relating the empirical formula to the molecular formula.",
      variables: [
        { symbol: "k", meaning: "molecular formula multiplier", unit: "dimensionless" },
        { symbol: "M_molecular", meaning: "molecular molar mass", unit: "g/mol" },
        { symbol: "M_empirical", meaning: "empirical formula mass", unit: "g/mol" },
      ],
      useWhen: "Both molar masses are known and expressed in the same unit.",
      commonTrap: "Rounding a poorly determined ratio blindly to the nearest integer.",
      accessibleText: "The molecular formula multiplier equals molecular molar mass divided by empirical formula mass.",
    },
    {
      id: "limiting-reagent-yield",
      expression: "theoretical amount = n_limiting × coefficient ratio",
      latex: "\\text{theoretical amount} = n_{limiting}\\times\\text{coefficient ratio}",
      meaning: "Maximum product amount permitted by the limiting reagent.",
      variables: [{ symbol: "n_limiting", meaning: "moles of the limiting reagent", unit: "mol" }],
      useWhen: "The equation is balanced and the limiting reagent has been identified by coefficient-normalised comparison.",
      commonTrap: "Choosing the reagent present in fewer raw moles instead of comparing moles divided by coefficient.",
      accessibleText: "Theoretical amount equals moles of limiting reagent times the coefficient ratio.",
    },
  ],

  workedExamples: [
    {
      id: "limiting-reagent-remainder",
      prompt:
        "For 2H2 + O2 -> 2H2O, 3.0 mol H2 reacts with 1.0 mol O2. Identify the limiting reagent and the amount of hydrogen left over.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Compare available amount divided by coefficient: hydrogen gives 3.0/2 = 1.5 reaction units; oxygen gives 1.0/1 = 1.0 reaction unit." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Oxygen permits fewer reaction units, so oxygen is the limiting reagent." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "One reaction unit consumes 2.0 mol hydrogen and forms 2.0 mol water." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Hydrogen remaining is 3.0 minus 2.0, which equals 1.0 mol. The smaller initial mole count is not the general rule; the coefficient-normalised amount is." },
          ],
        },
      ],
      answer: "Oxygen is limiting; 1.0 mol hydrogen remains unreacted.",
    },
  ],

  mistakes: [
    {
      id: "molar-mass-without-formula",
      mistake: "Using molar mass without first identifying the correct chemical formula.",
      why: [{ type: "paragraph", children: [{ text: "Molar mass depends entirely on the formula; an incorrect or ambiguous formula produces a wrong molar mass and every downstream mole calculation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the exact formula, including hydration or ionic composition, before computing molar mass." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "avogadro-without-units",
      mistake: "Treating Avogadro's constant as a plain number with its per-mole unit omitted.",
      why: [{ type: "paragraph", children: [{ text: "Dropping the unit hides an error when multiplying by an amount that is not in moles." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Carry the unit through the calculation and confirm the amount used is genuinely in moles." }] }],
      errorType: "execution-error",
    },
    {
      id: "formula-units-vs-molecules",
      mistake: "Counting molecules of an ionic solid rather than formula units.",
      why: [{ type: "paragraph", children: [{ text: "An ionic solid does not exist as discrete molecules, so the counted entity must be the formula unit." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Name the entity explicitly as a formula unit for ionic compounds before applying Avogadro's constant." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "unbalanced-equation-ratios",
      mistake: "Using coefficients from an unbalanced equation as mole ratios.",
      why: [{ type: "paragraph", children: [{ text: "An unbalanced equation does not conserve atoms, so its coefficients do not represent valid reacting-mole ratios." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Balance the equation for every atom before reading off any coefficient ratio." }] }],
      errorType: "execution-error",
    },
    {
      id: "limiting-reagent-by-raw-amount",
      mistake: "Selecting the limiting reagent by raw mass or raw mole amount instead of coefficient-normalised amount.",
      why: [{ type: "paragraph", children: [{ text: "The reagent present in the smallest raw quantity is not necessarily the one that runs out first once stoichiometric demand is considered." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Divide each reactant's moles by its coefficient and compare the resulting reaction-unit values." }] }],
      errorType: "decision-error",
    },
    {
      id: "early-rounding-empirical-ratio",
      mistake: "Rounding an empirical mole ratio to a whole number too early, before checking whether a small common multiplier resolves it better.",
      why: [{ type: "paragraph", children: [{ text: "Premature rounding can produce a chemically implausible empirical formula." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Carry the ratio to a reasonable number of decimal places and multiply through by a small integer before rounding." }] }],
      errorType: "execution-error",
    },
    {
      id: "percentage-yield-unlike-quantities",
      mistake: "Applying percentage yield to quantities that are not on the same basis, such as comparing mass to moles directly.",
      why: [{ type: "paragraph", children: [{ text: "Percentage yield requires actual and theoretical amounts expressed in the same quantity and unit." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert both actual and theoretical amounts to the same unit before dividing." }] }],
      errorType: "execution-error",
    },
    {
      id: "unstated-gas-molar-volume",
      mistake: "Using a memorised gas molar volume without checking the stated temperature and pressure.",
      why: [{ type: "paragraph", children: [{ text: "The molar volume of a gas depends on the temperature and pressure conditions assumed, so a memorised figure may not apply." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the stated conditions before using any fixed molar volume figure." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "related",
      description: "Extends stoichiometric mole ratios to electron-transfer balancing.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "forward",
      description: "Develops detailed concentration and colligative-property calculations.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "forward",
      description: "Uses mole-based concentration reasoning in equilibrium expressions.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "forward",
      description: "Uses molar quantities in energy and heat calculations.",
    },
    {
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Provides the formula-writing foundation used throughout mole calculations.",
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
      question: "What is one mole?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "One mole contains exactly 6.02214076 x 10^23 specified elementary entities." },
          ],
        },
      ],
    },
    {
      question: "How is the limiting reagent found?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Convert each reactant to moles and divide by its stoichiometric coefficient. The smallest permitted reaction extent identifies the limiting reagent." },
          ],
        },
      ],
    },
    {
      question: "When can a molar gas volume be used?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Only when its temperature, pressure, gas model, and unit convention match the problem." },
          ],
        },
      ],
    },
    {
      question: "Is Mole Concept part of both JEE Main 2026 and JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Yes. Both official syllabus documents include the mole concept, molar mass, formulae, equations, and stoichiometric calculations." },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-chem-basic-concepts",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
    "bipm-si-brochure",
  ],
  sourceNote:
    "Official-paper items are tagged by given quantity, required conversion, reaction class, limiting condition, and output unit. No question counts, weightage, or trend claims are published from these archives.",
  contributorPolicy: [
    "Contributor fields remain unassigned until a centralized, visible, verified profile is linked.",
  ],

  contentStatus: "draft",
  meta: {
    title: "Mole Concept for JEE 2026: Stoichiometry and Limiting Reagent",
    description:
      "Learn JEE mole calculations through entity counts, molar mass, formulae, balanced equations, limiting reagents, units, and worked reasoning.",
    ogTitle: "Mole Concept and Stoichiometry for JEE 2026",
    ogDescription: "A unit-safe system for moles, particles, formulae, equations, and limiting quantities.",
    ogType: "article",
  },
};

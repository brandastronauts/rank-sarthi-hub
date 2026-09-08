import type { ChapterContent } from "@/content/types";

/**
 * Ionic Equilibrium — T06 production content.
 * Sourced from Rank Sarthi JEE Batch 08 Chemistry package, section 2.
 * Evidence discipline: no weightage, PYQ counts, or trend claims are asserted.
 * Contributor fields remain unassigned pending academic review.
 */
export const jeeChemistryIonicEquilibrium: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Ionic Equilibrium",
  slug: "ionic-equilibrium",
  url: "/jee/chemistry/ionic-equilibrium",
  canonicalIntent:
    "Decide which aqueous equilibrium controls pH, buffer action, hydrolysis, or solubility, then solve with mass, charge, and equilibrium constraints.",

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
          text: "First list the important aqueous species and write the equilibrium that controls them. Then combine the equilibrium expression with material balance, charge balance, water autoionisation when relevant, and any stated approximation. Check the approximation after solving.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A pH, buffer, hydrolysis, or precipitation formula is valid only for its chemical model and conditions.",
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
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "General equilibrium expressions and reaction-quotient reasoning.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "prerequisite",
      description: "Concentration models used in the material-balance step.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Amount and concentration calculations feeding every equilibrium expression.",
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
    unit: "Equilibrium (Ionic Equilibrium focus)",
    topics: [
      "Electrolytes: weak and strong",
      "Arrhenius, Brønsted-Lowry and Lewis acid-base concepts",
      "Multistage ionisation and ionisation constants",
      "Water ionisation and pH",
      "Common-ion effect",
      "Salt hydrolysis",
      "Solubility product",
      "Buffers",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "species-inventory",
      title: "1. Build the species inventory first",
      keyIdea: "Include solvent, acid or base forms, conjugates, ions from salts, and precipitate candidates.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Before any formula, list every species that can meaningfully exist in the solution: the solvent, the acid or base and its conjugate, ions released by dissolved salts, and any solid that could precipitate.",
            },
          ],
        },
      ],
    },
    {
      id: "reaction-family",
      title: "2. Choose the reaction family",
      keyIdea: "Acid ionisation, base ionisation, water autoionisation, hydrolysis, buffer response, or dissolution equilibrium.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Identify which single controlling equilibrium the problem is actually testing before writing any constant expression." },
          ],
        },
      ],
    },
    {
      id: "constant-and-balances",
      title: "3. Write the constant, then the balances",
      keyIdea: "Material balance and charge balance are not optional extras; they are how the equilibrium is actually solved.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Write the equilibrium constant expression exactly as the reaction is written. Then apply material balance so the total analytical amount of each conserved component is accounted for, and charge balance so total positive and negative charge concentrations match.",
            },
          ],
        },
      ],
    },
    {
      id: "approximation-check",
      title: "4. Use an approximation only after checking it",
      keyIdea: "A square-root or small-change approximation must be validated against the computed result.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Approximations such as x much less than C simplify algebra, but the resulting x must be checked against C afterward. If the approximation fails, solve the exact quadratic form instead." },
          ],
        },
      ],
    },
    {
      id: "decision-step",
      title: "5. Decide with a reaction quotient",
      keyIdea: "Compare the reaction quotient with the appropriate constant for direction or precipitation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "For solubility questions, compare the ionic product against the solubility product at the stated temperature to decide whether precipitation is favoured." },
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
          "Which aqueous equilibrium controls pH, buffer action, hydrolysis, or solubility, and how to solve it with mass balance, charge balance, and the correct constant.",
        ],
        [
          "What is the central method choice?",
          "List the species, identify the controlling equilibrium family, write the constant expression, apply balances, then check any approximation used.",
        ],
        [
          "Where do most mistakes begin?",
          "Starting from a memorised pH formula before identifying species, assuming Kw equals 1.0e-14 at every temperature, and applying Henderson-Hasselbalch after a buffer component is consumed.",
        ],
        [
          "What should come before Ionic Equilibrium?",
          "General equilibrium expressions, concentration models from Solutions, and mole-concept calculations.",
        ],
        [
          "What comes after it?",
          "Electrochemistry and Coordination Compounds build on ionic and equilibrium reasoning established here.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Ionic Equilibrium",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Electrolytes and acid-base concepts",
          "Weak and strong electrolytes; Arrhenius, Brønsted-Lowry and Lewis concepts are explicitly listed.",
          "Brønsted and Lewis concepts are explicitly listed within Chemical and Ionic Equilibrium.",
          "Learn all three acid-base models and when each applies.",
        ],
        [
          "Ionisation constants, pH, and water ionisation",
          "Multistage ionisation, ionisation constants, water ionisation, and pH are explicitly listed.",
          "pH is explicitly listed within Chemical and Ionic Equilibrium.",
          "Distinguish concentration-based pH from the thermodynamic activity definition.",
        ],
        [
          "Common-ion effect, hydrolysis, solubility product, buffers",
          "Common-ion effect, salt hydrolysis, solubility product, and buffers are explicitly listed.",
          "Common-ion effect, salt hydrolysis, solubility product, and buffers are explicitly listed.",
          "Practice identifying the controlling equilibrium before choosing a formula.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Ionic Equilibrium",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Equilibrium expressions",
          "Write an equilibrium constant expression and use a reaction quotient.",
          "Revise the general Equilibrium chapter.",
        ],
        [
          "Concentration and amount calculations",
          "Convert between moles, molarity, and volume confidently.",
          "Revise Mole Concept and Solutions.",
        ],
        [
          "Logarithms",
          "Compute pH from hydrogen-ion concentration and back.",
          "Revise logarithm rules and significant figures.",
        ],
        [
          "Ionic formulae",
          "Write dissociation equations for salts and identify conjugate pairs.",
          "Revise nomenclature and common ion charges.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: identify the system before calculating",
      intro: "Match the described system to its starting point and required check.",
      columns: ["System", "Start with", "Required check"],
      rows: [
        ["Strong acid or base", "Stoichiometric dissociation on the stated model", "Concentration range and water contribution if extremely dilute"],
        ["Weak monoprotic acid", "Ka plus mass balance", "Percent ionisation before using square-root form"],
        ["Weak base", "Kb plus mass balance", "Conjugate relationship and approximation"],
        ["Buffer", "Stoichiometry first if strong acid or base is added", "Both conjugate partners remain"],
        ["Salt hydrolysis", "Identify parent acid and base strengths", "Hydrolysing ion and charge balance"],
        ["Sparingly soluble salt", "Dissolution equation and Ksp", "Stoichiometric powers and common ions"],
        ["Precipitation test", "Ionic product Qsp", "Compare with Ksp at the stated temperature"],
      ],
    },
  ],

  formulas: [
    {
      id: "ka",
      expression: "Ka = a(H+) a(A-) / a(HA)",
      latex: "K_a=\\dfrac{a_{H^+}a_{A^-}}{a_{HA}}",
      meaning: "Thermodynamic acid-ionisation constant.",
      variables: [{ symbol: "a(H+), a(A-), a(HA)", meaning: "activities of the species", unit: "dimensionless" }],
      useWhen: "A weak acid ionisation equilibrium is written for a defined reaction and temperature.",
      commonTrap: "Treating the concentration quotient as exact at every ionic strength.",
      accessibleText: "Ka equals the activity of hydrogen ion times the activity of A minus, divided by the activity of HA.",
    },
    {
      id: "kb",
      expression: "Kb = a(BH+) a(OH-) / a(B)",
      latex: "K_b=\\dfrac{a_{BH^+}a_{OH^-}}{a_B}",
      meaning: "Base-ionisation constant.",
      variables: [{ symbol: "a(BH+), a(OH-), a(B)", meaning: "activities of the species", unit: "dimensionless" }],
      useWhen: "A weak base ionisation equilibrium is written at a defined temperature.",
      commonTrap: "Mixing acid and base conjugate forms.",
      accessibleText: "Kb equals the activity of BH plus times the activity of hydroxide, divided by the activity of B.",
    },
    {
      id: "kw",
      expression: "Kw = a(H+) a(OH-)",
      latex: "K_w=a_{H^+}a_{OH^-}",
      meaning: "Water autoionisation constant.",
      variables: [{ symbol: "Kw", meaning: "water autoionisation constant", unit: "dimensionless thermodynamic form" }],
      useWhen: "Water autoionisation is relevant to the species balance.",
      commonTrap: "Assuming Kw equals 1.0e-14 at every temperature; it is temperature-dependent.",
      accessibleText: "Kw equals the activity of hydrogen ion times the activity of hydroxide ion.",
    },
    {
      id: "ph",
      expression: "pH = -log10(a(H+))",
      latex: "\\mathrm{pH}=-\\log_{10}a_{H^+}",
      meaning: "Acidity scale defined using hydrogen-ion activity.",
      variables: [{ symbol: "pH", meaning: "acidity index", unit: "dimensionless" }],
      useWhen: "Activity is approximated by concentration only under suitable conditions.",
      commonTrap: "Writing a molar unit after pH.",
      accessibleText: "pH equals the negative base-ten logarithm of hydrogen-ion activity.",
    },
    {
      id: "ph-poh",
      expression: "pH + pOH = pKw",
      latex: "\\mathrm{pH}+\\mathrm{pOH}=\\mathrm{p}K_w",
      meaning: "Consequence of water autoionisation.",
      variables: [{ symbol: "pKw", meaning: "negative log of Kw", unit: "dimensionless" }],
      useWhen: "Same temperature and activity convention apply to both pH and pOH.",
      commonTrap: "Replacing pKw by 14 without a temperature assumption.",
      accessibleText: "pH plus pOH equals pKw.",
    },
    {
      id: "henderson-hasselbalch",
      expression: "pH ≈ pKa + log([A-]/[HA])",
      latex: "\\mathrm{pH}\\approx\\mathrm{p}K_a+\\log\\dfrac{[A^-]}{[HA]}",
      meaning: "Henderson-Hasselbalch concentration approximation for a buffer.",
      variables: [{ symbol: "[A-]/[HA]", meaning: "ratio of conjugate base to acid concentration", unit: "dimensionless" }],
      useWhen: "A buffer has both conjugate partners present; activity and volume assumptions are acceptable.",
      commonTrap: "Applying this after one buffer component is fully consumed by an added strong reagent.",
      accessibleText: "pH approximately equals pKa plus the log of the ratio of conjugate base to acid concentration.",
    },
    {
      id: "ksp",
      expression: "Ksp = a(M)^q a(X)^p for MqXp(s)",
      latex: "K_{sp}=a_{M^{p+}}^q a_{X^{q-}}^p",
      meaning: "Solubility equilibrium constant.",
      variables: [{ symbol: "q, p", meaning: "stoichiometric coefficients of the dissolution equation", unit: "dimensionless" }],
      useWhen: "A saturated equilibrium exists at a stated temperature.",
      commonTrap: "Equating molar solubility directly to every ion concentration without the stoichiometric powers.",
      accessibleText: "Ksp equals the product of ion activities each raised to its stoichiometric coefficient.",
    },
  ],

  workedExamples: [
    {
      id: "weak-acid-ph-approximation-audit",
      prompt:
        "A monoprotic weak acid has analytical concentration C = 0.0100 mol/L and Ka = 1.0e-5 at the stated temperature. Find the pH and check the approximation used.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Let x be the equilibrium concentration approximation for H+ from the acid, so Ka = x^2 / (C - x)." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Using x much less than C gives x ≈ sqrt(Ka C) = sqrt(1.0e-7) = 3.16e-4 mol/L, so pH ≈ 3.50." }],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Check: x/C = 0.0316, about 3.2 percent. This is reasonably self-consistent under the common five-percent classroom check. If the ratio were not small, solve the quadratic instead. This check is part of the method, not optional decoration.",
            },
          ],
        },
      ],
      answer: "pH ≈ 3.50, with the small-change approximation validated at about 3.2 percent.",
      sourceRef: "ncert-chem-equilibrium",
    },
  ],

  mistakes: [
    {
      id: "formula-before-species",
      mistake: "Starting with a memorised pH formula before identifying species.",
      why: [{ type: "paragraph", children: [{ text: "Different chemical systems require different controlling equilibria; a formula chosen without a species inventory may not apply." }] }],
      fix: [{ type: "paragraph", children: [{ text: "List species and identify the controlling equilibrium before picking any formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "activity-vs-concentration",
      mistake: "Using concentration where the formal definition requires activity, without declaring the approximation.",
      why: [{ type: "paragraph", children: [{ text: "Equilibrium constants are thermodynamically defined in terms of activity; concentration is only an approximation under suitable conditions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State explicitly when concentration is being used as an approximation for activity." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "kw-constant-assumption",
      mistake: "Assuming Kw = 10^-14 at every temperature.",
      why: [{ type: "paragraph", children: [{ text: "Kw is temperature-dependent; the value 10^-14 applies only at a specific reference temperature." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the stated temperature before assuming a numerical value for Kw." }] }],
      errorType: "recall-gap",
    },
    {
      id: "henderson-after-consumption",
      mistake: "Applying Henderson-Hasselbalch after a strong reagent consumes one buffer component.",
      why: [{ type: "paragraph", children: [{ text: "The approximation requires both conjugate partners to remain present in meaningful amounts." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Run stoichiometry first when a strong acid or base is added, then check whether both partners survive." }] }],
      errorType: "decision-error",
    },
    {
      id: "ksp-exponents-forgotten",
      mistake: "Forgetting stoichiometric exponents in Ksp.",
      why: [{ type: "paragraph", children: [{ text: "Ksp is a product of activities each raised to its stoichiometric coefficient, not a simple product of concentrations." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Write the dissolution equation first and apply the correct powers." }] }],
      errorType: "execution-error",
    },
    {
      id: "qsp-ksp-mismatch",
      mistake: "Comparing Qsp and Ksp with mismatched concentration states.",
      why: [{ type: "paragraph", children: [{ text: "A valid comparison requires consistent units and the same defined dissolution equation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm both quantities use the same equation and consistent concentration units before comparing." }] }],
      errorType: "execution-error",
    },
    {
      id: "neutral-ph-always-seven",
      mistake: "Treating neutral pH as always exactly 7.",
      why: [{ type: "paragraph", children: [{ text: "Neutral pH equals half of pKw, which shifts with temperature." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Derive neutral pH from the stated Kw rather than assuming 7." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "unchecked-square-root",
      mistake: "Using a square-root approximation without checking it.",
      why: [{ type: "paragraph", children: [{ text: "The small-change approximation is only valid when the computed x is genuinely small relative to C." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compute x/C after solving and switch to the exact quadratic if the approximation fails." }] }],
      errorType: "execution-error",
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
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "General equilibrium framework this page's aqueous focus builds on.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "prerequisite",
      description: "Concentration models used in material balance.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Amount and concentration calculations feeding this chapter.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "related",
      description: "A lateral general-topic application area.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "related",
      description: "Shares the equilibrium-constant framework at a thermodynamic level.",
    },
    {
      label: "Electrochemistry",
      url: "/jee/chemistry/electrochemistry",
      relation: "forward",
      description: "Builds on ionic equilibrium in electrochemical cell contexts.",
    },
    {
      label: "Coordination Compounds",
      url: "/jee/chemistry/coordination-compounds",
      relation: "forward",
      description: "Extends equilibrium reasoning to complex-ion formation.",
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
      question: "What is the first step in an ionic-equilibrium problem?",
      answer: [
        { type: "paragraph", children: [{ text: "List the important species and write the controlling equilibrium before selecting a formula." }] },
      ],
    },
    {
      question: "When is [H+] approximately equal to sqrt(Ka C) valid?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "For a suitable monoprotic weak-acid model when the acid contribution dominates relevant alternatives and the calculated ionisation is small compared with C." },
          ],
        },
      ],
    },
    {
      question: "When does a precipitate form?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "In the ideal classroom model, precipitation is thermodynamically favoured when the ionic activity product exceeds Ksp at the stated temperature." },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-equilibrium", "nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote:
    "Scope verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents. NCERT Equilibrium resources support acid-base models, equilibrium constants, pH, buffers, hydrolysis, solubility, and approximations. Official-paper archives are cited for provenance only; no frequency, marks, or trend claims are made from them.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type is a JEE Physical Chemistry educator experienced in aqueous equilibria and approximation-led problem solving.",
    "Academically reviewed by: unassigned. Reviewer specialization: solution thermodynamics, acid-base chemistry, ionic activity, solubility equilibria, and current JEE scope, holding a postgraduate degree in Physical Chemistry, Analytical Chemistry, or a closely related discipline.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Ionic Equilibrium for JEE 2026: pH, Buffers and Ksp",
    description:
      "Learn JEE ionic equilibrium through species maps, pH, weak acids and bases, buffers, salt hydrolysis, solubility product, conditions, and checks.",
    ogTitle: "Ionic Equilibrium for JEE 2026",
    ogDescription: "Condition-aware pH, buffers, hydrolysis, solubility, worked reasoning, and mistake diagnosis.",
    ogType: "article",
  },
};

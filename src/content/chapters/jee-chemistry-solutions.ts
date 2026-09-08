import type { ChapterContent } from "@/content/types";

/**
 * Solutions — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Scope check: JEE Main 2026 names concentration measures, vapour pressure,
 *   Raoult law, ideal and non-ideal solutions and vapour-pressure composition
 *   plots, colligative properties of dilute solutions, molecular-mass
 *   determination, abnormal molar mass and van't Hoff factor. Henry law is
 *   listed separately in the Main Equilibrium unit. JEE Advanced 2026 names
 *   Henry law, Raoult law, ideal solutions, lowering of vapour pressure,
 *   boiling-point elevation, freezing-point depression, osmotic pressure and
 *   van't Hoff factor. This page teaches Henry law while linking its
 *   gas-liquid equilibrium context in Main.
 */
export const jeeChemistrySolutions: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Solutions",
  slug: "solutions",
  url: "/jee/chemistry/solutions",
  canonicalIntent:
    "Solve solution-property problems by selecting the correct composition measure, vapour-pressure model, ideality assumption, colligative relation, particle count and unit system before substituting.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Equations carry their conditions and units",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Before using a Solutions formula, identify the composition variable, which component is volatile, whether the solution is ideal or dilute, whether the solute associates or dissociates, and which units match the constant.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Colligative properties depend on the effective number of dissolved particles under the model, not simply the formula-unit concentration written at the start.",
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
      description: "Convert mass to amount and use molar mass before working with any composition measure.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "prerequisite",
      description: "Use Kelvin temperature and equilibrium-adjacent reasoning that underlies vapour-pressure models.",
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
      description: "Exam-level official scope for the Chemistry syllabus.",
    },
  ],

  syllabusMapping: {
    unit: "Solutions",
    topics: [
      "Concentration measures: mole fraction, molarity, molality, mass percentage, volume percentage",
      "Raoult law for volatile components",
      "Ideal and non-ideal solutions, vapour-pressure composition plots (Main)",
      "Henry law (Main: Equilibrium unit; Advanced: Solutions section)",
      "Colligative properties of dilute solutions",
      "Boiling-point elevation and freezing-point depression",
      "Osmotic pressure",
      "van't Hoff factor",
      "Molecular-mass determination and abnormal molar mass (Main)",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "composition",
      title: "1. Decide the composition variable before anything else",
      keyIdea: "Mole fraction, molarity, molality, mass percentage and volume percentage are not interchangeable.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Decide whether the question needs mole fraction, molarity, molality, mass percentage, or volume percentage. Molarity depends on solution volume and is temperature-sensitive because volume changes with temperature; molality depends on solvent mass and is ordinarily temperature-independent.",
            },
          ],
        },
      ],
    },
    {
      id: "phase-model",
      title: "2. Identify the phase model",
      keyIdea: "Volatile solvent, volatile solute, non-volatile solute, or gas dissolved in liquid each need a different relation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Identify volatile solvent, volatile solute, non-volatile solute, or gas dissolved in liquid before selecting a vapour-pressure relation.",
            },
          ],
        },
      ],
    },
    {
      id: "ideality",
      title: "3. Use Raoult-law equality as the ideal reference",
      keyIdea: "Deviations from Raoult law signal changed intermolecular interactions and require the correct vapour-pressure model.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Raoult-law equality defines the ideal reference. Deviations from it signal changed intermolecular interactions and require the correct vapour-pressure model rather than a forced ideal calculation.",
            },
          ],
        },
      ],
    },
    {
      id: "dilution",
      title: "4. Confirm dilution before using a standard colligative relation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Standard colligative relations assume sufficiently dilute behaviour. Applying them outside that assumption is a decision error, not an execution error.",
            },
          ],
        },
      ],
    },
    {
      id: "particle-count",
      title: "5. Correct for the effective particle count",
      keyIdea: "Association lowers and dissociation raises the effective particle count relative to an undisturbed formula-unit model.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Association lowers and dissociation raises the effective particle count relative to an undisturbed formula-unit model. This effective count, not the written formula-unit concentration, drives colligative properties.",
            },
          ],
        },
      ],
    },
    {
      id: "relation-choice",
      title: "6. Select the relation only after the physical scenario is fixed",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Select vapour pressure, boiling, freezing, or osmotic pressure only after the physical scenario is fixed: which component is volatile, whether the solution is ideal, and whether the solute changes the particle count.",
            },
          ],
        },
      ],
    },
    {
      id: "unit-proof",
      title: "7. Match units before calculating",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Match amount, mass, volume, temperature, pressure, and the units of R, K_b, or K_f before calculation. Mixing litre-atmosphere and SI units is a common source of numerical error.",
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
          "Choosing the correct composition measure, vapour-pressure model, ideality assumption, colligative relation, and particle count before substituting into a formula.",
        ],
        [
          "What is the central method choice?",
          "Fix the phase model (volatile solvent, volatile solute, non-volatile solute or dissolved gas), confirm ideality and dilution, then select the matching relation and correct the particle count.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing molarity with molality, applying Raoult law to a non-ideal system without noting deviation, and treating van't Hoff factor as automatically equal to the stoichiometric ion count.",
        ],
        [
          "What should come before Solutions?",
          "Mole Concept for amount-mass conversions and Thermodynamics for Kelvin-scale and equilibrium-adjacent reasoning.",
        ],
        [
          "What comes after it?",
          "Ionic Equilibrium develops equilibrium reasoning further, and Electrochemistry and Chemical Kinetics use solution-based concentration language.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Solutions",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Concentration measures, Raoult law, ideal and non-ideal solutions",
          "Concentration measures, vapour pressure, Raoult law, ideal and non-ideal solutions and vapour-pressure composition plots are explicitly listed.",
          "Raoult law and ideal solutions are explicitly listed.",
          "Learn composition measures and Raoult law together; Main additionally expects non-ideal vapour-pressure plots.",
        ],
        [
          "Henry law",
          "Listed separately in the Main Equilibrium unit, not in the Solutions unit.",
          "Listed within the Advanced Solutions section.",
          "Learn the relation once, but note its different unit placement between the two exams.",
        ],
        [
          "Colligative properties and van't Hoff factor",
          "Colligative properties of dilute solutions, molecular-mass determination, abnormal molar mass and van't Hoff factor are explicitly listed.",
          "Lowering of vapour pressure, boiling-point elevation, freezing-point depression, osmotic pressure and van't Hoff factor are explicitly listed.",
          "Confirm dilute and ideal conditions before applying any colligative relation.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Solutions",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Mole concept",
          "Convert mass to amount and use molar mass confidently.",
          "Revisit Mole Concept before working with any composition measure.",
        ],
        [
          "Solution versus solvent volume",
          "Distinguish solution volume from solvent mass in molarity and molality.",
          "Re-derive both definitions from their variable, not from memory.",
        ],
        [
          "Kelvin temperature",
          "Use absolute temperature in osmotic pressure and vapour-pressure relations.",
          "Practise Celsius-to-Kelvin conversion before substituting into any relation.",
        ],
        [
          "Equilibrium language",
          "Recognise vapour pressure as an equilibrium property at a stated temperature.",
          "Review Thermodynamics and the Equilibrium unit's language before this chapter.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: fix the model before the formula",
      intro: "Match the question signal to the first model and its mandatory check.",
      columns: ["Question signal", "Start with", "Mandatory check"],
      rows: [
        ["Concentration changes with temperature", "Molarity versus molality", "Solution volume changes; solvent mass does not"],
        ["Volatile components", "Component Raoult relations", "Mole fractions and pure-component vapour pressures"],
        ["Non-volatile solute", "Solvent vapour-pressure lowering", "Ideality and solute volatility"],
        ["Gas solubility", "Henry relation", "Convention, temperature, gas mole fraction, partial pressure"],
        ["Boiling or freezing shift", "Molality relation", "Dilute solution, K_b or K_f, van't Hoff factor"],
        ["Osmotic pressure", "π = iCRT model", "Dilute ideal behaviour, absolute temperature, consistent R units"],
        ["Abnormal molar mass", "Particle-count correction", "Association or dissociation model and extent"],
      ],
    },
  ],

  formulas: [
    {
      id: "mole-fraction",
      expression: "x_i = n_i / Σ n_j",
      latex: "x_i = \\dfrac{n_i}{\\sum_j n_j}",
      meaning: "Mole fraction of component i.",
      variables: [
        { symbol: "n_i", meaning: "amount of component i", unit: "mol" },
        { symbol: "Σ n_j", meaning: "total amount of all components", unit: "mol" },
      ],
      units: "Dimensionless",
      useWhen: "Composition needs to be expressed independently of temperature and volume.",
      commonTrap: "Using masses instead of amounts of substance.",
      accessibleText: "Mole fraction of component i equals its amount divided by the total amount of all components.",
    },
    {
      id: "molarity",
      expression: "M = n_solute / V_solution",
      latex: "M = \\dfrac{n_{solute}}{V_{solution}}",
      meaning: "Molarity of the solute.",
      variables: [
        { symbol: "n_solute", meaning: "amount of solute", unit: "mol" },
        { symbol: "V_solution", meaning: "volume of solution", unit: "L" },
      ],
      units: "mol L^-1 when volume is in litres",
      useWhen: "Solution volume is known and available; note this is temperature-sensitive because solution volume can change.",
      commonTrap: "Dividing by solvent volume instead of solution volume.",
      accessibleText: "Molarity equals amount of solute divided by volume of solution.",
    },
    {
      id: "molality",
      expression: "m = n_solute / m_solvent",
      latex: "m = \\dfrac{n_{solute}}{m_{solvent}}",
      meaning: "Molality of the solute.",
      variables: [
        { symbol: "n_solute", meaning: "amount of solute", unit: "mol" },
        { symbol: "m_solvent", meaning: "mass of solvent", unit: "kg" },
      ],
      units: "mol kg^-1",
      useWhen: "Solvent mass is known; ordinarily temperature-independent, unlike molarity.",
      commonTrap: "Using solution mass instead of solvent mass.",
      accessibleText: "Molality equals amount of solute divided by mass of solvent in kilograms.",
    },
    {
      id: "raoult-volatile",
      expression: "p_i = x_i × p_i^0",
      latex: "p_i = x_i\\,p_i^0",
      meaning: "Raoult relation for volatile component i in an ideal solution.",
      variables: [
        { symbol: "p_i", meaning: "partial vapour pressure of component i", unit: "matches p_i^0" },
        { symbol: "x_i", meaning: "mole fraction of component i in solution", unit: "dimensionless" },
        { symbol: "p_i^0", meaning: "vapour pressure of pure component i", unit: "pressure unit" },
      ],
      useWhen: "The solution is ideal at the stated temperature.",
      commonTrap: "Using the solute mole fraction where the solvent partial pressure is required.",
      accessibleText: "Partial vapour pressure of component i equals its mole fraction times the vapour pressure of the pure component.",
    },
    {
      id: "relative-lowering",
      expression: "(p^0 - p) / p^0 = x_solute",
      latex: "\\dfrac{p^0-p}{p^0} = x_{solute}",
      meaning: "Relative lowering of solvent vapour pressure caused by a non-volatile solute.",
      variables: [
        { symbol: "p^0", meaning: "vapour pressure of the pure solvent", unit: "pressure unit" },
        { symbol: "p", meaning: "vapour pressure of the solution", unit: "pressure unit" },
        { symbol: "x_solute", meaning: "mole fraction of the non-volatile solute", unit: "dimensionless" },
      ],
      units: "Dimensionless",
      useWhen: "The solution is ideal, the solute is non-volatile, and dilute approximation is used in standard molar-mass work.",
      commonTrap: "Applying this relation when the solute is volatile, without a full component treatment.",
      accessibleText: "Relative lowering of vapour pressure equals the mole fraction of the non-volatile solute.",
    },
    {
      id: "henry-law",
      expression: "p = K_H × x",
      latex: "p = K_H\\,x",
      meaning: "Henry relation for a gas dissolved in a liquid, in the NCERT convention.",
      variables: [
        { symbol: "K_H", meaning: "Henry constant", unit: "pressure unit" },
        { symbol: "x", meaning: "mole fraction of dissolved gas", unit: "dimensionless" },
      ],
      useWhen: "A dilute gas is dissolved in liquid at fixed temperature, with the constant's convention stated.",
      commonTrap: "Assuming every textbook uses the same Henry-constant convention.",
      accessibleText: "Pressure equals the Henry constant times the mole fraction of dissolved gas.",
    },
    {
      id: "boiling-elevation",
      expression: "ΔT_b = i × K_b × m",
      latex: "\\Delta T_b = i K_b m",
      meaning: "Boiling-point elevation for a dilute solution.",
      variables: [
        { symbol: "i", meaning: "van't Hoff factor", unit: "dimensionless" },
        { symbol: "K_b", meaning: "ebullioscopic constant", unit: "K kg mol^-1 (common)" },
        { symbol: "m", meaning: "molality", unit: "mol kg^-1" },
      ],
      units: "K",
      useWhen: "The solution is dilute and molality is used consistently.",
      commonTrap: "Using molarity or Celsius as an absolute temperature input.",
      accessibleText: "Boiling-point elevation equals van't Hoff factor times the ebullioscopic constant times molality.",
    },
    {
      id: "freezing-depression",
      expression: "ΔT_f = i × K_f × m",
      latex: "\\Delta T_f = i K_f m",
      meaning: "Magnitude of freezing-point depression for a dilute solution.",
      variables: [
        { symbol: "K_f", meaning: "cryoscopic constant", unit: "K kg mol^-1 (common)" },
        { symbol: "m", meaning: "molality", unit: "mol kg^-1" },
      ],
      units: "K",
      useWhen: "The solution is dilute and molality is used consistently.",
      commonTrap: "Losing the fact that the freezing point decreases, not increases.",
      accessibleText: "Freezing-point depression equals van't Hoff factor times the cryoscopic constant times molality.",
    },
    {
      id: "osmotic-pressure",
      expression: "π = i × C × R × T",
      latex: "\\pi = iCRT",
      meaning: "Osmotic pressure of a dilute ideal solution.",
      variables: [
        { symbol: "C", meaning: "molar concentration", unit: "mol m^-3 or matched alternative" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
      ],
      units: "Pa with SI R and C in mol m^-3, or matched alternative units",
      useWhen: "The solution is dilute and ideal, with absolute temperature used.",
      commonTrap: "Mixing litre-atmosphere and SI units.",
      accessibleText: "Osmotic pressure equals van't Hoff factor times molar concentration times the gas constant times absolute temperature.",
    },
    {
      id: "vant-hoff-factor",
      expression: "i = observed colligative effect / effect for no association or dissociation",
      latex: "i = \\dfrac{\\text{observed colligative effect}}{\\text{effect for no association or dissociation}}",
      meaning: "Effective particle-count factor comparing observed behaviour to the undisturbed formula-unit model.",
      variables: [{ symbol: "i", meaning: "van't Hoff factor", unit: "dimensionless" }],
      units: "Dimensionless",
      useWhen: "Association, dissociation, or non-ideal behaviour must be captured; the model is not universal.",
      commonTrap: "Setting i equal to the stoichiometric ion count without the complete-dissociation assumption.",
      accessibleText: "Van't Hoff factor equals the observed colligative effect divided by the effect expected with no association or dissociation.",
    },
  ],

  workedExamples: [
    {
      id: "glucose-vs-calcium-chloride",
      prompt:
        "Compare the freezing-point depression of aqueous glucose and aqueous calcium chloride at equal molality, assuming both solutions are dilute and ideal and calcium chloride dissociates completely for the model.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Glucose remains molecular, so its ideal particle factor is i = 1." }],
        },
        {
          type: "paragraph",
          children: [{ text: "One formula unit of CaCl2 produces one Ca2+ and two Cl- ions, giving the model value i = 3." }],
        },
        {
          type: "paragraph",
          children: [{ text: "At the same molality and with the same solvent, ΔT_f = iK_fm predicts a freezing-point depression three times as large for the calcium chloride model." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Real solutions may deviate from complete independent-particle behaviour, so the observed i need not equal exactly 3. The condition is what makes the numerical comparison valid." }],
        },
      ],
      answer: "The model predicts ΔT_f for calcium chloride is three times that of glucose at equal molality, subject to complete dissociation and ideal dilute behaviour.",
    },
  ],

  mistakes: [
    {
      id: "molarity-vs-molality",
      mistake: "Confusing molarity with molality.",
      why: [{ type: "paragraph", children: [{ text: "Molarity uses solution volume and is temperature-sensitive; molality uses solvent mass and is ordinarily temperature-independent." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the denominator (solution volume or solvent mass) required by the question before substituting." }] }],
      errorType: "recall-gap",
    },
    {
      id: "wrong-denominator",
      mistake: "Using solvent volume in molarity or solution mass in molality.",
      why: [{ type: "paragraph", children: [{ text: "Each concentration measure is defined against a specific denominator; swapping it changes the numerical result." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Re-derive the definition from its variable rather than recalling it from memory." }] }],
      errorType: "execution-error",
    },
    {
      id: "raoult-on-nonideal",
      mistake: "Applying Raoult law to a non-ideal system without noting deviation.",
      why: [{ type: "paragraph", children: [{ text: "Raoult-law equality only holds for the ideal reference; deviations require a different vapour-pressure model." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check for stated or implied ideality before using p_i = x_i p_i^0 as an equality." }] }],
      errorType: "decision-error",
    },
    {
      id: "wrong-mole-fraction",
      mistake: "Using the wrong component mole fraction in a vapour-pressure expression.",
      why: [{ type: "paragraph", children: [{ text: "Solvent and solute mole fractions play different roles in Raoult-law and relative-lowering expressions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm which component's mole fraction the relation actually requires before substituting." }] }],
      errorType: "execution-error",
    },
    {
      id: "henry-convention",
      mistake: "Forgetting that Henry constants have different published conventions.",
      why: [{ type: "paragraph", children: [{ text: "Not every textbook or paper uses the same definition of the Henry constant." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the convention being used before comparing or substituting a Henry constant value." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "vant-hoff-assumption",
      mistake: "Treating van't Hoff factor as automatically equal to ion count.",
      why: [{ type: "paragraph", children: [{ text: "Incomplete dissociation, association, and non-ideal interactions can change the effective number of independently behaving particles." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use i = observed effect / expected effect and only assume complete dissociation when the model states it explicitly." }] }],
      errorType: "decision-error",
    },
    {
      id: "unit-mixing-osmotic",
      mistake: "Mixing pressure-volume unit systems in osmotic pressure.",
      why: [{ type: "paragraph", children: [{ text: "π = iCRT requires R, C, and pressure units to be mutually consistent." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert all quantities to one consistent unit system, SI or litre-atmosphere, before substituting." }] }],
      errorType: "execution-error",
    },
    {
      id: "celsius-in-osmotic",
      mistake: "Using Celsius instead of Kelvin in π = iCRT.",
      why: [{ type: "paragraph", children: [{ text: "The relation requires absolute temperature; Celsius introduces a systematic error." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert temperature to Kelvin before substituting into any colligative relation." }] }],
      errorType: "execution-error",
    },
    {
      id: "nonvolatile-condition-ignored",
      mistake: "Ignoring the non-volatile-solute condition in relative vapour-pressure lowering.",
      why: [{ type: "paragraph", children: [{ text: "The relative-lowering relation assumes the solute itself does not contribute vapour pressure." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the solute is non-volatile before using (p^0 - p)/p^0 = x_solute." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Ionic Equilibrium",
      url: "/jee/chemistry/ionic-equilibrium",
      relation: "forward",
      description: "Extends equilibrium reasoning to acid-base and solubility equilibria after solution composition is fixed.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "related",
      description: "Owns chemical and ionic equilibrium and Main's physical-equilibrium placement of Henry law.",
    },
    {
      label: "Gaseous State",
      url: "/jee/chemistry/gaseous-state",
      relation: "related",
      description: "Related gas-behaviour context for Henry law and dissolved-gas problems.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Amount-mass conversions used throughout every composition measure in this chapter.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "prerequisite",
      description: "Kelvin-scale and equilibrium-adjacent reasoning used in vapour-pressure models.",
    },
    {
      label: "Electrochemistry",
      url: "/jee/chemistry/electrochemistry",
      relation: "forward",
      description: "Uses solution concentration language for cell and conductance problems.",
    },
    {
      label: "Chemical Kinetics",
      url: "/jee/chemistry/chemical-kinetics",
      relation: "forward",
      description: "Uses solution concentration language for rate expressions.",
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
      question: "What is the difference between molarity and molality?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Molarity is amount of solute per volume of solution. Molality is amount of solute per mass of solvent." },
          ],
        },
      ],
    },
    {
      question: "When does Raoult law apply as an equality?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "To an ideal-solution model for each volatile component at the stated temperature." },
          ],
        },
      ],
    },
    {
      question: "Why can van't Hoff factor differ from the stoichiometric ion count?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Association, incomplete dissociation, and non-ideal interactions can change the effective number of independently behaving particles." },
          ],
        },
      ],
    },
    {
      question: "Is Henry law tested in JEE Main or JEE Advanced Solutions?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Henry law appears in the Main syllabus under the Equilibrium unit, and in the Advanced syllabus under the Solutions section. This page teaches the relation while noting that placement difference." },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for Solutions?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Weightage, trend percentages and question-count forecasts are deliberately not published on this page." },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
    "ncert-chem-solutions",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, including Henry law's differing unit placement between the two exams. Vapour-pressure, colligative and particle-count relations follow NCERT Solutions treatment. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Physical Chemistry educator experienced in solution thermodynamics and numerical method selection.",
    "Academic reviewer: postgraduate qualification in Chemistry, preferably Physical Chemistry or Chemical Thermodynamics, with documented solution-chemistry expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies equations, units, syllabus-boundary claims and worked reasoning separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Solutions for JEE Chemistry: Composition, Model and Colligative Properties",
    description:
      "Official JEE Main and Advanced 2026 scope for Solutions, model-selection method for vapour pressure and colligative properties, condition-aware equation cards, and an error diagnosis framework. No invented weightage.",
    ogTitle: "Solutions for JEE: choose the model before the formula",
    ogDescription:
      "Official syllabus mapping, prerequisites, concept architecture, equation conditions and error diagnosis for JEE Chemistry Solutions.",
  },
};

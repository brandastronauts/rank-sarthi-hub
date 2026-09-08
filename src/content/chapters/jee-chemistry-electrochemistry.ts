import type { ChapterContent } from "@/content/types";

/**
 * Electrochemistry — T06 production content.
 *
 * Evidence discipline: no weightage, trend or invented PYQ records. No named
 * contributor until verified. contentStatus stays "draft" until academic
 * review is recorded. Source content is restricted to the assigned package
 * section (Electrochemistry) and the shared source register.
 */
export const jeeChemistryElectrochemistry: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Electrochemistry",
  slug: "electrochemistry",
  url: "/jee/chemistry/electrochemistry",
  canonicalIntent:
    "Connect a balanced redox change with cell notation, electrode potentials, nonstandard emf, Gibbs energy, ionic conductance, electrolysis and practical cells, choosing the correct relation and condition set before calculating.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Relations carry their conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Electrochemistry links electron-transfer reactions with electrical potential and charge flow. First balance the redox reaction, identify oxidation at the anode and reduction at the cathode, then use reduction potentials, reaction quotient, temperature and transport conditions consistently.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct solution never starts from a memorized sign convention. It starts from the balanced half-reactions, fixes anode and cathode by oxidation and reduction, and only then applies the Nernst equation, the Gibbs-energy link, or a conductivity relation.",
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
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "prerequisite",
      description: "Assign oxidation numbers and balance half-reactions before building a cell.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Construct the reaction quotient Q used inside the Nernst equation.",
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
      description: "Chemistry-level official scope across all units.",
    },
  ],

  syllabusMapping: {
    unit: "Electrochemistry",
    topics: [
      "Oxidation-reduction concepts, oxidation numbers and balancing",
      "Metallic and electrolytic conduction",
      "Conductance, molar conductivity and concentration variation",
      "Kohlrausch law",
      "Electrolytic and galvanic cells, electrodes and potentials",
      "Half-cell and cell reactions, emf measurement",
      "Nernst equation",
      "Gibbs-energy relation to cell potential",
      "Dry cell, lead accumulator and fuel cells",
      "Electrochemical series and Faraday laws",
      "Corrosion",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "reaction-before-cell",
      title: "1. Balance the redox reaction before drawing the cell",
      keyIdea: "Electrode assignment and cell potential are meaningless without a balanced electron transfer.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Write oxidation and reduction half-reactions and balance the number of electrons transferred before mapping anode, cathode, electron path, ionic path and salt bridge or separator role. Redox Reactions owns oxidation-number balancing itself; this chapter owns its electrical measurement and conversion context.",
            },
          ],
        },
      ],
    },
    {
      id: "electrode-potentials",
      title: "2. Use reduction potentials consistently",
      keyIdea: "Tabulated values are reduction potentials; the cell potential is cathode minus anode, both written as reductions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use tabulated quantities as reduction potentials and calculate the cell potential for the written reaction as the cathode reduction potential minus the anode reduction potential, under matching conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "nernst-composition",
      title: "3. Use the reaction quotient for nonstandard composition",
      keyIdea: "Solids and pure liquids do not become variable activity terms in Q.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use the reaction quotient in the Nernst equation to move from standard to nonstandard cell potential. Build Q only after the net reaction is balanced and the electron number n is fixed.",
            },
          ],
        },
      ],
    },
    {
      id: "gibbs-link",
      title: "4. Relate electrical work to reaction Gibbs energy",
      keyIdea: "A positive cell potential corresponds to a negative reaction Gibbs-energy change.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electrical work performed by a reversible cell links to the reaction Gibbs-energy change through the electron number and Faraday constant. Thermodynamics owns the general Gibbs criteria; Electrochemistry owns its electrical measurement.",
            },
          ],
        },
      ],
    },
    {
      id: "transport-properties",
      title: "5. Separate electronic conduction from ionic conduction",
      keyIdea: "Conductance depends on cell geometry; conductivity and molar conductivity remove that geometry.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Metallic conduction is electronic; electrolytic conduction is ionic. Track cell geometry (length and area) and concentration units separately before comparing conductance, conductivity and molar conductivity, and before applying Kohlrausch law at infinite dilution.",
            },
          ],
        },
      ],
    },
    {
      id: "electrolysis-devices",
      title: "6. Treat electrolysis, batteries and corrosion as applied contexts",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For nonspontaneous operation, external electrical energy drives chemical change (electrolysis) and quantitative product amounts follow Faraday's laws. Battery and corrosion claims require the exact chemistry and operating context; dry cell, lead accumulator, fuel cells and corrosion are named applications in the official scope, not free-standing topics to generalize from.",
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
          "How a balanced redox reaction is converted into cell notation, electrode potential, nonstandard emf, Gibbs energy, ionic conductance, electrolysis and practical cells.",
        ],
        [
          "What is the central method choice?",
          "Identify oxidation at the anode and reduction at the cathode from the balanced reaction, use reduction-potential subtraction or the Nernst equation for potential, and separate conductance from conductivity for transport questions.",
        ],
        [
          "Where do most mistakes begin?",
          "Memorizing anode as negative without distinguishing galvanic and electrolytic operation, subtracting potentials inconsistently, and using the 298 K Nernst constant at another temperature.",
        ],
        [
          "What should come before Electrochemistry?",
          "Redox balancing and the reaction quotient Q from Equilibrium.",
        ],
        [
          "What comes after it?",
          "d- and f-Block Elements and Chemical Kinetics extend redox and rate reasoning into further contexts.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Electrochemistry",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Redox and conduction basics",
          "Oxidation-reduction concepts, oxidation numbers and balancing; metallic and electrolytic conduction are explicitly listed.",
          "Electrochemical cells and reactions are explicitly listed; balancing itself is owned by Redox Reactions.",
          "Confirm the balanced reaction and electron count before any cell or potential calculation.",
        ],
        [
          "Cells, potentials and Nernst equation",
          "Electrolytic and galvanic cells, electrodes and potentials, half-cell and cell reactions, emf measurement, Nernst equation and Gibbs-energy relation are explicitly listed.",
          "Standard electrode potentials, electrochemical work, Nernst equation and electrochemical series are explicitly listed.",
          "Write reduction potentials consistently and use the Gibbs-energy link with the correct electron number.",
        ],
        [
          "Conductance and Kohlrausch law",
          "Conductance, molar conductivity, concentration variation and Kohlrausch law are explicitly listed.",
          "Specific, equivalent and molar conductivity and Kohlrausch law are explicitly listed, alongside Faraday laws.",
          "Keep concentration units consistent when moving between conductivity and molar conductivity.",
        ],
        [
          "Devices and corrosion",
          "Dry cell, lead accumulator and fuel cells are explicitly listed.",
          "Primary and secondary batteries, fuel cells and corrosion are explicitly listed.",
          "Treat every device or corrosion claim as needing exact chemistry and operating context before publication.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Electrochemistry",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Redox balancing",
          "Assign oxidation numbers and balance a half-reaction by electron transfer.",
          "Revise Redox Reactions before mapping any electrode.",
        ],
        [
          "Reaction quotient Q",
          "Build Q for a balanced reaction from stated concentrations or activities.",
          "Revise Equilibrium's treatment of Q and K.",
        ],
        [
          "Gibbs energy and spontaneity",
          "Read the sign of ΔG as an indicator of reaction direction.",
          "Revise Chemical Thermodynamics.",
        ],
        [
          "Logarithms and unit handling",
          "Use logarithms in the Nernst equation and convert concentration units consistently.",
          "Practise base-10 logarithm manipulation and SI unit conversion.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: identify the requested quantity before calculating",
      intro: "Match the question signal to the correct first model before any algebra.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Cell emf from two half-cells", "Reduction-potential subtraction", "Cathode minus anode, using reduction potentials"],
        ["Nonstandard composition", "Nernst equation", "Balanced reaction, electron number, Q and temperature"],
        ["Spontaneity or equilibrium", "ΔG = -nFE and E = 0 at equilibrium", "Reaction orientation matches the written cell"],
        ["Conductivity cell", "Resistance plus cell constant", "Length, area, conductance and concentration units"],
        ["Dilution behaviour", "Molar-conductivity reasoning", "Strong or weak electrolyte and limiting value"],
        ["Deposited mass", "Faraday law", "Electron stoichiometry and current-time charge"],
      ],
    },
  ],

  formulas: [
    {
      id: "cell-potential",
      expression: "E_cell = E_cathode - E_anode",
      latex: "E_{cell}=E_{cathode}-E_{anode}",
      meaning: "Cell potential from reduction potentials of the cathode and anode.",
      variables: [
        { symbol: "E_cathode", meaning: "reduction potential of the cathode half-reaction", unit: "V" },
        { symbol: "E_anode", meaning: "reduction potential of the anode half-reaction", unit: "V" },
      ],
      useWhen: "Both values are written as reductions under matching conditions.",
      commonTrap: "Reversing one value's sign and subtracting again, double-correcting the orientation.",
      accessibleText: "Cell potential equals the reduction potential at the cathode minus the reduction potential at the anode.",
    },
    {
      id: "gibbs-cell",
      expression: "ΔG = -nFE",
      latex: "\\Delta G=-nFE",
      meaning: "Reaction Gibbs-energy change for a cell reaction transferring n electrons.",
      variables: [
        { symbol: "n", meaning: "number of electrons transferred in the balanced reaction", unit: "mol" },
        { symbol: "F", meaning: "Faraday constant", unit: "C mol^-1" },
      ],
      useWhen: "The reversible cell relation applies to the written, balanced reaction.",
      commonTrap: "Using stoichiometric coefficients that do not match the n actually used in the electron balance.",
      accessibleText: "Reaction Gibbs-energy change equals negative n times Faraday's constant times cell potential.",
    },
    {
      id: "nernst-natural-log",
      expression: "E = E° - (RT / nF) ln Q",
      latex: "E=E^\\circ-\\dfrac{RT}{nF}\\ln Q",
      meaning: "Nernst equation relating cell potential to standard potential and reaction quotient.",
      variables: [
        { symbol: "R", meaning: "gas constant", unit: "J mol^-1 K^-1" },
        { symbol: "T", meaning: "temperature", unit: "K" },
        { symbol: "Q", meaning: "reaction quotient of the balanced cell reaction" },
      ],
      useWhen: "Activities are defined, the reaction is balanced, and temperature is stated.",
      commonTrap: "Building Q for the reverse reaction instead of the reaction as written for the cell.",
      accessibleText: "Cell potential equals standard potential minus RT over nF times the natural log of the reaction quotient.",
    },
    {
      id: "nernst-log10",
      expression: "E = E° - (0.05916 / n) log Q",
      latex: "E=E^\\circ-\\dfrac{0.05916}{n}\\log Q",
      meaning: "Base-10 numerical form of the Nernst equation at approximately 298 K.",
      variables: [{ symbol: "n", meaning: "number of electrons transferred", unit: "mol" }],
      useWhen: "Temperature is approximately 298 K.",
      commonTrap: "Using the 0.05916 constant at a temperature that is not approximately 298 K.",
      accessibleText: "This is the 298 kelvin numerical form of the Nernst equation only.",
    },
    {
      id: "equilibrium-constant-link",
      expression: "ln K = nFE° / (RT)",
      latex: "\\ln K=nFE^\\circ/(RT)",
      meaning: "Relation between the standard cell potential and the equilibrium constant of the cell reaction.",
      variables: [{ symbol: "K", meaning: "equilibrium constant of the balanced cell reaction" }],
      useWhen: "Same standard states and reaction orientation are used throughout.",
      commonTrap: "Substituting a nonstandard E in place of E° in this relation.",
      accessibleText: "The natural log of the equilibrium constant equals n times Faraday's constant times standard cell potential, divided by RT.",
    },
    {
      id: "conductance-conductivity",
      expression: "G = 1/R; κ = Gℓ/A",
      latex: "G=1/R;\\ \\kappa=G\\ell/A",
      meaning: "Conductance from resistance, then conductivity from conductance and cell geometry.",
      variables: [
        { symbol: "ℓ", meaning: "distance between electrodes", unit: "m" },
        { symbol: "A", meaning: "electrode area", unit: "m^2" },
      ],
      units: "G in siemens; κ in S m^-1",
      useWhen: "Cell geometry (length and area) is uniform and known.",
      commonTrap: "Confusing conductance (geometry-dependent) with conductivity (a material property).",
      accessibleText: "Conductance equals one over resistance; conductivity equals conductance times length over area, removing geometry.",
    },
    {
      id: "molar-conductivity",
      expression: "Λm = κ / c",
      latex: "\\Lambda_m=\\kappa/c",
      meaning: "Molar conductivity normalizes conductivity per amount concentration.",
      variables: [{ symbol: "c", meaning: "molar concentration", unit: "mol m^-3 for strict SI" }],
      useWhen: "Concentration is expressed in mol m^-3 for strict SI consistency.",
      commonTrap: "Using concentration in mol L^-1 directly without converting to mol m^-3.",
      accessibleText: "Molar conductivity equals conductivity divided by molar concentration.",
    },
    {
      id: "kohlrausch-law",
      expression: "Λm° = Σ νi λi°",
      latex: "\\Lambda_m^\\circ=\\sum_i\\nu_i\\lambda_i^\\circ",
      meaning: "Kohlrausch law: limiting molar conductivity is the sum of independent ionic contributions.",
      variables: [{ symbol: "λi°", meaning: "limiting ionic molar conductivity of ion i" }],
      useWhen: "Independent ionic migration applies at limiting dilution.",
      commonTrap: "Applying limiting values at concentrated, not infinitely dilute, conditions.",
      accessibleText: "Limiting molar conductivity equals the sum of each ion's stoichiometric count times its limiting ionic molar conductivity.",
    },
    {
      id: "faraday-mass",
      expression: "m = MIt / (nF)",
      latex: "m=MIt/(nF)",
      meaning: "Mass deposited or liberated during quantitative electrolysis.",
      variables: [
        { symbol: "M", meaning: "molar mass of the species deposited or liberated", unit: "kg mol^-1" },
        { symbol: "I", meaning: "current", unit: "A" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "Quantitative electrolysis is assumed to run at 100 percent current efficiency.",
      commonTrap: "Confusing the number of electrons transferred with the ionic charge sign.",
      accessibleText: "Mass deposited equals molar mass times current times time, divided by n times Faraday's constant.",
    },
  ],

  workedExamples: [
    {
      id: "galvanic-cell-reading",
      prompt:
        "For a spontaneous cell written as Zn | Zn2+ || Cu2+ | Cu under stated conditions, identify the half-reactions and set up the potential expression.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "The left electrode is the anode in the conventional galvanic-cell notation, so zinc is oxidized: Zn → Zn2+ + 2e-." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Copper(II) is reduced at the cathode: Cu2+ + 2e- → Cu, and electrons travel through the external circuit from zinc to copper." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Using standard reduction potentials, E°cell = E°(Cu2+/Cu) − E°(Zn2+/Zn)." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Under nonstandard conditions, form Q = a(Zn2+) / a(Cu2+) for the balanced net reaction and use the Nernst equation." },
          ],
        },
      ],
      answer: "Anode is defined by oxidation and cathode by reduction; the safer anchor is the chemistry, not a memorized sign.",
    },
  ],

  mistakes: [
    {
      id: "anode-sign-memorized",
      mistake: "Memorizing anode as negative without distinguishing galvanic and electrolytic cells.",
      why: [{ type: "paragraph", children: [{ text: "Electrical signs at the anode and cathode differ between galvanic and electrolytic operation; only oxidation-at-anode and reduction-at-cathode are constant." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify oxidation and reduction from the reaction first, then assign sign based on the mode of operation." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "potential-subtraction-error",
      mistake: "Subtracting oxidation and reduction potentials inconsistently when finding cell potential.",
      why: [{ type: "paragraph", children: [{ text: "Mixing reduction and oxidation forms of the same value produces a doubled or cancelled sign error." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep both tabulated values as reductions and subtract cathode minus anode." }] }],
      errorType: "execution-error",
    },
    {
      id: "q-before-balancing",
      mistake: "Writing the reaction quotient Q before balancing electrons and the net reaction.",
      why: [{ type: "paragraph", children: [{ text: "An unbalanced reaction gives an incorrect exponent structure inside Q." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Balance the net cell reaction and fix the electron number n before constructing Q." }] }],
      errorType: "decision-error",
    },
    {
      id: "nernst-constant-wrong-temperature",
      mistake: "Using the 298 K Nernst constant (0.05916) at another stated temperature.",
      why: [{ type: "paragraph", children: [{ text: "The base-10 numerical constant is only valid at approximately 298 K; the underlying natural-log form uses RT/nF directly." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the stated temperature and switch to the RT/nF ln Q form when it is not near 298 K." }] }],
      errorType: "execution-error",
    },
    {
      id: "conductance-conductivity-confusion",
      mistake: "Confusing conductance, conductivity and molar conductivity.",
      why: [{ type: "paragraph", children: [{ text: "Conductance depends on cell geometry; conductivity removes geometry; molar conductivity further normalizes by concentration." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State which of the three quantities is asked for before substituting any value." }] }],
      errorType: "recall-gap",
    },
    {
      id: "concentration-unit-mismatch",
      mistake: "Using mol L^-1 directly in an SI molar-conductivity equation.",
      why: [{ type: "paragraph", children: [{ text: "Strict SI molar conductivity requires concentration in mol m^-3, not mol L^-1." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert concentration units before dividing conductivity by concentration." }] }],
      errorType: "execution-error",
    },
    {
      id: "positive-emf-as-rate-proof",
      mistake: "Treating a positive standard cell potential as proof of a rapid reaction.",
      why: [{ type: "paragraph", children: [{ text: "Standard cell potential indicates thermodynamic tendency, not reaction rate." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep thermodynamic favorability and kinetic rate as separate questions." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "prerequisite",
      description: "Owns oxidation-number balancing used to write the half-reactions for any cell.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Owns Q and K, used inside the Nernst equation.",
    },
    {
      label: "Chemical Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "related",
      description: "Owns the general Gibbs-energy criteria that this chapter converts into electrical measurement.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "related",
      description: "Shares concentration and colligative reasoning used alongside conductivity.",
    },
    {
      label: "d- and f-Block Elements",
      url: "/jee/chemistry/d-and-f-block-elements",
      relation: "forward",
      description: "Extends redox behaviour into transition-metal oxidation states.",
    },
    {
      label: "Chemical Kinetics",
      url: "/jee/chemistry/chemical-kinetics",
      relation: "forward",
      description: "Extends rate reasoning that is distinct from the thermodynamic tendency measured here.",
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
      label: "JEE syllabus: Chemistry",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Chemistry-level official scope.",
    },
  ],

  faqs: [
    {
      question: "Where do oxidation and reduction occur in a cell?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Oxidation occurs at the anode and reduction at the cathode in both galvanic and electrolytic cells; only the electrical sign convention differs between the two modes of operation." },
          ],
        },
      ],
    },
    {
      question: "When can the 0.05916 Nernst factor be used?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Only in the base-10 form of the Nernst equation at approximately 298 K. At other temperatures, use the natural-log form with RT/nF directly." },
          ],
        },
      ],
    },
    {
      question: "What is the difference between conductance and conductivity?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Conductance depends on the sample's geometry (length and area); conductivity removes that geometry and describes the material itself under stated conditions." },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for Electrochemistry?",
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
    "ncert-chem-electrochemistry",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Evidence boundary: syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents; the reasoning and relation set follows NCERT Electrochemistry. Redox balancing itself belongs to Redox Reactions, Q and K belong to Equilibrium, and general Gibbs criteria belong to Chemical Thermodynamics; this page owns only their electrical measurement and conversion context. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Physical Chemistry educator experienced in electrochemical cells and ionic conductance.",
    "Academic reviewer: postgraduate qualification in Chemistry, preferably Physical or Analytical Chemistry, Electrochemistry, or Chemical Engineering, with documented expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies half-reactions, signs, Nernst conditions, conductivity units and device claims separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Electrochemistry for JEE: Cells, Nernst Equation, Conductivity",
    description:
      "Official JEE Main and Advanced 2026 scope for Electrochemistry, reaction-to-cell method selection, condition-aware relation cards for Nernst, Gibbs energy and conductivity, and an error diagnosis framework. No invented weightage.",
    ogTitle: "Electrochemistry for JEE: balance electrons before voltage",
    ogDescription:
      "A reaction-to-voltage guide to cells, Nernst conditions, conductance and electrolysis for JEE preparation.",
  },
};

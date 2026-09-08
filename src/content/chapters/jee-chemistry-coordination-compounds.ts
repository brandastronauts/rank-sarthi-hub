import type { ChapterContent } from "@/content/types";

/**
 * Coordination Compounds — T06 production content.
 *
 * Evidence discipline: no weightage, trend or invented PYQ records. No named
 * contributor until verified. contentStatus stays "draft" until academic
 * review is recorded. Source content is restricted to the assigned package
 * section (Coordination Compounds) and the shared source register.
 */
export const jeeChemistryCoordinationCompounds: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Coordination Compounds",
  slug: "coordination-compounds",
  url: "/jee/chemistry/coordination-compounds",
  canonicalIntent:
    "Parse a coordination formula into metal state, ligand set, coordination number, name, geometry, isomerism, field splitting, spin, colour, magnetism and stability, in that order.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Parse the complex before naming or splitting",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A coordination compound is understood by first identifying the coordination entity, central metal, ligand charges and denticities, overall charge, oxidation state, coordination number and d-electron count. Only then should you name it, test isomerism, select a geometry model, or infer spin and magnetism.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Both examinations include Werner theory, nomenclature, bonding, geometry, colour, magnetism and applications. Main broadly names isomerism and basic crystal-field theory. Advanced explicitly limits its named isomerism to cis-trans and ionization types, names octahedral and tetrahedral CFT, specifies spin-only magnetic treatment for 3d-series compounds, and adds spectrochemical series, stability and metal carbonyls.",
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
      description: "Sigma donation, Lewis structures and hybridisation ideas underlie the valence-bond picture of complexes.",
    },
    {
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Electron configurations for ions and unpaired-electron counts are needed for spin and magnetism.",
    },
    {
      label: "Classification of Elements and Periodicity in Properties",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Periodic position and block classification orient where transition metals sit and why they form complexes.",
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
    unit: "Coordination Compounds",
    topics: [
      "Werner theory",
      "Ligands, coordination number, denticity and chelation",
      "IUPAC nomenclature of mononuclear compounds",
      "Isomerism (cis-trans and ionization named explicitly in Advanced)",
      "Valence-bond approach and geometries (linear, tetrahedral, square-planar, octahedral)",
      "Basic and octahedral or tetrahedral crystal-field theory",
      "Colour and magnetic properties, spin-only magnetism for 3d-series compounds",
      "Ligands and spectrochemical series",
      "Stability of complexes",
      "Applications in qualitative analysis, metal extraction and biological systems",
      "Metal carbonyls",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "parse-brackets",
      title: "1. Parse the brackets before anything else",
      keyIdea: "Species inside square brackets form the coordination entity; ions outside balance charge.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Identify what lies inside the square brackets as the coordination entity, and treat ions written outside the brackets as counterions that balance the overall charge of the salt.",
            },
          ],
        },
      ],
    },
    {
      id: "classify-ligands",
      title: "2. Classify each ligand by charge, donor atom and denticity",
      keyIdea: "Record ligand name, charge, donor atom and denticity before counting anything.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For every ligand, record its charge (neutral or anionic), the donor atom that bonds to the metal, and its denticity, since a multidentate ligand contributes more than one coordination site.",
            },
          ],
        },
      ],
    },
    {
      id: "oxidation-state-d-count",
      title: "3. Calculate oxidation state and d-electron count from charge balance",
      keyIdea: "Set metal oxidation state plus the sum of ligand charges equal to the overall complex charge.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use charge balance to find the metal oxidation state, then remove electrons from the neutral-atom configuration using the metal-ion configuration rule to obtain the d-electron count.",
            },
          ],
        },
      ],
    },
    {
      id: "systematic-naming",
      title: "4. Name systematically: ligands first, then metal and oxidation state",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Name ligands in alphabetical order before the metal, then give the metal name with its oxidation state in Roman numerals; an anionic complex uses the appropriate metal name form (the '-ate' ending).",
            },
          ],
        },
      ],
    },
    {
      id: "isomerism-after-geometry",
      title: "5. Test isomerism only after coordination number and geometry are fixed",
      keyIdea: "Do not count arrangements before fixing coordination number and shape.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current Advanced scope explicitly names cis-trans and ionization isomerism. Establish coordination number and geometry first, since isomer counts depend on both.",
            },
          ],
        },
      ],
    },
    {
      id: "bonding-model-choice",
      title: "6. Choose a bonding model deliberately: VBT or CFT",
      keyIdea: "VBT gives a hybridisation picture; CFT separates d-orbital energies and supports spin, colour and magnetism.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The valence-bond approach provides an exam-level hybridisation picture of geometry. Crystal-field theory separates d-orbital energies into sets (such as octahedral t2g and eg) and is the model that supports spin, colour and magnetic-property reasoning.",
            },
          ],
        },
      ],
    },
    {
      id: "stability-vs-inertness",
      title: "7. Separate thermodynamic stability from kinetic inertness",
      keyIdea: "A large formation constant states equilibrium tendency, not reaction speed.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Formation stability is a thermodynamic equilibrium statement about how far complex formation proceeds. Kinetic inertness is a separate statement about how fast a complex reacts or exchanges ligands; a large formation constant does not by itself establish kinetic behaviour.",
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
          "How a coordination formula is parsed into metal, ligands, charge, oxidation state and coordination number, and how that identity drives naming, isomerism, bonding model, spin, colour and stability.",
        ],
        [
          "What is the central method choice?",
          "Parse the coordination entity and ligand set first, calculate oxidation state and d-electron count by charge balance, and only then move to naming, isomerism, geometry, spin or stability.",
        ],
        [
          "Where do most mistakes begin?",
          "Counting ligand molecules instead of donor atoms for coordination number, assigning oxidation state before reading the complex charge, and equating thermodynamic stability with kinetic inertness.",
        ],
        [
          "What should come before Coordination Compounds?",
          "Chemical Bonding's sigma-donation and hybridisation ideas, and electron configuration from Atomic Structure.",
        ],
        [
          "What comes after it?",
          "Biomolecules and Chemistry in Everyday Life extend structure-to-property reasoning into further applied contexts.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Coordination Compounds",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Foundations and nomenclature",
          "Werner theory; ligands, coordination number, denticity, chelation; IUPAC nomenclature of mononuclear compounds are explicitly listed.",
          "Werner theory and nomenclature are explicitly listed.",
          "Build the parse-count-name sequence before attempting any named exception.",
        ],
        [
          "Isomerism and geometry",
          "Isomerism is listed broadly.",
          "Cis-trans and ionization isomerism are explicitly named; hybridisation and linear, tetrahedral, square-planar and octahedral geometries of mononuclear compounds are explicitly listed.",
          "Fix coordination number and geometry before counting isomers.",
        ],
        [
          "Bonding, colour and magnetism",
          "Valence-bond approach and basic crystal-field theory; colour and magnetic properties are explicitly listed.",
          "VBT and octahedral or tetrahedral CFT; spin-only magnetism and colour of 3d-series compounds; ligands and spectrochemical series are explicitly listed.",
          "Use CFT, not VBT alone, for spin and colour claims.",
        ],
        [
          "Stability and applications",
          "Importance in qualitative analysis, metal extraction and biological systems is explicitly listed.",
          "Stability, applications and metal carbonyls are explicitly listed.",
          "Keep formation stability and kinetic inertness as separate claims.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Coordination Compounds",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Oxidation states",
          "Assign an oxidation state from a compound formula.",
          "Revise oxidation-state rules before applying them to a complex ion.",
        ],
        [
          "Electron configuration for ions",
          "Write the configuration of a transition-metal ion after electron removal.",
          "Revise Atomic Structure's electron-removal rule for ions.",
        ],
        [
          "Ligand charge versus denticity",
          "Distinguish a ligand's charge from the number of donor atoms it uses.",
          "Revise common ligand tables before building a full complex ledger.",
        ],
        [
          "Sigma donation and d-orbitals",
          "Describe a coordinate bond and a basic d-orbital shape.",
          "Revise Chemical Bonding's coordinate-bond and orbital treatment.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: fix identity before predicting properties",
      intro: "Match the question signal to the correct first model before any calculation.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Name from formula", "Charge balance and ligand naming", "Neutral versus anionic complex"],
        ["Formula from name", "Build metal, ligands, charge, then counterions", "Ligand multiplicative prefixes"],
        ["Geometry or spin", "d-electron count plus field splitting", "Coordination number, geometry, ligand field, pairing"],
        ["Magnetic moment", "Unpaired-electron count", "Spin state already justified"],
        ["Isomer count", "Fixed geometry and ligand arrangement", "Isomer type lies in current exam scope"],
        ["Stability", "Formation equilibrium", "Do not confuse stability with kinetic rate"],
      ],
    },
  ],

  formulas: [
    {
      id: "charge-balance-oxidation-state",
      expression: "x + Σ qL = q_complex",
      latex: "x+\\sum q_L=q_{complex}",
      meaning: "Metal oxidation state x from the sum of ligand charges and the overall complex charge.",
      variables: [
        { symbol: "x", meaning: "metal oxidation state" },
        { symbol: "qL", meaning: "charge of each ligand" },
        { symbol: "q_complex", meaning: "overall charge of the coordination entity" },
      ],
      useWhen: "The complex charge and every ligand identity are known.",
      commonTrap: "Using the coordination number in place of a ligand's charge.",
      accessibleText: "Metal oxidation state plus the sum of ligand charges equals the complex charge.",
    },
    {
      id: "coordination-number-rule",
      expression: "coordination number = Σ donor atoms bound",
      meaning: "Coordination number counts donor atoms bound to the metal, not ligand molecules.",
      variables: [{ symbol: "donor atoms", meaning: "atoms directly bonded to the central metal" }],
      useWhen: "Denticity of each ligand has already been correctly identified.",
      commonTrap: "Counting ligand molecules instead of donor atoms, undercounting a multidentate ligand's contribution.",
      accessibleText: "Coordination number equals the total count of donor atoms bound to the metal.",
    },
    {
      id: "spin-only-moment",
      expression: "μ_so = √(n(n+2))",
      latex: "\\mu_{so}=\\sqrt{n(n+2)}",
      meaning: "Spin-only magnetic moment for n unpaired electrons.",
      variables: [{ symbol: "n", meaning: "number of unpaired electrons" }],
      units: "Bohr magnetons",
      useWhen: "The spin-only approximation applies, as used for the listed 3d complexes in the Advanced scope.",
      commonTrap: "Using the total d-electron count instead of only the unpaired-electron count.",
      accessibleText: "Spin-only magnetic moment equals the square root of n times n plus two, for n unpaired electrons.",
    },
    {
      id: "formation-constant",
      expression: "βn = [MLn] / ([M][L]^n)",
      latex: "\\beta_n=\\dfrac{[ML_n]}{[M][L]^n}",
      meaning: "Overall formation constant for a complex in a concentration approximation.",
      variables: [
        { symbol: "βn", meaning: "overall stepwise formation constant" },
        { symbol: "[M]", meaning: "free metal-ion concentration" },
        { symbol: "[L]", meaning: "free ligand concentration" },
      ],
      units: "Apparent units by convention; the thermodynamic form is dimensionless",
      useWhen: "A defined equilibrium and standard-state or concentration convention are stated.",
      commonTrap: "Treating a large formation constant as proof of kinetic inertness rather than equilibrium tendency.",
      accessibleText: "The formation constant equals the complex concentration divided by the product of free metal and free ligand concentrations raised to the ligand count.",
    },
  ],

  workedExamples: [
    {
      id: "decode-hexaamminecobalt",
      prompt: "Decode [Co(NH3)6]Cl3: find oxidation state, coordination number and name.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Three external chloride ions give total charge -3, so the bracketed entity is 3+." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "NH3 is a neutral monodentate ligand, so cobalt is in oxidation state +3." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Six donor atoms give coordination number 6, consistent with an octahedral arrangement in the standard treatment." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "The cation is named hexaamminecobalt(III), followed by chloride for the counterion." },
          ],
        },
      ],
      answer: "hexaamminecobalt(III) chloride. Magnetic or colour claims still require the d-electron count and an appropriate ligand-field analysis; they must not be guessed from the name alone.",
    },
  ],

  mistakes: [
    {
      id: "coordination-number-vs-ligand-count",
      mistake: "Counting ligands instead of donor atoms for coordination number.",
      why: [{ type: "paragraph", children: [{ text: "A multidentate ligand occupies more than one coordination site even though it is a single ligand molecule." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Count donor atoms bound to the metal, using denticity, not the number of ligand molecules." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "oxidation-state-before-charge",
      mistake: "Assigning metal oxidation state before reading the complex charge.",
      why: [{ type: "paragraph", children: [{ text: "The oxidation state is derived from charge balance, so the overall complex charge must be known first." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Determine the complex charge from counterions before solving for the metal oxidation state." }] }],
      errorType: "decision-error",
    },
    {
      id: "amine-vs-ammine",
      mistake: "Writing 'amine' instead of 'ammine' for the ammonia ligand name.",
      why: [{ type: "paragraph", children: [{ text: "IUPAC nomenclature uses 'ammine' specifically for coordinated ammonia, distinct from organic amine naming." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the standard coordination-chemistry ligand-name list, not organic nomenclature, when naming a complex." }] }],
      errorType: "recall-gap",
    },
    {
      id: "isomers-before-geometry",
      mistake: "Counting isomers before fixing geometry.",
      why: [{ type: "paragraph", children: [{ text: "Isomer counts depend on coordination number and geometry; an unfixed geometry gives an unreliable isomer count." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Establish coordination number and geometry first, then test for cis-trans or ionization isomerism." }] }],
      errorType: "decision-error",
    },
    {
      id: "octahedral-labels-on-tetrahedral",
      mistake: "Using octahedral t2g/eg labels for tetrahedral splitting.",
      why: [{ type: "paragraph", children: [{ text: "Tetrahedral splitting reverses the energy order (e below t2) and uses a different, smaller splitting magnitude." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the correct splitting diagram for the actual geometry before assigning electron configuration." }] }],
      errorType: "execution-error",
    },
    {
      id: "stability-vs-inertness-confusion",
      mistake: "Equating thermodynamic stability with kinetic inertness.",
      why: [{ type: "paragraph", children: [{ text: "A large formation constant states equilibrium tendency, not how fast the complex reacts or exchanges ligands." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep formation-constant claims and reaction-rate claims separate unless both are independently justified." }] }],
      errorType: "decision-error",
    },
    {
      id: "magnetic-claim-without-count",
      mistake: "Emitting a magnetic claim without justifying the unpaired-electron count.",
      why: [{ type: "paragraph", children: [{ text: "The spin-only moment formula requires the correct unpaired-electron count, which itself needs geometry and field-strength reasoning." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Derive the d-electron count and pairing pattern from geometry and ligand field before stating a magnetic moment." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Owns general VSEPR, hybridisation and molecular-orbital foundations used in the valence-bond picture.",
    },
    {
      label: "d- and f-Block Elements",
      url: "/jee/chemistry/d-and-f-block-elements",
      relation: "prerequisite",
      description: "Owns elemental trends across the transition series that underlie complex formation.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "related",
      description: "Shares oxidation-state assignment used to determine the metal's state in a complex.",
    },
    {
      label: "p-Block Elements",
      url: "/jee/chemistry/p-block-elements",
      relation: "related",
      description: "Shares structure and bonding reasoning across main-group and coordination chemistry.",
    },
    {
      label: "Biomolecules",
      url: "/jee/chemistry/biomolecules",
      relation: "forward",
      description: "Extends coordination-relevant structure-to-property reasoning into biological molecules.",
    },
    {
      label: "Chemistry in Everyday Life",
      url: "/jee/chemistry/chemistry-everyday-life",
      relation: "forward",
      description: "Extends application reasoning to everyday and industrial contexts.",
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
      question: "How is a metal oxidation state found in a complex?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Add the metal oxidation state and all ligand charges and set the sum equal to the complex charge, then solve for the metal oxidation state." },
          ],
        },
      ],
    },
    {
      question: "Is coordination number the number of ligand molecules?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Not always. It is the number of donor atoms bound to the metal, so a multidentate ligand contributes more than one coordination site." },
          ],
        },
      ],
    },
    {
      question: "Does a large formation constant mean a complex reacts slowly?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Formation stability is a thermodynamic, equilibrium-based statement. Reaction rate or kinetic inertness is a separate question." },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for Coordination Compounds?",
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
    "ncert-chem-coordination",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Evidence boundary: syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents; the reasoning, naming, geometry and field-splitting treatment follows NCERT Coordination Compounds. Chemical Bonding owns general VSEPR, hybridisation and molecular-orbital foundations; d- and f-Block owns elemental trends; this page owns only ligand-metal entities, naming, isomerism, ligand fields, spin and complex stability. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Inorganic Chemistry educator experienced in coordination-entity structure and ligand-field reasoning.",
    "Academic reviewer: postgraduate qualification in Chemistry, preferably Inorganic Chemistry, with documented coordination-chemistry expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies charge balance, naming, geometry and magnetic-moment claims separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Coordination Compounds for JEE: Naming, CFT, Magnetism",
    description:
      "Official JEE Main and Advanced 2026 scope for Coordination Compounds, a parse-first method for naming and predicting complexes, condition-aware relation cards for charge balance, spin and stability, and an error diagnosis framework. No invented weightage.",
    ogTitle: "Coordination Compounds for JEE: parse before you predict",
    ogDescription:
      "A parse-to-prediction guide to naming, geometry, field splitting, spin and stability for JEE preparation.",
  },
};

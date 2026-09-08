import type { ChapterContent } from "@/content/types";

/**
 * Organic Basics — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or expected-question claims are made.
 * - Official-paper archives are linked, not summarised into counts.
 * - Author/reviewer stay unassigned until academic review is recorded.
 * - contentStatus stays "draft".
 * - Scope check (verified against JEE Main 2026 and JEE Advanced 2026
 *   syllabus documents, 8 September 2026): Main names carbon tetravalency
 *   and shapes, functional-group classification, homologous series,
 *   structural and stereoisomerism, nomenclature, homolytic and heterolytic
 *   fission, reactive intermediates, inductive/electromeric/resonance/
 *   hyperconjugative effects, and substitution/addition/elimination/
 *   rearrangement. Advanced names hybridisation, sigma/pi bonds,
 *   aromaticity, structural and geometrical isomerism, stereochemistry up
 *   to two asymmetric centres with R/S and E/Z explicitly excluded,
 *   combustion-based formula determination, limited nomenclature,
 *   hydrogen-bonding effects, inductive/resonance/hyperconjugative effects,
 *   acidity, basicity, and intermediate formation/structure/stability.
 */
export const jeeChemistryOrganicBasics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Organic Basics",
  slug: "organic-basics",
  url: "/jee/chemistry/organic-basics",
  canonicalIntent:
    "Predict organic behaviour by connecting structure, electron displacement, bond cleavage, reactive intermediates and reaction type, before any compound-specific reaction is applied.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Structure-to-mechanism reasoning, not memorised products",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Organic Basics is the reasoning layer beneath every later reaction chapter. Start from the molecular structure, identify permanent and reagent-induced electron distribution, determine how a bond can break, identify the likely reactive species, and only then choose a reaction family or compare products.",
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
      description: "Covalent bonds, resonance, hybridisation and Lewis acid-base language are used before drawing electron movement.",
    },
    {
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Electronegativity and orbital ideas underlie electron-rich and electron-poor site identification.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Electronegativity trends and atom identity are needed to compare inductive effects and conjugate-base stability.",
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
    unit: "Organic Chemistry: Some Basic Principles and Techniques",
    topics: [
      "Carbon tetravalency and simple shapes; hybridisation and sigma/pi bonds",
      "Functional-group classification and homologous series",
      "Structural, geometrical and stereoisomerism (up to two asymmetric centres, R/S and E/Z excluded per JEE Advanced)",
      "Trivial and IUPAC nomenclature",
      "Homolytic and heterolytic fission",
      "Free radicals, carbocations, carbanions, electrophiles, nucleophiles",
      "Inductive, electromeric, resonance and hyperconjugative effects",
      "Substitution, addition, elimination and rearrangement",
      "Aromaticity, acidity, basicity and hydrogen-bonding effects (JEE Advanced)",
      "Combustion-based molecular formula determination (JEE Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "represent-structure",
      title: "1. Represent the structure completely",
      keyIdea: "Show connectivity, formal charges, lone pairs and relevant pi bonds before reasoning about reactivity.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A correct organic answer begins with a structure that shows connectivity, formal charges, lone pairs and the relevant pi bonds. Skipping this step is the most common source of downstream errors in electron-movement reasoning.",
            },
          ],
        },
      ],
    },
    {
      id: "locate-electron-sites",
      title: "2. Locate electron-rich and electron-poor sites",
      keyIdea: "Use electronegativity, charge, resonance and bond polarization to find where electrons are concentrated or deficient.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electronegativity differences, formal charge, resonance delocalization and bond polarization together decide which sites in a molecule are electron-rich (nucleophilic) and which are electron-poor (electrophilic).",
            },
          ],
        },
      ],
    },
    {
      id: "separate-effects",
      title: "3. Separate inductive, resonance, hyperconjugative and electromeric effects",
      keyIdea: "Each electronic effect has a distinct mechanism and a distinct condition for operating.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Inductive effects act through sigma bonds. Resonance requires continuous conjugation and compatible orbital overlap. Hyperconjugation requires an adjacent sigma bond and a suitable p or pi orbital. The electromeric effect, in the JEE Main treatment, is a temporary complete shift of pi electrons under an attacking reagent.",
            },
          ],
        },
      ],
    },
    {
      id: "choose-cleavage",
      title: "4. Choose the bond-cleavage mode",
      keyIdea: "Homolysis gives radicals; heterolysis gives ions because both bonding electrons go to one fragment.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Homolytic fission splits the bonding electron pair evenly, producing two radicals. Heterolytic fission sends both bonding electrons to one fragment, producing a cation and an anion.",
            },
          ],
        },
      ],
    },
    {
      id: "assess-intermediate",
      title: "5. Assess intermediate stability from the full structure",
      keyIdea: "A memorised alkyl stability order is not universal once resonance, aromaticity or strong electron withdrawal enters the comparison.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Stabilization of a carbocation, carbanion or radical depends on the full structure and the medium, not on a single memorised order. Resonance, aromaticity and inductive withdrawal can override a simple substitution-based ranking.",
            },
          ],
        },
      ],
    },
    {
      id: "choose-reaction-family",
      title: "6. Choose the reaction family",
      keyIdea: "Substitution exchanges a group, addition reduces unsaturation, elimination creates unsaturation, rearrangement changes the carbon framework.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Once the intermediate and electron movement are established, classify the transformation as substitution, addition, elimination or rearrangement before predicting a product.",
            },
          ],
        },
      ],
    },
    {
      id: "check-selectivity",
      title: "7. Check selectivity against stated conditions",
      keyIdea: "Reagent, solvent, temperature and substrate together decide which pathway and product actually form.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Compare allowed pathways and product stability only under the reagent, solvent, temperature and substrate conditions stated by the question or the relevant compound-specific reaction chapter.",
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
          "The reasoning layer beneath organic reaction chapters: structure, electron effects, bond cleavage, reactive intermediates and reaction-family classification.",
        ],
        [
          "What is the central method choice?",
          "Represent the structure, locate electron-rich and electron-poor sites, separate the operating electronic effects, choose the cleavage mode, assess intermediate stability, then classify the reaction family.",
        ],
        [
          "Where do most mistakes begin?",
          "Starting a curved arrow from a positive charge, treating resonance contributors as separate molecules, and applying a stability order before checking resonance or aromaticity.",
        ],
        [
          "What should come before Organic Basics?",
          "Chemical Bonding for covalent bonds, resonance and hybridisation, and Atomic Structure and Periodic Table for electronegativity trends.",
        ],
        [
          "What comes after it?",
          "Hydrocarbons and Haloalkanes and Haloarenes apply this reasoning to compound-specific preparations, mechanisms and products.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Organic Basics",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Electronic effects",
          "Inductive, electromeric, resonance and hyperconjugative effects are explicitly listed.",
          "Inductive, resonance and hyperconjugative effects are explicitly listed; the electromeric effect is not named separately.",
          "Learn the mechanism of each effect, not just its name.",
        ],
        [
          "Reactive intermediates",
          "Free radicals, carbocations, carbanions, electrophiles and nucleophiles are explicitly listed.",
          "Formation, structure and stability of carbocations, carbanions and radicals are explicitly listed.",
          "Judge stability from structure and medium, not from a fixed memorised order.",
        ],
        [
          "Reaction types",
          "Substitution, addition, elimination and rearrangement are explicitly listed.",
          "Not listed as a separate line item; treated through the intermediate and bonding sections.",
          "Keep reaction-family classification distinct from compound-specific mechanisms.",
        ],
        [
          "Stereochemistry and additional scope",
          "Structural and stereoisomerism named without the Advanced-level exclusions.",
          "Structural and geometrical isomerism named; stereochemical relationships limited to two asymmetric centres with R/S and E/Z descriptor systems explicitly excluded; aromaticity, acidity, basicity, hydrogen-bonding effects and combustion-based formula determination are explicitly added.",
          "Do not add R/S or E/Z assignment when working from the Advanced-scope treatment.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Organic Basics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Covalent bonding and resonance",
          "Draw a Lewis structure with formal charges and identify resonance contributors.",
          "Revise Chemical Bonding before continuing.",
        ],
        [
          "Electronegativity trends",
          "Rank atoms by electronegativity and predict bond polarity.",
          "Revise periodic trends in Periodic Table and Atomic Structure.",
        ],
        [
          "Hybridisation and orbital overlap",
          "Identify sigma and pi bonds and hybridisation state of a carbon atom.",
          "Revise valence-bond and hybridisation treatment in Chemical Bonding.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the reasoning tool before predicting an outcome",
      intro: "Match the question signal to the correct first move before any product prediction.",
      columns: ["Question signal", "Best first move", "Required check"],
      rows: [
        ["Acidity or basicity comparison", "Draw the conjugate species", "Compare charge stabilization, atom, resonance, induction, hybridisation and solvation"],
        ["Intermediate stability", "Draw every relevant resonance form", "Do not use substitution degree before resonance and aromaticity"],
        ["Nucleophile or electrophile", "Identify the donated or accepted electron pair", "Charge alone does not define all cases"],
        ["Bond cleavage", "Decide where the bonding pair goes", "Homolysis or heterolysis?"],
        ["Isomer count", "Fix molecular formula and connectivity first", "Structural, geometrical, or stereochemical relation?"],
        ["Product question", "Route to the owned reaction chapter", "Reagent and conditions must be visible"],
      ],
    },
    {
      id: "conditional-records",
      jump: true,
      slot: "formulas",
      heading: "Conditional reasoning records",
      columns: ["Record", "Meaning", "Operating condition", "Common trap", "Student translation"],
      rows: [
        [
          "Homolysis: A-B -> A(radical) + B(radical)",
          "One bonding electron goes to each fragment",
          "Radical pathway and suitable energy or initiator context",
          "Drawing full charges instead of radicals",
          "The pair splits evenly",
        ],
        [
          "Heterolysis: A-B -> A+ + B-, or the reverse charge assignment",
          "Both bonding electrons go to one fragment",
          "Ionic pathway; direction depends on structure and medium",
          "Assigning charges without tracking the electron pair",
          "One fragment keeps both electrons",
        ],
        [
          "Inductive effect",
          "Persistent sigma-bond polarization transmitted along a chain",
          "Polar bonds; effect generally decreases with distance",
          "Calling it resonance",
          "Electron density is pulled or pushed through sigma bonds",
        ],
        [
          "Resonance",
          "One species represented by contributing structures that differ only in electron placement",
          "Continuous conjugation and compatible orbitals",
          "Moving atoms or treating contributors as equilibrating molecules",
          "The real electron distribution is delocalized",
        ],
        [
          "Hyperconjugation",
          "Delocalization involving an adjacent sigma bond and a suitable p or pi system",
          "Required geometry and adjacent bond must exist",
          "Counting any nearby C-H bond",
          "A neighbouring sigma bond can share electron density with the unsaturated centre",
        ],
        [
          "Curved-arrow rule",
          "Arrow begins at an electron pair or bond and ends at the receiving atom or bond",
          "Polar mechanism representation",
          "Starting the arrow at a positive charge",
          "Arrows track electrons, not atoms",
        ],
      ],
    },
  ],

  workedExamples: [
    {
      id: "phenol-vs-ethanol",
      prompt: "Explain why phenol is more acidic than ethanol.",
      steps: [
        { type: "paragraph", children: [{ text: "Acidity compares the stability of the conjugate bases formed after loss of H+." }] },
        { type: "paragraph", children: [{ text: "Ethanol forms ethoxide, where the negative charge is largely localized on oxygen." }] },
        { type: "paragraph", children: [{ text: "Phenol forms phenoxide, where the oxygen lone pair and negative charge can be delocalized into the aromatic ring through resonance contributors." }] },
        { type: "paragraph", children: [{ text: "Greater stabilization of the conjugate base favours proton loss relative to ethanol. This does not mean every resonance-drawn acid is automatically stronger: the atom bearing charge, competing inductive effects, aromaticity, solvation and the actual conjugate-base structures must all be checked." }] },
      ],
      answer: "Phenoxide is more resonance-stabilized than ethoxide, so phenol is the stronger acid.",
    },
  ],

  mistakes: [
    {
      id: "arrow-from-positive-charge",
      mistake: "Starting a curved arrow from a positive charge instead of an electron source.",
      why: [{ type: "paragraph", children: [{ text: "Curved arrows track electron movement, not atom or charge movement; a positive centre has no electrons to donate." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the electron pair or bond that is moving before drawing the arrow." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "resonance-as-equilibrium",
      mistake: "Treating resonance contributors as separate molecules in equilibrium.",
      why: [{ type: "paragraph", children: [{ text: "Resonance structures are not interconverting species; they are partial representations of one delocalized electron distribution." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Describe the real species as a hybrid, not a mixture of contributors." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "stability-order-before-resonance",
      mistake: "Applying a memorised carbocation stability order before checking resonance or aromatic stabilization.",
      why: [{ type: "paragraph", children: [{ text: "A simple alkyl-substitution order does not account for resonance or aromatic delocalization, which can dominate stability." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Draw all resonance forms first, then compare stability." }] }],
      errorType: "decision-error",
    },
    {
      id: "charge-as-nucleophile-proxy",
      mistake: "Calling every negatively charged species a strong nucleophile without considering solvation and resonance.",
      why: [{ type: "paragraph", children: [{ text: "Nucleophilicity depends on availability of the electron pair, which solvation and resonance can suppress." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check solvation and delocalization before ranking nucleophilicity." }] }],
      errorType: "decision-error",
    },
    {
      id: "isomer-count-before-connectivity",
      mistake: "Counting stereoisomers before fixing connectivity and molecular symmetry.",
      why: [{ type: "paragraph", children: [{ text: "Stereoisomer count depends on a fixed connectivity and symmetry; skipping this step produces an unreliable count." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Fix the molecular formula and connectivity first, then classify the isomer type." }] }],
      errorType: "execution-error",
    },
    {
      id: "product-without-reagent",
      mistake: "Predicting a reaction product without a stated reagent or condition.",
      why: [{ type: "paragraph", children: [{ text: "Product and pathway selection require the reagent, solvent, temperature and substrate to be known." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Route the question to the owned reaction chapter once reagent and conditions are visible." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "forward",
      description: "Applies bond cleavage, intermediates and reaction families to compound-specific hydrocarbon reactions.",
    },
    {
      label: "Haloalkanes and Haloarenes",
      url: "/jee/chemistry/haloalkanes-haloarenes",
      relation: "forward",
      description: "Applies substitution and elimination reasoning to halogen-bearing substrates.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "related",
      description: "Electronegativity trends used to compare inductive effects.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "related",
      description: "Shares electron-transfer reasoning with organic bond cleavage and oxidation-state tracking.",
    },
  ],

  links: [
    { label: "JEE Chemistry", url: "/jee/chemistry", relation: "up", description: "Chemistry subject hub." },
    { label: "JEE syllabus", url: "/jee/syllabus", relation: "up", description: "Exam-level official syllabus hub." },
    { label: "Chemistry syllabus", url: "/jee/syllabus/chemistry", relation: "up", description: "Official Chemistry scope for Main and Advanced." },
  ],

  faqs: [
    {
      question: "What should be checked before using a stability order?",
      answer: [{ type: "paragraph", children: [{ text: "Check resonance, aromaticity, atom identity, inductive effects, hybridisation, substitution and medium before applying any stability order." }] }],
    },
    {
      question: "What is the difference between homolysis and heterolysis?",
      answer: [{ type: "paragraph", children: [{ text: "Homolysis splits the bonding pair between two radicals; heterolysis gives both electrons to one fragment and forms ions." }] }],
    },
    {
      question: "What does a curved arrow show?",
      answer: [{ type: "paragraph", children: [{ text: "It shows movement of an electron pair from its source to a receiving atom or bond." }] }],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-chem-organic-basics",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Scope claims are verified against the current NTA JEE Main and JEE Advanced syllabus documents. Reaction mechanisms, effect definitions and worked reasoning follow NCERT Organic Chemistry: Some Basic Principles and Techniques. Official-paper archives are linked for provenance only; no counts, weightage or frequency are asserted.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Organic Chemistry educator experienced in structure-mechanism reasoning and stereochemical boundaries.",
    "Academically reviewed by: unassigned. Required specialization: physical organic chemistry, mechanisms, acidity-basicity, nomenclature and current JEE scope.",
    "Minimum relevant qualification: postgraduate degree in Chemistry with Organic Chemistry specialization, or a closely related discipline with documented expertise.",
    "A real reviewer must be linked to a centralized verified contributor profile before any Person schema is emitted.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Organic Chemistry Basics for JEE: Effects and Mechanisms",
    description:
      "Learn JEE organic basics through structure, electron effects, bond fission, intermediates, acidity, reaction families, worked reasoning and traps.",
    ogTitle: "Organic Chemistry Basics for JEE",
    ogDescription:
      "A structure-to-mechanism foundation for electronic effects, intermediates, acidity and reaction reasoning.",
    ogType: "article",
  },
};

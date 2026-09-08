import type { ChapterContent } from "@/content/types";

/**
 * d- and f-Block Elements — T06 production content.
 *
 * Evidence discipline:
 * - Weightage, trend and PYQ-count records are deliberately absent.
 * - Ligand-field structure and complex geometry stay on Coordination Compounds.
 * - Periodic laws stay on Periodic Table.
 * - No contributor is named; contentStatus stays "draft" pending review.
 */
export const jeeChemistryDAndFBlockElements: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "d- and f-Block Elements",
  slug: "d-and-f-block-elements",
  url: "/jee/chemistry/d-and-f-block-elements",
  canonicalIntent:
    "Explain transition and inner-transition behaviour from d or f electron configuration, oxidation-state stability, size, colour, magnetism, catalysis, alloying and verified redox chemistry.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Configuration-to-property reasoning, not memorised exceptions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "d- and f-block behaviour is not a list of unrelated exceptions. Begin with the atom or ion's electron configuration, identify accessible oxidation states and unpaired electrons, then connect size, field environment, redox potential and structure to colour, magnetism, catalysis, alloying or compound behaviour.",
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
      description: "Write atom and ion configurations before assigning transition-metal oxidation states.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Periodic size and shielding trends underpin transition-series radius behaviour.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "prerequisite",
      description: "Balance redox half-reactions before working with medium-dependent permanganate and dichromate chemistry.",
    },
    {
      label: "Coordination Compounds",
      url: "/jee/chemistry/coordination-compounds",
      relation: "related",
      description: "This chapter keeps ligand-field structure and complex geometry on the Coordination Compounds route.",
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
      description: "Exam-level official scope for Chemistry.",
    },
  ],

  syllabusMapping: {
    unit: "The d- and f-Block Elements",
    topics: [
      "Transition-element configuration and occurrence",
      "First-row physical trends, ionization enthalpy, oxidation states, radii",
      "Colour, catalysis, magnetism and complex formation",
      "Interstitial compounds and alloys",
      "Preparation, properties and uses of K2Cr2O7 and KMnO4",
      "Lanthanoid configuration, oxidation states and contraction",
      "Actinoid configuration and oxidation states",
      "d-block oxidation-state stability and standard electrode potentials (Advanced)",
      "Chromium and manganese oxoanion preparation, structure and reactions (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "configuration-first",
      title: "1. Write the configuration before assigning any property",
      keyIdea: "Remove electrons from the outer ns shell before (n-1)d when forming common transition-metal cations.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The general d-block organizing form is (n-1)d^1-10 ns^0-2, and the general f-block organizing form is (n-2)f^1-14 (n-1)d^0-1 ns^2. Neither is an exact formula for every element; atom-specific configurations must be verified. When a common cation forms, electrons leave the outer ns shell before the (n-1)d shell.",
            },
          ],
        },
      ],
    },
    {
      id: "oxidation-state-stability",
      title: "2. Oxidation-state stability needs more than one electron-count slogan",
      keyIdea: "Compare accessible configurations, lattice or hydration effects, ligand environment, and redox potential together.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "No single electron-count rule predicts every stability order. A stability claim needs the species, its accessible configurations, lattice or hydration effects where relevant, the ligand environment, and the redox potential considered together.",
            },
          ],
        },
      ],
    },
    {
      id: "size-trend",
      title: "3. Transition-series size changes gradually because of incomplete shielding",
      keyIdea: "d electrons shield incompletely across a series, so radii change more gradually than a simple main-group trend might suggest.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Across a transition series, d electrons shield the nuclear charge incompletely, so atomic and ionic radii change more gradually than a simple main-group trend would suggest.",
            },
          ],
        },
      ],
    },
    {
      id: "colour-magnetism",
      title: "4. Colour and magnetism both need the specific species and environment",
      keyIdea: "Unpaired electrons support paramagnetism; colour may involve d-state transitions or charge-transfer effects.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Unpaired electrons support paramagnetism. Colour may arise from d-state transitions or from charge-transfer effects. A visible colour claim needs the actual ion and its environment stated, not a generic reference to 'having d electrons'.",
            },
          ],
        },
      ],
    },
    {
      id: "catalysis-compounds",
      title: "5. Name the actual catalytic mechanism before claiming a cause",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Multiple oxidation states, adsorption, and intermediate formation can all contribute to catalytic behaviour, but the actual mechanism must be specified before claiming a cause for a given reaction.",
            },
          ],
        },
      ],
    },
    {
      id: "f-block-contraction",
      title: "6. Lanthanoid and actinoid contraction come from poor f-electron shielding",
      keyIdea: "Poor shielding by f electrons increases effective nuclear attraction across a series.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Poor shielding by f electrons increases effective nuclear attraction across a lanthanoid or actinoid series, producing a contraction in size. A contraction claim needs a like-for-like comparison of species, oxidation state, series position and radius type.",
            },
          ],
        },
      ],
    },
    {
      id: "evidence-record",
      title: "7. Store the full evidence record, not just the conclusion",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For any trend, colour, magnetism, catalysis, or compound claim, store the compound, oxidation state, medium, temperature, balanced equation, observation, and source together, rather than the conclusion alone.",
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
          "How d- and f-block elemental and ionic behaviour follows from electron configuration: oxidation states, size, colour, magnetism, catalysis, alloying, interstitial compounds, and specified chromium and manganese chemistry.",
        ],
        [
          "What is the central method choice?",
          "Start from the atom or ion's configuration, then test the consequence for oxidation state, size, colour, magnetism or reactivity, checking the medium for redox reactions.",
        ],
        [
          "Where do most mistakes begin?",
          "Removing electrons in the wrong order, treating configuration ranges as exception-free, predicting colour from d electrons alone, and applying an acidic permanganate or dichromate equation in basic medium.",
        ],
        [
          "What should come before this chapter?",
          "Atomic Structure, Periodic Table trends, and Redox Reactions half-reaction balancing.",
        ],
        [
          "What comes after it?",
          "Coordination Compounds develops ligand-field structure and complex properties; this chapter keeps that depth on its own route.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for d- and f-Block Elements",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Transition-element configuration, occurrence, physical trends",
          "Explicitly listed: configuration, occurrence, first-row physical trends, ionization enthalpy, oxidation states, radii.",
          "Not restated as a separate physical-trend list; oxidation-state stability and standard electrode potentials are named directly.",
          "Build the configuration-to-trend chain before memorising any single trend line.",
        ],
        [
          "Colour, magnetism, catalysis, complex formation",
          "Explicitly listed alongside interstitial compounds and alloys.",
          "Catalysis and applications are explicitly listed.",
          "State the species and environment before asserting colour or magnetism.",
        ],
        [
          "Chromium and manganese oxoanion chemistry",
          "Preparation, properties and uses of K2Cr2O7 and KMnO4 are explicitly listed.",
          "Preparation, structure and reactions of chromium and manganese oxoanions are explicitly listed.",
          "Keep permanganate and dichromate half-reactions medium-specific.",
        ],
        [
          "Lanthanoid and actinoid chemistry",
          "Lanthanoid configuration, oxidation states and contraction; actinoid configuration and oxidation states are explicitly listed.",
          "Lanthanoid and actinoid contractions, oxidation states and general characteristics are explicitly listed.",
          "Compare contraction claims within the same series using a like-for-like radius definition.",
        ],
        [
          "Ligand-field structure and complex geometry",
          "Not treated in depth on this route.",
          "Not treated in depth on this route.",
          "This depth is owned by the Coordination Compounds chapter.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before this chapter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Atom and ion configurations",
          "Write ground-state configurations and predict which electrons leave first on cation formation.",
          "Revise Aufbau order and configuration writing in Atomic Structure.",
        ],
        [
          "Oxidation-number rules",
          "Assign oxidation states in a compound or ion without ambiguity.",
          "Revise oxidation-number rules and worked examples.",
        ],
        [
          "Redox half-reaction balancing",
          "Balance atoms, charge and electrons in that order for a half-reaction.",
          "Revise half-reaction balancing in Redox Reactions.",
        ],
        [
          "Periodic size trends",
          "Explain why shielding changes radius trends across a period.",
          "Revise effective nuclear charge and shielding in Periodic Table.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Match the question signal to the correct first model before any algebra or equation writing.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Atom or ion configuration", "Electron count with ionization order", "Neutral atom versus cation"],
        ["Oxidation-state stability", "Redox and environmental comparison", "Medium, ligands and standard-state context"],
        ["Magnetic moment", "Unpaired-electron count", "Free ion or defined complex environment"],
        ["Colour", "Electronic configuration plus transition type", "Species, oxidation state and ligand or solvent environment"],
        ["Cr or Mn oxoanion reaction", "Half-reaction balance", "Acidic, neutral or basic medium"],
        ["Lanthanoid contraction", "f-electron shielding model", "Compare within the same series and oxidation state where appropriate"],
      ],
    },
    {
      id: "conditional-records",
      jump: true,
      slot: "formulas",
      heading: "Conditional relations and evidence records",
      intro: "Every relation below carries its conditions and common trap; none is a universal formula divorced from context.",
      columns: ["Expression or record", "Meaning", "Units", "Conditions", "Common trap"],
      rows: [
        [
          "General d-block form (n-1)d^1-10 ns^0-2",
          "Organizing configuration range, not every ground-state formula",
          "Not applicable",
          "Check known atom-specific configurations",
          "Forcing every atom into one Aufbau pattern",
        ],
        [
          "General f-block form (n-2)f^1-14 (n-1)d^0-1 ns^2",
          "Organizing inner-transition range",
          "Not applicable",
          "Atom-specific configurations require verification",
          "Treating the range as an exact formula for every element",
        ],
        [
          "mu_so = sqrt(n(n+2))",
          "Spin-only magnetic moment for n unpaired electrons",
          "Bohr magnetons",
          "Spin-only approximation",
          "Counting total d electrons rather than unpaired electrons",
        ],
        [
          "MnO4- + 8H+ + 5e- -> Mn2+ + 4H2O",
          "Permanganate reduction half-reaction",
          "Charge and mole relation",
          "Acidic aqueous medium",
          "Using the Mn2+ product in neutral or basic medium without support",
        ],
        [
          "MnO4- + 2H2O + 3e- -> MnO2 + 4OH-",
          "Permanganate reduction to manganese dioxide",
          "Charge and mole relation",
          "Neutral or basic aqueous model where MnO2 is the stated product",
          "Copying acidic coefficients into a basic-medium answer",
        ],
        [
          "Cr2O7^2- + 14H+ + 6e- -> 2Cr3+ + 7H2O",
          "Dichromate reduction half-reaction",
          "Charge and mole relation",
          "Acidic aqueous medium",
          "Losing the factor of two for chromium atoms",
        ],
        [
          "Contraction record",
          "Species, oxidation state, series position, radius type, and source, compared like for like",
          "pm when numerical",
          "Like-for-like comparison",
          "Comparing unrelated coordination numbers or radius definitions",
        ],
      ],
      note: "Medium changes both the product and the balanced coefficients for permanganate and dichromate reactions; never transport an acidic half-reaction into a neutral or basic problem.",
    },
  ],

  workedExamples: [
    {
      id: "acidic-permanganate-electron-count",
      prompt: "Derive the balanced half-reaction for reduction of MnO4- to Mn2+ in acidic medium.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Manganese is +7 in MnO4- and +2 in Mn2+, so it gains five electrons." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Balance the four oxygen atoms with 4 H2O on the product side." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Balance the eight hydrogen atoms with 8 H+ on the reactant side." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Check the left-side charge: -1 + 8 - 5 = +2, matching Mn2+." },
          ],
        },
      ],
      answer: "MnO4- + 8H+ + 5e- -> Mn2+ + 4H2O. The product and coefficients are medium-dependent; do not transport this acidic half-reaction into a neutral or basic problem.",
    },
  ],

  mistakes: [
    {
      id: "wrong-ionization-order",
      mistake: "Removing d electrons before outer s electrons when forming common transition-metal cations.",
      why: [{ type: "paragraph", children: [{ text: "Common transition-metal cations form by removing outer ns electrons before (n-1)d electrons; reversing the order gives a wrong configuration." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Write the neutral-atom configuration first, then remove ns electrons before (n-1)d electrons for the cation." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "configuration-as-exception-free",
      mistake: "Treating the general block configuration as exception-free for every element.",
      why: [{ type: "paragraph", children: [{ text: "The general d-block and f-block forms are organizing ranges, not exact formulas for every element; some atom-specific configurations vary." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify atom-specific configurations rather than forcing every element into one Aufbau pattern." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "colour-from-d-electrons-alone",
      mistake: "Predicting colour only from the presence of d electrons, without specifying the species and environment.",
      why: [{ type: "paragraph", children: [{ text: "Colour may involve d-state transitions or charge-transfer effects, and a visible colour claim needs the actual ion and environment." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the exact ion, oxidation state and environment before asserting a colour." }] }],
      errorType: "decision-error",
    },
    {
      id: "spin-only-without-unpaired-count",
      mistake: "Using spin-only magnetism without identifying unpaired electrons and environment.",
      why: [{ type: "paragraph", children: [{ text: "The spin-only formula uses the number of unpaired electrons, not the total d-electron count." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the unpaired-electron count for the correct species and environment before applying mu_so = sqrt(n(n+2))." }] }],
      errorType: "execution-error",
    },
    {
      id: "acidic-equation-in-basic-medium",
      mistake: "Applying an acidic permanganate or dichromate equation in basic medium.",
      why: [{ type: "paragraph", children: [{ text: "Medium changes the stable manganese- or chromium-containing product and therefore the balanced half-reaction coefficients." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the stated medium and use the matching half-reaction rather than copying acidic coefficients." }] }],
      errorType: "decision-error",
    },
    {
      id: "generic-catalyst-claim",
      mistake: "Calling every transition metal a catalyst for the same reason.",
      why: [{ type: "paragraph", children: [{ text: "Multiple oxidation states, adsorption, and intermediate formation can each contribute, but the actual mechanism must be specified for a given reaction." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Name the specific catalytic mechanism for the stated reaction before claiming a cause." }] }],
      errorType: "needs-review",
    },
    {
      id: "contraction-without-controlled-comparison",
      mistake: "Explaining lanthanoid contraction without a like-for-like radius comparison.",
      why: [{ type: "paragraph", children: [{ text: "A contraction claim needs a controlled comparison; comparing unrelated coordination numbers or radius definitions is not valid evidence." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare species within the same series, oxidation state and radius definition before asserting a contraction trend." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Configuration writing and ionization order used throughout this chapter.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Shielding and size trends that underlie transition-series behaviour.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "prerequisite",
      description: "Half-reaction balancing needed for medium-dependent permanganate and dichromate chemistry.",
    },
    {
      label: "p-Block Elements",
      url: "/jee/chemistry/p-block-elements",
      relation: "related",
      description: "A parallel inorganic-trend chapter, kept separate by block.",
    },
    {
      label: "Electrochemistry",
      url: "/jee/chemistry/electrochemistry",
      relation: "related",
      description: "Standard electrode potentials used when comparing oxidation-state stability.",
    },
    {
      label: "Coordination Compounds",
      url: "/jee/chemistry/coordination-compounds",
      relation: "forward",
      description: "Ligand-field structure and complex-property depth continues here.",
    },
    {
      label: "Chemistry in Everyday Life",
      url: "/jee/chemistry/chemistry-everyday-life",
      relation: "forward",
      description: "Applications of specified compounds such as KMnO4 extend into everyday-life context.",
    },
  ],

  links: [
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Chemistry subject hub.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Exam-level official Chemistry scope.",
    },
  ],

  faqs: [
    {
      question: "Why do transition elements show multiple oxidation states?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The outer s and nearby d orbital energies can be comparable, so different numbers of electrons can participate depending on the chemical environment.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is permanganate reduction medium-dependent?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Proton availability and reaction conditions change the stable manganese-containing product and therefore the balanced half-reaction.",
            },
          ],
        },
      ],
    },
    {
      question: "What causes lanthanoid contraction?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Incomplete shielding by 4f electrons increases effective nuclear attraction across the lanthanoid series.",
            },
          ],
        },
      ],
    },
    {
      question: "Does this chapter cover ligand-field structure and complex geometry?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Complex geometry and ligand-field depth are owned by the Coordination Compounds chapter; this page owns elemental and ionic trends, transition behaviour, contractions, and specified chromium or manganese chemistry.",
            },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Weightage, frequency, trend percentages and question-count forecasts are deliberately not published on this page.",
            },
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
    "ncert-chem-d-f-block",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and configuration, trend, and reaction detail is tied to NCERT The d- and f-Block Elements. Ligand-field structure and complex geometry are kept on the Coordination Compounds route. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Inorganic Chemistry educator experienced in transition-metal trends and medium-dependent redox chemistry.",
    "Academic reviewer: postgraduate degree in Chemistry, preferably Inorganic Chemistry, or a closely related discipline with documented transition-metal expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies configurations, oxidation states, half-reactions, and contraction claims separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "d- and f-Block Elements for JEE: Configuration to Property",
    description:
      "Official JEE Main and Advanced 2026 scope for d- and f-Block Elements, configuration-to-property method, medium-dependent permanganate and dichromate chemistry, and lanthanoid contraction. No invented weightage.",
    ogTitle: "d- and f-Block Elements for JEE",
    ogDescription:
      "A condition-aware guide to transition trends, f-block contraction, and verified redox chemistry.",
  },
};

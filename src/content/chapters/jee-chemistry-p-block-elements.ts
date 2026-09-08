import type { ChapterContent } from "@/content/types";

/**
 * p-Block Elements — T06 production content.
 *
 * Evidence discipline: no weightage, trend or invented PYQ records. No named
 * contributor until verified. contentStatus stays "draft" until academic
 * review is recorded. Source content is restricted to the assigned package
 * section (p-Block Elements) and the shared source register.
 */
export const jeeChemistryPBlockElements: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "p-Block Elements",
  slug: "p-block-elements",
  url: "/jee/chemistry/p-block-elements",
  canonicalIntent:
    "Explain p-block trends and exceptions from valence configuration, size, electronegativity, oxidation-state stability, bonding and structure, while separating JEE Main breadth from JEE Advanced named-compound depth.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Explain the cause before memorizing the exception",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "p-Block chemistry is best organized from valence-shell configuration to bonding and oxidation state, then to trends, first-element anomalies, and verified compound behaviour. For JEE Main 2026, the official scope is general groups 13 to 18 trends and first-element uniqueness. JEE Advanced 2026 requires substantially deeper named-compound coverage.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Main does not list the long preparation-and-reaction inventory found in the Advanced syllabus. It asks for electronic configuration, general physical and chemical trends, and the unique behaviour of the first element in each group; Advanced separately names an owned set of compounds and reactions across groups 13 to 18.",
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
      description: "Write valence configurations before reasoning about p-block trends.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Interpret effective nuclear attraction and size trends that drive p-block behaviour.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Use Lewis and VSEPR models before analysing p-block compound structures.",
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
    unit: "p-Block Elements",
    topics: [
      "Electronic configuration of groups 13 to 18",
      "General physical and chemical trends across periods and down groups",
      "Unique behaviour of the first element of each group",
      "Oxidation states and reactivity trends for groups 13 to 17",
      "First-element anomalies for B, C, N, O and F",
      "Named compounds and reactions across groups 13 to 17",
      "Group 18 properties, uses and xenon compounds with fluorine and oxygen",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "configuration",
      title: "1. Fix the valence configuration first",
      keyIdea: "Groups 13 to 18 progress from ns2np1 to ns2np6, with helium as an exception at 1s2.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Groups 13 to 18 progress from ns2np1 to ns2np6 in valence configuration, with helium as 1s2. Every trend or exception discussion should start from this configuration, not from a memorized property list.",
            },
          ],
        },
      ],
    },
    {
      id: "cause-before-trend",
      title: "2. Identify the physical cause behind a trend",
      keyIdea: "Atomic size, effective nuclear attraction, electronegativity, ionization enthalpy, polarizability, bond strength and orbital overlap drive behaviour.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Atomic size, effective nuclear attraction, electronegativity, ionization enthalpy, polarizability, bond strength and orbital overlap influence p-block behaviour. State the cause before stating the direction of any trend.",
            },
          ],
        },
      ],
    },
    {
      id: "trend-not-absolute",
      title: "3. State the trend and the compared property precisely",
      keyIdea: "A general tendency is not an absolute rule.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "State the direction of a trend and the specific property being compared. Do not turn a general down-group or across-period tendency into an absolute rule that applies to every compound.",
            },
          ],
        },
      ],
    },
    {
      id: "first-element-anomaly",
      title: "4. Explain the first-element anomaly through structure, not the label alone",
      keyIdea: "Second-period elements have compact valence shells and distinct multiple-bonding capability.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Second-period elements have compact valence shells, high electronegativity or ionization enthalpy in relevant comparisons, and effective p-p multiple-bonding possibilities. Explain the specific property affected, not merely apply the word 'anomaly' as a label.",
            },
          ],
        },
      ],
    },
    {
      id: "oxidation-state-stability",
      title: "5. Justify oxidation-state stability with electron count and structure",
      keyIdea: "Lower oxidation states can gain stability down a group in several p-block groups, but every claim needs the specific element and compound.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Count valence electrons, bonding partners, and relative stability. For heavier p-block elements, lower oxidation states can gain stability within several groups, but every specific claim must be checked against the actual element and compound rather than generalized across the whole group.",
            },
          ],
        },
      ],
    },
    {
      id: "structure-and-bonding",
      title: "6. Use electron count and a validated bonding model for structure",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use electron count and a validated bonding geometry model for structure questions. Avoid presenting historical d-orbital hybridisation as a universal modern explanation of hypervalency.",
            },
          ],
        },
      ],
    },
    {
      id: "compound-evidence",
      title: "7. Store compound evidence as a complete record, not a bare reaction",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For Advanced named compounds, store preparation, condition, observation, product, and source together. A bare reaction list without conditions or source is not a publishable compound record.",
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
          "How valence configuration, periodic causes, general trends, first-element anomalies, oxidation-state stability and verified compound behaviour combine across groups 13 to 18.",
        ],
        [
          "What is the central method choice?",
          "Identify whether the question needs Main-level general trend reasoning or Advanced-level named-compound depth, then work configuration to cause to trend to exception to compound.",
        ],
        [
          "Where do most mistakes begin?",
          "Using an older, longer compound list as the current Main scope, and memorizing an exception without the underlying property or comparison set.",
        ],
        [
          "What should come before p-Block Elements?",
          "Valence configuration from Atomic Structure, periodic causation from Periodic Table, and Lewis or VSEPR models from Chemical Bonding.",
        ],
        [
          "What comes after it?",
          "Coordination Compounds and Environmental Chemistry extend structure and reactivity reasoning into further contexts.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-scope-boundary",
      jump: true,
      slot: "scope",
      heading: "Official scope boundary: Main breadth versus Advanced compound depth",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This table is a scope map, not a substitute for academically reviewed compound records.",
      columns: ["Group", "Explicit JEE Advanced 2026 compound or reaction coverage"],
      rows: [
        ["13", "Reactivity toward acids, alkalis and halogens; borax, orthoboric acid, diborane, boron trifluoride, aluminium chloride, alums; uses of B and Al."],
        ["14", "Reactivity toward water and halogen; carbon allotropes; CO, CO2, SiO2, silicones, silicates and zeolites."],
        ["15", "Reactivity toward H2, O2 and halogen; phosphorus allotropes; N2, NH3, HNO3, PH3, PCl3, PCl5, nitrogen oxides and phosphorus oxoacids."],
        ["16", "Reactivity toward H2, O2 and halogen; simple oxides; sulfur allotropes; O2, O3, SO2, H2SO4 and sulfur oxoacids."],
        ["17", "Reactivity toward H2, O2 and metals; Cl2, HCl, interhalogens, halogen oxoacids and bleaching powder."],
        ["18", "Chemical properties and uses; xenon compounds with fluorine and oxygen."],
      ],
      note: "JEE Main 2026 does not list this compound-and-reaction inventory; its official scope is limited to electronic configuration, general trends across groups 13 to 18, and the unique behaviour of each group's first element.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before p-Block Elements",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Valence configuration",
          "Write the ns2npx configuration for any group-13-to-18 element.",
          "Revise Atomic Structure's electron-filling rules.",
        ],
        [
          "Periodic causation",
          "Explain a trend using size, effective nuclear attraction and electronegativity.",
          "Revise Periodic Table's causal reasoning, not just the direction of trends.",
        ],
        [
          "Lewis and VSEPR models",
          "Draw a Lewis structure and predict a basic molecular shape.",
          "Revise Chemical Bonding's structural models.",
        ],
        [
          "Oxidation-state assignment",
          "Assign an oxidation state and count bonding partners for a p-block compound.",
          "Revise oxidation-number rules before comparing oxidation-state stability.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: identify scope and cause before answering",
      intro: "Match the question signal to the correct first model before any conclusion.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Main trend or anomaly", "Valence configuration plus periodic cause", "Is only general current Main scope required?"],
        ["Advanced named compound", "Compound evidence record", "Exact reactants, conditions, products and source"],
        ["Oxidation-state comparison", "Electron count plus stability causes", "Element, group position and ligand environment"],
        ["Shape or bonding", "Lewis or verified structural model", "Electron count and model limitations"],
        ["Acidic or basic behaviour", "Oxidation state, electronegativity, structure and medium", "Aqueous, gas-phase, oxide, hydride, or oxoacid context"],
        ["Apparent exception", "Recheck property definition and comparison set", "Do not memorize an isolated arrow"],
      ],
    },
    {
      id: "group-reasoning-ledger",
      jump: true,
      slot: "concepts",
      heading: "Group reasoning ledger",
      columns: ["Group", "Valence configuration", "Useful organizing question", "Boundary or trap"],
      rows: [
        ["13", "ns2np1", "How do electron deficiency, Lewis acidity and oxidation-state stability change?", "Do not assign one Lewis-acidity order without species and medium."],
        ["14", "ns2np2", "How do catenation, multiple bonding and +4/+2 stability change?", "A down-group tendency does not make every +2 compound more stable than every +4 compound."],
        ["15", "ns2np3", "How do lone-pair availability and -3, +3, +5 states depend on element and compound?", "Basicity and reducing power need species and phase."],
        ["16", "ns2np4", "How do hydride, oxide and oxoacid properties reflect size and bonding?", "Do not infer acidity from oxidation state alone."],
        ["17", "ns2np5", "How do bond strength, electronegativity and polarizability shape reactivity?", "Fluorine behaviour cannot be extended to all halogens."],
        ["18", "ns2np6, except He 1s2", "Under what conditions do heavier noble gases form compounds?", "Low reactivity is not absolute chemical impossibility."],
      ],
    },
  ],

  formulas: [],

  workedExamples: [
    {
      id: "nitrogen-phosphorus-anomaly",
      prompt: "Explain why nitrogen and phosphorus do not always follow identical group-15 behaviour.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Nitrogen's valence shell is smaller, so its orbitals overlap effectively in p-p multiple bonds." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Its compact size also increases electron-pair repulsions when several bonds or lone pairs crowd the atom." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Phosphorus has a larger valence shell and different bond strengths and structural possibilities." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Therefore a group comparison must identify the actual property, such as multiple-bond formation, catenation, hydride behaviour, or coordination environment." },
          ],
        },
      ],
      answer: "The phrase 'first-element anomaly' is the conclusion. Size, electronegativity, ionization enthalpy, orbital overlap and structure provide the explanation.",
    },
  ],

  mistakes: [
    {
      id: "outdated-main-scope",
      mistake: "Using an older, full p-block compound-and-reaction list as the current JEE Main scope.",
      why: [{ type: "paragraph", children: [{ text: "Current JEE Main 2026 scope for p-block is limited to configuration, general trends and first-element behaviour, not the detailed compound inventory that belongs to Advanced." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official scope boundary table on this page before assuming a compound or reaction is Main-relevant." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "exception-without-cause",
      mistake: "Memorizing an exception without the property or comparison set it applies to.",
      why: [{ type: "paragraph", children: [{ text: "An exception stated without its cause and comparison set cannot be applied correctly to a new but related question." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Store every exception as property, comparison, cause, and (where relevant) compound together." }] }],
      errorType: "recall-gap",
    },
    {
      id: "oxidation-state-overgeneralization",
      mistake: "Applying one oxidation-state trend to every compound in a group.",
      why: [{ type: "paragraph", children: [{ text: "Oxidation-state stability depends on the specific element and compound, not only on group position." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the actual element and compound before generalizing an oxidation-state stability claim." }] }],
      errorType: "decision-error",
    },
    {
      id: "reaction-without-conditions",
      mistake: "Writing a reaction without reagent state, medium, temperature or source.",
      why: [{ type: "paragraph", children: [{ text: "A p-block reaction's product and feasibility often depend on exact conditions; an incomplete record cannot be verified or safely reused." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Record preparation, condition, observation, product and source together for every compound claim." }] }],
      errorType: "execution-error",
    },
    {
      id: "labels-as-complete-explanation",
      mistake: "Treating VSEPR or hybridisation labels as a complete bonding explanation.",
      why: [{ type: "paragraph", children: [{ text: "A shape or hybridisation label names a model outcome; it does not by itself justify why the structure or reactivity occurs." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Connect the label back to electron count and the specific bonding evidence for that compound." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "d-orbital-overuse",
      mistake: "Explaining every hypervalent structure through d-orbital expansion.",
      why: [{ type: "paragraph", children: [{ text: "Presenting historical d-orbital hybridisation as a universal modern explanation of hypervalency overstates a contested and largely superseded model." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use electron count and a validated bonding model, and avoid presenting d-orbital expansion as the settled universal explanation." }] }],
      errorType: "needs-review",
    },
    {
      id: "scope-boundary-confusion",
      mistake: "Mixing p-block general trends with Periodic Table's global intent.",
      why: [{ type: "paragraph", children: [{ text: "Periodic Table owns global periodic trends across all blocks; p-Block owns group-specific trend-to-exception and compound behaviour within its own official scope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep global periodic-trend claims on Periodic Table and group-specific compound claims on this chapter." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Owns global periodic trends that this chapter applies specifically to groups 13 to 18.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Owns general structure models used to analyse p-block compound bonding.",
    },
    {
      label: "s-Block Elements",
      url: "/jee/chemistry/s-block-elements",
      relation: "related",
      description: "Shares group-trend and reactivity reasoning across the main-group elements.",
    },
    {
      label: "Coordination Compounds",
      url: "/jee/chemistry/coordination-compounds",
      relation: "forward",
      description: "Extends bonding and structure reasoning into metal-ligand coordination entities.",
    },
    {
      label: "Environmental Chemistry",
      url: "/jee/chemistry/environmental-chemistry",
      relation: "forward",
      description: "Extends p-block compound behaviour into atmospheric and environmental contexts.",
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
      question: "What is the current JEE Main p-block scope?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Groups 13 to 18 electronic configuration, general physical and chemical trends, and unique behaviour of each group's first element." },
          ],
        },
      ],
    },
    {
      question: "Why do first elements differ from the rest of a p-block group?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Their compact valence shell, electronegativity and ionization behaviour, bond strengths, and orbital-overlap capabilities can differ substantially from heavier congeners." },
          ],
        },
      ],
    },
    {
      question: "Should a p-block exception be memorized alone?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Store the property, comparison, cause, compound or species, conditions, and source together." },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for p-Block Elements?",
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
    "ncert-chem-syllabus",
    "ncert-chem-exemplar",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Evidence boundary: syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and the Main-versus-Advanced compound-depth boundary is deliberately kept explicit because the two documents differ materially in scope. Baseline trend and structure treatment follows NCERT p-block syllabus and exemplar materials. Periodic Table owns global periodic trends and Chemical Bonding owns general structure models; this page owns only group-specific trend-to-exception and compound behaviour within the official scope. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Inorganic Chemistry educator experienced in periodic causation and condition-aware compound chemistry.",
    "Academic reviewer: postgraduate qualification in Chemistry, preferably Inorganic Chemistry, with documented main-group expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies configurations, trend causes, exceptions and named-compound scope separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "p-Block Elements for JEE: Trends, Exceptions, Scope",
    description:
      "Official JEE Main and Advanced 2026 scope for p-Block Elements, a cause-before-exception method for trends and anomalies, the exact Main-versus-Advanced compound-depth boundary, and an error diagnosis framework. No invented weightage.",
    ogTitle: "p-Block Elements for JEE: explain the cause before the exception",
    ogDescription:
      "A scope-aware guide to group trends, first-element anomalies and verified compound evidence for JEE preparation.",
  },
};

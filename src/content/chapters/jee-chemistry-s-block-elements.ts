import type { ChapterContent } from "@/content/types";

/**
 * s-Block Elements — T06 production content.
 *
 * Scope check (verified against the current JEE Main and JEE Advanced 2026
 * syllabus documents): JEE Main 2026 names s-block only as part of periodic
 * classification and general periodic trends; it does not list detailed
 * Group 1, Group 2 or named-compound chemistry. JEE Advanced 2026 explicitly
 * includes reactivity, reducing nature (including liquid-ammonia solutions),
 * uses, oxide/hydroxide/halide/oxoacid-salt classes, lithium and beryllium
 * anomalies, and named sodium and calcium compounds. No weightage, trend or
 * PYQ-count claims are asserted. Contributors remain unassigned.
 */
export const jeeChemistrySBlockElements: ChapterContent = {
  exam: "JEE",
  examVariant: "JEE Advanced (periodic classification only in JEE Main)",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "s-Block Elements",
  slug: "s-block-elements",
  url: "/jee/chemistry/s-block-elements",
  canonicalIntent:
    "Explain Group 1 and Group 2 behaviour from valence configuration, size, ionisation, hydration and lattice effects, correctly separate lithium and beryllium anomalies, and place named sodium and calcium compounds within the current JEE Advanced scope.",

  heroChips: [
    "JEE Advanced 2026 chapter; JEE Main 2026 covers only periodic classification",
    "Explain the trend before recalling the compound",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "s-Block Chemistry becomes coherent when each fact is traced through valence configuration, atomic or ionic size, ionisation enthalpy, hydration enthalpy, lattice effects and polarising power. Group 1 commonly forms +1 ions and Group 2 commonly forms +2 ions, but lithium and beryllium require separate checks because their small size and high charge density create important anomalies.",
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
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "General periodic trends in size, ionisation enthalpy and electropositive character.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Ionic bonding, lattice energy and polarisation ideas used to explain s-block behaviour.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "prerequisite",
      description: "Oxidation states and reducing behaviour used across s-block reactivity.",
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
    unit: "s-Block Elements (JEE Advanced; periodic classification only in JEE Main)",
    topics: [
      "Group 1 and Group 2 valence configuration",
      "Reactivity with air, water, dihydrogen, halogens and acids",
      "Reducing nature, including solutions in liquid ammonia",
      "Uses of Group 1 and Group 2 elements and compounds",
      "Oxides, hydroxides, halides and oxoacid salts",
      "Lithium and beryllium anomalies",
      "Named sodium and calcium compounds",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "valence-pattern",
      title: "1. Start from the valence pattern",
      keyIdea: "Group 1 has an ns1 outer configuration; Group 2 has ns2.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Group 1 (alkali metals) have one valence electron in an ns orbital, and Group 2 (alkaline earth metals) have two. This single fact drives their common +1 and +2 ion formation and their strongly electropositive character.",
            },
          ],
        },
      ],
    },
    {
      id: "ion-formation",
      title: "2. Check ionisation enthalpy before assuming ion formation",
      keyIdea: "Low first ionisation enthalpy supports electropositive behaviour, but the second ionisation step is not equally easy for Group 1.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Group 1 elements lose their single valence electron readily, but removing a second electron from an already stable noble-gas-like configuration requires far more energy. Group 2 elements lose two electrons to reach a stable +2 state because both removals are chemically favourable in that group.",
            },
          ],
        },
      ],
    },
    {
      id: "size-and-charge-density",
      title: "3. Size and charge density control hydration and lattice effects",
      keyIdea: "Smaller, more highly charged ions hydrate more strongly and polarise neighbouring species more strongly.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Atomic and ionic size increase down each group. Smaller ions with the same or higher charge have greater charge density, so they are hydrated more strongly and have greater polarising power. These two effects often oppose each other in explaining solubility and thermal-stability trends, so a single-factor explanation can fail.",
            },
          ],
        },
      ],
    },
    {
      id: "reactivity-framework",
      title: "4. Identify reagent, product class and redox role before writing a reaction",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For reactivity with air, water, dihydrogen, halogens or acids, identify what species is oxidised and reduced, which product class forms, and what conditions apply, rather than memorising an isolated arrow.",
            },
          ],
        },
      ],
    },
    {
      id: "first-member-anomaly",
      title: "5. Test lithium and beryllium separately before extending a group trend",
      keyIdea: "Unusually small size and high charge density make lithium and beryllium behave differently from the rest of their groups.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Lithium in Group 1 and beryllium in Group 2 are markedly smaller than the elements below them. Their high charge density gives them stronger polarising power and greater covalent character in their compounds, so a smooth down-group rule cannot be assumed to include them without a separate check.",
            },
          ],
        },
      ],
    },
    {
      id: "named-compounds",
      title: "6. Connect each named compound to preparation, property, reaction and use",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For each Advanced-listed sodium or calcium compound, connect its preparation route, characteristic property, representative reaction and practical use to its specific chemical identity, rather than treating similarly named compounds as interchangeable.",
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
          "How Group 1 and Group 2 behaviour follows from valence configuration, size, ionisation enthalpy, hydration and lattice effects, including the lithium and beryllium anomalies and named sodium and calcium compounds.",
        ],
        [
          "What is the central method choice?",
          "Trace a trend through configuration, size and charge density, then check whether the first member is an explicit anomaly before extending the trend.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating detailed s-block chemistry as JEE Main scope, explaining every trend by size alone, and extending lithium or beryllium properties to the whole group.",
        ],
        [
          "What should come before s-Block Elements?",
          "Periodic Table trends, ionic bonding and lattice-energy ideas from Chemical Bonding, and oxidation states from Redox Reactions.",
        ],
        [
          "What comes after it?",
          "Environmental Chemistry, which is also an Advanced-only 2026 topic.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for s-Block Elements",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. s-Block Elements is an Advanced-only 2026 topic and is not a separate Main 2026 unit; Main names s-block only within periodic classification and general periodic trends.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Group 1 and Group 2 detailed chemistry",
          "PARTIAL OR MERGED. Main includes s-block classification and general periodic trends only.",
          "INCLUDED. Reactivity, reducing nature, uses and compound classes are explicitly listed.",
          "Do not treat detailed Group 1 or Group 2 chemistry as current Main scope.",
        ],
        [
          "Lithium and beryllium anomalies",
          "Not listed as a separate item.",
          "Explicitly listed.",
          "Test the first-member anomaly separately from the general group trend.",
        ],
        [
          "Named sodium and calcium compounds",
          "Not listed as a separate item.",
          "Explicitly listed for specified compounds.",
          "Connect each compound's preparation, property, reaction and use individually.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before s-Block Elements",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Periodic trends",
          "Explain how atomic size, ionisation enthalpy and electropositive character change across a period and down a group.",
          "Revise Periodic Table trends.",
        ],
        [
          "Ionic bonding and lattice energy",
          "Compare ionic bonding strength using charge and size.",
          "Revise Chemical Bonding, focusing on lattice energy and polarisation.",
        ],
        [
          "Oxidation states and redox roles",
          "Identify what is oxidised and reduced in a metal-water or metal-acid reaction.",
          "Revise Redox Reactions.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the reasoning path before recalling the fact",
      intro: "Match the question type to the correct starting point before writing an equation or comparing a trend.",
      columns: ["Question type", "Start with", "Then check"],
      rows: [
        ["Trend comparison", "Size and charge", "Hydration versus lattice-energy competition"],
        ["Reactivity equation", "Oxidation state and product class", "Stoichiometry and conditions"],
        ["Solubility comparison", "Ions formed and energetic competition", "Temperature and solvent if provided"],
        ["Lithium or beryllium statement", "First-member anomaly", "Small size, charge density, polarisation, diagonal resemblance if relevant"],
        ["Named sodium or calcium compound", "Formula and preparation route", "Property, use and Main/Advanced boundary"],
      ],
    },
    {
      id: "reaction-records",
      jump: true,
      slot: "concepts",
      heading: "Condition-aware reaction and compound records",
      columns: ["Record", "Chemical meaning", "Condition", "Common trap"],
      rows: [
        [
          "2Na + 2H2O -> 2NaOH + H2",
          "Sodium reduces water and forms hydroxide.",
          "Controlled conceptual equation; the actual reaction is vigorous.",
          "Extending identical rate or safety behaviour to every s-block metal.",
        ],
        [
          "NaCl + NH3 + CO2 + H2O -> NaHCO3(down arrow) + NH4Cl",
          "Net representation of sodium hydrogen carbonate formation in the ammonia-soda process.",
          "Concentrated brine, ammonia, carbon dioxide, suitable temperature.",
          "Calling it a one-step molecular mechanism.",
        ],
        [
          "2NaHCO3 --heat--> Na2CO3 + CO2 + H2O",
          "Thermal conversion of hydrogen carbonate to carbonate.",
          "Heating.",
          "Losing the coefficient 2.",
        ],
        [
          "CaCO3 --heat--> CaO + CO2",
          "Calcination of calcium carbonate.",
          "Strong heating.",
          "Treating decomposition as spontaneous at any temperature.",
        ],
        [
          "CaO + H2O -> Ca(OH)2",
          "Slaking of lime.",
          "Water; exothermic process.",
          "Confusing quicklime and slaked lime.",
        ],
        [
          "Liquid-ammonia metal solution",
          "Solvated electrons produce a characteristic reducing medium.",
          "Dry liquid ammonia and a suitable metal.",
          "Describing the colour or reducing action without the solvated-electron model.",
        ],
      ],
      note: "Sources: JEE Advanced 2026 syllabus and NCERT s-Block exemplar, linked in the sources section below.",
    },
  ],

  workedExamples: [
    {
      id: "lithium-beryllium-anomaly",
      prompt: "A statement applies a smooth down-group rule to lithium and sodium. Should it be accepted without a check?",
      steps: [
        { type: "paragraph", children: [{ text: "Both have one valence electron, but Li+ is much smaller than Na+." }] },
        { type: "paragraph", children: [{ text: "The smaller ion has higher charge density and stronger hydration and polarising effects." }] },
        { type: "paragraph", children: [{ text: "These factors can change solubility, covalent character, thermal behaviour and resemblance to neighbouring-group elements." }] },
        { type: "paragraph", children: [{ text: "Therefore, test the general trend, then test whether lithium is an explicit anomaly. Apply the same discipline to beryllium within Group 2." }] },
      ],
      answer: "No. First-member anomalies must be checked separately before extending a group trend.",
    },
  ],

  mistakes: [
    {
      id: "main-scope-overclaim",
      mistake: "Calling detailed s-block chemistry current JEE Main 2026 scope.",
      why: [{ type: "paragraph", children: [{ text: "JEE Main 2026 lists s-block only within periodic classification and general periodic trends, not detailed Group 1 or Group 2 chemistry." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming Main-exam relevance for a detailed s-block fact." }] }],
      errorType: "needs-review",
    },
    {
      id: "size-only-explanation",
      mistake: "Explaining every trend by atomic size alone.",
      why: [{ type: "paragraph", children: [{ text: "Hydration and lattice-energy effects can compete with and sometimes outweigh a simple size argument." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check hydration and lattice-energy competition before finalising a trend explanation." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "anomaly-overextension",
      mistake: "Extending a lithium or beryllium property to the whole group.",
      why: [{ type: "paragraph", children: [{ text: "Lithium and beryllium are explicit first-member anomalies due to their small size and high charge density." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Run the first-member anomaly check before generalising a property across the group." }] }],
      errorType: "decision-error",
    },
    {
      id: "carbonate-bicarbonate-confusion",
      mistake: "Confusing sodium carbonate with sodium hydrogen carbonate.",
      why: [{ type: "paragraph", children: [{ text: "The two compounds have distinct formulas, preparation routes and properties." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the exact formula and preparation route named in the question before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "calcium-compound-confusion",
      mistake: "Confusing calcium oxide, calcium hydroxide, calcium carbonate and calcium sulphate.",
      why: [{ type: "paragraph", children: [{ text: "These compounds are related through common reactions but are chemically distinct with different properties and uses." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track the specific transformation (calcination, slaking) that links each pair before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "missing-condition",
      mistake: "Writing a named preparation without the necessary condition.",
      why: [{ type: "paragraph", children: [{ text: "Conditions such as heating, dryness or a specific reagent sequence determine whether the stated product actually forms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always state the condition alongside the equation using the condition-aware reaction records on this page." }] }],
      errorType: "execution-error",
    },
    {
      id: "liquid-ammonia-confusion",
      mistake: "Treating liquid ammonia as merely another label for aqueous ammonia.",
      why: [{ type: "paragraph", children: [{ text: "Metal solutions in liquid ammonia involve solvated electrons and a distinct reducing behaviour not present in aqueous ammonia." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the solvated-electron model specifically for liquid-ammonia solutions." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "p-Block Elements",
      url: "/jee/chemistry/p-block-elements",
      relation: "related",
      description: "Lateral inorganic chapter with its own group-trend and compound scope.",
    },
    {
      label: "d- and f-Block Elements",
      url: "/jee/chemistry/d-and-f-block-elements",
      relation: "related",
      description: "Lateral inorganic chapter covering transition and inner-transition elements.",
    },
    {
      label: "Environmental Chemistry",
      url: "/jee/chemistry/environmental-chemistry",
      relation: "forward",
      description: "Another Advanced-only 2026 topic that follows in the applied Chemistry path.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "General periodic trends that this chapter applies to Group 1 and Group 2.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Ionic bonding and lattice-energy ideas used throughout this chapter.",
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
      description: "Chemistry-specific official syllabus scope.",
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
      question: "Is s-Block Elements in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Detailed s-block element and compound chemistry is not listed. JEE Main includes s-block only as part of periodic-table classification and general periodic trends.",
            },
          ],
        },
      ],
    },
    {
      question: "Is s-Block Elements in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. The official JEE Advanced 2026 syllabus lists Group 1 and Group 2 reactivity, reducing behaviour, anomalies, compound classes, and named sodium and calcium compounds.",
            },
          ],
        },
      ],
    },
    {
      question: "Why are lithium and beryllium anomalous?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Their unusually small atoms and ions create high charge density and strong hydration and polarising effects, so several properties differ from the heavier group members.",
            },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for s-Block Elements?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Weightage, trend percentages and question-count forecasts are deliberately not published on this page.",
            },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "ncert-chem-syllabus",
  ],
  sourceNote:
    "Evidence boundary: s-Block Elements is a JEE Advanced-only 2026 topic and is not a separate JEE Main 2026 unit; JEE Main names s-block only within periodic classification and general periodic trends. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Inorganic Chemistry educator who teaches periodic causes before compound recall.",
    "Academic reviewer: postgraduate qualification in Inorganic Chemistry or a closely related discipline with documented main-group expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies equations, conditions, syllabus-boundary claims and worked reasoning separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "s-Block Elements for JEE Advanced 2026: Trends and Compounds",
    description:
      "Learn s-block trends, lithium and beryllium anomalies, reactions, and named sodium and calcium compounds with the JEE Main boundary made clear. No invented weightage.",
    ogTitle: "s-Block Elements for JEE Advanced 2026",
    ogDescription:
      "Cause-based Group 1 and Group 2 reasoning, anomalies, conditions and named compounds for JEE Advanced.",
  },
};

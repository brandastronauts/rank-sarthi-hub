import type { ChapterContent } from "@/content/types";

/**
 * Redox Reactions — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, or PYQ-count claims are asserted.
 * - contentStatus stays "draft" until academic review is recorded.
 * - JEE Main 2026 INCLUDES electronic concepts of oxidation and reduction,
 *   oxidation number assignment, and balancing redox reactions (Unit 7).
 *   JEE Advanced 2026 is PARTIAL OR MERGED: mole and stoichiometric
 *   calculations involving common oxidation-reduction reactions appear in
 *   General Topics, with no separate Redox Reactions heading. This page
 *   owns oxidation-state logic and equation balancing; Electrochemistry
 *   owns cell potential, electrode, and Nernst reasoning.
 */
export const jeeChemistryRedoxReactions: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Redox Reactions",
  slug: "redox-reactions",
  url: "/jee/chemistry/redox-reactions",
  canonicalIntent:
    "Identify electron transfer or oxidation-number change, select a balancing method, and verify atoms and charge without confusing bookkeeping with mechanism.",

  heroChips: [
    "JEE Main 2026: named chapter in Unit 7",
    "JEE Advanced 2026: merged into General Topics",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Oxidation is loss of electrons or an increase in oxidation number. Reduction is gain of electrons or a decrease in oxidation number.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "To solve a redox problem, assign oxidation numbers, identify the oxidised and reduced species, choose a permitted balancing method for the stated medium, and finish by checking every atom and the total charge on both sides.",
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
      description: "Mole ratios from a balanced redox equation are used for stoichiometric calculations.",
    },
    {
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Formula writing and ion identity rely on atomic composition and common valencies.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Electronegativity trends support oxidation-number assignment rules.",
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
    unit: "Redox Reactions",
    topics: [
      "Electronic concepts of oxidation and reduction",
      "Redox reactions",
      "Oxidation number and its assignment",
      "Balancing redox reactions",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "species-identity",
      title: "1. Write the actual reacting species before assigning numbers",
      keyIdea: "Oxidation numbers apply to real ions and molecules, not to an incomplete formula.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Before assigning oxidation numbers, write the correct ionic or molecular formulae exactly as they occur in the reaction. Assigning numbers to an incomplete or wrong species produces a wrong ledger.",
            },
          ],
        },
      ],
    },
    {
      id: "oxidation-number-ledger",
      title: "2. Track only the atoms whose oxidation number changes",
      keyIdea: "A useful ledger marks the atoms undergoing a change, not every atom in the formula.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Marking every atom in a large formula is unnecessary and error-prone. Identify only the atoms that change oxidation state between reactants and products.",
            },
          ],
        },
      ],
    },
    {
      id: "roles",
      title: "3. Name the oxidising agent and the reducing agent correctly",
      keyIdea: "The species oxidised is the reducing agent; the species reduced is the oxidising agent.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The species that loses electrons and is oxidised acts as the reducing agent for the other species. The species that gains electrons and is reduced acts as the oxidising agent. These names describe the effect on the other species, not the species' own change.",
            },
          ],
        },
      ],
    },
    {
      id: "medium",
      title: "4. Confirm the medium before balancing",
      keyIdea: "Acidic, basic, neutral, molten, and non-aqueous settings permit different balancing steps.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The stated medium determines which species, such as hydrogen ion or hydroxide ion, may legitimately appear in the balanced equation. Balancing before confirming the medium risks introducing a species that is not permitted.",
            },
          ],
        },
      ],
    },
    {
      id: "electron-equivalence",
      title: "5. Match total electrons lost to total electrons gained",
      keyIdea: "A redox equation is only balanced in electron terms when the two totals are equal.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The number of electrons released by the species oxidised must equal the number of electrons accepted by the species reduced. This equivalence is used to scale the half-reactions before combining them.",
            },
          ],
        },
      ],
    },
    {
      id: "audit",
      title: "6. Audit atoms and charge before accepting the equation",
      keyIdea: "A redox equation is incomplete until both the atom count and the total charge match on each side.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "After combining half-reactions, check that every element balances and that the total charge on the reactant side equals the total charge on the product side. Only then may the coefficients be used for stoichiometric calculations.",
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
          "Oxidation-state reasoning and the balancing of redox equations by oxidation-number and half-reaction methods.",
        ],
        [
          "What is the central method choice?",
          "Assign oxidation numbers, identify the oxidised and reduced species, confirm the medium, and choose a permitted balancing method before finishing with an atom-and-charge audit.",
        ],
        [
          "Where do most mistakes begin?",
          "Missing an oxidation-number exception, mixing acidic and basic medium species, and using an unbalanced equation for mole ratios.",
        ],
        [
          "What should come before Redox Reactions?",
          "Mole Concept for stoichiometric handling, and Atomic Structure and Periodic Table for formula and electronegativity foundations.",
        ],
        [
          "What comes after it?",
          "Electrochemistry develops cell potential, electrode, and Nernst reasoning that build on redox roles.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Redox Reactions",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Electronic concepts of oxidation and reduction, oxidation number assignment, balancing redox reactions",
          "INCLUDED. Explicitly listed in Unit 7.",
          "PARTIAL OR MERGED. No separate Redox Reactions heading is listed.",
          "Learn oxidation-number assignment and both balancing methods as a Main-named chapter.",
        ],
        [
          "Mole and stoichiometric calculations involving common redox reactions",
          "Covered as part of Unit 7 balancing and stoichiometry.",
          "Explicitly listed within General Topics as calculations involving common oxidation-reduction reactions.",
          "Treat Advanced redox exposure as a stoichiometric application within General Topics, not a standalone chapter.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Redox Reactions",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Ionic formula writing",
          "Write correct ionic formulae for common cations and anions.",
          "Revise valency and ion-naming rules from Atomic Structure.",
        ],
        [
          "Atom and charge conservation",
          "Confirm that atoms and total charge are conserved in a chemical equation.",
          "Practise balancing simple ionic equations.",
        ],
        [
          "Mole ratio use",
          "Use coefficients from a balanced equation as mole ratios.",
          "Revise the coefficient-to-mole relationship from Mole Concept.",
        ],
        [
          "Common ion recognition",
          "Recognise common ions such as permanganate, dichromate, and iron ions.",
          "Review ion names and charges from Periodic Table trends.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the balancing approach before writing coefficients",
      intro: "Match the situation to a balancing method and its mandatory final check.",
      columns: ["Situation", "Preferred start", "Mandatory final check"],
      rows: [
        ["Clear oxidation-number changes in a molecular equation", "Oxidation-number method", "Atoms and charge"],
        ["Ionic reaction in stated acidic or basic medium", "Half-reaction method", "Electrons, atoms, charge, permitted H+ or OH-"],
        ["Disproportionation", "Track the same initial element into two oxidation states", "Separate electron loss and gain"],
        ["Stoichiometric redox calculation", "Balance first, then use coefficients", "Limiting reagent and units"],
      ],
    },
    {
      id: "oxidation-number-rules",
      jump: true,
      slot: "concepts",
      heading: "Oxidation-number rules and exceptions",
      intro: "Condition-aware assignment rules, sourced against the NCERT redox treatment.",
      columns: ["Rule", "Normal value", "Important condition or exception", "Common trap"],
      rows: [
        ["Free element", "0", "Applies to elemental form such as O2, S8, or a metal", "Assigning the usual ionic value to the element"],
        ["Monatomic ion", "Ionic charge", "Exact for a monatomic ion", "Averaging across unrelated ions"],
        ["Fluorine in compounds", "-1", "Highest electronegativity in ordinary compounds", "Forcing another halogen rule onto fluorine"],
        ["Oxygen", "Usually -2", "Peroxides: -1; superoxides: average -1/2; in OF2, oxygen is +2", "Missing an O-O species or an O-F bond"],
        ["Hydrogen", "Usually +1", "In ionic metal hydrides, -1", "Using +1 automatically"],
        ["Sum", "Overall charge", "Zero for a neutral compound; ionic charge for a polyatomic ion", "Forgetting the species charge"],
      ],
    },
  ],

  formulas: [],

  workedExamples: [
    {
      id: "permanganate-iron-acidic",
      prompt:
        "Balance MnO4- + Fe2+ -> Mn2+ + Fe3+ in acidic medium.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Manganese changes from +7 to +2, so it gains five electrons." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Each Fe2+ becomes Fe3+ and loses one electron. Use five iron(II) ions to match the five electrons gained by manganese." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Balance the four oxygen atoms with 4 H2O on the product side." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Balance hydrogen with 8 H+ on the reactant side." }],
        },
        {
          type: "paragraph",
          children: [{ text: "The balanced ionic equation is MnO4- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+. The left charge is -1+8+10 = +17. The right charge is +2+15 = +17. Atoms and charge both balance." }],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "Do not transfer this equation unchanged to basic medium." }],
        },
      ],
      answer: "MnO4- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+",
    },
  ],

  mistakes: [
    {
      id: "agent-role-reversed",
      mistake: "Calling the oxidising agent the species that is oxidised.",
      why: [{ type: "paragraph", children: [{ text: "The oxidising agent is the species that is itself reduced, while causing another species to be oxidised. Reversing this mixes up the roles entirely." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State which species loses electrons and which gains electrons before naming the agents." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "oxidation-number-as-covalent-charge",
      mistake: "Treating oxidation number as a measured ionic charge in every covalent compound.",
      why: [{ type: "paragraph", children: [{ text: "Oxidation number is a bookkeeping convention based on electronegativity, not always the true ionic charge in a covalent molecule." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Apply the assignment rules consistently rather than assuming a literal ionic charge." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "missing-oxygen-hydrogen-exception",
      mistake: "Missing peroxide, superoxide, hydride, or oxygen-fluoride exceptions when assigning oxidation numbers.",
      why: [{ type: "paragraph", children: [{ text: "The default values for oxygen and hydrogen do not apply in these specific compound classes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check for an O-O bond, a metal hydride, or an oxygen-fluorine bond before applying the default rule." }] }],
      errorType: "recall-gap",
    },
    {
      id: "wrong-medium-species",
      mistake: "Adding H+ in a final equation specified as basic medium.",
      why: [{ type: "paragraph", children: [{ text: "A basic-medium equation should use hydroxide ion and water, not hydrogen ion, in the final balanced form." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the stated medium first and use only the species permitted for that medium." }] }],
      errorType: "decision-error",
    },
    {
      id: "balance-order-wrong",
      mistake: "Balancing oxygen and hydrogen before deciding the medium.",
      why: [{ type: "paragraph", children: [{ text: "The permitted balancing species for oxygen and hydrogen differ between acidic and basic medium, so the medium decision must come first." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the medium, then balance charge-bearing atoms, then oxygen and hydrogen." }] }],
      errorType: "decision-error",
    },
    {
      id: "unbalanced-mole-ratio",
      mistake: "Using an unbalanced equation for mole ratios.",
      why: [{ type: "paragraph", children: [{ text: "An unbalanced equation does not conserve atoms or charge, so its coefficients do not represent valid mole ratios." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Complete the atom-and-charge audit before using any coefficient for a stoichiometric calculation." }] }],
      errorType: "execution-error",
    },
    {
      id: "atoms-checked-not-charge",
      mistake: "Checking atoms but not total charge when confirming a balanced redox equation.",
      why: [{ type: "paragraph", children: [{ text: "An equation can conserve atoms while still having unequal charge on the two sides if electron transfer was not correctly scaled." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always audit total charge on both sides as a separate, final check." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Electrochemistry",
      url: "/jee/chemistry/electrochemistry",
      relation: "forward",
      description: "Extends redox roles into cell potential, electrode, and Nernst-equation reasoning.",
    },
    {
      label: "d and f Block Elements",
      url: "/jee/chemistry/d-and-f-block-elements",
      relation: "forward",
      description: "Uses redox behaviour of transition-metal ions in aqueous chemistry.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Provides the mole-ratio method used once a redox equation is balanced.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "related",
      description: "Electronegativity trends support oxidation-number assignment logic.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "related",
      description: "Shares ionic-species reasoning used in redox medium decisions.",
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
      question: "What is the fastest reliable check on a balanced redox equation?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Confirm conservation of every element and equality of total charge on the two sides." },
          ],
        },
      ],
    },
    {
      question: "Can oxidation number be fractional?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "An average oxidation number can be fractional when equivalent bookkeeping over several atoms produces an average. It is not automatically the charge on each individual atom.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Redox Reactions in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Redox calculations are included in General Topics, but there is no separate Redox Reactions heading." },
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
  ],
  sourceNote:
    "An official question record identifies exam, year, paper or session, question identifier, reaction medium, tested operation, and official URL. Advanced questions are tagged to the General Topics redox-calculation scope. No published count or trend is asserted.",
  contributorPolicy: [
    "Contributor fields remain unassigned until a centralized, visible, verified profile is linked.",
  ],

  contentStatus: "draft",
  meta: {
    title: "Redox Reactions for JEE 2026: Oxidation Numbers and Balancing",
    description:
      "Master JEE redox through oxidation numbers, electron transfer, acidic and basic balancing logic, worked checks, and common mistakes.",
    ogTitle: "Redox Reactions for JEE 2026",
    ogDescription: "A charge-safe method for oxidation numbers, redox roles, equation balancing, and stoichiometric use.",
    ogType: "article",
  },
};

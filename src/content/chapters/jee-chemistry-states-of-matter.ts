import type { ChapterContent } from "@/content/types";

/**
 * States of Matter — T06 production content.
 *
 * Evidence discipline:
 * - The JEE Main 2026 Chemistry syllabus has no named States of Matter unit.
 *   JEE Advanced 2026 has an explicit "States of Matter: Gases and Liquids"
 *   section covering gas models, intermolecular interactions, vapour
 *   pressure, surface tension and viscosity. examVariant is "Advanced" and
 *   this Main-absence boundary is stated plainly rather than implied.
 * - No weightage, trend or PYQ-count records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 */
export const jeeChemistryStatesOfMatter: ChapterContent = {
  exam: "JEE",
  examVariant: "Advanced",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "States of Matter",
  slug: "states-of-matter",
  url: "/jee/chemistry/states-of-matter",
  canonicalIntent:
    "Select the correct particle and intermolecular-force model for gases and liquids before choosing a gas law or a property relationship such as vapour pressure, surface tension or viscosity.",

  heroChips: [
    "Listed in JEE Advanced 2026",
    "Not listed as a named unit in JEE Main 2026 Chemistry",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A States of Matter problem is a model-selection problem. Ask how freely the particles move, how their separation compares with molecular size, whether intermolecular attractions matter, and which macroscopic variable is observed.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Use an ideal-gas model only when its assumptions are acceptable. Use an intermolecular-force model for liquid vapour pressure, surface tension, viscosity, and real-gas behaviour.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "The official JEE Main 2026 Chemistry syllabus does not list States of Matter as a unit. This page must not be read as current Main scope.",
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
      description: "Amount of substance and unit handling used across every gas and liquid property relation.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Molecular polarity and intermolecular forces that decide when the ideal-gas model fails.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "prerequisite",
      description: "Related composition and vapour-pressure reasoning developed further in this chapter.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for the Chemistry chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "States of Matter: Gases and Liquids (JEE Advanced 2026 only; not a named JEE Main 2026 unit)",
    topics: [
      "Gas laws and the ideal-gas model",
      "Real-gas behaviour and departures from ideality",
      "Kinetic theory of gases and molecular velocities",
      "Partial pressure and diffusion",
      "Intermolecular interactions",
      "Liquid vapour pressure",
      "Surface tension",
      "Viscosity",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "particle-freedom",
      title: "1. Compare particle freedom before selecting a model",
      keyIdea: "Gas particles explore the container; liquid particles remain close but can rearrange.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Gas particles explore the container; liquid particles remain close but can rearrange. This difference in freedom of motion is the first decision point for choosing a model.",
            },
          ],
        },
      ],
    },
    {
      id: "energy-competition",
      title: "2. Weigh thermal motion against attractive interactions",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Thermal motion tends to disperse particles. Attractive interactions tend to keep them close. Which effect dominates determines whether a gas, liquid, or intermediate behaviour is observed.",
            },
          ],
        },
      ],
    },
    {
      id: "idealisation",
      title: "3. Know what the ideal-gas model neglects",
      keyIdea: "The ideal-gas model neglects particle volume and intermolecular forces.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The ideal-gas model neglects particle volume and intermolecular forces. It is a simplification, valid only under conditions where those neglected effects stay small.",
            },
          ],
        },
      ],
    },
    {
      id: "departure",
      title: "4. Recognise when real-gas behaviour appears",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Real behaviour appears when the neglected particle volume and intermolecular attractions are no longer small, typically at high pressure or low temperature.",
            },
          ],
        },
      ],
    },
    {
      id: "liquid-interface",
      title: "5. Treat the liquid surface as a distinct environment",
      keyIdea: "Molecules at a surface have a different balance of attractions from molecules in the bulk.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Molecules at a surface have a different balance of attractions from molecules in the bulk. This imbalance is the physical basis of surface tension.",
            },
          ],
        },
      ],
    },
    {
      id: "flow",
      title: "6. Treat viscosity as condition-dependent",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Viscosity describes resistance to flow and is condition-dependent, changing with temperature and with the identity of the fluid.",
            },
          ],
        },
      ],
    },
    {
      id: "model-handoff",
      title: "7. Hand off to Gaseous State for equation-level gas depth",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Once a problem is identified as gas-law or kinetic-theory depth, this chapter hands off to Gaseous State, which owns the equation-level treatment of that model.",
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
          "Choosing the correct particle and intermolecular-force model for gases and liquids, and selecting the matching property relation for vapour pressure, boiling, surface tension, or viscosity.",
        ],
        [
          "What is the central method choice?",
          "Decide particle freedom and the balance between thermal motion and attraction, confirm whether the ideal-gas model is acceptable, and only then select a gas-law, vapour-pressure, surface-tension, or viscosity relation.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating vapour pressure as a fixed material constant independent of temperature, saying boiling begins when vapour pressure is zero, and treating surface tension as a bulk pressure.",
        ],
        [
          "What should come before States of Matter?",
          "Mole Concept for amount of substance, Chemical Bonding for intermolecular forces, and Solutions for related composition and vapour-pressure reasoning.",
        ],
        [
          "What comes after it?",
          "Gaseous State develops equation-level gas-law and kinetic-theory depth; Thermodynamics connects state properties to energy relations.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for States of Matter",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. States of Matter is an Advanced-only current-syllabus umbrella, not a separate JEE Main 2026 unit.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "States of Matter as a named unit",
          "No named States of Matter unit appears in the official Main syllabus. Related ideas occur within other units, but they do not establish this chapter as current Main scope.",
          "Explicitly listed as States of Matter: Gases and Liquids, covering gas laws, ideal and real-gas ideas, kinetic theory, velocities, partial pressure, diffusion, intermolecular interactions, and liquid vapour pressure, surface tension, and viscosity.",
          "Treat this as an Advanced-only current-cycle chapter, not a Main 2026 topic.",
        ],
        [
          "Overlaps with other Main units",
          "If an official Main item tests an overlapping concept from another current unit, that item belongs to that unit, not to States of Matter.",
          "Not applicable; the section is self-contained in the Advanced syllabus.",
          "Tag any overlapping Main content to its own unit rather than calling it States of Matter scope.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before States of Matter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Amount of substance",
          "Convert between mass, moles and particle count.",
          "Revise Mole Concept before working with any gas or liquid property.",
        ],
        [
          "Temperature in kelvin",
          "Use absolute temperature consistently in gas and vapour-pressure relations.",
          "Practise Celsius-to-Kelvin conversion before substituting into any relation.",
        ],
        [
          "Pressure and volume units",
          "Convert between common pressure and volume unit systems.",
          "Review unit conversion for pressure (Pa, atm) and volume (L, m^3).",
        ],
        [
          "Molecular polarity and intermolecular forces",
          "Predict whether a substance has significant dipole-dipole, hydrogen-bonding, or dispersion interactions.",
          "Revisit Chemical Bonding before deciding whether ideal-gas or real-gas behaviour applies.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before the relation",
      intro: "Match the question signal to the first model and its required condition check.",
      columns: ["Question signal", "Start with", "Required condition check"],
      rows: [
        ["Pressure, volume, amount, temperature", "Gas equation", "Kelvin scale, units, ideality"],
        ["Gas mixture", "Partial-pressure model", "Non-reacting ideal-mixture assumption"],
        ["High pressure or low temperature", "Real-gas model", "Molecular volume and attraction"],
        ["Evaporation or boiling", "Vapour-pressure model", "Temperature and external pressure"],
        ["Surface formation or droplets", "Surface-tension model", "Interface, temperature, contamination"],
        ["Resistance to liquid flow", "Viscosity model", "Temperature and fluid identity"],
      ],
    },
    {
      id: "property-records",
      jump: true,
      slot: "concepts",
      heading: "Condition-aware property records",
      columns: ["Record", "Meaning", "Units", "Conditions and limitation"],
      rows: [
        [
          "Vapour pressure",
          "Equilibrium pressure of vapour above its liquid in a closed system at a stated temperature",
          "Pa in SI",
          "Pure substance and temperature must be identified; not a fixed material constant independent of temperature",
        ],
        [
          "Normal boiling point",
          "Temperature at which vapour pressure equals standard atmospheric pressure",
          "K in SI reporting",
          "Defined using the specified standard pressure; boiling does not begin when vapour pressure reaches zero",
        ],
        [
          "Surface tension (gamma)",
          "Force per unit length, equivalently surface energy per unit area under the appropriate definition",
          "N m^-1, equivalent to J m^-2",
          "Interface and temperature matter; it is not a bulk pressure",
        ],
        [
          "Dynamic viscosity (eta)",
          "Proportionality describing internal resistance to shear flow for a Newtonian fluid",
          "Pa s",
          "Temperature and fluid model matter; not every fluid behaves as an ideal Newtonian fluid",
        ],
      ],
    },
  ],

  workedExamples: [
    {
      id: "attraction-and-vapour-pressure",
      prompt:
        "Explain why stronger intermolecular attraction usually lowers vapour pressure at the same temperature.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Vapour pressure at equilibrium reflects the balance between molecules escaping into the vapour phase and molecules returning to the liquid." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Stronger intermolecular attraction raises the energy barrier for a molecule to escape the liquid surface." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "At the same temperature, fewer molecules have enough energy to escape and remain in the vapour phase at equilibrium, so the equilibrium vapour pressure is lower." },
          ],
        },
      ],
      answer: "At the same temperature, fewer molecules have enough energy to escape and remain in the vapour phase at equilibrium, so vapour pressure is lower for stronger intermolecular attraction.",
    },
  ],

  mistakes: [
    {
      id: "main-scope-error",
      mistake: "Treating States of Matter as a current JEE Main 2026 Chemistry unit.",
      why: [{ type: "paragraph", children: [{ text: "No named States of Matter unit appears in the official Main syllabus, even though related ideas occur within other units." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming Main-exam relevance." }] }],
      errorType: "needs-review",
    },
    {
      id: "vapour-pressure-constant",
      mistake: "Treating vapour pressure as a fixed material constant independent of temperature.",
      why: [{ type: "paragraph", children: [{ text: "Vapour pressure is an equilibrium property defined at a stated temperature and changes with it." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always state the temperature alongside any vapour-pressure value used or compared." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "boiling-zero-vapour-pressure",
      mistake: "Saying boiling begins when vapour pressure is zero.",
      why: [{ type: "paragraph", children: [{ text: "The normal boiling point is defined as the temperature where vapour pressure equals standard atmospheric pressure, not zero." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare vapour pressure to the external (often standard atmospheric) pressure to define boiling." }] }],
      errorType: "recall-gap",
    },
    {
      id: "surface-tension-as-pressure",
      mistake: "Treating surface tension as a bulk pressure.",
      why: [{ type: "paragraph", children: [{ text: "Surface tension is a force per unit length (or energy per unit area) at an interface, not a pressure acting throughout the bulk." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep surface tension's units (N/m or J/m^2) distinct from bulk pressure units (Pa)." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "newtonian-assumption",
      mistake: "Assuming all fluids behave as ideal Newtonian fluids when applying a viscosity relation.",
      why: [{ type: "paragraph", children: [{ text: "Dynamic viscosity as a single proportionality constant is defined for a Newtonian fluid; not every real fluid satisfies that model." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the fluid and temperature model before applying a simple viscosity relation." }] }],
      errorType: "decision-error",
    },
    {
      id: "real-gas-comparison-without-support",
      mistake: "Making a real-gas comparison or current-scope statement without primary support.",
      why: [{ type: "paragraph", children: [{ text: "Comparative claims and current-scope statements must trace to the official syllabus or verified academic material." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the property record and its source note before repeating a comparison or scope claim." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Gaseous State",
      url: "/jee/chemistry/gaseous-state",
      relation: "forward",
      description: "Owns equation-level gas-law and kinetic-theory depth once the model is selected here.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "forward",
      description: "Connects state properties developed here to energy relations.",
    },
    {
      label: "Solutions",
      url: "/jee/chemistry/solutions",
      relation: "related",
      description: "Shares vapour-pressure and composition reasoning in a solution-specific context.",
    },
    {
      label: "Surface Chemistry",
      url: "/jee/chemistry/surface-chemistry",
      relation: "related",
      description: "Related interface concepts building on the liquid-surface ideas introduced here.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Amount of substance used across every gas and liquid property relation.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Molecular polarity and intermolecular forces used to decide model choice.",
    },
  ],

  links: [
    {
      label: "JEE Advanced syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official syllabus hub, including the JEE Advanced document.",
    },
    {
      label: "JEE Chemistry syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Official Chemistry scope for Main and Advanced, showing this Advanced-only boundary.",
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
      question: "Is States of Matter in JEE Main 2026 Chemistry?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No named States of Matter unit appears in the official Main syllabus." }],
        },
      ],
    },
    {
      question: "Is States of Matter in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Yes. The official section covers gases, liquids, intermolecular interactions, and specified gas and liquid properties." },
          ],
        },
      ],
    },
    {
      question: "Why does stronger intermolecular attraction usually lower vapour pressure?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "At the same temperature, fewer molecules have enough energy to escape and remain in the vapour phase at equilibrium." },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for States of Matter?",
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
    "jee-advanced-paper-archive",
    "ncert-chem-syllabus",
    "ncert-chem-exemplar",
  ],
  sourceNote:
    "Evidence boundary: this page states plainly that no named States of Matter unit appears in the current JEE Main 2026 Chemistry syllabus, and that the current JEE Advanced 2026 syllabus explicitly includes gases, liquids and intermolecular-interaction scope. Any official Main item testing an overlapping concept is tagged to its own current unit, not treated as States of Matter scope. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Physical Chemistry educator who teaches particle models and intermolecular forces.",
    "Academic reviewer: postgraduate qualification in Physical Chemistry, Chemical Physics, or a closely related discipline, with documented subject expertise in molecular thermodynamics and fluid properties.",
    "Independent checker: a chemistry educator or subject editor who verifies every model assumption, definition, unit and comparative claim separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer", "advanced-only-not-main"],

  meta: {
    title: "States of Matter for JEE Advanced 2026: Gases and Liquids",
    description:
      "States of Matter is listed in JEE Advanced 2026 and has no named unit in JEE Main 2026 Chemistry. Learn when to use ideal-gas, real-gas, intermolecular-force, vapour-pressure, surface-tension, and viscosity models. No invented weightage.",
    ogTitle: "States of Matter for JEE Advanced: choose the particle model first",
    ogDescription:
      "A model-selection guide to gases, liquids, intermolecular forces, and measurable properties for JEE Advanced Chemistry.",
  },
};

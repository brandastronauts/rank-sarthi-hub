import type { ChapterContent } from "@/content/types";

/**
 * Chemistry in Everyday Life — T06 production content.
 *
 * Scope check: not listed in JEE Main 2026. JEE Advanced 2026 includes
 * drug-target interaction; therapeutic action and examples (structures
 * excluded) for six named drug classes; artificial-sweetener names only;
 * and soaps, detergents and cleansing action. This is an Advanced-only
 * 2026 topic, not a separate Main 2026 unit.
 *
 * CRITICAL safety boundary: this page is syllabus-level chemistry only.
 * It contains no dosage, no treatment or personal health advice, and no
 * drug recommendation of any kind.
 */
export const jeeChemistryChemistryEverydayLife: ChapterContent = {
  exam: "JEE",
  examVariant: "JEE Advanced only (not listed in JEE Main 2026)",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Chemistry in Everyday Life",
  slug: "chemistry-everyday-life",
  url: "/jee/chemistry/chemistry-everyday-life",
  canonicalIntent:
    "Understand the chemical principle behind drug-target interaction, textbook therapeutic classes, artificial sweeteners, soaps, detergents and cleansing action within the current JEE Advanced 2026 scope, as syllabus-level chemistry only.",

  heroChips: [
    "JEE Advanced 2026 only; not listed in JEE Main 2026",
    "Syllabus-level chemistry only, no medical advice",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Everyday Chemistry connects molecular structure and intermolecular interaction to a function. For drug questions, stay within the official educational categories and distinguish a target interaction from personal treatment. For cleansing, identify the hydrophilic and hydrophobic parts of the agent, the nature of the dirt, the medium, and whether hard-water ions interfere.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Educational safety boundary: this page explains syllabus chemistry only. It does not recommend a medicine, dose, treatment, contraception method, or substitute for professional medical advice.",
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
      description: "Polarity, ionic and covalent interactions used to explain drug-target and surfactant behaviour.",
    },
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Functional groups used to describe interaction sites.",
    },
    {
      label: "Biomolecules",
      url: "/jee/chemistry/biomolecules",
      relation: "related",
      description: "Biological macromolecules; this chapter does not own biomolecule structure itself.",
    },
    {
      label: "Surface Chemistry",
      url: "/jee/chemistry/surface-chemistry",
      relation: "related",
      description: "Micelle theory that underlies detergent and soap cleansing behaviour.",
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
    unit: "Chemistry in Everyday Life (JEE Advanced only; not listed in JEE Main 2026)",
    topics: [
      "Drug-target interaction",
      "Therapeutic action and examples (structures excluded) for antacids, antihistamines, tranquilizers, analgesics, antimicrobials and antifertility drugs",
      "Artificial sweeteners (names only)",
      "Soaps, detergents and cleansing action",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "chemical-entity",
      title: "1. Identify the molecule or species and its relevant features",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Identify the molecule or ionic species and the functional features relevant to its interaction, before discussing its action." },
          ],
        },
      ],
    },
    {
      id: "target-or-interface",
      title: "2. A drug acts through a target; a cleanser acts at an interface",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "A drug acts through a biological target or pathway. A cleanser acts at water-oil and water-solid interfaces. Keeping this distinction clear prevents mixing pharmacological and surfactant reasoning." },
          ],
        },
      ],
    },
    {
      id: "interaction",
      title: "3. Interaction depends on shape, charge, polarity and hydrogen bonding",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Shape, charge, polarity, hydrogen bonding and hydrophobic interaction influence how a molecule associates with its target or interface." },
          ],
        },
      ],
    },
    {
      id: "class-and-action",
      title: "4. A therapeutic class describes intended action, not a personal guarantee",
      keyIdea: "Classification chemistry is educational; it is not a statement about any individual's treatment outcome.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "A therapeutic class describes the intended chemical action associated with that category. It does not guarantee an outcome for any individual and is not a substitute for medical advice." },
          ],
        },
      ],
    },
    {
      id: "application-boundary",
      title: "5. Textbook examples support classification, not self-medication",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Named textbook examples exist to illustrate a chemical class, not to recommend or endorse self-medication." },
          ],
        },
      ],
    },
    {
      id: "cleansing-assembly",
      title: "6. Amphiphilic molecules orient at an interface to remove oily matter",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Amphiphilic molecules orient so that non-polar regions associate with oily matter while ionic or polar regions interact with water, enabling removal of oily material." },
          ],
        },
      ],
    },
    {
      id: "medium-effect",
      title: "7. Hard-water ions can reduce soap performance",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Calcium and magnesium ions can reduce soap performance by forming poorly soluble salts with fatty-acid soap ions. Suitable synthetic detergents are less susceptible to this specific problem." },
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
          "Connecting molecular interaction to function for drug-target chemistry, artificial sweeteners, soaps, detergents and cleansing, strictly at the syllabus level.",
        ],
        [
          "What is the central method choice?",
          "Identify the molecule or species, the target or interface, and the interaction type, before naming a class or explaining cleansing behaviour.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating this as JEE Main scope, giving medicine advice, or adding molecular structures the syllabus explicitly excludes.",
        ],
        [
          "What should come before this chapter?",
          "Chemical Bonding and Organic Basics, plus familiarity with Biomolecules and Surface Chemistry for context.",
        ],
        [
          "What comes after it?",
          "Environmental Chemistry and Polymers continue the applied Chemistry path.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Chemistry in Everyday Life",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. Chemistry in Everyday Life is an Advanced-only 2026 topic and is not a separate Main 2026 unit.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Chemistry in Everyday Life as a whole",
          "NOT LISTED. Not present in the current official Main Chemistry syllabus.",
          "INCLUDED. Drug-target interaction; therapeutic action and examples (structures excluded) for six named drug classes; artificial-sweetener names only; and soaps, detergents and cleansing action.",
          "Do not treat this chapter as current Main scope.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before this chapter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Polarity and intermolecular interaction",
          "Explain hydrogen bonding, ionic and covalent interaction between molecules.",
          "Revise Chemical Bonding.",
        ],
        [
          "Functional groups",
          "Identify functional groups relevant to interaction sites.",
          "Revise Organic Basics.",
        ],
        [
          "Amphiphilic molecules",
          "Recognise a hydrophilic and a hydrophobic region within one molecule.",
          "Revise Surface Chemistry micelle theory for context.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: classification before conclusion",
      intro: "Match the question type to the correct starting point, always respecting the educational safety boundary.",
      columns: ["Question type", "Start with", "Required boundary"],
      rows: [
        ["Drug category", "Intended therapeutic action", "No dosage, recommendation or unsupported mechanism"],
        ["Drug-target statement", "Interaction type and target role", "Binding does not alone establish clinical outcome"],
        ["Artificial sweetener", "Name recognition", "Current scope says names only"],
        ["Soap versus detergent", "Head group and hydrophobic chain", "Medium and hard-water ions"],
        ["Cleansing action", "Interface and aggregate orientation", "Suitable concentration and medium"],
      ],
    },
    {
      id: "scope-safe-records",
      jump: true,
      slot: "concepts",
      heading: "Scope-safe knowledge records",
      columns: ["Record", "Chemistry meaning", "Official depth", "Boundary or trap"],
      rows: [
        [
          "Drug-target interaction",
          "Molecular recognition and interaction can alter a biological process.",
          "Elementary concept.",
          "Do not turn binding into dosage or patient advice.",
        ],
        [
          "Antacid",
          "Educational class associated with reducing excess gastric acidity.",
          "Therapeutic action and examples, no structures.",
          "Do not recommend a product or regimen.",
        ],
        [
          "Antihistamine",
          "Educational class that reduces effects mediated by histamine receptors.",
          "Therapeutic action and examples, no structures.",
          "Receptor selectivity and clinical use require qualified review.",
        ],
        [
          "Tranquilizer",
          "Textbook therapeutic class affecting the central nervous system.",
          "Therapeutic action and examples, no structures.",
          "Avoid loose everyday use of the label.",
        ],
        [
          "Analgesic",
          "Educational class used to reduce pain.",
          "Therapeutic action and examples, no structures.",
          "Do not equate all analgesics in mechanism or risk.",
        ],
        [
          "Antimicrobial",
          "Class that inhibits or kills microorganisms through varied mechanisms.",
          "Therapeutic action and examples, no structures.",
          "Antibiotic is not a synonym for every antimicrobial.",
        ],
        [
          "Antifertility drug",
          "Textbook class used to prevent conception through specified biological action.",
          "Therapeutic action and examples, no structures.",
          "No personal recommendation or regimen.",
        ],
        [
          "Artificial sweeteners",
          "Sweet-tasting substances used as sugar alternatives.",
          "Names only for Advanced.",
          "Do not add health, safety or superiority claims without current authoritative evidence.",
        ],
        [
          "Soap",
          "Sodium or potassium salts of long-chain fatty acids in the standard textbook model.",
          "Structure and cleansing action.",
          "Hard-water ions can form poorly soluble salts.",
        ],
        [
          "Detergent",
          "Synthetic surfactant class with a hydrophobic part and an ionic or polar hydrophilic part.",
          "Structure family and cleansing action.",
          "Do not call every surfactant a soap.",
        ],
      ],
      note: "Named NCERT examples for the six drug classes and artificial sweeteners require reviewer sign-off on the current edition, spelling, classification and medical-safety wording before an expandable example list is added. Sources: JEE Advanced 2026 syllabus and NCERT Chemistry in Everyday Life exemplar, linked in the sources section below.",
    },
  ],

  workedExamples: [
    {
      id: "soap-cleansing-mechanism",
      prompt: "Explain, at the syllabus level, how soap removes oily material from a surface.",
      steps: [
        { type: "paragraph", children: [{ text: "A soap ion has a non-polar hydrocarbon region and an ionic carboxylate region." }] },
        { type: "paragraph", children: [{ text: "In water and under suitable conditions, the non-polar regions associate with oily material while ionic regions remain exposed to water." }] },
        { type: "paragraph", children: [{ text: "Agitation helps divide the oily material into small, surfactant-stabilised droplets that can remain dispersed and be carried away with water." }] },
        { type: "paragraph", children: [{ text: "In hard water, calcium or magnesium ions can form poorly soluble fatty-acid salts, reducing the amount of soap available for cleansing." }] },
      ],
      answer: "The mechanism is an interface and aggregation argument; saying only that soap dissolves grease is too imprecise.",
    },
  ],

  mistakes: [
    {
      id: "main-scope-overclaim",
      mistake: "Calling Chemistry in Everyday Life current JEE Main 2026 scope.",
      why: [{ type: "paragraph", children: [{ text: "It is not listed in the official Main Chemistry syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming Main-exam relevance." }] }],
      errorType: "needs-review",
    },
    {
      id: "medical-advice-overreach",
      mistake: "Giving medicine advice from a Chemistry classification page.",
      why: [{ type: "paragraph", children: [{ text: "This page provides syllabus-level chemical education, not personal medical guidance, dosage or treatment recommendations." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep every answer at the level of classification and mechanism, and route any personal health question to a qualified professional." }] }],
      errorType: "needs-review",
    },
    {
      id: "class-uniformity-assumption",
      mistake: "Treating all drugs within one class as identical in mechanism, efficacy or safety.",
      why: [{ type: "paragraph", children: [{ text: "A therapeutic class describes a shared intended action, not identical chemical structure or clinical behaviour across every member." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat class membership as a shared intended action only, not as proof of identical behaviour." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "structure-scope-violation",
      mistake: "Adding molecular structures when the Advanced syllabus explicitly excludes them from the listed drug-category scope.",
      why: [{ type: "paragraph", children: [{ text: "The official syllabus lists therapeutic action and examples for the six drug classes with structures explicitly excluded." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Discuss classification and action without introducing structures for these drug categories." }] }],
      errorType: "decision-error",
    },
    {
      id: "sweetener-health-claim",
      mistake: "Publishing unsourced current health claims about sweeteners.",
      why: [{ type: "paragraph", children: [{ text: "Current health and safety claims require a dated authoritative source separate from this syllabus-level chapter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Limit sweetener content to name recognition as specified by the current Advanced scope." }] }],
      errorType: "needs-review",
    },
    {
      id: "soap-detergent-mislabel",
      mistake: "Calling a detergent a soap.",
      why: [{ type: "paragraph", children: [{ text: "Soaps are fatty-acid salts, while detergents are a distinct synthetic surfactant class." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the chemical class (fatty-acid salt versus synthetic surfactant) before naming the agent." }] }],
      errorType: "recall-gap",
    },
    {
      id: "hydrophobic-orientation-error",
      mistake: "Saying the hydrophobic tail points into water in the standard cleansing model.",
      why: [{ type: "paragraph", children: [{ text: "The hydrophobic tail associates with oily material, while the ionic or polar head interacts with water." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Re-check the orientation of the amphiphilic molecule at the oil-water interface before describing the mechanism." }] }],
      errorType: "execution-error",
    },
    {
      id: "hard-water-ion-omission",
      mistake: "Ignoring calcium and magnesium ions in hard-water questions.",
      why: [{ type: "paragraph", children: [{ text: "These ions can form poorly soluble salts with soap, reducing effective cleansing, which is a specific and testable effect." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check for hard-water ions whenever a question compares soap and detergent performance." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Biomolecules",
      url: "/jee/chemistry/biomolecules",
      relation: "related",
      description: "Owns biological macromolecule structure; this chapter does not repeat that scope.",
    },
    {
      label: "Surface Chemistry",
      url: "/jee/chemistry/surface-chemistry",
      relation: "related",
      description: "Owns micelle theory, which underlies the cleansing mechanism discussed here.",
    },
    {
      label: "Environmental Chemistry",
      url: "/jee/chemistry/environmental-chemistry",
      relation: "forward",
      description: "Another Advanced-only 2026 topic in the applied Chemistry path.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Polarity and interaction concepts used across this chapter.",
    },
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Functional-group foundation used to describe interaction sites.",
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
      question: "Is Chemistry in Everyday Life in JEE Main 2026?",
      answer: [
        { type: "paragraph", children: [{ text: "No. It is not listed in the current official Main Chemistry syllabus." }] },
      ],
    },
    {
      question: "Is it in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. The official scope includes drug-target interaction, six therapeutic classes with examples but no structures, names of artificial sweeteners, and cleansing by soaps and detergents.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does soap work poorly in hard water?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Calcium and magnesium ions can form poorly soluble salts with fatty-acid soap ions, reducing effective surfactant availability.",
            },
          ],
        },
      ],
    },
    {
      question: "Does this page recommend medicines?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. It provides syllabus-level chemical education only, with no dosage, treatment or personal medical advice." }],
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
    "Evidence boundary: Chemistry in Everyday Life is a JEE Advanced-only 2026 topic and is not a separate JEE Main 2026 unit. This page is syllabus-level chemistry only; it contains no dosage, treatment or personal medical advice, and no chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Organic or Applied Chemistry educator experienced in structure-interaction explanations and safety-bounded teaching.",
    "Academic reviewer: postgraduate qualification in Medicinal Chemistry, Pharmaceutical Chemistry, Organic Chemistry, or a closely related discipline; the cleansing module may additionally be reviewed by a Physical or Colloid Chemist.",
    "Independent checker: a chemistry educator or subject editor who verifies classifications, explicit exclusion of structures, and the medical-safety wording separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer", "medical-safety-boundary"],

  meta: {
    title: "Chemistry in Everyday Life for JEE Advanced 2026",
    description:
      "Learn the official JEE Advanced scope of drug-target interaction, therapeutic classes, sweeteners, soaps, detergents, and cleansing action safely. No invented weightage.",
    ogTitle: "Chemistry in Everyday Life for JEE Advanced 2026",
    ogDescription:
      "Interaction-first Chemistry for drug classes, artificial sweeteners, soaps, detergents and cleansing, with an explicit educational safety boundary.",
  },
};

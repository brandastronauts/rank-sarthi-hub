import type { ChapterContent } from "@/content/types";

/**
 * Haloalkanes and Haloarenes — T06 production content.
 *
 * Evidence discipline:
 * - Weightage, trend and PYQ-count records are deliberately absent.
 * - General nucleophile/carbocation/electron-flow concepts stay on Organic Basics.
 * - Benzyne mechanism and cine substitution are explicitly excluded from Advanced scope.
 * - No contributor is named; contentStatus stays "draft" pending review.
 */
export const jeeChemistryHaloalkanesHaloarenes: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Haloalkanes and Haloarenes",
  slug: "haloalkanes-haloarenes",
  url: "/jee/chemistry/haloalkanes-haloarenes",
  canonicalIntent:
    "Decide how an alkyl or aryl C-X bond can react by checking substrate class, nucleophile, solvent, leaving group, steric environment, and mechanism limits.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Alkyl and aryl halides do not share one substitution model",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "An alkyl halide and an aryl halide may contain the same halogen but do not share one substitution model. Identify whether X is bonded to an sp3 alkyl carbon or an sp2 aromatic carbon, then evaluate substrate crowding, carbocation feasibility, nucleophile strength, solvent, leaving group, and any ring-activating substituent.",
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
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Electrophile and nucleophile classification, carbocation stability, and curved-arrow reasoning are used throughout this chapter.",
    },
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "prerequisite",
      description: "Alkyl and aryl carbon frameworks introduced there are the substrates classified in this chapter.",
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
    unit: "Haloalkanes and Haloarenes",
    topics: [
      "Nature of the C-X bond",
      "Preparation, properties and reactions",
      "Substitution mechanisms",
      "Uses and environmental effects of chloroform, iodoform, freons and DDT",
      "Alkyl-halide carbocation rearrangements and Grignard reactions (Advanced)",
      "Nucleophilic substitution and stereochemical aspects (Advanced)",
      "Haloarene Fittig and Wurtz-Fittig reactions (Advanced)",
      "Nucleophilic aromatic substitution, with benzyne mechanism and cine substitution excluded (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "classify-the-carbon",
      title: "1. Classify the carbon bearing the halogen first",
      keyIdea: "Methyl, primary, secondary, tertiary, allylic, benzylic, vinylic, and aryl halides create different pathway constraints.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Methyl, primary, secondary, tertiary, allylic, benzylic, vinylic, and aryl halides create different pathway constraints. Classify the carbon before predicting any reaction.",
            },
          ],
        },
      ],
    },
    {
      id: "read-the-cx-bond",
      title: "2. Read the C-X bond in its structural context",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Bond polarity can invite nucleophilic attack, but resonance and hybridisation can make an aryl C-X bond behave differently from an alkyl C-X bond.",
            },
          ],
        },
      ],
    },
    {
      id: "evaluate-nucleophile",
      title: "3. Evaluate the nucleophile's strength and bulk",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Strength, charge, polarizability, and steric bulk of the nucleophile all matter when predicting a substitution outcome.",
            },
          ],
        },
      ],
    },
    {
      id: "evaluate-medium",
      title: "4. Evaluate the medium's effect on ion separation",
      keyIdea: "Polar protic and polar aprotic environments influence ion separation and nucleophile behaviour differently.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Polar protic and polar aprotic environments influence ion separation and nucleophile behaviour differently, which in turn affects whether SN1 or SN2 is favoured.",
            },
          ],
        },
      ],
    },
    {
      id: "test-the-pathway",
      title: "5. Test the pathway against its structural requirement",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "SN2 requires accessible backside attack. SN1 requires a viable ionisation and carbocation-like intermediate. Elimination can compete. Aryl substitution needs its own ring model.",
            },
          ],
        },
      ],
    },
    {
      id: "track-stereochemistry",
      title: "6. Track the stereochemical consequence of the chosen pathway",
      keyIdea: "A concerted backside displacement inverts the reacting centre; a planar carbocation pathway can reduce stereochemical purity and may rearrange.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A concerted backside displacement inverts the reacting centre. A planar carbocation pathway can reduce stereochemical purity and may rearrange before the nucleophile attacks.",
            },
          ],
        },
      ],
    },
    {
      id: "verify-product",
      title: "7. Verify the product against the full evidence set",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Check carbon skeleton, substitution site, stereochemical statement, and any competing elimination before finalising a product.",
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
          "How to decide between SN1, SN2, elimination, and aryl-halide substitution pathways by checking substrate class, nucleophile, solvent, leaving group, and stereochemistry.",
        ],
        [
          "What is the central method choice?",
          "Classify the carbon bearing the halogen as alkyl or aryl, then evaluate the six factors (substrate, nucleophile, solvent, leaving group, sterics, temperature) before choosing SN1, SN2, elimination, or aryl substitution.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating every halide as an SN1 or SN2 substrate without classification, applying alkyl-halide logic to haloarenes, and predicting rearrangement in an SN2 pathway.",
        ],
        [
          "What should come before this chapter?",
          "Organic Basics for electrophile, nucleophile and carbocation reasoning, and Hydrocarbons for the alkyl and aryl frameworks that carry the halogen.",
        ],
        [
          "What comes after it?",
          "Alcohols, Phenols and Ethers and Aldehydes and Ketones extend substitution and addition reasoning to oxygen-containing functional groups.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Haloalkanes and Haloarenes",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "C-X bond, preparation, properties, substitution mechanisms",
          "Explicitly listed, along with uses and environmental effects of chloroform, iodoform, freons and DDT.",
          "Not restated as a separate environmental-use list on the Advanced side.",
          "Keep the Main environmental-use context (chloroform, iodoform, freons, DDT) distinct from the mechanism content.",
        ],
        [
          "Alkyl-halide stereochemistry and rearrangements",
          "Not named as a separate stereochemical line item.",
          "Alkyl-halide carbocation rearrangements, Grignard reactions, nucleophilic substitution and stereochemical aspects are explicitly listed.",
          "Advanced adds explicit stereochemical depth; verify before assuming Main expects the same detail.",
        ],
        [
          "Haloarene coupling reactions",
          "Not named as a separate coupling-reaction line item.",
          "Fittig and Wurtz-Fittig reactions are explicitly listed.",
          "State the exact starting halide and stoichiometry when discussing these couplings.",
        ],
        [
          "Nucleophilic aromatic substitution",
          "Not treated in depth on this route.",
          "Explicitly listed, with the benzyne mechanism and cine substitution explicitly excluded.",
          "Do not teach the benzyne mechanism or cine substitution as current Advanced scope.",
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
          "Electrophiles and nucleophiles",
          "Classify a species as electrophilic or nucleophilic and estimate relative strength.",
          "Revise reactive-species classification in Organic Basics.",
        ],
        [
          "Carbocation stability",
          "Rank carbocations by stability and predict rearrangement tendency.",
          "Revise carbocation stability and hyperconjugation in Organic Basics.",
        ],
        [
          "Steric hindrance and resonance",
          "Judge whether a carbon is accessible to backside attack and whether resonance stabilises a system.",
          "Revise steric and resonance effects in Organic Basics.",
        ],
        [
          "Alkyl and aryl frameworks",
          "Distinguish an sp3 alkyl carbon from an sp2 aromatic ring carbon.",
          "Revise carbon-framework classification in Hydrocarbons.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: classify before choosing a pathway",
      intro: "Match the substrate and condition signal to the correct starting model, and confirm the listed check before finalising.",
      columns: ["Evidence", "Likely starting model", "Do not ignore"],
      rows: [
        ["Methyl or unhindered primary halide with a good nucleophile", "SN2", "Solvent and elimination competition"],
        ["Tertiary halide in an ionising protic medium", "SN1 or elimination competition", "Carbocation rearrangement and temperature"],
        ["Secondary halide", "Competition map", "Nucleophile or base strength, solvent, temperature, sterics"],
        ["Aryl halide", "Nucleophilic aromatic substitution or named coupling if specified", "Ring activation and official mechanism boundary"],
        ["Alkyl halide plus Mg", "Grignard formation", "Strictly dry ether and moisture exclusion"],
        ["Chiral reacting carbon", "Stereochemical pathway", "Inversion versus loss of stereochemical purity"],
      ],
    },
    {
      id: "reaction-intelligence",
      jump: true,
      slot: "formulas",
      heading: "Reaction intelligence records",
      intro: "Every record below carries its critical limitation; none is a bare pathway label without a condition check.",
      columns: ["Substrate", "Reagent and condition", "Pathway or result", "Critical limitation"],
      rows: [
        [
          "Unhindered alkyl halide",
          "Suitable nucleophile, often favoured in polar aprotic medium",
          "Concerted SN2 displacement with inversion at a stereogenic reacting centre",
          "Rate and feasibility fall with steric crowding; no carbocation rearrangement",
        ],
        [
          "Tertiary alkyl halide",
          "Ionising polar protic conditions with suitable nucleophile",
          "SN1 through a carbocation-like intermediate",
          "Rearrangement and elimination may compete; racemisation should not be claimed as perfectly 50:50 without context",
        ],
        [
          "Alkyl halide",
          "Mg in dry ether",
          "Grignard reagent, RMgX",
          "Water, alcohols, acids, and other proton donors destroy the reagent",
        ],
        [
          "Haloarene with suitable electron-withdrawing activation",
          "Nucleophile under stated conditions",
          "Nucleophilic aromatic substitution within the approved addition-elimination treatment",
          "Do not apply ordinary alkyl SN1 or SN2 logic to the aryl carbon",
        ],
        [
          "Aryl halide",
          "Na and aryl halide under dry-ether coupling conditions",
          "Fittig coupling",
          "Product claims require exact starting halide and stoichiometry",
        ],
        [
          "Aryl halide plus alkyl halide",
          "Na in dry ether",
          "Wurtz-Fittig coupling",
          "Mixture risk and exact substrate identity must be considered",
        ],
      ],
    },
  ],

  workedExamples: [
    {
      id: "chlorobutane-vs-chlorobenzene",
      prompt: "Compare 1-chlorobutane and chlorobenzene against a suitable nucleophile and explain why they do not share one substitution model.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "With a suitable nucleophile, 1-chlorobutane presents an accessible primary sp3 carbon. Backside attack can form the new bond while the C-Cl bond breaks, so an SN2 model is plausible." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "In chlorobenzene, chlorine is bonded to an sp2 ring carbon and the bond participates in a resonance-influenced aryl system. Backside geometry and a phenyl-cation SN1 model are both unsuitable as ordinary explanations." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Nucleophilic aromatic substitution therefore requires the ring and substituent conditions that support that pathway, not the ordinary alkyl SN1 or SN2 model." },
          ],
        },
      ],
      answer: "1-chlorobutane is a plausible SN2 substrate; chlorobenzene is not, because the deciding fact is the bonding environment of the carbon attached to chlorine, not simply that both molecules contain chlorine.",
    },
  ],

  mistakes: [
    {
      id: "unclassified-halide",
      mistake: "Treating every halide as an SN1 or SN2 substrate without classification.",
      why: [{ type: "paragraph", children: [{ text: "Methyl, primary, secondary, tertiary, allylic, benzylic, vinylic, and aryl halides create different pathway constraints; skipping classification leads to the wrong model." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Classify the carbon bearing the halogen before selecting SN1, SN2, elimination, or an aryl-specific pathway." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "nucleophile-base-confusion",
      mistake: "Calling a strong nucleophile a strong base in every medium.",
      why: [{ type: "paragraph", children: [{ text: "Nucleophilicity and basicity are related but not identical, and their relative strength can shift with solvent." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Evaluate nucleophile strength, charge, polarizability, and steric bulk separately from basicity in the stated medium." }] }],
      errorType: "decision-error",
    },
    {
      id: "ignoring-solvent-and-sterics",
      mistake: "Ignoring solvent, steric environment, leaving group, or temperature.",
      why: [{ type: "paragraph", children: [{ text: "Each of these factors independently affects whether SN1, SN2, or elimination is favoured." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the six-factor selector (substrate, nucleophile, solvent, leaving group, sterics, temperature) before committing to a pathway." }] }],
      errorType: "decision-error",
    },
    {
      id: "sn2-rearrangement-error",
      mistake: "Predicting rearrangement in an SN2 pathway.",
      why: [{ type: "paragraph", children: [{ text: "SN2 is a concerted displacement without a discrete carbocation intermediate, so rearrangement is not expected." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Reserve rearrangement predictions for SN1 pathways with a genuine carbocation-like intermediate." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "racemisation-overclaim",
      mistake: "Claiming complete racemisation as a universal SN1 result.",
      why: [{ type: "paragraph", children: [{ text: "SN1 through a carbocation-like intermediate can reduce stereochemical purity, but this should not be claimed as perfectly 50:50 without context." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the stereochemical outcome as reduced purity rather than asserting exact racemisation without supporting evidence." }] }],
      errorType: "execution-error",
    },
    {
      id: "alkyl-logic-on-aryl",
      mistake: "Applying alkyl-halide substitution logic directly to haloarenes.",
      why: [{ type: "paragraph", children: [{ text: "The reacting carbon in a haloarene is sp2 and part of the aromatic framework, so ordinary SN1 or SN2 geometry does not apply." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the nucleophilic aromatic substitution model with its own ring and substituent conditions for haloarenes." }] }],
      errorType: "decision-error",
    },
    {
      id: "benzyne-scope-error",
      mistake: "Teaching benzyne or cine substitution as current Advanced scope despite the explicit exclusion.",
      why: [{ type: "paragraph", children: [{ text: "The current JEE Advanced syllabus explicitly excludes the benzyne mechanism and cine substitution from the haloarene entry." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming benzyne or cine substitution is examinable." }] }],
      errorType: "needs-review",
    },
    {
      id: "grignard-without-dry-conditions",
      mistake: "Writing a Grignard step without dry conditions.",
      why: [{ type: "paragraph", children: [{ text: "Water, alcohols, acids, and other proton donors destroy the Grignard reagent, so the dry-ether condition is essential, not optional." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State strictly dry ether and moisture exclusion whenever a Grignard formation step is written." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "General nucleophile, carbocation, and electron-flow concepts used throughout this chapter.",
    },
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "prerequisite",
      description: "Alkyl and aryl carbon frameworks classified as substrates in this chapter.",
    },
    {
      label: "Environmental Chemistry",
      url: "/jee/chemistry/environmental-chemistry",
      relation: "related",
      description: "Environmental effects of chloroform, freons and DDT extend this chapter's Main-scope context.",
    },
    {
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "forward",
      description: "Extends substitution and nucleophile reasoning to oxygen-containing functional groups.",
    },
    {
      label: "Aldehydes and Ketones",
      url: "/jee/chemistry/aldehydes-ketones",
      relation: "forward",
      description: "Builds on Grignard chemistry introduced in this chapter for carbonyl addition reactions.",
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
      question: "Why are haloarenes not ordinary SN2 substrates?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The reacting carbon is sp2 and part of the aromatic framework, so the geometry and bonding do not support the usual backside displacement model.",
            },
          ],
        },
      ],
    },
    {
      question: "What controls SN1 versus SN2 selection?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Substrate structure, nucleophile or base, solvent, leaving group, steric environment, temperature, and competing pathways.",
            },
          ],
        },
      ],
    },
    {
      question: "Why must Grignard preparation be dry?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Proton donors react with and destroy the strongly basic carbon-magnesium reagent.",
            },
          ],
        },
      ],
    },
    {
      question: "Are the benzyne mechanism and cine substitution part of the current JEE Advanced syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. The current JEE Advanced syllabus explicitly excludes the benzyne mechanism and cine substitution from the haloarene entry.",
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
    "ncert-chem-haloalkanes",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, including the explicit Advanced exclusion of the benzyne mechanism and cine substitution. Reaction, mechanism and condition detail is tied to NCERT Haloalkanes and Haloarenes. General nucleophile, carbocation and electron-flow concepts are kept on the Organic Basics route. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Organic Chemistry educator experienced in substitution, elimination, and stereochemical reasoning.",
    "Academic reviewer: postgraduate degree in Chemistry, preferably Organic Chemistry, or a closely related discipline with documented mechanism expertise.",
    "Independent checker: an organic chemistry educator or subject editor who verifies every pathway condition, solvent claim, and stereochemical consequence separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Haloalkanes and Haloarenes for JEE: Choose the Right Substitution Model",
    description:
      "Official JEE Main and Advanced 2026 scope for Haloalkanes and Haloarenes, substrate classification method, condition-aware SN1/SN2 and aryl substitution records, and an error diagnosis framework. No invented weightage.",
    ogTitle: "Haloalkanes and Haloarenes for JEE",
    ogDescription:
      "A condition-aware guide to C-X bonding, substitution pathways, haloarenes, and Grignard preparation.",
  },
};

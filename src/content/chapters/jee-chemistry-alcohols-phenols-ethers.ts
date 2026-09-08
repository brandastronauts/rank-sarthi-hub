import type { ChapterContent } from "@/content/types";

/**
 * Alcohols, Phenols and Ethers — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Scope check verified against current JEE Main 2026 and JEE Advanced 2026
 *   syllabus documents [O1][O2] and NCERT Alcohols, Phenols and Ethers [N3].
 */
export const jeeChemistryAlcoholsPhenolsEthers: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Alcohols, Phenols and Ethers",
  slug: "alcohols-phenols-ethers",
  url: "/jee/chemistry/alcohols-phenols-ethers",
  canonicalIntent:
    "Distinguish alcohol, phenol and ether behaviour through O-H acidity, carbon type, resonance, reagent role and reaction condition, and choose the correct acidity, substitution, dehydration, oxidation or cleavage reasoning.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every reaction record carries its reagent, medium and condition",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Alcohols, phenols and ethers all contain oxygen, but the oxygen sits in different bonding systems. First identify whether the O-H group is attached through an sp3 carbon or directly to an aromatic ring, or whether oxygen joins two carbon groups.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Then use conjugate-base stability, carbon substitution, reagent role and reaction conditions to select acidity, substitution, dehydration, oxidation or cleavage reasoning, rather than treating every oxygen-containing molecule the same way.",
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
      description: "Resonance, inductive effects and nomenclature used throughout this chapter.",
    },
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "prerequisite",
      description: "Alkene and aromatic ring foundations that dehydration and ring substitution build on.",
    },
    {
      label: "Haloalkanes and Haloarenes",
      url: "/jee/chemistry/haloalkanes-haloarenes",
      relation: "prerequisite",
      description: "C-X substitution patterns that parallel C-O substitution in ethers.",
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
    unit: "Organic Compounds Containing Oxygen: Alcohols, Phenols and Ethers",
    topics: [
      "General preparation, properties and reactions of alcohols and phenols",
      "Identification of primary, secondary and tertiary alcohols",
      "Alcohol dehydration mechanism",
      "Phenol acidity and factors affecting it",
      "Specified electrophilic substitutions of phenol",
      "Reimer-Tiemann reaction",
      "Ether structure",
      "Alcohol physical properties, esterification, dehydration to alkenes and ethers",
      "Reactions of alcohols with sodium and specified halogenating reagents",
      "Conversion of alcohols to carbonyl or carboxyl compounds",
      "Phenol physical properties, preparation, specified substitutions, Kolbe reaction, esterification, etherification, aspirin synthesis, oxidation and reduction",
      "Williamson ether synthesis and C-O bond cleavage",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "classify-functional-environment",
      title: "1. Classify the functional environment before predicting behaviour",
      keyIdea: "Alcohol, phenol, ether, benzylic alcohol, allylic alcohol and aryl ether are not interchangeable labels.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An O-H group attached to an sp3 carbon behaves as an alcohol. The same O-H group attached directly to an aromatic ring behaves as a phenol, with the ring able to donate electron density into the oxygen system. An oxygen joining two carbon groups, with no O-H proton, is an ether. Naming the correct class first prevents applying the wrong acidity or reaction model.",
            },
          ],
        },
      ],
    },
    {
      id: "compare-conjugate-bases",
      title: "2. For acidity, compare conjugate bases, not the neutral molecules",
      keyIdea: "Ask where the negative charge can be stabilised and what substituents alter that stabilisation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Removing the O-H proton from an alcohol or phenol produces an alkoxide or phenoxide ion. The relative acidity of the parent molecules follows from how well each conjugate base stabilises the resulting negative charge through resonance, induction or solvation.",
            },
          ],
        },
      ],
    },
    {
      id: "classify-alcohol-carbon",
      title: "3. For an alcohol reaction, classify the carbon bearing the O-H group",
      keyIdea: "Primary, secondary and tertiary structures alter oxidation, substitution and elimination possibilities.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The number of carbon groups attached to the carbinol carbon changes which oxidation products are reachable, how substitution proceeds, and how readily elimination competes with substitution under acidic conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "dehydration-product-class",
      title: "4. For dehydration, identify the product class before committing to a mechanism",
      keyIdea: "Conditions and substrate can favour intramolecular elimination to an alkene or intermolecular ether formation in suitable cases.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Acid-catalysed heating of an alcohol does not automatically mean alkene formation. Depending on the substrate and the specific conditions, an intermolecular pathway toward an ether can compete with intramolecular elimination toward an alkene. State the condition before naming the product.",
            },
          ],
        },
      ],
    },
    {
      id: "ether-bond-cleavage",
      title: "5. For ethers, identify which C-O bond can break",
      keyIdea: "Protonation activates oxygen, but the substitution pathway depends on the attached carbon groups.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Strong acid protonates ether oxygen, but which C-O bond cleaves and by what pathway depends on whether the attached carbon is primary, secondary, tertiary or aromatic. An aryl-oxygen bond does not undergo an ordinary nucleophilic substitution at the ring carbon.",
            },
          ],
        },
      ],
    },
    {
      id: "phenol-ring-effects",
      title: "6. For phenol, preserve ring effects alongside O-H effects",
      keyIdea: "The O-H group affects acidity, while the oxygen substituent also changes aromatic-ring reactivity and orientation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In phenol, the oxygen lone pair delocalises into the ring, which both stabilises the phenoxide conjugate base and activates the ring toward electrophilic substitution at specific positions. Both effects come from the same resonance interaction and should be reasoned together.",
            },
          ],
        },
      ],
    },
    {
      id: "prove-the-product",
      title: "7. Prove the product with reagent, medium and the bond that changed",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A complete answer names the reagent, the medium and temperature when material, the work-up step, and identifies exactly which bond formed or broke. A product name without these details is not a verified answer.",
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
          "How alcohols, phenols and ethers differ in acidity, substitution, dehydration, oxidation and cleavage behaviour despite all containing oxygen.",
        ],
        [
          "What is the central method choice?",
          "Classify the functional environment first, then compare conjugate bases for acidity or classify the carbon and condition for a reaction.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating alcohol and phenol acidity as the same problem, assigning oxidation products without naming the oxidant, and breaking aryl C-O bonds through an ordinary substitution drawing.",
        ],
        [
          "What should come before this chapter?",
          "Organic Basics, Hydrocarbons and Haloalkanes and Haloarenes.",
        ],
        [
          "What comes after it?",
          "Aldehydes and Ketones extend oxidation products of alcohols into carbonyl chemistry.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Alcohols, Phenols and Ethers",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Alcohol identification and dehydration",
          "General preparation, properties, reactions and uses; identification of primary, secondary and tertiary alcohols; alcohol dehydration mechanism are explicitly listed.",
          "Physical properties, esterification, dehydration to alkenes and ethers, reactions with sodium and specified halogenating reagents, and conversion to carbonyl or carboxyl compounds are explicitly listed.",
          "Treat Advanced as a wider reaction inventory built on the same dehydration mechanism.",
        ],
        [
          "Phenol acidity and substitution",
          "Phenol acidity and specified electrophilic substitutions plus the Reimer-Tiemann reaction are explicitly listed.",
          "Physical properties, preparation, specified substitutions, Reimer-Tiemann, Kolbe, esterification, etherification, aspirin synthesis, oxidation and reduction are explicitly listed.",
          "Do not assume every Advanced phenol reaction is tested at Main depth.",
        ],
        [
          "Ethers",
          "Ether structure is explicitly listed.",
          "Williamson ether synthesis and C-O cleavage are explicitly listed.",
          "Main names structure only; Advanced adds the synthesis and cleavage mechanisms.",
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
          "Resonance and inductive effects",
          "Draw resonance structures and judge relative stabilisation of a charged species.",
          "Revise Organic Basics resonance and induction sections.",
        ],
        [
          "Carbocation stability",
          "Rank carbocation stability by carbon substitution and adjacent groups.",
          "Revise carbocation stability from Hydrocarbons.",
        ],
        [
          "SN1, SN2 and elimination",
          "Distinguish substitution mechanisms and predict when elimination competes.",
          "Revise substitution and elimination from Haloalkanes and Haloarenes.",
        ],
        [
          "Aromatic substitution",
          "Predict orientation effects of a ring substituent.",
          "Revise electrophilic aromatic substitution from Hydrocarbons.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: classify before calculating or predicting",
      intro: "Match the question signal to the correct first model before drawing any mechanism.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Acidity comparison", "Conjugate-base stabilisation", "Resonance, induction, solvent and substituent position"],
        ["Alcohol plus acid and heat", "Dehydration or substitution competition", "Carbon class and temperature"],
        ["Alcohol plus oxidant", "Carbon oxidation-state map", "Primary, secondary, tertiary, reagent strength and stopping point"],
        ["Alkoxide plus alkyl halide", "Williamson SN2", "Halide sterics and elimination risk"],
        ["Ether plus HI or HBr", "Protonation followed by bond cleavage", "Aryl versus alkyl bond and SN1 or SN2 feasibility"],
        ["Phenol plus electrophile", "Activated-ring substitution", "Reagent strength, medium and orientation"],
      ],
    },
    {
      id: "reaction-intelligence",
      jump: true,
      slot: "concepts",
      heading: "Reaction intelligence records",
      intro: "Every record carries its condition and its limitation, in line with the source-proximity rule for this chapter.",
      columns: ["System", "Reagent and condition", "Outcome and reasoning", "Limitation or trap"],
      rows: [
        [
          "Alcohol",
          "Na under dry conditions",
          "Alkoxide forms with hydrogen evolution.",
          "Water also reacts with Na, so moisture invalidates a clean alcohol-only interpretation.",
        ],
        [
          "Alcohol",
          "ZnCl2 and concentrated HCl",
          "Substrate-dependent substitution used in classifying alcohols.",
          "Observation depends on carbon class and conditions; do not state a fixed timing rule without the approved source record.",
        ],
        [
          "Suitable alcohol",
          "Strong acid and heat",
          "Dehydration can form an alkene; suitable primary systems under different conditions can form an ether.",
          "Product class is condition-dependent, not determined by the word dehydration alone.",
        ],
        [
          "Primary or secondary alcohol",
          "Verified oxidant",
          "Primary alcohol can give aldehyde or acid depending on reagent and control; secondary alcohol gives ketone.",
          "Do not assign one stopping product to every oxidant.",
        ],
        [
          "Alkoxide plus primary alkyl halide",
          "Williamson conditions",
          "Ether forms through SN2.",
          "Secondary and tertiary halides can favour elimination; aryl halides do not undergo ordinary SN2 at the ring carbon.",
        ],
        [
          "Ether",
          "Excess HI or HBr with heating as specified",
          "Protonated ether undergoes C-O cleavage through the feasible substitution pathway.",
          "In aryl-alkyl ethers, the aryl C-O bond is not treated as an ordinary SN2 site.",
        ],
        [
          "Phenol",
          "CHCl3 and NaOH with heat, then acid work-up",
          "Reimer-Tiemann formylation, with ortho product as the standard major outcome.",
          "Substrate, work-up and regioselectivity must all be stated.",
        ],
        [
          "Sodium phenoxide",
          "CO2 under required pressure and heat, then acidification",
          "Kolbe-Schmitt carboxylation leading mainly to salicylic acid.",
          "Do not confuse this with Kolbe electrolysis.",
        ],
      ],
      note: "Sources: NCERT Alcohols, Phenols and Ethers [N3], cross-checked against JEE Main and Advanced syllabus scope [O1][O2].",
    },
  ],

  workedExamples: [
    {
      id: "phenol-vs-ethanol-acidity",
      prompt: "Explain why phenol is more acidic than ethanol.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Remove H+ from each O-H group and compare the resulting anions." }],
        },
        {
          type: "paragraph",
          children: [
            { text: "Ethoxide holds the negative charge mainly on one oxygen atom, and the attached alkyl group does not provide resonance delocalisation." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Phenoxide can delocalise electron density into the aromatic system through resonance contributors, spreading the negative charge." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Greater stabilisation of the conjugate base makes deprotonation of phenol more favourable relative to ethanol, in comparable medium and temperature." },
          ],
        },
      ],
      answer: "Phenol is more acidic because its conjugate base, phenoxide, is resonance-stabilised across the aromatic ring, while ethoxide has no such delocalisation.",
    },
  ],

  mistakes: [
    {
      id: "alcohol-phenol-acidity-conflation",
      mistake: "Treating alcohol and phenol acidity as the same O-H problem.",
      why: [{ type: "paragraph", children: [{ text: "Only the phenoxide conjugate base has an aromatic ring available for resonance delocalisation; alkoxide does not." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always draw the conjugate base first and check whether resonance delocalisation into a ring is possible." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "oxidation-product-without-reagent",
      mistake: "Assigning an oxidation product without naming the oxidant and control conditions.",
      why: [{ type: "paragraph", children: [{ text: "Different oxidants and conditions stop primary-alcohol oxidation at different stages, aldehyde or acid." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the reagent and condition before naming an oxidation product." }] }],
      errorType: "decision-error",
    },
    {
      id: "single-dehydration-product-assumption",
      mistake: "Assuming every acid-heated alcohol gives only one dehydration product.",
      why: [{ type: "paragraph", children: [{ text: "Depending on substrate and condition, intermolecular ether formation can compete with intramolecular alkene formation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the substrate and stated condition before committing to an elimination-only product." }] }],
      errorType: "decision-error",
    },
    {
      id: "tertiary-halide-williamson",
      mistake: "Using a tertiary halide in Williamson synthesis without considering elimination.",
      why: [{ type: "paragraph", children: [{ text: "A bulky, highly substituted halide favours elimination over the SN2 pathway that Williamson synthesis requires." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the halide is primary, or at least SN2-favourable, before selecting Williamson synthesis." }] }],
      errorType: "execution-error",
    },
    {
      id: "aryl-c-o-sn2",
      mistake: "Breaking the aryl C-O bond in an aryl-alkyl ether through an ordinary SN2 drawing.",
      why: [{ type: "paragraph", children: [{ text: "The aryl carbon is part of the aromatic ring and does not undergo backside nucleophilic attack the way an alkyl carbon does." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify which side of the ether oxygen is aryl and which is alkyl before deciding which C-O bond cleaves." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "reimer-tiemann-kolbe-confusion",
      mistake: "Confusing Reimer-Tiemann formylation with Kolbe-Schmitt carboxylation.",
      why: [{ type: "paragraph", children: [{ text: "Both start from a phenoxide-type species and both are named ring reactions, but they use different reagents and give different functional groups." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the reagent: CHCl3 and NaOH signals Reimer-Tiemann, CO2 under pressure signals Kolbe-Schmitt." }] }],
      errorType: "recall-gap",
    },
    {
      id: "acidity-order-without-conjugate-base",
      mistake: "Giving an acidity order without explaining the conjugate bases.",
      why: [{ type: "paragraph", children: [{ text: "An acidity order without reasoning cannot be checked or extended to a new substituent pattern." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Support every acidity order with a conjugate-base stabilisation argument." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Resonance, induction and nomenclature foundations used throughout this chapter.",
    },
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "prerequisite",
      description: "Alkene and aromatic ring foundations for dehydration and ring substitution.",
    },
    {
      label: "Haloalkanes and Haloarenes",
      url: "/jee/chemistry/haloalkanes-haloarenes",
      relation: "prerequisite",
      description: "C-X substitution patterns that parallel C-O substitution in ethers.",
    },
    {
      label: "Aldehydes and Ketones",
      url: "/jee/chemistry/aldehydes-ketones",
      relation: "same-unit",
      description: "Lateral oxygen-compound chemistry: carbonyl electrophilicity and alpha-carbon reactions.",
    },
    {
      label: "Carboxylic Acids",
      url: "/jee/chemistry/carboxylic-acids",
      relation: "forward",
      description: "Extends oxygen-compound reasoning into carboxyl acidity and acid-derivative formation.",
    },
    {
      label: "Amines",
      url: "/jee/chemistry/amines",
      relation: "forward",
      description: "Extends conjugate-base and substitution reasoning to nitrogen-based functional groups.",
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
      label: "JEE syllabus for Chemistry",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Exam-level official Chemistry scope.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Electronegativity and periodic trends used in comparing acidity.",
    },
  ],

  faqs: [
    {
      question: "Is decarboxylation or every Advanced reaction owned by this chapter treated as Main scope?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Main names alcohol identification, dehydration mechanism, phenol acidity, named substitutions and Reimer-Tiemann, and ether structure. Advanced adds a wider preparation and reaction inventory. This page labels each layer instead of collapsing Advanced content into Main scope.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is phenol more acidic than an ordinary alcohol?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Phenoxide, the conjugate base of phenol, delocalises negative charge into the aromatic ring through resonance. Alkoxide, the conjugate base of an ordinary alcohol, has no such delocalisation, so phenol is the more acidic of the two under comparable conditions.",
            },
          ],
        },
      ],
    },
    {
      question: "Can every alcohol dehydration reaction be assumed to give an alkene?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Depending on the substrate and the specific acid and temperature conditions, an intermolecular pathway toward an ether can compete with intramolecular elimination toward an alkene. The condition must be checked before naming the product.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-alcohols-phenols-ethers", "nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote:
    "Scope statements are drawn only from the current JEE Main 2026 and JEE Advanced 2026 syllabus documents and NCERT Alcohols, Phenols and Ethers. No weightage, frequency, or PYQ-count claim is made from official paper archives; they are cited for provenance handling only.",
  contributorPolicy: [
    "Author: unassigned. Ideal author type is a JEE Organic Chemistry educator experienced in oxygen-functional-group chemistry.",
    "Academic reviewer: unassigned. Required specialisation is physical organic chemistry covering alcohol and phenol acidity, elimination, oxidation, aromatic substitution and ether cleavage, with a postgraduate degree in Chemistry or a closely related discipline.",
    "Every reviewer must eventually link to a centralized, visible, verified contributor profile.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Alcohols, Phenols and Ethers for JEE: Acidity, Reactions and Conditions",
    description:
      "Classify alcohol, phenol and ether behaviour for JEE Main and Advanced through conjugate-base acidity, carbon class, dehydration, substitution and named reactions with full conditions.",
    ogType: "article",
  },
};

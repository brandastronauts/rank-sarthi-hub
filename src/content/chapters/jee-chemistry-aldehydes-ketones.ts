import type { ChapterContent } from "@/content/types";

/**
 * Aldehydes and Ketones — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Scope check verified against current JEE Main 2026 and JEE Advanced 2026
 *   syllabus documents [O1][O2] and NCERT Aldehydes, Ketones and Carboxylic
 *   Acids [N4].
 */
export const jeeChemistryAldehydesKetones: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Aldehydes and Ketones",
  slug: "aldehydes-ketones",
  url: "/jee/chemistry/aldehydes-ketones",
  canonicalIntent:
    "Predict carbonyl reactions by reading carbonyl electrophilicity, steric and electronic effects, alpha-hydrogen status, reagent role, medium and product class, separating carbonyl-carbon attack from alpha-carbon chemistry.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every named reaction carries its eligibility condition",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "The carbonyl bond polarises electron density toward oxygen, making the carbonyl carbon electrophilic. To choose a reaction, first compare aldehyde or ketone substitution and steric access, then classify the reagent.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Next check whether an alpha-hydrogen exists, identify the medium, and decide whether the question is about nucleophilic addition, oxidation, reduction, condensation, disproportionation, haloform chemistry, or identification.",
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
      description: "Nucleophile and electrophile identification, resonance and inductive effects.",
    },
    {
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "prerequisite",
      description: "Alcohol oxidation states feed directly into carbonyl formation.",
    },
    {
      label: "Haloalkanes and Haloarenes",
      url: "/jee/chemistry/haloalkanes-haloarenes",
      relation: "prerequisite",
      description: "Grignard reagent handling and substitution reasoning used again here.",
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
    unit: "Organic Compounds Containing Oxygen: Aldehydes and Ketones",
    topics: [
      "Nature of the carbonyl group",
      "Nucleophilic addition to the carbonyl group",
      "Relative reactivity of aldehydes and ketones",
      "Important reactions: nucleophilic addition of hydrogen cyanide, ammonia derivatives, and Grignard reagent",
      "Oxidation of aldehydes and ketones",
      "Reduction to hydrocarbon (Clemmensen and Wolff-Kishner reductions)",
      "Acidity of alpha-hydrogen",
      "Aldol condensation",
      "Cannizzaro reaction",
      "Haloform reaction",
      "Chemical tests to distinguish aldehydes and ketones",
      "Preparation from acid chlorides and nitriles",
      "Preparation of aldehydes from esters and benzaldehyde from toluene and benzene",
      "Oxime and hydrazone formation",
      "Addition of bisulfite, alcohol and amine",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "carbonyl-electrophilicity",
      title: "1. Read the carbonyl carbon as an electrophilic site",
      keyIdea: "The C=O bond is polar; electronic donation, withdrawal and steric crowding change attack feasibility.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Oxygen is more electronegative than carbon, so the carbonyl bond is polarised with partial positive charge on carbon. This makes the carbonyl carbon susceptible to nucleophilic attack, but the ease of attack depends on both electronic effects and how crowded the carbon is.",
            },
          ],
        },
      ],
    },
    {
      id: "aldehyde-vs-ketone",
      title: "2. Compare aldehyde and ketone structures, not labels",
      keyIdea: "Aldehydes usually have less carbon substitution around the carbonyl carbon and often greater electrophilic accessibility than comparable ketones.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An aldehyde carbon carries at most one carbon substituent besides the carbonyl oxygen and hydrogen, while a ketone carbon carries two carbon substituents. Test the actual structures involved rather than assuming a fixed reactivity order for every pair.",
            },
          ],
        },
      ],
    },
    {
      id: "nucleophilic-addition-tracking",
      title: "3. Track nucleophilic addition step by step",
      keyIdea: "Track attack at the carbonyl carbon, oxygen protonation or work-up, and whether a stable derivative or alcohol forms.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A nucleophile attacks the carbonyl carbon, pushing electron density onto oxygen. Depending on the nucleophile and the work-up step, the product can be an alcohol, a cyanohydrin, or a nitrogen-containing derivative such as an oxime or hydrazone.",
            },
          ],
        },
      ],
    },
    {
      id: "alpha-hydrogen-branch",
      title: "4. If an alpha-hydrogen is available, enolate chemistry becomes possible",
      keyIdea: "If an alpha-hydrogen is available, enolate or enol chemistry can enable aldol or haloform pathways under the required conditions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A hydrogen on the carbon adjacent to the carbonyl group is acidic because its removal generates a resonance-stabilised enolate. This enolate can act as a nucleophile toward another carbonyl compound in an aldol pathway, or participate in halogenation under haloform conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "no-alpha-h-branch",
      title: "5. Without an alpha-hydrogen, disproportionation replaces the aldol pathway",
      keyIdea: "An aldehyde without alpha-hydrogen can undergo Cannizzaro disproportionation in concentrated base.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When an aldehyde has no alpha-hydrogen to form an enolate, concentrated base instead drives a disproportionation reaction in which one molecule is oxidised to a carboxylate and another is reduced to an alcohol.",
            },
          ],
        },
      ],
    },
    {
      id: "redox-branch",
      title: "6. Separate the oxidation branch from the reduction branch",
      keyIdea: "Oxidation distinguishes many aldehydes from ketones. Reduction can stop at alcohol or remove the carbonyl oxygen depending on reagent.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Aldehydes are generally more susceptible to oxidation than ketones, which is the basis of several distinguishing tests. On the reduction side, the choice of reagent decides whether the product stops at an alcohol or continues to a methylene group with complete removal of the carbonyl oxygen.",
            },
          ],
        },
      ],
    },
    {
      id: "identification-as-evidence",
      title: "7. Treat a chemical test as evidence, not a universal identity proof",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A positive or negative test result is evidence about functional behaviour under stated conditions, not an absolute identity proof. Record the reagent, the observation, and the known exclusions before drawing a conclusion.",
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
          "How the carbonyl group directs nucleophilic addition, oxidation and reduction, and how the alpha carbon separately enables aldol, Cannizzaro and haloform chemistry.",
        ],
        [
          "What is the central method choice?",
          "Classify substrate as aldehyde or ketone, check alpha-hydrogen availability, identify the reagent and medium, then choose addition, condensation, disproportionation, redox or identification reasoning.",
        ],
        [
          "Where do most mistakes begin?",
          "Starting aldol reasoning before checking alpha-hydrogen, using Cannizzaro for an enolisable aldehyde or a ketone, and confusing Clemmensen with Wolff-Kishner conditions.",
        ],
        [
          "What should come before this chapter?",
          "Organic Basics, Alcohols Phenols and Ethers, and Haloalkanes and Haloarenes.",
        ],
        [
          "What comes after it?",
          "Carboxylic Acids extends carbonyl oxidation-state reasoning into carboxyl acidity and derivative chemistry.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Aldehydes and Ketones",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Carbonyl nature and addition",
          "Carbonyl-group nature, nucleophilic addition, and relative aldehyde and ketone reactivity are explicitly listed.",
          "Additions of Grignard reagent, bisulfite, HCN, alcohol and amine are explicitly listed.",
          "Advanced widens the addition-reagent inventory; verify each reagent before use.",
        ],
        [
          "Redox and named reactions",
          "Oxidation, Clemmensen and Wolff-Kishner reductions, alpha-hydrogen acidity, aldol, Cannizzaro, haloform, and distinguishing tests are explicitly listed.",
          "Oxidation, reduction, oxime and hydrazone formation, aldol condensation, Cannizzaro and haloform reactions are explicitly listed.",
          "Both papers name the same core named reactions; Advanced adds derivative formation explicitly.",
        ],
        [
          "Preparations",
          "Not itemised as a separate preparation list at Main depth.",
          "Preparations from acid chlorides and nitriles, aldehydes from esters, and benzaldehyde from toluene and benzene are explicitly listed.",
          "Treat named preparations as Advanced-depth unless independently confirmed for Main.",
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
          "Nucleophiles and electrophiles",
          "Identify the electrophilic carbon and the attacking nucleophile in a mechanism.",
          "Revise Organic Basics nucleophile and electrophile sections.",
        ],
        [
          "Grignard conditions",
          "State why Grignard reagents must be formed and used under dry conditions.",
          "Revise Grignard formation from Haloalkanes and Haloarenes.",
        ],
        [
          "Oxidation and reduction language",
          "Track oxidation-state change at a specific carbon.",
          "Revise oxidation of alcohols from Alcohols, Phenols and Ethers.",
        ],
        [
          "Acid-base steps",
          "Identify a proton transfer step in a multistep mechanism.",
          "Revise acid-base fundamentals from Equilibrium.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: run eligibility checks before naming a reaction",
      intro: "Confirm substrate eligibility before applying any named carbonyl reaction.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Nucleophile plus carbonyl", "Nucleophilic addition", "Reagent, steric access, proton source, work-up"],
        ["Base plus carbonyl with alpha-H", "Enolate pathway", "Self versus crossed partners and product dehydration"],
        ["Concentrated base plus aldehyde without alpha-H", "Cannizzaro", "No enolisable alpha-hydrogen"],
        ["Iodine and base", "Haloform eligibility", "Methyl ketone or a substrate oxidisable to one"],
        ["Oxidation test", "Aldehyde oxidation model", "Aromatic versus aliphatic limitations and reagent condition"],
        ["Carbonyl to methylene", "Clemmensen or Wolff-Kishner", "Acid-sensitive versus base-sensitive functionality"],
      ],
    },
    {
      id: "reaction-intelligence",
      jump: true,
      slot: "concepts",
      heading: "Reaction intelligence records",
      intro: "Every record carries its condition and its exclusion, in line with the source-proximity rule for this chapter.",
      columns: ["Substrate requirement", "Reagent and medium", "Outcome", "Important exclusion or trap"],
      rows: [
        [
          "Aldehyde or ketone",
          "HCN under suitable conditions",
          "Cyanohydrin by nucleophilic addition.",
          "Product stereochemistry depends on substrate and is not inferred without analysis.",
        ],
        [
          "Aldehyde or ketone",
          "RMgX in dry ether, then aqueous work-up",
          "Alcohol after C-C bond formation.",
          "Moisture destroys the Grignard reagent; alcohol class depends on the carbonyl substrate.",
        ],
        [
          "Aldehyde or ketone",
          "Hydroxylamine or hydrazine derivative conditions",
          "Oxime or hydrazone derivative.",
          "Do not confuse derivative formation with carbonyl-to-methylene reduction.",
        ],
        [
          "Aldehyde or ketone",
          "Zn(Hg)/HCl",
          "Clemmensen reduction of carbonyl to methylene under acidic conditions.",
          "Unsuitable assumptions for acid-sensitive functionality require review.",
        ],
        [
          "Aldehyde or ketone",
          "NH2NH2, strong base, heat",
          "Wolff-Kishner reduction of carbonyl to methylene under strongly basic conditions.",
          "Do not choose without checking base and heat compatibility.",
        ],
        [
          "Enolisable aldehyde or ketone",
          "Dilute base or acid as specified",
          "Aldol addition, with condensation possible under further conditions.",
          "Requires at least one suitable alpha-hydrogen in the enolate donor.",
        ],
        [
          "Aldehyde without alpha-H",
          "Concentrated base",
          "Cannizzaro disproportionation to alcohol and carboxylate.",
          "Ketones do not follow the standard Cannizzaro rule.",
        ],
        [
          "Methyl ketone or suitable oxidisable precursor",
          "I2/OH-",
          "Haloform reaction with iodoform formation under the standard iodine case.",
          "The structural requirement must be proved before using the test.",
        ],
      ],
      note: "Source: NCERT Aldehydes, Ketones and Carboxylic Acids [N4], cross-checked against JEE Main and Advanced syllabus scope [O1][O2].",
    },
  ],

  workedExamples: [
    {
      id: "ethanal-vs-benzaldehyde-base",
      prompt: "Compare how ethanal and benzaldehyde react with base, and explain the difference.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Ethanal has alpha-hydrogens next to the carbonyl group, so it can form an enolate and enter an aldol pathway under suitable dilute-base conditions." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Benzaldehyde has no alpha carbon bearing hydrogen next to its formyl group, so it cannot act as the enolate donor in the standard aldol model." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "In concentrated base, benzaldehyde can instead undergo Cannizzaro disproportionation, giving benzyl alcohol and benzoate." },
          ],
        },
      ],
      answer: "The reaction name follows from the alpha-hydrogen test and the specified base conditions, not from memorising which molecule is which.",
    },
  ],

  mistakes: [
    {
      id: "universal-aldehyde-reactivity",
      mistake: "Saying all aldehydes are always more reactive than all ketones without structural comparison.",
      why: [{ type: "paragraph", children: [{ text: "Relative reactivity depends on the actual steric and electronic environment of each specific carbonyl carbon, not a fixed universal rule." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare the specific structures given in the question before asserting a reactivity order." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "aldol-without-alpha-h-check",
      mistake: "Starting aldol reasoning before checking for an alpha-hydrogen.",
      why: [{ type: "paragraph", children: [{ text: "Without an alpha-hydrogen there is no enolate donor, so the aldol pathway is not available." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the alpha carbon and confirm it bears a hydrogen before drawing an enolate." }] }],
      errorType: "decision-error",
    },
    {
      id: "cannizzaro-misapplication",
      mistake: "Using Cannizzaro for a ketone or an enolisable aldehyde.",
      why: [{ type: "paragraph", children: [{ text: "Cannizzaro disproportionation requires the absence of an alpha-hydrogen; ketones and enolisable aldehydes instead favour enolate chemistry." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm no alpha-hydrogen is present and that the substrate is an aldehyde before applying Cannizzaro." }] }],
      errorType: "decision-error",
    },
    {
      id: "haloform-without-proof",
      mistake: "Applying the haloform test without proving the methyl-ketone pattern or a suitable precursor.",
      why: [{ type: "paragraph", children: [{ text: "The haloform reaction requires a specific methyl-ketone-type structure or a substrate oxidisable to it." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the structural requirement explicitly before predicting a positive haloform result." }] }],
      errorType: "execution-error",
    },
    {
      id: "oxime-vs-wolff-kishner",
      mistake: "Confusing oxime formation with Wolff-Kishner reduction.",
      why: [{ type: "paragraph", children: [{ text: "Oxime formation stops at a nitrogen-containing derivative, while Wolff-Kishner reduction fully replaces the carbonyl oxygen with two hydrogens under strong base and heat." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the question specifies a strong base and heat step beyond simple hydrazine addition before calling it Wolff-Kishner." }] }],
      errorType: "recall-gap",
    },
    {
      id: "clemmensen-wolff-kishner-interchange",
      mistake: "Choosing Clemmensen and Wolff-Kishner as interchangeable despite acidic versus strongly basic conditions.",
      why: [{ type: "paragraph", children: [{ text: "Clemmensen reduction needs acidic Zn(Hg)/HCl conditions, while Wolff-Kishner needs strongly basic conditions; acid-sensitive or base-sensitive groups elsewhere in the molecule decide which is usable." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the rest of the molecule for acid- or base-sensitive functionality before selecting a reduction method." }] }],
      errorType: "decision-error",
    },
    {
      id: "test-without-limitation",
      mistake: "Reporting a distinguishing test without reagent, observation and limitation.",
      why: [{ type: "paragraph", children: [{ text: "A test result without its reagent and known exclusions cannot be verified or reused for a different substrate." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the reagent, the expected observation, and any known exception before concluding an identification test." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Nucleophile, electrophile and resonance foundations used throughout this chapter.",
    },
    {
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "prerequisite",
      description: "Alcohol oxidation feeds directly into carbonyl formation.",
    },
    {
      label: "Amines",
      url: "/jee/chemistry/amines",
      relation: "same-unit",
      description: "Lateral nitrogen-compound chemistry sharing nucleophilic addition reasoning.",
    },
    {
      label: "Carboxylic Acids",
      url: "/jee/chemistry/carboxylic-acids",
      relation: "forward",
      description: "Extends carbonyl oxidation-state reasoning into carboxyl acidity and derivatives.",
    },
    {
      label: "Biomolecules",
      url: "/jee/chemistry/biomolecules",
      relation: "forward",
      description: "Carbonyl chemistry reappears in carbohydrate structure and reactions.",
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
  ],

  faqs: [
    {
      question: "Why are aldehydes often more reactive toward nucleophilic addition than comparable ketones?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "They generally have less steric crowding and less electron donation from carbon substituents around the carbonyl carbon, so the carbonyl carbon in an aldehyde is usually more accessible and more electrophilic than in a comparable ketone.",
            },
          ],
        },
      ],
    },
    {
      question: "When does Cannizzaro reaction apply instead of aldol condensation?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Cannizzaro disproportionation applies to an aldehyde with no alpha-hydrogen, treated with concentrated base. If an alpha-hydrogen is present, the aldol pathway through an enolate is checked first instead.",
            },
          ],
        },
      ],
    },
    {
      question: "Is a positive haloform test enough to identify a substrate on its own?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A positive haloform result is evidence consistent with a methyl-ketone-type structure or an oxidisable precursor to one. It should be read alongside the full structural evidence rather than treated as a stand-alone identity proof.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-carbonyl-acids", "nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote:
    "Scope statements are drawn only from the current JEE Main 2026 and JEE Advanced 2026 syllabus documents and NCERT Aldehydes, Ketones and Carboxylic Acids. No weightage, frequency, or PYQ-count claim is made from official paper archives; they are cited for provenance handling only.",
  contributorPolicy: [
    "Author: unassigned. Ideal author type is a JEE Organic Chemistry educator experienced in carbonyl and enolate reasoning.",
    "Academic reviewer: unassigned. Required specialisation is carbonyl chemistry, nucleophilic addition, enolate chemistry, organic redox, named reactions and qualitative tests, with a postgraduate degree in Chemistry or a closely related discipline.",
    "Every reviewer must eventually link to a centralized, visible, verified contributor profile.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Aldehydes and Ketones for JEE: Carbonyl and Alpha-Carbon Reactions",
    description:
      "Predict carbonyl reactions for JEE Main and Advanced by reading electrophilicity, alpha-hydrogen status, reagent, medium and named-reaction eligibility with full conditions.",
    ogType: "article",
  },
};

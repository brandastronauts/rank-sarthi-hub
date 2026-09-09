import type { ChapterContent } from "@/content/types";

/**
 * Respiration in Plants — T06 production content (N03-03).
 *
 * Focused NEET UG 2026 page separating gas exchange from cellular
 * respiration and mapping glycolysis, fermentation, TCA cycle, ETS,
 * conditional ATP accounting, amphibolic pathways and respiratory quotient.
 *
 * Evidence discipline: the 38 ATP figure is retained only as an explicitly
 * conditional NCERT theoretical balance-sheet model, never as a universal
 * yield. contentStatus stays "draft" pending academic review; no
 * reviewer/author id exists yet.
 */
export const neetBiologyRespirationInPlants: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Respiration in Plants",
  slug: "respiration-in-plants",
  url: "/neet/biology/respiration-in-plants",
  canonicalIntent:
    "Separate gas exchange from cellular respiration and map glycolysis, fermentation, TCA cycle, ETS, conditional ATP accounting, amphibolic pathways and respiratory quotient by location, inputs and outputs for the current NEET UG 2026 scope.",

  heroChips: [
    "Current NEET UG 2026 official scope",
    "ATP accounting is explicitly conditional, not a universal yield",
    "No invented weightage, question counts or trend claims",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 Respiration in Plants includes exchange of gases, glycolysis, fermentation, the TCA cycle, electron transport, aerobic/anaerobic relationships, energy relations, amphibolic pathways and respiratory quotient.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Track where each stage occurs, what enters and leaves, and where oxygen is directly used.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages." }],
    },
  ],

  prerequisites: [
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Carbohydrate structure underlies glucose oxidation reasoning in glycolysis and the TCA cycle.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Mitochondrial structure underlies the matrix and inner-membrane location reasoning used here.",
    },
    {
      label: "Plant Physiology",
      url: "/neet/biology/plant-physiology",
      relation: "up",
      description: "Current Unit 4 umbrella that routes to this focused Respiration page.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 4, Plant Physiology",
    topics: [
      "Exchange of gases",
      "Glycolysis",
      "Fermentation",
      "Aerobic respiration: pyruvate oxidation and the TCA cycle",
      "Electron transport system and oxidative phosphorylation",
      "Amphibolic pathways",
      "Respiratory quotient",
      "Number of ATP molecules generated (conditional, theoretical balance-sheet model)",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "gas-exchange-vs-cellular-respiration",
      title: "1. Separate gas exchange from cellular respiration",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Plants exchange O2 and CO2 mainly by diffusion through structures such as stomata and lenticels, while living cells perform cellular respiration. Gas movement between organism and environment is not the same process as biochemical substrate oxidation inside cells.",
            },
          ],
        },
      ],
    },
    {
      id: "glycolysis",
      title: "2. Glycolysis converts glucose to pyruvate in the cytoplasm, without using oxygen directly",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Glycolysis occurs in the cytoplasm and converts glucose through a sequence of reactions to pyruvate. It can operate before either aerobic mitochondrial oxidation or fermentation. It produces limited ATP directly and reduced electron carriers.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Glycolysis does not directly consume oxygen. Oxygen is essential later as the terminal electron acceptor in the aerobic ETS.",
            },
          ],
        },
      ],
    },
    {
      id: "fermentation",
      title: "3. Fermentation regenerates the oxidised carrier needed for continued glycolysis",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When pyruvate is not routed through full aerobic mitochondrial oxidation, fermentation regenerates the oxidised carrier needed for continued glycolysis. Alcoholic fermentation produces ethanol and CO2; lactic-acid fermentation produces lactate in relevant cells/organisms. Fermentation captures far less usable energy from glucose because oxidation remains incomplete.",
            },
          ],
        },
      ],
    },
    {
      id: "pyruvate-oxidation",
      title: "4. Pyruvate oxidation is the bridge into the TCA cycle",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Under aerobic conditions, pyruvate enters the mitochondrial pathway and is converted to acetyl-CoA before TCA entry. CO2 and reduced carrier production occur in this bridge step.",
            },
          ],
        },
      ],
    },
    {
      id: "tca-cycle",
      title: "5. The TCA cycle occurs in the mitochondrial matrix",
      keyIdea: "acetyl-CoA entry -> oxidation/decarboxylation -> reduced carriers -> acceptor regeneration.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The TCA cycle occurs in the mitochondrial matrix. Acetyl-CoA enters the cyclic pathway; carbon is released as CO2, reduced coenzymes are produced and the cycle's acceptor is regenerated. A substrate-level phosphorylation step is also part of the cycle.",
            },
          ],
        },
      ],
    },
    {
      id: "ets-and-oxidative-phosphorylation",
      title: "6. Oxygen is the terminal electron acceptor in the ETS",
      keyIdea: "reduced carriers -> ETS -> proton gradient -> ATP synthase -> ATP.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The electron-transport system is associated with the inner mitochondrial membrane. Reduced carriers donate electrons through carriers. Energy released supports proton translocation and a proton gradient. Oxygen accepts electrons at the end and contributes to water formation. Proton flow through ATP synthase drives ATP formation.",
            },
          ],
        },
      ],
    },
    {
      id: "energy-relations-atp-accounting",
      title: "7. Treat the ATP balance sheet as a conditional theoretical model, not a universal yield",
      keyIdea: "NCERT theoretical balance-sheet model under stated assumptions; not a universal in-vivo yield.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "NCERT presents a theoretical respiratory balance sheet under simplifying assumptions: pathways run sequentially without diversion of intermediates, glycolytic reducing equivalents are effectively transferred to mitochondria, respiratory intermediates are not withdrawn for biosynthesis and glucose is treated as the sole substrate.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Under that traditional NCERT theoretical model, the balance sheet gives 38 ATP per glucose. This number must never be presented alone; it must carry the theoretical-model label. Living cells commonly violate the simplified assumptions because pathways are integrated, intermediates are diverted and substrates/transport costs differ.",
            },
          ],
        },
      ],
    },
    {
      id: "amphibolic-pathway",
      title: "8. Respiration is amphibolic, linking catabolism and anabolism",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Respiration is catabolic, but respiratory intermediates also feed biosynthetic pathways; fats and proteins can enter respiration through appropriate intermediates. This makes the respiratory pathway amphibolic, linking catabolism and anabolism.",
            },
          ],
        },
      ],
    },
    {
      id: "respiratory-quotient",
      title: "9. Respiratory quotient reflects the substrate/oxidation relationship",
      keyIdea: "RQ = volume of CO2 evolved / volume of O2 consumed.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At NCERT-level interpretation: carbohydrate gives an RQ of about 1 in complete aerobic oxidation; fat generally gives an RQ below 1; organic acids can give an RQ exceeding 1. RQ reflects the substrate/oxidation relationship, not the overall rate of respiration.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "process-location-input-output",
      slot: "concepts",
      heading: "Stage, location, input and output matrix",
      jump: true,
      columns: ["Stage", "Location", "Input relationship", "Output relationship", "O2 directly used?", "Confusion control"],
      rows: [
        ["Gas exchange", "Diffusion surfaces", "Gas gradients", "O2/CO2 diffusion", "Not a metabolic-stage question", "Not glycolysis"],
        ["Glycolysis", "Cytoplasm", "Glucose", "Pyruvate + reduced carriers + limited ATP", "No", "Shared by aerobic and fermentative routes"],
        ["Fermentation", "Cytoplasm", "Pyruvate + carrier recycling", "Ethanol+CO2 or lactate", "No", "Partial oxidation"],
        ["Pyruvate oxidation", "Mitochondrial matrix", "Pyruvate", "Acetyl-CoA + CO2 + reduced carrier", "No direct O2 use", "Bridge before TCA"],
        ["TCA", "Mitochondrial matrix", "Acetyl-CoA", "CO2 + reduced carriers + substrate-level energy", "No direct O2 use", "Aerobic dependence is indirect, through carrier reoxidation"],
        ["ETS", "Inner mitochondrial membrane", "Reduced carriers + O2", "Oxidised carriers + H2O + ATP", "Yes", "Oxygen is the terminal acceptor"],
      ],
    },
    {
      id: "aerobic-vs-fermentative",
      slot: "concepts",
      heading: "Aerobic vs fermentative/anaerobic relationship",
      jump: true,
      columns: ["Dimension", "Aerobic respiration", "Fermentative/anaerobic route"],
      rows: [
        ["Glycolysis", "Present", "Present"],
        ["Pyruvate fate", "Mitochondrial oxidation", "Fermentation products"],
        ["TCA", "Present in the full aerobic route", "Absent as the terminal oxidation route"],
        ["O2-linked ETS", "Present", "Absent"],
        ["Oxidation", "Much more complete", "Partial"],
        ["Energy capture", "Much greater", "Limited mainly to glycolytic substrate-level phosphorylation"],
      ],
    },
    {
      id: "rq-dataset",
      slot: "concepts",
      heading: "Respiratory quotient by substrate class",
      jump: true,
      columns: ["Substrate class", "RQ relationship", "Meaning"],
      rows: [
        ["Carbohydrate", "About 1", "CO2/O2 approximately equal in simplified complete oxidation"],
        ["Fat", "Below 1", "More O2 consumed relative to CO2 evolved"],
        ["Organic acid", "Can exceed 1", "CO2 evolved can exceed O2 consumed"],
      ],
    },
  ],

  mistakes: [
    {
      id: "oxygen-used-in-glycolysis",
      mistake: "Believing oxygen is used directly in glycolysis.",
      why: [{ type: "paragraph", children: [{ text: "Glycolysis does not directly consume oxygen; oxygen is the terminal electron acceptor in the aerobic ETS, a later stage." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the stage-location table before assigning direct oxygen use to glycolysis." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "gas-exchange-equals-cellular-respiration",
      mistake: "Treating gas exchange as the same process as cellular respiration.",
      why: [{ type: "paragraph", children: [{ text: "Gas movement between organism and environment (diffusion) is a distinct process from biochemical substrate oxidation inside cells." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate diffusion-based gas exchange from biochemical cellular respiration explicitly." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "tca-in-cytoplasm",
      mistake: "Placing the TCA cycle in the cytoplasm.",
      why: [{ type: "paragraph", children: [{ text: "The TCA cycle occurs in the mitochondrial matrix, not the cytoplasm." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Recheck the location column of the stage-location table before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "38-atp-universal",
      mistake: "Treating 38 ATP per glucose as a universal in-vivo yield.",
      why: [{ type: "paragraph", children: [{ text: "The 38 ATP figure is a theoretical NCERT balance-sheet result under stated simplifying assumptions that living cells commonly violate." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always attach the explicit theoretical-model conditions when citing the 38 ATP figure, and never present it as universal." }] }],
      errorType: "decision-error",
    },
    {
      id: "respiration-purely-catabolic",
      mistake: "Treating respiration as purely catabolic.",
      why: [{ type: "paragraph", children: [{ text: "Respiratory intermediates also feed biosynthetic pathways, making the pathway amphibolic rather than purely catabolic." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Recall the amphibolic relationship linking catabolism and anabolism through shared intermediates." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Plant Physiology",
      url: "/neet/biology/plant-physiology",
      relation: "up",
      description: "Current Unit 4 umbrella; integrates respiration with photosynthesis and Growth and Development.",
    },
    {
      label: "Photosynthesis",
      url: "/neet/biology/photosynthesis",
      relation: "related",
      description: "Complementary process that produces the organic substrates oxidised during respiration.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Carbohydrate structure background used for glucose-oxidation reasoning.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Mitochondrial structure underlies matrix and inner-membrane location reasoning.",
    },
  ],

  links: [
    {
      label: "Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Exam-level official Biology syllabus mapping.",
    },
  ],

  sources: ["nta-neet-2026-bulletin", "nmc-neet-ug-2026-syllabus", "ncert-biology-11-contents"],
  sourceNote:
    "Aligned to the current NCERT Respiration in Plants chapter (Class XI) for process order, location, theoretical balance-sheet caveat, amphibolic interpretation and respiratory quotient. The 38-ATP figure is retained only with the textbook-model assumptions stated explicitly. University-level shuttle chemistry, respiratory-chain subunit detail and any unconditional ATP-yield claim are excluded.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],

  faqs: [
    {
      question: "Does glycolysis require oxygen?",
      answer: [{ type: "paragraph", children: [{ text: "No. Oxygen is directly used as the terminal electron acceptor in the aerobic ETS, not as a glycolytic reactant." }] }],
    },
    {
      question: "Why is respiration amphibolic?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Respiratory pathways both break down substrates for energy and supply intermediates that biosynthetic pathways use, linking catabolism and anabolism." }],
        },
      ],
    },
    {
      question: "Is 38 ATP per glucose always produced?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. It is a theoretical NCERT balance-sheet figure under specific simplifying assumptions, not a universal in-vivo yield." }],
        },
      ],
    },
  ],

  contentStatus: "draft",
  meta: {
    title: "NEET Respiration in Plants 2026: Glycolysis, TCA, ETS, RQ",
    description:
      "Learn NEET UG 2026 plant respiration with a verified map for glycolysis, fermentation, TCA, ETS, conditional ATP accounting, amphibolic pathways and RQ.",
  },
};

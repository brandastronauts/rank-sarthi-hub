import type { ChapterContent } from "@/content/types";

/**
 * Plant Physiology — T06 production content (N03-01).
 *
 * Route classification: CURRENT_OFFICIAL_SCOPE (Unit 4 official unit umbrella).
 * This page owns the complete current Plant Growth and Development scope and
 * gives an overview-and-relationship treatment of Photosynthesis and
 * Respiration, whose deep content is owned by the dedicated child pages
 * /neet/biology/photosynthesis and /neet/biology/respiration-in-plants.
 * /neet/biology/transport-in-plants remains outside verified current NEET UG
 * 2026 Unit 4 scope under the frozen N01 classification and is not restored
 * here.
 *
 * Evidence discipline: no weightage, PYQ frequency, question counts or
 * predictions are asserted. contentStatus stays "draft" pending academic
 * review; no reviewer/author id exists yet.
 */
export const neetBiologyPlantPhysiology: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Plant Physiology",
  slug: "plant-physiology",
  url: "/neet/biology/plant-physiology",
  canonicalIntent:
    "Serve as the current NEET UG 2026 Plant Physiology umbrella for the verified Unit 4 map: route deep Photosynthesis and Respiration content to their focused child pages, and own complete current-scope treatment of Plant Growth and Development.",

  heroChips: [
    "Current NEET UG 2026 Unit 4 umbrella",
    "Photosynthesis and Respiration are routed to focused child pages",
    "No invented weightage, question counts or trend claims",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET UG 2026, Plant Physiology is best learned as three linked systems: photosynthesis captures light energy and fixes carbon, respiration releases usable energy and supplies metabolic intermediates, and Plant Growth and Development explains how cells divide, enlarge, differentiate and respond to plant growth regulators.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This umbrella page owns the complete current Growth and Development layer, while the two dedicated process pages own deeper Photosynthesis and Respiration content.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "Transport in Plants is not presented as current Unit 4 scope on this site. This page does not publish invented weightage, expected question counts or trend percentages.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Anatomy of Plants",
      url: "/neet/biology/anatomy-of-plants",
      relation: "prerequisite",
      description: "Tissue and organ structure in plants underlies growth-phase and differentiation reasoning.",
    },
    {
      label: "Morphology of Plants",
      url: "/neet/biology/morphology-of-plants",
      relation: "related",
      description: "External plant organisation supports the germination and growth context used here.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the Biology chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 4, Plant Physiology",
    topics: [
      "Photosynthesis (overview and dependency; deep content on the Photosynthesis page)",
      "Respiration (overview and dependency; deep content on the Respiration in Plants page)",
      "Plant Growth and Development",
      "Seed germination",
      "Phases of plant growth",
      "Growth rate and conditions of growth",
      "Differentiation, dedifferentiation and redifferentiation",
      "Development and plasticity",
      "Plant growth regulators: auxin, gibberellin, cytokinin, ethylene, abscisic acid",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "unit-4-relationship-map",
      title: "1. See photosynthesis, respiration and development as one connected map",
      keyIdea: "Photosynthesis and respiration are not simple opposite equations; they connect through shared organic substrates.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The relationship chain runs: light capture leads to photochemical energy conversion, which leads to carbon fixation, which produces organic molecules. Those organic substrates then connect to glycolysis, which leads to the TCA cycle and electron transport system or fermentation, producing ATP and metabolic intermediates.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "A separate development branch runs: germination leads to cell division, leads to elongation, leads to maturation, leads to differentiation, leads to development. Plant growth regulators and environmental conditions modify this developmental sequence.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Photosynthesis builds reduced carbon compounds using light-derived energy; respiration oxidises substrates to make energy available for cellular work and to supply intermediates. They are complementary processes, not mirror images of each other.",
            },
          ],
        },
      ],
    },
    {
      id: "seed-germination",
      title: "2. Germination is the resumption of embryo growth under suitable conditions",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Germination is the resumption of embryo growth once conditions are suitable. At current syllabus depth, a viable seed requires appropriate water, oxygen and temperature conditions before growth can resume. Not every seed has identical environmental requirements, so this should not be treated as one universal condition set.",
            },
          ],
        },
      ],
    },
    {
      id: "phases-of-growth",
      title: "3. Growth proceeds through meristematic, elongation and maturation phases",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Meristematic phase: ", bold: true }, { text: "cells divide actively; they are small, metabolically active and have thin primary walls." }],
            [{ text: "Elongation phase: ", bold: true }, { text: "cells increase in size, vacuolation develops and wall material is deposited." }],
            [{ text: "Maturation phase: ", bold: true }, { text: "cells attain mature size and acquire specialised structural and functional features." }],
          ],
        },
      ],
    },
    {
      id: "growth-rate",
      title: "4. Growth rate models describe patterns, not universal constants",
      keyIdea: "Arithmetic growth is linear; geometric growth is exponential under ideal conditions; whole-organ growth is commonly sigmoid.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Growth rate is increase per unit time. Under the simplified NCERT arithmetic-growth model, one daughter cell continues division while the other differentiates, producing a linear pattern. In geometric growth, both daughter cells continue dividing, producing an exponential phase under ideal conditions.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Whole-organ growth commonly produces a sigmoid pattern because indefinite exponential growth does not continue. Absolute growth rate is total increase per unit time; relative growth rate is increase relative to initial size over the same interval. These models should not be converted into universal plant constants.",
            },
          ],
        },
      ],
    },
    {
      id: "conditions-of-growth",
      title: "5. Growth depends on internal capacity plus interacting environmental conditions",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Growth depends on internal capacity plus environmental conditions. The current NCERT relationship supports water, oxygen, nutrients, temperature and light as enabling or modulating conditions. These should be taught as interacting factors rather than one-factor guarantees.",
            },
          ],
        },
      ],
    },
    {
      id: "differentiation-dedifferentiation-redifferentiation",
      title: "6. Differentiation, dedifferentiation and redifferentiation form a reversible sequence",
      keyIdea: "differentiated living cell -> regained division capacity -> new cells -> mature specialised cells.",
      body: [
        {
          type: "definition",
          term: "Differentiation",
          children: [{ text: "Acquisition of specialised structure and function by cells derived from meristems. The decisive idea is specialisation, not just increase in cell size." }],
        },
        {
          type: "definition",
          term: "Dedifferentiation",
          children: [{ text: "Living differentiated cells regaining the capacity to divide. NCERT examples include formation of interfascicular cambium and cork cambium from differentiated parenchymatous cells." }],
        },
        {
          type: "definition",
          term: "Redifferentiation",
          children: [{ text: "Cells produced from a dedifferentiated meristem later maturing and becoming specialised again, losing active division capacity." }],
        },
      ],
    },
    {
      id: "development",
      title: "7. Development is the plastic, coordinated outcome of growth and differentiation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Plant development is the coordinated outcome of growth and differentiation across the life cycle. Development is plastic because both internal signals and the environment can influence the path taken by cells and organs.",
            },
          ],
        },
      ],
    },
    {
      id: "plant-growth-regulators",
      title: "8. Match each plant growth regulator to its distinguishing relationship",
      keyIdea: "No regulator is a universal promoter in every tissue and concentration; use regulator-specific context.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Auxin commonly promotes cell elongation and is involved in apical dominance, rooting and developmental responses, but it is not a universal promoter in every tissue or concentration. Gibberellin promotes stem and internode elongation and can support bolting and other growth transitions; it should not be interchanged with cytokinin merely because both can support growth.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Cytokinin is strongly associated with cell division, supports shoot development and can delay senescence through nutrient mobilisation, distinguishing it from auxin's elongation emphasis. Ethylene is a gaseous regulator associated with fruit ripening, senescence and abscission and characteristic growth responses; fruit ripening is not its only effect. Abscisic acid (ABA) is generally associated with growth inhibition and stress responses, including stomatal closure under water stress at NCERT depth, and should not be treated as simply harmful or inactive in development.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "unit-4-map",
      slot: "scope",
      heading: "Current Unit 4 ownership map",
      jump: true,
      intro: "Verified current NEET UG 2026 Unit 4 scope, cross-checked against current NCERT Biology Class XI Unit IV contents.",
      columns: ["Topic", "Owning route", "Depth here"],
      rows: [
        ["Photosynthesis", "/neet/biology/photosynthesis", "Overview and dependency only; deep content owned by the child page."],
        ["Respiration", "/neet/biology/respiration-in-plants", "Overview and dependency only; deep content owned by the child page."],
        ["Plant Growth and Development", "/neet/biology/plant-physiology", "Focused, complete ownership on this page."],
        ["Transport in Plants", "Not routed as current Unit 4 scope", "Excluded under the frozen classification for this site."],
      ],
      note: "Current NCERT Class XI contents place Photosynthesis in Higher Plants, Respiration in Plants and Plant Growth and Development together in Unit IV.",
    },
    {
      id: "plant-growth-regulators-table",
      slot: "concepts",
      heading: "Plant growth regulators: relationship and high-risk confusion",
      jump: true,
      columns: ["Regulator", "Source-verified NCERT relationship", "High-risk confusion"],
      rows: [
        ["Auxin", "Commonly promotes cell elongation; involved in apical dominance, rooting and developmental responses.", "Not a universal promoter in every tissue/concentration."],
        ["Gibberellin", "Promotes stem/internode elongation and can support bolting and other growth transitions.", "Do not interchange with cytokinin merely because both can support growth."],
        ["Cytokinin", "Strongly associated with cell division; supports shoot development and can delay senescence through nutrient mobilisation.", "Distinguish cell-division relationship from auxin elongation emphasis."],
        ["Ethylene", "Gaseous regulator associated with fruit ripening, senescence/abscission and characteristic growth responses.", "Fruit ripening is not its only effect."],
        ["ABA", "Generally associated with growth inhibition and stress responses, including stomatal closure under water stress at NCERT depth.", "Do not treat ABA as simply harmful or inactive in development."],
      ],
    },
    {
      id: "growth-process-dataset",
      slot: "concepts",
      heading: "Growth-process dataset: defining relationships and confusion controls",
      jump: true,
      columns: ["Process", "Defining relationship", "What changes", "Confusion control"],
      rows: [
        ["Growth", "Irreversible increase associated with cellular activity.", "Size/biomass.", "Broader development is not identical to growth."],
        ["Differentiation", "Acquisition of specialised structure/function.", "Cell identity/function.", "Not mere enlargement."],
        ["Dedifferentiation", "Differentiated living cell regains division capacity.", "Mitotic competence.", "Opposite direction from redifferentiation."],
        ["Redifferentiation", "Cells produced after dedifferentiation specialise again.", "Mature structure/function.", "Not the initial return to division."],
        ["Development", "Integrated growth plus differentiation over time.", "Organismal form/function.", "Not growth rate alone."],
      ],
    },
    {
      id: "photosynthesis-vs-respiration",
      slot: "concepts",
      heading: "Photosynthesis vs respiration: relationship, not opposite equations",
      jump: true,
      columns: ["Dimension", "Photosynthesis", "Respiration"],
      rows: [
        ["Core role", "Captures light energy and builds reduced carbon compounds.", "Releases usable energy from organic substrates and generates intermediates."],
        ["Main organelle context", "Chloroplast.", "Cytosol plus mitochondria in the aerobic sequence."],
        ["Carbon direction", "CO2 fixation.", "Oxidation/decarboxylation of substrates."],
        ["Detailed owner", "/neet/biology/photosynthesis", "/neet/biology/respiration-in-plants"],
      ],
    },
  ],

  mistakes: [
    {
      id: "photosynthesis-respiration-opposites",
      mistake: "Treating photosynthesis and respiration as simple opposite equations.",
      why: [{ type: "paragraph", children: [{ text: "The two processes differ in role, cellular compartment and pathway; reversing one equation to get the other loses these distinctions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare role, compartment and pathway explicitly using the photosynthesis-vs-respiration table before answering." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "every-pgr-a-promoter",
      mistake: "Assuming every plant growth regulator is a growth promoter.",
      why: [{ type: "paragraph", children: [{ text: "ABA is generally inhibitory and stress-associated, and even promoting regulators are not universal promoters in every tissue or concentration." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use regulator-specific context from the plant growth regulator table rather than a single promoter/inhibitor label." }] }],
      errorType: "decision-error",
    },
    {
      id: "differentiation-as-enlargement",
      mistake: "Equating differentiation with simple cell enlargement.",
      why: [{ type: "paragraph", children: [{ text: "Differentiation is specialisation of structure and function, which is a distinct idea from an increase in cell size during elongation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the question describes specialisation (differentiation) or size increase (elongation/growth) before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "dedifferentiation-redifferentiation-swap",
      mistake: "Swapping dedifferentiation and redifferentiation.",
      why: [{ type: "paragraph", children: [{ text: "Dedifferentiation is regain of division capacity; redifferentiation is the later maturation of cells produced from that dividing tissue. They run in opposite directions of the same sequence." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Trace the sequence explicitly: differentiated living cell -> regained division capacity -> new cells -> mature specialised cells." }] }],
      errorType: "recall-gap",
    },
    {
      id: "transport-in-plants-scope-assumption",
      mistake: "Assuming Transport in Plants is included as current Unit 4 scope because it appears in older Plant Physiology treatments.",
      why: [{ type: "paragraph", children: [{ text: "The frozen current NEET UG 2026 classification for this site does not restore Transport in Plants as current Unit 4 scope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the unit ownership map on this page before assuming Transport in Plants is tested current scope." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Photosynthesis",
      url: "/neet/biology/photosynthesis",
      relation: "forward",
      description: "Deep treatment of pigments, photochemical reactions, chemiosmosis, Calvin cycle, C3/C4 and photorespiration.",
    },
    {
      label: "Respiration in Plants",
      url: "/neet/biology/respiration-in-plants",
      relation: "forward",
      description: "Deep treatment of glycolysis, fermentation, TCA cycle, ETS and respiratory quotient.",
    },
    {
      label: "Anatomy of Plants",
      url: "/neet/biology/anatomy-of-plants",
      relation: "prerequisite",
      description: "Tissue and organ structure that underlies growth-phase and differentiation reasoning.",
    },
    {
      label: "Morphology of Plants",
      url: "/neet/biology/morphology-of-plants",
      relation: "related",
      description: "External organisation of plants used for germination and growth context.",
    },
  ],

  links: [
    {
      label: "Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Exam-level official Biology syllabus mapping.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Biology subject hub.",
    },
  ],

  sources: ["nta-neet-2026-bulletin", "nmc-neet-ug-2026-syllabus", "ncert-biology-11-contents"],
  sourceNote:
    "Additional official documents used in production: the NCERT Photosynthesis in Higher Plants, Respiration in Plants and Plant Growth and Development chapter PDFs (Class XI, current reprint). Current NCERT Class XI contents place these three topics together in Unit IV. No chapter weightage, PYQ frequency, expected-question count, prediction or score promise is included.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],

  faqs: [
    {
      question: "What is included in Plant Physiology for NEET UG 2026?",
      answer: [{ type: "paragraph", children: [{ text: "Photosynthesis, Respiration and Plant Growth and Development." }] }],
    },
    {
      question: "Where is Plant Growth and Development covered on this site?",
      answer: [{ type: "paragraph", children: [{ text: "On this Plant Physiology umbrella page, because no separate dedicated Plant Growth and Development route exists in the current URL set." }] }],
    },
    {
      question: "What is the difference between dedifferentiation and redifferentiation?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Dedifferentiation is the regaining of division capacity by living differentiated cells. Redifferentiation is the later maturation and specialisation of cells produced from that dividing tissue.",
            },
          ],
        },
      ],
    },
  ],

  contentStatus: "draft",
  meta: {
    title: "NEET Plant Physiology 2026: Photosynthesis, Respiration, Plant Growth",
    description:
      "Study the verified NEET UG 2026 Plant Physiology scope with Photosynthesis, Respiration and complete Plant Growth and Development relationships and regulator maps.",
  },
};

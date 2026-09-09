import type { ChapterContent } from "@/content/types";

/**
 * Digestion and Absorption — T06 production content.
 * Classification: HISTORICAL_OR_NOT_CURRENTLY_LISTED.
 * Verified against the NEET UG 2026 syllabus: Digestion and Absorption is not
 * explicitly listed in current Human Physiology scope. This page is retained
 * as a contextual/foundational Biology resource only. It carries NO current-
 * 2026 badge, current-syllabus chapter claim, importance, weightage or
 * frequency claim. It is educational Biology only: no diet plans, symptom
 * interpretation, diagnosis, medication or treatment advice.
 */
export const neetBiologyDigestionAbsorption: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Digestion and Absorption",
  slug: "digestion-absorption",
  url: "/neet/biology/digestion-absorption",
  canonicalIntent:
    "Provide a transparent foundational Biology resource on human digestion and nutrient absorption while clearly stating that Digestion and Absorption is not explicitly listed in the verified NEET UG 2026 syllabus.",

  heroChips: [
    "Current NEET UG 2026 status: Not explicitly listed in the verified official syllabus.",
    "Contextual/foundation resource only — not a current-syllabus chapter",
    "No current NEET 2026 importance, weightage or frequency claims",
  ],

  directAnswer: [
    {
      type: "note",
      tone: "caution",
      children: [
        { text: "Current NEET UG 2026 status: Not explicitly listed in the verified official syllabus." },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page remains in the frozen Rank Sarthi architecture as a foundational human-physiology resource. It explains the alimentary canal, digestive glands, mechanical and chemical digestion, the main end products of carbohydrate/protein/fat digestion, absorption in the small intestine, assimilation and the large intestine's role.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "It is not presented as a current Unit 5 NEET UG 2026 chapter, and it carries no current-scope badge, importance label, weightage or PYQ frequency claim.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "This page is educational Biology only. It does not provide diet plans, symptom interpretation, diagnosis, medication, supplements or digestive-disease treatment advice.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Carbohydrate, protein and fat structure underlies digestion chemistry.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Membrane transport concepts underlie absorption mechanisms.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the Biology chapter set (contextual resource layer only).",
    },
  ],

  syllabusMapping: {
    unit: "Not part of verified NEET UG 2026 Unit 5 (Human Physiology)",
    topics: [
      "Historical/contextual foundation topic — not explicitly listed in the current official syllabus",
      "Alimentary canal and digestive glands",
      "Mechanical and chemical digestion",
      "Absorption and assimilation",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "why-page-exists",
      title: "1. Why this page still exists",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The frozen Rank Sarthi architecture retains this route as a contextual Biology foundation. It is not a current-syllabus child of Human Physiology and must not receive current-scope badges, current exam-importance labels, weightage, PYQ frequency or predicted-question claims.",
            },
          ],
        },
      ],
    },
    {
      id: "digestive-system-organisation",
      title: "2. Digestive-system organisation: alimentary canal and glands",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The human digestive system includes the alimentary canal and associated digestive glands. The alimentary canal sequence is: mouth/buccal cavity -> pharynx -> oesophagus -> stomach -> small intestine -> large intestine -> rectum -> anus. This is an anatomical route; digestion and absorption do not occur equally in every segment.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Salivary glands: ", bold: true }, { text: "release saliva into the oral cavity; salivary amylase begins starch digestion." }],
            [{ text: "Liver: ", bold: true }, { text: "produces bile. Bile does not contain digestive enzymes; its salts help emulsify fats and create conditions that support intestinal fat digestion." }],
            [{ text: "Gall bladder: ", bold: true }, { text: "stores and concentrates bile; it does not produce bile." }],
            [{ text: "Pancreas: ", bold: true }, { text: "exocrine pancreatic juice contributes enzymes for carbohydrate, protein, fat and nucleic-acid digestion in the small intestine." }],
            [{ text: "Intestinal mucosa/glands: ", bold: true }, { text: "provide intestinal secretions/brush-border enzymes that help complete digestion." }],
          ],
        },
      ],
    },
    {
      id: "mechanical-vs-chemical",
      title: "3. Mechanical digestion versus chemical digestion",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mechanical processing physically reduces or moves food, for example mastication, mixing/churning and peristaltic movement. Chemical digestion uses enzymes and chemical conditions to convert large food molecules into absorbable units. The two processes cooperate but are not synonyms.",
            },
          ],
        },
      ],
    },
    {
      id: "macronutrient-digestion",
      title: "4. Carbohydrate, protein and fat digestion relationships",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Carbohydrate digestion: polysaccharides/disaccharides -> enzymatic hydrolysis -> monosaccharides. Salivary amylase begins starch digestion in the mouth; pancreatic and intestinal enzymes complete carbohydrate digestion in the small intestine, yielding monosaccharides such as glucose.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Protein digestion: proteins -> peptides -> amino acids. Digestion begins substantially in the stomach under acidic conditions with proteolytic enzyme action and continues in the small intestine through pancreatic and intestinal peptidases, yielding amino acids as the final absorbable products.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Fat digestion: large fat droplets -> emulsified droplets -> lipase action -> fatty acids + glycerol/monoglyceride products. Bile supports emulsification rather than enzymatic hydrolysis; lipases carry out enzymatic fat digestion. The resulting lipid products enter intestinal epithelial cells through micelle-associated processes and are repackaged into chylomicrons that enter lacteals/lymph before reaching the blood circulation.",
            },
          ],
        },
      ],
    },
    {
      id: "absorption-assimilation",
      title: "5. Absorption and assimilation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Absorption is movement of digested end products through intestinal mucosa into blood or lymph. NCERT teaching depth includes passive/simple diffusion for some substances when gradients allow, facilitated transport through carrier proteins for some solutes, active transport for substances moved against concentration gradients, osmosis for water, and lymphatic transport for chylomicron-packaged lipids. The small intestine is the principal site for absorption because its mucosal surface, villi and microvilli provide large absorptive area.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Assimilation is the use of absorbed nutrients by body tissues for metabolism, growth, repair and storage. It occurs after absorption and should not be used as a synonym for digestion.",
            },
          ],
        },
      ],
    },
    {
      id: "large-intestine",
      title: "6. Large intestine role",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At NCERT foundation depth, the large intestine absorbs some water, minerals and certain substances; secretes mucus that helps bind/lubricate faecal material; and moves undigested material toward rectal storage and egestion. It is not the main site of macromolecule digestion.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "alimentary-canal-dataset",
      slot: "concepts",
      jump: true,
      heading: "Alimentary-canal dataset",
      columns: ["Segment", "Core foundation role", "High-risk distinction"],
      rows: [
        ["Mouth/buccal cavity", "Ingestion, mastication, saliva mixing, starch digestion begins", "Digestion begins before stomach"],
        ["Pharynx/oesophagus", "Swallowing and transport by coordinated movement/peristalsis", "Primarily transport, not major digestion"],
        ["Stomach", "Storage/mixing, acidic environment, major beginning of protein digestion", "Not main absorption site"],
        ["Small intestine", "Most enzymatic digestion completed and principal absorption occurs", "Central digestion/absorption site"],
        ["Large intestine", "Some water/mineral absorption, mucus, faecal consolidation", "Not main nutrient-digestion site"],
        ["Rectum/anus", "Storage and egestion route", "Egestion differs from excretion"],
      ],
    },
    {
      id: "digestive-gland-dataset",
      slot: "concepts",
      jump: true,
      heading: "Digestive-gland dataset",
      columns: ["Gland/organ", "Secretion/function", "Key correction"],
      rows: [
        ["Salivary glands", "Saliva + salivary amylase", "Starts starch digestion"],
        ["Liver", "Produces bile", "Bile has no digestive enzymes"],
        ["Gall bladder", "Stores/concentrates bile", "Does not make bile"],
        ["Pancreas", "Digestive enzymes in pancreatic juice", "Exocrine digestive role distinct from endocrine hormones"],
        ["Intestinal mucosa", "Intestinal/brush-border enzymes", "Helps complete digestion"],
      ],
    },
    {
      id: "macronutrient-matrix",
      slot: "concepts",
      jump: true,
      heading: "Macronutrient relationship matrix",
      columns: ["Nutrient", "Main simplified pathway", "Absorbable end-product concept"],
      rows: [
        ["Carbohydrates", "Complex carbohydrate -> smaller sugars -> monosaccharides", "Monosaccharides, including glucose"],
        ["Proteins", "Proteins -> peptides -> amino acids", "Amino acids"],
        ["Fats", "Emulsification + lipase digestion", "Fatty acids/glycerol-related products, repackaged for lymph transport"],
      ],
    },
  ],

  mistakes: [
    {
      id: "treated-as-current-chapter",
      mistake: "Page treated as a current NEET UG 2026 Unit 5 chapter.",
      why: [{ type: "paragraph", children: [{ text: "Digestion and Absorption is not explicitly listed in the verified current syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat this route as a historical/not-currently-listed contextual resource, not a current chapter." }] }],
      errorType: "decision-error",
    },
    {
      id: "bile-as-enzyme",
      mistake: "Bile described as a digestive enzyme.",
      why: [{ type: "paragraph", children: [{ text: "Bile supports fat emulsification but contains no digestive enzyme." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State bile's role as emulsification support, distinct from enzymatic hydrolysis." }] }],
      errorType: "recall-gap",
    },
    {
      id: "digestion-absorption-same",
      mistake: "Digestion and absorption treated as the same process.",
      why: [{ type: "paragraph", children: [{ text: "Digestion breaks down food; absorption moves the products across the intestinal mucosa." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the breakdown step and the transport-across-mucosa step conceptually separate." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "gall-bladder-produces-bile",
      mistake: "Gall bladder said to produce bile.",
      why: [{ type: "paragraph", children: [{ text: "The liver produces bile; the gall bladder stores and concentrates it." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Attribute bile production to the liver and storage/concentration to the gall bladder." }] }],
      errorType: "recall-gap",
    },
    {
      id: "assimilation-confused",
      mistake: "Assimilation confused with absorption.",
      why: [{ type: "paragraph", children: [{ text: "Assimilation is tissue use of nutrients after absorption has already occurred." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Place assimilation as a step after absorption, not as a synonym for it." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "egestion-excretion-confused",
      mistake: "Egestion confused with excretion.",
      why: [{ type: "paragraph", children: [{ text: "Egestion removes undigested material; excretion removes metabolic wastes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Distinguish undigested-material removal from metabolic-waste removal." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Human Physiology",
      url: "/neet/biology/human-physiology",
      relation: "related",
      description: "Contextual link only; Digestion and Absorption is not a current Unit 5 child.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Carbohydrate, protein and fat structure that underlies digestion chemistry.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Membrane transport concepts used in absorption mechanisms.",
    },
  ],

  links: [
    {
      label: "NEET Biology hub",
      url: "/neet/biology",
      relation: "up",
      description: "Contextual resource layer; not current-syllabus navigation.",
    },
  ],

  faqs: [
    {
      question: "Is Digestion and Absorption explicitly in the NEET UG 2026 syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. It is not explicitly listed in the verified NEET UG 2026 Human Physiology scope. Rank Sarthi retains this page as a contextual Biology foundation.",
            },
          ],
        },
      ],
    },
    {
      question: "Where does most nutrient absorption occur?",
      answer: [
        { type: "paragraph", children: [{ text: "At NCERT foundation depth, the small intestine is the principal site of nutrient absorption." }] },
      ],
    },
    {
      question: "Does bile contain digestive enzymes?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Bile supports fat emulsification and intestinal digestion conditions but does not itself contain digestive enzymes.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Checked against the NMC/NTA NEET UG 2026 syllabus for non-inclusion, and against NCERT Class XI Exemplar Digestion and Absorption teaching material as the historical/contextual foundation source: https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXI/biology/keep416.pdf. SATHEE mirror used only where direct NCERT retrieval was difficult: https://sathee.iitk.ac.in/ncert-books/ncert-books-theory/class-11/nbt-bio-11/bio-11-chapter-16-digestion-and-absorption/. This page does not interpret digestive symptoms, recommend diets, prescribe treatment, suggest supplements or diagnose digestive disorders.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
  ],

  contentStatus: "draft",

  meta: {
    title: "Biology Foundation: Digestion and Absorption | Current NEET 2026 Status",
    description:
      "Learn foundational digestion and absorption biology with alimentary canal, digestive glands, nutrient breakdown and absorption. Not explicitly listed in NEET UG 2026.",
  },
};

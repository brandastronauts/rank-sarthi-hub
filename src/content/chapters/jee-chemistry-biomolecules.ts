import type { ChapterContent } from "@/content/types";

/**
 * Biomolecules — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - This is a Chemistry page, not medical, nutrition, or health guidance.
 * - Scope check verified against the current JEE Main 2026 syllabus (general
 *   introduction and importance; carbohydrate classification, aldoses and
 *   ketoses, glucose, fructose, and monosaccharide constituents of sucrose,
 *   lactose and maltose; alpha-amino acids, peptide bonds, polypeptides,
 *   qualitative protein-structure levels, denaturation and enzymes; vitamin
 *   classification and functions; DNA and RNA chemical constitution and
 *   biological functions; general introduction to hormones) and the JEE
 *   Advanced 2026 syllabus (carbohydrate classification; glucose and
 *   sucrose; oxidation, reduction, glycoside formation, hydrolysis of
 *   sucrose, maltose and lactose, and anomers; amino acids, peptide linkage,
 *   primary and secondary peptide structure, fibrous and globular proteins;
 *   chemical composition and structure of DNA and RNA). Vitamins, enzymes,
 *   and hormones are Main-listed and are not silently relabelled as
 *   Advanced 2026 scope on this page.
 */
export const jeeChemistryBiomolecules: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Biomolecules",
  slug: "biomolecules",
  url: "/jee/chemistry/biomolecules",
  canonicalIntent:
    "Organise examination-relevant biomolecules by chemical class, monomer or component, linkage, structure level, characteristic transformation, and explicit syllabus depth.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Chemistry-first, not nutrition or health guidance",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For JEE Chemistry, biomolecules should be organised by chemical class, building units, linkage, structural representation, and syllabus-listed transformations, not by biological or nutritional framing.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "In a carbohydrate question, identify carbonyl class, ring form, anomeric carbon, and glycosidic linkage. In a protein question, separate amino acid, peptide bond, and structure level. In nucleic acids, distinguish components and backbone from biological function.",
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
      description: "Functional-group identification and stereoisomerism language needed for carbohydrate and amino-acid structure.",
    },
    {
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "prerequisite",
      description: "Hydroxyl-group behaviour underlies carbohydrate structure and glycoside formation.",
    },
    {
      label: "Aldehydes and Ketones",
      url: "/jee/chemistry/aldehydes-ketones",
      relation: "prerequisite",
      description: "Carbonyl classification is the basis for distinguishing aldoses from ketoses.",
    },
    {
      label: "Amines",
      url: "/jee/chemistry/amines",
      relation: "prerequisite",
      description: "Nitrogen functionality and basicity are needed to understand amino-acid acid-base behaviour.",
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
    unit: "Biomolecules",
    topics: [
      "Carbohydrate classification, aldoses and ketoses",
      "Glucose, fructose, and monosaccharide constituents of sucrose, lactose and maltose",
      "Oxidation, reduction, glycoside formation, hydrolysis of disaccharides, and anomers",
      "Alpha-amino acids, peptide bonds, and polypeptides",
      "Primary and secondary peptide structure, fibrous and globular proteins",
      "Qualitative protein-structure levels, denaturation, and enzymes",
      "Vitamin classification and functions",
      "DNA and RNA chemical constitution and biological functions",
      "General introduction to hormones",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "chemical-class",
      title: "1. Fix the chemical class and its exam scope",
      keyIdea: "Carbohydrate, amino acid, peptide or protein, nucleic acid, vitamin, enzyme, or hormone, each within the correct exam scope.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Before analysing a biomolecule question, name the chemical class involved and check whether that class is listed for the examination being prepared for. Main and Advanced lists differ, so a class-level check comes before any structural discussion.",
            },
          ],
        },
      ],
    },
    {
      id: "constituent-unit",
      title: "2. Identify the constituent unit being tested",
      keyIdea: "Identify the monosaccharide, amino acid, sugar, base, or phosphate component being tested.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A disaccharide question is really a question about its monosaccharide constituents and how they are joined. A peptide question is really a question about its amino-acid residues. A nucleotide question is really a question about its base, sugar, and phosphate parts.",
            },
          ],
        },
      ],
    },
    {
      id: "linkage",
      title: "3. Determine the linkage type",
      keyIdea: "Glycosidic, peptide, or phosphodiester linkage determines how units are connected and what hydrolysis can produce.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A glycosidic linkage joins sugar units, a peptide (amide) linkage joins amino-acid residues, and a phosphodiester linkage joins nucleotide units in a nucleic-acid backbone. Confusing these linkages leads directly to incorrect hydrolysis products.",
            },
          ],
        },
      ],
    },
    {
      id: "structure-level",
      title: "4. Identify the structure level being asked about",
      keyIdea: "Open-chain versus cyclic sugar, alpha versus beta anomer, primary versus higher protein structure, or nucleotide sequence versus larger nucleic-acid structure.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A carbohydrate can be represented in an open-chain form or a cyclic form with an anomeric centre. A protein has qualitative structure levels from primary sequence upward. Nucleic acids have a composition level and a larger organisational level. Match the question to the correct level before answering.",
            },
          ],
        },
      ],
    },
    {
      id: "chemical-behaviour",
      title: "5. Restrict chemical behaviour to what current scope supports",
      keyIdea: "Oxidation, reduction, glycoside formation, hydrolysis, acid-base form, or denaturation only where current scope supports it.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Advanced 2026 explicitly names oxidation, reduction, glycoside formation, hydrolysis of specific disaccharides, and anomers. Main 2026 additionally names denaturation and enzymes in its qualitative protein treatment. Apply only the behaviour that the relevant syllabus supports for the examination in question.",
            },
          ],
        },
      ],
    },
    {
      id: "evidence-boundary",
      title: "6. Hold the evidence boundary against biological or nutritional drift",
      keyIdea: "Do not add nutrition claims, disease advice, or detailed molecular biology simply because it is scientifically related.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "This is a Chemistry page. Biological function statements for DNA, RNA, vitamins, and hormones are limited to what the official syllabus explicitly requests, and no nutrition, health, or disease content is added on top of the chemical treatment.",
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
          "Organising carbohydrates, proteins, and nucleic acids by chemical class, constituent unit, linkage, structure level, and syllabus-listed chemical behaviour.",
        ],
        [
          "What is the central method choice?",
          "Fix the chemical class and its exam scope, identify the constituent unit, determine the linkage, and match the structure level before answering.",
        ],
        [
          "Where do most mistakes begin?",
          "Turning the chapter into nutrition content, mixing Main-only topics like vitamins and hormones into Advanced scope, and calling every disaccharide non-reducing.",
        ],
        [
          "What should come before Biomolecules?",
          "Organic Basics, Alcohols Phenols and Ethers, Aldehydes and Ketones, and Amines for the underlying functional-group chemistry.",
        ],
        [
          "What comes after it?",
          "Chemistry in Everyday Life applies functional-group knowledge further, and Polymers is a related but separate Advanced-only large-molecule topic.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Biomolecules",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. Both examinations include carbohydrates, proteins, and nucleic acids, but their lists differ.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "General introduction and carbohydrate classification",
          "General introduction and importance; carbohydrate classification, aldoses and ketoses, glucose, fructose, and monosaccharide constituents of sucrose, lactose and maltose are explicitly listed.",
          "Carbohydrate classification, glucose, and sucrose are explicitly listed.",
          "Learn carbonyl classification before anomer and linkage detail.",
        ],
        [
          "Carbohydrate chemical behaviour",
          "Not named with this specific reaction detail beyond general classification.",
          "Oxidation, reduction, glycoside formation, hydrolysis of sucrose, maltose and lactose, and anomers are explicitly listed.",
          "Apply oxidation, reduction, and hydrolysis reasoning only where the relevant syllabus lists it.",
        ],
        [
          "Amino acids, peptides, and protein structure",
          "Alpha-amino acids, peptide bonds, polypeptides, qualitative protein-structure levels, denaturation and enzymes are explicitly listed.",
          "Amino acids, peptide linkage, primary and secondary peptide structure, and fibrous and globular proteins are explicitly listed.",
          "Denaturation and enzymes are a Main-specific addition; do not silently extend them to Advanced.",
        ],
        [
          "Vitamins and hormones",
          "Vitamin classification and functions, and a general introduction to hormones, are explicitly listed.",
          "Not listed in the biomolecule section.",
          "Keep vitamin and hormone content out of Advanced-scope study material.",
        ],
        [
          "DNA and RNA",
          "Chemical constitution and biological functions of DNA and RNA are explicitly listed.",
          "Chemical composition and structure of DNA and RNA are explicitly listed.",
          "Keep the chemical composition treatment separate from the biological-function statement.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Biomolecules",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Functional-group identification",
          "Identify aldehyde, ketone, alcohol, amine, and carboxyl groups on sight.",
          "Revise Organic Basics and the relevant functional-group chapters.",
        ],
        [
          "Stereoisomerism within the official boundary",
          "Recognise stereocentres without exceeding the syllabus-defined depth.",
          "Revise stereoisomerism coverage in Organic Basics.",
        ],
        [
          "Condensation and hydrolysis",
          "Explain how a small molecule is eliminated or added when two units join or separate.",
          "Revise condensation and hydrolysis in the relevant functional-group chapters.",
        ],
        [
          "Oxidation-reduction language",
          "Describe a transformation as an oxidation or reduction at a specific carbon.",
          "Revise oxidation-state assignment for organic carbons.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: classify before comparing",
      intro: "Match the question signal to the correct first model before any comparison.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Aldose or ketose", "Carbonyl position in the open-chain representation", "Named sugar and cyclic equilibrium context"],
        ["Alpha or beta sugar form", "Anomeric configuration", "Identify the anomeric carbon correctly"],
        ["Reducing versus non-reducing disaccharide", "Free anomeric centre", "Which anomeric carbons form the glycosidic bond"],
        ["Hydrolysis product", "Linkage cleavage", "Constituent monosaccharides and stoichiometry"],
        ["Peptide question", "Amino-acid sequence and peptide bonds", "N-terminus, C-terminus, and residue count"],
        ["Protein structure", "Level-specific interaction", "Do not confuse denaturation with routine peptide-bond hydrolysis"],
        ["DNA versus RNA", "Sugar, bases, and strand structure within scope", "Chemical composition before biological function"],
      ],
    },
    {
      id: "identity-relation-records",
      jump: true,
      slot: "concepts",
      heading: "Identity and relation records",
      intro: "Every entity is fixed by chemical identity, key relation, and a stated boundary or trap.",
      columns: ["Entity", "Chemical identity", "Key relation", "Boundary or trap"],
      rows: [
        [
          "Glucose",
          "Aldohexose in its open-chain classification; cyclic forms create anomers",
          "Oxidation, reduction, glycoside formation, and ring-chain representation are scope-dependent tools",
          "Do not infer all solution behaviour from only the open-chain drawing",
        ],
        [
          "Fructose",
          "Ketohexose in the Main-listed classification",
          "Its constituent role and structural form must be identified before comparison",
          "Advanced 2026 does not name fructose in its biomolecule line, so scope labels must remain separate",
        ],
        [
          "Sucrose",
          "Disaccharide of glucose and fructose",
          "Both relevant anomeric centres participate in its glycosidic linkage, so the standard molecule is non-reducing",
          "Hydrolysis products and reducing behaviour are different questions",
        ],
        [
          "Maltose",
          "Disaccharide containing two glucose units",
          "One anomeric centre remains available in the standard structure, enabling reducing behaviour",
          "Linkage identity must be checked before drawing",
        ],
        [
          "Lactose",
          "Disaccharide containing galactose and glucose",
          "A free anomeric centre supports reducing behaviour",
          "Do not call it a glucose-only disaccharide",
        ],
        [
          "Amino acid",
          "Contains amino and carboxyl functionality in the syllabus model",
          "Acid-base form depends on pH; amino acids can form zwitterions",
          "Charge state without pH or medium is incomplete",
        ],
        [
          "Peptide bond",
          "Amide linkage joining amino-acid residues",
          "Condensation forms the linkage and hydrolysis cleaves it",
          "Number of residues and number of peptide bonds are not identical",
        ],
        [
          "Protein denaturation",
          "Disruption of higher-order organisation under suitable conditions",
          "Can reduce biological activity without routinely cleaving the primary peptide chain",
          "Do not define denaturation as complete hydrolysis",
        ],
        [
          "Nucleotide",
          "Nitrogenous base, pentose sugar, and phosphate",
          "Nucleotides connect in a sugar-phosphate backbone",
          "Do not confuse nucleoside with nucleotide",
        ],
      ],
      note: "Source: NCERT Biomolecules, N6; official syllabus scope, O1 and O2.",
    },
  ],

  sections: [
    {
      id: "worked-reducing-behaviour",
      slot: "concepts",
      heading: "Worked reasoning: why sucrose and maltose differ in reducing behaviour",
      jump: true,
      concepts: [
        {
          id: "sucrose-vs-maltose",
          title: "Free anomeric centre decides reducing behaviour",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "A sugar shows standard reducing behaviour when a free anomeric centre can access a reactive carbonyl form under the test conditions." }],
                [{ text: "In sucrose, the glycosidic bond uses the anomeric centres of both constituent sugars, so no free anomeric hemiacetal or hemiketal centre remains." }],
                [{ text: "In maltose, one glucose anomeric centre remains free." }],
                [{ text: "Therefore sucrose is non-reducing in the standard classification, while maltose is reducing." }],
                [{ text: "Hydrolysis changes the molecular species present, so post-hydrolysis behaviour must be evaluated separately." }],
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "nutrition-drift",
      mistake: "Turning this chapter into a nutrition or medical article.",
      why: [{ type: "paragraph", children: [{ text: "This is a Chemistry page; nutrition and health guidance are outside its evidence boundary." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep every explanation anchored to chemical structure, linkage, and syllabus-listed transformation." }] }],
      errorType: "decision-error",
    },
    {
      id: "main-advanced-mixup",
      mistake: "Mixing the Main list of vitamins, enzymes, and hormones into the Advanced scope.",
      why: [{ type: "paragraph", children: [{ text: "Advanced 2026 does not list vitamins, enzymes, or hormones in its biomolecule section, while Main 2026 does." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official-syllabus mapping table before assuming a topic applies to both examinations." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "aldose-ketose-vs-reducing",
      mistake: "Confusing aldose or ketose classification with reducing behaviour.",
      why: [{ type: "paragraph", children: [{ text: "Reducing behaviour depends on whether an anomeric centre is free, not directly on the aldose or ketose label alone." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the anomeric centre and its participation in any glycosidic bond before deciding reducing behaviour." }] }],
      errorType: "recall-gap",
    },
    {
      id: "anomeric-carbon-unlocated",
      mistake: "Naming an anomeric carbon without locating the original carbonyl carbon.",
      why: [{ type: "paragraph", children: [{ text: "The anomeric carbon is defined by the position of the original carbonyl carbon in the open-chain form." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Draw the open-chain form first and trace the carbonyl carbon into the cyclic structure." }] }],
      errorType: "execution-error",
    },
    {
      id: "every-disaccharide-non-reducing",
      mistake: "Calling every disaccharide non-reducing.",
      why: [{ type: "paragraph", children: [{ text: "Maltose and lactose retain a free anomeric centre and are reducing; only sucrose ties up both anomeric centres." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check each disaccharide's specific linkage before generalising its reducing behaviour." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "linkage-confusion",
      mistake: "Confusing glycosidic, peptide, and phosphodiester linkages.",
      why: [{ type: "paragraph", children: [{ text: "Each linkage joins a different type of constituent unit and produces different hydrolysis products." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Name the constituent units first, then the linkage that connects them, before predicting hydrolysis." }] }],
      errorType: "execution-error",
    },
    {
      id: "denaturation-as-hydrolysis",
      mistake: "Treating denaturation as automatic cleavage of peptide bonds.",
      why: [{ type: "paragraph", children: [{ text: "Denaturation disrupts higher-order structure without necessarily cleaving the primary peptide chain." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate the structure level being disrupted from the question of primary-sequence cleavage." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "nucleoside-nucleotide-confusion",
      mistake: "Confusing nucleoside and nucleotide.",
      why: [{ type: "paragraph", children: [{ text: "A nucleotide additionally carries a phosphate group that a nucleoside does not." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check for the phosphate group explicitly before naming a unit a nucleoside or a nucleotide." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Functional-group and stereoisomerism reasoning used throughout this chapter.",
    },
    {
      label: "Aldehydes and Ketones",
      url: "/jee/chemistry/aldehydes-ketones",
      relation: "prerequisite",
      description: "Carbonyl classification is the basis for aldose and ketose identification.",
    },
    {
      label: "Amines",
      url: "/jee/chemistry/amines",
      relation: "prerequisite",
      description: "Nitrogen functionality and basicity underlie amino-acid acid-base behaviour.",
    },
    {
      label: "Polymers",
      url: "/jee/chemistry/polymers",
      relation: "related",
      description: "A related large-molecule Advanced-only topic; not a biomolecule chemical class.",
    },
    {
      label: "Chemistry in Everyday Life",
      url: "/jee/chemistry/chemistry-everyday-life",
      relation: "forward",
      description: "Applies functional-group and reagent knowledge further, without extending biomolecule scope.",
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
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "prerequisite",
      description: "Hydroxyl-group behaviour underlying carbohydrate structure.",
    },
  ],

  faqs: [
    {
      question: "What is the key chemical distinction between sucrose and maltose?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Sucrose has both relevant anomeric centres tied in the glycosidic bond, while maltose retains a free anomeric centre.",
            },
          ],
        },
      ],
    },
    {
      question: "What is a peptide bond?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "An amide linkage joining the carboxyl-derived carbon of one amino-acid residue to the nitrogen of another.",
            },
          ],
        },
      ],
    },
    {
      question: "Are vitamins and hormones in both current JEE syllabi?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Main 2026 lists vitamin classification and functions and a general hormone introduction. Advanced 2026 does not list them in its biomolecule section.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-biomolecules", "nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote:
    "Record exam, molecule class, representation, linkage, transformation, tested scope, paper identity, and official source. Never convert selected examples into a frequency or expected-question claim.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Chemistry educator with strong Organic and Biomolecular Chemistry teaching experience.",
    "Academically reviewed by: unassigned. Reviewer specialisation: carbohydrate chemistry, peptide and protein chemistry, nucleic-acid composition, and current JEE scope. Minimum qualification: postgraduate degree in Chemistry, Biochemistry, or a closely related discipline with documented biomolecular expertise and JEE syllabus familiarity.",
    "Review scope: Main-Advanced boundary, every sugar identity and linkage, reducing behaviour, protein-structure wording, denaturation, DNA/RNA composition, excluded biological detail, links, metadata, and schema-content match.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Biomolecules for JEE: Scope, Linkages and Structures",
    description:
      "Learn JEE biomolecules through carbohydrates, anomers, glycosidic and peptide bonds, protein structure, DNA and RNA, with Main and Advanced boundaries.",
    ogTitle: "Biomolecules for JEE",
    ogDescription: "A Chemistry-first guide to sugars, proteins, nucleic acids, and current exam scope.",
    ogType: "article",
  },
};

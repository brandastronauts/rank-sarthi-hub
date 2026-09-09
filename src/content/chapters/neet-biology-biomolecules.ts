import type { ChapterContent } from "@/content/types";

/**
 * Biomolecules — T06 production content (N02-04).
 * No weightage/trend/PYQ records asserted. contentStatus stays "draft".
 * Advanced metabolic pathways, enzyme kinetics and clinical biochemistry are
 * excluded and treated as CONTEXTUAL / VERIFY BEFORE INDEXATION if retained.
 */
export const neetBiologyBiomolecules: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Biomolecules",
  slug: "biomolecules",
  url: "/neet/biology/biomolecules",
  canonicalIntent:
    "Own focused NEET Biology depth for the current Unit 3 biomolecule and enzyme scope, connecting molecular structure categories to biological roles without drifting into Chemistry-level or university-level biochemistry.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 3 (Cell Structure and Function)",
    "Lipids are not forced into a simple repeating-monomer polymer model",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET UG 2026, Biomolecules focuses on how major molecular categories differ in building units, organisation and biological role, together with enzyme types, properties and action. The page teaches structure-to-function relationships and high-risk distinctions rather than turning Biology into an advanced organic-chemistry or biochemical-kinetics chapter.",
        },
      ],
    },
    { type: "note", tone: "info", children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages." }] },
  ],

  prerequisites: [
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "prerequisite", description: "Cell-level context is where biomolecules function." },
    { label: "NEET Biology", url: "/neet/biology", relation: "up", description: "Subject hub for the Biology chapter set." },
    { label: "NEET Biology syllabus", url: "/neet/syllabus/biology", relation: "up", description: "Official current-scope mapping for Biology." },
  ],

  syllabusMapping: {
    unit: "Unit 3: Cell Structure and Function",
    topics: [
      "Structure and function of proteins",
      "Structure and function of carbohydrates",
      "Structure and function of lipids",
      "Structure and function of nucleic acids",
      "Enzyme types",
      "Enzyme properties",
      "Enzyme action",
      "Enzyme classification and nomenclature",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "category-map",
      title: "1. Biomolecules as relationship categories",
      keyIdea: "The four major categories should not be forced into one identical monomer-to-polymer template.",
      body: [{ type: "paragraph", children: [{ text: "Proteins and nucleic acids have clear repeating building-unit relationships, carbohydrates include mono-, oligo- and polysaccharide relationships, while many biologically important lipids are not polymers made from a single repeating monomer in the same sense." }] }],
    },
    {
      id: "carbohydrates",
      title: "2. Carbohydrates",
      body: [{ type: "paragraph", children: [{ text: "Carbohydrate organisation is taught from simpler to larger forms at NCERT depth. The key information gain is to distinguish classification, building-unit relationship and biological role, without importing detailed stereochemistry or reaction mechanisms from Chemistry unless required by the Biology textbook relationship." }] }],
    },
    {
      id: "proteins",
      title: "3. Proteins",
      body: [{ type: "paragraph", children: [{ text: "Proteins are taught as amino-acid-based macromolecules whose biological function depends on organisation. Where NCERT discusses levels of protein structure, only the expected qualitative relationship is retained. Enzyme proteins are connected to catalysis without implying that every protein is an enzyme." }] }],
    },
    {
      id: "lipids",
      title: "4. Lipids",
      keyIdea: "Lipids need an explicit exception box.",
      body: [{ type: "paragraph", children: [{ text: "Students often force lipids into the same polymer logic used for proteins and nucleic acids. Common structural components and roles are taught at NCERT depth, but \"lipid\" is a broad molecular category rather than one uniform repeating polymer." }] }],
    },
    {
      id: "nucleic-acids",
      title: "5. Nucleic acids",
      body: [{ type: "paragraph", children: [{ text: "Nucleotides are connected to DNA and RNA; detailed replication, transcription and translation are handed off to Molecular Basis of Inheritance. This page owns the molecular-category relationship, not the full gene-expression process." }] }],
    },
    {
      id: "enzymes",
      title: "6. Enzymes",
      keyIdea: "Enzyme types, properties, action, classification and nomenclature are explicitly named in the official syllabus.",
      body: [
        { type: "list", items: [
          [{ text: "Enzyme as biological catalyst at NCERT depth." }],
          [{ text: "Substrate and active-site relationship." }],
          [{ text: "Specificity as described in the textbook." }],
          [{ text: "Conditions affecting activity where NCERT supports them." }],
          [{ text: "Classification/nomenclature framework at the current expected level." }],
        ] },
        { type: "note", tone: "caution", children: [{ text: "Advanced Michaelis-Menten derivations, detailed kinetics or medical enzyme interpretation are avoided unless separately approved." }] },
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
        ["What is the chapter about?", "How proteins, carbohydrates, lipids and nucleic acids differ in building units and biological role, plus enzyme types, properties, action and classification."],
        ["What is the central method choice?", "Identify the category first, then check its specific building-unit relationship rather than applying one universal polymer template."],
        ["Where do most mistakes begin?", "Treating all biomolecules as identical polymers, and forgetting enzyme/substrate/product terminology."],
      ],
      note: "The official NEET UG 2026 syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "building-unit-matrix",
      jump: true,
      slot: "concepts",
      heading: "Building-unit relationship matrix",
      columns: ["Category", "Building-unit relationship", "Main biological relationship to learn", "High-risk confusion"],
      rows: [
        ["Carbohydrates", "Monosaccharides can form larger carbohydrates", "Energy, storage and structural roles depending on molecule", "Treating every carbohydrate as the same type of sugar"],
        ["Proteins", "Amino acids linked into polypeptides", "Structure and function depend on sequence and folding", "Treating peptide, polypeptide and functional protein as identical labels"],
        ["Lipids", "Built from components such as fatty acids and glycerol in many common lipids, but not a simple repeating-monomer polymer class", "Membrane, storage and signalling relationships at NCERT depth", "Calling all lipids true polymers"],
        ["Nucleic acids", "Nucleotides form polynucleotide chains", "Information storage and expression relationships", "Mixing nucleotide with nucleoside or DNA with RNA roles"],
      ],
    },
    {
      id: "enzyme-matrix",
      jump: true,
      slot: "concepts",
      heading: "Enzyme distinction matrix",
      columns: ["Term", "Relationship", "Common error"],
      rows: [
        ["Enzyme", "Catalyst in the biological system", "Treating enzyme as consumed in the reaction model"],
        ["Substrate", "Molecule acted on", "Confusing substrate with product"],
        ["Active site", "Region associated with substrate interaction/catalysis", "Treating it as a separate free molecule"],
        ["Product", "Molecule(s) formed", "Reversing substrate and product in a diagram"],
      ],
    },
  ],

  mistakes: [
    { id: "all-biomolecules-identical-polymers", mistake: "Treats all biomolecules as identical polymers.", why: [{ type: "paragraph", children: [{ text: "Lipids are not a uniform repeating-monomer polymer class in the same sense as proteins and nucleic acids." }] }], fix: [{ type: "paragraph", children: [{ text: "Use the category-specific building-unit matrix before answering." }] }], errorType: "knowledge-gap" },
    { id: "enzyme-terminology-forgotten", mistake: "Forgets enzyme/substrate/product terminology.", why: [{ type: "paragraph", children: [{ text: "The enzyme-substrate-product relationship is a core retrieval item for this chapter." }] }], fix: [{ type: "paragraph", children: [{ text: "Blind-retrieve the relationship sequence before checking the answer." }] }], errorType: "recall-gap" },
    { id: "structure-function-table-misread", mistake: "Misreads a structure/function table.", why: [{ type: "paragraph", children: [{ text: "Category and role are easy to swap when a table is read quickly." }] }], fix: [{ type: "paragraph", children: [{ text: "Identify category first, then role." }] }], errorType: "execution-error" },
    { id: "chemistry-depth-mechanism", mistake: "Uses Chemistry-depth mechanism for a Biology-scope item.", why: [{ type: "paragraph", children: [{ text: "The official Unit 3 boundary is NCERT-level structure and function, not advanced organic-chemistry mechanism." }] }], fix: [{ type: "paragraph", children: [{ text: "Return to the official Unit 3 boundary before answering." }] }], errorType: "decision-error" },
    { id: "unverified-biochemical-claim", mistake: "Is unsure whether an advanced biochemical claim is current scope.", why: [{ type: "paragraph", children: [{ text: "Detailed metabolic pathways and advanced enzyme kinetics are not confirmed as current NEET Unit 3 scope here." }] }], fix: [{ type: "paragraph", children: [{ text: "Hold the claim as CONTEXTUAL / VERIFY BEFORE INDEXATION." }] }], errorType: "needs-review" },
  ],

  relatedChapters: [
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "prerequisite", description: "Cell-level context in which biomolecules function." },
    { label: "Genetics", url: "/neet/biology/genetics", relation: "forward", description: "Nucleic-acid categories connect forward into inheritance and molecular genetics." },
    { label: "Principles of Inheritance", url: "/neet/biology/principles-of-inheritance", relation: "forward", description: "Builds on nucleic-acid structure toward inheritance patterns." },
    { label: "Molecular Basis of Inheritance", url: "/neet/biology/molecular-basis-of-inheritance", relation: "forward", description: "Owns the full gene-expression process built on nucleic-acid structure taught here." },
  ],

  links: [
    { label: "NEET Biology syllabus", url: "/neet/syllabus/biology", relation: "up", description: "Official current-scope hub for Biology." },
    { label: "NEET Biology", url: "/neet/biology", relation: "up", description: "Biology subject hub." },
  ],

  faqs: [
    { question: "What biomolecules are explicitly in NEET UG 2026 Biology?", answer: [{ type: "paragraph", children: [{ text: "The Unit 3 syllabus explicitly includes proteins, carbohydrates, lipids and nucleic acids, plus enzyme types, properties, action, classification and nomenclature." }] }] },
    { question: "Are lipids polymers in exactly the same sense as proteins and nucleic acids?", answer: [{ type: "paragraph", children: [{ text: "No. Lipids are not forced into a simple repeating-monomer polymer model on this page." }] }] },
    { question: "Where should replication and translation be studied?", answer: [{ type: "paragraph", children: [{ text: "On /neet/biology/molecular-basis-of-inheritance, which owns molecular-information processes." }] }] },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "nta-neet-documents", "ncert-biology-11-contents", "ncert-exemplar-index"],
  sourceNote: "Frozen N01 Cell Biology scope and handoff was also reviewed for the Unit 3 relationship.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Biology, Biochemistry or Molecular Biology specialist with NEET/medical-entrance academic experience.",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Biomolecules: Proteins, Carbs, Lipids & Enzymes",
    description:
      "Learn current NEET Biomolecules through structure-function relationships for proteins, carbohydrates, lipids, nucleic acids and enzymes, with distinction matrices.",
  },
};

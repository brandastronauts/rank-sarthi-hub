import type { ChapterContent } from "@/content/types";

/**
 * Molecular Basis of Inheritance — T06 production content (N02-02).
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Advanced enzyme kinetics, chromatin epigenetics, advanced eukaryotic
 *   regulation and forensic procedure beyond NCERT scope are treated as
 *   CONTEXTUAL / VERIFY BEFORE INDEXATION and excluded from the concept
 *   blocks below.
 */
export const neetBiologyMolecularBasisOfInheritance: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Molecular Basis of Inheritance",
  slug: "molecular-basis-of-inheritance",
  url: "/neet/biology/molecular-basis-of-inheritance",
  canonicalIntent:
    "Teach the verified molecular inheritance processes and their distinctions: genetic material, DNA/RNA structure, packaging, replication, transcription, genetic code, translation, lac-operon regulation, genome/Human Genome Project, DNA fingerprinting and protein biosynthesis.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 7 (Genetics and Evolution)",
    "Replication, transcription and translation kept as distinct processes",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Molecular Basis of Inheritance explains how hereditary information is stored, copied and expressed. For the current NEET UG 2026 scope, students need to distinguish the evidence for genetic material, DNA/RNA structure, DNA packaging, replication, transcription, the genetic code, translation, lac-operon regulation, genome/Human Genome Project and DNA fingerprinting rather than compressing them into one \"central dogma\" paragraph.",
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
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Nucleic-acid structure and building units should be stable before the molecular processes on this page.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Chromatin and chromosome context supports the DNA-packaging discussion.",
    },
    {
      label: "Principles of Inheritance",
      url: "/neet/biology/principles-of-inheritance",
      relation: "prerequisite",
      description: "Inheritance-pattern reasoning is a companion to, but distinct from, the molecular processes on this page.",
    },
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "up",
      description: "Broad routing hub for inheritance and molecular-genetics topics.",
    },
    {
      label: "NEET Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Official current-scope mapping for Biology.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 7: Genetics and Evolution",
    topics: [
      "Search for genetic material and DNA as genetic material",
      "DNA and RNA structure",
      "DNA packaging",
      "DNA replication",
      "Central dogma",
      "Transcription",
      "Genetic code",
      "Translation",
      "Gene expression and regulation (lac operon)",
      "Genome and Human Genome Project",
      "DNA fingerprinting",
      "Protein biosynthesis",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "three-information-questions",
      title: "1. Ask three different information questions",
      keyIdea: "Storage, copying and expression are separate questions, not one process.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Storage: what molecule carries the hereditary information in the relevant system?" }],
            [{ text: "Copying: how is DNA duplicated before cell division?" }],
            [{ text: "Expression: how is nucleotide information used to produce RNA and then a polypeptide/protein product?" }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "This prevents the common failure of treating every arrow involving DNA or RNA as the same process." }],
        },
      ],
    },
    {
      id: "dna-rna-structure",
      title: "2. DNA and RNA structure",
      keyIdea: "Teach DNA and RNA through components and relationships, not advanced structural chemistry.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Teach DNA and RNA through nucleotide components, sugar difference, base sets, strand organisation at current NCERT depth, and their role in the inheritance/expression system.",
            },
          ],
        },
      ],
    },
    {
      id: "dna-genetic-material",
      title: "3. DNA as genetic material",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The search-for-genetic-material content is organised as evidence and conclusion, not as a list of scientist names. For each verified experiment retained from NCERT, ask: what was manipulated, what was observed, what inference about genetic material follows. Exact experimental details remain at NCERT-reviewed depth.",
            },
          ],
        },
      ],
    },
    {
      id: "dna-packaging",
      title: "4. DNA packaging",
      keyIdea: "\"DNA molecule,\" \"chromatin\" and \"chromosome\" are related but not interchangeable labels.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The packaging block connects a very long DNA molecule to organised chromatin/chromosome context, without expanding into university-level chromatin biology.",
            },
          ],
        },
      ],
    },
    {
      id: "replication",
      title: "5. Replication",
      keyIdea: "Distinguish the template from the product.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Replication is mapped by: template DNA, new DNA strands, complementary base pairing, copying before cell division. Enzyme-level mechanistic detail beyond the verified NCERT treatment is not imported without SME review.",
            },
          ],
        },
      ],
    },
    {
      id: "transcription",
      title: "6. Transcription",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Transcription is mapped by: DNA template region to RNA product. The output is RNA, not a new DNA molecule or a polypeptide. Directionality and strand terminology should be reviewed against NCERT wording before indexation.",
            },
          ],
        },
      ],
    },
    {
      id: "genetic-code",
      title: "7. Genetic code",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The genetic-code section connects nucleotide triplets in messenger RNA with amino-acid specification in translation, using a code-reading framework rather than a memorisation dump. No invented \"shortcut\" should override the actual code relationship.",
            },
          ],
        },
      ],
    },
    {
      id: "translation",
      title: "8. Translation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Translation is mapped by: mRNA codons, ribosome context, tRNA/amino-acid relationship, polypeptide sequence. Distinguish the template being read from the product being assembled. \"Protein biosynthesis\" is current official wording and belongs here.",
            },
          ],
        },
      ],
    },
    {
      id: "lac-operon",
      title: "9. Gene expression and the lac operon",
      keyIdea: "Distinguish structural genes, regulatory control and the condition-dependent expression outcome.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official 2026 syllabus explicitly names gene expression and regulation through the lac operon. This is kept at the NCERT prokaryotic model level, not expanded into a complete molecular-regulation textbook.",
            },
          ],
        },
      ],
    },
    {
      id: "hgp-fingerprinting",
      title: "10. Genome, Human Genome Project and DNA fingerprinting",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The HGP and DNA fingerprinting blocks explain what each topic is for and how it relates to genomic information. HGP should not become a list of outdated \"human genome numbers\" unless exact values are verified from the current NCERT edition. DNA fingerprinting stays at educational mechanism/application level and does not become forensic procedural advice.",
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
          "How hereditary information is stored (DNA/RNA structure), copied (replication) and expressed (transcription, genetic code, translation), plus lac-operon regulation, genome/HGP and DNA fingerprinting.",
        ],
        [
          "What is the central method choice?",
          "Ask whether a described process is about storage, copying or expression before naming it replication, transcription or translation.",
        ],
        [
          "Where do most mistakes begin?",
          "Calling transcription \"DNA copying,\" mixing codon and anticodon roles, and reading a process arrow backwards.",
        ],
      ],
      note: "The official NEET UG 2026 syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "dna-vs-rna",
      jump: true,
      slot: "concepts",
      heading: "DNA vs RNA distinction matrix",
      columns: ["Feature", "DNA", "RNA"],
      rows: [
        ["Sugar", "Deoxyribose", "Ribose"],
        ["Nitrogenous base distinction", "Contains thymine in the standard comparison", "Contains uracil in the standard comparison"],
        ["Core role in this chapter", "Genetic storage and template relationships", "Multiple roles in expression, including messenger, transfer and ribosomal forms"],
        ["High-risk error", "Treating both as identical copies", "Treating every RNA type as having the same role"],
      ],
    },
    {
      id: "process-distinction-matrix",
      jump: true,
      slot: "concepts",
      heading: "Replication vs transcription vs translation matrix",
      columns: ["Process", "Main template/input", "Main product/output", "Question to ask"],
      rows: [
        ["Replication", "DNA", "DNA", "Is hereditary DNA being copied?"],
        ["Transcription", "DNA", "RNA", "Is an RNA molecule being synthesized from DNA information?"],
        ["Translation", "mRNA", "Polypeptide", "Is nucleotide information being converted into an amino-acid sequence?"],
      ],
      note: "This is the minimum process framework. Location, participating molecules and direction details should be added only at NCERT-reviewed depth.",
    },
  ],

  mistakes: [
    {
      id: "transcription-as-copying",
      mistake: "Calls transcription \"DNA copying.\"",
      why: [{ type: "paragraph", children: [{ text: "Transcription produces RNA from a DNA template; it is not DNA replication." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Rebuild the template-product matrix before naming a process." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "codon-anticodon-mixup",
      mistake: "Mixes codon and anticodon roles.",
      why: [{ type: "paragraph", children: [{ text: "Codons are read on mRNA; anticodons are the complementary tRNA sequence that pairs with a codon." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use a reviewed mRNA-tRNA relationship map before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "process-arrow-reversed",
      mistake: "Reads a process arrow backwards (e.g. treats the product as the template).",
      why: [{ type: "paragraph", children: [{ text: "Each molecular process has a defined template and a defined product; reversing them changes the biological meaning." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Label template and product explicitly before selecting an answer." }] }],
      errorType: "execution-error",
    },
    {
      id: "translation-for-rna-product",
      mistake: "Chooses translation when the described product is RNA, not a polypeptide.",
      why: [{ type: "paragraph", children: [{ text: "Translation's product is a polypeptide; an RNA product indicates transcription instead." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Classify the product type (DNA, RNA or polypeptide) before selecting the process." }] }],
      errorType: "decision-error",
    },
    {
      id: "unverified-advanced-detail",
      mistake: "Adds advanced molecular detail (enzyme kinetics, advanced chromatin regulation) that is not source-checked.",
      why: [{ type: "paragraph", children: [{ text: "Detail beyond verified NCERT/current-syllabus depth risks being inaccurate or out of scope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Remove or hold the detail as CONTEXTUAL / VERIFY BEFORE INDEXATION until source and SME confirmation exists." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "up",
      description: "Broad routing hub for inheritance and molecular-genetics topics.",
    },
    {
      label: "Principles of Inheritance",
      url: "/neet/biology/principles-of-inheritance",
      relation: "related",
      description: "Covers inheritance-pattern reasoning; this page owns the molecular-process depth.",
    },
    {
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "forward",
      description: "Extends molecular and inheritance ideas into population-level evolutionary mechanisms.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Nucleic-acid building units and structure are foundational for this page.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Chromatin and chromosome context for the DNA-packaging discussion.",
    },
  ],

  links: [
    {
      label: "NEET Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Official current-scope hub for Biology.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Biology subject hub.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between replication, transcription and translation?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Replication copies DNA into DNA, transcription synthesizes RNA from a DNA template, and translation converts mRNA codon information into a polypeptide.",
            },
          ],
        },
      ],
    },
    {
      question: "Is the lac operon part of the current NEET UG 2026 syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. Gene expression and regulation through the lac operon is explicitly named in the current Unit 7 molecular bullet.",
            },
          ],
        },
      ],
    },
    {
      question: "Where should inheritance-pattern reasoning (Mendelian genetics) be studied?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "On /neet/biology/principles-of-inheritance, which owns inheritance-pattern depth. This page owns the molecular processes that underlie inheritance.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "nta-neet-documents", "ncert-biology-12-contents"],
  sourceNote:
    "Additional official references reviewed for this page: NCERT Biology Class XII textbook chapter Molecular Basis of Inheritance and official ePathshala resources for the chapter.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Genetics, Molecular Biology or Biotechnology specialist with NEET/medical-entrance academic experience.",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Molecular Basis of Inheritance: DNA to Protein",
    description:
      "Learn current NEET molecular genetics through DNA/RNA structure, replication, transcription, genetic code, translation, lac operon, HGP and DNA fingerprinting.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Principles of Inheritance — T06 production content (N02-01).
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Pedigree analysis is NOT presented as current official 2026 scope; it is
 *   flagged CONTEXTUAL / VERIFY BEFORE INDEXATION and excluded from the
 *   current-scope claims on this page.
 */
export const neetBiologyPrinciplesOfInheritance: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Principles of Inheritance",
  slug: "principles-of-inheritance",
  url: "/neet/biology/principles-of-inheritance",
  canonicalIntent:
    "Own focused current-scope inheritance reasoning: heredity and variation, Mendelian inheritance, deviations from Mendelism, chromosome theory, sex determination, linkage and crossing over, sex-linked inheritance and the explicitly listed human disorders. This page does not own molecular-process depth or the broad Genetics routing role.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 7 (Genetics and Evolution)",
    "Pedigree analysis is treated as contextual, not current scope",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Principles of Inheritance for NEET UG 2026 is the focused study of how hereditary information produces predictable and non-simple inheritance patterns. The current scope starts with Mendelian inheritance and extends through incomplete dominance, codominance, multiple alleles, pleiotropy, elementary polygenic inheritance, chromosome theory, sex determination, linkage and crossing over, sex-linked inheritance and the disorders explicitly listed in the official syllabus.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Pedigree analysis is not described as explicit current official 2026 scope. If a pedigree module is retained on this page in future, it must be labelled CONTEXTUAL / VERIFY BEFORE INDEXATION and reviewed separately.",
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
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "up",
      description: "Broad routing hub for inheritance and molecular-genetics topics.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the Biology chapter set.",
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
      "Mendelian inheritance",
      "Incomplete dominance",
      "Codominance",
      "Multiple alleles and inheritance of blood groups",
      "Pleiotropy",
      "Elementary polygenic inheritance",
      "Chromosome theory of inheritance",
      "Chromosomes and genes",
      "Sex determination in humans, birds and honey bee",
      "Linkage and crossing over",
      "Sex-linked inheritance: haemophilia and colour blindness",
      "Mendelian disorder: thalassemia",
      "Chromosomal disorders: Down syndrome, Turner syndrome, Klinefelter syndrome",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "inheritance-objects",
      title: "1. Start with the inheritance objects",
      keyIdea:
        "Gene, allele, genotype and phenotype should be taught relationally, not as isolated glossary entries.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A gene is treated as hereditary information associated with a locus; an allele is an alternative form used when reasoning about inheritance at that locus; a genotype represents the allele combination considered in the problem; and a phenotype is the observable or measurable expression relevant to the stated inheritance pattern.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Gene: hereditary information at a locus — high-risk confusion: confusing a gene with one specific allele." }],
            [{ text: "Allele: alternative form at that locus — high-risk confusion: treating dominant as \"more common.\"" }],
            [{ text: "Genotype: allele combination under consideration — high-risk confusion: reading phenotype directly from symbols without checking the inheritance pattern." }],
            [{ text: "Phenotype: expressed trait/state in the problem — high-risk confusion: assuming phenotype uniquely identifies genotype." }],
          ],
        },
      ],
    },
    {
      id: "mendelian-inheritance",
      title: "2. Separate dominance, segregation and independent assortment",
      keyIdea: "The Mendelian layer is three distinct ideas, not one memorised block.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Dominance describes the expression relationship seen in a heterozygote under a complete-dominance model." }],
            [{ text: "Segregation tracks separation of allele pairs during gamete formation, so each gamete receives one allele from the pair." }],
            [{ text: "Independent assortment applies to the assortment of different gene pairs under the conditions represented by the Mendelian model. It must not be applied blindly when linkage is relevant." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The teaching sequence should be: identify inheritance model, assign symbols, determine gametes, combine, separate genotype from phenotype, verify ratio or statement.",
            },
          ],
        },
      ],
    },
    {
      id: "genotype-phenotype-matrix",
      title: "3. Genotype vs phenotype distinction matrix",
      keyIdea: "Phenotype is not always enough to infer genotype.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Under complete dominance, two genotypes can produce the same dominant phenotype. Under incomplete dominance, the heterozygote has a distinguishable phenotype. Under codominance, both allelic effects are represented in the heterozygote at the level defined by the example.",
            },
          ],
        },
      ],
    },
    {
      id: "mendelian-vs-deviations",
      title: "4. Mendelian vs deviations from Mendelism",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Complete dominance: one allele masks the alternate in the heterozygote, so the heterozygote resembles one homozygote for the defined trait. Incomplete dominance: the heterozygote has a distinct intermediate expression in the standard NCERT model, so the phenotypic relationship differs from complete dominance. Codominance: both allelic effects are expressed in the heterozygote, with neither treated as completely masking the other. Multiple alleles: more than two alleles exist in the population for one locus, but a diploid individual still carries two alleles at that locus. Pleiotropy: one gene can influence more than one phenotypic effect, so one-gene-one-visible-trait reasoning becomes unsafe. Elementary polygenic inheritance: more than one gene contributes to a trait, so single-locus Mendelian prediction is insufficient.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "For ABO blood-group inheritance, the page teaches the allele relationship and genotype-phenotype mapping at NCERT depth. It does not drift into transfusion advice.",
            },
          ],
        },
      ],
    },
    {
      id: "chromosome-theory",
      title: "5. Chromosome theory of inheritance",
      keyIdea: "This is the bridge between abstract crosses and cell biology.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The chromosome theory block connects Mendelian factors to chromosomes, then connects chromosome behaviour to segregation and assortment. Students whose chromosome behaviour understanding itself is not secure should route back to Cell Biology.",
            },
          ],
        },
      ],
    },
    {
      id: "sex-determination",
      title: "6. Sex determination across humans, birds and honey bee",
      keyIdea: "Do not transfer the human XY pattern to every organism.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current syllabus explicitly includes humans, birds and honey bee. The comparison should focus on which sex is heterogametic, or haploid/diploid, where the NCERT model supports the distinction.",
            },
          ],
        },
      ],
    },
    {
      id: "linkage-crossing-over",
      title: "7. Linkage and crossing over are related but not synonymous",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Linked genes are located on the same chromosome and may tend to be inherited together. Crossing over can create recombined chromosome segments during meiosis. Before applying a ratio expectation, decide whether a question is about chromosome location, gamete combinations or recombination.",
            },
          ],
        },
      ],
    },
    {
      id: "sex-linked-disorders",
      title: "8. Sex-linked inheritance and listed disorders",
      keyIdea: "Keep inheritance pattern and disorder classification separate.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current official syllabus names haemophilia and colour blindness as sex-linked inheritance examples. It also names thalassemia as a Mendelian disorder, and Down, Turner and Klinefelter syndromes as chromosomal disorders. Do not label every genetic disorder as sex-linked or Mendelian.",
            },
          ],
        },
      ],
    },
    {
      id: "pedigree-boundary",
      title: "9. Pedigree analysis boundary",
      body: [
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Pedigree analysis is not presented as current official 2026 scope. If a later editorial module uses a pedigree diagram for contextual reinforcement, it must be explicitly labelled CONTEXTUAL / VERIFY BEFORE INDEXATION and reviewed before publication.",
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
          "How Mendelian inheritance, deviations from Mendelism, chromosome theory, sex determination, linkage and crossing over, and sex-linked inheritance explain hereditary patterns.",
        ],
        [
          "What is the central method choice?",
          "Identify the inheritance model before predicting phenotype: complete dominance, incomplete dominance, codominance, multiple alleles, pleiotropy or polygenic inheritance.",
        ],
        [
          "Where do most mistakes begin?",
          "Assuming a heterozygote must resemble one homozygote, mixing inheritance pattern with disorder classification, and applying independent assortment when linkage is relevant.",
        ],
        [
          "Is pedigree analysis current official scope?",
          "No. It is not listed in the verified 2026 Unit 7 inheritance bullet and is treated as CONTEXTUAL / VERIFY BEFORE INDEXATION if retained.",
        ],
      ],
      note: "The official NEET UG 2026 syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "genotype-phenotype-matrix-table",
      jump: true,
      slot: "concepts",
      heading: "Genotype/phenotype distinction matrix",
      columns: ["Inheritance model", "Heterozygote phenotype relationship", "Prediction risk"],
      rows: [
        ["Complete dominance", "Resembles one homozygote for the trait", "Two genotypes can give the same phenotype"],
        ["Incomplete dominance", "Distinct intermediate expression (NCERT model)", "Phenotype differs from both homozygotes"],
        ["Codominance", "Both allelic effects expressed", "Neither allele masks the other"],
        ["Multiple alleles", "More than two alleles exist in the population", "Individual still carries only two alleles at the locus"],
      ],
    },
    {
      id: "mendelian-vs-nonmendelian",
      jump: true,
      slot: "concepts",
      heading: "Mendelian vs non-Mendelian comparison",
      columns: ["Pattern", "Relationship to track", "What changes from simple complete dominance"],
      rows: [
        ["Complete dominance", "One allele masks the alternate in the heterozygote", "Heterozygote resembles one homozygote for the defined trait"],
        ["Incomplete dominance", "Heterozygote has a distinct intermediate expression in the standard NCERT model", "Phenotypic relationship differs from complete dominance"],
        ["Codominance", "Both allelic effects are expressed in the heterozygote", "Neither is treated as completely masking the other"],
        ["Multiple alleles", "More than two alleles exist in the population for one locus", "A diploid individual still carries two alleles at that locus"],
        ["Pleiotropy", "One gene can influence more than one phenotypic effect", "One-gene-one-visible-trait reasoning becomes unsafe"],
        ["Elementary polygenic inheritance", "More than one gene contributes to a trait", "Single-locus Mendelian prediction is insufficient"],
      ],
    },
    {
      id: "current-scope-mapping",
      jump: true,
      slot: "scope",
      heading: "Official NEET UG 2026 inheritance scope mapping",
      intro:
        "Verified against the current NEET UG 2026 syllabus, Unit 7 (Genetics and Evolution) inheritance bullet.",
      columns: ["Topic group", "Current 2026 status", "Preparation note"],
      rows: [
        ["Mendelian inheritance, deviations from Mendelism", "Explicitly listed", "Separate dominance, segregation and independent assortment before crosses."],
        ["Chromosome theory, sex determination", "Explicitly listed for humans, birds and honey bee", "Do not generalise the human XY pattern to every organism."],
        ["Linkage and crossing over", "Explicitly listed", "Decide whether a question is about location, gametes or recombination first."],
        ["Sex-linked haemophilia, colour blindness; thalassemia; Down, Turner, Klinefelter syndromes", "Explicitly listed", "Keep inheritance pattern separate from disorder classification."],
        ["Pedigree analysis", "Not explicitly listed in the verified 2026 bullet", "Treated as CONTEXTUAL / VERIFY BEFORE INDEXATION if retained."],
      ],
      note: "Source: NEET UG 2026 syllabus, NMC UGMEB / NTA official document.",
    },
  ],

  mistakes: [
    {
      id: "heterozygote-assumption",
      mistake: "Assuming a heterozygote must resemble one of the two homozygotes for the trait.",
      why: [{ type: "paragraph", children: [{ text: "This assumption only holds under complete dominance; it fails for incomplete dominance and codominance." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the inheritance model (complete dominance, incomplete dominance, codominance) before predicting the heterozygote phenotype." }] }],
      errorType: "decision-error",
    },
    {
      id: "independent-assortment-blind-application",
      mistake: "Applying independent assortment without checking whether the genes are linked.",
      why: [{ type: "paragraph", children: [{ text: "Independent assortment applies to different gene pairs under the Mendelian model; linked genes on the same chromosome do not assort independently in the same way." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the question indicates linkage before applying a simple independent-assortment ratio." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "disorder-classification-mixup",
      mistake: "Labelling every genetic disorder as either sex-linked or Mendelian without checking the listed classification.",
      why: [{ type: "paragraph", children: [{ text: "The current syllabus separately names haemophilia and colour blindness as sex-linked, thalassemia as Mendelian, and Down, Turner and Klinefelter syndromes as chromosomal." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep a clear disorder-classification table and check it before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "xy-pattern-overgeneralisation",
      mistake: "Assuming the human XY sex-determination pattern applies identically to birds and honey bee.",
      why: [{ type: "paragraph", children: [{ text: "Sex determination differs across the three explicitly listed organisms in the current syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use an organism-specific comparison rather than transferring the human pattern by default." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "pedigree-scope-assumption",
      mistake: "Assuming pedigree analysis is current official 2026 scope because it appears in general genetics discussion.",
      why: [{ type: "paragraph", children: [{ text: "Pedigree analysis is not explicitly listed in the verified 2026 Unit 7 inheritance bullet used for this page." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat any pedigree content as CONTEXTUAL / VERIFY BEFORE INDEXATION until a separate official source and SME review confirms otherwise." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "forward",
      description: "Continues into the molecular processes (DNA, RNA, replication, transcription, translation) that underlie the inheritance patterns taught here.",
    },
    {
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "forward",
      description: "Extends variation and inheritance ideas into population-level evolutionary mechanisms.",
    },
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "up",
      description: "Broad routing hub connecting Principles of Inheritance, Molecular Basis of Inheritance and Evolution.",
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
      question: "Is Principles of Inheritance in the NEET UG 2026 syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. The verified Unit 7 scope explicitly includes Mendelian inheritance, deviations from Mendelism, chromosome theory, sex determination, linkage and crossing over, sex-linked inheritance and specified disorders.",
            },
          ],
        },
      ],
    },
    {
      question: "Is pedigree analysis explicitly listed in the 2026 official syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. It is treated as CONTEXTUAL / VERIFY BEFORE INDEXATION unless a separate official-source and SME review confirms otherwise.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between genotype and phenotype?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Genotype is the allele combination being considered; phenotype is the expressed trait or state under the relevant inheritance relationship.",
            },
          ],
        },
      ],
    },
    {
      question: "Does independent assortment always apply?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. The student must check whether linkage is relevant before applying a simple independent-assortment model.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "nta-neet-documents", "ncert-biology-12-contents"],
  sourceNote:
    "Additional official references reviewed for this page: NCERT Biology Class XII textbook (https://www.ncert.nic.in/textbook/pdf/lebo1ps.pdf) and ePathshala Class XII, Principles of Inheritance and Variation (https://epathshala.nic.in/topicc.php?id=12083CH05).",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Genetics, Molecular Biology, Biotechnology or Life Sciences specialist with NEET/medical-entrance academic experience.",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Principles of Inheritance: Mendelian Genetics, Variation and Chromosome Relationships",
    description:
      "Learn current NEET UG 2026 Principles of Inheritance: Mendelian inheritance, incomplete dominance, codominance, multiple alleles, pleiotropy, chromosome theory, sex determination, linkage and sex-linked disorders.",
  },
};

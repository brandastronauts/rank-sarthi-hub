import type { ChapterContent } from "@/content/types";

/**
 * Evolution — T06 production content (N02-03).
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Detailed geological timelines, advanced population-genetic derivations,
 *   modern phylogenomic methods and unverified human-evolution chronology
 *   are excluded and flagged as needing separate review, never asserted.
 */
export const neetBiologyEvolution: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Evolution",
  slug: "evolution",
  url: "/neet/biology/evolution",
  canonicalIntent:
    "Teach the current Evolution scope as a structured distinction among evidence, mechanism, population-level change and examples, without invented timelines or oversimplified historical narratives.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 7 (Genetics and Evolution)",
    "Evidence and mechanism kept as separate categories",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET Evolution is best understood by separating four questions: what evidence supports evolutionary change, what produces heritable variation, what mechanisms alter populations across generations, and what examples illustrate those mechanisms. The 2026 syllabus explicitly includes Darwin, Modern Synthetic theory, mutation and recombination, natural selection, gene flow, genetic drift, Hardy-Weinberg principle, adaptive radiation and human evolution.",
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
      label: "Principles of Inheritance",
      url: "/neet/biology/principles-of-inheritance",
      relation: "prerequisite",
      description: "Heritable variation and Mendelian reasoning support the population-level mechanisms in this chapter.",
    },
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "prerequisite",
      description: "Mutation as a source of variation connects to the molecular basis of DNA change.",
    },
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "up",
      description: "Broad routing hub for inheritance and evolutionary topics.",
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
      "Origin of life",
      "Biological evolution and evidence: paleontology, comparative anatomy, embryology, molecular evidence",
      "Darwin",
      "Modern Synthetic theory",
      "Variation: mutation and recombination",
      "Natural selection and its types",
      "Gene flow",
      "Genetic drift",
      "Hardy-Weinberg principle",
      "Adaptive radiation",
      "Human evolution",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "origin-vs-evolution",
      title: "1. Origin of life vs biological evolution",
      keyIdea: "These are related but distinct learning questions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "\"Origin of life\" addresses how life is discussed as beginning in the textbook/syllabus context. \"Biological evolution\" addresses changes in living populations and lineages after life exists. Avoid implying that one theory or experiment \"proves\" every stage of life's origin.",
            },
          ],
        },
      ],
    },
    {
      id: "evidence-matrix",
      title: "2. Evidence for biological evolution",
      keyIdea: "Label what type of evidence a question is testing.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Paleontological: fossil record across geological context — safe focus: historical sequence and change, without invented dates." }],
            [{ text: "Comparative anatomy: structural similarities/differences — safe focus: homology/analogy relationships at NCERT depth." }],
            [{ text: "Embryological: developmental comparisons — safe focus: evidence relationship, avoiding unsupported absolute claims." }],
            [{ text: "Molecular: molecular sequence/biochemical similarities — safe focus: relationship evidence, not a complete phylogenomic analysis." }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "The page should not present contested historical interpretations as if every detail has equal modern scientific status. Where NCERT uses a historical example, identify it as part of the exam-textbook framework." }],
        },
      ],
    },
    {
      id: "darwin-contribution",
      title: "3. Darwin's contribution",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Darwin's contribution is taught through variation, differential survival/reproduction and selection rather than a slogan such as \"survival of the fittest.\" The core question is how heritable variation can affect reproductive contribution across generations under environmental conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "modern-synthesis",
      title: "4. Modern Synthetic theory",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The modern synthesis block connects genetics and evolution: heritable variation, mutation/recombination, population allele-frequency context, selection/gene flow/drift, evolutionary change. This is not expanded into a university population-genetics chapter; it focuses on relationships explicitly supported by the current syllabus and NCERT.",
            },
          ],
        },
      ],
    },
    {
      id: "mutation-vs-recombination",
      title: "5. Mutation vs recombination",
      keyIdea: "Ask whether a question describes a new change in genetic material or a new combination of existing alleles.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mutation creates new sequence variation; recombination reshuffles existing genetic variation in sexual reproduction. Students often use both as synonyms for \"variation.\"",
            },
          ],
        },
      ],
    },
    {
      id: "natural-selection",
      title: "6. Natural selection",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Natural selection is explained as differential reproductive success associated with heritable variation in a given environment. The current syllabus mentions types of natural selection; these are shown with original distribution sketches, not copied textbook graphics.",
            },
          ],
        },
      ],
    },
    {
      id: "gene-flow-vs-drift",
      title: "7. Gene flow vs genetic drift",
      keyIdea: "Both change allele frequencies, but for different reasons.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Gene flow is the movement of alleles between populations through migration and reproduction; a strong clue is that individuals or genes move between populations. Genetic drift is random change in allele frequencies, stronger as a stochastic effect in smaller populations; a strong clue is that the change is described as chance rather than advantage.",
            },
          ],
        },
      ],
    },
    {
      id: "hardy-weinberg",
      title: "8. Hardy-Weinberg principle",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Hardy-Weinberg is treated as a population-genetic equilibrium reference model. The allele/genotype-frequency relationship is taught at NCERT depth, without becoming a formula drill detached from biological assumptions. If the standard equation is shown, every symbol and condition must be SME-checked before indexation.",
            },
          ],
        },
      ],
    },
    {
      id: "adaptive-radiation",
      title: "9. Adaptive radiation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Adaptive radiation is taught as diversification from a common ancestral context into different ecological opportunities in the NCERT examples. Not every diversification event should be generalised as adaptive radiation without checking the defining relationship.",
            },
          ],
        },
      ],
    },
    {
      id: "human-evolution",
      title: "10. Human evolution",
      body: [
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Cover only the verified NCERT/current-syllabus narrative. Avoid invented dates, speculative ancestry claims or overconfident linear \"ladder\" diagrams. Prefer a relationship tree or sequence that is explicitly source-controlled.",
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
          "How evidence, variation, natural selection and population-level mechanisms (gene flow, genetic drift, Hardy-Weinberg) explain evolutionary change.",
        ],
        [
          "What is the central method choice?",
          "Classify each item as evidence or mechanism, then choose between selection, gene flow and genetic drift based on whether a fitness advantage or a chance event is described.",
        ],
        [
          "Where do most mistakes begin?",
          "Calling evidence a mechanism, mixing mutation and recombination, and labelling every random allele-frequency change as natural selection.",
        ],
      ],
      note: "The official NEET UG 2026 syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "evidence-matrix-table",
      jump: true,
      slot: "concepts",
      heading: "Evidence for biological evolution",
      columns: ["Evidence family", "What it compares", "Safe learning focus"],
      rows: [
        ["Paleontological", "Fossil record across geological context", "Historical sequence and change, without invented dates"],
        ["Comparative anatomy", "Structural similarities/differences", "Homology/analogy relationships at NCERT depth"],
        ["Embryological", "Developmental comparisons", "Evidence relationship, avoiding unsupported absolute claims"],
        ["Molecular", "Molecular sequence/biochemical similarities", "Relationship evidence, not a complete phylogenomic analysis"],
      ],
    },
    {
      id: "gene-flow-vs-drift-table",
      jump: true,
      slot: "concepts",
      heading: "Gene flow vs genetic drift",
      columns: ["Process", "Core mechanism", "Strong clue in a question"],
      rows: [
        ["Gene flow", "Movement of alleles between populations through migration and reproduction", "Individuals/genes move between populations"],
        ["Genetic drift", "Random change in allele frequencies, stronger as a stochastic effect in smaller populations", "Change is described as chance rather than advantage"],
      ],
    },
  ],

  mistakes: [
    {
      id: "evidence-as-mechanism",
      mistake: "Calls evidence a mechanism.",
      why: [{ type: "paragraph", children: [{ text: "Fossil, anatomical, embryological and molecular evidence support the fact of evolutionary change but are not themselves mechanisms that cause it." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Label each item as evidence or mechanism before answering." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "mutation-recombination-mixup",
      mistake: "Mixes mutation and recombination as if they were the same source of variation.",
      why: [{ type: "paragraph", children: [{ text: "Mutation creates new sequence variation; recombination reshuffles existing genetic variation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the source-of-variation distinction table before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "random-change-as-selection",
      mistake: "Labels every random allele-frequency change as natural selection.",
      why: [{ type: "paragraph", children: [{ text: "Natural selection requires a fitness-related differential; a random event with no stated advantage is more consistent with genetic drift." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether a fitness advantage is actually stated before selecting natural selection." }] }],
      errorType: "decision-error",
    },
    {
      id: "misread-distribution-graph",
      mistake: "Misreads a distribution or population graph.",
      why: [{ type: "paragraph", children: [{ text: "Natural-selection types and population-change patterns are often shown through distribution graphs whose axes and direction carry the meaning." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify axes, baseline and direction before inference." }] }],
      errorType: "execution-error",
    },
    {
      id: "unverified-human-evolution-timeline",
      mistake: "Adds an unverified human-evolution timeline or speculative ancestry claim.",
      why: [{ type: "paragraph", children: [{ text: "Detailed chronology beyond the verified NCERT/current-syllabus narrative risks being inaccurate." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold any such claim as CONTEXTUAL / VERIFY BEFORE INDEXATION until source/SME confirmation exists." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "up",
      description: "Broad routing hub for inheritance and evolutionary topics.",
    },
    {
      label: "Principles of Inheritance",
      url: "/neet/biology/principles-of-inheritance",
      relation: "prerequisite",
      description: "Heritable variation and Mendelian reasoning underlie the population-level mechanisms in this chapter.",
    },
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "prerequisite",
      description: "Mutation as a molecular event connects to variation as a source of evolutionary change.",
    },
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "forward",
      description: "Applies population and environment relationships beyond the evolutionary mechanisms owned by this page.",
    },
    {
      label: "Organisms and Populations",
      url: "/neet/biology/organisms-populations",
      relation: "forward",
      description: "Population attributes and growth models extend the population-level reasoning introduced here.",
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
      question: "What Evolution topics are explicitly in NEET UG 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official syllabus includes origin of life, evidence for evolution, Darwin, Modern Synthetic theory, mutation/recombination, natural selection, gene flow, genetic drift, Hardy-Weinberg principle, adaptive radiation and human evolution.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between gene flow and genetic drift?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Gene flow moves alleles between populations, while genetic drift is random change in allele frequencies, especially relevant as a stochastic process in smaller populations.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Hardy-Weinberg a mechanism that causes evolution?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is primarily an equilibrium reference model. Departures from its conditions help reason about processes that can change population allele frequencies.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "nta-neet-documents", "ncert-biology-12-contents"],
  sourceNote:
    "Additional official reference reviewed for this page: NCERT Biology Class XII Evolution chapter, used for source-controlled evidence examples.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Genetics, Zoology or Life Sciences specialist with NEET/medical-entrance academic experience.",
    "Last reviewed: pending human review",
    "Sources checked: visible source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Evolution: Evidence, Selection & Hardy-Weinberg",
    description:
      "Learn current NEET Evolution through evidence, Darwin, modern synthesis, mutation, recombination, natural selection, gene flow, drift, Hardy-Weinberg and adaptive radiation.",
  },
};

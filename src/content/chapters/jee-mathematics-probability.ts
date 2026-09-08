import type { ChapterContent } from "@/content/types";

/**
 * Probability — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Conditional probability, independence and total probability are not
 *   separately named in the Main 2026 wording, so this page does not call
 *   them separate explicit Main bullets even though they support the
 *   stated multiplication/Bayes framework.
 */
export const jeeMathematicsProbability: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "JEE Main and JEE Advanced",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Probability",
  slug: "probability",
  url: "/jee/mathematics/probability",
  canonicalIntent:
    "Construct a valid sample space, model events, select addition, multiplication, conditional, total-probability or Bayes reasoning correctly, and distinguish independence from mutual exclusivity.",

  heroChips: [
    "Sample space and events precede any formula",
    "Independence is not the same as mutual exclusivity",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Probability starts with a sample space and clearly defined events. Addition handles unions, multiplication handles intersections, conditional probability updates the sample space after information is known, and Bayes' theorem reverses a conditional direction through a partition.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Mutually exclusive events are not the same as independent events.",
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
      label: "Permutations and Combinations",
      url: "/jee/mathematics/permutations-combinations",
      relation: "prerequisite",
      description: "Probability computation using permutations and combinations requires a settled counting model.",
    },
    {
      label: "Sets and Relations",
      url: "/jee/mathematics/sets-relations",
      relation: "prerequisite",
      description: "Events are modelled as subsets of a sample space using set operations.",
    },
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Probability",
    topics: [
      "Probability of an event",
      "Addition and multiplication theorems of probability",
      "Bayes' theorem",
      "Probability distribution of a random variable",
      "Conditional probability, independence and total probability (supporting reasoning)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "define-sample-space",
      title: "1. Define outcomes before counting them",
      keyIdea: "A random experiment gives a sample space; events are subsets of it.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Define outcomes before counting them. Decide whether outcomes are equally likely before using favourable-over-total counting.",
            },
          ],
        },
      ],
    },
    {
      id: "translate-language",
      title: "2. Translate the wording into set language",
      keyIdea: "\"Or\" is union, \"and\" is intersection, \"given\" is conditioning.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Translate \"or\" to union, \"and\" to intersection and \"given\" to conditioning before selecting a formula.",
            },
          ],
        },
      ],
    },
    {
      id: "check-relationship",
      title: "3. Check mutual exclusivity vs independence",
      keyIdea: "Check whether events are mutually exclusive or independent rather than assuming either.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "If A and B are mutually exclusive and both have positive probability, then P(A∩B)=0 while P(A)P(B)>0, so they are not independent. This distinction must remain explicit.",
            },
          ],
        },
      ],
    },
    {
      id: "check-denominators",
      title: "4. Check denominators before conditioning",
      keyIdea: "Conditional probability requires a positive denominator.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Check denominators before conditional probability, and for Bayes' theorem verify that the conditioning cases form an appropriate partition.",
            },
          ],
        },
      ],
    },
    {
      id: "bounds-check",
      title: "5. Validate the final probability bound",
      keyIdea: "Every final probability must lie in [0,1].",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Final probability must lie in [0,1]. A result outside this range signals a modelling or arithmetic error.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "complement",
      expression: "P(Aᶜ) = 1 - P(A)",
      meaning: "Probability of the complement of A.",
      variables: [],
      useWhen: "\"Not A\" questions.",
      commonTrap: "Complementing the wrong event.",
      accessibleText: "P of A complement equals one minus P of A.",
    },
    {
      id: "addition",
      expression: "P(A∪B) = P(A) + P(B) - P(A∩B)",
      meaning: "Probability of the union of two events.",
      variables: [],
      useWhen: "\"A or B\" questions.",
      commonTrap: "Adding the intersection twice.",
      accessibleText: "P of A union B equals P of A plus P of B minus P of A intersection B.",
    },
    {
      id: "mutually-exclusive-addition",
      expression: "P(A∪B) = P(A) + P(B)",
      meaning: "Union probability for disjoint events.",
      variables: [],
      useWhen: "Disjoint events.",
      commonTrap: "Using this for overlapping events.",
      accessibleText: "P of A union B equals P of A plus P of B, valid only when A intersection B is empty.",
    },
    {
      id: "conditional-probability",
      expression: "P(A|B) = P(A∩B)/P(B)",
      meaning: "Probability of A given B has occurred.",
      variables: [],
      useWhen: "\"A given B\" questions.",
      commonTrap: "Zero denominator.",
      accessibleText: "P of A given B equals P of A intersection B divided by P of B, requiring P of B greater than zero.",
    },
    {
      id: "multiplication",
      expression: "P(A∩B) = P(B) P(A|B)",
      meaning: "Intersection probability via conditioning on B.",
      variables: [],
      useWhen: "Sequential or intersection events, with P(B)>0.",
      commonTrap: "Assuming independence.",
      accessibleText: "P of A intersection B equals P of B times P of A given B.",
    },
    {
      id: "alternate-multiplication",
      expression: "P(A∩B) = P(A) P(B|A)",
      meaning: "Intersection probability via conditioning on A.",
      variables: [],
      useWhen: "Same as multiplication rule, conditioning on A, with P(A)>0.",
      commonTrap: "Zero denominator in the conditional.",
      accessibleText: "P of A intersection B equals P of A times P of B given A.",
    },
    {
      id: "independence",
      expression: "P(A∩B) = P(A) P(B)",
      meaning: "Definition of independence for events A and B.",
      variables: [],
      useWhen: "Testing independence.",
      commonTrap: "Confusing independence with disjointness.",
      accessibleText: "P of A intersection B equals P of A times P of B.",
    },
    {
      id: "total-probability",
      expression: "P(A) = Σ P(A|Bᵢ) P(Bᵢ)",
      meaning: "Total probability via a partition of the sample space.",
      variables: [{ symbol: "Bᵢ", meaning: "pairwise disjoint, exhaustive partition with P(Bᵢ)>0" }],
      useWhen: "Combining conditional routes.",
      commonTrap: "Cases not exhaustive or overlapping.",
      accessibleText: "P of A equals the sum over i of P of A given B sub i times P of B sub i.",
    },
    {
      id: "bayes",
      expression: "P(Bⱼ|A) = P(A|Bⱼ) P(Bⱼ) / Σ P(A|Bᵢ) P(Bᵢ)",
      meaning: "Reverses the conditioning direction through a partition.",
      variables: [{ symbol: "Bᵢ", meaning: "same partition conditions, plus P(A)>0" }],
      useWhen: "Reverse conditioning.",
      commonTrap: "Missing prior probabilities.",
      accessibleText: "P of B sub j given A equals P of A given B sub j times P of B sub j, divided by the sum over i of P of A given B sub i times P of B sub i.",
    },
    {
      id: "discrete-distribution",
      expression: "pᵢ ≥ 0, Σpᵢ = 1",
      meaning: "Validity condition for a discrete probability distribution.",
      variables: [],
      useWhen: "Validate a random-variable table.",
      commonTrap: "Probabilities not summing to 1.",
      accessibleText: "Each p sub i is nonnegative and the sum of all p sub i equals one.",
    },
    {
      id: "discrete-expectation",
      expression: "E[X] = Σxᵢpᵢ",
      meaning: "Expected value of a finite discrete random variable.",
      variables: [],
      useWhen: "Advanced random-variable linkage.",
      commonTrap: "Averaging x-values without probabilities.",
      accessibleText: "E of X equals the sum of x sub i times p sub i.",
    },
    {
      id: "discrete-variance",
      expression: "Var(X) = Σ(xᵢ-μ)²pᵢ = Σxᵢ²pᵢ - μ²",
      meaning: "Variance of a finite discrete random variable.",
      variables: [{ symbol: "μ", meaning: "E[X]" }],
      useWhen: "Advanced random-variable linkage.",
      commonTrap: "Negative result from arithmetic error.",
      accessibleText: "Variance of X equals the sum of x sub i minus mu, squared, times p sub i, which must be nonnegative.",
    },
  ],

  workedExamples: [
    {
      id: "bayes-box-selection",
      prompt:
        "Two boxes are chosen with equal probability. Box A contains 2 red and 1 blue ball. Box B contains 1 red and 2 blue balls. One ball is drawn from the selected box and is red. Find the probability that Box A was selected.",
      steps: [
        { type: "paragraph", children: [{ text: "Known: P(A)=P(B)=1/2, P(R|A)=2/3, P(R|B)=1/3. A and B form a disjoint exhaustive partition of the box choice." }] },
        { type: "paragraph", children: [{ text: "The question reverses the known conditional direction, so Bayes' theorem is appropriate." }] },
        { type: "paragraph", children: [{ text: "P(A|R) = [(2/3)(1/2)] / [(2/3)(1/2)+(1/3)(1/2)] = (1/3)/(1/2) = 2/3." }] },
        { type: "paragraph", children: [{ text: "Validity check: the answer lies in [0,1]. Observing red should favour Box A because Box A has the larger red proportion, so a posterior above 1/2 is directionally sensible." }] },
      ],
      answer: "2/3",
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "Constructing sample spaces and events, then selecting addition, multiplication, conditional, total-probability or Bayes reasoning."],
        ["What is the central method choice?", "Translate wording into set language, check mutual exclusivity vs independence, and validate denominators before conditioning."],
        ["Where do most mistakes begin?", "Assuming outcomes are equally likely without justification, and treating mutually exclusive events as independent."],
        ["What should come before this chapter?", "Permutations and Combinations for sample-space counting, and Sets and Relations for event modelling."],
        ["What comes after it?", "Statistics extends random-variable mean and variance further."],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Probability",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Explicit topic list",
          "Unit 13 explicitly includes probability of an event, addition and multiplication theorems of probability, Bayes' theorem and probability distribution of a random variable. Conditional probability, independence and total probability are not separately named in the Main wording.",
          "Explicitly includes random experiments, sample spaces, impossible/simple/compound events, addition and multiplication rules, conditional probability, independence, total probability, Bayes' theorem, and probability computation using permutations and combinations.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model"],
      rows: [
        ["\"At least one\"", "Complement is often efficient."],
        ["\"A or B\"", "Addition rule, with intersection check."],
        ["\"A and B\"", "Multiplication/conditional structure."],
        ["\"Given B\"", "Conditional probability, after P(B)>0."],
        ["Cause after observing an outcome", "Bayes, after partition validation."],
        ["Probability from arrangements/selections", "Build the P&C sample-space model first."],
        ["Random-variable table", "Validate probabilities before calculating mean or variance."],
      ],
    },
  ],

  mistakes: [
    {
      id: "assumed-equally-likely",
      mistake: "Assuming outcomes are equally likely without justification.",
      why: [{ type: "paragraph", children: [{ text: "Favourable-over-total counting only applies when outcomes are actually equally likely." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Justify the equally-likely assumption before using favourable-over-total counting." }] }],
      errorType: "needs-review",
    },
    {
      id: "union-intersection-confusion",
      mistake: "Confusing union with intersection.",
      why: [{ type: "paragraph", children: [{ text: "\"Or\" and \"and\" translate to different set operations with different formulas." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Translate the wording into union or intersection language before selecting a formula." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "exclusive-treated-independent",
      mistake: "Treating mutually exclusive events as independent.",
      why: [{ type: "paragraph", children: [{ text: "If both events have positive probability, mutually exclusive events cannot be independent." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check both relationships separately rather than assuming one implies the other." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "zero-denominator-conditional",
      mistake: "Cancelling conditional probabilities without a positive denominator.",
      why: [{ type: "paragraph", children: [{ text: "Conditional probability is undefined when the conditioning event has probability zero." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check that the denominator is positive before using conditional probability." }] }],
      errorType: "execution-error",
    },
    {
      id: "bayes-without-partition",
      mistake: "Using Bayes without an exhaustive disjoint case structure.",
      why: [{ type: "paragraph", children: [{ text: "Bayes' theorem requires the conditioning cases to form a valid partition." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the partition is pairwise disjoint and exhaustive before applying Bayes' theorem." }] }],
      errorType: "decision-error",
    },
    {
      id: "omitting-priors",
      mistake: "Omitting prior probabilities.",
      why: [{ type: "paragraph", children: [{ text: "Bayes' theorem requires the prior probability of each partition case." }] }],
      fix: [{ type: "paragraph", children: [{ text: "List all prior probabilities before computing the Bayes numerator and denominator." }] }],
      errorType: "recall-gap",
    },
    {
      id: "mean-before-validation",
      mistake: "Computing a random-variable mean before validating the distribution.",
      why: [{ type: "paragraph", children: [{ text: "An invalid distribution makes any computed mean meaningless." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check pᵢ≥0 and Σpᵢ=1 before computing expectation or variance." }] }],
      errorType: "decision-error",
    },
    {
      id: "out-of-bounds-probability",
      mistake: "Producing a probability outside [0,1].",
      why: [{ type: "paragraph", children: [{ text: "This signals a modelling or arithmetic error somewhere in the solution." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Validate the final answer lies in [0,1] as a routine check." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    { label: "Permutations and Combinations", url: "/jee/mathematics/permutations-combinations", relation: "prerequisite" },
    { label: "Sets and Relations", url: "/jee/mathematics/sets-relations", relation: "related" },
    { label: "Statistics", url: "/jee/mathematics/statistics", relation: "next" },
  ],

  sources: [
    "nta-jee-syllabus",
    "nta-jee-main-2026-syllabus-pdf",
    "jee-advanced-syllabus",
    "ncert-math-exemplar-11-permutations",
    "ncert-math-exemplar-11-probability",
    "ncert-math-exemplar",
  ],
  sourceNote: "Official syllabus scope verified against NTA JEE Main 2026 and JEE Advanced 2026 documents. No weightage, frequency or PYQ-count claim is made.",
  contributorPolicy: [
    "Reviewer specialisation: probability, combinatorics and statistics.",
    "Minimum: postgraduate Mathematics, Applied Mathematics, Statistics or equivalent.",
    "Review scope: sample-space assumptions, all conditional denominators, independence criteria, total-probability partition conditions, Bayes denominator, random-variable distribution validity and worked example.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Probability for JEE 2026: Conditional Probability and Bayes",
    description: "Learn events, addition and multiplication rules, conditional probability, independence, total probability, Bayes and random-variable distributions.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Permutations and Combinations — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Repetition and indistinguishable-object formulas are supporting counting
 *   models under the broad chapter and are not described as separately
 *   named JEE Main 2026 syllabus bullets.
 */
export const jeeMathematicsPermutationsCombinations: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "JEE Main and JEE Advanced",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Permutations and Combinations",
  slug: "permutations-combinations",
  url: "/jee/mathematics/permutations-combinations",
  canonicalIntent:
    "Model a counting problem correctly before choosing a formula by deciding whether order matters, whether repetition is allowed, whether objects are distinguishable, and what restrictions apply.",

  heroChips: [
    "Build the counting model before picking a formula",
    "Order, repetition and distinguishability decide the formula",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Permutation and combination formulas are outputs of a counting model, not the starting point. First decide what is being counted.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "If order matters, use an arrangement model. If order does not matter, use a selection model. Then decide whether repetition is allowed, whether any objects are indistinguishable, and whether restrictions split the problem into cases.",
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
      label: "Sets and Relations",
      url: "/jee/mathematics/sets-relations",
      relation: "prerequisite",
      description: "Set-based case distinction supports counting-model reasoning.",
    },
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Permutations and Combinations",
    topics: [
      "Fundamental principle of counting",
      "Permutations",
      "Combinations",
      "Meaning of P(n,r) and C(n,r)",
      "Simple applications",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "define-outcome",
      title: "1. Define the counted outcome in words",
      keyIdea: "State in words what one counted outcome is before choosing any formula.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "State in words what one counted outcome is. This prevents jumping to a formula before the model is clear.",
            },
          ],
        },
      ],
    },
    {
      id: "order-question",
      title: "2. Decide whether order matters",
      keyIdea: "Order determines whether the model is a permutation or a combination.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Decide whether changing order creates a different outcome. If it does, use a permutation-based model; if not, use a combination-based model.",
            },
          ],
        },
      ],
    },
    {
      id: "repetition-question",
      title: "3. Decide whether repetition is allowed",
      keyIdea: "Repetition changes the formula from factorial-based to power-based counting.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Decide whether an option may be reused. Do not assume repetition is allowed simply because a formula would be convenient.",
            },
          ],
        },
      ],
    },
    {
      id: "distinguishability-question",
      title: "4. Identify identical objects",
      keyIdea: "Interchanging identical objects does not create a new outcome.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Identify identical objects before counting arrangements. Treating identical objects as distinguishable overcounts the result.",
            },
          ],
        },
      ],
    },
    {
      id: "restrictions",
      title: "5. Apply restrictions by cases, complement or position fixing",
      keyIdea: "Restrictions can split a problem into disjoint cases or be handled through complements.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Apply restrictions by cases, complement or position fixing, then only select nPr, nCr, factorial division or a product of choices once the model is settled.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "multiplication-principle",
      expression: "Total outcomes = m₁ × m₂ × ... × m_k",
      meaning: "Count of outcomes for a staged process with successive independent choices.",
      variables: [{ symbol: "m_i", meaning: "number of allowed choices at stage i" }],
      useWhen: "Sequential choices.",
      commonTrap: "Multiplying mutually exclusive alternatives.",
      accessibleText: "Total outcomes equal the product of the choice counts at each stage.",
    },
    {
      id: "addition-principle",
      expression: "Total = count(case 1) + count(case 2) + ...",
      meaning: "Add counts of disjoint cases.",
      variables: [],
      useWhen: "Either/or cases.",
      commonTrap: "Double-counting overlap.",
      accessibleText: "Add the counts of cases that do not overlap.",
    },
    {
      id: "factorial",
      expression: "n! = n(n-1)...1, 0! = 1",
      meaning: "Number of ways to arrange n distinct objects.",
      variables: [{ symbol: "n", meaning: "nonnegative integer" }],
      useWhen: "Arrange n distinct objects.",
      commonTrap: "Undefined negative factorial.",
      accessibleText: "n factorial equals n times n minus one and so on down to one; zero factorial equals one.",
    },
    {
      id: "permutation-without-repetition",
      expression: "nPr = n!/(n-r)!",
      meaning: "Number of ordered arrangements of r objects chosen from n distinct objects, no repetition.",
      variables: [{ symbol: "n", meaning: "distinct available objects" }, { symbol: "r", meaning: "integer, 0≤r≤n" }],
      useWhen: "Arrange r from n.",
      commonTrap: "Using when order does not matter.",
      accessibleText: "n P r equals n factorial divided by n minus r factorial.",
    },
    {
      id: "combination-without-repetition",
      expression: "nCr = n!/[r!(n-r)!]",
      meaning: "Number of unordered selections of r objects from n distinct objects, no repetition.",
      variables: [{ symbol: "n", meaning: "distinct objects" }, { symbol: "r", meaning: "integer, 0≤r≤n" }],
      useWhen: "Choose r from n.",
      commonTrap: "Counting order repeatedly.",
      accessibleText: "n C r equals n factorial divided by r factorial times n minus r factorial.",
    },
    {
      id: "permutation-combination-relation",
      expression: "nPr = nCr × r!",
      meaning: "Relation between ordered and unordered counts.",
      variables: [],
      useWhen: "Convert selection then arrangement.",
      commonTrap: "Forgetting r!.",
      accessibleText: "n P r equals n C r times r factorial.",
    },
    {
      id: "ordered-choices-with-repetition",
      expression: "n^r",
      meaning: "Count of ordered sequences of r labelled positions, each with n available choices, repetition allowed.",
      variables: [{ symbol: "n", meaning: "choices per position" }, { symbol: "r", meaning: "number of positions" }],
      useWhen: "Codes or sequences under stated rules.",
      commonTrap: "Using when restrictions change by position.",
      accessibleText: "n to the power r.",
    },
    {
      id: "arrangements-with-identical-groups",
      expression: "n!/(m₁!m₂!...m_k!)",
      meaning: "Distinct arrangements of n objects with repeated identical groups.",
      variables: [{ symbol: "m_i", meaning: "size of identical group i, summing to n" }],
      useWhen: "Repeated identical objects.",
      commonTrap: "Dividing for objects that are actually distinguishable.",
      accessibleText: "n factorial divided by the product of the factorials of each identical group's size.",
    },
  ],

  workedExamples: [
    {
      id: "level-arrangements",
      prompt: "How many distinct arrangements can be made from the letters of LEVEL?",
      steps: [
        { type: "paragraph", children: [{ text: "Five letters total. L appears twice, E appears twice, V appears once. Order matters, but the L copies and E copies are indistinguishable." }] },
        { type: "paragraph", children: [{ text: "If all five positions contained labelled objects there would be 5! arrangements. Each visible arrangement is counted 2! times for the L copies and 2! times for the E copies." }] },
        { type: "paragraph", children: [{ text: "5!/(2!2!) = 120/4 = 30." }] },
        { type: "paragraph", children: [{ text: "Validity check: the result is smaller than 5!=120, as it must be because identical-letter swaps do not create new outcomes." }] },
      ],
      answer: "30",
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "Building a counting model, then choosing between permutation, combination or a supporting counting formula."],
        ["What is the central method choice?", "Define the outcome, decide order, repetition and distinguishability, apply restrictions, then select the formula."],
        ["Where do most mistakes begin?", "Choosing a formula before defining the counted outcome, and treating identical objects as distinguishable."],
        ["What should come before this chapter?", "Sets and Relations, for set-based case distinction."],
        ["What comes after it?", "Binomial Theorem uses combinations notation; Probability builds on counting models."],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Permutations and Combinations",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Counting principle and formulas",
          "Unit 4 explicitly includes the fundamental principle of counting, permutations and combinations, the meaning of P(n,r) and C(n,r), and simple applications.",
          "Algebra explicitly includes permutations and combinations.",
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
        ["Order matters, no repetition", "Permutation."],
        ["Order does not matter, no repetition", "Combination."],
        ["Independent labelled positions, repetition allowed", "Multiplication principle, often n^r."],
        ["Some objects identical", "Start from labelled arrangements, then divide by internal identical permutations when valid."],
        ["\"At least one\" restriction", "Complement may be simpler."],
        ["Mutually exclusive structural cases", "Count each case then add."],
        ["Object fixed together/apart", "Decide whether block or complement reasoning is valid before calculating."],
      ],
    },
  ],

  mistakes: [
    {
      id: "formula-before-model",
      mistake: "Choosing a formula before defining the counted outcome.",
      why: [{ type: "paragraph", children: [{ text: "Without a defined outcome, it is unclear whether order, repetition or distinguishability apply." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State in words what one counted outcome is before selecting a formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "permutation-when-order-irrelevant",
      mistake: "Using permutation when order does not matter.",
      why: [{ type: "paragraph", children: [{ text: "This overcounts outcomes that are actually the same selection." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm whether order changes the outcome before choosing nPr or nCr." }] }],
      errorType: "decision-error",
    },
    {
      id: "combination-when-order-matters",
      mistake: "Using combination when order does matter.",
      why: [{ type: "paragraph", children: [{ text: "This undercounts outcomes that should be treated as distinct." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm whether order changes the outcome before choosing nPr or nCr." }] }],
      errorType: "decision-error",
    },
    {
      id: "assumed-repetition",
      mistake: "Assuming repetition is allowed because the formula is convenient.",
      why: [{ type: "paragraph", children: [{ text: "Repetition must be justified by the problem statement, not assumed." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the problem wording explicitly for repetition allowance." }] }],
      errorType: "needs-review",
    },
    {
      id: "identical-treated-as-distinguishable",
      mistake: "Treating identical objects as distinguishable.",
      why: [{ type: "paragraph", children: [{ text: "This overcounts arrangements by the number of internal permutations of the identical group." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify identical objects and divide by their internal factorial." }] }],
      errorType: "execution-error",
    },
    {
      id: "overlapping-cases-added",
      mistake: "Adding overlapping cases.",
      why: [{ type: "paragraph", children: [{ text: "The addition principle requires disjoint cases." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check for intersections between cases before adding their counts." }] }],
      errorType: "execution-error",
    },
    {
      id: "mutually-exclusive-multiplied",
      mistake: "Multiplying mutually exclusive alternatives.",
      why: [{ type: "paragraph", children: [{ text: "Multiplication applies to sequential independent choices, not either/or alternatives." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the addition principle for either/or alternatives instead." }] }],
      errorType: "decision-error",
    },
    {
      id: "double-counting-restrictions",
      mistake: "Double-counting when restrictions create overlapping cases.",
      why: [{ type: "paragraph", children: [{ text: "Restriction cases that overlap will be counted more than once if added directly." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify restriction cases are disjoint, or use complement reasoning instead." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Sets and Relations", url: "/jee/mathematics/sets-relations", relation: "prerequisite" },
    { label: "Binomial Theorem", url: "/jee/mathematics/binomial-theorem", relation: "related" },
    { label: "Probability", url: "/jee/mathematics/probability", relation: "next" },
  ],

  sources: ["nta-jee-syllabus", "nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar-11-permutations"],
  sourceNote: "Official syllabus scope verified against NTA JEE Main 2026 and JEE Advanced 2026 documents. No weightage, frequency or PYQ-count claim is made.",
  contributorPolicy: [
    "Reviewer specialisation: combinatorics and probability foundations.",
    "Minimum: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: model conditions for every count, overlap logic, repetition assumptions, indistinguishable-object formula and worked example.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Permutations and Combinations for JEE 2026: Counting Methods",
    description: "Learn when order matters, when repetition is allowed, how identical objects change counts, and how to choose nPr or nCr.",
  },
};

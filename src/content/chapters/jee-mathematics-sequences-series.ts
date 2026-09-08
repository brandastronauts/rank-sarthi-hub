import type { ChapterContent } from "@/content/types";

/**
 * Sequences and Series — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Infinite geometric series and the sums of the first n natural numbers,
 *   squares and cubes are explicit JEE Advanced 2026 content; JEE Main 2026
 *   explicitly covers AP, GP, insertion of arithmetic and geometric means,
 *   and the relation between A.M. and G.M., without separately naming
 *   infinite geometric series. This boundary is preserved throughout.
 */
export const jeeMathematicsSequencesSeries: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Sequences and Series",
  slug: "sequences-series",
  url: "/jee/mathematics/sequences-series",
  canonicalIntent:
    "Recognise arithmetic and geometric structure, distinguish a sequence from a finite or infinite series, select the correct term or sum formula, and apply convergence conditions before summing an infinite GP.",

  heroChips: [
    "Main: AP, GP, means, A.M.-G.M. relation",
    "Advanced adds: infinite geometric series and sums of naturals, squares, cubes",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A sequence is an ordered list of terms. A series is a sum of terms. In an AP, consecutive differences are constant. In a GP, consecutive nonzero-term ratios are constant. Finite formulas work from the progression structure; an infinite GP has the finite sum a/(1-r) only when |r| < 1.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Never write the infinite GP sum a/(1-r) without first checking |r| < 1.",
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
      label: "Quadratic Equations",
      url: "/jee/mathematics/quadratic-equations",
      relation: "prerequisite",
      description: "Algebraic simplification and equations in one variable underlie progression manipulation.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Sequence and Series",
    topics: [
      "Arithmetic progression",
      "Geometric progression",
      "Insertion of arithmetic and geometric means",
      "Relation between A.M. and G.M.",
      "Sums of finite AP and GP",
      "Infinite geometric series",
      "Sums of the first n natural numbers, their squares and their cubes",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "pattern-identification",
      title: "1. Compute differences or ratios before naming the pattern",
      keyIdea: "Confirm a constant common difference for AP or a constant valid ratio for GP before proceeding.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Compute differences before declaring a sequence an AP, and compute ratios only where division is meaningful before declaring it a GP.",
            },
          ],
        },
      ],
    },
    {
      id: "term-vs-sum",
      title: "2. Separate nth-term questions from sum questions",
      keyIdea: "An nth-term formula and a sum formula answer different questions and must not be interchanged.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Determine whether the question asks for a specific term or for a total, and apply the corresponding nth-term or sum formula.",
            },
          ],
        },
      ],
    },
    {
      id: "means-insertion",
      title: "3. Count how many inserted means create how many intervals",
      keyIdea: "Inserting m means between two endpoints creates m+1 intervals.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When inserting arithmetic or geometric means between two given numbers, count how many inserted means create how many intervals before computing the common difference or ratio.",
            },
          ],
        },
      ],
    },
    {
      id: "convergence-check",
      title: "4. Test |r| < 1 before summing an infinite GP",
      keyIdea: "The infinite GP sum formula only applies to a convergent series.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For an infinite GP, test |r| < 1 before writing a sum. The formula S-infinity = a/(1-r) is only valid for a convergent series.",
            },
          ],
        },
      ],
    },
    {
      id: "am-gm-condition",
      title: "5. State the positivity condition and equality case for AM-GM",
      keyIdea: "AM-GM applies to positive real numbers, with equality only when the two numbers are equal.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For AM-GM inequality, state the positivity condition on the numbers involved and the equality case, which occurs when the two numbers are equal.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "ap-nth-term",
      expression: "a_n = a + (n-1)d",
      meaning: "nth term of an arithmetic progression",
      variables: [
        { symbol: "a", meaning: "first term" },
        { symbol: "d", meaning: "common difference" },
        { symbol: "n", meaning: "positive integer term index" },
      ],
      useWhen: "Locating a term of an AP",
      commonTrap: "Using n instead of (n-1) as the multiplier",
      accessibleText: "the nth term of an AP equals a plus n minus one times d",
    },
    {
      id: "ap-sum",
      expression: "S_n = n/2 [2a + (n-1)d] = n(a+l)/2",
      meaning: "Sum of the first n terms of an AP",
      variables: [
        { symbol: "a", meaning: "first term" },
        { symbol: "d", meaning: "common difference" },
        { symbol: "n", meaning: "positive integer number of terms" },
        { symbol: "l", meaning: "nth term of the AP" },
      ],
      useWhen: "Finite AP sum",
      commonTrap: "Using l when the last term is not known to be the nth term",
      accessibleText: "the sum of n terms of an AP equals n over two times the quantity two a plus n minus one times d, or n times a plus l over two",
    },
    {
      id: "insert-arithmetic-means",
      expression: "d = (b-a)/(m+1)",
      meaning: "Common difference when inserting m arithmetic means between a and b",
      variables: [
        { symbol: "a", meaning: "first endpoint" },
        { symbol: "b", meaning: "second endpoint" },
        { symbol: "m", meaning: "nonnegative integer number of means inserted" },
      ],
      useWhen: "Building an AP from two given endpoints",
      commonTrap: "Dividing by m instead of m+1",
      accessibleText: "d equals b minus a divided by m plus one",
    },
    {
      id: "gp-nth-term",
      expression: "a_n = a * r^(n-1)",
      meaning: "nth term of a geometric progression",
      variables: [
        { symbol: "a", meaning: "first term" },
        { symbol: "r", meaning: "common ratio" },
        { symbol: "n", meaning: "positive integer term index" },
      ],
      useWhen: "Locating a term of a GP",
      commonTrap: "Using the wrong exponent for n",
      accessibleText: "the nth term of a GP equals a times r raised to the power n minus one",
    },
    {
      id: "gp-finite-sum",
      expression: "S_n = a(1-r^n)/(1-r)",
      meaning: "Sum of the first n terms of a GP",
      variables: [
        { symbol: "a", meaning: "first term" },
        { symbol: "r", meaning: "common ratio, r not equal to 1" },
        { symbol: "n", meaning: "positive integer number of terms" },
      ],
      useWhen: "Finite GP sum",
      commonTrap: "Using this formula when r = 1",
      accessibleText: "the sum of n terms of a GP equals a times the quantity one minus r to the n over one minus r, valid only when r is not one; for r equal to one use S n equals n times a",
    },
    {
      id: "gp-infinite-sum",
      expression: "S_infinity = a/(1-r)",
      meaning: "Sum of an infinite geometric series",
      variables: [
        { symbol: "a", meaning: "first term" },
        { symbol: "r", meaning: "common ratio with |r| < 1" },
      ],
      useWhen: "Convergent infinite GP",
      commonTrap: "Applying this for |r| greater than or equal to 1",
      accessibleText: "the infinite sum equals a divided by one minus r, valid only when the absolute value of r is less than one",
    },
    {
      id: "am-gm",
      expression: "(a+b)/2 >= sqrt(a*b)",
      meaning: "Arithmetic mean is at least the geometric mean for two positive reals",
      variables: [
        { symbol: "a", meaning: "positive real number" },
        { symbol: "b", meaning: "positive real number" },
      ],
      useWhen: "Comparing arithmetic and geometric means of two positive numbers",
      commonTrap: "Applying this to arbitrary signed reals",
      accessibleText: "a plus b over two is greater than or equal to the square root of a times b, with equality only when a equals b",
    },
    {
      id: "sum-of-naturals",
      expression: "sum(1..n) = n(n+1)/2",
      meaning: "Sum of the first n natural numbers",
      variables: [{ symbol: "n", meaning: "positive integer" }],
      useWhen: "Advanced explicit sum",
      commonTrap: "Off-by-one errors in n",
      accessibleText: "the sum of the first n natural numbers equals n times n plus one over two",
    },
    {
      id: "sum-of-squares",
      expression: "sum(1^2..n^2) = n(n+1)(2n+1)/6",
      meaning: "Sum of the squares of the first n natural numbers",
      variables: [{ symbol: "n", meaning: "positive integer" }],
      useWhen: "Advanced explicit sum",
      commonTrap: "Confusing this with the sum-of-naturals or sum-of-cubes formula",
      accessibleText: "the sum of the squares of the first n natural numbers equals n times n plus one times two n plus one, all over six",
    },
    {
      id: "sum-of-cubes",
      expression: "sum(1^3..n^3) = [n(n+1)/2]^2",
      meaning: "Sum of the cubes of the first n natural numbers",
      variables: [{ symbol: "n", meaning: "positive integer" }],
      useWhen: "Advanced explicit sum",
      commonTrap: "Squaring only n instead of the whole sum-of-naturals expression",
      accessibleText: "the sum of the cubes of the first n natural numbers equals the square of n times n plus one over two",
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
          "Recognising AP and GP structure, distinguishing sequence from series, and applying term, sum and convergence formulas correctly.",
        ],
        [
          "What is the central method choice?",
          "Confirm constant difference or ratio, separate term from sum questions, and test |r| < 1 before summing an infinite GP.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing a sequence with its sum, using the infinite-sum formula without checking convergence, and applying AM-GM to signed numbers.",
        ],
        [
          "What should come before Sequences and Series?",
          "Quadratic Equations for algebraic simplification and equation-solving fluency.",
        ],
        [
          "What comes after it?",
          "Binomial Theorem, Permutations and Combinations, and Probability build on the same algebraic and counting foundations.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Sequences and Series",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "AP and GP core structure",
          "Explicitly includes arithmetic and geometric progressions.",
          "Explicitly includes AP and GP.",
          "Both papers require the same core progression fluency.",
        ],
        [
          "Means and sums",
          "Explicitly includes insertion of arithmetic and geometric means, and the relation between A.M. and G.M.",
          "Explicitly includes arithmetic and geometric means and sums of finite AP and GP.",
          "Both papers require mean-insertion and finite-sum fluency.",
        ],
        [
          "Infinite GP and explicit natural-number sums",
          "Not separately stated.",
          "Explicitly includes infinite geometric series and sums of the first n natural numbers, their squares and their cubes.",
          "Do not present infinite GP or these explicit sums as separately named Main 2026 bullets.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Sequences and Series",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Algebraic simplification",
          "Simplify algebraic expressions with multiple terms.",
          "Revise basic algebra.",
        ],
        [
          "Exponents",
          "Work with integer exponents in an expression.",
          "Revise exponent rules.",
        ],
        [
          "Equations in one variable",
          "Solve a linear or simple algebraic equation for one unknown.",
          "Revise Quadratic Equations.",
        ],
        [
          "Basic inequality language",
          "Interpret a greater-than-or-equal statement and an equality condition.",
          "Revise inequality basics.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: finite-vs-infinite progression selector",
      intro: "Match the question signal to the correct first model before executing.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Constant difference", "AP", "Confirm the difference is constant"],
        ["Constant ratio", "GP", "Confirm the ratio is constant and terms are nonzero"],
        ["Term number requested", "nth-term formula", "Correct index n used"],
        ["Finite total requested", "Finite sum formula", "Correct r not equal to 1 case, or r = 1 special case"],
        ["Means inserted between endpoints", "Count intervals first", "m means create m+1 intervals"],
        ["Infinite GP", "Convergence test first, formula second", "|r| < 1 confirmed"],
        ["Positive-real comparison of arithmetic and geometric means", "AM-GM with equality check", "Both numbers positive; equality iff a = b"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-infinite-gp",
      slot: "concepts",
      heading: "Worked reasoning: summing an infinite GP",
      jump: true,
      concepts: [
        {
          id: "infinite-gp-worked",
          title: "Find the sum of 5 + 5/3 + 5/9 + 5/27 + ...",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "Known: first term a = 5; common ratio r = 1/3. Find: infinite sum. Method choice: this is an infinite GP, so convergence must be checked before using the formula." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "|r| = 1/3, which is less than 1, so the series converges. S-infinity = 5/(1 - 1/3) = 5/(2/3) = 15/2." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Validity check: partial sums are positive, increasing and remain below 15/2, consistent with the stated limit." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Scope note: infinite GP is explicitly named in JEE Advanced 2026. It is not separately stated in the JEE Main 2026 Sequence and Series wording." },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "sequence-vs-series",
      mistake: "Confusing a sequence with the sum of a sequence.",
      why: [{ type: "paragraph", children: [{ text: "A sequence is an ordered list of terms; a series is the sum of those terms, and the two are different objects." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify whether the question asks about the list of terms or about their total." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "gp-without-ratio-check",
      mistake: "Calling a pattern GP before confirming a constant valid ratio.",
      why: [{ type: "paragraph", children: [{ text: "A GP requires a constant ratio between consecutive nonzero terms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compute at least two consecutive ratios before naming the pattern GP." }] }],
      errorType: "execution-error",
    },
    {
      id: "gp-nth-term-exponent",
      mistake: "Using ar^n for the nth term instead of ar^(n-1).",
      why: [{ type: "paragraph", children: [{ text: "The exponent in the GP nth-term formula is n-1, not n." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check n=1 gives back the first term a before finalising the formula." }] }],
      errorType: "recall-gap",
    },
    {
      id: "finite-gp-at-r-equals-1",
      mistake: "Using the finite GP denominator formula when r = 1.",
      why: [{ type: "paragraph", children: [{ text: "The formula S_n = a(1-r^n)/(1-r) is undefined when r = 1." }] }],
      fix: [{ type: "paragraph", children: [{ text: "For r = 1, use S_n = na instead." }] }],
      errorType: "execution-error",
    },
    {
      id: "infinite-gp-no-convergence-check",
      mistake: "Using a/(1-r) without checking |r| < 1.",
      why: [{ type: "paragraph", children: [{ text: "The infinite GP sum formula is only valid for a convergent series, which requires |r| < 1." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Test |r| < 1 before writing the infinite-sum formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "am-gm-signed",
      mistake: "Applying positive-real AM-GM to arbitrary signed inputs.",
      why: [{ type: "paragraph", children: [{ text: "The standard AM-GM inequality is stated for positive real numbers." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm both numbers are positive before applying AM-GM." }] }],
      errorType: "decision-error",
    },
    {
      id: "am-gm-equality-forgotten",
      mistake: "Forgetting that equality in AM-GM occurs at a = b.",
      why: [{ type: "paragraph", children: [{ text: "The equality case is a specific, testable condition, not automatic." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State a = b explicitly when asserting equality in AM-GM." }] }],
      errorType: "recall-gap",
    },
    {
      id: "advanced-sums-as-main",
      mistake: "Treating Advanced-only explicit sums as separately named Main bullets.",
      why: [{ type: "paragraph", children: [{ text: "Infinite GP and the explicit sums of naturals, squares and cubes are explicit in JEE Advanced 2026, not separately named in JEE Main 2026." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official-syllabus mapping table on this page before assuming Main-scope relevance." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Quadratic Equations",
      url: "/jee/mathematics/quadratic-equations",
      relation: "prerequisite",
      description: "Algebraic simplification and equation-solving fluency underlie progression manipulation.",
    },
    {
      label: "Binomial Theorem",
      url: "/jee/mathematics/binomial-theorem",
      relation: "related",
      description: "Shares algebraic expansion and coefficient-pattern reasoning.",
    },
    {
      label: "Permutations and Combinations",
      url: "/jee/mathematics/permutations-combinations",
      relation: "forward",
      description: "Counting principles build on the same structured algebraic reasoning.",
    },
    {
      label: "Probability",
      url: "/jee/mathematics/probability",
      relation: "forward",
      description: "Series summation techniques reappear in probability distribution calculations.",
    },
  ],

  links: [
    {
      label: "JEE Mathematics Syllabus",
      url: "/jee/syllabus/mathematics",
      relation: "up",
      description: "Official syllabus mapping for Mathematics.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Mathematics subject hub.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between a sequence and a series?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "A sequence is an ordered list of terms; a series is the sum of those terms." }],
        },
      ],
    },
    {
      question: "When can an infinite GP be summed?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "An infinite GP has the finite sum a/(1-r) only when |r| < 1. If |r| is greater than or equal to 1, the series does not have this finite sum." }],
        },
      ],
    },
    {
      question: "Is infinite GP explicitly in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. Infinite geometric series is explicitly named in the JEE Advanced 2026 syllabus. The JEE Main 2026 Sequence and Series wording does not separately state it." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar"],
  sourceNote:
    "Use only official Main and Advanced syllabus documents for scope claims. Keep infinite geometric series and the explicit sums of naturals, squares and cubes labelled as Advanced-only content. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: algebra, sequences, series and inequalities. Minimum qualification: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: finite/infinite distinction, GP convergence, AM-GM positivity and equality, mean-insertion conditions, Advanced-only scope labels and all formulas.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Sequences and Series for JEE 2026: AP, GP and Infinite GP",
    description:
      "Learn AP and GP terms, finite sums, means, AM-GM conditions and the |r| < 1 convergence rule for JEE Main and Advanced.",
    ogTitle: "Sequences and Series for JEE 2026",
    ogDescription: "AP and GP term and sum formulas, mean insertion, AM-GM, and infinite GP convergence for JEE.",
    ogType: "article",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Binomial Theorem — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Scope is limited to the positive integral index treatment used by the
 *   current JEE Main 2026 and JEE Advanced 2026 syllabuses; generalized
 *   non-integral binomial series is explicitly out of scope for this page.
 */
export const jeeMathematicsBinomialTheorem: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "JEE Main and JEE Advanced",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Binomial Theorem",
  slug: "binomial-theorem",
  url: "/jee/mathematics/binomial-theorem",
  canonicalIntent:
    "Expand a binomial with a positive integral index, identify a general or middle term, and use binomial-coefficient properties without drifting into generalized binomial-series claims.",

  heroChips: [
    "Positive integral index only: no generalized binomial series",
    "General term and middle-term position depend on parity of n",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For a positive integer n, (a+b)^n has n+1 terms and its (r+1)th term is C(n,r)a^(n-r)b^r, where 0≤r≤n.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The number and location of middle terms depend on whether n is even or odd.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "This page does not extend the syllabus into generalized non-integral binomial series.",
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
      description: "Combinations notation C(n,r) is required before reading binomial coefficients.",
    },
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Binomial Theorem",
    topics: [
      "Binomial theorem for a positive integral index",
      "General term",
      "Middle term",
      "Simple applications",
      "Properties of binomial coefficients",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "confirm-index",
      title: "1. Confirm the index is a positive integer",
      keyIdea: "The theorem used on this page requires n to be a positive integer.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Confirm n is a positive integer for the official theorem used here. A non-integral or negative index is not part of this route's scope.",
            },
          ],
        },
      ],
    },
    {
      id: "term-position",
      title: "2. Convert term position to r",
      keyIdea: "T_(r+1) uses coefficient index r, so the requested term number is one more than r.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Remember that T_(r+1) uses coefficient index r. Count total terms as n+1, and check that r lies between 0 and n before simplifying.",
            },
          ],
        },
      ],
    },
    {
      id: "middle-term-parity",
      title: "3. Determine parity of n before choosing the middle term",
      keyIdea: "n even gives one middle term; n odd gives two middle terms.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Determine parity of n before selecting middle term positions. For n even the middle term is T_(n/2+1). For n odd the middle terms are T_((n+1)/2) and T_((n+3)/2).",
            },
          ],
        },
      ],
    },
    {
      id: "coefficient-properties",
      title: "4. Use coefficient properties for identities",
      keyIdea: "Symmetry, Pascal's identity, and substitution into (1+x)^n give coefficient results without full expansion.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Coefficient symmetry, Pascal's identity, and substitution into a general expansion allow coefficient sums and comparisons to be found without expanding the whole binomial.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "binomial-theorem",
      expression: "(a+b)^n = Σ[r=0 to n] C(n,r) a^(n-r) b^r",
      meaning: "Expansion of a binomial raised to a positive integer power.",
      variables: [
        { symbol: "n", meaning: "positive integer index" },
        { symbol: "r", meaning: "coefficient index" },
        { symbol: "C(n,r)", meaning: "binomial coefficient, n!/[r!(n-r)!]" },
      ],
      useWhen: "Full expansion is required.",
      commonTrap: "Importing generalized-binomial conditions for non-integer n.",
      accessibleText: "Sum from r equals zero to n of C n r times a to the power n minus r times b to the power r.",
    },
    {
      id: "general-term",
      expression: "T_(r+1) = C(n,r) a^(n-r) b^r",
      meaning: "The (r+1)th term of the expansion.",
      variables: [
        { symbol: "r", meaning: "coefficient index, integer with 0≤r≤n" },
      ],
      useWhen: "A specific term is requested without expanding the whole binomial.",
      commonTrap: "Calling this term T_r instead of T_(r+1).",
      accessibleText: "T sub r plus one equals C n r times a to the power n minus r times b to the power r.",
    },
    {
      id: "coefficient-symmetry",
      expression: "C(n,r) = C(n,n-r)",
      meaning: "Binomial coefficients equidistant from the ends are equal.",
      variables: [{ symbol: "r", meaning: "integer with 0≤r≤n" }],
      useWhen: "Coefficient comparison across paired positions.",
      commonTrap: "Using an out-of-range r.",
      accessibleText: "C n r equals C n, n minus r.",
    },
    {
      id: "pascal-identity",
      expression: "C(n,r) + C(n,r+1) = C(n+1,r+1)",
      meaning: "Adjacent coefficients of row n combine into a coefficient of row n+1.",
      variables: [{ symbol: "r", meaning: "integer with valid coefficient indices" }],
      useWhen: "Coefficient transformations across rows.",
      commonTrap: "Index shift error.",
      accessibleText: "C n r plus C n, r plus one equals C n plus one, r plus one.",
    },
    {
      id: "sum-of-coefficients",
      expression: "Σ C(n,r) = 2^n",
      meaning: "Sum of all binomial coefficients in row n.",
      variables: [{ symbol: "n", meaning: "positive integer" }],
      useWhen: "Coefficient sum questions.",
      commonTrap: "Forgetting all terms from r=0 to n.",
      accessibleText: "Sum of C n r over all r equals two to the power n.",
    },
    {
      id: "alternating-coefficient-sum",
      expression: "Σ (-1)^r C(n,r) = 0",
      meaning: "Alternating sum of binomial coefficients in row n.",
      variables: [{ symbol: "n", meaning: "positive integer" }],
      useWhen: "Alternating coefficient sum questions.",
      commonTrap: "Using n=0 outside the positive-index page scope.",
      accessibleText: "Sum of minus one to the power r times C n r equals zero.",
    },
    {
      id: "one-middle-term",
      expression: "T_(n/2+1)",
      meaning: "The single middle term when n is even.",
      variables: [{ symbol: "n", meaning: "even positive integer" }],
      useWhen: "Finding the central term for even n.",
      commonTrap: "Using the odd-n formula.",
      accessibleText: "T sub n over two plus one.",
    },
    {
      id: "two-middle-terms",
      expression: "T_((n+1)/2), T_((n+3)/2)",
      meaning: "The two middle terms when n is odd.",
      variables: [{ symbol: "n", meaning: "odd positive integer" }],
      useWhen: "Finding the central pair for odd n.",
      commonTrap: "Assuming a single middle term.",
      accessibleText: "T sub n plus one over two, and T sub n plus three over two.",
    },
  ],

  workedExamples: [
    {
      id: "middle-term-x-plus-2-power-6",
      prompt: "Find the middle term of (x+2)^6.",
      steps: [
        { type: "paragraph", children: [{ text: "n=6, so total terms = 7. n is even, so use T_(n/2+1) = T_4, giving r+1=4 so r=3." }] },
        { type: "paragraph", children: [{ text: "T_4 = C(6,3) x^(6-3) 2^3 = 20 x^3 × 8 = 160x^3." }] },
        { type: "paragraph", children: [{ text: "Validity check: the seven term positions are 1 through 7, so T_4 is the unique central position." }] },
      ],
      answer: "160x^3",
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "Expanding a binomial with a positive integral index, finding general and middle terms, and using coefficient properties."],
        ["What is the central method choice?", "Confirm the index is a positive integer, convert the requested term position to r, and check parity of n for middle terms."],
        ["Where do most mistakes begin?", "Using the theorem for a non-integral or negative index, confusing r with the term number r+1, and choosing one middle term for odd n."],
        ["What should come before Binomial Theorem?", "Permutations and Combinations, for the combinations notation used in coefficients."],
        ["What comes after it?", "Probability builds on counting and coefficient reasoning in later problems."],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Binomial Theorem",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Positive integral index expansion",
          "Explicitly limits the unit wording to Binomial Theorem for a positive integral index, the general term, middle term and simple applications.",
          "Explicitly includes Binomial Theorem for a positive integral index and properties of binomial coefficients.",
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
        ["Full small expansion", "Apply the theorem directly."],
        ["One requested term", "Use the general term without expanding everything."],
        ["Term independent of a variable", "Set that variable's resulting exponent to zero and solve for integer r in range."],
        ["Middle term", "Check parity of n first."],
        ["Coefficient identity", "Use symmetry, Pascal identity or substitution into (1+x)^n as appropriate."],
      ],
    },
  ],

  mistakes: [
    {
      id: "non-integral-index",
      mistake: "Using the theorem here for a non-integral or negative index.",
      why: [{ type: "paragraph", children: [{ text: "The theorem on this page is restricted to a positive integral index in the current JEE scope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm n is a positive integer before applying any formula on this page." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "r-vs-term-number",
      mistake: "Confusing r with the term number r+1.",
      why: [{ type: "paragraph", children: [{ text: "The general term T_(r+1) is indexed by r, one less than the term number." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert the requested term number to r before substituting into the formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "term-count-error",
      mistake: "Saying there are n terms rather than n+1.",
      why: [{ type: "paragraph", children: [{ text: "The expansion runs from r=0 to r=n, giving n+1 terms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Count term positions from 1 to n+1 explicitly." }] }],
      errorType: "recall-gap",
    },
    {
      id: "one-middle-term-for-odd-n",
      mistake: "Choosing one middle term for odd n.",
      why: [{ type: "paragraph", children: [{ text: "Odd n gives an even number of terms (n+1), so there is a central pair, not a single middle term." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check parity of n before selecting the middle-term formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "coefficient-index-restrictions",
      mistake: "Forgetting coefficient-index restrictions.",
      why: [{ type: "paragraph", children: [{ text: "C(n,r) is only defined for integers with 0≤r≤n." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the range of r before using any coefficient identity." }] }],
      errorType: "needs-review",
    },
    {
      id: "generalized-series-scope-creep",
      mistake: "Adding generalized binomial-series material not supported by the current route scope.",
      why: [{ type: "paragraph", children: [{ text: "The current JEE syllabus for this page is limited to a positive integral index." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep this page's scope to positive integral index expansions only." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Permutations and Combinations", url: "/jee/mathematics/permutations-combinations", relation: "prerequisite" },
    { label: "Sequences and Series", url: "/jee/mathematics/sequences-series", relation: "related" },
    { label: "Probability", url: "/jee/mathematics/probability", relation: "next" },
  ],

  sources: ["nta-jee-syllabus", "nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar-11-binomial"],
  sourceNote: "Official syllabus scope verified against NTA JEE Main 2026 and JEE Advanced 2026 documents. No weightage, frequency or PYQ-count claim is made.",
  contributorPolicy: [
    "Reviewer specialisation: combinatorics and algebra.",
    "Minimum: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: positive-index boundary, coefficient-index conditions, middle-term formulas, coefficient identities and scope control against generalized expansion.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Binomial Theorem for JEE 2026: General and Middle Terms",
    description: "Learn positive-integral-index Binomial Theorem, general terms, middle terms and coefficient properties with exact index conditions.",
  },
};

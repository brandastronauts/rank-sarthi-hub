import type { ChapterContent } from "@/content/types";

/**
 * Quadratic Equations — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Discriminant nature rules stated only for real coefficients; a ≠ 0 kept
 *   explicit next to every formula, per the shared mathematical quality rule.
 */
export const jeeMathematicsQuadraticEquations: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Quadratic Equations",
  slug: "quadratic-equations",
  url: "/jee/mathematics/quadratic-equations",
  canonicalIntent:
    "Solve and interpret quadratic equations using discriminant, roots, coefficient relationships and symmetric root expressions.",

  heroChips: [
    "Listed in both JEE Main 2026 and JEE Advanced 2026",
    "Discriminant nature rules apply only when a, b, c are real",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A quadratic equation has the form ax² + bx + c = 0 with a ≠ 0. The discriminant D = b² - 4ac determines the nature of the roots when the coefficients are real.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Root-coefficient relationships let you solve many questions without explicitly computing both roots.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Discriminant nature rules (real, repeated, nonreal conjugate) apply only when a, b, c are real. Do not apply them to equations with complex coefficients.",
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
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "Algebraic manipulation and domain awareness from Functions carry over to solving and interpreting quadratics.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Complex Numbers and Quadratic Equations",
    topics: [
      "Quadratic equations over real and complex number systems",
      "Solutions and root-coefficient relations",
      "Nature of roots",
      "Formation of a quadratic from given roots",
      "Symmetric functions of roots (explicit Advanced wording)",
      "Statement of the fundamental theorem of algebra (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "standardise-first",
      title: "1. Standardise the equation and identify the coefficient domain",
      keyIdea: "Confirm a ≠ 0 and note whether coefficients are real or complex before choosing a method.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The reasoning order is: standardise the equation, identify the coefficient domain, choose factorisation, discriminant, or root relations, solve, then substitute back to validate.",
            },
          ],
        },
      ],
    },
    {
      id: "discriminant-nature",
      title: "2. Use the discriminant only under real coefficients",
      keyIdea: "D > 0 gives two distinct real roots, D = 0 gives a repeated root, D < 0 gives a nonreal conjugate pair, all only when a, b, c are real.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For ax² + bx + c = 0 with a ≠ 0 and a, b, c real, the discriminant D = b² - 4ac classifies the roots. D < 0 means no real roots; it does not mean there are no roots at all in the complex number system.",
            },
          ],
        },
      ],
    },
    {
      id: "root-coefficient-relations",
      title: "3. Use sum and product of roots for symmetric expressions",
      keyIdea: "Sum and product of roots avoid computing both roots explicitly.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For ax² + bx + c = 0 with a ≠ 0, the sum of roots is α + β = -b/a and the product is αβ = c/a, with roots counted with multiplicity. Expressions symmetric in α and β can be rewritten using these two values.",
            },
          ],
        },
      ],
    },
    {
      id: "formation-from-roots",
      title: "4. Form an equation from given roots using the monic factor",
      keyIdea: "x² - (α+β)x + αβ = 0 is the monic equation with roots α, β; scale by k ≠ 0 for a general form.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Given roots α and β, the monic quadratic with those roots is x² - (α+β)x + αβ = 0. A general scaled equation is k[x² - (α+β)x + αβ] = 0 for any k ≠ 0.",
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
          "Solving and interpreting quadratic equations using the discriminant, root-coefficient relations, symmetric root expressions and equation formation, for both JEE Main 2026 and JEE Advanced 2026.",
        ],
        [
          "What is the central method choice?",
          "Standardise the equation, identify whether coefficients are real, then choose factorisation, the discriminant, or root-coefficient relations before solving.",
        ],
        [
          "Where do most mistakes begin?",
          "Allowing a = 0, applying discriminant nature rules to complex coefficients, and sign errors in -b/a.",
        ],
        [
          "What should come before this chapter?",
          "Functions, for algebraic manipulation and domain awareness carried into equation solving.",
        ],
        [
          "What comes after it?",
          "Complex Numbers extends root behaviour when D < 0; Sequences and Series and Calculus use symmetric-expression techniques further along the syllabus.",
        ],
      ],
      note: "Official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Quadratic Equations",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Solutions and nature of roots",
          "Explicitly includes quadratic equations over real and complex number systems, solutions and nature of roots.",
          "Explicitly specifies quadratic equations with real coefficients.",
          "Apply discriminant nature rules only under real coefficients, as both papers require.",
        ],
        [
          "Root-coefficient relations and formation",
          "Explicitly includes root-coefficient relationships and formation from given roots.",
          "Explicitly includes root-coefficient relations, formation from roots and symmetric functions of roots.",
          "Use sum and product of roots before attempting to solve for both roots explicitly.",
        ],
        [
          "Fundamental theorem of algebra",
          "Not named as an individually explicit Main syllabus bullet.",
          "Explicitly lists the statement of the fundamental theorem of algebra.",
          "Treat this as explicit Advanced-wording detail; do not present it as Main-scope.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "formula-theorem-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records for ax² + bx + c = 0, a ≠ 0",
      columns: ["Result", "Expression", "Conditions"],
      rows: [
        ["Quadratic formula", "x = (-b ± √D) / (2a)", "D = b² - 4ac; square root interpreted in the chosen number system"],
        ["Sum of roots", "α + β = -b/a", "α, β are the roots, counted with multiplicity"],
        ["Product of roots", "αβ = c/a", "Same as above"],
        ["Real roots", "D > 0 gives two distinct real roots", "a, b, c real"],
        ["Repeated root", "D = 0 gives one repeated root", "a, b, c real"],
        ["Nonreal pair", "D < 0 gives a nonreal conjugate pair of roots", "a, b, c real"],
        ["Monic equation from roots", "x² - (α+β)x + αβ = 0", "Roots α, β given"],
        ["General scaled equation", "k[x² - (α+β)x + αβ] = 0", "k ≠ 0"],
        ["Sum of squares", "α² + β² = (α+β)² - 2αβ", "Follows algebraically from sum and product"],
        ["Sum of cubes", "α³ + β³ = (α+β)³ - 3αβ(α+β)", "Follows algebraically from sum and product; useful in Advanced symmetric-root work"],
      ],
      note: "Every listed condition must remain adjacent to its formula when this table is displayed.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model"],
      rows: [
        ["Easy integer structure", "Factorise first"],
        ["Nature of roots", "Use the discriminant, under real coefficients"],
        ["Expression symmetric in α and β", "Use sum and product of roots"],
        ["Equation from given roots", "Build the monic factor product, then scale if required"],
        ["Parameter condition for real roots", "Impose D ≥ 0"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-quadratic-solve",
      slot: "concepts",
      heading: "Worked reasoning: solving 2x² - 5x + 2 = 0",
      jump: true,
      concepts: [
        {
          id: "solve-and-cross-check",
          title: "Solving by the discriminant and validating with root-coefficient relations",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "Solve 2x² - 5x + 2 = 0. Known: a = 2, b = -5, c = 2." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "D = 25 - 16 = 9. Roots: x = (5 ± 3) / 4, so x = 2 or x = 1/2." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Check through coefficients: sum = 5/2 = -b/a, and product = 1 = c/a. Both checks pass." },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "allowing-a-zero",
      mistake: "Allowing a = 0.",
      why: [{ type: "paragraph", children: [{ text: "When a = 0 the equation is linear, not quadratic, and the quadratic formula and discriminant rules no longer apply." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm a ≠ 0 before applying any quadratic formula or discriminant rule." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "discriminant-on-complex-coefficients",
      mistake: "Using discriminant nature rules for complex coefficients.",
      why: [{ type: "paragraph", children: [{ text: "The real-root, repeated-root and nonreal-conjugate-pair classification only holds when a, b, c are real." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the coefficients are real before applying discriminant nature rules." }] }],
      errorType: "decision-error",
    },
    {
      id: "sign-error-sum",
      mistake: "Sign error in -b/a.",
      why: [{ type: "paragraph", children: [{ text: "The sum of roots is -b/a, and dropping the negative sign gives an incorrect value." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Write the formula α + β = -b/a explicitly before substituting coefficient values." }] }],
      errorType: "execution-error",
    },
    {
      id: "forgetting-multiplicity",
      mistake: "Forgetting multiplicity for repeated roots.",
      why: [{ type: "paragraph", children: [{ text: "When D = 0, the single root is counted twice in the sum and product formulas." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat a repeated root as occurring twice when applying sum and product relations." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-formation-sign",
      mistake: "Forming x² + Sx + P instead of x² - Sx + P.",
      why: [{ type: "paragraph", children: [{ text: "The monic equation from roots is x² - (α+β)x + αβ = 0; using a plus sign for the sum term gives the wrong equation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use x² - (α+β)x + αβ = 0 and substitute the actual sum and product values." }] }],
      errorType: "execution-error",
    },
    {
      id: "d-negative-means-no-roots",
      mistake: "Assuming D < 0 means no roots exist in the complex number system.",
      why: [{ type: "paragraph", children: [{ text: "D < 0 means there are no real roots; the equation still has a nonreal conjugate pair of roots in the complex number system." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State that D < 0 rules out real roots specifically, not roots in every number system." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "Algebraic manipulation and domain reasoning from Functions carry over to quadratic solving.",
    },
    {
      label: "Complex Numbers",
      url: "/jee/mathematics/complex-numbers",
      relation: "related",
      description: "Nonreal conjugate roots from a negative discriminant are described using complex-number notation.",
    },
    {
      label: "Sequences and Series",
      url: "/jee/mathematics/sequences-series",
      relation: "forward",
      description: "Symmetric-expression techniques for roots extend to sequence and series identities.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "forward",
      description: "Quadratic root behaviour recurs in calculus problems involving polynomial equations.",
    },
  ],

  links: [
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  faqs: [
    {
      question: "What does the discriminant tell you?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "For ax² + bx + c = 0 with a ≠ 0 and real coefficients, D = b² - 4ac tells you the nature of the roots: D > 0 gives two distinct real roots, D = 0 gives a repeated root, and D < 0 gives a nonreal conjugate pair." }],
        },
      ],
    },
    {
      question: "What is the sum and product of quadratic roots?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "For ax² + bx + c = 0 with a ≠ 0, the sum of roots is α + β = -b/a and the product is αβ = c/a." }],
        },
      ],
    },
    {
      question: "How do you form a quadratic from its roots?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Given roots α and β, the monic equation is x² - (α+β)x + αβ = 0. A general scaled version is k[x² - (α+β)x + αβ] = 0 for any k ≠ 0." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote: "Use exact verified sources only. Do not publish a 'most common quadratic type' claim.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: algebra and polynomial equations. Minimum qualification: postgraduate qualification in Mathematics or equivalent.",
    "Review scope: every coefficient and coefficient-domain condition, and every symmetric-root identity.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Quadratic Equations for JEE: Roots and Discriminant",
    description:
      "Learn quadratic roots, discriminant conditions, root-coefficient relations and equation formation for JEE Main and Advanced.",
    ogTitle: "Quadratic Equations for JEE: Roots and Discriminant",
    ogDescription: "Discriminant, root-coefficient relations, symmetric root expressions and equation formation with worked reasoning.",
    ogType: "article",
  },
};

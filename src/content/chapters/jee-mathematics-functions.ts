import type { ChapterContent } from "@/content/types";

/**
 * Functions — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Domain/codomain/range and invertibility conditions are kept adjacent to
 *   every formula, as required by the shared mathematical quality rule.
 */
export const jeeMathematicsFunctions: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Functions",
  slug: "functions",
  url: "/jee/mathematics/functions",
  canonicalIntent:
    "Understand functions as mappings, correctly identify domain, codomain and range, classify mappings and determine when composition or an inverse is valid.",

  heroChips: [
    "Listed in both JEE Main 2026 Units 1 and 7, and JEE Advanced 2026",
    "An inverse exists only when the function is bijective on its stated domain and codomain",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A function assigns exactly one output to every input in its domain. Domain tells you which inputs are permitted, codomain declares the target set and range contains the outputs actually achieved.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Before composing or inverting functions, check these sets explicitly. A function has an inverse from its codomain back to its domain only when it is bijective.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Range and codomain are not synonyms. Range is always a subset of the codomain, and it may be a proper subset.",
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
      description: "Functions are a restricted kind of relation; ordered pairs, relations and sets are required background.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Sets, Relations and Functions",
    topics: [
      "Functions, one-one, into, onto and composition (Main Unit 1)",
      "Real-valued functions, algebra of functions, standard function families, inverse functions and simple graphs (Main Unit 7)",
      "Mapping language, domain, codomain, range and invertibility (Advanced)",
      "Even and odd functions (Advanced)",
      "Special functions, algebra of functions and composition (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "domain-first",
      title: "1. Determine where the expression is defined before manipulating it",
      keyIdea: "Never begin with algebraic manipulation before determining the domain.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The reasoning order is domain, then mapping behaviour, then representation, then operation, then validation. Determine where an expression is defined before simplifying it algebraically.",
            },
          ],
        },
      ],
    },
    {
      id: "mapping-behaviour",
      title: "2. Classify the mapping behaviour",
      keyIdea: "Injective, surjective and bijective are separate, checkable conditions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A function is injective when different inputs have different outputs, surjective when every codomain element is attained, and bijective when it is both. In standard school usage, an into function has range that is a proper subset of the codomain.",
            },
          ],
        },
      ],
    },
    {
      id: "invertibility-condition",
      title: "3. Prove bijection, or restrict domain and codomain, before writing an inverse",
      keyIdea: "An inverse f⁻¹: B→A exists only when f is bijective with a fixed domain and codomain.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A one-to-one function can also be inverted onto its range if the codomain is correspondingly restricted. Writing an inverse expression before checking one-one and onto status is a common source of error.",
            },
          ],
        },
      ],
    },
    {
      id: "composition-order",
      title: "4. Check the inner function first when composing",
      keyIdea: "(g∘f)(x) = g(f(x)) requires x in the domain of f and f(x) in the domain of g.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Composition is evaluated inner function first. In general g∘f is not equal to f∘g, so composition order must be preserved throughout the calculation.",
            },
          ],
        },
      ],
    },
    {
      id: "parity-domain",
      title: "5. Check domain symmetry before testing even or odd",
      keyIdea: "Even and odd tests require a domain symmetric under x ↦ -x.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "f(-x) = f(x) defines an even function and f(-x) = -f(x) defines an odd function, both only meaningful on a domain compatible with sign reversal of x. Not every function is even or odd.",
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
          "Function mappings, domain, codomain, range, classification (one-one, onto, bijective), composition, invertibility and parity, for both JEE Main 2026 and JEE Advanced 2026.",
        ],
        [
          "What is the central method choice?",
          "Fix domain first, then classify the mapping, then check composition or invertibility conditions before writing any final expression.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating range and codomain as synonyms, and writing an inverse before testing one-one and onto status.",
        ],
        [
          "What should come before this chapter?",
          "Sets and Relations, since a function is a specific type of relation.",
        ],
        [
          "What comes after it?",
          "Trigonometry and Inverse Trigonometry apply function classification to specific families; Limits and Continuity and Calculus build on function behaviour further.",
        ],
      ],
      note: "Official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Functions",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Mapping classification",
          "Unit 1 explicitly includes functions, one-one, into, onto and composition.",
          "Explicitly covers mapping language, domain, codomain, range, one-to-one, into and onto.",
          "Classify mappings by checking injective and surjective status separately, in either paper.",
        ],
        [
          "Real-valued functions and inverses",
          "Unit 7 separately includes real-valued functions, algebra of functions, standard function families, inverse functions and simple graphs.",
          "Explicitly covers invertibility, special functions, algebra and composition.",
          "Restrict domain and codomain explicitly whenever an inverse is claimed.",
        ],
        [
          "Even and odd functions",
          "Not named as an individually explicit Main syllabus bullet.",
          "Explicitly listed.",
          "Treat parity classification as explicit Advanced-wording detail requiring a symmetric domain check.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "formula-theorem-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records",
      columns: ["Record", "Statement", "Conditions", "Trap"],
      rows: [
        [
          "Composition",
          "(g∘f)(x) = g(f(x))",
          "x in Dom(f) and f(x) in Dom(g)",
          "Assuming g∘f = f∘g",
        ],
        [
          "Bijective inverse",
          "f⁻¹: B→A exists when f is bijective",
          "Fixed domain and codomain",
          "Claiming an inverse for x²: R→R",
        ],
        [
          "Inverse identities",
          "f⁻¹(f(x)) = x, f(f⁻¹(y)) = y",
          "x in the original domain, y in the original codomain of a bijection",
          "Applying the identities outside the stated domains",
        ],
        [
          "Even test",
          "f(-x) = f(x)",
          "Domain symmetric under sign change",
          "Ignoring the domain when claiming even/odd status",
        ],
        [
          "Odd test",
          "f(-x) = -f(x)",
          "Same domain condition as the even test",
          "Assuming every function is either even or odd",
        ],
      ],
      note: "A one-to-one function can also be inverted onto its range if the codomain is correspondingly restricted.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model"],
      rows: [
        ["Domain question", "Inspect denominators, radicals, logarithms and declared restrictions"],
        ["Range question", "Solve y = f(x) under domain restrictions, or use graph or structure"],
        ["One-one question", "Compare f(x₁) = f(x₂), or use valid monotonicity knowledge"],
        ["Onto question", "Show every codomain value has a preimage"],
        ["Inverse question", "First prove bijection, or explicitly restrict domain and codomain"],
        ["Composition question", "Check the inner function first"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-square-inverse",
      slot: "concepts",
      heading: "Worked reasoning: when does f(x) = x² have an inverse",
      jump: true,
      concepts: [
        {
          id: "square-not-invertible-on-r",
          title: "Testing injectivity before writing an inverse expression",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "Consider f: R→R, f(x) = x². Domain and codomain are both R. Does an inverse function exist?" },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Method: test injectivity before trying to algebraically write √x. f(1) = f(-1) = 1, so f is not injective. Therefore f: R→R is not invertible." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Restrict instead to f: [0,∞)→[0,∞). Now f is one-one and onto, so f⁻¹(x) = √x for x ≥ 0." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Validity check: f⁻¹(f(x)) = √(x²) = x, because the restricted original domain requires x ≥ 0." },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "range-codomain-synonym",
      mistake: "Treating range and codomain as synonyms.",
      why: [{ type: "paragraph", children: [{ text: "Codomain is the declared target set; range is the subset of the codomain actually attained, and the two can differ." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the codomain from the problem and compute the range separately before comparing them." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "cancel-square-forget-sign",
      mistake: "Cancelling a square while forgetting the ± sign.",
      why: [{ type: "paragraph", children: [{ text: "Taking a square root of both sides of an equation introduces two possible sign cases unless the domain has already been restricted." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track the domain restriction that removes one sign case, or keep both cases until the domain is checked." }] }],
      errorType: "execution-error",
    },
    {
      id: "inverse-before-bijection-check",
      mistake: "Writing an inverse before testing one-one and onto.",
      why: [{ type: "paragraph", children: [{ text: "An inverse function exists only when the original function is bijective on its stated domain and codomain." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Prove injectivity and surjectivity, or explicitly restrict domain and codomain, before writing any inverse expression." }] }],
      errorType: "decision-error",
    },
    {
      id: "composition-order-reversed",
      mistake: "Reversing composition order.",
      why: [{ type: "paragraph", children: [{ text: "g∘f and f∘g apply the functions in different orders and are generally not equal." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Evaluate the inner function first and keep the composition order exactly as written." }] }],
      errorType: "execution-error",
    },
    {
      id: "evaluating-outside-domain",
      mistake: "Evaluating a function outside its domain.",
      why: [{ type: "paragraph", children: [{ text: "An expression that is undefined at a given input cannot be substituted into further calculation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the domain before substituting any specific value or composing with another function." }] }],
      errorType: "execution-error",
    },
    {
      id: "into-called-onto",
      mistake: "Calling an into function onto.",
      why: [{ type: "paragraph", children: [{ text: "An into function has range that is a proper subset of the codomain, so not every codomain element is attained." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Explicitly show that every codomain element has a preimage before calling a function onto." }] }],
      errorType: "decision-error",
    },
    {
      id: "parity-nonsymmetric-domain",
      mistake: "Testing even or odd on a non-symmetric domain.",
      why: [{ type: "paragraph", children: [{ text: "The even and odd tests require a domain that is symmetric under x ↦ -x; otherwise f(-x) may not even be defined." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the domain is symmetric under sign change before applying the even or odd test." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Sets and Relations",
      url: "/jee/mathematics/sets-relations",
      relation: "prerequisite",
      description: "Functions are a restricted kind of relation built on sets and ordered pairs.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "related",
      description: "Trigonometric functions apply the domain, range and periodicity ideas covered here.",
    },
    {
      label: "Inverse Trigonometry",
      url: "/jee/mathematics/inverse-trigonometry",
      relation: "related",
      description: "Inverse trigonometric functions apply the bijection and restricted-domain reasoning from this chapter.",
    },
    {
      label: "Limits and Continuity",
      url: "/jee/mathematics/limits-continuity",
      relation: "forward",
      description: "Limit and continuity analysis is carried out on functions whose domain must already be known.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "forward",
      description: "Differentiation and integration are performed on functions classified by this chapter's methods.",
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
      question: "When does a function have an inverse?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "A function has an inverse from its codomain back to its domain only when it is bijective, that is both one-one and onto, on the stated domain and codomain." }],
        },
      ],
    },
    {
      question: "What is the difference between range and codomain?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Codomain is the declared target set B in f: A→B. Range is the set {f(x): x in A} of outputs actually attained, and it is always a subset of the codomain." }],
        },
      ],
    },
    {
      question: "What is an onto function?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "A function is onto, or surjective, when every element of the codomain is attained by some element of the domain." }],
        },
      ],
    },
    {
      question: "Why is x² not invertible on R?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "f(x) = x² on R is not injective because f(1) = f(-1) = 1, so it is not invertible on R. Restricting the domain and codomain to [0,∞) makes it bijective, giving f⁻¹(x) = √x for x ≥ 0." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote:
    "Official questions may be tagged only after exact source verification. Do not claim one-one or onto question frequency.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: functions, algebra and calculus foundations. Minimum qualification: postgraduate qualification in Mathematics, Applied Mathematics or equivalent.",
    "Review scope: domain and range claims, inverse restrictions, composition conditions and parity definitions.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Functions for JEE 2026: Domain, Range and Inverse",
    description:
      "Master functions for JEE Main and Advanced with domain, codomain, range, one-one, onto, composition, invertibility and graph logic.",
    ogTitle: "Functions for JEE 2026: Domain, Range and Inverse",
    ogDescription: "Domain, codomain, range, classification, composition and inverse conditions with worked reasoning.",
    ogType: "article",
  },
};

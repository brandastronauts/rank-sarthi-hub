import type { ChapterContent } from "@/content/types";

/**
 * Inverse Trigonometry — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Main 2026 Unit 14 explicitly includes inverse trigonometric functions
 *   and their properties; Unit 7 includes inverse functions and
 *   differentiation of inverse trigonometric functions. Main does not spell
 *   out principal-value intervals; NCERT/JEE branch conventions are used.
 * - Advanced 2026 explicitly states inverse trigonometric functions with
 *   principal value only and their elementary properties.
 */
export const jeeMathematicsInverseTrigonometry: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Inverse Trigonometry",
  slug: "inverse-trigonometry",
  url: "/jee/mathematics/inverse-trigonometry",
  canonicalIntent:
    "Understand why trigonometric functions require domain restriction before inversion, use the NCERT/JEE principal-value branches correctly, and apply inverse-trigonometric identities only under their actual branch and input conditions.",

  heroChips: [
    "Main 2026 Unit 14: inverse trigonometric functions and their properties",
    "Advanced 2026: principal value only, elementary properties",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A periodic trigonometric function is not one-to-one on its full real domain, so it cannot be inverted there. Inverse trigonometric functions are created by restricting the original function to a one-to-one principal branch.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Identities such as sin⁻¹(sinx)=x are true only when x lies in the principal range of sin⁻¹.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "JEE Main 2026 Unit 14 explicitly includes inverse trigonometric functions and their properties; Unit 7 also includes inverse functions and differentiation of inverse trigonometric functions. The Main syllabus does not spell out the principal-value intervals, so textbook branch conventions are required for mathematically valid treatment.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "JEE Advanced 2026 explicitly states inverse trigonometric functions with principal value only and their elementary properties.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "The inverse-function requirement of one-to-one correspondence underlies principal-branch restriction.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Ordinary trigonometric graphs and periodicity are required before restricting to principal branches.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Inverse Trigonometry",
    topics: [
      "Inverse trigonometric functions and their properties",
      "Principal value branches",
      "Differentiation of inverse trigonometric functions",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "identify-inverse",
      title: "1. Confirm the input is in the inverse function's domain",
      keyIdea: "sin⁻¹ and cos⁻¹ require inputs in [-1,1]; sec⁻¹ and csc⁻¹ require |x|≥1.",
      body: [
        { type: "paragraph", children: [{ text: "Before simplifying, check that the given input actually belongs to the inverse function's domain." }] },
      ],
    },
    {
      id: "principal-branch",
      title: "2. State the principal range before simplifying nested functions",
      keyIdea: "The notation sin⁻¹x means inverse sine here, not 1/sinx.",
      body: [
        { type: "paragraph", children: [{ text: "These are real principal-value conventions used throughout this page. State the branch before manipulating a nested inverse expression." }] },
      ],
    },
    {
      id: "preserve-branch",
      title: "3. Use ordinary trig identities only if they preserve branch information",
      keyIdea: "An identity that is valid for all real angles may not remain valid once restricted to a principal branch.",
      body: [
        { type: "paragraph", children: [{ text: "Check that applying an ordinary trigonometric identity does not move the result outside the correct principal branch." }] },
      ],
    },
    {
      id: "angle-reduction",
      title: "4. Find an equivalent trig value whose angle lies inside the principal interval",
      keyIdea: "If the given angle lies outside the principal interval, replace it using periodicity or symmetry.",
      body: [
        { type: "paragraph", children: [{ text: "This reduction step is required for nested expressions such as sin⁻¹(sinx) when x is outside the principal range." }] },
      ],
    },
    {
      id: "validate-forward",
      title: "5. Validate by applying the forward trig function",
      keyIdea: "Check that the final angle's branch is correct by reapplying the original trig function.",
      body: [
        { type: "paragraph", children: [{ text: "Apply the forward trigonometric function to the result and confirm the final angle lies in the intended principal range." }] },
      ],
    },
  ],

  formulas: [
    {
      id: "forward-after-inverse-sine",
      expression: "sin(sin⁻¹x)=x",
      meaning: "Forward after inverse sine",
      variables: [{ symbol: "x", meaning: "input, x∈[-1,1]" }],
      useWhen: "Simplifying sin applied to sin⁻¹x",
      commonTrap: "Treating inverse notation as reciprocal",
      accessibleText: "sine of inverse sine x equals x, for x in the interval negative one to one",
    },
    {
      id: "inverse-after-sine",
      expression: "sin⁻¹(sinx)=x",
      meaning: "Inverse after sine",
      variables: [{ symbol: "x", meaning: "x∈[-π/2,π/2]" }],
      useWhen: "Simplifying inverse sine applied to sinx",
      commonTrap: "Applying for all real x",
      accessibleText: "inverse sine of sine x equals x, only for x in the closed interval negative pi over two to pi over two",
    },
    {
      id: "forward-after-inverse-cosine",
      expression: "cos(cos⁻¹x)=x",
      meaning: "Forward after inverse cosine",
      variables: [{ symbol: "x", meaning: "x∈[-1,1]" }],
      useWhen: "Simplifying cos applied to cos⁻¹x",
      commonTrap: "Ignoring the inverse function's input domain",
      accessibleText: "cosine of inverse cosine x equals x, for x in the interval negative one to one",
    },
    {
      id: "inverse-after-cosine",
      expression: "cos⁻¹(cosx)=x",
      meaning: "Inverse after cosine",
      variables: [{ symbol: "x", meaning: "x∈[0,π]" }],
      useWhen: "Simplifying inverse cosine applied to cosx",
      commonTrap: "Applying globally",
      accessibleText: "inverse cosine of cosine x equals x, only for x in the closed interval zero to pi",
    },
    {
      id: "forward-after-inverse-tangent",
      expression: "tan(tan⁻¹x)=x",
      meaning: "Forward after inverse tangent",
      variables: [{ symbol: "x", meaning: "any real x" }],
      useWhen: "Simplifying tan applied to tan⁻¹x",
      commonTrap: "Confusing with tan⁻¹(tanx)",
      accessibleText: "tangent of inverse tangent x equals x, for any real x",
    },
    {
      id: "inverse-after-tangent",
      expression: "tan⁻¹(tanx)=x",
      meaning: "Inverse after tangent",
      variables: [{ symbol: "x", meaning: "x∈(-π/2,π/2)" }],
      useWhen: "Simplifying inverse tangent applied to tanx",
      commonTrap: "Ignoring tangent periodicity",
      accessibleText: "inverse tangent of tangent x equals x, only for x in the open interval negative pi over two to pi over two",
    },
    {
      id: "complementary-identity",
      expression: "sin⁻¹x+cos⁻¹x=π/2",
      meaning: "Complementary identity",
      variables: [{ symbol: "x", meaning: "x∈[-1,1]" }],
      useWhen: "Relating inverse sine and inverse cosine",
      commonTrap: "Using outside the common domain",
      accessibleText: "inverse sine x plus inverse cosine x equals pi over two, for x in the interval negative one to one",
    },
    {
      id: "tangent-cotangent-identity",
      expression: "tan⁻¹x+cot⁻¹x=π/2",
      meaning: "Tangent-cotangent identity",
      variables: [{ symbol: "x", meaning: "any real x, under the NCERT principal branches on this page" }],
      useWhen: "Relating inverse tangent and inverse cotangent",
      commonTrap: "Using another inverse-cotangent convention silently",
      accessibleText: "inverse tangent x plus inverse cotangent x equals pi over two, under the stated principal branches",
    },
    {
      id: "inverse-sine-derivative",
      expression: "d/dx(sin⁻¹x)=1/√(1-x²)",
      meaning: "Inverse sine derivative bridge",
      variables: [{ symbol: "x", meaning: "|x|<1 for a finite real derivative" }],
      useWhen: "Differentiating inverse sine",
      commonTrap: "Claiming a finite derivative at the endpoints x=±1",
      accessibleText: "the derivative of inverse sine x equals 1 over the square root of 1 minus x squared, for x strictly between negative one and one",
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
          "Principal-value branches of the six inverse trigonometric functions, their domains and branch-safe identities.",
        ],
        [
          "What is the central method choice?",
          "Check the input domain, state the principal branch, reduce out-of-range angles into the branch, then validate by applying the forward function.",
        ],
        [
          "Where do most mistakes begin?",
          "Assuming sin⁻¹(sinx)=x for all real x, or treating sin⁻¹x as 1/sinx.",
        ],
        [
          "What should come before Inverse Trigonometry?",
          "Functions and the inverse-function requirement, ordinary trigonometric graphs and periodicity, interval notation and radians.",
        ],
        [
          "What comes after it?",
          "Limits and Continuity and Differentiation use inverse trigonometric functions and their derivative bridges further.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Inverse Trigonometry",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Inverse trigonometric functions and properties",
          "Explicitly listed under Unit 14; Unit 7 also includes inverse functions and differentiation of inverse trigonometric functions.",
          "Explicitly listed as principal value only, with elementary properties.",
          "Both papers cover inverse trigonometric functions; Advanced is explicit about principal value only.",
        ],
        [
          "Principal-value intervals",
          "Not spelled out in the syllabus wording.",
          "Explicit principal-value-only framing.",
          "Use the NCERT/JEE textbook branch conventions for mathematically valid treatment on both papers.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "principal-branch-table",
      jump: true,
      slot: "concepts",
      heading: "Principal-value branches",
      intro: "These are real principal-value conventions. The notation sin⁻¹x means inverse sine here, not 1/sinx.",
      columns: ["Function", "Input domain", "NCERT/JEE principal range"],
      rows: [
        ["sin⁻¹x", "[-1,1]", "[-π/2, π/2]"],
        ["cos⁻¹x", "[-1,1]", "[0,π]"],
        ["tan⁻¹x", "R", "(-π/2, π/2)"],
        ["cot⁻¹x", "R", "(0,π)"],
        ["sec⁻¹x", "(-∞,-1]∪[1,∞)", "[0,π]\\{π/2}"],
        ["csc⁻¹x", "(-∞,-1]∪[1,∞)", "[-π/2,π/2]\\{0}"],
      ],
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Inverse Trigonometry",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        ["Functions and inverse-function requirement", "Explain why a function needs to be one-to-one to have an inverse.", "Revise the inverse-function condition in Functions."],
        ["Ordinary trigonometric graphs and periodicity", "Sketch sin, cos and tan and identify their periods.", "Revise graphs and periodicity in Trigonometry."],
        ["Interval notation", "Read open and closed interval notation correctly.", "Revise interval notation."],
        ["Radians", "Work confidently in radian measure.", "Revise the degree-radian conversion."],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: nested and algebraic inverse questions",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Nested sin⁻¹(sinx)", "Reduce the angle into [-π/2,π/2]", "Confirm final angle is in the principal range"],
        ["Nested cos⁻¹(cosx)", "Reduce the angle into [0,π]", "Confirm final angle is in the principal range"],
        ["Nested tan⁻¹(tanx)", "Reduce modulo π into (-π/2,π/2)", "Confirm final angle is in the principal range"],
        ["Algebraic inverse input", "Enforce [-1,1] for sine/cosine inverse or |x|≥1 for secant/cosecant inverse", "Check input domain before simplifying"],
        ["Identity question", "State the common input domain and principal branches first", "Verify identity holds throughout the stated domain"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-nested-inverse",
      slot: "concepts",
      heading: "Worked reasoning: nested inverse sine",
      jump: true,
      concepts: [
        {
          id: "worked-example",
          title: "Evaluate sin⁻¹(sin(5π/6))",
          body: [
            { type: "paragraph", children: [{ text: "Known: 5π/6 is not in the principal range [-π/2,π/2] of inverse sine. Find: the principal value." }] },
            { type: "paragraph", children: [{ text: "Method choice: replace the sine value by an equivalent angle inside the principal range. sin(5π/6)=1/2, therefore sin⁻¹(1/2)=π/6." }] },
            { type: "paragraph", children: [{ text: "Answer: π/6. Validity check: π/6∈[-π/2,π/2] and sin(π/6)=sin(5π/6)=1/2." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "inverse-sine-of-sine-always-x",
      mistake: "Assuming sin⁻¹(sinx)=x for all real x.",
      why: [{ type: "paragraph", children: [{ text: "This identity only holds when x already lies in the principal range [-π/2,π/2]." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Reduce x into the principal range before applying the identity." }] }],
      errorType: "decision-error",
    },
    {
      id: "inverse-notation-as-reciprocal",
      mistake: "Treating sin⁻¹x as 1/sinx.",
      why: [{ type: "paragraph", children: [{ text: "sin⁻¹x denotes the inverse sine function, not the reciprocal of sine." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Read the notation as inverse-function notation throughout this page." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "forgetting-input-domain",
      mistake: "Forgetting that sin⁻¹ and cos⁻¹ require inputs in [-1,1].",
      why: [{ type: "paragraph", children: [{ text: "These inverse functions are undefined outside their stated input domain." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the input domain before evaluating or simplifying." }] }],
      errorType: "execution-error",
    },
    {
      id: "inconsistent-cotangent-convention",
      mistake: "Using a cotangent inverse range inconsistent with the page convention.",
      why: [{ type: "paragraph", children: [{ text: "Different sources may declare different cot⁻¹ ranges; mixing conventions breaks identity validity." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the stated NCERT/JEE principal range for cot⁻¹x consistently." }] }],
      errorType: "needs-review",
    },
    {
      id: "angle-outside-principal-range",
      mistake: "Returning an angle outside the principal range.",
      why: [{ type: "paragraph", children: [{ text: "An inverse trigonometric function's output must lie within its declared principal range." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Validate the final answer by applying the forward function and checking the branch." }] }],
      errorType: "execution-error",
    },
    {
      id: "tangent-sum-identity-without-correction",
      mistake: "Using an inverse-tangent sum identity without quadrant correction.",
      why: [{ type: "paragraph", children: [{ text: "Inverse-tangent addition formulas require branch and quadrant corrections that are not published here." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Do not apply inverse-tangent addition formulas without the corrections; treat them as requiring separate SME condition review." }] }],
      errorType: "needs-review",
    },
    {
      id: "derivative-at-endpoints",
      mistake: "Differentiating inverse sine at x=±1 as though the derivative were finite.",
      why: [{ type: "paragraph", children: [{ text: "d/dx(sin⁻¹x)=1/√(1-x²) requires |x|<1 for a finite real derivative." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Exclude x=±1 from any finite-derivative claim for inverse sine." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "same-unit",
      description: "The ordinary trigonometric functions being restricted to principal branches.",
    },
    {
      label: "Limits and Continuity",
      url: "/jee/mathematics/limits-continuity",
      relation: "forward",
      description: "Uses inverse trigonometric functions in limit and continuity contexts.",
    },
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "forward",
      description: "Differentiation of inverse trigonometric functions builds on the derivative bridges here.",
    },
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "The inverse-function requirement of one-to-one correspondence.",
    },
  ],

  links: [
    {
      label: "JEE Mathematics Syllabus",
      url: "/jee/syllabus/mathematics",
      relation: "up",
      description: "Official syllabus mapping for the Mathematics chapter set.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  faqs: [
    {
      question: "Why does inverse sine need a restricted branch?",
      answer: [{ type: "paragraph", children: [{ text: "sin x is periodic and not one-to-one on its full real domain, so it must be restricted to a one-to-one principal branch before it can be inverted." }] }],
    },
    {
      question: "What is the principal range of sin⁻¹x?",
      answer: [{ type: "paragraph", children: [{ text: "The principal range of sin⁻¹x is [-π/2, π/2], for inputs x∈[-1,1]." }] }],
    },
    {
      question: "When is sin⁻¹(sinx)=x true?",
      answer: [{ type: "paragraph", children: [{ text: "Only when x lies in the principal range [-π/2,π/2]. Outside that range the angle must first be reduced." }] }],
    },
    {
      question: "What is the domain of sec⁻¹x?",
      answer: [{ type: "paragraph", children: [{ text: "The domain of sec⁻¹x is (-∞,-1]∪[1,∞), with principal range [0,π]\\{π/2}." }] }],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar-12-inverse-trig"],
  sourceNote:
    "Use only official Main and Advanced syllabus documents for scope claims and the NCERT Class XII inverse trigonometric functions exemplar for principal-value branch treatment. No frequency, weightage or expected-question claim is published.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Algebra and Trigonometry. Minimum qualification: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: all six principal branches, domain/range notation, nested inverse identities, cotangent convention, derivative bridge and official scope labels.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Inverse Trigonometry for JEE 2026: Principal Value Branches",
    description:
      "Learn inverse-trigonometric domains, principal ranges, branch-safe identities and nested inverse-function methods for JEE Main and Advanced.",
    ogTitle: "Inverse Trigonometry for JEE 2026",
    ogDescription: "Principal-value branches, domain checks and branch-safe identities for JEE Main and Advanced.",
    ogType: "article",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Differential Equations — T06 production content (M02-10).
 *
 * Evidence discipline:
 * - No weightage, frequency or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Formation of differential equations is Advanced-explicit; it is not
 *   separately named in the current Main Unit 9 wording. This distinction
 *   is kept explicit and never flattened.
 */
export const jeeMathematicsDifferentialEquations: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Differential Equations",
  slug: "differential-equations",
  url: "/jee/mathematics/differential-equations",
  canonicalIntent:
    "Classify and solve the first-order ordinary differential equations in current JEE scope, preserve valid constant solutions before division, use separation/homogeneous/linear methods under their conditions, and verify solutions against the original equation.",

  heroChips: [
    "Explicit in both JEE Main 2026 Unit 9 and JEE Advanced 2026 Integral Calculus",
    "Formation of differential equations is Advanced-explicit, not separately named in current Main Unit 9",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        { text: "A differential equation relates an unknown function to one or more of its derivatives. JEE solving begins by classifying the equation before manipulating it." },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "For separable equations, check constant solutions before dividing by a function of y. For a linear first-order equation y'+P(x)y=Q(x), use an integrating factor on an interval where the coefficients are valid. Verify the final family in the original equation.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Formation of differential equations is not separately named in the current Main Unit 9 wording; it is explicit in JEE Advanced 2026. Keep this boundary explicit.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "prerequisite",
      description: "Order, degree, and elimination of constants during formation depend on differentiation.",
    },
    {
      label: "Integration",
      url: "/jee/mathematics/integration",
      relation: "prerequisite",
      description: "Separation of variables and the integrating-factor method require indefinite integration.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Differential Equations",
    topics: [
      "Order and degree",
      "Separation of variables",
      "Homogeneous differential equations",
      "Linear first-order differential equations",
      "Formation of ordinary differential equations",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "classify-first",
      title: "1. Determine order and degree only when degree is defined",
      keyIdea: "Degree is undefined when the equation is not polynomial in its derivative symbols.",
      body: [
        { type: "paragraph", children: [{ text: "Determine the order and degree of the equation; degree is defined only after the equation is polynomial in its derivative symbols, otherwise it is undefined." }] },
      ],
    },
    {
      id: "identify-structure",
      title: "2. Identify separable, homogeneous or linear structure",
      keyIdea: "Correct classification decides which method applies.",
      body: [
        { type: "paragraph", children: [{ text: "Identify whether the equation is separable, homogeneous of the standard school form, or first-order linear, before selecting a solution method." }] },
      ],
    },
    {
      id: "constant-solutions",
      title: "3. Preserve constant solutions before dividing",
      keyIdea: "Dividing by h(y) can silently discard a valid constant solution.",
      body: [
        { type: "paragraph", children: [{ text: "Before dividing by h(y) in a separable equation, solve h(y)=0 for possible constant solutions." }] },
      ],
    },
    {
      id: "interval-restriction",
      title: "4. Restrict to intervals where a coefficient is nonzero",
      keyIdea: "Division by an x-dependent coefficient requires interval control.",
      body: [
        { type: "paragraph", children: [{ text: "Before dividing by an x-dependent coefficient, restrict the working interval to where it is nonzero." }] },
      ],
    },
    {
      id: "integrate-and-condition",
      title: "5. Integrate, include the constant, and apply any given condition",
      keyIdea: "An initial condition must lie within the solution's valid domain.",
      body: [
        { type: "paragraph", children: [{ text: "Integrate the separated or transformed equation, include the constant, and apply an initial condition if supplied, checking it lies in the working interval." }] },
      ],
    },
    {
      id: "verify-original",
      title: "6. Differentiate the result and check it in the original equation",
      keyIdea: "A solved family must be verified against the original differential equation.",
      body: [
        { type: "paragraph", children: [{ text: "Differentiate the final solution and substitute back into the original equation to confirm it is satisfied." }] },
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
          "Classifying and solving first-order ordinary differential equations by separable, homogeneous, and linear methods, with constant-solution and interval checks.",
        ],
        [
          "What is the central method choice?",
          "Classify the equation as separable, homogeneous, or linear before choosing a solution technique.",
        ],
        [
          "Where do most mistakes begin?",
          "Assigning a degree when the equation is not polynomial in derivatives, dividing by y and losing a constant solution, and presenting formation as explicit Main Unit 9 scope.",
        ],
        [
          "What should come before Differential Equations?",
          "Differentiation and Integration, for elimination of constants and solving separated/transformed equations.",
        ],
        [
          "What comes after it?",
          "Onward practice through previous-year papers, where route state and provenance permit.",
        ],
      ],
      note: "Official JEE syllabus documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Differential Equations",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Order, degree, separation, homogeneous, linear",
          "Explicitly includes ordinary differential equations, order and degree, separation of variables, homogeneous differential equations and linear differential equations of the stated first-order form dy/dx+p(x)y=q(x).",
          "Explicitly includes homogeneous differential equations of first order and first degree, separation of variables and linear first-order differential equations.",
          "Both papers share the same three solving methods; verify the exact stated form before applying the linear method.",
        ],
        [
          "Formation of differential equations",
          "Not separately named in the current Main Unit 9 wording.",
          "Explicitly includes formation of ordinary differential equations.",
          "Treat formation as Advanced-explicit only; do not present it as current Main-explicit scope.",
        ],
      ],
      note: "Sources: official Main Unit 9 and official Advanced Integral Calculus differential-equation scope, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Differential Equations",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        ["Differentiation", "Differentiate a solution family and eliminate arbitrary constants.", "Revise Differentiation."],
        ["Indefinite integration", "Integrate a separated equation on each side.", "Revise Integration."],
        ["Logarithms and exponentials", "Convert ln|y|=x²+C into an exponential form.", "Revise logarithm and exponential properties."],
        ["Algebraic factorisation", "Recognise when a right-hand side factors as g(x)h(y).", "Revise factorisation."],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "formula-records",
      jump: true,
      slot: "formulas",
      heading: "Differential-equation methods and their conditions",
      columns: ["Record", "Expression", "Conditions", "Common trap", "Validation"],
      rows: [
        ["Separable structure", "dy/dx = g(x)h(y)", "Functions defined on working region", "Dividing by h(y) immediately", "Check h(y)=0 constant solutions first"],
        ["Separated integration", "∫dy/h(y) = ∫g(x)dx + C", "h(y) ≠ 0 on the nonconstant branch", "Losing zero branch", "Restore/check constants"],
        ["Homogeneous substitution", "For dy/dx=F(y/x), put y=vx, so dy/dx=v+x dv/dx", "Work on interval with x ≠ 0; transformed equation valid", "Confusing with linear homogeneous equation", "Back-substitute"],
        ["Linear form", "y'+P(x)y=Q(x)", "P, Q valid on working interval", "Calling any first-order equation linear", "Structural check"],
        ["Integrating factor", "IF = e^(∫P(x)dx)", "Standard real interval; P integrable, normally continuous", "Forgetting factor on Q", "Differentiate product"],
        ["Linear solution form", "y·IF = ∫Q(x)IF dx + C", "Same interval conditions", "Dropping C", "Differentiate and substitute"],
        ["Formation from family", "Differentiate enough times to eliminate arbitrary constants", "Advanced explicit; number of independent arbitrary constants guides order in standard examples", "Claiming every family gives exactly that order without checking dependence", "Eliminate constants and inspect"],
        ["Initial condition", "Substitute (x0,y0) into the general solution", "Condition lies in the working interval/domain", "Using a point excluded by division/log", "Check original DE and condition"],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector for first-order differential equations",
      intro: "Match the equation signal to the correct first method.",
      columns: ["Equation signal", "First method"],
      rows: [
        ["Variables already factor by x and y", "Separable, but check zero solutions first"],
        ["Right side depends on y/x", "Homogeneous substitution y=vx on x ≠ 0 interval"],
        ["y'+P(x)y=Q(x)", "Integrating factor"],
        ["Family with arbitrary constants and 'form DE'", "Advanced-explicit formation by differentiation/elimination"],
        ["Initial value supplied", "Solve general method, then determine constant, respecting domain"],
        ["Equation does not match an official first-order class", "Do not invent a method or broaden scope"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-separable",
      slot: "concepts",
      heading: "Worked reasoning: separable equation with zero-solution protection",
      jump: true,
      concepts: [
        {
          id: "worked-dy-dx-2xy",
          title: "Solve dy/dx = 2xy",
          body: [
            { type: "paragraph", children: [{ text: "Known: the equation is separable, with h(y)=y." }] },
            { type: "paragraph", children: [{ text: "Method choice and zero-solution protection: before dividing by y, check y=0. If y=0, then dy/dx=0 and the original equation gives 0=0, so y=0 is a valid constant solution." }] },
            { type: "paragraph", children: [{ text: "For the nonzero branch: dy/y = 2x dx. Integrate: ln|y| = x²+C. Exponentiating gives y=Ce^(x²) for nonzero C during the divided derivation." }] },
            { type: "paragraph", children: [{ text: "The family y=Ce^(x²) with C in the reals also includes C=0, recovering the constant solution after direct verification." }] },
            { type: "paragraph", children: [{ text: "Validity check: y'=2xCe^(x²)=2xy, so every member of the stated family satisfies the original equation." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "degree-not-polynomial",
      mistake: "Assigning a degree when the equation is not polynomial in derivatives.",
      why: [{ type: "paragraph", children: [{ text: "Degree is defined only after the equation is polynomial in its derivative symbols; otherwise it is undefined." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the polynomial condition on the derivative terms before stating a degree, and state 'undefined' when it fails." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "order-degree-confusion",
      mistake: "Confusing differential-equation order with algebraic power of y.",
      why: [{ type: "paragraph", children: [{ text: "Order refers to the highest derivative order appearing, not any algebraic power of the function y itself." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the highest-order derivative term specifically when stating order." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "dividing-loses-constant-solution",
      mistake: "Dividing by y or h(y) and losing constant solutions.",
      why: [{ type: "paragraph", children: [{ text: "A constant solution such as y=0 can satisfy the original equation but disappears once both sides are divided by y." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check h(y)=0 for constant solutions before dividing, and verify whether they belong to the final family." }] }],
      errorType: "execution-error",
    },
    {
      id: "vx-through-zero",
      mistake: "Using y=vx through x=0 without interval control.",
      why: [{ type: "paragraph", children: [{ text: "The homogeneous substitution y=vx requires x ≠ 0 for dy/dx=v+x dv/dx to be valid." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Restrict the working interval to x ≠ 0 when using the homogeneous substitution." }] }],
      errorType: "execution-error",
    },
    {
      id: "if-before-linear-form",
      mistake: "Using an integrating factor on an equation not first placed in linear form.",
      why: [{ type: "paragraph", children: [{ text: "The integrating factor formula applies only once the equation is written as y'+P(x)y=Q(x)." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Rearrange the equation into standard linear form before computing the integrating factor." }] }],
      errorType: "decision-error",
    },
    {
      id: "formation-as-main-explicit",
      mistake: "Presenting formation of differential equations as an explicit Main Unit 9 bullet.",
      why: [{ type: "paragraph", children: [{ text: "Formation is explicitly listed in JEE Advanced 2026 but is not separately named in the current Main Unit 9 wording." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official-syllabus mapping table on this page before stating formation as Main-explicit scope." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "prerequisite",
      description: "Order, degree, and elimination of constants during formation depend on differentiation.",
    },
    {
      label: "Integration",
      url: "/jee/mathematics/integration",
      relation: "prerequisite",
      description: "Separation of variables and the integrating-factor method require indefinite integration.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "same-unit",
      description: "Broader calculus unit that Differential Equations belongs to.",
    },
  ],

  links: [
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
    {
      label: "Mathematics Previous Year Papers",
      url: "/jee/previous-year-papers/mathematics",
      relation: "forward",
      description: "Onward practice route, rendered only when approved route state and paper provenance permit.",
    },
  ],

  faqs: [
    {
      question: "What is the order and degree of a differential equation?",
      answer: [{ type: "paragraph", children: [{ text: "Order is the highest derivative order appearing; degree is the highest positive-integer power of that highest-order derivative once the equation is polynomial in its derivative symbols." }] }],
    },
    {
      question: "When is degree undefined?",
      answer: [{ type: "paragraph", children: [{ text: "When the equation is not polynomial in its derivative symbols, the degree is undefined." }] }],
    },
    {
      question: "How can division by y lose a valid solution?",
      answer: [{ type: "paragraph", children: [{ text: "If y=0 satisfies the original equation, dividing both sides by y before integrating removes that constant solution from view unless it is checked separately." }] }],
    },
    {
      question: "What is the integrating factor for a first-order linear equation?",
      answer: [{ type: "paragraph", children: [{ text: "For y'+P(x)y=Q(x), the integrating factor is e raised to the integral of P(x)dx." }] }],
    },
    {
      question: "Is formation of differential equations explicit in JEE Advanced 2026?",
      answer: [{ type: "paragraph", children: [{ text: "Yes. It is explicitly listed in JEE Advanced 2026 and is not separately named in the current Main Unit 9 wording." }] }],
    },
  ],

  sources: ["nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar-12-differential-equations"],
  sourceNote:
    "Use exact source verification for worked examples; do not infer how often separable or linear equations appear. Preserve the Main/Advanced formation-scope boundary on every mention.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Calculus/Differential Equations educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: order/degree definition, formation boundary, separable zero-solution preservation, homogeneous substitution, integrating factor conditions. Minimum qualification: postgraduate degree in Mathematics, Applied Mathematics or equivalent.",
    "Review scope: order/degree definition, formation boundary, separable zero-solution preservation, homogeneous substitution, integrating factor conditions, initial-condition handling and verification.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Differential Equations for JEE 2026: Separable and Linear Methods",
    description:
      "Learn JEE differential-equation order, degree, separable, homogeneous and first-order linear methods with constant-solution and denominator checks.",
    ogTitle: "Differential Equations for JEE 2026",
    ogDescription: "Order, degree, separable and linear methods, and constant-solution preservation.",
    ogType: "article",
  },
};

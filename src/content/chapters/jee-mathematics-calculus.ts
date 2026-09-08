import type { ChapterContent } from "@/content/types";

/**
 * Calculus — T06 production content.
 *
 * Evidence discipline:
 * - This is an editorial routing/umbrella page, not a fabricated official
 *   NTA unit. JEE Main 2026 distributes calculus across Units 7, 8 and 9;
 *   JEE Advanced 2026 has explicit Differential Calculus and Integral
 *   Calculus sections (differential equations sit inside Integral Calculus).
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Formula and identity tables are kept minimal to prevent cannibalising
 *   the focused calculus chapter pages.
 */
export const jeeMathematicsCalculus: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Calculus",
  slug: "calculus",
  url: "/jee/mathematics/calculus",
  canonicalIntent:
    "Understand what Calculus studies, choose the correct calculus model, see how limits, derivatives, integrals and differential equations connect, and route into the focused chapter that owns the full method.",

  heroChips: [
    "Editorial routing umbrella, not a single official NTA unit",
    "Main 2026: distributed across Units 7, 8 and 9",
    "Advanced 2026: explicit Differential Calculus and Integral Calculus sections",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Calculus studies limiting behaviour, local change, accumulated change and equations involving rates of change. Use limits when the question asks what a function approaches, derivatives for local rate or slope, derivative applications for monotonicity and extrema, integrals for antiderivatives or accumulation, definite integrals for bounded accumulation, area methods for geometric magnitude, and differential equations when the unknown is a function constrained by its derivatives.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "JEE Main 2026 distributes calculus across Units 7, 8 and 9 rather than naming one official Calculus unit. This page is presented as a Rank Sarthi routing and dependency page, not as a fabricated NTA unit.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "JEE Advanced 2026 has explicit Differential Calculus and Integral Calculus sections, with differential equations included inside the Integral Calculus scope.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "Domains, graphs and function behaviour underlie every calculus method.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Trigonometric functions and identities appear throughout calculus problems.",
    },
    {
      label: "Inverse Trigonometry",
      url: "/jee/mathematics/inverse-trigonometry",
      relation: "prerequisite",
      description: "Inverse trigonometric functions and their derivatives are calculus-relevant objects.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Calculus",
    topics: [
      "Limits and continuity",
      "Differentiation",
      "Application of derivatives",
      "Integration",
      "Definite integrals",
      "Area under curves",
      "Differential equations",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "approaching-value",
      title: "1. Is the target an approaching value?",
      keyIdea: "Route to Limits and Continuity when the question asks what a function approaches.",
      body: [
        { type: "paragraph", children: [{ text: "Limit: behaviour of a function near an input. Continuity: agreement of the local limit with the function value. Both are owned in detail by Limits and Continuity." }] },
      ],
    },
    {
      id: "local-change",
      title: "2. Is it an instantaneous or local change?",
      keyIdea: "Route to Differentiation for local rate or tangent slope.",
      body: [
        { type: "paragraph", children: [{ text: "Derivative: local rate of change or tangent slope when defined. Owned in detail by Differentiation." }] },
      ],
    },
    {
      id: "behaviour-decision",
      title: "3. Is it a behaviour decision such as increasing, maximum or minimum?",
      keyIdea: "Route to Application of Derivatives for monotonicity, extrema, tangents and normals.",
      body: [
        { type: "paragraph", children: [{ text: "Derivative application: a decision made using derivative information. Owned in detail by Application of Derivatives." }] },
      ],
    },
    {
      id: "antiderivative",
      title: "4. Is it an antiderivative?",
      keyIdea: "Route to Integration for indefinite integrals.",
      body: [
        { type: "paragraph", children: [{ text: "Antiderivative: a function whose derivative is the integrand. Owned in detail by Integration." }] },
      ],
    },
    {
      id: "bounded-accumulation",
      title: "5. Is it a bounded accumulated value?",
      keyIdea: "Route to Definite Integrals when fixed limits are supplied.",
      body: [
        { type: "paragraph", children: [{ text: "Definite integral: oriented accumulated quantity over fixed limits. Owned in detail by Definite Integrals." }] },
      ],
    },
    {
      id: "geometric-area",
      title: "6. Is the target geometric area?",
      keyIdea: "Route to Area Under Curves and confirm the sign analysis for a geometric magnitude.",
      body: [
        { type: "paragraph", children: [{ text: "Geometric area: nonnegative magnitude of a bounded planar region. Owned in detail by Area Under Curves." }] },
      ],
    },
    {
      id: "unknown-function-constrained",
      title: "7. Is the unknown function constrained through derivatives?",
      keyIdea: "Route to Differential Equations when dy/dx or a higher derivative appears with the unknown function.",
      body: [
        { type: "paragraph", children: [{ text: "Differential equation: an equation involving an unknown function and its derivatives. Owned in detail by Differential Equations." }] },
      ],
    },
  ],

  formulas: [
    {
      id: "derivative-bridge",
      expression: "f'(a)=lim[h->0](f(a+h)-f(a))/h",
      meaning: "Derivative bridge",
      variables: [{ symbol: "a", meaning: "point of differentiation" }, { symbol: "h", meaning: "increment approaching 0" }],
      useWhen: "Connecting limits to the derivative definition",
      commonTrap: "Assuming the limit exists without checking the local domain permits the difference quotient",
      accessibleText: "the derivative of f at a equals the limit as h approaches 0 of f of a plus h minus f of a, over h, when the limit exists",
    },
    {
      id: "antiderivative-bridge",
      expression: "F'=f",
      meaning: "Antiderivative bridge",
      variables: [{ symbol: "F", meaning: "an antiderivative of f" }, { symbol: "f", meaning: "the given function" }],
      useWhen: "Connecting derivatives to antiderivatives",
      commonTrap: "Ignoring that F and f must share the same interval and differentiability",
      accessibleText: "F prime equals f means F is an antiderivative of f on the interval",
    },
    {
      id: "ftc-bridge",
      expression: "∫_a^b f(x)dx=F(b)-F(a)",
      meaning: "Fundamental Theorem of Calculus bridge",
      variables: [{ symbol: "a", meaning: "lower limit" }, { symbol: "b", meaning: "upper limit" }, { symbol: "F", meaning: "an antiderivative of f" }],
      useWhen: "Evaluating a definite integral, under standard continuity assumptions",
      commonTrap: "Including a +C in the final definite value",
      accessibleText: "the definite integral of f from a to b equals F of b minus F of a, for an antiderivative F, with fixed limits and no plus C",
    },
    {
      id: "differential-equation-bridge",
      expression: "A derivative relation constrains an unknown function",
      meaning: "Differential-equation bridge",
      variables: [],
      useWhen: "Recognising a differential equation",
      commonTrap: "Choosing a method before identifying the equation class",
      accessibleText: "a differential equation is a derivative relation that constrains an unknown function; the method depends on the equation class",
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
          "Routing between limits, derivatives, derivative applications, integrals, definite integrals, areas and differential equations, and showing how they connect.",
        ],
        [
          "What is the central method choice?",
          "Identify the mathematical object the question targets, then route to the focused chapter that owns the full method for that object.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating Calculus as a single formula chapter, differentiating when a limit is the actual target, or using an indefinite integral when fixed limits are supplied.",
        ],
        [
          "What should come before Calculus?",
          "Functions, domains and graphs, Trigonometry and Inverse Trigonometry, algebraic manipulation, exponentials and logarithms.",
        ],
        [
          "What comes after it?",
          "Limits and Continuity is the first focused route; Differentiation, Application of Derivatives, Integration, Definite Integrals, Area Under Curves and Differential Equations follow.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Calculus",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Overall unit presence",
          "Distributed across Units 7, 8 and 9; no single official Calculus unit is named.",
          "Explicit Differential Calculus and Integral Calculus sections, with differential equations inside Integral Calculus.",
          "Treat this page as a Rank Sarthi routing page, not a fabricated NTA unit.",
        ],
        [
          "Differentiation-side topics",
          "Unit 7: limits, continuity, differentiability, derivative rules, rate of change, increasing/decreasing functions, maxima and minima.",
          "Explicit Differential Calculus: limit algebra, L'Hospital rule, continuity of composites, intermediate value property, chain rule, tangents and normals, monotonicity, second derivatives, extrema, Rolle's theorem, Lagrange's mean value theorem.",
          "Route to Limits and Continuity, Differentiation and Application of Derivatives for full method detail.",
        ],
        [
          "Integration-side topics",
          "Unit 8: integration as antiderivative, substitution, parts, partial fractions, Fundamental Theorem, definite-integral properties, areas bounded by simple curves. Unit 9: ordinary differential equations.",
          "Explicit Integral Calculus: indefinite standard integrals, definite integrals as limits of sums, definite-integral properties, Fundamental Theorem, integration by parts, substitution, partial fractions, areas, formation and solution of ordinary differential equations.",
          "Route to Integration, Definite Integrals, Area Under Curves and Differential Equations for full method detail.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus Units 7-9 and JEE Advanced 2026 syllabus Differential and Integral Calculus sections, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Calculus",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        ["Functions, domains and graphs", "Read a function's domain, range and graph.", "Revise Functions."],
        ["Trigonometry and inverse trigonometry", "Work with trigonometric and inverse trigonometric functions and identities.", "Revise Trigonometry and Inverse Trigonometry."],
        ["Algebraic manipulation", "Factor, expand and simplify algebraic expressions confidently.", "Revise algebraic technique before starting calculus methods."],
        ["Exponentials and logarithms", "Work with exponential and logarithmic expressions and their basic properties.", "Revise exponential and logarithm rules."],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "object-map",
      jump: true,
      slot: "concepts",
      heading: "Mathematical object definitions and their owning chapter",
      columns: ["Object", "Umbrella meaning", "Owned in detail by"],
      rows: [
        ["Limit", "Behaviour of a function near an input", "/jee/mathematics/limits-continuity"],
        ["Continuity", "Agreement of local limit with function value", "/jee/mathematics/limits-continuity"],
        ["Derivative", "Local rate of change or tangent slope when defined", "/jee/mathematics/differentiation"],
        ["Derivative application", "Decision using derivative information", "/jee/mathematics/application-of-derivatives"],
        ["Antiderivative", "Function whose derivative is the integrand", "/jee/mathematics/integration"],
        ["Definite integral", "Oriented accumulated quantity over fixed limits", "/jee/mathematics/definite-integrals"],
        ["Geometric area", "Nonnegative magnitude of a bounded planar region", "/jee/mathematics/area-under-curves"],
        ["Differential equation", "Equation involving an unknown function and its derivatives", "/jee/mathematics/differential-equations"],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: question cue to route",
      columns: ["Question cue", "Route"],
      rows: [
        ["\"approaches\", \"limit\", \"continuous at\"", "Limits and Continuity"],
        ["\"differentiate\", \"slope\", \"instantaneous rate\"", "Differentiation"],
        ["\"increasing\", \"decreasing\", \"maximum\", \"minimum\", \"tangent/normal\"", "Application of Derivatives"],
        ["\"find an antiderivative\", indefinite integral", "Integration"],
        ["fixed lower and upper limits", "Definite Integrals"],
        ["geometric area bounded by curves", "Area Under Curves"],
        ["unknown function appears with dy/dx or higher derivative", "Differential Equations"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-routing-example",
      slot: "concepts",
      heading: "Worked reasoning: routing a maximum-value question",
      jump: true,
      concepts: [
        {
          id: "worked-example",
          title: "Find the largest value of f(x)=x(4-x) on [0,4]",
          body: [
            { type: "paragraph", children: [{ text: "Known: the target is not an antiderivative or a limit; it is a maximum on a closed interval. Method choice: route to Application of Derivatives." }] },
            { type: "paragraph", children: [{ text: "At the focused-method level: f'(x)=4-2x, so the interior critical point is x=2. Compare f(0)=0, f(2)=4, f(4)=0." }] },
            { type: "paragraph", children: [{ text: "Result: largest value is 4. Validation: the endpoint comparison confirms that the interior critical point actually gives the global maximum on the stated interval." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "calculus-as-single-formula-chapter",
      mistake: "Treating Calculus as a single formula chapter.",
      why: [{ type: "paragraph", children: [{ text: "Calculus spans several distinct method families, each owned by its own focused chapter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify which mathematical object the question targets and route to the focused chapter." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "differentiating-instead-of-limit",
      mistake: "Differentiating when a limit is the actual target.",
      why: [{ type: "paragraph", children: [{ text: "Confusing the limit definition with a derivative computation leads to the wrong method." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm whether the question asks what a function approaches before differentiating." }] }],
      errorType: "decision-error",
    },
    {
      id: "indefinite-integral-with-fixed-limits",
      mistake: "Using an indefinite integral when fixed limits are supplied.",
      why: [{ type: "paragraph", children: [{ text: "Fixed limits require the Fundamental Theorem and definite-integral evaluation, not a general antiderivative with +C." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Route to Definite Integrals when the problem supplies fixed lower and upper limits." }] }],
      errorType: "decision-error",
    },
    {
      id: "signed-integral-as-area-without-check",
      mistake: "Calling a signed definite integral geometric area without a sign analysis.",
      why: [{ type: "paragraph", children: [{ text: "A definite integral can be negative where the curve lies below the axis, while geometric area is a nonnegative magnitude." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Perform the sign analysis required by Area Under Curves before equating the two." }] }],
      errorType: "execution-error",
    },
    {
      id: "every-critical-point-extremum",
      mistake: "Declaring every critical point an extremum.",
      why: [{ type: "paragraph", children: [{ text: "A critical point may be neither a maximum nor a minimum without further verification." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify extremum status using the method taught in Application of Derivatives." }] }],
      errorType: "execution-error",
    },
    {
      id: "dividing-away-constant-solution",
      mistake: "Solving a differential equation by dividing away a possible constant solution.",
      why: [{ type: "paragraph", children: [{ text: "Dividing by a variable expression can silently discard a valid constant solution of the differential equation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check for constant solutions before dividing, as taught in Differential Equations." }] }],
      errorType: "decision-error",
    },
    {
      id: "umbrella-instead-of-focused-route",
      mistake: "Using the umbrella page instead of the focused route for complete method teaching.",
      why: [{ type: "paragraph", children: [{ text: "This page intentionally keeps formulas minimal and does not reproduce full method tables to avoid cannibalising the focused chapters." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Route to the focused chapter for the full method, formula table and worked practice." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Limits and Continuity",
      url: "/jee/mathematics/limits-continuity",
      relation: "forward",
      description: "First focused route: behaviour a function approaches and agreement of local limit with function value.",
    },
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "forward",
      description: "Owns local rate of change and tangent slope in full method detail.",
    },
    {
      label: "Application of Derivatives",
      url: "/jee/mathematics/application-of-derivatives",
      relation: "forward",
      description: "Owns monotonicity, extrema, tangents and normals in full method detail.",
    },
    {
      label: "Integration",
      url: "/jee/mathematics/integration",
      relation: "forward",
      description: "Owns antiderivative methods in full method detail.",
    },
    {
      label: "Definite Integrals",
      url: "/jee/mathematics/definite-integrals",
      relation: "forward",
      description: "Owns bounded accumulation and the Fundamental Theorem application in full method detail.",
    },
    {
      label: "Area Under Curves",
      url: "/jee/mathematics/area-under-curves",
      relation: "forward",
      description: "Owns geometric area magnitude and sign analysis in full method detail.",
    },
    {
      label: "Differential Equations",
      url: "/jee/mathematics/differential-equations",
      relation: "forward",
      description: "Owns unknown-function-with-derivative equations in full method detail.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Trigonometric functions and identities appear throughout calculus problems.",
    },
    {
      label: "Inverse Trigonometry",
      url: "/jee/mathematics/inverse-trigonometry",
      relation: "prerequisite",
      description: "Inverse trigonometric functions and their derivatives are calculus-relevant objects.",
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
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "Domains, graphs and function behaviour required before calculus.",
    },
  ],

  faqs: [
    {
      question: "What does Calculus study?",
      answer: [{ type: "paragraph", children: [{ text: "Calculus studies limiting behaviour, local change, accumulated change and equations involving rates of change." }] }],
    },
    {
      question: "What is the difference between a derivative and an integral?",
      answer: [{ type: "paragraph", children: [{ text: "A derivative gives local rate of change or tangent slope; an integral gives an antiderivative or an accumulated quantity, depending on whether it is indefinite or definite." }] }],
    },
    {
      question: "Which JEE Calculus chapter should I use for maxima?",
      answer: [{ type: "paragraph", children: [{ text: "Application of Derivatives owns maxima, minima, monotonicity, and tangent/normal method detail." }] }],
    },
    {
      question: "Is Calculus a single JEE Main 2026 unit?",
      answer: [{ type: "paragraph", children: [{ text: "No. JEE Main 2026 distributes calculus across Units 7, 8 and 9 rather than naming one official Calculus unit. This page is an editorial routing page." }] }],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote:
    "This umbrella page routes to focused chapters and intentionally keeps formulas minimal to prevent cannibalisation. No calculus question is labelled a PYQ based on a broad umbrella label alone; exact official provenance and method must be verified at the focused-chapter level. No frequency, weightage or expected-question claim is published.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Calculus and Mathematical Analysis. Minimum qualification: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: routing logic, Main/Advanced umbrella wording, conceptual bridges and cannibalisation boundary.",
  ],

  contentStatus: "draft",

  meta: {
    title: "JEE Calculus 2026: Complete Method and Chapter Map",
    description:
      "Understand how limits, derivatives, derivative applications, integrals, areas and differential equations connect, then choose the correct JEE method.",
    ogTitle: "JEE Calculus 2026",
    ogDescription: "A routing map across limits, derivatives, integrals and differential equations for JEE Main and Advanced.",
    ogType: "article",
  },
};

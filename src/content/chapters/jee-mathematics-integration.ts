import type { ChapterContent } from "@/content/types";

/**
 * Integration — T06 production content (M02-07).
 *
 * Evidence discipline:
 * - No weightage, frequency or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 */
export const jeeMathematicsIntegration: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Integration",
  slug: "integration",
  url: "/jee/mathematics/integration",
  canonicalIntent:
    "Find indefinite integrals by recognising antiderivative structure and selecting substitution, integration by parts, partial fractions or trigonometric identities while preserving domains and the constant of integration.",

  heroChips: [
    "Explicit in both JEE Main 2026 Unit 8 and JEE Advanced 2026 Integral Calculus",
    "The constant +C is mandatory on every indefinite integral",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "An indefinite integral represents a family of antiderivatives. If F'(x)=f(x) on an interval, then ∫f(x)dx=F(x)+C.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Method selection matters: substitution requires a corresponding differential transformation, integration by parts reverses the product rule, and partial fractions requires a valid rational-function decomposition.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "The constant +C is mandatory on every indefinite integral answer.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "prerequisite",
      description: "Chain and product rules are needed to recognise antiderivative structure and to verify results.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Trigonometric identities simplify integrands before a standard antiderivative applies.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Integral Calculus",
    topics: [
      "Integration as antiderivative",
      "Fundamental integrals",
      "Substitution",
      "Integration by parts",
      "Partial fractions",
      "Trigonometric identities in integration",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "integrand-structure",
      title: "1. Identify whether the integrand matches a standard derivative",
      keyIdea: "Start from the integrand structure, not from a memorised list of tricks.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Identify whether the integrand already matches a standard antiderivative before searching for a technique." },
          ],
        },
      ],
    },
    {
      id: "domain-interval",
      title: "2. Check the real domain and choose a working interval",
      keyIdea: "Choose an interval avoiding poles where required.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Check the integrand's real domain and choose a working interval that avoids poles or excluded points before integrating." }],
        },
      ],
    },
    {
      id: "substitution-pattern",
      title: "3. Look for an inner function with its derivative",
      keyIdea: "Substitution requires the differential, not just a change of symbol.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "If u=g(x) and the integrand contains the corresponding g'(x)dx, transform the entire differential consistently, not merely relabel a variable." }],
        },
      ],
    },
    {
      id: "parts-selection",
      title: "4. Use integration by parts only when it simplifies the remaining integral",
      keyIdea: "For products, test parts only if the resulting integral is simpler.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "For products of unlike functions, consider integration by parts, ∫u dv=uv-∫v du, only if it produces a simpler remaining integral." }],
        },
      ],
    },
    {
      id: "partial-fractions",
      title: "5. Divide first, then decompose",
      keyIdea: "Perform polynomial division on an improper rational function before partial fractions.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "For rational functions, perform polynomial division if the integrand is improper, then factor the denominator and decompose into partial fractions." }],
        },
      ],
    },
    {
      id: "constant-and-verify",
      title: "6. Add +C and differentiate to verify",
      keyIdea: "Every indefinite integral answer ends with +C and a derivative check.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Add the constant of integration, then differentiate the final expression on the stated interval to confirm it reproduces the original integrand." }],
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
          "Finding indefinite integrals by recognising antiderivative structure and selecting substitution, integration by parts, partial fractions, or trigonometric identities.",
        ],
        [
          "What is the central method choice?",
          "Match the integrand to a standard derivative, or select substitution, parts, or partial fractions based on its structure.",
        ],
        [
          "Where do most mistakes begin?",
          "Omitting +C, calling a relabelling 'substitution' without transforming the differential, and using partial fractions before polynomial division.",
        ],
        [
          "What should come before Integration?",
          "Differentiation and Trigonometry for antiderivative recognition and identity simplification.",
        ],
        [
          "What comes after it?",
          "Definite Integrals apply fixed limits and the Fundamental Theorem to these same antiderivative techniques.",
        ],
      ],
      note: "Official JEE syllabus documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Integration",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Integration as antiderivative",
          "Explicitly listed in Unit 8, with fundamental integrals of algebraic, trigonometric, exponential and logarithmic functions.",
          "Explicitly listed as integration as inverse differentiation with indefinite integrals of standard functions.",
          "Both papers require the same antiderivative base; Main additionally prints simple rational/radical integral families.",
        ],
        [
          "Substitution, parts, partial fractions",
          "Explicitly listed in Unit 8.",
          "Explicitly listed.",
          "Practise method selection, not memorised outcomes.",
        ],
      ],
      note: "Where a Main-printed simple-integral family produces a closed form not shown on this page, that closed form requires Mathematics SME sign-off before publication.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Integration",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        ["Differentiation rules", "Differentiate a proposed antiderivative to check it.", "Revise chain and product rules in Differentiation."],
        ["Algebraic factorisation", "Factor a denominator before partial fractions.", "Revise polynomial factorisation."],
        ["Trigonometric identities", "Simplify a trig integrand before integrating.", "Revise identities in Trigonometry."],
        ["Logarithm domains", "State the domain of ln|x|.", "Revise logarithm properties."],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "formula-records",
      jump: true,
      slot: "formulas",
      heading: "Standard integrals and their conditions",
      columns: ["Record", "Expression", "Conditions"],
      rows: [
        ["Power", "∫x^n dx = x^(n+1)/(n+1) + C", "n ≠ -1; real-domain restrictions apply if n is not an integer"],
        ["Reciprocal", "∫dx/x = ln|x| + C", "x ≠ 0; work on an interval not crossing 0"],
        ["Exponential", "∫e^x dx = e^x + C", "all real x"],
        ["General exponential", "∫a^x dx = a^x/ln a + C", "a > 0, a ≠ 1"],
        ["Sine", "∫sinx dx = -cosx + C", "radians"],
        ["Cosine", "∫cosx dx = sinx + C", "radians"],
        ["Secant squared", "∫sec²x dx = tanx + C", "interval avoiding cosx = 0"],
        ["Cosecant squared", "∫csc²x dx = -cotx + C", "interval avoiding sinx = 0"],
        ["Inverse tangent form", "∫dx/(1+x²) = tan⁻¹x + C", "all real x"],
        ["Inverse sine form", "∫dx/√(1-x²) = sin⁻¹x + C", "open interval |x| < 1"],
        ["Scaled inverse tangent", "∫dx/(a²+x²) = (1/a)tan⁻¹(x/a) + C", "a > 0"],
        ["Scaled inverse sine", "∫dx/√(a²-x²) = sin⁻¹(x/a) + C", "a > 0, |x| < a"],
        ["Substitution", "If u=g(x) and integrand contains g'(x)dx, transform the differential consistently", "g differentiable on the working interval; transformed integral valid"],
        ["Parts", "∫u dv = uv - ∫v du", "u differentiable and v an antiderivative of dv on the interval"],
        ["Partial fractions", "Decompose a rational function after denominator factorisation", "Denominator nonzero on working interval; divide first if numerator degree ≥ denominator degree"],
      ],
      note: "The Main syllabus additionally prints families involving quadratic denominators, square-root quadratic forms and linear numerators over those forms; closed forms beyond this table require Mathematics SME sign-off before indexation.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: match integrand structure to technique",
      intro: "Match the integrand signal to the correct first method before integrating.",
      columns: ["Integrand signal", "Method"],
      rows: [
        ["Exact derivative pattern", "Standard antiderivative"],
        ["g'(x)·F(g(x))", "Substitution"],
        ["Product of unlike functions", "Test integration by parts"],
        ["Proper rational function", "Partial fractions if denominator factorises suitably"],
        ["Improper rational function", "Polynomial division first"],
        ["Trig powers/products", "Identities if they simplify to standard forms"],
        ["Quadratic/radical official Main family", "Complete square or substitution only after domain/form recognition"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-substitution",
      slot: "concepts",
      heading: "Worked reasoning: substitution matched to the differential",
      jump: true,
      concepts: [
        {
          id: "worked-2xcosx2",
          title: "Evaluate ∫2x cos(x²) dx",
          body: [
            { type: "paragraph", children: [{ text: "Known: the inner function x² has derivative 2x." }] },
            { type: "paragraph", children: [{ text: "Method choice: substitution exactly matches the differential." }] },
            { type: "paragraph", children: [{ text: "Let u=x², so du=2x dx. Then ∫2x cos(x²)dx = ∫cosu du = sinu + C. Back-substitute: sin(x²)+C." }] },
            { type: "paragraph", children: [{ text: "Validity check: d/dx[sin(x²)+C] = cos(x²)·2x, which exactly reproduces the integrand." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "omitting-c",
      mistake: "Omitting +C on an indefinite integral.",
      why: [{ type: "paragraph", children: [{ text: "An indefinite integral represents an entire family of antiderivatives, not a single function." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always append +C to a final indefinite-integral answer." }] }],
      errorType: "execution-error",
    },
    {
      id: "fake-substitution",
      mistake: "Calling a change of symbol 'substitution' without transforming the differential.",
      why: [{ type: "paragraph", children: [{ text: "Substitution requires the differential g'(x)dx to be present and transformed, not just a relabelled variable." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm du=g'(x)dx is genuinely present before calling the method substitution." }] }],
      errorType: "decision-error",
    },
    {
      id: "lnx-vs-ln-abs-x",
      mistake: "Using lnx instead of ln|x| for ∫dx/x on a general real interval.",
      why: [{ type: "paragraph", children: [{ text: "lnx is undefined for x<0, but ln|x| is a valid antiderivative on both x>0 and x<0 branches." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Write ln|x|+C and state the working interval when it excludes x=0." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "partial-fractions-before-division",
      mistake: "Using partial fractions before polynomial division of an improper rational function.",
      why: [{ type: "paragraph", children: [{ text: "Partial-fraction decomposition applies to a proper rational function; an improper one must be divided first." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check numerator versus denominator degree and divide first when the fraction is improper." }] }],
      errorType: "execution-error",
    },
    {
      id: "formula-across-pole",
      mistake: "Using a formula across poles as though one antiderivative expression defines one connected interval.",
      why: [{ type: "paragraph", children: [{ text: "Antiderivative formulas are valid on a connected interval avoiding singularities; carrying one expression across a pole is invalid." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the interval explicitly and treat each side of a singularity separately." }] }],
      errorType: "needs-review",
    },
    {
      id: "definite-properties-on-indefinite",
      mistake: "Importing definite-integral properties onto an indefinite integral.",
      why: [{ type: "paragraph", children: [{ text: "Properties such as limit reversal or interval addition apply to definite integrals with fixed limits, not to antiderivative families." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep indefinite-integral reasoning separate from definite-integral property use." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "prerequisite",
      description: "Antiderivative recognition and result verification depend on differentiation rules.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Trigonometric identities simplify integrands before applying a standard antiderivative.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "same-unit",
      description: "Broader calculus unit that Integration belongs to.",
    },
    {
      label: "Definite Integrals",
      url: "/jee/mathematics/definite-integrals",
      relation: "forward",
      description: "Applies these same antiderivative techniques within fixed limits and the Fundamental Theorem.",
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
      question: "Why does an indefinite integral need +C?",
      answer: [{ type: "paragraph", children: [{ text: "Because differentiation removes constants, infinitely many antiderivatives differ only by a constant; +C represents that entire family." }] }],
    },
    {
      question: "When should substitution be used?",
      answer: [{ type: "paragraph", children: [{ text: "When the integrand contains an inner function together with its derivative as a factor, matching the pattern g'(x)F(g(x))." }] }],
    },
    {
      question: "When is partial fraction decomposition valid?",
      answer: [{ type: "paragraph", children: [{ text: "When the rational function is proper and its denominator factorises; an improper rational function must be divided first." }] }],
    },
    {
      question: "Why is ∫dx/x = ln|x| + C?",
      answer: [{ type: "paragraph", children: [{ text: "Because ln|x| is differentiable to 1/x on both x>0 and x<0, unlike lnx which is undefined for negative x." }] }],
    },
  ],

  sources: ["nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar-12-integrals", "ncert-math-exemplar"],
  sourceNote:
    "Method classification for official Main-printed simple integral families is taught here; closed forms beyond the listed standard integrals require Mathematics SME sign-off before indexation. Use only verified official-paper provenance for worked examples. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Calculus/Mathematical Analysis educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: standard integrals, domain intervals, substitution validity, integration by parts, partial fractions. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics.",
    "Review scope: all standard integrals, domain intervals, substitution validity, parts identity, partial fractions, official Main printed family treatment and +C.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Integration for JEE 2026: Substitution, Parts and Partial Fractions",
    description:
      "Learn indefinite integration, standard antiderivatives, substitution, by-parts and partial-fraction methods with domains and mandatory +C.",
    ogTitle: "Integration for JEE 2026",
    ogDescription: "Antiderivative structure, method selection, domain conditions, and worked substitution reasoning.",
    ogType: "article",
  },
};

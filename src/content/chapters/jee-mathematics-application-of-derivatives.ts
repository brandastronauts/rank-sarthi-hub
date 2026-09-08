import type { ChapterContent } from "@/content/types";

/**
 * Application of Derivatives — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Main 2026 Unit 7 explicitly names rate of change, monotonic
 *   increasing/decreasing functions, and maxima/minima of functions of one
 *   variable. Tangents/normals and approximation are not separately named in
 *   the current Main Unit 7 wording. Advanced 2026 explicitly includes
 *   tangents and normals, increasing/decreasing functions, derivatives of
 *   order two, maximum/minimum values, Rolle's theorem, Lagrange's mean value
 *   theorem and geometric interpretation. Approximation is not separately
 *   named in the Advanced 2026 wording either.
 */
export const jeeMathematicsApplicationOfDerivatives: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Application of Derivatives",
  slug: "application-of-derivatives",
  url: "/jee/mathematics/application-of-derivatives",
  canonicalIntent:
    "Select and apply derivative information to rates, monotonicity, tangents/normals where officially applicable, and maxima/minima without assuming every critical point is an extremum.",

  heroChips: [
    "Main 2026 Unit 7 names rate of change, monotonicity and maxima/minima",
    "Advanced 2026 adds tangents/normals, Rolle's theorem and Lagrange's MVT",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Applications of derivatives use the sign or value of a derivative to make a decision about a function.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A critical point is only a candidate for an extremum. To establish a maximum or minimum, use a derivative sign change, a valid second-derivative test, endpoint comparison for a closed interval, or another appropriate argument.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Tangents/normals and approximation are not separately named in the current Main Unit 7 wording. Approximation is also not separately named in the Advanced 2026 wording, so it is not promoted here as an explicit current-scope bullet.",
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
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "prerequisite",
      description: "Reliable differentiation is required before selecting rate, monotonicity or extremum methods.",
    },
    {
      label: "Limits and Continuity",
      url: "/jee/mathematics/limits-continuity",
      relation: "prerequisite",
      description: "Rolle's theorem and Lagrange's mean value theorem require continuity and differentiability hypotheses.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Application of Derivatives",
    topics: [
      "Rate of change of quantities",
      "Increasing and decreasing functions",
      "Maxima and minima of functions of one variable",
      "Tangents and normals (Advanced-explicit)",
      "Rolle's theorem and Lagrange's mean value theorem (Advanced-explicit)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "target-behaviour-first",
      title: "1. State whether the target is local or global",
      keyIdea: "Decide the exact goal before differentiating: rate, monotonicity, local extremum or global extremum.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "State whether the target is local or global, find the legal domain and interval, and only then compute the derivative.",
            },
          ],
        },
      ],
    },
    {
      id: "critical-point-is-candidate",
      title: "2. Treat a critical point as a candidate, not a conclusion",
      keyIdea: "If f has a local extremum at an interior point c and is differentiable at c, then f'(c)=0 — the implication does not reverse.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A critical point is an interior domain point where f'(c)=0 or f' does not exist, depending on the method context. Reversing the necessary condition and assuming every critical point is an extremum is a direct error.",
            },
          ],
        },
      ],
    },
    {
      id: "sign-chart-over-single-point",
      title: "3. Use a sign chart, not a single-point check",
      keyIdea: "Increasing/decreasing conclusions require the derivative sign to hold throughout the interval, not at one point.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "If f'(x)>0 throughout an interval, f is strictly increasing there; if f'(x)<0 throughout, f is strictly decreasing. Checking the derivative at a single point does not establish this.",
            },
          ],
        },
      ],
    },
    {
      id: "second-derivative-test-limits",
      title: "4. Recognise when the second-derivative test is inconclusive",
      keyIdea: "If f'(c)=0 and f''(c)<0, c is a local max; if f''(c)>0, a local min; if f''(c)=0, the test gives no conclusion.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The second-derivative test requires the relevant derivatives to exist. When f''(c)=0, the result is inconclusive and another method, such as a first-derivative sign chart, is required.",
            },
          ],
        },
      ],
    },
    {
      id: "closed-interval-endpoints",
      title: "5. Compare endpoints for global extrema on a closed interval",
      keyIdea: "Global extrema on a closed interval require checking interior candidates together with both endpoints.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Ignoring domain boundaries or interval endpoints is a common error. Global maximum and minimum values on a closed interval must be found by comparing all interior critical candidates with the endpoint values.",
            },
          ],
        },
      ],
    },
    {
      id: "tangent-normal-conditions",
      title: "6. Apply tangent and normal formulas only where they are valid",
      keyIdea: "Tangent and normal lines require a finite derivative at the point, and the normal slope requires a nonzero finite f'(a).",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The tangent line is y-f(a)=f'(a)(x-a), valid where f'(a) is finite. The normal slope is -1/f'(a), valid where f'(a) is finite and nonzero. If f'(a)=0, the tangent is horizontal and the normal is the vertical line x=a; -1/0 is not used numerically.",
            },
          ],
        },
      ],
    },
    {
      id: "rolle-lmvt-hypotheses",
      title: "7. Verify every Rolle/LMVT hypothesis before using the conclusion",
      keyIdea: "Rolle's theorem and Lagrange's mean value theorem each require continuity on [a,b] and differentiability on (a,b), plus Rolle's f(a)=f(b) condition.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Rolle's theorem gives some c in (a,b) with f'(c)=0, under continuity on [a,b], differentiability on (a,b), f(a)=f(b), and a<b. Lagrange's mean value theorem gives some c in (a,b) with f'(c)=[f(b)-f(a)]/(b-a), under continuity on [a,b], differentiability on (a,b), and a<b. Applying either theorem across a point of discontinuity is invalid.",
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
          "Using the sign or value of a derivative to decide rate of change, monotonicity, extrema, and — where officially applicable — tangents/normals and mean value theorems.",
        ],
        [
          "What is the central method choice?",
          "State whether the target is local or global, find the legal domain and interval, compute the derivative, find critical candidates and required endpoints, then apply the appropriate test.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating every critical point as a maximum or minimum, ignoring interval endpoints, and using an inconclusive second-derivative test result as if it were conclusive.",
        ],
        [
          "What should come before this chapter?",
          "Differentiation, and Limits and Continuity for the hypotheses used by Rolle's theorem and Lagrange's mean value theorem.",
        ],
        [
          "What comes after it?",
          "Integration reverses the differentiation process used throughout this chapter.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Application of Derivatives",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Rates and monotonicity",
          "Explicitly names rate of change of quantities and monotonic increasing/decreasing functions.",
          "Explicitly includes increasing/decreasing functions and geometric interpretation.",
          "Both authorities require derivative-sign reasoning over an interval.",
        ],
        [
          "Maxima and minima",
          "Explicitly names maxima and minima of functions of one variable.",
          "Explicitly includes maximum and minimum values.",
          "Both require a valid test, not just critical-point identification.",
        ],
        [
          "Tangents, normals and mean value theorems",
          "Not separately named in the current Main Unit 7 wording.",
          "Explicitly includes tangents and normals, derivatives of order two, Rolle's theorem and Lagrange's mean value theorem.",
          "Treat as Advanced-explicit; do not present as an explicit Main Unit 7 bullet.",
        ],
        [
          "Approximation",
          "Not separately named in the current Main Unit 7 wording.",
          "Not separately named in the Advanced 2026 wording.",
          "Do not present approximation as explicit 2026 scope without source support.",
        ],
      ],
      note: "JEE Main 2026 and JEE Advanced 2026 are independent authorities.",
    },
    {
      id: "object-definitions",
      jump: true,
      slot: "concepts",
      heading: "Mathematical object definitions",
      columns: ["Object", "Meaning"],
      rows: [
        ["Rate of change", "Derivative of one quantity with respect to another."],
        ["Increasing/decreasing", "Comparison of function values as x increases on an interval."],
        ["Critical point", "Interior domain point where f'(c)=0 or f' does not exist, depending on the method context."],
        ["Local maximum/minimum", "Value larger/smaller than nearby values."],
        ["Global maximum/minimum", "Largest/smallest value over the stated domain or interval."],
        ["Tangent slope", "f'(a) when a finite derivative exists."],
        ["Normal", "Line perpendicular to the tangent under the standard finite-slope cases."],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      intro: "Match the requested decision to the correct application-of-derivatives method.",
      columns: ["Target", "First method", "Required check"],
      rows: [
        ["Rate", "Differentiate the stated quantity with units", "Correct variable and unit tracking"],
        ["Increasing/decreasing", "Derivative sign chart", "Sign held throughout the interval, not one point"],
        ["Local extrema", "First derivative sign is robust", "Sign compared on both sides of the candidate"],
        ["Second derivative nonzero at stationary point", "Second derivative test", "f''(c)≠0; if zero, test is inconclusive"],
        ["Global extrema on closed interval", "Candidates plus endpoints", "Both endpoints included in the comparison"],
        ["Tangent/normal", "Advanced-explicit geometry after differentiability check", "Finite f'(a); nonzero for the normal slope"],
        ["Rolle/LMVT", "Verify every theorem condition before using the conclusion", "Continuity, differentiability and (for Rolle) f(a)=f(b)"],
      ],
    },
    {
      id: "formula-theorem-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records with conditions",
      columns: ["Record", "Statement", "Conditions", "Trap"],
      rows: [
        ["Increasing test", "If f'(x)>0 throughout an interval, f is strictly increasing there", "f differentiable on interval", "Checking derivative at one point"],
        ["Decreasing test", "If f'(x)<0 throughout an interval, f is strictly decreasing", "f differentiable on interval", "One-point inference"],
        ["Interior necessary condition", "If f has a local extremum at interior c and is differentiable at c, then f'(c)=0", "Differentiability at interior c", "Reversing the implication"],
        ["First derivative maximum", "f' changes + to - at c", "f continuous around c; derivative sign analysed on both sides", "Merely solving f'=0"],
        ["First derivative minimum", "f' changes - to + at c", "f continuous around c; derivative sign analysed on both sides", "Merely solving f'=0"],
        ["Second derivative maximum", "If f'(c)=0 and f''(c)<0, standard second-derivative test gives local max", "Required derivatives exist", "Treating f''=0 as max/min"],
        ["Second derivative minimum", "If f'(c)=0 and f''(c)>0, local min", "Required derivatives exist", "Treating f''=0 as max/min"],
        ["Tangent line", "y-f(a)=f'(a)(x-a)", "Advanced explicit; finite derivative at a", "Applying at a nondifferentiable point"],
        ["Normal line", "Slope=-1/f'(a)", "Advanced explicit; finite nonzero f'(a)", "Dividing by a zero slope"],
        ["Horizontal tangent special case", "If finite f'(a)=0, tangent is horizontal and normal is vertical x=a", "Curve differentiable at a", "Using -1/0 numerically"],
        ["Rolle's theorem", "Some c in (a,b) has f'(c)=0", "Advanced explicit; f continuous on [a,b], differentiable on (a,b), f(a)=f(b), a<b", "Omitting the endpoint-equality condition"],
        ["Lagrange MVT", "Some c in (a,b) has f'(c)=[f(b)-f(a)]/(b-a)", "Advanced explicit; f continuous on [a,b], differentiable on (a,b), a<b", "Using it across a discontinuity"],
      ],
      note: "Tangent/normal, Rolle's theorem and Lagrange's mean value theorem are Advanced-explicit; they are not presented as explicit Main Unit 7 bullets.",
    },
  ],

  sections: [
    {
      id: "worked-global-extrema",
      slot: "concepts",
      heading: "Worked reasoning: global extrema on a closed interval",
      jump: true,
      concepts: [
        {
          id: "closed-interval-example",
          title: "Comparing critical candidates with endpoints",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Find the global extrema of f(x)=x(6-x) on [0,6]. This is a closed interval, so the derivative gives interior candidates, but endpoints must also be compared.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "f'(x)=6-2x. Setting f'(x)=0 gives 6-2x=0, so x=3. Evaluating: f(0)=0, f(3)=9, f(6)=0.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Result: the global maximum is 9 at x=3, and the global minimum is 0 at x=0 and x=6. Endpoint comparison prevents the false assumption that every global extremum must occur where f'=0.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "every-critical-point-extremum",
      mistake: "Treating every critical point as a maximum or minimum.",
      why: [{ type: "paragraph", children: [{ text: "A critical point is only a candidate; f'(c)=0 at an interior point is necessary for a differentiable local extremum, not sufficient." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the candidate with a derivative sign change, a valid second-derivative test, or endpoint comparison before calling it an extremum." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "ignoring-interval-endpoints",
      mistake: "Ignoring domain boundaries or interval endpoints.",
      why: [{ type: "paragraph", children: [{ text: "Global extrema on a closed interval can occur at an endpoint, not only at an interior critical point." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always compare interior candidates with both endpoint values on a closed interval." }] }],
      errorType: "execution-error",
    },
    {
      id: "second-derivative-zero-conclusive",
      mistake: "Using the second derivative test when f''(c)=0 and calling the result conclusive.",
      why: [{ type: "paragraph", children: [{ text: "The second-derivative test is inconclusive when f''(c)=0; it does not identify a maximum or minimum in that case." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Switch to a first-derivative sign chart or another valid argument when f''(c)=0." }] }],
      errorType: "decision-error",
    },
    {
      id: "tangent-nondifferentiable-point",
      mistake: "Using the tangent formula at a nondifferentiable point.",
      why: [{ type: "paragraph", children: [{ text: "The tangent line y-f(a)=f'(a)(x-a) requires a finite derivative at a." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm f is differentiable at a before writing the tangent line." }] }],
      errorType: "execution-error",
    },
    {
      id: "normal-slope-zero-division",
      mistake: "Dividing the normal slope by f'(a)=0.",
      why: [{ type: "paragraph", children: [{ text: "The normal slope -1/f'(a) requires a nonzero finite f'(a); at f'(a)=0 the normal is the vertical line x=a instead." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check f'(a) before using the normal-slope formula, and use the vertical-line case when f'(a)=0." }] }],
      errorType: "execution-error",
    },
    {
      id: "rolle-lmvt-hypotheses-skipped",
      mistake: "Applying Rolle's theorem or Lagrange's mean value theorem without checking continuity/differentiability hypotheses.",
      why: [{ type: "paragraph", children: [{ text: "Both theorems require continuity on [a,b] and differentiability on (a,b), and Rolle's theorem additionally requires f(a)=f(b)." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check every stated hypothesis before using the theorem's conclusion." }] }],
      errorType: "decision-error",
    },
    {
      id: "advanced-bullets-as-main",
      mistake: "Presenting tangent/normal or Rolle's/Lagrange's theorems as explicit Main Unit 7 bullets.",
      why: [{ type: "paragraph", children: [{ text: "These topics are explicitly named in JEE Advanced 2026, not separately named in the current Main Unit 7 wording." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Label tangent/normal and the mean value theorems as Advanced-explicit rather than as Main scope." }] }],
      errorType: "recall-gap",
    },
    {
      id: "approximation-unsupported-scope",
      mistake: "Presenting approximation as explicit 2026 scope without source support.",
      why: [{ type: "paragraph", children: [{ text: "Approximation is not separately named in either the Main 2026 or the Advanced 2026 wording reviewed here." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Do not assert approximation as an explicit current-scope bullet without a verified source." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "prerequisite",
      description: "Reliable differentiation is required before selecting rate, monotonicity or extremum methods.",
    },
    {
      label: "Limits and Continuity",
      url: "/jee/mathematics/limits-continuity",
      relation: "prerequisite",
      description: "Rolle's theorem and Lagrange's mean value theorem require continuity and differentiability hypotheses.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "related",
      description: "Lateral overview connecting limits, continuity, differentiation and integration.",
    },
    {
      label: "Integration",
      url: "/jee/mathematics/integration",
      relation: "forward",
      description: "Reverses the differentiation process used throughout this chapter.",
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
      label: "Maths Syllabus",
      url: "/jee/syllabus/mathematics",
      relation: "up",
      description: "Official syllabus mapping for Mathematics.",
    },
  ],

  faqs: [
    {
      question: "Is every critical point a maximum or a minimum?",
      answer: [
        { type: "paragraph", children: [{ text: "No. A critical point is only a candidate. It must be confirmed with a derivative sign change, a valid second-derivative test, endpoint comparison, or another appropriate argument." }] },
      ],
    },
    {
      question: "When is the second-derivative test inconclusive?",
      answer: [
        { type: "paragraph", children: [{ text: "When f'(c)=0 and f''(c)=0, the standard second-derivative test gives no conclusion, and another method such as a first-derivative sign chart is required." }] },
      ],
    },
    {
      question: "Are tangent and normal formulas explicit JEE Main 2026 scope?",
      answer: [
        { type: "paragraph", children: [{ text: "Tangents and normals are not separately named in the current Main Unit 7 wording. They are explicitly included in JEE Advanced 2026." }] },
      ],
    },
    {
      question: "What conditions does Rolle's theorem require?",
      answer: [
        { type: "paragraph", children: [{ text: "f continuous on [a,b], differentiable on (a,b), f(a)=f(b), and a<b. Under these conditions some c in (a,b) has f'(c)=0." }] },
      ],
    },
    {
      question: "How are global extrema found on a closed interval?",
      answer: [
        { type: "paragraph", children: [{ text: "Find interior critical candidates from the derivative, then compare their function values with the values at both endpoints of the closed interval." }] },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-math-exemplar-11-limits"],
  sourceNote:
    "Rate-of-change, monotonicity, maxima/minima, tangent/normal, Rolle's theorem and Lagrange's mean value theorem conditions must be checked against source before publication. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Calculus/Mathematical Analysis educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: derivative-based rate, monotonicity and extremum tests, tangent/normal conditions, Rolle's theorem and Lagrange's mean value theorem hypotheses. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics.",
    "Review scope: rate of change, monotonicity, maxima/minima, tangent/normal conditions, Rolle's and Lagrange's theorem hypotheses, links, metadata, and schema-content match.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Application of Derivatives for JEE 2026: Extrema and Monotonicity",
    description:
      "Learn rates, increasing/decreasing tests, maxima/minima, Advanced tangent/normal and mean-value theorem conditions for JEE.",
    ogTitle: "Application of Derivatives for JEE 2026",
    ogDescription: "Rate of change, monotonicity, maxima/minima tests, Advanced-explicit tangent/normal, Rolle's theorem and Lagrange's mean value theorem.",
    ogType: "article",
  },
};

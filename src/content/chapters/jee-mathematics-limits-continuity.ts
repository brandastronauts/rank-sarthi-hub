import type { ChapterContent } from "@/content/types";

/**
 * Limits and Continuity — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Main 2026 Unit 7 explicitly includes limits and continuity, but does not
 *   name L'Hospital rule or the intermediate value property. Advanced 2026
 *   explicitly includes limit/continuity algebra, L'Hospital rule, continuity
 *   of composites and the intermediate value property. This boundary is kept
 *   explicit and never flattened into generic "Main and Advanced" wording.
 */
export const jeeMathematicsLimitsContinuity: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Limits and Continuity",
  slug: "limits-continuity",
  url: "/jee/mathematics/limits-continuity",
  canonicalIntent:
    "Understand one-sided and two-sided limits, resolve indeterminate forms with valid methods, and test continuity by distinguishing the function value from the value approached near the point.",

  heroChips: [
    "Main 2026: limits and continuity are explicit",
    "Advanced 2026 adds L'Hospital rule and the intermediate value property",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A limit describes what f(x) approaches as x approaches a point; it does not require f(a) to equal that value or even to be defined.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A two-sided real limit exists only when the left-hand and right-hand limits exist and are equal. A function is continuous at a when f(a) is defined and lim[x->a]f(x)=f(a).",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "JEE Main 2026 Unit 7 explicitly includes limits and continuity, but does not explicitly name L'Hospital rule or the intermediate value property. Both are explicit in JEE Advanced 2026. Keep this boundary separate; do not present Advanced-only tools as Main scope.",
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
      description: "Domain and graph reading are needed before evaluating limits and continuity.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Radian-based trigonometric functions underlie the standard trig limits.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Limits and Continuity",
    topics: [
      "One-sided and two-sided limits",
      "Limit algebra for sums, differences, products and quotients",
      "Standard trigonometric, exponential and logarithmic limits",
      "Continuity at a point",
      "L'Hospital rule (Advanced explicit)",
      "Intermediate value property (Advanced explicit)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "function-value-vs-limit",
      title: "1. Separate the function value from the limit",
      keyIdea: "A limit does not require f(a) to equal that value or even to be defined.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A limit describes what f(x) approaches as x approaches a point. It does not require f(a) to equal that value or even to be defined at all.",
            },
          ],
        },
      ],
    },
    {
      id: "two-sided-existence",
      title: "2. Check two-sided existence before computing",
      keyIdea: "A two-sided real limit exists only when the left-hand and right-hand limits exist and are equal.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For piecewise or absolute-value functions especially, check the left-hand limit and right-hand limit separately before claiming the two-sided limit exists.",
            },
          ],
        },
      ],
    },
    {
      id: "substitution-diagnostic",
      title: "3. Use direct substitution only as a diagnostic",
      keyIdea: "Substitution finishes the limit only in a continuous algebraic context; an indeterminate form requires transformation first.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Try substitution first. If it produces an ordinary finite value in a continuous algebraic context, that may finish the limit. If it produces 0/0, infinity/infinity or another indeterminate form, transform the expression before computing.",
            },
          ],
        },
      ],
    },
    {
      id: "continuity-three-value",
      title: "4. Test continuity with three separate values",
      keyIdea: "Continuity at a requires f(a) defined and lim[x->a]f(x)=f(a).",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Continuity is established by checking the function value, the left-hand limit and the right-hand limit as three separate quantities and confirming all three agree.",
            },
          ],
        },
      ],
    },
    {
      id: "lhospital-conditions",
      title: "5. Verify L'Hospital hypotheses before applying it (Advanced)",
      keyIdea: "L'Hospital rule applies only to an eligible 0/0 or infinity/infinity limit under its stated hypotheses.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "L'Hospital rule replaces f/g by f'/g' for a valid 0/0 or infinity/infinity limit, provided the functions are differentiable on an appropriate deleted neighbourhood, the denominator derivative is nonzero there where required, the original form is eligible, and the derivative quotient has a limit under the theorem conditions. It is not an explicit JEE Main 2026 bullet.",
            },
          ],
        },
      ],
    },
    {
      id: "intermediate-value-property",
      title: "6. Apply the intermediate value property only on continuous closed intervals (Advanced)",
      keyIdea: "If f is continuous on [a,b] and N lies between f(a) and f(b), some c in [a,b] satisfies f(c)=N.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The intermediate value property requires real continuity on a closed interval. It is explicit in JEE Advanced 2026 and is not usable for discontinuous functions.",
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
          "One-sided and two-sided limits, indeterminate-form resolution, and continuity tests that separate the function value from the value approached near a point.",
        ],
        [
          "What is the central method choice?",
          "Domain, then a direct-substitution diagnostic, then a one-sided/existence check, then transform an indeterminate form, then compute, then compare with the function value.",
        ],
        [
          "Where do most mistakes begin?",
          "Calling 0/0 the value of a limit, assuming the limit equals f(a), and using L'Hospital rule as though it were explicit JEE Main 2026 scope.",
        ],
        [
          "What should come before this chapter?",
          "Functions, domain and graphs, and trigonometric functions in radians.",
        ],
        [
          "What comes after it?",
          "Differentiation builds directly on the limit definition of the derivative.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Limits and Continuity",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Limits and continuity",
          "Explicitly included in Unit 7.",
          "Explicitly includes limit and continuity algebra for sums, differences, products and quotients.",
          "Both authorities require reliable one-sided and two-sided limit reasoning.",
        ],
        [
          "L'Hospital rule",
          "Not explicitly named.",
          "Explicitly included.",
          "Treat as an Advanced-explicit tool; verify hypotheses before use.",
        ],
        [
          "Intermediate value property",
          "Not explicitly named.",
          "Explicitly included for continuous functions on closed intervals.",
          "Do not present as explicit Main 2026 scope.",
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
        ["Left-hand limit", "Value approached as x->a through values less than a."],
        ["Right-hand limit", "Value approached as x->a through values greater than a."],
        ["Two-sided limit", "Common value when left and right limits agree."],
        ["Function value", "Actual defined value f(a)."],
        ["Indeterminate form", "A form such as 0/0 that does not determine the limit by itself."],
        ["Continuity at a", "f(a) defined and limit exists with lim[x->a]f(x)=f(a)."],
        ["Removable discontinuity", "Limit exists but the function value is missing or differs from the limit."],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      intro: "Match the limit or continuity signal to the correct first method.",
      columns: ["Signal", "First method", "Required check"],
      rows: [
        ["Substitution gives ordinary finite value", "Finish if the function is continuous there", "Continuity at that point"],
        ["0/0 rational algebra", "Factor/cancel for the punctured expression, then limit", "Cancellation valid only away from the cancelled zero"],
        ["Radicals", "Rationalise when conjugates expose cancellation", "Domain of the radical"],
        ["Trig near zero", "Standard radian limits and identities", "Radian mode, not degrees"],
        ["Piecewise function", "Left/right limits", "Both sides computed separately"],
        ["Advanced eligible 0/0 or infinity/infinity", "L'Hospital only after condition check", "Differentiability and denominator-derivative conditions"],
        ["Continuity parameter", "Set LHL, RHL and function value equal", "All three values compared"],
      ],
    },
    {
      id: "formula-theorem-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records with conditions",
      columns: ["Record", "Statement", "Conditions", "Common trap"],
      rows: [
        ["Two-sided existence", "lim[x->a]f(x)=L iff LHL=RHL=L", "Both one-sided limits in the real sense exist", "Checking only one side"],
        ["Sum law", "lim(f+g)=limf+limg", "Both component limits exist", "Applying when a component has no relevant limit"],
        ["Product law", "lim(fg)=(limf)(limg)", "Component limits exist", "Treating 0·infinity as determined"],
        ["Quotient law", "lim(f/g)=limf/limg", "Component limits exist and limg≠0", "Dividing by limiting zero"],
        ["Core trig limit", "lim[x->0] sinx/x=1", "x in radians", "Using degrees"],
        ["Tangent limit", "lim[x->0] tanx/x=1", "radians; tan defined near 0", "Ignoring cosine denominator"],
        ["Cosine limit", "lim[x->0](1-cosx)/x²=1/2", "radians", "Memorising wrong factor"],
        ["Exponential limit", "lim[x->0](e^x-1)/x=1", "real x", "Replacing e with arbitrary base without factor"],
        ["Logarithmic limit", "lim[x->0] ln(1+x)/x=1", "approach inside 1+x>0", "Ignoring log domain"],
        ["Continuity criterion", "LHL=RHL=f(a)", "f defined at a", "Equating limit existence with continuity"],
        ["Advanced L'Hospital", "Replace f/g by f'/g' for a valid 0/0 or infinity/infinity limit", "Functions differentiable on an appropriate deleted neighbourhood; denominator derivative nonzero there where required; original form eligible; derivative quotient has a limit under the theorem conditions", "Applying to 0·infinity, infinity-infinity or ordinary finite ratios without transformation"],
        ["Advanced intermediate value property", "If f is continuous on [a,b] and N lies between f(a) and f(b), then some c in [a,b] satisfies f(c)=N", "Real continuity on closed interval", "Using for discontinuous functions"],
      ],
      note: "Advanced records are explicit JEE Advanced 2026 scope, not JEE Main 2026 scope.",
    },
  ],

  sections: [
    {
      id: "worked-continuity-parameter",
      slot: "concepts",
      heading: "Worked reasoning: solving for a continuity parameter",
      jump: true,
      concepts: [
        {
          id: "continuity-parameter-example",
          title: "Factor before taking the limit, then match the function value",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Let f(x)=(x²-1)/(x-1) for x≠1, and f(1)=k. Find k for continuity at x=1.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Direct substitution into the fraction gives 0/0, so it is indeterminate. Factor for x≠1: (x²-1)/(x-1)=(x-1)(x+1)/(x-1)=x+1. Therefore lim[x->1]f(x)=2.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Continuity requires f(1)=2, so k=2. Validity check: LHL=RHL=2 and the repaired function value is also 2.",
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
      id: "zero-over-zero-as-value",
      mistake: "Calling 0/0 the value of a limit.",
      why: [{ type: "paragraph", children: [{ text: "0/0 is an indeterminate form, not a computed value; it signals that transformation is required." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Transform the expression by factoring, rationalising or another valid method before computing the limit." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "limit-equals-function-value",
      mistake: "Assuming the limit equals f(a).",
      why: [{ type: "paragraph", children: [{ text: "A limit does not require f(a) to equal that value or even to be defined." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check f(a), the left-hand limit and the right-hand limit as three separate quantities." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "cancellation-domain-error",
      mistake: "Cancelling a factor without remembering that cancellation is valid only away from the cancelled zero.",
      why: [{ type: "paragraph", children: [{ text: "The simplified expression and the original expression differ exactly at the cancelled point." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Cancel only for the punctured expression, then take the limit of the simplified form." }] }],
      errorType: "execution-error",
    },
    {
      id: "ignoring-one-sided-limits",
      mistake: "Ignoring one-sided limits for piecewise or absolute-value functions.",
      why: [{ type: "paragraph", children: [{ text: "A two-sided limit exists only when both one-sided limits exist and agree." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compute the left-hand and right-hand limits separately before claiming the two-sided limit exists." }] }],
      errorType: "decision-error",
    },
    {
      id: "degree-based-trig-limits",
      mistake: "Using degree-based reasoning for standard trigonometric small-angle limits.",
      why: [{ type: "paragraph", children: [{ text: "The standard trig limits such as lim[x->0] sinx/x=1 require x in radians." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the angle is in radians before applying a standard trig limit." }] }],
      errorType: "execution-error",
    },
    {
      id: "lhospital-as-main-scope",
      mistake: "Using L'Hospital rule in Main preparation as though it were an explicit Main 2026 bullet.",
      why: [{ type: "paragraph", children: [{ text: "L'Hospital rule is explicit in JEE Advanced 2026 but is not explicitly named in JEE Main 2026 Unit 7." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official-syllabus mapping table on this page before treating L'Hospital as Main-scope." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "lhospital-noneligible-form",
      mistake: "Using L'Hospital rule on a noneligible form without transformation.",
      why: [{ type: "paragraph", children: [{ text: "L'Hospital rule applies to an eligible 0/0 or infinity/infinity limit under its stated hypotheses, not to 0·infinity or infinity-infinity directly." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the indeterminate form and every hypothesis before applying L'Hospital rule." }] }],
      errorType: "decision-error",
    },
    {
      id: "continuity-implies-differentiability",
      mistake: "Assuming continuity implies differentiability.",
      why: [{ type: "paragraph", children: [{ text: "Continuity and differentiability are separate properties; continuity does not by itself guarantee differentiability." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the derivative definition separately before claiming differentiability from continuity alone." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "Domain and graph reading are needed before evaluating limits and continuity.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Radian-based trigonometric functions underlie the standard trig limits.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "related",
      description: "Lateral overview connecting limits, continuity, differentiation and integration.",
    },
    {
      label: "Differentiation",
      url: "/jee/mathematics/differentiation",
      relation: "forward",
      description: "The derivative is defined as a limit of a difference quotient.",
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
      question: "What does 0/0 mean in a limit?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "It is an indeterminate form that does not determine the limit by itself; the expression must be transformed, for example by factoring or rationalising, before the limit can be computed." }],
        },
      ],
    },
    {
      question: "When does a two-sided limit exist?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Only when the left-hand limit and the right-hand limit both exist and are equal." }],
        },
      ],
    },
    {
      question: "What three conditions define continuity at a point?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "f(a) must be defined, the limit as x approaches a must exist, and that limit must equal f(a)." }],
        },
      ],
    },
    {
      question: "Is L'Hospital rule explicit in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. JEE Main 2026 Unit 7 does not explicitly name L'Hospital rule. It is explicit in JEE Advanced 2026." }],
        },
      ],
    },
    {
      question: "When can L'Hospital rule be used in Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Only for an eligible 0/0 or infinity/infinity limit, after verifying differentiability on an appropriate deleted neighbourhood and the other stated hypotheses." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-math-exemplar-11-limits"],
  sourceNote:
    "Radian-based trig limits, quotient denominator conditions, one-sided existence and L'Hospital hypotheses must be checked against source before publication. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Calculus/Mathematical Analysis educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: standard limits, radian conditions, quotient denominators, one-sided existence, continuity, L'Hospital hypotheses, intermediate value property statement and official scope labels. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics.",
    "Review scope: standard limits, radian conditions, quotient denominators, one-sided existence, continuity, L'Hospital hypotheses, IVP statement, links, metadata, and schema-content match.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Limits and Continuity for JEE 2026: Methods and Conditions",
    description:
      "Learn one-sided limits, indeterminate forms, standard limits, continuity tests and Advanced L'Hospital conditions without confusing limits with function values.",
    ogTitle: "Limits and Continuity for JEE 2026",
    ogDescription: "Existence conditions, standard limits, continuity tests and Main vs Advanced scope for L'Hospital rule and the intermediate value property.",
    ogType: "article",
  },
};

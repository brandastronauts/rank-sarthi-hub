import type { ChapterContent } from "@/content/types";

/**
 * Differentiation — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Main 2026 Unit 7 explicitly includes differentiability, standard rules,
 *   and composite/implicit differentiation up to order two. Advanced 2026
 *   explicitly includes chain rule, standard derivatives, implicit
 *   derivatives up to order two, and geometric interpretation. Logarithmic
 *   differentiation is a supporting technique, not a named syllabus bullet,
 *   and is labelled as such.
 */
export const jeeMathematicsDifferentiation: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Differentiation",
  slug: "differentiation",
  url: "/jee/mathematics/differentiation",
  canonicalIntent:
    "Understand the derivative as a limit-defined local rate, differentiate standard and composite functions with correct domains, and distinguish differentiability from continuity.",

  heroChips: [
    "Main 2026 and Advanced 2026 both include standard derivative rules",
    "Every standard derivative carries its domain condition",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "The derivative measures local change and is defined by a limit of difference quotients when that limit exists.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Rules such as product, quotient and chain rule are valid only where the component functions and required denominators are defined and differentiable. Differentiability at a point implies continuity there, but continuity does not by itself imply differentiability.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Logarithmic differentiation is a useful supporting technique but is not separately named as a 2026 Main or Advanced syllabus bullet. If used, real logarithm conditions must be preserved.",
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
      label: "Limits and Continuity",
      url: "/jee/mathematics/limits-continuity",
      relation: "prerequisite",
      description: "The derivative is defined as a limit of a difference quotient.",
    },
    {
      label: "Inverse Trigonometry",
      url: "/jee/mathematics/inverse-trigonometry",
      relation: "prerequisite",
      description: "Inverse trig derivative domains build on inverse trig branch and domain rules.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Differentiation",
    topics: [
      "Derivative definition as a limit",
      "Sum, difference, product and quotient rules",
      "Chain rule",
      "Standard trigonometric, inverse-trigonometric, exponential and logarithmic derivatives",
      "Implicit differentiation up to order two",
      "Differentiability versus continuity",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "derivative-definition",
      title: "1. Start from the limit definition",
      keyIdea: "f'(a) is the limit of a difference quotient when that limit exists.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The derivative at a is f'(a)=lim[h->0](f(a+h)-f(a))/h if the finite real limit exists in the standard interior-point setting.",
            },
          ],
        },
      ],
    },
    {
      id: "structure-detection",
      title: "2. Detect the function's structure before choosing a rule",
      keyIdea: "Identify sum, product, quotient or composition structure, then apply the smallest valid rule set.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Identify the function's real domain first, then detect sum, product, quotient or composition structure, and apply the smallest valid rule set.",
            },
          ],
        },
      ],
    },
    {
      id: "quotient-denominator",
      title: "3. Require the denominator to be nonzero",
      keyIdea: "The quotient rule requires the denominator function to be nonzero at the differentiation point.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For a quotient, the denominator must be nonzero at the point of differentiation. Applying the quotient rule where the denominator is zero produces an invalid result.",
            },
          ],
        },
      ],
    },
    {
      id: "domain-branch-check",
      title: "4. Enforce inverse-trig and log domains before differentiating",
      keyIdea: "Inverse-trig and log functions each carry their own domain, which must hold before their derivative is used.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For inverse-trig and log functions, enforce their domains before differentiating, since the resulting derivative expression is valid only within that domain.",
            },
          ],
        },
      ],
    },
    {
      id: "implicit-differentiation",
      title: "5. Treat y as a function of x for implicit relations",
      keyIdea: "In an implicit relation F(x,y)=0, differentiate both sides and attach dy/dx to every y-derivative.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For implicit differentiation, treat y as a function of x and attach dy/dx when differentiating any term containing y.",
            },
          ],
        },
      ],
    },
    {
      id: "differentiability-vs-continuity",
      title: "6. Keep differentiability and continuity as separate properties",
      keyIdea: "Differentiability implies continuity, but continuity does not imply differentiability.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "If f is differentiable at a, f is continuous at a in the standard real-variable setting. The converse is false; |x| at 0 is a standard counterexample.",
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
          "The derivative as a limit-defined local rate, standard and composite differentiation rules, their domains, and the differentiability-continuity relationship.",
        ],
        [
          "What is the central method choice?",
          "Identify the function's domain and structure, apply the smallest valid rule set, and check denominator and domain conditions before executing.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating continuity and differentiability as equivalent, omitting the chain-rule inner derivative, and forgetting inverse-trig derivative domains.",
        ],
        [
          "What should come before this chapter?",
          "Limits and Continuity, and Inverse Trigonometry for branch and domain rules.",
        ],
        [
          "What comes after it?",
          "Application of Derivatives uses differentiation results for monotonicity, extrema and rates; Integration reverses the differentiation process.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Differentiation",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Differentiability and standard rules",
          "Explicitly includes differentiability; sum, difference, product and quotient rules.",
          "Explicitly includes derivatives of sums, differences, products and quotients.",
          "Both authorities require the same structural rules with their conditions.",
        ],
        [
          "Standard function derivatives",
          "Explicitly includes trigonometric, inverse trigonometric, logarithmic, exponential, composite and implicit differentiation up to order two.",
          "Explicitly includes polynomial, rational, trigonometric, inverse-trigonometric, exponential and logarithmic derivatives, and implicit derivatives up to order two.",
          "Learn each standard derivative with its exact domain condition.",
        ],
        [
          "Logarithmic differentiation",
          "Not separately named as a syllabus bullet.",
          "Not separately named as a syllabus bullet.",
          "Treat as supporting mathematics, not an explicit official inclusion.",
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
        ["Derivative at a", "f'(a)=lim[h->0](f(a+h)-f(a))/h if the finite real limit exists in the standard interior-point setting."],
        ["Differentiable", "Derivative exists at the point or throughout the stated interval."],
        ["First derivative", "Local rate/slope function f'."],
        ["Second derivative", "Derivative of f' where it exists."],
        ["Composite function", "f(g(x)); differentiated by chain rule."],
        ["Implicit relation", "Relation F(x,y)=0 where y is not necessarily isolated before differentiation."],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      intro: "Match the function structure to the correct differentiation rule.",
      columns: ["Signal", "First method", "Required check"],
      rows: [
        ["Sum/product/quotient", "Structural rule", "Component differentiability and nonzero denominator"],
        ["Nested function", "Chain rule, outside first then inside", "Every layer differentiated"],
        ["Implicit relation", "Differentiate both sides with y=y(x)", "dy/dx attached to every y-term"],
        ["Inverse trig", "Branch/domain check then standard derivative", "Domain of the inverse-trig function"],
        ["Cusp/absolute value/piecewise", "Left and right derivatives or definition", "One-sided derivatives compared"],
        ["Second derivative", "Differentiate first derivative only where it remains differentiable", "First derivative differentiability"],
      ],
    },
    {
      id: "formula-theorem-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records with conditions",
      columns: ["Record", "Expression", "Conditions"],
      rows: [
        ["Definition", "f'(x)=lim[h->0](f(x+h)-f(x))/h", "Limit exists; x is a valid local domain point"],
        ["Sum/difference", "(f±g)'=f'±g'", "f,g differentiable"],
        ["Product", "(fg)'=f'g+fg'", "f,g differentiable"],
        ["Quotient", "(f/g)'=(f'g-fg')/g²", "f,g differentiable and g≠0"],
        ["Chain rule", "(f∘g)'(x)=f'(g(x))g'(x)", "g differentiable at x; f differentiable at g(x)"],
        ["Polynomial power", "d(x^n)/dx=nx^(n-1)", "n nonnegative integer for all real x"],
        ["Sine", "(sinx)'=cosx", "x in radians"],
        ["Cosine", "(cosx)'=-sinx", "radians"],
        ["Tangent", "(tanx)'=sec²x", "cosx≠0"],
        ["Cotangent", "(cotx)'=-csc²x", "sinx≠0"],
        ["Exponential", "(e^x)'=e^x", "all real x"],
        ["General positive-base exponential", "(a^x)'=a^x ln a", "a>0"],
        ["Natural log", "(lnx)'=1/x", "x>0"],
        ["Base-a logarithm", "(log_a x)'=1/(x ln a)", "x>0, a>0, a≠1"],
        ["Inverse sine", "(sin⁻¹x)'=1/√(1-x²)", "|x|<1 for finite real derivative"],
        ["Inverse cosine", "(cos⁻¹x)'=-1/√(1-x²)", "|x|<1"],
        ["Inverse tangent", "(tan⁻¹x)'=1/(1+x²)", "all real x"],
        ["Inverse cotangent", "(cot⁻¹x)'=-1/(1+x²)", "all real x under the stated NCERT principal branch"],
        ["Inverse secant", "(sec⁻¹x)'=1/(|x|√(x²-1))", "|x|>1"],
        ["Inverse cosecant", "(csc⁻¹x)'=-1/(|x|√(x²-1))", "|x|>1"],
        ["Differentiability implies continuity", "If f is differentiable at a, f is continuous at a", "Standard real-variable setting"],
        ["Converse warning", "Continuity does not imply differentiability", "Counterexample |x| at 0"],
      ],
      note: "Logarithmic differentiation is a supporting technique, not a separately named 2026 Main or Advanced syllabus bullet; a valid ln|y| formulation for nonzero y preserves real logarithm conditions.",
    },
  ],

  sections: [
    {
      id: "worked-absolute-value-cusp",
      slot: "concepts",
      heading: "Worked reasoning: continuity without differentiability",
      jump: true,
      concepts: [
        {
          id: "absolute-value-example",
          title: "One-sided difference quotients disagree at a cusp",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Consider f(x)=|x| at x=0. f(0)=0, and |x| is continuous at 0. Is it differentiable at 0?",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "For h>0: (|h|-0)/h=1. For h<0: (|h|-0)/h=-1. Left and right derivative limits are different, so f'(0) does not exist.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "This is a direct counterexample to the false statement that continuity implies differentiability.",
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
      id: "continuity-differentiability-equivalence",
      mistake: "Treating continuity and differentiability as equivalent.",
      why: [{ type: "paragraph", children: [{ text: "Differentiability implies continuity, but continuity does not imply differentiability; |x| at 0 is a standard counterexample." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the derivative definition directly at a cusp or piecewise-join point instead of assuming continuity is enough." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "chain-rule-inner-omission",
      mistake: "Omitting the chain-rule inner derivative.",
      why: [{ type: "paragraph", children: [{ text: "The chain rule requires multiplying by the derivative of the inner function, not just the outer derivative." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Differentiate the outer function first, then multiply by the derivative of the inner function." }] }],
      errorType: "execution-error",
    },
    {
      id: "quotient-rule-zero-denominator",
      mistake: "Using the quotient rule where the denominator is zero.",
      why: [{ type: "paragraph", children: [{ text: "The quotient rule requires g≠0 at the point of differentiation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the denominator function's value before applying the quotient rule." }] }],
      errorType: "execution-error",
    },
    {
      id: "inverse-trig-domain-forgotten",
      mistake: "Forgetting inverse-trig derivative domains.",
      why: [{ type: "paragraph", children: [{ text: "Each inverse-trig derivative expression, such as 1/√(1-x²), is valid only within its stated domain." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the domain condition for the specific inverse-trig derivative before using the formula." }] }],
      errorType: "recall-gap",
    },
    {
      id: "trig-degree-error",
      mistake: "Forgetting radians in trig derivative derivations or formulas.",
      why: [{ type: "paragraph", children: [{ text: "The standard trig derivatives such as (sinx)'=cosx assume x is in radians." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the angle variable is in radians before applying a standard trig derivative." }] }],
      errorType: "execution-error",
    },
    {
      id: "implicit-y-treated-as-constant",
      mistake: "Treating an implicit y term as constant.",
      why: [{ type: "paragraph", children: [{ text: "In an implicit relation, y is a function of x, so any term containing y needs dy/dx when differentiated." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Attach dy/dx to every derivative of a y-term when differentiating implicitly." }] }],
      errorType: "decision-error",
    },
    {
      id: "cusp-without-one-sided-check",
      mistake: "Differentiating through a cusp without checking one-sided derivatives.",
      why: [{ type: "paragraph", children: [{ text: "A symbolic rule can hide a point where the left and right derivatives disagree." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the derivative definition and compare one-sided derivatives at a suspected cusp or piecewise join." }] }],
      errorType: "decision-error",
    },
    {
      id: "log-differentiation-invalid-interval",
      mistake: "Using logarithmic differentiation without a valid real log interval.",
      why: [{ type: "paragraph", children: [{ text: "Logarithmic differentiation requires the logged expression to be positive, or a valid ln|y| formulation for nonzero y." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the real logarithm condition holds on the working interval before using logarithmic differentiation." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Limits and Continuity",
      url: "/jee/mathematics/limits-continuity",
      relation: "prerequisite",
      description: "The derivative is defined as a limit of a difference quotient.",
    },
    {
      label: "Inverse Trigonometry",
      url: "/jee/mathematics/inverse-trigonometry",
      relation: "prerequisite",
      description: "Inverse trig derivative domains build on inverse trig branch and domain rules.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "related",
      description: "Lateral overview connecting limits, continuity, differentiation and integration.",
    },
    {
      label: "Application of Derivatives",
      url: "/jee/mathematics/application-of-derivatives",
      relation: "forward",
      description: "Uses derivative rules for monotonicity, extrema, tangents/normals and rates.",
    },
    {
      label: "Integration",
      url: "/jee/mathematics/integration",
      relation: "forward",
      description: "Reverses the differentiation process to find antiderivatives.",
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
      question: "What is the derivative definition?",
      answer: [
        { type: "paragraph", children: [{ text: "f'(a)=lim[h->0](f(a+h)-f(a))/h if the finite real limit exists in the standard interior-point setting." }] },
      ],
    },
    {
      question: "Does differentiability imply continuity?",
      answer: [
        { type: "paragraph", children: [{ text: "Yes. If f is differentiable at a, f is continuous at a in the standard real-variable setting." }] },
      ],
    },
    {
      question: "Does continuity imply differentiability?",
      answer: [
        { type: "paragraph", children: [{ text: "No. |x| at x=0 is continuous but not differentiable, since the one-sided derivatives disagree." }] },
      ],
    },
    {
      question: "When is the quotient rule valid?",
      answer: [
        { type: "paragraph", children: [{ text: "When both functions are differentiable and the denominator function is nonzero at the point of differentiation." }] },
      ],
    },
    {
      question: "What is the domain of the derivative of inverse sine?",
      answer: [
        { type: "paragraph", children: [{ text: "(sin⁻¹x)'=1/√(1-x²), valid for |x|<1 for a finite real derivative." }] },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-math-exemplar-11-limits", "ncert-math-exemplar-12-inverse-trig"],
  sourceNote:
    "Standard derivative domains, chain/quotient conditions, inverse-trig derivatives, the differentiability-continuity implication and implicit differentiation must be checked against source before publication. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Calculus/Mathematical Analysis educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: derivative definition, all standard derivative domains, chain/quotient conditions, inverse-trig derivatives, differentiability-continuity implication and implicit differentiation. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics.",
    "Review scope: derivative definition, all standard derivative domains, chain/quotient conditions, inverse-trig derivatives, differentiability-continuity implication, implicit differentiation, links, metadata, and schema-content match.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Differentiation for JEE 2026: Rules, Chain Rule and Domains",
    description:
      "Learn derivative definition, standard derivatives, product and quotient rules, chain rule, implicit differentiation and differentiability conditions for JEE.",
    ogTitle: "Differentiation for JEE 2026",
    ogDescription: "Derivative definition, standard rules with domains, chain rule, implicit differentiation, and the differentiability-continuity relationship.",
    ogType: "article",
  },
};

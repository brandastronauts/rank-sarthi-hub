import type { ChapterContent } from "@/content/types";

/**
 * Ellipse — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, frequency, expected-question or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until Mathematics SME review is recorded.
 * - Main 2026 scope is focused standard-form only; explicit foci,
 *   directrices, eccentricity, parametric equations, tangent and normal
 *   detail is Advanced-supported. This split is kept explicit throughout.
 */
export const jeeMathematicsEllipse: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Ellipse",
  slug: "ellipse",
  url: "/jee/mathematics/ellipse",
  canonicalIntent:
    "Interpret a nondegenerate ellipse, distinguish horizontal and vertical major-axis forms, calculate foci and eccentricity, and use directrix, latus rectum, parametric, tangent and normal results under correct orientation and parameter conditions.",

  heroChips: [
    "Main 2026: standard-form ellipse only",
    "Advanced 2026: foci, directrices, eccentricity, parametric, tangent/normal",
    "No invented weightage, frequency or PYQ-count claims",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For x\u00b2/a\u00b2+y\u00b2/b\u00b2=1 with a>b>0, the semi-major axis is a along x, the semi-minor axis is b, c\u00b2=a\u00b2-b\u00b2, foci are (\u00b1c,0), and e=c/a, so 0<e<1. The full major-axis length is 2a, not a.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "JEE Main 2026 explicitly includes the standard ellipse form. JEE Advanced 2026 explicitly includes standard form, foci, directrices, eccentricity, parametric equations and tangent/normal equations. Keep this scope split explicit rather than presenting Advanced-only detail as Main wording.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not publish invented weightage, expected-question counts or trend percentages.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Conic Sections",
      url: "/jee/mathematics/conic-sections",
      relation: "prerequisite",
      description: "General conic classification and eccentricity framework underlie the ellipse treatment.",
    },
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Distance and standardisation methods support the a, b, c derivation.",
    },
  ],

  syllabusMapping: {
    unit: "Coordinate Geometry / Analytical Geometry",
    topics: [
      "Standard form of an ellipse (Main and Advanced)",
      "Foci, directrices, eccentricity (Advanced)",
      "Parametric equations (Advanced)",
      "Tangent and normal equations (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "object-definitions",
      title: "1. Fix the mathematical objects before computing",
      keyIdea: "Semi-major axis, semi-minor axis, focal distance c, eccentricity, directrix and latus rectum must be located before any formula is applied.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every ellipse question starts by fixing the semi-major axis, semi-minor axis, focal distance c, eccentricity and, where required, the directrix and latus rectum, from the given standard-form equation.",
            },
          ],
        },
      ],
    },
    {
      id: "reasoning-architecture",
      title: "2. Follow the fixed reasoning path",
      keyIdea: "Standardise, identify the larger denominator, assign a and b, compute c\u00b2, then e, then method, then validate 0<e<1.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Standardise the equation, identify the larger denominator, assign a and b accordingly, compute c\u00b2, then e, then select the focal, parameter or tangent method, then validate by checking 0<e<1.",
            },
          ],
        },
      ],
    },
    {
      id: "orientation",
      title: "3. Let the larger denominator decide the major-axis direction",
      keyIdea: "The larger denominator gives the major-axis direction; the vertical-major form uses a different foci placement.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For a horizontal-major ellipse, x\u00b2/a\u00b2+y\u00b2/b\u00b2=1 with a>b>0 has foci (\u00b1c,0) and directrices x=\u00b1a/e. For a vertical-major ellipse, x\u00b2/b\u00b2+y\u00b2/a\u00b2=1 with a>b>0 has foci (0,\u00b1c) and directrices y=\u00b1a/e. The larger denominator always identifies the major-axis direction.",
            },
          ],
        },
      ],
    },
    {
      id: "semi-vs-full-axis",
      title: "4. Distinguish semi-axis from full-axis length",
      keyIdea: "a and b are semi-axis lengths; the full major and minor axis lengths are 2a and 2b.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "a is the semi-major axis, not the full major-axis length. The full major-axis length is 2a, and the full minor-axis length is 2b. Confusing a with the full axis length is a common source of error.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "focal-relation",
      expression: "c\u00b2=a\u00b2-b\u00b2",
      meaning: "Relation between semi-major axis, semi-minor axis and focal distance.",
      variables: [
        { symbol: "a", meaning: "Semi-major axis" },
        { symbol: "b", meaning: "Semi-minor axis" },
        { symbol: "c", meaning: "Focal distance" },
      ],
      useWhen: "a>b>0; result satisfies 0<c<a.",
      accessibleText: "c squared equals a squared minus b squared",
    },
    {
      id: "eccentricity",
      expression: "e=c/a",
      meaning: "Eccentricity of the ellipse.",
      variables: [
        { symbol: "c", meaning: "Focal distance" },
        { symbol: "a", meaning: "Semi-major axis" },
      ],
      useWhen: "Nondegenerate ellipse; result satisfies 0<e<1.",
      accessibleText: "e equals c over a",
    },
    {
      id: "directrices",
      expression: "x=\u00b1a/e=\u00b1a\u00b2/c",
      meaning: "Directrices for the horizontal-major standard ellipse.",
      variables: [
        { symbol: "a", meaning: "Semi-major axis" },
        { symbol: "c", meaning: "Focal distance" },
        { symbol: "e", meaning: "Eccentricity" },
      ],
      useWhen: "Advanced scope; c>0; directrices lie outside the vertices.",
      accessibleText: "x equals plus or minus a over e, equals plus or minus a squared over c",
    },
    {
      id: "latus-rectum",
      expression: "2b\u00b2/a",
      meaning: "Latus rectum length of the ellipse.",
      variables: [
        { symbol: "a", meaning: "Semi-major axis" },
        { symbol: "b", meaning: "Semi-minor axis" },
      ],
      useWhen: "Nondegenerate ellipse.",
      accessibleText: "Latus rectum length equals 2 b squared over a",
    },
    {
      id: "parametric-point",
      expression: "(a\u2009cos\u03b8, b\u2009sin\u03b8)",
      meaning: "Parametric point on the horizontal-major ellipse.",
      variables: [
        { symbol: "a", meaning: "Semi-major axis" },
        { symbol: "b", meaning: "Semi-minor axis" },
        { symbol: "\u03b8", meaning: "Parameter angle" },
      ],
      useWhen: "Advanced scope.",
      accessibleText: "Point at a cos theta, b sin theta",
    },
    {
      id: "tangent-at-point",
      expression: "xx\u2081/a\u00b2+yy\u2081/b\u00b2=1",
      meaning: "Tangent at point P(x\u2081,y\u2081) on the ellipse.",
      variables: [
        { symbol: "a", meaning: "Semi-major axis" },
        { symbol: "b", meaning: "Semi-minor axis" },
        { symbol: "x\u2081, y\u2081", meaning: "Coordinates of P on the ellipse" },
      ],
      useWhen: "Advanced scope; P must lie on the ellipse before use.",
      commonTrap: "Applying the tangent formula to a point not verified to be on the curve.",
      accessibleText: "x x sub 1 over a squared plus y y sub 1 over b squared equals 1",
    },
    {
      id: "parametric-tangent",
      expression: "x\u2009cos\u03b8/a+y\u2009sin\u03b8/b=1",
      meaning: "Tangent at the parametric point.",
      variables: [
        { symbol: "a", meaning: "Semi-major axis" },
        { symbol: "b", meaning: "Semi-minor axis" },
        { symbol: "\u03b8", meaning: "Parameter of the point of tangency" },
      ],
      useWhen: "Parametric P on the ellipse.",
      accessibleText: "x cos theta over a plus y sin theta over b equals 1",
    },
    {
      id: "parametric-normal",
      expression: "ax\u2009sin\u03b8-by\u2009cos\u03b8=(a\u00b2-b\u00b2)sin\u03b8\u2009cos\u03b8",
      meaning: "Normal at the parametric point.",
      variables: [
        { symbol: "a", meaning: "Semi-major axis" },
        { symbol: "b", meaning: "Semi-minor axis" },
        { symbol: "\u03b8", meaning: "Parameter of the point of contact" },
      ],
      useWhen: "Advanced scope; horizontal-major form.",
      commonTrap: "Not checking axis-endpoint cases separately.",
      accessibleText: "a x sin theta minus b y cos theta equals a squared minus b squared, times sin theta cos theta",
    },
  ],

  tables: [
    {
      id: "scope-mapping",
      slot: "scope",
      jump: true,
      heading: "Main 2026 versus Advanced 2026 scope for Ellipse",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Standard form",
          "Explicitly included.",
          "Explicitly included.",
        ],
        [
          "Foci, directrices, eccentricity, parametric equations, tangent and normal",
          "Not separately enumerated.",
          "Explicitly included.",
        ],
      ],
      note: "Do not present Advanced-only formula detail as explicit Main wording.",
    },
    {
      id: "method-selector",
      slot: "concepts",
      jump: true,
      heading: "Method selector",
      columns: ["Question signal", "First step", "Required check"],
      rows: [
        ["Any ellipse equation", "Standardise to =1 form", "Identify the larger denominator for major-axis direction"],
        ["Foci/eccentricity asked", "Compute c\u00b2=a\u00b2-b\u00b2", "Verify 0<c<a and 0<e<1"],
        ["Tangent/normal asked", "Verify point on curve", "Substitute point before using tangent formula"],
        ["Vertical-major form", "Swap a and b placement", "Foci at (0,\u00b1c), directrices y=\u00b1a/e"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-reasoning",
      slot: "concepts",
      heading: "Worked reasoning: x\u00b2/25+y\u00b2/9=1",
      jump: true,
      concepts: [
        {
          id: "worked-example",
          title: "Assign a and b, compute c and e, verify orientation",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "For x\u00b2/25+y\u00b2/9=1, a=5, b=3, so c\u00b2=25-9=16, c=4." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Foci are (\u00b14,0), e=4/5, directrices are x=\u00b125/4 in Advanced scope, and the major-axis length is 10." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Validation: 0<4/5<1, c<a, and the larger denominator sits under x\u00b2, confirming the horizontal-major orientation." },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "semi-vs-full-axis",
      mistake: "Treating a as the full major-axis length instead of the semi-major axis.",
      why: [{ type: "paragraph", children: [{ text: "a is a semi-axis length; the full major-axis length is 2a." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State a as semi-major axis and 2a as full major-axis length explicitly." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "hyperbola-relation-used",
      mistake: "Using the hyperbola focal relation c\u00b2=a\u00b2+b\u00b2 for an ellipse.",
      why: [{ type: "paragraph", children: [{ text: "Ellipse and hyperbola have different focal relations; the ellipse relation is c\u00b2=a\u00b2-b\u00b2." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the conic type before applying a focal relation formula." }] }],
      errorType: "recall-gap",
    },
    {
      id: "larger-denominator-misassigned",
      mistake: "Assigning the larger denominator to b instead of a.",
      why: [{ type: "paragraph", children: [{ text: "By convention a>b>0, and the larger denominator identifies the major-axis direction." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare denominators first and assign a to the larger one before proceeding." }] }],
      errorType: "decision-error",
    },
    {
      id: "eccentricity-out-of-range",
      mistake: "Computing e outside 0<e<1 for a claimed ellipse.",
      why: [{ type: "paragraph", children: [{ text: "A valid nondegenerate ellipse always has eccentricity strictly between 0 and 1." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Recheck the focal relation and denominators if computed e falls outside this range." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-orientation-foci",
      mistake: "Placing foci on the wrong axis for the given orientation.",
      why: [{ type: "paragraph", children: [{ text: "Horizontal-major and vertical-major ellipses place foci on different axes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Match orientation to the larger-denominator axis before placing foci." }] }],
      errorType: "decision-error",
    },
    {
      id: "tangent-before-check",
      mistake: "Applying the tangent formula before verifying the point lies on the ellipse.",
      why: [{ type: "paragraph", children: [{ text: "The tangent-at-point formula is valid only for points on the curve." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Substitute the point into the ellipse equation before using the tangent formula." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Conic Sections",
      url: "/jee/mathematics/conic-sections",
      relation: "prerequisite",
      description: "General conic classification and eccentricity framework.",
    },
    {
      label: "Parabola",
      url: "/jee/mathematics/parabola",
      relation: "related",
      description: "Related conic with e=1, sharing the same reasoning architecture.",
    },
    {
      label: "Hyperbola",
      url: "/jee/mathematics/hyperbola",
      relation: "related",
      description: "Related conic with e>1, sharing the same reasoning architecture.",
    },
    {
      label: "Application of Derivatives",
      url: "/jee/mathematics/application-of-derivatives",
      relation: "forward",
      description: "Differentiation-based tangent/normal cross-check builds on this chapter.",
    },
  ],

  links: [
    {
      label: "Conic Sections",
      url: "/jee/mathematics/conic-sections",
      relation: "up",
      description: "Conic umbrella chapter for orientation, eccentricity and classification.",
    },
  ],

  faqs: [
    {
      question: "Is Ellipse in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Yes, in focused standard-form scope. Main 2026 explicitly includes the standard ellipse form." }],
        },
      ],
    },
    {
      question: "Is Ellipse in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Yes. Advanced explicitly includes standard form, foci, directrices, eccentricity, parametric equations and tangent/normal equations." }],
        },
      ],
    },
    {
      question: "Why must eccentricity of an ellipse lie strictly between 0 and 1?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Because c\u00b2=a\u00b2-b\u00b2 with a>b>0 gives 0<c<a, and e=c/a, so e always lies strictly between 0 and 1 for a nondegenerate ellipse." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote:
    "Use only official Main and Advanced syllabus documents for scope claims and official archives for paper examples. Record orientation, a, b, c and validation for every worked item. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Analytic Geometry educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Analytic Geometry SME, postgraduate Mathematics or Applied Mathematics or equivalent.",
    "Review scope: axis notation, focal relation, eccentricity range, directrices, latus rectum, tangent/normal and orientation.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Ellipse for JEE 2026: Foci, Eccentricity and Tangents",
    description:
      "Learn ellipse standard forms, major/minor axes, foci, 0<e<1, directrices, latus rectum and Advanced tangent/normal parametrisation.",
    ogTitle: "Ellipse for JEE: Axes, Foci, Eccentricity and Tangents",
    ogDescription: "Ellipse orientation and parameter validator, with explicit Main versus Advanced scope.",
    ogType: "article",
  },
};

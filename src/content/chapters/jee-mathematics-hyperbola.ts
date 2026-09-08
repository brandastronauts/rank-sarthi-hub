import type { ChapterContent } from "@/content/types";

/**
 * Hyperbola — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, frequency, expected-question or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until Mathematics SME review is recorded.
 * - Main 2026 scope is focused standard-form only; explicit foci,
 *   directrices, eccentricity, parametric equations, tangent and normal
 *   detail is Advanced-supported. This split is kept explicit throughout.
 */
export const jeeMathematicsHyperbola: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Hyperbola",
  slug: "hyperbola",
  url: "/jee/mathematics/hyperbola",
  canonicalIntent:
    "Identify hyperbola orientation, use transverse/conjugate axes, foci, eccentricity and asymptotes consistently with the standard form, and apply directrix, parameter, tangent and normal methods under Advanced-supported conditions.",

  heroChips: [
    "Main 2026: standard-form hyperbola only",
    "Advanced 2026: foci, directrices, eccentricity, parametric, tangent/normal",
    "No invented weightage, frequency or PYQ-count claims",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For x\u00b2/a\u00b2-y\u00b2/b\u00b2=1 with a,b>0, the transverse axis is the x-axis, c\u00b2=a\u00b2+b\u00b2, foci are (\u00b1c,0), and e=c/a>1. Its asymptotes are y=\u00b1(b/a)x. These relations must be rebuilt when orientation changes.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "JEE Main 2026 explicitly includes the standard hyperbola form. JEE Advanced 2026 explicitly includes foci, directrices, eccentricity, parametric equations and tangent/normal equations. Keep this scope split explicit rather than presenting Advanced-only detail as Main wording.",
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
      description: "General conic classification and eccentricity framework underlie the hyperbola treatment.",
    },
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Slope and line-equation methods support asymptote and tangent/normal derivation.",
    },
  ],

  syllabusMapping: {
    unit: "Coordinate Geometry / Analytical Geometry",
    topics: [
      "Standard form of a hyperbola (Main and Advanced)",
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
      keyIdea: "Transverse axis, conjugate axis, vertex, asymptote and eccentricity must be located before any formula is applied.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every hyperbola question starts by fixing the transverse axis, conjugate axis, vertices, asymptotes and eccentricity from the given standard-form equation.",
            },
          ],
        },
      ],
    },
    {
      id: "reasoning-architecture",
      title: "2. Follow the fixed reasoning path",
      keyIdea: "Standardise, locate the positive squared term, fix the transverse axis, compute c\u00b2, then e/asymptotes, then method, then validate e>1.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Standardise the equation, locate the positive squared term, identify the transverse axis, compute c\u00b2, then e and the asymptotes, then select the parameter or tangent method, then validate by checking e>1.",
            },
          ],
        },
      ],
    },
    {
      id: "focal-relation-and-asymptotes",
      title: "3. Use the sum relation and tie asymptotes to actual orientation",
      keyIdea: "Opposite squared signs mean c\u00b2=a\u00b2+b\u00b2, unlike the ellipse; asymptotes come from the highest-degree part of the equation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Because the two squared terms carry opposite signs, the focal relation is c\u00b2=a\u00b2+b\u00b2, not the ellipse's c\u00b2=a\u00b2-b\u00b2. Asymptotes must be tied to the actual orientation of the standard form rather than copied from a memorised horizontal case.",
            },
          ],
        },
      ],
    },
    {
      id: "vertex-normal-special-case",
      title: "4. Treat the vertex normal as a separate geometric case",
      keyIdea: "At a vertex the tangent is vertical, so the normal there is found by geometry, not by the general nonvertex normal formula.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At a vertex (\u00b1a,0) the tangent is vertical, so the normal is the horizontal line y=0, found by geometry rather than the general nonvertex normal formula which requires y\u2081\u22600.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "vertices",
      expression: "(\u00b1a,0)",
      meaning: "Vertices of the horizontal-transverse hyperbola.",
      variables: [{ symbol: "a", meaning: "Semi-transverse axis" }],
      useWhen: "Horizontal transverse axis; vertices lie on the curve.",
      accessibleText: "Vertices at plus or minus a, zero",
    },
    {
      id: "focal-relation",
      expression: "c\u00b2=a\u00b2+b\u00b2",
      meaning: "Relation between semi-transverse axis, semi-conjugate axis and focal distance.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "b", meaning: "Semi-conjugate axis" },
        { symbol: "c", meaning: "Focal distance" },
      ],
      useWhen: "a,b positive; result satisfies c>a.",
      commonTrap: "Using the ellipse relation c\u00b2=a\u00b2-b\u00b2 instead.",
      accessibleText: "c squared equals a squared plus b squared",
    },
    {
      id: "eccentricity",
      expression: "e=c/a",
      meaning: "Eccentricity of the hyperbola.",
      variables: [
        { symbol: "c", meaning: "Focal distance" },
        { symbol: "a", meaning: "Semi-transverse axis" },
      ],
      useWhen: "Nondegenerate hyperbola; result satisfies e>1.",
      accessibleText: "e equals c over a",
    },
    {
      id: "directrices",
      expression: "x=\u00b1a/e=\u00b1a\u00b2/c",
      meaning: "Directrices for the horizontal-transverse standard hyperbola.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "c", meaning: "Focal distance" },
      ],
      useWhen: "Advanced scope; correct focal ratio required.",
      accessibleText: "x equals plus or minus a over e, equals plus or minus a squared over c",
    },
    {
      id: "latus-rectum",
      expression: "2b\u00b2/a",
      meaning: "Latus rectum length of the hyperbola.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "b", meaning: "Semi-conjugate axis" },
      ],
      useWhen: "Nondegenerate hyperbola.",
      accessibleText: "Latus rectum length equals 2 b squared over a",
    },
    {
      id: "asymptotes",
      expression: "y=\u00b1(b/a)x",
      meaning: "Asymptotes of the horizontal-transverse standard hyperbola.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "b", meaning: "Semi-conjugate axis" },
      ],
      useWhen: "This horizontal-transverse form; derived from the highest-degree part.",
      commonTrap: "Using the horizontal-form asymptote slope for a vertical-transverse hyperbola.",
      accessibleText: "y equals plus or minus b over a, times x",
    },
    {
      id: "parametric-point",
      expression: "(a\u2009sec\u03b8, b\u2009tan\u03b8)",
      meaning: "Parametric point on the horizontal-transverse hyperbola.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "b", meaning: "Semi-conjugate axis" },
        { symbol: "\u03b8", meaning: "Parameter angle" },
      ],
      useWhen: "Advanced scope; cos\u03b8\u22600.",
      commonTrap: "Omitting the cos\u03b8\u22600 domain restriction.",
      accessibleText: "Point at a sec theta, b tan theta",
    },
    {
      id: "tangent-at-point",
      expression: "xx\u2081/a\u00b2-yy\u2081/b\u00b2=1",
      meaning: "Tangent at point P(x\u2081,y\u2081) on the hyperbola.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "b", meaning: "Semi-conjugate axis" },
        { symbol: "x\u2081, y\u2081", meaning: "Coordinates of P on the hyperbola" },
      ],
      useWhen: "Advanced scope; P must lie on the curve before use.",
      accessibleText: "x x sub 1 over a squared minus y y sub 1 over b squared equals 1",
    },
    {
      id: "parametric-tangent",
      expression: "x\u2009sec\u03b8/a-y\u2009tan\u03b8/b=1",
      meaning: "Tangent at the parametric point.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "b", meaning: "Semi-conjugate axis" },
        { symbol: "\u03b8", meaning: "Valid parameter of the point of tangency" },
      ],
      useWhen: "Valid parameter, cos\u03b8\u22600.",
      accessibleText: "x sec theta over a minus y tan theta over b equals 1",
    },
    {
      id: "normal-nonvertex",
      expression: "y-y\u2081=-(a\u00b2y\u2081)/(b\u00b2x\u2081)(x-x\u2081)",
      meaning: "Normal at a non-vertex point P on the hyperbola.",
      variables: [
        { symbol: "a", meaning: "Semi-transverse axis" },
        { symbol: "b", meaning: "Semi-conjugate axis" },
        { symbol: "x\u2081, y\u2081", meaning: "Coordinates of P on the standard hyperbola, y\u2081\u22600" },
      ],
      useWhen: "Advanced scope; y\u2081\u22600; P on the standard hyperbola.",
      commonTrap: "Applying this formula at a vertex where y\u2081=0.",
      accessibleText: "y minus y sub 1 equals negative, a squared y sub 1 over b squared x sub 1, times x minus x sub 1",
    },
    {
      id: "normal-vertex",
      expression: "y=0",
      meaning: "Normal at the vertex (\u00b1a,0) of the horizontal-transverse hyperbola.",
      variables: [{ symbol: "a", meaning: "Semi-transverse axis" }],
      useWhen: "Horizontal-transverse form; tangent at the vertex is vertical.",
      accessibleText: "y equals zero",
    },
  ],

  tables: [
    {
      id: "scope-mapping",
      slot: "scope",
      jump: true,
      heading: "Main 2026 versus Advanced 2026 scope for Hyperbola",
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
        ["Opposite squared signs", "Identify the positive squared term", "Confirm transverse axis direction"],
        ["Foci/eccentricity asked", "Compute c\u00b2=a\u00b2+b\u00b2", "Verify c>a and e>1"],
        ["Asymptotes asked", "Use highest-degree part", "Tie slope to actual orientation"],
        ["Tangent/normal at vertex", "Use geometry, not general normal formula", "Tangent vertical, normal y=0"],
        ["Parametric point given", "Use (a sec\u03b8, b tan\u03b8)", "Require cos\u03b8\u22600"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-reasoning",
      slot: "concepts",
      heading: "Worked reasoning: x\u00b2/9-y\u00b2/16=1",
      jump: true,
      concepts: [
        {
          id: "worked-example",
          title: "Assign a and b, compute c and e, find asymptotes and vertex normal",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "For x\u00b2/9-y\u00b2/16=1, a=3, b=4, so c\u00b2=9+16=25, c=5, and e=5/3." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Foci are (\u00b15,0), asymptotes are y=\u00b14x/3. At vertex (3,0), the tangent is x=3 and the normal is y=0." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Validation: c>a and e>1, consistent with a nondegenerate hyperbola." },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "ellipse-relation-used",
      mistake: "Using the ellipse focal relation c\u00b2=a\u00b2-b\u00b2 for a hyperbola.",
      why: [{ type: "paragraph", children: [{ text: "The hyperbola's opposite squared signs give c\u00b2=a\u00b2+b\u00b2, not the ellipse's c\u00b2=a\u00b2-b\u00b2." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the conic type from the sign pattern before applying a focal relation formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "eccentricity-below-one",
      mistake: "Computing e<1 for a claimed hyperbola.",
      why: [{ type: "paragraph", children: [{ text: "A valid nondegenerate hyperbola always has eccentricity strictly greater than 1." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Recheck the focal relation if computed e is not greater than 1." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-asymptote-orientation",
      mistake: "Using the horizontal-form asymptote slope for a vertical-transverse hyperbola.",
      why: [{ type: "paragraph", children: [{ text: "Asymptote slope depends on which axis is the transverse axis." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Derive asymptotes from the highest-degree part of the actual standard form given." }] }],
      errorType: "decision-error",
    },
    {
      id: "transverse-conjugate-confused",
      mistake: "Confusing the transverse axis with the conjugate axis.",
      why: [{ type: "paragraph", children: [{ text: "The transverse axis contains the vertices and foci; the conjugate axis does not." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the transverse axis from the positive squared term before naming axis lengths." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "nonvertex-normal-at-vertex",
      mistake: "Applying the nonvertex normal formula at a vertex.",
      why: [{ type: "paragraph", children: [{ text: "The nonvertex normal formula requires y\u2081\u22600, which fails at a vertex where y\u2081=0." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the geometric vertex-normal result y=0 at (\u00b1a,0) instead." }] }],
      errorType: "execution-error",
    },
    {
      id: "missing-parameter-domain",
      mistake: "Omitting the cos\u03b8\u22600 condition for the parametric point.",
      why: [{ type: "paragraph", children: [{ text: "The parametric point (a sec\u03b8, b tan\u03b8) is undefined when cos\u03b8=0." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State cos\u03b8\u22600 explicitly whenever this parametric form is used." }] }],
      errorType: "recall-gap",
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
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Slope and line-equation methods used in asymptote and tangent/normal derivation.",
    },
    {
      label: "Parabola",
      url: "/jee/mathematics/parabola",
      relation: "related",
      description: "Related conic with e=1, sharing the same reasoning architecture.",
    },
    {
      label: "Ellipse",
      url: "/jee/mathematics/ellipse",
      relation: "related",
      description: "Related conic with 0<e<1, contrasted here by focal relation and eccentricity range.",
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
      question: "Is Hyperbola in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Yes, in focused standard-form scope. Main 2026 explicitly includes the standard hyperbola form." }],
        },
      ],
    },
    {
      question: "Is Hyperbola in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Yes. Advanced explicitly includes foci, directrices, eccentricity, parametric equations and tangent/normal equations." }],
        },
      ],
    },
    {
      question: "Why is the eccentricity of a hyperbola always greater than 1?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Because c\u00b2=a\u00b2+b\u00b2 with a,b>0 gives c>a, and e=c/a, so e is always greater than 1 for a nondegenerate hyperbola." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote:
    "Use only official Main and Advanced syllabus documents for scope claims and official archives for paper examples. Record orientation, a, b, c, e and validation for every worked item. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Analytic Geometry educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Analytic Geometry SME, postgraduate Mathematics or Applied Mathematics or equivalent.",
    "Review scope: focal relation, eccentricity range, asymptotes, directrices, parameter domain and tangent/normal.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Hyperbola for JEE 2026: Eccentricity, Asymptotes and Tangents",
    description:
      "Learn hyperbola standard forms, axes, foci, e>1, asymptotes, directrices and Advanced tangent/normal methods.",
    ogTitle: "Hyperbola for JEE: Foci, Eccentricity, Asymptotes and Tangents",
    ogDescription: "Orientation and asymptote validator, with explicit Main versus Advanced scope.",
    ogType: "article",
  },
};

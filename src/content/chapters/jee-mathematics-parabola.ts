import type { ChapterContent } from "@/content/types";

/**
 * Parabola — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, frequency, expected-question or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until Mathematics SME review is recorded.
 * - Main 2026 scope is focused standard-form only (vertex/focus/directrix/
 *   latus rectum implied by standard form); explicit focus, directrix,
 *   eccentricity, parametric equations, tangent and normal detail is
 *   Advanced-supported. This split is kept explicit throughout.
 */
export const jeeMathematicsParabola: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Parabola",
  slug: "parabola",
  url: "/jee/mathematics/parabola",
  canonicalIntent:
    "Interpret a parabola through focus/directrix geometry, identify the correct standard orientation, and use focus, directrix, latus rectum, parametrisation, tangent and normal formulas with orientation-specific signs.",

  heroChips: [
    "Main 2026: standard-form parabola only",
    "Advanced 2026: focus, directrix, eccentricity, parametric, tangent/normal",
    "No invented weightage, frequency or PYQ-count claims",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A parabola is the locus of points equidistant from a fixed focus and a fixed directrix, so its eccentricity is 1. For y\u00b2=4ax with a>0, the vertex is (0,0), the focus is (a,0), the directrix is x=-a, and the latus rectum length is 4a. Other orientations require corresponding sign and axis changes.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "JEE Main 2026 Unit 10 explicitly includes the standard parabola form. It does not separately enumerate focus, directrix, eccentricity, parametric equations, tangent or normal as distinct listed items; JEE Advanced 2026 explicitly lists all of these. Keep this scope split explicit rather than presenting Advanced-only detail as Main wording.",
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
      description: "General conic classification and eccentricity framework underlie the parabola treatment.",
    },
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Distance, slope and line-equation methods support tangent and normal derivation.",
    },
  ],

  syllabusMapping: {
    unit: "Coordinate Geometry / Analytical Geometry",
    topics: [
      "Standard form of a parabola (Main and Advanced)",
      "Focus, directrix, eccentricity (Advanced)",
      "Parametric equations (Advanced)",
      "Tangent and normal equations (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "object-definitions",
      title: "1. Fix the mathematical objects before computing",
      keyIdea: "Vertex, axis, focus, directrix, latus rectum and parametric point must be located before any formula is applied.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every parabola question starts by fixing the vertex, axis, focus, directrix, latus rectum and, where required, the parametric point, from the given standard-form equation.",
            },
          ],
        },
      ],
    },
    {
      id: "reasoning-architecture",
      title: "2. Follow the fixed reasoning path",
      keyIdea: "Identify orientation, read 4a, place focus/directrix, select method, apply tangent/normal, validate equal distances.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Identify orientation, then read 4a, then place the focus and directrix, then select the coordinate or parameter method, then apply tangent or normal, then validate by checking equal focus/directrix distance.",
            },
          ],
        },
      ],
    },
    {
      id: "orientation-forms",
      title: "3. Match the exact standard orientation before using focus/directrix",
      keyIdea: "There are four standard orientations for a>0, each with its own focus, directrix and axis.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Read orientation first. y\u00b2=4ax opens right with focus (a,0) and directrix x=-a; y\u00b2=-4ax opens left with focus (-a,0) and directrix x=a; x\u00b2=4ay opens up with focus (0,a) and directrix y=-a; x\u00b2=-4ay opens down with focus (0,-a) and directrix y=a. Use focus/directrix only after matching the form.",
            },
          ],
        },
      ],
    },
    {
      id: "parametric-point",
      title: "4. Use the parametric point only for the matching form",
      keyIdea: "(at\u00b2,2at) with t\u2208R is Advanced-supported and valid only for y\u00b2=4ax.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use (at\u00b2,2at) only for y\u00b2=4ax. Verify a point lies on the curve before applying a tangent formula, and transform signs and axes for other orientations rather than copying the same parameter form across orientations.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "eccentricity",
      expression: "e=1",
      meaning: "Eccentricity of any nondegenerate parabola.",
      variables: [{ symbol: "e", meaning: "Eccentricity" }],
      useWhen: "Confirming that a curve is a nondegenerate parabola by equal focus/directrix distance.",
      accessibleText: "e equals 1",
    },
    {
      id: "latus-rectum",
      expression: "4a",
      meaning: "Latus rectum length for y\u00b2=4ax, a>0.",
      variables: [{ symbol: "a", meaning: "Distance from vertex to focus" }],
      useWhen: "a>0; endpoints (a,\u00b12a) must satisfy the equation.",
      accessibleText: "Latus rectum length equals 4a",
    },
    {
      id: "parametric-point",
      expression: "(at\u00b2,2at)",
      meaning: "Parametric point on y\u00b2=4ax.",
      variables: [
        { symbol: "a", meaning: "Distance from vertex to focus" },
        { symbol: "t", meaning: "Real parameter" },
      ],
      useWhen: "Advanced scope; t\u2208R; valid only for y\u00b2=4ax.",
      commonTrap: "Reusing this parameter form for a different orientation without transforming signs and axes.",
      accessibleText: "Point at t squared a, 2 a t",
    },
    {
      id: "tangent-at-point",
      expression: "yy\u2081=2a(x+x\u2081)",
      meaning: "Tangent to y\u00b2=4ax at point P(x\u2081,y\u2081).",
      variables: [
        { symbol: "a", meaning: "Distance from vertex to focus" },
        { symbol: "x\u2081, y\u2081", meaning: "Coordinates of P on the parabola" },
      ],
      useWhen: "Advanced scope; P must lie on the parabola before use.",
      commonTrap: "Applying the tangent formula to a point that is not verified to be on the curve.",
      accessibleText: "y y sub 1 equals 2 a times x plus x sub 1",
    },
    {
      id: "parametric-tangent",
      expression: "ty=x+at\u00b2",
      meaning: "Tangent at the parametric point (at\u00b2,2at).",
      variables: [
        { symbol: "a", meaning: "Distance from vertex to focus" },
        { symbol: "t", meaning: "Parameter of the point of tangency" },
      ],
      useWhen: "P=(at\u00b2,2at) on y\u00b2=4ax.",
      accessibleText: "t y equals x plus a t squared",
    },
    {
      id: "parametric-normal",
      expression: "y=-tx+2at+at\u00b3",
      meaning: "Normal at the parametric point (at\u00b2,2at).",
      variables: [
        { symbol: "a", meaning: "Distance from vertex to focus" },
        { symbol: "t", meaning: "Parameter of the point of contact" },
      ],
      useWhen: "Advanced scope; right-opening standard form y\u00b2=4ax.",
      commonTrap: "Using the slope check without confirming the standard right-opening form.",
      accessibleText: "y equals negative t x plus 2 a t plus a t cubed",
    },
  ],

  tables: [
    {
      id: "orientation-map",
      slot: "concepts",
      jump: true,
      heading: "Four standard orientations, a>0",
      columns: ["Form", "Opens", "Focus", "Directrix", "Axis"],
      rows: [
        ["y\u00b2=4ax", "right", "(a,0)", "x=-a", "x-axis"],
        ["y\u00b2=-4ax", "left", "(-a,0)", "x=a", "x-axis"],
        ["x\u00b2=4ay", "up", "(0,a)", "y=-a", "y-axis"],
        ["x\u00b2=-4ay", "down", "(0,-a)", "y=a", "y-axis"],
      ],
    },
    {
      id: "scope-mapping",
      slot: "scope",
      jump: true,
      heading: "Main 2026 versus Advanced 2026 scope for Parabola",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Standard form",
          "Explicitly included.",
          "Explicitly included.",
        ],
        [
          "Focus, directrix, eccentricity, parametric equations, tangent and normal",
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
        ["Any parabola equation", "Read orientation first", "Match one of the four standard forms"],
        ["Focus/directrix asked", "Use orientation table", "Confirm sign of a matches opening direction"],
        ["Parametric point given", "Use (at\u00b2,2at)", "Only for y\u00b2=4ax"],
        ["Tangent/normal asked", "Verify point on curve", "Substitute point before using tangent formula"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-reasoning",
      slot: "concepts",
      heading: "Worked reasoning: y\u00b2=12x",
      jump: true,
      concepts: [
        {
          id: "worked-example",
          title: "Read a, place focus/directrix, verify tangent point",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "y\u00b2=12x gives 4a=12, so a=3. Vertex is (0,0), focus is (3,0), directrix is x=-3, and latus rectum length is 12." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "P=(3,6) lies on the curve since 6\u00b2=36=12(3). Tangent at P: 6y=6(x+3), so y=x+3." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Validation: P satisfies the tangent equation, and the orientation is right-opening throughout." },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "reading-a-as-4a",
      mistake: "Reading a instead of 4a from the coefficient.",
      why: [{ type: "paragraph", children: [{ text: "The coefficient in y\u00b2=4ax is 4a, not a, so misreading it produces a wrong focus and latus rectum." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Divide the coefficient by 4 to isolate a before using any formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-focus-sign",
      mistake: "Using the wrong focus sign for the orientation.",
      why: [{ type: "paragraph", children: [{ text: "Each of the four standard orientations has a distinct focus sign; copying one orientation's sign onto another produces a wrong focus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Match the exact standard form to the orientation table before placing the focus." }] }],
      errorType: "decision-error",
    },
    {
      id: "assumed-right-opening",
      mistake: "Assuming every parabola opens right.",
      why: [{ type: "paragraph", children: [{ text: "Sign and axis in the equation determine opening direction; it is not always y\u00b2=4ax." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify orientation from the equation before applying any formula." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "tangent-off-curve",
      mistake: "Using the tangent-at-point formula for a point not on the parabola.",
      why: [{ type: "paragraph", children: [{ text: "The tangent formula yy\u2081=2a(x+x\u2081) is valid only when P lies on the curve." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Substitute P into the parabola equation to confirm membership before using the tangent formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "parameter-across-orientations",
      mistake: "Transferring the (at\u00b2,2at) parameter or its tangent/normal formulas across orientations.",
      why: [{ type: "paragraph", children: [{ text: "The parametric point and its tangent/normal formulas are derived specifically for y\u00b2=4ax and do not transfer as-is." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Rebuild the parametric point and tangent/normal for the actual orientation rather than reusing signs." }] }],
      errorType: "decision-error",
    },
    {
      id: "advanced-as-main",
      mistake: "Presenting Advanced-only formula detail as explicit Main 2026 wording.",
      why: [{ type: "paragraph", children: [{ text: "Main 2026 lists the standard parabola form but does not separately enumerate focus, directrix, eccentricity, parametric equations, tangent or normal." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the scope-mapping table on this page before treating detailed formula content as Main scope." }] }],
      errorType: "knowledge-gap",
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
      label: "Ellipse",
      url: "/jee/mathematics/ellipse",
      relation: "related",
      description: "Related conic with 0<e<1, sharing the same reasoning architecture.",
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
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Line-equation methods used in tangent and normal derivation.",
    },
  ],

  faqs: [
    {
      question: "Is Parabola in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Yes, in focused standard-form scope. Main 2026 explicitly includes the standard parabola form." }],
        },
      ],
    },
    {
      question: "Is Parabola in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Yes. Advanced explicitly includes standard forms, focus, directrix, eccentricity, parametric equations and tangent/normal equations." }],
        },
      ],
    },
    {
      question: "Why is the eccentricity of a parabola always 1?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "A parabola is defined as the locus of points equidistant from the focus and directrix, which fixes eccentricity at exactly 1 for any nondegenerate parabola." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote:
    "Use only official Main and Advanced syllabus documents for scope claims and official archives for paper examples. Record orientation, focus, directrix, parameter, and validation for every worked item. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Analytic Geometry educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Analytic Geometry SME, postgraduate Mathematics or Applied Mathematics or equivalent.",
    "Review scope: orientation signs, e=1, a>0 condition, tangent point membership, and Main versus Advanced scope split.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Parabola for JEE 2026: Focus, Directrix and Tangents",
    description:
      "Learn parabola orientations, focus, directrix, eccentricity, latus rectum and Advanced parametric tangent/normal formulas with sign control.",
    ogTitle: "Parabola for JEE: Standard Forms, Focus, Directrix and Tangents",
    ogDescription: "Four-orientation focus/directrix map, parameter and tangent/normal reasoning, with explicit Main versus Advanced scope.",
    ogType: "article",
  },
};

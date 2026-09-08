import type { ChapterContent } from "@/content/types";

/**
 * Circles — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Tangent, normal, chord and parametric circle methods are Advanced-explicit;
 *   Main 2026 explicitly covers standard/general forms, radius/centre,
 *   circle from diameter endpoints and specified line-circle intersection
 *   content, without separately naming those Advanced items.
 */
export const jeeMathematicsCircles: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Circles",
  slug: "circles",
  url: "/jee/mathematics/circles",
  canonicalIntent:
    "Recognise and construct circle equations, extract centre and radius safely, classify real, degenerate and nonreal loci, and use tangent, chord and parametric methods only where geometric conditions and official scope support them.",

  heroChips: [
    "Standard and general circle forms are explicit in JEE Main 2026",
    "Tangent, normal, chord and parametric circle are Advanced-explicit",
    "Real-circle classification is a named validation checkpoint",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A circle is the locus of points at a fixed nonnegative distance from a centre. In x^2 + y^2 + 2gx + 2fy + c = 0, the centre is (-g, -f) and the radius squared is g^2 + f^2 - c.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A proper real circle requires that quantity to be positive; zero gives a point circle, and negative gives no real circle.",
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
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Distance reasoning underlies the fixed-distance definition of a circle.",
    },
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Point-line distance and perpendicularity are used in tangent and chord reasoning.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Co-ordinate Geometry",
    topics: [
      "Standard form of a circle",
      "General form of a circle",
      "Radius and centre",
      "Circle from diameter endpoints",
      "Line-circle intersection",
      "Tangent, normal, chord and parametric circle (Advanced)",
      "Circle-circle intersection and circle through intersection (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "reasoning-architecture",
      title: "1. Follow the fixed reasoning path",
      keyIdea: "Standardise -> compare coefficients -> compute r^2 -> classify -> choose tangent/intersection method -> validate distance.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Standardise the given equation, compare coefficients with the general form, compute r squared before taking a square root, classify the locus as a proper circle, a point circle, or no real circle, then choose the correct tangent or intersection method and validate through distance.",
            },
          ],
        },
      ],
    },
    {
      id: "centre-radius-extraction",
      title: "2. Extract centre and radius safely",
      keyIdea: "Complete the square; compute r^2 before r; check the sign before taking a square root.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For x^2 + y^2 + 2gx + 2fy + c = 0, the centre is (-g, -f) and radius squared is g^2 + f^2 - c. Computing r^2 first, then checking its sign, avoids taking a square root of a negative quantity before the locus is classified.",
            },
          ],
        },
      ],
    },
    {
      id: "real-degenerate-classification",
      title: "3. Classify the locus by the sign of r^2",
      keyIdea: "r^2 > 0 gives a proper circle; r^2 = 0 gives a point circle; r^2 < 0 gives no real circle.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Not every equation with equal x^2 and y^2 coefficients and no xy term after normalisation represents a real, nondegenerate circle. The quantity g^2 + f^2 - c must be checked: positive gives a proper circle with r > 0, zero gives a single point, and negative gives no real locus.",
            },
          ],
        },
      ],
    },
    {
      id: "diameter-and-position",
      title: "4. Build a circle from diameter endpoints and test point position",
      keyIdea: "The diameter-endpoint equation requires distinct endpoints; the position expression gives inside, on, or outside.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Given diameter endpoints, (x - x1)(x - x2) + (y - y1)(y - y2) = 0 constructs the circle, provided the endpoints are distinct so the circle is nondegenerate. For a point (x0, y0) and a proper circle, the signed expression (x0 - h)^2 + (y0 - k)^2 - r^2 is negative inside, zero on, and positive outside the circle.",
            },
          ],
        },
      ],
    },
    {
      id: "tangent-normal-parametric",
      title: "5. Use tangent, normal and parametric methods only where the point is on-circle",
      keyIdea: "The tangent-at-a-point formula and the parametric form require the point or parameter to correspond to the actual circle; these are Advanced-explicit methods.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The tangent at P(x1, y1) on a circle, (x1 - h)(x - h) + (y1 - k)(y - k) = r^2, applies only when P lies on the circle; applying it to an off-circle point produces an incorrect line. The parametric point (h + r cos t, k + r sin t) applies to a proper circle after standard-form identification. These are listed explicitly for JEE Advanced 2026 and are not separately named in the JEE Main 2026 unit.",
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
          "Constructing circle equations, extracting centre and radius safely, classifying the locus, and applying tangent, chord and parametric methods within their scope.",
        ],
        [
          "What is the central method choice?",
          "Complete the square, compute r squared before r, and classify the locus as a proper circle, a point circle, or no real circle before applying any further method.",
        ],
        [
          "Where do most mistakes begin?",
          "Sign reversal in the centre, skipping the real-circle classification, and applying the on-circle tangent formula to an off-circle point.",
        ],
        [
          "What should come before Circles?",
          "Coordinate Geometry for distance reasoning and Straight Lines for point-line distance and perpendicularity.",
        ],
        [
          "What comes after it?",
          "Conic Sections, Parabola, Ellipse and Hyperbola extend the same fixed-distance and locus reasoning to other conics.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Circles",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Circle equations and classification",
          "Explicitly includes standard and general circle equations, radius and centre, circle from diameter endpoints, and specified line-circle intersection content.",
          "Includes the same base scope with additional detail.",
          "Centre, radius and real-circle classification are common to both papers.",
        ],
        [
          "Tangent, normal, chord and parametric circle",
          "Not separately named in the Main 2026 unit.",
          "Explicitly includes tangent, normal, chord, parametric circle, circle-line and circle-circle intersections, and circle-through-intersection constructions.",
          "Label these methods as Advanced-explicit scope.",
        ],
      ],
      note: "Sources: JEE Main and JEE Advanced official syllabi, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Circles",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Coordinate distance",
          "Compute the distance between two coordinate points.",
          "Revise Coordinate Geometry.",
        ],
        [
          "Straight Lines",
          "Compute point-line distance and check perpendicularity between two lines.",
          "Revise Straight Lines.",
        ],
        [
          "Completing squares",
          "Rewrite a quadratic expression in completed-square form.",
          "Revise algebraic manipulation of quadratics.",
        ],
        [
          "Perpendicularity",
          "Check whether two direction vectors or slopes are perpendicular.",
          "Revise the perpendicular-slope condition in Straight Lines.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "object-definitions",
      jump: true,
      slot: "concepts",
      heading: "Mathematical object definitions",
      columns: ["Object", "Meaning"],
      rows: [
        ["Centre", "The fixed point from which every point of the circle is equidistant."],
        ["Radius", "The fixed nonnegative distance from the centre to any point of the circle."],
        ["Proper circle", "A real, nondegenerate circle with radius greater than zero."],
        ["Point circle", "The degenerate case where radius equals zero, reducing the locus to a single point."],
        ["Chord", "A segment joining two points on the circle."],
        ["Tangent", "A line touching the circle at exactly one point."],
        ["Secant", "A line intersecting the circle at two points."],
      ],
    },
    {
      id: "formula-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records with conditions",
      columns: ["Record", "Expression", "Conditions", "Trap", "Validation"],
      rows: [
        ["Standard circle", "(x - h)^2 + (y - k)^2 = r^2", "r > 0 for a proper circle", "Ignoring degeneracy", "Fixed distance"],
        ["General circle", "x^2 + y^2 + 2gx + 2fy + c = 0", "Ordinary Cartesian circle form", "Calling every quadratic a circle", "Equal x^2/y^2 coefficients, no xy after normalisation"],
        ["Centre", "(-g, -f)", "General form", "Sign error", "Complete the square"],
        ["Radius squared", "g^2 + f^2 - c", "General form", "Taking a square root before checking the sign", "Value must be ≥ 0 for a real locus"],
        ["Diameter endpoints", "(x - x1)(x - x2) + (y - y1)(y - y2) = 0", "Distinct diameter endpoints for a proper circle", "Degenerate same-point endpoints", "Midpoint gives the centre"],
        ["Tangent at P", "(x1 - h)(x - h) + (y1 - k)(y - k) = r^2", "Advanced; P lies on the circle", "Applying to an off-circle point", "Radius perpendicular to tangent"],
        ["Origin-based tangent", "xx1 + yy1 = r^2", "x1^2 + y1^2 = r^2", "Applying to an off-circle point", "P satisfies the circle equation"],
        ["Parametric point", "(h + r cos t, k + r sin t)", "Advanced; proper circle", "Parameter mismatch", "Substitute back into the standard form"],
        ["Point position", "(x0 - h)^2 + (y0 - k)^2 - r^2", "Proper circle", "Treating this as an unsigned distance", "Negative inside, zero on, positive outside"],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Condition signal", "Route"],
      rows: [
        ["General equation given", "Complete the square and compute r^2 before r"],
        ["Diameter endpoints given", "Diameter formula"],
        ["Tangent required", "Confirm the point lies on the circle first"],
        ["Line and circle given", "Substitute the line into the circle equation for intersection"],
        ["Circle needed in parameter form", "Identify the standard circle first, then parametrise"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-tangent",
      slot: "concepts",
      heading: "Worked reasoning: tangent from centre and radius",
      jump: true,
      concepts: [
        {
          id: "tangent-example",
          title: "Find the tangent to x^2 + y^2 - 6x + 4y - 12 = 0 at P(3, 3)",
          body: [
            { type: "paragraph", children: [{ text: "g = -3, f = 2, c = -12." }] },
            { type: "paragraph", children: [{ text: "Centre (3, -2). r^2 = 9 + 4 + 12 = 25, so r = 5." }] },
            { type: "paragraph", children: [{ text: "P = (3, 3) lies on the circle. Radius CP is vertical, so the tangent is y = 3." }] },
            { type: "paragraph", children: [{ text: "Validation: the tangent is perpendicular to CP and passes through P." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "centre-sign-reversal",
      mistake: "Reversing the sign when reading the centre from the general form.",
      why: [{ type: "paragraph", children: [{ text: "The centre is (-g, -f), not (g, f), for x^2 + y^2 + 2gx + 2fy + c = 0." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Complete the square explicitly rather than reading off g and f without the sign flip." }] }],
      errorType: "execution-error",
    },
    {
      id: "skipped-real-circle-check",
      mistake: "Failing to check whether g^2 + f^2 - c is positive before proceeding.",
      why: [{ type: "paragraph", children: [{ text: "A negative value means no real circle exists, and zero means a point circle rather than a proper circle." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compute and check the sign of r^2 before taking a square root or applying tangent methods." }] }],
      errorType: "decision-error",
    },
    {
      id: "point-circle-as-proper",
      mistake: "Treating r = 0 as a proper circle.",
      why: [{ type: "paragraph", children: [{ text: "A radius of zero reduces the locus to a single point, not a circle with tangent lines and chords." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Classify r^2 = 0 as a point circle before applying any circle-specific method." }] }],
      errorType: "decision-error",
    },
    {
      id: "off-circle-tangent",
      mistake: "Using the tangent-at-a-point formula for a point not on the circle.",
      why: [{ type: "paragraph", children: [{ text: "That formula assumes the given point already lies on the circle." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the point satisfies the circle equation before applying the tangent formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "every-quadratic-a-circle",
      mistake: "Calling every quadratic equation with x^2 and y^2 terms a circle.",
      why: [{ type: "paragraph", children: [{ text: "A circle requires equal coefficients for x^2 and y^2 and no xy term after normalisation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check coefficient equality and the absence of an xy term before classifying an equation as a circle." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "advanced-detail-inflated",
      mistake: "Presenting tangent, normal, chord or parametric circle methods as explicit Main 2026 detail.",
      why: [{ type: "paragraph", children: [{ text: "These methods are listed explicitly for JEE Advanced 2026, not separately named in the JEE Main 2026 unit." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Label tangent, normal, chord and parametric circle methods as Advanced-explicit scope." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Distance reasoning underlies the fixed-distance definition of a circle.",
    },
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Point-line distance and perpendicularity feed directly into tangent reasoning.",
    },
    {
      label: "Conic Sections",
      url: "/jee/mathematics/conic-sections",
      relation: "related",
      description: "The circle sits alongside parabola, ellipse and hyperbola as a conic with equal-denominator ellipse structure.",
    },
    {
      label: "Parabola",
      url: "/jee/mathematics/parabola",
      relation: "forward",
      description: "Extends fixed-distance locus reasoning to a focus-and-directrix definition.",
    },
    {
      label: "Ellipse",
      url: "/jee/mathematics/ellipse",
      relation: "forward",
      description: "Extends fixed-distance reasoning to a two-focus sum condition.",
    },
    {
      label: "Hyperbola",
      url: "/jee/mathematics/hyperbola",
      relation: "forward",
      description: "Extends fixed-distance reasoning to a two-focus difference condition.",
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
      question: "How do you find the centre and radius from the general form?",
      answer: [{ type: "paragraph", children: [{ text: "For x^2 + y^2 + 2gx + 2fy + c = 0, the centre is (-g, -f) and the radius squared is g^2 + f^2 - c." }] }],
    },
    {
      question: "What is the condition for a real circle?",
      answer: [{ type: "paragraph", children: [{ text: "The quantity g^2 + f^2 - c must be positive for a proper real circle." }] }],
    },
    {
      question: "What does a radius of zero mean?",
      answer: [{ type: "paragraph", children: [{ text: "A radius of zero, where g^2 + f^2 - c equals zero, reduces the locus to a single point rather than a proper circle." }] }],
    },
    {
      question: "How do you build a circle from diameter endpoints?",
      answer: [{ type: "paragraph", children: [{ text: "For distinct diameter endpoints (x1, y1) and (x2, y2), the circle equation is (x - x1)(x - x2) + (y - y1)(y - y2) = 0." }] }],
    },
    {
      question: "Which circle topics are explicit in JEE Advanced but not JEE Main?",
      answer: [{ type: "paragraph", children: [{ text: "Tangent, normal, chord, parametric circle, and circle-line or circle-circle intersection constructions are listed explicitly for JEE Advanced 2026." }] }],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf"],
  sourceNote:
    "Circle equation, classification and tangent/intersection scope is verified against the official JEE Main 2026 and JEE Advanced 2026 syllabi only. Exact provenance only; no frequency or trend claims.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Mathematics education editor with Analytic Geometry background.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Analytic Geometry. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics, or equivalent.",
    "Review scope: circle classification, diameter form, tangency conditions and the Main versus Advanced scope split.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Circles for JEE 2026: Centre, Radius and Tangents",
    description:
      "Learn circle equations, centre and radius extraction, real-circle conditions, diameter form, tangents and intersections for JEE.",
    ogTitle: "Circles for JEE 2026",
    ogDescription: "Centre, radius, tangent and intersection reasoning for JEE circles.",
    ogType: "article",
  },
};

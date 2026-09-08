import type { ChapterContent } from "@/content/types";

/**
 * Straight Lines — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Pencil of lines and angle bisectors are Advanced-explicit line-family
 *   items; they are marked as such and not presented as explicit Main detail.
 */
export const jeeMathematicsStraightLines: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Straight Lines",
  slug: "straight-lines",
  url: "/jee/mathematics/straight-lines",
  canonicalIntent:
    "Represent a straight line in the form best suited to the data, handle vertical lines without forcing finite slope, compute intersections, angles and point-line distance, and use line families only where their conditions and official scope support them.",

  heroChips: [
    "Explicit in the JEE Main 2026 Co-ordinate Geometry unit",
    "Pencil of lines and angle bisectors are Advanced-explicit items",
    "Vertical-line handling is a named validation checkpoint",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A straight line is best represented by the form matching the information given. Slope methods work for nonvertical lines, while Ax + By + C = 0 also handles vertical lines.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Before using a slope-angle formula, check whether slopes are finite and whether the denominator vanishes.",
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
      description: "Distance, section and slope reasoning at overview level underlie every line form on this page.",
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
      "Slope",
      "Parallel and perpendicular lines",
      "Intercepts",
      "Various forms of the equation of a line",
      "Intersection of lines",
      "Angles between lines",
      "Concurrence of lines",
      "Point-line distance",
      "Centroid, orthocentre and circumcentre",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "reasoning-architecture",
      title: "1. Follow the fixed reasoning path",
      keyIdea: "Data -> line form -> vertical/denominator check -> solve/intersect -> angle/distance -> validate.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Start from the data given, choose the line form it fits, check for vertical-line or zero-denominator cases before applying an angle or slope formula, solve or intersect, compute the required angle or distance, and validate the result.",
            },
          ],
        },
      ],
    },
    {
      id: "vertical-line-handling",
      title: "2. Handle vertical lines without forcing a slope",
      keyIdea: "A vertical line x = k has inclination π/2 and no finite slope.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Inclination is the angle θ measured anticlockwise from the positive x-axis, with 0 ≤ θ < π. Slope equals tan θ only when the line is not vertical. A vertical line has inclination π/2 and no finite slope, so it must be represented in general form Ax + By + C = 0 rather than through a slope-based form.",
            },
          ],
        },
      ],
    },
    {
      id: "form-selection",
      title: "3. Match the line form to the given data",
      keyIdea: "Two points, a point and slope, intercepts, or a normal vector each suggest a different standard form.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Point-slope form requires a finite slope. The two-point robust form works for any two distinct points, including cases that would otherwise force a vertical line into a slope formula. Intercept form requires both intercepts to be nonzero. General form Ax + By + C = 0 requires the normal vector (A, B) to be nonzero and handles every line, including vertical ones.",
            },
          ],
        },
      ],
    },
    {
      id: "angle-and-distance",
      title: "4. Check the denominator before computing an angle or distance",
      keyIdea: "The slope-angle formula needs finite slopes and a nonzero denominator; point-line distance needs a nonzero normal.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The angle between two lines by slopes, tan θ = |(m2 - m1)/(1 + m1 m2)|, requires finite slopes, and 1 + m1 m2 = 0 signals a right angle that must be handled separately rather than divided by zero. Point-line distance |Ax0 + By0 + C| / sqrt(A^2 + B^2) requires (A, B) not equal to (0, 0) and an absolute value to stay nonnegative.",
            },
          ],
        },
      ],
    },
    {
      id: "advanced-line-families",
      title: "5. Keep pencil and bisector methods within their Advanced scope",
      keyIdea: "L1 + λL2 = 0 and the angle-bisector equations are Advanced-explicit line-family items.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The pencil of lines L1 + λL2 = 0 applies to intersecting, distinct lines with a nondegenerate combination, and any line through their intersection satisfies it for some λ. The angle bisector equations require both normals to be nonzero and use a normalised comparison of the two line expressions. These are listed as Advanced-explicit detail and are not presented as explicit Main 2026 content.",
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
          "Choosing a line form that fits the given data, handling vertical lines correctly, and computing angles, intersections and point-line distance.",
        ],
        [
          "What is the central method choice?",
          "Match the data (two points, point and slope, intercepts, or a normal vector) to the line form that avoids forcing a vertical line into a slope-based formula.",
        ],
        [
          "Where do most mistakes begin?",
          "Using a finite slope on a vertical line, dividing by a zero angle-denominator, and presenting Advanced pencil or bisector detail as explicit Main content.",
        ],
        [
          "What should come before Straight Lines?",
          "Coordinate Geometry, for overview-level distance, section and slope reasoning.",
        ],
        [
          "What comes after it?",
          "Circles and Conic Sections both build on line-distance and line-intersection reasoning.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Straight Lines",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Core line concepts",
          "Explicitly includes slope, parallel and perpendicular lines, intercepts, various equations of a line, intersections, angles, concurrence, point-line distance, centroid, orthocentre and circumcentre.",
          "Includes the same core scope with additional detail.",
          "Core line-form, angle and distance methods are common to both papers.",
        ],
        [
          "Line families",
          "Not separately named.",
          "Additionally lists lines through intersections, angle bisectors, incentre and shift-of-origin context.",
          "Keep pencil-of-lines and angle-bisector methods labelled as Advanced-explicit detail.",
        ],
      ],
      note: "Sources: JEE Main and JEE Advanced official syllabi, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Straight Lines",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Coordinate geometry basics",
          "Compute distance, midpoint and section points for given coordinates.",
          "Revise Coordinate Geometry.",
        ],
        [
          "Linear equations",
          "Solve a linear equation in two variables.",
          "Revise algebraic manipulation basics.",
        ],
        [
          "Tangent",
          "Interpret tan θ as a ratio for a given angle.",
          "Revise basic trigonometric ratios.",
        ],
        [
          "Distance",
          "Compute the Euclidean distance between two coordinate points.",
          "Revise the distance formula in Coordinate Geometry.",
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
        ["Inclination", "Angle θ measured anticlockwise from positive x-axis, 0 ≤ θ < π."],
        ["Slope", "tan θ when the line is not vertical."],
        ["Vertical line", "x = k; inclination π/2; finite slope undefined."],
        ["Concurrent lines", "Lines meeting at one point."],
        ["Normal vector", "(A, B) for line Ax + By + C = 0."],
      ],
    },
    {
      id: "formula-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records with conditions",
      columns: ["Record", "Expression", "Conditions", "Trap", "Validation"],
      rows: [
        ["Slope", "(y2 - y1)/(x2 - x1)", "x2 ≠ x1", "Vertical division by zero", "Rise over run"],
        ["Point-slope", "y - y1 = m(x - x1)", "finite m", "Vertical line", "Point satisfies"],
        ["Two-point robust form", "(y - y1)(x2 - x1) = (x - x1)(y2 - y1)", "distinct points", "Identical points", "Both points satisfy"],
        ["Slope-intercept", "y = mx + c", "nonvertical", "Excluding vertical line", "Compare slope"],
        ["Intercept form", "x/a + y/b = 1", "a, b ≠ 0", "Zero intercept", "Substitute intercepts"],
        ["General form", "Ax + By + C = 0", "(A, B) ≠ (0, 0)", "Zero normal", "Normal nonzero"],
        ["Parallel", "m1 = m2", "finite slopes", "Coincident vs distinct", "Compare full equations"],
        ["Perpendicular", "m1 m2 = -1", "finite slopes", "Vertical case", "Direction-dot check"],
        ["Angle by slopes", "tan θ = |(m2 - m1)/(1 + m1 m2)|", "finite slopes; denominator nonzero for finite tangent", "1 + m1 m2 = 0", "Handle right angle separately"],
        ["Point-line distance", "|Ax0 + By0 + C| / sqrt(A^2 + B^2)", "(A, B) ≠ (0, 0)", "Missing absolute value", "Nonnegative"],
        ["Pencil", "L1 + λL2 = 0", "Advanced; intersecting distinct lines; nondegenerate combination", "Overclaiming parameter coverage", "Common point satisfies"],
        ["Angle bisectors", "L1 / sqrt(A1^2 + B1^2) = ± L2 / sqrt(A2^2 + B2^2)", "Advanced; normals nonzero", "Missing normalisation", "Equal distances"],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Data signal", "Route"],
      rows: [
        ["Vertical line", "General form"],
        ["Point and slope", "Point-slope form"],
        ["Two points", "Robust two-point form"],
        ["Angle with possible vertical cases", "Direction vectors or general form"],
        ["Point distance", "General form"],
        ["Advanced line through known intersection", "Pencil of lines"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-parallel-line",
      slot: "concepts",
      heading: "Worked reasoning: line through a point parallel to a given line",
      jump: true,
      concepts: [
        {
          id: "parallel-line-example",
          title: "Find the line through (2, 3) parallel to 3x - 4y + 5 = 0",
          body: [
            { type: "paragraph", children: [{ text: "Use the same normal: 3x - 4y + C = 0." }] },
            { type: "paragraph", children: [{ text: "Substitute (2, 3): 6 - 12 + C = 0, so C = 6." }] },
            { type: "paragraph", children: [{ text: "Answer: 3x - 4y + 6 = 0." }] },
            { type: "paragraph", children: [{ text: "Validation: the line has the same normal as the given line, and the given point satisfies the equation." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "finite-slope-on-vertical",
      mistake: "Forcing a finite slope on a vertical line.",
      why: [{ type: "paragraph", children: [{ text: "A vertical line has inclination π/2 and no finite slope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether x2 equals x1 before using a slope-based line form; use general form instead." }] }],
      errorType: "decision-error",
    },
    {
      id: "angle-denominator-zero",
      mistake: "Dividing by 1 + m1 m2 without checking whether it is zero.",
      why: [{ type: "paragraph", children: [{ text: "1 + m1 m2 = 0 signals a right angle and cannot be used as a denominator." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the denominator before applying the slope-angle formula and handle the right-angle case separately." }] }],
      errorType: "execution-error",
    },
    {
      id: "zero-intercept-misuse",
      mistake: "Using intercept form when an intercept is zero.",
      why: [{ type: "paragraph", children: [{ text: "Intercept form x/a + y/b = 1 requires both a and b to be nonzero." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use general or point-slope form when either intercept is zero." }] }],
      errorType: "execution-error",
    },
    {
      id: "missing-absolute-distance",
      mistake: "Omitting the absolute value in the point-line distance formula.",
      why: [{ type: "paragraph", children: [{ text: "Distance must be nonnegative; the numerator Ax0 + By0 + C can be negative before the absolute value is applied." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Apply the absolute value to the numerator before dividing." }] }],
      errorType: "execution-error",
    },
    {
      id: "parallel-coincident-confusion",
      mistake: "Confusing parallel lines with coincident lines.",
      why: [{ type: "paragraph", children: [{ text: "Equal slopes only confirm parallelism; the full equations must be compared to detect coincidence." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare the complete line equations, not just the slopes, before concluding coincidence." }] }],
      errorType: "decision-error",
    },
    {
      id: "advanced-line-family-overreach",
      mistake: "Presenting the pencil of lines or angle bisectors as explicit Main 2026 detail.",
      why: [{ type: "paragraph", children: [{ text: "These line-family items are listed explicitly in the Advanced 2026 syllabus, not the Main 2026 syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Label pencil-of-lines and angle-bisector methods as Advanced-explicit scope." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Overview-level distance, section and slope reasoning that this page builds on.",
    },
    {
      label: "Circles",
      url: "/jee/mathematics/circles",
      relation: "related",
      description: "Point-line distance and line-intersection reasoning carry over to tangent and chord problems.",
    },
    {
      label: "Conic Sections",
      url: "/jee/mathematics/conic-sections",
      relation: "forward",
      description: "Line reasoning underlies tangent and chord methods for parabola, ellipse and hyperbola.",
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
      question: "Why is a vertical line's slope undefined?",
      answer: [{ type: "paragraph", children: [{ text: "Slope is (y2 - y1)/(x2 - x1), and a vertical line has x2 equal to x1, which makes the denominator zero." }] }],
    },
    {
      question: "When does the angle-between-lines denominator vanish?",
      answer: [{ type: "paragraph", children: [{ text: "The denominator 1 + m1 m2 in the slope-angle formula vanishes when the two lines are perpendicular, which must be handled as a direct right-angle case." }] }],
    },
    {
      question: "What is point-line distance?",
      answer: [{ type: "paragraph", children: [{ text: "For a line Ax + By + C = 0, the distance from (x0, y0) is |Ax0 + By0 + C| divided by sqrt(A^2 + B^2)." }] }],
    },
    {
      question: "Which line-family topics are explicit in JEE Advanced but not JEE Main?",
      answer: [{ type: "paragraph", children: [{ text: "Lines through intersections, angle bisectors, incentre and shift-of-origin context are listed explicitly for JEE Advanced 2026 and not separately named for JEE Main 2026." }] }],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf"],
  sourceNote:
    "Line-form, angle and distance scope is verified against the official JEE Main 2026 and JEE Advanced 2026 syllabi only. Exact provenance only; no frequency claims.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Mathematics education editor with Analytic Geometry background.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Analytic Geometry. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics, or equivalent.",
    "Review scope: vertical-line cases, line forms, angle denominators, point-line distance and the Main versus Advanced scope split.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Straight Lines for JEE 2026: Slope, Angle and Distance",
    description:
      "Learn line forms, vertical-line handling, parallel and perpendicular conditions, angles, intersections and point-line distance for JEE.",
    ogTitle: "Straight Lines for JEE 2026",
    ogDescription: "Slope, equations, angles and distance reasoning for JEE straight lines.",
    ogType: "article",
  },
};

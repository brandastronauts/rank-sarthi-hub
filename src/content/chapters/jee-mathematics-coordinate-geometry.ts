import type { ChapterContent } from "@/content/types";

/**
 * Coordinate Geometry — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - This page is an umbrella: representation and routing only. It does not
 *   duplicate the full line, circle or conic method sets owned by the
 *   focused child pages.
 */
export const jeeMathematicsCoordinateGeometry: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Coordinate Geometry",
  slug: "coordinate-geometry",
  url: "/jee/mathematics/coordinate-geometry",
  canonicalIntent:
    "Choose an analytic representation for a planar geometry problem, understand coordinates, distance, section, slope and locus at overview level, and route to Straight Lines, Circles or the appropriate conic without duplicating focused pages.",

  heroChips: [
    "Explicit unit in the JEE Main 2026 Mathematics syllabus",
    "Explicit Analytical Geometry scope in JEE Advanced 2026",
    "Umbrella page: representation and routing, not full line/circle/conic methods",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Coordinate geometry converts geometric conditions into equations. Start by deciding what the unknown locus represents. A constant linear relation usually suggests a line, a fixed distance from a point suggests a circle, and a fixed focus/directrix or two-focus condition suggests a conic.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page owns representation and routing, while focused pages own complete line, circle and conic methods.",
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
      description: "Reading a relation between coordinates as a function or condition underlies locus reasoning.",
    },
    {
      label: "Vectors",
      url: "/jee/mathematics/vectors",
      relation: "related",
      description: "Vector reasoning offers an alternative representation for the same distance and direction ideas.",
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
      "Rectangular coordinates",
      "Distance formula",
      "Section formula",
      "Locus and its equation",
      "Slope",
      "Parallel and perpendicular lines",
      "Intercepts",
      "Straight-line forms, intersections and angles",
      "Concurrence and triangle centres",
      "Circle standard and general forms",
      "Standard parabola, ellipse and hyperbola",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "reasoning-architecture",
      title: "1. Follow the fixed reasoning path",
      keyIdea: "Geometric condition -> coordinate variables -> distance/slope relation -> simplify -> identify model -> route -> validate geometrically.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every coordinate geometry problem is worked by translating a geometric condition into coordinate variables, forming the distance or slope relation it implies, simplifying algebraically, identifying which model the simplified equation represents, routing to the correct focused page, and validating the result geometrically.",
            },
          ],
        },
      ],
    },
    {
      id: "model-identification",
      title: "2. Identify the locus before naming a formula",
      keyIdea: "Equal distance from two points, fixed distance from one point, and focus/directrix ratios point to different models.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A constant linear relation usually suggests a line, a fixed distance from a point suggests a circle, and a fixed focus/directrix or two-focus condition suggests a conic. Deciding this before reaching for a formula avoids misclassification.",
            },
          ],
        },
      ],
    },
    {
      id: "locus-principle",
      title: "3. Build a locus equation without losing equivalence",
      keyIdea: "Introduce (x, y) and translate the defining condition; the algebra must remain equivalent throughout.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Introduce a general point (x, y), translate the defining geometric condition into an algebraic statement about it, and simplify. Squaring both sides of a distance condition can introduce extraneous points, so the simplified equation should be checked against known points on the intended locus.",
            },
          ],
        },
      ],
    },
    {
      id: "distance-section-slope",
      title: "4. Apply distance, section and slope with their conditions",
      keyIdea: "The section formula needs the stated ratio direction; slope from two points requires distinct x-coordinates.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Distance between two coordinate points is nonnegative and symmetric. The internal section formula divides a segment in a stated ratio m:n with m, n greater than zero, and reversing the weights swaps which endpoint is favoured. Slope from two points requires the x-coordinates to differ; a vertical line has no finite slope.",
            },
          ],
        },
      ],
    },
    {
      id: "routing-boundary",
      title: "5. Route to the focused page instead of duplicating it",
      keyIdea: "This umbrella owns overview-level representation; complete line, circle and conic methods live on their own pages.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Once a locus is identified as a line, circle or conic, the complete method set for tangents, normals, intersections and parametric forms belongs to the corresponding focused page, not to this umbrella.",
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
          "Converting a stated geometric condition into coordinates, distance, section, slope and locus relations, then routing to the correct focused page.",
        ],
        [
          "What is the central method choice?",
          "Decide what model the locus condition represents before applying a formula: equal distance from two points, fixed distance from one point, or a focus/directrix ratio.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating this umbrella page as a full conic formula sheet, using the slope formula for a vertical line, and squaring a locus condition without checking equivalence.",
        ],
        [
          "What should come before Coordinate Geometry?",
          "Functions and graphs, algebraic equations, distance and Pythagorean reasoning, and basic trigonometry for slope and angle interpretation.",
        ],
        [
          "What comes after it?",
          "Straight Lines, Circles and Conic Sections, each owning the complete method set for its own object.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Coordinate Geometry",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Overall unit presence",
          "Explicit Co-ordinate Geometry unit covering rectangular coordinates, distance, section formula, locus, slope, line relationships, straight lines, circles and standard conics.",
          "Explicit Analytical Geometry section covering the two-dimensional analytic-geometry system in greater detail.",
          "Treat this page as an overview and routing layer over both official scopes.",
        ],
      ],
      note: "Sources: JEE Main and JEE Advanced official syllabi, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Coordinate Geometry",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Functions and graphs",
          "Read a relation between two variables as a graph or condition.",
          "Revise Functions.",
        ],
        [
          "Algebraic equations",
          "Expand, simplify and solve a quadratic or linear equation.",
          "Revise algebraic manipulation basics.",
        ],
        [
          "Distance and Pythagorean reasoning",
          "Compute the length of a segment from coordinate differences.",
          "Revise the Pythagorean theorem.",
        ],
        [
          "Basic trigonometry",
          "Interpret an angle in terms of a ratio for slope and angle reasoning.",
          "Revise basic trigonometric ratios.",
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
        ["Cartesian point", "Ordered pair (x, y) locating a point relative to perpendicular axes."],
        ["Locus", "Set of all points satisfying a stated geometric condition."],
        ["Coordinate equation", "Algebraic condition satisfied exactly by the intended locus after exclusions are preserved."],
        ["Distance", "Euclidean separation between coordinate points."],
        ["Section point", "Point dividing a segment in a stated ratio."],
        ["Slope", "Vertical change per horizontal change for a nonvertical line."],
        ["Analytic model", "Equation family chosen to represent the geometric object."],
      ],
    },
    {
      id: "formula-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records with conditions",
      columns: ["Record", "Expression", "Conditions", "Use when", "Common trap", "Validation"],
      rows: [
        [
          "Distance",
          "PQ = sqrt[(x2 - x1)^2 + (y2 - y1)^2]",
          "Real plane coordinates",
          "Point-to-point distance",
          "Dropping a square",
          "Nonnegative and symmetric",
        ],
        [
          "Midpoint",
          "((x1 + x2)/2, (y1 + y2)/2)",
          "Finite coordinates",
          "Segment midpoint",
          "Swapping coordinates",
          "Equal distances to endpoints",
        ],
        [
          "Internal section",
          "((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)) for AP:PB = m:n",
          "Standard internal division with m, n > 0",
          "Segment division",
          "Reversing weights",
          "m = n gives midpoint",
        ],
        [
          "Slope from points",
          "m = (y2 - y1)/(x2 - x1)",
          "x2 ≠ x1",
          "Nonvertical line",
          "Forcing finite slope on vertical line",
          "Rise over run",
        ],
        [
          "Locus principle",
          "Introduce (x, y) and translate defining condition",
          "Algebra must remain equivalent",
          "Build equation",
          "Extraneous points after squaring",
          "Substitute known points",
        ],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: identify the locus model first",
      columns: ["Condition signal", "Route"],
      rows: [
        ["Equal distance from two fixed points", "Squared-distance comparison"],
        ["Fixed distance from one point", "Circle route"],
        ["Linear relation or two points", "Straight Lines"],
        ["Focus/directrix ratio", "Conic Sections, then the focused conic"],
        ["Two-focus sum/difference condition", "Ellipse or Hyperbola"],
        ["Quadratic with circle-like structure", "Verify before classifying"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-perpendicular-bisector",
      slot: "concepts",
      heading: "Worked reasoning: locus equidistant from two points",
      jump: true,
      concepts: [
        {
          id: "equidistant-locus",
          title: "Find the locus of P(x, y) equidistant from A(-2, 0) and B(2, 0)",
          body: [
            { type: "paragraph", children: [{ text: "PA = PB." }] },
            { type: "paragraph", children: [{ text: "(x+2)^2 + y^2 = (x-2)^2 + y^2" }] },
            { type: "paragraph", children: [{ text: "x^2 + 4x + 4 = x^2 - 4x + 4" }] },
            { type: "paragraph", children: [{ text: "8x = 0, so x = 0." }] },
            {
              type: "paragraph",
              children: [
                {
                  text: "Validation: the y-axis is the perpendicular bisector of AB, so every point on it is equidistant from A and B.",
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
      id: "umbrella-as-formula-sheet",
      mistake: "Treating the umbrella page as a full conic formula sheet.",
      why: [{ type: "paragraph", children: [{ text: "This page owns representation and routing at overview level, not the complete formula set owned by focused conic pages." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the method selector to route to Straight Lines, Circles or the correct conic page for full formulas." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "vertical-slope",
      mistake: "Using the slope formula for a vertical line.",
      why: [{ type: "paragraph", children: [{ text: "Slope from two points requires distinct x-coordinates; a vertical line has no finite slope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether x2 equals x1 before applying the slope formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "squaring-without-check",
      mistake: "Squaring a locus condition without checking equivalence.",
      why: [{ type: "paragraph", children: [{ text: "Squaring both sides of a distance condition can introduce extraneous points not on the intended locus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Substitute known points on the intended locus back into the simplified equation to validate it." }] }],
      errorType: "execution-error",
    },
    {
      id: "premature-conic-classification",
      mistake: "Deciding conic type before standardising the equation.",
      why: [{ type: "paragraph", children: [{ text: "An unstandardised quadratic can resemble the wrong conic family before the equation is simplified." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Standardise the equation first, then classify by signs and denominators." }] }],
      errorType: "decision-error",
    },
    {
      id: "reversed-section-weights",
      mistake: "Reversing section formula weights.",
      why: [{ type: "paragraph", children: [{ text: "The ratio m:n determines which endpoint the section point is closer to; reversing it moves the point to the wrong side." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Match m and n to the stated ratio AP:PB exactly before substituting." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "prerequisite",
      description: "Reading a relation between coordinates as a condition underlies locus reasoning.",
    },
    {
      label: "Vectors",
      url: "/jee/mathematics/vectors",
      relation: "related",
      description: "An alternative representation for the same distance and direction ideas.",
    },
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "forward",
      description: "Complete line-form, angle and distance methods once a locus is identified as a line.",
    },
    {
      label: "Circles",
      url: "/jee/mathematics/circles",
      relation: "forward",
      description: "Complete circle equation, tangent and intersection methods once a locus is identified as a circle.",
    },
    {
      label: "Conic Sections",
      url: "/jee/mathematics/conic-sections",
      relation: "forward",
      description: "Comparison of parabola, ellipse and hyperbola once a locus involves a focus and directrix.",
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
      question: "What is a locus?",
      answer: [{ type: "paragraph", children: [{ text: "A locus is the set of all points satisfying a stated geometric condition." }] }],
    },
    {
      question: "When is slope undefined?",
      answer: [{ type: "paragraph", children: [{ text: "Slope is undefined for a vertical line, where the x-coordinates of any two points on the line are equal." }] }],
    },
    {
      question: "How do you choose a line, circle or conic model?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A constant linear relation suggests a line, a fixed distance from a point suggests a circle, and a fixed focus/directrix or two-focus condition suggests a conic.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the section formula?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The internal section formula gives the point dividing a segment AB in the ratio m:n as ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)), for m, n greater than zero.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf"],
  sourceNote:
    "Coordinate representation, distance, section, slope and locus scope is verified against the official JEE Main 2026 and JEE Advanced 2026 syllabi only. Exact provenance only; no frequency or importance inference.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Mathematics education editor with Analytic Geometry background.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Analytic Geometry. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics, or equivalent.",
    "Review scope: coordinate definitions, section weighting, locus equivalence, model selector and cannibalisation boundary against the focused child pages.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Coordinate Geometry for JEE 2026: Locus and Model Selection",
    description:
      "Learn JEE coordinate representation, distance, section, slope and locus reasoning, then choose Straight Lines, Circles or the correct conic route.",
    ogTitle: "Coordinate Geometry for JEE 2026",
    ogDescription: "Representation, locus and model-selection reasoning for JEE coordinate geometry.",
    ogType: "article",
  },
};

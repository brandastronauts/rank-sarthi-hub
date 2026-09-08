import type { ChapterContent } from "@/content/types";

/**
 * Conic Sections — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - This is an umbrella comparing parabola, ellipse and hyperbola by standard
 *   form and eccentricity; it routes to focused conic pages rather than
 *   duplicating their tangent, normal or parametric method sets. Foci,
 *   directrices, eccentricity, parametric equations and tangent/normal
 *   equations are explicit only in JEE Advanced 2026, not JEE Main 2026.
 */
export const jeeMathematicsConicSections: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Conic Sections",
  slug: "conic-sections",
  url: "/jee/mathematics/conic-sections",
  canonicalIntent:
    "Compare parabola, ellipse and hyperbola through focus/directrix geometry and eccentricity, choose the correct standard-form family, and route into the focused conic page without duplicating full tangent, normal or parametric treatment.",

  heroChips: [
    "Standard forms of parabola, ellipse and hyperbola are explicit in JEE Main 2026",
    "Foci, directrices, eccentricity and tangent/normal are explicit only in JEE Advanced 2026",
    "Umbrella page: comparison and routing, not full conic method sets",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For the nondegenerate conics used here, eccentricity is the focus-to-directrix distance ratio. e = 1 identifies a parabola, 0 < e < 1 an ellipse, and e > 1 a hyperbola.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Standard equations then determine orientation and parameters. This umbrella compares families and routes to focused pages rather than reproducing their full formula sets.",
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
      description: "Locus and distance reasoning underlie the focus/directrix definition of a conic.",
    },
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Distance reasoning used in the focus/directrix ratio builds on line and point-line distance methods.",
    },
    {
      label: "Circles",
      url: "/jee/mathematics/circles",
      relation: "prerequisite",
      description: "Circle standardisation is the reference case for separating a circle from an ellipse with unequal denominators.",
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
      "Standard forms of parabola, ellipse and hyperbola",
      "Foci and directrices (Advanced)",
      "Eccentricity (Advanced)",
      "Parametric equations (Advanced)",
      "Tangent and normal equations for conics (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "reasoning-architecture",
      title: "1. Follow the fixed reasoning path",
      keyIdea: "Standardise -> inspect signs/denominators -> identify family -> identify orientation -> route -> validate geometry.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Standardise the given equation, inspect the signs of the squared terms and their denominators, identify which conic family the pattern matches, identify orientation from which denominator is larger or which variable is squared, route to the corresponding focused page, and validate the classification geometrically.",
            },
          ],
        },
      ],
    },
    {
      id: "eccentricity-classification",
      title: "2. Classify by eccentricity",
      keyIdea: "e = 1 is a parabola, 0 < e < 1 is an ellipse, e > 1 is a hyperbola.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Eccentricity is the positive ratio of focus-distance to directrix-distance for a given conic definition. For the nondegenerate conics covered here, e = 1 identifies a parabola, 0 < e < 1 identifies an ellipse, and e > 1 identifies a hyperbola.",
            },
          ],
        },
      ],
    },
    {
      id: "sign-based-identification",
      title: "3. Use signs and denominators to identify the family",
      keyIdea: "One squared variable absent suggests a parabola; two positive squared terms suggest an ellipse or circle; opposite signs suggest a hyperbola.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "After standardising, an equation with one squared variable absent suggests a parabola. Two positive squared terms with unequal positive denominators suggest an ellipse, while equal denominators separate out to the circle route instead. Opposite signs on the two squared terms suggest a hyperbola.",
            },
          ],
        },
      ],
    },
    {
      id: "orientation-check",
      title: "4. Confirm orientation from the standard form",
      keyIdea: "The horizontal-major ellipse convention uses a > b > 0; swap orientation when the y semi-axis is larger.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The ellipse standard selector x^2/a^2 + y^2/b^2 = 1 uses the horizontal-major convention with a > b > 0. When the larger denominator instead appears under y^2, the orientation swaps to a vertical major axis, and this must be checked explicitly rather than assumed.",
            },
          ],
        },
      ],
    },
    {
      id: "umbrella-routing-boundary",
      title: "5. Route to the focused conic instead of duplicating its methods",
      keyIdea: "Tangent, normal and parametric detail belong to the focused child page, not this umbrella.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Once a conic family and orientation are identified, tangent, normal, parameter and further focus/directrix detail belong to the focused parabola, ellipse or hyperbola page. Rotated or cross-term equations and other degenerate cases require verification before any classification is published.",
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
          "Comparing parabola, ellipse and hyperbola by standard form, sign pattern and eccentricity, then routing to the focused conic page.",
        ],
        [
          "What is the central method choice?",
          "Standardise the equation, read the signs and denominators of the squared terms, and classify by eccentricity before routing.",
        ],
        [
          "Where do most mistakes begin?",
          "Copying one conic's formula and changing a sign, confusing eccentricity ranges, and duplicating child-page tangent or normal material on this umbrella.",
        ],
        [
          "What should come before Conic Sections?",
          "Coordinate Geometry, Straight Lines and Circles, for locus, distance and standardisation reasoning.",
        ],
        [
          "What comes after it?",
          "Parabola, Ellipse and Hyperbola, each owning its complete standard-form, focus, tangent and parametric method set.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Conic Sections",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Standard forms",
          "Explicitly lists parabola, ellipse and hyperbola in standard forms.",
          "Explicitly includes standard forms as part of a fuller treatment.",
          "Standard-form recognition and routing is common to both papers.",
        ],
        [
          "Foci, directrices, eccentricity, parametric forms, tangent/normal",
          "Not separately named.",
          "Explicitly includes foci, directrices, eccentricity, parametric equations and tangent/normal equations for parabola, ellipse and hyperbola.",
          "Keep this detail labelled as Advanced-explicit and reserved for the focused conic pages.",
        ],
      ],
      note: "Sources: JEE Main and JEE Advanced official syllabi, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Conic Sections",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Coordinate Geometry",
          "Translate a geometric condition into a coordinate equation.",
          "Revise Coordinate Geometry.",
        ],
        [
          "Straight Lines",
          "Compute distance from a point to a line.",
          "Revise Straight Lines.",
        ],
        [
          "Distance",
          "Compute the Euclidean distance between two coordinate points.",
          "Revise the distance formula in Coordinate Geometry.",
        ],
        [
          "Quadratic standardisation",
          "Rewrite a quadratic expression in a completed-square or standard form.",
          "Revise Circles, which uses the same standardisation step.",
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
        ["Focus", "Fixed point used in the focus/directrix definition."],
        ["Directrix", "Fixed line used in the distance-ratio definition."],
        ["Eccentricity", "Positive focus-distance/directrix-distance ratio for this conic definition."],
        ["Parabola", "Nondegenerate conic with e = 1."],
        ["Ellipse", "Nondegenerate conic with 0 < e < 1."],
        ["Hyperbola", "Nondegenerate conic with e > 1."],
        ["Standard form", "Axis-aligned equation exposing orientation and parameters."],
      ],
    },
    {
      id: "conic-selector",
      jump: true,
      slot: "formulas",
      heading: "Formula and comparison records with conditions",
      columns: ["Conic", "Standard selector", "Conditions", "Eccentricity", "Routing note"],
      rows: [
        ["Parabola", "y^2 = 4ax or an orientation variant", "Focused page uses a > 0 and explicit orientation", "e = 1", "Route to Parabola"],
        ["Ellipse", "x^2/a^2 + y^2/b^2 = 1", "Horizontal-major convention a > b > 0", "0 < e < 1", "Swap orientation when the y semi-axis is larger"],
        ["Hyperbola", "x^2/a^2 - y^2/b^2 = 1", "a, b > 0", "e > 1", "Opposite squared signs"],
      ],
      note: "Circle remains a separate approved route. This selector is for the three focused conic children.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Standardised-equation signal", "Route"],
      rows: [
        ["One squared variable absent", "Parabola"],
        ["Two positive squared terms with unequal denominators", "Ellipse"],
        ["Two positive squared terms with equal denominators", "Circle"],
        ["Opposite squared signs", "Hyperbola"],
        ["Focus/directrix ratio given", "Classify by eccentricity"],
        ["Tangent, normal or parameter needed", "Focused child page"],
        ["Rotated or cross-term equation, or degenerate case", "Verify before indexation"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-classification",
      slot: "concepts",
      heading: "Worked reasoning: classify a standardised conic",
      jump: true,
      concepts: [
        {
          id: "classify-example",
          title: "Classify 9x^2 + 4y^2 = 36",
          body: [
            { type: "paragraph", children: [{ text: "Divide by 36: x^2/4 + y^2/9 = 1." }] },
            { type: "paragraph", children: [{ text: "Same-sign squared terms and unequal positive denominators identify an ellipse. The larger denominator under y^2 means a vertical major axis." }] },
            { type: "paragraph", children: [{ text: "Route: /jee/mathematics/ellipse." }] },
            { type: "paragraph", children: [{ text: "Validation: not a circle, because the denominators differ; not a hyperbola, because the signs match." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "formula-copy-sign-change",
      mistake: "Copying one conic's formula and changing a sign without rechecking the classification.",
      why: [{ type: "paragraph", children: [{ text: "Changing a sign changes which conic the equation represents; it must be reclassified, not assumed to still fit the original family." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Reclassify from the standardised equation each time, using the sign and denominator pattern." }] }],
      errorType: "execution-error",
    },
    {
      id: "eccentricity-range-confusion",
      mistake: "Confusing the eccentricity ranges for ellipse and hyperbola.",
      why: [{ type: "paragraph", children: [{ text: "0 < e < 1 identifies an ellipse and e > 1 identifies a hyperbola; these ranges are easy to transpose." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the eccentricity value against both range boundaries before naming the conic." }] }],
      errorType: "recall-gap",
    },
    {
      id: "orientation-check-skipped",
      mistake: "Failing to check which denominator is larger before stating orientation.",
      why: [{ type: "paragraph", children: [{ text: "The major axis direction depends on which of a^2 and b^2 is larger, not on which variable comes first in the equation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare the two denominators explicitly before stating whether the major axis is horizontal or vertical." }] }],
      errorType: "execution-error",
    },
    {
      id: "circle-as-ordinary-ellipse",
      mistake: "Treating an equal-denominator case as an ordinary ellipse routing.",
      why: [{ type: "paragraph", children: [{ text: "Equal denominators under x^2 and y^2 give a circle, which is a separate approved route, not an ellipse." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the two denominators are equal before routing to Ellipse instead of Circles." }] }],
      errorType: "decision-error",
    },
    {
      id: "umbrella-duplicates-child",
      mistake: "Duplicating child-page tangent, normal or parametric material on this umbrella.",
      why: [{ type: "paragraph", children: [{ text: "This page owns comparison and routing at overview level; the full method set for each conic belongs to its own focused page." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Route to the focused conic page for tangent, normal and parametric detail instead of repeating it here." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Locus and distance reasoning underlie the focus/directrix definition of a conic.",
    },
    {
      label: "Straight Lines",
      url: "/jee/mathematics/straight-lines",
      relation: "prerequisite",
      description: "Distance reasoning used in the focus/directrix ratio.",
    },
    {
      label: "Circles",
      url: "/jee/mathematics/circles",
      relation: "related",
      description: "The equal-denominator reference case that separates a circle from an ellipse.",
    },
    {
      label: "Parabola",
      url: "/jee/mathematics/parabola",
      relation: "forward",
      description: "Complete standard-form, focus, directrix, tangent and parametric methods for e = 1.",
    },
    {
      label: "Ellipse",
      url: "/jee/mathematics/ellipse",
      relation: "forward",
      description: "Complete standard-form, focus, directrix, tangent and parametric methods for 0 < e < 1.",
    },
    {
      label: "Hyperbola",
      url: "/jee/mathematics/hyperbola",
      relation: "forward",
      description: "Complete standard-form, focus, directrix, tangent and parametric methods for e > 1.",
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
      question: "How does eccentricity distinguish conics?",
      answer: [{ type: "paragraph", children: [{ text: "e = 1 identifies a parabola, 0 < e < 1 identifies an ellipse, and e > 1 identifies a hyperbola, for the nondegenerate conics covered here." }] }],
    },
    {
      question: "How do signs identify a conic from its standardised equation?",
      answer: [{ type: "paragraph", children: [{ text: "One squared variable absent suggests a parabola, two positive squared terms suggest an ellipse or circle, and opposite squared signs suggest a hyperbola." }] }],
    },
    {
      question: "Are focus and directrix details explicit in JEE Main 2026?",
      answer: [{ type: "paragraph", children: [{ text: "No. Foci, directrices, eccentricity, parametric equations and tangent/normal equations are explicit in JEE Advanced 2026, not separately named in JEE Main 2026." }] }],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf"],
  sourceNote:
    "Standard-form, eccentricity and routing scope is verified against the official JEE Main 2026 and JEE Advanced 2026 syllabi only. Main standard-form scope is not inflated with Advanced focal or tangent detail. Exact provenance only.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Mathematics education editor with Analytic Geometry background.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Analytic Geometry. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics, or equivalent.",
    "Review scope: focus/directrix concept, eccentricity ranges, standard-form selector and the umbrella-versus-child boundary.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Conic Sections for JEE 2026: Parabola, Ellipse, Hyperbola",
    description:
      "Compare JEE parabola, ellipse and hyperbola by standard form, orientation, focus/directrix idea and eccentricity, then choose the focused route.",
    ogTitle: "Conic Sections for JEE 2026",
    ogDescription: "Parabola, ellipse and hyperbola comparison and routing for JEE conic sections.",
    ogType: "article",
  },
};

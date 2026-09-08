import type { ChapterContent } from "@/content/types";

/**
 * Area Under Curves — T06 production content (M02-09).
 *
 * Evidence discipline:
 * - No weightage, frequency or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 */
export const jeeMathematicsAreaUnderCurves: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Area Under Curves",
  slug: "area-under-curves",
  url: "/jee/mathematics/area-under-curves",
  canonicalIntent:
    "Use definite integration to find nonnegative geometric areas bounded by simple curves by locating intersections, deciding which curve is above or to the right, and splitting intervals whenever sign or curve order changes.",

  heroChips: [
    "Explicit in both JEE Main 2026 Unit 8 and JEE Advanced 2026 Integral Calculus",
    "Geometric area is always nonnegative, unlike a signed definite integral",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        { text: "A definite integral is signed, but geometric area is nonnegative." },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Before integrating, find relevant intersections and determine which curve is above the other on each interval. If a curve crosses the axis, or two curves exchange order, split the interval. Geometric area is obtained from the magnitude of the vertical or horizontal difference, not by accepting a negative signed integral as an area.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Definite Integrals",
      url: "/jee/mathematics/definite-integrals",
      relation: "prerequisite",
      description: "Fixed-limit evaluation and sign handling are required before geometric area setup.",
    },
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Locating intersections and reading curve order depends on coordinate-geometry reasoning.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Integral Calculus",
    topics: [
      "Areas bounded by simple curves",
      "Application of definite integrals to area determination",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "identify-boundaries",
      title: "1. Identify all region boundaries",
      keyIdea: "A correct integral setup starts from a clear description of the bounded region.",
      body: [
        { type: "paragraph", children: [{ text: "Identify all curves and lines forming the boundary of the region before setting up any integral." }] },
      ],
    },
    {
      id: "solve-intersections",
      title: "2. Solve intersections before setting limits",
      keyIdea: "Limits of integration come from intersection points, not assumption.",
      body: [
        { type: "paragraph", children: [{ text: "Solve for intersection points of the bounding curves before choosing the limits of integration." }] },
      ],
    },
    {
      id: "test-order",
      title: "3. Test which curve is above or rightmost",
      keyIdea: "Order must be tested, not assumed from the equations alone.",
      body: [
        { type: "paragraph", children: [{ text: "Test which curve is above on each x-interval, or which curve is rightmost on each y-interval, using a sample point." }] },
      ],
    },
    {
      id: "split-on-order-change",
      title: "4. Split wherever ordering changes",
      keyIdea: "A single integral across an order change gives an incorrect area.",
      body: [
        { type: "paragraph", children: [{ text: "Split the interval wherever the curve ordering changes, and integrate each piece separately." }] },
      ],
    },
    {
      id: "integrate-positive-difference",
      title: "5. Integrate top minus bottom or right minus left",
      keyIdea: "Always integrate the nonnegative difference on each piece.",
      body: [
        { type: "paragraph", children: [{ text: "Integrate top minus bottom, or right minus left, ensuring the integrand is nonnegative on each piece." }] },
      ],
    },
    {
      id: "add-and-check",
      title: "6. Add nonnegative piece areas and sanity-check",
      keyIdea: "Sanity-check the total against the sketch and a rough bounding rectangle.",
      body: [
        { type: "paragraph", children: [{ text: "Add the nonnegative areas of all pieces, then sanity-check the total against the sketch and a rough bounding rectangle." }] },
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
          "Using definite integrals to compute nonnegative geometric area bounded by simple curves, with intersections and interval splitting.",
        ],
        [
          "What is the central method choice?",
          "Locate intersections, determine curve order on each interval, split where order changes, and integrate the nonnegative difference.",
        ],
        [
          "Where do most mistakes begin?",
          "Reporting a negative signed integral as area, missing an intersection, and using top-minus-bottom after curves exchange order.",
        ],
        [
          "What should come before Area Under Curves?",
          "Definite Integrals for fixed-limit evaluation, and Coordinate Geometry for intersection and order reasoning.",
        ],
        [
          "What comes after it?",
          "Differential Equations continues the integral-calculus sequence with equations relating functions and derivatives.",
        ],
      ],
      note: "Official JEE syllabus documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Area Under Curves",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Area determination",
          "Explicitly includes determining areas of regions bounded by simple curves in standard forms.",
          "Explicitly includes application of definite integrals to determination of areas bounded by simple curves.",
          "Both papers restrict scope to simple bounded curves; do not expand into unsupported complex-region theory.",
        ],
      ],
      note: "Sources: official Main Unit 8 area scope and official Advanced Integral Calculus area scope, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Area Under Curves",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        ["Definite integrals", "Evaluate ∫_a^b f(x)dx with the Fundamental Theorem.", "Revise Definite Integrals."],
        ["Graphing simple functions", "Sketch a simple polynomial or trigonometric curve.", "Revise function graphs."],
        ["Coordinate intersections", "Solve two equations simultaneously for intersection points.", "Revise Coordinate Geometry."],
        ["Function sign analysis", "Determine where a function is positive or negative on an interval.", "Revise sign-chart methods."],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "formula-records",
      jump: true,
      slot: "formulas",
      heading: "Area formulas and their conditions",
      columns: ["Record", "Expression", "Conditions", "Trap", "Validation"],
      rows: [
        ["Area above x-axis", "A = ∫_a^b f(x)dx", "f(x) ≥ 0 on [a,b] and integrable", "Using when f changes sign", "Sign chart"],
        ["General axis area", "A = ∫_a^b |f(x)|dx", "f integrable; split at zeros for practical evaluation", "Dropping absolute value", "Area nonnegative"],
        ["Area between two curves", "A = ∫_a^b [f(x)-g(x)]dx", "f(x) ≥ g(x) throughout interval", "Assuming order without check", "Test point/order"],
        ["General between-curves area", "A = ∫_a^b |f(x)-g(x)|dx", "Integrable; practical splitting at intersections/order changes", "One signed integral across crossings", "Intersection list"],
        ["Horizontal slicing", "A = ∫_c^d [x_right(y)-x_left(y)]dy", "Region is correctly represented horizontally", "Forcing dx when functions are multivalued in x", "Sketch"],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector for area problems",
      intro: "Match the region signal to the correct first approach.",
      columns: ["Region signal", "First approach"],
      rows: [
        ["One curve and x-axis, no sign change", "Direct nonnegative integral"],
        ["Curve crosses x-axis", "Locate zeros and split"],
        ["Two curves", "Solve intersections, determine top/bottom"],
        ["Vertical representation becomes multi-branch", "Consider horizontal slicing"],
        ["Symmetric region", "Use symmetry only after geometric and integrand validation"],
        ["Closed region unclear from algebra", "Sketch before integrating"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-line-parabola",
      slot: "concepts",
      heading: "Worked reasoning: area between y=x and y=x²",
      jump: true,
      concepts: [
        {
          id: "worked-x-x2-area",
          title: "Find the area between y=x and y=x² on [0,1]",
          body: [
            { type: "paragraph", children: [{ text: "Known: intersections satisfy x=x², so x=0 or x=1." }] },
            { type: "paragraph", children: [{ text: "Method choice: on (0,1), x>x², so the line is above the parabola." }] },
            { type: "paragraph", children: [{ text: "A = ∫_0^1 (x-x²)dx = [x²/2-x³/3]_0^1 = 1/2-1/3 = 1/6." }] },
            { type: "paragraph", children: [{ text: "Validity check: the integrand x-x²=x(1-x) is nonnegative on [0,1], so the computed area is positive and no further split is required." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "negative-integral-as-area",
      mistake: "Reporting a negative definite integral as geometric area.",
      why: [{ type: "paragraph", children: [{ text: "Geometric area is nonnegative by definition; a negative signed integral indicates the curve lies below the axis on that interval." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Take the magnitude of the signed integral, or split and integrate |f(x)-g(x)|, to get geometric area." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "missed-intersections",
      mistake: "Failing to find all intersections.",
      why: [{ type: "paragraph", children: [{ text: "Missing an intersection point produces incorrect limits or a missed order change." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Solve the intersection equation completely before setting up limits." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-order-after-crossing",
      mistake: "Using top-minus-bottom after the curves exchange order.",
      why: [{ type: "paragraph", children: [{ text: "Once curves cross, the previously top curve may become the bottom curve on the next interval." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Re-test curve order with a sample point after every intersection before integrating the next piece." }] }],
      errorType: "decision-error",
    },
    {
      id: "wrong-split-points",
      mistake: "Splitting at irrelevant points but missing sign-changing points.",
      why: [{ type: "paragraph", children: [{ text: "Only points where sign or curve order actually changes require a split; other points do not." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify sign-changing and order-changing points specifically, rather than splitting arbitrarily." }] }],
      errorType: "execution-error",
    },
    {
      id: "odd-integral-vs-positive-area",
      mistake: "Forgetting that an odd-function integral on a symmetric interval can be zero while geometric area is positive.",
      why: [{ type: "paragraph", children: [{ text: "A zero signed integral from odd symmetry does not imply the bounded geometric area is zero." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use |f(x)|, or split at the zero, to compute geometric area rather than relying on the signed symmetric result." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "every-integral-is-area",
      mistake: "Calling every definite integral an area problem.",
      why: [{ type: "paragraph", children: [{ text: "A definite integral is a signed accumulation; it becomes a geometric-area problem only when the question asks for area explicitly." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the question asks for the signed integral value or for geometric area before answering." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Definite Integrals",
      url: "/jee/mathematics/definite-integrals",
      relation: "prerequisite",
      description: "Fixed-limit evaluation and sign handling are required before geometric area setup.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "same-unit",
      description: "Broader calculus unit that Area Under Curves belongs to.",
    },
    {
      label: "Differential Equations",
      url: "/jee/mathematics/differential-equations",
      relation: "forward",
      description: "Continues the integral-calculus sequence with equations relating functions and derivatives.",
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
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Intersection and order reasoning approved route; render only when its route state permits.",
    },
  ],

  faqs: [
    {
      question: "Why can a definite integral be negative but area cannot?",
      answer: [{ type: "paragraph", children: [{ text: "A definite integral is a signed accumulation that can be negative when the curve lies below the axis; geometric area is defined to be nonnegative." }] }],
    },
    {
      question: "How do you find area between two curves?",
      answer: [{ type: "paragraph", children: [{ text: "Solve for their intersections, determine which curve is above on each interval, and integrate top minus bottom, splitting where order changes." }] }],
    },
    {
      question: "When must the interval be split?",
      answer: [{ type: "paragraph", children: [{ text: "Whenever the curve crosses the axis or two curves exchange order within the region." }] }],
    },
    {
      question: "When should horizontal strips be used?",
      answer: [{ type: "paragraph", children: [{ text: "When the region is more simply represented as x as a function of y, particularly when the vertical representation becomes multi-branch." }] }],
    },
  ],

  sources: ["nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar-12-integrals"],
  sourceNote:
    "Use exact paper and question provenance only for worked examples. No 'common area type' or historical frequency claim is made.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Calculus/Mathematical Analysis educator with coordinate-geometry competence.",
    "Academically reviewed by: unassigned. Reviewer specialisation: intersection logic, sign/area distinction, vertical/horizontal setup. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics.",
    "Review scope: intersection logic, sign/area distinction, vertical/horizontal setup, splitting and official simple-curve scope.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Area Under Curves for JEE 2026: Area Between Curves",
    description:
      "Learn geometric area with definite integrals, intersections, curve ordering, sign changes and interval splitting for JEE Main and Advanced.",
    ogTitle: "Area Under Curves for JEE 2026",
    ogDescription: "Intersections, curve order, interval splitting, and worked area reasoning.",
    ogType: "article",
  },
};

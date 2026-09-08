import type { ChapterContent } from "@/content/types";

/**
 * 3D Geometry — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - JEE Main 2026 Unit 11 covers coordinates, distance, section formula,
 *   direction ratios/cosines, angle between intersecting lines, line
 *   equations, skew lines and shortest distance between skew lines. It does
 *   NOT list planes, point-plane distance, angle between planes, or angle
 *   between a line and a plane. All plane content on this page is explicit
 *   JEE Advanced 2026 scope and is labelled as such, never flattened into
 *   generic Main-plus-Advanced wording.
 */
export const jeeMathematicsThreeDGeometry: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "JEE Main and JEE Advanced",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "3D Geometry",
  slug: "3d-geometry",
  url: "/jee/mathematics/3d-geometry",
  canonicalIntent:
    "Represent lines in space with nonzero direction vectors, compute angles and shortest distances, distinguish intersecting, parallel and skew lines, and use planes only for the explicitly broader JEE Advanced scope.",

  heroChips: [
    "JEE Main 2026 Unit 11 does not list planes",
    "Every line needs a nonzero direction vector",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "In three dimensions, a line is represented by a point and a nonzero direction vector.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "JEE Main 2026 focuses on points, line direction, line angles, skew lines and the shortest distance between them. JEE Advanced 2026 additionally includes planes, point-plane distance, and angle relationships between lines and planes and between two planes.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Plane formulas on this page are explicitly JEE Advanced 2026 scope. The official JEE Main 2026 Unit 11 does not list equations of planes, point-plane distance, angle between planes, or angle between a line and a plane.",
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
      label: "Vectors",
      url: "/jee/mathematics/vectors",
      relation: "prerequisite",
      description: "Dot and cross products underlie line-angle and shortest-distance formulas in three dimensions.",
    },
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Coordinate and distance reasoning extend directly into three-dimensional space.",
    },
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Three Dimensional Geometry",
    topics: [
      "Coordinates of a point in space",
      "Distance between two points",
      "Section formula",
      "Direction ratios and direction cosines",
      "Angle between two intersecting lines",
      "Equation of a line",
      "Skew lines",
      "Shortest distance between skew lines",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "points-and-directions",
      title: "1. Fix the point and nonzero direction for each line",
      keyIdea: "A line requires a point on it and a nonzero direction vector.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Write each line as a point plus a nonzero direction vector, r = a + λd with d ≠ 0. This representation underlies every angle and distance computation that follows.",
            },
          ],
        },
      ],
    },
    {
      id: "parallel-intersection-test",
      title: "2. Test whether the lines are parallel, intersecting or skew",
      keyIdea: "Compare directions first, then test for intersection before concluding lines are skew.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Check whether the two direction vectors are parallel. If they are not parallel, test whether the lines actually intersect. Only nonparallel lines that fail to intersect are skew lines.",
            },
          ],
        },
      ],
    },
    {
      id: "method-by-case",
      title: "3. Choose the dot, cross or triple-product method by case",
      keyIdea: "Angle uses the dot product; nonparallel shortest distance uses the cross product in the denominator.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use the dot product for the angle between two lines. Use the cross-product-based shortest-distance formula for nonparallel lines, with the cross product required to be nonzero, and the parallel-line distance formula when the directions coincide.",
            },
          ],
        },
      ],
    },
    {
      id: "advanced-plane-gate",
      title: "4. Gate plane content to JEE Advanced scope",
      keyIdea: "Introduce a plane, its normal, or plane-angle formulas only when the question is explicitly JEE Advanced scope.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A plane is represented by a nonzero normal vector. Point-plane distance, angle between two planes, and angle between a line and a plane are explicit JEE Advanced 2026 topics and are not part of the current JEE Main 2026 Unit 11 list.",
            },
          ],
        },
      ],
    },
    {
      id: "validate-result",
      title: "5. Validate against the representation used",
      keyIdea: "Check that direction ratios, denominators and normals are nonzero throughout.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Validate that every direction ratio used as a denominator is nonzero, that any cross product used in a distance formula is nonzero, and that plane normals are nonzero before finalising a result.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "point-distance",
      expression: "d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]",
      meaning: "Distance between two points in three-dimensional space.",
      variables: [{ symbol: "(x₁,y₁,z₁), (x₂,y₂,z₂)", meaning: "coordinates of the two points" }],
      useWhen: "Real coordinates in space.",
      commonTrap: "Omitting the z-component.",
      accessibleText: "The distance equals the square root of the sum of the squares of the coordinate differences.",
    },
    {
      id: "direction-cosines",
      expression: "l² + m² + n² = 1",
      meaning: "Relation satisfied by the direction cosines of a line.",
      variables: [{ symbol: "l, m, n", meaning: "direction cosines" }],
      useWhen: "Converting direction ratios to direction cosines.",
      commonTrap: "Using unnormalised direction ratios as if they were direction cosines.",
      accessibleText: "The sum of the squares of the direction cosines equals one.",
    },
    {
      id: "line-vector-form",
      expression: "r = a + λd",
      meaning: "Vector equation of a line through point a with direction d.",
      variables: [{ symbol: "d", meaning: "nonzero direction vector" }],
      useWhen: "d ≠ 0.",
      commonTrap: "Using a zero direction vector.",
      accessibleText: "The position vector r equals a plus lambda times d, and requires d to be nonzero.",
    },
    {
      id: "symmetric-line",
      expression: "(x−x₀)/l = (y−y₀)/m = (z−z₀)/n",
      meaning: "Symmetric (Cartesian) form of a line through (x₀, y₀, z₀) with direction ratios l, m, n.",
      variables: [{ symbol: "l, m, n", meaning: "direction ratios used as denominators" }],
      useWhen: "Any denominator direction ratio used must be nonzero; a zero component requires the corresponding fixed-coordinate equation instead.",
      commonTrap: "Dividing by a zero direction ratio.",
      accessibleText: "The symmetric form equates the three ratios of coordinate differences to direction ratios, and each denominator used must be nonzero.",
    },
    {
      id: "angle-between-lines",
      expression: "cosθ = |d₁·d₂| / (|d₁||d₂|)",
      meaning: "Angle between two lines using their direction vectors, acute-angle convention.",
      variables: [{ symbol: "d₁, d₂", meaning: "nonzero direction vectors" }],
      useWhen: "d₁ ≠ 0 and d₂ ≠ 0.",
      commonTrap: "Omitting the absolute value and getting the obtuse angle instead of the acute convention.",
      accessibleText: "The cosine of the angle between two lines equals the absolute value of the dot product of their directions, divided by the product of their magnitudes.",
    },
    {
      id: "shortest-distance-nonparallel",
      expression: "D = |(a₂−a₁)·(d₁×d₂)| / |d₁×d₂|",
      meaning: "Shortest distance between two nonparallel (skew or intersecting) lines.",
      variables: [{ symbol: "a₁, a₂", meaning: "points on the first and second line" }],
      useWhen: "d₁×d₂ ≠ 0.",
      commonTrap: "Applying this formula when the lines are parallel, making the cross product zero.",
      accessibleText: "The shortest distance equals the absolute value of the scalar triple product of the connecting vector and the cross product of the directions, divided by the magnitude of that cross product.",
    },
    {
      id: "parallel-line-distance",
      expression: "D = |(a₂−a₁)×d| / |d|",
      meaning: "Distance between two parallel lines sharing common direction d.",
      variables: [{ symbol: "d", meaning: "nonzero common parallel direction" }],
      useWhen: "The two lines have parallel, hence proportional, direction vectors.",
      commonTrap: "Using the nonparallel shortest-distance formula when directions are parallel.",
      accessibleText: "The distance between two parallel lines equals the magnitude of the cross product of the connecting vector and the common direction, divided by the magnitude of that direction.",
    },
    {
      id: "coplanar-lines",
      expression: "(a₂−a₁)·(d₁×d₂) = 0",
      meaning: "Advanced coplanarity context: test for whether two lines lie in a common plane.",
      variables: [{ symbol: "d₁, d₂", meaning: "nonzero direction vectors" }],
      useWhen: "d₁ ≠ 0 and d₂ ≠ 0.",
      commonTrap: "Treating this test as sufficient without checking whether the lines are also parallel or intersecting.",
      accessibleText: "Two lines are coplanar exactly when the scalar triple product of the connecting vector and the two directions is zero.",
    },
    {
      id: "plane-point-normal",
      expression: "n·(r−a) = 0",
      meaning: "Advanced scope only: equation of a plane through point a with normal n.",
      variables: [{ symbol: "n", meaning: "nonzero normal vector" }],
      useWhen: "JEE Advanced 2026 plane questions; n ≠ 0.",
      commonTrap: "Presenting this as JEE Main 2026 scope.",
      accessibleText: "A plane through point a with normal n consists of all points r for which n dotted with r minus a equals zero, and requires n to be nonzero.",
    },
    {
      id: "general-plane",
      expression: "Ax + By + Cz + D = 0",
      meaning: "Advanced scope only: general Cartesian equation of a plane.",
      variables: [{ symbol: "A, B, C", meaning: "components of the plane's normal, not all zero" }],
      useWhen: "JEE Advanced 2026 plane questions; (A,B,C) ≠ (0,0,0).",
      commonTrap: "Presenting this as JEE Main 2026 scope.",
      accessibleText: "The general equation of a plane is A x plus B y plus C z plus D equals zero, and requires A, B, C to not all be zero.",
    },
    {
      id: "point-plane-distance",
      expression: "D = |Ax₀ + By₀ + Cz₀ + D| / √(A²+B²+C²)",
      meaning: "Advanced scope only: distance from a point to a plane.",
      variables: [{ symbol: "(x₀,y₀,z₀)", meaning: "the given point" }],
      useWhen: "JEE Advanced 2026 plane questions; normal nonzero.",
      commonTrap: "Presenting this as JEE Main 2026 scope.",
      accessibleText: "The distance from a point to a plane equals the absolute value of the plane expression at that point, divided by the magnitude of the normal.",
    },
    {
      id: "angle-between-planes",
      expression: "cosθ = |n₁·n₂| / (|n₁||n₂|)",
      meaning: "Advanced scope only: angle between two planes using their normals.",
      variables: [{ symbol: "n₁, n₂", meaning: "nonzero normal vectors" }],
      useWhen: "JEE Advanced 2026 plane questions; normals nonzero.",
      commonTrap: "Presenting this as JEE Main 2026 scope.",
      accessibleText: "The cosine of the angle between two planes equals the absolute value of the dot product of their normals, divided by the product of their magnitudes.",
    },
    {
      id: "angle-line-plane",
      expression: "sinφ = |d·n| / (|d||n|)",
      meaning: "Advanced scope only: angle between a line and a plane.",
      variables: [{ symbol: "d, n", meaning: "nonzero line direction and plane normal" }],
      useWhen: "JEE Advanced 2026 plane questions; d ≠ 0 and n ≠ 0.",
      commonTrap: "Using cosine instead of sine for this angle.",
      accessibleText: "The sine of the angle between a line and a plane equals the absolute value of the dot product of the line direction and the plane normal, divided by the product of their magnitudes.",
    },
    {
      id: "line-parallel-to-plane",
      expression: "d·n = 0",
      meaning: "Advanced scope only: condition for a line to be parallel to a plane.",
      variables: [{ symbol: "d, n", meaning: "nonzero line direction and plane normal" }],
      useWhen: "JEE Advanced 2026 plane questions; d ≠ 0 and n ≠ 0.",
      commonTrap: "Concluding the line lies in the plane without an additional point test.",
      accessibleText: "A line with direction d is parallel to a plane with normal n exactly when their dot product is zero; a point test distinguishes lying in the plane from being a distinct parallel line.",
    },
  ],

  workedExamples: [
    {
      id: "skew-shortest-distance",
      prompt: "Show that L1: r = (0,0,0) + λ(1,0,0) and L2: r = (0,1,1) + μ(0,1,0) are skew, and find the shortest distance between them.",
      steps: [
        { type: "paragraph", children: [{ text: "The directions (1,0,0) and (0,1,0) are not parallel. L1 always has z = 0, while L2 always has z = 1, so the lines cannot intersect and are therefore skew." }] },
        { type: "paragraph", children: [{ text: "d₁×d₂ = (0,0,1), and a₂−a₁ = (0,1,1)." }] },
        { type: "paragraph", children: [{ text: "D = |(0,1,1)·(0,0,1)| / |(0,0,1)| = |1| / 1 = 1." }] },
        { type: "paragraph", children: [{ text: "Validation: the segment from (0,0,0) to (0,0,1) has length 1 and is perpendicular to both direction vectors." }] },
      ],
      answer: "D = 1",
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "Representing lines in space, testing parallel/intersecting/skew status, computing angles and shortest distances, and, for Advanced scope, working with planes."],
        ["What is the central method choice?", "Fix point and nonzero direction, test the relationship between lines, then select the dot, cross or triple-product method for the required quantity."],
        ["Where do most mistakes begin?", "Calling nonparallel lines skew without an intersection test, dividing by a zero direction ratio, and presenting plane formulas as JEE Main 2026 scope."],
        ["What should come before this chapter?", "Vectors and Coordinate Geometry, for direction-vector and coordinate reasoning."],
        ["What comes after it?", "Onward practice depends on verified route and paper availability."],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for 3D Geometry",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Points, directions and lines",
          "Unit 11 explicitly includes coordinates in space, distance, section formula, direction ratios and direction cosines, angle between intersecting lines, line equations, skew lines and shortest distance between skew lines.",
          "Explicitly includes 3D lines, skew lines, shortest distance and coplanar lines.",
        ],
        [
          "Planes",
          "Not listed. The official JEE Main 2026 Unit 11 does not list equations of planes, point-plane distance, angle between planes, or angle between a line and a plane.",
          "Explicitly includes planes, point-plane distance, line-line, plane-plane and line-plane angles.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Angle between two lines", "Dot product of directions", "Both directions nonzero"],
        ["Directions are parallel", "Parallel-line distance case", "Common direction nonzero"],
        ["Directions are not parallel", "Test intersection, then skew if none found", "Cross product of directions"],
        ["Shortest distance, nonparallel lines", "Cross-product-based formula", "d₁×d₂ ≠ 0"],
        ["Plane requested", "Advanced-scope gate", "Confirm JEE Advanced context before using plane formulas"],
        ["Point to plane, Advanced scope", "Plane normal formula", "Normal vector nonzero"],
        ["Line to plane angle, Advanced scope", "Direction versus normal, sine relation", "Both vectors nonzero"],
      ],
    },
  ],

  mistakes: [
    {
      id: "zero-direction-vector",
      mistake: "Using a zero direction vector to define a line.",
      why: [{ type: "paragraph", children: [{ text: "A line requires a nonzero direction vector; a zero vector gives no direction at all." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the direction vector is nonzero before writing the line's vector or symmetric form." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "zero-denominator-symmetric-form",
      mistake: "Dividing by a zero direction ratio in the symmetric form.",
      why: [{ type: "paragraph", children: [{ text: "A zero direction ratio cannot be used as a denominator; the corresponding coordinate is fixed instead." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Replace a zero-ratio term with the corresponding fixed-coordinate equation." }] }],
      errorType: "execution-error",
    },
    {
      id: "skew-without-intersection-test",
      mistake: "Calling nonparallel lines skew without testing for intersection.",
      why: [{ type: "paragraph", children: [{ text: "Nonparallel lines that do intersect are not skew; skewness requires both nonparallel directions and no intersection point." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Test for an intersection point before concluding that nonparallel lines are skew." }] }],
      errorType: "decision-error",
    },
    {
      id: "zero-cross-denominator-ignored",
      mistake: "Applying the nonparallel shortest-distance formula when the cross product of directions is zero.",
      why: [{ type: "paragraph", children: [{ text: "A zero cross product means the directions are parallel, making this formula's denominator zero and invalid." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the parallel-line distance formula instead when directions are parallel." }] }],
      errorType: "execution-error",
    },
    {
      id: "plane-formulas-as-main",
      mistake: "Presenting plane formulas as JEE Main 2026 scope.",
      why: [{ type: "paragraph", children: [{ text: "The official JEE Main 2026 Unit 11 does not list equations of planes, point-plane distance, angle between planes, or angle between a line and a plane." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep every plane formula labelled explicitly as JEE Advanced 2026 scope." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "normal-confused-with-in-plane-direction",
      mistake: "Confusing a plane's normal vector with a direction that lies within the plane.",
      why: [{ type: "paragraph", children: [{ text: "The normal is perpendicular to every direction in the plane, not aligned with any of them." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the vector used as a normal is perpendicular to the plane before using it in a plane formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "cosine-used-for-line-plane-angle",
      mistake: "Using cosine instead of sine for the angle between a line and a plane.",
      why: [{ type: "paragraph", children: [{ text: "The line-plane angle formula uses sine of the angle between the line direction and the plane normal, not cosine." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Apply sinφ = |d·n| / (|d||n|) for the line-plane angle, reserving cosine for line-line and plane-plane angles." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    { label: "Vectors", url: "/jee/mathematics/vectors", relation: "prerequisite" },
    { label: "Coordinate Geometry", url: "/jee/mathematics/coordinate-geometry", relation: "related" },
  ],

  links: [
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  sources: ["nta-jee-syllabus", "nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar"],
  sourceNote: "Official syllabus scope verified against NTA JEE Main 2026 and JEE Advanced 2026 documents. Plane content is kept explicitly Advanced-only. No weightage, frequency or PYQ-count claim is made.",
  contributorPolicy: [
    "Reviewer specialisation: Vector Geometry, Linear Algebra and Analytic Geometry.",
    "Minimum: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: direction conventions, line forms, shortest-distance cases, coplanarity, all plane content and the Main-versus-Advanced scope boundary.",
  ],

  contentStatus: "draft",

  meta: {
    title: "3D Geometry for JEE 2026: Lines, Skew Distance and Planes",
    description: "Learn JEE 3D line equations, direction cosines, line angles and skew distances, plus clearly labelled Advanced plane geometry.",
  },
};

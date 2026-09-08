import type { ChapterContent } from "@/content/types";

/**
 * Vectors — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - JEE Main 2026 Unit 12 covers vectors/scalars, addition, components in
 *   2D/3D, scalar product and vector product. Scalar/vector triple products
 *   and their geometrical interpretations are explicit JEE Advanced 2026
 *   scope and are labelled as such throughout.
 */
export const jeeMathematicsVectors: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "JEE Main and JEE Advanced",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Vectors",
  slug: "vectors",
  url: "/jee/mathematics/vectors",
  canonicalIntent:
    "Represent magnitude and direction with vectors, perform component operations, use dot and cross products with geometric meaning, and preserve zero-vector and nonzero-denominator conditions for direction, angle and projection.",

  heroChips: [
    "Zero vector has magnitude zero and no defined direction",
    "Dot product for angle and perpendicularity, cross product for area and perpendicular direction",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A vector has magnitude and direction, except the zero vector, which has magnitude zero and no defined direction.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The dot product measures directional alignment between two vectors. The cross product, defined in three dimensions, produces a vector perpendicular to the plane of the two input vectors with a right-hand orientation.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Angle formulas using the dot or cross product require both vectors to be nonzero. Projection onto a vector requires that target vector to be nonzero.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "Scalar triple product, coplanar-vector tests and vector triple product are explicit JEE Advanced 2026 scope. This page does not publish invented weightage, expected question counts or trend percentages.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Coordinates and distance reasoning underlie vector components and magnitude.",
    },
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Vector Algebra",
    topics: [
      "Vectors and scalars",
      "Addition of vectors",
      "Components of a vector in two and three dimensions",
      "Scalar product of two vectors",
      "Vector product of two vectors",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "components-zero-check",
      title: "1. Write components and check for the zero vector",
      keyIdea: "Confirm whether a vector is nonzero before assigning it any direction.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Write the vector's components and compute its magnitude. The zero vector has magnitude zero and no defined direction, so it must be excluded before any angle or unit-vector step.",
            },
          ],
        },
      ],
    },
    {
      id: "choose-product",
      title: "2. Choose dot, cross or projection based on what is asked",
      keyIdea: "Dot product answers angle and perpendicularity; cross product answers area and perpendicular direction; projection answers component along a direction.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use the dot product for angle between vectors or a perpendicularity test. Use the cross product, valid in three dimensions, for area of a parallelogram or a vector perpendicular to two given vectors. Use projection to decompose one vector along another nonzero vector.",
            },
          ],
        },
      ],
    },
    {
      id: "compute-and-interpret",
      title: "3. Compute the product and interpret the geometric meaning",
      keyIdea: "A computed dot or cross value must be read back into an angle, perpendicularity or area statement.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "After computing a dot or cross product, interpret the result geometrically: a zero dot product with both vectors nonzero indicates perpendicularity, and the cross-product magnitude gives parallelogram area.",
            },
          ],
        },
      ],
    },
    {
      id: "advanced-triple-products",
      title: "4. Use triple products only within Advanced scope",
      keyIdea: "Scalar triple product gives volume and a coplanarity test; vector triple product expands through a fixed identity.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The scalar triple product a·(b×c) gives, in absolute value, the volume of the parallelepiped formed by the three vectors, and equals zero exactly when the vectors are coplanar. The vector triple product expands as a×(b×c) = b(a·c) − c(a·b). Both are explicit JEE Advanced 2026 scope.",
            },
          ],
        },
      ],
    },
    {
      id: "validate",
      title: "5. Validate the result against dimension and sign",
      keyIdea: "Check that magnitudes stay nonnegative and that order-dependent signs are tracked correctly.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Validate every result: magnitudes must be nonnegative, and cross-product order matters since b×a = −(a×b).",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "magnitude",
      expression: "|a| = √(a₁² + a₂² + a₃²)",
      meaning: "Euclidean magnitude of a vector in three dimensions; an analogous two-dimensional form omits the third component.",
      variables: [{ symbol: "a₁, a₂, a₃", meaning: "components of vector a" }],
      useWhen: "Finding magnitude or normalising a vector.",
      commonTrap: "Treating magnitude as possibly negative.",
      accessibleText: "The magnitude of a equals the square root of the sum of the squares of its components.",
    },
    {
      id: "unit-vector",
      expression: "â = a / |a|",
      meaning: "Unit vector in the direction of a.",
      variables: [{ symbol: "a", meaning: "nonzero vector" }],
      useWhen: "a ≠ 0.",
      commonTrap: "Assigning a direction to the zero vector.",
      accessibleText: "The unit vector a-hat equals a divided by its magnitude, and requires a to be nonzero.",
    },
    {
      id: "dot-product",
      expression: "a·b = a₁b₁ + a₂b₂ + a₃b₃",
      meaning: "Scalar product from matching components.",
      variables: [{ symbol: "a, b", meaning: "vectors of the same dimension" }],
      useWhen: "Computing the scalar product directly from components.",
      commonTrap: "Sign error on a component.",
      accessibleText: "The dot product of a and b equals the sum of the products of their matching components.",
    },
    {
      id: "dot-angle",
      expression: "a·b = |a||b| cosθ",
      meaning: "Relates the dot product to the angle between two vectors.",
      variables: [{ symbol: "θ", meaning: "angle between a and b, θ ∈ [0, π]" }],
      useWhen: "a ≠ 0 and b ≠ 0.",
      commonTrap: "Applying the angle formula when one vector is the zero vector.",
      accessibleText: "The dot product of a and b equals the product of their magnitudes and the cosine of the angle between them, and requires both vectors to be nonzero.",
    },
    {
      id: "perpendicular-test",
      expression: "a·b = 0",
      meaning: "Perpendicularity condition for two nonzero vectors.",
      variables: [],
      useWhen: "Testing perpendicularity, with both a and b nonzero for the angle interpretation.",
      commonTrap: "Calling the zero vector perpendicular by the angle definition.",
      accessibleText: "Two nonzero vectors are perpendicular exactly when their dot product is zero.",
    },
    {
      id: "vector-projection",
      expression: "proj_b a = [(a·b) / |b|²] b",
      meaning: "Vector projection of a onto b.",
      variables: [{ symbol: "b", meaning: "nonzero target vector" }],
      useWhen: "b ≠ 0.",
      commonTrap: "Projecting onto a zero vector.",
      accessibleText: "The vector projection of a onto b equals the dot product of a and b divided by the square of the magnitude of b, times b, and requires b to be nonzero.",
    },
    {
      id: "cross-product",
      expression: "a×b = (a₂b₃ − a₃b₂, a₃b₁ − a₁b₃, a₁b₂ − a₂b₁)",
      meaning: "Vector perpendicular to both a and b, in three dimensions.",
      variables: [{ symbol: "a, b", meaning: "vectors in three dimensions" }],
      useWhen: "Three-dimensional vectors only.",
      commonTrap: "Reversing the order without negating the result.",
      accessibleText: "The cross product of a and b is a vector formed from the given component combination, valid in three dimensions, and satisfies b cross a equals negative a cross b.",
    },
    {
      id: "cross-magnitude",
      expression: "|a×b| = |a||b| sinθ",
      meaning: "Magnitude of the cross product, equal to the parallelogram area formed by a and b.",
      variables: [{ symbol: "θ", meaning: "angle between a and b" }],
      useWhen: "a ≠ 0 and b ≠ 0 for the angle interpretation.",
      commonTrap: "Ignoring the zero or parallel case.",
      accessibleText: "The magnitude of the cross product of a and b equals the product of their magnitudes and the sine of the angle between them.",
    },
    {
      id: "scalar-triple-product",
      expression: "a·(b×c)",
      meaning: "Advanced scope: gives, in absolute value, the volume of the parallelepiped formed by a, b and c.",
      variables: [{ symbol: "a, b, c", meaning: "vectors in three dimensions" }],
      useWhen: "JEE Advanced volume or coplanarity questions.",
      commonTrap: "Losing track of sign or cyclic order.",
      accessibleText: "The scalar triple product of a, b and c equals a dotted with the cross product of b and c; its absolute value gives volume.",
    },
    {
      id: "coplanar-test",
      expression: "a·(b×c) = 0",
      meaning: "Advanced scope: coplanarity test for three vectors.",
      variables: [],
      useWhen: "JEE Advanced coplanarity questions.",
      commonTrap: "Overstating a unique geometric configuration from this test alone.",
      accessibleText: "Three vectors are coplanar exactly when their scalar triple product is zero.",
    },
    {
      id: "vector-triple-product",
      expression: "a×(b×c) = b(a·c) − c(a·b)",
      meaning: "Advanced scope: expansion identity for the vector triple product.",
      variables: [{ symbol: "a, b, c", meaning: "vectors in three dimensions" }],
      useWhen: "JEE Advanced nested cross-product questions.",
      commonTrap: "Assuming the cross product is associative.",
      accessibleText: "The vector triple product of a, b and c equals b times the dot product of a and c, minus c times the dot product of a and b.",
    },
  ],

  workedExamples: [
    {
      id: "perpendicular-cross-check",
      prompt: "For a = (1, 2, 2) and b = (2, −1, 0), find the angle between them and verify using the cross product.",
      steps: [
        { type: "paragraph", children: [{ text: "a·b = (1)(2) + (2)(−1) + (2)(0) = 2 − 2 + 0 = 0. Both vectors are nonzero, so a and b are perpendicular and θ = π/2." }] },
        { type: "paragraph", children: [{ text: "a×b = (2, 4, −5), so |a×b| = √(4+16+25) = √45 = 3√5." }] },
        { type: "paragraph", children: [{ text: "|a| = 3, |b| = √5, so |a||b|sinθ = (3)(√5)(1) = 3√5." }] },
        { type: "paragraph", children: [{ text: "Validation: the component-based cross-product magnitude agrees with the geometric magnitude formula, confirming θ = π/2." }] },
      ],
      answer: "θ = π/2",
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "Representing vectors, computing dot and cross products with their geometric meaning, and, for Advanced scope, using triple products."],
        ["What is the central method choice?", "Check the zero-vector condition first, then choose dot, cross or projection based on what is asked."],
        ["Where do most mistakes begin?", "Assigning direction to the zero vector, applying angle formulas without checking nonzero vectors, and cross-product order errors."],
        ["What should come before this chapter?", "Coordinate Geometry, for coordinate and distance reasoning."],
        ["What comes after it?", "3D Geometry extends vector direction reasoning to lines and, for Advanced scope, planes."],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Vectors",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Vector basics and products",
          "Unit 12 explicitly includes vectors and scalars, addition of vectors, components in two and three dimensions, scalar product and vector product.",
          "Explicitly includes vector addition, scalar multiplication, dot product, cross product, scalar triple product, vector triple product and geometrical interpretations.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below. Projection is supporting mathematics, not a separately named JEE Main 2026 bullet.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Magnitude or direction of a vector", "Compute the norm after a zero-vector check", "a ≠ 0 before assigning direction"],
        ["Angle between vectors or perpendicularity", "Dot product", "Both vectors nonzero"],
        ["Area or a perpendicular direction", "Cross product", "Three-dimensional vectors"],
        ["Component along another direction", "Projection", "Target vector nonzero"],
        ["Volume or coplanarity", "Advanced scalar triple product", "Three-dimensional vectors, Advanced scope"],
        ["Nested cross product", "Advanced vector triple product identity", "Do not assume cross-product associativity"],
      ],
    },
  ],

  mistakes: [
    {
      id: "zero-vector-direction",
      mistake: "Assigning a direction to the zero vector.",
      why: [{ type: "paragraph", children: [{ text: "The zero vector has magnitude zero and no defined direction." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check for the zero vector before computing a unit vector or stating a direction." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "projection-onto-zero",
      mistake: "Projecting a vector onto the zero vector.",
      why: [{ type: "paragraph", children: [{ text: "The projection formula divides by the square of the target vector's magnitude, which is undefined when that vector is zero." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the target vector is nonzero before applying the projection formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "angle-without-nonzero-check",
      mistake: "Applying the dot-angle formula without checking both vectors are nonzero.",
      why: [{ type: "paragraph", children: [{ text: "An angle is not defined between a vector and the zero vector." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify both vectors are nonzero before stating an angle from the dot product." }] }],
      errorType: "decision-error",
    },
    {
      id: "cross-order-sign-loss",
      mistake: "Losing the sign when reversing the order of a cross product.",
      why: [{ type: "paragraph", children: [{ text: "The cross product is anti-commutative: b×a = −(a×b)." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track the order of vectors carefully and apply the sign flip when the order is reversed." }] }],
      errorType: "execution-error",
    },
    {
      id: "cross-treated-associative",
      mistake: "Treating the cross product as associative.",
      why: [{ type: "paragraph", children: [{ text: "a×(b×c) is not generally equal to (a×b)×c; the vector triple product identity must be used instead." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the vector triple product identity b(a·c) − c(a·b) rather than assuming associativity." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "triple-products-as-main-scope",
      mistake: "Presenting scalar or vector triple products as current JEE Main 2026 explicit scope.",
      why: [{ type: "paragraph", children: [{ text: "Triple products and their geometrical interpretations are explicit JEE Advanced 2026 scope; JEE Main 2026 Unit 12 lists only vectors and scalars, addition, components and the two basic products." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep triple-product content labelled as Advanced scope." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    { label: "Coordinate Geometry", url: "/jee/mathematics/coordinate-geometry", relation: "prerequisite" },
    { label: "Matrices Determinants", url: "/jee/mathematics/matrices-determinants", relation: "related" },
    { label: "3D Geometry", url: "/jee/mathematics/3d-geometry", relation: "next" },
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
  sourceNote: "Official syllabus scope verified against NTA JEE Main 2026 and JEE Advanced 2026 documents. No weightage, frequency or PYQ-count claim is made.",
  contributorPolicy: [
    "Reviewer specialisation: Vector Geometry, Linear Algebra and Analytic Geometry.",
    "Minimum: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: zero-vector caveats, dot and cross product conditions, projection denominators, triple-product identities and current-scope boundary.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Vectors for JEE 2026: Dot Product, Cross Product and Geometry",
    description: "Learn vector magnitude, unit vectors, dot and cross products, projections, and Advanced triple products with zero-vector and angle conditions.",
  },
};

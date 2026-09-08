import type { ChapterContent } from "@/content/types";

/**
 * Matrices and Determinants — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Both JEE Main 2026 and JEE Advanced 2026 explicitly cover matrices and
 *   determinants; this page preserves the specific scope wording from each
 *   official document rather than flattening it into generic wording.
 */
export const jeeMathematicsMatricesDeterminants: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Matrices and Determinants",
  slug: "matrices-determinants",
  url: "/jee/mathematics/matrices-determinants",
  canonicalIntent:
    "Represent linear data with matrices, perform valid matrix operations, evaluate determinants, decide whether an inverse exists, and solve or classify simultaneous linear systems without illegal division by a zero determinant.",

  heroChips: [
    "Main and Advanced both explicitly cover matrices and determinants",
    "det(A) = 0 blocks inverse division; it does not by itself mean inconsistent",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A matrix is an ordered rectangular array. Matrix operations are controlled by dimensions, while a determinant is a scalar attached to a square matrix. For a square coefficient matrix A, A inverse exists only when det(A) is not equal to zero.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "If det(A) = 0, do not divide by the determinant and do not automatically call the system inconsistent. Further consistency analysis is required.",
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
      label: "Quadratic Equations",
      url: "/jee/mathematics/quadratic-equations",
      relation: "prerequisite",
      description: "Algebraic substitution and elimination underlie linear-system solving.",
    },
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "Coordinate geometry underlies the triangle-area determinant interpretation.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Matrices and Determinants",
    topics: [
      "Matrices, matrix algebra and types",
      "Matrices and determinants of orders two and three",
      "Determinant evaluation",
      "Area of a triangle using determinants",
      "Adjoint and inverse of a square matrix",
      "Consistency and solution of simultaneous linear equations using matrices",
      "Elementary row and column transformations",
      "Diagonal, symmetric and skew-symmetric matrices",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "dimension-check",
      title: "1. Write dimensions before multiplying",
      keyIdea: "If A is m by n and B is n by p, then AB is m by p; inner dimensions must agree.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Before performing matrix multiplication, write the dimensions of each matrix. The product exists only when the inner dimensions agree, and the result takes the outer dimensions.",
            },
          ],
        },
      ],
    },
    {
      id: "operation-separation",
      title: "2. Separate matrix operations from determinant operations",
      keyIdea: "A determinant is only attached to a square matrix and is a distinct scalar concept from matrix arithmetic.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Matrix addition, scalar multiplication and matrix products are operations on the array itself. A determinant is a single scalar defined only for a square matrix and should not be confused with matrix-level operations.",
            },
          ],
        },
      ],
    },
    {
      id: "invertibility-test",
      title: "3. Test det(A) not equal to zero before using an inverse",
      keyIdea: "A inverse equals adjoint of A divided by det(A), valid only when det(A) is nonzero.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For inverse-based solving of AX = B, always test det(A) is not equal to zero first. If the determinant is zero, switch to elimination or consistency analysis rather than dividing by the determinant.",
            },
          ],
        },
      ],
    },
    {
      id: "row-column-tracking",
      title: "4. Track exactly which row or column changed",
      keyIdea: "Row swaps, scaling and replacement each have a distinct, known effect on the determinant value.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When using elementary transformations, track exactly which row or column changed. Swapping two rows changes the determinant's sign, scaling one row by k multiplies the determinant by k, and adding a multiple of one row to another leaves the determinant unchanged.",
            },
          ],
        },
      ],
    },
    {
      id: "solution-validation",
      title: "5. Substitute any claimed solution back into the original equations",
      keyIdea: "A computed solution must satisfy every original equation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "After solving a linear system, substitute the claimed solution back into the original equations to confirm it satisfies every one of them.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "product-dimension",
      expression: "A(m x n) * B(n x p) = AB(m x p)",
      meaning: "Dimension rule for matrix multiplication",
      variables: [
        { symbol: "m", meaning: "number of rows of A" },
        { symbol: "n", meaning: "number of columns of A, equal to number of rows of B" },
        { symbol: "p", meaning: "number of columns of B" },
      ],
      useWhen: "Matrix multiplication",
      commonTrap: "Multiplying because outer dimensions match without checking inner dimensions",
      accessibleText: "if A is m by n and B is n by p, then A B is m by p",
    },
    {
      id: "2x2-determinant",
      expression: "det([[a,b],[c,d]]) = ad - bc",
      meaning: "Determinant of a 2 by 2 matrix",
      variables: [
        { symbol: "a, b, c, d", meaning: "entries of the 2 by 2 matrix" },
      ],
      useWhen: "Inverse, area, or system checks for a 2 by 2 matrix",
      commonTrap: "Sign reversal",
      accessibleText: "determinant of a two by two matrix a b c d equals a d minus b c",
    },
    {
      id: "adjoint-identity",
      expression: "A * adj(A) = adj(A) * A = det(A) * I",
      meaning: "Relationship between a square matrix, its adjoint and its determinant",
      variables: [
        { symbol: "A", meaning: "square matrix" },
        { symbol: "I", meaning: "identity matrix of the same order" },
      ],
      useWhen: "Deriving the inverse of a square matrix",
      commonTrap: "Using this identity on a nonsquare matrix",
      accessibleText: "A times adjoint of A equals adjoint of A times A equals determinant of A times the identity matrix",
    },
    {
      id: "inverse-by-adjoint",
      expression: "A^(-1) = adj(A) / det(A)",
      meaning: "Inverse of a square matrix via its adjoint",
      variables: [{ symbol: "A", meaning: "square matrix with det(A) not equal to zero" }],
      useWhen: "Finding the inverse of a square matrix",
      commonTrap: "Dividing by a zero determinant",
      accessibleText: "A inverse equals adjoint of A divided by determinant of A, valid only when determinant of A is not zero",
    },
    {
      id: "product-determinant",
      expression: "det(AB) = det(A) * det(B)",
      meaning: "Determinant of a product of two square matrices of the same order",
      variables: [
        { symbol: "A", meaning: "square matrix" },
        { symbol: "B", meaning: "square matrix of the same order as A" },
      ],
      useWhen: "Simplifying a determinant of a product",
      commonTrap: "Applying this to nonsquare products",
      accessibleText: "determinant of A B equals determinant of A times determinant of B",
    },
    {
      id: "triangle-area",
      expression: "Area = (1/2) * |det([[x1,y1,1],[x2,y2,1],[x3,y3,1]])|",
      meaning: "Area of a triangle from three coordinate points using a determinant",
      variables: [
        { symbol: "x1, y1", meaning: "first vertex coordinates" },
        { symbol: "x2, y2", meaning: "second vertex coordinates" },
        { symbol: "x3, y3", meaning: "third vertex coordinates" },
      ],
      useWhen: "Main explicit area-of-a-triangle application",
      commonTrap: "Omitting the absolute value",
      accessibleText: "area equals one half times the absolute value of the three by three determinant of the coordinate rows with a trailing one in each row",
    },
    {
      id: "unique-inverse-solution",
      expression: "X = A^(-1) * B",
      meaning: "Unique solution of the linear system AX = B",
      variables: [
        { symbol: "A", meaning: "square coefficient matrix with det(A) not equal to zero" },
        { symbol: "B", meaning: "column matrix of constants" },
      ],
      useWhen: "Solving a system with a nonsingular square coefficient matrix",
      commonTrap: "Assuming every system has this inverse form",
      accessibleText: "X equals A inverse times B, valid only when A is square and its determinant is not zero",
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
          "Matrix representation, valid operations, determinant evaluation, inverse conditions, and solving or classifying simultaneous linear systems.",
        ],
        [
          "What is the central method choice?",
          "Check dimensions before multiplying, check det(A) not equal to zero before using an inverse, and use elimination or transformations when det(A) = 0.",
        ],
        [
          "Where do most mistakes begin?",
          "Multiplying incompatible matrices, dividing by a zero determinant, and equating det(A) = 0 with an inconsistent system.",
        ],
        [
          "What should come before Matrices and Determinants?",
          "Quadratic Equations for algebraic manipulation and Coordinate Geometry for the triangle-area interpretation.",
        ],
        [
          "What comes after it?",
          "Vectors and 3D Geometry extend array-based and determinant-based reasoning further.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Matrices and Determinants",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Matrix algebra and types",
          "Explicitly includes matrices, matrix algebra and types.",
          "Explicitly includes rectangular arrays, equality, addition, scalar multiplication, matrix products and transpose.",
          "Both papers require the same core algebra of matrices.",
        ],
        [
          "Determinants and area application",
          "Explicitly includes determinants of orders two and three, determinant evaluation, and area of a triangle using determinants.",
          "Explicitly includes determinants up to order three.",
          "Only Main names the triangle-area application explicitly.",
        ],
        [
          "Inverse, transformations and matrix types",
          "Explicitly includes adjoint and inverse of a square matrix, and consistency and solution of simultaneous linear equations using matrices.",
          "Explicitly includes elementary row and column transformations, adjoint, inverse up to order three, and diagonal, symmetric and skew-symmetric matrices with their properties.",
          "Advanced names elementary transformations and special matrix types explicitly; treat these as Advanced-specific depth.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Matrices and Determinants",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Simultaneous linear equations",
          "Solve two or three linear equations by substitution or elimination.",
          "Revise linear-equation solving.",
        ],
        [
          "Ordered arrays and indices",
          "Read and write an entry a sub i j in a rectangular array.",
          "Revise index notation.",
        ],
        [
          "Basic coordinate geometry",
          "Plot coordinate points and interpret area informally.",
          "Revise Coordinate Geometry.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: determinant-to-system decision tree",
      intro: "Match the question signal to the correct first model before executing.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Simple 2x2 or 3x3 determinant", "Direct expansion or determinant properties", "Matrix is square"],
        ["Many zeros or easy simplification", "Determinant-preserving row/column transformations", "Track every transformation applied"],
        ["Matrix product", "Check dimensions before arithmetic", "Inner dimensions equal"],
        ["Unique linear system, det(A) not equal to zero", "Inverse method X = A inverse B", "det(A) verified nonzero"],
        ["Zero determinant", "Elimination or transformations to test consistency", "Do not assume inconsistency automatically"],
        ["Triangle coordinate area", "Determinant area formula with absolute value", "Absolute value applied"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-linear-system",
      slot: "concepts",
      heading: "Worked reasoning: solving a 2x2 linear system",
      jump: true,
      concepts: [
        {
          id: "linear-system-worked",
          title: "Solve x + y = 5 and 2x - y = 1",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Known: A = [[1,1],[2,-1]], X = [[x],[y]], B = [[5],[1]]. Find: X. Method choice: check the determinant before using an inverse.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "det(A) = (1)(-1) - (1)(2) = -3, which is not equal to zero, so A is invertible and the system has a unique inverse-based solution. Solving gives x = 2, y = 3." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Validity check: substituting back, 2 + 3 = 5 and 2(2) - 3 = 1, so both original equations are satisfied." },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "incompatible-multiplication",
      mistake: "Multiplying matrices with incompatible inner dimensions.",
      why: [{ type: "paragraph", children: [{ text: "Matrix multiplication is only defined when the number of columns of the first matrix equals the number of rows of the second." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Write out both dimensions before attempting a product." }] }],
      errorType: "execution-error",
    },
    {
      id: "assuming-commutative",
      mistake: "Assuming matrix multiplication is commutative.",
      why: [{ type: "paragraph", children: [{ text: "In general AB is not equal to BA, and both products may not even exist." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check dimensions and entries separately for AB and BA before comparing them." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "nonsquare-determinant",
      mistake: "Taking a determinant of a nonsquare matrix.",
      why: [{ type: "paragraph", children: [{ text: "A determinant is only defined for a square matrix." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the matrix is square before attempting to evaluate a determinant." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "inverse-without-check",
      mistake: "Writing A inverse without checking det(A) is not equal to zero.",
      why: [{ type: "paragraph", children: [{ text: "The inverse-by-adjoint formula divides by det(A), which is invalid when det(A) is zero." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compute det(A) and confirm it is nonzero before writing an inverse." }] }],
      errorType: "decision-error",
    },
    {
      id: "zero-determinant-inconsistent",
      mistake: "Concluding that det(A) = 0 automatically means the system is inconsistent.",
      why: [{ type: "paragraph", children: [{ text: "A zero determinant only rules out a unique inverse-based solution; the system could be inconsistent or have infinitely many solutions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Continue with elimination or allowed transformations to distinguish inconsistency from dependent equations." }] }],
      errorType: "decision-error",
    },
    {
      id: "row-op-vs-determinant-effect",
      mistake: "Confusing row operations on a matrix with their effect on the determinant value.",
      why: [{ type: "paragraph", children: [{ text: "Row swap, row scaling and row replacement each change the determinant differently, or not at all." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track exactly which transformation was applied and its known determinant effect." }] }],
      errorType: "execution-error",
    },
    {
      id: "area-absolute-value",
      mistake: "Omitting the absolute value from the triangle-area determinant formula.",
      why: [{ type: "paragraph", children: [{ text: "The raw determinant can be negative, but an area cannot be negative." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always take the absolute value of the determinant before multiplying by one half." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Quadratic Equations",
      url: "/jee/mathematics/quadratic-equations",
      relation: "prerequisite",
      description: "Algebraic substitution and elimination underlie linear-system solving.",
    },
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "related",
      description: "Coordinate points feed the triangle-area determinant application.",
    },
    {
      label: "Vectors",
      url: "/jee/mathematics/vectors",
      relation: "related",
      description: "Array-based reasoning connects to vector components and operations.",
    },
    {
      label: "3D Geometry",
      url: "/jee/mathematics/3d-geometry",
      relation: "forward",
      description: "Determinant-based reasoning extends into three-dimensional geometry.",
    },
  ],

  links: [
    {
      label: "JEE Mathematics Syllabus",
      url: "/jee/syllabus/mathematics",
      relation: "up",
      description: "Official syllabus mapping for Mathematics.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Mathematics subject hub.",
    },
  ],

  faqs: [
    {
      question: "When does a matrix have an inverse?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "A square matrix A has an inverse only when det(A) is not equal to zero." }],
        },
      ],
    },
    {
      question: "Does determinant zero mean a system is inconsistent?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. det(A) = 0 only rules out a unique inverse-based solution. Further elimination or transformation analysis is required to decide between inconsistency and infinitely many solutions." },
          ],
        },
      ],
    },
    {
      question: "When is matrix multiplication defined?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "AB is defined only when the number of columns of A equals the number of rows of B." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar"],
  sourceNote:
    "Use only official Main and Advanced syllabus documents for scope claims. Keep the triangle-area application, elementary transformations and special matrix types labelled with the correct paper-specific scope. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: linear algebra foundations, determinants and JEE Mathematics. Minimum qualification: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: operation dimensions, determinant properties, adjoint/inverse conditions, system-consistency language, row/column transformations, triangle-area formula and worked solution.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Matrices and Determinants for JEE 2026: Inverse and Systems",
    description:
      "Learn matrix operations, determinants, inverse conditions, row and column transformations, consistency and linear-system methods for JEE.",
    ogTitle: "Matrices and Determinants for JEE 2026",
    ogDescription: "Matrix dimensions, determinant properties, inverse conditions and linear-system consistency for JEE.",
    ogType: "article",
  },
};

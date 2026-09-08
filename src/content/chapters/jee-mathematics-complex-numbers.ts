import type { ChapterContent } from "@/content/types";

/**
 * Complex Numbers — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Polar representation, principal argument, triangle-inequality equality
 *   case and cube roots of unity are explicit JEE Advanced 2026 Algebra
 *   scope; JEE Main 2026 explicitly covers ordered-pair representation,
 *   a+ib algebra, the Argand plane, modulus and argument. This boundary is
 *   preserved rather than flattened into generic "Main and Advanced" wording.
 */
export const jeeMathematicsComplexNumbers: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Complex Numbers",
  slug: "complex-numbers",
  url: "/jee/mathematics/complex-numbers",
  canonicalIntent:
    "Represent and manipulate complex numbers algebraically and geometrically, with correct modulus, conjugate and argument conditions.",

  heroChips: [
    "Main: ordered-pair form, algebra, Argand plane, modulus and argument",
    "Advanced adds: polar form, principal argument, triangle inequality, cube roots of unity",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A complex number z = a + ib combines a real part a and imaginary part b, with i squared equal to -1. It can be handled algebraically or represented as the point (a, b) in the Argand plane. For nonzero z, modulus gives distance from the origin and argument gives direction.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "The argument of z = 0 is not defined. Do not assign an angle to the origin.",
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
      description: "Quadratic algebra and root behaviour lead directly into complex-number algebra.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "prerequisite",
      description: "Basic trigonometric angle language is needed for polar representation and argument.",
    },
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "prerequisite",
      description: "The coordinate plane underlies the Argand-plane representation of a complex number.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Complex Numbers and Quadratic Equations",
    topics: [
      "Ordered-pair representation, a+ib form",
      "Argand plane",
      "Algebra of complex numbers",
      "Modulus and argument",
      "Conjugation",
      "Polar representation",
      "Properties of modulus and principal argument",
      "Triangle inequality",
      "Cube roots of unity",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "representation",
      title: "1. Choose a representation before transforming",
      keyIdea: "Use rectangular form for algebra, polar form for multiplication, division, powers and angle relationships.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A complex number z = a + ib can be written in rectangular form for addition, subtraction and coefficient comparison, or in polar form z = r(cos theta + i sin theta) when multiplication, division, powers or angle relationships become simpler.",
            },
          ],
        },
      ],
    },
    {
      id: "zero-condition",
      title: "2. Check the zero/nonzero condition first",
      keyIdea: "Never assign an argument to z = 0; check a denominator is nonzero before dividing.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Argument is only defined for nonzero z. Division by a complex number requires that the denominator be nonzero before multiplying by its conjugate.",
            },
          ],
        },
      ],
    },
    {
      id: "conjugate-modulus",
      title: "3. Use conjugation to simplify division and modulus",
      keyIdea: "z times z-bar equals |z| squared, and this is real and nonnegative.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For z = a + ib, the conjugate is z-bar = a - ib. Multiplying z by its conjugate gives |z| squared, a real, nonnegative number, which is the basis for simplifying complex division and modulus arguments.",
            },
          ],
        },
      ],
    },
    {
      id: "argument-convention",
      title: "4. Separate a general argument from the principal argument",
      keyIdea: "If theta is one argument of nonzero z, all arguments are theta + 2k*pi; the principal argument is a single chosen representative under a declared convention.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Argument is any angle representing the direction of a nonzero complex number, differing by integer multiples of 2*pi. Principal argument is one chosen representative under a declared principal-value convention, and the convention in use must be stated explicitly and never silently switched.",
            },
          ],
        },
      ],
    },
    {
      id: "triangle-inequality",
      title: "5. Apply the triangle inequality with its equality case",
      keyIdea: "|z1 + z2| is less than or equal to |z1| + |z2|, with equality only under a stated direction condition.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The triangle inequality bounds the modulus of a sum. Equality holds when the two nonzero numbers have the same direction, equivalently one is a nonnegative real multiple of the other; zero cases also satisfy the corresponding equality.",
            },
          ],
        },
      ],
    },
    {
      id: "cube-roots",
      title: "6. Use cube roots of unity only for the nonreal roots (Advanced)",
      keyIdea: "omega denotes a nonreal cube root of unity, with omega cubed = 1 and 1 + omega + omega squared = 0.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The cube roots of unity are the three solutions of z cubed = 1: namely 1, omega and omega squared, where omega denotes either nonreal cube root. This content is explicit in JEE Advanced 2026 Algebra scope and is not a separately named JEE Main 2026 bullet.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "conjugate",
      expression: "z-bar = a - ib",
      meaning: "Conjugate of z = a + ib",
      variables: [
        { symbol: "a", meaning: "real part of z" },
        { symbol: "b", meaning: "imaginary part of z" },
      ],
      useWhen: "Simplifying products and quotients",
      commonTrap: "Changing the real part sign instead of the imaginary part",
      accessibleText: "z conjugate equals a minus i b",
    },
    {
      id: "modulus",
      expression: "|z| = sqrt(a^2 + b^2) = sqrt(z * z-bar)",
      meaning: "Modulus of z, the distance of (a,b) from the origin",
      variables: [
        { symbol: "a", meaning: "real part of z" },
        { symbol: "b", meaning: "imaginary part of z" },
      ],
      useWhen: "Distance from origin, comparing sizes",
      commonTrap: "Treating modulus as a signed quantity",
      accessibleText: "modulus of z equals square root of a squared plus b squared, and result must be nonnegative",
    },
    {
      id: "product-with-conjugate",
      expression: "z * z-bar = |z|^2",
      meaning: "Product of z with its conjugate equals modulus squared",
      variables: [{ symbol: "z", meaning: "any complex number" }],
      useWhen: "Division and modulus arguments",
      commonTrap: "Writing |z| instead of |z| squared",
      accessibleText: "z times z conjugate equals modulus of z squared",
    },
    {
      id: "reciprocal",
      expression: "1/z = z-bar / |z|^2",
      meaning: "Reciprocal of a nonzero complex number",
      variables: [{ symbol: "z", meaning: "nonzero complex number" }],
      useWhen: "Complex division",
      commonTrap: "Dividing by zero when z = 0",
      accessibleText: "one over z equals z conjugate divided by modulus of z squared, valid only for z not equal to zero",
    },
    {
      id: "polar-form",
      expression: "z = r(cos theta + i sin theta)",
      meaning: "Polar representation of nonzero z",
      variables: [
        { symbol: "r", meaning: "modulus of z, r = |z| > 0" },
        { symbol: "theta", meaning: "an argument of z" },
      ],
      useWhen: "Multiplication, division and direction problems",
      commonTrap: "Treating theta as unique without stating the principal convention",
      accessibleText: "z equals r times the quantity cosine theta plus i sine theta",
    },
    {
      id: "product-modulus",
      expression: "|z1 * z2| = |z1| * |z2|",
      meaning: "Modulus of a product",
      variables: [
        { symbol: "z1", meaning: "any complex number" },
        { symbol: "z2", meaning: "any complex number" },
      ],
      useWhen: "Comparing product sizes",
      commonTrap: "Mixing modulus with argument rules",
      accessibleText: "modulus of z1 times z2 equals modulus of z1 times modulus of z2",
    },
    {
      id: "quotient-modulus",
      expression: "|z1 / z2| = |z1| / |z2|",
      meaning: "Modulus of a quotient",
      variables: [
        { symbol: "z1", meaning: "numerator complex number" },
        { symbol: "z2", meaning: "nonzero denominator complex number" },
      ],
      useWhen: "Comparing quotient sizes",
      commonTrap: "Ignoring the denominator's nonzero restriction",
      accessibleText: "modulus of z1 over z2 equals modulus of z1 over modulus of z2, requiring z2 not equal to zero",
    },
    {
      id: "triangle-inequality",
      expression: "|z1 + z2| <= |z1| + |z2|",
      meaning: "Triangle inequality for complex numbers",
      variables: [
        { symbol: "z1", meaning: "any complex number" },
        { symbol: "z2", meaning: "any complex number" },
      ],
      useWhen: "Bounds and geometric comparisons",
      commonTrap: "Reversing the inequality direction",
      accessibleText: "modulus of z1 plus z2 is less than or equal to modulus of z1 plus modulus of z2",
    },
    {
      id: "cube-roots-of-unity",
      expression: "1, omega, omega^2 with omega^3 = 1 and 1 + omega + omega^2 = 0",
      meaning: "The three cube roots of unity",
      variables: [{ symbol: "omega", meaning: "a nonreal cube root of unity" }],
      useWhen: "Advanced algebra involving cube roots of unity",
      commonTrap: "Assuming omega = 1",
      accessibleText: "the cube roots of unity are one, omega and omega squared, with omega cubed equal to one and one plus omega plus omega squared equal to zero",
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
          "Representing and manipulating complex numbers algebraically and geometrically, with correct modulus, conjugate and argument conditions.",
        ],
        [
          "What is the central method choice?",
          "Choose rectangular form for algebra, conjugation for division, Argand geometry for distance and locus, and polar form for products, quotients and angle relationships.",
        ],
        [
          "Where do most mistakes begin?",
          "Assigning an argument to zero, treating argument as unrestricted, and using Advanced-only content as though it were a separately named Main bullet.",
        ],
        [
          "What should come before Complex Numbers?",
          "Quadratic Equations, Trigonometry and Coordinate Geometry.",
        ],
        [
          "What comes after it?",
          "Sequences and Series and Calculus continue to build on algebraic manipulation and representation.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Complex Numbers",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Representation and algebra",
          "Explicitly includes ordered-pair representation, a+ib form, the Argand plane and algebra of complex numbers.",
          "Explicitly includes the same representation and algebra as part of the Algebra unit.",
          "Both papers require rectangular-form fluency.",
        ],
        [
          "Modulus and argument",
          "Explicitly includes modulus and argument.",
          "Explicitly adds conjugation, properties of modulus and principal argument.",
          "Learn general argument and principal argument as distinct ideas.",
        ],
        [
          "Polar form, triangle inequality, cube roots of unity",
          "Not separately named.",
          "Explicitly includes polar representation, triangle inequality and cube roots of unity, with geometric interpretations.",
          "Do not present these as explicit Main 2026 bullets.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Complex Numbers",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Quadratic algebra",
          "Work with roots and coefficients of a quadratic equation.",
          "Revise Quadratic Equations.",
        ],
        [
          "Coordinate plane",
          "Plot an ordered pair and interpret it geometrically.",
          "Revise Coordinate Geometry.",
        ],
        [
          "Basic trigonometric angle language",
          "Read cosine and sine of a stated angle.",
          "Revise Trigonometry.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: representation first",
      intro: "Match the question signal to the correct first model before transforming a complex number.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Addition or subtraction", "Rectangular form", "None beyond correct algebra"],
        ["Division", "Multiply by conjugate of denominator", "Denominator not equal to zero"],
        ["Distance or locus", "Argand geometry and modulus", "Correct point-to-modulus mapping"],
        ["Product or quotient direction", "Polar form or argument rules", "Stated principal-argument convention"],
        ["Cube-root-of-unity expression", "omega cubed = 1 and 1 + omega + omega squared = 0", "Only for the nonreal cube roots"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-division",
      slot: "concepts",
      heading: "Worked reasoning: dividing complex numbers",
      jump: true,
      concepts: [
        {
          id: "division-worked",
          title: "Simplify z = (1+i)/(1-i)",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "Known: denominator 1 - i is not equal to zero. Find: rectangular form and a geometric check." },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Method choice: division is simplest through the conjugate of the denominator. z = [(1+i)(1+i)] / [(1-i)(1+i)] = (1 + 2i + i squared) / (1 - i squared) = 2i / 2 = i.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Validity checks: modulus check gives |(1+i)/(1-i)| = sqrt(2)/sqrt(2) = 1, and |i| = 1. Direction check: the result lies on the positive imaginary axis, consistent with argument pi/2 under the usual principal-angle convention.",
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
      id: "argument-of-zero",
      mistake: "Assigning an argument to z = 0.",
      why: [{ type: "paragraph", children: [{ text: "Argument is only defined for a nonzero complex number." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check that z is nonzero before stating or computing an argument." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "argument-unrestricted",
      mistake: "Treating argument as a single unrestricted number rather than a set differing by 2*pi multiples.",
      why: [{ type: "paragraph", children: [{ text: "General argument and principal argument are different objects, and the principal convention must be declared." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the principal-argument convention in use before answering an argument question." }] }],
      errorType: "decision-error",
    },
    {
      id: "denominator-not-checked",
      mistake: "Forgetting the denominator must be nonzero before conjugate division.",
      why: [{ type: "paragraph", children: [{ text: "Multiplying by the conjugate of a zero denominator is invalid." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the denominator is nonzero before performing conjugate division." }] }],
      errorType: "execution-error",
    },
    {
      id: "triangle-inequality-misapplied",
      mistake: "Assuming |z1+z2| = |z1|+|z2| always.",
      why: [{ type: "paragraph", children: [{ text: "Equality only holds under the stated same-direction condition." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check collinearity and direction before asserting equality in the triangle inequality." }] }],
      errorType: "decision-error",
    },
    {
      id: "conjugate-vs-negative",
      mistake: "Confusing z-bar with -z.",
      why: [{ type: "paragraph", children: [{ text: "Conjugation flips only the sign of the imaginary part, not the real part." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Recompute z-bar as a - ib directly from a + ib." }] }],
      errorType: "recall-gap",
    },
    {
      id: "advanced-scope-as-main",
      mistake: "Using polar form, cube roots of unity or the triangle inequality as though they were separately explicit JEE Main 2026 bullets.",
      why: [{ type: "paragraph", children: [{ text: "These are explicit in the JEE Advanced 2026 Algebra scope, not separately named in JEE Main 2026." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official-syllabus mapping table on this page before assuming Main-scope relevance." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Quadratic Equations",
      url: "/jee/mathematics/quadratic-equations",
      relation: "prerequisite",
      description: "Quadratic algebra underlies complex-number roots and coefficients.",
    },
    {
      label: "Trigonometry",
      url: "/jee/mathematics/trigonometry",
      relation: "related",
      description: "Angle language is needed for polar representation and argument.",
    },
    {
      label: "Coordinate Geometry",
      url: "/jee/mathematics/coordinate-geometry",
      relation: "related",
      description: "The Argand plane reuses coordinate-plane geometry for complex numbers.",
    },
    {
      label: "Sequences and Series",
      url: "/jee/mathematics/sequences-series",
      relation: "forward",
      description: "Algebraic manipulation fluency carries forward into progression formulas.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "forward",
      description: "Algebraic representation skills extend into calculus topics.",
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
      question: "What is the modulus of a complex number?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "For z = a + ib, the modulus is |z| = sqrt(a squared + b squared), the distance of the point (a, b) from the origin in the Argand plane." }],
        },
      ],
    },
    {
      question: "What is the difference between argument and principal argument?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Argument is any angle representing the direction of a nonzero z, differing by integer multiples of 2*pi. Principal argument is the single representative chosen under a declared convention.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is the argument of zero undefined?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Zero has no direction in the Argand plane, so no angle can be assigned as its argument." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar"],
  sourceNote:
    "Use only official Main and Advanced syllabus documents for scope claims. Keep polar form, principal argument, triangle-inequality equality case and cube roots of unity labelled as explicit Advanced-only content. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: complex analysis foundations, algebra and JEE Mathematics. Minimum qualification: postgraduate qualification in Mathematics, Applied Mathematics or equivalent.",
    "Review scope: modulus and conjugate identities, zero restrictions, argument conventions, polar representation, triangle-inequality equality case, cube roots of unity, official Main/Advanced boundary and worked example.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Complex Numbers for JEE 2026: Modulus, Argument and Argand Plane",
    description:
      "Learn complex-number algebra, conjugates, modulus, argument, Argand geometry and Advanced polar-form conditions for JEE.",
    ogTitle: "Complex Numbers for JEE 2026",
    ogDescription: "Modulus, conjugate, argument conventions, polar form and Main vs Advanced scope for complex numbers.",
    ogType: "article",
  },
};

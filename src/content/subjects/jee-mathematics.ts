import type { SubjectHubContent } from "@/content/types";

/**
 * T04 — JEE Mathematics subject hub.
 *
 * Content source: accepted Batch 02 production package (Page 7, JEE
 * Mathematics hub). Chapter names and URLs are derived from the URL registry;
 * this record only carries the approved editorial annotation per route.
 *
 * Evidence discipline: no weightage, frequency, expected-question count or
 * trend claim. B27 is omitted because no approved paper dataset exists.
 * Mathematical Reasoning is kept as a contextual route with no current
 * official mapping and is never presented as current 2026 scope.
 */
export const jeeMathematicsHub: SubjectHubContent = {
  url: "/jee/mathematics",
  platform: "jee",
  slug: "mathematics",
  subject: "Mathematics",
  exam: "JEE",
  eyebrow: "JEE · Mathematics",
  title: "JEE Mathematics: Complete Chapter Map and Learning Paths",
  intent:
    "Browse every approved JEE Mathematics chapter route, understand representation and method dependencies, and choose the next learning or repair action.",
  contentStatus: "draft",
  chips: ["JEE Main 2026", "JEE Advanced 2026", "30 chapter routes"],
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Mathematics questions rarely announce the best representation. A relation may need a graph, a geometry problem may become algebra, a locus may become a parameter, a probability problem may begin with counting, and a three-dimensional question may become a vector relation. Strong preparation therefore connects chapters by method, not only by textbook order.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        { text: "Direct answer: ", bold: true },
        {
          text: "JEE Mathematics is a connected system of representations and transformations. Sets and functions define objects, algebra transforms them, coordinate geometry locates them, calculus studies change and accumulation, vectors describe direction and space, and probability reasons under uncertainty. Check current scope in the Mathematics syllabus, then use the complete 30-route map below and start with the earliest place where you cannot represent the problem correctly.",
        },
      ],
    },
  ],

  taskTable: {
    id: "tasks",
    heading: "Choose your Mathematics task",
    columns: ["Your task", "Best action"],
    rows: [
      ["Verify current scope", "Open the Mathematics syllabus and check Main and Advanced separately."],
      [
        "Build calculus",
        "Follow Functions > Limits and Continuity > Differentiation > Applications of Derivatives > Integration.",
      ],
      ["Build coordinate geometry", "Follow Straight Lines > Circles > Conic Sections and the focused conic routes."],
      ["Build spatial reasoning", "Stabilise Vectors before 3D Geometry."],
      ["Repair a wrong attempt", "Separate recognition, method selection, and execution evidence."],
    ],
    note: "Destinations that are not yet built are named rather than linked, so no dead link is rendered.",
  },

  architecture: {
    id: "concept-architecture",
    heading: "Mathematics concept architecture",
    columns: ["Layer", "Core question", "Connected route path"],
    rows: [
      [
        "Language and mapping",
        "What are the objects, domains, relations, and functions?",
        "Sets and Relations > Functions",
      ],
      [
        "Algebraic transformation",
        "Which form exposes roots, symmetry, coefficients, or count?",
        "Quadratics > Complex Numbers > Sequences > Binomial > Counting",
      ],
      [
        "Shape and locus",
        "Which equation, parameter, or geometric condition represents the figure?",
        "Straight Lines > Circles > Conics > focused conic routes",
      ],
      [
        "Change",
        "How does a quantity behave locally?",
        "Functions > Limits and Continuity > Differentiation > Applications of Derivatives",
      ],
      [
        "Accumulation",
        "What total or area is built from local change?",
        "Integration > Definite Integrals > Area Under Curves > Differential Equations",
      ],
      [
        "Direction and space",
        "Which vector or coordinate relation expresses orientation and distance?",
        "Vectors > 3D Geometry",
      ],
      [
        "Uncertainty",
        "What is the sample space, dependency, and conditional structure?",
        "Permutations and Combinations > Probability > Statistics",
      ],
      [
        "Periodicity",
        "Which identity, graph, or inverse restriction controls the expression?",
        "Trigonometry > Inverse Trigonometry > calculus and geometry applications",
      ],
    ],
  },

  chapterMap: {
    heading: "All approved Mathematics chapter routes",
    scopeNote:
      "Scope labels: Both means the route's topic is represented in the official Main and Advanced 2026 syllabi, sometimes inside a broader official section. No current mapping means neither current document lists the registry topic. These are scope labels, not weightage or difficulty claims.",
    contextualHeading: "Contextual resource, not current 2026 syllabus",
    contextualNote:
      "This route has no current JEE Main 2026 or JEE Advanced 2026 Mathematics mapping. It is kept as a contextual reference only and must not be presented as current exam scope.",
    expectedCount: 30,
    notes: [
      {
        url: "/jee/mathematics/calculus",
        scope: "Both",
        order: 1,
        note: "Umbrella route connecting functions, limits, derivatives, integrals, areas, and differential equations.",
      },
      {
        url: "/jee/mathematics/coordinate-geometry",
        scope: "Both",
        order: 2,
        note: "Umbrella route organising lines, circles, conics, loci, and coordinate transformations.",
      },
      {
        url: "/jee/mathematics/complex-numbers",
        scope: "Both",
        order: 3,
        note: "Connects algebra, geometry in the Argand plane, roots, modulus, and argument.",
      },
      {
        url: "/jee/mathematics/matrices-determinants",
        scope: "Both",
        order: 4,
        note: "Represents linear systems and transformations; requires careful operation control.",
      },
      {
        url: "/jee/mathematics/vectors",
        scope: "Both",
        order: 5,
        note: "Encodes magnitude, direction, products, and geometric relationships; prerequisite for efficient 3D work.",
      },
      {
        url: "/jee/mathematics/3d-geometry",
        scope: "Both",
        order: 6,
        note: "Uses coordinates and vectors for lines, planes, angles, distances, and coplanarity.",
      },
      {
        url: "/jee/mathematics/probability",
        scope: "Both",
        order: 7,
        note: "Requires sample-space construction, counting, event relations, and conditional structure.",
      },
      {
        url: "/jee/mathematics/permutations-combinations",
        scope: "Both",
        order: 8,
        note: "Supplies counting models for arrangements, selections, and probability.",
      },
      {
        url: "/jee/mathematics/binomial-theorem",
        scope: "Both",
        order: 9,
        note: "Connects expansion structure, coefficients, terms, and combinatorial reasoning.",
      },
      {
        url: "/jee/mathematics/sequences-series",
        scope: "Both",
        order: 10,
        note: "Develops pattern, recurrence, progression, sums, and limiting behavior.",
      },
      {
        url: "/jee/mathematics/trigonometry",
        scope: "Both",
        order: 11,
        note: "Supplies identities, equations, graphs, and periodic structure used across geometry and calculus.",
      },
      {
        url: "/jee/mathematics/functions",
        scope: "Both",
        order: 12,
        note: "Defines domain, range, mapping, composition, invertibility, graph behavior, and calculus language.",
      },
      {
        url: "/jee/mathematics/limits-continuity",
        scope: "Both",
        order: 13,
        note: "Establishes local behavior and continuity before differentiation and integration theory.",
      },
      {
        url: "/jee/mathematics/differentiation",
        scope: "Both",
        order: 14,
        note: "Measures local change; supports tangents, monotonicity, approximation, and extrema.",
      },
      {
        url: "/jee/mathematics/integration",
        scope: "Both",
        order: 15,
        note: "Reverses differentiation and builds accumulated quantities through standard methods.",
      },
      {
        url: "/jee/mathematics/differential-equations",
        scope: "Both",
        order: 16,
        note: "Converts rate relationships into solvable first-order models within official scope.",
      },
      {
        url: "/jee/mathematics/straight-lines",
        scope: "Both",
        order: 17,
        note: "Foundation for coordinate form, angle, distance, intersection, and conic tangents.",
      },
      {
        url: "/jee/mathematics/circles",
        scope: "Both",
        order: 18,
        note: "Builds locus, chord, tangent, normal, parameter, and intersection reasoning.",
      },
      {
        url: "/jee/mathematics/parabola",
        scope: "Both",
        order: 19,
        note: "Focused conic route for standard form, focus-directrix geometry, parameters, tangents, and normals.",
      },
      {
        url: "/jee/mathematics/ellipse",
        scope: "Both",
        order: 20,
        note: "Focused conic route for focal geometry, eccentricity, parameters, tangents, and normals.",
      },
      {
        url: "/jee/mathematics/hyperbola",
        scope: "Both",
        order: 21,
        note: "Focused conic route for focal geometry, asymptotic structure, parameters, tangents, and normals.",
      },
      {
        url: "/jee/mathematics/quadratic-equations",
        scope: "Both",
        order: 22,
        note: "Connects roots, coefficients, discriminant, transformations, and complex extensions.",
      },
      {
        url: "/jee/mathematics/sets-relations",
        scope: "Both",
        order: 23,
        note: "Foundation for logic of membership, operations, products, relations, and mappings.",
      },
      {
        url: "/jee/mathematics/statistics",
        scope: "Both",
        order: 24,
        note: "Organises central tendency, dispersion, distributions, and random-variable summaries.",
      },
      {
        url: "/jee/mathematics/mathematical-reasoning",
        scope: "No current mapping",
        order: 25,
        contextual: true,
        note: "Approved registry route kept as a contextual reference. It is not listed in the official JEE Main 2026 or JEE Advanced 2026 Mathematics syllabus and must not be shown as current scope.",
      },
      {
        url: "/jee/mathematics/conic-sections",
        scope: "Both",
        order: 26,
        note: "Umbrella route connecting circle, parabola, ellipse, and hyperbola through shared locus and parameter ideas.",
      },
      {
        url: "/jee/mathematics/inverse-trigonometry",
        scope: "Both",
        order: 27,
        note: "Requires function restrictions and principal values; supports calculus transformations.",
      },
      {
        url: "/jee/mathematics/application-of-derivatives",
        scope: "Both",
        order: 28,
        note: "Applies derivatives to rate, monotonicity, tangents, normals, maxima, and minima.",
      },
      {
        url: "/jee/mathematics/area-under-curves",
        scope: "Both",
        order: 29,
        note: "Uses definite integration, intersections, sign, symmetry, and region decomposition.",
      },
      {
        url: "/jee/mathematics/definite-integrals",
        scope: "Both",
        order: 30,
        note: "Builds from integration and limit ideas; supports properties, evaluation, and area.",
      },
    ],
  },

  pyqNote:
    "The approved Mathematics previous-year-paper destination is /jee/previous-year-papers/mathematics. It is rendered only when official paper provenance, answer or solution status, and route state are verified. This hub does not claim recurring topics, expected questions, or difficulty percentages.",

  diagnosis: {
    id: "diagnosis",
    heading: "Diagnose a Mathematics loss",
    columns: ["Attempt evidence", "Primary PI label", "Repair"],
    rows: [
      [
        "The underlying definition, theorem, or relationship is not understood",
        "Knowledge Gap",
        "Rebuild it from examples, non-examples, graphs, and boundary cases.",
      ],
      [
        "The identity, condition, or standard transformation cannot be retrieved",
        "Recall Gap",
        "Use active retrieval with a condition prompt, not passive rereading.",
      ],
      [
        "The plan is correct but algebra, sign, domain, arithmetic, or notation fails",
        "Execution Error",
        "Isolate the fragile step and create an explicit checking rule.",
      ],
      [
        "The wrong representation, method, order, or time investment is chosen",
        "Decision / Selection Error",
        "Compare methods and state the cue for each choice.",
      ],
      [
        "Several causes remain plausible",
        "Needs Review",
        "Collect a second attempt or verbal explanation before assigning the label.",
      ],
    ],
  },

  relatedLinks: [
    { label: "JEE syllabus", url: "/jee/syllabus", relation: "up" },
    { label: "Mathematics syllabus", url: "/jee/syllabus/mathematics", relation: "up" },
    { label: "JEE Advanced syllabus", url: "/jee/jee-advanced/syllabus", relation: "related" },
    { label: "Physics hub", url: "/jee/physics", relation: "related" },
    { label: "Chemistry hub", url: "/jee/chemistry", relation: "related" },
  ],

  faqs: [
    {
      question: "Which Mathematics chapter should I start first?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Start with the earliest missing language or representation in your target path. Functions support calculus, Straight Lines support coordinate geometry, counting supports probability, and Vectors support efficient 3D reasoning.",
            },
          ],
        },
      ],
    },
    {
      question: "Why are Calculus, Coordinate Geometry, and Conic Sections separate from their child routes?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "They are approved umbrella routes. They organise a connected system, while focused routes solve a narrower intent.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Mathematical Reasoning in the current official syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is not listed in the official JEE Main 2026 or JEE Advanced 2026 Mathematics syllabus. The registry route is kept for context and must not be presented as current official scope.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is there no chapter-priority ranking?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No approved paper dataset and methodology is supplied. This hub prioritises prerequisites and method relationships instead.",
            },
          ],
        },
      ],
    },
  ],

  sourceRefs: ["nta-jee-syllabus", "jee-advanced-syllabus"],
  lastVerified: "8 September 2026",

  seo: {
    title: "JEE Mathematics Chapters: Complete Main and Advanced Map",
    description:
      "Browse all approved JEE Mathematics chapters with official scope, prerequisites, representation choices, and structured learning paths.",
    ogTitle: "JEE Mathematics Chapter Map | Rank Sarthi",
    ogDescription:
      "Navigate every approved JEE Mathematics chapter by representation, prerequisite, method, and official exam scope.",
    ogType: "website",
  },
};

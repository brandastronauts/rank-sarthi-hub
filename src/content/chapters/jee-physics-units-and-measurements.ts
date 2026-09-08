import type { ChapterContent } from "@/content/types";

/**
 * Units and Measurements — T06 production content (Batch 04, 8 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/units-and-measurements on noindex until review is
 *   recorded.
 */
export const jeePhysicsUnitsAndMeasurements: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Units and Measurements",
  slug: "units-and-measurements",
  url: "/jee/physics/units-and-measurements",
  canonicalIntent:
    "Report and test physical quantities correctly through units, dimensions, resolution, significant figures, and uncertainty.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every rule carries its condition and its trap",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A physical measurement is incomplete without a value and unit, and its reliability depends on resolution, method, and uncertainty. Dimensional analysis checks whether an equation can be physically consistent, but it cannot determine dimensionless numerical constants or prove that an equation is correct.",
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
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "prerequisite",
      description: "Stabilise scientific notation, algebra, ratios and graph reading before numerical Physics work.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Subject hub for the Physics chapter set.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every Physics, Chemistry and Mathematics unit.",
    },
  ],

  syllabusMapping: {
    unit: "Units and Measurements",
    topics: [
      "Units and systems of units",
      "SI units, fundamental and derived units",
      "Least count",
      "Significant figures",
      "Measurement errors",
      "Dimensions and dimensional analysis with applications",
      "Methods of measurement and error analysis for listed experiments",
      "Vernier callipers and screw gauge",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): quantity, unit, instrument, uncertainty, test */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "quantity",
      title: "1. Quantity",
      keyIdea: "Identify what physical property is being measured before doing anything else.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Identify what physical property is being measured." }],
        },
      ],
    },
    {
      id: "unit",
      title: "2. Unit",
      keyIdea: "Express the value in a coherent unit system before combining quantities.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Express the value in a coherent unit system before combining quantities." }],
        },
      ],
    },
    {
      id: "instrument",
      title: "3. Instrument",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Read the instrument model, zero, scale direction, and least count from the given setup." },
          ],
        },
      ],
    },
    {
      id: "resolution",
      title: "4. Resolution",
      keyIdea: "Least count limits the smallest scale increment directly resolved by the instrument model.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Least count limits the smallest scale increment directly resolved by the instrument model." },
          ],
        },
      ],
    },
    {
      id: "uncertainty",
      title: "5. Uncertainty",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Carry errors according to the mathematical operation and report the result at an appropriate precision.",
            },
          ],
        },
      ],
    },
    {
      id: "dimensional-test",
      title: "6. Dimensional test",
      keyIdea: "Check homogeneity before trusting algebra or a proposed relation.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Check homogeneity before trusting algebra or a proposed relation." }],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25) placed at typed anchor points               */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Units and Measurements",
      intro:
        "Main covers SI units, fundamental and derived units, least count, significant figures, errors, dimensions, and dimensional analysis. Advanced also connects measurement and error analysis to named experiments and measuring instruments.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Units and systems",
          "Units and systems of units, SI units, fundamental and derived units are explicitly listed.",
          "Units and dimensions are covered within the same official scope.",
        ],
        [
          "Precision and error handling",
          "Least count, significant figures, and measurement errors are explicitly listed.",
          "Least count, significant figures, and methods of error analysis are explicitly listed.",
        ],
        [
          "Dimensions",
          "Dimensions and dimensional analysis with applications are explicitly listed.",
          "Dimensional analysis is explicitly listed.",
        ],
        [
          "Instrument-linked experiments",
          "Not separately listed as an experiment set on this page.",
          "Methods of measurement and error analysis for listed experiments using instruments including Vernier callipers and screw gauge are explicitly listed.",
        ],
      ],
      note: "Sources: the current official NTA JEE Main syllabus and JEE Advanced syllabus.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Units and Measurements",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Scientific notation",
          "Read and write very large or very small numbers in powers of ten.",
          "Revise scientific notation and order of magnitude.",
        ],
        [
          "Algebra and powers",
          "Rearrange an equation and combine exponents.",
          "Practise algebraic manipulation with powers and roots.",
        ],
        [
          "Ratios",
          "Compare two quantities as a ratio or fraction.",
          "Revise ratio and proportion.",
        ],
        [
          "Graph reading",
          "Read values and trends off a plotted graph.",
          "Revise reading axes, scale, and intercepts.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list. If these foundations are weak, begin at JEE Mathematics and return before numerical Physics work.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the method before calculating",
      intro: "Six decisions cover most Units and Measurements questions. Select the method before any algebra.",
      columns: ["Question signal", "First action", "First check"],
      rows: [
        ["Convert a derived unit", "Write base dimensions and conversion factors", "Raise conversion factors to the same powers"],
        ["Test a formula", "Compare dimensions term by term", "Addition requires identical dimensions"],
        ["Direct instrument reading", "Establish least count and zero correction from the shown instrument", "Sign of correction"],
        ["Product or quotient of measurements", "Add limiting fractional uncertainties", "Independent statistical treatment is not implied by this rule"],
        ["Sum or difference", "Add limiting absolute uncertainties", "Keep units common"],
        ["Report a calculated result", "Match meaningful precision to uncertainty", "Do not retain calculator noise"],
      ],
    },
    {
      id: "diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "Diagnose the measurement failure",
      columns: ["Primary label", "Evidence", "Corrective action"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot distinguish unit, dimension, least count, precision, and accuracy",
          "Rebuild definitions with one measurement example",
        ],
        [
          "Recall Gap",
          "Correct operation identified, but propagation rule is unavailable",
          "Retrieve the rule and its worst-case condition",
        ],
        [
          "Execution Error",
          "Conversion power, zero correction, or arithmetic is wrong",
          "Annotate every factor and unit",
        ],
        [
          "Decision / Selection Error",
          "Uses fractional-error addition for a sum, or treats dimensional analysis as a derivation",
          "Match the check to the mathematical operation",
        ],
        [
          "Needs Review",
          "Instrument diagram or reporting convention is ambiguous",
          "Send the full setup and proposed reading for academic review",
        ],
      ],
    },
    {
      id: "practice",
      jump: true,
      slot: "practice",
      heading: "Official-paper handling",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "Which questions can be tagged to this chapter?",
          "Official questions can be tagged by unit conversion, dimensional analysis, significant figures, limiting error, Vernier callipers, screw gauge, or experiment-linked measurement, only after academic verification.",
        ],
        [
          "What must be preserved when a question is rendered?",
          "The rendered question must preserve its instrument diagram and scale.",
        ],
        [
          "What is not published here?",
          "No frequency or prediction claim is published for any official question.",
        ],
      ],
      note: "Official-paper handling follows the source hierarchy: official paper archives are the only paper sources used, and any tagging requires human academic review first.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "dimensional-representation",
      expression: "[Q] = M^a L^b T^c ...",
      meaning: "Dimensional representation of quantity Q in terms of base dimensions.",
      variables: [
        { symbol: "Q", meaning: "physical quantity being represented" },
        { symbol: "M, L, T", meaning: "base dimensions of mass, length and time (and further base dimensions as needed)" },
        { symbol: "a, b, c", meaning: "powers of the base dimensions" },
      ],
      useWhen: "A base set is chosen consistently for the quantity.",
      commonTrap: "Confusing a dimension with a unit.",
      accessibleText: "The dimension of quantity Q equals mass raised to power a, length raised to power b, and time raised to power c, and so on for any further base dimensions used.",
    },
    {
      id: "dimensional-homogeneity",
      expression: "[LHS] = [RHS]",
      meaning: "Dimensional homogeneity: both sides of a physical equation must carry the same dimensions.",
      variables: [
        { symbol: "LHS", meaning: "left-hand side of the equation" },
        { symbol: "RHS", meaning: "right-hand side of the equation" },
      ],
      useWhen: "This is necessary for a physical equation to be valid.",
      commonTrap: "Treating dimensional homogeneity as proof that the equation is correct.",
      accessibleText: "The dimension of the left-hand side must equal the dimension of the right-hand side.",
    },
    {
      id: "sum-difference-error",
      expression: "Delta z = Delta x + Delta y, for z = x plus or minus y",
      meaning: "Limiting absolute-error propagation for a sum or difference of two measured quantities.",
      variables: [
        { symbol: "z", meaning: "result of the sum or difference", unit: "same as z" },
        { symbol: "Delta x, Delta y", meaning: "absolute uncertainties in x and y", unit: "same as z" },
      ],
      useWhen: "Worst-case classroom rule for measured sums or differences.",
      commonTrap: "Adding fractional errors for a sum instead of absolute errors.",
      accessibleText: "The absolute uncertainty in z equals the absolute uncertainty in x plus the absolute uncertainty in y, for z equal to x plus or minus y.",
    },
    {
      id: "product-quotient-error",
      expression: "Delta z / z = Delta x / x + Delta y / y, for z = x y or x / y",
      meaning: "Limiting fractional-error propagation for a product or quotient of two measured quantities.",
      variables: [
        { symbol: "Delta z / z", meaning: "fractional uncertainty in the result", unit: "dimensionless" },
        { symbol: "Delta x / x, Delta y / y", meaning: "fractional uncertainties in x and y", unit: "dimensionless" },
      ],
      useWhen: "Small uncertainties under the stated worst-case rule.",
      commonTrap: "Losing the absolute magnitude for a signed result.",
      accessibleText: "The fractional uncertainty in z equals the fractional uncertainty in x plus the fractional uncertainty in y, for z equal to x times y or x divided by y.",
    },
    {
      id: "power-rule-error",
      expression: "Delta z / z = |n| times Delta x / x, for z = x^n",
      meaning: "Power-rule uncertainty propagation.",
      variables: [
        { symbol: "n", meaning: "constant exponent" },
        { symbol: "Delta z / z", meaning: "fractional uncertainty in the result", unit: "dimensionless" },
      ],
      useWhen: "Small uncertainty and constant exponent n.",
      commonTrap: "Forgetting the magnitude of n.",
      accessibleText: "The fractional uncertainty in z equals the absolute value of n times the fractional uncertainty in x, for z equal to x raised to the power n.",
    },
    {
      id: "percent-error",
      expression: "percent error = 100 times Delta x / |x|",
      meaning: "Relative error expressed as a percentage.",
      variables: [
        { symbol: "Delta x", meaning: "absolute uncertainty in x", unit: "same as x" },
        { symbol: "x", meaning: "reference value" },
      ],
      useWhen: "Reference value nonzero.",
      commonTrap: "Dividing by an inconsistent reference value.",
      accessibleText: "Percent error equals one hundred times the absolute uncertainty in x divided by the absolute value of x.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-density-uncertainty",
      prompt:
        "A solid cylinder has measured mass M, radius r, and length l. How does the uncertainty in the calculated density combine the uncertainties in M, r, and l?",
      answer: "Delta(rho)/rho = Delta M/M + 2(Delta r/r) + Delta l/l",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Write density as rho = M / (pi times r squared times l)." }],
            [{ text: "Apply the limiting fractional-uncertainty rule to a product and quotient of measured quantities." }],
            [{ text: "The radius uncertainty is doubled because radius is squared, giving 2 times Delta r / r." }],
            [{ text: "The constant pi contributes no measurement uncertainty." }],
            [{ text: "The final numerical reporting should be reviewed against the stated instrument resolution and significant-figure convention." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "These are limiting-error rules used in the standard school treatment. They are not a substitute for a statistical uncertainty model when repeated observations and distributions are supplied.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes (B30)                                               */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "precise-not-accurate",
      mistake: "Calling a precise-looking number accurate without a reference or uncertainty",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Precision concerns repeatability or resolution; accuracy concerns closeness to an accepted value. A number with many digits is not automatically accurate." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State the uncertainty alongside the value and check it against a reference where one exists." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "adding-different-dimensions",
      mistake: "Adding quantities with different dimensions",
      why: [
        { type: "paragraph", children: [{ text: "A sum or difference is physically meaningless unless every term carries the same dimensions." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check dimensional homogeneity of every additive term before combining them." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "dimensional-consistency-as-proof",
      mistake: "Concluding that dimensional consistency proves a formula",
      why: [
        { type: "paragraph", children: [{ text: "Dimensional analysis cannot determine dimensionless numerical constants or fix the exact form of a relation." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use dimensional homogeneity only to reject inconsistent equations, not to certify a proposed one as correct." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "memorised-least-count",
      mistake: "Using a memorised Vernier or screw-gauge least count without reading the given instrument design",
      why: [
        { type: "paragraph", children: [{ text: "Least count depends on the specific instrument's scale design, which can differ from a remembered standard value." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Read the least count from the given instrument's main scale and vernier or pitch and circular scale before using it." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "zero-error-sign",
      mistake: "Reversing zero-error and zero-correction signs",
      why: [
        { type: "paragraph", children: [{ text: "Zero correction is applied with the opposite sign of the zero error, and reversing this flips the corrected reading in the wrong direction." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Determine the zero error sign first, then apply the correction with the opposite sign to the raw reading." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "excess-digits",
      mistake: "Reporting more digits than the measured information supports",
      why: [
        { type: "paragraph", children: [{ text: "A calculated result cannot be more precise than the least precise measurement or instrument resolution feeding it." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Match the reported significant figures to the weakest input measurement, and drop calculator noise." }] },
      ],
      errorType: "execution-error",
    },
  ],

  faqs: [
    {
      question: "What can dimensional analysis prove?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It can reject a dimensionally inconsistent equation, but it cannot by itself prove a dimensionally consistent equation correct.",
            },
          ],
        },
      ],
    },
    {
      question: "What is least count?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "It is the smallest scale increment directly resolved by the stated instrument model." }],
        },
      ],
    },
    {
      question: "Are accuracy and precision the same?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Precision concerns repeatability or resolution; accuracy concerns closeness to an accepted value." },
          ],
        },
      ],
    },
    {
      question: "Which error-propagation rule applies to a sum or difference of measurements?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The limiting absolute uncertainties are added, not the fractional uncertainties.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "forward",
      description: "Apply stable units, dimensions and vectors to describe motion.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "forward",
      description: "Carry consistent units and error handling into circuit quantities.",
    },
    {
      label: "Elasticity",
      url: "/jee/physics/elasticity",
      relation: "related",
      description: "Apply the same measurement and uncertainty language to mechanical properties.",
    },
    {
      label: "Fluid Mechanics",
      url: "/jee/physics/fluid-mechanics",
      relation: "related",
      description: "Apply consistent units and dimensional checks to fluid quantities.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "prerequisite",
      description: "Stabilise scientific notation, algebra and graph reading first.",
    },
  ],
  links: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to the Physics subject hub.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every unit.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Provenance (B37)                                                    */
  /* ------------------------------------------------------------------ */
  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the current official NTA JEE Main syllabus and JEE Advanced syllabus, with NCERT Physics XI and XII used to verify measurement rules and standard conditions. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: a JEE Physics educator experienced in experimental skills and quantitative reporting.",
    "Academically reviewed by: Unassigned. Required expertise: experimental Physics, metrology fundamentals, uncertainty, and JEE practical-skill conventions. Required qualification: postgraduate degree in Physics or a closely related experimental science or engineering discipline, with relevant measurement expertise.",
    "Last reviewed: pending completed academic review; no date is published until review is recorded.",
    "Sources checked: the current official NTA JEE Main syllabus, JEE Advanced syllabus, NCERT Units and Measurements and experiment guidance, and official paper archives.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Units and Measurements for JEE: Errors, Dimensions, Rules",
    description:
      "Learn JEE units and measurements through SI units, dimensions, least count, significant figures, error rules, worked reasoning, and common traps.",
    ogTitle: "Units and Measurements for JEE",
    ogDescription:
      "A precise guide to units, dimensions, instruments, uncertainty, and reporting.",
  },
};

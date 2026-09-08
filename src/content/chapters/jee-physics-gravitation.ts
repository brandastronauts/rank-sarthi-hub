import type { ChapterContent } from "@/content/types";

/**
 * Gravitation — T06 production content (Batch 04, 8 September 2026).
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
 *   keeps /jee/physics/gravitation on noindex until review is recorded.
 */
export const jeePhysicsGravitation: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Gravitation",
  slug: "gravitation",
  url: "/jee/physics/gravitation",
  canonicalIntent:
    "Connect gravitational force, field, potential, energy, and orbital motion without mixing vector and scalar quantities.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Gravitation is an attractive inverse-square interaction. Gravitational field is force per unit test mass and points toward the source. Gravitational potential is potential energy per unit mass and is negative when zero is chosen at infinity.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Circular orbits result when gravity supplies centripetal acceleration; escape is an energy condition, not a powered climb at constant speed.",
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
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Vectors, force balance, and Newton's laws underpin field and orbit reasoning.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Work-energy reasoning is needed for potential, potential energy, and orbital energy.",
    },
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "prerequisite",
      description: "Circular-motion acceleration and graph reading support orbit and variation-of-g reasoning.",
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
    unit: "Gravitation",
    topics: [
      "Universal law of gravitation",
      "Acceleration due to gravity and its variation with altitude and depth",
      "Kepler's laws of planetary motion",
      "Gravitational potential and potential energy",
      "Escape velocity",
      "Satellite motion, orbital velocity, time period, and energy",
      "Geostationary orbits",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): source, field, potential, orbit         */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "source",
      title: "1. A source creates a field",
      keyIdea: "A mass distribution creates a gravitational field around it.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "A mass distribution creates a gravitational field around it. Every other mass placed in that field experiences a force." }],
        },
      ],
    },
    {
      id: "field",
      title: "2. Field is a vector",
      keyIdea: "The field g gives the acceleration of a test mass and points toward the source.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "The field g gives the acceleration a test mass would experience at a point. It is a vector and points toward the source mass." }],
        },
      ],
    },
    {
      id: "potential",
      title: "3. Potential is a scalar",
      keyIdea: "The scalar V makes energy changes easier: U equals m times V.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "The scalar potential V makes energy changes easier to compute. Potential energy of a mass m in the field equals m times V." }],
        },
      ],
    },
    {
      id: "reference",
      title: "4. Zero at infinity is the standard reference",
      keyIdea: "For isolated masses, choosing V equal to zero at infinity makes bound-state potential and total energy negative.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "For isolated masses, V equal to zero at infinity is the standard choice, so bound-state potential and total energy come out negative." }],
        },
      ],
    },
    {
      id: "orbit",
      title: "5. Circular orbit keeps speed constant, direction changing",
      body: [
        {
          type: "paragraph",
          children: [{ text: "In a circular orbit, gravity changes the direction of velocity while speed remains constant. Gravity supplies exactly the centripetal force required." }],
        },
      ],
    },
    {
      id: "escape",
      title: "6. Escape is an energy condition",
      keyIdea: "Minimum escape speed makes the final total energy at infinity zero.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Minimum escape speed makes the final total energy at infinity zero, neglecting atmosphere and other bodies. Escape is not a constant force climbing at constant speed." }],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25) placed at typed anchor points               */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is the chapter about?",
          "How gravitational force, field, potential, potential energy, orbital motion, and escape velocity connect, and how g varies with altitude and depth.",
        ],
        [
          "What is the central method choice?",
          "Use field and vector superposition for force or acceleration at a point, potential difference for work between two radii, gravity-equals-centripetal-requirement for circular satellites, total orbital energy for transfers between orbits, and energy conservation for escape.",
        ],
        [
          "Where do most mistakes begin?",
          "Using altitude instead of centre-to-centre radius, giving potential a vector direction, and confusing total orbital energy with potential energy.",
        ],
        [
          "What should come before Gravitation?",
          "Vectors, circular-motion acceleration, work-energy reasoning, and graph reading.",
        ],
        [
          "What comes after it?",
          "Electrostatics reuses the same inverse-square field and potential structure, and Rotational Motion extends circular-motion reasoning.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Gravitation",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Law of gravitation and g variation",
          "Universal gravitation and acceleration due to gravity with variation with altitude and depth are explicitly listed.",
          "Law of gravitation and acceleration due to gravity are explicitly listed.",
          "Name the model, spherical Earth or uniform-density Earth, before applying a variation formula.",
        ],
        [
          "Kepler's laws",
          "Kepler's laws are explicitly listed.",
          "Kepler's law is explicitly listed.",
          "Distinguish equal-area, period-cubed-radius, and elliptical-orbit statements.",
        ],
        [
          "Field, potential, and energy",
          "Gravitational potential and potential energy, and escape velocity are explicitly listed.",
          "Gravitational field and potential are explicitly listed.",
          "Keep field as a vector and potential as a scalar throughout.",
        ],
        [
          "Satellite and orbital motion",
          "Satellite motion, orbital velocity, time period, and energy are explicitly listed.",
          "Geostationary orbits and circular planetary and satellite motion are explicitly listed.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Gravitation",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Vectors",
          "Add and resolve vectors, and superpose forces or fields from multiple sources.",
          "Review vector addition and components in Kinematics.",
        ],
        [
          "Circular motion",
          "Identify centripetal acceleration and its direction in uniform circular motion.",
          "Review radial acceleration in Kinematics.",
        ],
        [
          "Work and energy",
          "Relate work done against a force to a change in potential energy.",
          "Review work-energy reasoning in Work, Energy and Power.",
        ],
        [
          "Graphs",
          "Read variation graphs, such as g against height or depth.",
          "Review slope and trend reading from motion graphs in Kinematics.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Six decisions cover most Gravitation questions. Select the model before any algebra.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        ["Force or acceleration at a point", "Field and vector superposition", "Direction and distance from source centre"],
        ["Work between two radii", "Potential difference", "Reference and endpoint radii"],
        ["Circular satellite", "Gravity equals centripetal requirement", "Orbit radius is from the planet's centre"],
        ["Transfer between circular orbits", "Total orbital energy", "A transfer path is not itself a circular orbit"],
        ["Escape from a radius", "Energy conservation", "Final speed at infinity and neglected resistance"],
        ["g below a surface", "Enclosed-mass model", "Density assumption if using a linear depth result"],
      ],
    },
    {
      id: "diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis: find the first wrong layer",
      columns: ["Primary label", "Evidence", "Corrective action"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot distinguish field, potential, and potential energy",
          "Rebuild vector-versus-scalar and per-unit-mass meanings",
        ],
        [
          "Recall Gap",
          "Correct orbit model, but speed, period, or energy relation is unavailable",
          "Retrieve the relation with its circular-orbit condition",
        ],
        [
          "Execution Error",
          "Wrong sign, radius, or square-root algebra",
          "Write centre-to-centre radius before substitution",
        ],
        [
          "Decision / Selection Error",
          "Uses force integration when endpoint potential is enough, or circular formulas for a transfer path",
          "Classify trajectory and requested quantity first",
        ],
        [
          "Needs Review",
          "Uses an unstated Earth-density model or ambiguous orbit condition",
          "Escalate the assumption for academic review",
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
          "How are official questions used here?",
          "Official questions may be classified by field, potential, g variation, circular orbit, Kepler relation, geostationary condition, or escape only after academic review.",
        ],
        [
          "What is published about a linked question?",
          "The source year and paper link, not invented chapter counts or trend conclusions.",
        ],
      ],
      note: "Official repositories: JEE Advanced paper archive and NTA JEE Main question papers.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "newton-gravitation",
      expression: "F = G m1 m2 / r^2",
      meaning: "Mutual force magnitude between point masses.",
      variables: [
        { symbol: "F", meaning: "gravitational force magnitude", unit: "N" },
        { symbol: "G", meaning: "universal gravitational constant", unit: "N m^2/kg^2" },
        { symbol: "m1, m2", meaning: "interacting masses", unit: "kg" },
        { symbol: "r", meaning: "centre-to-centre separation", unit: "m" },
      ],
      useWhen: "Point masses, or spherically symmetric bodies evaluated outside their surface.",
      commonTrap: "Using altitude instead of centre-to-centre r.",
      accessibleText: "Gravitational force equals G times the product of the two masses, divided by the square of the separation between their centres.",
    },
    {
      id: "gravitational-field",
      expression: "g = - G M r-hat / r^2",
      meaning: "Field of an isolated spherical mass M, at distance r, directed toward the mass.",
      variables: [
        { symbol: "g", meaning: "gravitational field", unit: "m/s^2" },
        { symbol: "M", meaning: "source mass", unit: "kg" },
        { symbol: "r-hat", meaning: "unit vector pointing away from the source" },
      ],
      useWhen: "Outside a spherically symmetric source.",
      commonTrap: "Dropping the inward direction and treating the field as a positive scalar.",
      accessibleText: "Gravitational field equals minus G times M divided by r squared, directed toward the source along the radial unit vector.",
    },
    {
      id: "potential-and-energy",
      expression: "V = - G M / r,  U = m V",
      meaning: "Potential and potential energy with zero chosen at infinity.",
      variables: [
        { symbol: "V", meaning: "gravitational potential", unit: "J/kg" },
        { symbol: "U", meaning: "potential energy of mass m", unit: "J" },
      ],
      useWhen: "Outside an isolated spherical source, with V equal to zero at infinity.",
      commonTrap: "Treating potential as a vector, or making it positive.",
      accessibleText: "Gravitational potential equals minus G M over r, and potential energy equals mass times potential.",
    },
    {
      id: "orbital-speed",
      expression: "v_o = square root of (G M / r)",
      meaning: "Circular-orbit speed.",
      variables: [
        { symbol: "v_o", meaning: "orbital speed", unit: "m/s" },
        { symbol: "r", meaning: "orbit radius from the centre", unit: "m" },
      ],
      useWhen: "Circular orbit of a satellite with negligible mass compared to a dominant central source.",
      commonTrap: "Using surface radius when the orbit altitude is nonzero.",
      accessibleText: "Orbital speed equals the square root of G M divided by r.",
    },
    {
      id: "orbital-period",
      expression: "T = 2 pi times square root of (r^3 / (G M))",
      meaning: "Circular-orbit period.",
      variables: [
        { symbol: "T", meaning: "orbital period", unit: "s" },
      ],
      useWhen: "Same conditions as the circular-orbit speed relation.",
      commonTrap: "Applying it directly to a noncircular trajectory.",
      accessibleText: "Orbital period equals two pi times the square root of r cubed divided by G M.",
    },
    {
      id: "orbital-total-energy",
      expression: "E = - G M m / (2 r)",
      meaning: "Total energy in a circular orbit.",
      variables: [
        { symbol: "E", meaning: "total mechanical energy", unit: "J" },
        { symbol: "m", meaning: "satellite mass", unit: "kg" },
      ],
      useWhen: "Circular orbit, zero potential chosen at infinity.",
      commonTrap: "Confusing total energy with potential energy, which is minus G M m over r.",
      accessibleText: "Total orbital energy equals minus G M m divided by two r.",
    },
    {
      id: "escape-speed",
      expression: "v_e = square root of (2 G M / r)",
      meaning: "Minimum local escape speed.",
      variables: [
        { symbol: "v_e", meaning: "escape speed", unit: "m/s" },
      ],
      useWhen: "No atmosphere, no propulsion after launch, other bodies neglected.",
      commonTrap: "Assuming the object reaches infinity with nonzero speed.",
      accessibleText: "Escape speed equals the square root of two G M divided by r.",
    },
    {
      id: "g-variation-altitude",
      expression: "g_h = g_0 times [R / (R + h)]^2",
      meaning: "Variation of g above a spherical body at height h.",
      variables: [
        { symbol: "g_h", meaning: "gravity at height h", unit: "m/s^2" },
        { symbol: "g_0", meaning: "gravity at the surface", unit: "m/s^2" },
        { symbol: "R", meaning: "planetary radius", unit: "m" },
        { symbol: "h", meaning: "height above the surface", unit: "m" },
      ],
      useWhen: "Outside a spherical Earth model.",
      commonTrap: "Using the small-height approximation g_0 times (1 minus 2h/R) when h is not small.",
      accessibleText: "Gravity at height h equals surface gravity times the square of R over R plus h.",
    },
    {
      id: "g-variation-depth",
      expression: "g_d = g_0 times (1 - d / R)",
      meaning: "Textbook depth result for g below the surface, at depth d.",
      variables: [
        { symbol: "g_d", meaning: "gravity at depth d", unit: "m/s^2" },
        { symbol: "d", meaning: "depth below the surface", unit: "m" },
      ],
      useWhen: "Uniform-density spherical Earth model.",
      commonTrap: "Treating the linear result as an exact real-Earth law.",
      accessibleText: "Gravity at depth d equals surface gravity times one minus d over R, for a uniform-density model.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-orbit-to-escape",
      prompt: "A satellite of mass m moves in a circular orbit of radius r. How much energy must be added, at minimum, to let it escape, and by what factor does its speed change?",
      answer: "The least added energy is G M m divided by two r, and the speed changes from the orbital speed to the square root of two times the orbital speed.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "The satellite's initial total energy in the circular orbit is E_i = minus G M m divided by two r." }],
            [{ text: "The minimum escape condition is that the final total energy at infinity equals zero." }],
            [{ text: "The least added energy is therefore delta E = G M m divided by two r." }],
            [{ text: "At the injection point, this changes the speed from the orbital speed v_o = square root of (G M / r) to the escape speed v_e = square root of (2 G M / r), which equals the square root of two times v_o." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "This reasoning distinguishes total orbital energy from local kinetic energy and makes the boundary condition, zero total energy at infinity, explicit before any substitution.",
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
      id: "altitude-vs-radius",
      mistake: "Using altitude as r instead of adding the planetary radius",
      why: [
        { type: "paragraph", children: [{ text: "Force, field, and orbit formulas use the centre-to-centre distance, not height above the surface." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Add the planetary radius to the altitude before substituting r." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "potential-as-vector",
      mistake: "Giving gravitational potential a vector direction",
      why: [
        { type: "paragraph", children: [{ text: "Potential is a scalar, energy per unit mass; only the field is a vector." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep potential as a signed scalar and reserve direction for the field." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "total-vs-potential-energy",
      mistake: "Forgetting that circular-orbit total energy is half the potential energy",
      why: [
        { type: "paragraph", children: [{ text: "Total energy in a circular orbit is minus G M m over two r, while potential energy is minus G M m over r." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Derive total energy from kinetic plus potential energy rather than recalling it in isolation." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "depth-model-unnamed",
      mistake: "Using the uniform-density depth formula without naming its model",
      why: [
        { type: "paragraph", children: [{ text: "The linear depth result assumes a uniform-density spherical Earth, which is not exact for the real Earth." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State the uniform-density assumption whenever the depth formula is used." }] },
      ],
      errorType: "needs-review",
    },
    {
      id: "escape-as-acceleration",
      mistake: "Calling escape speed an acceleration or assuming a constant upward force is required",
      why: [
        { type: "paragraph", children: [{ text: "Escape speed is a velocity threshold set by energy conservation, not a description of a powered climb." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Treat escape as reaching zero total energy at infinity, independent of the launch method." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "geostationary-misapplied",
      mistake: "Applying geostationary conditions to any orbit with a 24-hour period without checking plane and direction",
      why: [
        { type: "paragraph", children: [{ text: "A geostationary orbit also requires the equatorial plane and a direction matching Earth's rotation." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check period, plane, and direction together before naming an orbit geostationary." }] },
      ],
      errorType: "decision-error",
    },
  ],

  faqs: [
    {
      question: "Why is gravitational potential negative?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "With zero potential chosen at infinity, positive work is required to separate a bound mass to infinity, so its potential at a finite radius is negative.",
            },
          ],
        },
      ],
    },
    {
      question: "What provides centripetal force to a satellite?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Gravity provides the inward force required for the satellite's circular motion." }],
        },
      ],
    },
    {
      question: "Is escape velocity direction-dependent in the ideal model?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Its minimum magnitude at a point follows from energy conservation. A collision-free outward trajectory is also required by the physical setup.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to the Physics subject hub.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Work-energy reasoning underpins potential and orbital energy in this chapter.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Force balance and Newton's laws underpin the field and orbit reasoning here.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "related",
      description: "Compare the same inverse-square field and potential structure applied to charge.",
    },
    {
      label: "Rotational Motion",
      url: "/jee/physics/rotational-motion",
      relation: "same-unit",
      description: "Extend circular-motion reasoning used for satellite orbits.",
    },
    {
      label: "Communication Systems",
      url: "/jee/physics/communication-systems",
      relation: "forward",
      description: "See the later application context of satellites, without moving orbit theory out of this page.",
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
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Official Physics scope.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every subject.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter, field, potential, g variation, circular orbit, Kepler relation, geostationary condition, or escape, requires human academic review first.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: a JEE Physics educator experienced in gravitation, energy methods, and orbital mechanics.",
    "Academically reviewed by: Unassigned. Required expertise: classical mechanics and Newtonian gravitation. Required qualification: postgraduate degree in Physics or a closely related discipline, or an engineering degree with documented JEE Physics teaching expertise.",
    "Last reviewed: pending completion of academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus, NCERT Gravitation, and official paper archives.",
    "Review scope: potential signs, radius definitions, orbit conditions, the depth-model caveat, formulas, worked reasoning, links, metadata, and schema-content parity.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Gravitation for JEE: Field, Potential, Orbits, Escape",
    description:
      "Learn JEE Gravitation through force, field, potential, satellite orbits, escape velocity, formula conditions, worked reasoning, and common traps.",
    ogTitle: "Gravitation for JEE",
    ogDescription:
      "Condition-aware gravitation, from inverse-square fields to satellite energy and escape.",
  },
};

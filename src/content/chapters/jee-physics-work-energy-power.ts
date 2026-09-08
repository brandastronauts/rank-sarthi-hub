import type { ChapterContent } from "@/content/types";

/**
 * Work, Energy and Power — T06 production content (Batch 04, 8 September 2026).
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
 *   keeps /jee/physics/work-energy-power on noindex until review is recorded.
 */
export const jeePhysicsWorkEnergyPower: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Work, Energy and Power",
  slug: "work-energy-power",
  url: "/jee/physics/work-energy-power",
  canonicalIntent:
    "Decide whether force, energy, power, or momentum is the cleanest model for a mechanics problem, and use it with the correct system boundary.",

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
          text: "Work transfers energy through force acting over displacement. The net work on a particle changes its kinetic energy. Mechanical energy stays constant only when the chosen system has no relevant non-conservative transfer. Power measures how fast work is done or energy is transferred.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The fastest solution is rarely the one with the most formulas. Start by choosing the system, listing initial and final states, and deciding whether the unknown depends on path or only on state.",
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
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "prerequisite",
      description: "Distinguish velocity from speed and interpret motion graphs before Work, Energy and Power.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Resolve vectors, draw free-body diagrams, and apply Newton's laws before energy accounting.",
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
    unit: "Work, Energy and Power",
    topics: [
      "Work by constant and variable force",
      "Kinetic and potential energies",
      "Work-energy theorem",
      "Power",
      "Spring potential energy",
      "Mechanical-energy conservation",
      "Conservative and non-conservative forces",
      "Vertical-circle motion",
      "Elastic and inelastic collisions in one and two dimensions",
      "Conservation of linear momentum",
      "Impulse",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): system, transfer, storage, constraint    */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "choose-system",
      title: "1. Choose the system",
      keyIdea: "A force internal to one system can be external to another.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Decide which bodies are inside the system. A force internal to one system can be external to another.",
            },
          ],
        },
      ],
    },
    {
      id: "identify-transfer",
      title: "2. Identify transfer",
      keyIdea: "Work is energy transferred through a force-displacement interaction.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Work is energy transferred through a force-displacement interaction. Its sign comes from the dot product of force and displacement.",
            },
          ],
        },
      ],
    },
    {
      id: "name-stores",
      title: "3. Name the stores",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Translational kinetic, gravitational potential, and elastic potential energy are common stores in this scope.",
            },
          ],
        },
      ],
    },
    {
      id: "non-conservative-transfer",
      title: "4. Account for non-conservative transfer",
      keyIdea: "Friction converting mechanical energy into internal energy does not justify plain conservation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Friction may convert mechanical energy into internal energy. It does not justify writing mechanical-energy conservation without an additional term.",
            },
          ],
        },
      ],
    },
    {
      id: "apply-constraint",
      title: "5. Apply the constraint",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Contact, string, spring, or circular-path conditions can decide whether an assumed motion is physically possible.",
            },
          ],
        },
      ],
    },
    {
      id: "switch-model-collisions",
      title: "6. Switch model for collisions",
      keyIdea: "Momentum can be conserved for an isolated collision while kinetic energy is conserved only for an elastic collision.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Linear momentum can be conserved for an isolated collision while kinetic energy is conserved only for an elastic collision.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25) placed at typed anchor points                */
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
          "How work, kinetic energy, potential energy, power, and momentum describe energy transfer and conservation in mechanics, and which model to pick first.",
        ],
        [
          "What is the central method choice?",
          "Choose the system boundary, decide whether the unknown depends on path or only on state, and select work-energy, energy conservation, power, or momentum and impulse accordingly.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing negative work on one body with total energy loss, applying conservation where non-conservative work is present, and assuming kinetic energy is conserved in every collision.",
        ],
        [
          "What should come before this chapter?",
          "Vector resolution, free-body diagrams, force-position graphs, Newton's laws, and the distinction between velocity and speed.",
        ],
        [
          "What comes after it?",
          "Rotational Motion extends energy and momentum ideas to rigid bodies, and Gravitation and Simple Harmonic Motion apply energy accounting in their own contexts.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Work, Energy and Power",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Work and energy",
          "Work by constant and variable force, kinetic and potential energies, and the work-energy theorem are explicitly listed.",
          "Kinetic and potential energy, and work, are explicitly listed.",
          "Confirm whether a force is constant before choosing a shortcut formula.",
        ],
        [
          "Power and springs",
          "Power and spring potential energy are explicitly listed.",
          "Power is explicitly listed.",
          "Keep spring energy restricted to the linear Hooke-law range.",
        ],
        [
          "Conservation",
          "Mechanical-energy conservation, and conservative and non-conservative forces, are explicitly listed.",
          "Conservation of mechanical energy and linear momentum, and impulse, are explicitly listed.",
          "State the system boundary before asserting any conservation.",
        ],
        [
          "Collisions and constrained motion",
          "Vertical-circle motion, and elastic and inelastic collisions in one and two dimensions, are explicitly listed.",
          "Elastic and inelastic collisions are explicitly listed.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Work, Energy and Power",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Vectors",
          "Resolve vectors and compute a dot product.",
          "Revisit vector components and the dot product before this chapter.",
        ],
        [
          "Free-body diagrams",
          "Draw a free-body diagram and identify every force on a body.",
          "Review Laws of Motion for force identification.",
        ],
        [
          "Force-position graphs",
          "Read a force-position graph and identify its enclosed area.",
          "Practise interpreting slope and area on force-position graphs.",
        ],
        [
          "Newton's laws",
          "Apply Newton's second and third laws to a system.",
          "Revisit Laws of Motion before this chapter.",
        ],
        [
          "Velocity versus speed",
          "Distinguish signed velocity from unsigned speed.",
          "Review Kinematics for velocity and speed definitions.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before the equation",
      intro: "Match the question signal to a first model, then validate the choice before calculating.",
      columns: ["Question signal", "Best first model", "First check"],
      rows: [
        ["Force varies with position", "Work integral or area under an F-x graph", "Sign and integration limits"],
        [
          "Only initial and final speeds or heights matter",
          "Work-energy or energy accounting",
          "System boundary and dissipative work",
        ],
        ["Time or rate is requested", "Power", "Instantaneous versus average"],
        ["Very short interaction or collision", "Momentum and impulse", "External impulse and collision type"],
        ["Vertical loop or constrained path", "Energy plus radial dynamics", "Contact or tension condition"],
      ],
    },
    {
      id: "diagnosis-table",
      jump: true,
      slot: "diagnosis",
      heading: "Diagnose the first wrong decision",
      columns: ["Primary label", "Evidence in a failed solution", "Corrective action"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot explain why potential energy belongs to a system",
          "Rebuild system and interaction definitions.",
        ],
        [
          "Recall Gap",
          "Correct model, but the spring energy or power relation is unavailable",
          "Retrieve the formula with units and condition.",
        ],
        [
          "Execution Error",
          "Sign, dot product, algebra, or graph area is wrong",
          "Rework the same model with a transfer ledger.",
        ],
        [
          "Decision / Selection Error",
          "Uses force equations through a long path when endpoint energy is sufficient, or conserves kinetic energy in an inelastic collision",
          "Mark question signals before calculation.",
        ],
        [
          "Needs Review",
          "Assumes a contact, friction state, or collision classification not established by the prompt",
          "Send the assumption and complete solution for academic review.",
        ],
      ],
      note: "Only Knowledge Gap, Recall Gap, Execution Error, Decision / Selection Error, and Needs Review are used as primary labels.",
    },
    {
      id: "practice-handling",
      jump: true,
      slot: "practice",
      heading: "Official-paper handling",
      columns: ["Practice question", "Direct answer"],
      rows: [
        [
          "Where should I practise Work, Energy and Power questions?",
          "Use official JEE Main and JEE Advanced paper archives directly.",
        ],
        [
          "How are questions classified by topic?",
          "Filters for variable-force work, conservation, power, vertical-circle constraints, and collisions are shown only after a reviewer verifies each classification.",
        ],
        [
          "Are counts, trends, or predicted frequencies published here?",
          "No. Counts, trend charts, predicted frequency, and expected questions stay hidden until they can be evidenced.",
        ],
      ],
      note: "Official-paper links are evidence-safe practice pointers, not a claim about this chapter's exam weightage.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "work-line-integral",
      expression: "W = integral from A to B of F dot dr",
      meaning: "Work done by a force F along the actual path from A to B.",
      variables: [
        { symbol: "F", meaning: "force acting on the chosen body", unit: "N" },
        { symbol: "r", meaning: "position along the path", unit: "m" },
        { symbol: "W", meaning: "work done", unit: "J" },
      ],
      useWhen: "Use the force acting on the chosen body; a constant force gives W = F s cos(theta).",
      commonTrap: "Replacing a varying force by an endpoint value.",
      accessibleText: "Work equals the integral of force dotted with displacement along the path from A to B.",
    },
    {
      id: "work-energy-theorem",
      expression: "W_net = change in K",
      meaning: "Net work on a body changes its translational kinetic energy K.",
      variables: [
        { symbol: "W_net", meaning: "net work done by all external forces", unit: "J" },
        { symbol: "K", meaning: "translational kinetic energy", unit: "J" },
      ],
      useWhen: "Particle or centre-of-mass translation with all external-force work included.",
      commonTrap: "Using the work of one force as if it were the net work.",
      accessibleText: "Net work equals the change in translational kinetic energy.",
    },
    {
      id: "kinetic-energy",
      expression: "K = (1/2) m v^2",
      meaning: "Translational kinetic energy.",
      variables: [
        { symbol: "m", meaning: "mass", unit: "kg" },
        { symbol: "v", meaning: "speed", unit: "m/s" },
        { symbol: "K", meaning: "kinetic energy", unit: "J" },
      ],
      useWhen: "Non-relativistic point particle or the translational part of a rigid body.",
      commonTrap: "Assigning a sign to kinetic energy from the velocity direction.",
      accessibleText: "Kinetic energy equals one half mass times speed squared.",
    },
    {
      id: "spring-potential-energy",
      expression: "U_s = (1/2) k x^2",
      meaning: "Ideal spring potential energy for extension or compression x.",
      variables: [
        { symbol: "k", meaning: "spring constant", unit: "N/m" },
        { symbol: "x", meaning: "extension or compression from natural length", unit: "m" },
        { symbol: "U_s", meaning: "spring potential energy", unit: "J" },
      ],
      useWhen: "Linear Hooke-law range, with x measured from the spring's natural length.",
      commonTrap: "Using k x squared without the one-half factor, or measuring x from an arbitrary origin.",
      accessibleText: "Spring potential energy equals one half the spring constant times extension squared.",
    },
    {
      id: "conservative-work",
      expression: "W_c = - (change in U)",
      meaning: "Work done by a conservative force equals the negative change in its potential energy.",
      variables: [
        { symbol: "W_c", meaning: "work by the conservative force", unit: "J" },
        { symbol: "U", meaning: "potential energy", unit: "J" },
      ],
      useWhen: "A potential-energy function exists for the force.",
      commonTrap: "Applying it to kinetic friction, which has no potential-energy function.",
      accessibleText: "Work by a conservative force equals the negative of the change in potential energy.",
    },
    {
      id: "mechanical-energy-accounting",
      expression: "K_i + U_i + W_nc = K_f + U_f",
      meaning: "Mechanical-energy accounting including non-conservative work W_nc.",
      variables: [
        { symbol: "K_i", meaning: "initial kinetic energy", unit: "J" },
        { symbol: "U_i", meaning: "initial potential energy", unit: "J" },
        { symbol: "W_nc", meaning: "non-conservative work done on the system", unit: "J" },
        { symbol: "K_f", meaning: "final kinetic energy", unit: "J" },
        { symbol: "U_f", meaning: "final potential energy", unit: "J" },
      ],
      useWhen: "A consistent sign convention is kept for every term.",
      commonTrap: "Writing K + U as constant when W_nc is not zero.",
      accessibleText: "Initial kinetic plus initial potential plus non-conservative work equals final kinetic plus final potential.",
    },
    {
      id: "power",
      expression: "P = dW/dt = F dot v",
      meaning: "Instantaneous power is the rate of energy transfer.",
      variables: [
        { symbol: "P", meaning: "instantaneous power", unit: "W" },
        { symbol: "F", meaning: "force", unit: "N" },
        { symbol: "v", meaning: "velocity", unit: "m/s" },
      ],
      useWhen: "Force and velocity are evaluated at the same instant.",
      commonTrap: "Using speed times force without the angle between force and velocity.",
      accessibleText: "Power equals the time derivative of work, equivalently force dotted with velocity.",
    },
    {
      id: "impulse-momentum",
      expression: "J = integral of F dt = change in p",
      meaning: "Impulse of the resultant force changes momentum.",
      variables: [
        { symbol: "J", meaning: "impulse", unit: "N s" },
        { symbol: "p", meaning: "linear momentum", unit: "kg m/s" },
      ],
      useWhen: "Resultant external impulse acts on the chosen system.",
      commonTrap: "Treating impulse as if it were energy.",
      accessibleText: "Impulse equals the integral of force over time and equals the change in momentum.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-rough-incline",
      prompt:
        "A block starts from rest and slides a distance s down an incline of angle theta with kinetic-friction coefficient mu_k. Find its speed at the bottom.",
      answer: "v squared equals 2 g s (sin theta minus mu_k cos theta), provided the block actually slides and remains on the plane.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Choose the block as the system." }],
            [{ text: "Gravity decreases potential energy by m g s sin(theta)." }],
            [{ text: "The normal force does no work because it is perpendicular to the displacement." }],
            [{ text: "Kinetic friction does work equal to minus mu_k m g cos(theta) s." }],
            [
              {
                text: "Apply energy accounting: (1/2) m v^2 = m g s sin(theta) - mu_k m g cos(theta) s.",
              },
            ],
            [{ text: "Mass cancels, giving v^2 = 2 g s (sin(theta) - mu_k cos(theta))." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The important decision is not the substitution. It is recognising that friction prevents mechanical energy from being constant, so a non-conservative work term must appear in the accounting.",
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
      id: "negative-work-as-loss",
      mistake: "Calling every negative work term an energy loss",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "Negative work on one chosen body may be positive transfer elsewhere in a larger system." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Track where the energy goes across the full system boundary before calling it lost." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "potential-energy-nonconservative",
      mistake: "Using path-independent potential energy for a non-conservative force",
      why: [
        {
          type: "paragraph",
          children: [{ text: "A potential-energy function only exists for a conservative force." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Represent friction and similar forces as a work term, never as a potential energy." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "kinetic-energy-every-collision",
      mistake: "Conserving kinetic energy in every collision",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Kinetic energy is conserved only in an elastic collision, not in every collision." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Classify the collision first, then decide which quantities are conserved." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "normal-force-moving-constraint",
      mistake: "Forgetting that the normal force can do work when the constraint itself moves",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "The zero-work rule for a normal force assumes the contact surface is stationary along the direction of motion." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Re-examine whether the constraining surface itself has a displacement component." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "vertical-circle-no-contact-check",
      mistake: "Solving a vertical-circle speed by energy and never testing contact or tension",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "Energy accounting alone does not confirm the body stays on the path; the constraint condition must also hold." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check the minimum-speed or minimum-tension condition alongside the energy equation." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "dot-product-sign-error",
      mistake: "Dropping the angle between force and velocity when computing power",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Power is a dot product, so using speed times force without the angle overstates or misassigns the rate of transfer." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Always write power as force dotted with velocity and evaluate the angle explicitly." }],
        },
      ],
      errorType: "execution-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Direct questions (B21)                                              */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is the work-energy theorem?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "The net work done on a particle equals the change in its kinetic energy." }],
        },
      ],
    },
    {
      question: "When is mechanical energy conserved?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is conserved when no relevant non-conservative work transfers energy across the chosen system boundary.",
            },
          ],
        },
      ],
    },
    {
      question: "Is momentum conserved in an inelastic collision?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Yes, for an isolated system. Kinetic energy is not conserved in an inelastic collision." },
          ],
        },
      ],
    },
    {
      question: "When can I use spring potential energy equal to one half k x squared?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Only within the linear Hooke-law range, with x measured from the spring's natural length.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between power and work?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Work is the total energy transferred by a force over displacement. Power is the rate at which that transfer happens.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Resolve vectors, free-body diagrams, and Newton's laws before energy accounting.",
    },
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "prerequisite",
      description: "Distinguish velocity from speed before treating energy and power.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/physics/thermodynamics",
      relation: "same-unit",
      description: "Extend energy accounting to thermal systems.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "same-unit",
      description: "Apply energy conservation to periodic motion.",
    },
    {
      label: "Rotational Motion",
      url: "/jee/physics/rotational-motion",
      relation: "forward",
      description: "Extend work, energy, and momentum ideas to rigid bodies.",
    },
    {
      label: "Gravitation",
      url: "/jee/physics/gravitation",
      relation: "forward",
      description: "Apply potential-energy reasoning to gravitational systems.",
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
      label: "Previous Year Papers",
      url: "/jee/previous-year-papers",
      relation: "related",
      description: "Connect work, energy, and momentum reasoning with reviewed official problems.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Author: a JEE Physics educator or academic content specialist experienced in mechanics, energy methods, and collision analysis.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE Work, Energy and Power teaching and solution-review experience, covering variable-force work, conservation boundaries, spring energy, vertical-circle constraints, and collision classification.",
    "Independent checker: verifies official mapping, system-boundary consistency, formula conditions, collision-type classification, and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Work, Energy and Power for JEE: Formulas, Method, and Traps",
    description:
      "Learn Work, Energy and Power for JEE Main and Advanced by choosing the right conservation model, with formula conditions, worked reasoning, and common mistakes.",
    ogTitle: "Work, Energy and Power for JEE, Choose the Right Model",
    ogDescription:
      "A structured guide to work, energy, power, and collisions with official scope, method selection, and diagnosis.",
  },
};

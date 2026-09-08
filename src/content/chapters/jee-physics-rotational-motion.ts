import type { ChapterContent } from "@/content/types";

/**
 * Rotational Motion - T06 production content (Batch 04, 7 September 2026).
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
 *   keeps /jee/physics/rotational-motion on noindex until review is recorded.
 */
export const jeePhysicsRotationalMotion: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Rotational Motion",
  slug: "rotational-motion",
  url: "/jee/physics/rotational-motion",
  canonicalIntent:
    "Translate a rigid-body problem into the correct model, using axis choice, torque, angular momentum, moment of inertia, energy, or equilibrium, and diagnose why a rotational-motion solution goes wrong.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their axis and conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Rotational motion describes how a body's mass is distributed about an axis and how external torque changes its angular momentum. The useful model depends on whether the body has a fixed axis, rolls without slipping, is in equilibrium, or exchanges angular momentum during an interaction.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct solution states the origin and axis before calculating torque, angular momentum, or moment of inertia. Rotational Motion owns rigid-body and rolling depth; centre of mass reasoning has its own focused page.",
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
      description: "Resolve forces and draw free-body diagrams before analysing torque.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Apply energy conservation before combining it with the rolling constraint.",
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
    unit: "Rotational Motion",
    topics: [
      "Centre of mass",
      "Moment of force and torque",
      "Angular momentum and its conservation",
      "Moment of inertia and radius of gyration",
      "Moment of inertia of standard simple bodies",
      "Parallel and perpendicular axes theorems",
      "Rigid-body equilibrium",
      "Rotation equations and linear-rotational comparison",
      "Fixed-axis dynamics",
      "Rolling without slipping",
      "Point-mass collisions with rigid bodies",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): axis, geometry, cause, response,        */
  /* constraint, energy                                                  */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "axis",
      title: "1. State the axis first",
      keyIdea: "State the origin and axis before calculating torque, angular momentum, or moment of inertia.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "State the origin and axis before calculating torque, angular momentum, or moment of inertia. Every rotational quantity is defined relative to a chosen point or line, not as a standalone number.",
            },
          ],
        },
      ],
    },
    {
      id: "geometry",
      title: "2. Read geometry through squared distance",
      keyIdea: "Mass farther from the axis contributes more strongly to moment of inertia through the squared distance.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mass farther from the axis contributes more strongly to moment of inertia through the squared distance. Two bodies of equal mass can have very different moments of inertia depending on how that mass is distributed.",
            },
          ],
        },
      ],
    },
    {
      id: "cause",
      title: "3. Let torque be the cause",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "External torque changes angular momentum. Internal torques cannot change the total angular momentum of an isolated system.",
            },
          ],
        },
      ],
    },
    {
      id: "response",
      title: "4. Use the rotational counterpart of force and mass",
      keyIdea: "For fixed-axis motion with constant moment of inertia, torque equals moment of inertia times angular acceleration, the rotational counterpart of force equals mass times acceleration.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For fixed-axis motion with constant moment of inertia, torque equals moment of inertia times angular acceleration. This is the rotational counterpart of force equals mass times acceleration, valid along the chosen fixed axis.",
            },
          ],
        },
      ],
    },
    {
      id: "constraint",
      title: "5. Treat rolling as a kinematic constraint",
      keyIdea: "Pure rolling imposes velocity of the centre of mass equals angular velocity times radius. It is a kinematic condition, not a statement that friction always equals the maximum static value.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Pure rolling imposes velocity of the centre of mass equals angular velocity times radius. It is a kinematic condition, not a statement that friction always equals the maximum static friction value.",
            },
          ],
        },
      ],
    },
    {
      id: "energy",
      title: "6. Split kinetic energy between translation and rotation",
      keyIdea: "Translation and rotation can both store kinetic energy; static friction can enforce rolling while doing zero work at an instantaneously stationary contact point on a fixed surface.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Translation and rotation can both store kinetic energy. Static friction can enforce rolling while doing zero work at an instantaneously stationary contact point on a fixed surface.",
            },
          ],
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
          "How a rigid body's mass distribution and applied torque determine its rotational motion, covering torque, angular momentum, moment of inertia, rolling, and equilibrium.",
        ],
        [
          "What is the central method choice?",
          "Use torque about the fixed axle for angular acceleration, use angular-momentum conservation when external torque about a chosen point is zero, use energy plus the rolling constraint for rolling bodies, and use force and torque balance for static rigid bodies.",
        ],
        [
          "Where do most mistakes begin?",
          "Using a memorised moment of inertia without naming the axis, mixing torque and angular momentum taken about different points, assuming maximum static friction acts during rolling, and applying the rolling constraint during slipping.",
        ],
        [
          "What should come before Rotational Motion?",
          "Force resolution, free-body diagrams, energy conservation, cross products, and locating a centre of mass.",
        ],
        [
          "What comes after it?",
          "Gravitation extends torque and angular momentum ideas to orbital motion, and Elasticity extends rigid-body force reasoning to deformable bodies.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Rotational Motion",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Centre of mass and rotational concepts",
          "Centre of mass and rotational concepts are explicitly listed.",
          "Systems and centre of mass are explicitly listed.",
          "This page owns rigid-body and rolling depth; centre-of-mass depth belongs to its own focused page.",
        ],
        [
          "Torque, angular momentum, and conservation",
          "Moment of force, torque, angular momentum and its conservation are explicitly listed.",
          "Torque, angular momentum, and their conservation are explicitly listed.",
          "Keep the origin and time interval fixed before applying conservation.",
        ],
        [
          "Moment of inertia and axes theorems",
          "Moment of inertia, radius of gyration, standard simple bodies, and axes theorems are explicitly listed.",
          "Moment of inertia and axes theorems for rigid bodies are explicitly listed.",
          "Always name the axis alongside any moment-of-inertia value.",
        ],
        [
          "Equilibrium, rotation equations, and rolling",
          "Rigid-body equilibrium, rotation equations, and linear-rotational comparison are explicitly listed.",
          "Fixed-axis dynamics, rolling without slipping, rigid-body equilibrium, and point-mass collisions with rigid bodies are explicitly listed.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Rotational Motion",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Cross products",
          "Compute a vector cross product and read its direction from the right-hand rule.",
          "Revise vector cross products before working with torque or angular momentum.",
        ],
        [
          "Force resolution",
          "Resolve forces into components along chosen axes.",
          "Revise vector components from Laws of Motion.",
        ],
        [
          "Free-body diagrams",
          "Draw all forces acting on a rigid body, including contact and friction forces.",
          "Practise free-body diagrams for rigid bodies, not only point particles.",
        ],
        [
          "Energy conservation",
          "Apply energy conservation to a mechanical system.",
          "Revise Work, Energy and Power before combining energy with the rolling constraint.",
        ],
        [
          "Centre of mass",
          "Locate the centre of mass of a simple body or system.",
          "Review centre-of-mass definitions before using them inside rotational formulas.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Five decisions cover most Rotational Motion questions. Select the model before any algebra.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        [
          "Angular acceleration about a fixed axle",
          "Torque about the axle",
          "Include only torque components about that axis",
        ],
        [
          "No external torque about a chosen point",
          "Angular-momentum conservation",
          "Verify the point and time interval",
        ],
        [
          "Rolling down a fixed surface",
          "Energy plus rolling constraint",
          "Test whether static friction can support pure rolling",
        ],
        [
          "Beam, ladder, or rigid body at rest",
          "Net force equals zero and net torque equals zero",
          "Choose an axis that removes unknown reactions",
        ],
        [
          "Axis shifted from centre of mass",
          "Parallel-axis theorem",
          "Confirm the two axes are parallel",
        ],
      ],
    },
    {
      id: "diagnosis-table",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis: locate the broken model",
      intro: "Only these primary labels are used: Knowledge Gap, Recall Gap, Execution Error, Decision / Selection Error, and Needs Review.",
      columns: ["Primary label", "Evidence", "Corrective action"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot explain why moment of inertia changes with axis",
          "Rebuild mass-distribution and perpendicular-distance meaning",
        ],
        [
          "Recall Gap",
          "Correct axis and model, but a standard-body moment of inertia or theorem is unavailable",
          "Retrieve the formula together with its axis",
        ],
        [
          "Execution Error",
          "Cross-product sign, lever arm, or algebra fails",
          "Redraw the force line and perpendicular distance",
        ],
        [
          "Decision / Selection Error",
          "Uses force equations where energy is cleaner, or conservation where external torque acts",
          "Mark constraint and conservation tests first",
        ],
        [
          "Needs Review",
          "Rolling state, contact force, or impact model is not justified",
          "Escalate the assumption and diagram for academic review",
        ],
      ],
    },
    {
      id: "practice-table",
      slot: "practice",
      heading: "Official-paper handling",
      intro:
        "Tag official questions only after review for torque, moment of inertia, rolling, equilibrium, angular momentum, or rigid-body collision content.",
      columns: ["Rule", "Detail"],
      rows: [
        [
          "Scope check before tagging",
          "A question is tagged to this chapter only after academic review confirms it tests torque, moment of inertia, rolling, equilibrium, angular momentum, or rigid-body collision reasoning.",
        ],
        [
          "Route ownership",
          "Centre-of-mass-only questions are not merged into this page; they belong to the focused Center of Mass route.",
        ],
        [
          "Evidence limits",
          "No frequency or weightage counts are published for official questions on this page.",
        ],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "readiness-check",
      slot: "prerequisites",
      heading: "Readiness check before starting Rotational Motion",
      concepts: [
        {
          id: "readiness-body",
          title: "Prepare vectors, forces, energy, and centre of mass",
          body: [
            {
              type: "paragraph",
              children: [{ text: "You should be able to:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "compute cross products and read direction from the right-hand rule;" }],
                [{ text: "resolve forces and draw free-body diagrams for rigid bodies;" }],
                [{ text: "apply energy conservation to a mechanical system;" }],
                [{ text: "locate the centre of mass of a simple body." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "Start with Laws of Motion and Work, Energy and Power if these foundations are unstable.",
                  href: "/jee/physics/laws-of-motion",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "torque-definition",
      expression: "tau = r cross F",
      meaning: "Torque of force F about the chosen origin.",
      variables: [
        { symbol: "tau", meaning: "torque about the chosen origin", unit: "N m" },
        { symbol: "r", meaning: "position vector from origin to the point of application of the force", unit: "m" },
        { symbol: "F", meaning: "applied force", unit: "N" },
      ],
      useWhen: "r runs from the chosen origin to the point where the force is applied.",
      commonTrap: "Using the full product of r and F without the sine of the angle between them.",
      accessibleText: "Torque equals the cross product of the position vector and the force vector.",
    },
    {
      id: "torque-angular-momentum",
      expression: "tau_external = dL/dt",
      meaning: "External torque changes angular momentum.",
      variables: [
        { symbol: "tau_external", meaning: "net external torque about the chosen origin", unit: "N m" },
        { symbol: "L", meaning: "angular momentum about that same origin", unit: "kg m^2/s" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "The same origin and an inertial treatment are used throughout the problem.",
      commonTrap: "Conserving angular momentum when external torque about the chosen origin is nonzero.",
      accessibleText: "External torque equals the time rate of change of angular momentum, both taken about the same origin.",
    },
    {
      id: "fixed-axis-dynamics",
      expression: "tau = I alpha",
      meaning: "Fixed-axis rotational dynamics.",
      variables: [
        { symbol: "tau", meaning: "net torque component along the fixed axis", unit: "N m" },
        { symbol: "I", meaning: "moment of inertia about that fixed axis", unit: "kg m^2" },
        { symbol: "alpha", meaning: "angular acceleration about that axis", unit: "rad/s^2" },
      ],
      useWhen: "The body is rigid, the axis is fixed, and the equation is applied as scalar components along that axis with constant moment of inertia.",
      commonTrap: "Treating it as a universal vector equation valid about any axis.",
      accessibleText: "Torque equals moment of inertia times angular acceleration, for a rigid body about a fixed axis.",
    },
    {
      id: "moment-of-inertia",
      expression: "I = integral of r_perp squared dm = M times k_g squared",
      meaning: "Moment of inertia and radius of gyration k_g.",
      variables: [
        { symbol: "I", meaning: "moment of inertia about the selected axis", unit: "kg m^2" },
        { symbol: "r_perp", meaning: "perpendicular distance of each mass element from the axis", unit: "m" },
        { symbol: "M", meaning: "total mass", unit: "kg" },
        { symbol: "k_g", meaning: "radius of gyration about the selected axis", unit: "m" },
      ],
      useWhen: "Distances are measured perpendicular to the selected axis.",
      commonTrap: "Memorising a moment-of-inertia value without recording its axis.",
      accessibleText: "Moment of inertia equals the integral of perpendicular distance squared over each mass element, and also equals mass times radius of gyration squared.",
    },
    {
      id: "parallel-axis-theorem",
      expression: "I = I_CM + M d squared",
      meaning: "Parallel-axis theorem.",
      variables: [
        { symbol: "I", meaning: "moment of inertia about the new axis", unit: "kg m^2" },
        { symbol: "I_CM", meaning: "moment of inertia about a parallel axis through the centre of mass", unit: "kg m^2" },
        { symbol: "M", meaning: "total mass", unit: "kg" },
        { symbol: "d", meaning: "perpendicular separation between the two parallel axes", unit: "m" },
      ],
      useWhen: "The new axis is parallel to the centre-of-mass axis.",
      commonTrap: "Applying it between two axes that are not parallel.",
      accessibleText: "Moment of inertia about the new axis equals moment of inertia about the parallel centre-of-mass axis plus mass times the squared separation.",
    },
    {
      id: "perpendicular-axis-theorem",
      expression: "I_z = I_x + I_y",
      meaning: "Perpendicular-axis theorem.",
      variables: [
        { symbol: "I_z", meaning: "moment of inertia about the axis perpendicular to the lamina", unit: "kg m^2" },
        { symbol: "I_x", meaning: "moment of inertia about one in-plane axis", unit: "kg m^2" },
        { symbol: "I_y", meaning: "moment of inertia about the other in-plane axis, perpendicular to the first", unit: "kg m^2" },
      ],
      useWhen: "The body is a planar lamina and the three axes are mutually perpendicular and meet at one point.",
      commonTrap: "Applying it to a three-dimensional body.",
      accessibleText: "Moment of inertia about the perpendicular axis equals the sum of moments of inertia about the two mutually perpendicular in-plane axes.",
    },
    {
      id: "rigid-body-kinetic-energy",
      expression: "K = one half M v_CM squared + one half I_CM omega squared",
      meaning: "Kinetic energy of a rigid body in plane motion.",
      variables: [
        { symbol: "K", meaning: "total kinetic energy", unit: "J" },
        { symbol: "M", meaning: "total mass", unit: "kg" },
        { symbol: "v_CM", meaning: "speed of the centre of mass", unit: "m/s" },
        { symbol: "I_CM", meaning: "moment of inertia about the centre-of-mass axis", unit: "kg m^2" },
        { symbol: "omega", meaning: "angular speed", unit: "rad/s" },
      ],
      useWhen: "The moment of inertia is taken about the centre-of-mass axis.",
      commonTrap: "Counting translational kinetic energy twice by mixing centre-of-mass and other axis terms.",
      accessibleText: "Total kinetic energy equals one half mass times centre-of-mass speed squared, plus one half moment of inertia about the centre of mass times angular speed squared.",
    },
    {
      id: "rolling-constraint",
      expression: "v_CM = omega R",
      meaning: "Pure rolling constraint.",
      variables: [
        { symbol: "v_CM", meaning: "speed of the centre of mass", unit: "m/s" },
        { symbol: "omega", meaning: "angular speed", unit: "rad/s" },
        { symbol: "R", meaning: "radius of the rolling body", unit: "m" },
      ],
      useWhen: "There is no slipping at the contact point.",
      commonTrap: "Assuming this constraint holds for a body that is slipping.",
      accessibleText: "Centre-of-mass speed equals angular speed times radius, for pure rolling.",
    },
    {
      id: "rigid-body-equilibrium",
      expression: "sum of F = 0 and sum of tau = 0",
      meaning: "Static equilibrium of a rigid body.",
      variables: [
        { symbol: "sum of F", meaning: "vector sum of all external forces", unit: "N" },
        { symbol: "sum of tau", meaning: "vector sum of all external torques about a chosen point", unit: "N m" },
      ],
      useWhen: "The body has no translational acceleration and no angular acceleration.",
      commonTrap: "Using torque balance alone without also checking force balance.",
      accessibleText: "A rigid body is in static equilibrium when the sum of external forces is zero and the sum of external torques about a chosen point is zero.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "rolling-race",
      prompt:
        "A rigid body of mass M, radius R, and moment of inertia about the centre of mass equal to beta times M R squared rolls without slipping from rest through a vertical drop h. Which shape reaches the bottom fastest?",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "Verify pure rolling first. If the available static friction cannot support the required constraint, this model does not apply and a different one is needed.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Apply energy conservation: the loss in gravitational potential energy equals the gain in translational plus rotational kinetic energy. Mgh equals one half M v squared plus one half times beta M R squared times v squared over R squared.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Solving gives v squared equals two g h divided by the quantity one plus beta.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The smaller beta is, the larger the final speed after the same drop. The result depends on how mass is distributed relative to the axis, not only on mass and radius.",
            },
          ],
        },
      ],
      answer:
        "Final speed squared equals two g h divided by one plus beta; a smaller beta (mass concentrated closer to the axis) reaches the bottom faster, provided pure rolling holds throughout.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes and PI v1.1 diagnosis (B30, B13/B06)                */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "unnamed-axis",
      mistake: "Using a memorised moment of inertia without naming the axis",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Moment of inertia is meaningless without stating the axis it was computed about." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Always write the axis alongside any moment-of-inertia value before using it." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "mismatched-origin",
      mistake: "Taking torque about one point and angular momentum about another",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Torque and angular momentum must be evaluated about the same origin for the relationship between them to hold." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Fix one origin at the start of the problem and use it for every torque and angular momentum term." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "assumed-max-friction",
      mistake: "Setting static friction equal to the maximum static friction value even when the motion requires a smaller value",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Static friction adjusts up to a maximum; it does not automatically equal that maximum during rolling." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Solve for the required friction from the equations of motion, then check it against the maximum available value." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "unchecked-conservation",
      mistake: "Conserving angular momentum without checking external torque about the selected origin",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Angular momentum is conserved only when the net external torque about that origin is zero over the interval." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify all external torques about the chosen origin before invoking conservation." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "constraint-during-slipping",
      mistake: "Applying the rolling constraint velocity equals angular velocity times radius during slipping",
      why: [
        {
          type: "paragraph",
          children: [{ text: "That relation only holds when there is no slipping at the contact point." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check whether slipping occurs before using the rolling constraint; use separate translational and rotational equations if it does." }] },
      ],
      errorType: "recall-gap",
    },
  ],

  faqs: [
    {
      question: "What determines moment of inertia?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "The mass distribution of the body and the selected axis determine it." }],
        },
      ],
    },
    {
      question: "When is angular momentum conserved?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Total angular momentum about a chosen origin is conserved when the net external torque about that origin is zero over the interval.",
            },
          ],
        },
      ],
    },
    {
      question: "Does static friction always do work in rolling?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. For pure rolling on a fixed surface, the instantaneous contact point is at rest, so static friction can enforce the constraint without doing work.",
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
      description: "Resolve forces and draw free-body diagrams before analysing torque.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Apply energy conservation before combining it with the rolling constraint.",
    },
    {
      label: "Center of Mass",
      url: "/jee/physics/center-of-mass",
      relation: "related",
      description: "Locate and analyse the centre of mass in depth on its own focused page.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "related",
      description: "Connect restoring-force reasoning with oscillatory and rotational systems.",
    },
    {
      label: "Gravitation",
      url: "/jee/physics/gravitation",
      relation: "forward",
      description: "Extend torque and angular momentum ideas to orbital motion.",
    },
    {
      label: "Elasticity",
      url: "/jee/physics/elasticity",
      relation: "forward",
      description: "Extend rigid-body force reasoning to deformable bodies.",
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
      description: "Connect torque, moment of inertia, rolling, and equilibrium reasoning with reviewed official problems.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official questions are tagged to this chapter only after academic review for torque, moment of inertia, rolling, equilibrium, angular momentum, or rigid-body collision content, and centre-of-mass-only questions are kept on the dedicated Center of Mass page.",
  contributorPolicy: [
    "Author: a JEE Physics educator with strong rigid-body and mechanics teaching experience.",
    "Academic reviewer: postgraduate degree in Physics or a closely related discipline, or an engineering degree with documented JEE Physics teaching expertise, covering classical mechanics, rigid-body dynamics, rolling, equilibrium, and collisions.",
    "Independent checker: verifies axes, vector signs, moments of inertia, theorem conditions, rolling assumptions, the worked result, route ownership, links, metadata, and schema-content parity.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Rotational Motion for JEE: Torque, Inertia, Rolling Methods",
    description:
      "Master JEE rotational motion through axis choice, torque, angular momentum, moment of inertia, rolling, equilibrium, conditions, and mistakes.",
    ogTitle: "Rotational Motion for JEE",
    ogDescription:
      "A structured guide to torque, moment of inertia, angular momentum, rolling, and equilibrium.",
  },
};

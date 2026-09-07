import type { ChapterContent } from "@/content/types";

/**
 * Centre of Mass — T06 production content (Batch, 8 September 2026).
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
 *   keeps /jee/physics/center-of-mass on noindex-equivalent review until a
 *   reviewer is recorded.
 * - The current official wording for this unit (both JEE Main and JEE
 *   Advanced syllabuses) is terse: "Centre of mass: Systems of particles;
 *   Centre of mass and its motion; Impulse; Elastic and inelastic
 *   collisions" plus "Conservation of linear momentum." Variable-mass systems
 *   and rocket motion are not separately named in that wording, so this page
 *   does not assert a dedicated rocket-thrust formula as syllabus scope.
 */
export const jeePhysicsCenterOfMass: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Centre of Mass",
  slug: "center-of-mass",
  url: "/jee/physics/center-of-mass",
  canonicalIntent:
    "Locate the centre of mass of discrete and continuous bodies, apply conservation of linear momentum and impulse, choose the correct collision method in one and two dimensions, and diagnose why a centre-of-mass or collision solution goes wrong.",

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
          text: "The centre of mass of a system is the single point that moves as if all the mass of the system were concentrated there and all external force acted there. For a discrete set of particles it is a mass-weighted average of position; for a continuous body it is the same average written as an integral.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This chapter connects two ideas that examiners test repeatedly: the motion of the centre of mass depends only on external force, and the total linear momentum of an isolated system is conserved. Collisions, explosions and multi-body problems become tractable once you separate what happens to the centre of mass from what happens between the individual bodies.",
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
      description: "Stabilise Newton's laws, free-body diagrams and internal versus external force before Centre of Mass.",
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
    unit: "Centre of Mass",
    topics: [
      "Systems of particles",
      "Centre of mass and its motion",
      "Centre of mass of a continuous body",
      "Impulse",
      "Elastic and inelastic collisions",
      "Conservation of linear momentum",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35)                                          */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "cm-as-single-point",
      title: "1. Treat the centre of mass as one representative point",
      keyIdea:
        "The centre of mass is a mass-weighted average position. It need not coincide with any actual particle of the system.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For a set of discrete particles, the centre of mass position is the mass-weighted average of the individual position vectors. For a continuous body, the same weighted average is written as an integral over infinitesimal mass elements. The centre of mass can lie outside the material of the body, for example at the centre of a uniform ring.",
            },
          ],
        },
      ],
    },
    {
      id: "discrete-vs-continuous",
      title: "2. Choose summation for discrete systems, integration for continuous bodies",
      keyIdea: "A finite set of point masses needs a sum; a rod, disc, or plate needs an integral.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When the system is a finite collection of point masses, the centre of mass is a direct weighted sum. When the mass is distributed continuously along a length, over a surface or through a volume, replace the sum with an integral over an infinitesimal mass element. Symmetry can locate the centre of mass without integration for uniform shapes with an axis or plane of symmetry.",
            },
          ],
        },
      ],
    },
    {
      id: "cm-motion-external-force",
      title: "3. Let only external force move the centre of mass",
      keyIdea: "Internal forces between the parts of a system cannot change the motion of the centre of mass.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The centre of mass accelerates according to the net external force divided by total mass, exactly as Newton's second law would describe a single particle of that total mass. Internal forces, such as those in an explosion or a collision between two parts of the same isolated system, cancel in pairs and cannot change the centre of mass motion.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "An internal explosion changes the individual velocities of the fragments, but if no external force acts, the centre of mass keeps moving along its original path at its original velocity.",
            },
          ],
        },
      ],
    },
    {
      id: "momentum-conservation",
      title: "4. Conserve linear momentum only when net external force is zero",
      keyIdea: "Total momentum conservation is a direct consequence of Newton's third law within an isolated system.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "If the net external force on a system is zero over the interval considered, its total linear momentum stays constant, even though momentum is freely exchanged between its parts through internal, Newton's-third-law-paired forces. Momentum conservation applies component by component; it is a vector statement, not a scalar one.",
            },
          ],
        },
      ],
    },
    {
      id: "impulse",
      title: "5. Use impulse to connect force over time to a momentum change",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Impulse is the time integral of force and equals the resulting change in momentum. It lets a problem be solved without knowing the detailed force-time profile during a brief interaction, such as a bat striking a ball, as long as the momentum before and after the interaction is known.",
            },
          ],
        },
      ],
    },
    {
      id: "collision-classification",
      title: "6. Classify a collision before choosing equations",
      keyIdea: "Momentum is conserved in every collision without external force; kinetic energy is conserved only in an elastic collision.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In every collision where net external force is negligible during the brief interaction, momentum is conserved. Kinetic energy is conserved only in an elastic collision. In a perfectly inelastic collision the bodies move with a common velocity after impact, and kinetic energy is not conserved. Between these two limits lies a general inelastic collision, described using the coefficient of restitution.",
            },
          ],
        },
      ],
    },
    {
      id: "restitution",
      title: "7. Use the coefficient of restitution for the collision line",
      keyIdea: "The coefficient of restitution compares the relative speed of separation to the relative speed of approach along the line of impact.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The coefficient of restitution is defined along the common normal at contact, called the line of impact. It equals one for a perfectly elastic collision and zero for a perfectly inelastic collision. In an oblique or two-dimensional collision, momentum conservation applies to the full vector, while the coefficient of restitution applies only to the velocity components along the line of impact; components along the common tangent are unaffected by a smooth, frictionless collision.",
            },
          ],
        },
      ],
    },
    {
      id: "one-vs-two-dimension",
      title: "8. Separate a head-on collision from an oblique collision",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A head-on, one-dimensional collision needs momentum conservation along one line plus one more condition, usually the coefficient of restitution or the statement that the collision is elastic. An oblique, two-dimensional collision needs momentum conservation along two independent directions, plus the line-of-impact condition, so extra geometric information, such as an angle or an impact parameter, is required to close the problem.",
            },
          ],
        },
      ],
    },
    {
      id: "cm-frame-reduced-mass",
      title: "9. Simplify two-body problems with the centre of mass frame and reduced mass",
      keyIdea: "In the centre of mass frame, the two bodies always carry equal and opposite momentum.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Viewed from the centre of mass frame, the total momentum of a two-body system is zero by definition, so the two bodies always move with equal and opposite momentum in that frame. Reduced mass lets a two-body problem be rewritten as an equivalent one-body problem about the relative coordinate, which can simplify the algebra of certain two-body interactions once the underlying force law is known from elsewhere in the syllabus.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Variable-mass systems and rocket motion are not separately named in the current official topic wording for this unit. Treat any such problem as an extension beyond the confirmed scope unless your own source paper or coaching material states otherwise.",
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
          "Locating the centre of mass of discrete and continuous bodies, describing its motion under external force, and using momentum conservation, impulse and the coefficient of restitution to analyse collisions.",
        ],
        [
          "What is the central method choice?",
          "Use a weighted sum for discrete masses, an integral for continuous bodies, Newton's second law applied to the total mass for centre-of-mass motion, and momentum conservation with the correct collision condition for interactions.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating momentum conservation as a scalar equation, applying the coefficient of restitution to the wrong direction in an oblique collision, and assuming kinetic energy is conserved in every collision.",
        ],
        [
          "What should come before Centre of Mass?",
          "Newton's laws of motion, vectors and components, basic calculus for integration, and internal versus external force reasoning.",
        ],
        [
          "What comes after it?",
          "Rotational Motion extends the same particle-system reasoning to torque, angular momentum and moment of inertia, and Work, Energy and Power supplies the energy side of collision analysis.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Centre of Mass",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Systems of particles and centre of mass",
          "Systems of particles and centre of mass and its motion are explicitly listed.",
          "Systems of particles and centre of mass and its motion are explicitly listed.",
          "Practise both the discrete weighted-sum form and the continuous integral form.",
        ],
        [
          "Impulse",
          "Impulse is explicitly listed.",
          "Impulse is explicitly listed.",
          "Use impulse to connect a brief force interval to a momentum change without needing the full force-time curve.",
        ],
        [
          "Collisions",
          "Elastic and inelastic collisions are explicitly listed.",
          "Elastic and inelastic collisions are explicitly listed.",
          "Confirm whether a question is one-dimensional or two-dimensional before selecting equations.",
        ],
        [
          "Conservation of linear momentum",
          "Conservation of linear momentum is explicitly listed.",
          "Conservation of linear momentum is explicitly listed.",
          "Momentum conservation is a vector statement and must be applied component by component.",
        ],
        [
          "Variable mass and rocket motion",
          "Not separately named in the current official topic wording for this unit.",
          "Not separately named in the current official topic wording for this unit.",
          "Do not assume rocket-motion problems are guaranteed scope from this wording alone; verify against your own current syllabus document.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Centre of Mass",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Newton's laws of motion",
          "State and apply Newton's first, second and third laws to a system of interacting bodies.",
          "Revise Laws of Motion, especially internal versus external force and action-reaction pairs.",
        ],
        [
          "Vectors and components",
          "Add and resolve vectors and apply an equation component by component.",
          "Revise vector addition, components and unit vectors.",
        ],
        [
          "Basic calculus",
          "Set up and evaluate a simple integral over a length, area or volume element.",
          "Revise integration of standard functions and the idea of an infinitesimal mass element.",
        ],
        [
          "Kinematics of straight-line and planar motion",
          "Describe velocity and relative velocity in one and two dimensions.",
          "Revise Kinematics, particularly relative velocity.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the method before calculating",
      intro: "Identify what the question gives you and what it calls a collision before writing equations.",
      columns: ["Information given", "First method", "Validation"],
      rows: [
        ["Discrete point masses with known positions", "Mass-weighted average sum", "Check the sum of masses used in the denominator"],
        ["Continuous body such as a rod, disc or plate", "Integrate over an infinitesimal mass element, or use symmetry", "Confirm the axis or plane of symmetry used"],
        ["System with only internal forces acting", "Centre of mass moves at constant velocity, or stays fixed if initially at rest", "Confirm no external force acts over the interval"],
        ["Brief strong force over a short time", "Impulse equals change in momentum", "Check that the time interval is short enough that other forces contribute negligibly"],
        ["One-dimensional collision, elastic stated", "Momentum conservation plus kinetic energy conservation", "Check both bodies move along one line before and after"],
        ["One-dimensional collision, restitution given", "Momentum conservation plus the coefficient of restitution", "Check the coefficient of restitution is applied along the line of impact"],
        ["Oblique or two-dimensional collision", "Momentum conservation along two independent directions, plus the line-of-impact condition", "Check that tangential components are correctly kept unaffected"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "cm-discrete",
      expression: "R = (sum of m_i r_i) / (sum of m_i)",
      latex: "\\vec{R} = \\dfrac{\\sum m_i \\vec{r}_i}{\\sum m_i}",
      meaning: "Centre of mass position for a discrete set of particles.",
      variables: [
        { symbol: "R", meaning: "position vector of the centre of mass", unit: "m" },
        { symbol: "m_i", meaning: "mass of the i-th particle", unit: "kg" },
        { symbol: "r_i", meaning: "position vector of the i-th particle", unit: "m" },
      ],
      useWhen: "The system is a finite collection of point masses with known positions.",
      commonTrap: "Dividing by the number of particles instead of the total mass.",
      accessibleText: "The centre of mass position equals the sum of mass times position, divided by the total mass.",
    },
    {
      id: "cm-continuous",
      expression: "R = (1/M) * integral(r dm)",
      latex: "\\vec{R} = \\dfrac{1}{M}\\int \\vec{r}\\,dm",
      meaning: "Centre of mass position for a continuous mass distribution.",
      variables: [
        { symbol: "M", meaning: "total mass of the body", unit: "kg" },
        { symbol: "dm", meaning: "infinitesimal mass element", unit: "kg" },
      ],
      useWhen: "The mass is spread continuously along a length, over a surface, or through a volume.",
      commonTrap: "Forgetting to express dm in terms of the same variable used for the integration limits.",
      accessibleText: "The centre of mass position equals the integral of position times the mass element, divided by total mass.",
    },
    {
      id: "cm-velocity",
      expression: "V_cm = (sum of m_i v_i) / M",
      meaning: "Velocity of the centre of mass in terms of the individual particle velocities.",
      variables: [
        { symbol: "V_cm", meaning: "velocity of the centre of mass", unit: "m/s" },
        { symbol: "v_i", meaning: "velocity of the i-th particle", unit: "m/s" },
      ],
      useWhen: "Individual particle velocities are known and the centre of mass velocity is required.",
      commonTrap: "Using an unweighted average of the velocities.",
      accessibleText: "Centre of mass velocity equals the sum of mass times velocity, divided by total mass.",
    },
    {
      id: "cm-acceleration-newton",
      expression: "F_ext = M a_cm",
      meaning: "The centre of mass accelerates according to the net external force on the system.",
      variables: [
        { symbol: "F_ext", meaning: "net external force on the system", unit: "N" },
        { symbol: "a_cm", meaning: "acceleration of the centre of mass", unit: "m/s^2" },
      ],
      useWhen: "You need the motion of the centre of mass rather than the motion of individual parts.",
      commonTrap: "Including internal forces, such as those from an explosion, in F_ext.",
      accessibleText: "Net external force equals total mass times the acceleration of the centre of mass.",
    },
    {
      id: "momentum-definition",
      expression: "p = m v",
      meaning: "Linear momentum of a particle or, summed, of a system.",
      variables: [
        { symbol: "p", meaning: "linear momentum", unit: "kg m/s" },
      ],
      useWhen: "Setting up a momentum-based equation for a particle or a system of particles.",
      commonTrap: "Treating momentum as a scalar and adding magnitudes without regard to direction.",
      accessibleText: "Momentum equals mass times velocity.",
    },
    {
      id: "momentum-conservation-formula",
      expression: "sum of p_before = sum of p_after, when F_ext = 0",
      meaning: "Total linear momentum of an isolated system is conserved.",
      variables: [
        { symbol: "p_before", meaning: "momentum of a part of the system before the interaction", unit: "kg m/s" },
        { symbol: "p_after", meaning: "momentum of a part of the system after the interaction", unit: "kg m/s" },
      ],
      useWhen: "The net external force on the chosen system is zero, or negligible, over the interval considered.",
      commonTrap: "Applying the equation along only one axis when the motion is two-dimensional.",
      accessibleText: "Total momentum before an interaction equals total momentum after it, when net external force is zero.",
    },
    {
      id: "impulse-momentum",
      expression: "J = integral(F dt) = change in p",
      latex: "\\vec{J} = \\int \\vec{F}\\,dt = \\Delta \\vec{p}",
      meaning: "Impulse equals the change in momentum it produces.",
      variables: [
        { symbol: "J", meaning: "impulse", unit: "N s" },
        { symbol: "F", meaning: "applied force", unit: "N" },
      ],
      useWhen: "A force acts for a known or bounded time interval and the resulting momentum change is required.",
      commonTrap: "Using average force without confirming the time interval used matches the interaction duration.",
      accessibleText: "Impulse equals the time integral of force and equals the resulting change in momentum.",
    },
    {
      id: "elastic-collision-1d",
      expression: "v1' = ((m1 - m2)/(m1 + m2)) u1 + (2 m2/(m1 + m2)) u2",
      meaning: "Final velocity of body 1 after a one-dimensional elastic collision with body 2.",
      variables: [
        { symbol: "u1, u2", meaning: "initial velocities of bodies 1 and 2", unit: "m/s" },
        { symbol: "v1'", meaning: "final velocity of body 1", unit: "m/s" },
        { symbol: "m1, m2", meaning: "masses of bodies 1 and 2", unit: "kg" },
      ],
      useWhen: "The collision is one-dimensional and both momentum and kinetic energy are conserved.",
      commonTrap: "Using this result for an inelastic collision, where kinetic energy is not conserved.",
      accessibleText: "The final velocity of body one is a weighted combination of both initial velocities, using the mass ratio.",
    },
    {
      id: "perfectly-inelastic",
      expression: "v_common = (m1 u1 + m2 u2) / (m1 + m2)",
      meaning: "Common final velocity of two bodies that stick together after collision.",
      variables: [
        { symbol: "v_common", meaning: "common final velocity", unit: "m/s" },
      ],
      useWhen: "The collision is perfectly inelastic and the bodies move together afterward.",
      commonTrap: "Also assuming kinetic energy is conserved; it is not, in a perfectly inelastic collision.",
      accessibleText: "The common final velocity equals total momentum before collision divided by total mass.",
    },
    {
      id: "coefficient-of-restitution",
      expression: "e = (speed of separation along line of impact) / (speed of approach along line of impact)",
      latex: "e = \\dfrac{v_{2}' - v_{1}'}{u_1 - u_2}",
      meaning: "The coefficient of restitution compares relative speed after and before collision, along the line of impact.",
      variables: [
        { symbol: "e", meaning: "coefficient of restitution", unit: "dimensionless" },
      ],
      useWhen: "The collision is one-dimensional, or the components along the line of impact of an oblique collision are being analysed.",
      commonTrap: "Applying e to the tangential component of velocity instead of the line-of-impact component.",
      accessibleText: "The coefficient of restitution equals the relative speed of separation divided by the relative speed of approach, along the line of impact.",
    },
    {
      id: "cm-frame-momentum",
      expression: "p1_cm = -p2_cm",
      meaning: "In the centre of mass frame of a two-body system, the two momenta are equal and opposite.",
      variables: [
        { symbol: "p1_cm, p2_cm", meaning: "momenta of bodies 1 and 2 in the centre of mass frame", unit: "kg m/s" },
      ],
      useWhen: "Analysing a two-body interaction is simpler from the centre of mass frame than from a fixed lab frame.",
      commonTrap: "Forgetting to transform the answer back to the lab frame if the question asks for lab-frame quantities.",
      accessibleText: "In the centre of mass frame, the momentum of body one is equal in magnitude and opposite in direction to the momentum of body two.",
    },
    {
      id: "reduced-mass",
      expression: "mu = (m1 m2) / (m1 + m2)",
      latex: "\\mu = \\dfrac{m_1 m_2}{m_1 + m_2}",
      meaning: "Reduced mass of a two-body system, used to rewrite relative motion as an equivalent one-body problem.",
      variables: [
        { symbol: "mu", meaning: "reduced mass", unit: "kg" },
      ],
      useWhen: "A two-body interaction is reformulated in terms of the relative coordinate between the two bodies.",
      commonTrap: "Using reduced mass in place of total mass in the centre of mass motion equation; they serve different purposes.",
      accessibleText: "Reduced mass equals the product of the two masses divided by their sum.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked examples (B31)                                               */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "two-mass-cm",
      prompt:
        "Two point masses, 2 kg at the origin and 3 kg at x = 5 m on the same line, are at rest. Find the position of the centre of mass.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Apply the discrete centre of mass formula along the single axis used." }],
        },
        {
          type: "paragraph",
          children: [
            { text: "R = (2 kg times 0 m + 3 kg times 5 m) / (2 kg + 3 kg) = 15 / 5 = 3 m from the origin." },
          ],
        },
      ],
      answer: "The centre of mass lies 3 m from the 2 kg mass, on the line joining the two masses.",
    },
    {
      id: "explosion-cm-path",
      prompt:
        "A shell moving under gravity alone explodes in mid-air into two fragments due to internal forces only. Describe the subsequent path of the centre of mass of the fragments.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "The explosion is caused by internal forces, so it cannot change the momentum or the acceleration of the centre of mass. The only external force present, both before and after the explosion, is gravity.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The centre of mass of the fragments therefore continues to follow the same projectile path that the unexploded shell would have followed, until a fragment lands or a new external force acts.",
            },
          ],
        },
      ],
      answer: "The centre of mass keeps following the original projectile trajectory of the shell.",
    },
    {
      id: "1d-restitution-collision",
      prompt:
        "A ball of mass 1 kg moving at 4 m/s collides head-on with a stationary ball of mass 1 kg. The coefficient of restitution is 0.5. Find both final velocities.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "Write momentum conservation: 1(4) + 1(0) = 1(v1') + 1(v2'), giving v1' + v2' = 4.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Write the restitution condition along the line of impact: v2' - v1' = e(u1 - u2) = 0.5(4 - 0) = 2.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Solve the two linear equations: adding gives 2 v2' = 6, so v2' = 3 m/s, and then v1' = 4 - 3 = 1 m/s.",
            },
          ],
        },
      ],
      answer: "The first ball ends at 1 m/s and the second ball ends at 3 m/s, both in the original direction of motion.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Mistakes / diagnosis (B32)                                          */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "scalar-momentum",
      mistake: "Treating momentum conservation as a scalar equation.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Momentum is a vector, so adding magnitudes without direction discards essential information whenever motion is not along a single fixed line." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Apply momentum conservation independently to each perpendicular direction before combining results." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "restitution-wrong-direction",
      mistake: "Applying the coefficient of restitution to the tangential velocity component in an oblique collision.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The coefficient of restitution is defined along the line of impact. A smooth collision leaves the tangential components unaffected." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Resolve velocities into line-of-impact and tangential components before applying the restitution condition to only the line-of-impact component." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "assuming-elastic",
      mistake: "Assuming kinetic energy is conserved in every collision.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Kinetic energy conservation is a defining feature of an elastic collision only. Inelastic and perfectly inelastic collisions conserve momentum but not kinetic energy." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check the collision type stated in the question, or use the coefficient of restitution, before writing a kinetic-energy equation." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "internal-force-on-cm",
      mistake: "Believing an internal explosion or internal collision can change the centre of mass velocity.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Internal forces occur in equal and opposite pairs by Newton's third law and cancel when summed over the whole system, so they cannot change total momentum or centre of mass motion." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Identify whether a force is internal or external to the chosen system before deciding whether it can change the centre of mass motion." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "wrong-mass-total",
      mistake: "Dividing by the number of particles instead of the total mass when locating the centre of mass.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The centre of mass is a mass-weighted average, not a simple average of positions." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Always divide the weighted sum of positions by the sum of the masses, not the count of particles." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "integration-variable-mismatch",
      mistake: "Leaving the mass element in a continuous-body integral in terms of a different variable than the integration limits.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "An integral only evaluates correctly when every quantity, including the mass element, is expressed consistently in terms of the chosen integration variable." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Express dm using the linear, surface or volume mass density and the same coordinate used for the limits before integrating." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "reduced-mass-misuse",
      mistake: "Using reduced mass in place of total mass in the centre of mass acceleration equation.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Reduced mass describes the equivalent one-body problem for relative motion between two bodies; it is not the mass that appears in F_ext = M a_cm." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Use total mass for centre of mass motion, and reserve reduced mass for relative-coordinate analysis of a two-body interaction." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "one-vs-two-dim-confusion",
      mistake: "Applying a one-dimensional collision formula directly to a two-dimensional or oblique collision.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "One-dimensional collision formulas assume both bodies move along a single line before and after impact, which is not true for an oblique collision." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Confirm the geometry of the collision first, and use component-wise momentum conservation with a line-of-impact restitution condition for oblique cases." }],
        },
      ],
      errorType: "decision-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B22)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is the centre of mass of a system?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "It is the mass-weighted average position of all the mass in the system, the single point that moves as though the net external force acted on the total mass there." },
          ],
        },
      ],
    },
    {
      question: "Does an internal explosion change the motion of the centre of mass?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. Internal forces cancel in pairs and cannot change the centre of mass motion; only external force can do that." }],
        },
      ],
    },
    {
      question: "When is linear momentum conserved?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "When the net external force on the chosen system is zero, or negligible, over the interval considered." }],
        },
      ],
    },
    {
      question: "What does the coefficient of restitution measure?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It compares the relative speed of separation to the relative speed of approach along the line of impact, ranging from zero for a perfectly inelastic collision to one for a perfectly elastic collision.",
            },
          ],
        },
      ],
    },
    {
      question: "Is kinetic energy conserved in every collision?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. Kinetic energy is conserved only in an elastic collision. Momentum is conserved in every collision without external force, elastic or not." }],
        },
      ],
    },
    {
      question: "Are variable-mass systems and rocket motion part of this chapter's confirmed scope?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current official topic wording for this unit does not separately name variable-mass systems or rocket motion, so this page treats them as outside its confirmed scope rather than asserting them as guaranteed.",
            },
          ],
        },
      ],
    },
    {
      question: "How does the centre of mass frame help with two-body collisions?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "In that frame, the two bodies always carry equal and opposite momentum, which can simplify the algebra before the result is converted back to the lab frame." },
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
      description: "Stabilise Newton's laws and internal versus external force before Centre of Mass.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "related",
      description: "Add energy reasoning to collisions once momentum methods are set.",
    },
    {
      label: "Rotational Motion",
      url: "/jee/physics/rotational-motion",
      relation: "forward",
      description: "Extend particle-system reasoning to torque, angular momentum and moment of inertia.",
    },
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "prerequisite",
      description: "Revisit relative velocity and vector motion description used throughout collision analysis.",
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
      description: "Connect momentum and collision reasoning with reviewed official problems.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, which use terse wording for this unit. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Author: a JEE Physics educator or academic content specialist experienced in mechanics, particle systems and collision analysis.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE Centre of Mass teaching and solution-review experience, covering discrete and continuous centre of mass, momentum conservation, impulse, and one- and two-dimensional collisions with the coefficient of restitution.",
    "Independent checker: verifies official mapping, formula conditions, collision classification, restitution direction, centre of mass frame reasoning and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Centre of Mass for JEE: Systems, Momentum and Collisions",
    description:
      "Learn Centre of Mass for JEE Main and Advanced through discrete and continuous systems, momentum conservation, impulse, collisions and the coefficient of restitution.",
    ogTitle: "Centre of Mass for JEE, Systems, Momentum and Collisions",
    ogDescription:
      "A structured guide to centre of mass, momentum conservation, impulse and one- and two-dimensional collisions with official scope and diagnosis.",
  },
};

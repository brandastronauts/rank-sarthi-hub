import type { ChapterContent } from "@/content/types";

/**
 * Laws of Motion — T06 production content (draft package, 7 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Evidence discipline:
 * - Weightage and trend records are deliberately absent, so those blocks do
 *   not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/laws-of-motion on the standard indexation gate until
 *   review is recorded.
 */
export const jeePhysicsLawsOfMotion: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Laws of Motion",
  slug: "laws-of-motion",
  url: "/jee/physics/laws-of-motion",
  canonicalIntent:
    "Understand how to convert an interaction into a correct free-body model, choose a frame, apply Newton's laws and friction conditions, and diagnose why a solution fails.",

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
          text: "Laws of Motion connects interactions to changes in motion. A reliable solution has five decisions: choose the body or system, choose the reference frame, draw only the forces acting on that system, write the constraint relations, and then apply momentum or force equations. Most errors happen before algebra begins.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Use this chapter to learn how a situation becomes a model. Do not begin by searching for a familiar formula. Begin by asking, \"What exactly am I analysing, and which external interactions act on it?\"",
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
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every Physics, Chemistry and Mathematics unit.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Subject hub for the Physics chapter set.",
    },
    {
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Stabilise vectors, units and dimensional reasoning before force problems.",
    },
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "prerequisite",
      description: "Signed velocity, acceleration and circular kinematics feed directly into force models.",
    },
  ],

  syllabusMapping: {
    unit: "Laws of Motion",
    topics: [
      "Force and inertia",
      "Newton's first, second and third laws",
      "Momentum and impulse",
      "Conservation of linear momentum",
      "Equilibrium of concurrent forces",
      "Static, kinetic and rolling friction",
      "Uniform circular motion",
      "Vehicles on level and banked roads",
      "Inertial and uniformly accelerated frames (JEE Advanced)",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture                                                */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "define-system",
      title: "1. Define the system",
      keyIdea: "The choice of system decides which forces are internal and disappear from the equation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A block, two connected blocks, a person plus lift, or the entire collection can each be a valid system. Internal forces disappear from the net external-force equation for a combined system, but they remain necessary when an individual contact force is required.",
            },
          ],
        },
      ],
    },
    {
      id: "choose-frame",
      title: "2. Choose the frame",
      keyIdea: "A frame error changes the entire force model, not just one term.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In an inertial frame, use real forces in Newton's second law. In a uniformly accelerating frame, introduce the appropriate pseudo force and keep the frame choice consistent throughout. Do not mix ground-frame acceleration with lift-frame forces.",
            },
          ],
        },
      ],
    },
    {
      id: "inventory-interactions",
      title: "3. Inventory interactions",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Weight comes from Earth, normal reaction from contact, tension from a taut connector, friction from a contacting surface, and applied forces from identified agents.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "\"Centripetal force\" is not an extra force. It is the inward resultant of real forces.",
            },
          ],
        },
      ],
    },
    {
      id: "free-body-diagrams",
      title: "4. Draw separate free-body diagrams",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Draw one diagram per chosen body. Newton's third-law partners act on different bodies, so they never cancel on a single-body diagram.",
            },
          ],
        },
      ],
    },
    {
      id: "add-constraints",
      title: "5. Add constraints",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A taut inextensible string, no-slip contact, common acceleration, or geometric contact can relate accelerations. Write that relation separately from the force equations.",
            },
          ],
        },
      ],
    },
    {
      id: "contact-regime",
      title: "6. Test the contact regime",
      keyIdea: "Calculate the friction required by the assumed motion before using a limiting value.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Static friction takes the value required to prevent slipping, up to its limit. Use the limiting value only when impending motion is established. Once sliding occurs, use the stated kinetic-friction model.",
            },
          ],
        },
      ],
    },
    {
      id: "validate-result",
      title: "7. Validate the result",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Check direction, limiting cases, dimensions, and whether the assumed contact state survives. If the calculated static friction exceeds its maximum, the no-slip model is invalid and must be rebuilt.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables placed at typed anchor points                     */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Laws of Motion",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Scope area", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Force, inertia and Newton's laws",
          "Force and inertia; Newton's three laws are explicitly listed.",
          "Newton's laws are explicitly listed.",
        ],
        [
          "Momentum",
          "Momentum, impulse and conservation of linear momentum are explicitly listed.",
          "Impulse and conservation of linear momentum are explicitly listed.",
        ],
        [
          "Equilibrium",
          "Equilibrium of concurrent forces is explicitly listed.",
          "Not separately named in the cited Mechanics lines.",
        ],
        [
          "Friction",
          "Static, kinetic and rolling friction are explicitly listed.",
          "Static and dynamic friction are explicitly listed.",
        ],
        [
          "Frames",
          "Not separately named as a frame topic.",
          "Inertial and uniformly accelerated frames are explicitly listed.",
        ],
        [
          "Circular motion applications",
          "Uniform circular motion, and vehicles on level and banked roads, are explicitly listed.",
          "Covered through general Mechanics scope; treat both official documents as separate authorities.",
        ],
      ],
      note: "This page does not assign chapter weightage or predict how many questions will appear. Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Laws of Motion",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Vector resolution",
          "Resolve a vector along chosen axes.",
          "Revise vector components and unit vectors in Units and Measurements.",
        ],
        [
          "Signed kinematics",
          "Read velocity and acceleration with signs.",
          "Revise one-dimensional motion with sign conventions in Kinematics.",
        ],
        [
          "Mass versus weight",
          "Distinguish mass from weight.",
          "Revise the definitions and units of mass and weight.",
        ],
        [
          "Relative acceleration",
          "Use relative acceleration in a constraint.",
          "Revise relative motion problems from Kinematics.",
        ],
        [
          "Circular motion basics",
          "Recognise that circular motion needs inward acceleration even at constant speed.",
          "Revise uniform circular motion in Kinematics before banking and circular-force problems.",
        ],
      ],
      note: "If these are unstable, revise Units and Measurements and Kinematics first.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Situation", "First method", "Why"],
      rows: [
        [
          "Need acceleration of several bodies",
          "Combine bodies first, then separate",
          "Internal tensions or contact forces cancel in the combined equation",
        ],
        [
          "Need tension or normal reaction",
          "Isolate the relevant body",
          "The internal force must remain visible",
        ],
        [
          "Very short interaction",
          "Impulse and momentum",
          "Force may vary strongly while its time integral is usable",
        ],
        [
          "Equilibrium",
          "Resolve concurrent forces",
          "Acceleration is zero, not necessarily every force",
        ],
        [
          "Curved path",
          "Radial and tangential axes",
          "The inward resultant must supply radial acceleration",
        ],
        [
          "Accelerating support or wedge",
          "Choose frame explicitly",
          "A frame error changes the entire force model",
        ],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis for Laws of Motion",
      intro: "Use the smallest Preparation Intelligence v1.1 label supported by what the student actually did.",
      columns: ["Primary label", "Use when the first failure is"],
      rows: [
        ["Knowledge Gap", "A force, frame, friction regime, or Newton-law concept is not understood."],
        ["Recall Gap", "The correct relation or condition was known but not retrieved."],
        [
          "Execution Error",
          "The model was right but a sign, component, equation, or calculation failed.",
        ],
        [
          "Decision / Selection Error",
          "The wrong system, frame, axes, friction state, or method was chosen.",
        ],
        ["Needs Review", "The evidence is incomplete, ambiguous or inconsistent."],
      ],
      note: "Record contributing factors separately. Do not replace the primary label with an improvised category.",
    },
    {
      id: "official-paper-practice",
      jump: true,
      slot: "practice",
      heading: "Official-paper practice protocol",
      columns: ["Step", "What to record"],
      rows: [
        ["Source", "Use the official JEE Main question-paper collection and official JEE Advanced past papers."],
        ["System", "The body or combination of bodies chosen for the free-body diagram."],
        ["Frame", "The reference frame used, and any pseudo force introduced."],
        ["Constraint", "The relation used to connect accelerations or velocities."],
        ["Governing law", "The Newton's-law or momentum form actually applied."],
        ["First failed decision", "The earliest point the attempted solution went wrong."],
      ],
      note: "Publish no chapter count until the classification set, inclusion rules, and reviewer sign-off are visible.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet                                                       */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "newton-second-law-momentum",
      expression: "sum(F_ext) = dp/dt",
      meaning: "External force changes system momentum.",
      variables: [
        { symbol: "F", meaning: "external force", unit: "N" },
        { symbol: "p", meaning: "momentum", unit: "kg m/s" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "Any particle or chosen system in an inertial frame.",
      commonTrap: "Including internal action-reaction pairs as external forces.",
      accessibleText:
        "The sum of external forces equals the rate of change of the system's momentum with respect to time.",
    },
    {
      id: "newton-second-law-constant-mass",
      expression: "sum(F) = m a",
      meaning: "Constant-mass form of Newton's second law.",
      variables: [
        { symbol: "F", meaning: "net force", unit: "N" },
        { symbol: "m", meaning: "mass", unit: "kg" },
        { symbol: "a", meaning: "acceleration", unit: "m/s^2" },
      ],
      useWhen: "Constant mass in an inertial frame.",
      commonTrap: "Treating one component equation as a scalar law for the whole motion.",
      accessibleText: "The sum of forces equals mass times acceleration.",
    },
    {
      id: "impulse-momentum",
      expression: "J = integral(F dt) = Delta p",
      meaning: "Impulse equals momentum change.",
      variables: [
        { symbol: "J", meaning: "impulse", unit: "N s" },
        { symbol: "p", meaning: "momentum", unit: "kg m/s" },
      ],
      useWhen: "Short-duration interaction.",
      commonTrap: "Replacing a varying force by its peak instead of its average.",
      accessibleText: "Impulse equals the time integral of force, and equals the change in momentum.",
    },
    {
      id: "static-friction-limit",
      expression: "f_s <= mu_s N",
      meaning: "Static friction adjusts up to a limit.",
      variables: [
        { symbol: "f_s", meaning: "static friction", unit: "N" },
        { symbol: "N", meaning: "normal reaction", unit: "N" },
        { symbol: "mu_s", meaning: "coefficient of static friction" },
      ],
      useWhen: "Contact without slipping.",
      commonTrap: "Automatically setting f_s = mu_s N.",
      accessibleText: "Static friction is less than or equal to the coefficient of static friction times the normal reaction.",
    },
    {
      id: "kinetic-friction",
      expression: "f_k = mu_k N",
      meaning: "Simple kinetic-friction model.",
      variables: [
        { symbol: "f_k", meaning: "kinetic friction", unit: "N" },
        { symbol: "N", meaning: "normal reaction", unit: "N" },
        { symbol: "mu_k", meaning: "coefficient of kinetic friction" },
      ],
      useWhen: "Sliding contact under the stated model.",
      commonTrap: "Using kinetic friction before confirming slip.",
      accessibleText: "Kinetic friction equals the coefficient of kinetic friction times the normal reaction.",
    },
    {
      id: "circular-motion-radial",
      expression: "sum(F_radial) = m v^2 / r",
      meaning: "Inward resultant supplies radial acceleration.",
      variables: [
        { symbol: "v", meaning: "speed", unit: "m/s" },
        { symbol: "r", meaning: "radius", unit: "m" },
      ],
      useWhen: "Motion on a circular path.",
      commonTrap: "Adding a separate \"centripetal force\" to existing forces.",
      accessibleText:
        "The sum of radial forces equals mass times speed squared divided by radius.",
    },
    {
      id: "pseudo-force",
      expression: "F_pseudo = - m a_frame",
      meaning: "Translational pseudo force in an accelerating frame.",
      variables: [
        { symbol: "m", meaning: "mass", unit: "kg" },
        { symbol: "a_frame", meaning: "frame acceleration", unit: "m/s^2" },
      ],
      useWhen: "Uniformly translating non-inertial frame.",
      commonTrap: "Using it in an inertial frame or with the wrong direction.",
      accessibleText: "The pseudo force equals minus mass times the frame's acceleration.",
    },
    {
      id: "banked-road",
      expression: "tan(theta) = v^2 / (r g)",
      meaning: "Ideal friction-free banking relation.",
      variables: [
        { symbol: "theta", meaning: "banking angle" },
        { symbol: "v", meaning: "speed", unit: "m/s" },
        { symbol: "r", meaning: "radius", unit: "m" },
        { symbol: "g", meaning: "acceleration due to gravity", unit: "m/s^2" },
      ],
      useWhen: "Design speed on a banked road with no friction.",
      commonTrap: "Using it when friction is active without rebuilding the equations.",
      accessibleText:
        "The tangent of the banking angle equals speed squared divided by the product of radius and gravitational acceleration.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning                                                    */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "stacked-blocks-no-slip",
      prompt:
        "A lower block is pulled horizontally. A smaller block rests on top, and the coefficient of static friction between them is mu_s. What is the largest common acceleration possible before the upper block slips?",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Isolate the upper block." }],
            [{ text: "Its only horizontal force is static friction." }],
            [{ text: "For common acceleration a, the required friction is f_s = m a." }],
            [{ text: "The largest available static friction is mu_s N = mu_s m g on a horizontal surface." }],
            [{ text: "No slip requires m a <= mu_s m g, so a <= mu_s g." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The useful result is not merely the inequality. It is the method: calculate the friction required by the assumed motion, compare it with the allowed maximum, and change the model if the assumption fails.",
            },
          ],
        },
      ],
      answer: "The upper block does not slip while a <= mu_s g; beyond that acceleration, the blocks move independently.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes                                                     */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "third-law-same-body",
      mistake: "Pairing equal and opposite forces on one free-body diagram.",
      why: [{ type: "paragraph", children: [{ text: "Third-law partners act on different bodies, not the same one." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Draw a separate diagram for each body and place each partner force on its own diagram." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "friction-direction-habit",
      mistake: "Choosing friction opposite to velocity by habit.",
      why: [{ type: "paragraph", children: [{ text: "Friction opposes relative slipping or its tendency at the contact, not velocity in general." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the surface in contact and the direction of relative slipping tendency before assigning friction direction." }] }],
      errorType: "decision-error",
    },
    {
      id: "normal-equals-mg",
      mistake: "Setting normal reaction equal to m g in every problem.",
      why: [{ type: "paragraph", children: [{ text: "Normal reaction depends on the forces resolved perpendicular to the actual contact, which changes with incline, applied force or acceleration." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Resolve forces perpendicular to the contact surface for the specific configuration given." }] }],
      errorType: "execution-error",
    },
    {
      id: "tension-always-equal",
      mistake: "Treating tension as identical across any pulley system.",
      why: [{ type: "paragraph", children: [{ text: "Equal tension needs the stated ideal string and pulley assumptions; a massive pulley or string changes this." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the string and pulley are stated as ideal before assuming equal tension throughout." }] }],
      errorType: "decision-error",
    },
    {
      id: "limiting-friction-always",
      mistake: "Using the limiting-friction value throughout a problem.",
      why: [{ type: "paragraph", children: [{ text: "Static friction only reaches its limiting value at the point of impending motion." }] }],
      fix: [{ type: "paragraph", children: [{ text: "First calculate the friction required by the assumed motion, then compare with the limiting value." }] }],
      errorType: "execution-error",
    },
    {
      id: "centripetal-as-new-force",
      mistake: "Calling m v^2 / r a new force.",
      why: [{ type: "paragraph", children: [{ text: "It is the required inward resultant, not an additional physical force acting on the body." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify which real forces (tension, normal reaction, friction, gravity component) create the inward resultant." }] }],
      errorType: "knowledge-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups at typed anchor points                         */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "readiness-check",
      slot: "prerequisites",
      heading: "Readiness check",
      concepts: [
        {
          id: "readiness-questions",
          title: "Try these without notes — the purpose is diagnosis, not scoring",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Resolve a vector along chosen axes: can you do it confidently?" }],
                [{ text: "Can you read velocity and acceleration with correct signs?" }],
                [{ text: "Can you distinguish mass from weight?" }],
                [{ text: "Can you use relative acceleration in a constraint?" }],
                [
                  {
                    text: "Can you recognise that circular motion needs inward acceleration even at constant speed?",
                  },
                ],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "If these are unstable, revise Units and Measurements and Kinematics first.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "answer-validation",
      slot: "mistakes",
      heading: "Validate the result before accepting it",
      concepts: [
        {
          id: "validation-checks",
          title: "Check direction, dimensions and limiting cases",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Check direction, limiting cases, dimensions, and whether the assumed contact state survives. If the calculated static friction exceeds its maximum, the no-slip model is invalid and must be rebuilt.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Related learning path                                               */
  /* ------------------------------------------------------------------ */
  relatedChapters: [
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "same-unit",
      description: "Compare force, energy, and momentum approaches to the same class of problems.",
    },
    {
      label: "Center of Mass",
      url: "/jee/physics/center-of-mass",
      relation: "same-unit",
      description: "Compare force, energy, and momentum approaches for multi-body systems.",
    },
    {
      label: "Rotational Motion",
      url: "/jee/physics/rotational-motion",
      relation: "forward",
      description: "Reuse free-body and constraint reasoning for rotating systems.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "forward",
      description: "Reuse free-body and constraint reasoning for oscillatory restoring forces.",
    },
    {
      label: "Fluid Mechanics",
      url: "/jee/physics/fluid-mechanics",
      relation: "forward",
      description: "Reuse free-body and constraint reasoning for fluid forces.",
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
      description: "Return to the official Physics scope.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs                                                                */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is a free-body diagram?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "It is a diagram of one chosen body or system showing only the external forces acting on it." },
          ],
        },
      ],
    },
    {
      question: "Is static friction always mu_s N?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Static friction adjusts from zero up to a limiting magnitude mu_s N.",
            },
          ],
        },
      ],
    },
    {
      question: "Is centripetal force a separate force?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. It is the name for the inward resultant required for circular motion." },
          ],
        },
      ],
    },
    {
      question: "When should I use momentum instead of F = m a?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Prefer momentum or impulse when the interaction is brief, the force varies with time, or internal forces can be eliminated by choosing a larger system.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Authority, sources and metadata                                     */
  /* ------------------------------------------------------------------ */
  contributorPolicy: [
    "Ideal author type: JEE Physics educator or academic content specialist with strong mechanics teaching experience.",
    "Required reviewer expertise: Newtonian mechanics, friction, frames, constraints, circular motion, and JEE solution evaluation.",
    "Required qualification: Master's degree or higher in Physics, or an engineering degree with documented JEE Physics teaching and assessment experience.",
    "Review scope: official Main and Advanced mapping; force diagrams; frame conventions; friction regimes; banking assumptions; formula conditions; worked reasoning; internal-link accuracy.",
    "No contributor is named until identity, qualification, role and profile content are verified; no Person schema is emitted before that gate closes.",
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Scope claims are checked against the current NTA JEE Main 2026 syllabus and the official JEE Advanced 2026 syllabus. Official paper archives are linked for practice only; this page does not assert PYQ counts, frequency, weightage or trend for Laws of Motion.",

  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Laws of Motion for JEE: Concepts, Formulas and Force Models",
    description:
      "Learn Laws of Motion for JEE Main and Advanced through free-body diagrams, friction conditions, force models, worked reasoning, mistakes and prerequisites.",
    ogTitle: "Laws of Motion for JEE, Explained as a Force Model",
    ogDescription:
      "Choose the system, frame, forces and constraints before using Newton's laws. Includes official scope, formulas, traps and diagnosis.",
  },
};

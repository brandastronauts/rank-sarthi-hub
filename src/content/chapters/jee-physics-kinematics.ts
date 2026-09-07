import type { ChapterContent } from "@/content/types";

/**
 * Kinematics — T06 production content (Batch 03, 7 September 2026).
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
 *   keeps /jee/physics/kinematics on noindex until review is recorded.
 */
export const jeePhysicsKinematics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Kinematics",
  slug: "kinematics",
  url: "/jee/physics/kinematics",
  canonicalIntent:
    "Describe motion consistently using a frame, coordinates, graphs and vectors, choose the correct method for a given motion problem, and diagnose why a kinematics solution goes wrong.",

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
          text: "Kinematics describes where an object is, how fast its position changes, and how its velocity changes, without asking which forces cause the motion. A correct solution fixes a reference frame, origin, axes, clock and sign convention before using equations or graphs.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Kinematics is the language used by later mechanics. If the motion description is inconsistent, Newton's laws cannot repair it.",
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
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Stabilise units, dimensions, significant figures and vectors before Kinematics.",
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
    unit: "Kinematics",
    topics: [
      "Frame of reference",
      "Motion in a straight line",
      "Speed and velocity",
      "Uniform and non-uniform motion",
      "Average and instantaneous velocity and acceleration",
      "Uniformly accelerated motion and its graphical representation",
      "Relative velocity",
      "Motion in a plane",
      "Projectile motion",
      "Uniform circular motion",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): event, frame, coordinate, change        */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "events-in-frame",
      title: "1. Define events in a frame",
      keyIdea:
        "Position is measured relative to an origin in a chosen frame at a stated time. Different frames can assign different positions and velocities to the same event sequence.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Position is measured relative to an origin in a chosen frame at a stated time. Different frames can assign different positions and velocities to the same event sequence.",
            },
          ],
        },
      ],
    },
    {
      id: "distance-vs-displacement",
      title: "2. Separate distance from displacement",
      keyIdea: "Distance is accumulated path length; displacement is the change in position vector.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Distance is accumulated path length. Displacement is the change in position vector. Average speed uses distance; average velocity uses displacement.",
            },
          ],
        },
      ],
    },
    {
      id: "derivatives",
      title: "3. Use derivatives for instantaneous quantities",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Velocity is the time rate of change of position. Acceleration is the time rate of change of velocity. A nonzero acceleration can change speed, direction, or both.",
            },
          ],
        },
      ],
    },
    {
      id: "graphs-as-operations",
      title: "4. Read graphs as operations",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Slope of a position-time graph gives velocity. Slope of a velocity-time graph gives acceleration. Signed area under a velocity-time graph gives displacement. Area under a speed-time graph gives distance.",
            },
          ],
        },
      ],
    },
    {
      id: "constant-acceleration-conditional",
      title: "5. Use constant-acceleration equations conditionally",
      keyIdea: "The familiar three equations apply only over an interval with constant acceleration.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The familiar three equations apply only over an interval with constant acceleration in the chosen component and frame. They are not definitions.",
            },
          ],
        },
      ],
    },
    {
      id: "components",
      title: "6. Separate dimensions into components",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In projectile motion without air resistance and with uniform g, horizontal acceleration is zero and vertical acceleration is constant downward. The components share the same time.",
            },
          ],
        },
      ],
    },
    {
      id: "relative-motion",
      title: "7. Reduce relative motion",
      keyIdea: "A two-body meeting problem often becomes one-body motion of A relative to B.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Subtract position or velocity vectors in the same frame. A two-body meeting problem often becomes one-body motion of A relative to B.",
            },
          ],
        },
      ],
    },
    {
      id: "circular-motion",
      title: "8. Keep uniform circular motion accelerated",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Constant speed does not mean constant velocity. The direction changes, producing inward acceleration v squared over r.",
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
          "How position, velocity and acceleration are defined, measured and described in a chosen frame, using graphs, components, relative motion, projectiles and circular motion.",
        ],
        [
          "What is the central method choice?",
          "Differentiate or integrate when a function of time is given, use graph slope or signed area for a motion graph, use constant-acceleration equations only after confirming constant acceleration, resolve into Cartesian components for projectiles, and reduce two-body problems to relative motion.",
        ],
        [
          "Where do most mistakes begin?",
          "Mixing distance with displacement, misreading a graph's axis and operation, applying constant-acceleration equations without checking the condition, and subtracting relative velocities as magnitudes instead of vectors.",
        ],
        [
          "What should come before Kinematics?",
          "SI units and dimensions, algebra, graph reading, vector components and basic trigonometry.",
        ],
        [
          "What comes after it?",
          "Laws of Motion adds force as the cause of acceleration, and Rotational Motion extends the same graph and component logic to angular quantities.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Kinematics",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Frame and one-dimensional motion",
          "Frame of reference, motion in a straight line, speed and velocity, uniform and non-uniform motion are explicitly listed.",
          "One-dimensional kinematics in Cartesian coordinates is explicitly listed.",
          "Fix an origin, axis and sign convention before any calculation.",
        ],
        [
          "Average and instantaneous quantities",
          "Average and instantaneous quantities and uniformly accelerated motion with graphical representation are explicitly listed.",
          "Covered through the same Cartesian kinematics scope.",
          "Treat velocity and acceleration as derivatives, not as constant-acceleration shortcuts by default.",
        ],
        [
          "Relative velocity",
          "Relative velocity is explicitly listed.",
          "Relative velocity is explicitly listed.",
          "Keep every velocity in one frame and one sign convention before subtracting.",
        ],
        [
          "Planar motion, projectiles and circular motion",
          "Motion in a plane, projectile motion and uniform circular motion are explicitly listed.",
          "Two-dimensional kinematics, projectiles and uniform circular motion are explicitly listed.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Kinematics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "SI units and dimensions",
          "Use SI units and dimensions consistently across a calculation.",
          "Revise base units, dimensional formulas and unit conversion.",
        ],
        [
          "Algebra",
          "Rearrange linear and quadratic equations.",
          "Practise solving for an unknown in constant-acceleration relations.",
        ],
        [
          "Graph reading",
          "Read slope and signed area on a graph.",
          "Revise slope as rate of change and signed area as accumulation.",
        ],
        [
          "Vectors",
          "Resolve vectors into Cartesian components.",
          "Revise vector addition, components and unit vectors.",
        ],
        [
          "Trigonometry",
          "Use basic trigonometric ratios for angle and component problems.",
          "Revise sine, cosine and tangent for right-angled triangles.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the method before calculating",
      intro: "Seven decisions cover most Kinematics questions. Select the representation before any algebra.",
      columns: ["Information given", "First method", "Validation"],
      rows: [
        ["Position as a function of time", "Differentiate", "Check units and signs"],
        ["Acceleration as a function of time", "Integrate with initial conditions", "Differentiate the result back"],
        ["Motion graph", "Use slope or signed area", "Match the graph's axes"],
        ["Constant acceleration", "Kinematic equations", "Confirm acceleration is constant over the interval"],
        ["Projectile", "Resolve into Cartesian components", "Use one common time"],
        ["Two moving bodies", "Relative position and velocity", "Keep both quantities in one frame"],
        ["Circular path at constant speed", "Radial acceleration", "Do not set total acceleration to zero"],
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
      heading: "Readiness check before starting Kinematics",
      concepts: [
        {
          id: "readiness-body",
          title: "Prepare units, graphs, algebra and vectors",
          body: [
            {
              type: "paragraph",
              children: [{ text: "You should be able to:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "use SI units and dimensions;" }],
                [{ text: "rearrange linear and quadratic equations;" }],
                [{ text: "read slope and signed area on graphs;" }],
                [{ text: "resolve vectors into Cartesian components;" }],
                [{ text: "use basic trigonometry." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "Start with Units and Measurements if these foundations are unstable.",
                  href: "/jee/physics/units-and-measurements",
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
      id: "instantaneous-velocity",
      expression: "v = dr/dt",
      meaning: "Instantaneous velocity is the time rate of change of the position vector.",
      variables: [
        { symbol: "r", meaning: "position vector", unit: "m" },
        { symbol: "v", meaning: "instantaneous velocity", unit: "m/s" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "The position function is differentiable.",
      commonTrap: "Replacing vector velocity with speed.",
      accessibleText: "Instantaneous velocity equals the time derivative of the position vector.",
    },
    {
      id: "instantaneous-acceleration",
      expression: "a = dv/dt",
      meaning: "Instantaneous acceleration is the time rate of change of velocity.",
      variables: [{ symbol: "a", meaning: "instantaneous acceleration", unit: "m/s^2" }],
      useWhen: "The velocity function is differentiable.",
      commonTrap: "Assuming acceleration follows the velocity direction.",
      accessibleText: "Instantaneous acceleration equals the time derivative of velocity.",
    },
    {
      id: "average-velocity",
      expression: "v_avg = (change in r) / (change in t)",
      meaning: "Average velocity over a finite interval.",
      variables: [
        { symbol: "change in r", meaning: "displacement", unit: "m" },
        { symbol: "change in t", meaning: "time interval", unit: "s" },
      ],
      useWhen: "A finite interval is given rather than an instant.",
      commonTrap: "Using distance in the numerator instead of displacement.",
      accessibleText: "Average velocity equals displacement divided by time interval.",
    },
    {
      id: "velocity-constant-acceleration",
      expression: "v = u + at",
      meaning: "Velocity under constant acceleration.",
      variables: [
        { symbol: "u", meaning: "initial velocity", unit: "m/s" },
        { symbol: "v", meaning: "final velocity", unit: "m/s" },
        { symbol: "a", meaning: "acceleration", unit: "m/s^2" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "One component has constant acceleration over the interval.",
      commonTrap: "Using it when acceleration varies.",
      accessibleText: "Final velocity equals initial velocity plus acceleration times time.",
    },
    {
      id: "displacement-constant-acceleration",
      expression: "s = ut + (1/2) a t^2",
      meaning: "Displacement under constant acceleration.",
      variables: [{ symbol: "s", meaning: "displacement", unit: "m" }],
      useWhen: "Same constant-acceleration condition and one time interval.",
      commonTrap: "Substituting path length for signed displacement.",
      accessibleText: "Displacement equals initial velocity times time plus one half acceleration times time squared.",
    },
    {
      id: "time-eliminated-relation",
      expression: "v^2 = u^2 + 2as",
      meaning: "Time-eliminated constant-acceleration relation.",
      variables: [{ symbol: "s", meaning: "signed displacement", unit: "m" }],
      useWhen: "Constant acceleration along the analysed component.",
      commonTrap: "Using unsigned values without a direction convention.",
      accessibleText: "Final velocity squared equals initial velocity squared plus twice acceleration times displacement.",
    },
    {
      id: "relative-velocity",
      expression: "v_A/B = v_A - v_B",
      meaning: "Velocity of A relative to B.",
      variables: [
        { symbol: "v_A", meaning: "velocity of A", unit: "m/s" },
        { symbol: "v_B", meaning: "velocity of B", unit: "m/s" },
      ],
      useWhen: "Both velocities are expressed in the same frame and basis.",
      commonTrap: "Subtracting magnitudes instead of vectors.",
      accessibleText: "Velocity of A relative to B equals velocity of A minus velocity of B, as vectors.",
    },
    {
      id: "projectile-components",
      expression: "x = u cos(theta) t ;  y = u sin(theta) t - (1/2) g t^2",
      meaning: "Ideal projectile components.",
      variables: [
        { symbol: "u", meaning: "launch speed", unit: "m/s" },
        { symbol: "theta", meaning: "launch angle" },
        { symbol: "g", meaning: "acceleration due to gravity", unit: "m/s^2" },
      ],
      useWhen: "Uniform downward g, no air resistance, ground inertial frame.",
      commonTrap: "Applying range formulas when launch and landing heights differ.",
      accessibleText: "Horizontal position equals speed times cosine of angle times time; vertical position equals speed times sine of angle times time minus one half g t squared.",
    },
    {
      id: "radial-acceleration",
      expression: "a_r = v^2/r = omega^2 r",
      meaning: "Radial acceleration in circular motion.",
      variables: [
        { symbol: "v", meaning: "speed", unit: "m/s" },
        { symbol: "r", meaning: "radius", unit: "m" },
        { symbol: "omega", meaning: "angular speed", unit: "rad/s" },
      ],
      useWhen: "Circular motion.",
      commonTrap: "Calling acceleration zero because speed is constant.",
      accessibleText: "Radial acceleration equals speed squared divided by radius, or angular speed squared times radius.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-relative-motion-meeting",
      prompt:
        "Particle A starts at x = 0 and moves right at 10 m/s. Particle B starts at x = 60 m and moves left at 5 m/s. When do they meet?",
      answer: "They meet after 4 seconds.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Choose right as positive in the ground frame." }],
            [{ text: "v_A = +10 m/s and v_B = -5 m/s." }],
            [{ text: "Velocity of A relative to B is v_A/B = 10 - (-5) = 15 m/s." }],
            [{ text: "Initial separation is 60 m." }],
            [{ text: "Meeting time is 60/15 = 4 s." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "This reduction is safe because both velocities use the same frame and sign convention. Subtracting the two speed magnitudes as 10 minus 5 would encode the wrong geometry.",
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
      id: "distance-displacement-mix",
      mistake: "Mixing distance and displacement",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Distance is accumulated path length; displacement is a signed vector change." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Match path length to speed and vector change to velocity." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "position-graph-height",
      mistake: "Reading a position-time graph's height as velocity",
      why: [
        { type: "paragraph", children: [{ text: "Height gives position, not the rate at which position changes." }] },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Velocity is the graph's slope, not its height." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "acceleration-area-mix",
      mistake: "Treating area under an acceleration-time graph as displacement",
      why: [
        { type: "paragraph", children: [{ text: "The area under an acceleration-time graph is a change in velocity." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use the velocity-time graph's area for displacement instead." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "default-constant-acceleration",
      mistake: "Using constant-acceleration equations by default",
      why: [
        { type: "paragraph", children: [{ text: "These equations only hold where acceleration is genuinely constant." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "First prove acceleration is constant in that component before applying them." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "unequal-height-range-formula",
      mistake: "Applying the same-height projectile range formula to unequal heights",
      why: [
        { type: "paragraph", children: [{ text: "That formula assumes launch and landing occur at the same height." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Return to component equations with a shared time variable." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "relative-speed-subtraction",
      mistake: "Subtracting relative speeds without direction",
      why: [
        { type: "paragraph", children: [{ text: "Speeds are magnitudes and lose the sign information velocity carries." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Subtract velocity vectors in one consistent frame instead." }] },
      ],
      errorType: "execution-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* PI v1.1 diagnosis and official-paper practice (B13/B06, B32)        */
  /* ------------------------------------------------------------------ */

  faqs: [
    {
      question: "What is Kinematics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Kinematics describes position, velocity and acceleration in a chosen frame without analysing the forces that cause the motion.",
            },
          ],
        },
      ],
    },
    {
      question: "What does the area under a velocity-time graph mean?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Its signed area gives displacement over the interval." }],
        },
      ],
    },
    {
      question: "When can I use v squared = u squared + 2as?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "When acceleration is constant along the analysed component over the interval." },
          ],
        },
      ],
    },
    {
      question: "Can speed be constant while acceleration is nonzero?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. In uniform circular motion, velocity direction changes and acceleration points inward.",
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
      relation: "forward",
      description: "Add causes to the motion described here through force and Newton's laws.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "forward",
      description: "Add energy reasoning to motion once force is available.",
    },
    {
      label: "Rotational Motion",
      url: "/jee/physics/rotational-motion",
      relation: "forward",
      description: "Extend graph and component reasoning to angular descriptions of motion.",
    },
    {
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Stabilise units, dimensions, significant figures and vectors.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "related",
      description: "Connect graph interpretation with periodic motion.",
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
      description: "Connect graph interpretation with reviewed official problems.",
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
    "Author: a JEE Physics educator or academic content specialist experienced in mechanics foundations, motion graphs and vectors.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE Kinematics teaching and solution-review experience, covering reference frames, graph calculus, constant-acceleration conditions, projectiles, relative motion and circular kinematics.",
    "Independent checker: verifies official mapping, frame and sign consistency, graph operations, projectile assumptions, relative-motion reasoning, formula conditions and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Kinematics for JEE: Motion, Graphs, Vectors and Formulas",
    description:
      "Learn Kinematics for JEE Main and Advanced through frames, graphs, constant-acceleration conditions, projectiles, relative motion and common traps.",
    ogTitle: "Kinematics for JEE, From Frames to Motion Graphs",
    ogDescription:
      "A structured guide to position, velocity, acceleration, graphs, projectiles and relative motion with official scope and diagnosis.",
  },
};

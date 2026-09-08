import type { ChapterContent } from "@/content/types";

/**
 * Simple Harmonic Motion — T06 production content (Batch 04, 7 September 2026).
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
 *   keeps /jee/physics/simple-harmonic-motion on noindex until review is recorded.
 */
export const jeePhysicsSimpleHarmonicMotion: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Simple Harmonic Motion",
  slug: "simple-harmonic-motion",
  url: "/jee/physics/simple-harmonic-motion",
  canonicalIntent:
    "Recognize SHM from its restoring relation, connect phase with motion and energy, and distinguish ideal SHM from general periodic motion.",

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
          text: "A system executes linear simple harmonic motion when its acceleration is proportional to displacement from a stable equilibrium and directed toward that equilibrium: a equals minus omega squared times x.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Periodic motion repeats, but only motion with the appropriate linear restoring relation is simple harmonic. Calling every periodic motion SHM is the single most common misclassification in this chapter.",
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
      description: "Newton's second law is what turns a restoring force into the SHM acceleration relation.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Energy conservation underlies the kinetic and potential energy exchange in SHM.",
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
    unit: "Oscillations and Waves",
    topics: [
      "Periodic motion, period and frequency",
      "Time-dependent displacement and periodic functions",
      "SHM equation and phase",
      "Spring restoring force and force constant",
      "Kinetic and potential energy in SHM",
      "Derivation of simple-pendulum period",
      "Forced and damped oscillation in one dimension",
      "Resonance",
      "Linear and angular SHM",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): equilibrium, restoring law, phase, energy */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "stable-equilibrium",
      title: "1. Start from stable equilibrium",
      keyIdea: "A small displacement must create a force directed back toward equilibrium.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A small displacement must create a force directed back toward equilibrium. Without this stability condition, there is no oscillation to describe.",
            },
          ],
        },
      ],
    },
    {
      id: "linearization",
      title: "2. Check linearization before naming it SHM",
      keyIdea: "SHM appears when the restoring force is proportional to displacement in the modeled range.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "SHM appears when the restoring force is proportional to displacement in the modeled range. A restoring force that is present but not linear produces periodic motion that is not simple harmonic.",
            },
          ],
        },
      ],
    },
    {
      id: "phase",
      title: "3. Use phase to fix signs",
      keyIdea: "Phase locates the oscillator within its cycle and fixes the signs of displacement, velocity and acceleration.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Phase locates the oscillator within its cycle and fixes the signs of displacement, velocity, and acceleration. Once a phase convention is chosen, keep it consistent through differentiation.",
            },
          ],
        },
      ],
    },
    {
      id: "energy-exchange",
      title: "4. Track the energy exchange",
      keyIdea: "Ideal SHM continuously exchanges kinetic and potential energy while total mechanical energy stays constant.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Ideal SHM continuously exchanges kinetic and potential energy while total mechanical energy stays constant. Energy methods often answer speed questions faster than time equations.",
            },
          ],
        },
      ],
    },
    {
      id: "time-scale",
      title: "5. Treat omega as a property of the system",
      keyIdea: "Omega is set by inertia and restoring strength, not by the initial phase.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Omega is set by inertia and restoring strength, not by the initial phase. Initial conditions fix amplitude and phase constant, never the angular frequency itself.",
            },
          ],
        },
      ],
    },
    {
      id: "real-response",
      title: "6. Do not extend ideal formulas to real oscillators unchanged",
      keyIdea: "Damping removes mechanical energy; periodic forcing can produce resonance.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Damping removes mechanical energy, and periodic forcing can produce resonance. The ideal formula set must not be applied unchanged to every driven oscillator.",
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
          "Recognizing SHM from its restoring relation, connecting phase with motion and energy, and distinguishing ideal SHM from general periodic motion, including damped and forced oscillation.",
        ],
        [
          "What is the central method choice?",
          "Test for a linear restoring relation before naming motion SHM, use the phase equation for time-dependent questions, use energy or the speed-position relation for position and speed questions, and treat pendulum and spring formulas as conditional approximations.",
        ],
        [
          "Where do most mistakes begin?",
          "Calling every periodic motion SHM, measuring displacement from an endpoint instead of equilibrium, dropping the negative sign in the restoring relation, and reading velocity direction from a squared speed formula.",
        ],
        [
          "What should come before Simple Harmonic Motion?",
          "Newton's second law, Hooke's law, energy conservation, circular functions, graphs, and radians.",
        ],
        [
          "What comes after it?",
          "Waves extends oscillator behaviour to propagating disturbances, and Alternating Current uses the same oscillator analogy after circuit prerequisites.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Simple Harmonic Motion",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Periodic motion and SHM equation",
          "Periodic motion, period, frequency, time-dependent displacement and periodic functions, and the SHM equation and phase are explicitly listed.",
          "Covered as the baseline for the extended one-dimensional oscillation scope.",
          "Confirm the linear restoring condition before applying any SHM equation.",
        ],
        [
          "Spring systems and energy",
          "Spring restoring force and force constant, and kinetic and potential energy in SHM are explicitly listed.",
          "Covered as the baseline for spring-based oscillator questions.",
          "Keep displacement measured from the equilibrium position, not from an endpoint.",
        ],
        [
          "Simple pendulum",
          "Derivation of the simple-pendulum period is explicitly listed.",
          "Covered through the same oscillator scope.",
          "State the small-angle approximation explicitly whenever the pendulum formula is used.",
        ],
        [
          "Damping, forcing, resonance and angular SHM",
          "Not listed as Main scope in this record.",
          "Forced and damped oscillation in one dimension, resonance, and linear and angular SHM are explicitly listed.",
          "Treat these as Advanced-only additions unless the current Main syllabus explicitly states otherwise.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Simple Harmonic Motion",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Newton's second law",
          "Relate net force to acceleration for a moving body.",
          "Revise Laws of Motion before continuing.",
        ],
        [
          "Hooke's law",
          "Write the restoring force of an ideal spring in terms of displacement.",
          "Revise force constant and linear restoring force.",
        ],
        [
          "Energy conservation",
          "Track kinetic and potential energy exchange in a conservative system.",
          "Revise Work, Energy and Power before continuing.",
        ],
        [
          "Circular functions",
          "Use sine and cosine functions and their derivatives.",
          "Revise basic trigonometric identities and calculus of sine and cosine.",
        ],
        [
          "Graphs and radians",
          "Read a periodic graph and work confidently in radian measure.",
          "Revise angle measure in radians and periodic graph reading.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Six decisions cover most Simple Harmonic Motion questions. Select the representation before any algebra.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        ["Asked whether motion is SHM", "Find acceleration or restoring force versus displacement", "Stable equilibrium and linear proportionality"],
        ["Position at a given time", "Phase equation", "Time origin and phase convention"],
        ["Speed at a position", "Energy or v squared relation", "Amplitude and equilibrium origin"],
        ["Spring combination", "Effective restoring constant", "Which elements stretch by the same or different amount"],
        ["Pendulum", "Small-angle angular equation", "sin theta approximately equals theta, in radians"],
        ["Driven response", "Forcing, damping, resonance model", "Natural versus driving frequency and damping"],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis: name the first wrong decision",
      intro: "Use the evidence in the failed solution to choose one primary label before repeating practice.",
      columns: ["Primary label", "Evidence in a failed solution", "Corrective action"],
      rows: [
        ["Knowledge Gap", "Cannot say why a restoring force proportional to displacement produces sinusoidal motion", "Rebuild the equilibrium and restoring-law definitions before formula work"],
        ["Recall Gap", "Model chosen correctly, but the period relation or energy expression is unavailable", "Retrieve each relation with its variables, units and validity condition"],
        ["Execution Error", "Correct model, but phase, radians, amplitude origin or algebra is mishandled", "Rework the same problem with the phase and origin written out explicitly"],
        ["Decision / Selection Error", "Uses the time equation when an energy relation answers the question, or applies the small-angle pendulum result outside its range", "Mark the question signal in the method selector before calculating"],
        ["Needs Review", "Assumes a damping, driving or spring-arrangement condition the prompt never established", "Send the assumption and the full solution for academic review"],
      ],
      note: "Exactly one primary label per attempt. Contributing factors may be recorded separately.",
    },
    {
      id: "official-paper-handling",
      jump: true,
      slot: "practice",
      heading: "Official-paper handling",
      intro: "Practice with official papers only, and treat chapter tagging as a reviewed classification rather than an automatic one.",
      columns: ["Step", "What to do"],
      rows: [
        ["Source", "Use the official JEE Main question papers and the official JEE Advanced archive only"],
        ["Tagging", "Attach a question to this chapter only after academic review confirms the model actually tested"],
        ["Filters", "Expose filters for SHM identification, spring systems, pendulums, energy and damped or driven response only after reviewer verification"],
        ["Held back", "No counts, frequency claims, trend charts, predicted weightage or expected-question numbers are published"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "shm-defining-relation",
      expression: "a = -omega^2 x",
      meaning: "Defining linear-SHM relation about equilibrium.",
      variables: [
        { symbol: "a", meaning: "acceleration", unit: "m/s^2" },
        { symbol: "omega", meaning: "angular frequency", unit: "rad/s" },
        { symbol: "x", meaning: "displacement from equilibrium", unit: "m" },
      ],
      useWhen: "The restoring response is linear about a stable equilibrium.",
      commonTrap: "Using displacement from an arbitrary point instead of the equilibrium position.",
      accessibleText: "Acceleration equals minus omega squared times displacement from equilibrium.",
    },
    {
      id: "shm-displacement",
      expression: "x = A cos(omega t + phi)",
      meaning: "Displacement with amplitude A and phase constant phi.",
      variables: [
        { symbol: "A", meaning: "amplitude", unit: "m" },
        { symbol: "omega", meaning: "angular frequency", unit: "rad/s" },
        { symbol: "t", meaning: "time", unit: "s" },
        { symbol: "phi", meaning: "phase constant", unit: "rad" },
      ],
      useWhen: "Ideal linear SHM; the sine form is equivalent with another phase.",
      commonTrap: "Mixing degree and radian phase.",
      accessibleText: "Displacement equals amplitude times cosine of angular frequency times time plus phase constant.",
    },
    {
      id: "shm-velocity",
      expression: "v = -A omega sin(omega t + phi)",
      meaning: "Velocity for the chosen cosine convention.",
      variables: [
        { symbol: "v", meaning: "velocity", unit: "m/s" },
        { symbol: "A", meaning: "amplitude", unit: "m" },
        { symbol: "omega", meaning: "angular frequency", unit: "rad/s" },
      ],
      useWhen: "Same phase convention as the displacement equation.",
      commonTrap: "Memorising the sign independently of x(t) instead of differentiating it.",
      accessibleText: "Velocity equals minus amplitude times omega times sine of angular frequency times time plus phase constant.",
    },
    {
      id: "shm-speed-position",
      expression: "v^2 = omega^2 (A^2 - x^2)",
      meaning: "Speed-position relation.",
      variables: [
        { symbol: "v", meaning: "speed", unit: "m/s" },
        { symbol: "A", meaning: "amplitude", unit: "m" },
        { symbol: "x", meaning: "displacement from equilibrium", unit: "m" },
      ],
      useWhen: "Ideal SHM, when speed magnitude at a position is needed.",
      commonTrap: "Using it to determine velocity direction.",
      accessibleText: "Speed squared equals omega squared times amplitude squared minus displacement squared.",
    },
    {
      id: "spring-period",
      expression: "omega = square root of (k/m); T = 2 pi square root of (m/k)",
      meaning: "Mass-spring natural angular frequency and period.",
      variables: [
        { symbol: "k", meaning: "force constant", unit: "N/m" },
        { symbol: "m", meaning: "mass", unit: "kg" },
        { symbol: "T", meaning: "period", unit: "s" },
      ],
      useWhen: "Ideal mass, linear spring, negligible damping.",
      commonTrap: "Using a physical spring's mass without correction.",
      accessibleText: "Omega equals square root of k over m; period equals two pi times square root of m over k.",
    },
    {
      id: "pendulum-period",
      expression: "T = 2 pi square root of (l/g)",
      meaning: "Simple-pendulum period.",
      variables: [
        { symbol: "T", meaning: "period", unit: "s" },
        { symbol: "l", meaning: "string length", unit: "m" },
        { symbol: "g", meaning: "local acceleration due to gravity", unit: "m/s^2" },
      ],
      useWhen: "Small angular amplitude, point bob, light inextensible string, uniform local g.",
      commonTrap: "Claiming amplitude independence for large angles.",
      accessibleText: "Period equals two pi times square root of length over g.",
    },
    {
      id: "shm-energy",
      expression: "U = (1/2) m omega^2 x^2; K = (1/2) m omega^2 (A^2 - x^2)",
      meaning: "Potential and kinetic energies relative to equilibrium.",
      variables: [
        { symbol: "U", meaning: "potential energy", unit: "J" },
        { symbol: "K", meaning: "kinetic energy", unit: "J" },
        { symbol: "m", meaning: "mass", unit: "kg" },
      ],
      useWhen: "Ideal SHM with potential energy taken as zero at equilibrium.",
      commonTrap: "Confusing maximum kinetic energy with total energy plus potential energy.",
      accessibleText: "Potential energy equals half m omega squared x squared; kinetic energy equals half m omega squared times amplitude squared minus x squared.",
    },
    {
      id: "angular-shm-period",
      expression: "T = 2 pi square root of (I / kappa)",
      meaning: "Angular SHM period for restoring torque tau equals minus kappa theta.",
      variables: [
        { symbol: "I", meaning: "moment of inertia", unit: "kg m^2" },
        { symbol: "kappa", meaning: "torsional restoring constant", unit: "N m/rad" },
        { symbol: "T", meaning: "period", unit: "s" },
      ],
      useWhen: "Small angular displacement and a linear restoring torque.",
      commonTrap: "Using the linear mass-spring m over k relation without its rotational equivalents.",
      accessibleText: "Period equals two pi times square root of moment of inertia over the torsional restoring constant.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "energy-half-amplitude",
      prompt: "For an ideal oscillator with amplitude A, find the potential and kinetic energy, and the speed, at x = A/2.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Total energy is E = (1/2) m omega^2 A^2. This total does not depend on x; it depends only on amplitude." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "At x = A/2, potential energy is U = (1/2) m omega^2 (A/2)^2 = E/4." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Kinetic energy follows from energy conservation: K = E minus U = 3E/4." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Using v^2 = omega^2 (A^2 - x^2), the speed magnitude is |v| = omega times square root of (A^2 - A^2/4), which simplifies to (square root of 3 over 2) times omega times A." },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "Energy gives speed magnitude, not direction. The sign of velocity still depends on whether the oscillator is moving toward or away from equilibrium." },
          ],
        },
      ],
      answer: "K = 3E/4, U = E/4, and |v| = (square root of 3 over 2) times omega times A.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes and PI v1.1 diagnosis (B30, B13/B06)                */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "periodic-not-shm",
      mistake: "Calling every periodic motion SHM.",
      why: [
        { type: "paragraph", children: [{ text: "Periodic motion only repeats. SHM additionally requires a linear restoring relation about a stable equilibrium." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Find the acceleration or restoring force as a function of displacement and confirm it is proportional to displacement before naming the motion SHM." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "displacement-origin",
      mistake: "Measuring x from an endpoint instead of equilibrium.",
      why: [
        { type: "paragraph", children: [{ text: "Every SHM formula assumes displacement is measured from the equilibrium position, not from an extreme point of the motion." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify the equilibrium position first and define x relative to it before substituting into any formula." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "dropped-negative-sign",
      mistake: "Using a = -omega^2 x but dropping the negative sign in reasoning.",
      why: [
        { type: "paragraph", children: [{ text: "The negative sign is what makes the force a restoring force. Dropping it in reasoning, even while keeping it in the formula, leads to sign errors downstream." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Write x(t) once with an explicit phase convention and differentiate consistently to get velocity and acceleration." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "velocity-direction-from-squared-formula",
      mistake: "Reading velocity direction from the squared speed formula.",
      why: [
        { type: "paragraph", children: [{ text: "v^2 = omega^2 (A^2 - x^2) gives only magnitude. It cannot indicate whether the oscillator is moving toward or away from equilibrium." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use the signed velocity equation from the phase convention, or physical reasoning about the motion, to fix direction." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "pendulum-large-amplitude",
      mistake: "Applying the simple-pendulum period at large amplitude without qualification.",
      why: [
        { type: "paragraph", children: [{ text: "The pendulum period formula uses the small-angle approximation sin theta approximately equals theta. This approximation fails at large angular amplitude." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State the small-angle condition explicitly whenever the pendulum period formula is used." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "resonance-infinite-amplitude",
      mistake: "Treating resonance as an automatic infinite-amplitude result in a real damped system.",
      why: [
        { type: "paragraph", children: [{ text: "Real oscillators have damping that removes mechanical energy, which limits amplitude at resonance rather than letting it grow without bound." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Escalate the model boundary for review whenever damping and forcing assumptions are not explicitly stated in a question." }] },
      ],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "JEE Physics", url: "/jee/physics", relation: "up", description: "Subject hub for the Physics chapter set." },
    { label: "Laws of Motion", url: "/jee/physics/laws-of-motion", relation: "prerequisite", description: "Newton's second law underlies the SHM restoring relation." },
    { label: "Work, Energy and Power", url: "/jee/physics/work-energy-power", relation: "prerequisite", description: "Energy conservation underlies energy exchange in SHM." },
    { label: "Rotational Motion", url: "/jee/physics/rotational-motion", relation: "same-unit", description: "Shares angular quantities and small-oscillation reasoning with angular SHM." },
    { label: "Kinematics", url: "/jee/physics/kinematics", relation: "same-unit", description: "Shares graph reading and derivative reasoning with SHM's position and velocity equations." },
    { label: "Waves", url: "/jee/physics/waves", relation: "forward", description: "Extends oscillator behaviour to propagating disturbances; owns progressive and standing wave questions." },
    { label: "Alternating Current", url: "/jee/physics/alternating-current", relation: "forward", description: "Uses the oscillator analogy after circuit prerequisites are in place." },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Scope claims are verified against the current NTA JEE Main syllabus and the current JEE Advanced syllabus. NCERT Physics XI and XII provide the baseline academic treatment used to verify formula meaning and standard conditions. Official paper archives are the only paper sources used, and a question may be tagged to this chapter only after academic review. No weightage, frequency, trend, or prediction claim is made from any competitor material or from paper archives.",

  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: JEE Physics educator skilled in oscillations, graphs, and misconception diagnosis.",
    "Academically reviewed by: Unassigned. Required expertise: classical mechanics, oscillations, small-oscillation approximations, and resonance. Required qualification: postgraduate degree in Physics or a closely related discipline, or an engineering degree with documented oscillations and JEE teaching expertise.",
    "Last reviewed: pending completed academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus, NCERT Oscillations, and official paper archives.",
    "Review scope: SHM definition, phase signs, energy relations, spring and pendulum assumptions, Advanced extensions, worked reasoning, links, metadata, and schema parity.",
    "The assigned reviewer must be linked to a verified contributor profile before indexation. No Person schema is emitted before verification.",
  ],

  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  faqs: [
    {
      question: "What is the defining condition for linear SHM?",
      answer: [
        { type: "paragraph", children: [{ text: "Acceleration must be proportional to displacement from stable equilibrium and oppositely directed." }] },
      ],
    },
    {
      question: "Where is SHM speed maximum?",
      answer: [
        { type: "paragraph", children: [{ text: "At equilibrium, where the magnitude of displacement is zero." }] },
      ],
    },
    {
      question: "Why is the simple-pendulum formula approximate?",
      answer: [
        { type: "paragraph", children: [{ text: "Its derivation uses sin theta approximately equal to theta, which is valid only for small angular displacement measured in radians." }] },
      ],
    },
  ],

  meta: {
    title: "Simple Harmonic Motion for JEE: Phase, Energy, Methods",
    description:
      "Understand JEE SHM through restoring force, phase, energy, springs, pendulums, damping, resonance, conditional formulas, and mistake diagnosis.",
    ogTitle: "Simple Harmonic Motion for JEE",
    ogDescription: "A concept-first guide to SHM recognition, phase, energy, periods, and resonance.",
    ogType: "article",
  },
};

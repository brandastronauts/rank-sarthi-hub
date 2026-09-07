import type { ChapterContent } from "@/content/types";

/**
 * Waves — T06 production content (new package, 7 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe, mirroring the
 * accepted Electrostatics package.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - Doppler in sound is scoped to JEE Advanced only, per the official
 *   syllabus mapping; it is not asserted as explicit JEE Main 2026 scope.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/waves on noindex until review is recorded.
 */
export const jeePhysicsWaves: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Waves",
  slug: "waves",
  url: "/jee/physics/waves",
  canonicalIntent:
    "Translate a wave between mathematical form, phase picture, boundary behaviour, standing pattern and sound application, and choose the correct method for a given wave problem.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Doppler in sound is marked Advanced-only scope",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A mechanical wave is a travelling disturbance in which neighbouring parts of a medium oscillate with related phases. The wave transports energy and information while the medium's particles oscillate about equilibrium.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "To solve a wave problem, identify the propagation direction, particle-motion direction, phase relation and boundary conditions before choosing a formula.",
          bold: true,
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ text: "Use this page to answer three questions:" }],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "What does the official syllabus actually require for a mechanical wave?" }],
        [{ text: "Which boundary or phase model should I use for this problem?" }],
        [{ text: "If I get it wrong, what kind of gap should I repair?" }],
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
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "prerequisite",
      description: "Phase, angular frequency and oscillation before extending to travelling disturbances.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Force balance reasoning used to derive wave speed on a string.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Energy reasoning used for wave transport and standing-wave patterns.",
    },
  ],

  syllabusMapping: {
    unit: "Waves",
    topics: [
      "Wave motion, longitudinal and transverse waves",
      "Travelling-wave speed and displacement relation",
      "Superposition of waves",
      "Reflection of waves",
      "Standing waves in strings and organ pipes",
      "Fundamental mode and harmonics",
      "Beats",
      "Speed of sound in gases (JEE Advanced)",
      "Doppler effect in sound (JEE Advanced)",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35 / B40)                                    */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "source-sets-frequency",
      title: "1. The source sets oscillation frequency",
      keyIdea: "The source fixes frequency; the medium and its state fix speed; wavelength follows from both.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For a driven linear medium, the source supplies the frequency. The medium and its state determine the wave speed. Wavelength follows from v = f lambda.",
            },
          ],
        },
      ],
    },
    {
      id: "phase-map",
      title: "2. A travelling-wave equation is a phase map",
      keyIdea: "The sign linking kx and omega t identifies which way the wave actually propagates.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In y = A sin(kx - omega t + phi), points with equal phase have equal displacement and local oscillation state. The sign connecting kx and omega t identifies the propagation direction.",
            },
          ],
        },
      ],
    },
    {
      id: "superposition-patterns",
      title: "3. Superposition creates patterns",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Displacements add. Two opposite travelling waves of the same frequency and suitable amplitude can form a standing wave, with nodes fixed in space and no net travelling pattern.",
            },
          ],
        },
      ],
    },
    {
      id: "boundaries-select-modes",
      title: "4. Boundaries select allowed modes",
      keyIdea: "A fixed end is a displacement node; an ideal open pipe end is a displacement antinode.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A fixed string end is a displacement node. An open pipe end is a displacement antinode in the ideal model, while a closed pipe end is a displacement node. These conditions decide the allowed wavelengths.",
            },
          ],
        },
      ],
    },
    {
      id: "beats-time-domain",
      title: "5. Beats are time-domain interference",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Two nearby frequencies produce a slowly varying resultant amplitude. The beat frequency is the magnitude of their frequency difference under the usual approximation.",
            },
          ],
        },
      ],
    },
    {
      id: "doppler-rate",
      title: "6. Doppler is a rate-of-wavefront-arrival problem",
      keyIdea: "Fix the medium frame and the approach-or-recession direction before assigning any sign.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For sound, choose the medium frame, establish whether source and observer approach or recede, and then assign signs. A memorised sign pattern without a physical sketch is fragile.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "The Doppler effect in sound is explicit JEE Advanced scope. It is not asserted here as explicit JEE Main 2026 scope.",
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
          "How a travelling disturbance carries phase and energy through a medium, how boundaries create standing patterns, and how nearby frequencies or relative motion change what is heard.",
        ],
        [
          "What is the central method choice?",
          "Hold phase constant to read propagation direction, sketch nodes and antinodes before selecting a resonance mode, use beat reasoning for two close frequencies, and use Doppler only after a direction sketch.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing particle speed with wave speed, misreading the phase-direction sign, using the wrong harmonic family for a pipe, and assigning Doppler signs from memory instead of a sketch.",
        ],
        [
          "What should come before Waves?",
          "Simple Harmonic Motion, force balance from Laws of Motion, and energy reasoning from Work, Energy and Power.",
        ],
        [
          "What comes after it?",
          "Optics extends wave reasoning to light, and Kinetic Theory of Gases connects to the speed of sound in a gas.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Waves",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Wave nature and travelling waves",
          "Wave motion, longitudinal and transverse waves, travelling-wave speed and displacement relation are explicitly listed.",
          "Plane longitudinal and transverse waves are explicitly listed.",
          "Learn to read a phase map before applying any speed formula.",
        ],
        [
          "Superposition and reflection",
          "Superposition of waves and reflection of waves are explicitly listed.",
          "Superposition, progressive and stationary waves are explicitly listed.",
          "Standing waves are a superposition outcome, not a separate wave type.",
        ],
        [
          "Standing waves in strings and pipes",
          "Standing waves in strings and organ pipes, fundamental and harmonics are explicitly listed.",
          "Strings and air columns, and resonance, are explicitly listed.",
          "Match the boundary condition to the correct harmonic family before using a mode formula.",
        ],
        [
          "Beats",
          "Beats are explicitly listed.",
          "Beats are explicitly listed.",
          "Use the magnitude of the frequency difference under the standard approximation.",
        ],
        [
          "Sound speed and Doppler effect",
          "Not asserted as explicit JEE Main 2026 scope in this mapping.",
          "Speed of sound in gases and the Doppler effect in sound are explicitly listed.",
          "Treat Doppler as Advanced scope unless a future official Main syllabus states otherwise.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Waves",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Sine and cosine graphs",
          "Read amplitude, period and phase directly off a sinusoidal graph.",
          "Revise graph reading for trigonometric functions.",
        ],
        [
          "Angular frequency, period and frequency",
          "Convert between omega, T and f without hesitation.",
          "Revise the definitions and their SI units.",
        ],
        [
          "Phase in simple harmonic motion",
          "Explain what a phase difference means physically, not just algebraically.",
          "Revisit Simple Harmonic Motion phase and displacement relations.",
        ],
        [
          "Force balance and energy reasoning",
          "Derive a speed relation from a restoring-force or energy argument.",
          "Revise Newton's laws and work-energy reasoning.",
        ],
        [
          "Particle velocity versus wave velocity",
          "Explain why a particle in the medium and the disturbance itself can move at different speeds and in different directions.",
          "Work through a labelled travelling-wave diagram before proceeding.",
        ],
      ],
      note: "Revise Simple Harmonic Motion, Laws of Motion and Work, Energy and Power where required.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Situation", "First question", "Method"],
      rows: [
        [
          "Given y(x, t)",
          "Which way does constant phase move?",
          "Hold phase constant and inspect dx/dt.",
        ],
        [
          "String or pipe resonance",
          "What are the endpoint conditions?",
          "Sketch nodes and antinodes before selecting a mode.",
        ],
        [
          "Two close frequencies",
          "Is a slow envelope observed?",
          "Use beat reasoning.",
        ],
        [
          "Reflection",
          "Is the boundary fixed or free?",
          "Determine the phase change from the boundary condition.",
        ],
        [
          "Source or observer motion",
          "What is stationary relative to the medium?",
          "Use Doppler only after a direction sketch.",
        ],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis for Waves",
      columns: ["Primary label", "Use when the first failure is"],
      rows: [
        [
          "Knowledge Gap",
          "Phase, wave direction, boundary condition, or standing-wave meaning is not understood.",
        ],
        [
          "Recall Gap",
          "A speed, mode, beat, or Doppler relation was not recalled.",
        ],
        [
          "Execution Error",
          "Mode number, sign, square root, or arithmetic failed after valid setup.",
        ],
        [
          "Decision / Selection Error",
          "The wrong boundary model, direction, pipe family, or Doppler sign logic was selected.",
        ],
        [
          "Needs Review",
          "The work does not expose a reliable first failure.",
        ],
      ],
    },
    {
      id: "official-paper-practice",
      jump: true,
      slot: "practice",
      heading: "Official-paper practice",
      columns: ["Guidance", "Detail"],
      rows: [
        [
          "Sources",
          "Use official JEE Main and JEE Advanced papers.",
        ],
        [
          "What to record",
          "For each reviewed item, record wave type, medium, direction, phase cue, boundary conditions, selected mode and first failure.",
        ],
        [
          "Scope discipline",
          "Keep Doppler items marked Advanced scope unless a future official Main syllabus states otherwise.",
        ],
        [
          "What is not published",
          "No frequency table from an unreviewed question sample.",
        ],
      ],
      note: "Classification of a question by chapter and subtopic happens only after human academic review.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula records (B29)                                               */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "travelling-wave",
      expression: "y = A sin(kx - omega t + phi)",
      meaning: "Describes a harmonic wave travelling in the +x direction.",
      variables: [
        { symbol: "A", meaning: "amplitude", unit: "m" },
        { symbol: "y", meaning: "displacement", unit: "m" },
        { symbol: "x", meaning: "position", unit: "m" },
        { symbol: "k", meaning: "angular wave number", unit: "rad/m" },
        { symbol: "omega", meaning: "angular frequency", unit: "rad/s" },
        { symbol: "phi", meaning: "initial phase", unit: "rad" },
      ],
      useWhen: "Modelling a sinusoidal progressive wave.",
      commonTrap: "Reading particle velocity as wave speed.",
      accessibleText:
        "y equals A sine of the quantity k x minus omega t plus phi, describing a harmonic wave travelling in the positive x direction.",
    },
    {
      id: "angular-rates",
      expression: "k = 2 pi / lambda ;  omega = 2 pi f",
      meaning: "Connects the spatial and temporal angular rates of the wave to wavelength and frequency.",
      variables: [
        { symbol: "lambda", meaning: "wavelength", unit: "m" },
        { symbol: "f", meaning: "frequency", unit: "Hz" },
      ],
      useWhen: "Any harmonic wave.",
      commonTrap: "Mixing cycles with radians.",
      accessibleText:
        "k equals two pi over lambda, and omega equals two pi times f.",
    },
    {
      id: "phase-speed",
      expression: "v = omega / k = f lambda",
      meaning: "Gives the phase speed of the wave.",
      variables: [{ symbol: "v", meaning: "phase speed", unit: "m/s" }],
      useWhen: "A nondispersive relation for the stated wave.",
      commonTrap: "Assuming frequency changes wave speed in a fixed ideal medium.",
      accessibleText: "v equals omega over k, which equals f times lambda.",
    },
    {
      id: "string-speed",
      expression: "v = sqrt(T / mu)",
      meaning: "Gives the speed of small transverse waves on an ideal stretched string.",
      variables: [
        { symbol: "T", meaning: "tension", unit: "N" },
        { symbol: "mu", meaning: "linear mass density", unit: "kg/m" },
      ],
      useWhen: "Small transverse waves on a uniform taut string.",
      commonTrap: "Using total mass instead of linear density.",
      accessibleText: "v equals the square root of T over mu.",
    },
    {
      id: "fixed-string-modes",
      expression: "f_n = (n / 2L) sqrt(T / mu)",
      meaning: "Gives the normal-mode frequencies of a string fixed at both ends.",
      variables: [
        { symbol: "f_n", meaning: "nth mode frequency", unit: "Hz" },
        { symbol: "L", meaning: "string length", unit: "m" },
        { symbol: "n", meaning: "mode number, n = 1, 2, ..." },
      ],
      useWhen: "A string fixed at both ends.",
      commonTrap: "Using closed-pipe mode rules on a string problem.",
      accessibleText:
        "f sub n equals n over two L, times the square root of T over mu.",
    },
    {
      id: "open-pipe-modes",
      expression: "f_n = n v / (2L)",
      meaning: "Gives the ideal normal-mode frequencies of a pipe open at both ends.",
      variables: [
        { symbol: "f_n", meaning: "nth mode frequency", unit: "Hz" },
        { symbol: "v", meaning: "speed of sound in the gas", unit: "m/s" },
        { symbol: "L", meaning: "pipe length", unit: "m" },
      ],
      useWhen: "Both ends open, end correction neglected.",
      commonTrap: "Treating pressure and displacement nodes as identical.",
      accessibleText: "f sub n equals n v over two L.",
    },
    {
      id: "closed-pipe-modes",
      expression: "f_n = (2n - 1) v / (4L)",
      meaning: "Gives the ideal normal-mode frequencies of a pipe closed at one end.",
      variables: [{ symbol: "n", meaning: "mode number, n = 1, 2, ..." }],
      useWhen: "One end closed, end correction neglected.",
      commonTrap: "Including even harmonics in the ideal one-closed-end model.",
      accessibleText: "f sub n equals the quantity two n minus one, times v, over four L.",
    },
    {
      id: "beat-frequency",
      expression: "f_b = |f_1 - f_2|",
      meaning: "Gives the beat frequency produced by two nearby coherent frequencies.",
      variables: [{ symbol: "f_b", meaning: "beat frequency", unit: "Hz" }],
      useWhen: "Nearby coherent audible frequencies.",
      commonTrap: "Confusing the beat rate with the average pitch.",
      accessibleText: "f sub b equals the absolute value of f one minus f two.",
    },
    {
      id: "doppler-sound",
      expression: "f' = f (v ± v_o) / (v ∓ v_s)",
      meaning: "Gives the classical Doppler-shifted frequency heard for sound, an Advanced-scope relation.",
      variables: [
        { symbol: "f'", meaning: "observed frequency", unit: "Hz" },
        { symbol: "v", meaning: "speed of sound in the medium", unit: "m/s" },
        { symbol: "v_o", meaning: "observer speed relative to the medium", unit: "m/s" },
        { symbol: "v_s", meaning: "source speed relative to the medium", unit: "m/s" },
      ],
      useWhen: "Straight-line source and observer motion in a medium, JEE Advanced scope.",
      commonTrap: "Choosing signs from memory instead of from an approach-or-recession sketch.",
      accessibleText:
        "f prime equals f times the quantity v plus or minus v sub o, over the quantity v minus or plus v sub s.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31 via workedExamples)                           */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-tension-doubles",
      prompt:
        "Worked reasoning: a string of fixed length and linear density vibrates in the same mode. Its tension changes from T to 2T. How does the frequency change?",
      answer: "The frequency rises by a factor of the square root of 2, not by a factor of 2.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "For a fixed mode and length, f_n is proportional to v." }],
            [{ text: "Wave speed on the ideal string is v = sqrt(T / mu)." }],
            [{ text: "Therefore f'_n / f_n = sqrt(2T / T) = sqrt(2)." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "The common error comes from overlooking that tension sits inside a square root, so students wrongly double the frequency instead of scaling it by the square root of 2.",
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
      id: "particle-speed-as-wave-speed",
      mistake: "Calling particle speed the wave speed",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Particle motion is local; phase propagates through the medium." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Separately compute the local particle velocity and the phase speed before comparing them." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "misread-direction-sign",
      mistake: "Reading kx + omega t as motion in the +x direction",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The propagation direction follows from tracking a point of constant phase, not from the sign alone by inspection." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Track a point of constant phase; for kx + omega t it moves toward -x." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "wrong-harmonic-family",
      mistake: "Using every integer harmonic for a closed pipe",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The ideal one-closed-end pipe supports odd harmonics only." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Sketch the boundary condition and confirm which harmonic family it produces before applying a mode formula." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "pressure-displacement-node-swap",
      mistake: "Interchanging pressure and displacement nodes",
      why: [
        {
          type: "paragraph",
          children: [{ text: "They are complementary in air-column standing waves." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "State explicitly which kind of node or antinode the problem is asking about." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "doppler-sign-memory",
      mistake: "Using Doppler signs by visual memory",
      why: [
        {
          type: "paragraph",
          children: [{ text: "A memorised sign pattern without a physical sketch is fragile." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Define the medium frame and whether source and observer approach or recede before assigning any sign." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "standing-wave-energy-confusion",
      mistake: "Assuming a standing wave transports the same net energy pattern as one travelling wave",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The ideal standing pattern has fixed nodes and antinodes." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Treat a standing wave as a superposition outcome with a fixed spatial pattern, not as one travelling disturbance." }],
        },
      ],
      errorType: "knowledge-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B21)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is a mechanical wave, in the JEE sense?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A mechanical wave is a propagating disturbance whose particles oscillate locally while energy and phase move through the medium. Identifying propagation direction, particle-motion direction, phase relation and boundary conditions comes before choosing a formula.",
            },
          ],
        },
      ],
    },
    {
      question: "How do I find the direction a wave is travelling from its equation?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Hold the phase kx - omega t + phi constant and inspect how x must change as t increases. The sign connecting kx and omega t identifies the propagation direction; do not read the direction from the sign alone by inspection.",
            },
          ],
        },
      ],
    },
    {
      question: "Why do closed pipes support only odd harmonics in the ideal model?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A closed pipe end is a displacement node while an open end is a displacement antinode in the ideal model. Only odd multiples of the quarter-wavelength condition satisfy both boundary conditions together, so the ideal one-closed-end pipe supports odd harmonics.",
            },
          ],
        },
      ],
    },
    {
      question: "Is the Doppler effect in sound part of JEE Main scope?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The Doppler effect in sound and the speed of sound in gases are explicitly listed in the JEE Advanced 2026 syllabus. This page marks Doppler as Advanced scope and does not assert it as explicit JEE Main 2026 scope.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the correct way to find the beat frequency?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Beat frequency is the magnitude of the difference between two nearby coherent frequencies, f_b = |f_1 - f_2|, under the usual approximation. It should not be confused with the average pitch heard.",
            },
          ],
        },
      ],
    },
    {
      question: "If tension in a string doubles, does the frequency double?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Wave speed on an ideal string is v = sqrt(T / mu), so doubling tension scales the frequency by the square root of 2, not by 2, for a fixed mode and length.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Related learning path (B36) — rendered only for built destinations  */
  /* ------------------------------------------------------------------ */
  relatedChapters: [
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "prerequisite",
      description: "Phase and oscillation before extending to travelling disturbances.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Force balance reasoning used to derive wave speed on a string.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Energy reasoning used for wave transport and standing-wave patterns.",
    },
    {
      label: "Kinetic Theory of Gases",
      url: "/jee/physics/kinetic-theory-of-gases",
      relation: "related",
      description: "Connect molecular motion to the speed of sound in a gas.",
    },
    {
      label: "Optics",
      url: "/jee/physics/optics",
      relation: "forward",
      description: "Extend wave reasoning from mechanical waves to light.",
    },
  ],
  links: [
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official syllabus hub.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Physics subject hub.",
    },
    {
      label: "JEE Physics previous-year papers",
      url: "/jee/previous-year-papers/physics",
      relation: "related",
      description: "Official-paper practice path.",
    },
    {
      label: "JEE mock tests",
      url: "/jee/mock-tests",
      relation: "related",
      description: "Mixed application practice.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. Doppler and speed-of-sound formulas are scoped to JEE Advanced only, matching the official syllabus wording. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a physics education writer experienced in converting senior-secondary Physics into student-facing JEE learning structures.",
    "Academic reviewer: postgraduate qualification in Physics or a closely related field, plus recent JEE Physics teaching or curriculum-review experience with oscillations, waves and acoustics.",
    "Independent checker: a physics educator or subject editor who verifies equations, boundary conditions, direction signs, SI units, worked reasoning and mobile rendering separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Waves for JEE: Phase, Standing Waves, Sound and Formulas",
    description:
      "Understand Waves for JEE Main and Advanced through phase, boundary conditions, strings, pipes, beats and Doppler, with formula conditions and traps.",
    ogTitle: "Waves for JEE, From Phase to Boundary Conditions",
    ogDescription:
      "Learn progressive and standing waves through a chapter-specific model, official scope, formulas, reasoning and error diagnosis.",
  },
};

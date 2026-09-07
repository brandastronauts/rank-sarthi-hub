import type { ChapterContent } from "@/content/types";

/**
 * Electromagnetic Induction — T06 production content (approved package, 7 September 2026).
 *
 * Data only. Every element below maps onto the existing ChapterContent
 * contract and the T06 recipe, following the same discipline as
 * jee-physics-electrostatics.ts.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/electromagnetic-induction on noindex until review is recorded.
 * - Detailed sinusoidal circuit behaviour is deliberately routed to
 *   Alternating Current; this page owns flux change, direction and inductance.
 */
export const jeePhysicsElectromagneticInduction: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Electromagnetic Induction",
  slug: "electromagnetic-induction",
  url: "/jee/physics/electromagnetic-induction",
  canonicalIntent:
    "Identify how magnetic flux changes, determine the induced emf and direction, then connect induction with force, energy and inductance.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Direction method paired with every flux-change situation",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Electromagnetic induction occurs when magnetic flux linked with a circuit changes. Faraday's law gives the induced emf; Lenz's law gives the direction by requiring the induced response to oppose the change that produces it. The change can come from field strength, loop area, orientation, motion, or more than one of these together.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page owns flux change, induced emf, direction, motional emf, eddy currents and inductance. Detailed sinusoidal circuit behaviour belongs on ",
        },
        { text: "Alternating Current", href: "/jee/physics/alternating-current" },
        { text: "." },
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
        [{ text: "What does the official syllabus actually require?" }],
        [{ text: "How do I find the flux change, and which direction method applies?" }],
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
      label: "Magnetism",
      url: "/jee/physics/magnetism",
      relation: "prerequisite",
      description: "Magnetic field sources, field effects and force on a current-carrying conductor.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Ohm's and Kirchhoff's laws needed to close the induced-circuit response.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Dot products, oriented area vectors and flux-style reasoning.",
    },
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
  ],

  syllabusMapping: {
    unit: "Electromagnetic Induction",
    topics: [
      "Faraday's law of electromagnetic induction",
      "Induced emf and induced current",
      "Lenz's law and direction of the induced response",
      "Eddy currents",
      "Self-inductance",
      "Mutual inductance",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35 / B40): flux, change, direction, response, energy */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "circuit-orientation",
      title: "1. Define the circuit and area orientation",
      keyIdea: "One chosen loop direction fixes the positive normal, the flux sign and the current sign together.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Choose a loop direction. The right-hand rule then defines the positive area normal. Flux sign, induced emf sign, and current direction must all use this one orientation.",
            },
          ],
        },
      ],
    },
    {
      id: "magnetic-flux",
      title: "2. Find magnetic flux",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Flux is the surface integral of the field component normal to the surface. In a uniform field over a planar loop, it becomes B A cos(theta).",
            },
          ],
        },
      ],
    },
    {
      id: "what-changes",
      title: "3. Identify what changes",
      keyIdea: "Motion produces emf only if it changes flux, or if magnetic force separates charge along a suitable conductor geometry.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Ask whether B, A, theta, the number of turns, or the overlap between field region and loop changes. Motion creates emf only when it changes flux or when magnetic force separates charge along a conductor in a compatible geometry.",
            },
          ],
        },
      ],
    },
    {
      id: "faraday-magnitude",
      title: "4. Use Faraday for magnitude",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The induced emf depends on the rate of change of flux linkage, not the flux alone. A large constant flux produces no induced emf.",
            },
          ],
        },
      ],
    },
    {
      id: "lenz-direction",
      title: "5. Use Lenz for direction",
      keyIdea: "The induced current opposes the change in flux, not necessarily the original field itself.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Determine whether the original flux through the loop is increasing or decreasing. The induced current creates a field opposing that change. It does not simply oppose the original field in every case.",
            },
          ],
        },
      ],
    },
    {
      id: "circuit-response",
      title: "6. Close the circuit response",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "If the circuit is closed and resistance is known, induced current follows from the circuit model. That current can create a magnetic force that opposes the mechanical cause of the flux change.",
            },
          ],
        },
      ],
    },
    {
      id: "energy-check",
      title: "7. Check energy",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "External mechanical work can become electrical energy and heat. Lenz's law is the directional expression of this energy-conservation requirement.",
            },
          ],
        },
      ],
    },
    {
      id: "inductance",
      title: "8. Treat inductance as stored magnetic response",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Self-inductance relates a circuit's own current to flux linkage and opposing emf. Mutual inductance relates changing current in one circuit to emf in another.",
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
          "How magnetic flux change produces an induced emf, how to find its direction, and how induction connects to circuit response, energy and inductance.",
        ],
        [
          "What are the two governing laws?",
          "Faraday's law gives the magnitude of the induced emf from the rate of change of flux linkage. Lenz's law gives the direction, requiring the induced response to oppose the change producing it.",
        ],
        [
          "What is the central method choice?",
          "Identify which variable changes flux, differentiate flux linkage for magnitude, then use Lenz's law or the magnetic force on positive charge for direction.",
        ],
        [
          "Where do most mistakes begin?",
          "Measuring flux angle from the plane instead of the normal, assuming any flux (not its change) induces emf, and mixing loop orientation between flux and current.",
        ],
        [
          "What should come before Electromagnetic Induction?",
          "Magnetism, Current Electricity and Electrostatics, for magnetic fields, circuit laws and oriented-area reasoning.",
        ],
        [
          "What comes after it?",
          "Alternating Current continues into time-varying circuit behaviour, generators and transformers.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Electromagnetic Induction",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Induction laws",
          "Faraday's law, induced emf and current, and Lenz's law are explicitly listed.",
          "Faraday's and Lenz's laws are explicitly listed.",
          "Learn flux and its rate of change before direction reasoning.",
        ],
        [
          "Eddy currents",
          "Eddy currents are explicitly listed.",
          "The cited Advanced lines do not separately name eddy currents.",
          "Treat eddy currents as an application of the same flux-change and Lenz's-law reasoning.",
        ],
        [
          "Inductance",
          "Self and mutual inductance are explicitly listed.",
          "Self and mutual inductance are explicitly listed.",
          "Both documents expect the same core inductance relationships.",
        ],
        [
          "Route boundary with circuits",
          "The same official Main unit continues into alternating current, generator and transformer topics.",
          "Advanced lists a wider circuit set, including RC, LR, LC and series LCR circuits with DC and AC sources.",
          "Keep detailed sinusoidal circuit analysis on the Alternating Current page; this page owns flux change, direction and inductance definitions.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Electromagnetic Induction",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Dot products and oriented area vectors",
          "Use dot products and oriented area vectors to describe a surface's normal direction.",
          "Revise vector dot products and the right-hand rule for area vectors.",
        ],
        [
          "Magnetic field",
          "Find or interpret a magnetic field from a given source or configuration.",
          "Revise Magnetism: field sources and field effects.",
        ],
        [
          "Circuit laws",
          "Apply Ohm's and Kirchhoff's laws to a simple circuit.",
          "Revise Current Electricity before closing an induced-circuit response.",
        ],
        [
          "Magnetic force on a conductor",
          "Use the magnetic force on a current-carrying conductor.",
          "Revise force on a moving charge and on a current element in a magnetic field.",
        ],
        [
          "Mechanical and electrical energy tracking",
          "Track mechanical and electrical energy through a system without losing a term.",
          "Revise work-energy reasoning and electrical power in a resistor.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      intro: "Match the situation to a first method and a direction method before calculating.",
      columns: ["Situation", "First method", "Direction method"],
      rows: [
        [
          "Stationary loop, changing B",
          "Flux derivative",
          "Lenz's law with chosen area normal",
        ],
        [
          "Rotating loop",
          "Differentiate B A cos(theta(t))",
          "Track flux-linkage sign",
        ],
        [
          "Sliding rod on rails",
          "Motional emf or flux rate",
          "Magnetic force on positive charge, then energy check",
        ],
        [
          "Changing current in same coil",
          "Self-inductance",
          "Induced emf opposes current change",
        ],
        [
          "Coupled coils",
          "Mutual inductance",
          "Use winding orientation or dot convention if provided",
        ],
        [
          "Conducting bulk moving through field",
          "Eddy-current reasoning",
          "Oppose the change and identify heating or damping",
        ],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "Diagnose your Electromagnetic Induction weakness with evidence",
      intro:
        "One wrong answer does not always reveal the cause. Use the smallest Preparation Intelligence v1.1 label supported by what the student actually did.",
      columns: ["PI v1.1 label", "Use when the first failure is"],
      rows: [
        [
          "Knowledge Gap",
          "Flux, Faraday, Lenz, motional emf, inductance, or energy response is not understood.",
        ],
        [
          "Recall Gap",
          "A flux, emf, inductance, or transient relation was not retrieved.",
        ],
        [
          "Execution Error",
          "Derivative, orientation sign, circuit current, or algebra failed after valid setup.",
        ],
        [
          "Decision / Selection Error",
          "Wrong surface, flux-changing variable, direction method, or EMI versus AC model was selected.",
        ],
        [
          "Needs Review",
          "The written evidence cannot support one reliable primary label.",
        ],
      ],
    },
    {
      id: "official-paper-practice",
      jump: true,
      slot: "practice",
      heading: "Official-paper practice",
      columns: ["Step", "What to record"],
      rows: [
        ["1", "Circuit boundary"],
        ["2", "Positive area normal"],
        ["3", "Flux expression"],
        ["4", "Changing variable"],
        ["5", "Induced direction"],
        ["6", "Circuit response"],
        ["7", "Energy check"],
      ],
      note:
        "Use official papers and keep AC-specific questions with the Alternating Current route unless induction is the central tested idea. Publish no count or trend.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "flux-integral",
      expression: "Phi_B = integral(B dot dA)",
      meaning: "Magnetic flux through an oriented surface bounded by the loop.",
      variables: [
        { symbol: "Phi_B", meaning: "magnetic flux", unit: "Wb" },
        { symbol: "B", meaning: "magnetic field", unit: "T" },
        { symbol: "A", meaning: "surface area", unit: "m^2" },
      ],
      useWhen: "Any defined surface bounded by the loop.",
      commonTrap: "Using total field instead of the normal component.",
      accessibleText:
        "Magnetic flux equals the surface integral of B dot d A over the oriented surface bounded by the loop.",
    },
    {
      id: "flux-planar",
      expression: "Phi_B = B A cos(theta)",
      meaning: "Uniform planar-loop flux, with theta measured between B and the area normal.",
      variables: [
        { symbol: "theta", meaning: "angle between B and area normal" },
      ],
      useWhen: "Uniform B over a planar area.",
      commonTrap: "Measuring theta from the plane instead of the normal.",
      accessibleText:
        "Uniform-field planar flux equals B times A times cosine of theta, where theta is measured from the area normal.",
    },
    {
      id: "faraday-lenz",
      expression: "E = -N dPhi_B/dt",
      meaning: "Faraday-Lenz law for N turns: induced emf from the rate of change of flux linkage.",
      variables: [
        { symbol: "E", meaning: "induced emf", unit: "V" },
        { symbol: "N", meaning: "number of turns" },
        { symbol: "Phi_B", meaning: "flux per turn", unit: "Wb" },
      ],
      useWhen: "Flux per turn is consistently defined.",
      commonTrap: "Treating the minus sign as an arithmetic decoration rather than a direction statement.",
      accessibleText:
        "Induced emf equals minus N times the rate of change of flux per turn.",
    },
    {
      id: "motional-emf",
      expression: "E = B l v",
      meaning: "Motional emf magnitude for a straight rod moving in a magnetic field.",
      variables: [
        { symbol: "B", meaning: "magnetic field", unit: "T" },
        { symbol: "l", meaning: "rod length", unit: "m" },
        { symbol: "v", meaning: "rod speed", unit: "m/s" },
      ],
      useWhen:
        "Straight rod with mutually perpendicular B, rod, and velocity in the standard geometry.",
      commonTrap: "Applying it without checking orientation or circuit path.",
      accessibleText: "Motional emf magnitude equals B times l times v.",
    },
    {
      id: "self-inductance",
      expression: "L = N Phi / I",
      meaning: "Self-inductance for a linear magnetic system.",
      variables: [
        { symbol: "L", meaning: "self-inductance", unit: "H" },
        { symbol: "I", meaning: "current", unit: "A" },
      ],
      useWhen: "Flux linkage is proportional to current.",
      commonTrap: "Treating L as universal when geometry or medium changes.",
      accessibleText: "Self-inductance equals N times flux divided by current.",
    },
    {
      id: "self-induced-emf",
      expression: "E_L = -L dI/dt",
      meaning: "Self-induced emf for a fixed inductance.",
      variables: [
        { symbol: "E_L", meaning: "self-induced emf", unit: "V" },
      ],
      useWhen: "Fixed inductance.",
      commonTrap: "Saying an inductor opposes current instead of change in current.",
      accessibleText: "Self-induced emf equals minus L times the rate of change of current.",
    },
    {
      id: "inductor-energy",
      expression: "U_B = (1/2) L I^2",
      meaning: "Energy stored in an inductor's magnetic field for a linear inductor.",
      variables: [
        { symbol: "U_B", meaning: "stored magnetic energy", unit: "J" },
      ],
      useWhen: "Linear inductor.",
      commonTrap: "Omitting energy during circuit transients.",
      accessibleText: "Stored magnetic energy equals half L times I squared.",
    },
    {
      id: "mutual-inductance",
      expression: "E_2 = -M dI_1/dt",
      meaning: "Mutual-induction emf for coupled circuits with fixed mutual inductance.",
      variables: [
        { symbol: "M", meaning: "mutual inductance", unit: "H" },
        { symbol: "I_1", meaning: "current in the first circuit", unit: "A" },
      ],
      useWhen: "Coupled circuits with fixed mutual inductance.",
      commonTrap: "Guessing polarity without winding information.",
      accessibleText:
        "Emf induced in the second circuit equals minus M times the rate of change of current in the first circuit.",
    },
    {
      id: "lr-growth",
      expression: "I(t) = (E / R) (1 - e^(-tR/L))",
      meaning: "Ideal LR current growth after a DC step, Advanced-linked scope.",
      variables: [
        { symbol: "I(t)", meaning: "current at time t", unit: "A" },
        { symbol: "R", meaning: "resistance", unit: "ohm" },
        { symbol: "L", meaning: "inductance", unit: "H" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "Series ideal LR circuit with constant DC source.",
      commonTrap: "Using it for an AC steady state or an arbitrary switching network.",
      accessibleText:
        "Current at time t equals E over R times one minus e to the power minus t R over L.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31 via workedExamples)                           */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-sliding-rod",
      prompt:
        "Worked reasoning: a conducting rod of length l slides at speed v on ideal rails in a uniform magnetic field perpendicular to the loop. Total circuit resistance is R. Connect motional emf with energy conservation.",
      answer:
        "External mechanical input power equals electrical heating in the ideal model: F v = I^2 R = B^2 l^2 v^2 / R.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "The loop area increases at rate dA/dt = l v." }],
            [{ text: "Flux changes at dPhi/dt = B l v, so emf magnitude is E = B l v." }],
            [{ text: "The induced current magnitude is I = B l v / R." }],
            [{ text: "Lenz's law makes the magnetic force oppose the rod's motion." }],
            [{ text: "Its magnitude is F = B I l = B^2 l^2 v / R." }],
            [{ text: "External power required for constant speed is F v = B^2 l^2 v^2 / R." }],
            [{ text: "Joule power is I^2 R = B^2 l^2 v^2 / R." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "Mechanical input power equals electrical heating in the ideal model. This energy check confirms both magnitude and direction.",
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
      id: "any-flux-induces-emf",
      mistake: "Saying any magnetic flux induces emf",
      why: [
        { type: "paragraph", children: [{ text: "Emf depends on the rate of change of flux, not the flux value itself." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check whether flux is actually changing with time before applying Faraday's law." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "angle-from-plane",
      mistake: "Measuring flux angle from the loop plane",
      why: [
        { type: "paragraph", children: [{ text: "The flux formula uses the angle from the area normal, not the plane." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Measure theta from the area normal before substituting into B A cos(theta)." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "opposes-original-field",
      mistake: "Saying induced field always opposes the original field",
      why: [
        { type: "paragraph", children: [{ text: "Lenz's law states the induced response opposes the change in flux, not the original field in every case." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Ask whether flux is increasing or decreasing before deciding the induced field's direction." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "mixed-orientation",
      mistake: "Mixing loop orientation between flux and current",
      why: [
        { type: "paragraph", children: [{ text: "Flux sign, emf sign and current direction must share one chosen positive loop direction." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Fix one positive loop direction first, then read every sign from it." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "blv-misuse",
      mistake: "Using B l v for every moving conductor",
      why: [
        { type: "paragraph", children: [{ text: "The formula assumes a specific perpendicular geometry among B, the rod and the velocity." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check geometry, charge-separation direction and circuit closure before applying it." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "inductor-prevents-current",
      mistake: "Saying an inductor prevents current",
      why: [
        { type: "paragraph", children: [{ text: "An inductor opposes a change in current, not current itself." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Reframe the self-induced emf as opposing dI/dt, not I." }] },
      ],
      errorType: "knowledge-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "next-step",
      jump: true,
      slot: "related",
      heading: "Related learning path and internal links",
      concepts: [
        {
          id: "route-boundary",
          title: "Keep the EMI and Alternating Current boundary in mind",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "This page owns flux change, induced emf, direction, motional emf, eddy currents and inductance. Detailed sinusoidal circuit behaviour, generators and transformers continue on Alternating Current.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B21)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What causes electromagnetic induction?",
      answer: [
        { type: "paragraph", children: [{ text: "A change in magnetic flux linkage through a circuit." }] },
      ],
    },
    {
      question: "Does a constant magnetic field induce emf?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "It can if area or orientation changes. A constant flux does not induce emf." },
          ],
        },
      ],
    },
    {
      question: "What does Lenz's law oppose?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "The induced response opposes the change in magnetic flux that produces it." },
          ],
        },
      ],
    },
    {
      question: "Why does an inductor oppose current change?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A changing current changes magnetic flux and creates a self-induced emf opposing that change.",
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
      label: "Magnetism",
      url: "/jee/physics/magnetism",
      relation: "prerequisite",
      description: "Prepare fields, forces and vector direction before flux-change reasoning.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Ohm's and Kirchhoff's laws needed to close the induced-circuit response.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Dot products and oriented-area reasoning before magnetic flux.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "same-unit",
      description: "Validate energy transfer between mechanical work and induced electrical energy.",
    },
    {
      label: "Alternating Current",
      url: "/jee/physics/alternating-current",
      relation: "forward",
      description: "Continue into time-varying circuits, generators and transformers.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "forward",
      description: "Continue into time-varying fields.",
    },
  ],
  links: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to subject scope.",
    },
    {
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Return to subject scope.",
    },
    {
      label: "JEE Physics previous-year papers",
      url: "/jee/previous-year-papers/physics",
      relation: "related",
      description: "Apply the method to reviewed official questions.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Ideal author type: a JEE Physics educator or academic content specialist experienced in electromagnetic induction and circuit reasoning.",
    "Required reviewer expertise: flux orientation, Faraday and Lenz laws, motional emf, inductance, energy conservation, transients, and EMI versus AC route ownership.",
    "Required qualification: a master's degree or higher in Physics or Electrical Engineering, or an equivalent qualification with documented JEE Electromagnetism teaching and assessment experience.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Electromagnetic Induction for JEE: Flux, EMF and Lenz's Law",
    description:
      "Learn EMI for JEE Main and Advanced through flux change, Faraday and Lenz laws, motional emf, inductance, energy reasoning and common traps.",
    ogTitle: "Electromagnetic Induction for JEE, From Flux to Energy",
    ogDescription:
      "A structured guide to induced emf, direction, motional effects and inductance with official scope and worked energy reasoning.",
  },
};

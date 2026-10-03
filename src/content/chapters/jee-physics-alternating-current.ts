import type { ChapterContent } from "@/content/types";

/**
 * Alternating Current — T06 production content (Batch 04, 7 September 2026).
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
 *   keeps /jee/physics/alternating-current on noindex until review is
 *   recorded.
 */
export const jeePhysicsAlternatingCurrent: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Alternating Current",
  slug: "alternating-current",
  url: "/jee/physics/alternating-current",
  canonicalIntent:
    "Select a frequency-dependent AC model, relate phasors to impedance and power, and separate circuit response from the origin of induced emf.",

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
          text: "In a sinusoidal AC circuit, voltage and current vary with time and may differ in phase. A resistor dissipates average power, an ideal inductor and capacitor exchange energy with the source, and a series LCR circuit combines their frequency-dependent reactances into an impedance. At series resonance, inductive and capacitive reactances cancel.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page owns sinusoidal response, phasors, impedance, resonance, average power and transformer behaviour. Electromagnetic Induction owns the flux-change laws and inductance origins that feed into this circuit response.",
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
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Stabilise potential difference, resistance and Kirchhoff's laws before Alternating Current.",
    },
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "prerequisite",
      description: "Confirm induced emf and self-inductance before treating inductors in AC circuits.",
    },
    {
      label: "Capacitance",
      url: "/jee/physics/capacitance",
      relation: "prerequisite",
      description: "Revisit capacitance before treating the capacitor's frequency-dependent response.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "prerequisite",
      description: "Use SHM phase and angular frequency reasoning to read AC phasors.",
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
    unit: "Alternating Current",
    topics: [
      "Alternating current",
      "Peak and RMS current and voltage",
      "Reactance and impedance",
      "Series LCR circuit",
      "Resonance",
      "AC power and wattless current",
      "AC generator and transformer",
      "RC, LR, LC and series LCR circuits with DC and AC sources",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): source, element response, network, power */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "source-convention",
      title: "1. Fix the source convention",
      keyIdea: "State whether a value is instantaneous, peak, or RMS, and whether the waveform is sinusoidal.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "State whether the supplied value is instantaneous, peak, or RMS, and whether the waveform is sinusoidal. Standard AC formulas assume a sinusoidal steady state unless stated otherwise.",
            },
          ],
        },
      ],
    },
    {
      id: "element-response",
      title: "2. Read each element's response separately",
      keyIdea: "Resistance, inductance and capacitance produce different magnitude and phase relations.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Resistance, inductance, and capacitance produce different magnitude and phase relations between voltage and current. Identify which element or combination is present before writing any equation.",
            },
          ],
        },
      ],
    },
    {
      id: "network-combination",
      title: "3. Combine the network as phasors",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In a series LCR circuit, the same instantaneous current passes every element, while voltage phasors combine vectorially rather than as ordinary scalars.",
            },
          ],
        },
      ],
    },
    {
      id: "frequency-dependence",
      title: "4. Track how frequency changes the response",
      keyIdea: "Inductive reactance grows with frequency and capacitive reactance falls with frequency.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Inductive reactance grows with frequency and capacitive reactance falls with frequency. Frequency therefore changes impedance and phase, and this comparison drives resonance behaviour.",
            },
          ],
        },
      ],
    },
    {
      id: "power-factor",
      title: "5. Read power through the phase angle",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Average power depends on the in-phase component of voltage and current through the power factor. A purely reactive element carries current with zero average power.",
            },
          ],
        },
      ],
    },
    {
      id: "transformation",
      title: "6. Treat the transformer as ideal energy exchange",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An ideal transformer exchanges voltage and current ratios according to turns ratio while conserving input and output power. It requires a sinusoidal varying flux and does not work on steady DC.",
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
          "How sinusoidal voltage and current behave across resistors, inductors, capacitors and their series combinations, including phase, impedance, resonance, power and transformer behaviour.",
        ],
        [
          "What is the central method choice?",
          "Fix the source convention, identify the element response, combine the network as phasors, track how reactance changes with frequency, and read power through the phase angle.",
        ],
        [
          "Where do most mistakes begin?",
          "Applying RMS formulas to nonsinusoidal waveforms, adding series voltages as scalars, assuming current always lags, and ignoring resistance at resonance.",
        ],
        [
          "What should come before Alternating Current?",
          "Current electricity, electromagnetic induction, capacitance and SHM phase reasoning.",
        ],
        [
          "What comes after it?",
          "Electromagnetic Waves and Communication Systems extend the same frequency-dependent reasoning to signal transmission.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Alternating Current",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Peak, RMS and basic AC quantities",
          "Alternating current, peak and RMS current and voltage are explicitly listed.",
          "Covered through RC, LR, LC and series LCR circuits with DC and AC sources.",
          "Confirm the waveform is sinusoidal before applying the RMS factor.",
        ],
        [
          "Reactance and impedance",
          "Reactance and impedance are explicitly listed.",
          "Reactance and impedance are treated within the RC, LR, LC and LCR circuit scope.",
          "Treat reactance as frequency-dependent, never as ordinary DC resistance.",
        ],
        [
          "Series LCR and resonance",
          "Series LCR circuit and resonance are explicitly listed.",
          "Series LCR circuits with DC and AC sources are explicitly listed.",
          "Compare X_L and X_C to read impedance, phase and resonance together.",
        ],
        [
          "Power and machines",
          "AC power, wattless current, AC generator and transformer are explicitly listed.",
          "Not separately itemised beyond the RC, LR, LC and LCR circuit scope.",
          "Main and Advanced scope should not be assumed identical. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Alternating Current",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Current electricity",
          "Apply potential difference, resistance and Kirchhoff's laws confidently.",
          "Revisit Current Electricity before starting AC networks.",
        ],
        [
          "Electromagnetic induction",
          "Explain induced emf and self-inductance.",
          "Revisit Electromagnetic Induction before treating inductors in AC circuits.",
        ],
        [
          "Capacitance",
          "Describe how a capacitor stores charge and responds to changing voltage.",
          "Revisit Capacitance before treating the capacitor's frequency-dependent response.",
        ],
        [
          "SHM phase and angular frequency",
          "Use angular frequency and phase difference in a sinusoidal function.",
          "Revisit Simple Harmonic Motion phase reasoning.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Six decisions cover most Alternating Current questions. Select the model before any algebra.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        ["Peak and heating comparison", "RMS relation", "Waveform must be sinusoidal for the standard 1 over root 2 factor"],
        ["Single ideal element", "Element phase and reactance", "Is it a resistor, inductor, or capacitor?"],
        ["Series LCR current", "Impedance triangle or phasors", "Frequency and series connection"],
        ["Resonance", "Set inductive reactance equal to capacitive reactance", "Ideal series model and finite resistance"],
        ["Average power", "RMS values and the power factor cosine of phi", "Phase convention and real resistance"],
        ["Transformer", "Turns ratio plus power balance", "Ideal versus lossy device"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "sinusoidal-voltage-current",
      expression: "v = V0 sin(omega t), i = I0 sin(omega t - phi)",
      meaning: "Sinusoidal voltage and current, with current lag phi in this convention.",
      variables: [
        { symbol: "V0", meaning: "peak voltage", unit: "V" },
        { symbol: "I0", meaning: "peak current", unit: "A" },
        { symbol: "omega", meaning: "angular frequency", unit: "rad/s" },
        { symbol: "phi", meaning: "phase difference between voltage and current" },
      ],
      useWhen: "Steady sinusoidal state.",
      commonTrap: "Mixing peak, RMS and instantaneous values.",
      accessibleText: "Voltage equals peak voltage times sine of omega t, and current equals peak current times sine of omega t minus phi.",
    },
    {
      id: "rms-values",
      expression: "V_rms = V0 / sqrt(2), I_rms = I0 / sqrt(2)",
      meaning: "Effective values for heating equivalence.",
      variables: [
        { symbol: "V_rms", meaning: "root mean square voltage", unit: "V" },
        { symbol: "I_rms", meaning: "root mean square current", unit: "A" },
      ],
      useWhen: "Pure sinusoid.",
      commonTrap: "Applying the factor to a nonsinusoidal waveform.",
      accessibleText: "RMS voltage equals peak voltage divided by the square root of two, and similarly for RMS current.",
    },
    {
      id: "inductive-reactance",
      expression: "X_L = omega L",
      meaning: "Inductive reactance.",
      variables: [
        { symbol: "X_L", meaning: "inductive reactance", unit: "ohm" },
        { symbol: "L", meaning: "inductance", unit: "H" },
      ],
      useWhen: "Ideal inductor in sinusoidal steady state.",
      commonTrap: "Treating it as DC resistance.",
      accessibleText: "Inductive reactance equals angular frequency times inductance.",
    },
    {
      id: "capacitive-reactance",
      expression: "X_C = 1 / (omega C)",
      meaning: "Capacitive reactance.",
      variables: [
        { symbol: "X_C", meaning: "capacitive reactance", unit: "ohm" },
        { symbol: "C", meaning: "capacitance", unit: "F" },
      ],
      useWhen: "Ideal capacitor in sinusoidal steady state, omega greater than zero.",
      commonTrap: "Substituting ordinary frequency for omega equals 2 pi f.",
      accessibleText: "Capacitive reactance equals one divided by angular frequency times capacitance.",
    },
    {
      id: "series-lcr-impedance",
      expression: "Z = sqrt(R^2 + (X_L - X_C)^2)",
      meaning: "Series LCR impedance magnitude.",
      variables: [
        { symbol: "Z", meaning: "impedance", unit: "ohm" },
        { symbol: "R", meaning: "resistance", unit: "ohm" },
      ],
      useWhen: "Series circuit in sinusoidal steady state.",
      commonTrap: "Adding reactances arithmetically without sign.",
      accessibleText: "Impedance equals the square root of resistance squared plus the squared difference of inductive and capacitive reactance.",
    },
    {
      id: "phase-angle",
      expression: "tan(phi) = (X_L - X_C) / R",
      meaning: "Phase of supply voltage relative to current.",
      variables: [{ symbol: "phi", meaning: "phase angle" }],
      useWhen: "Same series LCR convention.",
      commonTrap: "Reporting lead or lag without the sign of X_L minus X_C.",
      accessibleText: "Tangent of phi equals the difference of inductive and capacitive reactance divided by resistance.",
    },
    {
      id: "average-power",
      expression: "P_avg = V_rms I_rms cos(phi)",
      meaning: "Average real power.",
      variables: [{ symbol: "P_avg", meaning: "average power", unit: "W" }],
      useWhen: "Sinusoidal steady state.",
      commonTrap: "Using peak values without the factor one half.",
      accessibleText: "Average power equals RMS voltage times RMS current times cosine of phi.",
    },
    {
      id: "resonance-frequency",
      expression: "omega0 = 1 / sqrt(L C)",
      meaning: "Ideal series-resonance angular frequency.",
      variables: [{ symbol: "omega0", meaning: "resonant angular frequency", unit: "rad/s" }],
      useWhen: "Ideal inductor and capacitor in the series LCR model.",
      commonTrap: "Claiming impedance becomes zero when resistance is present.",
      accessibleText: "Resonant angular frequency equals one divided by the square root of inductance times capacitance.",
    },
    {
      id: "transformer-ratios",
      expression: "V_s / V_p = N_s / N_p, I_s / I_p = N_p / N_s",
      meaning: "Ideal transformer ratios.",
      variables: [
        { symbol: "V_s", meaning: "secondary voltage", unit: "V" },
        { symbol: "V_p", meaning: "primary voltage", unit: "V" },
        { symbol: "N_s", meaning: "secondary turns" },
        { symbol: "N_p", meaning: "primary turns" },
      ],
      useWhen: "Ideal transformer, sinusoidal varying flux, negligible loss.",
      commonTrap: "Using a transformer with steady DC.",
      accessibleText: "Secondary to primary voltage ratio equals the turns ratio, and the current ratio is its inverse.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-resonance-crossing",
      prompt:
        "For a fixed-amplitude sinusoidal source driving a series RLC circuit, how does the circuit's behaviour change as frequency crosses resonance?",
      answer:
        "Below resonance the circuit is net capacitive and current leads. At resonance impedance equals resistance and current is maximum with zero phase difference. Above resonance the circuit is net inductive and current lags.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Below resonance, capacitive reactance exceeds inductive reactance, so the circuit is net capacitive and current leads the supply voltage." }],
            [{ text: "At resonance, inductive reactance equals capacitive reactance, so impedance equals resistance, current is maximum for the fixed supply, and the phase angle is zero." }],
            [{ text: "Above resonance, inductive reactance exceeds capacitive reactance, so the circuit is net inductive and current lags." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "This is a comparison, not three separate memorised cases. Compute or compare inductive and capacitive reactance, then read impedance, phase, and power factor from their difference.",
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
      id: "rms-without-sinusoid-check",
      mistake: "Using RMS formulas without confirming a sinusoidal waveform",
      why: [
        { type: "paragraph", children: [{ text: "The one over root two factor holds only for a pure sinusoid, not for arbitrary periodic waveforms." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Confirm the waveform is sinusoidal before applying the standard RMS relation." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "scalar-voltage-addition",
      mistake: "Adding resistor, inductor and capacitor voltages as ordinary scalars in a series circuit",
      why: [
        { type: "paragraph", children: [{ text: "Series voltages are phasors with different phase angles, so they combine vectorially rather than arithmetically." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Combine voltage phasors using the impedance triangle before reading a total." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "always-lagging-assumption",
      mistake: "Assuming current always lags in an AC circuit",
      why: [
        { type: "paragraph", children: [{ text: "Whether current leads or lags depends on whether capacitive or inductive reactance dominates." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Compare inductive and capacitive reactance before deciding the direction of phase difference." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "infinite-current-at-resonance",
      mistake: "Claiming current is infinite at series resonance while ignoring resistance",
      why: [
        { type: "paragraph", children: [{ text: "At resonance impedance equals resistance, not zero, so current is maximum but finite when resistance is present." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep resistance in the impedance expression even at resonance." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "transformer-on-dc",
      mistake: "Applying a transformer turns ratio to steady DC",
      why: [
        { type: "paragraph", children: [{ text: "A transformer depends on a changing flux, which a steady DC supply does not provide." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Restrict transformer ratio relations to sinusoidal varying flux conditions." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "faraday-law-repetition",
      mistake: "Repeating Faraday-law depth on this page instead of linking to Electromagnetic Induction",
      why: [
        { type: "paragraph", children: [{ text: "Flux-change laws and inductance origins belong to Electromagnetic Induction, not to circuit-response reasoning." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Treat inductance and induced emf as given inputs here and route deeper flux questions to Electromagnetic Induction." }] },
      ],
      errorType: "needs-review",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* PI v1.1 diagnosis and official-paper practice (B13/B06, B32)        */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is RMS current?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is the direct-current value that would produce the same average heating in a resistor. For a sinusoid, RMS current equals peak current divided by the square root of two.",
            },
          ],
        },
      ],
    },
    {
      question: "What happens at series LCR resonance?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Inductive reactance equals capacitive reactance, the impedance becomes equal to resistance, supply voltage and current are in phase, and current is maximum for a fixed supply amplitude.",
            },
          ],
        },
      ],
    },
    {
      question: "What is wattless current?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It describes an ideal AC condition with zero average power, such as a purely reactive element where voltage and current are in quadrature.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "forward",
      description: "Extend frequency-dependent reasoning to signal generation and propagation.",
    },
    {
      label: "Communication Systems",
      url: "/jee/physics/communication-systems",
      relation: "forward",
      description: "Apply AC and frequency concepts to signal transmission.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Stabilise potential difference, resistance and Kirchhoff's laws.",
    },
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "prerequisite",
      description: "Confirm induced emf and self-inductance before treating inductors in AC circuits.",
    },
    {
      label: "Capacitance",
      url: "/jee/physics/capacitance",
      relation: "related",
      description: "Connect capacitor behaviour with its frequency-dependent AC response.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "related",
      description: "Reuse phase and angular frequency reasoning for AC phasors.",
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
      description: "Connect resonance and power-factor reasoning with reviewed official problems.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first. Flux-change and Lenz-law depth is deliberately routed to Electromagnetic Induction rather than duplicated here.",
  contributorPolicy: [
    "Author: a JEE Physics educator or academic content specialist experienced in AC circuit analysis, phasors and electrical machines.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE Alternating Current teaching and solution-review experience, covering RMS values, reactance, series LCR resonance, power factor, and transformer behaviour.",
    "Independent checker: verifies official mapping, phase convention consistency, sinusoidal-condition statements, formula conditions and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Alternating Current for JEE: RMS, Impedance, Resonance",
    description:
      "Learn JEE Alternating Current through RMS values, reactance, impedance, series LCR resonance, power factor, transformers, conditions and traps.",
    ogTitle: "Alternating Current for JEE, Read Phase and Frequency",
    ogDescription:
      "A structured guide to sinusoidal voltage and current, reactance, impedance, resonance, power and transformers with official scope and diagnosis.",
  },
};

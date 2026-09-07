import type { ChapterContent } from "@/content/types";

/**
 * Thermodynamics — T06 production content (draft package, 7 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe, following the
 * discipline established by the accepted Electrostatics package.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/thermodynamics on noindex until review is recorded.
 */
export const jeePhysicsThermodynamics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Thermodynamics",
  slug: "thermodynamics",
  url: "/jee/physics/thermodynamics",
  canonicalIntent:
    "Understand the official JEE scope of Physics Thermodynamics, track energy across a system boundary, choose the correct process relation and diagnose why questions go wrong.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every formula declares its sign convention and conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Thermodynamics studies how a macroscopic system changes state when energy crosses its boundary as heat or work. A solution should declare the system, initial and final states, process path, gas model, and sign convention before using the first law.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This is Physics Thermodynamics.",
          bold: true,
        },
        {
          text: " Chemical enthalpy, Gibbs energy, reaction spontaneity, and chemical equilibrium belong to ",
        },
        { text: "Chemistry Thermodynamics", href: "/jee/chemistry/thermodynamics" },
        { text: ", not this page." },
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
        [{ text: "Which process relation and sign convention should I use for a problem?" }],
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
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Mechanical work and area under a graph before boundary work.",
    },
    {
      label: "Thermal Properties",
      url: "/jee/physics/thermal-properties",
      relation: "prerequisite",
      description: "Temperature, calorimetry and heat transfer before the first law.",
    },
  ],

  syllabusMapping: {
    unit: "Thermodynamics",
    topics: [
      "Thermal equilibrium and definition of temperature (zeroth law of Thermodynamics)",
      "Heat, work and internal energy",
      "First law of thermodynamics",
      "Isothermal and adiabatic processes",
      "Second law of thermodynamics",
      "Reversible and irreversible processes",
      "Broader Thermal Physics scope named by JEE Advanced: expansion, calorimetry, heat transfer and cooling, ideal-gas laws and specific heats, first law for ideal gases, Carnot engine and efficiency, thermal-radiation laws",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35 / B40)                                    */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "boundary",
      title: "1. Draw the system boundary",
      keyIdea: "Heat and work are energy transfers across a boundary you choose; internal energy belongs to the system's state.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Choose the gas, gas plus piston, or another stated system. Heat and work are energy transfers across that boundary. Internal energy belongs to the state of the system.",
            },
          ],
        },
      ],
    },
    {
      id: "state-vs-path",
      title: "2. Separate state from path",
      keyIdea: "Internal-energy change depends only on the endpoints; heat and work depend on the process connecting them.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Internal-energy change depends only on the endpoints. Heat and work depend on the process connecting them. Two paths can reach the same final state with different Q and W but the same Delta U.",
            },
          ],
        },
      ],
    },
    {
      id: "sign-convention",
      title: "3. Declare the sign convention",
      keyIdea: "State the convention before combining results from another source.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "This page uses " },
            { text: "Q = Delta U + W", code: true },
            {
              text: ", where Q is heat supplied to the system and W is work done by the system. If another source defines work done on the system as positive, translate the equation before combining results.",
            },
          ],
        },
      ],
    },
    {
      id: "process-constraint",
      title: "4. Identify the process constraint",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Isothermal fixes temperature." }],
            [{ text: "Adiabatic fixes heat transfer at zero." }],
            [{ text: "Isochoric fixes volume, so boundary work is zero." }],
            [{ text: "Isobaric fixes pressure." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "\"Slow\" alone does not prove isothermal or reversible." }],
        },
      ],
    },
    {
      id: "material-model",
      title: "5. Apply the material model",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "For an ideal gas, internal energy depends only on temperature. Relations such as " },
            { text: "PV^gamma = constant", code: true },
            { text: " require additional reversible adiabatic and ideal-gas conditions." },
          ],
        },
      ],
    },
    {
      id: "cycles-engines",
      title: "6. Interpret cycles and engines",
      keyIdea: "A complete cycle returns the system to its initial state, so Delta U = 0 over the cycle.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Over a complete cycle, the system returns to its initial state, so Delta U = 0. Net work is the signed area enclosed on the P-V diagram. Efficiency compares useful work output with heat absorbed, and can never exceed the reversible Carnot value between the same reservoir temperatures.",
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
          "How a macroscopic system changes state when energy crosses its boundary as heat or work.",
        ],
        [
          "What is the central method choice?",
          "Declare the system, endpoints, process path, gas model and sign convention before applying the first law.",
        ],
        [
          "Where do most mistakes begin?",
          "Sign convention, confusing state functions with path-dependent transfers, and applying a reversible ideal-gas relation without checking its conditions.",
        ],
        [
          "What should come before Thermodynamics?",
          "Mechanical work and area under a graph, temperature, calorimetry and heat transfer, and the ideal-gas equation.",
        ],
        [
          "What comes after it?",
          "Kinetic Theory of Gases builds the microscopic picture behind these macroscopic laws.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Thermodynamics",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Equilibrium and temperature",
          "Thermal equilibrium and the zeroth law are explicitly listed.",
          "Covered within the broader Thermal Physics scope.",
          "Treat temperature as the property equalised at thermal equilibrium.",
        ],
        [
          "Heat, work and the first law",
          "Heat, work, internal energy and the first law are explicitly listed.",
          "The first law for ideal gases is explicitly listed within Thermal Physics.",
          "Declare a sign convention before combining Q, W and Delta U.",
        ],
        [
          "Processes",
          "Isothermal and adiabatic processes are explicitly listed.",
          "Isothermal and adiabatic processes for ideal gases are explicitly listed, alongside expansion, calorimetry and heat transfer.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
        [
          "Second law and reversibility",
          "The second law and reversible and irreversible processes are explicitly listed.",
          "Reversibility, the Carnot engine and efficiency are explicitly listed.",
          "Efficiency of any real engine is bounded by the reversible Carnot value.",
        ],
        [
          "Related topics named only in Advanced Thermal Physics",
          "Calorimetry and heat transfer sit under Properties of Solids and Liquids; ideal-gas kinetic ideas sit under Kinetic Theory of Gases.",
          "Ideal-gas specific heats and thermal-radiation laws are explicitly listed.",
          "Follow the links to Thermal Properties and Kinetic Theory of Gases rather than assuming this page silently absorbs them.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Thermodynamics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "State variables",
          "Distinguish pressure, volume and temperature as state variables.",
          "Revise the ideal-gas equation and units of pressure, volume and temperature.",
        ],
        [
          "Mechanical work and graphs",
          "Calculate mechanical work and read area under a graph.",
          "Revise work-energy reasoning from Work, Energy and Power.",
        ],
        [
          "Moles and the gas equation",
          "Use moles and the ideal-gas equation PV = nRT.",
          "Revise Kinetic Theory of Gases fundamentals.",
        ],
        [
          "State versus path",
          "Distinguish a state function from a path-dependent transfer.",
          "Revise the difference between a property of a state and a process quantity.",
        ],
        [
          "Reading a P-V graph",
          "Read the direction of a cyclic process on a P-V graph and its signed enclosed area.",
          "Practise sketching and reading simple isothermal, isobaric and isochoric lines.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Choose the method before calculating",
      intro: "Six decisions cover most Thermodynamics questions. Select the representation before any algebra.",
      columns: ["Given information", "First move", "Governing idea"],
      rows: [
        [
          "Initial and final states only",
          "Ask whether a state-function change is enough",
          "Delta U is endpoint dependent",
        ],
        [
          "A path on a P-V graph",
          "Determine signed area",
          "W = integral(P dV) for quasistatic boundary work",
        ],
        [
          "Constant temperature, ideal gas",
          "Test Delta U = 0",
          "Isothermal ideal-gas process",
        ],
        [
          "Insulated or explicitly adiabatic",
          "Set Q = 0",
          "First law plus process relation",
        ],
        [
          "Closed cycle",
          "Set total Delta U = 0",
          "Net heat equals net work by the system",
        ],
        [
          "Heat engine between two reservoirs",
          "Identify Q_H, Q_C and W",
          "Energy balance and efficiency",
        ],
      ],
    },
    {
      id: "unit-bridge",
      slot: "formulas",
      heading: "Unit bridge",
      intro: "Use the equivalent form to check any result before accepting it.",
      columns: ["Quantity", "SI unit", "Equivalent form that helps checking"],
      rows: [
        ["Pressure", "pascal, Pa", "N/m^2"],
        ["Volume", "m^3", "—"],
        ["Temperature", "kelvin, K", "Never substitute Celsius directly into PV = nRT"],
        ["Heat and work", "joule, J", "Both are energy in transfer, not stored quantities"],
        ["Internal energy", "joule, J", "State function, depends only on endpoints"],
        ["Efficiency", "dimensionless", "Ratio of work output to heat input"],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "Diagnose your Thermodynamics weakness with evidence",
      intro:
        "One wrong answer does not always reveal the cause. Use the smallest Preparation Intelligence v1.1 label supported by what the student actually did.",
      columns: ["PI v1.1 label", "Evidence in Thermodynamics", "Repair action", "Retest"],
      rows: [
        [
          "Knowledge Gap",
          "System, state, path, heat, work, internal energy, or reversibility is not understood.",
          "Rebuild the concept with a definition, relationship and one contrasting example.",
          "Explain the idea aloud, then solve one direct and one contrast question.",
        ],
        [
          "Recall Gap",
          "A process relation or efficiency definition was not retrieved.",
          "Use closed-book retrieval with meaning and conditions, not formula copying.",
          "Recall again after a delay, then apply in a fresh problem.",
        ],
        [
          "Execution Error",
          "Graph area, logarithm, sign, unit, or algebra failed after correct setup.",
          "Mark the exact failed step and add a direction, dimension or limit check.",
          "Repeat the same method on a numerically different question.",
        ],
        [
          "Decision / Selection Error",
          "The wrong system, sign convention, gas model, or process relation was selected.",
          "Practise the method selector before calculation. Write the rejected alternative and why it was rejected.",
          "Solve a mixed set where the process is not named in the prompt.",
        ],
        [
          "Needs Review",
          "The response is blank, partially correct, ambiguous, guessed or inconsistent, so the evidence does not support a stable label.",
          "Review the work or collect another response before assigning a gap.",
          "Ask a short discriminating question that separates understanding, recall, execution and selection.",
        ],
      ],
      note: "Contributing factors such as rushed reading, weak diagram use, notation confusion or time pressure may be recorded separately. They do not replace the primary label.",
    },
    {
      id: "pyq-review-method",
      slot: "practice",
      heading: "How to review a Thermodynamics previous-year question",
      intro: "For every verified question, record five things.",
      columns: ["Review field", "What to record"],
      rows: [
        [
          "Required concept",
          "Zeroth law, first law, process type, second law, reversibility, cycles or engines.",
        ],
        ["Representation", "P-V graph, algebraic process relation, energy balance or efficiency."],
        ["Decisive choice", "The system, sign convention and process relation that made the solution correct."],
        [
          "Error evidence",
          "Knowledge Gap, Recall Gap, Execution Error, Decision / Selection Error or Needs Review.",
        ],
        ["Retest rule", "The type of fresh question to attempt and when to attempt it."],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "official-papers",
      jump: true,
      slot: "practice",
      heading: "Use official previous papers without inventing chapter trends",
      concepts: [
        {
          id: "official-repositories",
          title: "Official repositories",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Use official papers and record the system, endpoints, path, process constraint, gas model, sign convention, and first failed decision.",
                },
              ],
            },
            {
              type: "list",
              items: [
                [
                  {
                    text: "JEE Advanced past question papers",
                    href: "https://jeeadv.ac.in/archive.html",
                  },
                ],
                [
                  {
                    text: "JEE Main official site and Question Papers section",
                    href: "https://jeemain.nta.nic.in/",
                  },
                ],
              ],
            },
            {
              type: "note",
              tone: "caution",
              children: [
                {
                  text: "This page does not claim a verified number of Thermodynamics questions per year, a guaranteed chapter weightage, a trend percentage, or a topic-tagged PYQ list that has not been independently checked. Do not turn a reviewed subset into a public trend or frequency statement.",
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
      id: "ideal-gas-equation",
      expression: "P V = n R T",
      meaning: "Ideal-gas equation of state relating pressure, volume, amount and temperature.",
      variables: [
        { symbol: "P", meaning: "pressure", unit: "Pa" },
        { symbol: "V", meaning: "volume", unit: "m^3" },
        { symbol: "n", meaning: "amount of gas", unit: "mol" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
      ],
      useWhen: "Describing equilibrium states of an ideal gas.",
      commonTrap: "Using Celsius in place of kelvin.",
      accessibleText: "Pressure times volume equals n R T, using absolute temperature.",
    },
    {
      id: "first-law",
      expression: "Q = Delta U + W",
      meaning: "First law with heat supplied to the system positive and work done by the system positive.",
      variables: [
        { symbol: "Q", meaning: "heat supplied to the system", unit: "J" },
        { symbol: "Delta U", meaning: "change in internal energy", unit: "J" },
        { symbol: "W", meaning: "work done by the system", unit: "J" },
      ],
      useWhen: "Closed-system energy accounting under this convention.",
      commonTrap: "Combining it with a source using work-on-system positive without translating signs.",
      accessibleText: "Heat supplied equals the change in internal energy plus work done by the system.",
    },
    {
      id: "boundary-work",
      expression: "W = integral from V_1 to V_2 of P dV",
      meaning: "Quasistatic boundary work done by the gas along a known pressure-volume path.",
      variables: [
        { symbol: "P", meaning: "pressure", unit: "Pa" },
        { symbol: "V", meaning: "volume", unit: "m^3" },
        { symbol: "W", meaning: "work", unit: "J" },
      ],
      useWhen: "The pressure as a function of volume, P(V), is known along the path.",
      commonTrap: "Using endpoint pressure without a constant-pressure condition.",
      accessibleText:
        "Work equals the integral of pressure with respect to volume from the initial to the final volume.",
    },
    {
      id: "ideal-gas-internal-energy",
      expression: "Delta U = n C_V Delta T",
      meaning: "Internal-energy change of a fixed amount of ideal gas.",
      variables: [
        { symbol: "n", meaning: "amount of gas", unit: "mol" },
        { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^-1 K^-1" },
        { symbol: "Delta T", meaning: "temperature change", unit: "K" },
      ],
      useWhen: "Fixed ideal-gas amount with an applicable C_V.",
      commonTrap: "Applying it to a phase change or an unspecified non-ideal system.",
      accessibleText:
        "Change in internal energy equals n times C V times the change in temperature.",
    },
    {
      id: "isobaric-work",
      expression: "W = P (V_2 - V_1)",
      meaning: "Boundary work done by the gas at constant pressure.",
      variables: [
        { symbol: "P", meaning: "constant pressure", unit: "Pa" },
        { symbol: "V_1, V_2", meaning: "initial and final volume", unit: "m^3" },
      ],
      useWhen: "Pressure is constant throughout the process.",
      commonTrap: "Using final pressure for a varying-pressure path.",
      accessibleText: "Work equals pressure times the change in volume.",
    },
    {
      id: "isothermal-work",
      expression: "W = n R T ln(V_2 / V_1)",
      meaning: "Reversible isothermal work done by an ideal gas.",
      variables: [
        { symbol: "n", meaning: "amount of gas", unit: "mol" },
        { symbol: "T", meaning: "constant absolute temperature", unit: "K" },
        { symbol: "V_1, V_2", meaning: "initial and final volume", unit: "m^3" },
      ],
      useWhen: "Constant temperature, ideal gas, quasistatic path.",
      commonTrap: "Using it for a general isothermal non-ideal path.",
      accessibleText:
        "Work equals n R T times the natural log of the ratio of final volume to initial volume.",
    },
    {
      id: "adiabatic-relation",
      expression: "P V^gamma = constant",
      meaning: "Reversible adiabatic ideal-gas relation.",
      variables: [{ symbol: "gamma", meaning: "ratio C_P over C_V" }],
      useWhen: "Quasistatic adiabatic ideal gas with applicable constant heat capacities.",
      commonTrap: "Treating every insulated process as reversible.",
      accessibleText: "Pressure times volume to the power gamma remains constant.",
    },
    {
      id: "engine-efficiency",
      expression: "eta = W_out / Q_H = 1 - Q_C / Q_H",
      meaning: "Heat-engine efficiency over a complete cycle.",
      variables: [
        { symbol: "W_out", meaning: "net work output", unit: "J" },
        { symbol: "Q_H", meaning: "heat absorbed from the hot reservoir", unit: "J" },
        { symbol: "Q_C", meaning: "heat rejected to the cold reservoir", unit: "J" },
      ],
      useWhen: "Analysing a cyclic engine.",
      commonTrap: "Using total heat magnitude in the denominator instead of heat absorbed.",
      accessibleText:
        "Efficiency equals net work output over heat absorbed, which equals one minus the ratio of rejected heat to absorbed heat.",
    },
    {
      id: "carnot-efficiency",
      expression: "eta_C = 1 - T_C / T_H",
      meaning: "Maximum possible efficiency of a reversible engine between two reservoirs.",
      variables: [
        { symbol: "T_C", meaning: "cold-reservoir absolute temperature", unit: "K" },
        { symbol: "T_H", meaning: "hot-reservoir absolute temperature", unit: "K" },
      ],
      useWhen: "Comparing a real engine's efficiency against the reversible limit.",
      commonTrap: "Using Celsius or claiming a real engine must attain the Carnot value.",
      accessibleText:
        "Carnot efficiency equals one minus the ratio of cold-reservoir temperature to hot-reservoir temperature, both absolute.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31 via workedExamples)                           */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-isothermal-expansion",
      prompt: "Worked reasoning: an ideal gas expands reversibly at constant temperature. What happens to Q, W and Delta U?",
      answer:
        "Delta U = 0, so Q = W, and positive heat must enter the gas to replace the energy transferred out as work.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "For an ideal gas, internal energy depends only on temperature." }],
            [{ text: "Constant temperature gives Delta U = 0." }],
            [{ text: "With the declared convention, Q = Delta U + W, so Q = W." }],
            [
              {
                text: "During expansion, W = n R T ln(V_2 / V_1) > 0 because V_2 > V_1.",
              },
            ],
            [
              {
                text: "Therefore positive heat must enter the gas to replace the energy transferred out as work.",
              },
            ],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The physical story is the answer: internal energy stays fixed while heat entering the gas leaves as work.",
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
      id: "heat-as-stored",
      mistake: "Treating heat as stored inside a system",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Heat is energy in transfer; internal energy is a state function." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Ask whether the quantity belongs to a state or to a process before naming it." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "isothermal-vs-adiabatic",
      mistake: "Calling any constant-temperature process adiabatic",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Isothermal and adiabatic are different constraints." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "State which quantity is fixed: temperature for isothermal, heat transfer for adiabatic." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "adiabatic-relation-misuse",
      mistake: "Using PV^gamma = constant for an irreversible adiabatic change",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The familiar relation needs the reversible ideal-gas model." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check reversibility and the ideal-gas assumption before applying it." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "sign-convention-drop",
      mistake: "Forgetting the sign convention",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Mixing a work-by-system convention with a work-on-system source silently flips a sign." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Write the verbal definition of Q and W first." }],
        },
      ],
      errorType: "recall-gap",
    },
    {
      id: "intermediate-cycle-du",
      mistake: "Setting Delta U = 0 at one intermediate step of a cyclic process",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Delta U = 0 holds for the complete cycle, not for every intermediate leg." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Apply the zero-Delta-U condition only across the full closed loop." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "physics-chemistry-mixup",
      mistake: "Mixing Physics and Chemistry Thermodynamics intent",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Gas-process energy accounting and reaction thermodynamics are different entities." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "Keep this page's system-boundary model separate from " },
            { text: "Chemistry Thermodynamics", href: "/jee/chemistry/thermodynamics" },
            { text: "." },
          ],
        },
      ],
      errorType: "decision-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B21)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is the first law of thermodynamics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "With heat supplied to the system positive and work done by the system positive, it is Q = Delta U + W.",
            },
          ],
        },
      ],
    },
    {
      question: "Is heat a state function?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Heat and work depend on the path; internal energy is a state function.",
            },
          ],
        },
      ],
    },
    {
      question: "When is PV^gamma constant?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "For the usual JEE model, during a reversible adiabatic process of an ideal gas with the required heat-capacity assumptions.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is the area under a P-V curve work?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "For quasistatic boundary work, each small expansion contributes P dV, whose integral is the path area.",
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
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Mechanical work and area under a graph before boundary work.",
    },
    {
      label: "Thermal Properties",
      url: "/jee/physics/thermal-properties",
      relation: "prerequisite",
      description: "Temperature, calorimetry and heat transfer before the first law.",
    },
    {
      label: "Kinetic Theory of Gases",
      url: "/jee/physics/kinetic-theory-of-gases",
      relation: "same-unit",
      description: "Connect microscopic gas ideas to the macroscopic laws on this page.",
    },
    {
      label: "Chemistry Thermodynamics",
      url: "/jee/chemistry/thermodynamics",
      relation: "related",
      description: "Reaction-based enthalpy, entropy and Gibbs energy, kept separate from this Physics page.",
    },
    {
      label: "Previous Year Papers",
      url: "/jee/previous-year-papers",
      relation: "forward",
      description: "Apply gas models and practise with reviewed official questions.",
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
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Physics-only official syllabus mapping.",
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
    "Author: a JEE Physics educator or academic content specialist experienced in Thermal Physics and thermodynamic problem solving.",
    "Academic reviewer: postgraduate qualification in Physics, Mechanical Engineering, or a closely relevant discipline, with documented JEE Thermal Physics teaching and assessment experience, covering system boundaries, sign conventions, ideal-gas processes, first and second laws, cycles, Carnot limits, and Main versus Advanced scope.",
    "Independent checker: a physics educator or subject editor who verifies equations, sign conventions, process assumptions, SI units, worked reasoning and mobile rendering separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Physics Thermodynamics for JEE: Laws, Processes and Formulas",
    description:
      "Learn Physics Thermodynamics for JEE through system boundaries, state and path, sign conventions, process formulas, worked reasoning and common mistakes.",
    ogTitle: "Physics Thermodynamics for JEE, Explained as Energy Accounting",
    ogDescription:
      "A condition-aware guide to heat, work, internal energy, ideal-gas processes, cycles, engines and error diagnosis.",
  },
};

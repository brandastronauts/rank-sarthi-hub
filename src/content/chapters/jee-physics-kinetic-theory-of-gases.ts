import type { ChapterContent } from "@/content/types";

/**
 * Kinetic Theory of Gases — T06 production content (draft, 8 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Scope boundary (deliberate, not accidental):
 * - This page owns only the microscopic gas model: kinetic assumptions,
 *   pressure from molecular collisions, kinetic interpretation of
 *   temperature, molecular speeds, degrees of freedom, equipartition,
 *   specific heats and gamma that follow from it, mean free path, and the
 *   ideal gas equation with its deviations at syllabus level.
 * - /jee/physics/thermodynamics owns state variables, thermodynamic
 *   processes, heat, work, and the first and second laws.
 * - /jee/physics/thermal-properties owns thermal expansion, calorimetry and
 *   the three heat-transfer modes.
 * - Where a topic (ideal gas law, specific heats, isothermal/adiabatic
 *   processes) is used by more than one page, this page treats it only from
 *   the kinetic-model angle and links onward rather than repeating process
 *   derivations.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" (academic review pending).
 */
export const jeePhysicsKineticTheoryOfGases: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Kinetic Theory of Gases",
  slug: "kinetic-theory-of-gases",
  url: "/jee/physics/kinetic-theory-of-gases",
  canonicalIntent:
    "Explain macroscopic gas behaviour from a microscopic molecular model, choose the correct speed, degrees-of-freedom or mean-free-path relation for a given question, and diagnose why a kinetic-theory solution goes wrong.",

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
          text: "Kinetic theory of gases explains pressure, temperature and specific heats of a gas as consequences of large numbers of molecules in random motion, colliding with each other and with the container walls. It connects a microscopic model of molecules to the macroscopic ideal gas equation.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "For JEE, the working chain is: state the kinetic assumptions, derive pressure from wall collisions, read temperature as average molecular kinetic energy, use the correct speed for the correct purpose, assign degrees of freedom and apply equipartition to get specific heats and gamma, and use mean free path for molecular-scale transport reasoning.",
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
      description: "SI units, dimensional consistency and significant figures before molecular quantities.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Momentum change on collision, used directly to derive gas pressure.",
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
    unit: "Kinetic Theory of Gases",
    topics: [
      "Equation of state of a perfect gas",
      "Work done in compressing a gas (referred to thermodynamics for process detail)",
      "Kinetic theory assumptions",
      "Concept of pressure from molecular collisions",
      "Kinetic interpretation of temperature",
      "RMS speed of gas molecules",
      "Degrees of freedom",
      "Law of equipartition of energy",
      "Specific heat capacities of gases from equipartition",
      "Mean free path",
      "Avogadro's number",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35)                                          */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "kinetic-assumptions",
      title: "1. State the kinetic model before using any formula",
      keyIdea:
        "Every kinetic-theory result assumes point-sized molecules in random motion with elastic collisions and negligible intermolecular force except during contact.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The kinetic model treats a gas as a very large number of identical molecules in random, ceaseless motion, colliding elastically with each other and with the container walls. Molecular size is taken as negligible compared with the average separation, and intermolecular forces are ignored except during a collision.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "A formula derived from this model does not automatically apply to a real gas at high pressure or low temperature, where molecular size and intermolecular attraction stop being negligible.",
            },
          ],
        },
      ],
    },
    {
      id: "pressure-from-collisions",
      title: "2. Build pressure from momentum change on the wall",
      keyIdea: "Pressure is the average rate of momentum transfer per unit wall area from colliding molecules.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Each molecule that strikes a wall and rebounds elastically transfers momentum to it. Summing this momentum transfer over a very large number of molecules and dividing by wall area and time gives the gas pressure. This is a mechanics result, not a separate postulate: it follows from treating molecules as particles obeying Newton's laws.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "The result depends on the mean square speed of the molecules, not on any single molecule's speed." }],
        },
      ],
    },
    {
      id: "temperature-as-energy",
      title: "3. Read temperature as average molecular kinetic energy",
      keyIdea: "Kinetic theory gives temperature a microscopic meaning: it measures average translational kinetic energy per molecule.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Combining the pressure result with the ideal gas equation shows that absolute temperature is proportional to the average translational kinetic energy per molecule. This is the kinetic interpretation of temperature: it is not merely a number on a thermometer scale, it is a statement about molecular motion.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "This proportionality concerns average translational kinetic energy only. Rotational and vibrational contributions are handled separately through degrees of freedom." },
          ],
        },
      ],
    },
    {
      id: "speed-choice",
      title: "4. Choose the correct speed for the correct purpose",
      keyIdea: "RMS speed, average speed and most probable speed answer different questions and are never numerically equal.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A molecular speed distribution has three commonly used representative speeds: the most probable speed, at which the distribution peaks; the average speed, the mean of the distribution; and the root mean square speed, which comes directly from the mean square speed used in the pressure and energy relations.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Use rms speed when the question links directly to pressure or kinetic energy." }],
            [{ text: "Use average speed when a mean molecular speed itself is asked for." }],
            [{ text: "Use most probable speed when the question asks about the distribution peak." }],
          ],
        },
      ],
    },
    {
      id: "degrees-of-freedom",
      title: "5. Count degrees of freedom before applying equipartition",
      keyIdea: "Degrees of freedom count the independent ways a molecule can store kinetic energy at the syllabus level of approximation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A monatomic molecule is treated as having three translational degrees of freedom. A diatomic molecule at moderate temperature is treated as having three translational and two rotational degrees of freedom, with vibrational modes activating only at higher temperature. This count must be fixed before applying the equipartition result, because the specific heat and gamma that follow depend directly on it.",
            },
          ],
        },
      ],
    },
    {
      id: "equipartition-to-specific-heats",
      title: "6. Use equipartition to reach specific heats and gamma",
      keyIdea: "The law of equipartition assigns equal average energy to each degree of freedom, giving Cv, Cp and gamma from the degrees-of-freedom count.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The law of equipartition of energy states that, in thermal equilibrium, each quadratic degree of freedom carries the same average energy. Summing this over the counted degrees of freedom for one mole gives the molar specific heat at constant volume; adding the gas constant gives the molar specific heat at constant pressure; their ratio is gamma. This is the kinetic-theory route to specific heats. Using those specific heats inside a thermodynamic process such as an isothermal or adiabatic change belongs to the Thermodynamics chapter.",
              href: "/jee/physics/thermodynamics",
            },
          ],
        },
      ],
    },
    {
      id: "mean-free-path",
      title: "7. Use mean free path for molecular-scale transport reasoning",
      keyIdea: "Mean free path is the average distance a molecule travels between successive collisions, set by molecular size and number density.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mean free path depends on molecular diameter and the number density of molecules, and therefore on pressure and temperature through the gas equation. It gives a molecular-scale picture of how quickly a gas can respond to a local disturbance, without needing the process-level detail used in Thermodynamics or Thermal Properties.",
            },
          ],
        },
      ],
    },
    {
      id: "ideal-gas-and-deviation",
      title: "8. Treat the ideal gas equation as the macroscopic summary, and know its limits",
      keyIdea: "The ideal gas equation is the macroscopic consequence of the kinetic model; deviations appear where the model's assumptions fail.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The equation of state of a perfect gas links pressure, volume, amount and temperature and is the macroscopic summary of the kinetic model. Real gases deviate from it at high pressure and low temperature, where molecular size and intermolecular attraction are no longer negligible, which is why a corrected equation of state exists at that level of approximation. Using this equation inside a specific process, such as at constant temperature or constant heat exchange, is covered in Thermodynamics.",
              href: "/jee/physics/thermodynamics",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25)                                             */
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
          "How the macroscopic behaviour of a gas, pressure, temperature and specific heats, follows from a microscopic model of molecules in random motion.",
        ],
        [
          "What is the central method choice?",
          "Identify whether the question needs pressure from collisions, temperature as average kinetic energy, a specific molecular speed, degrees of freedom and equipartition for specific heats, or mean free path for transport reasoning.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing rms, average and most probable speed, assigning the wrong number of degrees of freedom, and applying an ideal-gas relation where the deviation from ideal behaviour already matters.",
        ],
        [
          "What should come before this chapter?",
          "SI units and dimensions, and momentum change in elastic collisions from Laws of Motion.",
        ],
        [
          "What comes after it?",
          "Thermodynamics uses these specific heats inside processes and the first and second laws, and Thermal Properties covers expansion, calorimetry and heat transfer for the same substances.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Kinetic Theory of Gases",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Kinetic assumptions and pressure",
          "Listed as Unit 9, Kinetic Theory of Gases: assumptions and the concept of pressure are explicitly named.",
          "Not listed as a separate unit. The Advanced Thermal Physics block names ideal gas laws but does not itemise kinetic assumptions or the pressure derivation by name.",
          "Treat the collision-based pressure derivation as Main-named and Advanced-implied through the ideal gas law.",
        ],
        [
          "Temperature and molecular speeds",
          "Kinetic interpretation of temperature and RMS speed of gas molecules are explicitly named.",
          "Not itemised by name in the Advanced Thermal Physics block.",
          "Keep both official documents open rather than assuming identical scope from a combined coaching outline.",
        ],
        [
          "Degrees of freedom, equipartition and specific heats",
          "Degrees of freedom, law of equipartition of energy, and application to specific heat capacities of gases are explicitly named.",
          "Specific heats, Cv and Cp for monoatomic and diatomic gases, are explicitly named inside the Thermal Physics block, without itemising equipartition by name.",
          "Advanced expects the resulting Cv and Cp values; Main additionally names the equipartition route to reach them.",
        ],
        [
          "Mean free path and Avogadro's number",
          "Mean free path and Avogadro's number are explicitly named.",
          "Not itemised by name in the Advanced Thermal Physics block.",
          "Confirm current-year scope on the official document if a question depends specifically on mean free path.",
        ],
        [
          "Ideal gas equation and deviation",
          "Equation of state of a perfect gas is explicitly named under this unit.",
          "Ideal gas laws are explicitly named inside the Thermal Physics block, alongside specific heats and thermodynamic processes.",
          "Deviation from ideal behaviour at syllabus level is a qualitative boundary statement here, not a derivation of a corrected equation of state.",
        ],
      ],
      note: "Sources: JEE Main syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below. JEE Advanced groups thermal topics into one Thermal Physics block rather than a dedicated kinetic-theory unit.",
    },
    {
      id: "scope-boundary",
      jump: true,
      slot: "scope",
      heading: "Scope boundary with Thermodynamics and Thermal Properties",
      columns: ["Topic", "Owned here", "Owned elsewhere"],
      rows: [
        [
          "Ideal gas equation",
          "As the macroscopic consequence of the kinetic model.",
          "Its use inside a specific process, such as isothermal or adiabatic change, is covered in Thermodynamics.",
        ],
        [
          "Specific heats and gamma",
          "Derived here from degrees of freedom and equipartition.",
          "Their use in the first law of thermodynamics and in process work-heat relations is covered in Thermodynamics.",
        ],
        [
          "Heat, work and the laws of thermodynamics",
          "Not covered here.",
          "Covered fully in Thermodynamics.",
        ],
        [
          "Thermal expansion, calorimetry, heat transfer",
          "Not covered here.",
          "Covered fully in Thermal Properties.",
        ],
      ],
      note: "This page treats a topic used by more than one chapter only from the microscopic, kinetic-model angle, and links onward instead of repeating process-level or transfer-mode content.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before this chapter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "SI units and dimensions",
          "Use SI units consistently for pressure, volume, temperature and molar quantities.",
          "Revise base units and unit conversion in Units and Measurements.",
        ],
        [
          "Elastic collisions and momentum",
          "Compute momentum change for a particle rebounding elastically from a wall.",
          "Revise momentum and elastic collisions in Laws of Motion.",
        ],
        [
          "Basic statistics of a distribution",
          "Distinguish a mean value from the peak of a distribution.",
          "Revise mean, mean square and most probable value as distinct quantities.",
        ],
        [
          "Mole concept",
          "Relate number of molecules, number of moles and Avogadro's number.",
          "Revise the mole concept before using per-mole specific heat relations.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the method before calculating",
      intro: "Identify what the question is actually asking before reaching for a formula.",
      columns: ["Information given", "First method", "Validation"],
      rows: [
        ["Pressure or force on a container wall", "Pressure-from-collisions relation", "Check that mean square speed, not any single speed, is used"],
        ["A single number labelled 'molecular speed'", "Identify whether it means rms, average or most probable", "Match the formula to the named speed"],
        ["Molar specific heat or gamma", "Count degrees of freedom, then apply equipartition", "Confirm monatomic or diatomic assumption before counting"],
        ["Rate of molecular collisions or diffusion", "Mean free path relation", "Check which variables are held fixed"],
        ["Gas equation at high pressure or low temperature", "Flag possible deviation from ideal behaviour", "Do not force the ideal gas equation outside its assumptions"],
        ["Heat, work or a named process", "This chapter does not resolve it; move to Thermodynamics", "Confirm this is a process question, not a molecular-model question"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "ideal-gas-equation",
      expression: "PV = nRT",
      latex: "PV = nRT",
      meaning: "Equation of state of a perfect gas relating pressure, volume, moles and temperature.",
      variables: [
        { symbol: "P", meaning: "pressure", unit: "Pa" },
        { symbol: "V", meaning: "volume", unit: "m^3" },
        { symbol: "n", meaning: "number of moles", unit: "mol" },
        { symbol: "R", meaning: "universal gas constant", unit: "J/(mol.K)" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
      ],
      useWhen: "The gas is treated as ideal, at conditions where molecular size and intermolecular attraction are negligible.",
      commonTrap: "Using this equation unmodified at high pressure or low temperature where deviation from ideal behaviour is significant.",
      accessibleText: "Pressure times volume equals number of moles times the gas constant times absolute temperature.",
    },
    {
      id: "pressure-kinetic",
      expression: "P = (1/3) rho v_rms^2",
      latex: "P = \\frac{1}{3}\\rho v_{rms}^2",
      meaning: "Pressure expressed in terms of gas density and mean square molecular speed.",
      variables: [
        { symbol: "P", meaning: "pressure", unit: "Pa" },
        { symbol: "rho", meaning: "gas density", unit: "kg/m^3" },
        { symbol: "v_rms", meaning: "root mean square speed", unit: "m/s" },
      ],
      useWhen: "Applying the kinetic-theory derivation of pressure from molecular collisions.",
      commonTrap: "Substituting average speed or most probable speed in place of rms speed here.",
      accessibleText: "Pressure equals one third of density times root mean square speed squared.",
    },
    {
      id: "rms-speed",
      expression: "v_rms = sqrt(3RT/M) = sqrt(3kT/m)",
      latex: "v_{rms} = \\sqrt{3RT/M} = \\sqrt{3kT/m}",
      meaning: "Root mean square speed of gas molecules in terms of temperature and molar or molecular mass.",
      variables: [
        { symbol: "M", meaning: "molar mass", unit: "kg/mol" },
        { symbol: "m", meaning: "mass of one molecule", unit: "kg" },
        { symbol: "k", meaning: "Boltzmann constant", unit: "J/K" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
      ],
      useWhen: "The question asks for rms speed or a quantity that traces back to mean square speed, such as pressure or kinetic energy.",
      commonTrap: "Treating this as the average speed of molecules; it is not.",
      accessibleText: "Root mean square speed equals the square root of three R T over M, or equivalently three k T over m.",
    },
    {
      id: "average-speed",
      expression: "v_avg = sqrt(8RT/(pi M))",
      latex: "v_{avg} = \\sqrt{8RT/(\\pi M)}",
      meaning: "Mean speed of gas molecules from the Maxwell speed distribution.",
      variables: [{ symbol: "v_avg", meaning: "average speed", unit: "m/s" }],
      useWhen: "The question specifically asks for the mean speed of molecules, not rms or most probable speed.",
      commonTrap: "Assuming v_avg equals v_rms; the coefficients differ.",
      accessibleText: "Average speed equals the square root of eight R T over pi M.",
    },
    {
      id: "most-probable-speed",
      expression: "v_mp = sqrt(2RT/M)",
      latex: "v_{mp} = \\sqrt{2RT/M}",
      meaning: "Speed at which the Maxwell speed distribution has its maximum.",
      variables: [{ symbol: "v_mp", meaning: "most probable speed", unit: "m/s" }],
      useWhen: "The question asks for the speed at the peak of the molecular speed distribution.",
      commonTrap: "Confusing this with the average or rms speed; the three are always in the order v_mp < v_avg < v_rms.",
      accessibleText: "Most probable speed equals the square root of two R T over M.",
    },
    {
      id: "temperature-kinetic-energy",
      expression: "(1/2) m v_rms^2 = (3/2) kT per molecule",
      latex: "\\tfrac{1}{2}mv_{rms}^2 = \\tfrac{3}{2}kT",
      meaning: "Kinetic interpretation of temperature: average translational kinetic energy per molecule is proportional to absolute temperature.",
      variables: [{ symbol: "T", meaning: "absolute temperature", unit: "K" }],
      useWhen: "Relating molecular translational kinetic energy directly to temperature, independent of gas identity.",
      commonTrap: "Applying this translational-only relation to total internal energy of a diatomic or polyatomic gas without adding the other degrees of freedom.",
      accessibleText: "One half m v rms squared equals three halves k T, per molecule.",
    },
    {
      id: "internal-energy-per-mole",
      expression: "U = (f/2) nRT",
      latex: "U = \\tfrac{f}{2}nRT",
      meaning: "Internal energy of an ideal gas from the equipartition of energy over its degrees of freedom.",
      variables: [
        { symbol: "f", meaning: "degrees of freedom per molecule", unit: "dimensionless" },
        { symbol: "U", meaning: "internal energy", unit: "J" },
      ],
      useWhen: "The degrees of freedom for the gas have already been fixed, for example 3 for monatomic or 5 for diatomic at moderate temperature.",
      commonTrap: "Using f = 3 for a diatomic gas by habit instead of checking whether rotational modes are active.",
      accessibleText: "Internal energy equals f over two times n times R times T.",
    },
    {
      id: "cv-from-f",
      expression: "Cv = (f/2) R",
      latex: "C_v = \\tfrac{f}{2}R",
      meaning: "Molar specific heat at constant volume from degrees of freedom.",
      variables: [{ symbol: "Cv", meaning: "molar specific heat at constant volume", unit: "J/(mol.K)" }],
      useWhen: "Deriving Cv purely from the kinetic model, before using it inside a thermodynamic process.",
      commonTrap: "Quoting a numeric Cv value for a gas without stating which degrees-of-freedom count it assumes.",
      accessibleText: "Molar specific heat at constant volume equals f over two times R.",
    },
    {
      id: "cp-from-f",
      expression: "Cp = Cv + R = ((f+2)/2) R",
      latex: "C_p = C_v + R = \\tfrac{f+2}{2}R",
      meaning: "Molar specific heat at constant pressure, obtained from Cv using the ideal gas relation.",
      variables: [{ symbol: "Cp", meaning: "molar specific heat at constant pressure", unit: "J/(mol.K)" }],
      useWhen: "An ideal gas undergoes a constant-pressure process and Cv is already known.",
      commonTrap: "Adding R twice, once here and again inside a process calculation.",
      accessibleText: "Molar specific heat at constant pressure equals molar specific heat at constant volume plus R.",
    },
    {
      id: "gamma-ratio",
      expression: "gamma = Cp/Cv = (f+2)/f",
      latex: "\\gamma = C_p/C_v = (f+2)/f",
      meaning: "Ratio of specific heats, fixed once the degrees of freedom are fixed.",
      variables: [{ symbol: "gamma", meaning: "ratio of specific heats", unit: "dimensionless" }],
      useWhen: "The degrees-of-freedom count for the gas is settled and gamma is needed, including for use inside an adiabatic process elsewhere.",
      commonTrap: "Using a gamma value appropriate to a monatomic gas for a diatomic gas or vice versa.",
      accessibleText: "Gamma equals Cp over Cv, which equals f plus two over f.",
    },
    {
      id: "mean-free-path",
      expression: "lambda = 1/(sqrt(2) pi d^2 n)",
      latex: "\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n}",
      meaning: "Average distance a molecule travels between successive collisions.",
      variables: [
        { symbol: "lambda", meaning: "mean free path", unit: "m" },
        { symbol: "d", meaning: "molecular diameter", unit: "m" },
        { symbol: "n", meaning: "number density of molecules", unit: "1/m^3" },
      ],
      useWhen: "Estimating molecular-scale transport behaviour, such as how far a molecule travels before colliding again.",
      commonTrap: "Forgetting that number density n depends on pressure and temperature through the gas equation, so lambda is not a fixed constant for a gas.",
      accessibleText: "Mean free path equals one over root two pi d squared n.",
    },
    {
      id: "avogadro-relation",
      expression: "N = n N_A",
      latex: "N = nN_A",
      meaning: "Total number of molecules from number of moles and Avogadro's number.",
      variables: [
        { symbol: "N", meaning: "total number of molecules", unit: "dimensionless" },
        { symbol: "N_A", meaning: "Avogadro's number", unit: "1/mol" },
      ],
      useWhen: "Converting between a mole-based and a molecule-count-based form of a kinetic-theory relation.",
      commonTrap: "Mixing per-mole and per-molecule constants, such as R and k, without converting through N_A.",
      accessibleText: "Total number of molecules equals number of moles times Avogadro's number.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked examples                                                     */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "rms-speed-example",
      prompt: "Find the rms speed of oxygen molecules at 300 K, given molar mass of oxygen is 0.032 kg/mol and R = 8.31 J/(mol.K).",
      steps: [
        { type: "paragraph", children: [{ text: "Use v_rms = sqrt(3RT/M)." }] },
        { type: "paragraph", children: [{ text: "Substitute R = 8.31, T = 300, M = 0.032." }] },
        { type: "paragraph", children: [{ text: "3RT/M = (3 x 8.31 x 300) / 0.032 = 7479 / 0.032, approximately 233700 (m/s)^2." }] },
        { type: "paragraph", children: [{ text: "Take the square root to get v_rms, approximately 483 m/s." }] },
      ],
      answer: "v_rms is approximately 483 m/s.",
    },
    {
      id: "cv-diatomic-example",
      prompt: "A diatomic gas is treated with 5 degrees of freedom at moderate temperature. Find Cv, Cp and gamma using R = 8.31 J/(mol.K).",
      steps: [
        { type: "paragraph", children: [{ text: "Use Cv = (f/2) R with f = 5, giving Cv = 2.5 R, approximately 20.8 J/(mol.K)." }] },
        { type: "paragraph", children: [{ text: "Use Cp = Cv + R, giving Cp = 3.5 R, approximately 29.1 J/(mol.K)." }] },
        { type: "paragraph", children: [{ text: "Use gamma = Cp/Cv = 3.5/2.5 = 7/5 = 1.4." }] },
      ],
      answer: "Cv is 2.5R, Cp is 3.5R, gamma is 1.4.",
    },
    {
      id: "speed-order-example",
      prompt: "For the same gas at the same temperature, order the most probable speed, average speed and rms speed.",
      steps: [
        { type: "paragraph", children: [{ text: "Recall v_mp = sqrt(2RT/M), v_avg = sqrt(8RT/(pi M)), v_rms = sqrt(3RT/M)." }] },
        { type: "paragraph", children: [{ text: "Compare the numerical coefficients inside each square root: 2, 8/pi (about 2.55), and 3." }] },
        { type: "paragraph", children: [{ text: "Since 2 < 8/pi < 3, the ordering is v_mp < v_avg < v_rms." }] },
      ],
      answer: "v_mp is less than v_avg, which is less than v_rms, for the same gas at the same temperature.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Mistakes (B... error diagnosis)                                     */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "speed-confusion",
      mistake: "Using rms speed, average speed and most probable speed interchangeably",
      why: [
        { type: "paragraph", children: [{ text: "The three speeds come from different moments of the same speed distribution and are never numerically equal." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify which speed the question names before selecting a formula." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "wrong-degrees-of-freedom",
      mistake: "Assigning degrees of freedom without checking whether the gas is monatomic or diatomic",
      why: [
        { type: "paragraph", children: [{ text: "Specific heats and gamma both depend directly on the degrees-of-freedom count." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State the molecule type and its degrees of freedom explicitly before computing Cv, Cp or gamma." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "temperature-total-energy",
      mistake: "Treating the temperature-kinetic-energy relation as giving total internal energy for any gas",
      why: [
        { type: "paragraph", children: [{ text: "That relation gives only average translational kinetic energy per molecule, not the contribution of rotational or vibrational modes." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use U = (f/2) nRT with the full degrees-of-freedom count for total internal energy." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "ideal-gas-outside-range",
      mistake: "Applying PV = nRT unmodified at high pressure or low temperature",
      why: [
        { type: "paragraph", children: [{ text: "At those conditions molecular size and intermolecular attraction are no longer negligible, so the ideal-gas assumptions fail." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check whether the question signals non-ideal behaviour before using the unmodified ideal gas equation." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "mean-free-path-constant",
      mistake: "Treating mean free path as a fixed property of a gas",
      why: [
        { type: "paragraph", children: [{ text: "Mean free path depends on number density, which changes with pressure and temperature." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Recompute mean free path whenever pressure or temperature changes." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "cp-cv-double-count",
      mistake: "Adding R twice when moving from Cv to Cp and then again inside a process calculation",
      why: [
        { type: "paragraph", children: [{ text: "Cp = Cv + R is a single, fixed relation for an ideal gas." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Fix Cp once from Cv and R, then reuse that value consistently." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "boundary-with-thermodynamics",
      mistake: "Expecting process-level heat and work relations to appear on this page",
      why: [
        { type: "paragraph", children: [{ text: "This chapter covers only the molecular model behind pressure, temperature and specific heats." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Move to Thermodynamics for heat, work, and the first and second laws." }], },
      ],
      errorType: "needs-review",
    },
    {
      id: "boundary-with-thermal-properties",
      mistake: "Looking here for thermal expansion or calorimetry results",
      why: [
        { type: "paragraph", children: [{ text: "Expansion, calorimetry and heat-transfer modes are not part of the kinetic gas model covered on this page." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Move to Thermal Properties for expansion, calorimetry and heat transfer." }] },
      ],
      errorType: "needs-review",
    },
    {
      id: "bare-numeric-speed",
      mistake: "Giving a bare numeric speed without stating units or which speed was computed",
      why: [
        { type: "paragraph", children: [{ text: "A number alone cannot be checked for dimensional correctness or matched to the question's intent." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State SI units and name the speed, for example rms speed, alongside the numeric answer." }] },
      ],
      errorType: "execution-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs                                                                */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What does Kinetic Theory of Gases cover for JEE?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It covers the kinetic model of a gas, the derivation of pressure from molecular collisions, the kinetic interpretation of temperature, rms, average and most probable speeds, degrees of freedom, the law of equipartition of energy and its use for specific heats and gamma, mean free path, Avogadro's number, and the ideal gas equation with its deviations at syllabus level.",
            },
          ],
        },
      ],
    },
    {
      question: "How is Kinetic Theory of Gases different from Thermodynamics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Kinetic Theory of Gases explains gas behaviour from a molecular model and derives quantities such as specific heats from that model. Thermodynamics uses those quantities inside heat and work relations, processes and the first and second laws. Process-level derivations belong to Thermodynamics.",
              href: "/jee/physics/thermodynamics",
            },
          ],
        },
      ],
    },
    {
      question: "How is Kinetic Theory of Gases different from Thermal Properties of Matter?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Thermal Properties of Matter covers thermal expansion, calorimetry and heat transfer by conduction, convection and radiation. Kinetic Theory of Gases covers the molecular model behind pressure, temperature and specific heats of a gas. This page does not repeat expansion or calorimetry content.",
              href: "/jee/physics/thermal-properties",
            },
          ],
        },
      ],
    },
    {
      question: "Are rms speed, average speed and most probable speed the same?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. For the same gas at the same temperature, most probable speed is less than average speed, which is less than rms speed. Each comes from a different moment of the molecular speed distribution." },
          ],
        },
      ],
    },
    {
      question: "Why do degrees of freedom matter for specific heats?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "The law of equipartition of energy assigns the same average energy to each degree of freedom. The count of degrees of freedom therefore fixes internal energy, Cv, Cp and gamma directly, so an incorrect count produces an incorrect specific heat." },
          ],
        },
      ],
    },
    {
      question: "Is the ideal gas equation always valid?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Only within the assumptions of the kinetic model. At high pressure or low temperature, molecular size and intermolecular attraction are no longer negligible and real gases deviate from ideal behaviour, at the qualitative level described in the current syllabus." },
          ],
        },
      ],
    },
    {
      question: "Is Kinetic Theory of Gases scope identical for JEE Main and JEE Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. JEE Main lists a dedicated Kinetic Theory of Gases unit naming assumptions, pressure, kinetic interpretation of temperature, rms speed, degrees of freedom, equipartition, specific heats, mean free path and Avogadro's number. JEE Advanced groups ideal gas laws and specific heats inside a broader Thermal Physics block without itemising every kinetic-theory topic by name. Check the current official document for either target." },
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
      label: "Thermodynamics",
      url: "/jee/physics/thermodynamics",
      relation: "forward",
      description: "Uses these specific heats inside processes, heat, work and the first and second laws.",
    },
    {
      label: "Thermal Properties of Matter",
      url: "/jee/physics/thermal-properties",
      relation: "related",
      description: "Thermal expansion, calorimetry and heat transfer for the same substances.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Momentum change on collision, used directly to derive gas pressure.",
    },
    {
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "SI units and dimensional consistency before molecular quantities.",
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
  /* Provenance                                                          */
  /* ------------------------------------------------------------------ */
  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official JEE Main syllabus and the JEE (Advanced) 2026 syllabus, both re-checked on 8 September 2026. JEE Advanced groups thermal topics into one Thermal Physics block rather than a dedicated kinetic-theory unit, and that difference is stated rather than smoothed over. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a physics education writer experienced in converting senior-secondary Physics into student-facing JEE learning structures.",
    "Academic reviewer: postgraduate qualification in Physics or a closely related field, plus recent JEE Main and JEE Advanced teaching or curriculum-review experience.",
    "Independent checker: a physics educator or subject editor who verifies equations, unit consistency, degrees-of-freedom assumptions, worked reasoning and mobile rendering separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Kinetic Theory of Gases for JEE Physics: Official Scope, Method and Formulas",
    description:
      "Official JEE Main and Advanced scope for Kinetic Theory of Gases, a concept map from molecular assumptions to specific heats, a method selector, condition-aware formula cards and an error diagnosis framework. No invented weightage.",
    ogTitle: "Kinetic Theory of Gases for JEE: from molecular model to specific heats",
    ogDescription:
      "Official syllabus mapping, prerequisites, concept architecture, formula conditions and error diagnosis for JEE Kinetic Theory of Gases.",
  },
};

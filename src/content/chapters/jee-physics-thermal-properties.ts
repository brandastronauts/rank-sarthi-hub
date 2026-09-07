import type { ChapterContent } from "@/content/types";

/**
 * Thermal Properties of Matter — T06 production content.
 *
 * Scope owned here: temperature and thermometry, thermal expansion of
 * solids and liquids, calorimetry, specific and latent heat, change of
 * state, heat transfer (conduction, convection, radiation), thermal
 * resistance in series and parallel, Newton's law of cooling, and the
 * Stefan-Boltzmann and Wien results as listed in the official syllabus.
 *
 * Boundary: the laws and processes of thermodynamics (zeroth to second
 * law, work, internal energy, specific heats of gases, cyclic and
 * adiabatic processes) belong to /jee/physics/thermodynamics. The
 * microscopic kinetic model of gases (pressure from molecular motion,
 * degrees of freedom, mean free path) belongs to
 * /jee/physics/kinetic-theory-of-gases. Both are linked, not duplicated.
 *
 * Evidence discipline: no weightage, PYQ counts or trend claims are
 * asserted. No reviewer/author id exists yet, so contentStatus stays
 * "draft" and the registry keeps this URL on noindex until review.
 */
export const jeePhysicsThermalProperties: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Thermal Properties of Matter",
  slug: "thermal-properties",
  url: "/jee/physics/thermal-properties",
  canonicalIntent:
    "Apply temperature scales, thermal expansion, calorimetry with specific and latent heat, and the three modes of heat transfer to solve JEE-level problems, and choose the correct heat-transfer model for a given setup.",

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
          text: "Thermal Properties of Matter covers how temperature is measured and scaled, how solids and liquids expand on heating, how heat exchanged in mixing or state change is accounted for through specific and latent heat, and how heat moves by conduction, convection and radiation.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This chapter treats heat as a quantity that is measured and transferred. It does not derive gas laws from molecular motion, and it does not develop the first and second laws of thermodynamics; those belong to the adjoining chapters linked below.",
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
      description: "Stabilise SI units, dimensions and unit conversion before temperature and heat quantities.",
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
    unit: "Thermal Properties of Matter",
    topics: [
      "Thermal expansion of solids, liquids and gases",
      "Specific heat capacity",
      "Calorimetry, latent heat",
      "Heat conduction in one dimension",
      "Elementary convection",
      "Thermal radiation, Stefan Boltzmann law",
      "Newton's law of cooling",
      "Wien's displacement law",
      "Green house effect",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  conceptBlocks: [
    {
      id: "temperature-and-scales",
      title: "1. Fix a temperature scale before calculating",
      keyIdea: "A temperature value is meaningless without stating the scale it is read on.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Temperature is a measured quantity read on a defined scale, such as Celsius, Fahrenheit or Kelvin. Convert every value to one scale, usually Kelvin, before using it in a formula that assumes an absolute scale.",
            },
          ],
        },
      ],
    },
    {
      id: "thermal-expansion",
      title: "2. Separate linear, area and volume expansion",
      keyIdea: "Linear, area and superficial, and volume expansion coefficients apply to different dimensions of the same solid.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A solid heated through a temperature change extends in length, area and volume with related but distinct coefficients. For an isotropic solid the area coefficient is about twice, and the volume coefficient about three times, the linear coefficient, over the interval where these coefficients are treated as constant.",
            },
          ],
        },
      ],
    },
    {
      id: "liquid-expansion",
      title: "3. Distinguish apparent and real expansion in liquids",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A liquid is held in a container, so the container itself expands on heating. The expansion observed from outside is the apparent expansion; the true expansion of the liquid is the apparent expansion plus the expansion of the container.",
            },
          ],
        },
      ],
    },
    {
      id: "calorimetry-principle",
      title: "4. Use the calorimetry principle for mixing and state change",
      keyIdea: "In an isolated system, heat lost by hotter substances equals heat gained by cooler substances.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When substances at different temperatures are mixed in an isolated container, heat lost by the substances that cool down equals heat gained by the substances that warm up, once every mass, specific heat and latent heat term present in the exchange is included.",
            },
          ],
        },
      ],
    },
    {
      id: "specific-and-latent-heat",
      title: "5. Separate temperature change from state change",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Heat that changes temperature is governed by specific heat capacity. Heat that changes state at a constant temperature, such as melting or vaporisation, is governed by latent heat. Both can occur in sequence in one heating process, and a temperature-versus-heat graph shows flat plateaus at each state change.",
            },
          ],
        },
      ],
    },
    {
      id: "conduction",
      title: "6. Model steady-state conduction with thermal resistance",
      keyIdea: "Thermal resistance in series adds; thermal resistance in parallel combines as reciprocals, mirroring electrical resistance.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In steady-state one-dimensional conduction, heat current depends on the temperature difference across a slab, its thickness, cross-section and thermal conductivity. Slabs in series carry the same heat current with resistances adding; slabs in parallel share the same temperature difference with combined conductance adding.",
            },
          ],
        },
      ],
    },
    {
      id: "convection-and-radiation",
      title: "7. Treat convection qualitatively and radiation quantitatively",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Convection carries heat through the bulk motion of a fluid and is reasoned about qualitatively at this level. Radiation is quantitative: every body above absolute zero radiates energy, and a perfect black body radiates according to the Stefan-Boltzmann law with its spectrum peak located by Wien's displacement law.",
            },
          ],
        },
      ],
    },
    {
      id: "newtons-cooling",
      title: "8. Apply Newton's law of cooling within its limit",
      keyIdea: "Newton's law of cooling is an approximation valid only for a small temperature excess over the surroundings.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Newton's law of cooling approximates the rate of loss of heat as proportional to the temperature excess of a body over its surroundings. This approximation holds only when that excess is small; it is not a substitute for the full radiation law at large temperature differences.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is the chapter about?",
          "How temperature is measured and scaled, how solids and liquids expand, how heat is accounted for in mixing and state change through specific and latent heat, and how heat transfers by conduction, convection and radiation.",
        ],
        [
          "What is the central method choice?",
          "Convert temperature scales before calculating, choose linear, area or volume expansion for the dimension asked, apply the calorimetry principle for mixtures and state changes, and model conduction with thermal resistance in series or parallel before reaching for convection or radiation results.",
        ],
        [
          "Where do most mistakes begin?",
          "Mixing apparent and real liquid expansion, forgetting a latent heat term in a mixing problem, misapplying Newton's law of cooling outside its small-temperature-difference limit, and confusing the coefficients of linear, area and volume expansion.",
        ],
        [
          "What should come before this chapter?",
          "SI units and dimensions, algebra with proportional relations, and basic graph reading.",
        ],
        [
          "What is deliberately kept out of this chapter?",
          "The laws and processes of thermodynamics belong to Thermodynamics. The molecular model of gas pressure and molecular speeds belongs to Kinetic Theory of Gases.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Thermal Properties of Matter",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Temperature and thermal expansion",
          "Thermal expansion of solids, liquids and gases, and specific heat capacity, are explicitly listed.",
          "Covered as thermal expansion of solids, liquids and gases within the thermal physics scope.",
          "Keep a single temperature scale through every step of an expansion calculation.",
        ],
        [
          "Calorimetry and change of state",
          "Calorimetry and latent heat are explicitly listed.",
          "Covered under calorimetry and change of state with latent heat.",
          "Track every phase segment separately on a heat-versus-temperature graph.",
        ],
        [
          "Heat transfer",
          "Heat transfer, conduction, convection and radiation are explicitly listed.",
          "Covered under conduction, convection and radiation, including Newton's law of cooling.",
          "Confirm steady state before using a fixed thermal resistance model.",
        ],
        [
          "Radiation laws",
          "Newton's law of cooling and Stefan's law are explicitly listed.",
          "Stefan-Boltzmann law and Wien's displacement law are covered within radiation scope.",
          "Main and Advanced wording differs; keep both official documents available rather than relying on a combined coaching outline.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Thermal Properties of Matter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "SI units and dimensions",
          "Use SI units for temperature, heat and thermal conductivity consistently.",
          "Revise base units, dimensional formulas and unit conversion.",
        ],
        [
          "Algebra with proportional relations",
          "Rearrange a linear relation between heat, mass, specific heat and temperature change.",
          "Practise solving for an unknown in a proportional equation.",
        ],
        [
          "Graph reading",
          "Read a plateau on a temperature-versus-heat graph as a state change.",
          "Revise slope and flat segments as different physical regimes.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Match the physical setup to a method before writing an equation.",
      columns: ["Setup described", "First method", "Validation"],
      rows: [
        ["Temperature given on a different scale", "Convert to one common scale first", "Recheck the converted value against a known reference point"],
        ["A rod, plate or solid heated through a temperature change", "Apply linear, area or volume expansion as asked", "Confirm which dimension the question asks about"],
        ["A liquid in a container heated through a temperature change", "Real expansion equals apparent expansion plus container expansion", "Check whether the given coefficient is apparent or real"],
        ["Substances mixed at different temperatures", "Calorimetry principle: heat lost equals heat gained", "List every specific heat and latent heat term before equating"],
        ["Heating through melting or boiling", "Split the process into temperature-change and state-change segments", "Match each segment to its own heat quantity"],
        ["Steady heat flow through slabs", "Thermal resistance in series or parallel", "Confirm steady state and identify shared heat current or shared temperature difference"],
        ["Body cooling with a small excess temperature", "Newton's law of cooling", "Confirm the temperature excess over surroundings is small"],
        ["Radiating body at a given temperature", "Stefan-Boltzmann law for total power, Wien's law for peak wavelength", "Confirm the body is treated as a black body or check the emissivity given"],
      ],
    },
  ],

  sections: [
    {
      id: "readiness-check",
      slot: "prerequisites",
      heading: "Readiness check before starting Thermal Properties of Matter",
      concepts: [
        {
          id: "readiness-body",
          title: "Prepare units, proportional algebra and graph reading",
          body: [
            {
              type: "paragraph",
              children: [{ text: "You should be able to:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "use SI units and dimensions for temperature, heat and conductivity;" }],
                [{ text: "rearrange a proportional relation for an unknown;" }],
                [{ text: "read a graph's slope and flat segments;" }],
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

  formulas: [
    {
      id: "celsius-kelvin",
      expression: "T(K) = T(C) + 273.15",
      meaning: "Conversion from Celsius to Kelvin.",
      variables: [
        { symbol: "T(K)", meaning: "temperature in Kelvin", unit: "K" },
        { symbol: "T(C)", meaning: "temperature in Celsius", unit: "degree C" },
      ],
      useWhen: "A formula requires an absolute temperature scale.",
      commonTrap: "Using a Celsius value directly in a law that requires Kelvin.",
      accessibleText: "Temperature in Kelvin equals temperature in Celsius plus two hundred seventy three point one five.",
    },
    {
      id: "linear-expansion",
      expression: "L = L0 (1 + alpha * change in T)",
      meaning: "Length after linear thermal expansion.",
      variables: [
        { symbol: "L0", meaning: "original length", unit: "m" },
        { symbol: "alpha", meaning: "coefficient of linear expansion", unit: "per K" },
        { symbol: "change in T", meaning: "temperature change", unit: "K" },
      ],
      useWhen: "A solid's length is asked for over a temperature change where alpha is constant.",
      commonTrap: "Applying a linear expansion coefficient to an area or volume question.",
      accessibleText: "Final length equals original length times one plus alpha times the temperature change.",
    },
    {
      id: "area-expansion",
      expression: "A = A0 (1 + beta * change in T), beta approx 2 alpha",
      meaning: "Area after thermal expansion of an isotropic solid.",
      variables: [
        { symbol: "A0", meaning: "original area", unit: "m^2" },
        { symbol: "beta", meaning: "coefficient of area expansion", unit: "per K" },
      ],
      useWhen: "An isotropic solid's area is asked for and alpha is small.",
      commonTrap: "Using beta equal to alpha instead of about twice alpha.",
      accessibleText: "Final area equals original area times one plus beta times temperature change, where beta is about twice alpha.",
    },
    {
      id: "volume-expansion",
      expression: "V = V0 (1 + gamma * change in T), gamma approx 3 alpha",
      meaning: "Volume after thermal expansion of an isotropic solid.",
      variables: [
        { symbol: "V0", meaning: "original volume", unit: "m^3" },
        { symbol: "gamma", meaning: "coefficient of volume expansion", unit: "per K" },
      ],
      useWhen: "An isotropic solid's volume is asked for and alpha is small.",
      commonTrap: "Applying the same relation to a liquid without checking apparent versus real expansion.",
      accessibleText: "Final volume equals original volume times one plus gamma times temperature change, where gamma is about three times alpha.",
    },
    {
      id: "real-apparent-expansion",
      expression: "gamma_real = gamma_apparent + gamma_container",
      meaning: "Real expansion coefficient of a liquid in a container.",
      variables: [
        { symbol: "gamma_real", meaning: "real volume expansion coefficient of the liquid", unit: "per K" },
        { symbol: "gamma_apparent", meaning: "observed apparent volume expansion coefficient", unit: "per K" },
        { symbol: "gamma_container", meaning: "volume expansion coefficient of the container", unit: "per K" },
      ],
      useWhen: "A liquid's expansion is measured inside a container that itself expands.",
      commonTrap: "Reporting the apparent coefficient as if it were the liquid's true expansion.",
      accessibleText: "Real expansion coefficient equals apparent expansion coefficient plus the container's expansion coefficient.",
    },
    {
      id: "heat-capacity",
      expression: "Q = m c (change in T)",
      meaning: "Heat exchanged for a temperature change without a state change.",
      variables: [
        { symbol: "Q", meaning: "heat exchanged", unit: "J" },
        { symbol: "m", meaning: "mass", unit: "kg" },
        { symbol: "c", meaning: "specific heat capacity", unit: "J/(kg K)" },
        { symbol: "change in T", meaning: "temperature change", unit: "K" },
      ],
      useWhen: "Temperature changes but no phase change occurs over the interval.",
      commonTrap: "Applying this relation across a plateau where state is actually changing.",
      accessibleText: "Heat exchanged equals mass times specific heat capacity times temperature change.",
    },
    {
      id: "latent-heat",
      expression: "Q = m L",
      meaning: "Heat exchanged during a state change at constant temperature.",
      variables: [
        { symbol: "Q", meaning: "heat exchanged", unit: "J" },
        { symbol: "m", meaning: "mass changing state", unit: "kg" },
        { symbol: "L", meaning: "specific latent heat", unit: "J/kg" },
      ],
      useWhen: "A substance is melting, freezing, vaporising or condensing at constant temperature.",
      commonTrap: "Adding a temperature-change term during the plateau where temperature is constant.",
      accessibleText: "Heat exchanged equals mass times specific latent heat.",
    },
    {
      id: "calorimetry-balance",
      expression: "sum of heat lost = sum of heat gained",
      meaning: "Energy balance for substances exchanging heat in an isolated system.",
      variables: [
        { symbol: "heat lost", meaning: "heat given up by substances that cool", unit: "J" },
        { symbol: "heat gained", meaning: "heat absorbed by substances that warm or change state", unit: "J" },
      ],
      useWhen: "Substances at different temperatures are mixed with no heat exchanged with the surroundings.",
      commonTrap: "Omitting a latent heat term when ice or steam is present in the mixture.",
      accessibleText: "Total heat lost by the hotter substances equals total heat gained by the cooler substances.",
    },
    {
      id: "conduction-current",
      expression: "H = k A (change in T) / d",
      meaning: "Steady-state heat current through a conducting slab.",
      variables: [
        { symbol: "H", meaning: "heat current", unit: "W" },
        { symbol: "k", meaning: "thermal conductivity", unit: "W/(m K)" },
        { symbol: "A", meaning: "cross-sectional area", unit: "m^2" },
        { symbol: "change in T", meaning: "temperature difference across the slab", unit: "K" },
        { symbol: "d", meaning: "slab thickness", unit: "m" },
      ],
      useWhen: "Steady-state one-dimensional conduction through a slab of uniform cross-section.",
      commonTrap: "Using this relation before the system has reached steady state.",
      accessibleText: "Heat current equals thermal conductivity times area times temperature difference, divided by thickness.",
    },
    {
      id: "thermal-resistance-series",
      expression: "R_series = R1 + R2 + ...",
      meaning: "Thermal resistances add in series for slabs carrying the same heat current.",
      variables: [
        { symbol: "R_series", meaning: "combined thermal resistance", unit: "K/W" },
        { symbol: "R1, R2", meaning: "individual slab thermal resistances", unit: "K/W" },
      ],
      useWhen: "Slabs are stacked so the same steady heat current passes through each in turn.",
      commonTrap: "Adding conductances instead of resistances for a series arrangement.",
      accessibleText: "Series thermal resistance equals the sum of the individual thermal resistances.",
    },
    {
      id: "thermal-resistance-parallel",
      expression: "1 / R_parallel = 1/R1 + 1/R2 + ...",
      meaning: "Thermal resistances combine as reciprocals in parallel for slabs sharing the same temperature difference.",
      variables: [
        { symbol: "R_parallel", meaning: "combined thermal resistance", unit: "K/W" },
      ],
      useWhen: "Slabs are arranged side by side sharing the same two boundary temperatures.",
      commonTrap: "Adding resistances directly instead of combining reciprocals for a parallel arrangement.",
      accessibleText: "The reciprocal of the parallel thermal resistance equals the sum of the reciprocals of the individual resistances.",
    },
    {
      id: "stefan-boltzmann",
      expression: "P = e sigma A T^4",
      meaning: "Power radiated by a body from the Stefan-Boltzmann law.",
      variables: [
        { symbol: "P", meaning: "radiated power", unit: "W" },
        { symbol: "e", meaning: "emissivity", unit: "dimensionless, 0 to 1" },
        { symbol: "sigma", meaning: "Stefan-Boltzmann constant", unit: "W/(m^2 K^4)" },
        { symbol: "A", meaning: "surface area", unit: "m^2" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
      ],
      useWhen: "Total radiated power of a body at a known absolute temperature is required.",
      commonTrap: "Using a Celsius temperature instead of an absolute Kelvin temperature in this law.",
      accessibleText: "Radiated power equals emissivity times the Stefan-Boltzmann constant times area times temperature to the fourth power.",
    },
    {
      id: "wien-law",
      expression: "lambda_max T = b",
      meaning: "Wien's displacement law linking the peak radiation wavelength to absolute temperature.",
      variables: [
        { symbol: "lambda_max", meaning: "wavelength at peak spectral radiance", unit: "m" },
        { symbol: "T", meaning: "absolute temperature", unit: "K" },
        { symbol: "b", meaning: "Wien's constant", unit: "m K" },
      ],
      useWhen: "The peak wavelength or temperature of black body radiation is required.",
      commonTrap: "Confusing the peak wavelength with the total radiated power, which follows Stefan's law instead.",
      accessibleText: "Peak wavelength times absolute temperature equals Wien's constant.",
    },
    {
      id: "newtons-cooling-law",
      expression: "-dT/dt = k (T - T_surroundings)",
      meaning: "Rate of loss of heat as an approximation proportional to temperature excess.",
      variables: [
        { symbol: "T", meaning: "temperature of the body", unit: "K" },
        { symbol: "T_surroundings", meaning: "temperature of the surroundings", unit: "K" },
        { symbol: "k", meaning: "cooling constant for the body and setup", unit: "per s" },
      ],
      useWhen: "The temperature excess of the body over its surroundings stays small throughout the process.",
      commonTrap: "Applying this law at a large temperature excess where it is no longer a valid approximation.",
      accessibleText: "The negative rate of change of temperature equals a constant times the temperature excess over the surroundings.",
    },
  ],

  workedExamples: [
    {
      id: "worked-calorimetry-with-ice",
      prompt:
        "A block of ice at 0 degrees Celsius is added to water at a higher temperature in an insulated container. Set up the energy balance needed to find the final temperature, given the ice mass, water mass, specific heat of water and the latent heat of fusion of ice.",
      answer:
        "Heat lost by the warm water as it cools equals heat gained by the ice to melt plus heat gained by the melted ice to warm to the final temperature.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Identify the two heat quantities the ice absorbs: latent heat to melt, then specific heat to warm from 0 degrees Celsius to the final temperature." }],
            [{ text: "Identify the single heat quantity the water gives up: specific heat as it cools from its initial temperature to the final temperature." }],
            [{ text: "Write heat lost by the water equal to heat gained by the ice, with both latent heat and specific heat terms included on the ice side." }],
            [{ text: "Solve the resulting equation for the unknown final temperature." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "Omitting the latent heat term is the most common reason this type of calorimetry problem gives a wrong final temperature.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-series-conduction",
      prompt:
        "Two slabs of different thermal conductivity and equal cross-sectional area are joined end to end between two fixed temperatures, forming a series conduction path. Describe how to find the temperature at the junction in steady state.",
      answer:
        "The heat current is the same through both slabs in steady state, so the junction temperature is found by equating the heat current expressions for each slab.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Confirm the system has reached steady state, so heat current does not change with time." }],
            [{ text: "Write the heat current through the first slab using its own conductivity, area, thickness and temperature difference to the junction." }],
            [{ text: "Write the heat current through the second slab from the junction to the other fixed temperature." }],
            [{ text: "Set the two heat current expressions equal, since the same current passes through both slabs in series, and solve for the junction temperature." }],
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "scale-mixup",
      mistake: "Mixing Celsius and Kelvin values in the same calculation",
      why: [
        { type: "paragraph", children: [{ text: "Laws such as the Stefan-Boltzmann law require an absolute temperature scale." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Convert every temperature to Kelvin before substituting into a law that needs an absolute scale." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "expansion-coefficient-confusion",
      mistake: "Using the linear expansion coefficient for an area or volume question",
      why: [
        { type: "paragraph", children: [{ text: "Linear, area and volume expansion coefficients are related but distinct for the dimension asked." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify whether the question asks for length, area or volume before choosing alpha, beta or gamma." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "apparent-real-expansion-mix",
      mistake: "Reporting a liquid's apparent expansion as its real expansion",
      why: [
        { type: "paragraph", children: [{ text: "The container also expands, so what is observed is smaller than the liquid's own expansion." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Add the container's expansion coefficient to the apparent coefficient to get the real coefficient." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "missing-latent-heat-term",
      mistake: "Dropping the latent heat term in a mixing problem involving ice or steam",
      why: [
        { type: "paragraph", children: [{ text: "Melting or vaporising a substance requires heat at constant temperature, separate from any temperature change term." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "List every state change present before writing the calorimetry balance equation." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "steady-state-assumption",
      mistake: "Using the steady-state conduction formula before steady state is reached",
      why: [
        { type: "paragraph", children: [{ text: "Heat current only stays fixed once the temperature distribution in the slab has stopped changing with time." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check the problem states or implies steady state before applying the fixed heat-current formula." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "series-parallel-resistance-mix",
      mistake: "Adding thermal resistances directly for a parallel arrangement",
      why: [
        { type: "paragraph", children: [{ text: "Only series thermal resistances add directly; parallel resistances combine through reciprocals." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check whether slabs share the same heat current (series) or the same temperature difference (parallel) before combining." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "cooling-law-overreach",
      mistake: "Applying Newton's law of cooling at a large temperature excess",
      why: [
        { type: "paragraph", children: [{ text: "The law is an approximation that only holds for a small temperature excess over the surroundings." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check the size of the temperature excess before relying on this approximation." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "stefan-wien-confusion",
      mistake: "Confusing Wien's displacement law with the Stefan-Boltzmann law",
      why: [
        { type: "paragraph", children: [{ text: "Wien's law locates the peak wavelength; the Stefan-Boltzmann law gives the total radiated power." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Match the quantity asked, wavelength or power, to the correct law before substituting values." }] },
      ],
      errorType: "knowledge-gap",
    },
  ],

  faqs: [
    {
      question: "What does Thermal Properties of Matter cover for JEE?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It covers temperature scales, thermal expansion of solids and liquids, calorimetry with specific and latent heat, and heat transfer by conduction, convection and radiation, including Newton's law of cooling, the Stefan-Boltzmann law and Wien's displacement law.",
            },
          ],
        },
      ],
    },
    {
      question: "Is this the same as Thermodynamics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Thermodynamics covers the laws and processes such as work, internal energy and cyclic processes. Thermal Properties of Matter covers temperature, expansion, calorimetry and heat transfer.",
            },
          ],
        },
      ],
    },
    {
      question: "How is this different from Kinetic Theory of Gases?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Kinetic Theory of Gases explains pressure and temperature from molecular motion. Thermal Properties of Matter treats heat and temperature as measured quantities without that molecular model.",
            },
          ],
        },
      ],
    },
    {
      question: "When can I use Newton's law of cooling?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Only when the temperature excess of the body over its surroundings stays small throughout the process; it is an approximation, not an exact law.",
            },
          ],
        },
      ],
    },
    {
      question: "Why do apparent and real expansion of a liquid differ?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The container holding the liquid also expands on heating, so the volume change observed from outside is smaller than the liquid's true expansion.",
            },
          ],
        },
      ],
    },
    {
      question: "Do thermal resistances add the same way as electrical resistances?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The pattern is similar: thermal resistances add directly in series, and combine through reciprocals in parallel, under steady-state conduction.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Thermodynamics",
      url: "/jee/physics/thermodynamics",
      relation: "related",
      description: "Covers the laws and processes of heat and work, kept separate from the measurement of heat and temperature covered here.",
    },
    {
      label: "Kinetic Theory of Gases",
      url: "/jee/physics/kinetic-theory-of-gases",
      relation: "related",
      description: "Covers the molecular model behind gas pressure and temperature, kept separate from the macroscopic treatment here.",
    },
    {
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Stabilise SI units and dimensions before temperature and heat quantities.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "related",
      description: "Uses similar graph-reading and proportional-relation skills applied to periodic motion.",
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
      description: "Practise with reviewed official problems.",
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Author: a JEE Physics educator or academic content specialist experienced in thermal physics and heat transfer.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE teaching and solution-review experience, covering thermal expansion, calorimetry, conduction with thermal resistance, and radiation laws.",
    "Independent checker: verifies official mapping, formula conditions, the boundary against Thermodynamics and Kinetic Theory of Gases, and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Thermal Properties of Matter for JEE: Expansion, Heat and Transfer",
    description:
      "Learn Thermal Properties of Matter for JEE Main and Advanced through temperature scales, thermal expansion, calorimetry, latent heat, and conduction, convection and radiation with official scope and diagnosis.",
    ogTitle: "Thermal Properties of Matter for JEE, From Temperature to Radiation",
    ogDescription:
      "A structured guide to thermal expansion, calorimetry, latent heat and heat transfer with official scope, formulas and common traps.",
  },
};

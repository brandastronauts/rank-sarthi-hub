import type { ChapterContent } from "@/content/types";

/**
 * Capacitance — T06 production content.
 *
 * Scope boundary: field and potential fundamentals belong to
 * /jee/physics/electrostatics and are linked, not repeated. Circuit-level
 * treatment (Kirchhoff's rules, resistive networks, meters) belongs to
 * /jee/physics/current-electricity. This page stays inside capacitor-specific
 * territory: capacitance definition, standard geometries named in the
 * official syllabus, combinations, energy and energy density, dielectrics
 * and polarisation, the charge-vs-voltage-constant distinction, and the
 * RC charging/discharging behaviour that the official syllabus itself lists
 * under capacitors.
 *
 * Evidence discipline:
 * - No weightage, question-count or trend records are asserted.
 * - No PYQ records; official archives are linked instead.
 * - No reviewer/author id until a verified person exists.
 * - contentStatus stays "draft" pending academic review.
 */
export const jeePhysicsCapacitance: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Capacitance",
  slug: "capacitance",
  url: "/jee/physics/capacitance",
  canonicalIntent:
    "Understand the official JEE scope of Capacitance, connect capacitor geometry, combinations, dielectrics and energy, choose the correct solving method and diagnose why capacitor questions go wrong.",

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
          text: "Capacitance is the ratio of charge stored on a conductor system to the potential difference across it. For JEE, the chapter covers the capacitance of standard geometries, series and parallel combinations, energy stored in a capacitor and its field-energy interpretation, the effect of dielectrics, and the redistribution of charge when capacitors are connected or reconnected.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ text: "The chapter is easier to handle once you separate three layers:" }],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "geometry and medium fix the capacitance value, the connection state (isolated or battery-held) fixes what stays constant when something changes, and energy bookkeeping tells you where work goes during charging, dielectric insertion or reconnection.",
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
        [{ text: "What does the official syllabus actually require for capacitors?" }],
        [{ text: "Which combination rule or energy relation applies to a given connection state?" }],
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
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Electric field, potential, potential difference and conductors are owned there, not repeated here.",
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
    unit: "Electrostatics (Capacitance)",
    topics: [
      "Conductors and equipotential surfaces",
      "Electric field and potential due to a charged conductor",
      "Dielectrics and electric polarisation",
      "Capacitance of a system of charged conductors",
      "Capacitance of a parallel-plate capacitor with and without a dielectric medium",
      "Combination of capacitors in series and in parallel",
      "Energy stored in a capacitor",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35)                                          */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "capacitance-definition",
      title: "1. Start from the definition, not a formula list",
      keyIdea: "Capacitance is a fixed ratio Q/Delta V for a given geometry and medium, not a property of the current charge.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A capacitor is a system of two conductors carrying equal and opposite charge, separated by an insulating medium. Its capacitance is defined as the ratio of the magnitude of charge on either conductor to the potential difference between them.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "C = Q / Delta V", code: true }] },
        {
          type: "paragraph",
          children: [
            {
              text: "For a fixed geometry and medium, C is a constant. Increasing the charge increases the potential difference in the same proportion, so the ratio does not change. Field and potential fundamentals used here are owned by the Electrostatics chapter and are only referenced, not re-derived.",
            },
          ],
        },
      ],
    },
    {
      id: "geometries",
      title: "2. Know the standard geometries the syllabus names",
      keyIdea: "The syllabus names the parallel-plate capacitor explicitly; other geometries are conceptually the same ratio applied to a different field calculation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official syllabus explicitly lists the capacitance of a system of charged conductors and the parallel-plate capacitor with and without a dielectric. Any capacitor geometry still reduces to finding the field between the conductors and integrating it to get the potential difference, then applying C = Q / Delta V.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Parallel-plate capacitor: field is uniform between the plates, so Delta V = E d." }],
            [
              {
                text: "Other standard geometries (spherical, cylindrical): the same ratio definition applies, but the field between the conductors is not uniform, so Delta V requires integrating the field along the separation.",
              },
            ],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Do not assume every capacitor geometry is explicitly listed in the current official syllabus. Confirm the exact wording in the syllabus mapping table below before treating a non-parallel-plate geometry as guaranteed scope.",
            },
          ],
        },
      ],
    },
    {
      id: "series-parallel",
      title: "3. Choose series or parallel by what is shared, not by the picture",
      keyIdea: "Series combination shares charge; parallel combination shares potential difference.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In a series combination each capacitor carries the same charge and the potential differences add. In a parallel combination each capacitor has the same potential difference and the charges add.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "1/C_series = 1/C1 + 1/C2 + ...", code: true }] },
        { type: "paragraph", children: [{ text: "C_parallel = C1 + C2 + ...", code: true }] },
        {
          type: "paragraph",
          children: [
            {
              text: "A network that is neither purely series nor purely parallel must be reduced step by step, or solved through charge and potential relations at each node, before any single combination formula is applied.",
            },
          ],
        },
      ],
    },
    {
      id: "dielectrics",
      title: "4. Let the dielectric change the capacitance, not the plate charge in the isolated case",
      keyIdea: "A dielectric increases capacitance by reducing the net field through polarisation; what stays fixed depends on the connection state.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A dielectric placed between the plates polarises in the applied field. The bound surface charge produced by this polarisation opposes part of the original field, so the net field and hence the potential difference for the same free charge decreases. Because C = Q / Delta V, a smaller Delta V for the same Q means a larger capacitance.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "C_with_dielectric = K C_vacuum", code: true }] },
        {
          type: "paragraph",
          children: [
            {
              text: "K is the dielectric constant of the medium, always greater than or equal to 1 for the materials in this syllabus. Whether inserting the dielectric changes Q or changes Delta V depends entirely on whether the capacitor is isolated or still connected to a battery; that connection state must be identified before comparing before-and-after values.",
            },
          ],
        },
      ],
    },
    {
      id: "connection-state",
      title: "5. Identify what is held constant before comparing two states",
      keyIdea: "Every 'capacitor changes' problem is a constraint problem first and a formula problem second.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Any problem asking what happens when plate separation, area, or a dielectric changes needs the connection state fixed first:" },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Isolated capacitor (no battery connected): charge Q remains constant; Delta V and C change together to keep Q = C Delta V unchanged." }],
            [{ text: "Ideal battery remains connected: potential difference Delta V remains constant; Q changes as C changes." }],
            [{ text: "Capacitors connected to each other and then isolated: use charge conservation across the isolated system, not a fixed single-capacitor charge." }],
          ],
        },
      ],
    },
    {
      id: "energy-and-density",
      title: "6. Treat stored energy as belonging to the field, not just the plates",
      keyIdea: "Energy stored in a capacitor equals the work done to assemble the charge, and can be expressed per unit volume of the field region.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Charging a capacitor from zero charge does work against the growing potential difference. The stored energy is the accumulated work, and for a parallel-plate capacitor it can be reinterpreted as energy distributed through the field region between the plates.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "U = (1/2) C (Delta V)^2 = (1/2) Q Delta V = Q^2 / (2C)", code: true }] },
        { type: "paragraph", children: [{ text: "u = (1/2) epsilon E^2", code: true }] },
        {
          type: "paragraph",
          children: [
            {
              text: "The three forms of U are algebraically equivalent for the same state; choose the form that matches the quantity held fixed in the problem (charge fixed, voltage fixed, or capacitance changing).",
            },
          ],
        },
      ],
    },
    {
      id: "redistribution",
      title: "7. Use charge conservation for redistribution and connection problems",
      keyIdea: "When charged capacitors are connected, total charge is conserved and the final common potential follows from that total, not from either original voltage alone.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When two charged capacitors are connected plate to plate, charge redistributes until both reach the same potential difference. Total charge on the connected system is conserved; some electrostatic energy is generally lost during redistribution because the process is not quasi-static in the ideal wire-and-capacitor idealisation.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "Q1 + Q2 = (C1 + C2) V_common", code: true }] },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Do not assume energy is conserved in a redistribution problem. Charge is conserved; energy generally decreases because of the way an idealised connecting wire is treated in these problems.",
            },
          ],
        },
      ],
    },
    {
      id: "rc-behaviour",
      title: "8. Read RC charging and discharging as the syllabus limits it",
      keyIdea: "Capacitor charging and discharging through a resistor follow an exponential approach; the circuit-analysis machinery around it belongs to Current Electricity.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When a capacitor charges through a resistor from a battery, or discharges through a resistor, the charge and current vary exponentially with time, governed by the time constant of the resistor-capacitor combination. This page treats the capacitor-side result only. Building the driving circuit, applying Kirchhoff's rules and analysing resistor networks are treated in Current Electricity and are not repeated here.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "q(t) = Q0 (1 - e^(-t / RC))  [charging]", code: true }] },
        { type: "paragraph", children: [{ text: "q(t) = Q0 e^(-t / RC)  [discharging]", code: true }] },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "Confirm RC charging and discharging expressions against the current official syllabus wording before treating them as guaranteed scope for a specific JEE paper; see the scope table below.",
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
          "How conductor geometry and an intervening medium determine the ratio of stored charge to potential difference, how capacitors combine, how energy is stored, and how charge redistributes when capacitors are connected or a dielectric is inserted.",
        ],
        [
          "What is the central method choice?",
          "Identify the connection state (isolated or battery-held) first, then choose the series, parallel or field-based route for capacitance, and finally pick the energy expression that matches the fixed quantity.",
        ],
        [
          "Where do most mistakes begin?",
          "Skipping the connection-state check before comparing two states, mixing up series and parallel conditions, and assuming redistribution conserves energy.",
        ],
        [
          "What should come before Capacitance?",
          "Electric field, potential, potential difference and conductor behaviour from Electrostatics.",
        ],
        [
          "What comes after it?",
          "Current Electricity uses capacitor charging and discharging inside larger circuits and introduces resistive network analysis.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Capacitance",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Conductors and dielectrics",
          "Conductors, insulators, dielectrics and electric polarisation are listed under Electrostatics.",
          "Dielectrics appear through the capacitor scope; the cited Electrostatics lines do not separately name conductors or polarisation.",
          "Treat the polarisation mechanism as background needed for the dielectric-constant formula, not as a separately weighted topic here.",
        ],
        [
          "Capacitance and geometry",
          "Capacitance of a system of charged conductors and the parallel-plate capacitor with and without a dielectric medium are explicitly listed.",
          "The same parallel-plate capacitor scope is explicitly listed.",
          "The parallel-plate case is the one both documents name explicitly; verify any other geometry against the current document before relying on it.",
        ],
        [
          "Combinations",
          "Combination of capacitors in series and in parallel is explicitly listed.",
          "Series and parallel combinations are explicitly listed.",
          "Check what is shared (charge or potential difference) before applying a combination formula.",
        ],
        [
          "Energy",
          "Energy stored in a capacitor is explicitly listed.",
          "Energy stored in a capacitor is explicitly listed.",
          "Match the energy expression to whichever quantity, charge or voltage, is held fixed in the problem.",
        ],
        [
          "RC charging or discharging",
          "Verify the current official document wording directly; do not assume identical treatment to the Main scope without checking.",
          "Verify the current official document wording directly; do not assume identical treatment to the Advanced scope without checking.",
          "Treat exponential charging or discharging results as capacitor-side outcomes; the surrounding circuit analysis belongs to Current Electricity.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below. Main and Advanced scope should not be assumed identical; keep both official documents available.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Capacitance",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Electric field and potential",
          "Compute the field of simple charge distributions and relate field to potential difference.",
          "Revise the field, potential and potential-energy blocks in Electrostatics.",
        ],
        [
          "Conductors in equilibrium",
          "State why the field inside a conductor in equilibrium is zero and why its surface is equipotential.",
          "Revise the conductor block in Electrostatics before capacitor geometry.",
        ],
        [
          "Algebra with ratios and reciprocals",
          "Manipulate reciprocal sums without sign or inversion errors.",
          "Practise combining reciprocals before attempting series-combination problems.",
        ],
        [
          "Exponential functions",
          "Read and sketch an exponential growth or decay curve and identify its time constant.",
          "Revise exponential functions before RC charging or discharging expressions.",
        ],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: which capacitor approach applies",
      columns: ["Situation", "Use this approach", "Watch for"],
      rows: [
        [
          "Single capacitor, geometry given",
          "Find the field between the conductors, integrate for Delta V, apply C = Q / Delta V.",
          "Uniform field applies only to the parallel-plate case; other geometries need field-vs-distance integration.",
        ],
        [
          "Multiple capacitors, same charge path",
          "Series combination: 1/C_series = sum of 1/C_i.",
          "Series combination charge is the same on each capacitor, not the total supplied charge.",
        ],
        [
          "Multiple capacitors, same two nodes",
          "Parallel combination: C_parallel = sum of C_i.",
          "Parallel combination potential difference is the same across each capacitor, not divided among them.",
        ],
        [
          "Dielectric inserted, battery still connected",
          "Voltage fixed; recompute Q = (K C) Delta V and energy from (1/2) C Delta V^2.",
          "Energy stored increases because C increases while Delta V is unchanged.",
        ],
        [
          "Dielectric inserted, capacitor isolated",
          "Charge fixed; recompute Delta V = Q / (K C) and energy from Q^2 / (2C).",
          "Energy stored decreases because C increases while Q is unchanged.",
        ],
        [
          "Two charged capacitors connected together",
          "Apply charge conservation to get a common potential; do not assume energy conservation.",
          "Some energy is generally lost in the idealised connecting-wire redistribution process.",
        ],
        [
          "Capacitor charging or discharging through a resistor",
          "Use the exponential charge expression with time constant RC.",
          "Circuit-level current distribution and Kirchhoff analysis belong to Current Electricity, not this page.",
        ],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula bank                                                        */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "capacitance-definition",
      expression: "C = Q / Delta V",
      latex: "C = \\dfrac{Q}{\\Delta V}",
      meaning: "Capacitance as the ratio of stored charge to potential difference.",
      variables: [
        { symbol: "C", meaning: "Capacitance", unit: "F" },
        { symbol: "Q", meaning: "Magnitude of charge on either conductor", unit: "C" },
        { symbol: "Delta V", meaning: "Potential difference between the conductors", unit: "V" },
      ],
      useWhen: "Defining or computing capacitance for any two-conductor system in electrostatic equilibrium.",
      commonTrap: "Treating C as changing with Q for a fixed geometry and medium; C is constant for that system.",
      accessibleText: "Capacitance equals charge divided by potential difference.",
    },
    {
      id: "parallel-plate-vacuum",
      expression: "C = epsilon0 A / d",
      latex: "C = \\dfrac{\\varepsilon_0 A}{d}",
      meaning: "Capacitance of a parallel-plate capacitor with vacuum or air between the plates.",
      variables: [
        { symbol: "epsilon0", meaning: "Permittivity of free space", unit: "F/m" },
        { symbol: "A", meaning: "Area of overlap of the plates", unit: "m^2" },
        { symbol: "d", meaning: "Separation between the plates", unit: "m" },
      ],
      useWhen: "Plate separation is small compared to plate dimensions, so the field between the plates is uniform and fringing is neglected.",
      commonTrap: "Using the full plate area when only part of the plates overlap; use the overlapping area only.",
      accessibleText: "Capacitance equals permittivity of free space times area divided by separation.",
    },
    {
      id: "parallel-plate-dielectric",
      expression: "C = K epsilon0 A / d",
      latex: "C = \\dfrac{K \\varepsilon_0 A}{d}",
      meaning: "Capacitance of a parallel-plate capacitor completely filled with a dielectric of constant K.",
      variables: [
        { symbol: "K", meaning: "Dielectric constant of the medium", unit: "dimensionless" },
        { symbol: "epsilon0", meaning: "Permittivity of free space", unit: "F/m" },
        { symbol: "A", meaning: "Area of overlap of the plates", unit: "m^2" },
        { symbol: "d", meaning: "Separation between the plates", unit: "m" },
      ],
      useWhen: "The dielectric slab completely fills the gap between the plates and is the same thickness as the separation.",
      commonTrap: "Applying this directly when the dielectric only partially fills the gap; a partial slab needs a series combination of the filled and unfilled regions.",
      accessibleText: "Capacitance equals dielectric constant times permittivity of free space times area divided by separation.",
    },
    {
      id: "series-combination",
      expression: "1/C_series = 1/C1 + 1/C2 + ...",
      latex: "\\dfrac{1}{C_{series}} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + \\cdots",
      meaning: "Equivalent capacitance of capacitors connected in series.",
      variables: [
        { symbol: "C_series", meaning: "Equivalent series capacitance", unit: "F" },
        { symbol: "C1, C2", meaning: "Individual capacitances", unit: "F" },
      ],
      useWhen: "Each capacitor in the chain carries the same charge and the connection has no branch points between them.",
      commonTrap: "Adding capacitances directly instead of adding reciprocals for a series path.",
      accessibleText: "Reciprocal of the series equivalent capacitance equals the sum of the reciprocals of the individual capacitances.",
    },
    {
      id: "parallel-combination",
      expression: "C_parallel = C1 + C2 + ...",
      latex: "C_{parallel} = C_1 + C_2 + \\cdots",
      meaning: "Equivalent capacitance of capacitors connected in parallel.",
      variables: [
        { symbol: "C_parallel", meaning: "Equivalent parallel capacitance", unit: "F" },
        { symbol: "C1, C2", meaning: "Individual capacitances", unit: "F" },
      ],
      useWhen: "Each capacitor shares the same pair of nodes and hence the same potential difference.",
      commonTrap: "Applying the series reciprocal rule to capacitors that actually share the same two nodes.",
      accessibleText: "The parallel equivalent capacitance equals the sum of the individual capacitances.",
    },
    {
      id: "energy-voltage-form",
      expression: "U = (1/2) C (Delta V)^2",
      latex: "U = \\dfrac{1}{2} C (\\Delta V)^2",
      meaning: "Energy stored in a capacitor expressed using capacitance and potential difference.",
      variables: [
        { symbol: "U", meaning: "Electrostatic energy stored", unit: "J" },
        { symbol: "C", meaning: "Capacitance", unit: "F" },
        { symbol: "Delta V", meaning: "Potential difference across the capacitor", unit: "V" },
      ],
      useWhen: "The potential difference is fixed or known, such as when an ideal battery remains connected.",
      commonTrap: "Reusing the pre-change Delta V after the connection state has changed the voltage.",
      accessibleText: "Energy stored equals one half times capacitance times potential difference squared.",
    },
    {
      id: "energy-charge-form",
      expression: "U = Q^2 / (2C)",
      latex: "U = \\dfrac{Q^2}{2C}",
      meaning: "Energy stored in a capacitor expressed using charge and capacitance.",
      variables: [
        { symbol: "U", meaning: "Electrostatic energy stored", unit: "J" },
        { symbol: "Q", meaning: "Charge on the capacitor", unit: "C" },
        { symbol: "C", meaning: "Capacitance", unit: "F" },
      ],
      useWhen: "Charge is fixed or known, such as for an isolated capacitor.",
      commonTrap: "Using the original C after a dielectric or geometry change has already altered it.",
      accessibleText: "Energy stored equals charge squared divided by two times capacitance.",
    },
    {
      id: "energy-density",
      expression: "u = (1/2) epsilon E^2",
      latex: "u = \\dfrac{1}{2} \\varepsilon E^2",
      meaning: "Electrostatic energy stored per unit volume of the field region between the plates.",
      variables: [
        { symbol: "u", meaning: "Energy density", unit: "J/m^3" },
        { symbol: "epsilon", meaning: "Permittivity of the medium between the plates", unit: "F/m" },
        { symbol: "E", meaning: "Electric field magnitude in the region", unit: "V/m" },
      ],
      useWhen: "Interpreting capacitor energy as stored in the field rather than only in the charge on the plates, for a uniform-field region such as between parallel plates.",
      commonTrap: "Using the vacuum permittivity when a dielectric fills the region; use the medium's permittivity.",
      accessibleText: "Energy density equals one half times permittivity times electric field squared.",
    },
    {
      id: "charge-conservation-redistribution",
      expression: "Q1 + Q2 = (C1 + C2) V_common",
      latex: "Q_1 + Q_2 = (C_1 + C_2) V_{common}",
      meaning: "Total charge is conserved when two charged capacitors are connected, giving a single common final potential.",
      variables: [
        { symbol: "Q1, Q2", meaning: "Charges on the two capacitors before connection", unit: "C" },
        { symbol: "C1, C2", meaning: "Capacitances of the two capacitors", unit: "F" },
        { symbol: "V_common", meaning: "Common potential difference after connection", unit: "V" },
      ],
      useWhen: "Two previously charged capacitors are connected plate to plate and allowed to reach a shared potential.",
      commonTrap: "Assuming the final energy equals the initial total energy; energy is generally not conserved in this idealised redistribution.",
      accessibleText: "The sum of the initial charges equals the sum of the capacitances times the common final potential.",
    },
    {
      id: "energy-loss-redistribution",
      expression: "Delta U = C1 C2 (V1 - V2)^2 / (2 (C1 + C2))",
      latex: "\\Delta U = \\dfrac{C_1 C_2 (V_1 - V_2)^2}{2(C_1 + C_2)}",
      meaning: "Energy lost when two capacitors at different initial potentials are connected together.",
      variables: [
        { symbol: "Delta U", meaning: "Energy lost during redistribution", unit: "J" },
        { symbol: "C1, C2", meaning: "Capacitances of the two capacitors", unit: "F" },
        { symbol: "V1, V2", meaning: "Initial potential differences on the two capacitors", unit: "V" },
      ],
      useWhen: "Computing how much electrostatic energy is dissipated when two charged capacitors at different potentials are connected.",
      commonTrap: "Applying this when the two capacitors already start at the same potential; the loss is zero in that case.",
      accessibleText: "Energy lost equals the product of the two capacitances times the square of their initial potential difference, divided by twice their sum.",
    },
    {
      id: "rc-charging",
      expression: "q(t) = Q0 (1 - e^(-t / RC))",
      latex: "q(t) = Q_0 \\left(1 - e^{-t/RC}\\right)",
      meaning: "Charge on a capacitor as a function of time while it charges through a resistor from a battery.",
      variables: [
        { symbol: "q(t)", meaning: "Charge at time t", unit: "C" },
        { symbol: "Q0", meaning: "Final steady charge", unit: "C" },
        { symbol: "R", meaning: "Resistance in the charging path", unit: "ohm" },
        { symbol: "C", meaning: "Capacitance", unit: "F" },
        { symbol: "t", meaning: "Time elapsed since charging began", unit: "s" },
      ],
      useWhen: "A capacitor charges through a resistor from a constant-voltage source, treated as the capacitor-side result of that circuit.",
      commonTrap: "Extending this to a circuit with multiple resistors or branches without first reducing it to a single effective resistance and capacitance.",
      accessibleText: "Charge at time t equals the final charge times one minus the exponential of negative t over R C.",
    },
    {
      id: "rc-discharging",
      expression: "q(t) = Q0 e^(-t / RC)",
      latex: "q(t) = Q_0 e^{-t/RC}",
      meaning: "Charge on a capacitor as a function of time while it discharges through a resistor.",
      variables: [
        { symbol: "q(t)", meaning: "Charge at time t", unit: "C" },
        { symbol: "Q0", meaning: "Initial charge at the start of discharge", unit: "C" },
        { symbol: "R", meaning: "Resistance in the discharge path", unit: "ohm" },
        { symbol: "C", meaning: "Capacitance", unit: "F" },
        { symbol: "t", meaning: "Time elapsed since discharging began", unit: "s" },
      ],
      useWhen: "A previously charged capacitor discharges through a resistor with no source in the loop.",
      commonTrap: "Forgetting that the time constant RC is the same quantity that governs both charging and discharging for the same resistor-capacitor pair.",
      accessibleText: "Charge at time t equals the initial charge times the exponential of negative t over R C.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked examples                                                     */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "dielectric-isolated",
      prompt:
        "A parallel-plate capacitor of capacitance C0 is charged to charge Q0 and then isolated from the battery. A dielectric slab of constant K is inserted, completely filling the gap. Find the new capacitance, new potential difference and the change in stored energy.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Step 1: Identify the connection state. The capacitor is isolated, so charge Q0 stays constant." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Step 2: New capacitance. C_new = K C0, since the dielectric fills the gap completely." }],
        },
        {
          type: "paragraph",
          children: [
            { text: "Step 3: New potential difference. Delta V_new = Q0 / C_new = Q0 / (K C0) = (Q0 / C0) / K, which is 1/K of the original value." },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Step 4: Energy comparison. U_initial = Q0^2 / (2 C0) and U_new = Q0^2 / (2 K C0) = U_initial / K. Since K is greater than or equal to 1, energy decreases or stays the same after insertion.",
            },
          ],
        },
      ],
      answer: "C_new = K C0, Delta V_new = (Q0 / C0) / K, and the stored energy decreases by a factor of K.",
    },
    {
      id: "redistribution-energy-loss",
      prompt:
        "Two capacitors, C1 charged to V1 and C2 initially uncharged, are connected plate to plate with like terminals together. Find the common potential and the energy lost.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Step 1: Apply charge conservation. Initial charge is C1 V1 on the first capacitor and zero on the second, so total charge is C1 V1." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Step 2: Common potential. V_common = (C1 V1) / (C1 + C2), from Q_total = (C1 + C2) V_common." }],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Step 3: Energy before connection. U_initial = (1/2) C1 V1^2, since the second capacitor stores no energy while uncharged.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Step 4: Energy after connection. U_final = (1/2) (C1 + C2) V_common^2. Using the energy-loss expression with V2 = 0 gives Delta U = C1 C2 V1^2 / (2 (C1 + C2)), which is positive, confirming energy is lost, not conserved.",
            },
          ],
        },
      ],
      answer: "V_common = C1 V1 / (C1 + C2); energy lost equals C1 C2 V1^2 divided by twice (C1 + C2).",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Mistakes (Preparation Intelligence taxonomy)                        */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "state-not-identified",
      mistake: "Comparing two capacitor states without first fixing whether charge or voltage stays constant.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Without identifying the connection state, it is unclear which variable in C = Q / Delta V is fixed, so the wrong quantity gets held constant across the comparison." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Before writing any equation, state explicitly: isolated (Q fixed) or battery-connected (Delta V fixed), then substitute." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "series-parallel-swap",
      mistake: "Applying the parallel combination formula to capacitors that actually share the same charge, or vice versa.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Series and parallel are defined by what is physically shared, same charge path or same pair of nodes, not by how the diagram looks." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check whether the capacitors share two common nodes (parallel) or lie one after another with no branch point (series) before choosing the formula." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "energy-conserved-assumption",
      mistake: "Assuming total electrostatic energy is conserved when two charged capacitors are connected together.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Charge is conserved in redistribution, but energy is generally not, because of how the idealised connecting wire is treated in this model." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Use charge conservation to find the common potential, then compute initial and final energies separately if energy loss is asked for." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "dielectric-partial-fill",
      mistake: "Using C = K epsilon0 A / d directly when a dielectric slab only partially fills the gap between the plates.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The full-fill formula assumes the dielectric occupies the entire separation; a partial fill creates two field regions that must be combined." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Model the filled and unfilled thickness as two capacitors in series (for a slab parallel to the plates) before combining." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "energy-formula-mismatch",
      mistake: "Reusing an energy formula with the pre-change variable after a dielectric or geometry change has already altered capacitance.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "U = Q^2 / (2C) and U = (1/2) C (Delta V)^2 look interchangeable, but each needs the value of the fixed quantity in the current state, not the earlier state." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Recompute or explicitly relabel Q, Delta V and C for the new state before substituting into an energy formula." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "field-and-potential-reused",
      mistake: "Re-deriving field and potential fundamentals inside a capacitance problem instead of applying the Electrostatics results directly.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Time spent re-deriving field expressions for a conductor slows down a capacitor problem that only needs the final field or potential result." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Treat field and potential results for standard conductor shapes as known inputs from Electrostatics and move directly to the capacitance ratio." }],
        },
      ],
      errorType: "recall-gap",
    },
    {
      id: "rc-network-oversimplified",
      mistake: "Applying the single-resistor RC charging expression directly to a circuit with multiple resistors or branches.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The exponential charging and discharging expressions assume one effective resistance in the capacitor's path; a network needs reduction first." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Reduce the surrounding resistor network to a single effective resistance seen by the capacitor before applying the RC expression, using the circuit methods from Current Electricity." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "sign-of-K",
      mistake: "Treating the dielectric constant as potentially less than 1 to force a smaller capacitance in a problem.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "For the dielectric media covered in this syllabus, K is greater than or equal to 1, so capacitance with a dielectric cannot be smaller than the vacuum value for the same geometry." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "If a computed K comes out below 1, re-check the setup rather than accepting the result." }],
        },
      ],
      errorType: "knowledge-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs                                                                */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "Is Capacitance a separate JEE chapter from Electrostatics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official syllabus lists capacitors under the Electrostatics unit. This page treats capacitor-specific depth separately for study purposes and links to Electrostatics for field and potential fundamentals rather than repeating them.",
            },
          ],
        },
      ],
    },
    {
      question: "Does capacitance depend on the charge or voltage applied?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No, for a fixed geometry and medium. Capacitance is the ratio Q / Delta V, and this ratio stays constant because Delta V changes in proportion to Q for that geometry.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between series and parallel capacitor combinations?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "In series, each capacitor carries the same charge and the potential differences add. In parallel, each capacitor has the same potential difference and the charges add.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does inserting a dielectric increase capacitance?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The dielectric polarises in the applied field, producing a bound charge that partly cancels the original field. A smaller net field means a smaller potential difference for the same free charge, and since C = Q / Delta V, capacitance increases.",
            },
          ],
        },
      ],
    },
    {
      question: "Is energy conserved when two charged capacitors are connected together?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Charge is conserved, but electrostatic energy is generally not. Some energy is lost during redistribution in this idealised model, and the loss can be computed from the initial potentials and capacitances.",
            },
          ],
        },
      ],
    },
    {
      question: "Do I need Current Electricity before studying RC charging and discharging?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "You need basic potential-difference and circuit-current ideas, but the full resistor-network methods in Current Electricity are not required to follow the single-resistor RC charging and discharging results on this page.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Capacitance scope identical for JEE Main and JEE Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The scopes overlap substantially on capacitance, combinations and energy, but the two documents are separate and their exact wording is not identical. Check the current official document for each target rather than assuming a combined outline is controlling.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Related learning path (B36)                                        */
  /* ------------------------------------------------------------------ */
  relatedChapters: [
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Electric field, potential, potential difference and conductor equilibrium owned there.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "next",
      description: "Circuit-level treatment of capacitors alongside resistors, Kirchhoff's rules and networks.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "related",
      description: "General force and equilibrium background shared across mechanics and electrostatics chapters.",
    },
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "forward",
      description: "Extends stored-field-energy ideas to changing magnetic fields and induced circuits.",
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
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "related",
      description: "Field, potential and conductor fundamentals used throughout this page.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "related",
      description: "Circuit-level capacitor behaviour, resistor networks and Kirchhoff's rules.",
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
    "Evidence boundary: the syllabus mapping is tied to the current official JEE Main and JEE Advanced documents. Formula and concept explanations follow standard SI capacitance treatment. No chapter weightage, question frequency or forecast is asserted, and RC charging or discharging scope should be re-checked against the current official wording before being treated as guaranteed.",
  contributorPolicy: [
    "Author: a physics education writer experienced in converting senior-secondary Physics into student-facing JEE learning structures.",
    "Academic reviewer: postgraduate qualification in Physics or a closely related field, plus recent JEE Main and JEE Advanced teaching or curriculum-review experience.",
    "Independent checker: a physics educator or subject editor who verifies equations, unit consistency, connection-state reasoning, worked examples and mobile rendering separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Capacitance for JEE Physics: Official Scope, Method and Formulas",
    description:
      "Official JEE Main and Advanced scope for Capacitance, combination rules, dielectric behaviour, energy relations and RC charging, with condition-aware formula cards and error diagnosis. No invented weightage.",
    ogTitle: "Capacitance for JEE: geometry, combinations, dielectrics and energy in one page",
    ogDescription:
      "Official syllabus mapping, method selector, condition-aware formulas and error diagnosis for JEE Capacitance, linked to Electrostatics and Current Electricity.",
  },
};

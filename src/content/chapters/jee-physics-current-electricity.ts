import type { ChapterContent } from "@/content/types";

/**
 * Current Electricity — approved production content (27 August 2026).
 *
 * Final T06 scale test. This file is DATA ONLY: no route, component, block,
 * recipe, CSS or schema change accompanies it. Every module on the rendered
 * page is produced by the frozen T06 recipe from the fields below.
 *
 * Evidence gates held: no weightage (B27), no frequency/trend (B33), no PYQ
 * records (B32) and no diagnostic CTA (B31), because no approved dataset or
 * live diagnostic destination exists. The on-page fallback task replaces the
 * CTA rather than rendering a disabled-looking link.
 */
export const jeePhysicsCurrentElectricity: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Current Electricity",
  slug: "current-electricity",
  url: "/jee/physics/current-electricity",
  canonicalIntent:
    "Move between microscopic charge-carrier reasoning and circuit-level analysis, then choose the shortest valid method for current, resistance, cells, bridges and multi-loop circuits in JEE Physics.",

  heroChips: [
    "Official scope verified 27 August 2026",
    "JEE Main and JEE Advanced wording compared",
    "No weightage, frequency or trend claims",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Current Electricity studies the steady flow of charge and the way potential difference, material properties, circuit connections and sources determine that flow.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ text: "The chapter has two scales:" }],
    },
    {
      type: "list",
      items: [
        [
          { text: "Microscopic scale: ", bold: true },
          {
            text: "electric field changes the average motion of charge carriers. Drift velocity, mobility, current density and conductivity describe what happens inside a material.",
          },
        ],
        [
          { text: "Circuit scale: ", bold: true },
          {
            text: "current moves through branches while potential changes across resistors and cells. Resistance, emf, internal resistance, Kirchhoff's laws and bridge balance describe the network.",
          },
        ],
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The bridge between the two is Ohm's law, but only under the physical conditions where the material response remains linear.",
        },
      ],
    },
    {
      type: "note",
      tone: "source",
      children: [
        {
          text: "Evidence note: no chapter weightage, expected question count, frequency claim or trend percentage is published on this page.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Electric field, potential difference, energy per charge and conductors.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Official exam-level scope this chapter is mapped against.",
    },
  ],

  syllabusMapping: {
    unit: "Current Electricity (JEE Main 2026, Unit 12)",
    topics: [
      "Electric current",
      "Drift velocity and mobility",
      "Relation of drift velocity and mobility with current",
      "Ohm's law",
      "Electrical resistance",
      "I-V characteristics of Ohmic and non-Ohmic conductors",
      "Electrical energy and power",
      "Electrical resistivity and conductivity",
      "Series and parallel resistor combinations",
      "Temperature dependence of resistance",
      "Internal resistance of a cell",
      "Potential difference and emf",
      "Cells in series and parallel",
      "Kirchhoff's laws and applications",
      "Wheatstone bridge",
      "Metre Bridge",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35)                                          */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "microscopic-view",
      title: "Microscopic view: what happens inside the conductor",
      keyIdea: "Current is not the speed of one electron. It is the collective rate of charge transfer through a cross-section.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Free electrons in a metal already have rapid random motion. Without an applied electric field, the average of their velocities is zero, so there is no net current. An applied field adds a small average drift to that random motion. Electron drift is opposite to the electric field, while conventional current is along the field.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "This explains an important apparent contradiction:" }],
        },
        {
          type: "list",
          items: [
            [{ text: "Individual electrons drift slowly on average." }],
            [
              {
                text: "A circuit can respond rapidly because the electric field is established through the connected circuit on a much shorter timescale than one electron would take to travel around it.",
              },
            ],
          ],
        },
      ],
    },
    {
      id: "circuit-view",
      title: "Circuit view: what happens between nodes and branches",
      body: [
        {
          type: "paragraph",
          children: [{ text: "A circuit model does not track each electron. It tracks:" }],
        },
        {
          type: "list",
          items: [
            [{ text: "Node potentials" }],
            [{ text: "Branch currents" }],
            [{ text: "Component voltage-current relations" }],
            [{ text: "Source emf and internal resistance" }],
            [{ text: "Charge conservation at junctions" }],
            [{ text: "Energy-per-charge balance around loops" }],
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The microscopic model explains why a material has a conductivity. The circuit model uses that behaviour through resistance and component laws.",
            },
          ],
        },
      ],
    },
    {
      id: "current-density-drift-mobility",
      title: "Current, current density, drift velocity and mobility",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Current through an oriented surface is the rate of net charge crossing it: " },
            { text: "I = dQ/dt", code: true },
            {
              text: ". For steady current, the same current enters and leaves every series cross-section. That does not mean current density or drift speed is the same when area changes.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Current density is local and vectorial: " },
            { text: "I = integral(J dot dA)", code: true },
            { text: ". For a uniform current density normal to a cross-section, " },
            { text: "I = JA", code: true },
            {
              text: ". A narrower part of the same steady wire carries the same total current but has larger current density, and with the same carrier density it also has larger drift-speed magnitude.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "For one carrier type, " },
            { text: "J = n q v_d", code: true },
            {
              text: ". Here q is signed in the vector equation. For electrons, both charge and drift direction are opposite to conventional current, so conventional current density is along the electric field in an Ohmic metal.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Mobility measures the drift-speed magnitude produced per unit electric-field magnitude: " },
            { text: "mu = |v_d|/E", code: true },
            { text: ". In the simple electron collision model, " },
            { text: "mu = e tau/m", code: true },
            { text: ", where tau is mean relaxation time." },
          ],
        },
      ],
    },
    {
      id: "ohms-law-condition",
      title: "Ohm's law is a condition, not just an equation",
      keyIdea: "Ohm's law is not a universal law of nature. It is a statement about linear material response over a stated range.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For an Ohmic conductor over a stated operating range and under constant physical conditions, V is proportional to I, so ",
            },
            { text: "V = IR", code: true },
            { text: " with constant R. Three distinctions matter:" },
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            [
              { text: "R = V/I", code: true },
              { text: " can define the static resistance at an operating point even for a non-Ohmic device." },
            ],
            [
              {
                text: "Ohmic behaviour requires a linear relationship through the origin over the stated range, with resistance independent of applied voltage or current under unchanged conditions.",
              },
            ],
            [
              { text: "On a V versus I graph, slope is R. On an I versus V graph, slope is conductance " },
              { text: "1/R", code: true },
              { text: " for the Ohmic case." },
            ],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Temperature, material state and strong fields can change the relationship." }],
        },
      ],
    },
    {
      id: "resistance-resistivity",
      title: "Resistance, resistivity and geometry",
      body: [
        {
          type: "list",
          items: [
            [
              { text: "Resistance R: ", bold: true },
              { text: "opposition presented by a particular component or specimen, measured in ohms." },
            ],
            [
              { text: "Resistivity rho: ", bold: true },
              { text: "material property under specified physical conditions, measured in ohm metre." },
            ],
            [
              { text: "Conductivity sigma: ", bold: true },
              { text: "reciprocal of resistivity in the Ohmic material model, measured in siemens per metre." },
            ],
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "For a uniform conductor, " },
            { text: "R = rho L/A", code: true },
            {
              text: ". Changing length or area changes resistance without changing the material's resistivity, provided temperature and material state remain fixed.",
            },
          ],
        },
      ],
    },
    {
      id: "temperature-dependence",
      title: "Temperature dependence",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Over a suitable limited range, a metal's resistance may be approximated by " },
            { text: "R_T = R_0[1 + alpha(T - T_0)]", code: true },
            {
              text: ". The coefficient alpha depends on the material and reference temperature. The linear formula is an approximation, not a universal all-temperature relation. Metals commonly show increasing resistivity with temperature over ordinary ranges, alloys may have weaker dependence and semiconductors can show the opposite qualitative trend.",
            },
          ],
        },
      ],
    },
    {
      id: "cells-emf",
      title: "Cells: emf is not terminal voltage",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Emf is energy supplied by the source per unit charge. Despite its historical name, it is measured in volts and is not a force.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Open circuit, I = 0: terminal voltage equals emf in the ideal model." }],
            [
              { text: "Cell discharging through a load: " },
              { text: "V_terminal = epsilon - Ir", code: true },
              { text: "." },
            ],
            [
              { text: "Cell being charged with current entering its positive terminal: " },
              { text: "V_terminal = epsilon + Ir", code: true },
              { text: "." },
            ],
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The sign follows energy direction and the chosen current orientation. Memorising only one terminal-voltage expression causes avoidable errors.",
            },
          ],
        },
      ],
    },
    {
      id: "kirchhoff-laws",
      title: "Kirchhoff's laws as conservation laws",
      body: [
        {
          type: "list",
          items: [
            [
              { text: "Junction rule: ", bold: true },
              {
                text: "algebraic sum of currents at a node is zero. This expresses charge conservation in steady state.",
              },
            ],
            [
              { text: "Loop rule: ", bold: true },
              {
                text: "algebraic sum of potential changes around a closed loop is zero. This expresses energy-per-charge balance.",
              },
            ],
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Current directions can be assumed. A negative solution means the actual current flows opposite to the assumed arrow. It does not mean the method failed.",
            },
          ],
        },
      ],
    },
    {
      id: "bridges",
      title: "Wheatstone bridge and metre bridge",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Consider a bridge with arms P and Q along one path from the supply node to the return node, and R and S along the other path. A galvanometer connects the two intermediate nodes. At balance, ",
            },
            { text: "P/Q = R/S", code: true },
            {
              text: ". The intermediate nodes are equipotential, so galvanometer current is zero. The balance equation must not be used before the null condition is established.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "A metre bridge is a practical form using a uniform one-metre resistance wire. If unknown resistance X is in the left gap, known resistance R is in the right gap and balance occurs at length l centimetres from the left end, ",
            },
            { text: "X/R = l/(100 - l)", code: true },
            {
              text: ". This form depends on which resistance is placed in each gap and from which end l is measured. Reverse the gaps or measurement direction and the ratio changes accordingly.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25) at typed anchor points                      */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "operating-picture",
      slot: "scope",
      heading: "What you must be able to explain, calculate and decide",
      columns: ["Task", "Required understanding"],
      rows: [
        [
          "Explain current",
          "Current is the rate at which net charge crosses an oriented surface. Conventional current follows positive-charge flow and is opposite to electron drift in a metal.",
        ],
        [
          "Connect microscopic quantities",
          "Relate charge-carrier density, carrier charge, cross-sectional area and drift velocity to current and current density.",
        ],
        [
          "Test Ohmic behaviour",
          "A device is Ohmic over a stated range when current is proportional to potential difference under unchanged physical conditions.",
        ],
        [
          "Separate resistance and resistivity",
          "Resistance belongs to a particular specimen and geometry. Resistivity is a material property under specified physical conditions.",
        ],
        [
          "Read a circuit",
          "Identify nodes, branches, sources, polarities and actual series or parallel connections before writing equations.",
        ],
        [
          "Analyse sources",
          "Distinguish emf from terminal voltage and include internal resistance with the correct charging or discharging sign.",
        ],
        [
          "Select a circuit method",
          "Use direct reduction, symmetry, bridge balance or Kirchhoff equations according to topology.",
        ],
        ["Check energy", "Reconcile source power, useful load power and internal or resistor dissipation."],
      ],
      note: "Chapter boundary: the current official JEE Main syllabus does not list potentiometer in Unit 12, and the verified JEE Advanced current-electricity lines also do not separately name it. It is therefore not presented as a core official topic here.",
    },
    {
      id: "official-syllabus",
      slot: "scope",
      jump: true,
      heading: "Official JEE syllabus mapping for Current Electricity",
      intro:
        "Verified against JEE Main 2026 and JEE Advanced 2026 on 27 August 2026. This is a wording and scope mapping, not a claim about difficulty, importance or likelihood.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Editorial treatment"],
      rows: [
        [
          "Electric current",
          "Electric current, drift velocity, mobility and their relation with current are explicitly listed.",
          "Electric current is explicitly listed.",
          "Teach conventional current and microscopic carrier motion, but do not claim that every supporting microscopic term is separately named by Advanced.",
        ],
        [
          "Current density",
          "Not separately named in Unit 12. It is the natural local form connecting current, drift and conductivity and is developed in NCERT.",
          "Not separately named in the cited syllabus line.",
          "Include as a supporting concept and label it accordingly.",
        ],
        [
          "Ohm's law and characteristics",
          "Ohm's law, resistance and I-V characteristics of Ohmic and non-Ohmic conductors are explicitly listed.",
          "Ohm's law is explicitly listed.",
          "Teach proportionality conditions, graph interpretation and the difference between V = IR and verified Ohmic behaviour.",
        ],
        [
          "Material response",
          "Resistivity, conductivity and temperature dependence of resistance are explicitly listed.",
          "These terms are not separately named in the cited Current Electricity line.",
          "Include fully for Main and as foundational material reasoning without asserting a separate Advanced wording.",
        ],
        [
          "Resistor networks",
          "Series and parallel combinations of resistors are explicitly listed.",
          "Series and parallel arrangements of resistances are explicitly listed.",
          "Teach topology and node identity before formulas.",
        ],
        [
          "Electrical energy and power",
          "Electrical energy and power are explicitly listed.",
          "Heating effect of current is explicitly listed.",
          "Connect general electrical power to resistor heating and energy conservation.",
        ],
        [
          "Cells",
          "Internal resistance, potential difference, emf and cells in series and parallel are explicitly listed.",
          "Series and parallel arrangements of cells are explicitly listed.",
          "Make source polarity, terminal voltage and internal resistance visible in every source problem.",
        ],
        [
          "General circuits",
          "Kirchhoff's laws and applications are explicitly listed.",
          "Kirchhoff's laws and simple applications are explicitly listed.",
          "Teach sign discipline and independent-equation selection.",
        ],
        [
          "Bridges",
          "Wheatstone bridge and Metre Bridge are explicitly listed.",
          "They are not separately named in the cited Current Electricity line.",
          "Include both as Main official scope and do not mislabel their status for Advanced.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "electrostatics-bridge",
      slot: "prerequisites",
      jump: true,
      heading: "How Electrostatics becomes Current Electricity",
      intro:
        "Current Electricity should not begin with V = IR. It begins by changing one Electrostatics assumption: charges are now allowed to move through a material while a source maintains the potential difference.",
      columns: ["Electrostatics idea", "Current Electricity use", "What changes"],
      rows: [
        [
          "Electric field E",
          "Produces a systematic drift superposed on random carrier motion",
          "In a conductor with collisions, carriers acquire a steady average drift rather than accelerating indefinitely.",
        ],
        [
          "Potential difference Delta V",
          "Drives a field through circuit elements and enables energy transfer per unit charge",
          "A cell maintains a potential difference by converting non-electrical energy.",
        ],
        [
          "Charge conservation",
          "Becomes Kirchhoff's junction rule in steady circuits",
          "Charge does not continuously accumulate at an ideal junction.",
        ],
        [
          "Potential as energy per charge",
          "Becomes the bookkeeping behind Kirchhoff's loop rule",
          "Around a complete loop, rises from sources balance drops in components.",
        ],
        [
          "Conductors and material response",
          "Becomes resistance, resistivity, mobility and conductivity",
          "Current depends on carriers, collisions, material and geometry.",
        ],
        [
          "Capacitor energy",
          "Connects later to RC behaviour in the broader JEE Advanced Electricity and Magnetism syllabus",
          "The steady-resistor analysis on this page excludes charging transients unless a later approved chapter covers them.",
        ],
      ],
    },
    {
      id: "microscopic-circuit-model",
      slot: "concepts",
      jump: true,
      heading: "Translation table: microscopic to circuit level",
      columns: ["Microscopic quantity", "Circuit-level quantity", "Connecting relationship", "Key condition"],
      rows: [
        [
          "Carrier drift velocity v_d",
          "Current I",
          "For one carrier type and uniform cross-section, magnitude I = n q A v_d using charge magnitude q",
          "Steady uniform carrier flow through the area",
        ],
        [
          "Current density vector J",
          "Branch current",
          "I = integral(J dot dA)",
          "Surface orientation and nonuniform density must be respected",
        ],
        ["Mobility mu", "Material response to field", "|v_d| = mu E", "Linear-response range"],
        ["Conductivity sigma", "Conductance behaviour", "J = sigma E", "Ohmic, homogeneous and isotropic form"],
        [
          "Resistivity rho",
          "Specimen resistance",
          "R = rho L/A",
          "Uniform material, constant cross-section and stated physical conditions",
        ],
        [
          "Field along element",
          "Potential drop",
          "For uniform field, magnitude Delta V = EL",
          "Field approximately uniform along the length",
        ],
        [
          "Carrier collisions",
          "Joule heating and finite resistance",
          "Source energy transferred to the material",
          "Steady dissipative conduction model",
        ],
      ],
    },
    {
      id: "method-selector",
      slot: "concepts",
      jump: true,
      heading: "Method selector",
      intro: "Read the signal in the question before choosing the algebra.",
      columns: ["Problem signal", "First method", "Why", "Common wrong turn"],
      rows: [
        [
          "Charge crossing a surface, carrier density or drift speed",
          "Microscopic current relation",
          "Connects carrier motion to current directly.",
          "Treating current as electron speed.",
        ],
        [
          "Material, length, area or temperature changes",
          "Resistivity and geometry model",
          "Separates material response from specimen shape.",
          "Changing rho when only geometry changes.",
        ],
        [
          "Linear or nonlinear I-V graph",
          "Graph and operating-condition analysis",
          "Tests whether resistance is constant and which slope is relevant.",
          "Calling every use of V/I Ohm's law.",
        ],
        [
          "Obvious single path or common two-node groups",
          "Series or parallel reduction",
          "Uses topology before algebra.",
          "Trusting the drawing rather than node identity.",
        ],
        [
          "Ratio network with a detector branch",
          "Wheatstone or metre-bridge balance",
          "A null detector can eliminate the middle-branch current.",
          "Applying the balance ratio when the bridge is not balanced.",
        ],
        [
          "Several branches and sources with no reduction",
          "Kirchhoff junction and loop equations",
          "Applies charge and energy conservation generally.",
          "Writing dependent loops or inconsistent signs.",
        ],
        [
          "Cell plus external load",
          "Emf, terminal voltage and internal resistance",
          "Separates source energy from delivered voltage.",
          "Setting terminal voltage equal to emf while current flows.",
        ],
        [
          "Asked for heating, energy or efficiency",
          "Power balance",
          "Exposes useful and internal dissipation.",
          "Using V^2/R where the relevant V is not across that resistor.",
        ],
      ],
    },
    {
      id: "unit-graph-check",
      slot: "formulas",
      heading: "Unit and graph check",
      columns: ["Quantity", "SI unit", "Quick check"],
      rows: [
        ["Current I", "ampere A", "C/s"],
        ["Current density J", "A/m^2", "Current divided by normal area"],
        ["Mobility mu", "m^2/(V s)", "Drift speed divided by field"],
        ["Resistance R", "ohm", "V/A"],
        ["Resistivity rho", "ohm m", "RA/L"],
        ["Conductivity sigma", "S/m", "Reciprocal of resistivity"],
        ["Emf and terminal voltage", "volt V", "J/C"],
        ["Power", "watt W", "J/s = V A"],
        ["Temperature coefficient", "K^-1", "Reciprocal temperature interval"],
      ],
    },
    {
      id: "pi-diagnosis",
      slot: "diagnosis",
      jump: true,
      heading: "Diagnose the first failed decision",
      intro:
        "Preparation Intelligence v1.1 labels describe the first decision that failed, not the final wrong number.",
      columns: ["PI v1.1 label", "Current Electricity evidence", "Repair", "Retest"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot distinguish current from current density, emf from terminal voltage, resistance from resistivity or V = IR from verified Ohmic behaviour.",
          "Rebuild the contrast using definition, unit, dependency and one counterexample.",
          "Explain the distinction, then solve one direct and one contrast question.",
        ],
        [
          "Recall Gap",
          "Understands the model but cannot retrieve the drift relation, bridge ratio, temperature form, terminal-voltage relation or Kirchhoff sign rule.",
          "Use closed-book retrieval with the condition and unit attached.",
          "Recall after a delay and use it in a fresh circuit.",
        ],
        [
          "Execution Error",
          "Selects the correct method but misreads axes, reverses a sign, solves equations incorrectly, swaps a metre-bridge length or drops a unit.",
          "Mark the first failed line and apply topology, sign, unit and power checks.",
          "Repeat with changed values and the same method.",
        ],
        [
          "Decision / Selection Error",
          "Uses series reduction where a branch exists, applies bridge balance without null, starts Kirchhoff before a simple reduction, or uses constant emf as terminal voltage.",
          "Practise the circuit-analysis ladder and write why each rejected method fails.",
          "Use a mixed set where the method is not named.",
        ],
        [
          "Needs Review",
          "Only the final number is visible, the diagram is unclear, the student guessed or several causes remain plausible.",
          "Inspect working or ask one discriminating question before assigning a stable label.",
          "Present a short item that separates concept, recall, execution and selection.",
        ],
      ],
      note: "Contributing factors such as diagram misreading, notation collision between resistivity and charge density, rushed axis reading, weak simultaneous-equation fluency or unlabelled cell polarity are recorded separately. They do not replace the primary label.",
    },
    {
      id: "review-record",
      slot: "practice",
      heading: "Circuit-question review record",
      columns: ["Field", "Record this"],
      rows: [
        ["Scale", "Microscopic, material, component, source, bridge or full network"],
        [
          "Given representation",
          "Text, I-V graph, physical wire, circuit diagram, null condition or power statement",
        ],
        [
          "First valid method",
          "Drift relation, resistance model, direct reduction, symmetry, bridge balance, Kirchhoff or power balance",
        ],
        [
          "Critical condition",
          "Ohmic range, uniform wire, fixed temperature, steady state, matched polarity, balanced bridge or ideal component assumption",
        ],
        ["First unsupported step", "The earliest step not justified by the data or topology"],
        [
          "PI v1.1 label",
          "Knowledge Gap, Recall Gap, Execution Error, Decision / Selection Error or Needs Review",
        ],
        [
          "Retest",
          "Fresh question that changes the surface detail but preserves the same underlying decision",
        ],
      ],
      note: "This page does not assert a verified count of Current Electricity questions because no approved paper-level topic-tagging dataset was supplied.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "official-checklists",
      slot: "scope",
      heading: "Official checklists and the verified distinction",
      concepts: [
        {
          id: "main-checklist",
          title: "JEE Main 2026 official checklist",
          body: [
            {
              type: "list",
              items: [
                [{ text: "Electric current" }],
                [{ text: "Drift velocity and mobility" }],
                [{ text: "Relation of drift velocity and mobility with current" }],
                [{ text: "Ohm's law" }],
                [{ text: "Electrical resistance" }],
                [{ text: "I-V characteristics of Ohmic and non-Ohmic conductors" }],
                [{ text: "Electrical energy and power" }],
                [{ text: "Electrical resistivity and conductivity" }],
                [{ text: "Series and parallel resistor combinations" }],
                [{ text: "Temperature dependence of resistance" }],
                [{ text: "Internal resistance of a cell" }],
                [{ text: "Potential difference and emf" }],
                [{ text: "Cells in series and parallel" }],
                [{ text: "Kirchhoff's laws and applications" }],
                [{ text: "Wheatstone bridge" }],
                [{ text: "Metre Bridge" }],
              ],
            },
          ],
        },
        {
          id: "advanced-wording",
          title: "JEE Advanced 2026 wording relevant to this page",
          body: [
            {
              type: "list",
              items: [
                [{ text: "Electric current" }],
                [{ text: "Ohm's law" }],
                [{ text: "Series and parallel arrangements of resistances and cells" }],
                [{ text: "Kirchhoff's laws and simple applications" }],
                [{ text: "Heating effect of current" }],
              ],
            },
            {
              type: "note",
              tone: "source",
              children: [
                {
                  text: "Verified distinction: JEE Main names drift velocity, mobility, I-V characteristics, resistivity, conductivity, temperature dependence, internal resistance, emf, Wheatstone bridge and Metre Bridge explicitly. Those terms are not individually named in the JEE Advanced 2026 Current Electricity line. This is a syllabus-wording comparison, not a claim about difficulty, importance or likelihood.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "prerequisite-checklist",
      slot: "prerequisites",
      heading: "Prerequisite checklist",
      concepts: [
        {
          id: "ready-if",
          title: "You are ready if you can",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Explain potential difference as energy change per unit charge." }],
                [{ text: "State the direction of electric field relative to decreasing potential." }],
                [{ text: "Apply charge conservation to a region." }],
                [{ text: "Distinguish conventional current from electron motion." }],
                [{ text: "Solve two simultaneous linear equations." }],
                [{ text: "Read the slope of both a V versus I graph and an I versus V graph." }],
                [{ text: "Track signs consistently around a chosen path." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "Repair order: if points 1 to 3 are weak, revisit the relevant Electrostatics concepts. If points 5 to 7 are weak, repair algebra, graphs and sign handling before multi-loop circuits.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "circuit-decision-ladder",
      slot: "concepts",
      jump: true,
      heading: "The circuit-analysis ladder",
      concepts: [
        {
          id: "ladder-level-1",
          title: "Level 1: Identify nodes and branches",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Redraw the circuit by electrical connection, not by visual shape." }],
            },
            {
              type: "list",
              items: [
                [{ text: "All points joined by an ideal wire belong to one node." }],
                [{ text: "Components are parallel only when both ends share the same two nodes." }],
                [
                  {
                    text: "Components are in simple series only when their shared node has no other branch, so the same current must pass through both.",
                  },
                ],
              ],
            },
          ],
        },
        {
          id: "ladder-level-2",
          title: "Level 2: Reduce genuine series and parallel groups",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Use direct equivalent resistance only after node identity is confirmed. A circuit drawn as a square, triangle or bridge may hide or imitate series and parallel relationships.",
                },
              ],
            },
          ],
        },
        {
          id: "ladder-level-3",
          title: "Level 3: Test for symmetry or equal-potential nodes",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Identical paths under symmetric excitation can force equal potentials. If two nodes are equipotential, a connecting branch carries no current. This can reduce a network without full equations.",
                },
              ],
            },
          ],
        },
        {
          id: "ladder-level-4",
          title: "Level 4: Test for bridge balance",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "For a Wheatstone bridge, check the resistance ratio before solving branch currents. At balance, the detector branch carries zero current, which changes the topology.",
                },
              ],
            },
          ],
        },
        {
          id: "ladder-level-5",
          title: "Level 5: Apply Kirchhoff's laws",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Assign branch currents. Any direction is acceptable." }],
                [{ text: "Use junction equations to reduce unknowns." }],
                [{ text: "Choose independent loops." }],
                [{ text: "Keep one sign convention for resistors and cells." }],
                [{ text: "Solve the simultaneous equations." }],
                [{ text: "Interpret a negative current as flow opposite to the assumed arrow." }],
              ],
            },
          ],
        },
        {
          id: "ladder-level-6",
          title: "Level 6: Verify power and limits",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Check whether source power matches power absorbed by resistors and internal resistance. Test simple limits, such as an open branch, a short branch or two equal resistors.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "validation-checks",
      slot: "mistakes",
      heading: "Four validation checks",
      concepts: [
        {
          id: "checks",
          title: "Run these before accepting a circuit answer",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [
                  { text: "Topology: ", bold: true },
                  { text: "did I mark nodes before combining components?" },
                ],
                [
                  { text: "Sign: ", bold: true },
                  { text: "are current arrows, cell polarities and loop traversal consistent?" },
                ],
                [
                  { text: "Scale: ", bold: true },
                  { text: "am I solving a carrier, material, component or network question?" },
                ],
                [
                  { text: "Energy: ", bold: true },
                  { text: "does source power equal useful plus dissipated power under the model?" },
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "diagnostic-protocol",
      slot: "diagnosis",
      heading: "How a label is assigned",
      concepts: [
        {
          id: "tag-confidence",
          title: "Tag confidence",
          body: [
            {
              type: "list",
              items: [
                [
                  { text: "High: ", bold: true },
                  {
                    text: "the working directly reveals the cause, such as combining components that do not share the required nodes.",
                  },
                ],
                [
                  { text: "Medium: ", bold: true },
                  { text: "the same failure appears more than once, but recall and execution are both plausible." },
                ],
                [
                  { text: "Low: ", bold: true },
                  {
                    text: "only an answer choice or incomplete diagram is available. Use Needs Review when a stronger label would be guesswork.",
                  },
                ],
              ],
            },
          ],
        },
        {
          id: "diagnostic-sequence",
          title: "Diagnostic sequence",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Ask the student to identify the problem scale." }],
                [{ text: "Ask them to redraw nodes and mark polarities." }],
                [{ text: "Ask which method they selected and which alternative they rejected." }],
                [{ text: "Inspect the first equation before inspecting arithmetic." }],
                [{ text: "Use a primary PI label only when the evidence supports it." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "Self-diagnosis task: attempt one question at each scale — carrier motion, material and geometry, simple network, loaded cell, bridge balance and general multi-loop circuit. For every error, record the first wrong decision rather than only the final wrong number.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "verified-papers",
      slot: "practice",
      jump: true,
      heading: "Practise from official papers without manufacturing a chapter trend",
      concepts: [
        {
          id: "official-repositories",
          title: "Official repositories",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The JEE Advanced official archive provides past Paper 1 and Paper 2 downloads across years. The official JEE Main portal exposes question papers through its Question Papers section.",
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
                [{ text: "JEE Main official portal", href: "https://jeemain.nta.nic.in/" }],
              ],
            },
          ],
        },
        {
          id: "evidence-gate",
          title: "Why weightage, frequency and trend modules stay hidden",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The official syllabus defines scope, not future chapter weightage. Competitor tables are not sufficient evidence. To enable a historical analysis later, the following are required:",
                },
              ],
            },
            {
              type: "list",
              items: [
                [{ text: "Exact official papers and sessions included" }],
                [{ text: "Paper-level source links" }],
                [{ text: "A documented rule for multi-concept circuit questions" }],
                [{ text: "Topic-tagging and reviewer method" }],
                [{ text: "Counts and denominators" }],
                [{ text: "Year and session boundaries" }],
                [{ text: "Handling of cancelled or revised questions" }],
                [{ text: "Separation of historical observation from future prediction" }],
              ],
            },
            {
              type: "note",
              tone: "caution",
              children: [
                {
                  text: "Until that evidence exists, the weightage and trend modules remain hidden and no substitute prose implies unofficial weightage.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "next-action",
      slot: "related",
      heading: "Choose the first valid method",
      concepts: [
        {
          id: "five-step-action",
          title: "Before solving the next problem",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Name the scale: carrier, material, component, source, bridge or network." }],
                [{ text: "Mark nodes and polarities." }],
                [{ text: "Use direct reduction or balance before Kirchhoff." }],
                [{ text: "Write each formula with its operating condition." }],
                [{ text: "Check signs, units and power." }],
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Condition-aware formula sheet (B29)                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "electric-current",
      expression: "I = dQ/dt ;   steady transfer: I = Delta Q / Delta t",
      meaning: "Net rate of charge crossing an oriented surface.",
      variables: [
        { symbol: "I", meaning: "current", unit: "A = C/s" },
        { symbol: "Q", meaning: "charge", unit: "C" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "Charge transfer through a cross-section is given or required.",
      commonTrap: "Confusing conventional current direction with electron drift direction.",
      accessibleText: "Current equals the rate of change of charge with time; for steady transfer it is total charge divided by total time.",
    },
    {
      id: "current-density",
      expression: "I = integral(J dot dA) ;   uniform and normal: I = JA",
      meaning: "Local current per unit normal area, directed along conventional positive-charge flow.",
      variables: [
        { symbol: "J", meaning: "current density", unit: "A/m^2" },
        { symbol: "dA", meaning: "area element with chosen normal", unit: "m^2" },
      ],
      useWhen: "Cross-section, nonuniform flow or local material behaviour matters.",
      commonTrap: "Treating J as a scalar in a surface whose normal is not parallel to it.",
      accessibleText: "Current equals the surface integral of current density dotted with the area element; for uniform normal flow it is current density times area.",
    },
    {
      id: "drift-relation",
      expression: "J = n q v_d ;   uniform wire magnitudes: I = n e A v_d",
      meaning: "Many carriers with a small average drift can produce a measurable current.",
      variables: [
        { symbol: "n", meaning: "carrier number density", unit: "m^-3" },
        { symbol: "q", meaning: "carrier charge (signed in the vector form)", unit: "C" },
        { symbol: "v_d", meaning: "drift velocity", unit: "m/s" },
        { symbol: "A", meaning: "cross-sectional area", unit: "m^2" },
      ],
      useWhen: "Connecting carrier density, area, drift speed and current.",
      commonTrap: "Dropping the sign of carrier charge in the vector form, or assuming every electron moves only with the drift speed.",
      accessibleText: "Current density equals carrier density times carrier charge times drift velocity; for a uniform wire, current equals n e A times drift speed.",
    },
    {
      id: "mobility-conductivity",
      expression: "mu = |v_d|/E ;   mu = e tau/m ;   J = sigma E ;   rho = 1/sigma",
      meaning:
        "Mobility describes carrier response, conductivity describes material current response and resistivity describes opposition in a geometry-independent material model.",
      variables: [
        { symbol: "mu", meaning: "mobility", unit: "m^2/(V s)" },
        { symbol: "sigma", meaning: "conductivity", unit: "S/m" },
        { symbol: "rho", meaning: "resistivity", unit: "ohm m" },
        { symbol: "tau", meaning: "mean relaxation time", unit: "s" },
      ],
      useWhen: "The material is in its linear-response range.",
      commonTrap: "Applying the one-carrier Drude formula unchanged to a system with several carrier types.",
      accessibleText: "Mobility is drift speed per unit field; in the simple electron model it equals e tau over m. Current density equals conductivity times field, and resistivity is the reciprocal of conductivity.",
    },
    {
      id: "ohms-law",
      expression: "V = IR   with constant R for an Ohmic conductor",
      meaning: "Potential difference is proportional to current over the stated operating range.",
      variables: [
        { symbol: "V", meaning: "potential difference", unit: "V" },
        { symbol: "I", meaning: "current", unit: "A" },
        { symbol: "R", meaning: "resistance", unit: "ohm" },
      ],
      useWhen: "Linearity and stable physical conditions are stated or established.",
      commonTrap: "Assuming that calculating V/I at one point proves Ohmic behaviour.",
      accessibleText: "Voltage equals current times resistance, with resistance constant for an Ohmic conductor under unchanged conditions.",
    },
    {
      id: "resistance-geometry",
      expression: "R = rho L / A ;   varying area: dR = rho dx / A(x)",
      meaning: "Specimen resistance combines material resistivity with length and cross-sectional area.",
      variables: [
        { symbol: "R", meaning: "resistance", unit: "ohm" },
        { symbol: "rho", meaning: "resistivity", unit: "ohm m" },
        { symbol: "L", meaning: "length", unit: "m" },
        { symbol: "A", meaning: "cross-sectional area", unit: "m^2" },
      ],
      useWhen: "Material and cross-section are uniform and physical conditions are specified.",
      commonTrap: "Using the uniform formula for a tapered wire without integration.",
      accessibleText: "Resistance equals resistivity times length divided by area; for a varying area, integrate rho dx over A of x.",
    },
    {
      id: "temperature-dependence",
      expression: "R_T = R_0 [1 + alpha (T - T_0)]",
      meaning: "Approximate linear change of resistance with temperature over a suitable range.",
      variables: [
        { symbol: "alpha", meaning: "temperature coefficient", unit: "K^-1 or per degree C for intervals" },
        { symbol: "T, T_0", meaning: "temperature and reference temperature, consistent intervals" },
      ],
      useWhen: "A linear range and a reference value are appropriate.",
      commonTrap: "Treating alpha as universal, ignoring the reference temperature or applying a metal trend to a semiconductor.",
      accessibleText: "Resistance at temperature T equals resistance at the reference temperature times one plus alpha times the temperature difference.",
    },
    {
      id: "resistors-series",
      expression: "R_eq = sum(R_i)",
      meaning: "The same current passes through a single unbranched path and voltage drops add.",
      variables: [{ symbol: "R_i", meaning: "resistance of element i", unit: "ohm" }],
      useWhen: "The shared node between consecutive elements has no other branch.",
      commonTrap: "Calling elements series because they look consecutive in the drawing.",
      accessibleText: "Equivalent series resistance equals the sum of individual resistances.",
    },
    {
      id: "resistors-parallel",
      expression: "1/R_eq = sum(1/R_i)",
      meaning: "Each branch has the same potential difference and branch currents add.",
      variables: [{ symbol: "R_i", meaning: "resistance of branch i", unit: "ohm" }],
      useWhen: "Every component connects across the same two nodes.",
      commonTrap: "Forgetting that equivalent resistance is smaller than the smallest positive branch resistance.",
      accessibleText: "The reciprocal of the equivalent parallel resistance equals the sum of the reciprocals of the branch resistances.",
    },
    {
      id: "divider-relations",
      expression: "V_1 = V R_1/(R_1 + R_2) ;   I_1 = I R_2/(R_1 + R_2)",
      meaning: "Series voltage divides in proportion to resistance; parallel current divides inversely with resistance.",
      variables: [
        { symbol: "V_1", meaning: "voltage across R_1", unit: "V" },
        { symbol: "I_1", meaning: "current through R_1", unit: "A" },
      ],
      useWhen: "The network is the stated unloaded series divider or a simple two-branch parallel divider.",
      commonTrap: "Using the voltage-divider result after a load changes the network.",
      accessibleText: "Voltage across the first resistor equals total voltage times its resistance over the sum; current in the first branch equals total current times the other resistance over the sum.",
    },
    {
      id: "power-energy",
      expression: "P = VI ;   Ohmic resistor: P = I^2 R = V^2/R ;   W = VIt = Pt",
      meaning: "Electrical energy transferred per unit time.",
      variables: [
        { symbol: "P", meaning: "power", unit: "W" },
        { symbol: "W", meaning: "energy", unit: "J" },
        { symbol: "t", meaning: "time", unit: "s" },
      ],
      useWhen: "The voltage and current refer to the same element with a clear sign convention.",
      commonTrap: "Using V^2/R for a non-Ohmic device, or using the total supply voltage across only one resistor.",
      accessibleText: "Power equals voltage times current; for an Ohmic resistor it also equals current squared times resistance, or voltage squared divided by resistance.",
    },
    {
      id: "emf-terminal-voltage",
      expression: "discharging: V = epsilon - Ir ;   charging: V = epsilon + Ir ;   I = epsilon/(R + r)",
      meaning: "Emf is source energy per unit charge; terminal voltage accounts for internal potential change while current flows.",
      variables: [
        { symbol: "epsilon", meaning: "emf", unit: "V" },
        { symbol: "V", meaning: "terminal voltage", unit: "V" },
        { symbol: "r", meaning: "internal resistance", unit: "ohm" },
        { symbol: "R", meaning: "external load", unit: "ohm" },
      ],
      useWhen: "Current direction relative to cell polarity is known.",
      commonTrap: "Calling emf a force, or using the discharging sign for a charging cell.",
      accessibleText: "For a discharging cell, terminal voltage equals emf minus current times internal resistance; for a charging cell it equals emf plus that internal drop.",
    },
    {
      id: "cells-series",
      expression: "identical aiding cells: epsilon_eq = n epsilon ;   r_eq = n r ;   I = n epsilon/(R + n r)",
      meaning: "Series connection adds signed emfs and internal resistances.",
      variables: [
        { symbol: "n", meaning: "number of identical cells" },
        { symbol: "epsilon", meaning: "emf of one cell", unit: "V" },
        { symbol: "r", meaning: "internal resistance of one cell", unit: "ohm" },
      ],
      useWhen: "Cell orientation is identified.",
      commonTrap: "Adding emf magnitudes when one cell opposes another.",
      accessibleText: "For n identical aiding cells in series, equivalent emf is n times emf and equivalent internal resistance is n times r.",
    },
    {
      id: "cells-parallel",
      expression:
        "identical cells: epsilon_eq = epsilon, r_eq = r/n ;   unequal: r_eq = 1/sum(1/r_i), epsilon_eq = sum(epsilon_i/r_i) / sum(1/r_i)",
      meaning: "Parallel cells reduce equivalent internal resistance; unequal cells require internal-resistance weighting.",
      variables: [
        { symbol: "epsilon_i", meaning: "emf of branch i", unit: "V" },
        { symbol: "r_i", meaning: "internal resistance of branch i", unit: "ohm" },
      ],
      useWhen: "Polarities and internal resistances are included and the source model is valid.",
      commonTrap: "Averaging unequal emfs arithmetically without considering internal resistance.",
      accessibleText: "For identical parallel cells, equivalent emf is unchanged and equivalent internal resistance is r over n; for unequal cells, weight each emf by the reciprocal of its internal resistance.",
    },
    {
      id: "kirchhoff-junction",
      expression: "sum(I) = 0 at a node",
      meaning: "Steady-state charge conservation: total current entering equals total current leaving.",
      variables: [{ symbol: "I", meaning: "signed branch current at the node", unit: "A" }],
      useWhen: "Branches meet at a node.",
      commonTrap: "Writing a separate independent junction equation for every node when one is redundant.",
      accessibleText: "The algebraic sum of currents at a node is zero.",
    },
    {
      id: "kirchhoff-loop",
      expression:
        "sum(Delta V) = 0 around a closed loop ;   resistor with current: -IR ;   against current: +IR ;   cell minus to plus: +epsilon ;   plus to minus: -epsilon",
      meaning: "Energy-per-charge balance around a closed loop.",
      variables: [{ symbol: "Delta V", meaning: "signed potential change across an element", unit: "V" }],
      useWhen: "A network cannot be fully solved by direct reduction or balance.",
      commonTrap: "Changing sign rules between terms, or treating a negative solved current as invalid.",
      accessibleText: "The algebraic sum of potential changes around a closed loop is zero, using one consistent sign convention for resistors and cells.",
    },
    {
      id: "wheatstone-balance",
      expression: "P/Q = R/S at balance",
      meaning: "At balance the two detector nodes are equipotential and galvanometer current is zero.",
      variables: [{ symbol: "P, Q, R, S", meaning: "bridge arm resistances as labelled in the diagram", unit: "ohm" }],
      useWhen: "A null condition is stated or established.",
      commonTrap: "Applying the balance ratio to an unbalanced bridge.",
      accessibleText: "At Wheatstone balance, the ratio of P to Q equals the ratio of R to S.",
    },
    {
      id: "metre-bridge",
      expression: "X/R = l/(100 - l)   for X in the left gap and l measured from the left end",
      meaning: "Uniform-wire resistance is proportional to length, so the bridge ratio becomes a length ratio.",
      variables: [
        { symbol: "X", meaning: "unknown resistance in the left gap", unit: "ohm" },
        { symbol: "R", meaning: "known resistance in the right gap", unit: "ohm" },
        { symbol: "l", meaning: "balance length from the left end, between 0 and 100", unit: "cm" },
      ],
      useWhen: "The bridge wire is uniform and the null point is measured from the stated end.",
      commonTrap:
        "Copying the ratio without checking gap placement, measurement direction, end resistance and whether the null point exists.",
      accessibleText: "The unknown resistance divided by the known resistance equals the balance length divided by one hundred minus that length, for the stated placement.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B35 via recipe)                                   */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-narrow-wire",
      prompt:
        "Worked reasoning 1: one steady-current wire has a wide section and a narrow section, with the same material and carrier density. What changes?",
      answer:
        "The current is the same in both sections, but current density, drift speed and field magnitude are larger in the narrow section.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "In steady state, charge cannot continuously accumulate at the boundary between sections." }],
            [{ text: "Therefore the same total current crosses both sections." }],
            [
              { text: "Current density is " },
              { text: "J = I/A", code: true },
              { text: ", so the narrow section has larger J." },
            ],
            [
              { text: "For one carrier type, " },
              { text: "I = n q A v_d", code: true },
              { text: ", so smaller A requires larger drift-speed magnitude." },
            ],
            [
              { text: "For an Ohmic material, " },
              { text: "E = rho J", code: true },
              { text: ", so the field magnitude and potential gradient are larger in the narrow section." },
            ],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "PI clue: saying current must be smaller because the wire is narrower shows a likely Knowledge Gap. Reaching the correct same-current statement but inverting A during calculation is an Execution Error.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-stretched-wire",
      prompt:
        "Worked reasoning 2: a uniform wire is stretched to twice its original length without changing volume, material or temperature. Find the new resistance.",
      answer: "Resistance becomes four times the original, while resistivity is unchanged.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [
              { text: "Original resistance is " },
              { text: "R = rho L/A", code: true },
              { text: "." },
            ],
            [
              { text: "Constant volume gives " },
              { text: "A L = A_new L_new", code: true },
              { text: "." },
            ],
            [
              { text: "With " },
              { text: "L_new = 2L", code: true },
              { text: ", the area becomes " },
              { text: "A_new = A/2", code: true },
              { text: "." },
            ],
            [
              { text: "Therefore " },
              { text: "R_new = rho(2L)/(A/2) = 4R", code: true },
              { text: "." },
            ],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "PI clue: changing resistivity because the wire was stretched shows a Knowledge Gap. Changing only length and forgetting the area change shows a Decision / Selection Error, because the constant-volume condition was not translated.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-terminal-voltage",
      prompt:
        "Worked reasoning 3: a cell has emf 12 V, internal resistance 1 ohm and external load 5 ohm. Reconcile terminal voltage and power.",
      answer: "Current is 2 A, terminal voltage is 10 V, and 20 W in the load plus 4 W internally equals the 24 W supplied.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Total series resistance is R + r = 6 ohm." }],
            [
              { text: "Current is " },
              { text: "I = epsilon/(R + r) = 2 A", code: true },
              { text: "." },
            ],
            [{ text: "Load terminal voltage is V = IR = 10 V." }],
            [
              { text: "Source relation confirms " },
              { text: "V = epsilon - Ir = 12 - 2 = 10 V", code: true },
              { text: "." },
            ],
            [{ text: "Source power is epsilon I = 24 W." }],
            [{ text: "Load power is I^2 R = 20 W." }],
            [{ text: "Internal heating is I^2 r = 4 W." }],
            [{ text: "20 W + 4 W = 24 W, so power balances." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "PI clue: setting terminal voltage to 12 V while current flows is a Knowledge Gap if emf and terminal voltage are confused, or a Recall Gap if the distinction is understood but the internal-drop relation was forgotten.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-negative-current",
      prompt:
        "Worked reasoning 4: a single loop contains a 12 V cell opposing a 6 V cell with total resistance 3 ohm. What does the sign of the solved current mean?",
      answer: "The current is 2 A in the direction driven by the 12 V cell; a negative result would simply correct an assumed arrow.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Traverse the loop clockwise." }],
            [{ text: "Treat the 12 V source as a rise and the opposing 6 V source as a drop." }],
            [
              { text: "Loop equation is " },
              { text: "12 - 6 - 3I = 0", code: true },
              { text: "." },
            ],
            [{ text: "Therefore I = 2 A, clockwise." }],
            [
              {
                text: "If clockwise had been assumed in the opposite physical direction, the algebra would return I = -2 A and the negative sign would correct the assumed arrow.",
              },
            ],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "PI clue: reversing the arrow after seeing a negative result and then rewriting equations inconsistently is an Execution Error. Avoiding Kirchhoff because a current direction is unknown is a Decision / Selection Error.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-metre-bridge",
      prompt:
        "Worked reasoning 5: unknown resistance X is in the left gap, 6 ohm is in the right gap and the null point is at 40 cm from the left end. Find X.",
      answer: "X = 4 ohm for that placement; interchanging the gaps requires rewriting the ratio.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "At null, the galvanometer current is zero." }],
            [
              { text: "With the stated placement, " },
              { text: "X/6 = 40/(100 - 40)", code: true },
              { text: "." },
            ],
            [
              { text: "So " },
              { text: "X/6 = 2/3", code: true },
              { text: " and X = 4 ohm." },
            ],
            [
              {
                text: "If the unknown and known resistances were interchanged, the formula would have to be rewritten for the new placement.",
              },
            ],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "Bridge formulas encode topology and measurement direction. They are not placement-free identities.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Error patterns (B30) — PI v1.1 tagged                               */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "current-as-electron-speed",
      mistake: "Equating current with electron speed",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "Current is collective charge flow; electron motion also contains large random components." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "Use " },
            { text: "I = n e A v_d", code: true },
            { text: " and distinguish drift from random motion." },
          ],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "conventional-current-direction",
      mistake: "Drawing conventional current in the electron-drift direction",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "Electrons have negative charge, so conventional current is opposite to their drift." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            {
              text: "State the carrier sign before assigning directions. Evidence may read as Knowledge Gap or Execution Error depending on the working.",
            },
          ],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "current-changes-in-series",
      mistake: "Assuming current changes at every resistor in one series path",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Charge cannot steadily accumulate between ideal series components." }],
        },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Same branch current, different voltage drops." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "current-density-confusion",
      mistake: "Treating current density as identical to current",
      why: [
        { type: "paragraph", children: [{ text: "Current density also depends on area and direction." }] },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "Use " },
            { text: "J = I/A", code: true },
            { text: " only for uniform normal flow." },
          ],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "every-vir-is-ohms-law",
      mistake: "Calling every use of V = IR Ohm's law",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The ratio can define operating resistance even when it is not constant." }],
        },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Test proportionality and physical conditions." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "graph-slope-backwards",
      mistake: "Reading graph slope backwards",
      why: [
        {
          type: "paragraph",
          children: [{ text: "A V-I slope is resistance; an I-V slope is conductance for an Ohmic line." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Label axes and write slope units before calculating." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "resistivity-changes-with-shape",
      mistake: "Changing resistivity when only dimensions change",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Resistivity belongs to the material and state, not specimen shape." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "Separate rho from the geometry factor " },
            { text: "L/A", code: true },
            { text: "." },
          ],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "temperature-formula-without-range",
      mistake: "Applying the linear temperature formula without a range",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The relation is an approximation and material dependent." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State reference temperature and validity range." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "topology-by-appearance",
      mistake: "Identifying series or parallel by appearance",
      why: [{ type: "paragraph", children: [{ text: "Electrical topology is determined by nodes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Mark nodes before combining." }] }],
      errorType: "decision-error",
    },
    {
      id: "terminal-voltage-equals-emf",
      mistake: "Using terminal voltage equal to emf under load",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Internal resistance creates a current-dependent difference." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            {
              text: "Decide charging or discharging, then use epsilon plus or minus Ir. Evidence may read as Knowledge Gap or Recall Gap depending on whether the distinction is understood.",
            },
          ],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "adding-opposing-emfs",
      mistake: "Adding opposing cell emfs",
      why: [{ type: "paragraph", children: [{ text: "Emf is signed along the traversal." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Mark every cell polarity." }] }],
      errorType: "execution-error",
    },
    {
      id: "kirchhoff-too-early",
      mistake: "Starting Kirchhoff equations before simplifying",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Correct but needlessly long algebra increases error risk." }],
        },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Use the circuit-analysis ladder first." }] }],
      errorType: "decision-error",
    },
    {
      id: "reversing-arrows-midway",
      mistake: "Reversing current arrows mid-solution",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "An assumed arrow is allowed and need not be physically correct initially." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Keep the arrow; let the sign of the answer decide the actual direction." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "dependent-loop-equations",
      mistake: "Writing every possible loop equation",
      why: [{ type: "paragraph", children: [{ text: "Some loop equations are dependent." }] }],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Use enough independent loops to match the remaining unknowns." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "unbalanced-bridge-ratio",
      mistake: "Using Wheatstone balance when galvanometer current is not zero",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The ratio condition is a null result, not a general bridge equation." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Establish balance first, or solve the general network." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "metre-bridge-placement",
      mistake: "Using X/R = l/(100 - l) after swapping the gaps",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The length ratio is tied to placement and reference end." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Rewrite the arm ratio from the actual diagram." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "ignoring-power-balance",
      mistake: "Ignoring power balance",
      why: [
        {
          type: "paragraph",
          children: [{ text: "A sign or topology error may survive the current equations." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Compare total source power with total absorbed power." }],
        },
      ],
      errorType: "execution-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Direct questions (B22)                                              */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is electric current?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electric current is the rate at which net charge crosses an oriented surface. Its SI unit is the ampere. In a metal, conventional current is opposite to electron drift.",
            },
          ],
        },
      ],
    },
    {
      question: "How can electron drift be slow while a circuit responds quickly?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The applied electric field is established through the connected circuit rapidly compared with the time an individual electron would need to drift through the circuit. Current is a collective response of many carriers, not the travel speed of one electron.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between current and current density?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Current is the total charge-flow rate through a surface. Current density is a local vector describing current per unit normal area. For uniform normal flow, I = JA.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between resistance and resistivity?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Resistance depends on the specimen's material, length, area and physical conditions. Resistivity is a property of the material under specified conditions. For a uniform conductor, R = rho L/A.",
            },
          ],
        },
      ],
    },
    {
      question: "Is V = IR always Ohm's law?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. R = V/I can describe static resistance at an operating point. Ohmic behaviour requires V to be proportional to I over the stated range while relevant physical conditions remain unchanged.",
            },
          ],
        },
      ],
    },
    {
      question: "How do I read resistance from an I-V graph?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "On a V versus I graph, slope is resistance for an Ohmic line. On an I versus V graph, slope is conductance, so resistance is the reciprocal of that slope.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is emf not a force?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Emf is energy supplied by a source per unit charge and is measured in volts. The name is historical.",
            },
          ],
        },
      ],
    },
    {
      question: "When does terminal voltage equal emf?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "In the ideal model, terminal voltage equals emf when no current flows. During discharge it is reduced by the internal drop Ir; during charging the terminal voltage exceeds emf by Ir for the stated current direction.",
            },
          ],
        },
      ],
    },
    {
      question: "When should I use Kirchhoff's laws?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use Kirchhoff's laws when the circuit cannot be fully solved by genuine series or parallel reduction, symmetry or a bridge-balance condition.",
            },
          ],
        },
      ],
    },
    {
      question: "What does a negative current from Kirchhoff equations mean?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It means the actual current flows opposite to the arrow you assumed. The original equations remain valid if their signs were consistent.",
            },
          ],
        },
      ],
    },
    {
      question: "When is a Wheatstone bridge balanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A Wheatstone bridge is balanced when its detector nodes are at equal potential and the galvanometer current is zero. For the stated arm arrangement, this gives P/Q = R/S.",
            },
          ],
        },
      ],
    },
    {
      question: "Is potentiometer in the current JEE Current Electricity syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Potentiometer is not named in JEE Main 2026 Unit 12 or in the cited JEE Advanced 2026 current-electricity line. Students should follow any later official update if the syllabus changes.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Learning path (B36) — rendered only for live destinations           */
  /* ------------------------------------------------------------------ */
  relatedChapters: [
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Electric field, potential, energy per charge and conductors.",
    },
    {
      label: "Magnetic Effects of Current and Magnetism",
      url: "/jee/physics/magnetism",
      relation: "forward",
      description: "Current becomes the source of a magnetic field.",
    },
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "forward",
      description: "Changing flux produces emf and a circuit response.",
    },
  ],
  links: [
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Official exam-level syllabus hierarchy.",
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
      description: "Mixed circuit practice.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Provenance (B37)                                                    */
  /* ------------------------------------------------------------------ */
  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-physics-12-p1-ch3",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. Concept, formula and circuit explanations are checked against NCERT Class 12 Physics Part I, Chapter 3 and standard SI conventions. No chapter weightage, question frequency or forecast is asserted, and no paper-level topic-tagging dataset has been approved.",
  contributorPolicy: [
    "Author: a physics education writer able to explain carrier-level and network-level models without mixing notation or oversimplifying circuit behaviour.",
    "Academic reviewer: postgraduate qualification in Physics, Electrical Engineering or a closely related discipline, plus recent JEE Main and JEE Advanced teaching or curriculum-review experience.",
    "Independent technical checker: a second qualified educator who separately verifies carrier directions, drift and mobility forms, Ohmic wording and graph slopes, resistance and resistivity distinctions, temperature approximation, cell polarity and power relations, Kirchhoff equation independence, bridge arm labels and metre-bridge placement, worked calculations, units and Main versus Advanced scope wording.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "27 August 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer", "diagnostic-cta-suppressed"],

  meta: {
    title: "Current Electricity for JEE: Concepts, Circuits and Formulas",
    description:
      "Learn JEE Current Electricity through official scope, drift and current density, Ohm's-law conditions, cells, Kirchhoff, bridges and error diagnosis.",
    ogTitle: "Current Electricity for JEE: Master Carrier and Circuit Reasoning",
    ogDescription:
      "Connect drift velocity, resistance, cells, circuit laws and bridge balance with condition-aware formulas and clear method selection.",
    ogType: "article",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Fluid Mechanics — T06 production content (Batch 04, 8 September 2026).
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
 *   keeps /jee/physics/fluid-mechanics on noindex until review is recorded.
 */
export const jeePhysicsFluidMechanics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Fluid Mechanics",
  slug: "fluid-mechanics",
  url: "/jee/physics/fluid-mechanics",
  canonicalIntent:
    "Choose the correct static-fluid or flow model and test every ideal-fluid or viscous-flow assumption before applying a formula.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formula conditions kept beside every equation",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Begin by deciding whether the fluid is at rest or moving. Static fluids are governed by pressure balance and buoyancy. Steady flow adds mass conservation through continuity. Bernoulli's equation adds mechanical-energy conservation under restrictive ideal-flow conditions. Viscous flow needs a resistance model such as Stokes' law when its conditions are satisfied.",
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
      description: "Stabilise force balance before applying it to a fluid element or a submerged body.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Review energy conservation before treating Bernoulli's equation as an energy statement.",
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
    unit: "Fluid Mechanics",
    topics: [
      "Pressure due to a fluid column",
      "Pascal's law and applications",
      "Effect of gravity on fluid pressure",
      "Buoyancy",
      "Viscosity",
      "Stokes' law",
      "Terminal velocity",
      "Streamline and turbulent flow",
      "Critical velocity",
      "Equation of continuity",
      "Bernoulli's principle and applications",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): state, conservation, resistance         */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "fluid-state",
      title: "1. Fluid state",
      keyIdea: "At rest, pressure at a point is isotropic and pressure changes with vertical depth.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At rest, pressure at a point is isotropic and pressure changes with vertical depth.",
            },
          ],
        },
      ],
    },
    {
      id: "boundary-force",
      title: "2. Boundary force",
      keyIdea: "Pressure force acts normal to a surface. The net pressure force on a submerged body gives buoyancy.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Pressure force acts normal to a surface. The net pressure force on a submerged body gives buoyancy.",
            },
          ],
        },
      ],
    },
    {
      id: "mass-conservation",
      title: "3. Mass conservation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For steady incompressible flow in a tube, volume flow rate is constant across every cross-section.",
            },
          ],
        },
      ],
    },
    {
      id: "energy-conservation",
      title: "4. Energy conservation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Along a streamline in steady, incompressible, non-viscous flow, pressure, kinetic, and gravitational terms exchange while their sum stays constant.",
            },
          ],
        },
      ],
    },
    {
      id: "resistance",
      title: "5. Resistance",
      keyIdea: "Stokes' drag is a special low-speed result for a sphere, not a universal fluid-drag law.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Viscosity dissipates mechanical energy. Stokes' drag is a special low-speed result for a sphere, not a universal fluid-drag law.",
            },
          ],
        },
      ],
    },
    {
      id: "terminal-state",
      title: "6. Terminal state",
      keyIdea: "Terminal velocity occurs when net force becomes zero, not when gravity disappears.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Terminal velocity occurs when net force becomes zero, not when gravity disappears.",
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
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Fluid Mechanics",
      intro:
        "Main names fluid-column pressure, Pascal's law, viscosity, Stokes' law, terminal velocity, flow regimes, critical velocity, and Bernoulli's principle. Advanced explicitly includes buoyancy and continuity, and explicitly excludes Poiseuille's equation from viscosity scope.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Pressure and Pascal's law",
          "Pressure due to a fluid column, Pascal's law and applications, effect of gravity on pressure are explicitly listed.",
          "Fluid pressure and Pascal's law are explicitly listed.",
        ],
        [
          "Buoyancy",
          "Not named as a separate heading in this list.",
          "Buoyancy is explicitly listed.",
        ],
        [
          "Viscosity and drag",
          "Viscosity, Stokes' law, and terminal velocity are explicitly listed.",
          "Viscosity is explicitly listed with Poiseuille's equation excluded. Stokes' law and terminal velocity are explicitly listed.",
        ],
        [
          "Flow regimes and continuity",
          "Streamline and turbulent flow, and critical velocity are explicitly listed.",
          "Streamline flow and continuity are explicitly listed.",
        ],
        [
          "Bernoulli's principle",
          "Bernoulli's principle and applications are explicitly listed.",
          "Bernoulli's theorem and applications are explicitly listed.",
        ],
      ],
      note: "Surface energy, surface tension, contact angle, drops, bubbles, and capillarity are official topics but their focused production depth belongs to the dedicated Surface Tension route.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Fluid Mechanics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Force balance",
          "Set up equilibrium for a body with multiple forces acting on it.",
          "Revise free-body diagrams in Laws of Motion.",
        ],
        [
          "Pressure and area",
          "Relate a normal force to the area it acts over.",
          "Revise the definition of pressure as force per unit normal area.",
        ],
        [
          "Density",
          "Use mass per unit volume in a calculation.",
          "Revise density and its units before combining it with volume.",
        ],
        [
          "Energy conservation",
          "Track how kinetic and potential energy terms exchange.",
          "Revise Work, Energy and Power before treating Bernoulli's equation as an energy statement.",
        ],
        [
          "Proportional reasoning",
          "Read how a result scales when one variable changes.",
          "Practise reading a formula's dependence on each variable in turn.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Six decisions cover most Fluid Mechanics questions. Select the model before any algebra.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        ["Fluid at rest or manometer", "Hydrostatic pressure", "Compare vertical levels, not tube path length"],
        ["Hydraulic device", "Pascal's law plus force balance", "Piston areas and same transmitted pressure"],
        ["Submerged or floating body", "Buoyancy and equilibrium", "Displaced volume, not necessarily object volume"],
        ["Changing pipe area", "Continuity", "Steady and effectively incompressible flow"],
        ["Pressure-speed-height relation", "Bernoulli", "Same streamline and ideal-flow assumptions"],
        ["Small sphere reaching constant speed", "Force balance with Stokes drag", "Creeping-flow and spherical-particle conditions"],
      ],
    },
    {
      id: "diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "Diagnose the invalid assumption",
      columns: ["Primary label", "Evidence", "Corrective action"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot separate pressure, pressure force, and buoyancy.",
          "Rebuild static-fluid free-body models.",
        ],
        [
          "Recall Gap",
          "Correct regime, but pressure, continuity, or drag relation is unavailable.",
          "Retrieve the formula together with its conditions.",
        ],
        [
          "Execution Error",
          "Wrong displaced volume, level difference, or algebra.",
          "Redraw geometry and label vertical coordinates.",
        ],
        [
          "Decision / Selection Error",
          "Uses Bernoulli for a static balance or Stokes for turbulent drag.",
          "Classify the fluid state and flow regime first.",
        ],
        [
          "Needs Review",
          "Flow path, loss, or low-Reynolds assumption is unclear.",
          "Escalate the physical model for academic review.",
        ],
      ],
    },
    {
      id: "official-paper-handling",
      jump: true,
      slot: "practice",
      heading: "Official-paper handling",
      columns: ["Rule", "What it means"],
      rows: [
        [
          "Classification requires review",
          "Classify official questions by hydrostatics, buoyancy, continuity, Bernoulli, viscosity, or terminal speed only after academic review.",
        ],
        [
          "Route boundary",
          "Surface-only problems belong to the Surface Tension child page, not this chapter.",
        ],
        [
          "Advanced exclusion",
          "Poiseuille's equation must not be presented as JEE Advanced syllabus content.",
        ],
        [
          "No counts or trends",
          "This page publishes no chapter question counts or trend claims.",
        ],
      ],
      note: "Sources: JEE Advanced paper archive and NTA JEE Main question papers, linked in the sources section below.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "pressure-definition",
      expression: "P = F(perpendicular) / A",
      meaning: "Normal force per unit area.",
      variables: [
        { symbol: "F(perpendicular)", meaning: "force component normal to the surface", unit: "N" },
        { symbol: "A", meaning: "surface area", unit: "m^2" },
        { symbol: "P", meaning: "pressure", unit: "Pa" },
      ],
      useWhen: "Finding average pressure for a uniform normal force.",
      commonTrap: "Using total force without isolating its normal component.",
      accessibleText: "Pressure equals the perpendicular force divided by the area it acts over.",
    },
    {
      id: "hydrostatic-pressure",
      expression: "P = P0 + rho g h",
      meaning: "Pressure at depth h below a free surface in a static fluid.",
      variables: [
        { symbol: "P0", meaning: "pressure at the free surface", unit: "Pa" },
        { symbol: "rho", meaning: "fluid density", unit: "kg/m^3" },
        { symbol: "g", meaning: "acceleration due to gravity", unit: "m/s^2" },
        { symbol: "h", meaning: "vertical depth below the free surface", unit: "m" },
      ],
      useWhen: "Static fluid with uniform density and constant g.",
      commonTrap: "Using the sloping path length instead of the vertical depth.",
      accessibleText: "Pressure at depth equals surface pressure plus density times gravity times vertical depth.",
    },
    {
      id: "buoyant-force",
      expression: "F(B) = rho(f) V(d) g",
      meaning: "Buoyant force from the displaced fluid volume.",
      variables: [
        { symbol: "rho(f)", meaning: "fluid density", unit: "kg/m^3" },
        { symbol: "V(d)", meaning: "displaced fluid volume", unit: "m^3" },
        { symbol: "g", meaning: "acceleration due to gravity", unit: "m/s^2" },
      ],
      useWhen: "Hydrostatic fluid with effective uniform density.",
      commonTrap: "Using the whole object volume when the body is only partly submerged.",
      accessibleText: "Buoyant force equals fluid density times displaced volume times gravity.",
    },
    {
      id: "continuity",
      expression: "Q = A v, and A1 v1 = A2 v2",
      meaning: "Volume flow rate and incompressible continuity across a tube.",
      variables: [
        { symbol: "Q", meaning: "volume flow rate", unit: "m^3/s" },
        { symbol: "A", meaning: "cross-sectional area", unit: "m^2" },
        { symbol: "v", meaning: "average flow speed", unit: "m/s" },
      ],
      useWhen: "Steady one-dimensional average flow of an incompressible fluid.",
      commonTrap: "Conserving speed instead of conserving flow rate.",
      accessibleText: "Flow rate equals area times speed, and area one times speed one equals area two times speed two.",
    },
    {
      id: "bernoulli",
      expression: "P + (1/2) rho v^2 + rho g h = constant",
      meaning: "Bernoulli energy per unit volume along a streamline.",
      variables: [
        { symbol: "P", meaning: "pressure", unit: "Pa" },
        { symbol: "rho", meaning: "fluid density", unit: "kg/m^3" },
        { symbol: "v", meaning: "flow speed", unit: "m/s" },
        { symbol: "h", meaning: "height", unit: "m" },
      ],
      useWhen: "Steady, incompressible, non-viscous flow along a streamline, with no unaccounted pump or loss.",
      commonTrap: "Applying it across a viscous loss without correcting for it.",
      accessibleText: "Pressure plus one half density times speed squared plus density times gravity times height stays constant along a streamline.",
    },
    {
      id: "stokes-drag",
      expression: "F(d) = 6 pi eta r v",
      meaning: "Stokes drag on a sphere of radius r.",
      variables: [
        { symbol: "eta", meaning: "fluid viscosity", unit: "Pa s" },
        { symbol: "r", meaning: "sphere radius", unit: "m" },
        { symbol: "v", meaning: "sphere speed relative to fluid", unit: "m/s" },
      ],
      useWhen: "Creeping flow around a sphere, unbounded-fluid approximation, low Reynolds-number regime.",
      commonTrap: "Using this for any shape or at a turbulent speed.",
      accessibleText: "Stokes drag equals six pi times viscosity times radius times speed.",
    },
    {
      id: "terminal-velocity",
      expression: "v(t) = 2 r^2 (rho(s) minus rho(f)) g / (9 eta)",
      meaning: "Terminal speed of a small sphere falling through a viscous fluid.",
      variables: [
        { symbol: "r", meaning: "sphere radius", unit: "m" },
        { symbol: "rho(s)", meaning: "sphere density", unit: "kg/m^3" },
        { symbol: "rho(f)", meaning: "fluid density", unit: "kg/m^3" },
        { symbol: "eta", meaning: "fluid viscosity", unit: "Pa s" },
      ],
      useWhen: "Stokes regime, isolated sphere, constant properties, steady terminal state.",
      commonTrap: "Ignoring buoyancy or container-wall effects.",
      accessibleText: "Terminal speed equals two times radius squared times the density difference times gravity, divided by nine times viscosity.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "terminal-speed-r-squared",
      prompt: "Why does terminal speed scale with the square of a falling sphere's radius?",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "A sphere of density rho(s) and radius r falls through a fluid of density rho(f) and viscosity eta. At terminal speed the downward weight equals the upward buoyancy plus the Stokes drag.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Weight is (4/3) pi r^3 rho(s) g. Buoyancy is (4/3) pi r^3 rho(f) g. Stokes drag is 6 pi eta r v(t). Setting weight equal to buoyancy plus drag and solving for v(t) gives v(t) = 2 r^2 (rho(s) minus rho(f)) g divided by 9 eta.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The r squared dependence comes from a driving force proportional to volume, which scales as r cubed, opposed by Stokes drag which scales only as r. The ratio of the two leaves an r squared dependence in the terminal speed.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "This result must not be extended to large spheres or turbulent flow without checking that the low Reynolds-number, creeping-flow regime still holds.",
            },
          ],
        },
      ],
      answer: "v(t) = 2 r^2 (rho(s) minus rho(f)) g / (9 eta), valid only in the Stokes regime.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes (B30)                                               */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "pressure-as-vector",
      mistake: "Treating pressure as a vector because pressure force has direction",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Pressure itself is a scalar; only the force it produces on a chosen surface has a direction, normal to that surface." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Compute pressure as a scalar, then apply it to a specific surface to get a directional force." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "inclined-column-length",
      mistake: "Comparing pressures using the length of an inclined liquid column instead of vertical height",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Hydrostatic pressure depends only on vertical depth below the free surface, not on the path length through the fluid." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Identify the vertical height between two points before applying the pressure-depth relation." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "bernoulli-wrong-points",
      mistake: "Applying Bernoulli between arbitrary points that are not connected by the modeled streamline",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Bernoulli's equation holds along a single streamline under steady, incompressible, non-viscous flow, not between any two arbitrary points in a fluid." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Confirm both points lie on the same streamline and that the ideal-flow conditions hold before applying it." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "forgetting-buoyancy-terminal",
      mistake: "Forgetting buoyancy in a terminal-speed force balance",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Omitting buoyancy overstates the net driving force and gives an incorrect terminal speed." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Write weight, buoyancy, and drag as three separate terms before balancing them." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "stokes-anywhere",
      mistake: "Using Stokes' law at any speed or for any shape",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Stokes' law is a low Reynolds-number, creeping-flow result derived specifically for a sphere." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check the creeping-flow and spherical-particle conditions before applying Stokes' drag." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "surface-tension-scope-creep",
      mistake: "Reproducing surface-tension depth here instead of routing to its focused page",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Surface energy, surface tension, contact angle, drops, bubbles, and capillarity have their own dedicated production depth on a separate route." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Route surface-tension questions to the Surface Tension chapter instead of expanding this page's scope." }],
        },
      ],
      errorType: "needs-review",
    },
  ],

  faqs: [
    {
      question: "When can Bernoulli's equation be used?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use its basic form for steady, incompressible, non-viscous flow along a streamline when no unaccounted machine work or loss occurs.",
            },
          ],
        },
      ],
    },
    {
      question: "What is terminal velocity?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is the constant speed reached when the net force on the moving body becomes zero.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does a narrow pipe section usually have faster incompressible flow?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The same steady volume flow rate must pass every cross-section, so a smaller area requires a larger average speed.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Surface Tension",
      url: "/jee/physics/surface-tension",
      relation: "forward",
      description: "Move on to surface energy, contact angle, drops, bubbles, and capillarity, owned by this dedicated child page.",
    },
    {
      label: "Thermodynamics",
      url: "/jee/physics/thermodynamics",
      relation: "forward",
      description: "Extend energy reasoning from ideal fluid flow to thermodynamic systems.",
    },
    {
      label: "Elasticity",
      url: "/jee/physics/elasticity",
      relation: "same-unit",
      description: "Compare how a bulk material resists deformation under stress alongside fluid behaviour.",
    },
    {
      label: "Thermal Properties",
      url: "/jee/physics/thermal-properties",
      relation: "same-unit",
      description: "Connect density and property changes with temperature to the static-fluid model used here.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Revisit force balance before applying it to a fluid element or a submerged body.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Revisit energy conservation before treating Bernoulli's equation as an energy statement.",
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
      description: "Connect fluid-model reasoning with reviewed official problems.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, with Poiseuille's equation explicitly excluded from Advanced viscosity scope. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type is a JEE Physics educator experienced in mechanics and fluid-model instruction.",
    "Academically reviewed by: Unassigned. Required expertise is classical fluid mechanics, hydrostatics, ideal flow, and viscous-flow approximations, with a postgraduate degree in Physics, Mechanical Engineering, Fluid Mechanics, or a closely related discipline, and documented JEE-scope familiarity.",
    "Last reviewed: pending, to be recorded only after a completed academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus, NCERT Mechanical Properties of Fluids, and official paper archives.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Fluid Mechanics for JEE: Pressure, Bernoulli, Viscosity",
    description:
      "Learn JEE fluid mechanics through hydrostatics, buoyancy, continuity, Bernoulli conditions, viscosity, terminal speed, reasoning, and traps.",
    ogTitle: "Fluid Mechanics for JEE",
    ogDescription:
      "A regime-first guide to pressure, buoyancy, ideal flow, viscosity, and terminal speed.",
  },
};

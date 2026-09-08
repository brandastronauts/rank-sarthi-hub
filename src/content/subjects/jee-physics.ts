import type { SubjectHubContent } from "@/content/types";

/**
 * T04 — JEE Physics subject hub.
 *
 * Content source: accepted Batch 02 production package (27 August 2026).
 * Chapter names and URLs are NOT listed here; they are derived from the URL
 * registry. This record only carries the approved editorial annotation per
 * route, so the hub can never drift from the real route inventory.
 */
export const jeePhysicsHub: SubjectHubContent = {
  url: "/jee/physics",
  platform: "jee",
  slug: "physics",
  subject: "Physics",
  exam: "JEE",
  eyebrow: "JEE · Physics",
  title: "JEE Physics: Complete Chapter Map and Learning Paths",
  intent:
    "Browse every approved JEE Physics chapter route, understand how chapters connect, and choose the next learning or repair action.",
  contentStatus: "draft",
  chips: ["JEE Main 2026", "JEE Advanced 2026", "30 chapter routes"],
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Physics becomes manageable when you stop treating chapters as isolated formula sets. Motion, force, energy, fields, circuits, waves, light, and quantum models each answer a different kind of question. This hub shows where every approved chapter belongs, what usually comes before it, and which route should follow.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        { text: "Direct answer: ", bold: true },
        {
          text: "Start with the official Physics syllabus. Then choose the earliest chapter whose prerequisite relationship is unstable. If you already know the content but lose marks, diagnose the loss before repeating the same exercise set.",
        },
      ],
    },
  ],

  taskTable: {
    id: "tasks",
    heading: "Choose your Physics task",
    columns: ["Your task", "Best destination", "What to do there"],
    rows: [
      ["Verify current exam scope", "Physics syllabus", "Check Main and Advanced separately."],
      ["Learn the electricity chain", "Electrostatics", "Build field and potential before circuits."],
      [
        "Repair circuit reasoning",
        "Current Electricity",
        "Separate microscopic, component, source, and network reasoning.",
      ],
      ["Select a new chapter", "Use the complete map below", "Start at the earliest missing prerequisite."],
      ["Review a weak attempt", "Use the diagnosis block below", "Classify the cause, repair it, then retest."],
    ],
    note: "Destinations that are not yet built are named rather than linked, so no dead link is rendered.",
  },

  architecture: {
    id: "concept-architecture",
    heading: "Physics concept architecture",
    columns: ["Concept system", "Core question", "Suggested dependency chain"],
    rows: [
      [
        "Measurement",
        "What does the quantity mean, and how certain is it?",
        "Units and Measurements > every quantitative chapter",
      ],
      [
        "Mechanics",
        "How does motion change under forces and constraints?",
        "Kinematics > Laws of Motion > Work Energy Power > Centre of Mass > Rotation > Gravitation",
      ],
      [
        "Matter and heat",
        "How do many-particle systems respond macroscopically?",
        "Elasticity and Fluids > Thermal Properties > Thermodynamics > Kinetic Theory",
      ],
      [
        "Oscillation and waves",
        "How do systems repeat and disturbances propagate?",
        "Laws of Motion and Energy > SHM > Waves",
      ],
      [
        "Electricity",
        "How do charges create fields, energy, and steady flow?",
        "Electrostatics > Capacitance > Current Electricity",
      ],
      [
        "Magnetism and induction",
        "How do moving charges and changing fields interact?",
        "Current Electricity > Magnetism > Electromagnetic Induction > Alternating Current > Electromagnetic Waves",
      ],
      [
        "Optics",
        "When should light be treated as rays or waves?",
        "Geometry and Trigonometry > Ray Optics > Wave Optics",
      ],
      [
        "Modern Physics",
        "When do classical models stop being sufficient?",
        "Waves and Energy > Dual Nature > Atoms and Nuclei > Main-specific Semiconductors",
      ],
    ],
  },

  chapterMap: {
    heading: "All approved Physics chapter routes",
    scopeNote:
      "Scope labels: Both means the topic is present in the current official Main and Advanced syllabi. Main means explicit current Main scope without a corresponding explicit Advanced topic. No current mapping means neither checked 2026 syllabus lists the registry topic. Labels describe scope, not weightage or difficulty.",
    contextualHeading: "Contextual resource, not current 2026 syllabus",
    contextualNote:
      "This route has no current JEE Main 2026 or JEE Advanced 2026 mapping. It is kept as a contextual and historical reference only and must not be treated as current exam scope.",
    expectedCount: 30,
    notes: [
      {
        url: "/jee/physics/laws-of-motion",
        scope: "Both",
        order: 1,
        note: "Follows Kinematics; supports energy, momentum, rotation, fluids, and oscillations.",
      },
      {
        url: "/jee/physics/electrostatics",
        scope: "Both",
        order: 2,
        note: "Charge > field > flux > potential; prerequisite for capacitance and circuit potential reasoning.",
      },
      {
        url: "/jee/physics/modern-physics",
        scope: "Both, umbrella route",
        order: 3,
        note: "Organises dual nature, atomic, nuclear, and related modern models.",
      },
      {
        url: "/jee/physics/current-electricity",
        scope: "Both",
        order: 4,
        note: "Connects carriers and materials to circuit laws; prerequisite for magnetism and induction.",
      },
      {
        url: "/jee/physics/optics",
        scope: "Both, umbrella route",
        order: 5,
        note: "Separates geometric and wave descriptions of light.",
      },
      {
        url: "/jee/physics/waves",
        scope: "Both",
        order: 6,
        note: "Builds on oscillations; supports sound, interference, and later wave models.",
      },
      {
        url: "/jee/physics/thermodynamics",
        scope: "Both",
        order: 7,
        note: "Connects state variables, energy transfer, and process constraints.",
      },
      {
        url: "/jee/physics/magnetism",
        scope: "Both",
        order: 8,
        note: "Requires current and vector direction control; leads to induction.",
      },
      {
        url: "/jee/physics/electromagnetic-induction",
        scope: "Both",
        order: 9,
        note: "Changing flux produces emf; leads to inductance and AC circuits.",
      },
      {
        url: "/jee/physics/kinematics",
        scope: "Both",
        order: 10,
        note: "Describes motion before asking what causes it.",
      },
      {
        url: "/jee/physics/work-energy-power",
        scope: "Both",
        order: 11,
        note: "Alternative state-change method after forces; supports rotation and gravitation.",
      },
      {
        url: "/jee/physics/rotational-motion",
        scope: "Both",
        order: 12,
        note: "Extends force, energy, and momentum to rigid bodies.",
      },
      {
        url: "/jee/physics/gravitation",
        scope: "Both",
        order: 13,
        note: "Reuses field, potential, energy, and circular-motion ideas in a gravitational system.",
      },
      {
        url: "/jee/physics/fluid-mechanics",
        scope: "Both",
        order: 14,
        note: "Uses pressure, force balance, continuity, energy, viscosity, and buoyancy.",
      },
      {
        url: "/jee/physics/simple-harmonic-motion",
        scope: "Both",
        order: 15,
        note: "Requires force and energy models; prerequisite for wave reasoning.",
      },
      {
        url: "/jee/physics/units-and-measurements",
        scope: "Both",
        order: 16,
        note: "Foundation for dimensions, uncertainty, and valid quantitative interpretation.",
      },
      {
        url: "/jee/physics/alternating-current",
        scope: "Both",
        order: 17,
        note: "Builds on current, induction, energy, and oscillatory response.",
      },
      {
        url: "/jee/physics/dual-nature-of-matter",
        scope: "Both",
        order: 18,
        note: "Connects energy and wave ideas to photons and matter waves.",
      },
      {
        url: "/jee/physics/atoms-and-nuclei",
        scope: "Both",
        order: 19,
        note: "Uses energy quantisation, atomic models, and nuclear energy relations.",
      },
      {
        url: "/jee/physics/semiconductors",
        scope: "Main",
        order: 20,
        note: "Electronic Devices is explicit in Main 2026; no corresponding explicit Advanced section is listed.",
      },
      {
        url: "/jee/physics/ray-optics",
        scope: "Both",
        order: 21,
        note: "Uses geometry and sign conventions for imaging and instruments.",
      },
      {
        url: "/jee/physics/wave-optics",
        scope: "Both",
        order: 22,
        note: "Uses phase and superposition for interference, diffraction, and polarization.",
      },
      {
        url: "/jee/physics/capacitance",
        scope: "Both",
        order: 23,
        note: "Builds from field, potential, conductors, and dielectrics; precedes RC behavior.",
      },
      {
        url: "/jee/physics/electromagnetic-waves",
        scope: "Both",
        order: 24,
        note: "Connects changing electric and magnetic fields to propagation and spectrum.",
      },
      {
        url: "/jee/physics/kinetic-theory-of-gases",
        scope: "Both",
        order: 25,
        note: "Links microscopic motion to pressure, temperature, and heat capacity.",
      },
      {
        url: "/jee/physics/thermal-properties",
        scope: "Both",
        order: 26,
        note: "Covers expansion, calorimetry, phase change, and heat transfer before deeper thermodynamics.",
      },
      {
        url: "/jee/physics/center-of-mass",
        scope: "Both",
        order: 27,
        note: "Connects momentum and systems of particles to rotation and collision analysis.",
      },
      {
        url: "/jee/physics/elasticity",
        scope: "Both",
        order: 28,
        note: "Connects force, deformation, stress, strain, and material response.",
      },
      {
        url: "/jee/physics/surface-tension",
        scope: "Both",
        order: 29,
        note: "Part of current fluid and measurement scope, connected to energy and pressure differences.",
      },
      {
        url: "/jee/physics/communication-systems",
        scope: "No current mapping",
        order: 30,
        contextual: true,
        note: "Approved registry route kept for context only. It is not current JEE Main 2026 or JEE Advanced 2026 syllabus content.",
      },
    ],
  },

  pyqNote:
    "The approved Physics previous-year-paper destination is /jee/previous-year-papers/physics. It is linked only when the paper inventory, official file provenance, answers or solutions, and route state are verified. This hub does not publish unsupported chapter-frequency claims.",

  diagnosis: {
    id: "diagnosis",
    heading: "Diagnose a Physics loss",
    columns: ["Evidence from the attempt", "Primary PI label", "Correct next action"],
    rows: [
      [
        "The governing relationship was not understood",
        "Knowledge Gap",
        "Rebuild the model with diagrams, limiting cases, and a small set of direct questions.",
      ],
      [
        "The relationship was understood but not retrieved",
        "Recall Gap",
        "Use spaced retrieval, formula-condition prompts, and a fresh short set.",
      ],
      [
        "The method was right but algebra, sign, unit, diagram, or calculation failed",
        "Execution Error",
        "Isolate the execution step and add a checking routine.",
      ],
      [
        "The wrong model, method, question order, or time investment was chosen",
        "Decision / Selection Error",
        "Compare alternative methods and practise stop or switch rules.",
      ],
      [
        "The evidence does not distinguish the cause",
        "Needs Review",
        "Collect more evidence before assigning a repair.",
      ],
    ],
    note: "Optional metadata may record Contributing Factors and Tag Confidence. Do not diagnose a stable pattern from one ambiguous error.",
  },

  relatedLinks: [
    { label: "JEE syllabus", url: "/jee/syllabus", relation: "up" },
    { label: "Physics syllabus", url: "/jee/syllabus/physics", relation: "up" },
    { label: "Electrostatics benchmark", url: "/jee/physics/electrostatics", relation: "related" },
    { label: "Current Electricity benchmark", url: "/jee/physics/current-electricity", relation: "related" },
    { label: "JEE Advanced syllabus", url: "/jee/jee-advanced/syllabus", relation: "related" },
    { label: "Chemistry hub", url: "/jee/chemistry", relation: "related" },
    { label: "Mathematics hub", url: "/jee/mathematics", relation: "related" },
  ],

  faqs: [
    {
      question: "Which Physics chapter should I start first?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Start with the earliest missing prerequisite for your target path. Units and Measurements and Kinematics are common foundations, but your starting point should follow evidence from your present coverage.",
            },
          ],
        },
      ],
    },
    {
      question: "Are all 30 registry chapters current JEE syllabus chapters?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Some routes split or group official units for learning, and Communication Systems has no current 2026 Main or Advanced mapping. The hub labels that distinction.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is there no high-weightage list?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No approved historical dataset and methodology has been supplied. Official syllabus scope and prerequisite structure are shown instead.",
            },
          ],
        },
      ],
    },
    {
      question: "How should I use a chapter page?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Confirm prerequisites, learn the concept architecture, understand formula conditions, practise method selection, diagnose losses, and retest with fresh questions.",
            },
          ],
        },
      ],
    },
  ],

  sourceRefs: ["nta-jee-syllabus", "jee-advanced-syllabus"],
  lastVerified: "27 August 2026",

  seo: {
    title: "JEE Physics Chapters: Complete Map for Main and Advanced",
    description:
      "Browse all approved JEE Physics chapters with official Main and Advanced scope, prerequisites, learning paths, and structured chapter links.",
    ogTitle: "JEE Physics Chapter Map | Rank Sarthi",
    ogDescription:
      "Navigate every approved JEE Physics chapter by concept relationship, prerequisite, and official exam scope.",
    ogType: "website",
  },
};

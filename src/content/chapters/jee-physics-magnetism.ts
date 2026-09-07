import type { ChapterContent } from "@/content/types";

/**
 * Magnetism — T06 production content (new package, 7 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe, imitating the
 * accepted Electrostatics package.
 *
 * Evidence discipline:
 * - Weightage and trend records are deliberately absent, so those blocks do
 *   not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending); the registry
 *   keeps /jee/physics/magnetism on the standard indexation gate until
 *   review is recorded.
 */
export const jeePhysicsMagnetism: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Magnetism",
  slug: "magnetism",
  url: "/jee/physics/magnetism",
  canonicalIntent:
    "Understand the official JEE scope of Magnetism, separate field sources from field effects, choose the correct method and diagnose why questions go wrong.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every formula carries its direction and condition",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Electric current and moving charge create magnetic fields. A magnetic field then exerts force on moving charge or current, changing direction of motion without doing work on a point charge. Current loops also behave as magnetic dipoles and experience torque in an external field.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The chapter becomes clearer when every problem is placed in one of two families:",
        },
      ],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "Find the field produced by this source." }],
        [{ text: "Find the effect of a known field on this charge, wire, loop, or instrument." }],
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
        [{ text: "Which physical representation should I use for a problem?" }],
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
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Conventional current, drift and circuit reasoning before treating current as a field source.",
    },
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "prerequisite",
      description: "Resolving velocity into components before splitting motion parallel and perpendicular to a field.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Force, circular motion and torque before magnetic force and loop torque.",
    },
  ],

  syllabusMapping: {
    unit: "Magnetism",
    topics: [
      "Biot-Savart law and Ampere's circuital law",
      "Magnetic field due to a straight wire, circular loop, and solenoid",
      "Force on a moving charge in a magnetic field",
      "Force on a current-carrying conductor in a magnetic field",
      "Force between two parallel current-carrying conductors",
      "Torque on a current loop in a uniform magnetic field",
      "Current loop as a magnetic dipole and its magnetic moment",
      "Moving-coil galvanometer, its sensitivity and conversion to ammeter and voltmeter",
      "Bar magnet as an equivalent solenoid, magnetic field lines",
      "Para-, dia- and ferromagnetic substances and the effect of temperature on magnetic properties",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B40): source, field, force, motion, moment    */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "current-is-source",
      title: "1. Current is a field source",
      keyIdea: "Biot-Savart always works; Ampere's law is a shortcut only when symmetry allows it.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use Biot-Savart for contributions from current elements and Ampere's law when symmetry makes the circulation integral simple.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Ampere's law is always valid in its magnetostatic context, but it is not always useful for extracting B.",
            },
          ],
        },
      ],
    },
    {
      id: "field-is-not-force",
      title: "2. Field is not force",
      keyIdea: "The magnetic field describes the environment; force needs charge, velocity, current, length and orientation too.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Magnetic field B describes the magnetic environment. Force also depends on charge, velocity, current, length, and orientation.",
            },
          ],
        },
      ],
    },
    {
      id: "force-perpendicular",
      title: "3. Magnetic force is perpendicular",
      body: [
        {
          type: "paragraph",
          children: [{ text: "For a point charge, F = q v cross B." }],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The force is perpendicular to instantaneous velocity, so it changes direction but does no work in the ideal magnetic-only case.",
            },
          ],
        },
      ],
    },
    {
      id: "trajectory-geometry",
      title: "4. Velocity components create trajectory geometry",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The component perpendicular to B produces circular motion. The parallel component remains unchanged. Together they create a helix.",
            },
          ],
        },
      ],
    },
    {
      id: "loop-moment",
      title: "5. A loop has a magnetic moment",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The area vector follows the current right-hand rule. In a uniform field, a loop experiences torque tending to align its moment with the field.",
            },
          ],
        },
      ],
    },
    {
      id: "instruments",
      title: "6. Instruments convert torque to measurement",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A moving-coil galvanometer uses magnetic torque and restoring torque. Adding a low-resistance shunt creates an ammeter range; adding a high series resistance creates a voltmeter range.",
            },
          ],
        },
      ],
    },
    {
      id: "main-only-materials",
      title: "7. Main-only material scope remains visible",
      keyIdea: "Do not assume Main and Advanced scope are identical without checking both official documents.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Bar-magnet equivalence, dipole fields, para-, dia-, and ferromagnetic materials, and temperature effects are explicit in JEE Main 2026.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "These material topics should not be presented as explicit JEE Advanced 2026 list items without separate evidence.",
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
      heading: "Official JEE syllabus mapping for Magnetism",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Field sources",
          "Biot-Savart and Ampere laws; fields of a loop, straight wire, and solenoid are explicitly listed.",
          "Biot-Savart and Ampere laws; fields near a straight wire, circular-coil axis, and long solenoid are explicitly listed.",
          "Learn when Ampere's law simplifies a calculation before relying on it.",
        ],
        [
          "Magnetic force",
          "Force on charge and conductor, and the force between parallel currents are explicitly listed.",
          "Forces on a moving charge and on a current-carrying wire are explicitly listed.",
          "Resolve velocity relative to the field before using a force or radius formula.",
        ],
        [
          "Loop moment and torque",
          "Torque on a current loop is explicitly listed.",
          "Current-loop magnetic moment and torque are explicitly listed.",
          "Use the oriented area vector, not the geometric plane, for torque direction.",
        ],
        [
          "Instrument conversion",
          "Galvanometer and its conversions are explicitly listed.",
          "Moving-coil galvanometer and conversions are explicitly listed.",
          "Keep shunt (ammeter) and series-resistance (voltmeter) roles separate.",
        ],
        [
          "Materials and dipole equivalence",
          "Current-loop dipole, bar magnet, magnetic materials, and temperature effects are explicitly listed.",
          "The cited Advanced lines do not separately name bar-magnet equivalence or magnetic materials.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below. No frequency or weightage assertion is attached to either scope.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Magnetism",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Vectors and the right-hand rule",
          "Use cross products and the right-hand rule confidently.",
          "Revise vector products, unit vectors and orientation before force and torque questions.",
        ],
        [
          "Current direction",
          "Distinguish conventional current from electron drift.",
          "Revise Current Electricity's treatment of current direction and drift velocity.",
        ],
        [
          "Velocity components",
          "Resolve velocity into parts parallel and perpendicular to a given direction.",
          "Revise component resolution from Kinematics.",
        ],
        [
          "Circular motion",
          "Apply uniform circular-motion relations without deriving them from scratch.",
          "Revise centripetal force and uniform circular motion from Laws of Motion.",
        ],
        [
          "Torque and area vectors",
          "Calculate torque and identify an area vector for a plane loop.",
          "Revise torque as a cross product and the right-hand orientation of a plane's normal.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Choose the method before calculating",
      intro: "Six decisions cover most Magnetism questions. Select the representation before any algebra.",
      columns: ["Problem type", "First method", "Decision check"],
      rows: [
        [
          "Field from arbitrary current geometry",
          "Biot-Savart integration or known result",
          "Is there enough symmetry for Ampere's law instead?",
        ],
        [
          "Infinite wire or long solenoid",
          "Ampere's law",
          "Is the ideal geometry stated?",
        ],
        [
          "Charged-particle path",
          "Split v parallel and perpendicular to B",
          "Is an electric field also present?",
        ],
        [
          "Force on wire",
          "F = I L cross B",
          "Is the field uniform over the segment?",
        ],
        [
          "Loop orientation",
          "Magnetic moment and torque",
          "Is the field uniform, and is net force also requested?",
        ],
        [
          "Galvanometer conversion",
          "Current division or voltage division",
          "Which resistance is internal, shunt, or series?",
        ],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis for Magnetism",
      intro: "Use the smallest Preparation Intelligence v1.1 label supported by what the student actually did.",
      columns: ["Primary label", "Use when the first failure is"],
      rows: [
        [
          "Knowledge Gap",
          "Field source, force direction, trajectory, moment, or instrument principle is not understood.",
        ],
        [
          "Recall Gap",
          "A standard field, force, radius, torque, or conversion relation was not retrieved.",
        ],
        [
          "Execution Error",
          "Cross-product direction, component, algebra, or unit conversion failed after correct selection.",
        ],
        [
          "Decision / Selection Error",
          "Biot-Savart versus Ampere, field versus force, or trajectory model was selected incorrectly.",
        ],
        [
          "Needs Review",
          "The solution evidence does not establish the first error.",
        ],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "vector-symmetry-traps",
      slot: "mistakes",
      heading: "Vector and symmetry traps to check before accepting an answer",
      concepts: [
        {
          id: "vector-symmetry-checks",
          title: "Run every answer through direction, symmetry and unit checks",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [
                  { text: "Direction check: ", bold: true },
                  { text: "would the result reverse correctly if the charge sign or current direction reversed?" },
                ],
                [
                  { text: "Symmetry check: ", bold: true },
                  { text: "can you actually justify constant field magnitude and known direction before using Ampere's law?" },
                ],
                [
                  { text: "Component check: ", bold: true },
                  { text: "did you use the perpendicular component of velocity, not the total speed, for the circular-motion radius?" },
                ],
              ],
            },
          ],
        },
      ],
    },
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
                  text: "The official JEE Advanced archive provides past question papers, including Paper 1 and Paper 2 downloads across years. The official JEE Main site exposes current question papers through its Question Papers section.",
                },
              ],
            },
            {
              type: "list",
              items: [
                [{ text: "JEE Advanced past question papers", href: "https://jeeadv.ac.in/archive.html" }],
                [{ text: "JEE Main official site and Question Papers section", href: "https://jeemain.nta.nic.in/" }],
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Record whether an item asks for source field, force effect, trajectory, dipole behaviour, material response, or instrument conversion, and note the symmetry and direction method used.",
                },
              ],
            },
            {
              type: "note",
              tone: "caution",
              children: [
                {
                  text: "This page does not claim a verified number of Magnetism questions per year, a guaranteed chapter weightage, a trend percentage, or a topic-tagged PYQ list that has not been independently checked.",
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
      id: "biot-savart",
      expression: "dB = (mu_0 / 4 pi) (I dl cross r_hat) / r^2",
      meaning: "Field contribution from a current element.",
      variables: [
        { symbol: "B", meaning: "magnetic field", unit: "T" },
        { symbol: "I", meaning: "current", unit: "A" },
        { symbol: "dl", meaning: "current-element length vector", unit: "m" },
        { symbol: "r", meaning: "distance from element to field point", unit: "m" },
      ],
      useWhen: "Steady current element in free space, source-field problems without enough symmetry for Ampere's law.",
      commonTrap: "Dropping the vector direction or geometry of the cross product.",
      accessibleText:
        "The field contribution d B equals mu nought over four pi, times I d l cross r hat, over r squared.",
    },
    {
      id: "ampere-law",
      expression: "closed integral(B dot dl) = mu_0 I_enclosed",
      meaning: "Ampere circuital law relating field circulation to enclosed current.",
      variables: [
        { symbol: "B", meaning: "magnetic field", unit: "T" },
        { symbol: "dl", meaning: "path-length element", unit: "m" },
        { symbol: "I_enclosed", meaning: "net current enclosed by the path", unit: "A" },
      ],
      useWhen: "Magnetostatics; useful as a field-solving shortcut only with strong symmetry.",
      commonTrap: "Assuming B is constant on an arbitrary loop without justifying it from symmetry.",
      accessibleText:
        "The closed-path integral of B dot d l equals mu nought times the enclosed current.",
    },
    {
      id: "straight-wire-field",
      expression: "B = mu_0 I / (2 pi r)",
      meaning: "Field of an infinite straight current-carrying wire at perpendicular distance r.",
      variables: [
        { symbol: "r", meaning: "perpendicular distance from the wire", unit: "m" },
      ],
      useWhen: "Ideal infinitely long straight wire.",
      commonTrap: "Applying near a finite end without correction.",
      accessibleText: "B equals mu nought I over two pi r.",
    },
    {
      id: "circular-loop-field",
      expression: "B = mu_0 N I / (2 R)",
      meaning: "Field at the centre of N circular turns.",
      variables: [
        { symbol: "N", meaning: "number of turns" },
        { symbol: "R", meaning: "loop radius", unit: "m" },
      ],
      useWhen: "Closely wound coplanar circular turns, field at the centre.",
      commonTrap: "Using this centre-only result at any axial point.",
      accessibleText: "B equals mu nought N I over two R.",
    },
    {
      id: "solenoid-field",
      expression: "B = mu_0 n I",
      meaning: "Field inside an ideal long solenoid.",
      variables: [
        { symbol: "n", meaning: "turn density", unit: "turns per metre" },
      ],
      useWhen: "Long solenoid, away from ends.",
      commonTrap: "Using total turns where turn density is required.",
      accessibleText: "B equals mu nought n I.",
    },
    {
      id: "magnetic-force-charge",
      expression: "F = q v cross B",
      meaning: "Magnetic force on a moving charge.",
      variables: [
        { symbol: "F", meaning: "force", unit: "N" },
        { symbol: "q", meaning: "charge", unit: "C" },
        { symbol: "v", meaning: "velocity", unit: "m/s" },
        { symbol: "B", meaning: "magnetic field", unit: "T" },
      ],
      useWhen: "Point charge in a magnetic field.",
      commonTrap: "Forgetting that charge sign reverses direction.",
      accessibleText: "Force equals q times v cross B.",
    },
    {
      id: "circular-radius",
      expression: "r = m v_perp / (|q| B)",
      meaning: "Radius of the circular component of a charged particle's path.",
      variables: [
        { symbol: "r", meaning: "radius", unit: "m" },
        { symbol: "m", meaning: "mass", unit: "kg" },
        { symbol: "v_perp", meaning: "velocity component perpendicular to B", unit: "m/s" },
      ],
      useWhen: "Uniform B, non-relativistic particle.",
      commonTrap: "Using total speed when a parallel component also exists.",
      accessibleText: "r equals m v perpendicular over the magnitude of q times B.",
    },
    {
      id: "force-on-wire",
      expression: "F = I L cross B",
      meaning: "Force on a straight current-carrying segment.",
      variables: [
        { symbol: "L", meaning: "length vector along current direction", unit: "m" },
      ],
      useWhen: "Uniform field over the segment.",
      commonTrap: "Losing current direction when forming the cross product.",
      accessibleText: "Force equals I times L cross B.",
    },
    {
      id: "loop-moment-torque",
      expression: "mu = N I A ;  tau = mu cross B",
      meaning: "Magnetic moment of a current loop and the torque it experiences in a uniform field.",
      variables: [
        { symbol: "mu", meaning: "magnetic moment", unit: "A m^2" },
        { symbol: "A", meaning: "oriented area vector", unit: "m^2" },
        { symbol: "tau", meaning: "torque", unit: "N m" },
      ],
      useWhen: "Planar loop in a uniform field.",
      commonTrap: "Using the geometric plane instead of the oriented area vector.",
      accessibleText: "Magnetic moment equals N I A; torque equals mu cross B.",
    },
    {
      id: "ammeter-shunt",
      expression: "S = I_g G / (I - I_g)",
      meaning: "Shunt resistance needed to convert a galvanometer to an ammeter of range I.",
      variables: [
        { symbol: "S", meaning: "shunt resistance", unit: "ohm" },
        { symbol: "G", meaning: "galvanometer resistance", unit: "ohm" },
        { symbol: "I_g", meaning: "full-scale galvanometer current", unit: "A" },
        { symbol: "I", meaning: "desired ammeter range", unit: "A" },
      ],
      useWhen: "Converting a galvanometer to an ammeter.",
      commonTrap: "Placing the shunt in series instead of in parallel.",
      accessibleText: "Shunt resistance equals I g G over the quantity I minus I g.",
    },
    {
      id: "voltmeter-series",
      expression: "R = V / I_g - G",
      meaning: "Series resistance needed to convert a galvanometer to a voltmeter of range V.",
      variables: [
        { symbol: "R", meaning: "added series resistance", unit: "ohm" },
        { symbol: "V", meaning: "desired voltmeter range", unit: "V" },
      ],
      useWhen: "Converting a galvanometer to a voltmeter.",
      commonTrap: "Using a low parallel resistance instead of a high series resistance.",
      accessibleText: "Added series resistance equals V over I g, minus G.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31 via workedExamples)                           */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-helical-motion",
      prompt:
        "Worked reasoning: a positive charge enters a uniform magnetic field with velocity making an angle alpha with B. Describe the resulting motion.",
      answer:
        "The path is a helix: the perpendicular velocity component produces circular motion of radius r = m v_perp / (qB), while the unchanged parallel component carries the circle along the field direction with pitch p = v_parallel (2 pi m / qB).",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Split velocity into v_parallel = v cos(alpha) and v_perp = v sin(alpha)." }],
            [{ text: "The magnetic force on v_parallel is zero." }],
            [{ text: "The perpendicular component produces circular motion of radius r = m v_perp / (qB)." }],
            [{ text: "The unchanged parallel component carries the circle along the field direction." }],
            [{ text: "The path is a helix, with pitch p = v_parallel (2 pi m / qB) in the non-relativistic model." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The field changes the direction of velocity, not its magnitude. If speed changes, another force or field must be involved.",
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
      id: "field-as-force",
      mistake: "Treating B as a force",
      why: [{ type: "paragraph", children: [{ text: "Field and force are different physical quantities." }] }],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Compute the field first, then apply F = q v cross B or F = I L cross B separately." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "ampere-without-symmetry",
      mistake: "Applying Ampere's law as an algebra shortcut without symmetry",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The circulation integral only simplifies when field direction and magnitude are known on the path." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "First prove constant magnitude and known direction on the chosen path before pulling B outside the integral." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "wrong-velocity-component",
      mistake: "Using v instead of v_perp for the circular-motion radius",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Only the component perpendicular to B contributes to circular motion." }],
        },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Resolve velocity relative to the field before using the radius formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "forgetting-charge-sign",
      mistake: "Forgetting negative charge reverses force direction",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The cross product F = q v cross B depends on the sign of q." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Apply the cross product for a positive charge, then reverse the direction for a negative charge." }],
        },
      ],
      errorType: "recall-gap",
    },
    {
      id: "work-by-magnetic-force",
      mistake: "Saying magnetic force changes kinetic energy",
      why: [
        {
          type: "paragraph",
          children: [{ text: "A pure magnetic force on a point charge is always perpendicular to velocity." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Remember that a pure magnetic force on a point charge does no work." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "swapped-conversion-resistors",
      mistake: "Swapping ammeter and voltmeter conversion resistors",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The two instrument conversions use opposite resistor placements." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "An ammeter uses a low parallel shunt; a voltmeter uses a high series resistance." }],
        },
      ],
      errorType: "recall-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B21)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "Does a magnetic field do work on a moving point charge?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "In the ideal magnetic-only case, no. The force is perpendicular to velocity." },
          ],
        },
      ],
    },
    {
      question: "When is Ampere's law useful for finding B?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "When symmetry makes the field direction known and its magnitude constant over useful parts of the integration path.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does a charged particle move helically in a uniform magnetic field?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Its perpendicular velocity component produces circular motion while its parallel component remains unchanged, and the combination traces a helix.",
            },
          ],
        },
      ],
    },
    {
      question: "Which magnetic topics are explicit in JEE Main but not named in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "JEE Main explicitly names bar-magnet equivalence, magnetic dipole fields, magnetic materials and temperature effects. Check the current official JEE Advanced syllabus directly rather than assuming identical scope.",
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
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Prepare current, drift and circuit reasoning.",
    },
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "prerequisite",
      description: "Prepare component resolution of velocity.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Prepare force, circular motion and torque.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "same-unit",
      description: "Compare electric and magnetic forces, moments and torque.",
    },
    {
      label: "Rotational Motion",
      url: "/jee/physics/rotational-motion",
      relation: "same-unit",
      description: "Compare electric and magnetic forces, moments and torque.",
    },
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "forward",
      description: "Continue from magnetic fields to changing flux.",
    },
    {
      label: "Alternating Current",
      url: "/jee/physics/alternating-current",
      relation: "forward",
      description: "Continue from magnetic fields to time-varying circuits.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "forward",
      description: "Continue from magnetic fields to field propagation.",
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
      description: "Return to the official Physics scope for every chapter.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Ideal author: a JEE Physics educator or academic content specialist experienced in electromagnetism and vector-based problem solving.",
    "Academic reviewer: master's degree or higher in Physics or Electrical Engineering, or equivalent qualification with documented JEE Magnetism teaching and solution-review experience, covering Biot-Savart and Ampere methods, magnetic force and trajectories, dipole torque, galvanometer conversion, materials, and official scope distinctions.",
    "Independent checker: verifies official mapping, vector directions, symmetry conditions, standard-field formulas, material-scope boundary, instrument conversion, worked reasoning and internal links separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Magnetism for JEE: Fields, Forces, Motion and Formulas",
    description:
      "Learn Magnetism for JEE Main and Advanced by separating field sources from effects. Includes formulas, directions, conditions, reasoning and mistakes.",
    ogTitle: "Magnetism for JEE, From Current to Motion",
    ogDescription:
      "Connect current, magnetic field, force, trajectory, torque and galvanometer methods with official scope and diagnostic guidance.",
  },
};

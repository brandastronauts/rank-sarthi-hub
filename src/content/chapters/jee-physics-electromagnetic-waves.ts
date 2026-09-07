import type { ChapterContent } from "@/content/types";

/**
 * Electromagnetic Waves — T06 production content (8 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Scope boundary: this page owns field-propagation and spectrum scope only
 * (displacement current, Maxwell's equations at syllabus level, transverse
 * nature, E-B relationship, speed, energy density, intensity, momentum where
 * syllabus supports it, and the electromagnetic spectrum with uses). Circuit
 * behaviour of alternating current lives at /jee/physics/alternating-current
 * and mechanical wave motion lives at /jee/physics/waves; neither is
 * duplicated here.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending).
 */
export const jeePhysicsElectromagneticWaves: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Electromagnetic Waves",
  slug: "electromagnetic-waves",
  url: "/jee/physics/electromagnetic-waves",
  canonicalIntent:
    "Describe how a changing electric field predicts a magnetic field, how self-sustaining electric and magnetic fields propagate as transverse waves in vacuum and in media, and how the electromagnetic spectrum is organised, without duplicating AC circuit behaviour or mechanical wave motion.",

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
          text: "Electromagnetic waves are self-sustaining oscillations of electric and magnetic fields that propagate through vacuum and through material media without needing a mechanical medium. A changing electric field produces a displacement current, which behaves like a source of magnetic field alongside conduction current, and this coupling between changing E and changing B is what lets the fields regenerate each other and travel outward.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "In this chapter the electric field, the magnetic field and the direction of propagation are mutually perpendicular, the wave carries energy and, where the syllabus supports it, momentum, and the full electromagnetic spectrum is organised by wavelength and frequency with associated uses.",
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
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "prerequisite",
      description: "Stabilise Faraday's law and the idea of an induced field before displacement current.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Revisit the electric field concept that Maxwell's equations build on.",
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
    unit: "Electromagnetic Waves",
    topics: [
      "Displacement current",
      "Maxwell's equations at the syllabus-defined qualitative level",
      "Electromagnetic waves and their transverse nature",
      "Electromagnetic spectrum",
      "Elementary facts about applications of electromagnetic waves",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): source, coupling, propagation, spectrum */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "displacement-current",
      title: "1. Recognise displacement current as a field source",
      keyIdea:
        "A changing electric field between capacitor plates acts as a source of magnetic field even though no charge physically crosses the gap.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A changing electric field between capacitor plates acts as a source of magnetic field even though no charge physically crosses the gap. This displacement current term restores consistency to Ampere's law when the electric field is time-varying.",
            },
          ],
        },
      ],
    },
    {
      id: "maxwell-syllabus-level",
      title: "2. Treat Maxwell's equations at the syllabus-defined level",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At JEE level, Maxwell's equations are used qualitatively: a changing magnetic field produces an electric field, and a changing electric field, together with conduction current, produces a magnetic field. This mutual production is what allows the fields to propagate without a material carrier.",
            },
          ],
        },
      ],
    },
    {
      id: "self-sustaining-propagation",
      title: "3. See propagation as self-sustained field regeneration",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Once the electric and magnetic fields are coupled through their time variation, an oscillating electric field regenerates an oscillating magnetic field and vice versa, carrying the disturbance forward without any medium of oscillating matter.",
            },
          ],
        },
      ],
    },
    {
      id: "transverse-orientation",
      title: "4. Fix the transverse orientation of E, B and propagation",
      keyIdea: "E, B and the direction of travel form a mutually perpendicular set.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The electric field, the magnetic field and the direction of propagation are mutually perpendicular. E and B oscillate in phase with each other in vacuum, and their magnitudes stay in a fixed ratio set by the speed of the wave.",
            },
          ],
        },
      ],
    },
    {
      id: "speed-vacuum-medium",
      title: "5. Separate speed in vacuum from speed in a medium",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In vacuum, the speed of an electromagnetic wave is fixed by the permittivity and permeability of free space. In a medium, the speed reduces according to the medium's electric and magnetic response, which is why refractive effects arise for electromagnetic waves travelling from one medium to another.",
            },
          ],
        },
      ],
    },
    {
      id: "energy-density",
      title: "6. Track energy in both fields",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An electromagnetic wave carries energy stored jointly in its electric and magnetic fields. At the syllabus-defined level, the electric and magnetic contributions to the stored energy are treated as equal, so both fields must be accounted for together, not separately.",
            },
          ],
        },
      ],
    },
    {
      id: "intensity-momentum",
      title: "7. Use intensity and momentum only where the syllabus supports them",
      keyIdea: "Momentum and radiation pressure are used only at the elementary, qualitative level the syllabus specifies.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Intensity describes the rate at which the wave delivers energy per unit area. Electromagnetic waves also carry momentum, so they can exert a radiation pressure on a surface that absorbs or reflects them; this chapter treats momentum and pressure only at the elementary, qualitative level the syllabus specifies, not through a derivation-heavy treatment.",
            },
          ],
        },
      ],
    },
    {
      id: "spectrum-organisation",
      title: "8. Organise the spectrum by wavelength and frequency",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The electromagnetic spectrum arranges radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays by wavelength and frequency. Each band is associated with characteristic sources and elementary applications listed in the official syllabus.",
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
          "How a changing electric field produces displacement current, how Maxwell's equations at syllabus level couple electric and magnetic fields, and how the resulting transverse waves propagate, carry energy and, where the syllabus supports it, momentum.",
        ],
        [
          "What is the central method choice?",
          "Identify whether a question is about the source of the field (displacement current), the propagation description (transverse nature, speed, E-B relationship), the energy and intensity of the wave, or the classification of a spectrum band.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing displacement current with conduction current, treating E and B as independent rather than coupled and phase-linked, using the mechanical wave speed formula instead of the electromagnetic one, and mis-ordering the spectrum by wavelength.",
        ],
        [
          "What should come before Electromagnetic Waves?",
          "Electrostatics for the electric field concept and Electromagnetic Induction for Faraday's law and the idea of an induced field.",
        ],
        [
          "What comes after it?",
          "Ray Optics and Wave Optics treat visible light as a specific electromagnetic wave band with its own geometric and interference behaviour.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Electromagnetic Waves",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Displacement current",
          "Displacement current is explicitly listed.",
          "Displacement current is explicitly listed.",
          "Learn it as the term that keeps Ampere's law consistent when the electric field changes with time.",
        ],
        [
          "Maxwell's equations",
          "Referred to at a qualitative, syllabus-defined level rather than as a full vector-calculus treatment.",
          "Referred to at a qualitative, syllabus-defined level.",
          "Use Maxwell's equations to explain field coupling and propagation, not as a set of problems to solve in full generality.",
        ],
        [
          "Transverse nature, speed, E-B relationship",
          "Electromagnetic waves and their transverse nature are explicitly listed.",
          "Electromagnetic waves and their transverse nature are explicitly listed.",
          "Keep the electric field, magnetic field and propagation direction as a mutually perpendicular set.",
        ],
        [
          "Electromagnetic spectrum and applications",
          "Electromagnetic spectrum, including elementary facts about applications, is explicitly listed.",
          "Electromagnetic spectrum, including elementary facts about applications, is explicitly listed.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Electromagnetic Waves",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Electric field and Gauss's law",
          "Describe the electric field of simple charge configurations.",
          "Revise Electrostatics before this chapter.",
        ],
        [
          "Faraday's law and induced fields",
          "State how a changing magnetic flux induces an electric field.",
          "Revise Electromagnetic Induction before this chapter.",
        ],
        [
          "Ampere's law",
          "State the relationship between conduction current and the magnetic field it produces.",
          "Revisit magnetism topics covering Ampere's circuital law.",
        ],
        [
          "Vectors and perpendicularity",
          "Work with three mutually perpendicular directions.",
          "Revise vector components and cross products.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the reasoning path before answering",
      intro: "Identify which part of the chapter a question is testing before applying a formula.",
      columns: ["Information given", "First method", "Validation"],
      rows: [
        [
          "Time-varying electric field in a capacitor gap",
          "Identify displacement current as the field source",
          "Check that no conduction current physically crosses the gap",
        ],
        [
          "Question about how the wave sustains itself",
          "Explain mutual regeneration of E and B through Maxwell's equations",
          "Confirm both a changing E and a changing B are described",
        ],
        [
          "Question about direction of E, B or propagation",
          "Use the mutually perpendicular triad",
          "Check the two field directions and propagation direction are all at right angles",
        ],
        [
          "Speed of the wave asked in vacuum or a medium",
          "Use the electromagnetic wave speed relation for the stated medium",
          "Do not substitute a mechanical wave speed formula",
        ],
        [
          "Energy or intensity of the wave",
          "Combine the electric and magnetic energy contributions",
          "Confirm both field contributions are included, not just one",
        ],
        [
          "Radiation pressure or momentum",
          "Apply only the elementary, qualitative relation the syllabus specifies",
          "Do not introduce a derivation beyond syllabus scope",
        ],
        [
          "Naming or ordering a spectrum band",
          "Place the band by wavelength and frequency order",
          "Check the ordering against the standard spectrum sequence",
        ],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "readiness-check",
      slot: "prerequisites",
      heading: "Readiness check before starting Electromagnetic Waves",
      concepts: [
        {
          id: "readiness-body",
          title: "Prepare electric fields, induction and Ampere's law",
          body: [
            {
              type: "paragraph",
              children: [{ text: "You should be able to:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "describe electric fields from Electrostatics;" }],
                [{ text: "state Faraday's law of electromagnetic induction;" }],
                [{ text: "state Ampere's circuital law for conduction current;" }],
                [{ text: "work with three mutually perpendicular directions." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "Start with Electromagnetic Induction if field-induction reasoning is unstable.",
                  href: "/jee/physics/electromagnetic-induction",
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
      id: "displacement-current",
      expression: "I_d = epsilon0 (d(Phi_E)/dt)",
      latex: "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}",
      meaning: "Displacement current is proportional to the rate of change of electric flux.",
      variables: [
        { symbol: "I_d", meaning: "displacement current", unit: "A" },
        { symbol: "epsilon0", meaning: "permittivity of free space", unit: "F/m" },
        { symbol: "Phi_E", meaning: "electric flux", unit: "V·m" },
      ],
      useWhen: "The electric field between the plates of a capacitor or in a similar region is changing with time.",
      commonTrap: "Treating displacement current as a flow of charge across the gap.",
      accessibleText: "Displacement current equals permittivity of free space times the rate of change of electric flux.",
    },
    {
      id: "ampere-maxwell",
      expression: "closed-loop integral of B dot dl = mu0 (I + I_d)",
      latex: "\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 (I + I_d)",
      meaning: "The Ampere-Maxwell law adds displacement current to conduction current as a source of magnetic field.",
      variables: [
        { symbol: "B", meaning: "magnetic field", unit: "T" },
        { symbol: "I", meaning: "conduction current", unit: "A" },
        { symbol: "mu0", meaning: "permeability of free space", unit: "T·m/A" },
      ],
      useWhen: "A region has both conduction current and a changing electric field.",
      commonTrap: "Dropping the displacement current term when the electric field is time-varying.",
      accessibleText: "The closed loop integral of magnetic field equals permeability of free space times the sum of conduction current and displacement current.",
    },
    {
      id: "speed-vacuum",
      expression: "c = 1 / sqrt(mu0 * epsilon0)",
      latex: "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}",
      meaning: "The speed of an electromagnetic wave in vacuum is fixed by the permeability and permittivity of free space.",
      variables: [
        { symbol: "c", meaning: "speed of light in vacuum", unit: "m/s" },
        { symbol: "mu0", meaning: "permeability of free space", unit: "T·m/A" },
        { symbol: "epsilon0", meaning: "permittivity of free space", unit: "F/m" },
      ],
      useWhen: "The wave travels through vacuum, or free space is a valid approximation.",
      commonTrap: "Applying this vacuum-only relation directly inside a material medium.",
      accessibleText: "Speed of light in vacuum equals one over the square root of the product of permeability and permittivity of free space.",
    },
    {
      id: "speed-medium",
      expression: "v = 1 / sqrt(mu * epsilon)",
      latex: "v = \\frac{1}{\\sqrt{\\mu \\varepsilon}}",
      meaning: "The speed of an electromagnetic wave in a medium depends on that medium's permeability and permittivity.",
      variables: [
        { symbol: "v", meaning: "speed in the medium", unit: "m/s" },
        { symbol: "mu", meaning: "permeability of the medium", unit: "T·m/A" },
        { symbol: "epsilon", meaning: "permittivity of the medium", unit: "F/m" },
      ],
      useWhen: "The wave travels through a specified material medium rather than vacuum.",
      commonTrap: "Using vacuum values of permeability and permittivity for a medium.",
      accessibleText: "Speed in a medium equals one over the square root of the product of the medium's permeability and permittivity.",
    },
    {
      id: "e-b-ratio",
      expression: "E0 / B0 = c",
      latex: "\\frac{E_0}{B_0} = c",
      meaning: "The peak electric field and peak magnetic field of a vacuum electromagnetic wave stay in a fixed ratio equal to the speed of light.",
      variables: [
        { symbol: "E0", meaning: "peak electric field", unit: "V/m" },
        { symbol: "B0", meaning: "peak magnetic field", unit: "T" },
      ],
      useWhen: "The wave is travelling in vacuum and both peak field magnitudes are being related.",
      commonTrap: "Assuming E0 and B0 are numerically equal instead of related through the speed of light.",
      accessibleText: "The ratio of peak electric field to peak magnetic field equals the speed of light.",
    },
    {
      id: "average-energy-density",
      expression: "u_avg = (1/2) epsilon0 E0^2",
      latex: "u_{avg} = \\tfrac{1}{2}\\varepsilon_0 E_0^2",
      meaning: "The average energy density of a vacuum electromagnetic wave, combining equal electric and magnetic contributions.",
      variables: [
        { symbol: "u_avg", meaning: "average energy density", unit: "J/m^3" },
        { symbol: "E0", meaning: "peak electric field", unit: "V/m" },
      ],
      useWhen: "The electric and magnetic contributions to stored energy are being combined for a vacuum wave.",
      commonTrap: "Counting only the electric field contribution and ignoring the equal magnetic contribution.",
      accessibleText: "Average energy density equals one half permittivity of free space times the square of the peak electric field.",
    },
    {
      id: "intensity",
      expression: "I = u_avg * c",
      latex: "I = u_{avg}\\,c",
      meaning: "Intensity is the rate of energy transfer per unit area, obtained from the average energy density and the wave speed.",
      variables: [
        { symbol: "I", meaning: "intensity", unit: "W/m^2" },
        { symbol: "u_avg", meaning: "average energy density", unit: "J/m^3" },
        { symbol: "c", meaning: "speed of light in vacuum", unit: "m/s" },
      ],
      useWhen: "The rate of energy delivery per unit area is required for a vacuum electromagnetic wave.",
      commonTrap: "Confusing intensity with total energy rather than energy per unit area per unit time.",
      accessibleText: "Intensity equals average energy density times the speed of light.",
    },
    {
      id: "momentum-absorption",
      expression: "p = U / c",
      latex: "p = \\frac{U}{c}",
      meaning: "At the elementary syllabus level, the momentum delivered by a fully absorbed electromagnetic wave equals the energy delivered divided by the speed of light.",
      variables: [
        { symbol: "p", meaning: "momentum delivered", unit: "kg·m/s" },
        { symbol: "U", meaning: "energy delivered", unit: "J" },
        { symbol: "c", meaning: "speed of light in vacuum", unit: "m/s" },
      ],
      useWhen: "The surface fully absorbs the incident wave, at the elementary qualitative level the syllabus specifies.",
      commonTrap: "Applying this absorption relation to a fully reflecting surface without doubling the momentum transfer.",
      accessibleText: "Momentum delivered equals energy delivered divided by the speed of light.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked examples (B31)                                               */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "displacement-current-example",
      prompt:
        "A parallel-plate capacitor is being charged and the electric flux between its plates increases at a steady rate. Explain what sustains the magnetic field between the plates even though no charge crosses the gap.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "No conduction current flows in the gap because no charge physically crosses it. The changing electric flux between the plates instead produces a displacement current, given by permittivity of free space times the rate of change of electric flux.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "This displacement current enters the Ampere-Maxwell law on the same footing as conduction current, so it acts as the source of the magnetic field observed in the gap.",
            },
          ],
        },
      ],
      answer: "The magnetic field in the gap is sustained by displacement current arising from the changing electric flux, not by conduction current.",
    },
    {
      id: "spectrum-classification-example",
      prompt:
        "A radiation source emits electromagnetic waves with a wavelength shorter than ultraviolet but longer than gamma rays. Identify the likely band and state one listed elementary application.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "Placing this wavelength in the standard spectrum order between ultraviolet and gamma rays identifies the band as X-rays.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "One elementary application listed for this band is medical imaging.",
            },
          ],
        },
      ],
      answer: "The band is X-rays, with medical imaging as a listed elementary application.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* PI v1.1 mistakes taxonomy (B32)                                     */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "displacement-vs-conduction",
      mistake: "Treating displacement current as an actual flow of charge across a gap.",
      why: [
        { type: "paragraph", children: [{ text: "Displacement current is defined from the rate of change of electric flux, not from moving charge." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use the flux-rate definition and reserve conduction current for actual charge flow." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "e-b-independent",
      mistake: "Treating E and B as independent oscillations instead of coupled, in-phase fields.",
      why: [
        { type: "paragraph", children: [{ text: "Maxwell's equations link a changing E to B and a changing B to E, so the two fields cannot be varied independently in a propagating wave." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep E and B in phase and in the fixed ratio set by wave speed whenever relating their magnitudes." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "mechanical-speed-formula",
      mistake: "Using a mechanical wave speed formula for an electromagnetic wave.",
      why: [
        { type: "paragraph", children: [{ text: "Electromagnetic waves do not depend on tension, density or elasticity of a medium; their speed depends on permittivity and permeability." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use the permittivity-permeability speed relation for the specific medium in question." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "energy-only-electric",
      mistake: "Computing wave energy density from the electric field alone.",
      why: [
        { type: "paragraph", children: [{ text: "The magnetic field contributes an equal share to the stored energy in a vacuum electromagnetic wave." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Include both field contributions, or use the combined average energy density relation directly." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "spectrum-order-confusion",
      mistake: "Mis-ordering spectrum bands by wavelength or frequency.",
      why: [
        { type: "paragraph", children: [{ text: "The bands are frequently listed from memory rather than checked against wavelength order." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Recheck the standard increasing-frequency or increasing-wavelength sequence before answering." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "reflection-momentum-doubling",
      mistake: "Applying the absorption momentum relation to a fully reflecting surface without adjustment.",
      why: [
        { type: "paragraph", children: [{ text: "A fully reflecting surface receives a different momentum transfer than a fully absorbing one, at the elementary level the syllabus specifies." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check whether the surface absorbs or reflects before selecting the momentum relation." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "confusing-with-ac-circuits",
      mistake: "Pulling in alternating-current circuit reasoning to answer a field-propagation question.",
      why: [
        { type: "paragraph", children: [{ text: "Circuit-level alternating current concepts such as reactance and phasors describe circuit elements, not free-space field propagation." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep circuit-level alternating current reasoning at Alternating Current and field-propagation reasoning here." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "confusing-with-mechanical-waves",
      mistake: "Assuming an electromagnetic wave needs a material medium the way a mechanical wave does.",
      why: [
        { type: "paragraph", children: [{ text: "Mechanical waves need a material medium to transmit oscillations; electromagnetic waves propagate through vacuum by field regeneration alone." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep mechanical wave-medium reasoning at Waves and treat electromagnetic propagation as field-based here." }] },
      ],
      errorType: "knowledge-gap",
    },
  ],

  faqs: [
    {
      question: "What is displacement current?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Displacement current is a term proportional to the rate of change of electric flux, added to conduction current so that the magnetic field source is consistent when the electric field varies with time.",
            },
          ],
        },
      ],
    },
    {
      question: "Are electromagnetic waves transverse or longitudinal?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "They are transverse: the electric field, the magnetic field and the direction of propagation are mutually perpendicular." },
          ],
        },
      ],
    },
    {
      question: "Do electromagnetic waves need a medium to travel?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. They propagate through vacuum by the mutual regeneration of electric and magnetic fields, and they also travel through material media at a different speed." },
          ],
        },
      ],
    },
    {
      question: "How is this chapter different from Alternating Current?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Alternating Current covers circuit behaviour such as reactance, impedance and phasors for time-varying currents in circuit elements. This chapter covers free-space and medium propagation of coupled electric and magnetic fields.",
            },
          ],
        },
      ],
    },
    {
      question: "How is this chapter different from Waves?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Waves covers mechanical wave motion, which needs a material medium and depends on properties such as tension and density. This chapter covers electromagnetic waves, which propagate through vacuum by field regeneration.",
            },
          ],
        },
      ],
    },
    {
      question: "Do electromagnetic waves carry momentum?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes, at the elementary, qualitative level the syllabus specifies, so a wave can exert radiation pressure on an absorbing or reflecting surface.",
            },
          ],
        },
      ],
    },
    {
      question: "How is the electromagnetic spectrum organised?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "By wavelength and frequency, running from radio waves through microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays, each with elementary listed applications.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "prerequisite",
      description: "Stabilise Faraday's law and induced fields before displacement current and Maxwell's equations.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Revisit the electric field concept and Gauss's law that underlie this chapter.",
    },
    {
      label: "Alternating Current",
      url: "/jee/physics/alternating-current",
      relation: "related",
      description: "Circuit-level treatment of time-varying current, kept separate from field propagation here.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "related",
      description: "Mechanical wave motion, kept separate from electromagnetic field propagation here.",
    },
    {
      label: "Optics",
      url: "/jee/physics/optics",
      relation: "forward",
      description: "Apply the visible-light band of the spectrum to geometric and wave-optical behaviour.",
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
      description: "Connect field-propagation reasoning with reviewed official problems.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Author: a JEE Physics educator or academic content specialist experienced in electromagnetism and field-propagation teaching.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE Electromagnetic Waves teaching and solution-review experience, covering displacement current, Maxwell's equations at syllabus level, transverse propagation, energy, intensity, momentum and the spectrum.",
    "Independent checker: verifies official mapping, formula conditions, scope boundaries against Alternating Current and Waves, and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Electromagnetic Waves for JEE: Displacement Current, Spectrum and Formulas",
    description:
      "Learn Electromagnetic Waves for JEE Main and Advanced through displacement current, Maxwell's equations at syllabus level, transverse propagation, energy, intensity, momentum and the spectrum.",
    ogTitle: "Electromagnetic Waves for JEE, From Displacement Current to Spectrum",
    ogDescription:
      "A structured guide to electromagnetic field propagation, energy, intensity and the electromagnetic spectrum with official scope and diagnosis.",
  },
};

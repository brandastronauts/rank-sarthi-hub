import type { ChapterContent } from "@/content/types";

/**
 * Wave Optics — T06 production content (draft, 8 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Scope boundary:
 * - This chapter owns the wave model of light: Huygens principle, wavefronts,
 *   superposition, coherence, Young's double slit, thin film interference
 *   where the current syllabus supports it, single-slit diffraction,
 *   resolving power and polarisation.
 * - It does not reproduce the geometrical-optics content owned by
 *   /jee/physics/ray-optics, and it does not repeat the model-selector
 *   framing owned by /jee/physics/optics. Both are linked instead.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" and the registry keeps this page on the
 *   indexation setting recorded in the URL workbook until review is recorded.
 */
export const jeePhysicsWaveOptics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Wave Optics",
  slug: "wave-optics",
  url: "/jee/physics/wave-optics",
  canonicalIntent:
    "Understand light as a wave phenomenon through Huygens principle, superposition and coherence, apply Young's double slit and single-slit diffraction correctly, and choose between interference, diffraction, resolving-power and polarisation methods for a given question.",

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
          text: "Wave Optics treats light as a wave and explains what geometrical ray tracing cannot: interference, diffraction, resolving power and polarisation. The chapter starts from Huygens principle, builds a wavefront picture of propagation, then asks when two or more light waves combine coherently and how a single opening bends and spreads light.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The chapter is easiest to hold together as one sequence: a wavefront propagates, coherent sources produce a stable interference pattern, a single slit produces a diffraction pattern by itself, an aperture limits how finely an instrument can resolve two close objects, and a transverse wave can be polarised in a way a longitudinal wave cannot.",
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
      label: "Ray Optics",
      url: "/jee/physics/ray-optics",
      relation: "prerequisite",
      description: "Reflection, refraction, lenses and mirrors under the geometrical-ray model, before the wave model.",
    },
    {
      label: "Optics",
      url: "/jee/physics/optics",
      relation: "related",
      description: "Model-selector hub that decides when to use the ray model against the wave model.",
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
    unit: "Wave Optics",
    topics: [
      "Wavefront and Huygens principle",
      "Laws of reflection and refraction using Huygens principle",
      "Superposition of waves and coherent sources",
      "Interference and Young's double slit experiment",
      "Diffraction due to a single slit and width of the central maximum",
      "Resolving power of a microscope and a telescope",
      "Polarisation, plane-polarised light and Brewster's law",
      "Malus law and the use of Polaroids",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): propagation -> superposition -> aperture */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "wavefront-huygens",
      title: "1. Build a wavefront picture of propagation",
      keyIdea:
        "A wavefront joins points with the same phase; Huygens principle treats every point on it as a fresh source of secondary wavelets.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A wavefront is a surface joining points that are in the same phase of oscillation. Huygens principle says every point on a wavefront acts as a source of secondary wavelets, and the new wavefront is the common tangent surface to those wavelets a short time later.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Reflection and refraction can both be derived from this picture, so the wave model reproduces the geometrical-ray results in the regimes where ray optics already applies.",
            },
          ],
        },
      ],
    },
    {
      id: "superposition-coherence",
      title: "2. Add waves, then ask whether the sum stays stable",
      keyIdea: "Superposition always adds displacements; coherence decides whether the resulting pattern is stationary.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When two waves overlap, their displacements add algebraically at every point. If the phase difference between the sources stays constant in time, the resultant intensity pattern is stable and is called interference. If the phase relationship drifts randomly, the pattern washes out and only average intensities add.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Coherent sources: constant phase difference; stable fringe pattern is observable." }],
            [{ text: "Incoherent sources: randomly varying phase difference; intensities add without fringes." }],
          ],
        },
      ],
    },
    {
      id: "ydse-geometry",
      title: "3. Read Young's double slit as a path-difference problem",
      keyIdea: "Fringe position on the screen is controlled by path difference, not by slit separation alone.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Two narrow, coherent slits illuminated by one source produce a path difference at the screen that depends on slit separation, screen distance and position on the screen. Bright fringes occur where that path difference is a whole number of wavelengths, and dark fringes occur where it is a half-integer number of wavelengths.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "The small-angle, far-screen approximation used for the standard fringe-width expression only holds when the screen distance is much larger than the slit separation. State that condition before using the shortcut formula.",
            },
          ],
        },
      ],
    },
    {
      id: "thin-film",
      title: "4. Treat thin film colours as interference between two reflected waves",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Light reflecting from the top and bottom surfaces of a thin film travels slightly different path lengths and can pick up an extra half-wavelength shift on reflection from a denser medium. The two reflected waves interfere, and the condition for bright or dark reflection depends on film thickness, refractive index, wavelength and any reflection phase shift.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Keep thin film reasoning at the level supported by the current official syllabus documents linked in the sources section; do not assume every thin film variant used in coaching material is separately named there.",
            },
          ],
        },
      ],
    },
    {
      id: "single-slit-diffraction",
      title: "5. Separate diffraction from interference",
      keyIdea: "Diffraction is the spreading and patterning produced by a single opening, without needing a second source.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A single narrow slit alone produces a diffraction pattern: a wide bright central maximum flanked by much weaker secondary maxima, because different parts of the same wavefront within the slit interfere with each other.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The angular width of the central maximum grows as the slit is made narrower relative to the wavelength. This is the opposite of the ray-optics expectation that a smaller opening should produce a sharper geometric shadow.",
            },
          ],
        },
      ],
    },
    {
      id: "resolving-power",
      title: "6. Connect diffraction to how finely an instrument can resolve detail",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Because every aperture diffracts light, an optical instrument cannot form a perfect point image of a point object. The resulting spread limits how close two objects can be while their images are still distinguished. Resolving power of a microscope and a telescope both trace back to this aperture-diffraction limit.",
            },
          ],
        },
      ],
    },
    {
      id: "polarisation",
      title: "7. Use polarisation to test the transverse nature of light",
      keyIdea: "Only a transverse wave can be polarised; polarisation evidence is evidence about the nature of the wave itself.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Light is a transverse wave, so its oscillation can be restricted to one plane, which is called plane polarisation. A Polaroid transmits the component of the electric field along its transmission axis and absorbs the rest.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Malus law gives the transmitted intensity through a second Polaroid placed after a first one." }],
        },
      ],
    },
    {
      id: "brewster-angle",
      title: "8. Use Brewster's law for polarisation by reflection",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At one particular angle of incidence on a boundary between two media, the reflected light is completely plane polarised and the reflected and refracted rays are perpendicular to each other. That angle is fixed by the refractive indices of the two media through Brewster's law.",
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
          "Light treated as a wave: Huygens principle and wavefronts, superposition and coherence, Young's double slit interference, thin film interference where the syllabus supports it, single-slit diffraction, resolving power and polarisation.",
        ],
        [
          "How is this different from Ray Optics?",
          "Ray Optics traces straight-line light paths through mirrors and lenses. Wave Optics explains phenomena, such as interference, diffraction and polarisation, that a straight-line ray picture cannot explain on its own.",
        ],
        [
          "What is the central method choice?",
          "Use Huygens construction for propagation and law derivation, superposition and path difference for two-source interference, single-slit diffraction reasoning for a single narrow opening, aperture-diffraction limits for resolving power, and Malus or Brewster relations for polarisation.",
        ],
        [
          "Where do most mistakes begin?",
          "Confusing interference fringes with diffraction fringes, applying the small-angle fringe-width formula without checking the geometry condition, and treating polarisation intensity relations as if they applied to unpolarised light directly.",
        ],
        [
          "What should come before Wave Optics?",
          "Ray Optics, basic wave motion, phase and path difference, and trigonometric small-angle approximations.",
        ],
        [
          "What comes after it?",
          "Electromagnetic Waves extends the wave description to the full spectrum, and Dual Nature of Matter examines where the wave model itself needs modification.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Wave Optics",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Wavefront and Huygens principle",
          "Wavefront and Huygens principle, and the laws of reflection and refraction derived from Huygens principle, are explicitly listed.",
          "Huygens principle is explicitly listed under the wave nature of light.",
          "Learn the Huygens construction as a derivation tool, not only as a definition to recall.",
        ],
        [
          "Interference",
          "Superposition of waves, coherent sources and Young's double slit experiment are explicitly listed.",
          "Interference is explicitly listed and is scoped to Young's double-slit experiment.",
          "Do not assume every interference variant used in coaching material carries equal weight in both official documents; check each document separately.",
        ],
        [
          "Diffraction",
          "Diffraction due to a single slit and the width of the central maximum are explicitly listed.",
          "Single-slit diffraction is not listed among the cited Advanced wave-optics lines.",
          "Treat diffraction depth of preparation as Main-scope unless the current Advanced document is checked again and shown otherwise.",
        ],
        [
          "Resolving power",
          "Resolving power of a microscope and a telescope is explicitly listed.",
          "Resolving power is not listed among the cited Advanced wave-optics lines.",
          "Keep the aperture-diffraction reasoning link to diffraction clear before attempting resolving-power numericals.",
        ],
        [
          "Polarisation",
          "Polarisation, plane-polarised light, Brewster's law, Malus law and uses of Polaroids are explicitly listed.",
          "Polarisation is not listed among the cited Advanced wave-optics lines.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Wave Optics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Ray Optics",
          "Trace rays through mirrors, lenses and refracting surfaces and predict image position.",
          "Revise reflection, refraction, lens and mirror formulas on Ray Optics.",
        ],
        [
          "Wave motion basics",
          "Describe a wave with amplitude, wavelength, frequency and phase.",
          "Revise the transverse wave equation and phase as an angle.",
        ],
        [
          "Path and phase difference",
          "Convert a path difference into a phase difference and back.",
          "Revise the relation between path difference, wavelength and phase.",
        ],
        [
          "Small-angle trigonometry",
          "Use sine and tangent interchangeably for small angles.",
          "Revise the small-angle approximation and when it fails.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the wave-optics method before calculating",
      intro: "Match the physical setup to the method before writing an equation.",
      columns: ["Setup described", "First method", "Validation"],
      rows: [
        ["Propagation, reflection or refraction to derive", "Huygens wavefront construction", "Check the new wavefront is tangent to all secondary wavelets"],
        ["Two coherent slits and a distant screen", "Path-difference condition for bright and dark fringes", "Confirm screen distance is much larger than slit separation before using the fringe-width shortcut"],
        ["Thin film with two reflected beams", "Interference condition including any reflection phase shift", "Check which surface reflection carries the half-wavelength shift"],
        ["Single narrow slit alone", "Single-slit diffraction path-difference reasoning", "Do not reuse the double-slit bright-fringe formula for this pattern"],
        ["Instrument aperture and two close objects", "Aperture-diffraction resolving-power relation", "Confirm the limitation is diffraction, not lens aberration"],
        ["Light through one or two Polaroids", "Malus law for the transmitted intensity", "Check the angle is measured between the two transmission axes"],
        ["Reflection at a specific angle with no reflected component of one polarisation", "Brewster's law", "Confirm the reflected and refracted rays are perpendicular at that angle"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "path-phase-relation",
      expression: "Delta phi = (2 pi / lambda) Delta x",
      latex: "\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x",
      meaning: "Phase difference corresponding to a given path difference.",
      variables: [
        { symbol: "Delta phi", meaning: "phase difference", unit: "rad" },
        { symbol: "lambda", meaning: "wavelength", unit: "m" },
        { symbol: "Delta x", meaning: "path difference", unit: "m" },
      ],
      useWhen: "Converting between path difference and phase difference for the same wave.",
      commonTrap: "Mixing path difference measured in wavelengths with phase difference measured in radians without converting.",
      accessibleText: "Phase difference equals two pi over wavelength, multiplied by path difference.",
    },
    {
      id: "ydse-bright-fringe",
      expression: "d sin(theta) = n lambda",
      latex: "d\\sin\\theta = n\\lambda",
      meaning: "Condition for a bright fringe in Young's double slit experiment.",
      variables: [
        { symbol: "d", meaning: "slit separation", unit: "m" },
        { symbol: "theta", meaning: "angle from the central axis", unit: "rad" },
        { symbol: "n", meaning: "fringe order, integer", unit: "dimensionless" },
        { symbol: "lambda", meaning: "wavelength", unit: "m" },
      ],
      useWhen: "Two coherent slits with a well-defined slit separation illuminated by one wavelength.",
      commonTrap: "Using this for a single-slit diffraction pattern, which follows a different condition.",
      accessibleText: "Slit separation times sine of the angle equals an integer multiple of the wavelength.",
    },
    {
      id: "ydse-fringe-width",
      expression: "beta = lambda D / d",
      latex: "\\beta = \\frac{\\lambda D}{d}",
      meaning: "Fringe width on a distant screen in Young's double slit experiment.",
      variables: [
        { symbol: "beta", meaning: "fringe width", unit: "m" },
        { symbol: "D", meaning: "slit-to-screen distance", unit: "m" },
        { symbol: "d", meaning: "slit separation", unit: "m" },
      ],
      useWhen: "Screen distance is much greater than slit separation, so the small-angle approximation applies.",
      commonTrap: "Using this formula when the screen is close to the slits, where the small-angle approximation breaks down.",
      accessibleText: "Fringe width equals wavelength times screen distance, divided by slit separation.",
    },
    {
      id: "resultant-intensity-two-waves",
      expression: "I = I1 + I2 + 2 sqrt(I1 I2) cos(delta)",
      latex: "I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\delta",
      meaning: "Resultant intensity from two coherent waves with a constant phase difference.",
      variables: [
        { symbol: "I1, I2", meaning: "individual intensities", unit: "W/m^2" },
        { symbol: "delta", meaning: "constant phase difference between the two waves", unit: "rad" },
      ],
      useWhen: "The two sources are coherent, so delta does not vary randomly with time.",
      commonTrap: "Applying this to incoherent sources, where intensities simply add without the interference term.",
      accessibleText: "Resultant intensity equals the sum of the two intensities plus twice the square root of their product times cosine of the phase difference.",
    },
    {
      id: "max-min-intensity",
      expression: "I_max/I_min = (sqrt(I1) + sqrt(I2))^2 / (sqrt(I1) - sqrt(I2))^2",
      latex: "\\frac{I_{max}}{I_{min}} = \\left(\\frac{\\sqrt{I_1}+\\sqrt{I_2}}{\\sqrt{I_1}-\\sqrt{I_2}}\\right)^2",
      meaning: "Ratio of maximum to minimum intensity in an interference pattern from two coherent sources.",
      variables: [
        { symbol: "I_max", meaning: "intensity at a bright fringe", unit: "W/m^2" },
        { symbol: "I_min", meaning: "intensity at a dark fringe", unit: "W/m^2" },
      ],
      useWhen: "The two coherent sources have possibly unequal individual intensities.",
      commonTrap: "Assuming dark fringes are completely dark when the two source intensities are unequal.",
      accessibleText: "The ratio of maximum to minimum intensity equals the square of the sum of the square roots of the two intensities, divided by the square of their difference.",
    },
    {
      id: "single-slit-minima",
      expression: "a sin(theta) = n lambda",
      latex: "a\\sin\\theta = n\\lambda",
      meaning: "Condition for a dark fringe (minimum) in single-slit diffraction.",
      variables: [
        { symbol: "a", meaning: "slit width", unit: "m" },
        { symbol: "theta", meaning: "angle from the central axis", unit: "rad" },
        { symbol: "n", meaning: "minimum order, nonzero integer", unit: "dimensionless" },
      ],
      useWhen: "Single narrow slit diffraction, locating the dark fringes.",
      commonTrap: "Using this condition and expecting it to mark bright fringes; here it marks the minima, unlike the double-slit condition.",
      accessibleText: "Slit width times sine of the angle equals an integer multiple of the wavelength, for diffraction minima.",
    },
    {
      id: "central-maximum-width",
      expression: "width = 2 lambda D / a",
      latex: "w = \\frac{2\\lambda D}{a}",
      meaning: "Angular width of the central maximum in single-slit diffraction, expressed as a linear width on a distant screen.",
      variables: [
        { symbol: "D", meaning: "slit-to-screen distance", unit: "m" },
        { symbol: "a", meaning: "slit width", unit: "m" },
      ],
      useWhen: "Small-angle approximation holds and the screen is far from the slit.",
      commonTrap: "Assuming a narrower slit always gives a narrower central maximum; the opposite happens in diffraction.",
      accessibleText: "The width of the central maximum equals two times wavelength times screen distance, divided by slit width.",
    },
    {
      id: "rayleigh-resolving-limit",
      expression: "theta_min = 1.22 lambda / D",
      latex: "\\theta_{min} = 1.22\\frac{\\lambda}{D}",
      meaning: "Minimum angular separation two point objects can have and still be resolved, set by aperture diffraction.",
      variables: [
        { symbol: "theta_min", meaning: "minimum resolvable angular separation", unit: "rad" },
        { symbol: "D", meaning: "aperture diameter", unit: "m" },
      ],
      useWhen: "Resolving power of a telescope or the objective of a microscope, limited by diffraction at the aperture.",
      commonTrap: "Treating a smaller angular limit as meaning the instrument resolves more, when a smaller angle actually means finer resolving ability.",
      accessibleText: "Minimum resolvable angle equals 1.22 times wavelength, divided by aperture diameter.",
    },
    {
      id: "malus-law",
      expression: "I = I0 cos^2(theta)",
      latex: "I = I_0 \\cos^2\\theta",
      meaning: "Transmitted intensity through an analyser Polaroid, given plane-polarised incident light.",
      variables: [
        { symbol: "I0", meaning: "intensity of the incident plane-polarised light", unit: "W/m^2" },
        { symbol: "theta", meaning: "angle between the polariser and analyser transmission axes", unit: "rad" },
      ],
      useWhen: "The light entering the second Polaroid is already plane-polarised, from a first Polaroid or another polarising process.",
      commonTrap: "Applying Malus law directly to unpolarised light entering the first Polaroid instead of the light leaving it.",
      accessibleText: "Transmitted intensity equals incident intensity times cosine squared of the angle between the two transmission axes.",
    },
    {
      id: "brewsters-law",
      expression: "tan(theta_B) = n21",
      latex: "\\tan\\theta_B = n_{21}",
      meaning: "Brewster angle for complete polarisation of the reflected ray at a boundary.",
      variables: [
        { symbol: "theta_B", meaning: "Brewster angle of incidence", unit: "rad" },
        { symbol: "n21", meaning: "refractive index of the second medium relative to the first", unit: "dimensionless" },
      ],
      useWhen: "Finding the angle of incidence at which reflected light is completely plane polarised.",
      commonTrap: "Forgetting that the reflected and refracted rays are perpendicular only at exactly this angle.",
      accessibleText: "Tangent of the Brewster angle equals the relative refractive index of the second medium with respect to the first.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked examples (B30)                                               */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "ydse-fringe-shift",
      prompt:
        "In a Young's double slit setup, slit separation is 0.5 mm, screen distance is 1.5 m and the wavelength used is 600 nm. Find the fringe width.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Confirm the small-angle condition: screen distance is much larger than slit separation, so beta = lambda D / d applies." }],
        },
        {
          type: "paragraph",
          children: [
            { text: "Substitute lambda = 600 x 10^-9 m, D = 1.5 m, d = 0.5 x 10^-3 m into beta = lambda D / d." },
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Compute beta = (600 x 10^-9 x 1.5) / (0.5 x 10^-3) = 1.8 x 10^-3 m." }],
        },
      ],
      answer: "Fringe width is 1.8 mm.",
    },
    {
      id: "single-slit-central-width",
      prompt:
        "Light of wavelength 500 nm falls on a single slit of width 0.2 mm. A screen is placed 2 m away. Find the width of the central maximum.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Use width = 2 lambda D / a, valid for the small-angle far-screen case." }],
        },
        {
          type: "paragraph",
          children: [
            { text: "Substitute lambda = 500 x 10^-9 m, D = 2 m, a = 0.2 x 10^-3 m." },
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Compute width = (2 x 500 x 10^-9 x 2) / (0.2 x 10^-3) = 1.0 x 10^-2 m." }],
        },
      ],
      answer: "The central maximum is 1.0 cm wide.",
    },
    {
      id: "malus-two-polaroid",
      prompt:
        "Unpolarised light of intensity I0 passes through a first Polaroid, then through a second Polaroid whose axis is at 30 degrees to the first. Find the transmitted intensity.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "The first Polaroid transmits half the incident intensity of unpolarised light: I1 = I0 / 2." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Apply Malus law to the second Polaroid using the angle between axes: I2 = I1 cos^2(30 degrees)." },
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "cos^2(30 degrees) = 3/4, so I2 = (I0 / 2)(3/4) = 3 I0 / 8." }],
        },
      ],
      answer: "Transmitted intensity is 3 I0 / 8.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Mistake diagnosis (B31)                                             */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "diffraction-vs-interference",
      mistake: "Treating a single-slit diffraction pattern with the double-slit bright-fringe formula",
      why: [
        { type: "paragraph", children: [{ text: "The double-slit formula locates constructive interference from two coherent sources, while a single slit produces a pattern from interference between different parts of the same wavefront." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify whether the setup has one slit or two slits before choosing a condition, and remember that a sin(theta) = n lambda marks minima in single-slit diffraction." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "fringe-width-condition-skipped",
      mistake: "Using beta = lambda D / d without checking that D is much larger than d",
      why: [
        { type: "paragraph", children: [{ text: "The fringe-width shortcut relies on the small-angle approximation, which fails when the screen is close to the slits." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State the far-screen, small-angle condition before applying the shortcut formula." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "coherence-assumed",
      mistake: "Adding intensities from two independent light bulbs and expecting a fringe pattern",
      why: [
        { type: "paragraph", children: [{ text: "Two ordinary independent sources are incoherent, so their phase difference varies randomly and no stable interference pattern forms." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Confirm the sources are derived from one original source with a fixed phase relationship before applying interference formulas." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "malus-on-unpolarised",
      mistake: "Applying Malus law directly to unpolarised light entering the first Polaroid",
      why: [
        { type: "paragraph", children: [{ text: "Malus law describes the transmission of already plane-polarised light through an analyser, not the effect of the first Polaroid on unpolarised light." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Halve the unpolarised intensity for the first Polaroid, then apply Malus law only from the second Polaroid onward." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "brewster-angle-misread",
      mistake: "Forgetting that Brewster's law gives one specific angle, not a general polarisation condition",
      why: [
        { type: "paragraph", children: [{ text: "Complete polarisation of the reflected ray, with reflected and refracted rays perpendicular, happens only at the Brewster angle for that pair of media." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Compute the Brewster angle from tan(theta_B) = n21 before assuming reflected light is fully polarised at an arbitrary angle." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "smaller-slit-smaller-pattern",
      mistake: "Assuming a narrower slit always produces a narrower diffraction pattern, by analogy with a sharper geometric shadow",
      why: [
        { type: "paragraph", children: [{ text: "Diffraction spreading increases as slit width decreases relative to wavelength, which is the opposite of the geometrical-shadow intuition." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use width = 2 lambda D / a and check that width increases as a decreases." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "resolving-power-angle-confusion",
      mistake: "Confusing a smaller minimum resolvable angle with worse resolving power",
      why: [
        { type: "paragraph", children: [{ text: "A smaller theta_min means the instrument can distinguish objects that are closer together, which is better resolving ability, not worse." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State explicitly whether the question asks for theta_min or for resolving power, since they vary oppositely with aperture size." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "thin-film-phase-shift-ignored",
      mistake: "Ignoring the extra half-wavelength phase shift on reflection from a denser medium in thin film problems",
      why: [
        { type: "paragraph", children: [{ text: "Skipping this shift can flip a bright condition into a dark condition or the reverse." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check each reflecting surface separately for a density change before writing the interference condition." }] },
      ],
      errorType: "execution-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B22)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is Wave Optics in JEE Physics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Wave Optics treats light as a wave and covers Huygens principle and wavefronts, superposition and coherence, Young's double slit interference, single-slit diffraction, resolving power and polarisation, including Brewster's law and Malus law.",
            },
          ],
        },
      ],
    },
    {
      question: "How is Wave Optics different from Ray Optics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Ray Optics traces light as straight lines through mirrors and lenses. Wave Optics explains interference, diffraction and polarisation, which the straight-line ray picture cannot account for on its own.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between interference and diffraction?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Interference is the combination of waves from two or more coherent sources, as in Young's double slit experiment. Diffraction is the pattern produced by a single opening, formed by different parts of the same wavefront interfering with each other.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does a narrower slit widen the diffraction pattern?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Diffraction spreading increases as the slit width becomes smaller relative to the wavelength, which is why the central maximum widens rather than narrows as the slit narrows.",
            },
          ],
        },
      ],
    },
    {
      question: "Is diffraction and resolving power in the JEE Advanced syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current JEE Advanced document names Huygens principle and interference limited to Young's double-slit experiment among the cited wave-optics lines; single-slit diffraction, resolving power and polarisation are not listed among those lines. Confirm the current official document before assuming otherwise.",
            },
          ],
        },
      ],
    },
    {
      question: "What does Malus law describe?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Malus law gives the intensity transmitted through an analyser Polaroid when plane-polarised light enters it, as I0 cos squared theta, where theta is the angle between the polariser and analyser axes.",
            },
          ],
        },
      ],
    },
    {
      question: "What happens at the Brewster angle?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "At the Brewster angle, the reflected light is completely plane polarised and the reflected and refracted rays are perpendicular to each other. The angle is fixed by the relative refractive index of the two media.",
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
      label: "Ray Optics",
      url: "/jee/physics/ray-optics",
      relation: "prerequisite",
      description: "Geometrical-ray reflection, refraction, lenses and mirrors, before the wave model.",
    },
    {
      label: "Optics",
      url: "/jee/physics/optics",
      relation: "related",
      description: "Model-selector hub that decides between the ray model and the wave model.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "forward",
      description: "Extends the wave description of light to the full electromagnetic spectrum.",
    },
    {
      label: "Dual Nature of Matter",
      url: "/jee/physics/dual-nature-of-matter",
      relation: "forward",
      description: "Examines where the pure wave model of light needs a particle description alongside it.",
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
      label: "Ray Optics",
      url: "/jee/physics/ray-optics",
      relation: "prerequisite",
      description: "Geometrical optics owned separately from this wave-model page.",
    },
    {
      label: "Optics",
      url: "/jee/physics/optics",
      relation: "related",
      description: "Model-selector hub linking the ray model and the wave model.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency or forecast is asserted. Where the two official documents differ in listed scope, the difference is stated explicitly rather than merged.",
  contributorPolicy: [
    "Author: a physics education writer experienced in converting senior-secondary Physics into student-facing JEE learning structures.",
    "Academic reviewer: postgraduate qualification in Physics or a closely related field, plus recent JEE Main and JEE Advanced teaching or curriculum-review experience.",
    "Independent checker: a physics educator or subject editor who verifies equations, geometry, assumptions, SI units, worked reasoning and mobile rendering separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Wave Optics for JEE Physics: Official Scope, Method and Formulas",
    description:
      "Official JEE Main and Advanced 2026 scope for Wave Optics, a concept map from Huygens principle to polarisation, a method selector, condition-aware formula cards and an error diagnosis framework. No invented weightage.",
    ogTitle: "Wave Optics for JEE: understand light as a wave, method by method",
    ogDescription:
      "Official syllabus mapping, prerequisites, concept architecture, formula conditions and error diagnosis for JEE Wave Optics.",
  },
};

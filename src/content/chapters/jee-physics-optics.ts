import type { ChapterContent } from "@/content/types";

/**
 * Optics — T06 production content (draft package, 7 September 2026).
 *
 * Data only: every element below maps onto the existing ChapterContent
 * contract and the T06 recipe, imitating jee-physics-electrostatics.ts.
 *
 * Evidence discipline:
 * - No weightage, frequency, trend or expected-question claims are made.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending).
 */
export const jeePhysicsOptics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Optics",
  slug: "optics",
  url: "/jee/physics/optics",
  canonicalIntent:
    "Decide whether a light problem needs a ray, wavefront, interference, diffraction or polarization model, then apply the correct sign convention and approximation.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their conditions and sign conventions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Optics problems become manageable when you first choose the model. Use geometrical optics for rays, images, lenses, mirrors, prisms and total internal reflection. Use wave optics when phase, path difference, interference, diffraction, wavefronts or polarization determines the result.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct formula with the wrong model still gives a wrong solution.",
          bold: true,
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page is the connecting guide.",
        },
        { text: " Ray Optics", href: "/jee/physics/ray-optics" },
        { text: " and " },
        { text: "Wave Optics", href: "/jee/physics/wave-optics" },
        { text: " give focused depth once the model is chosen." },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not claim weightage, chapter frequency or a predicted question count.",
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
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Phase, wavelength and path length before wave optics.",
    },
    {
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Consistent geometry and measurement conventions before sign-convention work.",
    },
  ],

  syllabusMapping: {
    unit: "Optics",
    topics: [
      "Reflection and refraction at plane and spherical surfaces",
      "Mirrors",
      "Thin lenses and the lens maker relation",
      "Total internal reflection",
      "Magnification and power",
      "Lens combinations",
      "Prism",
      "Microscope and telescope",
      "Huygens principle",
      "Young's double slit experiment",
      "Single-slit diffraction",
      "Polarization and Brewster's law",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture: the optics model selector                     */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "observable",
      title: "1. Start with the observable",
      keyIdea: "What the problem asks you to find points toward the model you need.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An image position points toward ray geometry. Fringes point toward phase and superposition. A central maximum wider than neighbouring maxima points toward diffraction. Intensity variation through analysers points toward polarization.",
            },
          ],
        },
      ],
    },
    {
      id: "ray-transport",
      title: "2. Ray optics transports direction",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At a boundary, reflection preserves the incident angle relative to the normal. Refraction changes direction because phase velocity changes between media. Mirrors and lenses then map an object point to an image point under the paraxial model.",
            },
          ],
        },
      ],
    },
    {
      id: "sign-convention",
      title: "3. Sign convention is part of the model",
      keyIdea: "Fix the axis and the signs before substitution, never after.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Record the positive axis and assign u, v, f and radii before substitution. Never repair signs after obtaining an inconvenient answer.",
            },
          ],
        },
      ],
    },
    {
      id: "tir-conditional",
      title: "4. Total internal reflection is conditional",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "It requires light to travel from higher refractive index to lower refractive index and an incident angle greater than the critical angle.",
            },
          ],
        },
      ],
    },
    {
      id: "wave-phase",
      title: "5. Wave optics tracks phase",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Interference needs coherent contributions and a defined path difference. Diffraction arises from superposition across a finite aperture. Polarization tests the transverse nature of light.",
            },
          ],
        },
      ],
    },
    {
      id: "approximation-control",
      title: "6. Approximation control matters",
      keyIdea: "Every standard optics formula is valid only inside its stated approximation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Thin-lens formulas need the thin, paraxial model. The familiar YDSE fringe-width relation uses small angles and the usual D much greater than d geometry. Single-slit minima use a far-field angular condition.",
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
      heading: "Official JEE syllabus mapping for Optics",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Reflection, refraction and TIR",
          "Reflection and refraction at plane and spherical surfaces; total internal reflection are explicitly listed.",
          "Rectilinear propagation, reflection and refraction, and total internal reflection are explicitly listed.",
        ],
        [
          "Mirrors and lenses",
          "Mirrors; thin lenses and lens maker relation; magnification and power; lens combinations are explicitly listed.",
          "Thin lenses and combinations of mirrors and thin lenses, with magnification, are explicitly listed.",
        ],
        [
          "Prism",
          "Prism is explicitly listed.",
          "Prism deviation and dispersion are explicitly listed.",
        ],
        [
          "Optical instruments",
          "Microscope and astronomical telescope magnifying powers are explicitly listed.",
          "Not explicitly named in the cited Advanced Optics list.",
        ],
        [
          "Wave optics",
          "Huygens principle; YDSE; single-slit diffraction; polarization and Brewster's law are explicitly listed.",
          "Huygens principle; YDSE; single-slit diffraction; polarization, Brewster's law and Polaroids are explicitly listed.",
        ],
      ],
      note: "Both Main and Advanced include reflection, refraction, total internal reflection, lenses, prism behaviour, Huygens principle, YDSE, single-slit diffraction and polarization. This guide does not claim weightage, chapter frequency or a predicted question count.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisite check",
      columns: ["Prerequisite", "You are ready if you can…"],
      rows: [
        ["Normals and angles", "Draw a normal and measure angles from it."],
        ["Geometry and approximation", "Use similar triangles and small-angle reasoning."],
        ["Trigonometry", "Resolve a direction with basic trigonometric ratios."],
        ["Wave language", "Distinguish wavelength, phase and path length."],
        ["Sign discipline", "Use one Cartesian sign convention consistently."],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list. Revise Waves and Units and Measurements if necessary.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Choose the method before calculating",
      columns: ["Cue in the problem", "First model", "First record to make"],
      rows: [
        ["Object, image, mirror, lens", "Ray transfer", "Sign convention and principal axis"],
        [
          "Multiple optical elements",
          "Sequential imaging",
          "Image from one element becomes object for the next",
        ],
        ["Denser-to-rarer boundary", "TIR test", "Direction and critical angle"],
        [
          "Prism at minimum deviation",
          "Symmetric prism path",
          "i = e and r1 = r2 = A/2",
        ],
        ["Two coherent paths", "Interference", "Optical path difference"],
        ["Finite slit and angular minima", "Diffraction", "Slit width and observation angle"],
        ["Polarizer and analyser", "Polarization", "Transmission axes and relative angle"],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis",
      columns: ["Primary label", "Use when the first failure is"],
      rows: [
        [
          "Knowledge Gap",
          "Image formation, phase, coherence, diffraction or polarization is not understood.",
        ],
        [
          "Recall Gap",
          "The correct imaging, fringe, diffraction or prism relation was not retrieved.",
        ],
        [
          "Execution Error",
          "Sign substitution, angle conversion, algebra or ray construction failed.",
        ],
        [
          "Decision / Selection Error",
          "Ray versus wave model, convention, approximation or optical sequence was chosen incorrectly.",
        ],
        [
          "Needs Review",
          "The written work does not show enough evidence for a confident tag.",
        ],
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
          title: "Official-paper protocol",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Select questions only from official paper collections. Record the chosen model, convention, approximation, diagram and validation step for every question you review.",
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
              type: "note",
              tone: "caution",
              children: [
                {
                  text: "Separate \"Optics umbrella\" tagging from focused Ray Optics and Wave Optics tagging during editorial review to avoid double counting and cannibalisation. This page does not claim a verified number of Optics questions per year, a guaranteed chapter weightage, a trend percentage, or an independently unchecked topic-tagged PYQ list.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula records (B29)                                               */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "snells-law",
      expression: "n1 sin i = n2 sin r",
      meaning: "Snell's law of refraction at a boundary between isotropic media.",
      variables: [
        { symbol: "n1, n2", meaning: "refractive indices of the two media (dimensionless)" },
        { symbol: "i", meaning: "angle of incidence, measured from the normal" },
        { symbol: "r", meaning: "angle of refraction, measured from the normal" },
      ],
      useWhen: "Refraction at a boundary between isotropic media.",
      commonTrap: "Measuring angles from the surface instead of the normal.",
      accessibleText: "n one sine i equals n two sine r, with both angles measured from the normal.",
    },
    {
      id: "critical-angle",
      expression: "sin c = n2 / n1",
      meaning: "The critical angle for total internal reflection.",
      variables: [
        { symbol: "c", meaning: "critical angle" },
        { symbol: "n1, n2", meaning: "refractive indices, with n1 greater than n2 (dimensionless)" },
      ],
      useWhen: "Ray travels from a denser optical medium to a rarer one.",
      commonTrap: "Using the relation in the opposite direction of travel.",
      accessibleText: "Sine of the critical angle equals n two over n one, with n one the denser medium.",
    },
    {
      id: "mirror-formula",
      expression: "1/f = 1/v + 1/u",
      meaning: "Spherical mirror relation between object distance, image distance and focal length.",
      variables: [
        { symbol: "f", meaning: "focal length", unit: "m" },
        { symbol: "u", meaning: "object distance", unit: "m" },
        { symbol: "v", meaning: "image distance", unit: "m" },
      ],
      useWhen: "Paraxial spherical mirror with one fixed sign convention.",
      commonTrap: "Substituting unsigned distances.",
      accessibleText: "One over f equals one over v plus one over u, all signed under one convention.",
    },
    {
      id: "lens-formula",
      expression: "1/f = 1/v - 1/u",
      meaning: "Thin-lens relation between object distance, image distance and focal length.",
      variables: [
        { symbol: "f", meaning: "focal length", unit: "m" },
        { symbol: "u", meaning: "object distance", unit: "m" },
        { symbol: "v", meaning: "image distance", unit: "m" },
      ],
      useWhen: "Paraxial thin lens.",
      commonTrap: "Mixing the mirror and lens sign forms.",
      accessibleText: "One over f equals one over v minus one over u.",
    },
    {
      id: "magnification",
      expression: "m = -v/u for a mirror ; m = v/u for a lens",
      meaning: "Lateral magnification of the image relative to the object.",
      variables: [
        { symbol: "m", meaning: "lateral magnification (dimensionless)" },
        { symbol: "u, v", meaning: "object and image distances under the same sign convention", unit: "m" },
      ],
      useWhen: "Same sign convention as the imaging formula in use.",
      commonTrap: "Reading magnitude only and losing image orientation.",
      accessibleText: "Magnification is minus v over u for a mirror, and v over u for a lens.",
    },
    {
      id: "lens-maker",
      expression: "1/f = (n - 1) (1/R1 - 1/R2)",
      meaning: "Lens maker relation for a thin lens in air.",
      variables: [
        { symbol: "f", meaning: "focal length", unit: "m" },
        { symbol: "n", meaning: "refractive index of the lens material relative to air (dimensionless)" },
        { symbol: "R1, R2", meaning: "radii of curvature of the two surfaces", unit: "m" },
      ],
      useWhen: "Thin lens in air with stated surface signs.",
      commonTrap: "Using it unchanged when the lens sits in another surrounding medium.",
      accessibleText:
        "One over f equals n minus one, times the difference of one over R one and one over R two.",
    },
    {
      id: "prism-minimum-deviation",
      expression: "n = sin[(A + delta_m) / 2] / sin(A / 2)",
      meaning: "Refractive index of a prism at the symmetric minimum-deviation path.",
      variables: [
        { symbol: "A", meaning: "prism angle" },
        { symbol: "delta_m", meaning: "angle of minimum deviation" },
        { symbol: "n", meaning: "refractive index of the prism material (dimensionless)" },
      ],
      useWhen: "Homogeneous prism at the symmetric minimum-deviation path where i = e and r1 = r2 = A/2.",
      commonTrap: "Using a general deviation value in place of delta_m.",
      accessibleText:
        "n equals sine of half the sum of A and delta m, divided by sine of half A.",
    },
    {
      id: "ydse-fringe-width",
      expression: "beta = lambda D / d",
      meaning: "Fringe width in Young's double slit experiment.",
      variables: [
        { symbol: "beta", meaning: "fringe width", unit: "m" },
        { symbol: "lambda", meaning: "wavelength of light", unit: "m" },
        { symbol: "D", meaning: "screen distance from the slits", unit: "m" },
        { symbol: "d", meaning: "slit separation", unit: "m" },
      ],
      useWhen: "Small-angle geometry, coherent sources, and D much greater than d.",
      commonTrap: "Confusing slit separation d with slit width.",
      accessibleText: "Fringe width beta equals lambda D over d.",
    },
    {
      id: "single-slit-minima",
      expression: "a sin(theta) = m lambda",
      meaning: "Angular position of minima in single-slit diffraction.",
      variables: [
        { symbol: "a", meaning: "slit width", unit: "m" },
        { symbol: "lambda", meaning: "wavelength of light", unit: "m" },
        { symbol: "theta", meaning: "angle from the central axis" },
        { symbol: "m", meaning: "minimum order, m = 1, 2, 3 ..." },
      ],
      useWhen: "Fraunhofer single-slit diffraction.",
      commonTrap: "Treating m = 0 as a minimum.",
      accessibleText: "a sine theta equals m lambda, for m equal to one, two, three and so on.",
    },
    {
      id: "brewster-condition",
      expression: "tan(i_B) = n2 / n1",
      meaning: "Brewster's angle, at which reflected light is plane-polarized.",
      variables: [
        { symbol: "i_B", meaning: "Brewster angle" },
        { symbol: "n1, n2", meaning: "refractive indices of the incident and second medium (dimensionless)" },
      ],
      useWhen: "Reflected light is plane-polarized at Brewster incidence.",
      commonTrap: "Assuming the reflected and refracted rays are unrelated at this condition.",
      accessibleText: "Tangent of the Brewster angle equals n two over n one.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "converging-lens-2f",
      prompt:
        "A real object sits at u = -2f in front of a converging lens with f > 0, using the Cartesian convention with light travelling left to right. Find the image position and magnification.",
      steps: [
        { type: "paragraph", children: [{ text: "Apply 1/f = 1/v - 1/u." }] },
        {
          type: "paragraph",
          children: [{ text: "Substitute u = -2f: 1/f = 1/v + 1/(2f)." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Therefore 1/v = 1/(2f) and v = 2f." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Magnification is m = v/u = (2f)/(-2f) = -1." }],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The image is real, inverted and equal in size. The reasoning works because the sign convention was fixed before substitution. A memorised object-at-2F diagram should confirm, not replace, the equation.",
            },
          ],
        },
      ],
      answer: "v = 2f, image real, inverted, magnification -1 (same size as object).",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes and PI v1.1 mapping (B30)                           */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "sign-switch",
      mistake: "Switching sign convention halfway through a problem",
      why: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mixing conventions makes u, v, f and R inconsistent, so the algebra no longer maps to the physical picture.",
            },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Declare one axis and keep every distance signed to that axis throughout." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "index-as-interface-property",
      mistake: "Treating refractive index as a property of the interface alone",
      why: [
        {
          type: "paragraph",
          children: [
            {
              text: "Refractive index belongs to a medium for a stated wavelength and conditions, not to the boundary between two media in isolation.",
            },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Identify both media and the relevant wavelength before applying Snell's law." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "tir-wrong-direction",
      mistake: "Applying total internal reflection for rarer-to-denser travel",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Total internal reflection is only possible travelling from higher to lower refractive index." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check the direction of travel before checking the angle against the critical angle." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "ray-model-for-fringes",
      mistake: "Using geometrical optics for fringe questions",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Fringe patterns come from phase and path-difference effects that ray tracing does not capture." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Switch to wave optics and track phase and path difference." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "ydse-outside-small-angle",
      mistake: "Using lambda D over d outside small-angle YDSE geometry",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The fringe-width formula assumes small angles and D much greater than d; it breaks outside that regime." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Rebuild the result from the optical path difference when the geometry changes." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "interference-diffraction-separate",
      mistake: "Calling interference and diffraction unrelated phenomena",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Both arise from superposition; they differ in source geometry, not in the underlying principle." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Identify the source geometry (discrete coherent sources versus a finite aperture) before naming the effect." }],
        },
      ],
      errorType: "knowledge-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B22)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "When should I use ray optics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use it for image formation, mirrors, lenses, prisms and boundary directions when wavelength-scale effects are not controlling the result.",
            },
          ],
        },
      ],
    },
    {
      question: "When should I use wave optics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use it when phase, coherence, interference, diffraction or polarization controls the observable.",
            },
          ],
        },
      ],
    },
    {
      question: "What are the conditions for total internal reflection?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Light must travel from higher refractive index to lower refractive index, and the incident angle must exceed the critical angle.",
            },
          ],
        },
      ],
    },
    {
      question: "Is the microscope in both official syllabi?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is explicit in the JEE Main 2026 Optics unit. It is not explicitly named in the JEE Advanced 2026 Optics list.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Related learning path (B36) and internal links                      */
  /* ------------------------------------------------------------------ */
  relatedChapters: [
    {
      label: "Ray Optics",
      url: "/jee/physics/ray-optics",
      relation: "forward",
      description: "Focused depth on image formation, mirrors, lenses and prisms.",
    },
    {
      label: "Wave Optics",
      url: "/jee/physics/wave-optics",
      relation: "forward",
      description: "Focused depth on interference, diffraction and polarization.",
    },
    {
      label: "Modern Physics",
      url: "/jee/physics/modern-physics",
      relation: "forward",
      description: "Move from wave behaviour to photon behaviour.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Phase, wavelength and path length before wave optics.",
    },
    {
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Consistent measurement conventions before sign-convention work.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "same-unit",
      description: "Connect light as an electromagnetic wave.",
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
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Physics-specific official scope.",
    },
    {
      label: "JEE previous-year papers",
      url: "/jee/previous-year-papers",
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
    "Ideal author type: a JEE Physics educator or academic content specialist experienced in geometrical and wave optics.",
    "Required reviewer expertise: Cartesian sign conventions, optical instruments, prism optics, interference, diffraction, polarization and official scope boundaries.",
    "Required qualification: a Master's degree or higher in Physics, or an engineering degree with documented JEE Optics teaching and solution-review experience.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Optics for JEE: Ray and Wave Models, Formulas and Traps",
    description:
      "Learn how to choose ray or wave optics for JEE Main and Advanced. Includes official scope, formulas with conditions, worked reasoning and common mistakes.",
    ogTitle: "Optics for JEE, From Rays to Phase",
    ogDescription:
      "A structured guide to imaging, refraction, interference, diffraction and polarization with method choice and formula conditions.",
  },
};

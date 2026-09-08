import type { ChapterContent } from "@/content/types";

/**
 * Dual Nature of Matter — T06 production content (Batch 04, 8 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" and /jee/physics/dual-nature-of-matter stays
 *   noindex until sign conventions, non-relativistic condition, B37, link,
 *   schema and render checks pass.
 */
export const jeePhysicsDualNatureOfMatter: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Dual Nature of Matter",
  slug: "dual-nature-of-matter",
  url: "/jee/physics/dual-nature-of-matter",
  canonicalIntent:
    "Use photon energy and matter wavelength to explain observations that classical wave or particle models cannot explain alone, and let the observation choose the correct model.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Photoelectric and de Broglie formulas carry their conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Light transfers energy and momentum in photons, while moving material particles can be assigned a de Broglie wavelength. The photoelectric effect is explained by one-photon energy transfer, and electron diffraction reveals matter-wave behaviour.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Wave and particle descriptions are complementary models tied to the measurement being made, not two separate objects competing for the same event.",
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
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Stabilise work and energy reasoning before photon energy accounting.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Review electric potential difference for stopping-potential and accelerated-particle reasoning.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Review frequency, wavelength and the electromagnetic spectrum.",
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
    unit: "Dual Nature of Matter",
    topics: [
      "Dual nature of radiation",
      "Photoelectric effect",
      "Hertz and Lenard observations",
      "Einstein photoelectric equation",
      "Particle nature of light",
      "Matter waves and de Broglie relation",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B40): observation, model, conservation, limit */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "separate-observations",
      title: "1. Separate the observations",
      keyIdea:
        "Threshold frequency, maximum kinetic energy, emission rate, stopping potential and diffraction pattern are five distinct observables.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Separate threshold frequency, maximum kinetic energy, emission rate, stopping potential, and diffraction pattern. Each observable answers a different question about the same physical setup.",
            },
          ],
        },
      ],
    },
    {
      id: "choose-the-model",
      title: "2. Choose the model that fits the observation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use photons for discrete light-energy transfer and de Broglie waves for particle wavelength. Neither model is used everywhere at once; the observation decides which one applies.",
            },
          ],
        },
      ],
    },
    {
      id: "conservation",
      title: "3. Apply conservation carefully",
      keyIdea: "One absorbed photon supplies work function plus electron kinetic energy in the idealised maximum-energy case.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "One absorbed photon supplies work function plus electron kinetic energy in Einstein's idealised maximum-energy equation. This is an energy-conservation statement for a single photon-electron interaction.",
            },
          ],
        },
      ],
    },
    {
      id: "control-variable",
      title: "4. Identify the control variable",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Frequency changes photon energy. Intensity at fixed frequency changes the photon arrival rate. Changing one does not automatically change the other.",
            },
          ],
        },
      ],
    },
    {
      id: "limit-condition",
      title: "5. Respect the limit of the accelerated-particle shortcut",
      keyIdea: "The accelerated-particle wavelength shortcut assumes non-relativistic kinetic energy and a known charge-potential energy change.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The accelerated-particle wavelength shortcut assumes non-relativistic kinetic energy and a known charge-potential energy change. Outside that limit the shortcut does not apply.",
            },
          ],
        },
      ],
    },
    {
      id: "interpretation",
      title: "6. Interpret duality correctly",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Dual nature does not mean a classical particle literally follows a classical sinusoidal path. It means different experiments reveal different, complementary aspects of the same entity.",
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
          "How photon energy and momentum explain the photoelectric effect, and how a de Broglie wavelength is assigned to a moving material particle.",
        ],
        [
          "What is the central method choice?",
          "Identify which observable is being changed (frequency or intensity) before choosing an equation, then decide between the photon model, Einstein's photoelectric equation, or the de Broglie relation.",
        ],
        [
          "Where do most mistakes begin?",
          "Assuming brighter light always ejects faster electrons, confusing stopping potential with an ordinary accelerating voltage, and applying the accelerated-particle wavelength shortcut without checking the non-relativistic condition.",
        ],
        [
          "What should come before this chapter?",
          "Work and energy, electric potential difference, momentum, frequency, wavelength, and the electromagnetic spectrum.",
        ],
        [
          "What comes after it?",
          "Atoms and Nuclei extends photon and quantum reasoning to atomic spectra and nuclear structure.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Dual Nature of Matter",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Photoelectric effect",
          "Dual nature of radiation, photoelectric effect, Hertz and Lenard observations, and Einstein's photoelectric equation are explicitly listed.",
          "Photoelectric effect is explicitly listed.",
          "Fix which observable (threshold, energy, rate, stopping potential) a question targets before applying an equation.",
        ],
        [
          "Particle nature of light",
          "Particle nature of light is explicitly listed.",
          "Covered through the same photon scope.",
          "Use photon energy and momentum relations only in vacuum unless stated otherwise.",
        ],
        [
          "Matter waves",
          "Matter waves and de Broglie relation are explicitly listed.",
          "de Broglie wavelength of matter waves is explicitly listed.",
          "Check the non-relativistic condition before using the accelerated-particle wavelength shortcut.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Dual Nature of Matter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Work and energy",
          "Relate work done to change in kinetic energy.",
          "Revise Work, Energy and Power before this chapter.",
        ],
        [
          "Electric potential difference",
          "Relate potential difference to energy gained by a charge.",
          "Revise Electrostatics before this chapter.",
        ],
        [
          "Momentum",
          "Compute momentum magnitude from mass and velocity, or from energy relations.",
          "Revise the definition and units of momentum.",
        ],
        [
          "Frequency, wavelength and the electromagnetic spectrum",
          "Relate frequency, wavelength and the speed of light, and place radiation on the spectrum.",
          "Revise Waves before this chapter.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Six decisions cover most Dual Nature of Matter questions. Select the model before any algebra.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        ["Threshold or stopping potential", "Einstein photoelectric equation", "Frequency exceeds threshold"],
        ["Change in light intensity", "Photon rate at fixed frequency", "Keep frequency and material fixed"],
        ["Photon momentum", "p = E/c or p = h/lambda", "Vacuum relation if using c = frequency times wavelength"],
        ["Particle wavelength from momentum", "de Broglie relation", "Momentum magnitude is known"],
        ["Charged particle accelerated through voltage", "Energy gain then momentum", "Initial energy and non-relativistic condition"],
        ["Diffraction comparison", "Wavelength versus apparatus scale", "Same particle momentum conditions"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "photon-energy",
      expression: "E = h nu = h c / lambda",
      meaning: "Photon energy in terms of frequency, or equivalently in terms of wavelength in vacuum.",
      variables: [
        { symbol: "E", meaning: "photon energy", unit: "J" },
        { symbol: "h", meaning: "Planck constant", unit: "J s" },
        { symbol: "nu", meaning: "frequency", unit: "Hz" },
        { symbol: "c", meaning: "speed of light in vacuum", unit: "m/s" },
        { symbol: "lambda", meaning: "wavelength", unit: "m" },
      ],
      useWhen: "c = nu times lambda holds in vacuum for the second equality.",
      commonTrap: "Letting intensity determine individual photon energy.",
      accessibleText: "Photon energy equals Planck constant times frequency, which equals Planck constant times speed of light divided by wavelength.",
    },
    {
      id: "photon-momentum",
      expression: "p (photon) = E / c = h / lambda",
      meaning: "Photon momentum magnitude in vacuum.",
      variables: [
        { symbol: "p (photon)", meaning: "photon momentum magnitude", unit: "kg m/s" },
        { symbol: "E", meaning: "photon energy", unit: "J" },
        { symbol: "c", meaning: "speed of light in vacuum", unit: "m/s" },
        { symbol: "h", meaning: "Planck constant", unit: "J s" },
        { symbol: "lambda", meaning: "wavelength", unit: "m" },
      ],
      useWhen: "Photon in vacuum, using the E = p c form.",
      commonTrap: "Assigning a photon rest mass through p = m v.",
      accessibleText: "Photon momentum magnitude equals photon energy divided by the speed of light, which equals Planck constant divided by wavelength.",
    },
    {
      id: "einstein-photoelectric",
      expression: "K_max = h nu - phi = e V_s",
      meaning: "Maximum photoelectron kinetic energy and stopping-potential magnitude.",
      variables: [
        { symbol: "K_max", meaning: "maximum photoelectron kinetic energy", unit: "J" },
        { symbol: "h", meaning: "Planck constant", unit: "J s" },
        { symbol: "nu", meaning: "frequency of incident radiation", unit: "Hz" },
        { symbol: "phi", meaning: "work function of the surface", unit: "J" },
        { symbol: "e", meaning: "elementary charge", unit: "C" },
        { symbol: "V_s", meaning: "stopping-potential magnitude", unit: "V" },
      ],
      useWhen: "One-photon photoelectric model, frequency at or above threshold, stated work function.",
      commonTrap: "Confusing stopping potential with accelerating potential.",
      accessibleText: "Maximum kinetic energy equals Planck constant times frequency minus the work function, which equals elementary charge times stopping-potential magnitude.",
    },
    {
      id: "threshold-frequency",
      expression: "nu_0 = phi / h",
      meaning: "Threshold frequency for photoemission from a given surface.",
      variables: [
        { symbol: "nu_0", meaning: "threshold frequency", unit: "Hz" },
        { symbol: "phi", meaning: "work function of the surface", unit: "J" },
        { symbol: "h", meaning: "Planck constant", unit: "J s" },
      ],
      useWhen: "Material surface and work function are fixed.",
      commonTrap: "Treating threshold frequency as intensity-dependent.",
      accessibleText: "Threshold frequency equals work function divided by Planck constant.",
    },
    {
      id: "de-broglie-wavelength",
      expression: "lambda = h / p",
      meaning: "de Broglie wavelength of a material particle from its momentum.",
      variables: [
        { symbol: "lambda", meaning: "de Broglie wavelength", unit: "m" },
        { symbol: "h", meaning: "Planck constant", unit: "J s" },
        { symbol: "p", meaning: "particle momentum magnitude", unit: "kg m/s" },
      ],
      useWhen: "Particle momentum magnitude is known.",
      commonTrap: "Using velocity without mass, or without checking the relativistic condition.",
      accessibleText: "de Broglie wavelength equals Planck constant divided by momentum magnitude.",
    },
    {
      id: "de-broglie-accelerated",
      expression: "lambda = h / square root of (2 m |q| V)",
      meaning: "de Broglie wavelength after acceleration from rest through a potential of magnitude V.",
      variables: [
        { symbol: "lambda", meaning: "de Broglie wavelength", unit: "m" },
        { symbol: "h", meaning: "Planck constant", unit: "J s" },
        { symbol: "m", meaning: "particle mass", unit: "kg" },
        { symbol: "q", meaning: "particle charge", unit: "C" },
        { symbol: "V", meaning: "accelerating potential magnitude", unit: "V" },
      ],
      useWhen: "Non-relativistic particle, negligible initial kinetic energy, accelerated from rest through potential magnitude V.",
      commonTrap: "Using electron charge and mass for every particle regardless of what is actually being accelerated.",
      accessibleText: "de Broglie wavelength equals Planck constant divided by the square root of twice the mass times the charge magnitude times the potential magnitude.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-frequency-vs-intensity",
      prompt:
        "Light above threshold frequency illuminates the same clean metal surface. Explain what happens to maximum photoelectron kinetic energy and to photocurrent when (a) intensity is increased at fixed frequency, and (b) frequency is increased.",
      answer:
        "Increasing intensity at fixed frequency does not raise maximum kinetic energy but can raise the emission rate and photocurrent. Increasing frequency raises maximum kinetic energy directly.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Increase intensity while frequency stays fixed. Each photon still has energy h nu, so the maximum electron kinetic energy and stopping-potential magnitude do not increase in the ideal model." }],
            [{ text: "More photons per second at that fixed frequency can increase the emission rate and saturation current." }],
            [{ text: "Increase frequency while intensity is otherwise controlled. Each photon carries more energy, so K_max rises by h times the change in frequency." }],
            [{ text: "If frequency is below threshold, raising intensity alone does not produce photoemission in the standard one-photon model." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The method is to identify which observable is being changed, frequency or intensity, before choosing an equation.",
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
      id: "brighter-light-faster-electrons",
      mistake: "Saying brighter light always ejects faster electrons",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Intensity at fixed frequency changes the photon arrival rate, not the energy carried by each individual photon." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use frequency, not intensity, to judge maximum photoelectron kinetic energy." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "stopping-potential-confusion",
      mistake: "Treating stopping potential as the ordinary photocurrent-producing voltage",
      why: [
        { type: "paragraph", children: [{ text: "Stopping potential is the reverse potential that just stops the most energetic photoelectrons, not a forward accelerating voltage." }] },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Read the circuit description carefully and match the potential's role before substituting." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "threshold-forgotten",
      mistake: "Forgetting the threshold condition before using Einstein's equation",
      why: [
        { type: "paragraph", children: [{ text: "Einstein's photoelectric equation only applies when the incident frequency is at or above the threshold frequency." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Compare the given frequency with the threshold frequency before computing K_max." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "photon-vs-electron-wavelength",
      mistake: "Mixing photon wavelength with electron de Broglie wavelength",
      why: [
        { type: "paragraph", children: [{ text: "A photon's wavelength relates to its energy through E = h c / lambda, while a material particle's de Broglie wavelength relates to its momentum through lambda = h / p." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify whether the object under discussion is a photon or a material particle before choosing the relation." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "relativistic-shortcut-misuse",
      mistake: "Using the accelerated-particle wavelength shortcut when the particle did not start nearly from rest or is relativistic",
      why: [
        { type: "paragraph", children: [{ text: "The shortcut lambda = h / square root of (2 m |q| V) assumes negligible initial kinetic energy and a non-relativistic final speed." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check both starting conditions and the resulting speed before applying the shortcut; otherwise compute momentum directly." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "wrong-mass-charge-substitution",
      mistake: "Using electron charge and mass for every accelerated particle",
      why: [
        { type: "paragraph", children: [{ text: "The accelerated-particle wavelength formula depends on the specific particle's mass and charge, which change for protons, alpha particles or ions." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Substitute the correct mass and charge magnitude for the particle actually described in the question." }] },
      ],
      errorType: "recall-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* PI v1.1 diagnosis and official-paper practice (B13/B06, B32)        */
  /* ------------------------------------------------------------------ */

  faqs: [
    {
      question: "What determines maximum photoelectron kinetic energy?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "In Einstein's photoelectric model it is set by photon frequency and the surface work function, not intensity.",
            },
          ],
        },
      ],
    },
    {
      question: "What does light intensity change in the photoelectric effect?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Above threshold and with other conditions fixed, it changes photon arrival rate and can change photocurrent, not the energy of each photon.",
            },
          ],
        },
      ],
    },
    {
      question: "What is de Broglie wavelength?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is the wavelength lambda = h / p associated with a material particle of momentum magnitude p.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to the Physics subject hub.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Stabilise work and energy reasoning before photon energy accounting.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Review frequency, wavelength and the electromagnetic spectrum.",
    },
    {
      label: "Modern Physics",
      url: "/jee/physics/modern-physics",
      relation: "same-unit",
      description: "The umbrella chapter that introduces how photons and matter waves connect to atomic and nuclear models.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "related",
      description: "Compare the wave description of radiation used elsewhere in the syllabus.",
    },
  ],
  links: [
    {
      label: "Atoms and Nuclei",
      url: "/jee/physics/atoms-and-nuclei",
      relation: "forward",
      description: "Extend photon and quantum reasoning to atomic spectra and nuclear structure.",
    },
    {
      label: "Semiconductors",
      url: "/jee/physics/semiconductors",
      relation: "forward",
      description: "Continue toward device-level applications of quantum behaviour.",
    },
    {
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Official Physics scope.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. Sign conventions, the non-relativistic condition on the accelerated-particle wavelength shortcut, and the vacuum condition on photon relations are academic constraints, not weightage claims. No chapter weightage, question frequency, or forecast is asserted. Official papers may be tagged to this chapter only after academic review of photoelectric observations, Einstein's equation, threshold, stopping potential, photon energy or momentum, de Broglie wavelength, or accelerated particles; atomic spectra and nuclear binding belong to Atoms and Nuclei.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: JEE Physics educator experienced in modern Physics and evidence-led explanation.",
    "Academically reviewed by: Unassigned. Required expertise: quantum foundations at JEE level, photoelectric phenomena, and matter waves. Required qualification: postgraduate degree in Physics or a closely related discipline, with modern-Physics expertise and JEE-scope familiarity.",
    "Last reviewed: pending completed academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus, NCERT Dual Nature of Radiation and Matter, and official paper archives.",
    "Review scope: observable relationships, photon and matter-wave formulas, threshold and non-relativistic conditions, worked reasoning, cannibalisation boundary with Modern Physics and Atoms and Nuclei, links, metadata, and schema parity.",
    "No contributor is named on this page until identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Dual Nature of Matter for JEE: Photoelectric, de Broglie",
    description:
      "Learn JEE dual nature through photoelectric observations, photon energy, stopping potential, de Broglie wavelength, conditions, reasoning, and traps.",
    ogTitle: "Dual Nature of Matter for JEE",
    ogDescription:
      "An evidence-led guide to photons, the photoelectric effect, and matter waves.",
  },
};

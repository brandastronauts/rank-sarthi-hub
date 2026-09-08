import type { ChapterContent } from "@/content/types";

/**
 * Atoms and Nuclei — T06 production content (Batch 04, 7 September 2026).
 * Data only, mirrors the frozen T06 recipe used across the chapter set.
 */
export const jeePhysicsAtomsAndNuclei: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Atoms and Nuclei",
  slug: "atoms-and-nuclei",
  url: "/jee/physics/atoms-and-nuclei",
  canonicalIntent:
    "Connect scattering and spectral evidence to the correct atomic or nuclear model, quantize hydrogen-like energy levels, apply mass-energy accounting for nuclear binding and reactions, and diagnose which model a question actually requires.",

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
          text: "Rutherford scattering shows that positive charge and most atomic mass are concentrated in a very small nucleus. Bohr's hydrogen-like model quantizes allowed energies and explains line transitions within its scope. Nuclear questions use mass-energy and binding-energy accounting, while radioactive decay uses a statistical law for a population of unstable nuclei.",
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
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Coulomb attraction underlies both scattering geometry and the Bohr model's force balance.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Energy accounting is used throughout binding-energy and reaction-energy calculations.",
    },
    {
      label: "Dual Nature of Matter",
      url: "/jee/physics/dual-nature-of-matter",
      relation: "prerequisite",
      description: "Photon energy and quantization ideas carry directly into spectral transitions here.",
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
    unit: "Atoms and Nuclei",
    topics: [
      "Alpha-particle scattering and the Rutherford model",
      "Bohr model, energy levels and the hydrogen spectrum",
      "Nuclear composition and size",
      "Atomic masses and the mass-energy relation",
      "Mass defect and binding energy per nucleon",
      "Fission and fusion",
      "Alpha, beta and gamma radiations (Advanced)",
      "Radioactive-decay law, decay constant, half-life and mean life (Advanced)",
      "Bohr theory of hydrogen-like atoms (Advanced)",
      "Characteristic and continuous X-rays and Moseley's law (Advanced)",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35, B40): evidence, model, quantization, accounting */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "evidence",
      title: "1. Keep evidence separate from model",
      keyIdea: "Scattering, line spectra and nuclear emissions are observations, not explanations by themselves.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Scattering, line spectra, and nuclear emissions are observations. Keep them separate from the models used to explain them.",
            },
          ],
        },
      ],
    },
    {
      id: "atomic-model",
      title: "2. Recognise what the Rutherford model does and does not explain",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Rutherford localizes the nucleus but does not by itself explain stable, discrete atomic spectra.",
            },
          ],
        },
      ],
    },
    {
      id: "quantization",
      title: "3. Use Bohr quantization for hydrogen-like atoms",
      keyIdea: "Bohr's model allows discrete stationary energies and transitions between them.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Bohr's hydrogen-like model allows discrete stationary energies and transitions between them. It applies to one-electron species, not to general multi-electron atoms.",
            },
          ],
        },
      ],
    },
    {
      id: "nuclear-structure",
      title: "4. Treat nuclear size as an empirical scaling",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Nuclear size scales approximately with the cube root of mass number, reflecting roughly constant nuclear density, not an exact sharp boundary.",
            },
          ],
        },
      ],
    },
    {
      id: "energy-accounting",
      title: "5. Convert mass defect into binding energy",
      keyIdea: "Binding energy is the mass defect converted through E = m c squared.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Binding energy is the mass defect between separated constituents and the bound system, converted through E = m c squared.",
            },
          ],
        },
      ],
    },
    {
      id: "population-law",
      title: "6. Read radioactive decay as a population law",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Radioactive decay predicts the statistical evolution of a large population, not the exact decay time of one nucleus. This is explicit Advanced scope.",
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
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is the chapter about?",
          "How scattering and spectral evidence select the Rutherford and Bohr models, how hydrogen-like energy levels and transitions are quantized, how nuclear size, mass defect and binding energy are calculated, and how fission, fusion and radioactive decay are handled.",
        ],
        [
          "What is the central method choice?",
          "Identify whether a question is about scattering geometry, hydrogen-like energy levels, nuclear mass-energy accounting, or the statistical decay law, before selecting an equation.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating Rutherford's model as a complete explanation of spectra, applying Bohr formulas to multi-electron atoms, reversing initial and final levels, and mixing atomic with bare nuclear masses.",
        ],
        [
          "What should come before this chapter?",
          "Coulomb attraction, circular motion, work and energy, photons, and comfort with scientific notation.",
        ],
        [
          "What comes after it?",
          "Semiconductors and Electromagnetic Waves extend the same quantization and evidence discipline to devices and radiation.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Atoms and Nuclei",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Atomic models",
          "Alpha-particle scattering, the Rutherford model, and the Bohr model with energy levels and the hydrogen spectrum are explicitly listed.",
          "Bohr theory of hydrogen-like atoms is explicitly listed.",
          "Keep the scattering observation and the Bohr model logically separate before applying either.",
        ],
        [
          "Nuclear structure and energy",
          "Nuclear composition and size, atomic masses, the mass-energy relation, mass defect, binding energy per nucleon and its variation with mass number, fission and fusion are explicitly listed.",
          "Binding-energy calculation and fission and fusion energy are explicitly listed.",
          "Use one consistent mass convention throughout a single calculation.",
        ],
        [
          "Radioactive decay",
          "Not listed as Main scope in this mapping.",
          "Alpha, beta and gamma radiations and the radioactive-decay law, decay constant, half-life and mean life are explicitly listed.",
          "Label decay questions as Advanced scope rather than attributing them to Main.",
        ],
        [
          "X-rays",
          "Not listed as Main scope in this mapping.",
          "Characteristic and continuous X-rays and Moseley's law are explicitly listed.",
          "Treat X-ray spectra as Advanced-only unless the official Main document changes.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Atoms and Nuclei",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Coulomb attraction",
          "Use Coulomb's law to reason about the force between a nucleus and an electron.",
          "Revise Electrostatics before this chapter.",
        ],
        [
          "Circular motion",
          "Relate centripetal force to orbital speed and radius.",
          "Revise circular-motion force balance from Kinematics and Laws of Motion.",
        ],
        [
          "Work and energy",
          "Combine kinetic and potential energy into a total mechanical energy.",
          "Revise Work, Energy and Power.",
        ],
        [
          "Photons",
          "Relate photon energy to frequency and wavelength.",
          "Revise Dual Nature of Matter.",
        ],
        [
          "Scientific notation",
          "Work confidently with very small and very large numbers, such as nuclear radii and atomic masses.",
          "Practise unit conversion and scientific notation.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "Diagnose the wrong model (PI v1.1)",
      intro: "Only these primary labels are used: Knowledge Gap, Recall Gap, Execution Error, Decision / Selection Error, and Needs Review.",
      columns: ["Primary label", "Evidence", "Corrective action"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot connect scattering or spectra to the model they test.",
          "Rebuild the observation-to-model mapping.",
        ],
        [
          "Recall Gap",
          "Correct model selected, but the level, decay, or binding relation is unavailable.",
          "Retrieve the relation with its scope and condition.",
        ],
        [
          "Execution Error",
          "Energy sign, mass convention, unit, or level order is wrong.",
          "Label initial and final systems before calculating.",
        ],
        [
          "Decision / Selection Error",
          "Uses Bohr equations for a multi-electron atom or decay equations for a deterministic single event.",
          "Identify the model domain first.",
        ],
        [
          "Needs Review",
          "Nuclear mass data, emitted products, or X-ray model scope is ambiguous.",
          "Escalate the source data and setup for academic review.",
        ],
      ],
    },
    {
      id: "official-paper-handling",
      jump: true,
      slot: "practice",
      heading: "Official-paper handling",
      intro:
        "After academic review, official questions may be tagged by Rutherford scattering, Bohr levels, hydrogen spectrum, nuclear size, mass defect, binding, fission, fusion, Advanced decay, or Advanced X-rays.",
      columns: ["Handling rule", "Detail"],
      rows: [
        [
          "Chapter boundary",
          "Dual-nature-only questions stay with the Dual Nature of Matter page rather than this chapter.",
        ],
        [
          "What is published",
          "Source year and paper link only.",
        ],
        [
          "What is not published",
          "No counts, trends, or expected-question claims.",
        ],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Six signals cover most Atoms and Nuclei questions. Select the model and mass convention before any algebra.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        ["Scattering conclusion", "Rutherford geometry and electrostatic repulsion", "Head-on versus deflected trajectory"],
        ["Hydrogen-like level or radius", "Bohr scaling with Z and n", "Confirm a one-electron species"],
        ["Spectral line", "Difference of stationary energies", "Initial level is higher for emission"],
        ["Nuclear stability or energy release", "Mass defect and binding energy", "Atomic versus nuclear mass convention"],
        ["Remaining nuclei versus time", "Exponential decay", "Advanced scope and constant decay probability"],
        ["Fission or fusion energy", "Initial mass minus final mass", "Include every product and use consistent units"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "bohr-radius",
      expression: "r_n = a0 n^2 / Z",
      meaning: "Bohr-orbit radius for principal quantum number n and nuclear charge Z.",
      variables: [
        { symbol: "r_n", meaning: "orbit radius for level n", unit: "m" },
        { symbol: "a0", meaning: "Bohr radius constant", unit: "m" },
        { symbol: "n", meaning: "principal quantum number", unit: "dimensionless" },
        { symbol: "Z", meaning: "nuclear charge number", unit: "dimensionless" },
      ],
      useWhen: "Hydrogen-like, one-electron species treated with the Bohr model.",
      commonTrap: "Applying this to a general multi-electron atom.",
      accessibleText: "The orbit radius for level n equals the Bohr radius times n squared, divided by Z.",
    },
    {
      id: "bohr-energy",
      expression: "E_n = -13.6 Z^2 / n^2 electron-volt",
      meaning: "Bound-state energy in the hydrogen-like Bohr model.",
      variables: [
        { symbol: "E_n", meaning: "energy of level n", unit: "eV" },
        { symbol: "Z", meaning: "nuclear charge number", unit: "dimensionless" },
        { symbol: "n", meaning: "principal quantum number", unit: "dimensionless" },
      ],
      useWhen: "Same hydrogen-like Bohr model, with zero energy defined at a separated electron and ion.",
      commonTrap: "Dropping the negative bound-state sign.",
      accessibleText: "The energy of level n equals minus 13.6 times Z squared, divided by n squared, in electron-volts.",
    },
    {
      id: "photon-transition-energy",
      expression: "h nu = E_i - E_f",
      meaning: "Photon energy released in an emission transition.",
      variables: [
        { symbol: "h nu", meaning: "photon energy", unit: "J or eV" },
        { symbol: "E_i", meaning: "initial-level energy", unit: "J or eV" },
        { symbol: "E_f", meaning: "final-level energy", unit: "J or eV" },
      ],
      useWhen: "Emission requires the initial level to have higher energy than the final level.",
      commonTrap: "Subtracting level labels instead of energies.",
      accessibleText: "The photon energy equals the initial-level energy minus the final-level energy.",
    },
    {
      id: "rydberg-wavelength",
      expression: "1 / lambda = R Z^2 (1/n_f^2 - 1/n_i^2)",
      meaning: "Emission wavelength for a hydrogen-like transition.",
      variables: [
        { symbol: "lambda", meaning: "emitted wavelength", unit: "m" },
        { symbol: "R", meaning: "Rydberg constant", unit: "m^-1" },
        { symbol: "Z", meaning: "nuclear charge number", unit: "dimensionless" },
        { symbol: "n_i, n_f", meaning: "initial and final principal quantum numbers, with n_i greater than n_f", unit: "dimensionless" },
      ],
      useWhen: "Bohr-Rydberg model for a hydrogen-like emission line.",
      commonTrap: "Reversing n_i and n_f.",
      accessibleText: "One over the wavelength equals R times Z squared times the difference of one over n_f squared and one over n_i squared.",
    },
    {
      id: "nuclear-radius",
      expression: "R_N = R0 A^(1/3)",
      meaning: "Empirical nuclear-radius scaling with mass number.",
      variables: [
        { symbol: "R_N", meaning: "nuclear radius", unit: "m" },
        { symbol: "R0", meaning: "empirical constant", unit: "m" },
        { symbol: "A", meaning: "mass number", unit: "dimensionless" },
      ],
      useWhen: "Estimating nuclear radius from mass number.",
      commonTrap: "Treating it as an exact sharp boundary rather than an estimate.",
      accessibleText: "The nuclear radius equals R0 times A to the power one-third.",
    },
    {
      id: "mass-defect",
      expression: "Δm = sum of free-constituent masses minus mass of the bound system",
      meaning: "Mass defect between separated constituents and the bound nucleus or atom.",
      variables: [
        { symbol: "Δm", meaning: "mass defect", unit: "kg or u" },
      ],
      useWhen: "Use one consistent atomic or nuclear mass convention throughout.",
      commonTrap: "Mixing electron masses inconsistently between the two sides.",
      accessibleText: "Mass defect equals the sum of free constituent masses minus the mass of the bound system.",
    },
    {
      id: "binding-energy",
      expression: "B = Δm c^2",
      meaning: "Total binding energy of a nucleus or bound system.",
      variables: [
        { symbol: "B", meaning: "total binding energy", unit: "J or MeV" },
        { symbol: "Δm", meaning: "mass defect", unit: "kg or u" },
        { symbol: "c", meaning: "speed of light", unit: "m/s" },
      ],
      useWhen: "Same mass convention as the mass-defect calculation, complete system.",
      commonTrap: "Confusing total binding energy with binding energy per nucleon.",
      accessibleText: "Binding energy equals mass defect times the speed of light squared.",
    },
    {
      id: "decay-law",
      expression: "N = N0 e^(-lambda_d t)",
      meaning: "Remaining undecayed population in radioactive decay.",
      variables: [
        { symbol: "N", meaning: "remaining nuclei at time t", unit: "count" },
        { symbol: "N0", meaning: "initial nuclei count", unit: "count" },
        { symbol: "lambda_d", meaning: "decay constant", unit: "s^-1" },
        { symbol: "t", meaning: "elapsed time", unit: "s" },
      ],
      useWhen: "Advanced radioactive-decay model with a constant decay probability per nucleus.",
      commonTrap: "Confusing the decay constant with wavelength, which uses the same symbol elsewhere.",
      accessibleText: "The remaining count equals the initial count times e to the power negative lambda_d times t.",
    },
    {
      id: "half-life-mean-life",
      expression: "T half = ln(2) / lambda_d, tau = 1 / lambda_d",
      meaning: "Half-life and mean life for the same exponential-decay model.",
      variables: [
        { symbol: "T half", meaning: "half-life", unit: "s" },
        { symbol: "tau", meaning: "mean life", unit: "s" },
        { symbol: "lambda_d", meaning: "decay constant", unit: "s^-1" },
      ],
      useWhen: "Same exponential-decay model as the decay law.",
      commonTrap: "Setting half-life equal to mean life; they differ by a factor of ln(2).",
      accessibleText: "Half-life equals natural log of 2 divided by the decay constant; mean life equals one divided by the decay constant.",
    },
    {
      id: "reaction-q-value",
      expression: "Q = (m_i - m_f) c^2",
      meaning: "Energy released when initial rest mass exceeds final rest mass in a nuclear reaction.",
      variables: [
        { symbol: "Q", meaning: "energy released", unit: "J or MeV" },
        { symbol: "m_i", meaning: "total initial rest mass", unit: "kg or u" },
        { symbol: "m_f", meaning: "total final rest mass", unit: "kg or u" },
        { symbol: "c", meaning: "speed of light", unit: "m/s" },
      ],
      useWhen: "Closed reaction accounting with consistent mass data for every product.",
      commonTrap: "Omitting a product or mixing units between the two mass totals.",
      accessibleText: "The energy released equals the initial rest mass minus the final rest mass, times the speed of light squared.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "hydrogen-transition-3-to-2",
      prompt: "Find the photon energy emitted when a hydrogen atom's electron falls from n = 3 to n = 2.",
      answer: "The emitted photon energy is approximately 1.89 electron-volts.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "For hydrogen, Z = 1, so E_n = -13.6 / n^2 electron-volts." }],
            [{ text: "E_3 = -13.6 / 9 electron-volts and E_2 = -13.6 / 4 electron-volts." }],
            [{ text: "Photon energy equals E_3 minus E_2, which is 13.6 times (1/4 minus 1/9)." }],
            [{ text: "This evaluates to approximately 1.89 electron-volts." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The energy is positive because the atom loses energy and the photon carries away the difference. The calculation uses energy values, not the difference of the level labels 3 and 2. Wavelength can then be found from photon energy equals h c over lambda, using consistent units.",
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
      id: "rutherford-as-complete-model",
      mistake: "Treating Rutherford's model as a complete explanation of atomic stability and line spectra",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Rutherford's model localizes the nucleus but does not by itself explain discrete stable spectra." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use the Bohr model for quantized energy levels and transitions instead." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "bohr-on-multielectron",
      mistake: "Applying hydrogen-like Bohr formulas to a multi-electron atom",
      why: [
        { type: "paragraph", children: [{ text: "The Bohr formulas assume a single electron orbiting a point nuclear charge." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Confirm the species is hydrogen-like and one-electron before using r_n or E_n." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "reversed-levels",
      mistake: "Reversing initial and final levels in an emission calculation",
      why: [
        { type: "paragraph", children: [{ text: "Emission requires the initial level to have higher energy than the final level." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Label initial and final energies explicitly before subtracting." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "mixed-mass-convention",
      mistake: "Mixing atomic masses with bare nuclear masses without handling electrons consistently",
      why: [
        { type: "paragraph", children: [{ text: "Atomic mass tables include electron mass; nuclear mass does not." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Pick one mass convention for the entire calculation and account for electrons explicitly." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "binding-per-nucleon-misread",
      mistake: "Interpreting binding energy per nucleon as the energy required to remove any chosen nucleon exactly",
      why: [
        { type: "paragraph", children: [{ text: "Binding energy per nucleon is an average, not the exact removal energy of a specific nucleon." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use it for average stability comparisons, not single-nucleon removal energy." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "decay-scope-error",
      mistake: "Assigning radioactive-decay law to Main when it is explicit Advanced syllabus scope",
      why: [
        { type: "paragraph", children: [{ text: "The decay law, decay constant, half-life and mean life are listed in the Advanced syllabus mapping used here." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Label decay questions as Advanced scope rather than assuming Main coverage." }] },
      ],
      errorType: "recall-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* PI v1.1 diagnosis (B13/B06) and official-paper handling (B32)       */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What did Rutherford scattering establish?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It established that positive charge and most atomic mass are concentrated in a very small nucleus, with most atomic volume relatively empty.",
            },
          ],
        },
      ],
    },
    {
      question: "Why are Bohr energies negative?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Zero is chosen for a separated electron and ion at rest, so a bound state has lower energy." },
          ],
        },
      ],
    },
    {
      question: "What is binding energy?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "It is the energy corresponding to the mass defect between separated constituents and the bound system." },
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
      label: "Dual Nature of Matter",
      url: "/jee/physics/dual-nature-of-matter",
      relation: "prerequisite",
      description: "Photon energy and quantization ideas that carry directly into spectral transitions.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Coulomb attraction underlying scattering geometry and orbital force balance.",
    },
    {
      label: "Modern Physics",
      url: "/jee/physics/modern-physics",
      relation: "related",
      description: "Umbrella page for relationships across modern-physics chapters; this page owns the teaching depth.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "related",
      description: "Shares wave-frequency reasoning used in spectral-line calculations.",
    },
    {
      label: "Semiconductors",
      url: "/jee/physics/semiconductors",
      relation: "forward",
      description: "Extends quantized-energy reasoning to band structure in solids.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "forward",
      description: "Extends radiation reasoning that also appears in nuclear gamma emission.",
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
      description: "Connect model selection with reviewed official problems, tagged only after academic review.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. Radioactive-decay law and X-ray treatment are labeled as Advanced scope because they are explicit there and not in this Main mapping. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: a JEE Physics educator experienced in atomic, nuclear, and model-based instruction.",
    "Academically reviewed by: Unassigned. Required expertise: atomic Physics, nuclear Physics, spectroscopy fundamentals, and radioactive decay, with a postgraduate degree in Physics, Nuclear Physics, Atomic Physics, or a closely related discipline, and documented JEE-scope familiarity.",
    "Last reviewed: to be recorded after completed academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus, NCERT Atoms and Nuclei, and official paper archives.",
    "Review scope required before indexation: Main and Advanced boundaries, Bohr-domain limits, spectral signs, mass conventions, radius and decay models, worked reasoning, cannibalization boundary with Modern Physics, links, metadata, and schema parity.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Atoms and Nuclei for JEE: Bohr, Binding, Decay",
    description:
      "Learn JEE atoms and nuclei through Rutherford evidence, Bohr levels, spectra, binding energy, fission, fusion, Advanced decay, and model traps.",
    ogTitle: "Atoms and Nuclei for JEE",
    ogDescription:
      "A model-aware guide to atomic levels, spectra, nuclear binding, reactions, and decay.",
  },
};

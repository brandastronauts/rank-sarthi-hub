import type { ChapterContent } from "@/content/types";

/**
 * Modern Physics — T06 production content (approved package, 7 September 2026).
 *
 * Data only, mapped onto the frozen ChapterContent contract.
 *
 * Evidence discipline:
 * - No weightage, frequency or trend claim is asserted; pyqs/trends/priority
 *   are omitted so those blocks do not render.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" pending academic review.
 */
export const jeePhysicsModernPhysics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Modern Physics",
  slug: "modern-physics",
  url: "/jee/physics/modern-physics",
  canonicalIntent:
    "Connect each Modern Physics relation to the evidence and model that justifies it, choose the correct model for an observation, and diagnose why a question was answered incorrectly.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their model conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Modern Physics explains observations that classical models cannot describe completely. Its central chain is evidence, model, conservation law, prediction. Photoelectric data leads to photon energy, matter-wave evidence leads to de Broglie wavelength, line spectra lead to quantised atomic levels, and nuclear mass differences lead to binding energy.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This is an umbrella guide. Use it to choose the right model and connect the chapter. Use the focused pages for deeper treatment of ",
        },
        { text: "Dual Nature of Matter", href: "/jee/physics/dual-nature-of-matter" },
        { text: ", " },
        { text: "Atoms and Nuclei", href: "/jee/physics/atoms-and-nuclei" },
        { text: " and " },
        { text: "Semiconductors", href: "/jee/physics/semiconductors" },
        {
          text: ". Electronic devices are explicit in JEE Main, but are not listed in the JEE Advanced 2026 Modern Physics section.",
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
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Energy conservation and electron-volt conversion before photon and atomic-energy relations.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Frequency, wavelength and momentum before matter-wave and photon relations.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Electric potential energy for an accelerated charged particle.",
    },
  ],

  syllabusMapping: {
    unit: "Modern Physics (Dual Nature of Matter and Radiation, Atoms and Nuclei)",
    topics: [
      "Dual nature of radiation and matter",
      "Photoelectric effect and Einstein's photoelectric equation",
      "De Broglie relation for matter waves",
      "Rutherford's model of the atom",
      "Bohr model and the hydrogen spectrum",
      "Nuclear composition and nuclear size",
      "Mass defect and binding energy",
      "Nuclear fission and fusion",
      "Alpha, beta and gamma radiation (JEE Advanced)",
      "Radioactive decay law, half-life and mean life (JEE Advanced)",
      "Hydrogen-like Bohr model (JEE Advanced)",
      "Characteristic and continuous X-rays, Moseley's law (JEE Advanced)",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture                                                */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "quanta",
      title: "1. Radiation exchanges energy in quanta",
      keyIdea: "Frequency sets photon energy; intensity sets photon count per unit time.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In the photoelectric effect, one photon transfers energy to one electron in the elementary Einstein model. Frequency controls photon energy. Intensity controls the number of incident photons per unit time when frequency is fixed.",
            },
          ],
        },
      ],
    },
    {
      id: "matter-wavelength",
      title: "2. Matter has a wavelength",
      keyIdea: "De Broglie wavelength does not mean macroscopic objects look wave-like.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The de Broglie relation connects momentum with wavelength. It does not mean a macroscopic object becomes visibly wave-like. Observability depends on the scale of the wavelength and the experiment.",
            },
          ],
        },
      ],
    },
    {
      id: "discrete-energies",
      title: "3. Atomic energies are discrete",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Rutherford scattering establishes a compact positive nucleus but does not produce stable quantised orbits. The Bohr model supplies allowed energy levels for hydrogen or hydrogen-like systems within its stated scope.",
            },
          ],
        },
      ],
    },
    {
      id: "spectra",
      title: "4. Spectra measure energy differences",
      keyIdea: "Identify the level transition first, then select a wavelength relation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An emitted or absorbed photon connects two levels, so photon energy h·nu equals the magnitude of the difference between the initial and final level energies. Use the level transition first, then select a wavelength relation.",
            },
          ],
        },
      ],
    },
    {
      id: "binding-energy",
      title: "5. Nuclear mass stores binding information",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Compare the separated-nucleon mass with the nuclear mass. The mass defect corresponds to binding energy through E = Δm c squared.",
            },
          ],
        },
      ],
    },
    {
      id: "decay-statistical",
      title: "6. Radioactive decay is statistical",
      keyIdea: "Half-life is a property of the decay law, not a schedule for any one nucleus.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The decay constant describes probability per unit time for a nucleus. Half-life is a property of the decay law, not the time taken by every nucleus to decay. This detail is explicit in the Advanced scope.",
            },
          ],
        },
      ],
    },
    {
      id: "model-selector",
      title: "7. Select the model by the observation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Match the observation to its first model: stopping potential or threshold frequency to the Einstein photoelectric equation, wavelength of an accelerated electron to energy conservation plus the de Broglie relation, an atomic emission or absorption line to an energy-level difference, stability across nuclei to binding energy per nucleon, remaining undecayed nuclei versus time to the exponential decay law, and characteristic X-ray frequency versus atomic number to Moseley's law (Advanced scope).",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables                                                   */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "official-scope",
      jump: true,
      slot: "scope",
      heading: "Official scope: JEE Main 2026 and JEE Advanced 2026",
      intro:
        "Both examinations include the photoelectric effect, de Broglie waves, atomic models and nuclear energy ideas. This is a scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Area", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Dual nature",
          "Dual nature, photoelectric effect and the Einstein equation are explicitly listed.",
          "Photoelectric effect and de Broglie waves are explicitly listed.",
        ],
        [
          "Atomic model",
          "Rutherford and Bohr models and the hydrogen spectrum are explicitly listed.",
          "Hydrogen-like Bohr model is explicitly listed.",
        ],
        [
          "Nucleus and energy",
          "Nuclear composition and size, mass defect, binding energy, fission and fusion are explicitly listed.",
          "Atomic nucleus, binding energy, fission and fusion are explicitly listed.",
        ],
        [
          "Decay",
          "Not explicitly listed in the same terms.",
          "Alpha, beta and gamma radiation, decay law, half-life and mean life are explicitly listed.",
        ],
        [
          "X-rays",
          "Not explicitly listed in the same terms.",
          "Characteristic and continuous X-rays and Moseley's law are explicitly listed.",
        ],
      ],
      note:
        "No weightage, frequency or expected-question claim is made. Electronic devices are explicit in JEE Main but are not listed in the JEE Advanced 2026 Modern Physics section.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisite check",
      columns: ["Prerequisite", "Be ready to use", "If weak, revise"],
      rows: [
        [
          "Energy conservation",
          "Convert between joules and electron-volts confidently.",
          "Work, Energy and Power",
        ],
        [
          "Accelerated-charge potential energy",
          "Relate an accelerating potential difference to kinetic energy gained.",
          "Electrostatics",
        ],
        [
          "Wave quantities",
          "Move between frequency, wavelength and momentum.",
          "Waves",
        ],
        [
          "Exponential graphs and logarithms",
          "Read and manipulate an exponential decay curve.",
          "General mathematics revision",
        ],
        [
          "Sign-safe energy diagrams",
          "Interpret negative energy-level values without confusion.",
          "Revisit bound-state energy conventions before this chapter",
        ],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: evidence to model to prediction",
      intro: "Choose the first model from the observation before any calculation.",
      columns: ["Observation", "First model"],
      rows: [
        ["Stopping potential or threshold frequency", "Einstein photoelectric equation"],
        ["Wavelength of an accelerated electron", "Energy conservation plus de Broglie relation"],
        ["Atomic emission or absorption line", "Energy-level difference"],
        ["Stability across nuclei", "Binding energy per nucleon"],
        ["Remaining undecayed nuclei versus time", "Exponential decay law"],
        ["Characteristic X-ray frequency versus atomic number", "Moseley's law, Advanced scope"],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis for Modern Physics",
      intro: "Use the smallest Preparation Intelligence v1.1 label supported by the observed working.",
      columns: ["Primary label", "Use when the first failure is"],
      rows: [
        [
          "Knowledge Gap",
          "Photon, matter-wave, atomic-level, nuclear or decay meaning is not understood.",
        ],
        ["Recall Gap", "The correct relation or constant was not retrieved."],
        [
          "Execution Error",
          "Unit conversion, exponent, transition sign or arithmetic failed after a valid model.",
        ],
        [
          "Decision / Selection Error",
          "The wrong experiment, model, energy relation or graph was selected.",
        ],
        ["Needs Review", "The solution evidence cannot support a reliable primary tag."],
      ],
    },
    {
      id: "official-paper-practice",
      jump: true,
      slot: "practice",
      heading: "Official-paper practice",
      columns: ["Step", "Action"],
      rows: [
        ["Source", "Use official JEE Main and JEE Advanced papers only."],
        [
          "Tag",
          "Tag each selected item by observed phenomenon, governing model, necessary conservation law and first failed decision.",
        ],
        [
          "Boundary",
          "Do not infer chapter frequency, weightage or trend from a partial or unreviewed sample.",
        ],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula records                                                     */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "photon-energy",
      expression: "E_photon = h nu = h c / lambda",
      meaning: "Energy of a single photon of frequency nu (or wavelength lambda).",
      variables: [
        { symbol: "E", meaning: "photon energy", unit: "J or eV" },
        { symbol: "h", meaning: "Planck's constant", unit: "J s" },
        { symbol: "nu", meaning: "frequency", unit: "Hz" },
        { symbol: "lambda", meaning: "wavelength", unit: "m" },
      ],
      useWhen: "You need the energy carried by a single photon of known frequency or wavelength.",
      commonTrap: "Mixing photon intensity with photon energy; intensity is about photon count, not energy per photon.",
      accessibleText:
        "Photon energy equals h times nu, which equals h c over lambda.",
    },
    {
      id: "photoelectric-equation",
      expression: "K_max = h nu - phi = e V_0",
      meaning: "Maximum kinetic energy of an emitted photoelectron above the threshold frequency.",
      variables: [
        { symbol: "K_max", meaning: "maximum photoelectron kinetic energy", unit: "J or eV" },
        { symbol: "phi", meaning: "work function of the metal", unit: "J or eV" },
        { symbol: "V_0", meaning: "stopping potential", unit: "V" },
      ],
      useWhen: "Photoelectric emission occurs above the threshold frequency nu_0 = phi / h.",
      commonTrap: "Applying it below the threshold frequency, where no emission occurs.",
      accessibleText:
        "Maximum kinetic energy equals h nu minus the work function phi, and also equals e times the stopping potential V nought.",
    },
    {
      id: "de-broglie",
      expression: "lambda = h / p",
      meaning: "Wavelength associated with a particle of momentum p.",
      variables: [
        { symbol: "lambda", meaning: "de Broglie wavelength", unit: "m" },
        { symbol: "p", meaning: "particle momentum", unit: "kg m/s" },
      ],
      useWhen: "The particle's momentum is known or can be found first.",
      commonTrap: "Replacing momentum by m v when relativistic treatment would be required.",
      accessibleText: "Wavelength equals h divided by momentum p.",
    },
    {
      id: "electron-accelerated-wavelength",
      expression: "lambda = h / sqrt(2 m e V)",
      meaning: "De Broglie wavelength of a non-relativistic electron accelerated through potential difference V.",
      variables: [
        { symbol: "m", meaning: "electron mass", unit: "kg" },
        { symbol: "e", meaning: "electron charge magnitude", unit: "C" },
        { symbol: "V", meaning: "accelerating potential difference", unit: "V" },
      ],
      useWhen: "The electron starts effectively from rest and e V = p squared / (2 m) holds.",
      commonTrap: "Using it without its stated non-relativistic condition.",
      accessibleText:
        "Wavelength equals h divided by the square root of two m e V.",
    },
    {
      id: "bohr-energy",
      expression: "E_n = -13.6 Z^2 / n^2 eV",
      meaning: "Bohr energy of a hydrogen-like ion in level n.",
      variables: [
        { symbol: "Z", meaning: "atomic number of the one-electron ion (dimensionless)" },
        { symbol: "n", meaning: "principal quantum number (dimensionless)" },
        { symbol: "E_n", meaning: "energy of level n", unit: "eV" },
      ],
      useWhen: "The system is a one-electron atom or ion described by the Bohr model.",
      commonTrap: "Using it for multi-electron atoms, where it does not apply.",
      accessibleText: "Energy of level n equals minus 13.6 Z squared over n squared electron-volts.",
    },
    {
      id: "transition-energy",
      expression: "h nu = |E_i - E_f|",
      meaning: "Photon energy for a transition between two allowed atomic levels.",
      variables: [
        { symbol: "E_i", meaning: "initial-level energy", unit: "J or eV" },
        { symbol: "E_f", meaning: "final-level energy", unit: "J or eV" },
      ],
      useWhen: "A photon is emitted or absorbed during a transition between allowed levels.",
      commonTrap: "Losing track of whether the process is emission or absorption.",
      accessibleText:
        "Photon energy h nu equals the magnitude of the difference between the initial and final level energies.",
    },
    {
      id: "binding-energy",
      expression: "E_b = Delta m c^2",
      meaning: "Binding energy from the mass defect of a nucleus.",
      variables: [
        { symbol: "Delta m", meaning: "mass defect", unit: "kg" },
        { symbol: "c", meaning: "speed of light", unit: "m/s" },
        { symbol: "E_b", meaning: "binding energy", unit: "J" },
      ],
      useWhen: "Nuclear mass data are consistent and available.",
      commonTrap: "Mixing atomic and nuclear masses without electron accounting.",
      accessibleText: "Binding energy equals the mass defect times c squared.",
    },
    {
      id: "decay-law",
      expression: "N = N_0 e^(-lambda_d t)",
      meaning: "Number of undecayed nuclei remaining after time t.",
      variables: [
        { symbol: "N_0", meaning: "initial number of nuclei" },
        { symbol: "lambda_d", meaning: "decay constant", unit: "s^-1" },
        { symbol: "t", meaning: "elapsed time", unit: "s" },
      ],
      useWhen: "Independent radioactive decay is being modelled (Advanced scope).",
      commonTrap: "Treating decay as linear instead of exponential.",
      accessibleText:
        "The number of undecayed nuclei N equals N nought times e to the power minus lambda-d t.",
    },
    {
      id: "half-life-mean-life",
      expression: "T_1/2 = ln(2) / lambda_d ,  tau = 1 / lambda_d",
      meaning: "Half-life and mean life derived from the decay constant.",
      variables: [
        { symbol: "T_1/2", meaning: "half-life", unit: "s" },
        { symbol: "tau", meaning: "mean life", unit: "s" },
      ],
      useWhen: "Applying the exponential decay law.",
      commonTrap: "Confusing mean life with half-life; they are related but not equal.",
      accessibleText:
        "Half-life equals natural log of two over lambda-d; mean life equals one over lambda-d.",
    },
    {
      id: "moseleys-law",
      expression: "sqrt(nu) = a (Z - b)",
      meaning: "Moseley form relating characteristic X-ray frequency to atomic number for a series.",
      variables: [
        { symbol: "nu", meaning: "characteristic X-ray frequency", unit: "Hz" },
        { symbol: "a", meaning: "series constant" },
        { symbol: "b", meaning: "screening constant" },
        { symbol: "Z", meaning: "atomic number (dimensionless)" },
      ],
      useWhen: "Comparing the same characteristic X-ray series across elements (Advanced scope).",
      commonTrap: "Treating a and b as universal constants without checking the series context.",
      accessibleText:
        "The square root of nu equals a times the quantity Z minus b.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning                                                    */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-photoelectric-intensity",
      prompt:
        "Worked reasoning: what changes in the photoelectric effect? Light above the threshold frequency strikes a metal. Frequency is held fixed while intensity increases.",
      answer:
        "Stopping potential and maximum kinetic energy stay unchanged; only the saturation photocurrent can increase, because more photons arrive per unit time.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Each photon still has energy h nu, so the maximum kinetic energy remains h nu minus phi." }],
            [{ text: "The stopping potential therefore remains unchanged in the ideal model." }],
            [{ text: "Greater intensity means more photons arrive per unit time." }],
            [{ text: "More electrons can be emitted per unit time, so the saturation photocurrent can increase." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "If frequency rises at fixed intensity and remains above threshold, the maximum kinetic energy and stopping potential rise instead. Keeping these two experiments separate prevents a common model error.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes                                                     */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "intensity-vs-energy",
      mistake: "Saying intensity raises photoelectron maximum energy",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Frequency sets energy per photon in the elementary model, not intensity." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Separate the frequency experiment from the intensity experiment before answering." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "rutherford-for-spectra",
      mistake: "Using the Rutherford model to calculate line spectra",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Rutherford scattering does not produce stable quantised orbits." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use quantised energy levels from the Bohr model instead." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "negative-energy-sign",
      mistake: "Ignoring the negative sign of bound-state energy",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Zero energy is the separated-electron reference; a bound electron has negative energy." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep the reference state explicit before comparing energies." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "binding-energy-vs-per-nucleon",
      mistake: "Using binding energy instead of binding energy per nucleon when comparing stability",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Total binding energy grows with nucleon count and does not directly indicate stability." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Match the quantity to the question: use binding energy per nucleon for stability comparisons." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "half-life-individual",
      mistake: "Treating half-life as an individual nucleus's scheduled lifetime",
      why: [
        { type: "paragraph", children: [{ text: "Decay is statistical; half-life describes a population, not a single nucleus." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Reframe half-life as a property of the decay law applied to many nuclei." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "semiconductors-in-advanced",
      mistake: "Including semiconductors in Advanced scope by association",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Electronic devices are explicit in JEE Main but are not listed in the JEE Advanced 2026 Modern Physics section." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep the official Main and Advanced lists separate rather than merging coaching outlines." }] },
      ],
      errorType: "decision-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs                                                                */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is Modern Physics in JEE?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is the connected study of photon behaviour, matter waves, atomic energy levels, nuclear structure and energy, with additional decay and X-ray topics in the Advanced syllabus.",
            },
          ],
        },
      ],
    },
    {
      question: "Does intensity change stopping potential?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "At fixed above-threshold frequency in the elementary photoelectric model, intensity changes the number of emitted electrons, not their maximum kinetic energy.",
            },
          ],
        },
      ],
    },
    {
      question: "What does negative atomic energy mean?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "It means the electron is bound relative to the zero-energy separated state." }],
        },
      ],
    },
    {
      question: "Is radioactivity explicit in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The Main Atoms and Nuclei unit lists nuclear composition, mass-energy, binding, fission and fusion, while the Advanced syllabus explicitly lists alpha, beta, gamma radiation and the radioactive-decay law.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Related learning path                                               */
  /* ------------------------------------------------------------------ */
  relatedChapters: [
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Energy conservation and electron-volt conversion before photon and atomic-energy relations.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Frequency, wavelength and momentum before matter-wave and photon relations.",
    },
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Electric potential energy for an accelerated charged particle.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "related",
      description: "Connect radiation with reviewed experimental and official-paper evidence.",
    },
    {
      label: "Dual Nature of Matter",
      url: "/jee/physics/dual-nature-of-matter",
      relation: "forward",
      description: "Deeper treatment of photon and matter-wave evidence beyond this umbrella map.",
    },
    {
      label: "Atoms and Nuclei",
      url: "/jee/physics/atoms-and-nuclei",
      relation: "forward",
      description: "Deeper treatment of atomic models, nuclear structure, binding energy and decay.",
    },
    {
      label: "Semiconductors",
      url: "/jee/physics/semiconductors",
      relation: "forward",
      description: "Deeper treatment of electronic devices, explicit in JEE Main scope.",
    },
  ],
  links: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to the complete Physics subject map.",
    },
    {
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Official Physics syllabus mapping.",
    },
    {
      label: "Previous Year Papers",
      url: "/jee/previous-year-papers",
      relation: "related",
      description: "Official-paper practice hub.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Provenance                                                          */
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
    "Author: a JEE Physics educator or academic content specialist experienced in quantum, atomic and nuclear Physics.",
    "Academic reviewer: postgraduate qualification in Physics or equivalent research or engineering qualification, with documented Modern Physics teaching and assessment experience, covering the photoelectric effect, matter waves, Bohr model limits, spectra, nuclear binding, radioactive decay, X-rays and JEE scope distinctions.",
    "Independent checker: verifies official scope, umbrella-to-child boundaries, unit conventions, model conditions, radioactive-decay and X-ray distinctions, worked reasoning and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "7 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Modern Physics for JEE: Concepts, Formulas and Models",
    description:
      "Connect photoelectric effect, de Broglie waves, atomic levels, nuclei and decay for JEE Main and Advanced with formulas, conditions and mistakes.",
    ogTitle: "Modern Physics for JEE, Built Around Evidence",
    ogDescription:
      "Choose the right quantum, atomic or nuclear model with official scope, condition-aware formulas, worked reasoning and learning links.",
  },
};

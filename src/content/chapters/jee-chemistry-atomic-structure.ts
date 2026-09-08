import type { ChapterContent } from "@/content/types";

/**
 * Atomic Structure — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, or PYQ-count records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - This chapter owns one-electron states and electron filling. Chemical
 *   Bonding owns molecular orbital formation, Periodic Table owns property
 *   trends, and d- and f-Block Elements own block-specific configuration
 *   consequences, per the frozen cannibalization boundary.
 */
export const jeeChemistryAtomicStructure: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Atomic Structure",
  slug: "atomic-structure",
  url: "/jee/chemistry/atomic-structure",
  canonicalIntent:
    "Connect atomic spectra and wave-particle evidence to quantum numbers, orbital probability, and defensible electron configurations.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every relation carries its species limit",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Atomic Structure moves from experimental evidence to progressively stronger models. The Bohr model correctly organizes hydrogen-like energy levels but does not describe general multi-electron atoms. Quantum mechanics replaces definite electron paths with orbitals, which are states represented by wave functions and interpreted through probability density.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct solution identifies which model applies to the given species, uses the matching relation with its stated limit, and fills electrons using Aufbau, Pauli and Hund rules checked against known ground-state configuration evidence.",
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
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Particle and molar scales, and scientific notation, are needed before quantitative atomic relations.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Electron configuration outcomes from this chapter feed directly into periodic trend reasoning.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for the Chemistry chapter set.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Exam-level official Chemistry scope.",
    },
  ],

  syllabusMapping: {
    unit: "Atomic Structure",
    topics: [
      "Electromagnetic radiation and the photoelectric effect",
      "Hydrogen spectrum",
      "Bohr model: energy and radius relations, and limitations",
      "de Broglie relation",
      "Heisenberg uncertainty principle",
      "Elementary quantum mechanics and atomic orbitals as one-electron wave functions",
      "Radial variation for 1s and 2s orbitals",
      "Quantum numbers",
      "Shapes of s, p and d orbitals",
      "Electron spin",
      "Aufbau, Pauli exclusion and Hund's rule",
      "Electronic configurations and half-filled or fully filled subshell stability",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "radiation-evidence",
      title: "1. Radiation evidence: frequency, wavelength and photon energy",
      keyIdea: "Electromagnetic radiation is described by frequency and wavelength; photons carry quantized energy.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electromagnetic radiation is described by its frequency and wavelength, related through the speed of light. The photoelectric effect shows that light also behaves as discrete photons, each carrying energy proportional to frequency.",
            },
          ],
        },
      ],
    },
    {
      id: "hydrogen-spectrum",
      title: "2. Hydrogen spectrum: discrete lines imply discrete energy differences",
      keyIdea: "Discrete spectral lines are evidence for quantized atomic energy levels.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The hydrogen emission and absorption spectrum shows discrete lines rather than a continuous band. This is direct evidence that hydrogen atom energy levels are quantized rather than continuous.",
            },
          ],
        },
      ],
    },
    {
      id: "bohr-model-limits",
      title: "3. Bohr model: quantized radii and energies, with a stated limit",
      keyIdea: "The Bohr model applies to hydrogen and hydrogen-like one-electron species only.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The Bohr model assigns quantized radii and energies to hydrogen-like one-electron species and successfully explains the hydrogen spectrum. It does not correctly describe general multi-electron atoms, and this limitation must be stated whenever the model is applied.",
            },
          ],
        },
      ],
    },
    {
      id: "matter-waves-uncertainty",
      title: "4. Matter waves and uncertainty undermine a classical orbit picture",
      keyIdea: "Electron wave behaviour and the position-momentum limit rule out a definite trajectory.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The de Broglie relation assigns a wavelength to matter, including electrons. The Heisenberg uncertainty principle sets a fundamental limit on knowing position and momentum simultaneously. Together these undermine the idea of an electron following a definite classical trajectory.",
            },
          ],
        },
      ],
    },
    {
      id: "quantum-state-labels",
      title: "5. Quantum numbers label the allowed electron state",
      keyIdea: "n, l, m_l and m_s together specify shell, subshell shape, orientation and spin.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The principal, azimuthal, magnetic and spin quantum numbers together label an allowed electron state: shell size and energy, subshell shape, orbital orientation, and electron spin direction.",
            },
          ],
        },
      ],
    },
    {
      id: "orbital-probability",
      title: "6. An orbital is a probability state, not a path",
      keyIdea: "The squared wave function relates to probability density, not a definite orbit.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An atomic orbital is a one-electron wave function. Its squared magnitude relates to the probability density of finding the electron in a region of space. It is not a circular or elliptical path as in the Bohr picture.",
            },
          ],
        },
      ],
    },
    {
      id: "configuration-rules",
      title: "7. Fill orbitals with Aufbau, Pauli and Hund rules, then check evidence",
      keyIdea: "A diagonal filling mnemonic is a starting guide, not a substitute for known configuration evidence.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electron filling follows the Aufbau ordering, Pauli exclusion principle, and Hund's rule of maximum multiplicity. Known ground-state configuration evidence, including the extra stability of half-filled and fully filled subshells, should be checked rather than treating a diagonal mnemonic as the final authority.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is the chapter about?",
          "How atomic spectra and wave-particle evidence lead to quantum numbers, orbital probability density, and defensible electron configurations, moving from the limited Bohr model to the quantum-mechanical picture.",
        ],
        [
          "What is the central method choice?",
          "Identify the species and requested observable, choose the model that applies within its stated limit, and check any configuration against known ground-state evidence rather than a mnemonic alone.",
        ],
        [
          "Where do most mistakes begin?",
          "Calling an orbital a path, applying hydrogen-like Bohr formulas to multi-electron atoms, reversing energy levels in a transition, and treating uncertainty as measurement error.",
        ],
        [
          "What should come before Atomic Structure?",
          "Mole concept for particle and molar scales, plus scientific notation, logarithms and basic wavelength-frequency relations.",
        ],
        [
          "What comes after it?",
          "Periodic Table builds property trends on these configurations; Chemical Bonding extends single-atom orbitals into molecular orbital formation; d- and f-Block Elements apply block-specific configuration consequences.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Atomic Structure",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Bohr model, hydrogen spectrum, de Broglie, uncertainty",
          "Explicitly listed, including energy and radius relations and limitations.",
          "Explicitly listed as Bohr model, hydrogen spectrum, wave-particle duality and de Broglie hypothesis, and uncertainty principle.",
          "State the one-electron species limit whenever a Bohr relation is used.",
        ],
        [
          "Radiation and photoelectric effect",
          "Electromagnetic radiation and photoelectric effect are explicitly listed.",
          "Not stated as a separate line item.",
          "Treat radiation and photon energy as the evidence base leading into the hydrogen spectrum.",
        ],
        [
          "Quantum numbers, orbital shapes, orbital filling rules",
          "Quantum numbers, s, p and d shapes, spin, Aufbau, Pauli and Hund rules, and configurations are explicitly listed, including half-filled and fully filled stability.",
          "A qualitative quantum picture of hydrogen, quantum numbers, wave function and probability-density plots only, plus s, p and d shapes, Aufbau, Pauli and Hund rules are explicitly listed.",
          "Advanced restricts treatment to a qualitative quantum picture; Main includes explicit radial-variation and configuration detail.",
        ],
        [
          "Radial variation for 1s and 2s",
          "Explicitly listed.",
          "Not stated as a separate line item beyond the qualitative probability-density scope.",
          "Confirm which examination's scope statement applies before going beyond qualitative radial behaviour.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Atomic Structure",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Scientific notation and logarithms",
          "Work comfortably with very small and very large numbers and logarithmic relations.",
          "Revise scientific notation and basic logarithm rules.",
        ],
        [
          "Wavelength, frequency and energy units",
          "Convert between wavelength, frequency and photon energy.",
          "Revise the relation between speed of light, frequency and wavelength.",
        ],
        [
          "Proportional reasoning",
          "Track how a quantity changes when another variable in a formula changes.",
          "Practise rearranging and reasoning through proportional relations.",
        ],
        [
          "Simple electrostatic attraction",
          "Explain why a nucleus attracts an electron and how nuclear charge affects binding.",
          "Revise Coulomb's law reasoning at a qualitative level.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Match the question signal to the correct first model before any algebra.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Hydrogen-like energy or radius", "Bohr relation", "One-electron species and correct nuclear charge Z"],
        ["Spectral line", "Energy difference and photon relation", "Emission or absorption and correct level order"],
        ["Matter wavelength", "de Broglie relation", "Use nonrelativistic momentum only if speeds are well below light speed"],
        ["Position-momentum limit", "Uncertainty principle", "Standard-deviation interpretation, not instrument error"],
        ["Allowed quantum numbers", "Range rules for n, l, m_l, m_s", "Orbital label versus electron label"],
        ["Electron configuration", "Aufbau, Pauli, Hund, then evidence check", "Confirm the atom or ion and its electron count"],
      ],
    },
  ],

  formulas: [
    {
      id: "wave-speed-relation",
      expression: "c = ν × λ",
      latex: "c=\\nu\\lambda",
      meaning: "Relation between the speed of electromagnetic radiation, its frequency and its wavelength.",
      variables: [
        { symbol: "c", meaning: "speed of light in vacuum", unit: "m s^-1" },
        { symbol: "ν", meaning: "frequency", unit: "s^-1" },
        { symbol: "λ", meaning: "wavelength", unit: "m" },
      ],
      units: "m s^-1, s^-1, m",
      useWhen: "The radiation travels in vacuum.",
      commonTrap: "Mixing wavelength units, such as nanometres and metres, without converting.",
      accessibleText: "Higher frequency means a shorter vacuum wavelength.",
    },
    {
      id: "photon-energy",
      expression: "E = h × ν = h × c / λ",
      latex: "E=h\\nu=hc/\\lambda",
      meaning: "Energy carried by a single photon of a given frequency or wavelength.",
      variables: [{ symbol: "h", meaning: "Planck constant", unit: "J s" }],
      units: "J",
      useWhen: "Referring to the energy of one photon of frequency ν.",
      commonTrap: "Using this photon energy directly as a molar energy without multiplying by the Avogadro constant.",
      accessibleText: "Each photon carries energy proportional to its frequency.",
    },
    {
      id: "photoelectric-kinetic-energy",
      expression: "K_max = h × ν - φ",
      latex: "K_{max}=h\\nu-\\phi",
      meaning: "Maximum kinetic energy of a photoelectron ejected by radiation above the material's threshold.",
      variables: [
        { symbol: "K_max", meaning: "maximum photoelectron kinetic energy", unit: "J" },
        { symbol: "φ", meaning: "work function of the material", unit: "J" },
      ],
      units: "J",
      useWhen: "Photon energy exceeds the material work function.",
      commonTrap: "Assuming increasing light intensity alone can cross the threshold frequency.",
      accessibleText: "Frequency, not intensity, controls whether photoelectrons are ejected and with how much energy.",
    },
    {
      id: "bohr-energy",
      expression: "E_n = -13.6 × Z^2 / n^2 eV",
      latex: "E_n=-13.6Z^2/n^2",
      meaning: "Bohr energy of a hydrogen-like one-electron species at principal quantum number n.",
      variables: [
        { symbol: "Z", meaning: "nuclear charge number" },
        { symbol: "n", meaning: "principal quantum number" },
      ],
      units: "eV",
      useWhen: "Hydrogen or a hydrogen-like one-electron species, within the nonrelativistic Bohr model.",
      commonTrap: "Using this formula directly for multi-electron atoms, where it does not apply.",
      accessibleText: "Greater nuclear charge binds the single electron more strongly at a given level.",
    },
    {
      id: "bohr-radius",
      expression: "r_n = a0 × n^2 / Z",
      latex: "r_n=a_0n^2/Z",
      meaning: "Bohr radius of a hydrogen-like one-electron orbit at level n.",
      variables: [
        { symbol: "a0", meaning: "Bohr radius constant", unit: "m" },
      ],
      units: "m",
      useWhen: "A one-electron species is described within the Bohr model.",
      commonTrap: "Omitting the nuclear charge Z when comparing radii across different one-electron species.",
      accessibleText: "Higher levels are larger; higher nuclear charge contracts the orbit radius.",
    },
    {
      id: "rydberg-wavenumber",
      expression: "1/λ = R × Z^2 × (1/n_f^2 - 1/n_i^2)",
      latex: "1/\\lambda=RZ^2(1/n_f^2-1/n_i^2)",
      meaning: "Emission wavenumber for a transition from a higher level n_i to a lower level n_f in a hydrogen-like species.",
      variables: [
        { symbol: "R", meaning: "Rydberg constant", unit: "m^-1" },
        { symbol: "n_i", meaning: "initial principal quantum number, with n_i greater than n_f" },
        { symbol: "n_f", meaning: "final principal quantum number" },
      ],
      units: "m^-1",
      useWhen: "A hydrogen-like species undergoes an electronic transition.",
      commonTrap: "Reversing the initial and final levels and reporting a negative wavelength.",
      accessibleText: "A spectral photon carries the energy gap between the initial and final levels.",
    },
    {
      id: "de-broglie-wavelength",
      expression: "λ = h / p",
      latex: "\\lambda=h/p",
      meaning: "Matter-wave wavelength associated with a particle of momentum p.",
      variables: [{ symbol: "p", meaning: "momentum of the particle", unit: "kg m s^-1" }],
      units: "m",
      useWhen: "Matter-wave behaviour is being considered; use the appropriate momentum expression for the given speed regime.",
      commonTrap: "Using p = m × v at relativistic speeds without the necessary correction.",
      accessibleText: "Greater momentum means a shorter matter-wave wavelength.",
    },
    {
      id: "uncertainty-principle",
      expression: "Δx × Δp_x ≥ ħ / 2",
      latex: "\\Delta x\\Delta p_x\\geq\\hbar/2",
      meaning: "Fundamental lower bound on the product of position and momentum uncertainties for conjugate variables.",
      variables: [
        { symbol: "Δx", meaning: "standard deviation in position", unit: "m" },
        { symbol: "Δp_x", meaning: "standard deviation in momentum", unit: "kg m s^-1" },
        { symbol: "ħ", meaning: "reduced Planck constant", unit: "J s" },
      ],
      units: "J s",
      useWhen: "Interpreting position and momentum as statistical standard deviations for conjugate variables.",
      commonTrap: "Describing the uncertainty principle as a limitation of measurement technique rather than a fundamental quantum limit.",
      accessibleText: "Quantum states cannot have arbitrarily sharp position and momentum at the same time.",
    },
    {
      id: "node-counts",
      expression: "Radial nodes = n - l - 1; Angular nodes = l",
      meaning: "Node counts for hydrogenic orbital forms in terms of quantum numbers.",
      variables: [
        { symbol: "n", meaning: "principal quantum number" },
        { symbol: "l", meaning: "azimuthal quantum number" },
      ],
      units: "Dimensionless",
      useWhen: "Standard hydrogenic quantum numbers are given for an orbital.",
      commonTrap: "Confusing radial probability density peaks with the nodes where the density is zero.",
      accessibleText: "Quantum numbers determine how many radial and angular nodes an orbital must have.",
    },
  ],

  workedExamples: [
    {
      id: "hydrogen-transition",
      prompt:
        "An electron in a hydrogen atom falls from n = 3 to n = 2. Describe the sign of the atomic energy change and the sign of the photon energy, and state which Rydberg-formula order is correct.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "E3 is less negative than E2, so the final state (n = 2) is more strongly bound than the initial state (n = 3)." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "The atom loses energy during the transition and emits one photon in the ideal transition model." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "The photon energy is E3 minus E2 in magnitude, a positive quantity, giving frequency (E3 - E2)/h and wavelength hc/(E3 - E2)." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Using the Rydberg form requires 1/n_f^2 minus 1/n_i^2, that is 1/2^2 minus 1/3^2, not the reverse order." },
          ],
        },
      ],
      answer:
        "The atom's energy decreases (becomes more negative) while the emitted photon carries positive energy equal in magnitude to that decrease; the Rydberg formula must use n_f = 2 and n_i = 3 in the stated order.",
      sourceRef: "ncert-chem-atomic-structure",
    },
  ],

  mistakes: [
    {
      id: "orbital-as-orbit",
      mistake: "Calling an orbital an electron orbit or trajectory.",
      why: [{ type: "paragraph", children: [{ text: "An orbital is a probability-based quantum state described by a wave function, not a defined path as in the Bohr model." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Describe an orbital through its wave function and probability density, never as a path." }] }],
      errorType: "knowledge-gap",
      sourceRefs: ["ncert-chem-atomic-structure"],
    },
    {
      id: "bohr-on-multielectron",
      mistake: "Applying hydrogen-like Bohr formulas directly to multi-electron atoms.",
      why: [{ type: "paragraph", children: [{ text: "The Bohr model is derived for one-electron species; multi-electron interactions are not captured by the same simple relation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the species is hydrogen or a hydrogen-like one-electron ion before using Bohr energy or radius relations." }] }],
      errorType: "decision-error",
      sourceRefs: ["ncert-chem-atomic-structure"],
    },
    {
      id: "reversed-levels",
      mistake: "Reversing initial and final levels in an emission calculation.",
      why: [{ type: "paragraph", children: [{ text: "Using the wrong order in the Rydberg formula produces an incorrect sign and an unphysical negative wavelength." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify which level is initial and which is final before substituting into the Rydberg formula." }] }],
      errorType: "execution-error",
      sourceRefs: ["ncert-chem-atomic-structure"],
    },
    {
      id: "uncertainty-as-error",
      mistake: "Treating uncertainty as experimental carelessness.",
      why: [{ type: "paragraph", children: [{ text: "The uncertainty principle is a fundamental quantum limit on conjugate variables, not a flaw in measurement technique." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Interpret Δx and Δp as standard deviations imposed by the quantum nature of the system." }] }],
      errorType: "knowledge-gap",
      sourceRefs: ["ncert-chem-atomic-structure"],
    },
    {
      id: "invalid-quantum-numbers",
      mistake: "Allowing l equal to n or the magnitude of m_l greater than l.",
      why: [{ type: "paragraph", children: [{ text: "The azimuthal quantum number l must be less than n, and m_l must range only between -l and +l." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the allowed ranges for l and m_l before accepting a quantum-number combination." }] }],
      errorType: "recall-gap",
      sourceRefs: ["ncert-chem-atomic-structure"],
    },
    {
      id: "pairing-before-hund",
      mistake: "Pairing electrons in degenerate orbitals before applying Hund's rule.",
      why: [{ type: "paragraph", children: [{ text: "Hund's rule requires each degenerate orbital to receive one electron with parallel spin before any pairing occurs." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Fill each orbital in a degenerate set singly before pairing any electrons." }] }],
      errorType: "execution-error",
      sourceRefs: ["ncert-chem-atomic-structure"],
    },
    {
      id: "mnemonic-without-check",
      mistake: "Using an Aufbau diagonal mnemonic without checking the atom or ion's supported configuration.",
      why: [{ type: "paragraph", children: [{ text: "Some atoms and ions show configuration exceptions linked to extra stability of half-filled or fully filled subshells that a simple diagonal mnemonic does not predict." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify unusual configurations against known ground-state evidence rather than relying on the mnemonic alone." }] }],
      errorType: "needs-review",
      sourceRefs: ["ncert-chem-atomic-structure"],
    },
  ],

  relatedChapters: [
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "forward",
      description: "Builds property trends directly on the electron configurations developed in this chapter.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "related",
      description: "Extends single-atom orbitals into molecular orbital formation, which this chapter does not cover.",
    },
    {
      label: "d- and f-Block Elements",
      url: "/jee/chemistry/d-and-f-block-elements",
      relation: "forward",
      description: "Applies block-specific configuration consequences built on this chapter's filling rules.",
    },
    {
      label: "Coordination Compounds",
      url: "/jee/chemistry/coordination-compounds",
      relation: "forward",
      description: "Uses d-orbital and configuration reasoning developed here for crystal-field treatment.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Particle and molar scale reasoning used throughout atomic-structure calculations.",
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
      label: "JEE syllabus: Chemistry",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Official Chemistry scope for Main and Advanced.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Chemistry subject hub.",
    },
  ],

  faqs: [
    {
      question: "What is an atomic orbital?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "It is a one-electron quantum state described by a wave function; its squared magnitude relates to probability density." },
          ],
        },
      ],
    },
    {
      question: "When is the Bohr energy formula valid?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "It applies to hydrogen and hydrogen-like one-electron species within the Bohr model." },
          ],
        },
      ],
    },
    {
      question: "What do the four quantum numbers describe?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "They label shell, subshell or orbital shape, orbital orientation, and electron spin state." },
          ],
        },
      ],
    },
    {
      question: "Does this page cover molecular orbital theory?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Molecular orbital formation and bonding are covered in Chemical Bonding; this chapter is limited to single-atom states." },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-chem-atomic-structure",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and model, relation and configuration treatment is tied to NCERT Chemistry Structure of Atom. Molecular-orbital questions are directed to Chemical Bonding. No chapter weightage, question frequency, trend or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Chemistry educator experienced in atomic models, quantum numbers, and electron configurations.",
    "Academic reviewer: postgraduate degree in Chemistry or Physics with documented quantum or spectroscopic expertise and current JEE-scope familiarity.",
    "Independent checker: a chemistry educator or subject editor who verifies species limits, energy signs, and configuration claims separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Atomic Structure for JEE: Bohr, Orbitals, Quantum Numbers",
    description:
      "Learn JEE atomic structure through spectra, Bohr limits, de Broglie waves, uncertainty, orbitals, quantum numbers, configurations, and traps. No invented weightage.",
    ogTitle: "Atomic Structure for JEE",
    ogDescription:
      "An evidence-to-quantum guide to spectra, orbitals, electron states, and configurations for JEE.",
  },
};

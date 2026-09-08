import type { ChapterContent } from "@/content/types";

/**
 * Chemical Bonding — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or expected-question claims are made.
 * - Official-paper archives are linked, not summarised into counts.
 * - Author/reviewer stay unassigned until academic review is recorded.
 * - contentStatus stays "draft".
 * - Scope check (verified against JEE Main 2026 and JEE Advanced 2026
 *   syllabus documents, 8 September 2026): Main names Kossel-Lewis
 *   approach, ionic and covalent bonding, lattice enthalpy, Fajan's rule,
 *   dipole moment, VSEPR, valence-bond theory, hybridisation with s, p, d
 *   orbitals, resonance, molecular-orbital theory with LCAO, bonding and
 *   antibonding orbitals, sigma and pi bonds, homonuclear diatomic
 *   configurations, bond order, bond length, bond energy, metallic and
 *   hydrogen bonding. Advanced names orbital overlap, hybridisation with
 *   s, p, d orbitals, MO diagrams for homonuclear diatomic species up to
 *   Ne2, hydrogen bonding, molecular polarity and dipole moment, and the
 *   VSEPR shapes listed in its own syllabus. A topic named only in Main is
 *   not relabeled as explicit Advanced scope on this page.
 */
export const jeeChemistryChemicalBonding: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Chemical Bonding",
  slug: "chemical-bonding",
  url: "/jee/chemistry/chemical-bonding",
  canonicalIntent:
    "Move from valence electrons and bond type to molecular geometry, polarity, orbital description, bond order and intermolecular behaviour, by choosing the model that actually answers the question.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Model-selector: Lewis, VSEPR, valence bond, molecular orbital",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Chemical bonding explains how valence electrons produce stable connections and three-dimensional structures. No single model answers every question. Lewis structures track electrons, VSEPR predicts electron-domain geometry, valence-bond and hybridisation models describe localized overlap, and molecular-orbital theory treats orbitals across the whole molecule.",
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
      label: "Atomic Structure",
      url: "/jee/chemistry/atomic-structure",
      relation: "prerequisite",
      description: "Valence-electron configuration and orbital filling are used before drawing bonding pictures.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Electronegativity patterns are needed for polarity, Fajan's rule and bond-type prediction.",
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
    unit: "Chemical Bonding and Molecular Structure",
    topics: [
      "Kossel-Lewis approach; ionic and covalent bonding",
      "Factors in ionic-bond formation and lattice enthalpy; Fajan's rule",
      "Electronegativity and dipole moment",
      "VSEPR shapes",
      "Valence-bond theory and hybridisation using s, p and d orbitals",
      "Resonance",
      "Molecular-orbital theory, LCAO, bonding and antibonding orbitals, sigma and pi bonds",
      "Homonuclear diatomic configurations, bond order, bond length and bond energy (up to Ne2 in JEE Advanced)",
      "Metallic bonding (JEE Main)",
      "Hydrogen bonding",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "count-valence-electrons",
      title: "1. Count valence electrons",
      keyIdea: "Include ionic charge in the electron count before drawing any structure.",
      body: [{ type: "paragraph", children: [{ text: "Every bonding analysis begins by counting total valence electrons, including any ionic charge on the species." }] }],
    },
    {
      id: "connect-atoms",
      title: "2. Connect atoms into a plausible skeleton",
      keyIdea: "Choose a skeleton and complete terminal octets where applicable.",
      body: [{ type: "paragraph", children: [{ text: "Build a plausible connectivity and complete terminal-atom octets where the bonding pattern allows it." }] }],
    },
    {
      id: "formal-charge-resonance",
      title: "3. Check formal charges and resonance",
      keyIdea: "Prefer chemically meaningful contributors while remembering the real species is not switching between drawings.",
      body: [{ type: "paragraph", children: [{ text: "Assign formal charges to each atom and identify resonance contributors. The molecule itself is a single delocalized hybrid, not an equilibrium between the drawn structures." }] }],
    },
    {
      id: "arrange-domains",
      title: "4. Arrange electron domains with VSEPR",
      keyIdea: "Count multiple bonds as one domain but recognise their stronger repulsion where relevant.",
      body: [{ type: "paragraph", children: [{ text: "Use VSEPR on the central atom's electron domains to predict geometry, treating a multiple bond as a single domain while accounting for its stronger repulsive effect where relevant." }] }],
    },
    {
      id: "describe-overlap",
      title: "5. Describe overlap with hybridisation or valence-bond language",
      keyIdea: "Use hybridisation only when it answers the requested localized geometry or sigma-pi framework.",
      body: [{ type: "paragraph", children: [{ text: "Hybridisation and valence-bond language describe localized overlap and the sigma-pi framework; reach for them only when that is what the question needs." }] }],
    },
    {
      id: "mo-theory-when-delocalized",
      title: "6. Use MO theory when electrons are delocalized across the diatomic species",
      keyIdea: "Fill orbitals using the correct energy ordering for the species under study.",
      body: [{ type: "paragraph", children: [{ text: "Molecular-orbital theory is required whenever electron behaviour (such as unpaired electrons or bond order) cannot be explained by a single localized Lewis structure." }] }],
    },
    {
      id: "test-the-model",
      title: "7. Test the model against the observable",
      keyIdea: "Compare geometry, bond order, magnetic behaviour, polarity and intermolecular interaction with the question.",
      body: [{ type: "paragraph", children: [{ text: "Confirm the chosen model actually predicts the observable asked about: geometry, bond order, magnetism, polarity, or intermolecular interaction." }] }],
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
          "How valence electrons produce ionic and covalent bonds, molecular shape, orbital descriptions and intermolecular behaviour.",
        ],
        [
          "What is the central method choice?",
          "Count valence electrons, connect atoms, check formal charge and resonance, arrange domains with VSEPR, describe overlap with hybridisation, and use molecular-orbital theory only when electrons are delocalized.",
        ],
        [
          "Where do most mistakes begin?",
          "Predicting shape from hybridisation alone, confusing electron-domain geometry with molecular geometry, and adding bond dipoles without vector direction.",
        ],
        [
          "What should come before Chemical Bonding?",
          "Atomic Structure for electron configuration and Periodic Table for electronegativity trends.",
        ],
        [
          "What comes after it?",
          "Coordination Compounds extends bonding into ligand-metal geometry, and Hydrocarbons and Organic Basics apply this structural reasoning to organic molecules.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Chemical Bonding",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Ionic bonding and lattice enthalpy",
          "Explicitly listed, including factors in ionic-bond formation, lattice enthalpy and Fajan's rule.",
          "Not stated as a separate line item in the Advanced document.",
          "Treat lattice enthalpy and Fajan's rule as Main-specific depth for now.",
        ],
        [
          "Molecular-orbital theory",
          "Broader MO features listed, including LCAO, bonding and antibonding orbitals and bond-order consequences.",
          "Explicitly limited to MO diagrams for homonuclear diatomic species up to Ne2.",
          "Do not extend the Advanced-scope MO treatment beyond homonuclear diatomics up to Ne2.",
        ],
        [
          "VSEPR shapes",
          "VSEPR shapes listed as part of the broader molecular-structure treatment.",
          "Specific VSEPR shapes listed in the official Advanced document.",
          "Check the exact shape list in the official Advanced syllabus before assuming full overlap with Main.",
        ],
        [
          "Hydrogen bonding and polarity",
          "Hydrogen bonding and dipole moment explicitly listed.",
          "Hydrogen bonding and molecular polarity/dipole moment explicitly listed.",
          "Both examinations expect polarity to be predicted from bond dipoles and geometry.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Chemical Bonding",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Valence-electron configuration",
          "Write configurations using Aufbau, Pauli and Hund rules.",
          "Revise Atomic Structure before continuing.",
        ],
        [
          "Periodic electronegativity trends",
          "Rank atoms by electronegativity across a period and down a group.",
          "Revise Periodic Table trends.",
        ],
        [
          "Formal charge calculation",
          "Compute formal charge for each atom in a Lewis structure.",
          "Practise formal charge on simple molecules and ions first.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model that answers the question",
      intro: "Match the question signal to the model that actually predicts the requested observable.",
      columns: ["Question signal", "Best first model", "Required check"],
      rows: [
        ["Connectivity and charge", "Lewis structure and formal charge", "Total valence-electron count"],
        ["Shape or bond angle", "VSEPR", "Bonding domains, lone pairs and multiple bonds"],
        ["Sigma and pi framework", "Orbital overlap and hybridisation", "Geometry and unhybridized orbitals"],
        ["Diatomic bond order or magnetism", "Molecular-orbital diagram", "Correct MO order and electron count"],
        ["Molecular polarity", "Bond dipoles plus vector geometry", "Polar bonds can cancel"],
        ["Ionic versus covalent character", "Energetics and polarization", "Ion charge, size, lattice and hydration context"],
      ],
    },
    {
      id: "conditional-records",
      jump: true,
      slot: "formulas",
      heading: "Conditional relation records",
      columns: ["Expression or rule", "Meaning and variables", "Units", "Conditions", "Common trap", "Student translation"],
      rows: [
        [
          "FC = V - N - B/2",
          "Formal charge from valence electrons V, nonbonding electrons N and bonding electrons B",
          "Elementary-charge units",
          "One stated Lewis contributor",
          "Treating formal charge as measured partial charge",
          "It is electron bookkeeping for a drawing",
        ],
        [
          "BO = (Nb - Na)/2",
          "MO bond order from bonding and antibonding electrons",
          "Dimensionless",
          "Valid MO occupancy for the stated species",
          "Counting nonbonding orbitals as antibonding",
          "More net bonding electrons increase bond order",
        ],
        [
          "mu(vector) = sum of mu_i(vector)",
          "Molecular dipole as vector sum of bond and lone-pair contributions",
          "C m, commonly D for molecular data",
          "Geometry and bond-polarity model known",
          "Adding dipole magnitudes as scalars",
          "Shape decides whether polar bonds cancel",
        ],
        [
          "Electron-domain repulsion",
          "Lone pairs generally occupy more space than bonding pairs in the basic VSEPR model",
          "Not applicable",
          "Main-group VSEPR use",
          "Treating ideal angles as exact experimental values",
          "Nonbonding electron density can compress bond angles",
        ],
        [
          "Hydrogen bonding",
          "Directional attraction involving suitable hydrogen donors and acceptors",
          "Not applicable",
          "Donor, acceptor, geometry and environment must permit it",
          "Calling every H-containing molecule hydrogen bonded",
          "The bonded atom and available lone pair matter",
        ],
      ],
    },
  ],

  workedExamples: [
    {
      id: "o2-paramagnetism",
      prompt: "Explain why O2 is paramagnetic using molecular-orbital theory.",
      steps: [
        { type: "paragraph", children: [{ text: "Count 16 total electrons, or 12 valence electrons for the valence MO diagram." }] },
        { type: "paragraph", children: [{ text: "Fill the molecular orbitals in the energy order appropriate to O2, obeying Pauli and Hund rules." }] },
        { type: "paragraph", children: [{ text: "Two electrons occupy the two degenerate pi-antibonding orbitals singly." }] },
        { type: "paragraph", children: [{ text: "The bond order is (8-4)/2 = 2 when the valence bonding and antibonding electrons are counted. The two unpaired electrons make O2 paramagnetic. Lewis theory can draw a double bond, but the MO model explains the observed unpaired electrons, which is why model selection matters." }] },
      ],
      answer: "O2 has two unpaired electrons in degenerate pi-antibonding orbitals, giving bond order 2 and paramagnetism.",
    },
  ],

  mistakes: [
    {
      id: "shape-from-hybridisation-alone",
      mistake: "Predicting molecular shape from hybridisation alone without counting lone pairs.",
      why: [{ type: "paragraph", children: [{ text: "Hybridisation describes orbital mixing, but the observed molecular shape also depends on how many domains are lone pairs versus bonding pairs." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use VSEPR electron-domain counting before naming the final molecular geometry." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "domain-vs-molecular-geometry",
      mistake: "Treating electron-domain geometry and molecular geometry as identical.",
      why: [{ type: "paragraph", children: [{ text: "Electron-domain geometry includes lone pairs; molecular geometry describes only the positions of bonded atoms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Name the electron-domain geometry first, then remove lone-pair positions to state the molecular geometry." }] }],
      errorType: "recall-gap",
    },
    {
      id: "dipole-as-scalar",
      mistake: "Adding bond dipoles without vector direction.",
      why: [{ type: "paragraph", children: [{ text: "Dipole moments are vectors; scalar addition ignores the geometry that can cause cancellation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Sum bond dipoles as vectors using the molecular geometry." }] }],
      errorType: "execution-error",
    },
    {
      id: "wrong-mo-order",
      mistake: "Filling the wrong MO order for the diatomic species.",
      why: [{ type: "paragraph", children: [{ text: "The energy ordering of sigma and pi molecular orbitals differs between species such as those before and after nitrogen in the homonuclear diatomic series." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the correct MO energy ordering for the specific species before filling electrons." }] }],
      errorType: "execution-error",
    },
    {
      id: "formal-charge-dismissal",
      mistake: "Assuming a higher formal charge contributor is always impossible rather than comparing the full resonance set.",
      why: [{ type: "paragraph", children: [{ text: "Formal charge minimization is a useful guide but not an absolute rule; the full resonance set and electronegativity must still be compared." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare all reasonable contributors before ruling one out." }] }],
      errorType: "decision-error",
    },
    {
      id: "d-orbital-overuse",
      mistake: "Using d-orbital hybridisation language as a universal modern explanation for every hypervalent bond.",
      why: [{ type: "paragraph", children: [{ text: "Hypervalent bonding explanations are debated and model-dependent; treating d-orbital hybridisation as a settled universal explanation overstates the model's scope." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Route hypervalency and competing bonding explanations to academic review rather than asserting a single model as final." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Coordination Compounds",
      url: "/jee/chemistry/coordination-compounds",
      relation: "forward",
      description: "Extends bonding models into ligand-metal geometry, splitting and stability.",
    },
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "forward",
      description: "Applies sigma-pi framework and hybridisation to organic structures.",
    },
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "related",
      description: "Uses bonding and resonance ideas as the foundation for electronic-effect reasoning.",
    },
    {
      label: "p-Block Elements",
      url: "/jee/chemistry/p-block-elements",
      relation: "related",
      description: "Applies bonding trends to main-group compound behaviour.",
    },
  ],

  links: [
    { label: "JEE Chemistry", url: "/jee/chemistry", relation: "up", description: "Chemistry subject hub." },
    { label: "JEE syllabus", url: "/jee/syllabus", relation: "up", description: "Exam-level official syllabus hub." },
    { label: "Chemistry syllabus", url: "/jee/syllabus/chemistry", relation: "up", description: "Official Chemistry scope for Main and Advanced." },
  ],

  faqs: [
    {
      question: "Which model predicts molecular shape?",
      answer: [{ type: "paragraph", children: [{ text: "VSEPR predicts shape from electron domains around a central atom, while the Lewis structure supplies the domain count." }] }],
    },
    {
      question: "Why can a molecule with polar bonds be nonpolar?",
      answer: [{ type: "paragraph", children: [{ text: "Its bond-dipole vectors can cancel because of molecular symmetry." }] }],
    },
    {
      question: "What does MO bond order measure?",
      answer: [{ type: "paragraph", children: [{ text: "It measures net bonding occupancy as half the difference between bonding and antibonding electrons." }] }],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-chem-bonding",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
  ],
  sourceNote:
    "Scope claims are verified against the current NTA JEE Main and JEE Advanced syllabus documents. Model descriptions and the worked reasoning follow NCERT Chemical Bonding and Molecular Structure. Official-paper archives are linked for provenance only; no counts, weightage or frequency are asserted.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Chemistry educator experienced in molecular structure and model-based explanation.",
    "Academically reviewed by: unassigned. Required specialization: quantum chemistry, molecular structure, bonding models and current JEE scope.",
    "Minimum relevant qualification: postgraduate degree in Chemistry, preferably Physical or Inorganic Chemistry, or a closely related discipline with documented expertise.",
    "A real reviewer must be linked to a centralized verified contributor profile before any Person schema is emitted.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Chemical Bonding for JEE: Lewis, VSEPR, Hybridisation, MO",
    description:
      "Learn JEE chemical bonding through Lewis structures, VSEPR, hybridisation, MO theory, polarity, conditional relations, reasoning and traps.",
    ogTitle: "Chemical Bonding for JEE",
    ogDescription: "A model-selector for structure, shape, polarity, bond order and magnetism.",
    ogType: "article",
  },
};

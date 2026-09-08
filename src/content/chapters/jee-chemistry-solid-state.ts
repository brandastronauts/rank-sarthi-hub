import type { ChapterContent } from "@/content/types";

/**
 * Solid State — T06 production content.
 *
 * Evidence discipline:
 * - Solid State is NOT listed in the official JEE Main 2026 Chemistry
 *   syllabus. It IS listed in the JEE Advanced 2026 syllabus: classification
 *   of solids, crystalline state, the seven crystal systems and cell
 *   parameters, cubic and hexagonal close packing, packing in fcc, bcc and
 *   hcp lattices, nearest neighbours, ionic radii and radius ratio, and
 *   point defects. examVariant is set to "Advanced" and this boundary is
 *   stated plainly and repeatedly rather than implied.
 * - No weightage, trend or PYQ-count records are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 */
export const jeeChemistrySolidState: ChapterContent = {
  exam: "JEE",
  examVariant: "Advanced",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Solid State",
  slug: "solid-state",
  url: "/jee/chemistry/solid-state",
  canonicalIntent:
    "Prepare for current JEE Advanced Solid State by connecting lattice description, unit-cell counting, packing geometry, nearest neighbours, radius-ratio model, density and point defects.",

  heroChips: [
    "Listed in JEE Advanced 2026",
    "Not listed in JEE Main 2026 Chemistry",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Solid State is listed in JEE Advanced 2026 and is not listed in JEE Main 2026 Chemistry.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Solve it by identifying the crystal system and cell, counting the fraction of each lattice point owned by the unit cell, determining geometry and nearest neighbours, applying the correct radius or density relation, and then classifying any defect by what leaves, moves, or occupies a new site.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "This page must not be read as current JEE Main 2026 scope. Main 2026 has no Solid State Chemistry unit.",
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
      description: "Count particles using Avogadro's constant before computing density or packing fraction.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Distinguish bonding types that determine lattice character before applying a packing model.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Ionic radii used in the radius-ratio model come from periodic trends.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for the Chemistry chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Solid State (JEE Advanced 2026 only; not listed in JEE Main 2026)",
    topics: [
      "Classification of solids: crystalline and amorphous",
      "Seven crystal systems and cell parameters",
      "Cubic and hexagonal close packing",
      "Packing in fcc, bcc and hcp lattices",
      "Nearest neighbours (coordination number)",
      "Ionic radii and radius ratio",
      "Point defects",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "classify-solid",
      title: "1. Classify the solid before modelling it",
      keyIdea: "Crystalline solids have long-range periodic order in the ideal model; amorphous solids do not.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Crystalline solids have long-range periodic order in the ideal model. Amorphous solids lack that long-range periodicity, so unit-cell counting and packing relations do not apply to them.",
            },
          ],
        },
      ],
    },
    {
      id: "describe-cell",
      title: "2. Describe the cell with edges and angles",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use edge lengths a, b, c and angles alpha, beta, gamma to identify the crystal system. The seven crystal systems are distinguished only by these edge and angle relations.",
            },
          ],
        },
      ],
    },
    {
      id: "count-ownership",
      title: "3. Count fractional ownership before counting particles",
      keyIdea: "Corner, edge, face and body positions contribute different fractions to a selected unit cell.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Corner, edge, face, and body positions contribute different fractions to a selected unit cell. Counting visible spheres rather than owned fractions is the most common source of error in this chapter.",
            },
          ],
        },
      ],
    },
    {
      id: "contact-geometry",
      title: "4. Read contact geometry before choosing a radius relation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The direction along which particles touch produces the correct edge-radius relation: cube edge for simple cubic, body diagonal for bcc, and face diagonal for fcc.",
            },
          ],
        },
      ],
    },
    {
      id: "coordination-vs-z",
      title: "5. Separate coordination number from Z",
      keyIdea: "Coordination number counts nearest neighbours around a particle; Z counts effective particles per unit cell.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Coordination number counts nearest neighbours around a particle. Z counts effective particles per unit cell. These are different quantities and must not be substituted for each other.",
            },
          ],
        },
      ],
    },
    {
      id: "apply-model",
      title: "6. Apply density or packing efficiency only after the cell type is fixed",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Density, packing efficiency, or radius ratio follows only after cell type and assumptions are fixed. Applying a formula before fixing the cell type is a decision error.",
            },
          ],
        },
      ],
    },
    {
      id: "classify-defect",
      title: "7. Classify the defect by what leaves, moves, or occupies a new site",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Ask whether particles are missing, displaced to interstitial sites, substituted, or accompanied by electronic compensation before naming a defect or predicting its density effect.",
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
          "Crystal classification, the seven crystal systems, unit-cell counting, close packing in fcc, bcc and hcp, density, radius ratio, and point defects, as currently listed in JEE Advanced 2026.",
        ],
        [
          "What is the central method choice?",
          "Identify the crystal system and cell, count fractional ownership of each lattice position, apply the matching contact-geometry radius relation, then apply density, packing efficiency, or radius ratio.",
        ],
        [
          "Where do most mistakes begin?",
          "Counting every corner or face particle as fully inside one cell, confusing coordination number with Z, using the fcc radius relation for bcc, and mixing picometres with centimetres in a density calculation.",
        ],
        [
          "What should come before Solid State?",
          "Mole Concept for particle counting, Chemical Bonding for lattice character, and Periodic Table for ionic radii.",
        ],
        [
          "What comes after it?",
          "Surface Chemistry extends structural and interface ideas developed here.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Solid State",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. Solid State is an Advanced-only current-syllabus page, not a separate JEE Main 2026 unit.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Solid State as a unit",
          "Not listed in the official JEE Main 2026 Chemistry syllabus.",
          "Explicitly listed: classification of solids, crystalline state, seven crystal systems and cell parameters, close packing, fcc, bcc, hcp, nearest neighbours, ionic radii, radius ratio, and point defects.",
          "Treat this as an Advanced-only current-cycle chapter, not a Main 2026 topic.",
        ],
        [
          "Density and packing relations",
          "Not part of a Main Solid State unit.",
          "Included as the quantitative language needed to use the listed Advanced scope.",
          "Learn density and packing efficiency alongside the listed crystal-system content, not as separate add-ons.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "crystal-systems",
      jump: true,
      slot: "concepts",
      heading: "The seven crystal systems",
      columns: ["System", "Edge relation", "Angle relation"],
      rows: [
        ["Cubic", "a = b = c", "alpha = beta = gamma = 90°"],
        ["Tetragonal", "a = b ≠ c", "alpha = beta = gamma = 90°"],
        ["Orthorhombic", "a ≠ b ≠ c", "alpha = beta = gamma = 90°"],
        ["Hexagonal", "a = b ≠ c", "alpha = beta = 90°, gamma = 120°"],
        ["Trigonal or rhombohedral", "a = b = c", "alpha = beta = gamma ≠ 90°"],
        ["Monoclinic", "a ≠ b ≠ c", "alpha = gamma = 90°, beta ≠ 90°"],
        ["Triclinic", "a ≠ b ≠ c", "alpha ≠ beta ≠ gamma, with no angle required to be 90°"],
      ],
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Solid State",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Powers of ten and unit conversion",
          "Convert picometres to metres or centimetres without error.",
          "Revise scientific-notation conversion before any density calculation.",
        ],
        [
          "Avogadro's constant",
          "Count particles per mole confidently.",
          "Revise Mole Concept before computing cell mass.",
        ],
        [
          "Three-dimensional geometry",
          "Identify cube edge, face diagonal and body diagonal in a unit cell.",
          "Sketch each diagonal and its relation to the edge length before using contact relations.",
        ],
        [
          "Bonding types",
          "Distinguish ionic, metallic and covalent bonding character.",
          "Revise Chemical Bonding before predicting lattice behaviour.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: classify the cell before calculating",
      intro: "Match the question signal to the first model and its required check.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Atoms at cell positions", "Fractional ownership", "Corner, edge, face, or body location"],
        ["Radius and edge length", "Contact line", "Edge, face diagonal, or body diagonal"],
        ["Density", "Mass per cell divided by cell volume", "Z, molar mass, Avogadro constant, and unit conversion"],
        ["Packing comparison", "Occupied sphere volume over cell volume", "Cell geometry and hard-sphere approximation"],
        ["Nearest neighbours", "Coordination geometry", "Lattice type and reference particle"],
        ["Ionic coordination", "Radius-ratio model", "Ideal hard-sphere assumption and actual structure limitations"],
        ["Defect and density", "Site-occupancy ledger", "What is missing, displaced, or substituted"],
      ],
    },
    {
      id: "radius-ratio-guide",
      jump: true,
      slot: "concepts",
      heading: "Radius-ratio guide (ideal hard-sphere model)",
      intro: "These intervals are geometric guides, not universal experimental laws. Polarisation, bonding character, pressure, and the selected ionic-radius convention can affect real structures.",
      columns: ["Ideal coordination", "Standard radius-ratio interval"],
      rows: [
        ["2", "less than 0.155"],
        ["3", "0.155 to 0.225"],
        ["4", "0.225 to 0.414"],
        ["6", "0.414 to 0.732"],
        ["8", "0.732 to 1.000"],
      ],
    },
    {
      id: "point-defect-ledger",
      jump: true,
      slot: "concepts",
      heading: "Point-defect ledger",
      columns: ["Defect", "Site event", "Electrical neutrality", "Density effect in the ideal model"],
      rows: [
        ["Schottky", "Stoichiometrically matched cation and anion vacancies", "Preserved", "Decreases because ions are missing"],
        ["Frenkel", "Usually a smaller ion leaves its normal site and occupies an interstitial site", "Preserved", "Approximately unchanged because no ion leaves the crystal"],
        ["Substitutional impurity", "A different species occupies a regular site", "May require charge compensation", "Depends on mass and compensation mechanism; do not infer direction without the species"],
        ["Interstitial impurity", "Extra species occupies an interstitial site", "May require electronic or vacancy compensation", "Depends on added species and compensation"],
      ],
      note: "Schottky requires a structure that can sustain paired vacancies; Frenkel is a vacancy-and-interstitial pair, not an added impurity.",
    },
  ],

  formulas: [
    {
      id: "fractional-ownership",
      expression: "corner = 1/8, edge = 1/4, face = 1/2, body = 1",
      latex: "\\text{corner}=\\tfrac{1}{8},\\ \\text{edge}=\\tfrac{1}{4},\\ \\text{face}=\\tfrac{1}{2},\\ \\text{body}=1",
      meaning: "Fraction of a lattice position owned by one conventional unit cell.",
      variables: [],
      units: "Dimensionless",
      useWhen: "Counting the effective number of particles per unit cell (shared-cell bookkeeping).",
      commonTrap: "Counting visible spheres rather than owned fractions.",
      accessibleText: "A corner contributes one eighth, an edge one quarter, a face one half, and a body position one whole particle to the unit cell.",
    },
    {
      id: "z-values",
      expression: "Z_sc = 1, Z_bcc = 2, Z_fcc = 4",
      latex: "Z_{sc}=1,\\ Z_{bcc}=2,\\ Z_{fcc}=4",
      meaning: "Effective lattice points per conventional cubic cell.",
      variables: [{ symbol: "Z", meaning: "effective particles per unit cell", unit: "dimensionless" }],
      units: "Dimensionless",
      useWhen: "The lattice is a monatomic lattice-point model of the stated cubic type.",
      commonTrap: "Confusing Z with coordination number.",
      accessibleText: "Z equals 1 for simple cubic, 2 for body-centred cubic, and 4 for face-centred cubic.",
    },
    {
      id: "simple-cubic-contact",
      expression: "a = 2r",
      latex: "a = 2r",
      meaning: "Contact along the cube edge for simple cubic packing.",
      variables: [
        { symbol: "a", meaning: "cell edge length", unit: "length unit matching r" },
        { symbol: "r", meaning: "particle radius", unit: "length unit matching a" },
      ],
      useWhen: "The lattice is simple cubic under the hard-sphere contact model.",
      commonTrap: "Using this relation for bcc or fcc.",
      accessibleText: "For simple cubic, the edge length equals twice the particle radius.",
    },
    {
      id: "bcc-contact",
      expression: "√3 × a = 4r",
      latex: "\\sqrt{3}a = 4r",
      meaning: "Contact along the body diagonal for body-centred cubic packing.",
      variables: [],
      useWhen: "The lattice is body-centred cubic under the ideal hard-sphere model.",
      commonTrap: "Using the face diagonal instead of the body diagonal.",
      accessibleText: "For body-centred cubic, root three times the edge length equals four times the particle radius.",
    },
    {
      id: "fcc-contact",
      expression: "√2 × a = 4r",
      latex: "\\sqrt{2}a = 4r",
      meaning: "Contact along the face diagonal for face-centred cubic packing.",
      variables: [],
      useWhen: "The lattice is face-centred cubic under the ideal hard-sphere model.",
      commonTrap: "Using the body diagonal instead of the face diagonal.",
      accessibleText: "For face-centred cubic, root two times the edge length equals four times the particle radius.",
    },
    {
      id: "unit-cell-density",
      expression: "ρ = Z × M / (N_A × V_cell)",
      latex: "\\rho = \\dfrac{ZM}{N_A V_{cell}}",
      meaning: "Unit-cell density.",
      variables: [
        { symbol: "Z", meaning: "effective particles or formula units per cell", unit: "dimensionless" },
        { symbol: "M", meaning: "molar mass", unit: "g mol^-1" },
        { symbol: "N_A", meaning: "Avogadro constant", unit: "mol^-1" },
        { symbol: "V_cell", meaning: "unit-cell volume", unit: "matches density units" },
      ],
      units: "kg m^-3 in full SI, or g cm^-3 with matched inputs",
      useWhen: "Z, formula units or particles match the molar-mass basis used.",
      commonTrap: "Mixing pm, cm, and m within the same calculation.",
      accessibleText: "Density equals Z times molar mass divided by the Avogadro constant times unit-cell volume.",
    },
    {
      id: "packing-efficiency",
      expression: "η = Z(4πr³/3) / V_cell × 100%",
      latex: "\\eta = \\dfrac{Z(4\\pi r^3/3)}{V_{cell}}\\times100\\%",
      meaning: "Packing efficiency for equal hard spheres in a given cell.",
      variables: [{ symbol: "η", meaning: "packing efficiency", unit: "percent" }],
      units: "Percent",
      useWhen: "The spheres are equal and the correct cell relation for the lattice is used.",
      commonTrap: "Substituting the wrong Z or radius relation for the lattice type.",
      accessibleText: "Packing efficiency equals Z times the sphere volume, divided by the cell volume, expressed as a percentage.",
    },
    {
      id: "radius-ratio",
      expression: "r_+ / r_-",
      latex: "r_+/r_-",
      meaning: "Radius ratio used as an ideal coordination guide.",
      variables: [
        { symbol: "r_+", meaning: "cation radius", unit: "length unit" },
        { symbol: "r_-", meaning: "anion radius", unit: "length unit" },
      ],
      units: "Dimensionless",
      useWhen: "Ions are treated as hard spheres with specified radii.",
      commonTrap: "Using the standard threshold ranges as absolute structure predictions.",
      accessibleText: "Radius ratio equals the cation radius divided by the anion radius.",
    },
  ],

  workedExamples: [
    {
      id: "fcc-density",
      prompt:
        "An elemental fcc crystal has molar mass 64.0 g/mol and edge length 400 pm. Find the density.",
      steps: [
        { type: "paragraph", children: [{ text: "For fcc, Z = 4 atoms per conventional cell." }] },
        { type: "paragraph", children: [{ text: "Convert the edge: 400 pm = 4.00 × 10^-8 cm." }] },
        { type: "paragraph", children: [{ text: "Cell volume is a^3 = (4.00 × 10^-8)^3 = 6.40 × 10^-23 cm^3." }] },
        { type: "paragraph", children: [{ text: "Cell mass is ZM/N_A = (4 × 64.0) / (6.022 × 10^23) = 4.25 × 10^-22 g." }] },
        { type: "paragraph", children: [{ text: "Density is 4.25 × 10^-22 / 6.40 × 10^-23 = 6.64 g/cm^3 to three significant figures." }] },
      ],
      answer: "Density ≈ 6.64 g/cm^3, with fcc meaning Z = 4, molar mass per mole of atoms, and length and density units kept compatible.",
    },
  ],

  mistakes: [
    {
      id: "main-scope-error",
      mistake: "Calling Solid State a current Main 2026 Chemistry chapter.",
      why: [{ type: "paragraph", children: [{ text: "The official JEE Main 2026 Chemistry syllabus has no Solid State unit." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming Main-exam relevance." }] }],
      errorType: "needs-review",
    },
    {
      id: "corner-full-count",
      mistake: "Counting every corner or face particle as fully inside one cell.",
      why: [{ type: "paragraph", children: [{ text: "Corner, edge, and face positions are shared between multiple cells, so only a fraction belongs to any one cell." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Apply the fractional-ownership table before summing particles per cell." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "z-vs-coordination",
      mistake: "Confusing coordination number with Z.",
      why: [{ type: "paragraph", children: [{ text: "Coordination number counts nearest neighbours; Z counts effective particles per unit cell. They are unrelated quantities." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate the two questions explicitly before substituting either into a formula." }] }],
      errorType: "recall-gap",
    },
    {
      id: "wrong-contact-relation",
      mistake: "Using the fcc radius relation for bcc.",
      why: [{ type: "paragraph", children: [{ text: "Each lattice type has particles touching along a different diagonal or edge." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the lattice type first, then select the matching contact-geometry relation." }] }],
      errorType: "decision-error",
    },
    {
      id: "unit-mixing-density",
      mistake: "Mixing picometres with centimetres inside a density calculation.",
      why: [{ type: "paragraph", children: [{ text: "Density calculations combine length cubed with mass; any length-unit inconsistency propagates directly into the result." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert every length to one consistent unit before cubing it for cell volume." }] }],
      errorType: "execution-error",
    },
    {
      id: "packing-as-universal",
      mistake: "Quoting packing efficiencies without the ideal hard-sphere condition.",
      why: [{ type: "paragraph", children: [{ text: "The standard packing results (about 74% for fcc and hcp, about 68% for bcc) hold for ideal monatomic hard-sphere structures, not every real solid." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the hard-sphere assumption whenever a packing-efficiency number is used." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "radius-ratio-absolute",
      mistake: "Treating radius-ratio intervals as exact structure predictions.",
      why: [{ type: "paragraph", children: [{ text: "Polarisation, bonding character, pressure, and the ionic-radius convention used can affect real structures beyond the ideal guide." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the radius-ratio table as a guide, and check it against the actual reported structure." }] }],
      errorType: "decision-error",
    },
    {
      id: "vacancy-density-generalisation",
      mistake: "Saying every vacancy lowers density without checking whether an ion leaves the crystal.",
      why: [{ type: "paragraph", children: [{ text: "Schottky defects remove ions and lower density, but Frenkel defects keep the ion inside the crystal, so density is approximately unchanged." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the point-defect ledger for the specific defect before predicting a density change." }] }],
      errorType: "decision-error",
    },
    {
      id: "frenkel-vs-impurity",
      mistake: "Confusing a Frenkel interstitial with an added impurity particle.",
      why: [{ type: "paragraph", children: [{ text: "A Frenkel defect is a displaced ion of the same species, not an added foreign species." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm whether the interstitial particle is the same species as the lattice or a different species before naming the defect." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Surface Chemistry",
      url: "/jee/chemistry/surface-chemistry",
      relation: "forward",
      description: "Extends structural and interface ideas from crystal surfaces into adsorption and colloids.",
    },
    {
      label: "Coordination Compounds",
      url: "/jee/chemistry/coordination-compounds",
      relation: "related",
      description: "Owns ligand-field geometry, a related but separate structural framework from periodic packing.",
    },
    {
      label: "D and F Block Elements",
      url: "/jee/chemistry/d-and-f-block-elements",
      relation: "related",
      description: "Shares periodic and structural context relevant to metallic and ionic lattices.",
    },
    {
      label: "Mole Concept",
      url: "/jee/chemistry/mole-concept",
      relation: "prerequisite",
      description: "Particle counting used throughout unit-cell and density calculations.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "General bonding models that this chapter does not re-teach.",
    },
    {
      label: "Periodic Table",
      url: "/jee/chemistry/periodic-table",
      relation: "prerequisite",
      description: "Ionic radii used in the radius-ratio model.",
    },
  ],

  links: [
    {
      label: "JEE Advanced syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official syllabus hub, including the JEE Advanced document.",
    },
    {
      label: "JEE Chemistry syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Official Chemistry scope for Main and Advanced, showing this Advanced-only boundary.",
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
      question: "Is Solid State in JEE Main 2026 Chemistry?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. It is not listed in the official JEE Main 2026 Chemistry syllabus." }],
        },
      ],
    },
    {
      question: "Is Solid State in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Yes. Its official scope includes crystal systems, close packing, fcc, bcc, hcp, nearest neighbours, radius ratio, and point defects." },
          ],
        },
      ],
    },
    {
      question: "What is the difference between Z and coordination number?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Z is the effective number of particles or formula units in a selected unit cell. Coordination number is the number of nearest neighbours around a particle." },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for Solid State?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Weightage, trend percentages and question-count forecasts are deliberately not published on this page." },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "ncert-chem-syllabus",
    "ncert-chem-exemplar",
  ],
  sourceNote:
    "Evidence boundary: this page states plainly that Solid State is absent from the current JEE Main 2026 Chemistry syllabus and present in the current JEE Advanced 2026 syllabus. Crystal-system, unit-cell, packing, radius-ratio and defect content follows NCERT curriculum and exemplar material. No chapter weightage, question frequency or forecast is asserted, and no current-Main relevance module is implied.",
  contributorPolicy: [
    "Author: a JEE Physical, Inorganic, or Materials Chemistry educator experienced in crystallography and numerical method selection.",
    "Academic reviewer: postgraduate qualification in Physical Chemistry, Inorganic Chemistry, Materials Chemistry, Crystallography, or a closely related discipline, with documented solid-state expertise.",
    "Independent checker: a chemistry educator or subject editor who verifies every crystal-system relation, ownership fraction, Z, coordination number, radius equation, packing result, radius-ratio interval and defect statement separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer", "advanced-only-not-main"],

  meta: {
    title: "Solid State for JEE Advanced 2026: Unit Cells, Packing and Defects",
    description:
      "Solid State is listed in JEE Advanced 2026 and not in JEE Main 2026 Chemistry. Learn crystal systems, unit-cell counting, packing in fcc, bcc and hcp, density, radius ratio, and point defects. No invented weightage.",
    ogTitle: "Solid State for JEE Advanced: count ownership before calculating",
    ogDescription:
      "Official Advanced-only scope, crystal systems, unit-cell counting, packing, density, radius ratio, point defects, and error diagnosis for JEE Chemistry Solid State.",
  },
};

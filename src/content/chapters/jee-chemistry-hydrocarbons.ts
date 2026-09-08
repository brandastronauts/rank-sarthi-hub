import type { ChapterContent } from "@/content/types";

/**
 * Hydrocarbons — T06 production content.
 *
 * Evidence discipline:
 * - Weightage, trend and PYQ-count records are deliberately absent.
 * - Electron effects and intermediate stability stay on Organic Basics.
 * - No contributor is named; contentStatus stays "draft" pending review.
 */
export const jeeChemistryHydrocarbons: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Hydrocarbons",
  slug: "hydrocarbons",
  url: "/jee/chemistry/hydrocarbons",
  canonicalIntent:
    "Predict hydrocarbon preparation and reactions by identifying carbon framework, unsaturation, reagent role, mechanism family, selectivity, and product evidence.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Classify the substrate before predicting the pathway",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A hydrocarbon question becomes manageable when you first identify whether the reactive system is an alkane, alkene, alkyne, allylic or benzylic position, or aromatic ring. Then identify what the reagent is trying to do, check the stated conditions, choose the permitted mechanism family, and test the proposed product against atom balance and selectivity.",
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
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Hybridisation, isomerism, resonance, hyperconjugation, carbocations, radicals, electrophiles and nucleophiles are used throughout this chapter.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Sigma and pi bond concepts are needed to identify reactive sites.",
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
      description: "Exam-level official scope for Chemistry.",
    },
  ],

  syllabusMapping: {
    unit: "Hydrocarbons",
    topics: [
      "Classification, isomerism, nomenclature",
      "Preparation, properties and reactions",
      "Ethane and butane Newman conformations",
      "Alkane halogenation mechanism, including allylic and benzylic positions (Advanced)",
      "Alkene geometrical isomerism, electrophilic addition, Markovnikov and peroxide effects",
      "Ozonolysis and polymerisation",
      "Alkyne acidity, metal acetylides, and addition",
      "Benzene aromaticity, electrophilic substitution and directive influence",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "carbon-framework",
      title: "1. Count the carbon framework before naming or comparing properties",
      keyIdea: "Carbon count, branching, rings and symmetry decide naming and property comparison.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Count carbon atoms, branching, rings, and symmetry before naming a hydrocarbon or comparing its physical properties with another.",
            },
          ],
        },
      ],
    },
    {
      id: "reactive-feature",
      title: "2. Identify the reactive feature of the substrate",
      keyIdea: "Alkanes react at C-H bonds by radical substitution; alkenes and alkynes expose a pi system; benzene preserves aromatic stabilisation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An alkane usually reacts at a C-H bond through radical substitution under suitable conditions. An alkene or alkyne exposes a pi system. Benzene preserves aromatic stabilisation unless a permitted substitution pathway operates.",
            },
          ],
        },
      ],
    },
    {
      id: "reagent-role",
      title: "3. Classify the reagent's role before predicting a mechanism",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Classify the reagent as radical initiator, electrophile, nucleophile, oxidant, reductant, acid, base, or catalyst before predicting how it will react with the substrate.",
            },
          ],
        },
      ],
    },
    {
      id: "condition-is-part-of-reaction",
      title: "4. Treat conditions as part of the reaction, not decoration",
      keyIdea: "Light, peroxide, acid, catalyst, temperature and work-up change the outcome.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Light, peroxide, acid, catalyst, temperature, and work-up are part of the reaction, not decorative labels. Changing any one of them can change the pathway or the product.",
            },
          ],
        },
      ],
    },
    {
      id: "pathway-choice",
      title: "5. Decide the pathway family before writing a mechanism",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Decide between radical substitution, electrophilic addition, elimination-derived preparation, oxidation, reduction, polymerisation, or electrophilic aromatic substitution based on the substrate and reagent identified above.",
            },
          ],
        },
      ],
    },
    {
      id: "selectivity-check",
      title: "6. Check selectivity before trusting a named rule",
      keyIdea: "Carbocation or radical stability and ring-directing effects decide whether a named rule actually applies.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Check carbocation or radical stability, ring-directing effects, and whether the named rule (such as Markovnikov's or the peroxide effect) is actually valid under the stated mechanism.",
            },
          ],
        },
      ],
    },
    {
      id: "product-proof",
      title: "7. Prove the product by accounting for every atom",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Account for every carbon and relevant heteroatom in the proposed product. For oxidative cleavage such as ozonolysis, reconstruct the original multiple bond from the fragments as a check.",
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
          "How to classify a hydrocarbon substrate and its reactive feature, choose the correct mechanism family, and prove the product for alkanes, alkenes, alkynes and benzene.",
        ],
        [
          "What is the central method choice?",
          "Identify the carbon framework and reactive feature, classify the reagent's role, confirm the stated conditions, choose the pathway, check selectivity, and verify the product by atom accounting.",
        ],
        [
          "Where do most mistakes begin?",
          "Applying the peroxide effect to every hydrogen halide, calling every addition Markovnikov without a mechanism check, losing a carbon in ozonolysis, and treating benzene as an ordinary alkene.",
        ],
        [
          "What should come before this chapter?",
          "Organic Basics for hybridisation, isomerism, resonance, hyperconjugation and reactive intermediates, and Chemical Bonding for sigma and pi bonds.",
        ],
        [
          "What comes after it?",
          "Haloalkanes and Haloarenes extends substitution reasoning to carbon-halogen bonds; Polymers extends the addition and condensation ideas introduced here.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Hydrocarbons",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Classification, isomerism, nomenclature",
          "Explicitly listed, along with ethane conformations.",
          "Alkane physical trends and ethane and butane Newman conformations are explicitly listed.",
          "Fix the viewing bond before drawing any Newman projection.",
        ],
        [
          "Alkane halogenation",
          "Alkane halogenation mechanism is explicitly listed.",
          "Halogenation including allylic and benzylic positions, and oxidation, is explicitly listed.",
          "Advanced adds allylic and benzylic positions; do not assume Main and Advanced scope are identical.",
        ],
        [
          "Alkene reactivity",
          "Geometrical isomerism, electrophilic addition, Markovnikov and peroxide effects, ozonolysis and polymerisation are explicitly listed.",
          "Physical properties, elimination preparation, acid-catalysed hydration, oxidation, reduction, electrophilic additions and peroxide effect are explicitly listed.",
          "Treat the peroxide effect as reagent-specific, not a universal alkene rule.",
        ],
        [
          "Alkyne reactivity",
          "Acidity and addition are explicitly listed.",
          "Physical properties, metal acetylides, oxidation, reduction and electrophilic additions are explicitly listed.",
          "Terminal alkyne acidity supports metal acetylide formation with suitable strong bases or metal reagents.",
        ],
        [
          "Benzene and aromatic substitution",
          "Aromaticity, electrophilic substitution and directive influence are explicitly listed.",
          "Structure, named electrophilic substitutions and directing effects are explicitly listed.",
          "Directing behaviour and reaction feasibility are separate decisions; check both.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before this chapter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Hybridisation and sigma/pi bonds",
          "Identify sp3, sp2 and sp carbons and locate the pi system in a structure.",
          "Revise hybridisation and bond formation in Chemical Bonding.",
        ],
        [
          "Isomerism",
          "Distinguish structural and geometrical isomers of a given molecular formula.",
          "Revise isomer classification in Organic Basics.",
        ],
        [
          "Resonance and hyperconjugation",
          "Explain why one carbocation or radical is more stable than another.",
          "Revise resonance and hyperconjugation in Organic Basics.",
        ],
        [
          "Electrophiles and nucleophiles",
          "Classify a reagent as electrophilic, nucleophilic, or radical-generating.",
          "Revise reactive-species classification in Organic Basics.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: start with the substrate signal",
      intro: "Match the substrate and reagent signal to the correct starting model before any mechanism is drawn.",
      columns: ["Question signal", "Start with", "Mandatory check"],
      rows: [
        ["Alkane plus halogen", "Radical chain model", "Light or heat, available hydrogens, product mixture"],
        ["Alkene plus HX", "Electrophilic addition", "HX identity, peroxide presence, carbocation or radical pathway"],
        ["Alkene plus ozone", "Multiple-bond cleavage", "Work-up and carbonyl fragments"],
        ["Terminal alkyne plus strong base or metal reagent", "Acidity and acetylide formation", "Terminal hydrogen and reagent strength"],
        ["Benzene plus electrophile-generating mixture", "Electrophilic aromatic substitution", "Catalyst, directing group, aromaticity restoration"],
        ["Conformation question", "Newman projection", "Viewing bond and dihedral relationship"],
      ],
    },
    {
      id: "reaction-intelligence",
      jump: true,
      slot: "formulas",
      heading: "Reaction intelligence records",
      intro: "Every record below carries its condition, product rule and limitation; none is a bare arrow without context.",
      columns: ["Substrate", "Reagent and condition", "Pathway", "Product rule", "Limitation or trap"],
      rows: [
        [
          "Alkane",
          "Cl2 or Br2 with light or heat",
          "Radical substitution",
          "A C-H bond is replaced through initiation, propagation, and termination steps",
          "Unsymmetrical substrates can give mixtures; do not promise a single product without selectivity evidence",
        ],
        [
          "Unsymmetrical alkene",
          "HX without peroxide",
          "Electrophilic addition",
          "Regioselectivity follows the more plausible ionic pathway and intermediate",
          "Markovnikov language does not replace a mechanism check; rearrangement can matter when a carbocation forms",
        ],
        [
          "Suitable alkene",
          "HBr with peroxide",
          "Radical addition",
          "Orientation can differ from ordinary ionic HBr addition",
          "The named peroxide effect is not a universal rule for HCl or HI",
        ],
        [
          "Alkene",
          "O3 followed by stated work-up",
          "Oxidative cleavage",
          "The two alkene carbons become carbonyl-containing fragments under the standard reductive work-up model",
          "Product oxidation level depends on work-up; never omit it",
        ],
        [
          "Benzene",
          "Electrophile-generating reagent and catalyst",
          "Electrophilic aromatic substitution",
          "Substitution preserves the aromatic ring after deprotonation",
          "Do not draw simple addition as the final product",
        ],
        [
          "Monosubstituted benzene",
          "Nitrating, halogenating, sulphonating, or Friedel-Crafts conditions",
          "Directed aromatic substitution",
          "Existing group changes ring reactivity and orientation",
          "Directing behaviour and reaction feasibility are separate decisions",
        ],
      ],
    },
  ],

  workedExamples: [
    {
      id: "propene-plus-hbr",
      prompt: "Compare the product of propene with HBr, with and without peroxide present.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Case A, no peroxide: protonation is considered through the ionic addition model. The pathway that produces the more stable secondary carbocation is preferred, then bromide attacks, giving 2-bromopropane." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Case B, peroxide present: for HBr under suitable radical conditions, the chain pathway favours formation of the more stable carbon radical, leading to 1-bromopropane as the orientation outcome." },
          ],
        },
      ],
      answer: "Without peroxide: 2-bromopropane through the ionic pathway. With peroxide: 1-bromopropane through the radical pathway. Peroxide changes the viable mechanism for HBr, and the mechanism changes the stability decision; this is not a pair of memorised arrows.",
    },
  ],

  mistakes: [
    {
      id: "peroxide-effect-overgeneralised",
      mistake: "Applying the peroxide effect to every hydrogen halide.",
      why: [{ type: "paragraph", children: [{ text: "The named peroxide effect is a documented reagent-specific behaviour for HBr, not a universal rule for HCl or HI." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the specific hydrogen halide before applying the peroxide-effect orientation." }] }],
      errorType: "decision-error",
    },
    {
      id: "markovnikov-without-mechanism",
      mistake: "Calling every alkene addition Markovnikov without checking mechanism or symmetry.",
      why: [{ type: "paragraph", children: [{ text: "Regioselectivity follows the more plausible ionic pathway and intermediate; a symmetrical alkene or a radical pathway changes the outcome." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the mechanism and substrate symmetry before invoking Markovnikov's rule." }] }],
      errorType: "decision-error",
    },
    {
      id: "ozonolysis-work-up-lost",
      mistake: "Forgetting ozonolysis work-up or losing a carbon while reading products.",
      why: [{ type: "paragraph", children: [{ text: "Product oxidation level depends on work-up, and the two alkene carbons must both be accounted for as carbonyl-containing fragments." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the work-up explicitly and reconstruct the original multiple bond from the fragments as a carbon-accounting check." }] }],
      errorType: "execution-error",
    },
    {
      id: "benzene-as-ordinary-alkene",
      mistake: "Treating benzene as an ordinary isolated alkene.",
      why: [{ type: "paragraph", children: [{ text: "Benzene undergoes substitution rather than ordinary addition because substitution restores aromatic stabilisation after electrophilic attack." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Draw substitution, not addition, as the default outcome for benzene with an electrophile-generating reagent." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "directing-label-as-feasibility",
      mistake: "Using a directing label to claim that a Friedel-Crafts reaction must occur.",
      why: [{ type: "paragraph", children: [{ text: "Directing behaviour and reaction feasibility are separate decisions; a directing group does not guarantee that a given reaction proceeds." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check feasibility conditions independently of the directing-group prediction." }] }],
      errorType: "decision-error",
    },
    {
      id: "boiling-point-without-context",
      mistake: "Comparing boiling points without considering molar mass, shape, and surface contact.",
      why: [{ type: "paragraph", children: [{ text: "Physical-property comparisons across hydrocarbons depend on more than one structural factor." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State molar mass, branching and surface-contact reasoning together before ranking boiling points." }] }],
      errorType: "recall-gap",
    },
    {
      id: "newman-without-viewing-bond",
      mistake: "Drawing a Newman projection without fixing the viewing bond.",
      why: [{ type: "paragraph", children: [{ text: "A Newman projection is only meaningful relative to a stated viewing bond and dihedral relationship." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the viewing bond before drawing front and back atoms in a Newman projection." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Electron effects, intermediate stability and reactive-species classification used throughout this chapter.",
    },
    {
      label: "Chemical Bonding",
      url: "/jee/chemistry/chemical-bonding",
      relation: "prerequisite",
      description: "Sigma and pi bond concepts needed to identify reactive sites.",
    },
    {
      label: "Environmental Chemistry",
      url: "/jee/chemistry/environmental-chemistry",
      relation: "related",
      description: "Combustion and hydrocarbon-related environmental context extends this chapter's scope.",
    },
    {
      label: "Haloalkanes and Haloarenes",
      url: "/jee/chemistry/haloalkanes-haloarenes",
      relation: "forward",
      description: "Extends substitution and elimination reasoning to carbon-halogen bonds.",
    },
    {
      label: "Polymers",
      url: "/jee/chemistry/polymers",
      relation: "related",
      description: "Builds on the polymerisation pathway introduced for alkenes in this chapter.",
    },
  ],

  links: [
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Chemistry subject hub.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Exam-level official Chemistry scope.",
    },
  ],

  faqs: [
    {
      question: "When does the peroxide effect matter in JEE hydrocarbon problems?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "For addition of HBr to a suitable unsymmetrical alkene under radical peroxide conditions. It should not be extended automatically to HCl or HI.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does benzene usually undergo substitution rather than ordinary addition?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Substitution allows the ring to restore aromatic stabilisation after electrophilic attack.",
            },
          ],
        },
      ],
    },
    {
      question: "What should be written with an ozonolysis answer?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The substrate, ozone step, work-up, carbonyl fragments, and a carbon-accounting check.",
            },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for Hydrocarbons?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Weightage, frequency, trend percentages and question-count forecasts are deliberately not published on this page.",
            },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "nta-jee-main-question-papers",
    "jee-advanced-paper-archive",
    "ncert-chem-hydrocarbons",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and reaction, mechanism and condition detail is tied to NCERT Hydrocarbons. Electron effects and intermediate stability are kept on the Organic Basics route. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Organic Chemistry educator experienced in reaction-mechanism teaching.",
    "Academic reviewer: postgraduate degree in Chemistry, preferably Organic Chemistry, or a closely related discipline with documented organic-reaction expertise.",
    "Independent checker: an organic chemistry educator or subject editor who verifies every reagent, condition, mechanism statement and product separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Hydrocarbons for JEE: Classify First, Then Predict the Pathway",
    description:
      "Official JEE Main and Advanced 2026 scope for Hydrocarbons, substrate classification method, condition-aware reaction records, worked reasoning on the peroxide effect, and an error diagnosis framework. No invented weightage.",
    ogTitle: "Hydrocarbons for JEE",
    ogDescription:
      "Condition-aware reasoning for alkanes, alkenes, alkynes, and aromatic hydrocarbons.",
  },
};

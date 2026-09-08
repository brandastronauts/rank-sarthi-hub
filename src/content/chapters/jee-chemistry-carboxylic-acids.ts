import type { ChapterContent } from "@/content/types";

/**
 * Carboxylic Acids — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Scope check verified against current JEE Main 2026 and JEE Advanced 2026
 *   syllabus documents [O1][O2] and NCERT Aldehydes, Ketones and Carboxylic
 *   Acids [N4]. Decarboxylation is not treated as owned current scope
 *   because it is not named in these current official entries.
 */
export const jeeChemistryCarboxylicAcids: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Carboxylic Acids",
  slug: "carboxylic-acids",
  url: "/jee/chemistry/carboxylic-acids",
  canonicalIntent:
    "Explain carboxylic-acid strength and reactions through carboxyl structure, conjugate-base stabilisation, substituent effects, reagent role and derivative pathway, comparing conjugate bases rather than acid labels.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Acidity is always compared through conjugate bases",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "To compare carboxylic-acid strength, remove the acidic proton and compare the resulting carboxylate ions in the stated medium. Resonance delocalises charge across two oxygen atoms, while substituents, distance, solvation and structure alter relative stability.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "For reactions, classify whether the reagent changes the hydroxyl group, reduces the carboxyl carbon, modifies the alpha carbon, or builds the acid from another carbon source.",
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
      description: "Resonance and inductive-effect reasoning used to compare conjugate bases.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Acid-dissociation constants and pKa reasoning applied to carboxylic acids.",
    },
    {
      label: "Aldehydes and Ketones",
      url: "/jee/chemistry/aldehydes-ketones",
      relation: "prerequisite",
      description: "Carbonyl structure and nucleophilic acyl substitution pattern reused here.",
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
    unit: "Organic Compounds Containing Oxygen: Carboxylic Acids",
    topics: [
      "Acidic strength of carboxylic acids and factors affecting it",
      "Physical properties of carboxylic acids",
      "Preparation from nitriles and Grignard reagents",
      "Hydrolysis of esters and amides",
      "Preparation of benzoic acid from alkylbenzenes",
      "Reduction of carboxylic acids",
      "Halogenation of carboxylic acids",
      "Formation of esters, acid chlorides and amides",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "locate-acidic-proton",
      title: "1. Locate the acidic proton before comparing anything",
      keyIdea: "The carboxyl O-H proton is the reference point for the standard acidity comparison.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A carboxylic acid carries an O-H proton on the carboxyl group. This is the proton removed when comparing acid strength, and it is distinct from any other hydrogen elsewhere in the molecule.",
            },
          ],
        },
      ],
    },
    {
      id: "draw-conjugate-base",
      title: "2. Draw the conjugate base before ranking acidity",
      keyIdea: "Carboxylate charge is delocalised over two oxygen atoms.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Removing the O-H proton gives a carboxylate ion in which the negative charge is shared equally between two oxygen atoms through resonance. This delocalisation is the starting point for every acidity comparison in this chapter.",
            },
          ],
        },
      ],
    },
    {
      id: "read-substituent-effect",
      title: "3. Read the substituent effect on the conjugate base",
      keyIdea: "Electron-withdrawing effects generally stabilise nearby negative charge; electron donation can destabilise it. Position and distance matter.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A substituent that withdraws electron density through induction generally stabilises the negative charge on a nearby carboxylate, increasing acid strength. An electron-donating substituent tends to work against this stabilisation. The size of the effect falls off with distance from the carboxyl group.",
            },
          ],
        },
      ],
    },
    {
      id: "include-medium",
      title: "4. Include the medium in every acidity statement",
      keyIdea: "Solvation and solvent alter observed acidity. Avoid universal orders detached from conditions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Observed acid strength depends on how well the solvent stabilises the ions produced. An acidity order stated without reference to solvent and temperature is incomplete and should not be generalised across different media.",
            },
          ],
        },
      ],
    },
    {
      id: "classify-the-reaction",
      title: "5. Classify the reaction by reactive site before naming a product",
      keyIdea: "Preparation, derivative formation, reduction and alpha-halogenation use different reactive sites and conditions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A carboxylic acid can react at the O-H proton, at the carbonyl carbon through nucleophilic acyl substitution, or at the alpha carbon under the right conditions. Identify which site the reagent targets before predicting the product.",
            },
          ],
        },
      ],
    },
    {
      id: "track-carbon-count",
      title: "6. Track carbon count through preparation routes",
      keyIdea: "A Grignard reagent plus carbon dioxide adds one carbon to the organic skeleton. Nitrile hydrolysis retains the nitrile carbon as the carboxyl carbon.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In Grignard carboxylation, the carbon from carbon dioxide becomes the new carboxyl carbon, adding one carbon to the skeleton relative to the starting halide. In nitrile hydrolysis, the nitrile carbon itself becomes the carboxyl carbon, so no carbon is added.",
            },
          ],
        },
      ],
    },
    {
      id: "check-reversibility-workup",
      title: "7. Check reversibility and the required work-up step",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Esterification is an equilibrium process, not a one-way reaction, so yield depends on the specific conditions and any measures used to shift equilibrium. Grignard carboxylation and several hydrolysis routes also require a distinct work-up step, usually acidification, before the final product is obtained.",
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
          "How carboxylic-acid strength is explained through conjugate-base stability, and how preparation, esterification, reduction, halogenation and derivative-formation reactions are chosen by reactive site.",
        ],
        [
          "What is the central method choice?",
          "Draw the conjugate base for acidity questions, or identify the reactive site (hydroxyl, carbonyl carbon, or alpha carbon) for reaction questions.",
        ],
        [
          "Where do most mistakes begin?",
          "Comparing acids without drawing conjugate bases, forgetting the extra carbon from Grignard carboxylation, and treating esterification as irreversible.",
        ],
        [
          "What should come before this chapter?",
          "Organic Basics, Equilibrium, and Aldehydes and Ketones.",
        ],
        [
          "What comes after it?",
          "Amines and Biomolecules extend acid-derivative and carbon-chain reasoning further.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Carboxylic Acids",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Acidity",
          "Acidic strength of carboxylic acids and factors affecting it is explicitly listed within Organic Compounds Containing Oxygen.",
          "Not restated as a separate acidity line item beyond the general reaction and preparation list.",
          "Treat acidity and its factors as the anchored Main topic; use the worked reasoning below to explain, not just rank, acid strength.",
        ],
        [
          "Preparation and derivatives",
          "Not itemised as a separate preparation or derivative list at Main depth.",
          "Physical properties; preparation from nitriles and Grignard reagents, hydrolysis of esters and amides, benzoic acid from alkylbenzenes; reduction, halogenation, and formation of esters, acid chlorides and amides are explicitly listed.",
          "Treat named preparations, reduction, halogenation and derivative formation as Advanced-depth unless independently confirmed for Main.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below. Decarboxylation is not presented as owned current scope because it is not named in either current official document.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before this chapter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Resonance and inductive effects",
          "Draw resonance structures for a delocalised anion and judge inductive strength by distance.",
          "Revise Organic Basics resonance and induction sections.",
        ],
        [
          "Acid-dissociation constants",
          "Read and compare Ka and pKa values within a stated medium.",
          "Revise acid-base equilibrium from Equilibrium.",
        ],
        [
          "Carbonyl structure",
          "Identify the carbonyl carbon and its electrophilic character.",
          "Revise carbonyl electrophilicity from Aldehydes and Ketones.",
        ],
        [
          "Grignard moisture sensitivity",
          "Explain why a Grignard reagent must be kept anhydrous before use.",
          "Revise Grignard formation and reaction from Haloalkanes and Haloarenes.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: identify the reactive site first",
      intro: "Match the question signal to the correct first model before writing an equation.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Acid-strength comparison", "Conjugate-base stability", "Medium, substituent position, distance, resonance, induction"],
        ["Nitrile to acid", "Hydrolysis", "Acidic or basic condition and final work-up"],
        ["Grignard to acid", "Carboxylation", "Dry formation stage, carbon dioxide, acidic work-up"],
        ["Acid plus alcohol", "Esterification equilibrium", "Acid catalyst, reversibility, water or reagent excess"],
        ["Acid to acid chloride", "Hydroxyl-group replacement", "Reagent and by-products"],
        ["Alpha-halogenation", "Enolisation-enabled pathway", "Presence of alpha-hydrogen and halogenating conditions"],
      ],
    },
    {
      id: "reaction-intelligence",
      jump: true,
      slot: "concepts",
      heading: "Relation and reaction intelligence records",
      intro: "Every record carries its condition and its limitation, in line with the source-proximity rule for this chapter.",
      columns: ["Record", "Meaning or outcome", "Conditions", "Limitation or trap"],
      rows: [
        [
          "Ka = (a(H+) x a(A-)) / a(HA)",
          "Thermodynamic acid-dissociation expression.",
          "Defined temperature and standard-state activity treatment.",
          "Concentrations are an approximation; compare values only under compatible conditions.",
        ],
        [
          "pKa = -log10(Ka)",
          "Lower pKa corresponds to stronger acid under comparable conditions.",
          "Same solvent and temperature basis.",
          "A pKa order without medium is incomplete.",
        ],
        [
          "Nitrile hydrolysis",
          "R-CN is converted to carboxylic acid after the appropriate acidic treatment or acid work-up.",
          "Acidic or basic hydrolysis with heat as specified.",
          "Under basic conditions, carboxylate forms before acidification.",
        ],
        [
          "Grignard carboxylation",
          "RMgX + CO2 followed by acidic work-up gives RCOOH.",
          "Dry ether before work-up.",
          "The product has one more carbon than R; moisture destroys the starting Grignard reagent.",
        ],
        [
          "Fischer esterification",
          "Carboxylic acid plus alcohol gives ester and water.",
          "Acid catalyst, reversible equilibrium.",
          "Yield depends on equilibrium control; do not draw an irreversible arrow without context.",
        ],
        [
          "Acid chloride formation",
          "Carboxylic acid reacts with a verified chlorinating reagent such as SOCl2.",
          "Controlled dry reaction.",
          "Reagent-specific by-products and safety are not optional laboratory details.",
        ],
        [
          "Reduction",
          "Strong hydride treatment can convert a carboxylic acid to a primary alcohol after work-up.",
          "Verified reagent such as LiAlH4 in anhydrous medium, then work-up.",
          "Do not use the mild carbonyl-reduction assumption without checking reagent capability.",
        ],
        [
          "Alpha-halogenation",
          "A carboxylic acid with alpha-hydrogen can be halogenated at the alpha carbon under Hell-Volhard-Zelinsky conditions.",
          "Halogen with phosphorus reagent, followed by hydrolysis.",
          "Requires a suitable alpha-hydrogen and complete condition statement.",
        ],
      ],
      note: "Source: NCERT Aldehydes, Ketones and Carboxylic Acids [N4], cross-checked against JEE Main and Advanced syllabus scope [O1][O2].",
    },
  ],

  workedExamples: [
    {
      id: "chloroacetic-vs-acetic-acid",
      prompt: "Explain why chloroacetic acid is a stronger acid than acetic acid.",
      steps: [
        {
          type: "paragraph",
          children: [{ text: "Both acids form resonance-stabilised carboxylate ions after losing H+." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Chloroacetic acid has an electronegative chlorine substituent on the adjacent carbon." }],
        },
        {
          type: "paragraph",
          children: [
            { text: "Its electron-withdrawing inductive effect stabilises negative charge in the chloroacetate conjugate base relative to acetate." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Greater conjugate-base stabilisation makes chloroacetic acid stronger under comparable aqueous conditions." },
          ],
        },
      ],
      answer:
        "Chloroacetic acid is stronger because chlorine's inductive electron withdrawal stabilises its conjugate base more than the unsubstituted acetate ion; the comparison changes if substituent identity, distance, or medium changes.",
    },
  ],

  mistakes: [
    {
      id: "compare-molecules-not-conjugate-bases",
      mistake: "Comparing acid molecules without drawing their conjugate bases.",
      why: [{ type: "paragraph", children: [{ text: "Acid strength is decided by how well the conjugate base is stabilised, not by any feature of the neutral acid alone." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Draw the carboxylate ion for each acid before comparing strength." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "inductive-distance-independent",
      mistake: "Treating an inductive effect as distance-independent.",
      why: [{ type: "paragraph", children: [{ text: "Inductive stabilisation weakens rapidly as the substituent moves further from the carboxylate carbon." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Note the position of the substituent relative to the carboxyl group before ranking acid strength." }] }],
      errorType: "execution-error",
    },
    {
      id: "ignoring-solvent-in-pka",
      mistake: "Ignoring solvent or comparing unrelated pKa scales.",
      why: [{ type: "paragraph", children: [{ text: "pKa values are medium-dependent, so values from different solvents or conditions are not directly comparable." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the solvent and temperature basis before comparing pKa values." }] }],
      errorType: "execution-error",
    },
    {
      id: "grignard-carbon-count-error",
      mistake: "Forgetting the extra carbon introduced by carbon dioxide in Grignard carboxylation.",
      why: [{ type: "paragraph", children: [{ text: "The carboxyl carbon in the product comes from carbon dioxide, not from the original halide carbon skeleton." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Count the carbons in the Grignard reagent and add one for the carbon dioxide carbon before naming the product." }] }],
      errorType: "execution-error",
    },
    {
      id: "nitrile-hydrolysis-condition-missing",
      mistake: "Writing nitrile hydrolysis without the acid or base condition and work-up.",
      why: [{ type: "paragraph", children: [{ text: "Whether the product is obtained as the free acid or as a carboxylate salt depends on whether hydrolysis is acidic or basic and whether acidification follows." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the hydrolysis medium and the work-up step explicitly." }] }],
      errorType: "recall-gap",
    },
    {
      id: "esterification-treated-irreversible",
      mistake: "Treating esterification as automatically complete.",
      why: [{ type: "paragraph", children: [{ text: "Fischer esterification is a reversible equilibrium, so the yield depends on conditions such as reagent excess or water removal." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat esterification as an equilibrium and check what conditions are stated for shifting it." }] }],
      errorType: "decision-error",
    },
    {
      id: "alpha-halogenation-without-alpha-h",
      mistake: "Applying alpha-halogenation to an acid without an alpha-hydrogen.",
      why: [{ type: "paragraph", children: [{ text: "The Hell-Volhard-Zelinsky pathway requires enolisation at the alpha carbon, which needs an alpha-hydrogen to be present." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm an alpha-hydrogen exists before predicting alpha-halogenation." }] }],
      errorType: "execution-error",
    },
    {
      id: "decarboxylation-scope-assumption",
      mistake: "Adding decarboxylation as current owned scope without official support.",
      why: [{ type: "paragraph", children: [{ text: "Decarboxylation is not named in the current JEE Main or JEE Advanced syllabus entries reviewed for this chapter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming decarboxylation is owned current scope." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Resonance and inductive-effect reasoning used to compare conjugate bases.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Acid-dissociation constant and pKa reasoning applied to carboxylic acids.",
    },
    {
      label: "Aldehydes and Ketones",
      url: "/jee/chemistry/aldehydes-ketones",
      relation: "prerequisite",
      description: "Carbonyl structure and nucleophilic acyl substitution pattern reused in this chapter.",
    },
    {
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "same-unit",
      description: "Lateral oxygen-compound chemistry: hydroxyl-group acidity and substitution.",
    },
    {
      label: "Amines",
      url: "/jee/chemistry/amines",
      relation: "forward",
      description: "Extends acid-derivative and nucleophile reasoning to nitrogen-based functional groups.",
    },
    {
      label: "Biomolecules",
      url: "/jee/chemistry/biomolecules",
      relation: "forward",
      description: "Carboxylic-acid and ester chemistry reappear in fatty acids and peptide bonds.",
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
      label: "JEE syllabus for Chemistry",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Exam-level official Chemistry scope.",
    },
  ],

  faqs: [
    {
      question: "Why are carboxylic acids acidic?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Their conjugate bases are stabilised by delocalisation of charge over two oxygen atoms, with substituents and medium altering the degree of that stabilisation and therefore the observed acid strength.",
            },
          ],
        },
      ],
    },
    {
      question: "Is decarboxylation part of the current official scope for this chapter?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It is not named as a separate topic in the current JEE Main 2026 or JEE Advanced 2026 syllabus entries reviewed for this page, so it is not presented here as owned current scope.",
            },
          ],
        },
      ],
    },
    {
      question: "Does a Grignard reagent plus carbon dioxide give an acid with the same number of carbons as the starting halide?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. The carbon from carbon dioxide becomes the new carboxyl carbon, so the product carboxylic acid has one more carbon than the starting Grignard reagent.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-carbonyl-acids", "nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote:
    "Scope statements are drawn only from the current JEE Main 2026 and JEE Advanced 2026 syllabus documents and NCERT Aldehydes, Ketones and Carboxylic Acids. Decarboxylation is deliberately not asserted as owned current scope because it is not named in these documents. No weightage, frequency, or PYQ-count claim is made from official paper archives; they are cited for provenance handling only.",
  contributorPolicy: [
    "Author: unassigned. Ideal author type is a JEE Organic Chemistry educator experienced in carboxyl and acid-derivative chemistry.",
    "Academic reviewer: unassigned. Required specialisation is physical organic acidity, carboxylic-acid preparation, reduction, alpha-halogenation and nucleophilic acyl chemistry, with a postgraduate degree in Chemistry or a closely related discipline.",
    "Every reviewer must eventually link to a centralized, visible, verified contributor profile.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Carboxylic Acids for JEE: Acidity, Preparation and Reactions",
    description:
      "Explain carboxylic-acid strength for JEE Main and Advanced through conjugate-base stability, and classify preparation, esterification, reduction and derivative reactions with full conditions.",
    ogType: "article",
  },
};

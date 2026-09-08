import type { ChapterContent } from "@/content/types";

/**
 * Amines — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Scope check verified against the current JEE Main 2026 syllabus (general
 *   preparation, properties, reactions, uses; nomenclature; classification
 *   and structure; basic character; identification of primary, secondary and
 *   tertiary amines; importance of diazonium salts) and the JEE Advanced 2026
 *   syllabus (preparation from nitro compounds, nitriles and amides; Hofmann
 *   bromamide degradation and Gabriel synthesis; nitrous-acid reactions, azo
 *   coupling, Sandmeyer and related diazonium reactions, carbylamine,
 *   Hinsberg, alkylation and acylation).
 */
export const jeeChemistryAmines: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Amines",
  slug: "amines",
  url: "/jee/chemistry/amines",
  canonicalIntent:
    "Predict amine basicity, preparation, identification, and diazonium chemistry from nitrogen structure, lone-pair availability, medium, substrate class, and reaction conditions.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Every reaction record carries its condition",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Amine behaviour begins with whether the nitrogen lone pair is available to bind a proton or attack an electrophile. Resonance, inductive effects, hybridisation, steric crowding, and solvation all matter. Therefore a basicity order is incomplete unless the compounds and medium are stated.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "For reactions, distinguish primary, secondary, and tertiary amines, and separate aliphatic amines from aromatic amines and diazonium salts before choosing a preparation, test, or named transformation.",
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
      description: "General basicity, resonance, and inductive effects are owned by this chapter and assumed here.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Lewis and Brønsted basicity language is required before comparing amine basicity in solution.",
    },
    {
      label: "Haloalkanes and Haloarenes",
      url: "/jee/chemistry/haloalkanes-haloarenes",
      relation: "prerequisite",
      description: "Nucleophilic substitution and aromatic activation underpin several amine preparations.",
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
    unit: "Amines",
    topics: [
      "Nomenclature, classification and structure",
      "General methods of preparation, properties, reactions and uses",
      "Basic character of amines",
      "Identification of primary, secondary and tertiary amines",
      "Importance of diazonium salts in synthesis",
      "Preparation from nitro compounds, nitriles and amides",
      "Hofmann bromamide degradation and Gabriel synthesis",
      "Reactions with nitrous acid, azo coupling",
      "Sandmeyer and related diazonium reactions",
      "Carbylamine test, Hinsberg test, alkylation and acylation",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "classify-nitrogen",
      title: "1. Classify the nitrogen before anything else",
      keyIdea: "Ammonia, primary, secondary, tertiary, aliphatic, aromatic, amide-derived, and diazonium species require distinct models.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Amines are classified by how many carbon groups replace the hydrogens on nitrogen, and separately by whether the nitrogen is attached to an aliphatic or aromatic system. Amide nitrogen and diazonium nitrogen behave differently again and are not interchangeable with amine nitrogen in a reasoning chain.",
            },
          ],
        },
      ],
    },
    {
      id: "locate-lone-pair",
      title: "2. Locate the lone pair and ask whether it is delocalised",
      keyIdea: "Protonation availability depends on whether the lone pair is localised or shared with an aromatic ring or carbonyl.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In an aliphatic amine the nitrogen lone pair is largely localised and available for protonation. In an aromatic amine such as aniline, the lone pair can delocalise into the ring, reducing its availability. This is the starting point for every basicity comparison.",
            },
          ],
        },
      ],
    },
    {
      id: "specify-medium",
      title: "3. Specify the medium before stating a basicity order",
      keyIdea: "Gas-phase proton affinity and aqueous basicity need not agree because solvation and sterics enter only in solution.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Alkyl substitution increases electron density at nitrogen but also increases steric bulk and changes solvation of the resulting ammonium ion. A basicity order established in the gas phase can differ from the order observed in aqueous solution, so the medium must always accompany a stated order.",
            },
          ],
        },
      ],
    },
    {
      id: "classify-reagent",
      title: "4. Classify the reagent by what it does to the nitrogen or its precursor",
      keyIdea: "Ask whether the reagent reduces a precursor, removes a carbonyl carbon from an amide, alkylates, acylates, nitrosates, or replaces a diazonium group.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Reduction of a nitro compound produces an amine directly. Hofmann bromamide degradation removes the carbonyl carbon from a primary amide. Alkylation and acylation add groups to available N-H bonds. Nitrous acid and diazonium chemistry operate on the aromatic primary amine and its diazonium derivative respectively. Each reagent class implies a different product-tracking method.",
            },
          ],
        },
      ],
    },
    {
      id: "amine-class-for-tests",
      title: "5. Check the amine class before applying a test",
      keyIdea: "Several tests and derivatisations require an N-H bond or apply only to primary amines.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The carbylamine test is diagnostic for primary amines only. The Hinsberg test distinguishes primary, secondary, and tertiary amines by the solubility and reactivity of the sulfonamide product, which depends directly on the presence and number of N-H bonds.",
            },
          ],
        },
      ],
    },
    {
      id: "diazonium-temperature",
      title: "6. Control diazonium temperature and treat formation and transformation separately",
      keyIdea: "Aromatic diazonium formation requires the stated cold conditions, and each subsequent reaction is a distinct transformation step.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A primary aromatic amine forms a diazonium salt with nitrous acid and a mineral acid only within a controlled low-temperature range. The diazonium salt is then a separate reactive intermediate: replacement reactions such as Sandmeyer-type substitutions and azo-coupling reactions are additional steps with their own reagents and conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "verify-product",
      title: "7. Verify the product by tracking nitrogen and carbon",
      keyIdea: "Track nitrogen retention or loss, carbon count, aromatic position, gas evolution, and the final functional group.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Hofmann bromamide degradation loses the original carbonyl carbon, so the product amine has one fewer carbon than the starting amide. Diazonium replacement reactions typically release nitrogen gas while installing a new substituent on the ring. Confirming these changes prevents silently carrying over an incorrect atom count.",
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
          "How nitrogen classification, lone-pair availability, and medium determine amine basicity, and how substrate class and reaction conditions determine preparation, identification, and diazonium chemistry.",
        ],
        [
          "What is the central method choice?",
          "Classify the nitrogen and its class, locate the lone pair and its delocalisation, specify the medium, then match the reagent to the correct preparation, test, or diazonium transformation.",
        ],
        [
          "Where do most mistakes begin?",
          "Stating a universal basicity order without a medium, losing track of the carbon count in Hofmann bromamide degradation, and applying a primary-amine test to a secondary or tertiary amine.",
        ],
        [
          "What should come before Amines?",
          "Organic Basics for resonance and inductive effects, Equilibrium for basicity language, and Haloalkanes and Haloarenes for substitution and aromatic activation.",
        ],
        [
          "What comes after it?",
          "Biomolecules extends amino-acid and peptide nitrogen chemistry, and Chemistry in Everyday Life applies functional-group knowledge to everyday compounds.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Amines",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Nomenclature, classification, structure, basic character",
          "General preparation, properties, reactions, uses, nomenclature, classification, structure, and basic character are explicitly listed.",
          "Assumed background for the named preparations and reactions listed separately.",
          "Build the nitrogen-classification model first.",
        ],
        [
          "Identification and diazonium importance",
          "Identification of primary, secondary and tertiary amines, and the importance of diazonium salts in synthesis, are explicitly listed.",
          "Named diazonium reactions are listed with specific reagents and products.",
          "Treat identification tests and diazonium synthesis as separate but connected topics.",
        ],
        [
          "Named preparations: nitro reduction, Hofmann bromamide, Gabriel synthesis",
          "Not named with this specific level of preparation detail.",
          "Explicitly listed: preparation from nitro compounds, nitriles and amides; Hofmann bromamide degradation; Gabriel synthesis.",
          "Track carbon count changes for Hofmann bromamide degradation specifically.",
        ],
        [
          "Nitrous acid, azo coupling, Sandmeyer, carbylamine, Hinsberg, alkylation, acylation",
          "Not named with this specific reaction detail beyond general reactions and uses.",
          "Explicitly listed as named reactions and tests.",
          "Learn each named reaction with its exact reagent and condition, not as a generic amine reaction.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Amines",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Lewis and Brønsted basicity",
          "Explain what makes a species a base in terms of lone-pair donation or proton acceptance.",
          "Revise acid-base theories in Equilibrium.",
        ],
        [
          "Resonance and inductive effects",
          "Predict whether a lone pair is delocalised into an aromatic ring or a carbonyl.",
          "Revise resonance and inductive effects in Organic Basics.",
        ],
        [
          "Nucleophilic substitution and aromatic activation",
          "Explain why an alkyl halide undergoes substitution and why an aromatic ring is activated or deactivated.",
          "Revise Haloalkanes and Haloarenes.",
        ],
        [
          "Amide structure and oxidation-state accounting",
          "Identify the carbonyl carbon in an amide and track its fate through a reaction.",
          "Revise carbonyl-group structure before Hofmann bromamide degradation.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before comparing or reacting",
      intro: "Match the question signal to the correct first model before any comparison or mechanism.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Basicity order", "Lone-pair availability plus solvation", "Gas or solution, solvent, substituents, sterics"],
        ["Amide to amine with one fewer carbon", "Hofmann bromamide degradation", "Primary amide requirement and carbon count"],
        ["Primary amine synthesis from alkyl halide", "Gabriel synthesis route", "Halide suitability and primary-amine boundary"],
        ["Primary aromatic amine plus nitrous acid", "Diazotisation", "273 to 278 K and mineral-acid medium"],
        ["Diazonium salt plus copper(I) reagent", "Sandmeyer-type replacement", "Exact copper salt and target group"],
        ["Amine identification", "Carbylamine, Hinsberg, or nitrous-acid behaviour", "Amine class, reagent, observation, and limitations"],
      ],
    },
    {
      id: "reaction-intelligence",
      jump: true,
      slot: "concepts",
      heading: "Reaction intelligence records",
      intro: "Every record carries its condition and its limitation; none is generalised beyond the stated substrate.",
      columns: ["Substrate", "Reagent and condition", "Outcome", "Limitation or trap"],
      rows: [
        [
          "Nitro compound",
          "A verified reducing system, followed by the required work-up",
          "Corresponding amine",
          "Product protonation state depends on medium and work-up",
        ],
        [
          "Primary amide",
          "Br2 and NaOH",
          "Primary amine with one fewer carbon through Hofmann bromamide degradation",
          "The carbonyl carbon is lost; do not retain the original carbon count",
        ],
        [
          "Potassium phthalimide plus a suitable primary alkyl halide",
          "Alkylation, then hydrolysis or hydrazinolysis",
          "Primary aliphatic amine (Gabriel synthesis)",
          "Not a general route to aryl amines, secondary amines, or tertiary amines",
        ],
        [
          "Primary amine",
          "CHCl3 and alcoholic KOH with heat",
          "Isocyanide in the carbylamine test",
          "The standard test applies to primary amines, not secondary or tertiary amines",
        ],
        [
          "Primary aromatic amine",
          "NaNO2 and HCl at 273 to 278 K",
          "Aromatic diazonium salt",
          "Temperature control matters; aliphatic diazonium behaviour is not copied from aromatic salts",
        ],
        [
          "Aromatic diazonium salt",
          "CuCl, CuBr, or CuCN as specified",
          "Corresponding aryl chloride, bromide, or nitrile through a Sandmeyer route",
          "The product follows the actual copper(I) reagent used; nitrogen gas leaves",
        ],
        [
          "Aromatic diazonium salt plus an activated aromatic coupling component",
          "Controlled azo-coupling conditions",
          "Azo compound, with position controlled by ring activation and medium",
          "Coupling site and pH are substrate-dependent",
        ],
        [
          "Primary or secondary amine",
          "An acylating reagent under suitable conditions",
          "Amide derivative",
          "A tertiary amine lacks N-H and does not form the analogous N-acyl product by the same route",
        ],
      ],
      note: "Sources: NCERT Amines, N5; official syllabus scope, O1 and O2.",
    },
  ],

  sections: [
    {
      id: "worked-basicity",
      slot: "concepts",
      heading: "Worked reasoning: aniline versus ethylamine in water",
      jump: true,
      concepts: [
        {
          id: "aniline-vs-ethylamine",
          title: "Why is aniline less basic than ethylamine in water?",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "In ethylamine, the nitrogen lone pair is largely localised, and the alkyl group donates electron density. In aniline, the lone pair can delocalise into the benzene ring, reducing its availability for protonation. Under comparable aqueous conditions, this makes aniline less basic than ethylamine.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "This explanation does not authorise a universal order among every amine. Additional alkyl groups also change solvation and steric access, so aqueous orders require the actual species being compared, not a memorised generic sequence.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "universal-basicity-order",
      mistake: "Publishing a universal aliphatic-amine basicity order without stating the medium.",
      why: [{ type: "paragraph", children: [{ text: "Alkyl substitution, sterics, and solvation interact differently in the gas phase and in aqueous solution, so a single order cannot hold everywhere." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the medium (gas phase or aqueous) before writing any basicity order and justify it from lone-pair availability and solvation." }] }],
      errorType: "decision-error",
    },
    {
      id: "aniline-as-alkyl-amine",
      mistake: "Treating aniline like an alkyl amine and ignoring resonance.",
      why: [{ type: "paragraph", children: [{ text: "Aniline's lone pair is delocalised into the aromatic ring, which is not a feature of aliphatic amines." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Draw the resonance structures of aniline before comparing its basicity with any aliphatic amine." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "carbon-count-hofmann",
      mistake: "Retaining the carbonyl carbon count in a Hofmann bromamide degradation product.",
      why: [{ type: "paragraph", children: [{ text: "The reaction removes the carbonyl carbon, so the product amine has one fewer carbon than the starting amide." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Explicitly cross out the carbonyl carbon and recount before naming the product amine." }] }],
      errorType: "execution-error",
    },
    {
      id: "gabriel-scope-error",
      mistake: "Using Gabriel synthesis for an aryl amine or a tertiary amine.",
      why: [{ type: "paragraph", children: [{ text: "Gabriel synthesis is a route to primary aliphatic amines only, based on phthalimide alkylation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the target is a primary aliphatic amine before selecting the Gabriel route." }] }],
      errorType: "decision-error",
    },
    {
      id: "carbylamine-wrong-class",
      mistake: "Applying the carbylamine test to secondary or tertiary amines.",
      why: [{ type: "paragraph", children: [{ text: "The carbylamine (isocyanide) test is diagnostic for primary amines only." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the amine class before predicting a carbylamine-test observation." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "diazotisation-without-cold",
      mistake: "Diazotising an aromatic amine without cold conditions.",
      why: [{ type: "paragraph", children: [{ text: "Aromatic diazonium salts are unstable outside the specified 273 to 278 K range and decompose if the temperature control is ignored." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the 273 to 278 K condition explicitly whenever diazotisation is invoked." }] }],
      errorType: "recall-gap",
    },
    {
      id: "sandmeyer-reagent-mismatch",
      mistake: "Using one Sandmeyer reagent but drawing the product of another.",
      why: [{ type: "paragraph", children: [{ text: "The product substituent follows the actual copper(I) salt used; CuCl, CuBr, and CuCN give different products." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Match the drawn product substituent to the exact copper(I) reagent stated in the question." }] }],
      errorType: "execution-error",
    },
    {
      id: "all-diazonium-equal",
      mistake: "Treating every diazonium salt as equally stable and reactive.",
      why: [{ type: "paragraph", children: [{ text: "Diazonium salt stability and available reactions depend on the aromatic substrate, temperature, and coupling partner." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify the substrate and conditions before assuming a diazonium salt behaves like a generic reference example." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Carboxylic Acids",
      url: "/jee/chemistry/carboxylic-acids",
      relation: "related",
      description: "Carboxylic acid and amide functionality connect directly to amide-based amine preparations.",
    },
    {
      label: "Aldehydes and Ketones",
      url: "/jee/chemistry/aldehydes-ketones",
      relation: "related",
      description: "Carbonyl reactivity underlies several nitrogen-forming and nitrogen-consuming reactions.",
    },
    {
      label: "Biomolecules",
      url: "/jee/chemistry/biomolecules",
      relation: "forward",
      description: "Amino-acid and peptide nitrogen chemistry extends amine structure into biomolecular contexts.",
    },
    {
      label: "Chemistry in Everyday Life",
      url: "/jee/chemistry/chemistry-everyday-life",
      relation: "forward",
      description: "Applies functional-group and reagent knowledge, including nitrogen compounds, to everyday-use chemistry.",
    },
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "General basicity, resonance, and inductive-effect reasoning used throughout this chapter.",
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
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Chemistry subject hub.",
    },
    {
      label: "Equilibrium",
      url: "/jee/chemistry/equilibrium",
      relation: "prerequisite",
      description: "Acid-base language needed for amine basicity discussion.",
    },
    {
      label: "Haloalkanes and Haloarenes",
      url: "/jee/chemistry/haloalkanes-haloarenes",
      relation: "prerequisite",
      description: "Substitution and aromatic activation used in several amine preparations.",
    },
  ],

  faqs: [
    {
      question: "Why is aniline less basic than ethylamine in water?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Aniline delocalises the nitrogen lone pair into the aromatic ring, making it less available for protonation than the mainly localised lone pair in ethylamine.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the carbon-count rule in Hofmann bromamide degradation?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A primary amide gives a primary amine with one fewer carbon because the carbonyl carbon is lost during the degradation.",
            },
          ],
        },
      ],
    },
    {
      question: "Which amines give the standard carbylamine test?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Primary amines under the specified chloroform and alcoholic-base heating conditions. Secondary and tertiary amines do not give this test.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "ncert-chem-amines", "nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote:
    "Store amine class, medium, lone-pair model, reagent, temperature, observation, carbon count, product, official question identity, and source. Selected official questions do not establish frequency or weightage.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Organic Chemistry educator experienced in nitrogen-functional-group and diazonium chemistry.",
    "Academically reviewed by: unassigned. Reviewer specialisation: amine basicity, solution effects, named amine preparations, qualitative tests, aromatic diazonium chemistry, and current JEE scope. Minimum qualification: postgraduate degree in Chemistry, preferably Organic Chemistry, or a closely related discipline with documented nitrogen-organic expertise.",
    "Review scope: every basicity comparison, medium, preparation, carbon-count change, test boundary, diazotisation temperature, named reaction, product, link, metadata field, and schema-content match.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Amines for JEE: Basicity, Tests and Diazonium Logic",
    description:
      "Learn JEE amines through lone-pair availability, medium, basicity, preparation, identification, diazonium reactions, conditions, and traps.",
    ogTitle: "Amines for JEE",
    ogDescription: "Condition-aware amine basicity, preparation, tests, and diazonium chemistry.",
    ogType: "article",
  },
};

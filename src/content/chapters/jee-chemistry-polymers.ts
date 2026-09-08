import type { ChapterContent } from "@/content/types";

/**
 * Polymers — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Polymers is NOT listed in the current JEE Main 2026 Chemistry syllabus.
 *   It is an Advanced 2026 only topic (addition and condensation
 *   polymerisation; homopolymers and copolymers; natural rubber, cellulose,
 *   nylon, Teflon, Bakelite, PVC, biodegradable polymers, and applications).
 *   This boundary is kept explicit throughout the page and is not flattened
 *   into generic "Main and Advanced" wording.
 */
export const jeeChemistryPolymers: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "JEE Advanced",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Polymers",
  slug: "polymers",
  url: "/jee/chemistry/polymers",
  canonicalIntent:
    "Prepare for current JEE Advanced Polymer Chemistry by connecting monomer functionality, polymerisation type, chain composition, architecture, named polymer identity, and application.",

  heroChips: [
    "Advanced 2026 only: not listed in the JEE Main 2026 syllabus",
    "Every named polymer carries a monomer and classification record",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Polymers is listed in the current JEE Advanced 2026 Chemistry syllabus and is not listed in the current JEE Main 2026 Chemistry syllabus.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Study it by identifying the monomer or monomers, their reactive functionality, addition or condensation growth, homo or copolymer composition, chain architecture where relevant, and the verified application of each named material.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "This page must not carry generic Main plus Advanced wording. The Main 2026 Chemistry list moves from Biomolecules to Practical Chemistry without a Polymers unit. Recheck this boundary every cycle.",
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
      description: "Bifunctional monomer identification and repeat-unit notation build directly on functional-group basics.",
    },
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "prerequisite",
      description: "Carbon-carbon double bonds are the reactive site for addition polymerisation.",
    },
    {
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "prerequisite",
      description: "Phenol and alcohol functionality participate in named condensation polymers such as Bakelite.",
    },
    {
      label: "Carboxylic Acids",
      url: "/jee/chemistry/carboxylic-acids",
      relation: "prerequisite",
      description: "Carboxyl functionality and condensation reasoning underlie polyester and polyamide formation.",
    },
    {
      label: "Amines",
      url: "/jee/chemistry/amines",
      relation: "prerequisite",
      description: "Amine functionality is required to understand diamine monomers such as those in nylon-6,6.",
    },
    {
      label: "JEE Advanced Syllabus",
      url: "/jee/jee-advanced/syllabus",
      relation: "up",
      description: "Official Advanced 2026 scope that lists Polymer Chemistry.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for the Chemistry chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Polymers",
    topics: [
      "Addition polymerisation",
      "Condensation polymerisation",
      "Homopolymers and copolymers",
      "Natural rubber",
      "Cellulose",
      "Nylon",
      "Teflon",
      "Bakelite",
      "PVC",
      "Biodegradable polymers and applications",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "monomer-identity",
      title: "1. Draw the actual monomer or pair of monomers",
      keyIdea: "Mark reactive sites on the monomer before naming a polymerisation type.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Every polymer classification starts with the monomer structure. Draw the actual monomer, or the pair of monomers for a condensation polymer, and mark the reactive double bond or functional groups before proceeding to classification.",
            },
          ],
        },
      ],
    },
    {
      id: "growth-mode",
      title: "2. Decide the growth mode",
      keyIdea: "Addition commonly consumes a multiple bond without eliminating a small molecule; condensation links functional groups and eliminates a small molecule in the standard syllabus treatment.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Addition polymerisation opens a reactive double bond and links monomer units without loss of a small molecule in the standard examples. Condensation polymerisation joins two functional groups, typically with elimination of a small molecule such as water, in the syllabus model.",
            },
          ],
        },
      ],
    },
    {
      id: "composition",
      title: "3. Count monomer species for composition",
      keyIdea: "A homopolymer derives from one monomer species; a copolymer uses more than one monomer species.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Composition is decided strictly by the number of distinct monomer species used, not by the number of different atoms visible in the repeat unit. PVC from a single monomer is a homopolymer; nylon-6,6 from two monomers is a copolymer by this definition.",
            },
          ],
        },
      ],
    },
    {
      id: "repeat-unit",
      title: "4. Derive the repeat unit from the bond change",
      keyIdea: "Derive the repeat unit from the bond changes rather than copying a name.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The repeat unit follows directly from tracking which bonds break and form during polymerisation. Copying a memorised repeat-unit drawing without deriving it from the monomer risks errors when a related but different monomer appears.",
            },
          ],
        },
      ],
    },
    {
      id: "architecture",
      title: "5. Treat architecture as a separate, source-supported claim",
      keyIdea: "Linear, branched, or cross-linked character affects material behaviour, but every named claim needs source support.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Chain architecture, linear, branched, or cross-linked, is a separate classification axis from growth mode and composition. State an architecture claim for a specific named polymer only where the source supports it.",
            },
          ],
        },
      ],
    },
    {
      id: "property-application",
      title: "6. Connect application to a verified structural feature",
      keyIdea: "Connect use to a verified structural feature without inventing industrial performance data.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Where an application is stated for a named polymer, it should trace to a structural feature named in the source material, not to invented performance figures or comparisons.",
            },
          ],
        },
      ],
    },
    {
      id: "biodegradability",
      title: "7. Treat biodegradability as a material-specific property",
      keyIdea: "Treat it as a material-specific property, not a synonym for natural origin.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Biodegradability is a property that must be verified for the specific named material. It is not implied simply because a polymer is naturally occurring, and non-biodegradability is not implied simply because a polymer is synthetic.",
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
          "Classifying polymers by monomer identity, polymerisation type, composition, architecture, and verified application, for the current JEE Advanced 2026 syllabus only.",
        ],
        [
          "What is the central method choice?",
          "Draw the monomer, decide addition or condensation, count monomer species for homopolymer or copolymer status, and derive the repeat unit from the bond change.",
        ],
        [
          "Where do most mistakes begin?",
          "Assuming Polymers is current Main 2026 scope, classifying from a product name without drawing monomers, and confusing natural origin with biodegradability.",
        ],
        [
          "What should come before Polymers?",
          "Organic Basics, Hydrocarbons, Alcohols Phenols and Ethers, Carboxylic Acids, and Amines for the underlying monomer functional groups.",
        ],
        [
          "What comes after it?",
          "Chemistry in Everyday Life applies functional-group and material knowledge further; Biomolecules is a related but separate large-molecule class.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Polymers",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Overall unit presence",
          "Not listed in the official JEE Main 2026 Chemistry syllabus.",
          "Explicitly listed as a Chemistry unit.",
          "Treat this as an Advanced-only current-cycle topic; do not study it as Main scope.",
        ],
        [
          "Polymerisation types and composition",
          "Not listed.",
          "Addition and condensation polymerisation, and homopolymers and copolymers, are explicitly listed.",
          "Learn growth mode and monomer-count composition as two separate classification axes.",
        ],
        [
          "Named polymers and applications",
          "Not listed.",
          "Natural rubber, cellulose, nylon, Teflon, Bakelite, PVC, biodegradable polymers, and applications are explicitly listed.",
          "Learn each named polymer's monomer and classification individually; do not infer from trade names.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Polymers",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Carbon-carbon double bonds",
          "Identify the double bond that opens during addition polymerisation.",
          "Revise alkene structure in Hydrocarbons.",
        ],
        [
          "Bifunctional monomers",
          "Identify two reactive functional groups on a single monomer or across a monomer pair.",
          "Revise alcohol, carboxyl, amine, and phenol functional groups.",
        ],
        [
          "Condensation reasoning",
          "Explain which small molecule is eliminated when two functional groups join.",
          "Revise condensation reactions in Carboxylic Acids and Amines.",
        ],
        [
          "Repeat-unit notation",
          "Read and write a repeat unit in brackets with the correct connectivity.",
          "Revise how a repeat unit is derived from monomer bond changes.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: classify before naming",
      intro: "Match the question signal to the correct first model before naming a polymer.",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Alkene-like monomer", "Addition polymerisation", "Which double bond opens and the repeat unit"],
        ["Two bifunctional monomers", "Condensation polymerisation", "Functional groups and eliminated molecule"],
        ["One versus multiple monomers", "Homo or copolymer", "Count monomer species, not repeat-unit atoms"],
        ["Thermoplastic versus network behaviour", "Chain architecture", "Linear, branched, or cross-linked evidence"],
        ["Named polymer", "Monomer-to-repeat-unit map", "Do not rely on trade-name resemblance"],
        ["Biodegradable claim", "Polymer-specific source", "Natural, synthetic, and biodegradable are different classifications"],
      ],
    },
    {
      id: "named-polymer-records",
      jump: true,
      slot: "concepts",
      heading: "Named polymer records",
      intro: "Every named polymer carries its monomer, classification, and an explicit evidence boundary.",
      columns: ["Polymer", "Monomer or building unit", "Classification", "Evidence boundary"],
      rows: [
        [
          "PVC",
          "Chloroethene, also called vinyl chloride",
          "Addition homopolymer",
          "Preserve chlorine on the repeat-unit carbon skeleton",
        ],
        [
          "Teflon, PTFE",
          "Tetrafluoroethene",
          "Addition homopolymer",
          "Do not replace fluorine with chlorine in the repeat unit",
        ],
        [
          "Natural rubber",
          "Isoprene-derived cis-1,4-polyisoprene in the standard treatment",
          "Natural addition polymer",
          "Configuration and repeat-unit drawing require reviewer sign-off",
        ],
        [
          "Nylon-6,6",
          "Hexane-1,6-diamine and hexanedioic acid",
          "Condensation copolymer, a polyamide from two monomer species",
          "Draw amide linkages and account for the two monomers",
        ],
        [
          "Bakelite",
          "Phenol and formaldehyde",
          "Condensation polymer with cross-linked network development",
          "Reaction stage and network wording should remain source-specific",
        ],
        [
          "Cellulose",
          "Beta-D-glucose-derived units joined through beta(1 to 4) glycosidic links",
          "Natural polymer",
          "Do not treat it as an alkene-addition polymer",
        ],
        [
          "PHBV",
          "3-hydroxybutanoic acid and 3-hydroxypentanoic acid derived units",
          "Biodegradable copolyester",
          "Monomer names and repeat-unit representation require source sign-off",
        ],
      ],
      note: "Source: NCERT Chemistry exemplar resources, N7; official syllabus scope, O2.",
    },
  ],

  sections: [
    {
      id: "worked-pvc-nylon",
      slot: "concepts",
      heading: "Worked reasoning: PVC versus nylon-6,6",
      jump: true,
      concepts: [
        {
          id: "pvc-vs-nylon",
          title: "Classification follows the bond-forming event and monomer count",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "PVC begins with one alkene monomer, chloroethene. Polymerisation opens the carbon-carbon double bond and forms a carbon-chain repeat unit without the standard elimination of a small molecule. It is therefore an addition homopolymer.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Nylon-6,6 begins with a diamine and a dicarboxylic acid. Their functional groups form amide links through condensation, using two monomer species. It is therefore a condensation polymer and, by monomer count, a copolymer.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "The classification follows the bond-forming event and monomer count, not the material name.",
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
      id: "polymers-as-main-scope",
      mistake: "Calling Polymers a current JEE Main 2026 chapter.",
      why: [{ type: "paragraph", children: [{ text: "Polymers is not listed in the current official JEE Main 2026 Chemistry syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official-syllabus mapping table on this page before assuming Main-scope relevance." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "name-based-classification",
      mistake: "Classifying from the product name without drawing monomers.",
      why: [{ type: "paragraph", children: [{ text: "A material name does not reveal its monomer or its polymerisation type on its own." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Draw the monomer or monomer pair and derive the classification from the bond change." }] }],
      errorType: "execution-error",
    },
    {
      id: "atom-count-not-monomer-count",
      mistake: "Counting repeat-unit atom types instead of monomer species.",
      why: [{ type: "paragraph", children: [{ text: "Homopolymer or copolymer status is defined by the number of monomer species used, not by the number of atom types in the repeat unit." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Trace the repeat unit back to the number of distinct monomers before naming composition." }] }],
      errorType: "decision-error",
    },
    {
      id: "addition-overgeneralised",
      mistake: "Confusing addition polymerisation with all chain-growth detail beyond scope.",
      why: [{ type: "paragraph", children: [{ text: "The syllabus treatment of addition polymerisation is limited to the standard examples listed; deeper mechanistic detail is not automatically implied." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the explanation within the standard addition-versus-condensation framework used by the syllabus." }] }],
      errorType: "needs-review",
    },
    {
      id: "substituent-omission",
      mistake: "Drawing PVC without chlorine or PTFE without all fluorine substituents.",
      why: [{ type: "paragraph", children: [{ text: "Omitting the characteristic substituent produces an incorrect repeat unit for the named polymer." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the named-polymer record for the exact substituent before finalising a repeat-unit drawing." }] }],
      errorType: "execution-error",
    },
    {
      id: "natural-equals-biodegradable",
      mistake: "Calling every natural polymer biodegradable or every synthetic polymer non-biodegradable.",
      why: [{ type: "paragraph", children: [{ text: "Biodegradability is a material-specific property, not implied by natural or synthetic origin alone." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Verify biodegradability for the specific named material rather than inferring it from origin." }] }],
      errorType: "decision-error",
    },
    {
      id: "nylon-6-vs-66",
      mistake: "Confusing nylon-6 with nylon-6,6.",
      why: [{ type: "paragraph", children: [{ text: "These are different named polymers with different monomer counts and preparation routes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the monomer record for the exact named nylon before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "application-without-source",
      mistake: "Giving an application without the named polymer and source.",
      why: [{ type: "paragraph", children: [{ text: "An unattributed application claim cannot be verified against the syllabus or a reliable source." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the named polymer and its structural feature before stating any application." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Organic Basics",
      url: "/jee/chemistry/organic-basics",
      relation: "prerequisite",
      description: "Functional-group identification needed for monomer analysis.",
    },
    {
      label: "Hydrocarbons",
      url: "/jee/chemistry/hydrocarbons",
      relation: "prerequisite",
      description: "Carbon-carbon double bonds are the reactive site for addition polymerisation.",
    },
    {
      label: "Carboxylic Acids",
      url: "/jee/chemistry/carboxylic-acids",
      relation: "prerequisite",
      description: "Condensation reasoning between carboxyl and other functional groups.",
    },
    {
      label: "Amines",
      url: "/jee/chemistry/amines",
      relation: "prerequisite",
      description: "Amine functionality is required for diamine monomers such as those in nylon-6,6.",
    },
    {
      label: "Biomolecules",
      url: "/jee/chemistry/biomolecules",
      relation: "related",
      description: "A related large-molecule class with its own linkage and structure rules, not part of Polymer classification.",
    },
    {
      label: "Environmental Chemistry",
      url: "/jee/chemistry/environmental-chemistry",
      relation: "related",
      description: "Biodegradable-polymer and material-impact context connects to environmental chemistry treatment.",
    },
    {
      label: "Chemistry in Everyday Life",
      url: "/jee/chemistry/chemistry-everyday-life",
      relation: "forward",
      description: "Applies functional-group and material knowledge to everyday-use chemistry.",
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
      label: "JEE Advanced Syllabus",
      url: "/jee/jee-advanced/syllabus",
      relation: "up",
      description: "Official Advanced 2026 scope document that lists Polymer Chemistry.",
    },
    {
      label: "Alcohols, Phenols and Ethers",
      url: "/jee/chemistry/alcohols-phenols-ethers",
      relation: "prerequisite",
      description: "Phenol functionality used in Bakelite formation.",
    },
  ],

  faqs: [
    {
      question: "Is Polymers in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. It is not listed in the official JEE Main 2026 Chemistry syllabus." }],
        },
      ],
    },
    {
      question: "Is Polymers in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. The official syllabus lists polymerisation types, composition classes, named polymers, biodegradable polymers, and applications.",
            },
          ],
        },
      ],
    },
    {
      question: "What distinguishes addition from condensation polymerisation?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Addition uses reactive unsaturation in the standard examples without eliminating a small molecule, while condensation joins functional groups with elimination of a small molecule in the syllabus model.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["jee-advanced-syllabus", "nta-jee-syllabus", "ncert-chem-exemplar", "jee-advanced-paper-archive"],
  sourceNote:
    "Use only official Advanced papers for current-scope paper examples. Record polymer, monomer, classification axis, repeat unit, paper identity, and official URL. Keep the Main paper module hidden while the topic remains absent from the Main syllabus. Do not publish counts or trends.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: JEE Advanced Organic and Polymer Chemistry educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: polymer classification, named-polymer monomer mapping, and current JEE Advanced scope. Minimum qualification: postgraduate degree in Chemistry, preferably with polymer or macromolecular chemistry exposure.",
    "Review scope: Main-absence statement, every monomer and classification record, repeat-unit derivation, biodegradability claims, links, metadata, and schema-content match.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Polymers for JEE Advanced 2026: Scope and Monomers",
    description:
      "Polymers is in JEE Advanced 2026, not JEE Main 2026. Learn polymerisation, monomers, repeat units, named polymers, and classification.",
    ogTitle: "Polymers for JEE Advanced 2026",
    ogDescription: "Current exam status, monomer logic, polymerisation types, named polymers, and classification traps.",
    ogType: "article",
  },
};

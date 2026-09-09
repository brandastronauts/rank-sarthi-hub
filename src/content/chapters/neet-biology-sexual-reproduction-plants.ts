import type { ChapterContent } from "@/content/types";

/**
 * Sexual Reproduction in Flowering Plants — T06 production content.
 */
export const neetBiologySexualReproductionPlants: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Sexual Reproduction in Flowering Plants",
  slug: "sexual-reproduction-plants",
  url: "/neet/biology/sexual-reproduction-plants",
  canonicalIntent:
    "Teach flower reproductive structures, gametophyte development, pollination, pollen-pistil interaction, double fertilisation and post-fertilisation outcomes at NEET/NCERT depth.",

  heroChips: [
    "Current NEET UG 2026 Unit 6 scope",
    "NCERT-aligned gametophyte and fertilisation logic",
    "No NCERT diagrams copied",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Sexual reproduction in flowering plants for NEET UG 2026 begins with male and female gametophyte development, proceeds through pollination and pollen-pistil interaction, and culminates in double fertilisation. The zygote forms the embryo, the primary endosperm cell forms endosperm, ovules become seeds and the ovary develops into fruit.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Morphology of Plants",
      url: "/neet/biology/morphology-of-plants",
      relation: "prerequisite",
      description: "Flower structure and floral whorls are needed before studying anther and ovule development.",
    },
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Meiosis underpins microsporogenesis and megasporogenesis.",
    },
    {
      label: "Reproduction",
      url: "/neet/biology/reproduction",
      relation: "up",
      description: "Unit 6 umbrella and route map.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 6: Reproduction — Sexual Reproduction in Flowering Plants",
    topics: [
      "Flower structure",
      "Development of male and female gametophytes",
      "Pollination — types, agencies and examples",
      "Outbreeding devices",
      "Pollen-pistil interaction",
      "Double fertilisation",
      "Post-fertilisation events: development of endosperm and embryo",
      "Development of seed and formation of fruit",
      "Special modes: apomixis, parthenocarpy and polyembryony",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "flower-reproductive-architecture",
      title: "1. Flower as reproductive structure",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Androecium is the male reproductive whorl and gynoecium the female reproductive whorl." },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "A typical anther contains microsporangia in which sporogenous cells give rise to pollen mother cells. The ovary contains ovules, each housing the female gametophyte.",
            },
          ],
        },
      ],
    },
    {
      id: "microsporogenesis",
      title: "2. Microsporogenesis and male gametophyte",
      keyIdea: "A pollen grain is the male gametophyte; focus on the vegetative-cell and generative-cell relationship.",
      body: [
        {
          type: "definition",
          term: "Microsporogenesis sequence",
          children: [
            { text: "Pollen mother cell (2n) -> meiosis -> microspore tetrad (n) -> individual microspores -> pollen grains." },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Microsporogenesis is meiotic formation of microspores. At shedding a pollen grain can be two-celled or, in some species, three-celled, but the key relationship is the vegetative-cell and generative-cell distinction.",
            },
          ],
        },
      ],
    },
    {
      id: "megasporogenesis",
      title: "3. Megasporogenesis and female gametophyte",
      keyIdea: "The common mature embryo sac is 7-celled and 8-nucleate.",
      body: [
        {
          type: "definition",
          term: "Megasporogenesis sequence",
          children: [
            { text: "Megaspore mother cell (2n) -> meiosis -> four megaspores (n) -> usually one functional megaspore -> embryo sac." },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "In the common monosporic pattern taught by NCERT, the mature embryo sac has a micropylar end with an egg apparatus of one egg and two synergids, a chalazal end with three antipodals, and a centre with a large central cell containing two polar nuclei.",
            },
          ],
        },
      ],
    },
    {
      id: "pollination",
      title: "4. Pollination",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Pollination is transfer of pollen grains to the stigma." }],
        },
        {
          type: "definition",
          term: "Autogamy",
          children: [{ text: "Pollen transfer to the stigma of the same flower." }],
        },
        {
          type: "definition",
          term: "Geitonogamy",
          children: [{ text: "Transfer between different flowers of the same plant. Functionally cross-pollination by an agent but genetically similar to self-pollination." }],
        },
        {
          type: "definition",
          term: "Xenogamy",
          children: [{ text: "Transfer between flowers of different plants of the same species; introduces genetically different pollen." }],
        },
        {
          type: "list",
          items: [
            [{ text: "Abiotic agents: wind and water." }],
            [{ text: "Biotic agents: animals." }],
          ],
        },
      ],
    },
    {
      id: "outbreeding-devices",
      title: "5. Outbreeding devices",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "NCERT-level devices reduce self-pollination or self-fertilisation through mechanisms such as different timing of pollen release and stigma receptivity, spatial separation of anther/stigma, self-incompatibility and unisexuality. The exact effect depends on the floral condition.",
            },
          ],
        },
      ],
    },
    {
      id: "pollen-pistil-interaction",
      title: "6. Pollen-pistil interaction",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The pistil can recognise compatible versus incompatible pollen. Compatible pollen germinates, produces a pollen tube and delivers two male gametes into the embryo sac, commonly through a synergid.",
            },
          ],
        },
      ],
    },
    {
      id: "double-fertilisation",
      title: "7. Double fertilisation",
      keyIdea: "Syngamy forms the zygote; triple fusion forms the primary endosperm nucleus.",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Syngamy: one male gamete plus egg forms the diploid zygote." }],
            [{ text: "Triple fusion: second male gamete plus two polar nuclei/secondary nucleus context forms the triploid primary endosperm nucleus." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Because syngamy and triple fusion both occur in the same embryo sac, the combined event is double fertilisation." },
          ],
        },
      ],
    },
    {
      id: "post-fertilisation",
      title: "8. Post-fertilisation development",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Zygote -> embryo." }],
            [{ text: "Primary endosperm cell -> endosperm." }],
            [{ text: "Ovule -> seed." }],
            [{ text: "Ovary -> fruit." }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Endosperm development generally precedes embryo development in the standard NCERT relationship." }],
        },
      ],
    },
    {
      id: "special-modes",
      title: "9. Apomixis, parthenocarpy and polyembryony",
      keyIdea: "Apomixis and parthenocarpy must not be interchanged.",
      body: [
        {
          type: "definition",
          term: "Apomixis",
          children: [{ text: "Seed formation without fertilisation." }],
        },
        {
          type: "definition",
          term: "Parthenocarpy",
          children: [{ text: "Fruit formation without fertilisation." }],
        },
        {
          type: "definition",
          term: "Polyembryony",
          children: [{ text: "More than one embryo develops in a seed." }],
        },
      ],
    },
  ],

  tables: [
    {
      id: "gametophyte-comparison",
      slot: "concepts",
      jump: true,
      heading: "Male versus female gametophyte dataset",
      columns: ["Process", "Starting meiotic cell", "Meiotic products", "Functional gametophyte relationship"],
      rows: [
        ["Microsporogenesis", "Pollen mother cell", "Four microspores", "Each microspore can develop into a pollen grain"],
        ["Megasporogenesis", "Megaspore mother cell", "Four megaspores", "Commonly one functional megaspore forms embryo sac"],
      ],
    },
    {
      id: "double-fertilisation-dataset",
      slot: "concepts",
      jump: true,
      heading: "Double-fertilisation dataset",
      columns: ["Fusion", "Participants", "Product", "Ploidy"],
      rows: [
        ["Syngamy", "Male gamete + egg", "Zygote", "2n"],
        ["Triple fusion", "Male gamete + polar-nuclear material", "Primary endosperm nucleus", "3n"],
      ],
    },
    {
      id: "special-mode-matrix",
      slot: "concepts",
      jump: true,
      heading: "Special-mode matrix",
      columns: ["Term", "Fertilisation absent?", "Primary outcome"],
      rows: [
        ["Apomixis", "Yes", "Seed/embryo formation without fertilisation"],
        ["Parthenocarpy", "Yes", "Fruit formation without fertilisation"],
        ["Polyembryony", "Not defined by absence of fertilisation", "Multiple embryos in one seed"],
      ],
    },
  ],

  mistakes: [
    {
      id: "pollen-equals-male-gamete",
      mistake: "Pollen grain equals male gamete.",
      why: [{ type: "paragraph", children: [{ text: "Pollen is the male gametophyte and produces/carries male gametes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep pollen grain (gametophyte) and male gamete as separate entities." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "geitonogamy-equals-xenogamy",
      mistake: "Geitonogamy equals xenogamy.",
      why: [{ type: "paragraph", children: [{ text: "Geitonogamy is transfer within the same plant; xenogamy is transfer between different plants of the same species." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Distinguish by whether the source and destination flowers belong to the same plant or different plants." }] }],
      errorType: "recall-gap",
    },
    {
      id: "triple-fusion-forms-zygote",
      mistake: "Triple fusion forms zygote.",
      why: [{ type: "paragraph", children: [{ text: "Syngamy forms the zygote; triple fusion forms the primary endosperm nucleus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Map each fusion event to its distinct product and ploidy." }] }],
      errorType: "recall-gap",
    },
    {
      id: "apomixis-equals-parthenocarpy",
      mistake: "Apomixis equals parthenocarpy.",
      why: [{ type: "paragraph", children: [{ text: "One is seed formation without fertilisation; the other is fruit formation without fertilisation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate the seed-level and fruit-level outcomes for each term." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "embryo-sac-8-celled",
      mistake: "Embryo sac called 8-celled.",
      why: [{ type: "paragraph", children: [{ text: "The standard mature sac is 7-celled, 8-nucleate." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Learn the cell and nucleus count as 7 cells and 8 nuclei, not 8 cells." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    { label: "Reproduction", url: "/neet/biology/reproduction", relation: "up" },
    { label: "Morphology of Plants", url: "/neet/biology/morphology-of-plants", relation: "prerequisite" },
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "prerequisite" },
    { label: "Human Reproduction", url: "/neet/biology/human-reproduction", relation: "related" },
    { label: "Genetics", url: "/neet/biology/genetics", relation: "forward" },
    { label: "Plant Physiology", url: "/neet/biology/plant-physiology", relation: "forward" },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents", "ncert-exemplar-index"],
  sourceNote:
    "Aligned to the current NCERT Sexual Reproduction in Flowering Plants chapter (https://ncert.nic.in/textbook/pdf/lebo101.pdf) and the exact 2026 Unit 6 scope. Visuals are redrawn conceptually and do not copy NCERT figures.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Sexual Reproduction in Flowering Plants 2026",
    description:
      "Study male and female gametophytes, pollination, pollen-pistil interaction, double fertilisation, seed/fruit development, apomixis and polyembryony for NEET 2026.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Ecosystem — T06 production content.
 * Current official scope: verified against NEET UG 2026 Unit 10, which
 * explicitly names ecosystem patterns/components, productivity, decomposition,
 * energy flow and pyramids of number, biomass and energy.
 * No weightage, PYQ frequency or trend claims are asserted.
 */
export const neetBiologyEcosystem: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Ecosystem",
  slug: "ecosystem",
  url: "/neet/biology/ecosystem",
  canonicalIntent:
    "Teach the verified NEET UG 2026 Ecosystem scope: ecosystem components, productivity, decomposition, energy flow and ecological pyramids of number, biomass and energy.",

  heroChips: [
    "Current NEET UG 2026 status: explicitly listed in Unit 10",
    "GPP, NPP and decomposition mapped to NCERT depth",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Ecosystem is explicitly part of NEET UG 2026 Unit 10. The current scope includes ecosystem patterns and components, productivity and decomposition, energy flow, and ecological pyramids of number, biomass and energy.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "These are taught as connected processes: organisms and the physical environment form the system, producers create organic matter, decomposers return materials, and energy moves through trophic relationships with progressive loss at every transfer.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        { text: "This page does not publish invented weightage, expected question counts or trend percentages." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Organisms and Populations",
      url: "/neet/biology/organisms-populations",
      relation: "prerequisite",
      description: "Population interactions and attributes precede ecosystem-level structure.",
    },
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "up",
      description: "Ecology umbrella route for the current Unit 10 progression.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the Biology chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 10 — Ecology",
    topics: [
      "Ecosystem: patterns and components",
      "Productivity: GPP, respiration loss and NPP",
      "Decomposition: fragmentation, leaching, catabolism, humification, mineralisation",
      "Energy flow through trophic levels",
      "Ecological pyramids of number, biomass and energy",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "ecosystem-as-functional-unit",
      title: "1. An ecosystem is a functional unit, not just a habitat",
      keyIdea: "Separate structure (abiotic + biotic components) from process (production, decomposition, energy flow).",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An ecosystem is a functional system in which living organisms interact with one another and with the physical environment. Abiotic components are the physical and chemical environment, including light, temperature, water, soil and inorganic materials. Biotic components are producers, consumers and decomposers.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Producers: ", bold: true }, { text: "autotrophic organisms that convert inorganic inputs into organic matter, commonly by photosynthesis." }],
            [{ text: "Consumers: ", bold: true }, { text: "heterotrophs that obtain organic matter from other organisms." }],
            [{ text: "Decomposers: ", bold: true }, { text: "chiefly microorganisms such as bacteria and fungi that enzymatically break down detrital organic matter and release simpler substances." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "Detritivores such as earthworms physically fragment detritus. They should not be conflated with microbial decomposers that perform much of the biochemical breakdown." },
          ],
        },
      ],
    },
    {
      id: "productivity",
      title: "2. Productivity is a rate: GPP, respiration loss and NPP",
      keyIdea: "NPP = GPP - R. Production is an amount; productivity is explicitly a rate over area and time.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Primary production is biomass or organic matter produced by producers per unit area over a time period. Gross primary productivity (GPP) is the rate of total organic-matter production by producers through photosynthesis before subtracting their respiratory use. Respiration loss (R) is the portion of captured energy/organic matter used by producers in respiration. Net primary productivity (NPP) is the biomass/energy remaining after producer respiration and is available to heterotrophs and decomposer pathways.",
            },
          ],
        },
        {
          type: "definition",
          term: "NPP = GPP - R",
          children: [
            { text: "GPP is gross primary productivity, R is respiration losses of producers, and NPP is net primary productivity." },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "Production and productivity are not interchangeable. Production is an amount over a stated area/time context; productivity explicitly describes the rate." },
          ],
        },
      ],
    },
    {
      id: "decomposition",
      title: "3. Decomposition has five NCERT processes that can act simultaneously",
      keyIdea: "Fragmentation, leaching, catabolism, humification and mineralisation are not a rigid single-file sequence.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Detritus includes dead plant and animal material and associated organic remains. NCERT identifies five important decomposition processes." },
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Fragmentation: ", bold: true }, { text: "detritivores break detritus into smaller particles." }],
            [{ text: "Leaching: ", bold: true }, { text: "water-soluble inorganic nutrients move downward through soil horizons and may become precipitated as unavailable salts." }],
            [{ text: "Catabolism: ", bold: true }, { text: "bacterial and fungal enzymes break complex detrital substances into simpler inorganic substances." }],
            [{ text: "Humification: ", bold: true }, { text: "resistant, dark, amorphous humus accumulates in soil and decomposes slowly." }],
            [{ text: "Mineralisation: ", bold: true }, { text: "microbes further degrade humus/organic matter and release inorganic nutrients." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "The page must not present these five as one rigid conveyor-belt sequence. NCERT explicitly teaches that decomposition processes can operate simultaneously on detritus." },
          ],
        },
      ],
    },
    {
      id: "decomposition-controls",
      title: "4. Litter quality, temperature, moisture and oxygen control decomposition rate",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Litter/detritus quality: ", bold: true }, { text: "material rich in nitrogen and water-soluble substances decomposes more readily than material rich in lignin and chitin." }],
            [{ text: "Temperature: ", bold: true }, { text: "warm conditions generally favour microbial activity." }],
            [{ text: "Moisture: ", bold: true }, { text: "adequate soil moisture favours decomposition." }],
            [{ text: "Oxygen status: ", bold: true }, { text: "decomposition is largely oxygen-requiring; anaerobic conditions can inhibit it and promote accumulation of organic material." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [{ text: "These are ecological controls, not a universal numerical prediction model." }],
        },
      ],
    },
    {
      id: "energy-flow",
      title: "5. Energy flow is unidirectional; the ten percent law is a teaching simplification",
      keyIdea: "Energy is not recycled the way nutrients are recycled; the ten percent law is not a universal constant.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Most ecosystems depend ultimately on solar energy captured by producers. A simplified relationship map is: solar input -> producer fixation -> herbivore/primary consumer -> higher consumers. A parallel detrital route is: dead organic matter -> detritus -> detritivore/decomposer pathway. Energy flow is unidirectional; energy is not recycled in the same way nutrients are recycled.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "NCERT uses the ten percent law as a teaching rule for transfer between successive trophic levels. It may be explained as a simplified ecological-efficiency approximation used in textbook food-chain reasoning, but it must not be claimed as exact in every real ecosystem, species pair or trophic interaction.",
            },
          ],
        },
      ],
    },
    {
      id: "ecological-pyramids",
      title: "6. Pyramids of number, biomass and energy measure different quantities",
      keyIdea: "Only the pyramid of energy is always upright in the NCERT framework.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Pyramid of number measures the number of individuals at successive trophic levels and can be upright or inverted depending on ecosystem structure; NCERT comparison context includes upright grassland-type patterns and inverted tree/parasitic-chain patterns.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Pyramid of biomass measures standing biomass at successive trophic levels, usually in a defined area at a given time. Common terrestrial examples are upright, while aquatic systems can show inverted biomass because a small standing crop of rapidly renewing phytoplankton can support a larger standing biomass of consumers at a snapshot in time.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Pyramid of energy represents energy flow through trophic levels over a time basis. It is always upright in the NCERT framework because usable energy decreases at each trophic transfer and energy is dissipated as heat/metabolic use.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "A pyramid is a simplified trophic representation. It can fail to show species that occupy more than one trophic level, complete food-web complexity, decomposer/detrital pathways adequately, or seasonal turnover when only standing biomass is compared.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "ecosystem-components",
      slot: "concepts",
      jump: true,
      heading: "Ecosystem component dataset",
      columns: ["Component class", "Representative role", "Main relationship"],
      rows: [
        ["Abiotic environment", "Light, water, soil, temperature, inorganic materials", "Sets physical/chemical conditions"],
        ["Producer", "Autotrophic biomass production", "Captures energy and produces organic matter"],
        ["Consumer", "Heterotrophic feeding", "Transfers organic matter and energy across trophic relationships"],
        ["Decomposer", "Microbial biochemical breakdown", "Converts detrital organic matter toward simpler inorganic forms"],
        ["Detritivore", "Physical fragmentation of detritus", "Increases surface area and supports decomposition"],
      ],
    },
    {
      id: "productivity-dataset",
      slot: "concepts",
      jump: true,
      heading: "Productivity dataset",
      columns: ["Term", "Production-ready definition", "Relationship"],
      rows: [
        ["Primary production", "Organic matter/biomass produced by producers over area and time", "Source pool for ecosystem biomass"],
        ["GPP", "Total rate of organic-matter production by producers before respiratory loss", "Gross production"],
        ["R", "Producer respiration loss", "Subtract from GPP"],
        ["NPP", "Rate of biomass/energy remaining after producer respiration", "NPP = GPP - R"],
        ["Secondary productivity", "Rate of new organic-matter formation by consumers", "Consumer-level production"],
      ],
    },
    {
      id: "decomposition-dataset",
      slot: "concepts",
      jump: true,
      heading: "Decomposition dataset",
      intro: "Fragmentation, leaching, catabolism, humification and mineralisation are not a compulsory single-file sequence; multiple processes can operate concurrently.",
      columns: ["Process", "What occurs", "Major agent/context", "Outcome"],
      rows: [
        ["Fragmentation", "Detritus broken into smaller particles", "Detritivores such as earthworms", "Smaller particles, more exposed material"],
        ["Leaching", "Soluble inorganic nutrients move downward with water", "Soil-water movement", "Nutrients can move to lower horizons or precipitate"],
        ["Catabolism", "Complex detrital compounds enzymatically degraded", "Bacterial and fungal enzymes", "Simpler inorganic substances"],
        ["Humification", "Resistant humus accumulates", "Soil decomposition context", "Slow-decomposing nutrient reservoir"],
        ["Mineralisation", "Inorganic nutrients released from organic material/humus", "Microbial activity", "Nutrients returned to inorganic pool"],
      ],
    },
    {
      id: "ecological-pyramid-comparison",
      slot: "concepts",
      jump: true,
      heading: "Ecological-pyramid comparison",
      columns: ["Pyramid", "Measures", "Orientation", "NCERT-safe example/context", "Main caution"],
      rows: [
        ["Number", "Individuals per trophic level", "Upright or inverted", "Grassland upright; tree/parasitic chain can invert", "Ignores organism size"],
        ["Biomass", "Standing biomass per trophic level", "Upright or inverted", "Terrestrial commonly upright; aquatic can invert", "Snapshot may hide rapid turnover"],
        ["Energy", "Energy flow per trophic level over time", "Always upright", "Producer to consumer energy decline", "Must not be read as biomass"],
      ],
    },
  ],

  mistakes: [
    {
      id: "gpp-npp-synonyms",
      mistake: "GPP and NPP treated as synonyms.",
      why: [{ type: "paragraph", children: [{ text: "NPP is GPP after producer respiration loss, not the same quantity." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Apply NPP = GPP - R and confirm which quantity a question asks for." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "r-misread",
      mistake: "'R' interpreted as respiratory quotient.",
      why: [{ type: "paragraph", children: [{ text: "In the productivity relationship, R means producer respiration loss, not respiratory quotient." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Read R in context as respiration loss whenever it appears in NPP = GPP - R." }] }],
      errorType: "recall-gap",
    },
    {
      id: "decomposition-rigid-sequence",
      mistake: "Decomposition steps forced into one rigid sequence.",
      why: [{ type: "paragraph", children: [{ text: "Fragmentation, leaching, catabolism, humification and mineralisation can operate simultaneously on detritus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat the five processes as concurrent, not strictly sequential." }] }],
      errorType: "decision-error",
    },
    {
      id: "detritivore-decomposer-confusion",
      mistake: "Detritivore and decomposer treated as identical.",
      why: [{ type: "paragraph", children: [{ text: "Detritivores fragment detritus physically; microbes perform much of the biochemical catabolism." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the physical-fragmentation role and the microbial-breakdown role distinct." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "biomass-pyramid-always-upright",
      mistake: "Biomass pyramid assumed always upright.",
      why: [{ type: "paragraph", children: [{ text: "Aquatic biomass pyramids can invert because rapidly renewing phytoplankton biomass can support a larger consumer standing biomass at a given snapshot." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the ecosystem is terrestrial or aquatic before assuming orientation." }] }],
      errorType: "recall-gap",
    },
    {
      id: "energy-pyramid-as-standing-stock",
      mistake: "Energy pyramid treated like a standing-stock measure.",
      why: [{ type: "paragraph", children: [{ text: "The energy pyramid represents energy flow over time, not a snapshot standing quantity." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Read the energy pyramid as a flow-rate representation, always upright." }] }],
      errorType: "execution-error",
    },
    {
      id: "ten-percent-law-universal",
      mistake: "Ten percent law presented as an exact universal constant.",
      why: [{ type: "paragraph", children: [{ text: "It is an NCERT simplified transfer rule for teaching purposes, not a fixed value for every real trophic transfer." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use it as an approximation in textbook food-chain reasoning only." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "up",
      description: "Ecology umbrella route for Unit 10 progression.",
    },
    {
      label: "Organisms and Populations",
      url: "/neet/biology/organisms-populations",
      relation: "prerequisite",
      description: "Population interactions and attributes that precede ecosystem-level structure.",
    },
    {
      label: "Biodiversity and Conservation",
      url: "/neet/biology/biodiversity-conservation",
      relation: "forward",
      description: "Continues Unit 10 into biodiversity patterns, loss and conservation.",
    },
  ],

  links: [
    {
      label: "NEET Biology Syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Official current-scope reference for Unit 10.",
    },
  ],

  faqs: [
    {
      question: "What is the relationship between GPP and NPP?",
      answer: [{ type: "paragraph", children: [{ text: "At NCERT depth, NPP = GPP - R, where R is producer respiration loss." }] }],
    },
    {
      question: "What are the major decomposition processes in NCERT Biology?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Fragmentation, leaching, catabolism, humification and mineralisation. They should not be treated as a compulsory rigid sequence because several operate simultaneously on detritus.",
            },
          ],
        },
      ],
    },
    {
      question: "Which ecological pyramid is always upright?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "The pyramid of energy is always upright in the NCERT framework because usable energy decreases at successive trophic transfers." }],
        },
      ],
    },
    {
      question: "Can a biomass pyramid be inverted?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. Aquatic ecosystems can show an inverted standing-biomass pyramid because a small, rapidly renewing producer biomass can support a larger consumer standing biomass.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents"],
  sourceNote:
    "Verified against the NMC/NTA NEET UG 2026 syllabus Unit 10 and current NCERT Class XII Ecosystem content. NCERT wording is paraphrased; NCERT diagrams are not reproduced. NCERT Ecosystem chapter access: https://ncert.gov.in/textbook/pdf/lebo112.pdf. SATHEE mirror used only where direct NCERT retrieval was difficult: https://sathee.iitk.ac.in/ncert-books/ncert-books-theory/class-12/nbt-bio-12/bio-12-chapter-14-ecosystem/.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Ecosystem 2026: GPP, NPP, Decomposition, Energy Flow and Pyramids",
    description:
      "Study NEET UG 2026 Ecosystem with GPP vs NPP, decomposition processes, trophic energy flow, and pyramids of number, biomass and energy at NCERT depth.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Biodiversity and Conservation — T06 production content.
 * Current official scope: verified against NEET UG 2026 Unit 10, which
 * explicitly names concept and patterns of biodiversity, importance and loss,
 * conservation, hotspots, endangered organisms, extinction, Red Data Book,
 * biosphere reserves, National Parks, sanctuaries and Sacred Groves.
 * No current biodiversity counts, protected-area counts or similar changing
 * inventories are published without a separately verified current source.
 */
export const neetBiologyBiodiversityConservation: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Biodiversity and Conservation",
  slug: "biodiversity-conservation",
  url: "/neet/biology/biodiversity-conservation",
  canonicalIntent:
    "Teach the verified NEET UG 2026 Biodiversity and Conservation scope: levels and patterns of biodiversity, loss, extinction, and in situ vs ex situ conservation, without stale protected-area or species-count claims.",

  heroChips: [
    "Current NEET UG 2026 status: explicitly listed in Unit 10",
    "Dynamic counts intentionally omitted without a dated current source",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Biodiversity and its conservation is explicitly part of NEET UG 2026 Unit 10. Current official scope includes the concept and patterns of biodiversity, its importance and loss, conservation, hotspots, endangered organisms, extinction, Red Data Book, biosphere reserves, National Parks, sanctuaries and Sacred Groves.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page teaches durable concepts and does not present old textbook counts of hotspots, protected areas or endangered species as current inventories.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Organisms and Populations",
      url: "/neet/biology/organisms-populations",
      relation: "prerequisite",
      description: "Population-level ecology concepts that underlie biodiversity patterns.",
    },
    {
      label: "Ecosystem",
      url: "/neet/biology/ecosystem",
      relation: "prerequisite",
      description: "Ecosystem structure and process concepts that connect to biodiversity and habitat loss.",
    },
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "up",
      description: "Ecology umbrella route for the current Unit 10 progression.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 10 — Ecology",
    topics: [
      "Concept and patterns of biodiversity",
      "Importance of biodiversity",
      "Loss of biodiversity",
      "Biodiversity conservation: hotspots, endangered organisms, extinction, Red Data Book",
      "Biosphere reserves, National Parks, sanctuaries and Sacred Groves",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "biodiversity-concept",
      title: "1. Biodiversity has three dimensions, not just a species count",
      keyIdea: "Genetic, species and ecological diversity are distinct levels of biodiversity.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Genetic diversity: ", bold: true }, { text: "variation in genes/alleles within a species or among populations." }],
            [{ text: "Species diversity: ", bold: true }, { text: "variety and relative representation of species in a region/community." }],
            [{ text: "Ecological diversity: ", bold: true }, { text: "variety of ecosystems, habitats or ecological communities." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "The page should not reduce biodiversity to only a species count." }],
        },
      ],
    },
    {
      id: "latitudinal-gradient",
      title: "2. Species richness generally follows a latitudinal gradient",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "NCERT uses the broad pattern that species richness tends to be higher in tropical regions and generally decreases toward higher latitudes. Textbook explanations include longer uninterrupted evolutionary time, lower seasonality/more predictable environments, and greater solar-energy availability contributing to productivity.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "This is a large-scale ecological pattern, not a rule that every tropical site must contain more species than every temperate site." }],
        },
      ],
    },
    {
      id: "species-area-relationship",
      title: "3. Species richness relates to explored area through an empirical equation",
      keyIdea: "log S = log C + Z log A describes an empirical relationship, not a universal predictor.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Within a region, species richness generally increases with explored area up to limits. NCERT represents the relationship as a rectangular hyperbola on an arithmetic scale and a straight line on a log-log scale.",
            },
          ],
        },
        {
          type: "definition",
          term: "log S = log C + Z log A",
          children: [
            { text: "S is species richness, A is area, C is an intercept-related constant, and Z is the slope/regression coefficient." },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "The equation should not be used as a universal predictor without appropriate taxonomic, geographic and scale context." }],
        },
      ],
    },
    {
      id: "importance-of-biodiversity",
      title: "4. Biodiversity's value is framed through three lenses",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Narrowly utilitarian value: ", bold: true }, { text: "direct material benefits such as food, fibre, fuel and useful biological products." }],
            [{ text: "Broadly utilitarian value: ", bold: true }, { text: "ecosystem services such as pollination, nutrient cycling, water/air purification and environmental regulation." }],
            [{ text: "Ethical value: ", bold: true }, { text: "responsibility to protect other life forms and pass biological heritage to future generations." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "The page should not invent monetary valuations or current market statistics." }],
        },
      ],
    },
    {
      id: "biodiversity-loss",
      title: "5. Four NCERT causes explain contemporary biodiversity loss",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Habitat loss and fragmentation: ", bold: true }, { text: "natural habitats are destroyed or divided into smaller isolated fragments, reducing viable space and connectivity." }],
            [{ text: "Over-exploitation: ", bold: true }, { text: "biological resources are removed faster than populations can recover." }],
            [{ text: "Alien species invasion: ", bold: true }, { text: "introduced species can disrupt native populations and ecological relationships." }],
            [{ text: "Co-extinctions: ", bold: true }, { text: "extinction of one species can cause dependent or tightly associated species to disappear." }],
          ],
        },
      ],
    },
    {
      id: "extinction-endangered-red-data-book",
      title: "6. Extinction, endangered status and the Red Data Book",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Extinction means a species no longer exists anywhere. Endangered organisms are organisms facing a high risk of extinction under the relevant conservation-assessment context. For NEET/NCERT context, the Red Data Book is a conservation-information concept associated with threatened/endangered species records.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "The page must not publish dynamic endangered-species totals without a dated authoritative source, and must not imply that one static book gives a permanently current global inventory.",
            },
          ],
        },
      ],
    },
    {
      id: "in-situ-conservation",
      title: "7. In situ conservation protects species within natural habitats",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In situ conservation protects species in their natural habitats and aims to protect ecological relationships and broader habitats. Current-scope categories explicitly named by the 2026 syllabus include biodiversity hotspots, biosphere reserves, National Parks, wildlife sanctuaries and Sacred Groves.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Biodiversity hotspots: ", bold: true }, { text: "regions prioritised because of exceptional biological richness/endemicity combined with high threat." }],
            [{ text: "Biosphere reserves: ", bold: true }, { text: "large landscape-level conservation areas combining biodiversity protection with zonation and sustainable-use concepts." }],
            [{ text: "National Parks: ", bold: true }, { text: "protected areas with strong habitat/species conservation purpose under applicable legal frameworks." }],
            [{ text: "Wildlife sanctuaries: ", bold: true }, { text: "protected areas established for wildlife/habitat conservation under applicable frameworks." }],
            [{ text: "Sacred Groves: ", bold: true }, { text: "patches of natural vegetation protected by local cultural/religious traditions, often preserving rare or locally important biodiversity." }],
          ],
        },
      ],
    },
    {
      id: "ex-situ-conservation",
      title: "8. Ex situ conservation protects organisms outside their natural habitat",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Ex situ conservation protects organisms or genetic material outside the natural habitat. NCERT teaching examples include zoological parks, botanical gardens, tissue-culture propagation, cryopreservation of gametes/biological material, and other controlled conservation collections where source appropriate.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The current 2026 syllabus explicitly names in situ categories more prominently, but ex situ remains important NCERT conceptual depth for understanding conservation strategy.",
            },
          ],
        },
      ],
    },
    {
      id: "dynamic-number-safety",
      title: "9. Dynamic-number safety",
      body: [
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Do not treat mutable numbers such as current hotspot totals, current Indian National Park counts, sanctuary counts, current endangered-species totals or current global species estimates as established facts on this page unless a separate authoritative current source and verification date are attached. The conceptual scope above does not require those numbers.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "biodiversity-level-dataset",
      slot: "concepts",
      jump: true,
      heading: "Biodiversity-level dataset",
      columns: ["Level", "Unit of variation", "Example type"],
      rows: [
        ["Genetic diversity", "Genes/alleles within a species or populations", "Variation within a biological species"],
        ["Species diversity", "Species composition/richness", "Variety of species within a region/community"],
        ["Ecological diversity", "Habitats/ecosystems", "Forests, grasslands, wetlands and other ecosystem types"],
      ],
    },
    {
      id: "biodiversity-loss-dataset",
      slot: "concepts",
      jump: true,
      heading: "Biodiversity-loss dataset",
      columns: ["Cause", "Biological mechanism", "High-risk confusion"],
      rows: [
        ["Habitat loss and fragmentation", "Removes habitat and isolates populations", "Fragmentation is not merely a smaller total area; connectivity also changes"],
        ["Over-exploitation", "Removal exceeds recovery/replacement", "Use pressure is different from habitat destruction"],
        ["Alien species invasion", "Introduced organisms disrupt native communities", "Alien does not automatically mean harmful; the issue is invasive ecological impact"],
        ["Co-extinctions", "Dependent associated species disappear after partner/host loss", "One extinction can propagate through relationships"],
      ],
    },
    {
      id: "conservation-strategy-matrix",
      slot: "concepts",
      jump: true,
      heading: "Conservation strategy matrix",
      columns: ["Strategy", "Where conservation occurs", "Current-scope categories / NCERT examples", "Main strength"],
      rows: [
        ["In situ", "Natural habitat", "Hotspots, biosphere reserves, National Parks, sanctuaries, Sacred Groves", "Protects species with ecological relationships/habitat"],
        ["Ex situ", "Outside natural habitat", "Zoological parks, botanical gardens, tissue culture, cryopreservation", "Supports controlled protection, propagation or genetic-material preservation"],
      ],
    },
  ],

  mistakes: [
    {
      id: "biodiversity-species-count-only",
      mistake: "Biodiversity reduced to species count only.",
      why: [{ type: "paragraph", children: [{ text: "Biodiversity includes genetic, species and ecological dimensions, not just species number." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether a question is about genetic, species or ecological diversity before answering." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "species-area-variables-undefined",
      mistake: "Species-area equation used without defining variables.",
      why: [{ type: "paragraph", children: [{ text: "S, A, C and Z each carry specific meaning within an empirical relationship." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always define S, A, C and Z and state the empirical, non-universal context before using the equation." }] }],
      errorType: "execution-error",
    },
    {
      id: "fragmentation-as-only-loss",
      mistake: "Habitat fragmentation treated as only habitat loss.",
      why: [{ type: "paragraph", children: [{ text: "Fragmentation also isolates habitat and populations, not merely reducing total area." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Distinguish total-area loss from the added effect of isolation and reduced connectivity." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "alien-species-assumed-invasive",
      mistake: "Alien species treated as automatically invasive.",
      why: [{ type: "paragraph", children: [{ text: "The relevant distinction is ecological harm/disruption, not merely non-native origin." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Assess disruption to native populations/relationships before calling a species invasive." }] }],
      errorType: "decision-error",
    },
    {
      id: "in-situ-ex-situ-reversed",
      mistake: "In situ and ex situ conservation reversed.",
      why: [{ type: "paragraph", children: [{ text: "In situ is within the natural habitat; ex situ is outside it." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the location of conservation (natural habitat vs controlled facility) before labelling the strategy." }] }],
      errorType: "recall-gap",
    },
    {
      id: "old-counts-as-current",
      mistake: "Old NCERT protected-area counts presented as current.",
      why: [{ type: "paragraph", children: [{ text: "Protected-area, hotspot and endangered-species totals change over time and require a dated authoritative current source." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Omit dynamic counts or independently date-verify them before using them as current facts." }] }],
      errorType: "needs-review",
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
      label: "Ecosystem",
      url: "/neet/biology/ecosystem",
      relation: "prerequisite",
      description: "Ecosystem structure and process concepts connecting to biodiversity and habitat loss.",
    },
    {
      label: "Organisms and Populations",
      url: "/neet/biology/organisms-populations",
      relation: "prerequisite",
      description: "Population-level ecology concepts underlying biodiversity patterns.",
    },
    {
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "related",
      description: "Related concepts on species origin and diversification.",
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
      question: "What are the three levels of biodiversity in NCERT Biology?",
      answer: [{ type: "paragraph", children: [{ text: "Genetic diversity, species diversity and ecological diversity." }] }],
    },
    {
      question: "What are the four major causes of biodiversity loss in the NCERT framework?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Habitat loss and fragmentation, over-exploitation, alien species invasion and co-extinctions." }],
        },
      ],
    },
    {
      question: "What is the species-area relationship equation?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "log S = log C + Z log A, where S is species richness, A is area, C is an intercept-related constant and Z is the slope/regression coefficient." },
          ],
        },
      ],
    },
    {
      question: "What is the difference between in situ and ex situ conservation?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "In situ conservation protects organisms in their natural habitats, while ex situ conservation protects organisms or genetic material outside natural habitats under controlled conditions.",
            },
          ],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents"],
  sourceNote:
    "Verified against the NMC/NTA NEET UG 2026 syllabus Unit 10 and current NCERT Class XII Biodiversity and Conservation content. Dynamic counts from older editions are intentionally omitted. NCERT chapter access: https://ncert.nic.in/textbook/pdf/lebo113.pdf. SATHEE mirror used only where direct NCERT retrieval was difficult: https://sathee.iitk.ac.in/ncert-books/ncert-books-theory/class-12/nbt-bio-12/bio-12-chapter-15-biodiversity-and-conservation/.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Biodiversity and Conservation 2026: Patterns, Loss and Conservation",
    description:
      "Learn NEET UG 2026 biodiversity patterns, species-area relationship, biodiversity loss, hotspots and in situ vs ex situ conservation at NCERT depth.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * NEET Ecology — T06 contextual umbrella / navigation route.
 * CONTEXTUAL_UMBRELLA: owns the Unit 10 hierarchy and routing map; focused
 * depth belongs to Organisms and Populations, Ecosystem and Biodiversity and
 * Conservation. Per the N05 tightening, the lateral route to
 * /neet/biology/biotechnology-applications has been removed; the canonical
 * path is Ecology -> Organisms and Populations -> Ecosystem -> Biodiversity
 * and Conservation. contentStatus stays "draft" until academic review.
 */
export const neetBiologyEcology: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Ecology",
  slug: "ecology",
  url: "/neet/biology/ecology",
  canonicalIntent:
    "Map the current NEET UG 2026 Ecology and Environment unit hierarchy and route population, ecosystem and biodiversity intent to their focused pages without duplicating them.",

  heroChips: [
    "Contextual umbrella for NEET UG 2026 Unit 10",
    "Routes to Organisms and Populations, Ecosystem, Biodiversity and Conservation",
    "No invented weightage, trend or question-count data",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET UG 2026, the current Ecology and Environment unit progresses from organisms and populations to ecosystem processes and biodiversity conservation. This Ecology route is a conceptual map and router. It owns hierarchy and cross-level relationships, while focused depth belongs to Organisms and Populations, Ecosystem, and Biodiversity and Conservation.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages." }],
    },
  ],

  prerequisites: [
    {
      label: "Living World",
      url: "/neet/biology/living-world",
      relation: "prerequisite",
      description: "Basic classification and biodiversity vocabulary used before ecological levels of organisation.",
    },
    {
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "prerequisite",
      description: "Adaptation and population-level change concepts feed into organism-environment relationships.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the NEET Biology chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Ecology and Environment",
    topics: [
      "Organisms and environment / population interactions and attributes",
      "Ecosystem",
      "Biodiversity and conservation",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "unit-10-route-map",
      title: "1. The current Unit 10 route runs from organisms to biodiversity",
      keyIdea: "Ecology umbrella -> Organisms and Populations -> Ecosystem -> Biodiversity and Conservation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The canonical current Unit 10 route map is: Ecology umbrella, then Organisms and Populations, then Ecosystem, then Biodiversity and Conservation. The two later focused routes carry their own dedicated chapter depth and are not duplicated here." },
          ],
        },
      ],
    },
    {
      id: "ecological-hierarchy",
      title: "2. Ecological organisation runs from organism to biosphere",
      keyIdea: "A property such as birth rate applies at the population level, not to a single organism; a property such as energy flow applies at the ecosystem level.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Organism: one individual living system." }],
            [{ text: "Population: individuals of the same species in a defined area/time context." }],
            [{ text: "Community: interacting populations of different species." }],
            [{ text: "Ecosystem: biological community plus abiotic environment and process relationships such as productivity, decomposition and energy flow." }],
            [{ text: "Biosphere: the global zone of life containing all ecosystems." }],
          ],
        },
      ],
    },
    {
      id: "organism-to-population",
      title: "3. Population-level properties emerge only when individuals are grouped",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Individual organisms experience environmental factors. Population-level properties emerge when individuals are considered as a group, including density, birth/death rates, age structure and growth." },
          ],
        },
      ],
    },
    {
      id: "population-to-community",
      title: "4. Interspecific interactions define the community level",
      keyIdea: "The current official list explicitly names mutualism, competition, predation and parasitism.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "When populations of different species interact, relationships can be beneficial, harmful or neutral. The current official list explicitly names mutualism, competition, predation and parasitism." },
          ],
        },
      ],
    },
    {
      id: "community-to-ecosystem",
      title: "5. An ecosystem adds abiotic components and process flow",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "An ecosystem adds abiotic components and process flow to the biological community. Production depth for components, productivity, decomposition, energy flow and ecological pyramids belongs to the dedicated Ecosystem chapter." },
          ],
        },
      ],
    },
    {
      id: "ecosystem-to-biodiversity",
      title: "6. Biodiversity examines variety, patterns and conservation",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Biodiversity examines variety and patterns of life and the problem of conservation across genetic, species and ecosystem contexts. Focused current depth belongs to the dedicated Biodiversity and Conservation chapter." },
          ],
        },
      ],
    },
    {
      id: "environmental-issues-boundary",
      title: "7. Environmental Issues remains a frozen, non-current route",
      body: [
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "/neet/biology/environmental-issues remains a frozen historical/not-current route for this verified NEET UG 2026 state. It is not inserted into current Unit 10 merely because older NCERT editions contain such a chapter." },
          ],
        },
      ],
    },
    {
      id: "route-decision",
      title: "8. Route selection depends on which concept the question tests",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Population growth or interspecific interaction -> Organisms and Populations." }],
            [{ text: "Productivity, decomposition or energy pyramid -> Ecosystem." }],
            [{ text: "Hotspots, endangered organisms or protected areas -> Biodiversity and Conservation." }],
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "hierarchy-dataset",
      jump: true,
      slot: "concepts",
      heading: "Ecological hierarchy dataset",
      columns: ["Level", "Definition"],
      rows: [
        ["Organism", "Individual living system"],
        ["Population", "Same-species group in a defined area/time"],
        ["Community", "Multiple interacting populations"],
        ["Ecosystem", "Community plus abiotic environment and processes"],
        ["Biosphere", "Global sum of ecosystems"],
      ],
    },
    {
      id: "route-owner-dataset",
      jump: true,
      slot: "related",
      heading: "Route-owner dataset",
      columns: ["Query concept", "Owner page"],
      rows: [
        ["Population attributes/growth/interactions", "/neet/biology/organisms-populations"],
        ["Ecosystem components/productivity/decomposition/energy flow/pyramids", "/neet/biology/ecosystem"],
        ["Biodiversity patterns/loss/conservation/protected areas", "/neet/biology/biodiversity-conservation"],
        ["Overall hierarchy and route selection", "/neet/biology/ecology"],
      ],
    },
  ],

  mistakes: [
    {
      id: "birth-rate-individual-error",
      mistake: "Treating birth rate as an attribute of an individual organism.",
      why: [{ type: "paragraph", children: [{ text: "Birth rate is a population attribute; it has no meaning for a single organism." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Ask whether the property can apply to one individual or only to a group before assigning it a level." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "community-ecosystem-equated",
      mistake: "Equating community with ecosystem.",
      why: [{ type: "paragraph", children: [{ text: "An ecosystem includes the biological community plus abiotic environment and process relationships such as energy flow." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether abiotic components and processes are part of the description before calling it an ecosystem." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "umbrella-depth-assumption",
      mistake: "Assuming every ecology topic belongs on this umbrella page.",
      why: [{ type: "paragraph", children: [{ text: "Focused child pages, not the umbrella, own depth for populations, ecosystems and biodiversity." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the route-owner dataset to send a query to its focused page." }] }],
      errorType: "decision-error",
    },
    {
      id: "environmental-issues-currency-error",
      mistake: "Assuming the older Environmental Issues chapter is current NEET UG 2026 scope.",
      why: [{ type: "paragraph", children: [{ text: "Environmental Issues retains a frozen, non-current classification for this verified cycle." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the current/contextual boundary note before treating Environmental Issues as current scope." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Organisms and Populations",
      url: "/neet/biology/organisms-populations",
      relation: "forward",
      description: "Focused current chapter on population attributes, growth models and interspecific interactions.",
    },
    {
      label: "Ecosystem",
      url: "/neet/biology/ecosystem",
      relation: "forward",
      description: "Focused chapter on ecosystem components, productivity, decomposition and energy flow.",
    },
    {
      label: "Biodiversity and Conservation",
      url: "/neet/biology/biodiversity-conservation",
      relation: "forward",
      description: "Focused chapter on biodiversity patterns, loss and conservation.",
    },
  ],

  links: [
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "NEET Biology subject hub.",
    },
    {
      label: "Living World",
      url: "/neet/biology/living-world",
      relation: "prerequisite",
      description: "Classification and biodiversity vocabulary prerequisite.",
    },
    {
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "prerequisite",
      description: "Adaptation and population-change prerequisite.",
    },
  ],

  faqs: [
    {
      question: "What are the major current Ecology routes for NEET 2026?",
      answer: [{ type: "paragraph", children: [{ text: "Organisms and Populations, Ecosystem, and Biodiversity and Conservation, with this page acting as the umbrella." }] }],
    },
    {
      question: "What is the difference between a community and an ecosystem?",
      answer: [{ type: "paragraph", children: [{ text: "A community is interacting populations; an ecosystem includes that biological community plus abiotic components and process relationships." }] }],
    },
    {
      question: "Is Environmental Issues being treated as current Unit 10 scope here?",
      answer: [{ type: "paragraph", children: [{ text: "No. Its frozen historical/not-current classification is preserved." }] }],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents"],
  sourceNote: "NCERT Organisms and Populations: https://ncert.nic.in/textbook/pdf/lebo111.pdf",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Ecology 2026: Organisms, Ecosystems and Biodiversity Unit Map",
    description:
      "Navigate the current NEET UG 2026 ecology unit from organisms and populations to ecosystems and biodiversity, with clear ownership and scope boundaries.",
  },
};

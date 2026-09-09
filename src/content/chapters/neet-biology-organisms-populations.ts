import type { ChapterContent } from "@/content/types";

/**
 * NEET Organisms and Populations — T06 production content.
 * Covers environmental response logic, population attributes and growth,
 * and the explicitly named interspecific interactions, with NCERT-only
 * interaction categories clearly separated from the official 2026 list.
 * Per the N05 tightening, the lateral route to /neet/biology/plant-physiology
 * has been removed. contentStatus stays "draft" until academic review.
 */
export const neetBiologyOrganismsPopulations: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Organisms and Populations",
  slug: "organisms-populations",
  url: "/neet/biology/organisms-populations",
  canonicalIntent:
    "Explain NEET UG 2026 organism-environment responses, population attributes and growth models, and the explicitly named interspecific interactions.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 10",
    "Exponential vs logistic growth, with conditions",
    "No invented weightage, trend or question-count data",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Organisms and Populations for NEET UG 2026 connects how organisms respond to their environment with population-level attributes such as growth, birth rate, death rate and age distribution, and with interspecific interactions including mutualism, competition, predation and parasitism. NCERT growth models and interaction signs provide the reasoning layer.",
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
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "prerequisite",
      description: "Adaptation and selection concepts underpin organism-environment response strategies.",
    },
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "up",
      description: "Contextual umbrella that maps this chapter into the current Unit 10 hierarchy.",
    },
  ],

  syllabusMapping: {
    unit: "Ecology and Environment",
    topics: [
      "Organisms and environment",
      "Population interactions: mutualism, competition, predation, parasitism",
      "Population attributes: growth, birth rate, death rate, age distribution",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "organism-environment",
      title: "1. Organisms respond to environmental variation based on physiology and habitat",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Organisms experience environmental variation in temperature, water, light and soil-related conditions. Their responses depend on physiology, life history and habitat." },
          ],
        },
      ],
    },
    {
      id: "response-strategies",
      title: "2. Four response strategies describe how organisms handle environmental change",
      keyIdea: "regulate, conform, migrate, suspend — no species uses only one strategy exclusively.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Regulate: maintain a relatively stable internal state despite external change within physiological limits." }],
            [{ text: "Conform: internal conditions vary with external conditions." }],
            [{ text: "Migrate: move temporarily to a more favourable habitat." }],
            [{ text: "Suspend: reduce activity/metabolism through dormant states during unfavourable periods." }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Do not imply that every species uses one strategy exclusively." }],
        },
      ],
    },
    {
      id: "population-definition-attributes",
      title: "3. A population is defined and described through group-level attributes",
      keyIdea: "Growth, birth rate, death rate and age distribution are explicitly named in the current official wording.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "A population is a group of individuals of the same species occupying a defined area in a defined time context and functioning as an ecological unit." },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Density (N): population size or abundance measure in a defined area/volume/context." }],
            [{ text: "Birth rate: addition through births per population/time relationship." }],
            [{ text: "Death rate: loss through deaths per population/time relationship." }],
            [{ text: "Sex ratio: proportion of males and females where biologically applicable." }],
            [{ text: "Age distribution: proportions in pre-reproductive, reproductive and post-reproductive categories." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "The official 2026 wording explicitly names growth, birth rate, death rate and age distribution. Density and sex ratio are retained as direct NCERT population-attribute context." },
          ],
        },
      ],
    },
    {
      id: "population-change",
      title: "4. Population size changes through births, deaths, immigration and emigration",
      body: [
        {
          type: "definition",
          term: "Population change",
          children: [{ text: "births + immigration - deaths - emigration. This relationship is conceptual and does not create real-world human population predictions." }],
        },
      ],
    },
    {
      id: "exponential-growth",
      title: "5. Exponential growth assumes effectively unlimited resources",
      keyIdea: "dN/dt = rN, integrated as N_t = N_0 e^(rt); this is not a universal expectation in nature.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Under effectively unlimited resources, population growth can be modelled as dN/dt = rN, where N is population density/size at time t, r is the intrinsic rate of natural increase, and dN/dt is the instantaneous rate of population change. The integrated form is N_t = N_0 e^(rt)." },
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "The key condition is near-unlimited resources. It is not a universal expectation in nature." }],
        },
      ],
    },
    {
      id: "logistic-growth",
      title: "6. Logistic growth introduces carrying capacity when resources are limiting",
      keyIdea: "dN/dt = rN((K-N)/K); as N approaches K, the growth term decreases, giving a sigmoid curve.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "When resources become limiting, NCERT uses the logistic model dN/dt = rN((K - N)/K), where K is the carrying capacity of the habitat for the population under the stated conditions. As N approaches K, the growth term decreases, and the idealised curve is sigmoid." },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "High-risk distinction: the exponential model assumes little effective resource limitation, while the logistic model explicitly includes carrying capacity." }],
        },
      ],
    },
    {
      id: "age-distribution",
      title: "7. Age distribution is read as a group-level structure, not an individual trait",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Age structure can be displayed using age pyramids. The inference is based on relative pre-reproductive, reproductive and post-reproductive proportions, not on a single individual's age." },
          ],
        },
      ],
    },
    {
      id: "explicit-current-interactions",
      title: "8. Four interspecific interactions are explicitly current: mutualism, competition, predation, parasitism",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Mutualism (+/+): both interacting species benefit. NCERT examples include lichen as a fungal plus photosynthetic partner association, mycorrhiza between fungi and plant roots, and the fig tree and pollinating wasp as a highly specific plant-pollinator mutualism." }],
            [{ text: "Competition (-/-): both populations experience reduced fitness relative to absence of competition. NCERT example: flamingoes and resident fishes competing for zooplankton in shallow South American lakes." }],
            [{ text: "Predation (+/-): the predator benefits and prey is harmed. Predation transfers energy across trophic levels and can regulate prey populations. A tiger-deer relationship is an intuitive example, while herbivory also fits the broad predator-consumer logic in NCERT." }],
            [{ text: "Parasitism (+/-): the parasite benefits while host fitness is reduced. NCERT examples include Cuscuta growing on host plants and brood parasitism in cuckoo/koel-host bird relationships." }],
          ],
        },
      ],
    },
    {
      id: "ncert-contextual-interactions",
      title: "9. Commensalism and amensalism remain NCERT context, not the explicit current list",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Commensalism (+/0): one species benefits and the other is neither clearly benefited nor harmed. NCERT examples: orchid epiphyte on mango tree; barnacles on whale." }],
            [{ text: "Amensalism (-/0): one species is harmed and the other is unaffected." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "These remain useful for NCERT comparison, but this page labels them NCERT context, not explicit in the 2026 interaction list, rather than silently expanding official scope." },
          ],
        },
      ],
    },
    {
      id: "model-caution",
      title: "10. Population equations are simplified models with stated assumptions",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Population equations are simplified models. They require stated assumptions and cannot be used as direct prediction engines for real human populations without empirical parameters and broader demographic modelling." },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "population-attribute-dataset",
      jump: true,
      slot: "concepts",
      heading: "Population-attribute dataset",
      columns: ["Attribute", "Level", "Direction/meaning"],
      rows: [
        ["Density N", "Population", "Abundance in defined context"],
        ["Birth rate", "Population", "Adds individuals"],
        ["Death rate", "Population", "Removes individuals"],
        ["Immigration", "Population", "Adds individuals"],
        ["Emigration", "Population", "Removes individuals"],
        ["Sex ratio", "Population", "Relative sex composition"],
        ["Age distribution", "Population", "Pre-reproductive/reproductive/post-reproductive composition"],
      ],
    },
    {
      id: "growth-model-dataset",
      jump: true,
      slot: "concepts",
      heading: "Growth-model dataset",
      columns: ["Model", "Equation", "Resource condition", "Key parameter"],
      rows: [
        ["Exponential", "dN/dt = rN", "Effectively unlimited", "r intrinsic rate"],
        ["Logistic", "dN/dt = rN((K-N)/K)", "Resources limiting", "K carrying capacity"],
      ],
    },
    {
      id: "interaction-sign-matrix",
      jump: true,
      slot: "concepts",
      heading: "Interaction sign matrix",
      columns: ["Interaction", "Species A", "Species B", "2026 status", "NCERT example"],
      rows: [
        ["Mutualism", "+", "+", "Explicit current", "Lichen / mycorrhiza / fig-wasp"],
        ["Competition", "-", "-", "Explicit current", "Flamingoes vs fishes for zooplankton"],
        ["Predation", "+", "-", "Explicit current", "Predator-prey relationship"],
        ["Parasitism", "+", "-", "Explicit current", "Cuscuta on host / brood parasitism"],
        ["Commensalism", "+", "0", "NCERT context, not explicit list", "Orchid on mango / barnacle on whale"],
        ["Amensalism", "-", "0", "NCERT context, not explicit list", "Comparison-only category"],
      ],
    },
  ],

  mistakes: [
    {
      id: "birth-rate-individual-attribute",
      mistake: "Assigning population birth rate to an individual organism.",
      why: [{ type: "paragraph", children: [{ text: "Birth rate is defined at the population level, not for a single organism." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the attribute requires a group of individuals before naming it a population attribute." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "logistic-missing-k",
      mistake: "Using the logistic model without accounting for carrying capacity.",
      why: [{ type: "paragraph", children: [{ text: "K is the model's limiting-resource parameter; omitting it removes the model's defining feature." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always identify K before applying the logistic growth equation." }] }],
      errorType: "execution-error",
    },
    {
      id: "r-k-parameter-confusion",
      mistake: "Treating r and K as the same parameter.",
      why: [{ type: "paragraph", children: [{ text: "r is the intrinsic growth rate; K is the carrying capacity, a separate resource-limit parameter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep r (rate) and K (capacity) as distinct quantities in every growth-model question." }] }],
      errorType: "recall-gap",
    },
    {
      id: "predation-parasitism-sign-error",
      mistake: "Giving predation and parasitism different sign pairs.",
      why: [{ type: "paragraph", children: [{ text: "Both are +/- at the population-interaction level, even though the mechanisms differ." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Recall that predation and parasitism share the same +/- sign pattern despite different biological mechanisms." }] }],
      errorType: "recall-gap",
    },
    {
      id: "commensalism-scope-error",
      mistake: "Presenting commensalism as an explicitly named 2026 interaction.",
      why: [{ type: "paragraph", children: [{ text: "The verified current interaction list names mutualism, competition, predation and parasitism; commensalism remains NCERT context only." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the interaction sign matrix's 2026 status column before claiming commensalism is explicit current scope." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Ecosystem",
      url: "/neet/biology/ecosystem",
      relation: "forward",
      description: "Extends community-level interactions into ecosystem components, productivity and energy flow.",
    },
    {
      label: "Biodiversity and Conservation",
      url: "/neet/biology/biodiversity-conservation",
      relation: "forward",
      description: "Extends population and species-level ideas into biodiversity patterns and conservation.",
    },
  ],

  links: [
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "up",
      description: "Contextual umbrella mapping this chapter into the current Unit 10 hierarchy.",
    },
    {
      label: "Evolution",
      url: "/neet/biology/evolution",
      relation: "prerequisite",
      description: "Adaptation and selection foundation for organism-environment responses.",
    },
  ],

  faqs: [
    {
      question: "What is the difference between exponential and logistic population growth?",
      answer: [{ type: "paragraph", children: [{ text: "Exponential growth assumes effectively unlimited resources; logistic growth includes resource limitation through carrying capacity K." }] }],
    },
    {
      question: "Which population interactions are explicitly named in NEET UG 2026?",
      answer: [{ type: "paragraph", children: [{ text: "Mutualism, competition, predation and parasitism." }] }],
    },
    {
      question: "Is commensalism part of the explicit current interaction list?",
      answer: [{ type: "paragraph", children: [{ text: "It remains useful NCERT comparison context but is not separately named in the verified 2026 interaction list." }] }],
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
    title: "NEET Organisms and Populations 2026: Growth Models and Interactions",
    description:
      "Study NEET 2026 population attributes, exponential vs logistic growth, carrying capacity and mutualism, competition, predation and parasitism with NCERT context.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Environmental Issues — T06 production content.
 * Classification: HISTORICAL_OR_NOT_CURRENTLY_LISTED.
 * The verified NEET UG 2026 Unit 10 wording does not explicitly list
 * Environmental Issues. This page is a contextual environmental Biology
 * resource only, carrying NO current-2026 badge, importance, weightage or
 * frequency claim.
 */
export const neetBiologyEnvironmentalIssues: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Environmental Issues",
  slug: "environmental-issues",
  url: "/neet/biology/environmental-issues",
  canonicalIntent:
    "Retain a source-controlled environmental Biology context page for pollution and environmental-change concepts while explicitly stating that Environmental Issues is not listed as a current NEET UG 2026 Unit 10 topic.",

  heroChips: [
    "Current NEET UG 2026 status: Not explicitly listed in the verified official syllabus.",
    "Contextual/foundation resource only — not a current-syllabus chapter",
    "No current NEET 2026 importance, weightage or frequency claims",
  ],

  directAnswer: [
    {
      type: "note",
      tone: "caution",
      children: [
        { text: "Current NEET UG 2026 status: Not explicitly listed in the verified official syllabus." },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Environmental Issues remains in the frozen Rank Sarthi architecture as a contextual Biology resource. This page explains stable NCERT concepts such as air and water pollution, eutrophication, biomagnification, solid waste, greenhouse effect, ozone depletion and deforestation.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "It is not presented as a current Unit 10 chapter and carries no current-scope badge, importance label, weightage or frequency claim. Current ecology navigation continues through Organisms and Populations, Ecosystem, and Biodiversity and Conservation.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "prerequisite",
      description: "Ecology umbrella concepts precede this contextual environmental resource.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Contextual resource layer only.",
    },
  ],

  syllabusMapping: {
    unit: "Not part of verified NEET UG 2026 Unit 10 (Ecology)",
    topics: [
      "Historical/contextual foundation topic — not explicitly listed in the current official syllabus",
      "Air and water pollution",
      "Eutrophication and biomagnification",
      "Greenhouse effect and ozone depletion",
      "Deforestation",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "why-page-exists",
      title: "1. Why this page still exists",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The frozen Rank Sarthi architecture retains the route as a contextual environmental Biology resource. It is not a current Unit 10 child. Current ecology navigation should continue through Organisms and Populations, Ecosystem, and Biodiversity and Conservation.",
            },
          ],
        },
      ],
    },
    {
      id: "pollution-concept",
      title: "2. Pollution concept",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At older NCERT teaching depth, pollution is an undesirable physical, chemical or biological change in environmental quality, and pollutants are agents causing that change. This page focuses on biological relationships and avoids stale legal limits, emissions standards, pollution-index thresholds or policy details.",
            },
          ],
        },
      ],
    },
    {
      id: "air-water-pollution",
      title: "3. Air pollution and water pollution/oxygen demand",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Air pollution relationship: combustion/industrial/vehicular emissions -> particulate or gaseous pollutants -> effects on organisms/environment. Particulate pollutants are suspended solid/liquid particles; gaseous pollutants include gases released from combustion and industrial processes.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Water pollution: domestic sewage and nutrient-rich effluents can increase organic/nutrient loading in receiving waters. Microbial decomposition of organic matter consumes dissolved oxygen: organic load increases -> microbial decomposition demand increases -> biochemical oxygen demand can increase -> dissolved oxygen can decline.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [{ text: "This is a biological relationship, not a medical or drinking-water safety rule, and no current city pollution statistics or regulatory limits are included." }],
        },
      ],
    },
    {
      id: "eutrophication",
      title: "4. Eutrophication",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Eutrophication is nutrient enrichment of a water body that can stimulate excessive primary production/algal growth. When algal/plant biomass dies, decomposition can consume dissolved oxygen and degrade aquatic conditions. Natural eutrophication is long-term lake ageing through nutrient/sediment accumulation, while accelerated/cultural eutrophication is rapid nutrient enrichment driven by human inputs such as sewage or agricultural/industrial nutrient loading.",
            },
          ],
        },
      ],
    },
    {
      id: "biomagnification",
      title: "5. Biomagnification",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Biomagnification is an increase in concentration of certain persistent, poorly metabolised/excreted toxic substances at successive trophic levels: environmental contaminant -> producer/low trophic level -> consumer -> higher consumer -> increasing concentration. Older NCERT examples use DDT and mercury.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "Do not reproduce old numeric concentrations as current environmental measurements." }],
        },
      ],
    },
    {
      id: "solid-waste",
      title: "6. Solid waste",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Solid waste can create ecological and public-environment problems when poorly managed. This page teaches broad categories and the need for segregation, recycling/recovery and safe disposal at conceptual depth, avoiding old disposal practices or policy rules presented as current regulation.",
            },
          ],
        },
      ],
    },
    {
      id: "greenhouse-vs-ozone",
      title: "7. Greenhouse effect versus ozone depletion",
      keyIdea: "These are different atmospheric processes; the greenhouse effect does not cause the ozone hole.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Enhanced greenhouse effect: greenhouse gases absorb/re-emit outgoing infrared radiation and warm the lower atmosphere/system; increased concentrations can intensify warming.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Stratospheric ozone depletion: stratospheric ozone absorbs harmful ultraviolet radiation. Older NCERT explains that chlorine released from CFCs in the stratosphere can catalyse ozone destruction, and ozone depletion increases UV-B exposure risk.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "Do not state that the greenhouse effect causes the ozone hole; they involve different mechanisms." }],
        },
      ],
    },
    {
      id: "deforestation",
      title: "8. Deforestation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Deforestation converts forested land to non-forest use and can contribute to habitat loss, biodiversity decline, altered hydrology and carbon-cycle change. This page links conceptually to Biodiversity and Conservation rather than publishing stale historical forest-cover percentages.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "Current NEET UG 2026 Unit 10 still includes biodiversity loss and conservation, which can involve habitat destruction conceptually. That does not make this older full Environmental Issues chapter a current topic.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "environmental-process-dataset",
      slot: "concepts",
      jump: true,
      heading: "Environmental-process dataset",
      columns: ["Concept", "Trigger/input", "Biological/environmental consequence", "Boundary"],
      rows: [
        ["Air pollution", "Particulate/gaseous pollutants", "Organism and environmental injury/stress", "No current AQI/legal limits"],
        ["Organic water pollution", "Sewage/organic load", "Microbial oxygen demand can rise; dissolved oxygen can fall", "No site-specific safety interpretation"],
        ["Eutrophication", "Nutrient enrichment", "Algal/plant growth, later decomposition and oxygen stress", "Distinguish natural vs accelerated"],
        ["Biomagnification", "Persistent toxicant enters food chain", "Concentration increases at higher trophic levels", "No old numeric concentrations as current data"],
        ["Enhanced greenhouse effect", "Increased greenhouse-gas forcing", "Warming/climate-system change", "Distinct from ozone depletion"],
        ["Ozone depletion", "Stratospheric ozone destruction, including CFC-derived chlorine mechanism in NCERT context", "Greater UV-B exposure", "Distinct from greenhouse warming"],
        ["Deforestation", "Forest converted to non-forest use", "Habitat/biodiversity/hydrology/carbon effects", "No stale forest-cover figures"],
      ],
    },
    {
      id: "greenhouse-ozone-matrix",
      slot: "concepts",
      jump: true,
      heading: "Atmospheric distinction matrix",
      columns: ["Feature", "Enhanced greenhouse effect", "Stratospheric ozone depletion"],
      rows: [
        ["Main process", "Altered heat balance via greenhouse gases", "Reduction of stratospheric ozone"],
        ["Key radiation context", "Outgoing infrared/heat trapping", "Ultraviolet shielding"],
        ["Older NCERT pollutant link", "Increased greenhouse-gas concentrations", "CFC-derived chlorine chemistry"],
        ["High-risk error", "Saying ozone hole causes all global warming", "Saying greenhouse gases directly define ozone depletion"],
      ],
    },
  ],

  mistakes: [
    {
      id: "treated-as-current-unit-10",
      mistake: "Route treated as current NEET UG 2026 Unit 10 child.",
      why: [{ type: "paragraph", children: [{ text: "The verified 2026 Unit 10 does not explicitly list Environmental Issues as a separate current topic." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Retain the historical/not-currently-listed status for this route." }] }],
      errorType: "decision-error",
    },
    {
      id: "eutrophication-reduced",
      mistake: "Eutrophication reduced to only 'more algae.'",
      why: [{ type: "paragraph", children: [{ text: "Nutrient enrichment plus later decomposition and oxygen effects both matter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Describe both the algal growth phase and the subsequent oxygen-depletion phase." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "biomagnification-confused-accumulation",
      mistake: "Biomagnification confused with simple accumulation in one organism.",
      why: [{ type: "paragraph", children: [{ text: "Biomagnification concerns increasing concentration across successive trophic levels, not within a single organism." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the concentration increase is across trophic levels before naming it biomagnification." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "greenhouse-ozone-equated",
      mistake: "Greenhouse effect equated with ozone depletion.",
      why: [{ type: "paragraph", children: [{ text: "These are distinct atmospheric processes with different radiation relationships." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the atmospheric distinction matrix to keep the two processes separate." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "old-pollution-numbers-current",
      mistake: "Old textbook pollution numbers presented as current.",
      why: [{ type: "paragraph", children: [{ text: "Pollution statistics change over time and require a dated authoritative current source." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Omit dynamic pollution figures or independently date-verify them before treating them as current." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Biodiversity and Conservation",
      url: "/neet/biology/biodiversity-conservation",
      relation: "related",
      description: "Current-topic owner for biodiversity loss and conservation concepts.",
    },
    {
      label: "Ecosystem",
      url: "/neet/biology/ecosystem",
      relation: "related",
      description: "Current Unit 10 owner for ecosystem structure and process.",
    },
    {
      label: "Organisms and Populations",
      url: "/neet/biology/organisms-populations",
      relation: "related",
      description: "Current Unit 10 owner for population-level ecology.",
    },
    {
      label: "Ecology",
      url: "/neet/biology/ecology",
      relation: "prerequisite",
      description: "Ecology umbrella concepts preceding this contextual resource.",
    },
  ],

  links: [
    {
      label: "NEET Biology hub",
      url: "/neet/biology",
      relation: "up",
      description: "Contextual resource layer only.",
    },
  ],

  faqs: [
    {
      question: "Is Environmental Issues explicitly part of NEET UG 2026 Unit 10?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. The verified 2026 Unit 10 lists organisms/environment, ecosystem, and biodiversity/conservation, but not Environmental Issues as a separate current topic.",
            },
          ],
        },
      ],
    },
    {
      question: "What is biomagnification?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "It is the increase in concentration of certain persistent toxic substances at successive trophic levels of a food chain." }],
        },
      ],
    },
    {
      question: "Is ozone depletion the same as the greenhouse effect?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Ozone depletion reduces stratospheric UV shielding, while the greenhouse effect concerns heat balance and infrared radiation." },
          ],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Checked against the NMC/NTA NEET UG 2026 syllabus for non-inclusion. This contextual page draws on official NCERT teaching material that historically contained Environmental Issues and remains represented in NCERT Exemplar resources: https://ncert.nic.in/exemplar-problems.php?ln=en. SATHEE mirror used only where direct NCERT retrieval was difficult: https://sathee.iitk.ac.in/ncert-books/neet-ncert-books/neet-nb-bio-12/bio-12-chapter-16-enviromental-issues/. That historical teaching relationship does not override the official NEET UG 2026 syllabus.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
  ],

  contentStatus: "draft",

  meta: {
    title: "Environmental Biology Context: Pollution and Environmental Change | NEET 2026 Status",
    description:
      "Contextual NCERT Biology on pollution, eutrophication, biomagnification, greenhouse effect and ozone depletion. Environmental Issues is not explicitly listed in NEET UG 2026.",
  },
};

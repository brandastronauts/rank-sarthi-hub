import type { ChapterContent } from "@/content/types";

/**
 * NEET Microbes in Human Welfare — T06 production content.
 * contentStatus stays "draft" until academic review is recorded.
 * No weightage, PYQ counts or trend data are asserted.
 */
export const neetBiologyMicrobesHumanWelfare: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Microbes in Human Welfare",
  slug: "microbes-human-welfare",
  url: "/neet/biology/microbes-human-welfare",
  canonicalIntent:
    "Learn the current NEET UG 2026 microbe-to-process-to-product relationships across household products, industrial production, sewage treatment, biogas, biocontrol and biofertilisers.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 8",
    "Microbe -> process -> product relationships only",
    "No invented weightage, trend or question-count data",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Microbes in Human Welfare for NEET UG 2026 is best learned as a relationship system: a named microbe performs a biological process that yields a product or ecological application. The current scope includes household food processing, industrial production, sewage treatment, energy generation, biocontrol and biofertilisers.",
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
      label: "Biological Classification",
      url: "/neet/biology/biological-classification",
      relation: "prerequisite",
      description: "Recognise bacteria, fungi and viruses before mapping each to a useful process.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the NEET Biology chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Biology and Human Welfare",
    topics: [
      "Microbes in household food processing",
      "Microbes in industrial production",
      "Microbes in sewage treatment",
      "Microbes in energy generation (biogas)",
      "Microbes in biocontrol",
      "Microbes as biofertilisers",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "household-products",
      title: "1. Household food processing depends on named fermenting microbes",
      keyIdea: "Lactic acid bacteria acidify milk into curd; baker's yeast raises bread dough with carbon dioxide.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Lactic acid bacteria, including Lactobacillus, ferment milk; acid production coagulates milk proteins and converts milk to curd. NCERT also notes increased vitamin B12 content in curd. Baker's yeast, Saccharomyces cerevisiae, ferments dough in bread-making, and the carbon dioxide it produces contributes to dough rising.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Fermentation also underlies other traditional foods and beverages, but this page does not expand into an uncontrolled food catalogue.",
            },
          ],
        },
      ],
    },
    {
      id: "industrial-products",
      title: "2. Industrial fermentation supplies named acid and enzyme products",
      keyIdea: "Each industrial microbe-product pair is a fixed NCERT relationship, not an interchangeable list.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Aspergillus niger -> citric acid." }],
            [{ text: "Acetobacter aceti -> acetic acid." }],
            [{ text: "Clostridium butylicum -> butyric acid." }],
            [{ text: "Lactobacillus -> lactic acid." }],
            [{ text: "Saccharomyces cerevisiae -> ethanol in industrial fermentation." }],
            [{ text: "Streptococcus species -> streptokinase, an enzyme used as a clot-buster in medical context." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "This page states the NCERT product relationship only, not treatment guidance. NCERT also uses fermentors for large-scale microbial production.",
            },
          ],
        },
      ],
    },
    {
      id: "sewage-treatment",
      title: "3. Sewage treatment separates physical and microbial stages",
      keyIdea: "Primary treatment is chiefly physical; secondary treatment is microbial oxidation that lowers BOD.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Primary treatment is the physical removal of larger and suspended particles by filtration and sedimentation processes.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "In secondary, or biological, treatment, primary effluent enters aeration tanks where aerobic microbes form flocs. Microbial oxidation of organic matter reduces biochemical oxygen demand (BOD). These flocs settle as activated sludge; a fraction of this sludge can act as inoculum, and the remaining sludge enters anaerobic digesters.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "High-risk distinction: flocs are microbial aggregates formed in aeration, while activated sludge is the settled biomass produced from secondary treatment.",
            },
          ],
        },
      ],
    },
    {
      id: "biogas",
      title: "4. Methanogens generate biogas from anaerobic digestion",
      keyIdea: "Organic waste plus anaerobic microbial digestion yields methane-rich biogas and stabilised sludge.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Methanogenic microbes occur in anaerobic sludge and in the rumen of cattle. NCERT uses Methanobacterium as a key example. In anaerobic digesters, methanogens generate a combustible gas mixture rich in methane, called biogas.",
            },
          ],
        },
        {
          type: "definition",
          term: "Biogas relationship",
          children: [{ text: "organic waste + anaerobic microbial digestion -> methane-rich biogas + stabilised sludge." }],
        },
      ],
    },
    {
      id: "biocontrol",
      title: "5. Biocontrol agents act as species-specific alternatives to chemical pesticides",
      keyIdea: "Bacillus thuringiensis, Trichoderma and baculoviruses each control pests through a distinct biological mechanism.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Bacillus thuringiensis produces insecticidal proteins and is used against certain insect larvae." }],
            [{ text: "Trichoderma species are free-living fungi used against several plant pathogens." }],
            [{ text: "Baculoviruses, particularly nucleopolyhedroviruses, are species-specific insect-pathogen biocontrol agents valued for their narrow host range." }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Keep biocontrol conceptually separate from chemical pesticide use." }],
        },
      ],
    },
    {
      id: "biofertilisers",
      title: "6. Biofertilisers cover symbiotic bacteria, free-living bacteria, cyanobacteria and mycorrhiza",
      keyIdea: "Nitrogen-fixation relationships differ between symbiotic, free-living and cyanobacterial biofertilisers; mycorrhiza instead improves mineral uptake.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Rhizobium: symbiotic nitrogen fixation in legume root nodules." }],
            [{ text: "Azospirillum and Azotobacter: free-living nitrogen-fixing bacteria." }],
            [{ text: "Cyanobacteria such as Anabaena and Nostoc: nitrogen-fixing biofertiliser relationship, especially important in paddy-field context." }],
            [{ text: "Mycorrhizal fungi such as Glomus: fungal-root association that improves mineral, especially phosphorus, uptake and can improve plant stress resistance." }],
          ],
        },
      ],
    },
    {
      id: "concept-boundary",
      title: "7. A useful microbe is defined by a specific process relationship",
      body: [
        {
          type: "definition",
          term: "Concept boundary",
          children: [{ text: "organism -> biological process -> useful product/application. A microbe is not classified as useful merely for being harmless in every context." }],
        },
      ],
    },
  ],

  tables: [
    {
      id: "microbe-process-product",
      jump: true,
      slot: "concepts",
      heading: "Microbe-process-product dataset",
      intro: "Verified against current NCERT Microbes in Human Welfare relationships.",
      columns: ["Microbe", "Process", "Product/application"],
      rows: [
        ["Lactobacillus / LAB", "lactic fermentation", "curd"],
        ["Saccharomyces cerevisiae", "fermentation", "bread dough; ethanol"],
        ["Aspergillus niger", "industrial fermentation", "citric acid"],
        ["Acetobacter aceti", "industrial fermentation", "acetic acid"],
        ["Clostridium butylicum", "industrial fermentation", "butyric acid"],
        ["Streptococcus", "enzyme production", "streptokinase"],
        ["methanogens incl. Methanobacterium", "anaerobic digestion", "methane-rich biogas"],
        ["Bacillus thuringiensis", "insect-pathogen/toxin relationship", "biocontrol"],
        ["Trichoderma", "antagonism to plant pathogens", "biocontrol"],
        ["nucleopolyhedroviruses", "host-specific viral infection", "insect biocontrol"],
        ["Rhizobium", "symbiotic N2 fixation", "biofertiliser"],
        ["Azospirillum / Azotobacter", "free-living N2 fixation", "biofertiliser"],
        ["Anabaena / Nostoc", "cyanobacterial N2 fixation", "biofertiliser"],
        ["Glomus", "mycorrhizal association", "improved mineral uptake"],
      ],
    },
    {
      id: "sewage-flow",
      jump: true,
      slot: "concepts",
      heading: "Sewage treatment flow",
      columns: ["Stage", "What happens", "Outcome"],
      rows: [
        ["Primary treatment", "Physical removal of particles by filtration/sedimentation", "Reduced suspended solids"],
        ["Secondary (biological) treatment — aeration", "Aerobic microbes form flocs and oxidise organic matter", "BOD reduction"],
        ["Secondary treatment — settling", "Flocs settle out", "Activated sludge produced"],
        ["Anaerobic digestion", "Methanogens digest remaining sludge", "Methane-rich biogas + stabilised sludge"],
      ],
    },
  ],

  mistakes: [
    {
      id: "lab-curd-mechanism",
      mistake: "Assuming lactic acid bacteria produce curd merely by being added to milk.",
      why: [{ type: "paragraph", children: [{ text: "The conversion happens through fermentation, which acidifies milk and coagulates its proteins." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Describe the process as acid-driven protein coagulation, not simple bacterial addition." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "sewage-stage-confusion",
      mistake: "Treating both primary and secondary sewage treatment as biological stages.",
      why: [{ type: "paragraph", children: [{ text: "Primary treatment is chiefly physical; only secondary treatment is microbial." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate the physical particle-removal stage from the microbial oxidation stage before answering." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "floc-vs-sludge",
      mistake: "Equating flocs with activated sludge.",
      why: [{ type: "paragraph", children: [{ text: "Flocs form in the aeration tank; activated sludge is the settled biomass from secondary treatment." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track the sequence: flocs form during aeration, then settle to become activated sludge." }] }],
      errorType: "recall-gap",
    },
    {
      id: "rhizobium-free-living-error",
      mistake: "Recalling Rhizobium as a free-living nitrogen fixer in the exam relationship.",
      why: [{ type: "paragraph", children: [{ text: "Rhizobium is symbiotic, fixing nitrogen inside legume root nodules, unlike Azospirillum or Azotobacter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate symbiotic (Rhizobium) from free-living (Azospirillum, Azotobacter) nitrogen fixers before answering." }] }],
      errorType: "recall-gap",
    },
    {
      id: "glomus-nitrogen-fixer",
      mistake: "Classifying Glomus as a nitrogen-fixing biofertiliser.",
      why: [{ type: "paragraph", children: [{ text: "Glomus forms mycorrhizal associations that primarily improve mineral, especially phosphorus, uptake; it is not in the nitrogen-fixer category." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the biofertiliser question concerns nitrogen fixation or mineral uptake before selecting an example." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Human Health and Disease",
      url: "/neet/biology/human-health-disease",
      relation: "related",
      description: "Related Unit 8 chapter covering disease, immunology and substance-abuse content.",
    },
    {
      label: "Biotechnology",
      url: "/neet/biology/biotechnology",
      relation: "forward",
      description: "Extends microbial and enzymatic tools into recombinant-DNA technology.",
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
      label: "Biological Classification",
      url: "/neet/biology/biological-classification",
      relation: "prerequisite",
      description: "Foundational classification of bacteria, fungi and viruses.",
    },
  ],

  faqs: [
    {
      question: "Which microbes convert milk to curd?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Lactic acid bacteria such as Lactobacillus ferment milk and acidify it, causing milk proteins to coagulate." }],
        },
      ],
    },
    {
      question: "What is the difference between primary and secondary sewage treatment?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Primary treatment mainly removes particles physically; secondary treatment uses microbes to oxidise organic matter and lower BOD." }],
        },
      ],
    },
    {
      question: "Which NCERT microbe is associated with biogas production?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Methanogens, including Methanobacterium, are associated with anaerobic digestion and methane-rich biogas." }],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents"],
  sourceNote:
    "NCERT Microbes in Human Welfare: https://ncert.nic.in/textbook/pdf/lebo108.pdf. NCERT Exemplar index: https://ncert.nic.in/exemplar-problems.php?ln=en",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Microbes in Human Welfare 2026: Microbe, Process, Product",
    description:
      "Study verified NEET 2026 microbe-process-product relationships for curd, industrial products, sewage treatment, biogas, biocontrol and biofertilisers.",
  },
};

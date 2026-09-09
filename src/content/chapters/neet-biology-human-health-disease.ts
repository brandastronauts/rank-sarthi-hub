import type { ChapterContent } from "@/content/types";

/**
 * Human Health and Disease — T06 production content.
 *
 * MEDICAL SAFETY: this page is a NEET educational resource only. It never
 * diagnoses, tests, treats or gives medication, vaccine-selection or
 * substance-use guidance for an individual.
 */
export const neetBiologyHumanHealthDisease: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Human Health and Disease",
  slug: "human-health-disease",
  url: "/neet/biology/human-health-disease",
  canonicalIntent:
    "Teach disease-pathogen relationships for the current named infections, basic immunology and vaccines, cancer, HIV/AIDS, and adolescent drug/alcohol/tobacco abuse without personal medical guidance.",

  heroChips: [
    "Current NEET UG 2026 Unit 8 scope",
    "Ten named infectious diseases with pathogen-vector logic",
    "No personal diagnosis, treatment or vaccine advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 Human Health and Disease requires disease-pathogen relationships for the named infections, basic immunology and vaccines, cancer, HIV/AIDS, and adolescent drug, alcohol and tobacco abuse.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        { text: "This page teaches source-controlled biological relationships and never diagnoses or treats an individual." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Cell-structure concepts support understanding pathogen entry and immune-cell relationships.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the Biology chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 8: Biology and Human Welfare — Human Health and Disease",
    topics: [
      "Pathogens and parasites",
      "Named infectious diseases: typhoid, pneumonia, common cold, malaria, amoebiasis, ascariasis, filariasis, ringworm, dengue, chikungunya",
      "Basic immunology: innate and acquired immunity, humoral and cell-mediated immunity, active and passive immunity",
      "Antibody and vaccination/immunisation concepts",
      "HIV and AIDS",
      "Cancer",
      "Adolescent drug, alcohol and tobacco abuse",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "disease-framework",
      title: "1. Health, disease, pathogen and parasite concepts",
      keyIdea: "Pathogen and parasite are related but not synonymous.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A pathogen is a disease-causing biological agent. A parasite lives in or on a host and derives benefit at host cost; many parasites are pathogens, but pathogen and parasite are not synonyms.",
            },
          ],
        },
      ],
    },
    {
      id: "named-disease-relationships",
      title: "2. Current named infectious diseases",
      keyIdea: "Ten diseases are explicitly current: typhoid, pneumonia, common cold, malaria, amoebiasis, ascariasis, filariasis, ringworm, dengue and chikungunya.",
      body: [
        {
          type: "definition",
          term: "Typhoid",
          children: [{ text: "Pathogen: Salmonella typhi. Transmission: contaminated food/water through the faecal-oral route. Primary relationship: intestinal entry followed by systemic spread through blood." }],
        },
        {
          type: "definition",
          term: "Pneumonia",
          children: [{ text: "Representative bacterial pathogens: Streptococcus pneumoniae and Haemophilus influenzae. Transmission: droplets/aerosols and contaminated shared items. Affected structure: lung alveoli." }],
        },
        {
          type: "definition",
          term: "Common cold",
          children: [{ text: "Pathogen group: rhinoviruses. Spread: respiratory droplets and contaminated objects. Affected region: nose and upper respiratory passages, not the alveoli." }],
        },
        {
          type: "definition",
          term: "Malaria",
          children: [{ text: "Pathogen: Plasmodium species, including P. vivax, P. malariae and P. falciparum. Vector: infected female Anopheles mosquito. Human sequence: sporozoites enter, then liver multiplication, then red-blood-cell phase. Vector and pathogen must not be swapped." }],
        },
        {
          type: "definition",
          term: "Amoebiasis",
          children: [{ text: "Pathogen: Entamoeba histolytica. Transmission: contaminated food/water; houseflies can act as mechanical carriers. Primary site: large intestine." }],
        },
        {
          type: "definition",
          term: "Ascariasis",
          children: [{ text: "Pathogen: Ascaris lumbricoides. Route: ingestion of infective eggs through contaminated water/vegetables/food/soil context. Primary relationship: intestinal helminth infection." }],
        },
        {
          type: "definition",
          term: "Filariasis",
          children: [{ text: "Pathogens: Wuchereria bancrofti and W. malayi. Transmission: female mosquito vectors. Main relationship: chronic involvement of lymphatic vessels." }],
        },
        {
          type: "definition",
          term: "Ringworm",
          children: [{ text: "Fungal genera: Microsporum, Trichophyton, Epidermophyton. Spread: contact with infected material, soil or shared personal items. Affected structures: skin, nails and scalp." }],
        },
        {
          type: "definition",
          term: "Dengue",
          children: [{ text: "Officially named in the 2026 syllabus. Causative category: dengue virus. Vector relationship: Aedes aegypti is a principal vector documented by Government of India NCVBDC. This is kept as a pathogen-vector recall relationship, not clinical guidance." }],
        },
        {
          type: "definition",
          term: "Chikungunya",
          children: [{ text: "Officially named in the 2026 syllabus. Causative category: chikungunya virus, transmitted through infected Aedes mosquitoes in official Government of India disease-control material. No symptom-based diagnosis is provided." }],
        },
      ],
    },
    {
      id: "innate-immunity",
      title: "3. Innate immunity",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Innate immunity is present at birth and responds non-specifically. NCERT organises it through physical, physiological, cellular and cytokine-related barriers." },
          ],
        },
      ],
    },
    {
      id: "acquired-immunity",
      title: "4. Acquired immunity",
      keyIdea: "Primary vs secondary response and humoral vs cell-mediated immunity are the key distinctions.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Acquired immunity is antigen-specific and develops memory." }],
        },
        {
          type: "list",
          items: [
            [{ text: "Primary response: first exposure, slower/lower initial response." }],
            [{ text: "Secondary response: memory response, faster/stronger." }],
            [{ text: "Humoral immunity: antibody-mediated B-cell relationship." }],
            [{ text: "Cell-mediated immunity: T-cell relationship." }],
          ],
        },
      ],
    },
    {
      id: "active-passive-immunity",
      title: "5. Active versus passive immunity",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Active: host generates an immune response after antigen exposure." }],
            [{ text: "Passive: ready-made antibodies are received." }],
          ],
        },
      ],
    },
    {
      id: "antibody-vaccination",
      title: "6. Antibody and vaccination concept",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "An antibody is an immunoglobulin produced by plasma-cell descendants of activated B lymphocytes." },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Vaccination exposes the immune system to antigenic material in a controlled way so that immunological memory can be generated. This is a syllabus concept, not an individual vaccine recommendation.",
            },
          ],
        },
      ],
    },
    {
      id: "hiv-aids",
      title: "7. HIV and AIDS",
      keyIdea: "HIV is the virus; AIDS is an advanced immunodeficiency state, not the same thing from the moment of infection.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "HIV is a retrovirus. At NCERT depth: the virus enters macrophages and helper T lymphocytes; viral replication progressively damages immune function; declining helper-T-cell function contributes to immunodeficiency." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Transmission routes taught by NCERT include sexual contact, infected blood, contaminated needles and mother-to-child transmission." }],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "This page does not provide personal exposure assessment or testing advice." }],
        },
      ],
    },
    {
      id: "cancer",
      title: "8. Cancer",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Cancer involves loss of normal growth control and uncontrolled proliferation." }],
        },
        {
          type: "list",
          items: [
            [{ text: "Benign tumour: remains relatively local." }],
            [{ text: "Malignant tumour: invades surrounding tissue and can spread." }],
            [{ text: "Metastasis: spread of malignant cells to distant sites." }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "Carcinogenic agents can be physical, chemical or biological. No treatment advice is provided." }],
        },
      ],
    },
    {
      id: "substance-abuse",
      title: "9. Drug, alcohol and tobacco abuse",
      body: [
        {
          type: "definition",
          term: "Educational relationship",
          children: [{ text: "Substance exposure -> dependence/addiction risk -> physiological/behavioural harm -> prevention through awareness and professional support." }],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "Consumption instructions or glamorising detail are not provided." }],
        },
      ],
    },
  ],

  tables: [
    {
      id: "disease-pathogen-dataset",
      slot: "concepts",
      jump: true,
      heading: "Disease-pathogen dataset",
      columns: ["Disease", "Pathogen/source category", "Transmission relationship", "Primary affected-system cue"],
      rows: [
        ["Typhoid", "Salmonella typhi", "Contaminated food/water", "Intestinal entry, systemic spread"],
        ["Pneumonia", "S. pneumoniae, H. influenzae", "Droplets/aerosols", "Alveoli"],
        ["Common cold", "Rhinoviruses", "Droplets/contaminated objects", "Upper respiratory passages"],
        ["Malaria", "Plasmodium spp.", "Female Anopheles vector", "Liver then RBC cycle"],
        ["Amoebiasis", "Entamoeba histolytica", "Faecal-oral contaminated food/water", "Large intestine"],
        ["Ascariasis", "Ascaris lumbricoides", "Ingestion of infective eggs", "Intestine"],
        ["Filariasis", "Wuchereria bancrofti, W. malayi", "Female mosquito vector", "Lymphatic vessels"],
        ["Ringworm", "Microsporum, Trichophyton, Epidermophyton", "Contact/contaminated material/soil", "Skin, nails, scalp"],
        ["Dengue", "Dengue virus", "Aedes aegypti vector", "Systemic viral disease, no clinical detail here"],
        ["Chikungunya", "Chikungunya virus", "Infected Aedes mosquitoes", "Systemic viral disease, no clinical detail here"],
      ],
    },
  ],

  mistakes: [
    {
      id: "malaria-caused-by-mosquito",
      mistake: "Malaria caused by mosquito.",
      why: [{ type: "paragraph", children: [{ text: "The mosquito is the vector; Plasmodium is the pathogen." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate the causative pathogen from the transmitting vector for every vector-borne disease." }] }],
      errorType: "recall-gap",
    },
    {
      id: "pneumonia-cold-same-structures",
      mistake: "Pneumonia and common cold affect identical structures.",
      why: [{ type: "paragraph", children: [{ text: "Pneumonia involves alveoli; rhinovirus cold is upper-respiratory." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Map each respiratory infection to its specific affected structure." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "all-immunity-specific",
      mistake: "All immunity is specific.",
      why: [{ type: "paragraph", children: [{ text: "Innate is non-specific; acquired is antigen-specific." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Distinguish innate and acquired immunity by specificity and memory." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "hiv-equals-aids",
      mistake: "HIV equals AIDS from the moment of infection.",
      why: [{ type: "paragraph", children: [{ text: "HIV is the virus; AIDS is an advanced immunodeficiency state." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep HIV infection and the AIDS disease state as separate stages." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "benign-equals-metastasis",
      mistake: "Benign tumour equals metastasis.",
      why: [{ type: "paragraph", children: [{ text: "Metastasis is a malignant-tumour property." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Learn benign, malignant and metastasis as three distinct concepts." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    { label: "Biology Hub", url: "/neet/biology", relation: "up" },
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "prerequisite" },
    { label: "Reproductive Health", url: "/neet/biology/reproductive-health", relation: "related" },
    { label: "Microbes in Human Welfare", url: "/neet/biology/microbes-human-welfare", relation: "related" },
    { label: "Biotechnology and Its Applications", url: "/neet/biology/biotechnology-applications", relation: "forward" },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Aligned primarily to current NCERT Human Health and Disease (https://ncert.nic.in/textbook/pdf/lebo107.pdf). Dengue and chikungunya are explicitly present in the NEET UG 2026 syllabus; Government of India vector-borne-disease sources (https://ncvbdc.mohfw.gov.in/index4.php?lang=1&level=0&lid=3710&linkid=535 and https://ncvbdc.mohfw.gov.in/index1.php?lang=1&level=1&lid=3686&sublinkid=5899) are used only to support the vector relationship, without adding treatment content.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Human Health and Disease 2026: Pathogens, Immunity, HIV, Cancer",
    description:
      "Learn the current NEET UG 2026 Human Health and Disease scope with verified pathogen relationships, immunity distinctions, HIV/AIDS and cancer concepts.",
  },
};

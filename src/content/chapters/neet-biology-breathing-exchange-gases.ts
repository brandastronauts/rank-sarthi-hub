import type { ChapterContent } from "@/content/types";

/**
 * Breathing and Exchange of Gases — T06 production content.
 * Scope: CURRENT_OFFICIAL_SCOPE (NEET UG 2026, Unit 5 Human Physiology).
 * Respiratory volumes are kept as textbook relationships, never personal
 * targets; listed disorders remain strictly academic, with no diagnosis,
 * treatment or symptom advice.
 */
export const neetBiologyBreathingExchangeGases: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Breathing and Exchange of Gases",
  slug: "breathing-exchange-gases",
  url: "/neet/biology/breathing-exchange-gases",
  canonicalIntent:
    "Separate ventilation, gas exchange, gas transport and cellular respiration while covering the human respiratory system, breathing mechanics/regulation, respiratory-volume relationships and the listed disorders at NCERT depth.",

  heroChips: [
    "NEET UG 2026 current scope",
    "No invented weightage or question counts",
    "Academic disorder facts only — no diagnosis or treatment advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Breathing moves air into and out of the lungs; gas exchange diffuses O2 and CO2 across respiratory surfaces; blood transports gases between lungs and tissues; and cellular respiration uses substrates and, aerobically, oxygen within cells.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 requires these four-process distinctions along with the human respiratory system, breathing mechanics and regulation, respiratory volumes/capacities and the listed respiratory disorders.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not publish invented weightage, expected question counts or trend percentages, and it provides no diagnosis, treatment or symptom advice for the listed disorders.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Human Physiology",
      url: "/neet/biology/human-physiology",
      relation: "up",
      description: "Unit hub for the Human Physiology chapter set.",
    },
    {
      label: "Structural Organisation in Animals",
      url: "/neet/biology/structural-organisation-animals",
      relation: "prerequisite",
      description: "Tissue and organ-level organisation supports understanding respiratory-surface structure.",
    },
    {
      label: "Biology Syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Official current-scope mapping for every Biology unit.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 5, Human Physiology",
    topics: [
      "Respiratory organs in animals, recall layer",
      "Human respiratory system: structure",
      "Mechanism of breathing (inspiration and expiration)",
      "Exchange of gases",
      "Transport of gases (O2 and CO2)",
      "Regulation of respiration",
      "Respiratory volumes and capacities",
      "Disorders of respiratory system (asthma, emphysema, occupational respiratory disorders)",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "four-process-distinction",
      title: "1. Ventilation, gas exchange, gas transport and cellular respiration are four separate processes",
      keyIdea: "Ventilation is bulk airflow; gas exchange is diffusion; gas transport is circulation; cellular respiration is biochemical metabolism.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Ventilation: ", bold: true }, { text: "bulk airflow into and out of the lungs, driven by thoracic mechanics and airways." }],
            [{ text: "Gas exchange: ", bold: true }, { text: "diffusion of O2 and CO2 across the alveoli-blood and blood-tissue interfaces." }],
            [{ text: "Gas transport: ", bold: true }, { text: "circulation carries gases in plasma and RBCs." }],
            [{ text: "Cellular respiration: ", bold: true }, { text: "biochemical energy metabolism occurring in the cytosol or mitochondria depending on the stage." }],
          ],
        },
      ],
    },
    {
      id: "respiratory-organs-recall",
      title: "2. Respiratory organs vary across animal groups",
      keyIdea: "Keep this comparative recall layer concise.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "NCERT supports examples such as body-surface diffusion in simple organisms, moist cutaneous exchange in earthworm, tracheae in insects, gills in many aquatic animals, lungs in terrestrial vertebrates and skin plus lungs in frog." },
          ],
        },
      ],
    },
    {
      id: "human-respiratory-route",
      title: "3. Air moves through a fixed conducting route to the alveoli",
      keyIdea: "Conducting passages move and condition air; alveoli are the principal exchange surface.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "external nostrils → nasal chamber → pharynx → larynx → trachea → bronchi → bronchioles → alveoli." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Conducting passages move and condition air; alveoli provide the principal exchange surface with thin membranes, large area and capillary contact." },
          ],
        },
      ],
    },
    {
      id: "inspiration-expiration",
      title: "4. Breathing follows a volume-change → pressure-change → airflow sequence",
      keyIdea: "Volume change drives pressure change, which drives airflow; the lungs do not \"suck\" air in.",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Inspiration: " }, { text: "diaphragm contracts and flattens, external intercostal action increases thoracic volume, intrapulmonary pressure falls below atmospheric, and air moves inward down the pressure gradient." }],
            [{ text: "Quiet expiration: " }, { text: "inspiratory muscles relax, elastic recoil reduces thoracic/lung volume, intrapulmonary pressure rises above atmospheric, and air moves out." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [{ text: "Correct mechanism: volume change → pressure change → airflow, not \"lungs suck air\"." }],
        },
      ],
    },
    {
      id: "gas-exchange",
      title: "5. Gas exchange follows partial-pressure gradients",
      keyIdea: "O2 diffuses alveoli → blood → tissues; CO2 diffuses tissues → blood → alveoli.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "O2 and CO2 diffuse down partial-pressure gradients. Solubility and membrane thickness also influence exchange. O2 moves from alveoli to pulmonary blood to tissues, while CO2 moves from tissues to blood to alveoli." },
          ],
        },
      ],
    },
    {
      id: "gas-transport",
      title: "6. O2 is mainly haemoglobin-bound; CO2 is mainly carried as bicarbonate",
      keyIdea: "Keep transport as physiology, not clinical blood-gas interpretation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Most O2 is reversibly bound to haemoglobin, with a smaller fraction dissolved in plasma; loading and unloading depend on partial pressure and local chemical conditions. CO2 is carried mainly as bicarbonate, with smaller carbamino-haemoglobin and dissolved fractions." },
          ],
        },
      ],
    },
    {
      id: "regulation",
      title: "7. A medullary rhythm centre, aided by the pons, regulates breathing",
      keyIdea: "CO2/H+ related chemosensitive input dominates regulation at this teaching depth.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "NCERT identifies a respiratory rhythm centre in the medulla, modulation from the pons, and chemosensitive/peripheral receptor inputs, especially for CO2/H+ related changes. Oxygen normally has a less important direct regulatory role at this teaching depth." },
          ],
        },
      ],
    },
    {
      id: "respiratory-volumes",
      title: "8. Respiratory volumes combine into capacities through fixed relationships",
      keyIdea: "Use the relationships, not personal reference targets.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "IC = TV + IRV" }],
            [{ text: "EC = TV + ERV" }],
            [{ text: "FRC = ERV + RV" }],
            [{ text: "VC = IRV + TV + ERV" }],
            [{ text: "TLC = VC + RV" }],
          ],
        },
      ],
    },
    {
      id: "listed-disorders",
      title: "9. Listed respiratory disorders remain strictly academic",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Asthma: ", bold: true }, { text: "inflammatory narrowing of bronchi/bronchioles can make breathing difficult." }],
            [{ text: "Emphysema: ", bold: true }, { text: "alveolar-wall damage reduces respiratory surface; cigarette smoking is a major textbook-associated cause." }],
            [{ text: "Occupational respiratory disorders: ", bold: true }, { text: "prolonged dust exposure can cause inflammation/fibrosis and reduce respiratory efficiency." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "No diagnosis, treatment or symptom advice is provided for these disorders." }],
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
        ["What is the chapter about?", "How breathing, gas exchange, gas transport and cellular respiration form four separate but connected processes."],
        ["What is the central method choice?", "Separate airflow mechanics from diffusion, transport and cellular metabolism, and track the volume-change → pressure-change → airflow sequence."],
        ["Where do most mistakes begin?", "Treating breathing, exchange and cellular respiration as the same event, reversing the inspiration pressure direction, and misreading gas-transport forms."],
        ["What should come before this chapter?", "Structural Organisation in Animals, for tissue and organ-level context."],
        ["What comes after it?", "Body Fluids and Circulation, which continues gas transport into the circulatory system."],
      ],
      note: "The official NEET UG 2026 syllabus and NCERT define content scope. No chapter weightage is asserted here.",
    },
    {
      id: "process-distinction-dataset",
      jump: true,
      slot: "concepts",
      heading: "Four-process distinction dataset",
      columns: ["Process", "What happens", "Main context"],
      rows: [
        ["Ventilation", "Bulk airflow into/out of lungs", "Thoracic mechanics and airways"],
        ["Gas exchange", "O2/CO2 diffusion", "Alveoli-blood and blood-tissue interfaces"],
        ["Gas transport", "Circulation carries gases", "Plasma and RBCs"],
        ["Cellular respiration", "Biochemical energy metabolism", "Cytosol/mitochondria depending on stage"],
      ],
    },
    {
      id: "gas-transport-dataset",
      jump: true,
      slot: "concepts",
      heading: "Gas-transport dataset",
      columns: ["Gas", "Main form", "Other form(s)", "Core loading/unloading principle"],
      rows: [
        ["O2", "Haemoglobin-bound", "Dissolved fraction", "Partial pressure + local environment"],
        ["CO2", "Bicarbonate", "Carbamino-haemoglobin, dissolved", "Tissue production vs lung elimination gradients"],
      ],
    },
    {
      id: "respiratory-volume-dataset",
      jump: true,
      slot: "concepts",
      heading: "Respiratory-volume relationship dataset",
      columns: ["Term", "Definition/relationship"],
      rows: [
        ["TV", "Tidal volume"],
        ["IRV", "Inspiratory reserve volume"],
        ["ERV", "Expiratory reserve volume"],
        ["RV", "Residual volume"],
        ["IC", "TV + IRV"],
        ["EC", "TV + ERV"],
        ["FRC", "ERV + RV"],
        ["VC", "IRV + TV + ERV"],
        ["TLC", "VC + RV"],
      ],
      note: "Textbook relationships, not personal reference targets.",
    },
  ],

  mistakes: [
    {
      id: "breathing-exchange-respiration-merged",
      mistake: "Treating breathing, gas exchange and cellular respiration as the same event.",
      why: [{ type: "paragraph", children: [{ text: "The three processes happen in close sequence and are easy to collapse into one idea." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Separate airflow, diffusion, transport and cellular metabolism as four distinct processes." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "inspiration-pressure-reversed",
      mistake: "Reversing the inspiration pressure direction.",
      why: [{ type: "paragraph", children: [{ text: "It is easy to assume pressure rises before air enters." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Volume increases first, pressure then falls, and air moves in down the resulting gradient." }] }],
      errorType: "execution-error",
    },
    {
      id: "o2-only-dissolved",
      mistake: "Assuming O2 is only dissolved in plasma.",
      why: [{ type: "paragraph", children: [{ text: "Dissolved gas transport is easier to visualise than protein-bound transport." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Most O2 is haemoglobin-bound; only a smaller fraction is dissolved." }] }],
      errorType: "recall-gap",
    },
    {
      id: "co2-only-dissolved",
      mistake: "Assuming CO2 only travels dissolved in blood.",
      why: [{ type: "paragraph", children: [{ text: "The bicarbonate relationship is often under-recalled compared with simple dissolved transport." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Bicarbonate is the major CO2-transport relationship, with smaller carbamino and dissolved fractions." }] }],
      errorType: "recall-gap",
    },
    {
      id: "volumes-as-personal-targets",
      mistake: "Using textbook respiratory volumes as personal health targets.",
      why: [{ type: "paragraph", children: [{ text: "Numeric-looking relationships can be mistaken for individual reference values." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Retain the definition/relationship only; this page gives no personal health interpretation." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "up", description: "Unit hub for Human Physiology chapters." },
    { label: "Structural Organisation in Animals", url: "/neet/biology/structural-organisation-animals", relation: "prerequisite", description: "Tissue and organ-level organisation supports respiratory-surface structure." },
    { label: "Body Fluids and Circulation", url: "/neet/biology/body-fluids-circulation", relation: "related", description: "Continues gas transport into the circulatory system." },
    { label: "Body Fluids and Circulation", url: "/neet/biology/body-fluids-circulation", relation: "next", description: "Recommended next chapter in the Human Physiology sequence." },
  ],

  sources: ["nta-neet-2026-bulletin", "ncert-biology-11-contents"],
  sourceNote:
    "Verified against the NTA NEET UG 2026 official syllabus and current NCERT Breathing and Exchange of Gases and Biology Class XI Unit V contents. Respiratory volumes are retained as textbook relationships without personal reference values, and listed disorders are represented at educational, syllabus-bound depth only, with no diagnosis or treatment guidance.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],
  contentStatus: "draft",
  meta: {
    title: "NEET Breathing and Exchange of Gases 2026: Process Map",
    description:
      "Learn NEET UG 2026 breathing through clear distinctions among ventilation, gas exchange and transport, plus mechanics, volumes, regulation and listed disorders.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Excretory Products and their Elimination — T06 production content.
 * Scope: CURRENT_OFFICIAL_SCOPE (NEET UG 2026, Unit 5 Human Physiology).
 * Renal disorders, dialysis and diabetes insipidus are kept strictly
 * educational; no diagnosis, drug or treatment guidance is included.
 */
export const neetBiologyExcretoryProducts: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Excretory Products and their Elimination",
  slug: "excretory-products",
  url: "/neet/biology/excretory-products",
  canonicalIntent:
    "Connect nitrogenous excretory strategies with human excretory-system organisation, nephron function, urine formation, osmoregulation and hormonal regulation, keeping renal disorders and dialysis educational.",

  heroChips: [
    "NEET UG 2026 current scope",
    "No invented weightage or question counts",
    "Educational only — no diagnosis or treatment advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 Excretory Products and their Elimination connects nitrogenous-waste forms with the human excretory system, nephron structure, filtration, reabsorption, secretion, concentration, osmoregulation and regulation by ADH, the renin-angiotensin-aldosterone system (RAAS) and atrial natriuretic factor (ANF).",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The key skill is to track the direction of transport at each nephron stage and to follow the feedback loops that regulate water and solute balance.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        { text: "This page does not provide diagnosis, diuretic/drug guidance, renal diet advice, lab interpretation or treatment planning." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Body Fluids and Circulation",
      url: "/neet/biology/body-fluids-circulation",
      relation: "prerequisite",
      description: "Blood composition and circulation context supports understanding renal filtration and transport.",
    },
    {
      label: "Human Physiology",
      url: "/neet/biology/human-physiology",
      relation: "up",
      description: "Unit hub for the Human Physiology chapter set.",
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
      "Modes of excretion: ammonotelism, ureotelism, uricotelism",
      "Human excretory system: structure and function",
      "Urine formation",
      "Osmoregulation",
      "Regulation of kidney function: renin-angiotensin, atrial natriuretic factor, ADH",
      "Role of other organs in excretion",
      "Disorders: uraemia, renal failure, renal calculi, nephritis",
      "Dialysis and artificial kidney",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "waste-strategies",
      title: "1. Three nitrogenous-waste strategies match habitat and water availability",
      keyIdea: "Ammonotelism, ureotelism and uricotelism trade toxicity against water cost.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Ammonotelism: " }, { text: "ammonia is the main nitrogenous waste; it is highly soluble and toxic and is generally associated with abundant water. Standard NCERT examples include many aquatic animals such as bony fishes and aquatic amphibian stages." }],
            [{ text: "Ureotelism: " }, { text: "urea is the principal product; mammals and many adult terrestrial amphibians are standard examples." }],
            [{ text: "Uricotelism: " }, { text: "uric acid is the principal product and supports water conservation; birds, reptiles and many insects are standard examples." }],
          ],
        },
      ],
    },
    {
      id: "human-excretory-route",
      title: "2. The human excretory route is a linear passage from kidney to urethra",
      keyIdea: "Kidneys form urine, ureters convey it, the bladder stores it, and the urethra provides the exit pathway.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The human excretory route is kidneys → ureters → urinary bladder → urethra. Kidneys form urine, ureters convey it, the bladder stores it and the urethra provides the exit pathway." },
          ],
        },
      ],
    },
    {
      id: "nephron-structure",
      title: "3. The nephron is organised as a sequence of functionally distinct segments",
      keyIdea: "Glomerulus + Bowman's capsule → PCT → loop of Henle → DCT → collecting duct.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The nephron structure follows glomerulus and Bowman's capsule (together the renal corpuscle) → proximal convoluted tubule (PCT) → loop of Henle → distal convoluted tubule (DCT) → collecting duct. Tubular segments differ in transport and permeability properties and are not interchangeable." },
          ],
        },
      ],
    },
    {
      id: "filtration",
      title: "4. Filtration is driven by glomerular capillary pressure",
      keyIdea: "Cells and most large plasma proteins are retained; water and small solutes enter the filtrate.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Glomerular capillary pressure drives ultrafiltration into Bowman's space. Cells and most large plasma proteins are retained in blood, while water and many small solutes enter the filtrate." },
          ],
        },
      ],
    },
    {
      id: "reabsorption-secretion",
      title: "5. Reabsorption and secretion move solutes in opposite directions",
      keyIdea: "Reabsorption returns useful solutes and water to blood; secretion moves selected substances from blood into the tubule.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "In reabsorption, useful solutes and much water are returned from tubular fluid toward blood; the PCT performs extensive reabsorption, with later segments providing selective adjustment. In secretion, selected ions and substances move from blood or interstitium into tubular fluid, helping ion/acid-base regulation and removal of selected compounds." },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Filtration: " }, { text: "blood → Bowman's space." }],
            [{ text: "Reabsorption: " }, { text: "tubule → blood." }],
            [{ text: "Secretion: " }, { text: "blood → tubule." }],
          ],
        },
      ],
    },
    {
      id: "counter-current-concentration",
      title: "6. Counter-current flow establishes the medullary osmotic gradient",
      keyIdea: "Opposing flow in the loop of Henle and vasa recta maintains a gradient that varying collecting-duct permeability then exploits.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Opposing flow in the loop of Henle and vasa recta helps establish and maintain a medullary osmotic gradient. NaCl and urea contribute to the gradient. Collecting-duct water reabsorption can then vary with hormonal and body-water status. This mechanism should not be reduced to 'the loop makes concentrated urine' without the gradient and adjustable collecting-duct relationship." },
          ],
        },
      ],
    },
    {
      id: "adh",
      title: "7. ADH increases water reabsorption in the distal nephron and collecting system",
      keyIdea: "Rising osmolarity or water deficit can increase ADH release, which raises distal water permeability.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "When osmolarity rises or a water deficit is sensed, ADH release can increase. ADH raises the water permeability of the distal nephron and collecting system at NCERT depth, increasing water reabsorption." },
          ],
        },
      ],
    },
    {
      id: "raas",
      title: "8. RAAS restores pressure and filtration through a defined sequence",
      keyIdea: "JGA/renin → angiotensin II → vasoconstriction and aldosterone → increased Na+/water retention.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Low renal perfusion or related juxtaglomerular apparatus (JGA) signals can trigger renin release. The core sequence is JGA/renin → angiotensin II → vasoconstrictor effects and aldosterone → increased Na+ and water retention, supporting restoration of pressure- and filtration-related homeostasis." },
          ],
        },
      ],
    },
    {
      id: "anf",
      title: "9. ANF broadly opposes excessive sodium/water retention",
      keyIdea: "Atrial stretch promotes ANF release, which supports natriuresis and vasodilation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Atrial stretch promotes release of atrial natriuretic factor (ANF), which broadly opposes excessive sodium/water-retaining responses and supports natriuresis and vasodilation at NCERT depth. ANF is used as the primary visible textbook label; ANP may be noted only as a broader scientific synonym." },
          ],
        },
      ],
    },
    {
      id: "diabetes-insipidus",
      title: "10. Diabetes insipidus is an academic water-balance concept",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "At syllabus depth, inadequate ADH action can lead to excessive dilute urine. This is presented as an academic water-balance concept, not as a basis for diagnosing a person." },
          ],
        },
      ],
    },
    {
      id: "other-organs",
      title: "11. Other organs also contribute to excretion",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Lungs: " }, { text: "remove CO2 and water vapour." }],
            [{ text: "Liver: " }, { text: "eliminates bile pigments and selected metabolites through bile." }],
            [{ text: "Skin: " }, { text: "removes water, salts and small quantities of other substances through sweat, while sebaceous secretions remove lipid-like compounds." }],
          ],
        },
      ],
    },
    {
      id: "listed-disorders",
      title: "12. Listed renal concepts and dialysis remain strictly educational",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Brief concepts include uraemia, renal failure, renal calculi and nephritis/glomerulonephritis. Haemodialysis (artificial kidney) uses a semipermeable membrane and dialysis fluid to allow diffusible wastes and excess solutes to leave blood before it is returned to the circulation. No treatment choice, schedule or personal renal guidance is provided." },
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
        ["What is the chapter about?", "Nitrogenous-waste strategies, human excretory-system organisation, nephron function, urine formation, osmoregulation and hormonal regulation."],
        ["What is the central method choice?", "Track transport direction at each nephron stage: filtration, reabsorption, secretion, then concentration."],
        ["Where do most mistakes begin?", "Assuming the filtrate contains only wastes, confusing reabsorption with secretion, and misreading ADH/RAAS/ANF directions."],
        ["What should come before this chapter?", "Body Fluids and Circulation, for blood composition and transport context."],
        ["What comes after it?", "Chemical Coordination and Regulation, which develops hormonal regulation further."],
      ],
      note: "The official NEET UG 2026 syllabus and NCERT define content scope. No chapter weightage is asserted here.",
    },
    {
      id: "waste-strategy-matrix",
      jump: true,
      slot: "concepts",
      heading: "Nitrogenous-waste strategy matrix",
      columns: ["Strategy", "Main product", "Water/toxicity relationship", "NCERT-level examples"],
      rows: [
        ["Ammonotelic", "Ammonia", "Highly soluble/toxic; high water requirement", "Many aquatic animals, bony fishes, aquatic amphibian stages"],
        ["Ureotelic", "Urea", "Lower toxicity than ammonia; intermediate water economy", "Mammals, many adult terrestrial amphibians"],
        ["Uricotelic", "Uric acid", "Low solubility, strong water conservation", "Birds, reptiles, many insects"],
      ],
    },
    {
      id: "nephron-process-matrix",
      jump: true,
      slot: "concepts",
      heading: "Nephron process matrix",
      columns: ["Process", "Direction", "Main structural context", "Purpose"],
      rows: [
        ["Filtration", "Glomerular blood → Bowman's space", "Renal corpuscle", "Forms small-solute/water filtrate"],
        ["Reabsorption", "Tubule → blood/interstitium", "Especially PCT, then selective later segments", "Recovers useful solutes/water"],
        ["Secretion", "Blood/interstitium → tubule", "Tubular segments including PCT/DCT roles", "Ion balance/removal"],
        ["Concentration", "Regulated water/solute handling", "Loop/vasa recta/collecting duct", "Final urine concentration"],
      ],
    },
  ],

  mistakes: [
    {
      id: "filtrate-only-wastes",
      mistake: "Assuming the filtrate contains only waste products.",
      why: [{ type: "paragraph", children: [{ text: "The word 'filtrate' suggests only unwanted substances are removed from blood." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Useful small solutes are filtered too, then reabsorbed later in the nephron." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "reabsorption-secretion-confusion",
      mistake: "Treating reabsorption and secretion as the same process.",
      why: [{ type: "paragraph", children: [{ text: "Both involve movement between blood and tubule, inviting direction confusion." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track the opposite directions: reabsorption is tubule → blood, secretion is blood → tubule." }] }],
      errorType: "execution-error",
    },
    {
      id: "adh-adds-water",
      mistake: "Believing ADH adds water directly to urine.",
      why: [{ type: "paragraph", children: [{ text: "The name 'antidiuretic' can be misread as directly changing urine volume rather than acting through permeability." }] }],
      fix: [{ type: "paragraph", children: [{ text: "ADH increases water reabsorption by raising distal nephron/collecting-system water permeability." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "anf-raas-same-direction",
      mistake: "Assuming ANF and RAAS act in the same direction.",
      why: [{ type: "paragraph", children: [{ text: "Both are hormonal systems tied to blood pressure and fluid balance, which can blur their opposite roles." }] }],
      fix: [{ type: "paragraph", children: [{ text: "ANF broadly counters the sodium/water-retaining responses that RAAS supports." }] }],
      errorType: "recall-gap",
    },
    {
      id: "diabetes-insipidus-diagnosis",
      mistake: "Using diabetes insipidus content as a personal diagnosis tool.",
      why: [{ type: "paragraph", children: [{ text: "Naming a condition can invite applying it to real symptoms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep this as an ADH physiology concept; this page provides no diagnostic guidance." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "up", description: "Unit hub for Human Physiology chapters." },
    { label: "Body Fluids and Circulation", url: "/neet/biology/body-fluids-circulation", relation: "prerequisite", description: "Blood composition and transport context supports renal function." },
    { label: "Chemical Coordination and Regulation", url: "/neet/biology/chemical-coordination", relation: "related", description: "Extends hormonal regulation covered here (ADH, RAAS)." },
    { label: "Chemical Coordination and Regulation", url: "/neet/biology/chemical-coordination", relation: "next", description: "Recommended next chapter in the Human Physiology sequence." },
  ],

  sources: ["nta-neet-2026-bulletin", "ncert-biology-11-contents"],
  sourceNote:
    "Verified against the NTA NEET UG 2026 official syllabus and current NCERT Excretory Products and their Elimination and Biology Class XI Unit V contents. Renal disorders, dialysis and diabetes insipidus are represented at educational, syllabus-bound depth only; no diagnosis, drug or treatment guidance is provided.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],
  contentStatus: "draft",
  meta: {
    title: "NEET Excretory Products 2026: Nephron, ADH, RAAS, ANF",
    description:
      "Study NEET UG 2026 excretion with nephron maps for filtration, reabsorption, secretion, osmoregulation, ADH, RAAS, ANF and dialysis concepts.",
  },
};

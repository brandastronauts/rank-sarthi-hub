import type { ChapterContent } from "@/content/types";

/**
 * Structural Organisation in Animals — T06 production content (N03-04).
 *
 * PARTIAL_OR_MERGED_SCOPE, frozen route classification preserved. Animal
 * tissues plus brief morphology/anatomy/functions of an insect and a frog.
 * The official NEET UG 2026 syllabus phrase "an insect(Frog)" is disclosed
 * exactly as printed and resolved through the official NTA 2026 FAQ, which
 * states it should be read as "an insect and a frog". Cockroach is used as
 * the NCERT teaching-context insect specimen because NCERT Exemplar Chapter
 * 7 explicitly assesses cockroach; this question is not reopened here.
 * contentStatus stays "draft" pending academic review.
 */
export const neetBiologyStructuralOrganisationAnimals: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Structural Organisation in Animals",
  slug: "structural-organisation-animals",
  url: "/neet/biology/structural-organisation-animals",
  canonicalIntent:
    "Teach verified animal-tissue structure/function and provide a source-disciplined brief account of the organism-specific morphology/anatomy required by current scope, transparently resolving the official \"insect(Frog)\" wording through the official NTA 2026 FAQ and NCERT teaching context.",

  heroChips: [
    "PARTIAL_OR_MERGED_SCOPE — frozen route classification preserved",
    "Official NTA 2026 FAQ wording resolution disclosed",
    "Cockroach as NCERT teaching-context insect specimen",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 requires animal tissues plus a brief account of the morphology, anatomy and functions of major systems of an insect and a frog. NTA's official 2026 FAQ corrects the ambiguous syllabus phrase to \"an insect and a frog\".",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Rank Sarthi uses cockroach as the NCERT teaching-context insect because official NCERT Exemplar Chapter 7 explicitly assesses cockroach, while the current NCERT main chapter supplies frog context.",
        },
      ],
    },
    {
      type: "note",
      tone: "source",
      children: [
        {
          text: "The official NEET UG 2026 syllabus contains the printed phrase \"an insect(Frog)\". The official NEET UG 2026 FAQ states it should be read as \"an insect and a frog\". This page does not leave the organism identity to inference.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Animal Kingdom",
      url: "/neet/biology/animal-kingdom",
      relation: "prerequisite",
      description: "Classification background underlies the cockroach and frog placement used here.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 2, Structural Organisation in Animals and Plants",
    topics: [
      "Animal tissues",
      "Morphology, anatomy and functions of different systems of an insect and a frog",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "official-wording-vs-clarification",
      title: "1. Official wording vs official clarification",
      keyIdea: "Printed syllabus wording \"an insect(Frog)\" is corrected by the official NTA 2026 FAQ to \"an insect and a frog\".",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official NEET UG 2026 syllabus contains the known Unit 2 phrase involving \"an insect(Frog)\". The official NEET UG 2026 FAQ resolves the wording and states that it should be read as an insect and a frog. Current NCERT Chapter 7 provides the current structural-organisation and frog teaching context, while NCERT Exemplar Chapter 7 explicitly retains cockroach-focused questions alongside frog and animal-tissue questions. Cockroach is therefore used as the NCERT teaching-context insect specimen, while the official NTA syllabus wording itself is recorded as \"an insect and a frog\".",
            },
          ],
        },
      ],
    },
    {
      id: "tissue-to-organ-system",
      title: "2. Tissue to organ-system organisation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Specialised cells form tissues; tissues combine into organs; organs coordinate in organ systems. This page teaches structure-function relationships rather than definition-only lists.",
            },
          ],
        },
      ],
    },
    {
      id: "epithelial-tissue",
      title: "3. Epithelial tissue",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Epithelia are closely packed cell sheets covering surfaces or lining cavities/ducts." },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Simple squamous: ", bold: true }, { text: "thin, flat cells suited to diffusion and delicate lining." }],
            [{ text: "Cuboidal: ", bold: true }, { text: "cube-like cells commonly suited to secretion/absorption in ducts and tubules." }],
            [{ text: "Columnar: ", bold: true }, { text: "tall cells commonly involved in secretion/absorption." }],
            [{ text: "Ciliated: ", bold: true }, { text: "cilia move material along an epithelial surface." }],
            [{ text: "Compound/stratified: ", bold: true }, { text: "multiple layers provide protection." }],
          ],
        },
      ],
    },
    {
      id: "connective-tissue",
      title: "4. Connective tissue",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Connective tissues have cells embedded in an extracellular matrix whose composition varies with function." },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Areolar: ", bold: true }, { text: "loose packing/support between tissues." }],
            [{ text: "Adipose: ", bold: true }, { text: "fat storage, cushioning and insulation relationships." }],
            [{ text: "Dense connective: ", bold: true }, { text: "fibre-rich tissue supporting strong attachment/tension resistance." }],
            [{ text: "Cartilage: ", bold: true }, { text: "firm flexible matrix with chondrocytes in lacunae." }],
            [{ text: "Bone: ", bold: true }, { text: "mineralised rigid matrix for support/protection." }],
            [{ text: "Blood: ", bold: true }, { text: "fluid connective tissue; plasma is the matrix and formed elements circulate within it." }],
          ],
        },
      ],
    },
    {
      id: "muscular-tissue",
      title: "5. Muscular tissue",
      keyIdea: "Do not use \"striated = voluntary\"; cardiac muscle is the exception to that shortcut.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Skeletal muscle has long cylindrical striated, multinucleate fibres under voluntary control and drives body/skeletal movement. Smooth muscle has spindle-shaped non-striated cells under involuntary control and drives visceral-wall movement. Cardiac muscle has branched striated cells with intercellular junction specialisation under involuntary rhythmic control and drives heart-wall contraction.",
            },
          ],
        },
      ],
    },
    {
      id: "neural-tissue",
      title: "6. Neural tissue",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Neural tissue contains neurons specialised for excitability/conduction plus supporting glial cells. Detailed impulse physiology belongs to the Neural Control and Coordination page.",
            },
          ],
        },
      ],
    },
    {
      id: "cockroach-morphology-systems",
      title: "7. Cockroach: NCERT teaching-context insect specimen",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "External organisation: cockroach has a segmented body divided into head, thorax and abdomen and covered by a chitinous exoskeleton. The thorax bears three pairs of legs. Adult wings are associated with the thoracic region, and antennae are prominent sensory structures.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Digestive system: mouth/foregut leads to crop, gizzard/proventriculus, midgut and hindgut. Crop stores food temporarily; gizzard contributes mechanical processing; midgut is associated with digestion/absorption and gastric/hepatic caeca; Malpighian tubules arise near the midgut-hindgut junction and function in excretion.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Circulation: cockroach has an open circulatory system. Haemolymph occupies the haemocoel and is moved by a dorsal heart/vessel system rather than remaining in a closed vessel network throughout.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Respiration: spiracles open into tracheae that branch into finer tubes and deliver gases close to tissues, so gas transport is not dependent on a vertebrate-style haemoglobin circulation.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Nervous system: cephalic ganglia and segmentally arranged ganglia connected by a ventral nerve cord form the main organisation.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Reproduction: sexes are separate. Male and female systems contain paired gonads, ducts and accessory structures; treatment is kept brief as required by current scope.",
            },
          ],
        },
      ],
    },
    {
      id: "frog-brief-account",
      title: "8. Frog: brief NCERT account",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "External organisation: frog has an amphibian body with head and trunk, moist glandular skin and paired limbs adapted for terrestrial movement and swimming. External structures include nostrils and tympanum at textbook depth.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Digestive system: mouth/buccal cavity leads to pharynx, oesophagus, stomach, small intestine, rectum and cloaca. Liver and pancreas supply digestive secretions.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Circulation: frog has a closed circulatory system and a three-chambered heart with two atria and one ventricle. Pulmonary/skin and systemic flows are coordinated but not completely separated as in a four-chambered mammalian heart.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Respiration: gas exchange can occur through skin, buccopharyngeal lining and lungs, with relative contribution depending on physiological/environmental context.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Nervous system: brain and spinal cord form the central nervous system with peripheral nerves connecting the body." },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Reproduction: sexes are separate; gonads and ducts form the reproductive systems. Fertilisation is external in the standard NCERT frog account.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "official-wording-evidence",
      slot: "scope",
      heading: "Official wording vs teaching-context evidence",
      jump: true,
      columns: ["Layer", "Source-verified evidence", "Production decision"],
      rows: [
        ["NTA syllabus", "\"an insect(Frog)\" wording", "Disclose exact source issue"],
        ["NTA 2026 FAQ", "Should read \"an insect and a frog\"", "Both organism categories are current"],
        ["NCERT current Chapter 7", "Current structural-organisation/frog teaching context", "Use for frog and overall organisation"],
        ["NCERT Exemplar Chapter 7", "Explicit cockroach morphology/anatomy questions plus frog/tissue questions", "Cockroach is the NCERT teaching-context insect specimen"],
      ],
    },
    {
      id: "tissue-dataset",
      slot: "concepts",
      heading: "Tissue dataset",
      jump: true,
      columns: ["Family", "Production subtypes", "Structural discriminator", "Core roles", "High-risk confusion"],
      rows: [
        ["Epithelial", "Squamous, cuboidal, columnar, ciliated, compound", "Cell shape/layers/surface specialisation", "Lining, exchange, secretion, absorption, protection", "Simple vs compound"],
        ["Connective", "Areolar, adipose, dense, cartilage, bone, blood", "Cells dispersed in matrix", "Binding, support, transport, storage", "Blood remains connective tissue"],
        ["Muscular", "Skeletal, smooth, cardiac", "Striation, shape, branching/control", "Contraction/movement", "Cardiac striated but involuntary"],
        ["Neural", "Neurons + glia", "Excitable cells with processes plus support", "Signalling/support", "Impulse detail belongs to neural route"],
      ],
    },
    {
      id: "organism-system-dataset",
      slot: "concepts",
      heading: "Cockroach vs frog system dataset",
      jump: true,
      columns: ["Specimen", "System", "Final production facts"],
      rows: [
        ["Cockroach", "Body plan", "Head, thorax, abdomen; chitinous exoskeleton; three pairs of thoracic legs; antennae"],
        ["Cockroach", "Digestive", "Crop, gizzard, midgut with caeca, hindgut; Malpighian tubules near midgut-hindgut junction"],
        ["Cockroach", "Circulatory", "Open circulation, haemocoel, dorsal heart/vessel system"],
        ["Cockroach", "Respiratory", "Spiracles -> tracheae -> fine branches"],
        ["Cockroach", "Nervous", "Cephalic and segmental ganglia with ventral nerve cord"],
        ["Cockroach", "Reproductive", "Separate sexes; gonads, ducts, accessory structures; brief account"],
        ["Frog", "Body plan", "Head/trunk, moist skin, paired limbs"],
        ["Frog", "Digestive", "Mouth -> pharynx -> oesophagus -> stomach -> intestine -> rectum -> cloaca; liver/pancreas"],
        ["Frog", "Circulatory", "Closed system; two atria + one ventricle"],
        ["Frog", "Respiratory", "Cutaneous, buccopharyngeal, pulmonary"],
        ["Frog", "Nervous", "CNS plus peripheral nerves"],
        ["Frog", "Reproductive", "Separate sexes; gonads/ducts; external fertilisation"],
      ],
    },
  ],

  mistakes: [
    {
      id: "reading-frog-as-insect",
      mistake: "Reading frog as an insect from the ambiguous syllabus phrase.",
      why: [{ type: "paragraph", children: [{ text: "The printed syllabus wording \"an insect(Frog)\" is confusing on its own." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the official NTA 2026 FAQ correction: read it as \"an insect and a frog\"." }] }],
      errorType: "needs-review",
    },
    {
      id: "choosing-arbitrary-insect",
      mistake: "Choosing an arbitrary insect specimen instead of the NCERT-supported one.",
      why: [{ type: "paragraph", children: [{ text: "Only cockroach is explicitly assessed with morphology/anatomy questions in NCERT Exemplar Chapter 7." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the NCERT Exemplar-supported cockroach as the teaching-context insect specimen." }] }],
      errorType: "decision-error",
    },
    {
      id: "all-striated-voluntary",
      mistake: "Assuming all striated muscle is voluntary.",
      why: [{ type: "paragraph", children: [{ text: "Cardiac muscle is striated but under involuntary rhythmic control." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat cardiac muscle as the exception to the striated-equals-voluntary shortcut." }] }],
      errorType: "recall-gap",
    },
    {
      id: "blood-not-connective",
      mistake: "Believing blood is not connective tissue because it is fluid.",
      why: [{ type: "paragraph", children: [{ text: "Blood is a fluid connective tissue; plasma functions as its matrix." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Classify blood as connective tissue with plasma as the matrix and formed elements circulating within it." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "circulation-swapped",
      mistake: "Swapping cockroach and frog circulation types.",
      why: [{ type: "paragraph", children: [{ text: "Cockroach has an open circulatory system with haemolymph in a haemocoel; frog has a closed circulatory system." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Fix the pairing: cockroach open, frog closed, before answering comparison questions." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for all current NEET UG 2026 Biology chapters.",
    },
    {
      label: "Animal Kingdom",
      url: "/neet/biology/animal-kingdom",
      relation: "prerequisite",
      description: "Classification background underlies the cockroach and frog placement used here.",
    },
    {
      label: "Anatomy of Plants",
      url: "/neet/biology/anatomy-of-plants",
      relation: "related",
      description: "Useful lateral comparison for tissue-organisation reasoning.",
    },
    {
      label: "Human Physiology",
      url: "/neet/biology/human-physiology",
      relation: "next",
      description: "Forward route building on organ-system organisation into human systems.",
    },
  ],

  links: [
    {
      label: "Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Exam-level official Biology syllabus mapping.",
    },
  ],

  sources: ["nta-neet-2026-bulletin", "nmc-neet-ug-2026-syllabus", "ncert-biology-11-contents", "ncert-exemplar-index"],
  sourceNote:
    "Paraphrased from the current NCERT Structural Organisation in Animals chapter (Class XI) and NCERT Exemplar Biology Class XI Chapter 7. The official NEET UG 2026 syllabus wording \"an insect(Frog)\" is disclosed as printed and resolved using the official NTA 2026 FAQ statement that it should be read as \"an insect and a frog\". Cockroach is used as the NCERT teaching-context insect specimen because NCERT Exemplar Chapter 7 explicitly assesses cockroach. No NCERT diagram is reproduced.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],

  faqs: [
    {
      question: "Does NEET UG 2026 call frog an insect?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The printed wording is confusing, but the official NTA 2026 FAQ says it should be read as \"an insect and a frog\".",
            },
          ],
        },
      ],
    },
    {
      question: "Which insect is used here?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Cockroach, because official NCERT Exemplar Chapter 7 explicitly assesses cockroach morphology/anatomy. It is labelled as the NCERT teaching-context specimen, not as wording invented by NTA.",
            },
          ],
        },
      ],
    },
    {
      question: "What are the four main animal-tissue groups?",
      answer: [{ type: "paragraph", children: [{ text: "Epithelial, connective, muscular and neural." }] }],
    },
  ],

  contentStatus: "draft",
  meta: {
    title: "NEET Structural Organisation in Animals 2026: Tissues, Cockroach, Frog",
    description:
      "Learn the verified NEET UG 2026 structural-organisation scope with animal tissues and the official NTA insect-and-frog clarification mapped to NCERT cockroach and frog context.",
  },
};

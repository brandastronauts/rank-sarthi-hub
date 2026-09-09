import type { ChapterContent } from "@/content/types";

/**
 * Locomotion and Movement — T06 production content.
 * Scope: CURRENT_OFFICIAL_SCOPE (NEET UG 2026, Unit 5 Human Physiology).
 * No exercise, sports-performance, injury, supplement, treatment or
 * rehabilitation advice is included.
 */
export const neetBiologyLocomotionMovement: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Locomotion and Movement",
  slug: "locomotion-movement",
  url: "/neet/biology/locomotion-movement",
  canonicalIntent:
    "Connect skeletal-muscle microstructure to the sliding-filament contraction sequence, and distinguish movement types, skeleton regions and joint classes.",

  heroChips: [
    "NEET UG 2026 current scope",
    "No invented weightage or question counts",
    "Educational only — no exercise or therapy advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 Locomotion and Movement covers ciliary, flagellar and muscular movement, skeletal muscle and contractile proteins, the mechanism of muscle contraction, the skeletal system, joints and listed disorders.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Learn the contraction mechanism as a single chain: muscle → fibre → myofibril → sarcomere → actin/myosin interaction → sliding and shortening.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        { text: "This page does not provide exercise programming, sports-performance, injury-diagnosis, supplement or rehabilitation advice." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Structural Organisation in Animals",
      url: "/neet/biology/structural-organisation-animals",
      relation: "prerequisite",
      description: "Tissue-level organisation, including muscle tissue basics, supports the sarcomere-level detail here.",
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
      "Types of movement: ciliary, flagellar, muscular",
      "Skeletal muscle: contractile proteins and muscle contraction",
      "Skeletal system and its functions",
      "Joints",
      "Disorders of muscular and skeletal system: myasthenia gravis, tetany, muscular dystrophy, arthritis, osteoporosis, gout",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "movement-vs-locomotion",
      title: "1. Movement is broader than locomotion",
      keyIdea: "All locomotion is movement, but not all movement is locomotion.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Movement is a change in position of a body part or component; locomotion produces displacement of the whole organism. All locomotion is movement, but not all movement is locomotion." },
          ],
        },
      ],
    },
    {
      id: "movement-types",
      title: "2. Three movement types are distinguished by mechanism",
      keyIdea: "Ciliary, flagellar and muscular movement rely on different structural mechanisms.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Ciliary: " }, { text: "coordinated ciliary beating moves material past ciliated epithelia." }],
            [{ text: "Flagellar: " }, { text: "flagellar beating drives sperm motility." }],
            [{ text: "Muscular: " }, { text: "actin-myosin contraction produces limb/body movement." }],
          ],
        },
      ],
    },
    {
      id: "muscle-hierarchy",
      title: "3. Skeletal muscle is organised in a fixed structural hierarchy",
      keyIdea: "Muscle → fascicle → muscle fibre → myofibril → sarcomere → thick/thin filaments.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Skeletal fibres are long, multinucleate cells. Sarcomeres, the repeating contractile units between Z lines, are contained within myofibrils that make up each muscle fibre." },
          ],
        },
      ],
    },
    {
      id: "sarcomere-structure",
      title: "4. Sarcomere bands change length differently during contraction",
      keyIdea: "The A band stays essentially constant while the I band and H zone shrink as filaments overlap more.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Thin filament: " }, { text: "actin plus troponin/tropomyosin regulatory proteins." }],
            [{ text: "Thick filament: " }, { text: "myosin." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "The A band corresponds to thick-filament length and remains essentially constant during shortening. The I band and H zone become smaller as overlap increases. Filaments do not themselves shorten; sarcomeres shorten because thin filaments slide over thick filaments." },
          ],
        },
      ],
    },
    {
      id: "contraction-sequence",
      title: "5. Contraction follows an ordered calcium-gated sequence",
      keyIdea: "Calcium binds troponin, which shifts tropomyosin to expose myosin-binding sites for cross-bridge cycling.",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "A motor-neuron signal reaches the neuromuscular junction." }],
            [{ text: "The muscle membrane is excited and Ca2+ is released from the sarcoplasmic reticulum." }],
            [{ text: "Ca2+ binds troponin." }],
            [{ text: "Tropomyosin shifts and exposes myosin-binding sites on actin." }],
            [{ text: "Energised myosin heads form cross-bridges." }],
            [{ text: "A power stroke pulls thin filaments toward the sarcomere centre." }],
            [{ text: "ATP binding and hydrolysis support detachment and re-cocking for repeated cycling." }],
            [{ text: "Ca2+ is pumped back to storage; binding sites become covered and the muscle relaxes." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "Do not treat 'ATP directly shortens muscle' as accurate without the calcium-gating and cross-bridge mechanics." }],
        },
      ],
    },
    {
      id: "skeleton",
      title: "6. The skeleton divides into axial and appendicular components",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Axial skeleton: " }, { text: "skull, vertebral column and thoracic cage/central axis." }],
            [{ text: "Appendicular skeleton: " }, { text: "limb bones and pectoral/pelvic girdles." }],
          ],
        },
      ],
    },
    {
      id: "joints",
      title: "7. Joints are classified by mobility",
      keyIdea: "Fibrous, cartilaginous and synovial joints differ in how much movement they permit.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Major synovial forms at NCERT depth are ball-and-socket, hinge, pivot, gliding and saddle joints. Teach the relationship between joint form and permitted movement rather than isolated names." },
          ],
        },
      ],
    },
    {
      id: "listed-disorders",
      title: "8. Listed muscular/skeletal disorders remain strictly educational",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Brief concepts include myasthenia gravis, muscular dystrophy, tetany, arthritis, osteoporosis and gout. This page does not provide injury, exercise, supplement, treatment or physiotherapy advice." },
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
        ["What is the chapter about?", "Movement types, skeletal-muscle structure, the sliding-filament contraction mechanism, the skeleton and joint classes."],
        ["What is the central method choice?", "Trace muscle → fibre → myofibril → sarcomere → actin/myosin interaction to explain contraction, and match joint form to permitted movement."],
        ["Where do most mistakes begin?", "Assuming every movement is locomotion, thinking filaments shorten, and misplacing the role of calcium versus ATP."],
        ["What should come before this chapter?", "Structural Organisation in Animals, for muscle-tissue basics."],
        ["What comes after it?", "Neural Control and Coordination, which governs how motor signals reach muscle."],
      ],
      note: "The official NEET UG 2026 syllabus and NCERT define content scope. No chapter weightage is asserted here.",
    },
    {
      id: "movement-type-table",
      jump: true,
      slot: "concepts",
      heading: "Movement type comparison",
      columns: ["Type", "Mechanism", "Example relationship"],
      rows: [
        ["Ciliary", "Coordinated ciliary beating", "Movement of material by ciliated epithelia"],
        ["Flagellar", "Flagellar beating", "Sperm motility"],
        ["Muscular", "Actin-myosin contraction", "Limb/body movement"],
      ],
    },
    {
      id: "joint-dataset",
      jump: true,
      slot: "concepts",
      heading: "Joint class comparison",
      columns: ["Class", "Mobility", "Example relationship"],
      rows: [
        ["Fibrous", "Little/no movement", "Skull sutures"],
        ["Cartilaginous", "Limited movement", "Adjacent vertebral relationships at textbook depth"],
        ["Synovial", "Freely movable", "Limb joints"],
      ],
      note: "Major synovial subtypes at NCERT depth: ball-and-socket, hinge, pivot, gliding and saddle.",
    },
  ],

  mistakes: [
    {
      id: "all-movement-is-locomotion",
      mistake: "Treating every movement as locomotion.",
      why: [{ type: "paragraph", children: [{ text: "The two terms are used loosely in everyday language." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Locomotion specifically displaces the whole organism; not all movement does this." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "filaments-shorten",
      mistake: "Believing actin and myosin filaments themselves shorten during contraction.",
      why: [{ type: "paragraph", children: [{ text: "The sarcomere visibly shortens, which suggests the filaments shrink." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Filaments slide and overlap changes; filament lengths themselves stay constant." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "calcium-binds-myosin",
      mistake: "Assuming Ca2+ binds myosin to expose actin sites.",
      why: [{ type: "paragraph", children: [{ text: "The regulatory role of calcium is often attributed to the wrong protein in the complex." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Ca2+ binds troponin, which shifts tropomyosin to expose the myosin-binding sites." }] }],
      errorType: "recall-gap",
    },
    {
      id: "atp-only-power-stroke",
      mistake: "Assuming ATP is only involved in the power stroke.",
      why: [{ type: "paragraph", children: [{ text: "The power stroke is the most visible contraction event, which obscures ATP's other roles." }] }],
      fix: [{ type: "paragraph", children: [{ text: "ATP is critical for cross-bridge detachment and recycling as well." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "all-joints-freely-movable",
      mistake: "Assuming all joints are freely movable.",
      why: [{ type: "paragraph", children: [{ text: "Synovial joints dominate everyday examples, obscuring the other two classes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Distinguish fibrous, cartilaginous and synovial joints by their mobility." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "up", description: "Unit hub for Human Physiology chapters." },
    { label: "Structural Organisation in Animals", url: "/neet/biology/structural-organisation-animals", relation: "prerequisite", description: "Tissue-level organisation underlies muscle structure." },
    { label: "Neural Control and Coordination", url: "/neet/biology/neural-control", relation: "related", description: "Governs the motor signals that trigger muscle contraction." },
    { label: "Neural Control and Coordination", url: "/neet/biology/neural-control", relation: "next", description: "Recommended next chapter in the Human Physiology sequence." },
  ],

  sources: ["nta-neet-2026-bulletin", "ncert-biology-11-contents"],
  sourceNote:
    "Verified against the NTA NEET UG 2026 official syllabus and current NCERT Locomotion and Movement and Biology Class XI Unit V contents. Listed disorders are represented at educational, syllabus-bound depth only; no exercise, injury, supplement or treatment guidance is provided.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],
  contentStatus: "draft",
  meta: {
    title: "NEET Locomotion and Movement 2026: Muscle Contraction and Joints",
    description:
      "Learn NEET UG 2026 movement types, skeletal muscle, sarcomeres, actin-myosin contraction, skeleton and joint classes through source-verified maps.",
  },
};

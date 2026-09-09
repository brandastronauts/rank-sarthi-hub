import type { ChapterContent } from "@/content/types";

/**
 * Neural Control and Coordination — T06 production content.
 *
 * Scope discipline: the current NEET UG 2026 wording explicitly names
 * neuron and nerves, CNS, PNS, the visceral nervous system, and generation
 * and conduction of nerve impulse. Synaptic transmission is included only
 * as NCERT support to complete the impulse pathway. Eye, ear, dedicated
 * sensory-reception content and reflex as a separate module are treated as
 * CONTEXTUAL / NOT EXPLICIT CURRENT SCOPE and are deliberately not
 * rendered as current-core modules on this page.
 */
export const neetBiologyNeuralControl: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Neural Control and Coordination",
  slug: "neural-control",
  url: "/neet/biology/neural-control",
  canonicalIntent:
    "Cover the explicit NEET UG 2026 neural-control scope — neuron and nerves, CNS/PNS/visceral relationships and nerve-impulse generation/conduction — while separating it clearly from contextual, non-explicit sensory content.",

  heroChips: [
    "NEET UG 2026 current scope, explicitly bounded",
    "No invented weightage or question counts",
    "Educational only — no clinical neurology content",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET UG 2026, Neural Control and Coordination explicitly covers neurons and nerves, the central, peripheral and visceral nervous systems, and the generation and conduction of nerve impulses.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Eye, ear and dedicated reflex/sensory sections are kept outside the current core on this page because they are not explicitly listed in the verified 2026 wording.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        { text: "This page does not publish invented weightage or question counts, and it does not provide clinical neurology content." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Structural Organisation in Animals",
      url: "/neet/biology/structural-organisation-animals",
      relation: "prerequisite",
      description: "Tissue-level organisation, including nervous tissue basics, supports the neuron-level detail here.",
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
      "Neuron and nerves",
      "Human central nervous system",
      "Peripheral nervous system",
      "Visceral nervous system",
      "Generation and conduction of nerve impulse",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "neuron-structure",
      title: "1. Neuron structure has a functional input-to-output orientation",
      keyIdea: "Input/dendritic region → soma → axon → terminal → next cell.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Cell body/soma: " }, { text: "contains the nucleus and major biosynthetic machinery." }],
            [{ text: "Dendrites: " }, { text: "commonly receive signals toward the soma." }],
            [{ text: "Axon: " }, { text: "conducts impulses away from the soma toward another neuron, muscle or gland." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "This is the standard NCERT functional relationship, not a claim that every neuron has identical morphology." },
          ],
        },
      ],
    },
    {
      id: "myelinated-unmyelinated",
      title: "2. Myelination changes conduction pattern, not conduction ability",
      keyIdea: "Myelinated fibres conduct by saltatory jumps between nodes; unmyelinated fibres conduct through successive adjacent activation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Myelin electrically insulates portions of the axon. Myelinated fibres have exposed nodes that support saltatory conduction, with action potentials effectively regenerated node to node. Unmyelinated fibres lack that same continuous myelin arrangement and conduct through successive adjacent membrane activation. Unmyelinated does not mean unable to conduct." },
          ],
        },
      ],
    },
    {
      id: "cns-pns-visceral",
      title: "3. CNS, PNS and the visceral nervous system have distinct roles",
      keyIdea: "CNS integrates; PNS connects; afferent carries information in, efferent carries commands out.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The official syllabus wording visibly names the visceral nervous system, so this term is used directly, with the autonomic relationship explained at NCERT depth." },
          ],
        },
      ],
    },
    {
      id: "resting-membrane-potential",
      title: "4. A resting neuron maintains a negative interior through selective permeability and active transport",
      keyIdea: "The Na+/K+ pump moves three Na+ out for every two K+ in, contributing to the resting potential.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "A resting neuron maintains unequal ionic distributions and selective membrane permeability, producing a negative interior relative to outside. Active transport contributes to maintaining gradients. NCERT describes the Na+/K+ pump moving three Na+ out for two K+ in as part of this mechanism." },
          ],
        },
      ],
    },
    {
      id: "depolarisation-repolarisation",
      title: "5. Depolarisation is driven by Na+ entry, repolarisation by K+ exit",
      keyIdea: "Na+ permeability rise causes depolarisation; the subsequent K+ permeability rise causes repolarisation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "When a sufficient stimulus increases Na+ permeability at a membrane region, Na+ enters and the local membrane becomes less negative and then positive relative to outside — this is depolarisation. K+ permeability then rises and K+ leaves, helping restore the membrane toward resting polarity — this is repolarisation. Ion gradients are subsequently maintained or restored through membrane transport processes." },
          ],
        },
      ],
    },
    {
      id: "propagation",
      title: "6. The impulse propagates by sequential membrane regeneration, not by one ion packet travelling",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The impulse is not one packet of Na+ physically travelling from soma to terminal. Adjacent membrane regions sequentially undergo permeability changes and action-potential regeneration: unmyelinated fibres show successive adjacent membrane activation, while myelinated fibres show saltatory node-to-node propagation." },
          ],
        },
      ],
    },
    {
      id: "synaptic-transmission-support",
      title: "7. Synaptic transmission is NCERT support to the current impulse architecture",
      keyIdea: "Synapse is not separately named in the official wording, but current NCERT uses it to complete neuron-to-neuron communication.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The official syllabus names generation/conduction of nerve impulse but does not separately list synapse. Current NCERT uses synaptic transmission to complete neuron-to-neuron communication. It is therefore included as NCERT support within the current impulse architecture, not as a separately named current-syllabus heading." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Chemical synapse sequence: presynaptic impulse → neurotransmitter release → synaptic cleft → receptor binding → postsynaptic membrane response. Electrical synapses use direct electrical coupling and are faster in the NCERT comparison." },
          ],
        },
      ],
    },
    {
      id: "cns-organisation",
      title: "8. CNS organisation is kept concise at current depth",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Because CNS is explicitly current, a concise map may show the brain organised into forebrain, midbrain and hindbrain framework at NCERT depth, with the spinal cord as a central pathway/integration structure connecting brain and peripheral nerves. Unnecessary neuroanatomy expansion is avoided." },
          ],
        },
      ],
    },
    {
      id: "contextual-boundary",
      title: "9. Eye, ear, dedicated sensory reception and reflex are contextual, not current core",
      body: [
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "Eye anatomy/visual mechanism, ear anatomy/hearing/equilibrium, a dedicated sensory-receptor survey, and reflex action/reflex arc as a separately claimed current topic are not rendered as current-core modules on this page, because they are not explicitly listed in the verified 2026 wording.",
            },
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
        ["What is the chapter about?", "Neuron structure, CNS/PNS/visceral nervous-system relationships and the generation/conduction of nerve impulses."],
        ["What is the central method choice?", "Track ion-permeability changes (Na+ then K+) through resting, depolarisation, repolarisation and propagation phases."],
        ["Where do most mistakes begin?", "Swapping the ions responsible for depolarisation and repolarisation, and restoring eye/ear/reflex as current-core content."],
        ["What should come before this chapter?", "Structural Organisation in Animals, for nervous-tissue basics."],
        ["What comes after it?", "Chemical Coordination and Regulation, which covers hormonal signalling alongside neural control."],
      ],
      note: "The official NEET UG 2026 syllabus and NCERT define content scope. No chapter weightage is asserted here.",
    },
    {
      id: "nervous-system-dataset",
      jump: true,
      slot: "concepts",
      heading: "CNS/PNS/visceral relationships",
      columns: ["Division/path", "Relationship", "Function at NCERT depth"],
      rows: [
        ["CNS", "Brain + spinal cord", "Central integration/control"],
        ["PNS", "Nerves outside CNS", "Connects CNS with body"],
        ["Afferent", "Periphery → CNS", "Carries information toward CNS"],
        ["Efferent", "CNS → effectors", "Carries output away from CNS"],
        ["Somatic motor", "CNS/PNS → skeletal muscle", "Voluntary motor relationship"],
        ["Visceral/autonomic", "Central/peripheral control → internal organs/glands", "Involuntary visceral regulation"],
      ],
    },
    {
      id: "impulse-phase-matrix",
      jump: true,
      slot: "concepts",
      heading: "Nerve-impulse phase matrix",
      columns: ["State", "Dominant event", "Consequence"],
      rows: [
        ["Resting", "Selective permeability + ion gradients + active transport", "Negative interior/excitable baseline"],
        ["Depolarisation", "Na+ permeability rises; Na+ enters", "Local potential becomes less negative/positive"],
        ["Repolarisation", "K+ permeability rises; K+ exits", "Returns toward resting polarity"],
        ["Propagation", "Adjacent membrane repeats sequence", "Impulse travels along axon"],
      ],
    },
    {
      id: "scope-boundary-table",
      jump: true,
      slot: "scope",
      heading: "Current core vs contextual boundary",
      columns: ["Category", "Items"],
      rows: [
        ["Explicit current core", "Neuron and nerves; CNS; PNS; visceral nervous system; generation and conduction of nerve impulse"],
        ["NCERT support, not separately named", "Synaptic transmission"],
        ["Contextual / not explicit current scope", "Eye; ear; sensory reception as a separate module; reflex as a separate module"],
      ],
      note: "This boundary reflects the verified NEET UG 2026 wording as recorded in this package; it does not restore older preparation-material content by default.",
    },
  ],

  mistakes: [
    {
      id: "depolarisation-k-swap",
      mistake: "Believing depolarisation happens because K+ leaves the cell.",
      why: [{ type: "paragraph", children: [{ text: "Both ions are involved in the action potential, which invites swapping their roles." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Na+ entry drives depolarisation at NCERT depth." }] }],
      errorType: "recall-gap",
    },
    {
      id: "repolarisation-na-swap",
      mistake: "Believing repolarisation happens because Na+ enters the cell.",
      why: [{ type: "paragraph", children: [{ text: "The sequential nature of the two phases is easy to reverse under time pressure." }] }],
      fix: [{ type: "paragraph", children: [{ text: "K+ efflux helps restore polarity during repolarisation." }] }],
      errorType: "recall-gap",
    },
    {
      id: "impulse-single-packet",
      mistake: "Picturing the nerve impulse as one ion packet moving end-to-end.",
      why: [{ type: "paragraph", children: [{ text: "The word 'impulse' suggests something physically travels the length of the axon." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Adjacent membrane segments regenerate the signal in sequence; no single packet travels the whole distance." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "unmyelinated-cannot-conduct",
      mistake: "Assuming unmyelinated fibres cannot conduct impulses.",
      why: [{ type: "paragraph", children: [{ text: "Myelination is strongly associated with fast conduction, which can be over-generalised." }] }],
      fix: [{ type: "paragraph", children: [{ text: "They conduct without the saltatory node-to-node pattern, through successive adjacent membrane activation." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "eye-ear-reflex-restored",
      mistake: "Restoring eye, ear or reflex content as current-core because older notes include them.",
      why: [{ type: "paragraph", children: [{ text: "Older preparation materials often bundle sensory organs and reflexes with neural control." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the verified 2026 boundary; these remain contextual and are not treated as current-core modules here." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "up", description: "Unit hub for Human Physiology chapters." },
    { label: "Structural Organisation in Animals", url: "/neet/biology/structural-organisation-animals", relation: "prerequisite", description: "Nervous-tissue basics underlie neuron structure." },
    { label: "Locomotion and Movement", url: "/neet/biology/locomotion-movement", relation: "related", description: "Neural signals trigger the muscle contraction covered there." },
    { label: "Chemical Coordination and Regulation", url: "/neet/biology/chemical-coordination", relation: "next", description: "Recommended next chapter in the Human Physiology sequence." },
  ],

  sources: ["nta-neet-2026-bulletin", "ncert-biology-11-contents"],
  sourceNote:
    "Verified against the NTA NEET UG 2026 official Unit 5 wording and current NCERT Neural Control and Coordination and Biology Class XI Unit V contents. Eye, ear, dedicated sensory reception and reflex as a separate module are recorded as contextual, not explicit current scope, and are not rendered as current-core modules on this page.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],
  contentStatus: "draft",
  meta: {
    title: "NEET Neural Control 2026: Neuron, CNS, PNS and Nerve Impulse",
    description:
      "Learn the verified NEET UG 2026 neural-control scope with neuron structure, CNS/PNS/visceral relationships, nerve impulse generation and a clear current-scope boundary.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Semiconductors — T06 production content (Batch 04, 8 September 2026).
 *
 * Evidence discipline:
 * - The current JEE Advanced 2026 Physics syllabus does not explicitly list
 *   semiconductors or electronic devices, so no Advanced mapping is claimed.
 * - No weightage, trend or question-count claims. No named contributor yet.
 * - contentStatus stays "draft"; the registry keeps this route noindex until
 *   academic review, source sign-off, and link/schema/render QA pass.
 */
export const jeePhysicsSemiconductors: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Semiconductors",
  slug: "semiconductors",
  url: "/jee/physics/semiconductors",
  canonicalIntent:
    "Connect carrier behaviour and junction bias to diode devices, rectification, regulation and logic without applying ideal models blindly.",

  heroChips: [
    "Mapped to JEE Main 2026 only",
    "Not explicit in the current JEE Advanced 2026 Physics syllabus",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A semiconductor's conductivity depends on mobile electrons and holes. Doping changes the majority-carrier population. A p-n junction creates a depletion region and built-in barrier; forward bias reduces that barrier and reverse bias increases it until breakdown conditions become relevant.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Device behaviour follows from this junction physics, but real current-voltage curves are not ideal switches.",
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
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Stabilise current, potential difference, resistance and circuit paths before Semiconductors.",
    },
    {
      label: "Atoms and Nuclei",
      url: "/jee/physics/atoms-and-nuclei",
      relation: "prerequisite",
      description: "Review atomic energy levels and qualitative band ideas.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Subject hub for the Physics chapter set.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every Physics, Chemistry and Mathematics unit.",
    },
  ],

  syllabusMapping: {
    unit: "Semiconductors",
    topics: [
      "Semiconductors",
      "Semiconductor-diode current-voltage characteristics in forward and reverse bias",
      "Diode as a rectifier",
      "LED, photodiode, solar-cell and Zener-diode characteristics",
      "Zener diode as a voltage regulator",
      "OR, AND, NOT, NAND and NOR gates",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): material, carriers, junction, device, logic */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "material",
      title: "1. Material determines carrier availability",
      keyIdea: "The separation and occupation of allowed energy bands determine whether mobile carriers are readily available.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The separation and occupation of allowed energy bands determine whether mobile carriers are readily available.",
            },
          ],
        },
      ],
    },
    {
      id: "carriers",
      title: "2. Carriers: intrinsic pairs and doped majorities",
      keyIdea: "Doping creates n-type or p-type material by changing majority carriers without making the bulk material macroscopically charged.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An intrinsic semiconductor has thermally generated electron-hole pairs. Doping creates n-type or p-type material by changing majority carriers without making the bulk material macroscopically charged.",
            },
          ],
        },
      ],
    },
    {
      id: "junction",
      title: "3. Junction: depletion region and built-in field",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Diffusion and recombination near a p-n interface form a depletion region and built-in electric field.",
            },
          ],
        },
      ],
    },
    {
      id: "bias",
      title: "4. Bias raises or lowers the barrier",
      keyIdea: "Forward bias lowers the effective junction barrier; reverse bias raises it and leaves a small reverse current before breakdown in the ordinary model.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Forward bias lowers the effective junction barrier. Reverse bias raises it and leaves a small reverse current before breakdown in the ordinary model.",
            },
          ],
        },
      ],
    },
    {
      id: "device",
      title: "5. Device: different operating regions and conversions",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Rectifier, LED, photodiode, solar cell, and Zener regulator use different operating regions and energy conversions.",
            },
          ],
        },
      ],
    },
    {
      id: "logic",
      title: "6. Logic: gates and truth tables",
      keyIdea: "A truth table defines the gate more reliably than a shape remembered without context.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Gates map binary input states to a binary output. A truth table defines the gate more reliably than a shape remembered without context.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25) placed at typed anchor points               */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is the chapter about?",
          "How carrier populations, junction formation and bias govern diode devices, rectification, regulation and logic gates.",
        ],
        [
          "What is the central method choice?",
          "Compare terminal potentials to fix bias direction, identify which diode conducts under the stated model, trace current in each half-cycle for rectifiers, and build intermediate truth values for logic networks.",
        ],
        [
          "Where do most mistakes begin?",
          "Calling n-type material negatively charged, confusing forward and reverse bias, treating a practical diode as an ideal switch without permission, and mixing LED, photodiode and solar-cell roles.",
        ],
        [
          "What should come before Semiconductors?",
          "Current, potential difference, resistance, circuit paths, atomic energy levels and qualitative band ideas.",
        ],
        [
          "What comes after it?",
          "Communication Systems applies devices to signal transmission, and Electromagnetic Waves extends the broader Modern Physics family context.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Semiconductors",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 7 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Semiconductor material and diode characteristics",
          "Semiconductors and semiconductor-diode current-voltage characteristics in forward and reverse bias are explicitly listed.",
          "No semiconductor or electronic-device topic is explicitly listed in the current official syllabus.",
          "Do not claim an Advanced mapping for this chapter.",
        ],
        [
          "Rectification and light or power devices",
          "Diode rectifier, LED, photodiode, solar-cell and Zener-diode characteristics are explicitly listed.",
          "Not applicable.",
          "Keep device roles distinct; do not treat them as interchangeable diodes.",
        ],
        [
          "Voltage regulation",
          "Zener diode as a voltage regulator is explicitly listed.",
          "Not applicable.",
          "Always include the series current-limiting resistor in reasoning.",
        ],
        [
          "Logic gates",
          "OR, AND, NOT, NAND and NOR gates are explicitly listed.",
          "Not applicable.",
          "Use the truth table, not a remembered symbol shape.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Semiconductors",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Current and potential difference",
          "Relate current, potential difference and resistance in a circuit.",
          "Revise Current Electricity fundamentals.",
        ],
        [
          "Circuit paths",
          "Trace current direction through a network with a source and load.",
          "Revise series and parallel circuit analysis.",
        ],
        [
          "Atomic energy levels",
          "Describe discrete energy levels qualitatively.",
          "Revise Atoms and Nuclei energy-level ideas.",
        ],
        [
          "Qualitative band ideas",
          "Distinguish conductors, insulators and semiconductors by band separation.",
          "Revise band-gap concepts before doping and junctions.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the model before calculating",
      intro: "Six decisions cover most Semiconductors questions. Select the model before any conclusion.",
      columns: ["Question signal", "First model", "First check"],
      rows: [
        ["Identify forward or reverse bias", "Compare p-side and n-side terminal potentials", "State the battery polarity explicitly"],
        ["Diode circuit", "Determine which diode is conducting under the stated model", "Ideal versus practical threshold model"],
        ["Rectifier output", "Trace current in each half-cycle", "Load-current direction"],
        ["Zener regulator", "Reverse-breakdown operating region", "Current-limiting resistor and allowed current range"],
        ["LED, photodiode, or solar cell", "Identify energy conversion and bias mode", "Do not treat devices as interchangeable diodes"],
        ["Logic network", "Build intermediate truth values", "Gate definition and input order"],
      ],
    },
    {
      id: "device-distinction",
      jump: true,
      slot: "concepts",
      heading: "Device distinction table",
      columns: ["Device", "Core operating idea", "What not to assume"],
      rows: [
        ["Rectifier diode", "Preferential conduction makes load current unidirectional", "Output is perfectly constant DC without filtering"],
        ["LED", "Electrical carrier recombination produces light", "Every diode material emits visible light efficiently"],
        ["Photodiode", "Incident light changes carrier generation, commonly sensed in reverse bias", "It is operated like an ordinary forward-biased LED"],
        ["Solar cell", "Light produces electrical power through a junction", "It needs an external reverse-bias supply to generate power"],
        ["Zener diode", "Controlled reverse breakdown provides a voltage reference or regulator", "Breakdown is safe without current limiting"],
      ],
    },
    {
      id: "diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "PI v1.1 diagnosis: which wrong device model is in play",
      columns: ["Primary label", "Evidence", "Corrective action"],
      rows: [
        ["Knowledge Gap", "Cannot explain majority carriers, depletion region, or bias effect", "Rebuild carrier and junction architecture"],
        ["Recall Gap", "Correct device chosen, but symbol, bias mode, or truth table is unavailable", "Retrieve the visible device record"],
        ["Execution Error", "Current path, polarity, or Boolean intermediate is wrong", "Trace one state or half-cycle at a time"],
        ["Decision / Selection Error", "Uses an ideal diode for a characteristic-curve question or confuses light devices", "Identify operating region and energy conversion first"],
        ["Needs Review", "Threshold, breakdown rating, or device model is missing from the prompt", "Escalate rather than invent a device parameter"],
      ],
      note: "Only the five approved PI v1.1 primary labels are used.",
    },
    {
      id: "official-paper-handling",
      jump: true,
      slot: "practice",
      heading: "Official-paper handling",
      columns: ["Rule", "Detail"],
      rows: [
        [
          "Tagging basis",
          "After review, Main questions may be tagged by junction bias, diode current-voltage behaviour, rectifier, LED, photodiode, solar cell, Zener regulator, or logic gate.",
        ],
        [
          "No difficulty-based mislabelling",
          "Do not label a question Advanced merely because it is difficult.",
        ],
        [
          "No counts or trends",
          "Keep all counts, frequency, trend, and expected-question modules hidden.",
        ],
      ],
      note: "Evidence source: official JEE Main website. [O3]",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "conductivity",
      expression: "sigma = q (n mu_n + p mu_p)",
      meaning: "Conductivity from electron and hole densities and mobilities.",
      variables: [
        { symbol: "sigma", meaning: "conductivity", unit: "S/m" },
        { symbol: "q", meaning: "elementary charge", unit: "C" },
        { symbol: "n", meaning: "electron concentration", unit: "1/m^3" },
        { symbol: "p", meaning: "hole concentration", unit: "1/m^3" },
        { symbol: "mu_n", meaning: "electron mobility", unit: "m^2/(V s)" },
        { symbol: "mu_p", meaning: "hole mobility", unit: "m^2/(V s)" },
      ],
      useWhen: "Standard drift model with defined carrier populations.",
      commonTrap: "Calling n-type material negatively charged overall.",
      accessibleText: "Conductivity equals charge times the sum of electron density times electron mobility and hole density times hole mobility.",
    },
    {
      id: "intrinsic-equality",
      expression: "n = p = n_i",
      meaning: "Equal electron and hole concentrations in an intrinsic semiconductor.",
      variables: [
        { symbol: "n", meaning: "electron concentration", unit: "1/m^3" },
        { symbol: "p", meaning: "hole concentration", unit: "1/m^3" },
        { symbol: "n_i", meaning: "intrinsic carrier concentration", unit: "1/m^3" },
      ],
      useWhen: "Thermal equilibrium in intrinsic material only.",
      commonTrap: "Applying this equality to doped material.",
      accessibleText: "Electron concentration equals hole concentration equals the intrinsic carrier concentration.",
    },
    {
      id: "forward-bias-orientation",
      expression: "Forward bias: p-side at higher potential than n-side",
      meaning: "Bias direction from terminal potentials in the conventional junction orientation.",
      variables: [],
      useWhen: "Device orientation is clearly shown in the circuit.",
      commonTrap: "Deciding bias direction from the symbol shape alone without checking circuit potentials.",
      accessibleText: "A junction is forward biased when the p-side terminal is at a higher potential than the n-side terminal.",
    },
    {
      id: "ideal-diode-model",
      expression: "Ideal conducting diode acts as a short circuit in forward conduction",
      meaning: "Short-circuit approximation used only when the ideal model is explicitly or conventionally adopted.",
      variables: [],
      useWhen: "Only when the question explicitly or conventionally adopts the ideal model.",
      commonTrap: "Using the ideal-switch model for a measured current-voltage curve.",
      accessibleText: "An ideal forward-conducting diode is modelled as a short circuit.",
    },
    {
      id: "zener-regulation",
      expression: "V_out is approximately equal to V_Z",
      meaning: "Regulated output stays near the breakdown voltage.",
      variables: [
        { symbol: "V_out", meaning: "regulated output voltage", unit: "V" },
        { symbol: "V_Z", meaning: "Zener breakdown voltage", unit: "V" },
      ],
      useWhen: "Reverse breakdown with series current limiting, and the device stays within regulation and rating limits.",
      commonTrap: "Omitting the series resistor or the load current from the analysis.",
      accessibleText: "Output voltage is approximately equal to the Zener breakdown voltage under proper regulation.",
    },
    {
      id: "and-or-not",
      expression: "Y = A AND B;  Y = A OR B;  Y = NOT A",
      meaning: "AND, OR and NOT Boolean relations.",
      variables: [
        { symbol: "A", meaning: "logic input", unit: "binary" },
        { symbol: "B", meaning: "logic input", unit: "binary" },
        { symbol: "Y", meaning: "logic output", unit: "binary" },
      ],
      useWhen: "Positive-logic convention.",
      commonTrap: "Treating ordinary arithmetic addition as Boolean OR without context.",
      accessibleText: "Output Y equals A AND B, or A OR B, or NOT A, depending on the gate.",
    },
    {
      id: "nand-nor",
      expression: "NAND = NOT (A AND B);  NOR = NOT (A OR B)",
      meaning: "Complemented gates built from AND or OR followed by NOT.",
      variables: [
        { symbol: "A", meaning: "logic input", unit: "binary" },
        { symbol: "B", meaning: "logic input", unit: "binary" },
      ],
      useWhen: "Positive-logic convention.",
      commonTrap: "Complementing the inputs instead of complementing the gate output.",
      accessibleText: "NAND equals NOT of A AND B; NOR equals NOT of A OR B.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B31)                                              */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-bridge-rectifier",
      prompt:
        "Trace a bridge rectifier under an ideal-diode model across a full input cycle. Why is the load current unidirectional even though the source polarity reverses?",
      answer:
        "The output is pulsating unidirectional voltage across the load, not perfectly constant DC unless additional filtering is modelled.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "During one input half-cycle, one diagonal diode pair conducts." }],
            [{ text: "During the opposite half-cycle, the other diagonal pair conducts." }],
            [{ text: "Although source polarity reverses, both conducting paths drive current through the load in the same direction." }],
            [{ text: "The output is pulsating unidirectional voltage, not perfectly constant DC unless additional filtering and load behaviour are modelled." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "The robust method is to trace a complete conducting loop for each half-cycle, not to memorise diode labels that change from diagram to diagram.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes (B30)                                               */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "n-type-charge",
      mistake: "Saying n-type material has a net negative bulk charge",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Donor doping increases electron majority carriers, but the bulk material remains electrically neutral." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State majority-carrier type separately from overall electrical neutrality." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "bias-reversal",
      mistake: "Reversing forward and reverse bias",
      why: [
        { type: "paragraph", children: [{ text: "Bias direction depends on which terminal is at the higher potential, not on the diagram's visual orientation." }] },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Compare p-side and n-side terminal potentials explicitly before naming the bias." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "ideal-diode-overuse",
      mistake: "Treating a practical diode as an ideal zero-voltage switch without permission",
      why: [
        { type: "paragraph", children: [{ text: "The ideal-switch model only applies when the question explicitly or conventionally adopts it." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check whether a measured current-voltage curve is intended before assuming an ideal switch." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "constant-dc-claim",
      mistake: "Calling rectified output constant DC",
      why: [
        { type: "paragraph", children: [{ text: "A rectifier alone produces pulsating unidirectional voltage." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Describe the output as pulsating unless filtering and load behaviour are modelled." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "zener-no-limiting",
      mistake: "Operating a Zener diode in breakdown without current limiting",
      why: [
        { type: "paragraph", children: [{ text: "Breakdown without a series current-limiting resistor risks exceeding the device's safe rating." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Always include the current-limiting resistor and check the allowed current range." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "device-role-mix",
      mistake: "Mixing LED, photodiode, and solar-cell energy-conversion roles",
      why: [
        { type: "paragraph", children: [{ text: "Each device uses a distinct operating region and energy-conversion direction." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify the energy conversion and bias mode for the specific device named in the question." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "advanced-scope-claim",
      mistake: "Claiming semiconductors are explicit in the current Advanced syllabus",
      why: [
        { type: "paragraph", children: [{ text: "The current official JEE Advanced 2026 Physics syllabus does not explicitly list semiconductor or electronic-device topics." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Treat this chapter as Main-only until the official Advanced syllabus states otherwise." }] },
      ],
      errorType: "needs-review",
    },
  ],

  faqs: [
    {
      question: "Is n-type semiconductor negatively charged?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Donor doping increases electron majority carriers, but the bulk material remains electrically neutral." },
          ],
        },
      ],
    },
    {
      question: "What does forward bias do to a p-n junction?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "It reduces the effective barrier and allows much larger current in the conducting direction." }],
        },
      ],
    },
    {
      question: "Is semiconductor electronics in the current JEE Advanced 2026 syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "It is not explicitly listed in the official 2026 Advanced Physics syllabus." }],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Communication Systems",
      url: "/jee/physics/communication-systems",
      relation: "forward",
      description: "Apply diode and device behaviour to signal transmission.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "forward",
      description: "Extend into the broader Modern Physics family context.",
    },
    {
      label: "Dual Nature of Matter",
      url: "/jee/physics/dual-nature-of-matter",
      relation: "related",
      description: "Connect carrier and photon reasoning across the Modern Physics family.",
    },
    {
      label: "Modern Physics",
      url: "/jee/physics/modern-physics",
      relation: "related",
      description: "See how this chapter fits the broader Modern Physics umbrella.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Stabilise current, potential difference and circuit-path reasoning.",
    },
    {
      label: "Atoms and Nuclei",
      url: "/jee/physics/atoms-and-nuclei",
      relation: "prerequisite",
      description: "Review atomic energy levels before band and carrier ideas.",
    },
  ],
  links: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to the Physics subject hub.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every subject.",
    },
    {
      label: "Previous Year Papers",
      url: "/jee/previous-year-papers",
      relation: "related",
      description: "Connect device reasoning with reviewed official problems.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Provenance (B37)                                                    */
  /* ------------------------------------------------------------------ */
  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and the current Advanced syllabus does not explicitly list semiconductors or electronic devices, so no Advanced mapping is claimed. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: a JEE Physics educator experienced in semiconductor devices, circuits, and logic.",
    "Academically reviewed by: Unassigned. Required expertise: solid-state or semiconductor Physics, basic electronic devices, rectifier circuits, and digital logic. Required qualification: postgraduate degree in Physics, Electronics, Electrical Engineering, or a closely related discipline, with device and JEE-scope expertise.",
    "Last reviewed: pending completed academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus for explicit-scope comparison, NCERT Semiconductor Electronics, and official Main paper sources.",
    "Independent checker: verifies Main-only labeling, carrier neutrality, bias direction, diode-model assumptions, device distinctions, Zener conditions, truth tables, links, metadata, and schema parity.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Semiconductors for JEE Main: Diodes, Devices, Logic",
    description:
      "Learn JEE Main semiconductors through carriers, p-n junction bias, diode curves, rectifiers, Zener regulation, light devices, logic gates, and traps.",
    ogTitle: "Semiconductors for JEE Main",
    ogDescription:
      "A device-aware guide to junction bias, diodes, rectification, regulation, and logic.",
  },
};

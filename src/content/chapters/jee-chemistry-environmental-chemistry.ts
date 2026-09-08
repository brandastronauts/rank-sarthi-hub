import type { ChapterContent } from "@/content/types";

/**
 * Environmental Chemistry — T06 production content.
 *
 * Scope check (verified against the current JEE Main and JEE Advanced 2026
 * syllabus documents): Environmental Chemistry is not listed in the JEE Main
 * 2026 Chemistry syllabus. JEE Advanced 2026 explicitly includes atmospheric
 * pollution, water pollution, soil pollution, industrial waste, strategies to
 * control environmental pollution, and green chemistry. This is an
 * Advanced-only 2026 topic, not a separate Main 2026 unit. No current
 * concentration, health-threshold, regulation or ranking claim is published;
 * no weightage, trend or PYQ-count claim is asserted. Contributors remain
 * unassigned.
 */
export const jeeChemistryEnvironmentalChemistry: ChapterContent = {
  exam: "JEE",
  examVariant: "JEE Advanced only (not listed in JEE Main 2026)",
  platform: "jee",
  subject: "Chemistry",
  subjectSlug: "chemistry",
  chapter: "Environmental Chemistry",
  slug: "environmental-chemistry",
  url: "/jee/chemistry/environmental-chemistry",
  canonicalIntent:
    "Explain an environmental chemistry problem by tracing pollutant identity, source, chemical transformation, environmental compartment, effect and control principle, within the current JEE Advanced 2026 scope.",

  heroChips: [
    "JEE Advanced 2026 only; not listed in JEE Main 2026",
    "Track source, transformation and effect before naming a control",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Do not classify an environmental problem from a pollutant name alone. Identify the chemical species, its source, the air, water or soil compartment, the transformations it undergoes, the resulting chemical effect, and the point at which prevention, conversion, capture or safer design can intervene.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not publish invented weightage, expected question counts, trend percentages, or current concentration, regulation or health-threshold data.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "prerequisite",
      description: "Oxidation and reduction chemistry used to explain many pollutant transformations.",
    },
    {
      label: "Ionic Equilibrium",
      url: "/jee/chemistry/ionic-equilibrium",
      relation: "prerequisite",
      description: "Acid-base and solubility equilibrium used in acid-deposition and water-quality reasoning.",
    },
    {
      label: "p-Block Elements",
      url: "/jee/chemistry/p-block-elements",
      relation: "prerequisite",
      description: "Chemistry of many source compounds whose environmental transformations this chapter covers.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Subject hub for the Chemistry chapter set.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Exam-level official Chemistry scope.",
    },
  ],

  syllabusMapping: {
    unit: "Environmental Chemistry (JEE Advanced only; not listed in JEE Main 2026)",
    topics: [
      "Atmospheric pollution",
      "Water pollution",
      "Soil pollution",
      "Industrial waste",
      "Strategies to control environmental pollution",
      "Green chemistry",
    ],
    syllabusUrl: "/jee/syllabus/chemistry",
  },

  conceptBlocks: [
    {
      id: "identity",
      title: "1. Name the actual species, not only a broad label",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Identify the specific chemical species or class involved, rather than using a broad label such as smoke or waste. The identity of the species determines which chemistry applies.",
            },
          ],
        },
      ],
    },
    {
      id: "source",
      title: "2. Distinguish primary emissions from secondary pollutants",
      keyIdea: "A secondary pollutant forms in the environment through transformation of a precursor rather than being emitted directly.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A primary pollutant is released directly in its harmful form. A secondary pollutant is formed after release through chemical or photochemical transformation of precursor species.",
            },
          ],
        },
      ],
    },
    {
      id: "transformation",
      title: "3. Use the correct transformation chemistry",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Apply photochemical, acid-base, redox, dissolution, precipitation or biological chemistry as appropriate to the pollutant and compartment, rather than a generic description of change.",
            },
          ],
        },
      ],
    },
    {
      id: "compartment",
      title: "4. Recognise that air, water and soil have different conditions",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Transport and reaction conditions differ between air, water and soil compartments, so the same chemical species can behave differently depending on where it is found.",
            },
          ],
        },
      ],
    },
    {
      id: "effect",
      title: "5. Connect the chemical change to the effect, only within the evidence given",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Connect the chemical change to acidity, oxidising capacity, nutrient balance, oxygen demand, toxicity or persistence only within the evidence provided in the question, not from outside assumptions.",
            },
          ],
        },
      ],
    },
    {
      id: "control-point",
      title: "6. Prefer prevention, then process redesign, capture, conversion or treatment",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Control strategies favour prevention and source reduction first, followed by process redesign, capture, conversion, treatment or safe disposal.",
            },
          ],
        },
      ],
    },
    {
      id: "evidence-boundary",
      title: "7. Do not publish unsourced current data",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Current concentration figures, health thresholds, regulations or city rankings are not published on this page without a dated authoritative source.",
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
        [
          "What is the chapter about?",
          "Tracing an environmental chemistry problem through pollutant identity, source, transformation, compartment, effect and control principle.",
        ],
        [
          "What is the central method choice?",
          "Identify the species and whether it is primary or secondary, apply the correct transformation chemistry for its compartment, then identify the control point.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating this as JEE Main scope, treating every pollutant as directly emitted, and confusing stratospheric and tropospheric ozone.",
        ],
        [
          "What should come before Environmental Chemistry?",
          "Redox Reactions, Ionic Equilibrium, and p-Block Elements chemistry of common source compounds.",
        ],
        [
          "What comes after it?",
          "Polymers, which continues the applied Chemistry path.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Environmental Chemistry",
      intro:
        "Verified against the current JEE Main 2026 and JEE Advanced 2026 syllabus documents on 8 September 2026. Environmental Chemistry is an Advanced-only 2026 topic and is not a separate Main 2026 unit.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Environmental Chemistry as a whole",
          "NOT LISTED. Environmental Chemistry does not appear in the current official Main Chemistry syllabus.",
          "INCLUDED. Atmospheric, water and soil pollution, industrial waste, control strategies and green chemistry are explicitly listed.",
          "Do not treat this chapter as current Main scope.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Environmental Chemistry",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Redox chemistry",
          "Identify oxidation and reduction in an atmospheric or aquatic transformation.",
          "Revise Redox Reactions.",
        ],
        [
          "Acid-base and solubility equilibrium",
          "Explain acid deposition or a dissolved-species equilibrium.",
          "Revise Ionic Equilibrium.",
        ],
        [
          "p-Block source chemistry",
          "Recognise common p-block source compounds and their reactions.",
          "Revise p-Block Elements.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: identify the pathway before naming a control",
      intro: "Match the question type to the correct starting point before assigning cause or control.",
      columns: ["Question asks about", "First move", "Then decide"],
      rows: [
        ["Primary versus secondary pollutant", "Identify whether emitted directly", "Transformation pathway"],
        ["Air-pollution mechanism", "Identify precursors and light or moisture", "Products and control point"],
        ["Water-quality effect", "Identify species and chemical or biological demand", "Oxygen, pH, nutrient or toxicity pathway"],
        ["Industrial waste", "Identify composition and process source", "Prevention, recovery, treatment or disposal"],
        ["Green chemistry", "Compare design choices", "Hazard, waste, energy, feedstock and lifecycle boundaries stated in the problem"],
      ],
    },
    {
      id: "system-records",
      jump: true,
      slot: "concepts",
      heading: "Condition-aware environmental records",
      columns: ["System", "Chemistry", "Conditions or boundary", "Common trap"],
      rows: [
        [
          "Acid deposition",
          "Sulfur and nitrogen oxides can be transformed into acidic species in the atmosphere and deposited.",
          "Depends on oxidation pathways, moisture, transport and local conditions.",
          "Calling every acidic aerosol sulfuric acid or assigning one source without evidence.",
        ],
        [
          "Photochemical smog",
          "Nitrogen oxides and volatile organic compounds can react under sunlight to form secondary oxidants.",
          "Sunlight, precursor mixture and meteorology matter.",
          "Treating it as direct smoke emission only.",
        ],
        [
          "Stratospheric ozone",
          "Ozone absorbs biologically important ultraviolet radiation.",
          "Altitude and atmospheric chemistry define the protective role.",
          "Saying ozone is always a pollutant.",
        ],
        [
          "Tropospheric ozone",
          "Ground-level ozone is a secondary oxidant and pollutant.",
          "Formed from photochemical precursor chemistry.",
          "Calling it directly emitted in ordinary smog formation.",
        ],
        [
          "Eutrophication",
          "Excess nutrient input can stimulate biomass growth and disturb aquatic oxygen balance.",
          "Water body, nutrient availability, mixing, decay and time matter.",
          "Treating all algal growth as identical evidence.",
        ],
        [
          "Biochemical oxygen demand",
          "Operational measure related to oxygen used by microorganisms while decomposing biodegradable material.",
          "Test method, temperature, time and sample treatment matter.",
          "Calling BOD the total oxygen already present in water.",
        ],
        [
          "Green chemistry",
          "Design principle aimed at reducing hazard and waste across a chemical process or product life cycle.",
          "Must be evaluated against the actual process and alternatives.",
          "Equating it with end-of-pipe cleanup alone.",
        ],
      ],
      note: "Sources: JEE Advanced 2026 syllabus and NCERT Environmental Chemistry exemplar, linked in the sources section below.",
    },
  ],

  workedExamples: [
    {
      id: "ozone-location",
      prompt: "A statement says: ozone is harmful, so less ozone is always better. Is this correct?",
      steps: [
        { type: "paragraph", children: [{ text: "In the stratosphere, ozone absorbs part of the Sun's ultraviolet radiation and provides a protective function." }] },
        { type: "paragraph", children: [{ text: "In the lower atmosphere, ozone can act as a secondary oxidising pollutant formed through photochemical reactions." }] },
        { type: "paragraph", children: [{ text: "The chemical species is the same, but altitude, formation pathway, concentration and exposed system differ." }] },
        { type: "paragraph", children: [{ text: "Therefore, an environmental conclusion must identify the compartment and context before assigning benefit or harm." }] },
      ],
      answer: "No. The statement collapses two different environmental contexts; ozone's role depends on the atmospheric compartment.",
    },
  ],

  mistakes: [
    {
      id: "main-scope-overclaim",
      mistake: "Calling Environmental Chemistry current JEE Main 2026 scope.",
      why: [{ type: "paragraph", children: [{ text: "Environmental Chemistry is not listed in the official Main Chemistry syllabus." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page before assuming Main-exam relevance." }] }],
      errorType: "needs-review",
    },
    {
      id: "direct-emission-assumption",
      mistake: "Treating every pollutant as directly emitted.",
      why: [{ type: "paragraph", children: [{ text: "Many pollutants, such as tropospheric ozone, are secondary pollutants formed through atmospheric transformation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the species is primary or secondary before explaining its formation." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "ozone-layer-confusion",
      mistake: "Confusing stratospheric and tropospheric ozone.",
      why: [{ type: "paragraph", children: [{ text: "The same chemical species plays a protective role in the stratosphere and a pollutant role in the lower atmosphere." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the atmospheric compartment before assigning a beneficial or harmful role to ozone." }] }],
      errorType: "decision-error",
    },
    {
      id: "bod-misreading",
      mistake: "Calling BOD a direct measure of every pollutant.",
      why: [{ type: "paragraph", children: [{ text: "BOD is an operational measure tied to oxygen consumed by microorganisms decomposing biodegradable material, not a universal pollutant index." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use BOD only in the context of biodegradable organic load and its measurement conditions." }] }],
      errorType: "recall-gap",
    },
    {
      id: "acid-deposition-shortcut",
      mistake: "Explaining acid deposition without chemical transformation.",
      why: [{ type: "paragraph", children: [{ text: "Acid deposition requires oxidation and atmospheric transformation of sulfur and nitrogen oxides, not a direct one-step description." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Trace the oxidation pathway from precursor oxide to acidic species before naming the source." }] }],
      errorType: "execution-error",
    },
    {
      id: "health-advice-overreach",
      mistake: "Giving health, legal, or current air-quality advice from a timeless chapter page.",
      why: [{ type: "paragraph", children: [{ text: "This page teaches syllabus chemistry, not current regulatory or health guidance, which requires a dated authoritative source." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Route any current-data or health question to an authoritative, dated source outside this chapter." }] }],
      errorType: "needs-review",
    },
    {
      id: "green-chemistry-misdefinition",
      mistake: "Calling cleanup alone green chemistry.",
      why: [{ type: "paragraph", children: [{ text: "Green chemistry is a design principle to prevent or reduce hazard and waste, distinct from treating pollution after it is produced." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compare the process design against prevention and waste-reduction criteria, not end-of-pipe cleanup alone." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Surface Chemistry",
      url: "/jee/chemistry/surface-chemistry",
      relation: "related",
      description: "Lateral Advanced chapter covering adsorption, colloids and related surface phenomena.",
    },
    {
      label: "Chemistry in Everyday Life",
      url: "/jee/chemistry/chemistry-everyday-life",
      relation: "related",
      description: "Another Advanced-only 2026 topic in the applied Chemistry group.",
    },
    {
      label: "Redox Reactions",
      url: "/jee/chemistry/redox-reactions",
      relation: "prerequisite",
      description: "Oxidation and reduction chemistry used across pollutant transformation pathways.",
    },
    {
      label: "Ionic Equilibrium",
      url: "/jee/chemistry/ionic-equilibrium",
      relation: "prerequisite",
      description: "Acid-base and solubility equilibrium used in acid-deposition and water-quality reasoning.",
    },
    {
      label: "p-Block Elements",
      url: "/jee/chemistry/p-block-elements",
      relation: "prerequisite",
      description: "Chemistry of common source compounds referenced in environmental transformations.",
    },
  ],

  links: [
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official syllabus hub.",
    },
    {
      label: "JEE Chemistry syllabus",
      url: "/jee/syllabus/chemistry",
      relation: "up",
      description: "Chemistry-specific official syllabus scope.",
    },
    {
      label: "JEE Chemistry",
      url: "/jee/chemistry",
      relation: "up",
      description: "Chemistry subject hub.",
    },
  ],

  faqs: [
    {
      question: "Is Environmental Chemistry in JEE Main 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. It is not listed in the current official Main Chemistry syllabus." },
          ],
        },
      ],
    },
    {
      question: "Is Environmental Chemistry in JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Yes. Atmospheric, water and soil pollution, industrial waste, control strategies, and green chemistry are listed." },
          ],
        },
      ],
    },
    {
      question: "What is a secondary pollutant?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A pollutant formed in the environment by chemical or photochemical transformation of precursor species rather than emitted directly in that final form.",
            },
          ],
        },
      ],
    },
    {
      question: "What makes green chemistry different from pollution cleanup?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Green chemistry prioritises designing products and processes to prevent or reduce hazard and waste, while cleanup acts after pollution has been produced.",
            },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or current environmental data?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Weightage, trend percentages, question-count forecasts and current concentration, regulation or health data are deliberately not published on this page.",
            },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "ncert-chem-syllabus",
  ],
  sourceNote:
    "Evidence boundary: Environmental Chemistry is a JEE Advanced-only 2026 topic and is not a separate JEE Main 2026 unit. No current concentration, health-threshold, regulatory or ranking claim is published, and no chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a JEE Chemistry educator experienced in environmental reaction pathways and applied Chemistry.",
    "Academic reviewer: postgraduate qualification in Environmental Chemistry, Chemistry, or Environmental Science with substantial Chemistry training, or a closely related discipline.",
    "Independent checker: a chemistry educator or subject editor who verifies pathways, compartments, control statements and the medical/regulatory safety boundary separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Environmental Chemistry for JEE Advanced 2026: Scope and Logic",
    description:
      "Learn atmospheric, water and soil pollution, industrial waste, control strategies, and green chemistry through source-to-effect reasoning. No invented weightage.",
    ogTitle: "Environmental Chemistry for JEE Advanced 2026",
    ogDescription:
      "Chemical pathways for pollution, environmental compartments, control strategies and green chemistry.",
  },
};

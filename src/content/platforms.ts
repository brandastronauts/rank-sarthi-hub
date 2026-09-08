import type { PlatformData } from "./types";

/**
 * Platform route safety: the generic /$platform route resolves against this
 * map. A platform whose buildStatus is not "built" returns notFound() so a
 * thin /jee or /neet page can never appear just because the route exists.
 *
 * Adding a platform page is a DATA change: complete the record below, flip
 * buildStatus to "built", and update the URL registry record. No new layout.
 */
export const platforms: Record<string, PlatformData> = {
  nda: {
    slug: "nda",
    productName: "NDARankUp",
    examName: "NDA & NA Examination (UPSC)",
    buildStatus: "built",
    accent: "nda",
    conductingBody: "Union Public Service Commission (UPSC)",
    tagline: "Prepare for NDA 2026 with a clearer plan for Maths, GAT and SSB",
    deck: "Start with the official exam structure. Then use practice to decide what deserves attention next, instead of revising every subject with the same urgency.",
    hero: {
      eyebrow: "NDA & NA II 2026 | UPSC | Written exam: 13 September 2026",
      chips: ["Official-source checked", "Written exam plus SSB pathway", "No invented topic weightage"],
      primary: { label: "See what to study first", href: "#start-your-nda-plan" },
      secondary: { label: "View the official exam snapshot", href: "#nda-2026-snapshot" },
      productCtaLabel: "Analyse your next NDA mock",
    },
    intro: [
      {
        type: "paragraph",
        children: [
          {
            text: "NDA preparation goes wrong in a predictable way: a student attempts a paper, reads only the total, and then revises every weak-looking subject with the same urgency. The written exam and the SSB pathway are one selection journey, and each stage asks for a different kind of work.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "This hub keeps official UPSC facts, preparation guidance and product actions clearly separated, so you can start from the part of the process you are actually facing.",
          },
        ],
      },
    ],
    subjects: ["Mathematics", "General Ability Test", "SSB pathway"],

    cycleSnapshot: {
      eyebrow: "Current cycle",
      heading: "NDA II 2026 at a glance",
      rows: [
        { label: "Conducting body", value: "Union Public Service Commission (UPSC)" },
        { label: "Examination", value: "National Defence Academy and Naval Academy Examination (II), 2026" },
        { label: "Written exam date", value: "13 September 2026" },
        { label: "Current cycle status", value: "Application window closed; examination scheduled" },
        {
          label: "Course",
          value: "158th NDA Course and 120th Indian Naval Academy Course, scheduled to commence on 1 July 2027",
        },
        {
          label: "Approximate notified vacancies",
          value: "394 in total. Vacancies are provisional and may change.",
        },
        {
          label: "Age and marital status for this cycle",
          value:
            "Unmarried male and female candidates born not earlier than 1 January 2008 and not later than 1 January 2011",
        },
        {
          label: "Army Wing education",
          value:
            "Class 12 pass or equivalent. Class 12 appearing candidates may apply, subject to the notification conditions.",
        },
        {
          label: "Air Force, Naval Wings and Indian Naval Academy education",
          value:
            "Class 12 pass or appearing with Physics, Chemistry and Mathematics, subject to the notification conditions.",
        },
        {
          label: "Physical and medical requirement",
          value:
            "Candidates must meet the standards in the official notice. Do not self-assess eligibility from summaries alone.",
        },
      ],
      note: "This snapshot applies to NDA II 2026 and was verified on 27 August 2026 against the UPSC examination page and official notice. Read the current notification before acting on eligibility, dates, vacancies or standards.",
      verifiedOn: "27 August 2026",
      sourceRefs: ["upsc-nda-exam-page", "upsc-nda-notification"],
      refreshTrigger:
        "Refresh within 24 hours of a UPSC notification, timetable, admit-card, question-paper, result or eligibility change. Run a monthly cycle check.",
    },

    taskGroups: [
      {
        id: "deciding",
        title: "I am still checking whether NDA is right for me",
        body: "Understand the entry, eligibility rules, services, training route and selection stages before choosing a preparation product.",
        links: [
          { label: "NDA exam overview", url: "/nda/nda-exam" },
          { label: "NDA eligibility", url: "/nda/eligibility" },
          { label: "Army Wing after NDA", url: "/nda/wings/army" },
          { label: "Navy Wing after NDA", url: "/nda/wings/navy" },
          { label: "Air Force Wing after NDA", url: "/nda/wings/air-force" },
          { label: "Girls in NDA", url: "/nda/girls-in-nda" },
        ],
      },
      {
        id: "syllabus",
        title: "I need to organise the written syllabus",
        body: "Separate Mathematics, English and General Knowledge. GAT is one paper, but it is not one preparation problem.",
        links: [
          { label: "Complete NDA syllabus", url: "/nda/syllabus" },
          { label: "Mathematics syllabus", url: "/nda/syllabus/mathematics" },
          { label: "GAT syllabus", url: "/nda/syllabus/gat" },
          { label: "English syllabus", url: "/nda/syllabus/english" },
          { label: "General Knowledge syllabus", url: "/nda/syllabus/general-knowledge" },
        ],
      },
      {
        id: "practice",
        title: "I need practice, not another broad explanation",
        body: "Use one baseline paper first. Review it before choosing more chapters, books or tests.",
        links: [
          { label: "NDA mock tests", url: "/nda/mock-tests" },
          { label: "Previous year papers", url: "/nda/previous-year-papers" },
          { label: "NDA preparation roadmap", url: "/nda/preparation-roadmap" },
          { label: "NDA score calculator", url: "/nda/score-calculator" },
        ],
      },
      {
        id: "next-stage",
        title: "I am preparing for the next selection stage",
        body: "Written-exam preparation, SSB preparation and medical verification are related, but they are not interchangeable.",
        links: [
          { label: "SSB interview guide", url: "/nda/ssb-interview" },
          { label: "SSB questions", url: "/nda/ssb-interview/questions" },
          { label: "Physical standards", url: "/nda/physical-standards" },
          { label: "Physical fitness", url: "/nda/physical-fitness" },
        ],
      },
    ],

    papers: [
      {
        id: "mathematics",
        name: "Mathematics",
        marks: "300 marks",
        duration: "2.5 hours",
        covers: ["Algebra", "Trigonometry", "Analytical geometry", "Calculus", "Vectors", "Statistics and probability"],
        note: "Set in Hindi and English. Calculators and mathematical or logarithmic tables are not permitted.",
      },
      {
        id: "gat",
        name: "General Ability Test",
        marks: "600 marks (Part A English 200, Part B General Knowledge 400)",
        duration: "2.5 hours",
        covers: [
          "English",
          "Physics",
          "Chemistry",
          "General Science",
          "History and related social studies",
          "Geography",
          "Current Events",
        ],
        note: "Part B is set in Hindi and English. English is a separate 200-mark preparation stream and should not be folded into General Knowledge revision.",
      },
    ],

    structure: {
      eyebrow: "Written examination",
      heading: "NDA written exam structure",
      intro:
        "The written examination totals 900 marks. The SSB Test or Interview carries a further 900 marks. Every figure below comes from the official UPSC notification for this cycle.",
      rules: [
        "A wrong answer attracts a penalty of one-third of the marks assigned to that question.",
        "If more than one answer is marked, it is treated as a wrong answer.",
        "A question left blank carries no penalty.",
        "Calculators and mathematical or logarithmic tables are not permitted.",
      ],
      table: {
        heading: "What is inside GAT Part B",
        caption:
          "UPSC gives approximate proportions for the 400-mark General Knowledge part of GAT. These are official syllabus proportions, not a Rank Sarthi prediction and not a promise about exact question counts.",
        columns: ["GAT Part B area", "Approximate share of Part B"],
        rows: [
          ["Physics", "25%"],
          ["Chemistry", "15%"],
          ["General Science", "10%"],
          ["History, Freedom Movement and related social studies", "20%"],
          ["Geography", "20%"],
          ["Current Events", "10%"],
        ],
      },
      implications: {
        heading: "What this means for preparation",
        points: [
          "Do not treat GAT as one undivided 600-mark subject.",
          "Keep English visible as its own 200-mark preparation stream.",
          "Use the official Part B proportions to allocate first-pass coverage, then use your own mock evidence to adjust revision time.",
          "Do not convert the approximate proportions into false chapter-level weightage.",
          "Practise question selection, because negative marking changes the value of weak guesses.",
        ],
      },
    },

    diagnosticLenses: [
      {
        title: "Where the marks went",
        body: "Separate Mathematics, English and the General Knowledge areas inside GAT instead of reading one combined total.",
      },
      {
        title: "Why they went",
        body: "Distinguish a knowledge gap from a recall, execution or question-selection error. The fixes are not interchangeable.",
      },
      {
        title: "Whether it recurs",
        body: "One error may be noise. The same error across papers is a preparation problem, and it decides what you change next.",
      },
    ],

    errorTaxonomy: {
      heading: "Name the error before choosing the fix",
      columns: ["What the review shows", "Category", "What to do next"],
      rows: [
        {
          signal: "The concept, rule or fact was not understood",
          category: "Knowledge gap",
          action: "Relearn the smallest missing syllabus unit, solve guided examples, then retest without notes.",
        },
        {
          signal: "The topic was studied but could not be retrieved accurately",
          category: "Recall gap",
          action: "Use active recall, short revision intervals and mixed retrieval. Recheck after a delay.",
        },
        {
          signal: "The method was known but the answer failed through calculation, reading or process",
          category: "Execution error",
          action: "Rework the exact step, add a checking rule, and repeat under realistic time conditions.",
        },
        {
          signal: "The question should have been skipped, delayed or approached differently",
          category: "Decision or selection error",
          action: "Review attempt order, elimination quality and the point at which a guess becomes poor value.",
        },
        {
          signal: "The evidence is too thin or contradictory",
          category: "Needs review",
          action: "Do not label the weakness yet. Collect evidence from more than one set or paper.",
        },
      ],
      note: "Time pressure may contribute to an error, but it is not automatically the root cause. A student who says they ran out of time still needs to find out whether the real problem was slow recall, weak method fluency, poor question selection or an unrealistic attempt plan.",
    },

    pathwayIntro: {
      heading: "The written exam is one gate. Prepare for the full NDA route.",
      body: "Candidates who qualify the written examination proceed to the Services Selection Board, subject to the official process, eligibility, medical fitness, merit and service preferences.",
    },

    pathway: [
      {
        id: "written",
        stage: "Written examination",
        body: "Build separate control over Mathematics and GAT. Use official syllabus coverage, timed practice, previous year papers and evidence from mocks.",
        links: [
          { label: "Complete NDA syllabus", url: "/nda/syllabus" },
          { label: "Build current-events coverage", url: "/nda/gat/current-affairs" },
        ],
      },
      {
        id: "ssb-1",
        stage: "SSB Stage I",
        body: "Stage I includes Officer Intelligence Rating tests and the Picture Perception and Description Test. Only candidates who clear Stage I proceed to Stage II.",
        links: [{ label: "Prepare for SSB", url: "/nda/ssb-interview" }],
      },
      {
        id: "ssb-2",
        stage: "SSB Stage II",
        body: "Stage II includes the Interview, Group Testing Officer tasks, Psychology Tests and the Conference. UPSC states that these tests are conducted over four days.",
        links: [{ label: "SSB questions", url: "/nda/ssb-interview/questions" }],
      },
      {
        id: "medical-wings",
        stage: "Medical, service and wing decisions",
        body: "Candidates must meet the notified physical and medical standards. Service preferences matter, and Air Force candidates may face additional CPSS requirements where applicable. Use official documents, not coaching summaries or self-diagnosis.",
        links: [
          { label: "Verify physical standards", url: "/nda/physical-standards" },
          { label: "Understand Army Wing", url: "/nda/wings/army" },
          { label: "Understand Navy Wing", url: "/nda/wings/navy" },
          { label: "Understand Air Force Wing", url: "/nda/wings/air-force" },
        ],
      },
    ],

    relatedUrls: [
      "/nda/nda-exam",
      "/nda/exam-dates",
      "/nda/eligibility",
      "/nda/syllabus",
      "/nda/mock-tests",
      "/nda/previous-year-papers",
      "/nda/preparation-roadmap",
      "/nda/ssb-interview",
      "/nda/physical-standards",
      "/nda/girls-in-nda",
      "/nda/wings/army",
      "/nda/wings/navy",
      "/nda/wings/air-force",
    ],

    showPricing: false,

    faqs: [
      {
        q: "When is the NDA II 2026 written examination?",
        a: "UPSC has scheduled the National Defence Academy and Naval Academy Examination (II), 2026 for 13 September 2026. The date is cycle-dependent, so candidates should check the official examination page and their e-admit card for current instructions. Verified 27 August 2026 against the UPSC examination page and official notification.",
      },
      {
        q: "What papers are included in the NDA written examination?",
        a: "The written examination has Mathematics for 300 marks and the General Ability Test for 600 marks. Each paper lasts 2.5 hours. The written total is 900 marks, and the SSB Test or Interview carries a further 900 marks. Source: official UPSC notification, verified 27 August 2026.",
      },
      {
        q: "Is there negative marking in NDA?",
        a: "Yes. UPSC deducts one-third of the marks assigned to a question when a wrong answer is marked. If more than one answer is marked, it is treated as wrong. A question left blank carries no penalty. Source: official UPSC notification, verified 27 August 2026.",
      },
      {
        q: "Can a Class 12 appearing student apply for NDA II 2026?",
        a: "Yes, Class 12 appearing candidates may apply, subject to the conditions and proof deadlines in the official notice. Class 11 candidates are not eligible for this examination cycle. Source: official UPSC notification, verified 27 August 2026.",
      },
      {
        q: "Is Physics, Chemistry and Mathematics required for every NDA wing?",
        a: "No. The Army Wing requires Class 12 pass or equivalent. The Air Force and Naval Wings of NDA, and the 10+2 Cadet Entry Scheme at the Indian Naval Academy, require Class 12 with Physics, Chemistry and Mathematics. Always verify the current notification. Source: official UPSC notification, verified 27 August 2026.",
      },
      {
        q: "What is included in GAT?",
        a: "GAT contains Part A English for 200 marks and Part B General Knowledge for 400 marks. General Knowledge broadly covers Physics, Chemistry, General Science, History and related social studies, Geography and Current Events. Source: official UPSC notification, verified 27 August 2026.",
      },
      {
        q: "What happens after the NDA written examination?",
        a: "Candidates who meet the written qualifying requirements may be called for the Services Selection Board process. Stage I includes OIR tests and PP&DT. Stage II includes the Interview, GTO tasks, Psychology Tests and the Conference. Final selection also depends on eligibility, medical fitness, merit and service preferences. Source: official UPSC notification, verified 27 August 2026.",
      },
      {
        q: "How should I begin NDA preparation if I have not taken a mock yet?",
        a: "Read the official syllabus, attempt a realistic baseline paper or sectional set, and review the result by Mathematics, English and General Knowledge areas. Use the evidence to choose the first two priorities. Do not build a complex timetable entirely from assumptions.",
      },
      {
        q: "Should I start SSB preparation before clearing the written exam?",
        a: "You can build useful long-term habits such as clear communication, current-awareness discipline, physical fitness and honest self-observation while preparing for the written exam. Detailed SSB preparation should follow the official process and qualified guidance. Do not let vague SSB activity replace the written work that is immediately measurable.",
      },
    ],

    finalCta: {
      eyebrow: "NDARankUp",
      heading: "Make the next mock useful",
      body: "Do not finish with only a score. Review where marks were lost, what type of error produced the loss, whether it is recurring and what you will change before the next paper.",
      secondaryHref: "#start-your-nda-plan",
      secondaryLabel: "See what to study first",
    },

    seo: {
      title: "NDA 2026: Syllabus, Mocks, PYQs & SSB | Rank Sarthi",
      description:
        "Prepare for NDA 2026 with the official exam pattern, Maths and GAT pathways, mock and PYQ resources, error diagnosis, SSB guidance and verified updates.",
      ogTitle: "NDA 2026 Preparation Hub | Rank Sarthi",
      ogDescription:
        "Official NDA II 2026 facts, Maths and GAT preparation pathways, mock review, PYQs, SSB guidance and the next useful action.",
    },

    sourceStatus:
      "Written-exam structure, marking rules and GAT Part B proportions on this page come from the official UPSC notification for NDA & NA (II), 2026, verified on 27 August 2026. Cycle-dependent details change between cycles: always read the current notification before acting on dates, eligibility, vacancies or standards.",
    sourceRefs: ["upsc-nda-exam-page", "upsc-nda-notification", "upsc-previous-papers"],
    lastVerified: "27 August 2026",
  },


  jee: {
    slug: "jee",
    productName: "JeeRankUp",
    examName: "JEE Main & Advanced",
    buildStatus: "built",
    accent: "jee",
    conductingBody: "National Testing Agency (JEE Main); IIT-conducted (JEE Advanced)",
    tagline: "One place to route your JEE preparation: syllabus, subjects and next actions",
    deck: "Start from the official syllabus structure, move into the subject hub you are actually working on, and let evidence — not anxiety — decide what to study next.",
    hero: {
      eyebrow: "JeeRankUp · JEE Main and JEE Advanced",
      chips: ["Official-source checked syllabus", "Physics, Chemistry and Mathematics hubs live", "No invented weightage or trends"],
      primary: { label: "Open the JEE syllabus", href: "#route-your-preparation" },
      secondary: { label: "Go to a subject hub", href: "#route-your-preparation" },
      productCtaLabel: "Analyse your next JEE mock",
    },
    intro: [
      {
        type: "paragraph",
        children: [
          {
            text: "Most JEE preparation breaks down at routing, not effort. A student knows the total score of the last paper but not which chapter, which prerequisite, or which kind of mistake caused it — so the next week is spent revising everything at the same urgency.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "This hub separates three things that are usually mixed together: what the official syllabus actually defines, what each subject requires chapter by chapter, and what your own evidence says you should do next.",
          },
        ],
      },
    ],
    subjects: ["Physics", "Chemistry", "Mathematics"],

    taskGroups: [
      {
        id: "route-your-preparation",
        title: "Understand the scope",
        body: "The official JEE Main 2026 and JEE Advanced 2026 documents define scope, not study order. The syllabus explorer keeps both exams separate and shows which unit maps to which chapter page.",
        links: [
          { label: "JEE syllabus explorer", url: "/jee/syllabus" },
        ],
      },
      {
        id: "subjects",
        title: "Work inside a subject",
        body: "Each subject hub lists its chapter pages with prerequisites and scope notes, so a weak downstream chapter can be traced back to the foundation that actually needs work.",
        links: [
          { label: "JEE Physics", url: "/jee/physics" },
          { label: "JEE Chemistry", url: "/jee/chemistry" },
          { label: "JEE Mathematics", url: "/jee/mathematics" },
        ],
      },
      {
        id: "next-actions",
        title: "Decide the next action",
        body: "Classify lost marks as a knowledge gap, a recall gap, an execution error, or a decision and selection error. Then assign one specific action and retest it before changing the status of that chapter.",
        links: [
          { label: "JEE Main overview", url: "/jee/jee-main" },
          { label: "JEE Advanced overview", url: "/jee/jee-advanced" },
        ],
      },
    ],

    relatedUrls: ["/jee/syllabus", "/jee/physics", "/jee/chemistry", "/jee/mathematics"],

    finalCta: {
      eyebrow: "JeeRankUp",
      heading: "Know what your JEE score is actually telling you.",
      body: "Structure first, evidence second, effort last. Start with the syllabus map, then work inside the subject that your own papers keep pointing at.",
    },

    seo: {
      title: "JEE Preparation Hub — syllabus, subjects and next actions | Rank Sarthi",
      description:
        "JeeRankUp routes JEE Main and JEE Advanced preparation: the official syllabus structure, Physics, Chemistry and Mathematics subject hubs, and a clear way to decide what to study next.",
      ogTitle: "JeeRankUp — JEE Main and Advanced preparation hub",
      ogDescription:
        "Official-source syllabus structure plus Physics, Chemistry and Mathematics subject hubs for JEE Main and JEE Advanced.",
    },
  },


  neet: {
    slug: "neet",
    productName: "NeetRankUp",
    examName: "NEET (UG)",
    buildStatus: "planned",
    accent: "neet",
    tagline: "NCERT-anchored diagnosis for NEET aspirants.",
    intro: [],
    subjects: ["Physics", "Chemistry", "Biology"],
  },
};

export function getPlatform(slug: string): PlatformData | undefined {
  const platform = platforms[slug];
  return platform && platform.buildStatus === "built" ? platform : undefined;
}

/** Platforms whose page is actually built — used to drive navigation. */
export function builtPlatforms(): PlatformData[] {
  return Object.values(platforms).filter((p) => p.buildStatus === "built");
}

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
      primary: { label: "See what to study first", href: "#positioning" },
      secondary: { label: "View the official exam snapshot", href: "#snapshot" },
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
      secondaryHref: "#positioning",
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
    conductingBody:
      "National Testing Agency (JEE Main); the organising IIT under the Joint Admission Board framework (JEE Advanced)",
    tagline: "JEE Preparation That Connects Syllabus, Practice and Diagnosis",
    deck: "Rank Sarthi's JEE hub organises official exam information, syllabus navigation, subject learning paths, chapter intelligence, practice and mistake review.",
    hero: {
      eyebrow: "JeeRankUp — JEE Main and JEE Advanced",
      heading: "JEE Preparation That Connects Syllabus, Practice and Diagnosis",
      support:
        "Start with the official syllabus, learn prerequisites in order, practise at the correct level, classify lost marks, and retest.",
      chips: [
        "Official-source syllabus boundary",
        "Physics, Chemistry and Mathematics subject paths",
        "PI v1.1 mistake diagnosis",
      ],
      primary: { label: "Explore the structured JEE syllabus", href: "/jee/syllabus" },
      secondary: { label: "Choose the exam task in front of you", href: "#positioning" },
    },
    intro: [
      {
        type: "paragraph",
        children: [
          { text: "JEE preparation becomes easier to manage when every activity has a clear job." },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "The syllabus tells you what is examinable. A chapter path tells you what to learn first. Practice shows whether you can recognise and execute a method. A mock test shows whether that method survives selection pressure and time limits. Diagnosis tells you what to repair before you repeat the same mistake.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Rank Sarthi brings those steps into one JEE learning path for Main and Advanced. It does not replace the official NTA or JEE Advanced websites. Use official sites for rules, dates and notices. Use this hub to turn that information into study decisions.",
          },
        ],
      },
    ],
    subjects: ["Physics", "Chemistry", "Mathematics"],

    taskGroups: [
      {
        id: "map-the-syllabus",
        title: "Map what you need to study",
        body: "Use the JEE syllabus before choosing chapters or buying resources. It is the boundary of the preparation plan.",
        links: [{ label: "JEE syllabus", url: "/jee/syllabus" }],
      },
      {
        id: "understand-the-exam",
        title: "Choose the exam task in front of you",
        body: "Use the JEE Main guide for the official paper structure, paper choice, marking rules and a practical preparation sequence. Use the JEE Advanced guide for eligibility, the two-paper structure and the move from routine fluency to multi-concept reasoning.",
        links: [
          { label: "JEE Main guide", url: "/jee/jee-main" },
          { label: "JEE Advanced guide", url: "/jee/jee-advanced" },
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
        id: "repair-a-chapter",
        title: "Repair a chapter",
        body: "Begin with a structured chapter page. Each page connects prerequisites, concepts, formulas, method choice, traps and the next chapter.",
        links: [
          { label: "Electrostatics", url: "/jee/physics/electrostatics" },
          { label: "Current Electricity", url: "/jee/physics/current-electricity" },
        ],
      },
    ],

    papers: [
      {
        id: "jee-main",
        name: "JEE Main",
        covers: [
          "Official owner: National Testing Agency",
          "Main role: admission route for NITs, IIITs and other participating institutions, and an eligibility route for Advanced",
          "Current paper behavior: the official 2026 bulletin specifies paper-wise questions, marks and marking",
          "Preparation emphasis: coverage, accurate execution and efficient question selection",
        ],
        note: "Best relationship: build dependable chapter fluency and paper control.",
      },
      {
        id: "jee-advanced",
        name: "JEE Advanced",
        covers: [
          "Official owner: the organising IIT under the Joint Admission Board framework",
          "Main role: admission route for IIT undergraduate programmes, subject to admission criteria",
          "Current paper behavior: the official 2026 brochure specifies two compulsory papers, with detailed marking instructions provided for the paper",
          "Preparation emphasis: concept integration, instruction reading, analytical reasoning and selective persistence",
        ],
        note: "Best relationship: add deeper connections and variable-format decision practice on top of that base.",
      },
    ],
    structure: {
      eyebrow: "Main and Advanced",
      heading: "JEE Main and JEE Advanced are connected, not interchangeable",
      intro:
        "The overlap in Physics, Chemistry and Mathematics does not mean the two exams reward identical behavior. A student can learn common concepts once, then practise them under two different decision environments.",
      implications: {
        heading: "What that means for preparation",
        points: [
          "Build shared concept foundations together across Physics, Chemistry and Mathematics.",
          "Add Advanced-specific depth, instruction reading and multi-concept practice as a distinct layer.",
          "Near each exam, shift paper practice to that exam's actual behavior.",
        ],
      },
    },

    diagnosticLenses: [
      {
        title: "Knowledge Gap",
        body: "The concept, relationship or method was not understood.",
      },
      {
        title: "Recall Gap",
        body: "The knowledge existed, but the needed fact, formula or method could not be retrieved.",
      },
      {
        title: "Execution Error",
        body: "The selected approach was suitable, but algebra, calculation, sign, unit, reading or process execution failed.",
      },
      {
        title: "Decision / Selection Error",
        body: "The wrong question, approach, order, depth or time investment was chosen.",
      },
      {
        title: "Needs Review",
        body: "The evidence is mixed or insufficient for a confident label.",
      },
      {
        title: "A low score can hide different problems",
        body: "Two students can lose the same four marks for entirely different reasons. One may not understand electric potential — a Knowledge Gap needing concept repair. Another may forget the relation between field and potential during a timed set — a Recall Gap needing retrieval practice. A third may choose a long coordinate method where symmetry gives a short solution — a Decision / Selection Error needing method-comparison practice. The score tells you how much was lost. Diagnosis tells you what to do next.",
      },
    ],
    errorTaxonomy: {
      heading: "Start from your present preparation state",
      columns: ["Your present state", "Best next action", "Why"],
      rows: [
        {
          signal: "You are starting JEE preparation",
          category: "Open the syllabus and mark known, learning and not-started units",
          action: "It prevents random chapter selection.",
        },
        {
          signal: "You understand a chapter but miss questions",
          category: "Review formulas by condition, then solve a mixed set",
          action: "Recognition under mixed conditions is different from rereading notes.",
        },
        {
          signal: "You make avoidable mistakes",
          category: "Classify each loss with PI v1.1",
          action: "Different causes require different repairs.",
        },
        {
          signal: "You have completed most chapters",
          category: "Move to part-syllabus and full-paper practice",
          action: "Isolated chapter success does not prove paper-level selection.",
        },
        {
          signal: "You are preparing for Advanced",
          category: "Keep Main fluency, then add multi-concept and instruction-sensitive practice",
          action: "Advanced is not just a longer Main paper.",
        },
      ],
      note: "Optional contributing factors can record pressure, fatigue, notation, language or unfamiliar presentation. Tag Confidence should show how certain the classification is. A label is useful only when it changes the next action.",
    },

    pathwayIntro: {
      heading: "The Rank Sarthi learning loop",
      body: "Each step has one job, and the loop only closes when a repair is retested on a fresh set.",
    },
    pathway: [
      { id: "map", stage: "Map", body: "Confirm the official syllabus boundary and prerequisites." },
      { id: "learn", stage: "Learn", body: "Build the concept architecture, not a disconnected formula list." },
      { id: "practise", stage: "Practise", body: "Move from direct application to mixed method selection." },
      {
        id: "attempt",
        stage: "Attempt",
        body: "Use chapter, part-syllabus or full-paper conditions that match the current goal.",
      },
      { id: "diagnose", stage: "Diagnose", body: "Apply one primary PI label and record the evidence." },
      { id: "repair", stage: "Repair", body: "Choose a response that matches the cause." },
      { id: "retest", stage: "Retest", body: "Use a fresh set to check whether the repair transferred." },
    ],

    relatedUrls: [
      "/jee/jee-main",
      "/jee/jee-advanced",
      "/jee/syllabus",
      "/jee/physics",
      "/jee/chemistry",
      "/jee/mathematics",
      "/jee/previous-year-papers",
      "/jee/exam-dates",
      "/jee/cutoff",
      "/jee/answer-key",
    ],

    faqs: [
      {
        q: "Where should a new JEE student begin?",
        a: "Begin with the official syllabus map, then identify prerequisites and select a small first chapter sequence. Do not begin with a predicted weightage list.",
      },
      {
        q: "Should Main and Advanced be prepared separately?",
        a: "Build shared concept foundations together. Add Advanced-specific depth, instruction reading and multi-concept practice as a distinct layer. Near each exam, shift the paper practice to its actual behavior.",
      },
      {
        q: "Why does this page not publish JEE 2027 dates or pattern claims?",
        a: "The official sources used here are for the 2026 cycle. The page should update only after the competent authority publishes the next bulletin or notice.",
      },
      {
        q: "What should happen after a mock test?",
        a: "Review every wrong, skipped and materially slow question, assign a primary PI label, choose the corresponding repair, and retest. A score without a repair plan is incomplete feedback.",
      },
      {
        q: "What should parents look for?",
        a: "Ask for evidence of process, not only a daily score: which syllabus units are complete, weak or not started; which error category caused the largest avoidable loss this week; what was repaired and whether the repair survived a fresh set; whether the student is practising at the correct level for Main, Advanced or both; and whether official dates and rules are being checked at the official source. These questions create a calmer and more useful conversation than asking only, \"How many marks did you get?\"",
      },
    ],

    finalCta: {
      eyebrow: "JeeRankUp",
      heading: "Start with the official syllabus",
      body: "Use the structured JEE syllabus to choose the right subject and chapter path. Product actions appear only when their destinations work and their claims have been verified.",
      secondaryHref: "/jee/syllabus",
      secondaryLabel: "Open the JEE syllabus",
    },

    sourceStatus:
      "Structural statements follow the official NTA JEE Main 2026 and JEE Advanced 2026 documents. No 2027 date, pattern, eligibility, cutoff or result claim is published here.",
    sourceRefs: ["nta-jee-syllabus", "jee-advanced-syllabus"],
    lastVerified: "27 August 2026",

    seo: {
      title: "JEE Preparation Hub: Main, Advanced, Syllabus and Practice",
      description:
        "Plan JEE Main and Advanced preparation with official-source exam guides, structured syllabus paths, chapter intelligence, practice and mistake diagnosis.",
      ogTitle: "JEE Preparation Hub | Rank Sarthi",
      ogDescription:
        "Move from official syllabus to chapter learning, practice, diagnosis and revision for JEE Main and JEE Advanced.",
    },
  },


  neet: {
    slug: "neet",
    productName: "NeetRankUp",
    examName: "NEET (UG)",
    buildStatus: "built",
    accent: "neet",
    conductingBody: "National Testing Agency (NTA)",
    tagline: "NEET Preparation: Official Syllabus, NCERT Mapping and Subject Learning Paths",
    deck: "Rank Sarthi NEET routes you from the verified official NEET syllabus into Biology, Physics and Chemistry learning pages, with NCERT-oriented mapping where it can be supported.",
    hero: {
      eyebrow: "NEET (UG) 2026 | Latest verified cycle | NEET (UG) 2027 not officially announced",
      chips: ["Official-source checked", "NCERT-oriented Biology mapping", "No invented weightage or predictions"],
      primary: { label: "Check current exam status", href: "/neet/neet-exam" },
      secondary: { label: "Open the official syllabus", href: "/neet/syllabus" },
      productCtaLabel: "Diagnose your next NEET attempt",
    },
    intro: [
      {
        type: "paragraph",
        children: [
          {
            text: "Rank Sarthi NEET is a preparation hub that routes students from the verified official NEET syllabus into Biology, Physics and Chemistry learning pages, with NCERT-oriented mapping where it can be supported. The latest verified cycle used on this page is NEET UG 2026.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "NEET UG 2027 date, application schedule, pattern and syllabus details are not officially announced in the official sources checked for this page. Treat any 2027 claim you see elsewhere as unverified until NTA or NMC publishes it.",
          },
        ],
      },
    ],
    subjects: ["Physics", "Chemistry", "Biology"],

    cycleSnapshot: {
      eyebrow: "Current cycle",
      heading: "NEET (UG) 2026 at a glance",
      rows: [
        { label: "Conducting body", value: "National Testing Agency (NTA)" },
        { label: "Latest verified cycle", value: "NEET (UG) 2026" },
        { label: "Result declared", value: "16 July 2026" },
        { label: "Examination date used for the declared result", value: "21 June 2026, as reported in NTA's 16 July 2026 result press release" },
        { label: "NEET (UG) 2027 status", value: "Not officially announced in the official sources checked on 9 September 2026" },
      ],
      note: "This snapshot applies to the NEET (UG) 2026 cycle and was verified on 9 September 2026 against official NTA sources. Do not treat a 2026 rule as a 2027 rule until NTA or NMC publishes the next official bulletin.",
      verifiedOn: "9 September 2026",
      sourceRefs: ["nta-neet-documents", "nta-neet-2026-bulletin"],
      refreshTrigger: "Refresh when NTA publishes a new NEET (UG) notice, bulletin, result or syllabus update. Run a monthly cycle check until the 2027 bulletin appears.",
    },

    taskGroups: [
      {
        id: "understand-the-exam",
        title: "I do not know the current NEET rules yet",
        body: "Start with the verified official status, the 2026 pattern and marking rules, and the eligibility baseline before choosing any preparation content.",
        links: [{ label: "NEET exam overview", url: "/neet/neet-exam" }],
      },
      {
        id: "check-syllabus",
        title: "I need the official academic boundary",
        body: "Use the official current syllabus to separate what is currently examinable from routes that exist only as site architecture.",
        links: [
          { label: "Complete NEET syllabus", url: "/neet/syllabus" },
          { label: "Biology syllabus", url: "/neet/syllabus/biology" },
        ],
      },
      {
        id: "biology-led",
        title: "I am Biology-led and want to start learning",
        body: "Open the Biology hub and use the current-scope route labels rather than assuming every listed route is current syllabus.",
        links: [{ label: "Biology hub", url: "/neet/biology" }],
      },
      {
        id: "ncert-relationship",
        title: "I want to understand the NCERT relationship",
        body: "See how Rank Sarthi's mapping methodology connects the official syllabus, NCERT Biology and Rank Sarthi learning routes.",
        links: [{ label: "NCERT mapping methodology", url: "/neet/ncert-mapping" }],
      },
      {
        id: "ncert-important-pages",
        title: "I am looking for important NCERT pages",
        body: "This page deliberately uses edition-safe chapter, concept, diagram and terminology references instead of unsupported universal page numbers.",
        links: [{ label: "NCERT important areas", url: "/neet/ncert-important-pages" }],
      },
    ],

    diagnosticLenses: [
      {
        title: "Official cycle",
        body: "What is officially announced right now, and by which authority (NTA/NMC).",
      },
      {
        title: "Official syllabus",
        body: "What is currently examinable, separated from what a registered route merely names.",
      },
      {
        title: "Learning route",
        body: "Where a student learns a concept on Rank Sarthi: the Biology, Physics or Chemistry hub and its chapters.",
      },
      {
        title: "Practice/evidence",
        body: "How a student tests or verifies learning, using only verified product or PYQ evidence, never an inferred question frequency.",
      },
    ],

    errorTaxonomy: {
      heading: "Name the error before choosing the fix",
      columns: ["What the review shows", "Category", "What to do next"],
      rows: [
        {
          signal: "Assumes every registered route is current syllabus",
          category: "Decision / Selection Error",
          action: "Check the Biology syllabus truth map before choosing a chapter.",
        },
        {
          signal: "Reads a chapter but cannot retrieve exact facts",
          category: "Recall Gap",
          action: "Use retrieval-focused Biology method rather than re-reading.",
        },
        {
          signal: "Knows terms but not relationships",
          category: "Knowledge Gap",
          action: "Use entity/process relationship maps rather than isolated definitions.",
        },
        {
          signal: "Misreads statement options or diagrams",
          category: "Execution Error",
          action: "Use precision and diagram checks before selecting an answer.",
        },
        {
          signal: "Finds conflicting syllabus claims online",
          category: "Needs Review",
          action: "Return to the visible official-source layer on this hub.",
        },
      ],
    },

    pathwayIntro: {
      heading: "A syllabus-to-route relationship, not a promise",
      body: "A registered Rank Sarthi URL is an architecture commitment, not an academic claim. If a route is not explicitly listed in the current official syllabus, Rank Sarthi labels it as contextual or historical rather than implying current exam relevance.",
    },

    pathway: [
      {
        id: "official-cycle",
        stage: "Official cycle",
        body: "Confirm the current official status before relying on any date, pattern or eligibility rule.",
        links: [{ label: "NEET exam overview", url: "/neet/neet-exam" }],
      },
      {
        id: "official-syllabus",
        stage: "Official syllabus",
        body: "Separate subject and unit boundaries as published in the current official syllabus.",
        links: [
          { label: "NEET syllabus", url: "/neet/syllabus" },
          { label: "Biology syllabus", url: "/neet/syllabus/biology" },
        ],
      },
      {
        id: "learning-route",
        stage: "Learning route",
        body: "Move into the Biology, Physics or Chemistry hub and choose the chapter that matches your current-scope status.",
        links: [{ label: "Biology hub", url: "/neet/biology" }],
      },
      {
        id: "ncert-mapping",
        stage: "NCERT relationship",
        body: "Understand how Rank Sarthi connects the syllabus, NCERT Biology concepts and Rank Sarthi routes, and where exact-line claims stay hidden until evidenced.",
        links: [{ label: "NCERT mapping methodology", url: "/neet/ncert-mapping" }],
      },
    ],

    relatedUrls: [
      "/neet/neet-exam",
      "/neet/syllabus",
      "/neet/syllabus/biology",
      "/neet/ncert-mapping",
      "/neet/ncert-important-pages",
      "/neet/biology",
      "/neet/physics",
      "/neet/chemistry",
      "/neet/previous-year-papers",
      "/neet/answer-key",
      "/neet/cutoff",
      "/neet/exam-dates",
      "/neet/score-calculator",
      "/neet/study-plan",
      "/neet/blog",
      "/neet/mock-tests",
      "/neet/pricing",
    ],

    showPricing: false,

    faqs: [
      {
        q: "What is the latest official NEET cycle used by this page?",
        a: "NEET UG 2026 is the latest verified completed/current cycle in this package. NTA declared the result on 16 July 2026.",
      },
      {
        q: "Has NEET UG 2027 been officially announced?",
        a: "Not in the official NTA/NMC sources checked on 9 September 2026. Do not assume a 2027 date, pattern or syllabus yet.",
      },
      {
        q: "Does every Rank Sarthi Biology URL represent a current NEET syllabus chapter?",
        a: "No. The URL registry is architecture, not syllabus proof. Biology routes are labelled as current, contextual umbrella, partial/merged or historical/not currently listed.",
      },
      {
        q: "Is Rank Sarthi claiming exact NCERT-line mapping here?",
        a: "No. The page explains the mapping methodology and exposes live product granularity only when verified evidence exists.",
      },
    ],

    finalCta: {
      eyebrow: "NeetRankUp",
      heading: "Start from verified status, not assumption",
      body: "Open the current exam overview or the official syllabus before choosing a subject or chapter to study.",
      secondaryHref: "/neet/neet-exam",
      secondaryLabel: "Check current exam status",
    },

    seo: {
      title: "NEET Preparation: Syllabus, NCERT Mapping & Subjects | Rank Sarthi",
      description: "Navigate NEET preparation through verified official-cycle status, the current syllabus, Biology, Physics, Chemistry and NCERT-oriented learning paths.",
      ogTitle: "NEET Preparation: Official Syllabus, NCERT Mapping and Subject Learning Paths",
      ogDescription: "Verified official-cycle status first, then syllabus, subject and NCERT-oriented learning routes.",
    },

    sourceStatus: "Verified against official NTA/NMC sources checked on 9 September 2026.",
    sourceRefs: ["nta-neet-documents", "nta-neet-2026-bulletin", "nmc-neet-ug-2026-syllabus"],
    lastVerified: "9 September 2026",
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

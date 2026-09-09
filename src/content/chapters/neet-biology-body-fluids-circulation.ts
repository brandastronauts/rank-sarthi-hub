import type { ChapterContent } from "@/content/types";

/**
 * Body Fluids and Circulation — T06 production content.
 * Scope: CURRENT_OFFICIAL_SCOPE (NEET UG 2026, Unit 5 Human Physiology).
 * Blood groups, coagulation and disorders are kept strictly educational;
 * no transfusion, anticoagulation or treatment guidance is included.
 */
export const neetBiologyBodyFluidsCirculation: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Body Fluids and Circulation",
  slug: "body-fluids-circulation",
  url: "/neet/biology/body-fluids-circulation",
  canonicalIntent:
    "Connect blood and lymph composition to heart structure, the cardiac cycle, cardiac output, ECG and double circulation, while keeping blood groups and disorders educational rather than clinical.",

  heroChips: [
    "NEET UG 2026 current scope",
    "No invented weightage or question counts",
    "Educational only — no transfusion or treatment advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 Body Fluids and Circulation covers blood, blood groups, coagulation, lymph, the human heart and vessels, the cardiac cycle and cardiac output, ECG, double circulation, cardiac regulation and listed circulatory disorders.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The central skill is to track what each fluid contains, where blood moves next in the circulation route, which valves are open or closed at each phase of the cardiac cycle, and which ECG event represents which electrical change.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not publish invented weightage, expected question counts or trend percentages, and it does not provide personal transfusion, diagnosis or treatment guidance.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Breathing and Exchange of Gases",
      url: "/neet/biology/breathing-exchange-gases",
      relation: "prerequisite",
      description: "Gas exchange context supports understanding oxygen transport carried by circulation.",
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
      "Blood: composition and plasma proteins",
      "Blood groups",
      "Coagulation of blood",
      "Composition of lymph and its function",
      "Human circulatory system",
      "Structure of human heart and blood vessels",
      "Cardiac cycle",
      "Cardiac output",
      "Electrocardiogram (ECG)",
      "Double circulation",
      "Regulation of cardiac activity",
      "Disorders of circulatory system (angina, heart attack, heart failure, hypertension, coronary artery disease)",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "blood-composition",
      title: "1. Blood is a connective tissue with plasma and formed elements",
      keyIdea: "Plasma is the fluid matrix; RBCs, WBCs and platelets are the formed elements.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Blood is a connective tissue consisting of a fluid matrix, plasma, and formed elements suspended in it. Plasma is a water-based matrix carrying proteins, dissolved solutes and signalling molecules and supports transport and homeostasis throughout the body." },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "RBCs (erythrocytes): ", bold: true }, { text: "haemoglobin-rich formed elements responsible mainly for oxygen transport and contributing to carbon dioxide transport." }],
            [{ text: "WBCs (leucocytes): ", bold: true }, { text: "nucleated cells with immunity and defence roles." }],
            [{ text: "Platelets: ", bold: true }, { text: "cell fragments that support haemostasis and clot formation." }],
          ],
        },
      ],
    },
    {
      id: "blood-groups",
      title: "2. Blood groups depend on red-cell antigens and plasma antibodies",
      keyIdea: "ABO grouping depends on red-cell surface antigens; Rh is a separate antigen system.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The ABO blood-group system depends on the presence or absence of specific antigens on red blood cells and corresponding antibodies in plasma. The Rh system is a separate antigen classification. This page teaches the antigen-antibody relationship and inheritance context only, and does not provide personal transfusion-selection guidance." },
          ],
        },
      ],
    },
    {
      id: "coagulation",
      title: "3. Coagulation converts fibrinogen to fibrin to stabilise a clot",
      keyIdea: "Vessel injury triggers platelet and clotting-factor reactions ending in a fibrin mesh.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Vessel injury triggers a sequence of platelet and clotting-factor reactions that convert soluble fibrinogen into insoluble fibrin, stabilising a clot. Calcium participates in the clotting process. This is treated conceptually here, not as a full clinical cascade." },
          ],
        },
      ],
    },
    {
      id: "lymph",
      title: "4. Lymph is interstitial fluid returned to blood through lymphatic vessels",
      keyIdea: "Lymph is generally colourless, carries lymphocytes and has less protein than plasma.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Interstitial fluid that enters lymphatic vessels becomes lymph. It is generally colourless, contains lymphocytes, has less protein than plasma, returns tissue fluid to blood and transports absorbed fats from intestinal lacteals." },
          ],
        },
      ],
    },
    {
      id: "heart-architecture",
      title: "5. The heart has four chambers and directionally named valves",
      keyIdea: "Right side handles systemic-to-pulmonary flow; left side handles pulmonary-to-systemic flow.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Right atrium: " }, { text: "receives systemic venous blood." }],
            [{ text: "Right ventricle: " }, { text: "sends blood toward the lungs." }],
            [{ text: "Left atrium: " }, { text: "receives pulmonary venous blood." }],
            [{ text: "Left ventricle: " }, { text: "sends blood to the systemic circulation." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Tricuspid valve guards the right atrioventricular opening, bicuspid (mitral) valve guards the left atrioventricular opening, and semilunar valves guard ventricular outflow. The SA node is the normal pacemaker in NCERT's myogenic-heart model; the AV node and specialised conducting tissue coordinate ventricular excitation after atrial excitation." },
          ],
        },
      ],
    },
    {
      id: "vessels",
      title: "6. Vessel identity is defined by direction, not oxygenation",
      keyIdea: "Arteries carry blood away from the heart; veins carry blood toward the heart, regardless of oxygen content.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Arteries carry blood away from the heart and have thicker, elastic or muscular walls suited to pulsatile outflow. Veins carry blood toward the heart, have thinner walls, larger lumen and often contain valves supporting lower-pressure return. Capillaries form a one-cell-thick exchange network. The pulmonary artery, which carries deoxygenated blood, and the pulmonary veins, which carry oxygenated blood, prove that vessel identity depends on direction relative to the heart, not on oxygen content." },
          ],
        },
      ],
    },
    {
      id: "cardiac-cycle",
      title: "7. The cardiac cycle is a repeating sequence of joint diastole, atrial systole and ventricular systole",
      keyIdea: "Valve opening and closing follow pressure relationships in a fixed order.",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Joint diastole: " }, { text: "chambers relaxed; passive filling occurs." }],
            [{ text: "Atrial systole: " }, { text: "atria contract, completing ventricular filling." }],
            [{ text: "Ventricular systole: " }, { text: "ventricular pressure rises; AV valves close; semilunar valves open once ventricular pressure exceeds outflow pressure, and ejection follows." }],
            [{ text: "Ventricular diastole: " }, { text: "ventricles relax; semilunar valves close; AV valves reopen once pressure relationships permit filling." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [{ text: "Heart sounds are linked primarily to valve closure, not valve opening." }],
        },
      ],
    },
    {
      id: "cardiac-output",
      title: "8. Cardiac output relates stroke volume and heart rate",
      keyIdea: "Cardiac output = stroke volume × heart rate, as an academic relationship only.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Cardiac output equals stroke volume multiplied by heart rate. This page treats it as an academic relationship, with no personal target value or health interpretation." },
          ],
        },
      ],
    },
    {
      id: "ecg",
      title: "9. ECG records electrical events, not a direct mechanical tracing",
      keyIdea: "P, QRS and T correspond respectively to atrial depolarisation, ventricular depolarisation and ventricular repolarisation.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "P wave: " }, { text: "atrial depolarisation." }],
            [{ text: "QRS complex: " }, { text: "ventricular depolarisation." }],
            [{ text: "T wave: " }, { text: "ventricular repolarisation." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "This page provides no diagnostic ECG interpretation." }],
        },
      ],
    },
    {
      id: "double-circulation",
      title: "10. Double circulation means blood passes through the heart twice per complete circuit",
      keyIdea: "Pulmonary circuit oxygenates blood; systemic circuit delivers it to tissues.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Pulmonary circulation: right ventricle → pulmonary artery → lungs → pulmonary veins → left atrium. Systemic circulation: left ventricle → aorta and systemic arteries → tissues → systemic veins and venae cavae → right atrium. Blood therefore passes through the heart twice in one complete pulmonary-systemic circuit." },
          ],
        },
      ],
    },
    {
      id: "cardiac-regulation",
      title: "11. The heart is myogenic; autonomic and hormonal input modulate its activity",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The heart is myogenic, meaning the impulse for contraction originates within the heart itself. Autonomic input modulates rate and output, and adrenal medullary catecholamines can increase cardiac activity in relevant physiological contexts." },
          ],
        },
      ],
    },
    {
      id: "listed-disorders",
      title: "12. Listed circulatory disorders remain strictly educational",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Brief textbook concepts include hypertension, coronary artery disease, angina and heart failure. This page does not provide symptom diagnosis or treatment advice." },
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
        ["What is the chapter about?", "How blood and lymph compositions relate to the heart, vessels, cardiac cycle, cardiac output, ECG and double circulation."],
        ["What is the central method choice?", "Trace the direction of blood flow through chambers and vessels, and match each cardiac-cycle phase to its valve state."],
        ["Where do most mistakes begin?", "Assuming artery always means oxygenated blood, confusing valve opening with closing for heart sounds, and misreading ECG waves as mechanical events."],
        ["What should come before this chapter?", "Breathing and Exchange of Gases, for gas-exchange context that circulation transports."],
        ["What comes after it?", "Excretory Products and their Elimination, which continues fluid/homeostasis regulation."],
      ],
      note: "The official NEET UG 2026 syllabus and NCERT define content scope. No chapter weightage is asserted here.",
    },
    {
      id: "vessel-comparison",
      jump: true,
      slot: "concepts",
      heading: "Vessel comparison: direction defines identity",
      columns: ["Vessel", "Direction", "Wall/lumen", "Core function"],
      rows: [
        ["Artery", "Away from heart", "Thicker, elastic/muscular", "Pulsatile outflow"],
        ["Vein", "Toward heart", "Thinner, larger lumen; valves often present", "Lower-pressure return"],
        ["Capillary", "Exchange network", "One-cell-thick wall", "Exchange"],
      ],
      note: "Correct classification uses direction, not oxygenation; the pulmonary artery and pulmonary veins prove this.",
    },
    {
      id: "cardiac-event-dataset",
      jump: true,
      slot: "concepts",
      heading: "Cardiac cycle: valve/pressure logic and flow outcome",
      columns: ["Phase", "Valve/pressure logic", "Flow outcome"],
      rows: [
        ["Joint diastole", "Low chamber pressure; AV valves open", "Passive filling"],
        ["Atrial systole", "Atrial pressure/contraction increases", "Completes ventricular filling"],
        ["Ventricular systole", "AV valves close; semilunar valves open after pressure threshold", "Ejection"],
        ["Ventricular diastole", "Semilunar valves close; ventricular pressure falls", "Refilling becomes possible"],
      ],
    },
    {
      id: "ecg-dataset",
      jump: true,
      slot: "concepts",
      heading: "ECG wave dataset",
      columns: ["Wave", "Electrical event"],
      rows: [
        ["P", "Atrial depolarisation"],
        ["QRS", "Ventricular depolarisation"],
        ["T", "Ventricular repolarisation"],
      ],
      note: "Electrical events only, not a clinical interpretation.",
    },
  ],

  mistakes: [
    {
      id: "artery-oxygenated",
      mistake: "Assuming artery always means oxygenated blood.",
      why: [{ type: "paragraph", children: [{ text: "Students generalise from the systemic arteries to all arteries." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Artery is defined by direction away from the heart; the pulmonary artery carries deoxygenated blood." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "heart-sounds-opening",
      mistake: "Believing heart sounds correspond to valve opening.",
      why: [{ type: "paragraph", children: [{ text: "Opening and closing are easily confused when the sequence is not rehearsed." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Heart sounds are linked primarily to valve closure, not opening." }] }],
      errorType: "recall-gap",
    },
    {
      id: "p-wave-mechanical",
      mistake: "Treating the P wave as mechanical atrial contraction.",
      why: [{ type: "paragraph", children: [{ text: "ECG waves are electrical signals, but they are commonly read as if they show muscle movement directly." }] }],
      fix: [{ type: "paragraph", children: [{ text: "The P wave represents atrial depolarisation, the electrical event that precedes and triggers contraction." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "circulation-routes-swapped",
      mistake: "Swapping the pulmonary and systemic return routes.",
      why: [{ type: "paragraph", children: [{ text: "Both circuits pass through the heart, which invites route confusion under time pressure." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Trace chamber → vessel → exchange bed → return for each circuit separately before answering." }] }],
      errorType: "execution-error",
    },
    {
      id: "abo-transfusion-decision",
      mistake: "Using ABO facts to make a personal transfusion choice.",
      why: [{ type: "paragraph", children: [{ text: "Syllabus-level antigen-antibody facts can be mistaken for clinical decision guidance." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep ABO/Rh knowledge to the syllabus antigen-antibody relationships; this page gives no transfusion guidance." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "up", description: "Unit hub for Human Physiology chapters." },
    { label: "Breathing and Exchange of Gases", url: "/neet/biology/breathing-exchange-gases", relation: "prerequisite", description: "Gas exchange feeds into circulatory oxygen transport." },
    { label: "Excretory Products and their Elimination", url: "/neet/biology/excretory-products", relation: "related", description: "Continues body-fluid and homeostasis regulation." },
    { label: "Excretory Products and their Elimination", url: "/neet/biology/excretory-products", relation: "next", description: "Recommended next chapter in the Human Physiology sequence." },
  ],

  sources: ["nta-neet-2026-bulletin", "ncert-biology-11-contents"],
  sourceNote:
    "Verified against the NTA NEET UG 2026 official syllabus and current NCERT Body Fluids and Circulation and Biology Class XI Unit V contents. Blood groups, coagulation and circulatory disorders are represented at educational, syllabus-bound depth only; no transfusion, anticoagulation or treatment guidance is provided.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],
  contentStatus: "draft",
  meta: {
    title: "NEET Body Fluids and Circulation 2026: Blood, Heart, ECG",
    description:
      "Study NEET UG 2026 blood, lymph, heart, vessels, cardiac cycle, cardiac output, ECG and double circulation through source-verified relationship maps.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Chemical Coordination and Regulation — T06 production content.
 * Scope: CURRENT_OFFICIAL_SCOPE (NEET UG 2026, Unit 5 Human Physiology).
 * Eight explicitly named gland categories control the architecture; thymus
 * and other hormone-producing tissues are NCERT-contextual support only.
 * No diagnosis, hormone replacement or treatment guidance is included.
 */
export const neetBiologyChemicalCoordination: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Chemical Coordination and Regulation",
  slug: "chemical-coordination",
  url: "/neet/biology/chemical-coordination",
  canonicalIntent:
    "Map every explicitly named endocrine gland to its hormones, action relationships and syllabus-listed hypo/hyperactivity disorders, keeping hormone mechanism at elementary NCERT depth.",

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
          text: "Chemical Coordination and Regulation for NEET UG 2026 requires the named endocrine glands (hypothalamus, pituitary, pineal, thyroid, parathyroid, adrenal, pancreas and gonads), their hormones and physiological relationships, elementary hormone-action mechanisms and brief listed disorders caused by hypoactivity or hyperactivity.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Study it as a chain: gland → hormone → target/action → regulation → listed disorder, rather than memorising disease names without the endocrine link.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        { text: "This page does not provide diagnosis, hormone replacement, diabetes management, or medication/dose/testing/treatment advice." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Neural Control and Coordination",
      url: "/neet/biology/neural-control",
      relation: "prerequisite",
      description: "Neural signalling concepts provide a contrast for understanding chemical/hormonal coordination.",
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
      "Endocrine glands and hormones",
      "Human endocrine system: hypothalamus, pituitary, pineal, thyroid, parathyroid, adrenal, pancreas, gonads",
      "Mechanism of hormone action (elementary)",
      "Role of hormones as messengers and regulators",
      "Hypo and hyperactivity and related disorders: dwarfism, acromegaly, cretinism, goiter, exophthalmic goiter, diabetes, Addison's disease",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "endocrine-signalling",
      title: "1. Endocrine signalling follows a source-to-response chain",
      keyIdea: "Endocrine source → hormone → circulation → target receptor → cellular response → physiological regulation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Endocrine glands and cells release hormones into body fluids. Hormones act on target cells that carry appropriate receptors, producing a cellular response that contributes to physiological regulation." },
          ],
        },
      ],
    },
    {
      id: "hypothalamus",
      title: "2. The hypothalamus links neural and endocrine control",
      keyIdea: "Releasing/inhibiting hormones regulate the anterior pituitary; ADH and oxytocin are synthesised here but released via the posterior pituitary.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Hypothalamic neurosecretory cells link neural and endocrine control. Releasing and inhibiting hormones regulate anterior pituitary secretion; NCERT-level examples include GnRH and inhibitory signals such as somatostatin." },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "Oxytocin and vasopressin/ADH are synthesised in hypothalamic neurons and transported to the posterior pituitary for storage and release. This synthesis-versus-release distinction is exam-critical." },
          ],
        },
      ],
    },
    {
      id: "pituitary",
      title: "3. Anterior and posterior pituitary differ in synthesis versus release",
      keyIdea: "Anterior pituitary synthesises its own trophic hormones; posterior pituitary releases hormones made by the hypothalamus.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "GH: " }, { text: "body/tissue growth and metabolic effects." }],
            [{ text: "Prolactin: " }, { text: "mammary development/lactation relationship." }],
            [{ text: "TSH: " }, { text: "stimulates thyroid hormone synthesis/secretion." }],
            [{ text: "ACTH: " }, { text: "stimulates the adrenal cortex, especially the glucocorticoid relationship." }],
            [{ text: "FSH: " }, { text: "gametogenesis and ovarian follicular development." }],
            [{ text: "LH: " }, { text: "ovulation/corpus-luteum relationships in females; androgen secretion in males." }],
            [{ text: "ADH/vasopressin (posterior release): " }, { text: "increases renal water reabsorption." }],
            [{ text: "Oxytocin (posterior release): " }, { text: "acts on uterine smooth muscle and mammary myoepithelial cells in reproductive/lactation contexts." }],
          ],
        },
      ],
    },
    {
      id: "pineal-thyroid-parathyroid",
      title: "4. Pineal, thyroid and parathyroid regulate rhythm, metabolism and calcium",
      keyIdea: "Calcitonin and PTH act in broadly opposite directions on blood calcium.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Melatonin from the pineal gland participates in circadian/diurnal rhythm regulation at NCERT depth. Thyroid follicular cells produce T4/T3, which regulate metabolic rate and support normal growth and development; parafollicular (C) cells secrete calcitonin, which contributes to lowering elevated blood Ca2+. PTH from the parathyroid increases blood Ca2+ availability through coordinated effects on bone, kidney and intestinal calcium handling at NCERT depth — a broad direction opposite to calcitonin." },
          ],
        },
      ],
    },
    {
      id: "adrenal",
      title: "5. Adrenal cortex and medulla secrete different hormone classes",
      keyIdea: "Cortex secretes corticosteroids; medulla secretes catecholamines.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Aldosterone (mineralocorticoid): " }, { text: "promotes Na+ retention, K+ handling and associated water balance." }],
            [{ text: "Cortisol (glucocorticoid): " }, { text: "influences carbohydrate, protein and fat metabolism and stress responses." }],
            [{ text: "Adrenal medulla: " }, { text: "produces catecholamines, especially adrenaline/epinephrine and noradrenaline/norepinephrine, supporting rapid stress/emergency physiological responses such as increased cardiac activity and substrate mobilisation." }],
          ],
        },
      ],
    },
    {
      id: "pancreas",
      title: "6. Pancreatic alpha and beta cells act in opposing directions on blood glucose",
      keyIdea: "Glucagon raises blood glucose availability; insulin lowers elevated blood glucose.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Alpha cells secrete glucagon, which raises blood glucose availability through hepatic metabolic effects. Beta cells secrete insulin, which lowers elevated blood glucose through uptake/utilisation/storage relationships. This page teaches the antagonistic homeostatic direction, not diabetes self-management." },
          ],
        },
      ],
    },
    {
      id: "gonads",
      title: "7. Testis and ovary hormones support reproductive-system function",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Testis/Leydig cells secrete androgens/testosterone, supporting male reproductive-system functions, the spermatogenic environment and secondary sexual characteristics at NCERT depth. Ovary secretes estrogens and progesterone, supporting female reproductive-system, secondary-sex-character and uterine-cycle/pregnancy relationships at textbook depth. Deeper menstrual/reproductive sequencing belongs to Human Reproduction." },
          ],
        },
      ],
    },
    {
      id: "hormone-action-mechanism",
      title: "8. Hormone action follows one of two broad receptor patterns",
      keyIdea: "Membrane-receptor pattern for peptides/catecholamines; intracellular-receptor pattern for steroids/thyroid hormones.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Membrane-receptor pattern: " }, { text: "peptide/protein hormones and catecholamines generally act through surface receptors and intracellular signalling/second messengers." }],
            [{ text: "Intracellular-receptor pattern: " }, { text: "steroid and thyroid hormones can bind intracellular receptors and alter gene-expression-related responses." }],
          ],
        },
      ],
    },
    {
      id: "feedback",
      title: "9. Endocrine axes commonly use a three-tier feedback pattern",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Common endocrine-axis logic: hypothalamic signal → pituitary trophic hormone → peripheral endocrine gland → peripheral hormone → feedback. Not every hormone uses this exact three-tier axis." },
          ],
        },
      ],
    },
    {
      id: "listed-disorders",
      title: "10. Listed endocrine disorders remain strictly educational",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Pituitary dwarfism relates to childhood GH hyposecretion; acromegaly to GH hypersecretion in adults; cretinism to severe childhood thyroid-hormone deficiency in NCERT terminology; goiter to thyroid enlargement, classically linked by NCERT to iodine-deficiency hypothyroid context; exophthalmic goiter to a hyperthyroid relationship in NCERT terminology; diabetes mellitus to inadequate insulin action/secretion leading to persistent hyperglycaemia; and Addison's disease to adrenal cortical hypofunction. None of these are presented with personal diagnosis, symptom interpretation or treatment guidance." },
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
        ["What is the chapter about?", "The eight explicitly named endocrine gland categories, their hormones, elementary action mechanisms and listed disorders."],
        ["What is the central method choice?", "Trace gland → hormone → target/action → regulation → listed disorder for each gland."],
        ["Where do most mistakes begin?", "Confusing synthesis site with release site, and reversing the opposing directions of hormone pairs like PTH/calcitonin or insulin/glucagon."],
        ["What should come before this chapter?", "Neural Control and Coordination, which contrasts fast neural signalling with slower hormonal signalling."],
        ["What comes after it?", "Human Reproduction and Reproductive Health, which extend gonadal hormone relationships."],
      ],
      note: "The official NEET UG 2026 syllabus and NCERT define content scope. No chapter weightage is asserted here.",
    },
    {
      id: "gland-hormone-action-matrix",
      jump: true,
      slot: "concepts",
      heading: "Gland-hormone-action matrix",
      columns: ["Source", "Hormone(s)", "Main action relationship", "High-risk distinction"],
      rows: [
        ["Hypothalamus", "Releasing/inhibiting hormones", "Regulates anterior pituitary", "Also synthesises ADH/oxytocin, released via posterior pituitary"],
        ["Anterior pituitary", "GH, prolactin, TSH, ACTH, FSH, LH", "Growth, lactation, thyroid/adrenal/gonadal control", "Trophic relationships"],
        ["Posterior pituitary", "Releases ADH, oxytocin", "Water balance; uterine/mammary actions", "Release site, not synthesis site"],
        ["Pineal", "Melatonin", "Circadian/diurnal timing", "No sleep-treatment claim"],
        ["Thyroid", "T4/T3, calcitonin", "Metabolism/growth; calcitonin lowers elevated Ca2+", "Contrast calcitonin/PTH"],
        ["Parathyroid", "PTH", "Raises Ca2+ availability", "Opposite broad direction to calcitonin"],
        ["Adrenal cortex", "Aldosterone, cortisol", "Fluid/electrolyte; metabolism/stress", "Cortex differs from medulla"],
        ["Adrenal medulla", "Epinephrine, norepinephrine", "Rapid stress/emergency response", "Catecholamines, not corticosteroids"],
        ["Pancreatic alpha", "Glucagon", "Raises blood glucose availability", "Opposite insulin direction"],
        ["Pancreatic beta", "Insulin", "Lowers elevated blood glucose", "No diabetes treatment"],
        ["Testis", "Androgens/testosterone", "Male reproductive/secondary-sex-character relationships", "Gonadal endocrine role"],
        ["Ovary", "Estrogens, progesterone", "Female reproductive/uterine relationships", "Deeper reproduction owned elsewhere"],
      ],
    },
    {
      id: "disorder-dataset",
      jump: true,
      slot: "concepts",
      heading: "Listed disorder dataset",
      columns: ["Disorder", "NCERT-level endocrine relationship", "Safety boundary"],
      rows: [
        ["Pituitary dwarfism", "Childhood GH hyposecretion", "No personal growth assessment"],
        ["Acromegaly", "GH hypersecretion in adults", "No symptom diagnosis"],
        ["Cretinism", "Severe childhood thyroid-hormone deficiency in NCERT terminology", "Retain exam term; not clinical labelling guidance"],
        ["Goiter", "Thyroid enlargement, classically linked by NCERT to iodine-deficiency hypothyroid context", "No dietary/treatment advice"],
        ["Exophthalmic goiter", "Hyperthyroid relationship in NCERT terminology", "No symptom interpretation"],
        ["Diabetes mellitus", "Inadequate insulin action/secretion relationship leading to persistent hyperglycaemia", "No diagnosis, medication or glucose targets"],
        ["Addison's disease", "Adrenal cortical hypofunction", "Educational only"],
      ],
    },
  ],

  mistakes: [
    {
      id: "posterior-pituitary-synthesis",
      mistake: "Believing the posterior pituitary synthesises ADH and oxytocin.",
      why: [{ type: "paragraph", children: [{ text: "The posterior pituitary is where these hormones are released, which invites assuming it also makes them." }] }],
      fix: [{ type: "paragraph", children: [{ text: "The hypothalamus synthesises these hormones; the posterior pituitary stores and releases them." }] }],
      errorType: "recall-gap",
    },
    {
      id: "pth-calcitonin-same-direction",
      mistake: "Assuming PTH and calcitonin have the same direction of effect on blood calcium.",
      why: [{ type: "paragraph", children: [{ text: "Both hormones are calcium-regulating, which can obscure their opposite directions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Their broad directions oppose: PTH raises Ca2+ availability, calcitonin lowers elevated Ca2+." }] }],
      errorType: "recall-gap",
    },
    {
      id: "cortex-medulla-same-class",
      mistake: "Assuming the adrenal cortex and medulla secrete the same class of hormone.",
      why: [{ type: "paragraph", children: [{ text: "Both regions belong to the same gland, which can suggest a shared hormone class." }] }],
      fix: [{ type: "paragraph", children: [{ text: "The cortex secretes corticosteroid classes (aldosterone, cortisol); the medulla secretes catecholamines." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "insulin-glucagon-both-lower",
      mistake: "Assuming insulin and glucagon both lower blood glucose.",
      why: [{ type: "paragraph", children: [{ text: "Both are pancreatic hormones tied to glucose regulation, which can blur their opposite roles." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Their homeostatic directions oppose: insulin lowers elevated glucose; glucagon raises glucose availability." }] }],
      errorType: "recall-gap",
    },
    {
      id: "disorder-used-to-diagnose",
      mistake: "Using an endocrine disorder relationship to diagnose a real person.",
      why: [{ type: "paragraph", children: [{ text: "Naming a condition alongside its mechanism can invite applying it to personal symptoms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the relationship educational and syllabus-bound; this page provides no diagnostic guidance." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "up", description: "Unit hub for Human Physiology chapters." },
    { label: "Neural Control and Coordination", url: "/neet/biology/neural-control", relation: "prerequisite", description: "Contrasts fast neural signalling with hormonal signalling." },
    { label: "Excretory Products and their Elimination", url: "/neet/biology/excretory-products", relation: "related", description: "Shares ADH and RAAS regulatory hormones with excretion." },
    { label: "Human Reproduction", url: "/neet/biology/human-reproduction", relation: "forward", description: "Extends gonadal hormone relationships introduced here." },
    { label: "Reproductive Health", url: "/neet/biology/reproductive-health", relation: "forward", description: "Builds on reproductive endocrinology introduced here." },
  ],

  sources: ["nta-neet-2026-bulletin", "ncert-biology-11-contents"],
  sourceNote:
    "Verified against the NTA NEET UG 2026 official Unit 5 wording and current NCERT Chemical Coordination and Integration and Biology Class XI Unit V contents. The thymus and selected heart/kidney/GI hormone-producing tissues remain NCERT-contextual support, not separate current-core modules, because the verified 2026 syllabus explicitly enumerates eight gland categories. Listed disorders are educational only; no diagnosis, hormone replacement or treatment guidance is provided.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],
  contentStatus: "draft",
  meta: {
    title: "NEET Chemical Coordination 2026: Glands, Hormones and Disorders",
    description:
      "Study the verified NEET UG 2026 endocrine scope with gland-hormone-action maps for pituitary, thyroid, adrenal, pancreas, gonads and named disorders.",
  },
};

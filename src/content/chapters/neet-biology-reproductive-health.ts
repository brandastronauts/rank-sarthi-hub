import type { ChapterContent } from "@/content/types";

/**
 * Reproductive Health — T06 production content.
 *
 * MEDICAL SAFETY: this page is a NEET educational resource only. It does not
 * provide personal diagnosis, symptom interpretation, medication or dosage,
 * personalised contraception selection, pregnancy or abortion instructions,
 * fertility-treatment recommendations, or individual vaccine recommendations.
 * Current law, drug regimens and clinical decision-making are outside its
 * scope.
 */
export const neetBiologyReproductiveHealth: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Reproductive Health",
  slug: "reproductive-health",
  url: "/neet/biology/reproductive-health",
  canonicalIntent:
    "Teach the academic health concept of reproductive health, STI-prevention logic, birth-control method categories, MTP and amniocentesis concepts, infertility and the named ART categories, without providing personal medical advice.",

  heroChips: [
    "Current NEET UG 2026 Unit 6 scope",
    "Category and concept teaching only",
    "No personal medical, legal or contraceptive advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Reproductive Health in NEET UG 2026 is an academic unit about healthy reproductive function, STI prevention, birth-control methods, contraception, MTP and amniocentesis concepts, infertility and elementary assisted reproductive technologies including IVF, ZIFT and GIFT.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        { text: "This is not a personalised sexual-health or fertility-advice page. It does not diagnose, prescribe, or recommend a specific method, drug, procedure or legal course of action." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Human Reproduction",
      url: "/neet/biology/human-reproduction",
      relation: "prerequisite",
      description: "Reproductive anatomy, gametogenesis and the fertilisation sequence underpin contraception and ART concepts.",
    },
    {
      label: "Reproduction",
      url: "/neet/biology/reproduction",
      relation: "up",
      description: "Unit 6 umbrella and route map.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 6: Reproduction — Reproductive Health",
    topics: [
      "Need for reproductive health and prevention of sexually transmitted diseases",
      "Birth control: need and methods, contraception",
      "Medical Termination of Pregnancy (MTP)",
      "Amniocentesis",
      "Infertility",
      "Assisted reproductive technologies: IVF, ZIFT, GIFT (elementary idea)",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "reproductive-health-concept",
      title: "1. Reproductive health",
      keyIdea: "The page focuses on concepts and distinctions, not personal decision support.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At syllabus depth, reproductive health means well-being in reproductive matters and informed, responsible reproductive behaviour.",
            },
          ],
        },
      ],
    },
    {
      id: "sti-layer",
      title: "2. STI-prevention framework",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The current syllabus requires prevention of sexually transmitted diseases. This teaches the transmission-risk concept and the role of awareness, barrier protection, screening/medical care and avoidance of unsafe exposure in broad educational terms.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "This page must not diagnose an infection from symptoms." }],
        },
      ],
    },
    {
      id: "contraception-categories",
      title: "3. Birth control and contraception categories",
      keyIdea: "Categories differ by mechanism; none is presented as a personalised recommendation.",
      body: [
        {
          type: "definition",
          term: "Natural / behavioral methods",
          children: [{ text: "Methods that avoid sperm-ovum meeting by timing or withdrawal logic, with no device or hormone component. This is a category description, not effectiveness advice." }],
        },
        {
          type: "definition",
          term: "Barrier methods",
          children: [{ text: "Physical barriers reduce the probability of sperm reaching the ovum. Condoms also reduce exchange of body fluids and are therefore conceptually distinct from methods that act only on fertility." }],
        },
        {
          type: "definition",
          term: "Intrauterine devices",
          children: [{ text: "Placed in the uterus by trained healthcare professionals. NCERT groups non-medicated, copper-releasing and hormone-releasing IUDs. Category and broad mechanism only, not suitability or insertion guidance." }],
        },
        {
          type: "definition",
          term: "Hormonal methods",
          children: [{ text: "Oral pills, injectables and implants alter reproductive hormone signalling and ovulatory/uterine conditions. No dosage, brand or individual selection is provided." }],
        },
        {
          type: "definition",
          term: "Surgical methods",
          children: [{ text: "Vasectomy blocks the vas deferens; tubectomy blocks the fallopian tubes. These prevent gamete transport. They do not remove gonads and do not directly stop hormone production." }],
        },
      ],
    },
    {
      id: "mtp-concept",
      title: "4. Medical Termination of Pregnancy",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "MTP means intentional termination of pregnancy before full term. On this NEET page it is a syllabus definition and social/health concept only. Method, timing, eligibility or legal instructions are deliberately not provided because those are clinical and jurisdiction-dependent.",
            },
          ],
        },
      ],
    },
    {
      id: "amniocentesis-concept",
      title: "5. Amniocentesis",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Amniocentesis is a prenatal diagnostic sampling concept discussed in NCERT. The textbook also discusses misuse for prenatal sex determination.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "This is presented as an ethical/legal-safety boundary, not as a method for sex selection. Current legal advice is outside this page." }],
        },
      ],
    },
    {
      id: "infertility-concept",
      title: "6. Infertility",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Infertility is inability of a couple to achieve conception despite reproductive intent and may have multiple causes in either partner. This page does not diagnose causes.",
            },
          ],
        },
      ],
    },
    {
      id: "art-categories",
      title: "7. IVF, ZIFT and GIFT distinction",
      keyIdea: "IVF describes the site of fertilisation; ZIFT and GIFT describe different transferred biological material.",
      body: [
        {
          type: "definition",
          term: "IVF",
          children: [{ text: "Fertilisation of ovum and sperm occurs outside the body under laboratory conditions, after which an embryo-transfer pathway may be used." }],
        },
        {
          type: "definition",
          term: "ZIFT",
          children: [{ text: "A zygote or early embryo produced through in vitro fertilisation is transferred into the fallopian tube." }],
        },
        {
          type: "definition",
          term: "GIFT",
          children: [{ text: "Gametes are transferred into the fallopian tube so that fertilisation can occur in vivo." }],
        },
        {
          type: "note",
          tone: "info",
          children: [{ text: "IVF, ZIFT and GIFT must not be blurred into synonyms." }],
        },
      ],
    },
    {
      id: "scope-safe-comparison",
      title: "8. Scope-safe comparison",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Contraception -> reduces/prevents conception." }],
            [{ text: "MTP -> terminates an established pregnancy." }],
            [{ text: "ART -> assists fertilisation/conception." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [{ text: "These are different biological and medical categories." }],
        },
      ],
    },
  ],

  tables: [
    {
      id: "contraception-category-dataset",
      slot: "concepts",
      jump: true,
      heading: "Contraception category dataset",
      columns: ["Category", "Primary biological point", "What not to infer"],
      rows: [
        ["Natural/behavioral", "Attempts to avoid gamete meeting without device/hormone", "Not a personalised recommendation"],
        ["Barrier", "Physically limits sperm transfer; condoms also reduce fluid exchange", "Not an effectiveness ranking"],
        ["IUD", "Intrauterine device alters conditions that reduce conception probability", "No insertion guidance"],
        ["Hormonal", "Modifies reproductive hormonal/ovulatory conditions", "No drug/dose/brand"],
        ["Surgical", "Blocks gamete transport through reproductive ducts", "Not gonad removal"],
      ],
    },
    {
      id: "art-distinction-dataset",
      slot: "concepts",
      jump: true,
      heading: "ART distinction dataset",
      columns: ["Term", "What happens outside body?", "What is transferred?", "Destination/logic"],
      rows: [
        ["IVF", "Fertilisation", "Resulting embryo enters an embryo-transfer pathway", "Laboratory fertilisation"],
        ["ZIFT", "Fertilisation", "Zygote/early embryo", "Fallopian tube"],
        ["GIFT", "No laboratory fertilisation requirement in the term itself", "Gametes", "Fallopian tube for in-vivo fertilisation"],
      ],
    },
  ],

  mistakes: [
    {
      id: "all-methods-hormonal",
      mistake: "All contraception methods act hormonally.",
      why: [{ type: "paragraph", children: [{ text: "Barrier, IUD, hormonal, behavioral and surgical categories differ in mechanism." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Learn the five contraception categories and their distinct mechanisms." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "vasectomy-removes-testes",
      mistake: "Vasectomy removes testes.",
      why: [{ type: "paragraph", children: [{ text: "It blocks the vas deferens, not gonad removal." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Learn vasectomy and tubectomy as duct-blocking procedures, not gonad removal." }] }],
      errorType: "recall-gap",
    },
    {
      id: "ivf-zift-gift-synonyms",
      mistake: "IVF, ZIFT and GIFT are synonyms.",
      why: [{ type: "paragraph", children: [{ text: "Fertilisation site and transferred material differ across the three terms." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Map each term to its site of fertilisation and its transferred biological material separately." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "mtp-as-contraception",
      mistake: "MTP treated as contraception.",
      why: [{ type: "paragraph", children: [{ text: "Termination and prevention of conception are distinct categories." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep contraception (prevention) and MTP (termination) as separate concepts." }] }],
      errorType: "decision-error",
    },
    {
      id: "textbook-concept-as-advice",
      mistake: "Textbook concept used as medical advice.",
      why: [{ type: "paragraph", children: [{ text: "This page is educational only and must not be read as personal guidance." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat every category and concept here as syllabus content, not as a recommendation for an individual case." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Reproduction", url: "/neet/biology/reproduction", relation: "up" },
    { label: "Human Reproduction", url: "/neet/biology/human-reproduction", relation: "prerequisite" },
    { label: "Human Health and Disease", url: "/neet/biology/human-health-disease", relation: "related" },
    { label: "Genetics", url: "/neet/biology/genetics", relation: "forward" },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents", "ncert-exemplar-index"],
  sourceNote:
    "Aligned to current NCERT Reproductive Health (https://ncert.nic.in/textbook/pdf/lebo103.pdf) and the exact NEET UG 2026 Unit 6 topic list. Current law, drug regimens and clinical decision-making are not derived from textbook wording and are outside this page's scope.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Reproductive Health 2026: Contraception, MTP, IVF, ZIFT, GIFT",
    description:
      "Learn the verified NEET UG 2026 Reproductive Health scope with contraception categories, MTP and amniocentesis concepts, infertility and IVF/ZIFT/GIFT distinctions.",
  },
};

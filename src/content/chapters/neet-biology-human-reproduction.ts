import type { ChapterContent } from "@/content/types";

/**
 * Human Reproduction — T06 production content.
 *
 * Medical safety: this is an educational NEET Biology resource only. It does
 * not provide fertility diagnosis, pregnancy advice, menstrual-health
 * interpretation, obstetric care, treatment or contraception selection.
 */
export const neetBiologyHumanReproduction: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Human Reproduction",
  slug: "human-reproduction",
  url: "/neet/biology/human-reproduction",
  canonicalIntent:
    "Teach human reproductive systems, gametogenesis, menstrual-cycle relationships, fertilisation, blastocyst formation, implantation, pregnancy/placenta, parturition and lactation at NEET/NCERT depth, keeping formation, release, fusion and implantation as separate events.",

  heroChips: [
    "Current NEET UG 2026 Unit 6 scope",
    "NCERT-aligned anatomy, gametogenesis and cycle logic",
    "No personalised fertility or pregnancy guidance",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Human Reproduction in NEET UG 2026 follows a sequence from reproductive anatomy and gametogenesis to the menstrual cycle, fertilisation, cleavage, blastocyst formation and implantation, followed by elementary pregnancy, placenta, parturition and lactation. The decisive skill is keeping formation, release, fusion and implantation as separate events.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "This page is educational only. It does not provide fertility diagnosis, pregnancy advice, menstrual-health interpretation, obstetric care, treatment or contraception selection.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Meiosis and cell-division concepts underpin spermatogenesis and oogenesis.",
    },
    {
      label: "Chemical Coordination",
      url: "/neet/biology/chemical-coordination",
      relation: "prerequisite",
      description: "Hormone-signalling concepts (GnRH, LH, FSH) support the menstrual-cycle hormone map.",
    },
    {
      label: "Reproduction",
      url: "/neet/biology/reproduction",
      relation: "up",
      description: "Unit 6 umbrella and route map.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 6: Reproduction — Human Reproduction",
    topics: [
      "Male and female reproductive systems",
      "Microscopic anatomy of testis and ovary",
      "Gametogenesis: spermatogenesis and oogenesis",
      "Menstrual cycle",
      "Fertilisation, embryo development up to blastocyst formation",
      "Implantation",
      "Pregnancy and placenta formation (elementary idea)",
      "Parturition (elementary idea)",
      "Lactation (elementary idea)",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "male-reproductive-system",
      title: "1. Male reproductive system",
      keyIdea: "Seminiferous tubules, Sertoli cells and Leydig cells each have distinct roles in sperm production and hormone support.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The system includes testes, accessory ducts, accessory glands and external genitalia." },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Seminiferous tubules are the sperm-producing compartment." }],
            [{ text: "Sertoli cells support germ-cell development." }],
            [{ text: "Interstitial/Leydig cells between tubules produce androgens." }],
            [{ text: "Sperm move through the male duct system before ejaculation." }],
          ],
        },
      ],
    },
    {
      id: "female-reproductive-system",
      title: "2. Female reproductive system",
      keyIdea: "The oviduct sequence and the three uterine layers are the key structural relationships at NCERT depth.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The system includes ovaries, oviducts, uterus, cervix, vagina, external genitalia and mammary glands." },
          ],
        },
        {
          type: "definition",
          term: "Oviduct sequence",
          children: [{ text: "Infundibulum -> ampulla -> isthmus -> uterus." }],
        },
        {
          type: "list",
          items: [
            [{ text: "Perimetrium: outer layer." }],
            [{ text: "Myometrium: muscular middle layer." }],
            [{ text: "Endometrium: inner lining involved in cyclical changes and implantation." }],
          ],
        },
      ],
    },
    {
      id: "spermatogenesis",
      title: "3. Spermatogenesis",
      keyIdea: "Spermiogenesis (shape change) and spermiation (release) are different events in the same overall process.",
      body: [
        {
          type: "definition",
          term: "Spermatogenesis sequence",
          children: [
            {
              text: "Spermatogonium (2n) -> primary spermatocyte (2n) -> meiosis I -> secondary spermatocytes (n) -> meiosis II -> spermatids (n) -> spermiogenesis -> spermatozoa.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Spermiation is the release of mature spermatozoa from Sertoli-cell association into the seminiferous-tubule lumen. Do not confuse spermiogenesis with spermiation.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Hormonal relationship at syllabus depth: hypothalamic GnRH stimulates the anterior pituitary to release LH and FSH. LH acts on Leydig cells to support androgen secretion; FSH acts through Sertoli-cell support; androgens support spermatogenesis.",
            },
          ],
        },
      ],
    },
    {
      id: "oogenesis",
      title: "4. Oogenesis",
      keyIdea: "Oogenesis begins before birth; the secondary oocyte completes meiosis II only after fertilisation.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Oogenesis begins before birth. Oogonia enter meiosis and become primary oocytes arrested in prophase I. From puberty, follicular development can resume cyclically. Before ovulation, completion of meiosis I produces a large secondary oocyte plus a small first polar body. The secondary oocyte is released at ovulation and completes meiosis II only after fertilisation.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [{ text: "High-risk principle: unequal cytokinesis preserves most cytoplasm in the developing ovum lineage." }],
        },
      ],
    },
    {
      id: "menstrual-cycle",
      title: "5. Menstrual-cycle event map",
      keyIdea: "Use four functional stages rather than memorising isolated hormone names.",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Menstrual phase: shedding occurs when the prior cycle has not established pregnancy." }],
            [{ text: "Follicular/proliferative phase: developing follicles and rising ovarian estrogen are associated with endometrial rebuilding." }],
            [{ text: "Ovulation: the mid-cycle LH surge triggers rupture of the mature follicle and release of the secondary oocyte." }],
            [{ text: "Luteal/secretory phase: corpus luteum secretes progesterone that supports the endometrium. In the absence of fertilisation, corpus-luteum regression contributes to the next menstrual phase." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "The page must not turn textbook average timings into personal cycle interpretation." }],
        },
      ],
    },
    {
      id: "fertilisation-implantation",
      title: "6. Fertilisation, cleavage and implantation",
      keyIdea: "Implantation means embedding of the blastocyst in uterine endometrium; it is not another name for fertilisation.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Human fertilisation occurs in the ampullary region of the oviduct when viable sperm and the secondary oocyte meet." },
          ],
        },
        {
          type: "definition",
          term: "Development sequence",
          children: [{ text: "Sperm-oocyte fusion -> zygote -> cleavage -> morula -> blastocyst -> uterine attachment -> implantation." }],
        },
        {
          type: "list",
          items: [
            [{ text: "Blastocyst architecture: outer trophoblast." }],
            [{ text: "Blastocyst architecture: inner cell mass." }],
          ],
        },
      ],
    },
    {
      id: "pregnancy-placenta",
      title: "7. Pregnancy and placenta",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At elementary syllabus depth, placenta is a maternal-fetal exchange and endocrine interface. It supports exchange of gases, nutrients and wastes plus supports pregnancy, without expanding into clinical obstetrics.",
            },
          ],
        },
      ],
    },
    {
      id: "parturition",
      title: "8. Parturition",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Parturition is childbirth and is controlled by coordinated neuroendocrine signalling. At NCERT depth, fetal/placental signals, uterine contractions and oxytocin-linked positive feedback are the relevant relationship.",
            },
          ],
        },
      ],
    },
    {
      id: "lactation",
      title: "9. Lactation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mammary glands differentiate during pregnancy and produce milk after childbirth. Colostrum is the early secretion and is immunologically important at NCERT depth. This statement is educational, not infant-feeding advice.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "gametogenesis-comparison",
      slot: "concepts",
      jump: true,
      heading: "Gametogenesis comparison: spermatogenesis vs oogenesis",
      columns: ["Feature", "Spermatogenesis", "Oogenesis"],
      rows: [
        ["Initiation", "At puberty", "Begins before birth"],
        ["Primary meiotic cell", "Primary spermatocyte", "Primary oocyte"],
        ["Cytokinesis", "Broadly equal", "Strongly unequal"],
        ["Functional products from one primary cell", "Four spermatid/sperm lineage products", "One large ovum lineage product plus polar bodies"],
        ["Meiotic arrest", "Not the defining NCERT feature", "Primary-oocyte prophase I arrest; secondary-oocyte meiosis II completion linked to fertilisation"],
        ["Final maturation term", "Spermiogenesis", "Oocyte/follicle maturation"],
      ],
    },
    {
      id: "menstrual-cycle-dataset",
      slot: "concepts",
      jump: true,
      heading: "Menstrual-cycle dataset",
      columns: ["Stage", "Ovary", "Dominant relationship", "Uterus"],
      rows: [
        ["Menstrual", "Corpus luteum has regressed", "Low ovarian support triggers shedding context", "Endometrium sheds"],
        ["Follicular", "Follicle develops", "FSH/LH support; estrogen rises", "Endometrium proliferates"],
        ["Ovulation", "Mature follicle ruptures", "LH surge", "Receptive cycle continues"],
        ["Luteal", "Corpus luteum active", "Progesterone prominent", "Endometrium maintained"],
      ],
    },
  ],

  mistakes: [
    {
      id: "spermiogenesis-equals-spermiation",
      mistake: "Spermiogenesis equals spermiation.",
      why: [{ type: "paragraph", children: [{ text: "Shape/maturation and release are different events." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Spermiogenesis transforms spermatids into spermatozoa; spermiation releases them into the tubule lumen." }] }],
      errorType: "recall-gap",
    },
    {
      id: "oogenesis-begins-at-puberty",
      mistake: "Oogenesis begins at puberty.",
      why: [{ type: "paragraph", children: [{ text: "It begins during fetal life." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Learn that oogonia become arrested primary oocytes before birth, and cyclical development resumes only from puberty." }] }],
      errorType: "recall-gap",
    },
    {
      id: "lh-surge-causes-menstruation",
      mistake: "LH surge causes menstruation.",
      why: [{ type: "paragraph", children: [{ text: "LH surge is linked to ovulation, not menstruation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Map LH surge to ovulation and corpus-luteum regression to the onset of the next menstrual phase." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "fertilisation-implantation-one-event",
      mistake: "Fertilisation and implantation are one event.",
      why: [{ type: "paragraph", children: [{ text: "Fertilisation precedes cleavage/blastocyst formation and implantation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the fertilisation -> cleavage -> morula -> blastocyst -> implantation order distinct." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "placenta-mechanical-only",
      mistake: "Placenta treated only as a mechanical attachment.",
      why: [{ type: "paragraph", children: [{ text: "It is an exchange and endocrine interface at elementary depth." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Learn placenta as exchange of gases, nutrients and wastes plus its endocrine role." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    { label: "Reproduction", url: "/neet/biology/reproduction", relation: "up" },
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "prerequisite" },
    { label: "Chemical Coordination", url: "/neet/biology/chemical-coordination", relation: "prerequisite" },
    { label: "Sexual Reproduction in Flowering Plants", url: "/neet/biology/sexual-reproduction-plants", relation: "related" },
    { label: "Reproductive Health", url: "/neet/biology/reproductive-health", relation: "forward" },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents", "ncert-exemplar-index"],
  sourceNote:
    "Aligned to the current NCERT Human Reproduction chapter (https://ncert.nic.in/textbook/pdf/lebo102.pdf) and the verified NEET UG 2026 Unit 6 wording. Long textbook wording and diagrams are not reproduced.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Human Reproduction 2026: Gametogenesis, Cycle and Implantation",
    description:
      "Study the current NEET UG 2026 Human Reproduction scope with anatomy, spermatogenesis vs oogenesis, menstrual-cycle logic and fertilisation-to-implantation maps.",
  },
};

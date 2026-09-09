import type { ChapterContent } from "@/content/types";

/**
 * Reproduction — T06 production content.
 *
 * This route is a CONTEXTUAL_UMBRELLA / navigation layer for NEET UG 2026
 * Unit 6. It does not resurrect an older standalone "Reproduction in
 * Organisms" chapter as current scope. The verified current Unit 6 topics
 * are Sexual Reproduction in Flowering Plants, Human Reproduction and
 * Reproductive Health, each owned by its own focused chapter page.
 */
export const neetBiologyReproduction: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Reproduction",
  slug: "reproduction",
  url: "/neet/biology/reproduction",
  canonicalIntent:
    "Provide the current Unit 6 route map across flowering-plant reproduction, human reproduction and reproductive health, and route each query to the correct focused chapter without duplicating child-topic content.",

  heroChips: [
    "Contextual umbrella for NEET UG 2026 Unit 6",
    "Routes to the three verified current child topics",
    "No invented weightage, PYQ counts or trend claims",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET UG 2026, the current Reproduction unit consists of Sexual Reproduction in Flowering Plants, Human Reproduction and Reproductive Health. This route is a navigation and relationship page. It does not restore the older standalone Reproduction in Organisms chapter as current official scope.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page is a contextual umbrella. It does not duplicate the mechanism-level content owned by the three focused child chapters.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Stabilise cell division and cell-structure concepts before gametogenesis and gamete-fusion topics.",
    },
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "related",
      description: "Lateral topic that follows the reproduction sequence through inheritance.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the Biology chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 6: Reproduction",
    topics: [
      "Sexual reproduction in flowering plants",
      "Human Reproduction",
      "Reproductive Health",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "current-unit-6-ownership",
      title: "1. Current Unit 6 ownership",
      keyIdea: "The umbrella routes to three verified current child topics and does not own their mechanism-level content.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Reproduction umbrella -> Sexual Reproduction in Flowering Plants -> Human Reproduction -> Reproductive Health." },
          ],
        },
      ],
    },
    {
      id: "shared-conceptual-sequence",
      title: "2. Shared conceptual sequence",
      keyIdea: "Gamete formation -> transfer/meeting opportunity -> fertilisation -> post-fertilisation development is a conceptual bridge, not a claim of identical structures across taxa.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Across sexual reproduction, a useful high-level sequence is: gamete formation, then transfer or meeting opportunity, then fertilisation, then post-fertilisation development. This is a conceptual bridge, not a claim that plants and humans use the same structures or control mechanisms.",
            },
          ],
        },
      ],
    },
    {
      id: "plant-route-boundary",
      title: "3. Plant route boundary",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Flowering-plant reproduction owns anther and ovule development, pollen and embryo-sac formation, pollination, pollen-pistil interaction, double fertilisation, seed/fruit formation, apomixis, parthenocarpy and polyembryony.",
            },
          ],
        },
      ],
    },
    {
      id: "human-route-boundary",
      title: "4. Human route boundary",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Human Reproduction owns male/female systems, testis/ovary microscopic anatomy, spermatogenesis, oogenesis, menstrual-cycle relationships, fertilisation, blastocyst formation, implantation, pregnancy/placenta at elementary depth, parturition and lactation.",
            },
          ],
        },
      ],
    },
    {
      id: "reproductive-health-boundary",
      title: "5. Reproductive Health boundary",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Reproductive Health owns the academic public-health and reproductive-technology layer: reproductive-health need, STI prevention concept, birth-control categories, MTP concept, amniocentesis, infertility and elementary ART categories named in the official syllabus.",
            },
          ],
        },
      ],
    },
    {
      id: "high-risk-distinctions",
      title: "6. High-risk distinctions",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Gamete formation vs fertilisation: gametes must exist before fusion can occur." }],
            [{ text: "Pollination vs fertilisation: pollination transfers pollen; it is not gamete fusion." }],
            [{ text: "Ovulation vs fertilisation: ovulation releases the secondary oocyte; fertilisation is sperm-oocyte fusion." }],
            [{ text: "Fertilisation vs implantation: fertilisation creates the zygote; implantation embeds the blastocyst in uterine endometrium." }],
            [{ text: "Reproductive biology vs reproductive health: the former explains mechanisms; the latter addresses health concepts and reproductive technologies at syllabus depth." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "The route must never imply that an older broad asexual-reproduction chapter is part of current 2026 Unit 6 merely because it exists in older textbook editions." },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "route-selection-dataset",
      slot: "scope",
      jump: true,
      heading: "Route-selection dataset",
      columns: ["Student need", "Correct owner", "Why"],
      rows: [
        ["Pollen, embryo sac, double fertilisation", "/neet/biology/sexual-reproduction-plants", "Flowering-plant reproductive mechanism"],
        ["Spermatogenesis, oogenesis, menstrual cycle", "/neet/biology/human-reproduction", "Human reproductive mechanism"],
        ["Contraception categories, MTP concept, ART", "/neet/biology/reproductive-health", "Reproductive-health and technology layer"],
        ["Overall Unit 6 map", "/neet/biology/reproduction", "Umbrella only"],
      ],
    },
    {
      id: "shared-stage-dataset",
      slot: "concepts",
      heading: "Shared-stage framework",
      columns: ["Stage", "Description"],
      rows: [
        ["Stage 1", "Gamete formation"],
        ["Stage 2", "Gamete transfer or meeting"],
        ["Stage 3", "Fertilisation"],
        ["Stage 4", "Post-fertilisation development"],
      ],
      note: "Mechanisms and structures are taxon-specific; this stage list is a conceptual bridge only.",
    },
  ],

  mistakes: [
    {
      id: "pollination-equals-fertilisation",
      mistake: "Pollination equals fertilisation.",
      why: [{ type: "paragraph", children: [{ text: "Pollination is transfer of pollen; fertilisation is gamete fusion." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep pollination and fertilisation as separate sequential events." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "ovulation-equals-fertilisation",
      mistake: "Ovulation equals fertilisation.",
      why: [{ type: "paragraph", children: [{ text: "Release of the secondary oocyte and its fusion with a sperm are different events." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Treat ovulation as release and fertilisation as fusion." }] }],
      errorType: "recall-gap",
    },
    {
      id: "implantation-at-fertilisation",
      mistake: "Implantation happens at fertilisation.",
      why: [{ type: "paragraph", children: [{ text: "Blastocyst formation precedes implantation, which occurs later." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Study the fertilisation -> cleavage -> blastocyst -> implantation sequence in order." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "old-reproduction-in-organisms",
      mistake: "Treating the older standalone Reproduction in Organisms chapter as current scope.",
      why: [{ type: "paragraph", children: [{ text: "This route only maps the three verified Unit 6 topics for NEET UG 2026." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use only sexual reproduction in flowering plants, human reproduction and reproductive health as current Unit 6 scope." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    { label: "Biology Hub", url: "/neet/biology", relation: "up" },
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "prerequisite" },
    { label: "Genetics", url: "/neet/biology/genetics", relation: "related" },
    { label: "Sexual Reproduction in Flowering Plants", url: "/neet/biology/sexual-reproduction-plants", relation: "forward" },
    { label: "Human Reproduction", url: "/neet/biology/human-reproduction", relation: "forward" },
    { label: "Reproductive Health", url: "/neet/biology/reproductive-health", relation: "forward" },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents"],
  sourceNote:
    "Verified against the NMC/NTA NEET UG 2026 syllabus Unit 6 wording and current NCERT Class XII contents. NCERT Sexual Reproduction in Flowering Plants, Human Reproduction and Reproductive Health chapters are the child-topic teaching sources; the older Reproduction in Organisms material is not used to create current 2026 relevance.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Reproduction 2026: Plant, Human and Health Unit Map",
    description:
      "See the verified NEET UG 2026 Reproduction unit map and route correctly to flowering-plant reproduction, human reproduction and reproductive health.",
  },
};

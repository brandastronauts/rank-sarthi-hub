import type { ChapterContent } from "@/content/types";

/**
 * Animal Kingdom — N02 production content.
 *
 * Evidence discipline:
 * - No weightage, trend, PYQ-count or priority claims are asserted.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until Zoology SME review is recorded.
 * - Scope check (verified against the current NEET UG 2026 syllabus, Unit 1 —
 *   Diversity in Living World): nonchordates up to phyla level and chordates
 *   up to classes level, with salient features and examples, are explicitly
 *   required. Detailed nonchordate-phylum and chordate-class example tables
 *   are not populated here because examples require separate NCERT/SME
 *   verification; this record defines the content model instead.
 */
export const neetBiologyAnimalKingdom: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Animal Kingdom",
  slug: "animal-kingdom",
  url: "/neet/biology/animal-kingdom",
  canonicalIntent:
    "Teach animal classification as a decision system based on the diagnostic criteria used in NCERT, then map nonchordates to phyla and chordates to classes at the verified current-syllabus depth.",

  heroChips: [
    "Mapped to NEET UG 2026, Unit 1",
    "Nonchordates to phyla, chordates to classes",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Animal Kingdom for NEET should be learned as a classification decision system, not as an uncontrolled species list.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "First identify the structural criteria that separate groups, including level of organisation, symmetry, germ layers, coelom, segmentation and notochord where relevant. Then map the organism to the NCERT phylum or chordate class using only verified salient features and examples.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages." }],
    },
  ],

  prerequisites: [
    {
      label: "Living World",
      url: "/neet/biology/living-world",
      relation: "prerequisite",
      description: "Establish what counts as living and why classification is needed.",
    },
    {
      label: "Biological Classification",
      url: "/neet/biology/biological-classification",
      relation: "prerequisite",
      description: "Understand the five-kingdom framework before entering animal-group detail.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the NEET Biology chapter set.",
    },
    {
      label: "Biology syllabus",
      url: "/neet/syllabus/biology",
      relation: "up",
      description: "Official current-scope reference for every Biology unit.",
    },
  ],

  syllabusMapping: {
    unit: "Unit 1: Diversity in Living World",
    topics: [
      "Classification of animals with salient features",
      "Nonchordate classification up to phyla level",
      "Chordate classification up to classes level",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "classification-sequence",
      title: "1. Classification begins before the phylum name",
      keyIdea:
        "A consistent diagnostic sequence works better than trying to remember species examples first.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A safer sequence is: level of organisation, then symmetry, then germ-layer status, then body-cavity relationship, then segmentation, then notochord, then group-specific features, then phylum or class. Not every criterion applies equally to every group, but this sequence creates a consistent diagnostic habit.",
            },
          ],
        },
      ],
    },
    {
      id: "level-of-organisation",
      title: "2. Level of organisation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "At NCERT depth, animal groups can be distinguished through cellular, tissue, organ and organ-system levels of organisation.",
            },
          ],
        },
      ],
    },
    {
      id: "symmetry",
      title: "3. Symmetry",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Distinguish asymmetry, radial symmetry and bilateral symmetry, then connect the term to the body plan described. A diagram item should be read from the actual arrangement rather than the organism's memorised name.",
            },
          ],
        },
      ],
    },
    {
      id: "germ-layers",
      title: "4. Germ layers",
      keyIdea: "Diploblastic and triploblastic organisation belongs to embryonic germ-layer organisation, not an arbitrary count.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Teach diploblastic vs triploblastic organisation at NCERT depth as an embryonic germ-layer distinction, not merely a count of layers." },
          ],
        },
      ],
    },
    {
      id: "coelom",
      title: "5. Coelom",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Distinguish the textbook relationships among acoelomate, pseudocoelomate and coelomate conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "segmentation",
      title: "6. Segmentation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Segmentation is a diagnostic feature in selected groups and should not be transferred indiscriminately to every animal with repeated external structures. Ask whether the repeated organisation is the relevant metameric pattern described in NCERT.",
            },
          ],
        },
      ],
    },
    {
      id: "notochord-branch-point",
      title: "7. Notochord as a major branch point",
      keyIdea: "The presence of a notochord at the relevant developmental stage is the key textbook distinction between chordates and nonchordates.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Students should not substitute \"vertebral column present\" as the only defining test, because chordate classification begins from notochord context.",
            },
          ],
        },
      ],
    },
    {
      id: "nonchordate-phyla",
      title: "8. Nonchordate phyla",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A structured table with one row per current NCERT nonchordate phylum should contain only source-verified fields: phylum, level of organisation, symmetry, germ layers, body cavity, segmentation, diagnostic feature and two verified examples. This chapter does not publish that table until every example and distinction has passed the NCERT/SME source check, and defines the content model without inventing example species.",
            },
          ],
        },
      ],
    },
    {
      id: "chordate-classes",
      title: "9. Chordate classes",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A separate table for the chordate classes required by the NCERT/current syllabus relationship should use fields such as class, habitat/context, body covering, respiration, circulation/heart distinction where current NCERT teaches it, reproduction cue, and verified examples. Examples are source-controlled, not generated from competitors.",
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
        ["What is the chapter about?", "Classifying animals using structural criteria, with nonchordates mapped to phyla and chordates mapped to classes, as verified in NEET UG 2026 Unit 1."],
        ["What is the central method choice?", "Apply the diagnostic sequence — organisation, symmetry, germ layers, coelom, segmentation, notochord — before trying to recall a species example."],
        ["Where do most mistakes begin?", "Memorising examples without being able to classify an unfamiliar description, and choosing a group from one shared feature instead of the deciding feature."],
        ["What should come before Animal Kingdom?", "Living World and Biological Classification, for classification criteria and the five-kingdom framework."],
        ["What comes after it?", "Structural Organisation in Animals, which develops focused animal-tissue and system content."],
      ],
      note: "The official NEET syllabus defines content scope. It does not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "classification-decision-sequence",
      jump: true,
      slot: "concepts",
      heading: "Classification decision sequence",
      columns: ["Step", "Criterion", "Purpose"],
      rows: [
        ["1", "Level of organisation", "Separates cellular, tissue, organ and organ-system grades"],
        ["2", "Symmetry", "Separates asymmetry, radial and bilateral body plans"],
        ["3", "Germ layers", "Separates diploblastic and triploblastic organisation"],
        ["4", "Body cavity (coelom)", "Separates acoelomate, pseudocoelomate and coelomate conditions"],
        ["5", "Segmentation", "Identifies groups with the relevant metameric pattern"],
        ["6", "Notochord", "Separates the chordate branch from the nonchordate branch"],
      ],
      note: "Not every criterion applies equally to every group; this is a diagnostic habit, not a rigid checklist.",
    },
  ],

  mistakes: [
    {
      id: "examples-without-classification-skill",
      mistake: "Memorises examples but cannot classify an unknown description.",
      why: [{ type: "paragraph", children: [{ text: "Recalling named organisms does not build the criterion-based reasoning needed for an unfamiliar description." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the criterion-first decision tree before trying to recall a matching example." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "forgets-diagnostic-vocabulary",
      mistake: "Forgets phylum/class diagnostic vocabulary.",
      why: [{ type: "paragraph", children: [{ text: "Without precise terms for symmetry, coelom or segmentation, criteria cannot be applied correctly." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Blind-retrieve criterion definitions before looking at examples." }] }],
      errorType: "recall-gap",
    },
    {
      id: "misses-diagnostic-wording",
      mistake: "Misses symmetry/coelom/notochord wording in the question.",
      why: [{ type: "paragraph", children: [{ text: "These diagnostic cues are often stated precisely and can be overlooked under time pressure." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Underline diagnostic cues before selecting an answer." }] }],
      errorType: "execution-error",
    },
    {
      id: "single-shared-feature",
      mistake: "Chooses a group from one shared feature.",
      why: [{ type: "paragraph", children: [{ text: "Two groups can share one trait while differing on the deciding feature." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Require the deciding feature, not just a shared cue, before finalising the comparison." }] }],
      errorType: "decision-error",
    },
    {
      id: "modern-taxonomy-claim",
      mistake: "Uses a modern-taxonomy claim not present in NCERT.",
      why: [{ type: "paragraph", children: [{ text: "Modern phylogenetic rearrangements are outside the verified current official scope for this chapter." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Hold it outside current exam scope until separately verified." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Plant Kingdom", url: "/neet/biology/plant-kingdom", relation: "related", description: "The parallel classification chapter for the plant groups named in Unit 1." },
    { label: "Structural Organisation in Animals", url: "/neet/biology/structural-organisation-animals", relation: "forward", description: "Continue into focused animal-tissue and organ-system content." },
  ],

  sources: ["ncert-biology-11-contents", "nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Verified against the NEET UG 2026 syllabus (Unit 1: Diversity in Living World) and the official NCERT Biology Class XI chapter Animal Kingdom. Nonchordate-phylum and chordate-class example tables require NCERT/SME source verification before publication; this record defines the content model without inventing example species.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Preferred reviewer: postgraduate Zoology or Life Sciences specialist with animal-classification competence.",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Animal Kingdom: Phyla, Chordates & Classification | Rank Sarthi",
    description:
      "Learn NEET Animal Kingdom through symmetry, germ layers, coelom, segmentation, notochord and source-controlled nonchordate phyla and chordate classes.",
  },
};

import type { ChapterContent } from "@/content/types";

/**
 * Sets and Relations — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Main vs Advanced scope differences (Cartesian product / De Morgan's laws
 *   named explicitly only in Advanced wording) are preserved, not flattened.
 */
export const jeeMathematicsSetsRelations: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Sets and Relations",
  slug: "sets-relations",
  url: "/jee/mathematics/sets-relations",
  canonicalIntent:
    "Understand sets, set operations and relations, determine relation properties, and recognise when a relation is an equivalence relation.",

  heroChips: [
    "Listed in both JEE Main 2026 and JEE Advanced 2026",
    "Equivalence relation requires all three properties, never two",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Sets describe collections of objects. Relations describe which ordered pairs of objects satisfy a chosen condition.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Solve these questions by first fixing the universe and representation, then performing the required set operation or testing the relation separately for reflexivity, symmetry and transitivity.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "A relation is an equivalence relation only when all three properties, reflexive, symmetric and transitive, hold together.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Cartesian product and De Morgan's laws are explicit JEE Advanced 2026 syllabus wording; the JEE Main 2026 wording does not name them as individually explicit bullets. This page does not publish invented weightage or trend claims.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Sets, Relations and Functions",
    topics: [
      "Set representation, union, intersection, complement, power set",
      "Relations, types of relations, equivalence relations",
      "Cartesian product of finite sets (explicit Advanced wording)",
      "De Morgan's laws (explicit Advanced wording)",
      "Domain and codomain of a relation",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "fix-universe",
      title: "1. Fix the underlying set or universal set first",
      keyIdea: "Every set operation depends on a declared universe.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Identify the underlying set, or the universal set for a complement, before converting a description into explicit elements or conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "select-operation",
      title: "2. Select the correct set operation",
      keyIdea: "Union, intersection, difference and complement are distinct operations with distinct traps.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For set questions, select union, intersection, difference or complement based on the wording, and keep the declared universal set fixed throughout a complement calculation.",
            },
          ],
        },
      ],
    },
    {
      id: "identify-relation",
      title: "3. Identify the relation as pairs or as a rule",
      keyIdea: "A relation from A to B is any subset of A × B; a relation on A is a subset of A × A.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For relation questions, identify the ordered pairs directly when the relation is given explicitly, or identify the defining rule when it is given by a condition.",
            },
          ],
        },
      ],
    },
    {
      id: "test-properties-separately",
      title: "4. Test reflexive, symmetric and transitive separately",
      keyIdea: "Never infer equivalence from only two of the three conditions.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Reflexive requires (a,a) in R for every a in A. Symmetric requires that (a,b) in R implies (b,a) in R. Transitive requires that (a,b) and (b,c) in R imply (a,c) in R. All three must be verified independently before calling a relation an equivalence relation.",
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
          "Set representation and operations, and relation properties up to equivalence relations, for both the JEE Main 2026 and JEE Advanced 2026 Mathematics syllabus.",
        ],
        [
          "What is the central method choice?",
          "Fix the universe and representation, then perform the required set operation or test the relation for reflexivity, symmetry and transitivity.",
        ],
        [
          "Where do most mistakes begin?",
          "Treating A\\B and B\\A as equal, taking a complement without declaring the universal set, and calling a relation equivalence before all three tests pass.",
        ],
        [
          "What should come before this chapter?",
          "No Functions knowledge is assumed; basic symbolic notation, equality and inequality, logical statements and ordered pairs are sufficient.",
        ],
        [
          "What comes after it?",
          "Functions builds directly on sets and relations; Probability uses set-based reasoning further along the syllabus.",
        ],
      ],
      note: "Official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Sets and Relations",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Set representation and operations",
          "Explicitly includes set representation, union, intersection, complement and power set.",
          "Explicitly includes finite and infinite sets, set algebra, intersection, complement, difference and symmetric difference.",
          "Both papers cover core set operations; treat symmetric difference as explicit Advanced-wording detail.",
        ],
        [
          "Cartesian product",
          "Not named as an individually explicit Main syllabus bullet.",
          "Explicitly includes Cartesian products of finite sets.",
          "Do not describe Cartesian product as an explicit Main bullet even though it is used to define relations.",
        ],
        [
          "De Morgan's laws",
          "Not named as an individually explicit Main syllabus bullet.",
          "Explicitly listed.",
          "Keep this distinction visible when teaching complements of unions and intersections.",
        ],
        [
          "Relations and equivalence relations",
          "Explicitly includes relations, types of relations and equivalence relations.",
          "Explicitly includes relations, domain and codomain, and equivalence relations.",
          "Test reflexive, symmetric and transitive separately for every relation question in either paper.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, linked in the sources section below.",
    },
    {
      id: "formula-theorem-records",
      jump: true,
      slot: "formulas",
      heading: "Formula and theorem records",
      columns: ["Record", "Statement", "Conditions", "Use when", "Trap"],
      rows: [
        [
          "De Morgan 1",
          "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ",
          "Complements taken relative to the same universal set",
          "Negating a union",
          "Changing the universal set midway through the problem",
        ],
        [
          "De Morgan 2",
          "(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
          "Same universal set",
          "Negating an intersection",
          "Confusing union and intersection",
        ],
        [
          "Difference",
          "A \\ B = A ∩ Bᶜ",
          "Complement relative to the declared universal set U",
          "Rewriting differences",
          "Forgetting the direction of the difference",
        ],
        [
          "Symmetric difference",
          "A Δ B = (A\\B) ∪ (B\\A)",
          "Standard set definition",
          "Advanced set algebra",
          "Treating common elements of A and B as included",
        ],
        [
          "Cartesian product size",
          "|A × B| = |A| × |B|",
          "A and B finite",
          "Counting ordered pairs",
          "Using it for infinite cardinalities without further context",
        ],
      ],
      note: "Every record's validity condition must stay adjacent to the statement when this table is displayed.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model"],
      rows: [
        ["Membership or set-algebra question", "Element-wise reasoning or a named identity"],
        ["Venn-style finite question", "Partition the universe before counting"],
        ["Relation given by pairs", "Inspect ordered pairs directly"],
        ["Relation given by a rule", "Prove each required property algebraically"],
        ["Equivalence question", "Test reflexive, symmetric and transitive separately"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-parity-relation",
      slot: "concepts",
      heading: "Worked reasoning: parity relation on a finite set",
      jump: true,
      concepts: [
        {
          id: "parity-equivalence",
          title: "Testing all three properties before calling a relation an equivalence relation",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Problem: on A = {1,2,3,4}, define aRb when a and b have the same parity. Determine whether R is an equivalence relation. A has two odd and two even elements.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Method choice: the relation is rule-defined, so test all three equivalence conditions rather than inspecting individual pairs only.",
                },
              ],
            },
            {
              type: "list",
              items: [
                [{ text: "Reflexive: every integer has the same parity as itself." }],
                [{ text: "Symmetric: if a has the same parity as b, then b has the same parity as a." }],
                [{ text: "Transitive: if a and b have the same parity, and b and c have the same parity, then a and c have the same parity." }],
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Therefore R is an equivalence relation. Its equivalence classes are {1,3} and {2,4}. Validity check: the classes are disjoint and together cover A.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "difference-not-symmetric",
      mistake: "Treating A \\ B and B \\ A as equal.",
      why: [{ type: "paragraph", children: [{ text: "Set difference depends on order; A \\ B contains elements in A but not in B, which is generally a different set from B \\ A." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Rewrite the difference as A ∩ Bᶜ relative to the declared universal set and check direction before simplifying." }] }],
      errorType: "execution-error",
    },
    {
      id: "complement-without-universe",
      mistake: "Taking a complement without declaring the universal set U.",
      why: [{ type: "paragraph", children: [{ text: "A complement is only defined relative to a declared universal set; without it the complement is ambiguous." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the universal set explicitly before computing any complement." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "symmetry-single-pair",
      mistake: "Checking symmetry only for one pair instead of the general case.",
      why: [{ type: "paragraph", children: [{ text: "Symmetry must hold for every pair in the relation, not just one example pair." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Prove symmetry algebraically for an arbitrary pair (a,b) in R, not for a single numeric example." }] }],
      errorType: "execution-error",
    },
    {
      id: "reflexive-from-some-pairs",
      mistake: "Assuming reflexive from the existence of some diagonal pairs.",
      why: [{ type: "paragraph", children: [{ text: "Reflexivity requires (a,a) in R for every a in A, not merely for some elements." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the diagonal pair for every element of A before concluding reflexivity." }] }],
      errorType: "decision-error",
    },
    {
      id: "symmetric-vs-transitive",
      mistake: "Confusing symmetric with transitive.",
      why: [{ type: "paragraph", children: [{ text: "Symmetric concerns reversing a single pair; transitive concerns chaining two pairs into a third. They are independent conditions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State each definition separately and verify each with its own argument." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "equivalence-before-all-three",
      mistake: "Calling a relation an equivalence relation before all three tests pass.",
      why: [{ type: "paragraph", children: [{ text: "An equivalence relation requires reflexive, symmetric and transitive together; passing two conditions is not sufficient." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Complete and record all three checks before naming the relation an equivalence relation." }] }],
      errorType: "decision-error",
    },
  ],

  relatedChapters: [
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "related",
      description: "Functions builds on sets and relations by adding the single-output mapping condition.",
    },
    {
      label: "Probability",
      url: "/jee/mathematics/probability",
      relation: "forward",
      description: "Set-based reasoning about events and sample spaces extends the operations covered here.",
    },
  ],

  links: [
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  faqs: [
    {
      question: "What is an equivalence relation?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "A relation that is reflexive, symmetric and transitive, all three verified together, is an equivalence relation." }],
        },
      ],
    },
    {
      question: "What is the difference between a set and a relation?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "A set is a well-defined collection of distinct objects. A relation from A to B is a subset of the Cartesian product A × B, describing which ordered pairs satisfy a chosen condition." }],
        },
      ],
    },
    {
      question: "What are De Morgan's laws?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ and (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ, with all complements taken relative to the same declared universal set. These are explicit JEE Advanced 2026 syllabus wording." }],
        },
      ],
    },
    {
      question: "When is a relation reflexive, symmetric or transitive?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Reflexive when (a,a) is in R for every a in A; symmetric when (a,b) in R implies (b,a) in R; transitive when (a,b) and (b,c) in R imply (a,c) in R." }],
        },
      ],
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote:
    "Use verified NTA or JEE Advanced questions only after matching year, paper and question. Do not show chapter frequency or PYQ totals without an audited dataset.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Mathematics education editor.",
    "Academically reviewed by: unassigned. Reviewer specialisation: algebra, discrete mathematics and JEE Mathematics. Minimum qualification: postgraduate qualification in Mathematics, Applied Mathematics or equivalent.",
    "Review scope: notation, relation definitions, De Morgan conditions, equivalence proofs, scope labels and the worked example.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Sets and Relations for JEE Main and Advanced 2026",
    description:
      "Learn set operations, De Morgan's laws, Cartesian products, relation properties and equivalence relations with conditions and method selection.",
    ogTitle: "Sets and Relations for JEE Main and Advanced 2026",
    ogDescription: "Set operations, relation properties and equivalence-relation testing with explicit conditions.",
    ogType: "article",
  },
};

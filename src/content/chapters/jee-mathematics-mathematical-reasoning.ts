import type { ChapterContent } from "@/content/types";

/**
 * Mathematical Reasoning — T06 production content.
 *
 * Scope discipline:
 * - Mathematical Reasoning is NOT part of the current JEE Main 2026 syllabus
 *   (14 official units) or the current JEE Advanced 2026 syllabus. This page
 *   is retained only as a contextual, historical and foundational logic
 *   resource and must never be presented as current examinable scope.
 * - No weightage, trend or PYQ-count claims. No named contributor.
 * - contentStatus stays "draft" until academic review is recorded.
 */
export const jeeMathematicsMathematicalReasoning: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "Not current JEE Main or JEE Advanced 2026 scope",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Mathematical Reasoning",
  slug: "mathematical-reasoning",
  url: "/jee/mathematics/mathematical-reasoning",
  canonicalIntent:
    "Provide a source-backed foundational and historical logic resource for mathematical statements and reasoning without presenting Mathematical Reasoning as current JEE Main or JEE Advanced 2026 examinable scope.",

  heroChips: [
    "Not part of the current JEE Main 2026 or JEE Advanced 2026 Mathematics syllabus",
    "Contextual, historical and foundational logic resource only",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Mathematical Reasoning is not part of the checked current JEE Main 2026 or JEE Advanced 2026 Mathematics syllabus.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "This page is retained only as a contextual, historical and foundational Mathematics resource. It must remain noindex and outside current-syllabus navigation, and must never be presented as current Main or Advanced scope.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A statement is a declarative mathematical sentence with a definite truth value in context. Connectives such as conjunction, disjunction, implication and biconditional combine statements, and quantifiers declare a domain for a predicate.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Sets Relations",
      url: "/jee/mathematics/sets-relations",
      relation: "prerequisite",
      description: "Mathematical language and sets underlie statements, predicates and quantifier domains.",
    },
    {
      label: "Functions",
      url: "/jee/mathematics/functions",
      relation: "related",
      description: "Lateral topic sharing the mathematical-language and domain-declaration foundation.",
    },
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Contextual parent hub, not current-syllabus navigation for this chapter.",
    },
  ],

  syllabusMapping: {
    unit: "No current mapping",
    topics: [
      "Not listed among the 14 official JEE Main 2026 Mathematics units",
      "Not listed among official JEE Advanced 2026 Mathematics topics",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "declare-domain",
      title: "1. Declare the domain and identify the statement",
      keyIdea: "A statement must have a definite truth value in a declared context before any logic step is applied.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Begin by declaring the domain over which a statement or predicate is being evaluated, and confirm the sentence is a statement with a definite truth value rather than an ambiguous or opinion-based sentence.",
            },
          ],
        },
      ],
    },
    {
      id: "translate-connectives",
      title: "2. Translate connectives precisely",
      keyIdea: "Conjunction, disjunction, implication and biconditional each have a fixed truth-table meaning.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Translate compound statements into conjunction (p∧q), inclusive disjunction (p∨q), implication (p→q) or biconditional (p↔q), keeping the inclusive-or convention unless the problem states otherwise.",
            },
          ],
        },
      ],
    },
    {
      id: "implication-family",
      title: "3. Distinguish converse, inverse and contrapositive",
      keyIdea: "The contrapositive is logically equivalent to the original implication; the converse and inverse are not.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For an implication p→q, the contrapositive ¬q→¬p is logically equivalent to it. The converse q→p and the inverse ¬p→¬q are equivalent to each other but not to the original implication, and must be tested separately.",
            },
          ],
        },
      ],
    },
    {
      id: "quantifier-negation",
      title: "4. Negate quantified statements by switching the quantifier",
      keyIdea: "Negating a universal statement gives an existential statement with the predicate negated, and vice versa.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The negation of ∀x P(x) is ∃x ¬P(x), and the negation of ∃x P(x) is ∀x ¬P(x). The domain must stay declared throughout, and only the predicate is negated, not the quantifier's domain.",
            },
          ],
        },
      ],
    },
    {
      id: "validate-direction",
      title: "5. Validate the logical direction used",
      keyIdea: "A counterexample rejects only the specific statement it targets, such as a converse, not the original implication.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "After a proof or counterexample, validate which statement it actually addresses: a counterexample to a converse does not disprove the original implication, and a proof of one direction of a biconditional does not establish the other direction.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "conjunction",
      expression: "p∧q true iff both true",
      meaning: "Conjunction of two propositions.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Combining two statements with 'and'.",
      commonTrap: "And/or confusion.",
      accessibleText: "p and q is true exactly when both p and q are true.",
    },
    {
      id: "disjunction",
      expression: "p∨q false iff both false",
      meaning: "Inclusive disjunction of two propositions.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Standard inclusive OR, unless stated otherwise.",
      commonTrap: "Exclusive OR assumption.",
      accessibleText: "p or q is false exactly when both p and q are false.",
    },
    {
      id: "implication-equivalence",
      expression: "p→q ≡ ¬p∨q",
      meaning: "Implication restated as a disjunction.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Propositional logic transformations.",
      commonTrap: "Replacing implication by its converse.",
      accessibleText: "p implies q is equivalent to not p or q.",
    },
    {
      id: "contrapositive",
      expression: "p→q ≡ ¬q→¬p",
      meaning: "An implication and its contrapositive are logically equivalent.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Proving an implication via its contrapositive.",
      commonTrap: "Using the inverse instead of the contrapositive.",
      accessibleText: "p implies q is equivalent to not q implies not p.",
    },
    {
      id: "converse-inverse-relation",
      expression: "q→p ≡ ¬p→¬q",
      meaning: "The converse and the inverse of an implication are equivalent to each other.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Comparing converse and inverse.",
      commonTrap: "Assuming either equals the original implication.",
      accessibleText: "q implies p is equivalent to not p implies not q.",
    },
    {
      id: "biconditional",
      expression: "p↔q ≡ (p→q)∧(q→p)",
      meaning: "Biconditional as the conjunction of both implication directions.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Proving 'if and only if' statements.",
      commonTrap: "Proving one direction only.",
      accessibleText: "p if and only if q is equivalent to p implies q and q implies p.",
    },
    {
      id: "de-morgan-and",
      expression: "¬(p∧q) ≡ ¬p∨¬q",
      meaning: "De Morgan's law for conjunction.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Negating a conjunction.",
      commonTrap: "Wrong connective after negation.",
      accessibleText: "Not (p and q) is equivalent to not p or not q.",
    },
    {
      id: "de-morgan-or",
      expression: "¬(p∨q) ≡ ¬p∧¬q",
      meaning: "De Morgan's law for disjunction.",
      variables: [{ symbol: "p, q", meaning: "propositions" }],
      useWhen: "Negating a disjunction.",
      commonTrap: "Wrong connective after negation.",
      accessibleText: "Not (p or q) is equivalent to not p and not q.",
    },
    {
      id: "negated-universal",
      expression: "¬[∀x P(x)] ≡ ∃x ¬P(x)",
      meaning: "Negation of a universally quantified statement.",
      variables: [{ symbol: "P(x)", meaning: "predicate over a declared domain" }],
      useWhen: "Negating a 'for all' statement.",
      commonTrap: "Missing or dropping the declared domain.",
      accessibleText: "Not (for all x, P of x) is equivalent to there exists x such that not P of x.",
    },
    {
      id: "negated-existential",
      expression: "¬[∃x P(x)] ≡ ∀x ¬P(x)",
      meaning: "Negation of an existentially quantified statement.",
      variables: [{ symbol: "P(x)", meaning: "predicate over a declared domain" }],
      useWhen: "Negating a 'there exists' statement.",
      commonTrap: "Reversing the quantifier without negating the predicate.",
      accessibleText: "Not (there exists x such that P of x) is equivalent to for all x, not P of x.",
    },
  ],

  workedExamples: [
    {
      id: "divisible-by-four-even",
      prompt: "Statement: if integer n is divisible by 4, then n is even. Examine its contrapositive and converse.",
      steps: [
        { type: "paragraph", children: [{ text: "Let p = n is divisible by 4, and q = n is even. The original statement is p→q." }] },
        { type: "paragraph", children: [{ text: "Contrapositive: if n is not even, then n is not divisible by 4. This is logically equivalent to the original statement p→q." }] },
        { type: "paragraph", children: [{ text: "Converse: if n is even, then n is divisible by 4. This is false; n = 6 is a counterexample." }] },
        { type: "paragraph", children: [{ text: "Validation: the counterexample n = 6 rejects only the converse, not the original implication p→q." }] },
      ],
      answer: "The contrapositive holds; the converse is false, disproved by n = 6.",
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this page contains and why it is contextual only",
      columns: ["Question", "Direct answer"],
      rows: [
        ["Is Mathematical Reasoning in the current JEE Main 2026 syllabus?", "No. It is not among the 14 official JEE Main 2026 Mathematics units."],
        ["Is Mathematical Reasoning in the current JEE Advanced 2026 syllabus?", "No. It is not among the official JEE Advanced 2026 Mathematics topics."],
        ["Why does this page exist?", "As a contextual, historical and foundational logic resource, not as current-syllabus navigation."],
        ["What should come before this page?", "Sets Relations, for mathematical language and set-based domain reasoning."],
        ["What comes after it?", "No forward step in the current-syllabus learning path; return to Sets Relations."],
      ],
      note: "Official JEE Main 2026 and JEE Advanced 2026 syllabus documents define current scope. Neither lists Mathematical Reasoning.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Mathematical Reasoning",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Statements, connectives, implication family, quantifiers",
          "No current mapping. Mathematical Reasoning is not listed among the 14 official JEE Main 2026 Mathematics units.",
          "No current mapping. Mathematical Reasoning is not listed among official JEE Advanced 2026 Mathematics topics.",
        ],
      ],
      note: "The NCERT Exemplar index lists Mathematical Reasoning as a Class XI academic resource, used here only for contextual and historical support, not as current JEE scope.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model", "Required check"],
      rows: [
        ["Compound statement truth value", "Truth table or known equivalence", "Domain and connective identified correctly"],
        ["Universal statement claimed false", "Produce a counterexample", "Counterexample matches the declared domain"],
        ["Prove an implication", "Direct proof or contrapositive", "Contrapositive is equivalent; converse and inverse are not"],
        ["Examine a converse", "Test it separately from the original", "Do not assume equivalence to the original implication"],
        ["Negate a quantified statement", "Switch the quantifier and negate the predicate", "Domain stays declared throughout"],
        ["Current JEE navigation", "Do not route as examinable 2026 content", "Keep contextual, noindex framing"],
      ],
    },
  ],

  mistakes: [
    {
      id: "presented-as-current-scope",
      mistake: "Presenting Mathematical Reasoning as current JEE Main 2026 or JEE Advanced 2026 examinable scope.",
      why: [{ type: "paragraph", children: [{ text: "Neither official syllabus document lists Mathematical Reasoning as a current unit or topic." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep this page framed as a contextual, historical and foundational resource, not current-syllabus content." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "converse-assumed-equivalent",
      mistake: "Assuming the converse is equivalent to the original implication.",
      why: [{ type: "paragraph", children: [{ text: "p→q and q→p are generally different statements with different truth values." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Test the converse independently rather than assuming it follows from the original." }] }],
      errorType: "decision-error",
    },
    {
      id: "inverse-contrapositive-confused",
      mistake: "Confusing the inverse with the contrapositive.",
      why: [{ type: "paragraph", children: [{ text: "Only the contrapositive ¬q→¬p is logically equivalent to p→q; the inverse ¬p→¬q is equivalent to the converse instead." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Write out both forms explicitly and identify which one is being used before relying on equivalence." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "quantifier-negated-incorrectly",
      mistake: "Negating a quantified statement without switching the quantifier.",
      why: [{ type: "paragraph", children: [{ text: "The negation of a universal statement is an existential statement with the predicate negated, and vice versa; negating only the predicate is incomplete." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Switch the quantifier and negate the predicate together, keeping the domain declared." }] }],
      errorType: "execution-error",
    },
    {
      id: "domain-omitted",
      mistake: "Omitting the domain when stating or negating a quantified statement.",
      why: [{ type: "paragraph", children: [{ text: "A quantifier without a declared domain leaves the statement's truth value undefined." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the domain explicitly before applying a quantifier or its negation." }] }],
      errorType: "execution-error",
    },
    {
      id: "invented-pyq-relevance",
      mistake: "Inventing current PYQ relevance for Mathematical Reasoning from older textbook coverage.",
      why: [{ type: "paragraph", children: [{ text: "No current JEE Main 2026 or JEE Advanced 2026 PYQ relevance is claimed for this contextual page." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Restrict any historical-paper statement to exact historical syllabus and paper provenance, never current relevance." }] }],
      errorType: "needs-review",
    },
  ],

  faqs: [
    {
      question: "Is Mathematical Reasoning in the current JEE Main 2026 syllabus?",
      answer: [{ type: "paragraph", children: [{ text: "No. It is not listed among the 14 official JEE Main 2026 Mathematics units." }] }],
    },
    {
      question: "Is Mathematical Reasoning in the current JEE Advanced 2026 syllabus?",
      answer: [{ type: "paragraph", children: [{ text: "No. It is not listed among the official JEE Advanced 2026 Mathematics topics." }] }],
    },
    {
      question: "What is the difference between a converse and a contrapositive?",
      answer: [{ type: "paragraph", children: [{ text: "The contrapositive ¬q→¬p is logically equivalent to the original implication p→q. The converse q→p is a separate statement and is not generally equivalent to it." }] }],
    },
    {
      question: "How do you negate a universal statement?",
      answer: [{ type: "paragraph", children: [{ text: "The negation of ∀x P(x) is ∃x ¬P(x): switch the quantifier to existential and negate the predicate, keeping the domain declared." }] }],
    },
    {
      question: "Why does this page stay noindex and outside current-syllabus navigation?",
      answer: [{ type: "paragraph", children: [{ text: "Because Mathematical Reasoning is not part of the checked current JEE Main 2026 or JEE Advanced 2026 Mathematics syllabus, this page is retained only as a contextual, historical and foundational resource." }] }],
    },
  ],

  relatedChapters: [
    { label: "Sets Relations", url: "/jee/mathematics/sets-relations", relation: "prerequisite" },
    { label: "Functions", url: "/jee/mathematics/functions", relation: "related" },
  ],

  links: [
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Contextual parent hub, not current-syllabus navigation for this chapter.",
    },
  ],

  sources: ["nta-jee-syllabus", "jee-advanced-syllabus", "nta-jee-main-2026-syllabus-pdf", "ncert-math-exemplar"],
  sourceNote:
    "No current Mathematical Reasoning mapping exists in JEE Main 2026 or JEE Advanced 2026 official syllabus documents. This page is contextual and historical only, with no weightage, frequency or PYQ-count claim.",
  contributorPolicy: [
    "Reviewer specialisation: Logic and Discrete Mathematics.",
    "Minimum: postgraduate Mathematics, Applied Mathematics or equivalent.",
    "Review scope: propositions, connectives, implication family, quantifiers, logical equivalence and the current-scope warning.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Mathematical Reasoning: Logic and Statements Resource",
    description:
      "Contextual Mathematics logic covering statements, implication, converse, contrapositive, quantifiers and equivalence. Not current JEE 2026 syllabus.",
  },
};

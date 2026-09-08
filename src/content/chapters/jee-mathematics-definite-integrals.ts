import type { ChapterContent } from "@/content/types";

/**
 * Definite Integrals — T06 production content (M02-08).
 *
 * Evidence discipline:
 * - No weightage, frequency or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 */
export const jeeMathematicsDefiniteIntegrals: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Definite Integrals",
  slug: "definite-integrals",
  url: "/jee/mathematics/definite-integrals",
  canonicalIntent:
    "Interpret and evaluate definite integrals with fixed limits, apply the Fundamental Theorem and symmetry/property identities only under valid interval and integrability conditions, and avoid adding +C.",

  heroChips: [
    "Explicit in both JEE Main 2026 Unit 8 and JEE Advanced 2026 Integral Calculus",
    "A definite integral never carries +C",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "A definite integral has fixed limits and represents oriented accumulation, not a family of antiderivatives.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Under standard continuity assumptions, compute it using an antiderivative F as F(b)-F(a). Do not add +C. Reversing limits changes the sign, and symmetry shortcuts are valid only after checking interval and integrand symmetry.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        { text: "Do not apply ordinary definite-integral rules across an unhandled singularity inside the interval." },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Integration",
      url: "/jee/mathematics/integration",
      relation: "prerequisite",
      description: "Antiderivative techniques are required before applying the Fundamental Theorem.",
    },
    {
      label: "JEE Mathematics",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Integral Calculus",
    topics: [
      "Fundamental Theorem of Calculus",
      "Properties of definite integrals",
      "Evaluation of definite integrals",
      "Definite integrals as limits of sums",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "integrability-domain",
      title: "1. Inspect the integrand on the entire interval",
      keyIdea: "Do not use ordinary definite-integral rules across an unhandled singularity.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Inspect the integrand on the entire interval before applying any definite-integral rule, and do not apply ordinary rules across an unhandled singularity." }],
        },
      ],
    },
    {
      id: "orientation",
      title: "2. Record orientation from a to b",
      keyIdea: "Reversing the limits changes the sign of the integral.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Definite integration is oriented: reversing the limits from a to b to b to a changes the sign of the result." }],
        },
      ],
    },
    {
      id: "ftc-or-property",
      title: "3. Decide between direct FTC evaluation and a property",
      keyIdea: "Choose the simpler valid route: direct antiderivative evaluation or a proven property.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Decide whether direct Fundamental Theorem evaluation or a valid property, such as reflection or symmetry, is the simpler correct route." }],
        },
      ],
    },
    {
      id: "symmetry-proof-first",
      title: "4. Prove symmetry before using it",
      keyIdea: "Even/odd or substitution symmetry must be proven, not assumed.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "For symmetry shortcuts, prove even/odd behaviour or substitution symmetry first, rather than assuming it from the interval shape alone." }],
        },
      ],
    },
    {
      id: "no-plus-c",
      title: "5. Evaluate with no +C",
      keyIdea: "A definite integral is a number, not a family of functions.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Evaluate the definite integral as a specific number using F(b)-F(a); no constant of integration appears in the final answer." }],
        },
      ],
    },
    {
      id: "sign-vs-geometry",
      title: "6. Interpret sign separately from geometric area",
      keyIdea: "A signed integral value is not automatically a geometric area.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Interpret the sign of the result separately from geometric area; a negative or zero signed integral does not mean zero geometric area." }],
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
          "Evaluating definite integrals with the Fundamental Theorem and applying properties and symmetry under valid interval conditions.",
        ],
        [
          "What is the central method choice?",
          "Choose between direct Fundamental Theorem evaluation and a proven property or symmetry shortcut.",
        ],
        [
          "Where do most mistakes begin?",
          "Adding +C to a definite answer, reversing limits without a sign change, and applying symmetry on a nonsymmetric interval.",
        ],
        [
          "What should come before Definite Integrals?",
          "Integration, for antiderivative technique and domain handling.",
        ],
        [
          "What comes after it?",
          "Area Under Curves converts signed definite integrals into nonnegative geometric area; Differential Equations builds on integration technique separately.",
        ],
      ],
      note: "Official JEE syllabus documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Definite Integrals",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Fundamental Theorem and properties",
          "Explicitly includes the Fundamental Theorem of Calculus, properties of definite integrals and evaluation of definite integrals.",
          "Explicitly includes definite integrals as limits of sums, their properties and the Fundamental Theorem of Integral Calculus.",
          "Advanced explicitly names the limit-of-sums construction; treat this as an Advanced-explicit detail.",
        ],
      ],
      note: "Sources: official Main Unit 8 and official Advanced Integral Calculus documents linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Definite Integrals",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        ["Indefinite integration", "Find an antiderivative for a standard integrand.", "Revise standard integrals in Integration."],
        ["Even/odd functions", "Test whether f(-x)=f(x) or f(-x)=-f(x).", "Revise function symmetry."],
        ["Substitution", "Transform limits along with the variable during substitution.", "Revise substitution in Integration."],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "formula-records",
      jump: true,
      slot: "formulas",
      heading: "Definite-integral properties and conditions",
      columns: ["Record", "Expression", "Conditions", "Common trap", "Validation"],
      rows: [
        ["Zero interval", "∫_a^a f(x)dx = 0", "Integral meaningful at the endpoint context", "Adding arbitrary constant", "Orientation"],
        ["Reverse limits", "∫_a^b f = -∫_b^a f", "Integral exists", "Forgetting sign", "Reverse twice"],
        ["Add intervals", "∫_a^b f + ∫_b^c f = ∫_a^c f", "Integrals exist on relevant intervals", "Using across unhandled singularity", "Partition check"],
        ["Linearity", "∫_a^b(αf+βg) = α∫f + β∫g", "f, g integrable", "Dropping limits", "Recombine"],
        ["FTC evaluation", "∫_a^b f(x)dx = F(b) - F(a)", "f continuous on [a,b] and F'=f there", "Adding +C", "Different antiderivatives give same difference"],
        ["Accumulation derivative", "If G(x)=∫_a^x f(t)dt, then G'(x)=f(x)", "f continuous near x", "Confusing integration variable t with x", "Differentiate"],
        ["Reflection property", "∫_a^b f(x)dx = ∫_a^b f(a+b-x)dx", "f integrable; teaching form usually a<b", "Applying wrong transformed limits", "Substitute u=a+b-x"],
        ["Even symmetry", "∫_-a^a f = 2∫_0^a f", "a>0, f integrable and even", "Using without proving evenness", "Check f(-x)=f(x)"],
        ["Odd symmetry", "∫_-a^a f = 0", "a>0, f integrable and odd", "Calling geometric area zero", "Check f(-x)=-f(x)"],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector for definite integrals",
      intro: "Match the question signal to the correct first approach.",
      columns: ["Question signal", "First approach"],
      rows: [
        ["Standard antiderivative available", "Fundamental Theorem of Calculus"],
        ["Symmetric interval", "Test even/odd before integrating"],
        ["Expression paired by x and a+b-x", "Reflection property"],
        ["Piecewise but integrable", "Split at change points"],
        ["Singularity inside interval", "Do not apply ordinary rules blindly; this scope does not expand into improper-integral theory"],
        ["Question asks geometric area", "Route to Area Under Curves after sign analysis"],
      ],
    },
  ],

  sections: [
    {
      id: "worked-ftc",
      slot: "concepts",
      heading: "Worked reasoning: direct Fundamental Theorem evaluation",
      jump: true,
      concepts: [
        {
          id: "worked-sin-0-pi",
          title: "Evaluate ∫_0^π sinx dx",
          body: [
            { type: "paragraph", children: [{ text: "Known: sinx is continuous and nonnegative on [0,π]." }] },
            { type: "paragraph", children: [{ text: "Method choice: direct FTC. An antiderivative is -cosx." }] },
            { type: "paragraph", children: [{ text: "∫_0^π sinx dx = [-cosx]_0^π = -cosπ-(-cos0) = 1-(-1) = 2." }] },
            { type: "paragraph", children: [{ text: "Validity check: the integrand is nonnegative on the interval, so a positive result is expected; no +C appears." }] },
          ],
        },
      ],
    },
  ],

  mistakes: [
    {
      id: "plus-c-on-definite",
      mistake: "Adding +C to a definite answer.",
      why: [{ type: "paragraph", children: [{ text: "A definite integral evaluates to a specific number, not a family of functions." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the final answer as a number with no constant of integration." }] }],
      errorType: "execution-error",
    },
    {
      id: "reversing-limits-no-sign",
      mistake: "Reversing limits without changing sign.",
      why: [{ type: "paragraph", children: [{ text: "∫_a^b f = -∫_b^a f; ignoring this relation silently changes the answer." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track orientation explicitly whenever limits are swapped." }] }],
      errorType: "execution-error",
    },
    {
      id: "odd-symmetry-area-confusion",
      mistake: "Using odd symmetry and then calling geometric area zero.",
      why: [{ type: "paragraph", children: [{ text: "A zero signed integral from odd symmetry does not mean the geometric area of the region is zero." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the signed-integral result and the geometric-area question separate." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "symmetry-on-nonsymmetric-interval",
      mistake: "Applying even/odd symmetry on a nonsymmetric interval.",
      why: [{ type: "paragraph", children: [{ text: "Even/odd symmetry shortcuts require a symmetric interval such as [-a,a]." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the interval is symmetric about 0 before applying the shortcut." }] }],
      errorType: "decision-error",
    },
    {
      id: "ftc-across-singularity",
      mistake: "Applying FTC across an unhandled singularity.",
      why: [{ type: "paragraph", children: [{ text: "FTC evaluation requires continuity of f on the closed interval [a,b]; a singularity inside the interval invalidates the direct rule." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check continuity on the full interval before applying direct FTC evaluation." }] }],
      errorType: "needs-review",
    },
    {
      id: "dummy-variable-confusion",
      mistake: "Confusing the dummy integration variable with the upper-limit variable.",
      why: [{ type: "paragraph", children: [{ text: "In G(x)=∫_a^x f(t)dt, t is a dummy variable and x is the limit; conflating them produces incorrect differentiation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the integration variable and the limit variable notated separately." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Integration",
      url: "/jee/mathematics/integration",
      relation: "prerequisite",
      description: "Antiderivative technique is required before applying the Fundamental Theorem.",
    },
    {
      label: "Calculus",
      url: "/jee/mathematics/calculus",
      relation: "same-unit",
      description: "Broader calculus unit that Definite Integrals belongs to.",
    },
    {
      label: "Area Under Curves",
      url: "/jee/mathematics/area-under-curves",
      relation: "forward",
      description: "Converts signed definite integrals into nonnegative geometric area.",
    },
    {
      label: "Differential Equations",
      url: "/jee/mathematics/differential-equations",
      relation: "forward",
      description: "Builds on integration technique to solve equations relating functions and their derivatives.",
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
      question: "Why is there no +C in a definite integral?",
      answer: [{ type: "paragraph", children: [{ text: "A definite integral evaluates to a specific number, F(b)-F(a); any constant of integration cancels in the subtraction." }] }],
    },
    {
      question: "What happens when integration limits are reversed?",
      answer: [{ type: "paragraph", children: [{ text: "Reversing the limits changes the sign of the result: ∫_a^b f = -∫_b^a f." }] }],
    },
    {
      question: "When can even/odd symmetry be used?",
      answer: [{ type: "paragraph", children: [{ text: "Only on a symmetric interval such as [-a,a], and only after proving f(-x)=f(x) or f(-x)=-f(x)." }] }],
    },
    {
      question: "Is definite integral as a limit of sums explicit in Advanced 2026?",
      answer: [{ type: "paragraph", children: [{ text: "Yes. The official JEE Advanced 2026 syllabus explicitly includes definite integrals as limits of sums." }] }],
    },
  ],

  sources: ["nta-jee-main-2026-syllabus-pdf", "jee-advanced-syllabus", "ncert-math-exemplar-12-integrals"],
  sourceNote:
    "Use only verified official-paper provenance for worked examples. Definite-integral properties are not converted into frequency or weightage claims.",
  contributorPolicy: [
    "Written by: unassigned. Ideal author type: Calculus/Mathematical Analysis educator.",
    "Academically reviewed by: unassigned. Reviewer specialisation: Fundamental Theorem assumptions, orientation identities, symmetry conditions, interval splitting. Minimum qualification: postgraduate degree in Mathematics or Applied Mathematics.",
    "Review scope: FTC assumptions, orientation identities, symmetry conditions, interval splitting, no-+C rule and Main/Advanced scope.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Definite Integrals for JEE 2026: FTC, Properties and Symmetry",
    description:
      "Learn definite-integral meaning, FTC evaluation, orientation, interval splitting and symmetry properties with no +C.",
    ogTitle: "Definite Integrals for JEE 2026",
    ogDescription: "Fundamental Theorem, orientation, symmetry conditions, and worked evaluation reasoning.",
    ogType: "article",
  },
};

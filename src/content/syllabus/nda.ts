import type { SyllabusContent } from "@/content/types";
import { sources } from "@/content/sources";

/**
 * NDA syllabus (T05) — transcribed from the approved Rank Sarthi NDA-A
 * Core + Syllabus + Mathematics Production Package (production date
 * 12 September 2026), record `/nda/syllabus`.
 *
 * Provenance rules enforced here:
 *  - Official UPSC paper structure and section names are preserved exactly.
 *  - The only proportions shown are UPSC's own official approximate
 *    syllabus proportions for GAT Part B. No chapter weightage, question
 *    frequency or marks prediction is asserted.
 *  - Human academic review is still pending; the record stays draft.
 */
const S = ["upsc-nda-ii-2026-exam-page", "upsc-nda-ii-2026-notification"];

export const ndaSyllabus: SyllabusContent = {
  exam: "NDA & NA (II) 2026",
  platform: "nda",
  contentStatus: "draft",
  title: "NDA Syllabus 2026: Official Mathematics and GAT Scope for NDA II",
  lastVerified: "12 September 2026",

  hero: {
    eyebrow: "Verified against the current official UPSC NDA & NA (II) 2026 notification",
    intent:
      "See the official NDA written syllabus: Paper I Mathematics for 300 marks and Paper II General Ability Test for 600 marks, then move into the subject syllabus page that matches your current scope.",
    chips: [
      "Official-source checked",
      "Official wording kept separate from Rank Sarthi navigation",
      "No invented chapter weightage",
      "Human review pending",
    ],
  },

  intro: [
    {
      type: "paragraph",
      children: [
        {
          text: "The NDA written syllabus has two papers. Paper I is Mathematics for 300 marks. Paper II is the General Ability Test for 600 marks, split into Part A English for 200 marks and Part B General Knowledge for 400 marks. The General Knowledge part covers Physics, Chemistry, General Science, History / Freedom Movement and related social studies, Geography and Current Events.",
        },
      ],
    },
    {
      type: "note",
      tone: "source",
      children: [
        {
          text: "Official syllabus families and section names are preserved as issued by UPSC. Rank Sarthi's topic routes are a separate learning and navigation layer. Written by: UNASSIGNED. Academically reviewed by: UNASSIGNED. Last reviewed: pending human review.",
        },
      ],
    },
  ],

  officialSource: sources["upsc-nda-ii-2026-notification"]!,
  sourceRefs: ["upsc-nda-ii-2026-notification", "upsc-nda-ii-2026-exam-page", "upsc-exam-highlights"],

  cycleStatus: {
    id: "official-status",
    heading: "Current official cycle status",
    columns: ["Item", "Verified position"],
    rows: [
      ["Current cycle", "National Defence Academy and Naval Academy Examination (II), 2026"],
      ["Notification", "20 May 2026"],
      ["Written examination", "13 September 2026"],
      ["Application window", "Closed"],
      ["Written pattern", "Mathematics 300 marks, General Ability Test 600 marks"],
    ],
    verifiedOn: "12 September 2026",
    sourceRefs: S,
    cycleState: "NDA & NA (II) 2026",
    note: "Wrong answers attract a penalty of one-third of the marks assigned to the question. A blank response carries no penalty.",
    refreshTrigger: "Re-verify when UPSC issues the next NDA & NA examination notification.",
  },

  scopeSelector: {
    id: "gat-part-b-proportions",
    heading: "Official approximate syllabus proportions for GAT Part B",
    intro:
      "UPSC states these as official approximate syllabus proportions for Part B, General Knowledge, 400 marks.",
    columns: ["Section", "Approximate share of GAT Part B"],
    rows: [
      ["Physics", "25%"],
      ["Chemistry", "15%"],
      ["General Science", "10%"],
      ["History / Freedom Movement and related social studies", "20%"],
      ["Geography", "20%"],
      ["Current Events", "10%"],
    ],
    note: "These are official approximate syllabus proportions. They are not chapter predictions, expected question counts or score guarantees.",
  },

  sections: [
    {
      id: "paper-i-mathematics",
      subject: "Paper I: Mathematics, 300 marks",
      accent: "nda",
      countLabel: "8 official syllabus families",
      units: [
        { id: "nda-maths-algebra", name: "Algebra", topics: [], scope: "Sets and set operations, Venn diagrams, De Morgan laws, Cartesian products, relations and equivalence relations, real numbers, complex numbers, binary number system, arithmetic, geometric and harmonic progressions, quadratic equations with real coefficients, graphical solution of linear inequations in two variables, permutations and combinations, binomial theorem, logarithms and applications.", sourceRefs: S },
        { id: "nda-maths-matrices", name: "Matrices and Determinants", topics: [], scope: "Types of matrices, matrix operations, determinants and their properties, adjoint and inverse of a square matrix, and solution of a system of linear equations by matrix methods.", sourceRefs: S },
        { id: "nda-maths-trigonometry", name: "Trigonometry", topics: [], scope: "Angles and their measures, trigonometric ratios and identities, sum and difference formulae, multiple and sub-multiple angles, inverse trigonometric functions, applications including height and distance and properties of triangles.", sourceRefs: S },
        { id: "nda-maths-analytical-geometry", name: "Analytical Geometry of Two and Three Dimensions", topics: [], scope: "Rectangular Cartesian coordinates, distance and section formulae, straight lines, circles, standard forms of the parabola, ellipse and hyperbola, and three-dimensional work including direction cosines, the equation of a plane and a line, the angle between lines and planes, and the equation of a sphere.", sourceRefs: S },
        { id: "nda-maths-differential-calculus", name: "Differential Calculus", topics: [], scope: "Functions and their graphs, limits, continuity, derivative of a function, derivatives of sums, products, quotients and composite functions, second-order derivatives, and applications to increasing and decreasing functions, maxima and minima.", sourceRefs: S },
        { id: "nda-maths-integral-calculus", name: "Integral Calculus and Differential Equations", topics: [], scope: "Integration as the inverse of differentiation, standard integrals, integration by substitution and by parts, definite integrals and areas, and the formation and solution of first-order and first-degree differential equations with growth and decay applications.", sourceRefs: S },
        { id: "nda-maths-vector-algebra", name: "Vector Algebra", topics: [], scope: "Vectors in two and three dimensions, magnitude and direction, unit and null vectors, addition of vectors, scalar multiplication, scalar and vector products, and applications to work, moment and geometry.", sourceRefs: S },
        { id: "nda-maths-statistics-probability", name: "Statistics and Probability", topics: [], scope: "Classification and graphical representation of data, measures of central tendency and dispersion, correlation and regression, and probability including random experiments, events, conditional probability, Bayes theorem and binomial distribution.", sourceRefs: S },
      ],
    },
    {
      id: "paper-ii-gat",
      subject: "Paper II: General Ability Test, 600 marks",
      accent: "nda",
      countLabel: "Part A English 200 marks, Part B General Knowledge 400 marks",
      units: [
        { id: "nda-gat-english", name: "Part A: English, 200 marks", topics: [], scope: "The syllabus tests the candidate's understanding of English and workmanlike use of words. It covers grammar and usage, vocabulary, comprehension and cohesion in extended text.", sourceRefs: S },
        { id: "nda-gat-physics", name: "Part B: Physics", topics: [], scope: "Elementary mechanics, heat, sound, light, electricity, magnetism and related physical concepts named in the official syllabus.", sourceRefs: S },
        { id: "nda-gat-chemistry", name: "Part B: Chemistry", topics: [], scope: "Basic matter and changes, elements, mixtures and compounds, simple equations, air and water, common gases, acids, bases and salts, carbon, fertilisers, common industrial materials and elementary atomic ideas.", sourceRefs: S },
        { id: "nda-gat-general-science", name: "Part B: General Science", topics: [], scope: "Life basics, cells and tissues, growth and reproduction, human body, diseases, food and nutrition, the solar system and eminent scientists.", sourceRefs: S },
        { id: "nda-gat-history", name: "Part B: History, Freedom Movement and related social studies", topics: [], scope: "Indian history and culture, the Freedom Movement, the Constitution and administration, and selected modern-world and social-development themes named in the syllabus.", sourceRefs: S },
        { id: "nda-gat-geography", name: "Part B: Geography", topics: [], scope: "Earth and coordinates, earth movements, rocks and weathering, earthquakes and volcanoes, oceans, atmosphere, weather and climate, natural regions, and Indian regional and economic geography.", sourceRefs: S },
        { id: "nda-gat-current-events", name: "Part B: Current Events", topics: [], scope: "Important recent Indian and world events and prominent personalities, including culture and sports.", sourceRefs: S },
      ],
    },
  ],

  relatedLinks: [
    { label: "Maths Syllabus", url: "/nda/syllabus/mathematics", relation: "related" },
    { label: "GAT Syllabus", url: "/nda/syllabus/gat", relation: "related" },
    { label: "Physics Syllabus", url: "/nda/syllabus/physics", relation: "related" },
    { label: "GK Syllabus", url: "/nda/syllabus/general-knowledge", relation: "related" },
    { label: "English Syllabus", url: "/nda/syllabus/english", relation: "related" },
    { label: "NDA Exam Overview", url: "/nda/nda-exam", relation: "up" },
  ],

  faqs: [
    {
      question: "What subjects are in the NDA written exam?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mathematics is Paper I. GAT is Paper II and contains English plus General Knowledge, including Physics, Chemistry, General Science, History, Geography and Current Events.",
            },
          ],
        },
      ],
    },
  ],

  seo: {
    title: "NDA Syllabus 2026: Official Maths, GAT, English & GK Scope | Rank Sarthi",
    description:
      "See the official NDA II 2026 Mathematics and GAT syllabus, including English, Physics, Chemistry, General Science, History, Geography and Current Events.",
  },
};

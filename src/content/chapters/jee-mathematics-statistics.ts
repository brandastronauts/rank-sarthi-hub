import type { ChapterContent } from "@/content/types";

/**
 * Statistics — T06 production content.
 *
 * Evidence discipline:
 * - No weightage, trend or PYQ-count claims.
 * - No named contributor; author/reviewer remain unassigned pending review.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Descriptive-data variance uses the NCERT/JEE convention (divide by N or
 *   total frequency), not the n-1 unbiased sample-variance denominator.
 */
export const jeeMathematicsStatistics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  examVariant: "JEE Main and JEE Advanced",
  subject: "Mathematics",
  subjectSlug: "mathematics",
  chapter: "Statistics",
  slug: "statistics",
  url: "/jee/mathematics/statistics",
  canonicalIntent:
    "Summarise grouped or ungrouped data correctly with central-tendency and dispersion measures, use the denominator convention required by the JEE/NCERT descriptive-data model, and connect random-variable mean and variance to valid probability distributions where officially applicable.",

  heroChips: [
    "Descriptive-data variance divides by N, not N-1",
    "State the data model before choosing a formula",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Statistics describes the centre and spread of data. For JEE school-level descriptive statistics, the NCERT convention divides the sum of squared deviations by the number of observations, or by total frequency, rather than automatically using the n-1 unbiased sample-variance denominator.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Grouped continuous data uses class information such as class marks and class boundaries, so every formula must state its data model.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not publish invented weightage, expected question counts or trend percentages.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Sequences and Series",
      url: "/jee/mathematics/sequences-series",
      relation: "prerequisite",
      description: "Summation notation used in mean and variance formulas builds on sequence and series basics.",
    },
    {
      label: "Probability",
      url: "/jee/mathematics/probability",
      relation: "prerequisite",
      description: "Random-variable mean and variance require a validated discrete probability distribution.",
    },
    {
      label: "Maths Hub",
      url: "/jee/mathematics",
      relation: "up",
      description: "Subject hub for the Mathematics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Statistics",
    topics: [
      "Measures of dispersion",
      "Mean, median and mode for grouped and ungrouped data",
      "Standard deviation, variance and mean deviation for grouped and ungrouped data",
      "Comparison of frequency distributions with the same mean but different variance",
      "Random-variable mean and variance",
    ],
    syllabusUrl: "/jee/syllabus/mathematics",
  },

  conceptBlocks: [
    {
      id: "identify-data-model",
      title: "1. Decide whether data is raw, discrete frequency or continuous grouped",
      keyIdea: "The formula set depends entirely on the data model.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Decide whether data is raw, discrete frequency or continuous grouped, and compute total count N or total frequency before applying any formula.",
            },
          ],
        },
      ],
    },
    {
      id: "class-marks",
      title: "2. Use correct class boundaries and class marks",
      keyIdea: "Grouped continuous data uses the class mark as the representative value.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For grouped continuous data, use the correct class boundaries and class marks. Using class limits instead of class marks introduces error into mean and variance calculations.",
            },
          ],
        },
      ],
    },
    {
      id: "denominator-convention",
      title: "3. State the denominator convention",
      keyIdea: "This page does not silently replace N by N-1.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "State the denominator convention explicitly. If a question explicitly asks for an unbiased sample variance under another convention, follow the question's definition rather than this descriptive-data formula.",
            },
          ],
        },
      ],
    },
    {
      id: "nonnegative-spread",
      title: "4. Keep variance nonnegative and units consistent",
      keyIdea: "Standard deviation is the nonnegative square root of variance, in the same units as the data.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Keep variance nonnegative and standard deviation in the same units as the data. When comparing same-mean distributions, larger variance means greater squared spread around that common mean.",
            },
          ],
        },
      ],
    },
    {
      id: "random-variable-link",
      title: "5. Validate a probability distribution before mean or variance",
      keyIdea: "For a random variable, validate probabilities before computing mean or variance.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For a random variable, validate probabilities before mean or variance. A distribution table must satisfy pᵢ≥0 and Σpᵢ=1 before any expectation calculation is meaningful.",
            },
          ],
        },
      ],
    },
  ],

  formulas: [
    {
      id: "ungrouped-mean",
      expression: "x̄ = (1/N) Σxᵢ",
      meaning: "Mean of N raw observations.",
      variables: [{ symbol: "N", meaning: "number of observed values" }],
      useWhen: "Raw ungrouped data.",
      commonTrap: "Dividing by the wrong count.",
      accessibleText: "x bar equals one over N times the sum of x sub i.",
    },
    {
      id: "ungrouped-variance",
      expression: "σ² = (1/N) Σ(xᵢ-x̄)²",
      meaning: "Variance under the NCERT/JEE descriptive-data convention.",
      variables: [{ symbol: "N", meaning: "number of observed values" }],
      useWhen: "Raw ungrouped data, descriptive convention on this page.",
      commonTrap: "Using N-1 instead of N.",
      accessibleText: "Sigma squared equals one over N times the sum of x sub i minus x bar, squared.",
    },
    {
      id: "ungrouped-shortcut-variance",
      expression: "σ² = (1/N) Σxᵢ² - x̄²",
      meaning: "Algebraically equivalent shortcut variance formula.",
      variables: [],
      useWhen: "Same convention as the direct variance formula.",
      commonTrap: "Mixing this with a different denominator convention.",
      accessibleText: "Sigma squared equals one over N times the sum of x sub i squared, minus x bar squared.",
    },
    {
      id: "standard-deviation",
      expression: "σ = √σ²",
      meaning: "Standard deviation as the principal nonnegative square root of variance.",
      variables: [],
      useWhen: "After variance is computed.",
      commonTrap: "Taking a negative square root.",
      accessibleText: "Sigma equals the square root of sigma squared.",
    },
    {
      id: "mean-deviation-ungrouped",
      expression: "MD(A) = (1/N) Σ|xᵢ-A|",
      meaning: "Mean deviation about a stated central value A.",
      variables: [{ symbol: "A", meaning: "stated central value, such as mean or median" }],
      useWhen: "Raw ungrouped data.",
      commonTrap: "Forgetting absolute values.",
      accessibleText: "Mean deviation about A equals one over N times the sum of the absolute value of x sub i minus A.",
    },
    {
      id: "frequency-mean",
      expression: "x̄ = Σfᵢxᵢ/N",
      meaning: "Mean of discrete frequency data.",
      variables: [{ symbol: "fᵢ", meaning: "frequency of value xᵢ, fᵢ≥0" }, { symbol: "N", meaning: "Σfᵢ>0" }],
      useWhen: "Discrete frequency data.",
      commonTrap: "Dividing by number of classes instead of total frequency.",
      accessibleText: "x bar equals the sum of f sub i times x sub i, divided by N.",
    },
    {
      id: "frequency-variance",
      expression: "σ² = Σfᵢ(xᵢ-x̄)²/N",
      meaning: "Variance of discrete frequency data.",
      variables: [],
      useWhen: "Discrete frequency data.",
      commonTrap: "Dividing by number of classes instead of total frequency.",
      accessibleText: "Sigma squared equals the sum of f sub i times x sub i minus x bar, squared, divided by N.",
    },
    {
      id: "frequency-mean-deviation",
      expression: "MD(A) = Σfᵢ|xᵢ-A|/N",
      meaning: "Mean deviation about A for discrete frequency data.",
      variables: [],
      useWhen: "Discrete frequency data.",
      commonTrap: "Forgetting absolute values.",
      accessibleText: "Mean deviation about A equals the sum of f sub i times the absolute value of x sub i minus A, divided by N.",
    },
    {
      id: "grouped-median",
      expression: "Median = l + [(N/2-c_f)/f]h",
      meaning: "Median estimate for continuous grouped frequency data.",
      variables: [
        { symbol: "l", meaning: "lower class boundary of the median class" },
        { symbol: "c_f", meaning: "cumulative frequency before the median class" },
        { symbol: "f", meaning: "frequency of the median class, f>0" },
        { symbol: "h", meaning: "width of the median class" },
      ],
      useWhen: "Continuous grouped frequency table.",
      commonTrap: "Using the grouped median formula without identifying the median class.",
      accessibleText: "Median equals l plus the quantity N over two minus c f, divided by f, times h.",
    },
    {
      id: "grouped-mode",
      expression: "Mode = l + [(f₁-f₀)/(2f₁-f₀-f₂)]h",
      meaning: "Mode estimate for continuous grouped frequency data.",
      variables: [
        { symbol: "f₁", meaning: "modal-class frequency" },
        { symbol: "f₀", meaning: "frequency of the preceding class" },
        { symbol: "f₂", meaning: "frequency of the succeeding class" },
        { symbol: "h", meaning: "width of the modal class" },
      ],
      useWhen: "Standard continuous grouped-data setting with a clear modal class.",
      commonTrap: "Forcing the formula when the denominator 2f₁-f₀-f₂ equals zero or the modal class is ambiguous.",
      accessibleText: "Mode equals l plus the quantity f one minus f zero, divided by two f one minus f zero minus f two, times h.",
    },
    {
      id: "random-variable-mean",
      expression: "μ = E[X] = Σxᵢpᵢ",
      meaning: "Mean of a finite discrete random variable.",
      variables: [{ symbol: "pᵢ", meaning: "probability of xᵢ, pᵢ≥0, Σpᵢ=1" }],
      useWhen: "Valid finite discrete probability distribution.",
      commonTrap: "Averaging x-values without probabilities.",
      accessibleText: "Mu equals E of X equals the sum of x sub i times p sub i.",
    },
    {
      id: "random-variable-variance",
      expression: "Var(X) = Σ(xᵢ-μ)²pᵢ = Σxᵢ²pᵢ - μ²",
      meaning: "Variance of a finite discrete random variable.",
      variables: [],
      useWhen: "Valid finite discrete probability distribution.",
      commonTrap: "Producing a negative variance from an arithmetic error.",
      accessibleText: "Variance of X equals the sum of x sub i minus mu, squared, times p sub i, which must be nonnegative.",
    },
  ],

  workedExamples: [
    {
      id: "small-dataset-descriptive-stats",
      prompt: "For the ungrouped data 2, 4, 4, 6, find the mean, median, mode, variance, standard deviation and mean deviation about the mean.",
      steps: [
        { type: "paragraph", children: [{ text: "N=4. Mean: x̄=(2+4+4+6)/4=4." }] },
        { type: "paragraph", children: [{ text: "Median: ordered data are already 2,4,4,6, so median is (4+4)/2=4. Mode: 4 occurs most often, so mode is 4." }] },
        { type: "paragraph", children: [{ text: "Variance: σ²=[(2-4)²+(4-4)²+(4-4)²+(6-4)²]/4=(4+0+0+4)/4=2. Standard deviation: σ=√2." }] },
        { type: "paragraph", children: [{ text: "Mean deviation about the mean: MD(x̄)=(|2-4|+|4-4|+|4-4|+|6-4|)/4=(2+0+0+2)/4=1." }] },
        { type: "paragraph", children: [{ text: "Validity checks: variance is nonnegative, standard deviation is nonnegative, all centre measures equal 4 for this dataset, and symmetric deviations around 4 make the computed centre plausible." }] },
      ],
      answer: "Mean 4, median 4, mode 4, variance 2, standard deviation √2, mean deviation 1.",
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        ["What is the chapter about?", "Summarising grouped and ungrouped data with central-tendency and dispersion measures using the correct denominator convention."],
        ["What is the central method choice?", "Identify the data model, use correct class marks for grouped data, state the denominator convention, and validate before computing."],
        ["Where do most mistakes begin?", "Using n-1 automatically, using class limits instead of class marks, and forcing the grouped mode formula when its denominator is zero."],
        ["What should come before this chapter?", "Sequences and Series for summation notation, and Probability for random-variable distribution validity."],
        ["What comes after it?", "Calculus applies quantitative modelling further."],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Statistics",
      intro: "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026"],
      rows: [
        [
          "Explicit topic list",
          "Unit 13 explicitly includes measures of dispersion, mean, median and mode for grouped and ungrouped data, standard deviation, variance and mean deviation for grouped and ungrouped data, and probability distribution of a random variable.",
          "Explicitly includes central tendency and dispersion, mean, median, mode, mean deviation, standard deviation and variance of grouped and ungrouped data, comparison of frequency distributions with the same mean but different variance, and random-variable mean and variance.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE Advanced 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector",
      columns: ["Question signal", "First model"],
      rows: [
        ["Raw small dataset", "Direct ungrouped formulas."],
        ["Values with frequencies", "Frequency-weighted formulas."],
        ["Continuous classes", "Class marks for mean/dispersion; cumulative-frequency logic for median; modal-class formula only when its conditions are satisfied."],
        ["Compare same mean", "Compute or compare variance/spread."],
        ["Random-variable table", "First check pᵢ≥0 and Σpᵢ=1, then compute expectation/variance."],
        ["Question states another variance convention", "Obey the question's defined denominator."],
      ],
    },
  ],

  mistakes: [
    {
      id: "n-minus-1-error",
      mistake: "Using n-1 automatically when the JEE/NCERT descriptive formula expects n or total frequency.",
      why: [{ type: "paragraph", children: [{ text: "The descriptive-data convention on this page divides by N, not N-1, unless the question states otherwise." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State the denominator convention explicitly before computing variance." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "wrong-frequency-denominator",
      mistake: "Dividing frequency formulas by the number of classes instead of total frequency.",
      why: [{ type: "paragraph", children: [{ text: "The denominator in frequency formulas is N, the total frequency, not the number of distinct classes." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compute total frequency N before applying frequency-weighted formulas." }] }],
      errorType: "execution-error",
    },
    {
      id: "class-limits-instead-of-marks",
      mistake: "Using class limits instead of appropriate class marks in grouped mean/variance calculations.",
      why: [{ type: "paragraph", children: [{ text: "Grouped formulas use the class mark as the representative value, not the class boundary." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Compute the class mark as the midpoint of each class interval before using it in a formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "median-class-not-identified",
      mistake: "Using the grouped median formula without identifying the median class.",
      why: [{ type: "paragraph", children: [{ text: "The formula requires the correct lower boundary, cumulative frequency and frequency of the specific median class." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Locate the median class using cumulative frequency before substituting into the formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "forced-mode-formula",
      mistake: "Forcing the grouped mode formula when its denominator is zero or the modal class is ambiguous.",
      why: [{ type: "paragraph", children: [{ text: "The formula is invalid when 2f₁-f₀-f₂=0 or the modal class is not well defined." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the denominator condition and modal-class clarity before applying the formula." }] }],
      errorType: "needs-review",
    },
    {
      id: "missing-absolute-values",
      mistake: "Forgetting absolute values in mean deviation.",
      why: [{ type: "paragraph", children: [{ text: "Mean deviation is defined using the absolute value of each deviation from A." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Apply absolute value to each deviation before averaging." }] }],
      errorType: "execution-error",
    },
    {
      id: "negative-square-root",
      mistake: "Taking a negative square root for standard deviation.",
      why: [{ type: "paragraph", children: [{ text: "Standard deviation is defined as the principal nonnegative square root of variance." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Take only the nonnegative square root when computing standard deviation." }] }],
      errorType: "execution-error",
    },
    {
      id: "data-variance-vs-random-variable-variance",
      mistake: "Confusing data variance with random-variable variance without stating the model.",
      why: [{ type: "paragraph", children: [{ text: "Data variance and random-variable variance use different formula structures and require stating which model applies." }] }],
      fix: [{ type: "paragraph", children: [{ text: "State explicitly whether the question is about a dataset or a random variable before applying a variance formula." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    { label: "Sequences and Series", url: "/jee/mathematics/sequences-series", relation: "prerequisite" },
    { label: "Probability", url: "/jee/mathematics/probability", relation: "related" },
    { label: "Calculus", url: "/jee/mathematics/calculus", relation: "forward" },
  ],

  sources: [
    "nta-jee-syllabus",
    "nta-jee-main-2026-syllabus-pdf",
    "jee-advanced-syllabus",
    "ncert-math-exemplar-11-statistics",
    "ncert-math-exemplar",
  ],
  sourceNote: "Official syllabus scope verified against NTA JEE Main 2026 and JEE Advanced 2026 documents. No weightage, frequency or PYQ-count claim is made.",
  contributorPolicy: [
    "Reviewer specialisation: statistics, probability and JEE Mathematics.",
    "Minimum: postgraduate Mathematics, Statistics, Applied Mathematics or equivalent.",
    "Review scope: grouped/ungrouped denominator convention, class-mark usage, median-class and mode-class validity, and random-variable mean/variance linkage.",
  ],

  contentStatus: "draft",

  meta: {
    title: "Statistics for JEE 2026: Mean, Variance and Standard Deviation",
    description: "Learn grouped and ungrouped mean, median, mode, mean deviation, variance, standard deviation and random-variable conventions for JEE.",
  },
};

/**
 * Safe alias layer for syllabus → route resolution.
 *
 * Official syllabus wording and Rank Sarthi route titles legitimately differ
 * (official terminology, singular/plural, hyphenation, umbrella unit names).
 * This table maps an official label to the slug(s) of routes that already
 * exist in the registry. It never creates or renames a route: the first
 * candidate slug that resolves to a BUILT route for the current platform and
 * subject wins, and a label with no built candidate stays plain text.
 *
 * `slugs` is ordered by academic ownership: the first slug is the route that
 * primarily owns the official unit. Platform differences are handled
 * automatically because resolution is scoped by platform + subject, so one
 * entry can serve JEE, NEET and NDA without cross-exam leakage.
 */
export type TopicAlias = {
  /** Subject key: maths | physics | chemistry | biology | gat. */
  subject: string;
  /** Official syllabus labels that should resolve to the same destination. */
  labels: string[];
  /** Candidate route slugs, in ownership order. */
  slugs: string[];
  /** Optional in-page anchor on the resolved destination. */
  hash?: string;
};

export const topicAliases: TopicAlias[] = [
  /* ---------------- Mathematics ---------------- */
  { subject: "maths", labels: ["Sets, Relations and Functions"], slugs: ["sets-relations", "functions"] },
  { subject: "maths", labels: ["Complex Numbers and Quadratic Equations"], slugs: ["complex-numbers"] },
  {
    subject: "maths",
    labels: ["Binomial Theorem and its Simple Applications", "Binomial Theorem and Its Simple Applications"],
    slugs: ["binomial-theorem"],
  },
  { subject: "maths", labels: ["Sequence and Series"], slugs: ["sequences-series"] },
  { subject: "maths", labels: ["Limit, Continuity and Differentiability"], slugs: ["limits-continuity"] },
  { subject: "maths", labels: ["Integral Calculus"], slugs: ["integration"] },
  {
    subject: "maths",
    labels: ["Integral Calculus and Differential Equations"],
    slugs: ["integration", "calculus"],
  },
  { subject: "maths", labels: ["Differential Calculus"], slugs: ["differentiation", "calculus"] },
  { subject: "maths", labels: ["Three Dimensional Geometry"], slugs: ["3d-geometry", "vector-algebra"] },
  { subject: "maths", labels: ["Vector Algebra"], slugs: ["vector-algebra", "vectors"] },
  { subject: "maths", labels: ["Statistics and Probability", "Probability and Statistics"], slugs: ["statistics", "probability"] },
  { subject: "maths", labels: ["Matrices"], slugs: ["matrices-determinants"] },
  {
    subject: "maths",
    labels: ["Analytical Geometry", "Analytical Geometry of Two and Three Dimensions"],
    slugs: ["analytical-geometry", "coordinate-geometry"],
  },

  /* ---------------- Physics ---------------- */
  { subject: "physics", labels: ["Experimental Skills"], slugs: ["experimental-skills"] },
  { subject: "physics", labels: ["Vernier callipers"], slugs: ["experimental-skills"], hash: "vernier-callipers" },
  { subject: "physics", labels: ["Screw gauge"], slugs: ["experimental-skills"], hash: "screw-gauge" },
  { subject: "physics", labels: ["Pendulum energy loss"], slugs: ["experimental-skills"], hash: "simple-pendulum" },
  { subject: "physics", labels: ["Principle of moments"], slugs: ["experimental-skills"], hash: "metre-scale" },
  { subject: "physics", labels: ["Young's modulus"], slugs: ["experimental-skills"], hash: "youngs-modulus-of-a-metallic-wire" },
  { subject: "physics", labels: ["Viscosity"], slugs: ["experimental-skills"], hash: "coefficient-of-viscosity" },
  { subject: "physics", labels: ["Resonance-tube sound speed"], slugs: ["experimental-skills"], hash: "speed-of-sound" },
  { subject: "physics", labels: ["Specific heat by mixtures"], slugs: ["experimental-skills"], hash: "specific-heat-capacity" },
  { subject: "physics", labels: ["Metre-bridge resistivity"], slugs: ["experimental-skills"], hash: "resistivity" },
  { subject: "physics", labels: ["Ohm-law resistance"], slugs: ["experimental-skills"], hash: "resistance" },
  { subject: "physics", labels: ["Galvanometer resistance and figure of merit"], slugs: ["experimental-skills"], hash: "galvanometer-resistance-and-figure-of-merit" },
  { subject: "physics", labels: ["Focal-length measurements"], slugs: ["experimental-skills"], hash: "focal-length-of-convex-mirror-concave-mirror-and-convex-lens" },
  { subject: "physics", labels: ["Prism deviation"], slugs: ["experimental-skills"], hash: "prism" },
  { subject: "physics", labels: ["Glass-slab refractive index"], slugs: ["experimental-skills"], hash: "refractive-index-of-a-glass-slab" },
  { subject: "physics", labels: ["p-n diode curve"], slugs: ["experimental-skills"], hash: "characteristic-curve-of-a-p-n-junction-diode" },
  { subject: "physics", labels: ["Zener curve and breakdown voltage"], slugs: ["experimental-skills"], hash: "characteristic-curve-of-a-zener-diode-and-reverse-breakdown" },
  { subject: "physics", labels: ["Identification of diode, LED, resistor and capacitor"], slugs: ["experimental-skills"], hash: "identification-of-diode-led-resistor-and-capacitor" },
  { subject: "physics", labels: ["Physics and Measurement"], slugs: ["units-measurements", "units-and-measurements"] },
  { subject: "physics", labels: ["Properties of Solids and Liquids"], slugs: ["properties-of-matter"] },
  { subject: "physics", labels: ["Kinetic Theory of Gases"], slugs: ["kinetic-theory", "kinetic-theory-of-gases"] },
  { subject: "physics", labels: ["Oscillations and Waves"], slugs: ["oscillations"] },
  {
    subject: "physics",
    labels: ["Magnetic Effects of Current and Magnetism"],
    slugs: ["magnetism"],
  },
  {
    subject: "physics",
    labels: ["Electromagnetic Induction and Alternating Currents"],
    slugs: ["electromagnetic-induction"],
  },
  {
    subject: "physics",
    labels: ["Dual Nature of Matter and Radiation"],
    slugs: ["dual-nature-radiation", "dual-nature-of-matter"],
  },
  { subject: "physics", labels: ["Atoms and Nuclei"], slugs: ["atoms-and-nuclei", "atoms"] },
  { subject: "physics", labels: ["Electronic Devices"], slugs: ["semiconductor-electronics", "semiconductors"] },

  /* ---------------- Chemistry ---------------- */
  {
    subject: "chemistry",
    labels: ["Some Basic Concepts in Chemistry", "Some Basic Concepts of Chemistry"],
    slugs: ["some-basic-concepts", "mole-concept"],
  },
  /* Final syllabus-gap routes (2026-09-28). */
  { subject: "chemistry", labels: ["Purification and Characterisation of Organic Compounds"], slugs: ["purification-characterisation-organic-compounds"] },
  { subject: "chemistry", labels: ["Principles Related to Practical Chemistry"], slugs: ["practical-chemistry"] },
  { subject: "chemistry", labels: ["Principles of Qualitative Analysis"], slugs: ["practical-chemistry"], hash: "qualitative-analysis" },
  { subject: "chemistry", labels: ["Practical Organic Chemistry"], slugs: ["practical-chemistry"], hash: "practical-organic-chemistry" },
  { subject: "chemistry", labels: ["Chemical Bonding and Molecular Structure"], slugs: ["chemical-bonding"] },
  { subject: "chemistry", labels: ["Chemical Thermodynamics"], slugs: ["thermodynamics"] },
  { subject: "chemistry", labels: ["Redox Reactions and Electrochemistry"], slugs: ["redox-reactions"] },
  {
    subject: "chemistry",
    labels: ["Classification of Elements and Periodicity in Properties"],
    slugs: ["periodic-classification", "periodic-table"],
  },
  {
    subject: "chemistry",
    labels: [
      "Some Basic Principles of Organic Chemistry",
      "Basic Principles of Organic Chemistry",
    ],
    slugs: ["organic-basics", "organic-chemistry"],
  },
  { subject: "chemistry", labels: ["Organic Compounds Containing Halogens", "Alkyl Halides", "Haloarenes"], slugs: ["haloalkanes-haloarenes"] },
  {
    subject: "chemistry",
    labels: ["Organic Compounds Containing Oxygen", "Alcohols", "Phenols", "Ethers"],
    slugs: ["alcohols-phenols-ethers"],
  },
  { subject: "chemistry", labels: ["Organic Compounds Containing Nitrogen"], slugs: ["amines"] },
  { subject: "chemistry", labels: ["States of Matter: Gases and Liquids"], slugs: ["states-of-matter"] },
  { subject: "chemistry", labels: ["Chemical and Ionic Equilibrium"], slugs: ["equilibrium", "ionic-equilibrium"] },
  { subject: "chemistry", labels: ["d-Block Elements", "f-Block Elements"], slugs: ["d-and-f-block-elements"] },
  { subject: "chemistry", labels: ["Alkanes", "Alkenes and Alkynes", "Benzene"], slugs: ["hydrocarbons"] },

  /* ---------------- Biology ---------------- */
  { subject: "biology", labels: ["Diversity in Living World"], slugs: ["living-world"] },
  {
    subject: "biology",
    labels: ["Structural Organisation in Animals and Plants"],
    slugs: ["structural-organisation-animals"],
  },
  { subject: "biology", labels: ["Cell Structure and Function"], slugs: ["cell-biology"] },
  { subject: "biology", labels: ["Genetics and Evolution"], slugs: ["genetics"] },
  { subject: "biology", labels: ["Biology and Human Welfare"], slugs: ["human-health-disease"] },
  { subject: "biology", labels: ["Ecology and Environment"], slugs: ["ecology"] },

  /* ---------------- NDA General Ability Test ---------------- */
  { subject: "gat", labels: ["Physics"], slugs: ["physics"] },
  { subject: "gat", labels: ["Chemistry"], slugs: ["chemistry"] },
  { subject: "gat", labels: ["General Science"], slugs: ["general-science"] },
  {
    subject: "gat",
    labels: [
      "History, Freedom Movement and related social studies",
      "History and related social studies",
    ],
    slugs: ["history"],
  },
  { subject: "gat", labels: ["Geography"], slugs: ["geography"] },
  { subject: "gat", labels: ["Current Events"], slugs: ["current-affairs"] },
];

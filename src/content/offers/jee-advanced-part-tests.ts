import type { PartTestRecord, PartTestTopicGroup } from "@/content/types";

/**
 * JEE Advanced Part Test 1–10 allocation.
 *
 * Source of truth: the academic-team supplied "JEE Advanced Part Test Syllabus"
 * documents for Physics, Chemistry and Mathematics. Content is reproduced as
 * supplied — headings, chapter/topic boundaries, EXCLUDING statements and
 * academic notes are preserved. Only formatting (bullet splitting on the source
 * semicolons) is normalised. Nothing is broadened, narrowed or rewritten, and no
 * missing allocation is inferred.
 *
 * This is the Rank Sarthi Part-Test allocation, not the official JEE Advanced
 * syllabus document, even where topics derive from official exam scope.
 */

/** Splits a supplied paragraph into readable bullets on its own semicolons. */
function g(
  heading: string,
  topics: string,
  extra?: { excluding?: string[]; note?: string },
): PartTestTopicGroup {
  return {
    heading,
    topics: topics
      .split(";")
      .map((t) => t.trim())
      .filter(Boolean),
    ...(extra?.excluding ? { excluding: extra.excluding } : {}),
    ...(extra?.note ? { note: extra.note } : {}),
  };
}

/* ------------------------------------------------------------------ */
/* Physics                                                             */
/* ------------------------------------------------------------------ */

const physics: PartTestTopicGroup[][] = [
  [
    g(
      "Error Analysis, Screw Gauge, Vernier Calipers, All Experiments Of JEE Advance Syllabus",
      "Least count, significant figures; Methods of measurement and error analysis for physical quantities pertaining to the following experiments: Experiments based on using Vernier calipers and screw gauge (micrometer), Determination of g using simple pendulum, Young's modulus by Searle's method, Specific heat of a liquid using calorimeter, focal length of a concave mirror and a convex lens using u-v method, Speed of sound using resonance column, Verification of Ohm's law using voltmeter and ammeter, and specific resistance of the material of a wire using meter bridge and post office box.",
    ),
    g(
      "KTG and Thermodynamics",
      "Ideal gas laws; Specific heats (Cv and Cp for monoatomic and diatomic gases); Isothermal and adiabatic processes, bulk modulus of gases; Equivalence of heat and work; First law of thermodynamics and its applications (only for ideal gases); Equation of state of a perfect gas, work done on compressing a gas, kinetic theory of gases assumption, concept of pressure, Kinetic energy and temperature rms speed of gas molecules; Degrees of freedom, Law of equipartition of energy, applications to specific heat capacities of gases; Mean free path, Avogadro's number.",
    ),
  ],
  [
    g(
      "Heat Transfer, Thermal Expansion and Calorimetry",
      "Thermal expansion of solids, liquids and gases; Calorimetry, latent heat; Heat conduction in one dimension; Elementary concepts of convection and radiation; Newton's law of cooling; Blackbody radiation: absorptive and emissive powers; Kirchhoff's law; Wien's displacement law, Stefan's law.",
    ),
    g(
      "Electrostatics, Gauss law (Excluding capacitors)",
      "Coulomb's law; Electric field and potential; Electrical potential energy of a system of point charges and of electrical dipoles in a uniform electrostatic field; Electric field lines; Flux of electric field; Gauss's law and its application in simple cases, such as, to find field due to infinitely long straight wire, uniformly charged infinite plane sheet and uniformly charged thin spherical shell.",
    ),
  ],
  [
    g(
      "Gravitation and Current electricity (Excluding capacitors and RC Circuits)",
      "Law of gravitation; Gravitational potential and field; Acceleration due to gravity; Motion of planets and satellites in circular orbits; Escape velocity. Measuring instruments (voltmeter, ammeter, whetstone bridge, potentiometer, moving coil galvanometer) Electric current; Ohm's law; Series and parallel arrangements of resistances and cells; Kirchhoff's laws and simple applications; Heating effect of current.",
      {
        excluding: [
          "Carbon resistors, colour code for carbon resistors, series and parallel combinations of resistors",
        ],
      },
    ),
    g(
      "Capacitors, dielectrics and RC Circuits",
      "Capacitance; Parallel plate capacitor with and without dielectrics; Capacitors in series and parallel; Energy stored in a capacitor.",
    ),
  ],
  [
    g(
      "Electromagnetism",
      "Biot–Savart's law and Ampere's law; Magnetic field near a current-carrying straight wire, along the axis of a circular coil and inside a long straight solenoid; Force on a moving charge and on a current-carrying wire in a uniform magnetic field. Magnetic moment of a current loop; Effect of a uniform magnetic field on a current loop",
      {
        excluding: [
          "Cyclotron, torque on magnetic dipole (bar magnet) in a uniform magnetic field",
        ],
      },
    ),
    g(
      "EMI",
      "Electromagnetic induction: Faraday's law, Lenz's law; Self and mutual inductance; RC, LR and LC circuits with d.c sources.",
    ),
  ],
  [
    g("AC and String Waves", "RC, LR and LC circuits with a.c sources.", {
      excluding: ["Power factor, wattless current"],
    }),
    g(
      "String waves",
      "Wave motion (plane waves only), transverse waves, superposition of waves; Progressive and stationary waves; Vibration of strings.",
    ),
    g(
      "Complete Waves",
      "Wave motion (plane waves only), longitudinal and transverse waves, superposition of waves; Progressive and stationary waves; Vibration of strings and air columns; Resonance; Beats; Speed of sound in gases; Doppler effect (in sound).",
    ),
  ],
  [
    g(
      "Ray optics",
      "Rectilinear propagation of light; Reflection and refraction at plane and spherical surfaces; Total internal reflection; Deviation and dispersion of light by a prism; Thin lenses; Combinations of mirrors and thin lenses; Magnification.",
      {
        excluding: [
          "Reflection of light, spherical mirrors, (recapitulation) mirror formula, Scattering of light",
        ],
      },
    ),
    g(
      "Wave optics and Atomic Physics",
      "Wave nature of light: Huygen's principle, interference limited to Young's double-slit experiment. Bohr's theory of hydrogen-like atoms, atomic spectra",
    ),
  ],
  [
    g(
      "Photoelectric Effect, X-rays and Nuclear Physics",
      "Atomic nucleus; α, β and γ radiations; Law of radioactive decay; Decay constant; Half life and mean life; Binding energy and its calculation; Fission and fusion processes; Energy calculation in these processes. Photoelectric effect; Characteristic and continuous X-rays, Moseley's law; de Broglie wavelength of matter waves.",
    ),
    g(
      "Fluid Statics and Surface tension",
      "Pressure in a fluid; Pascal's law; Buoyancy; Surface energy and surface tension, capillary rise",
    ),
  ],
  [
    g(
      "Elasticity, Viscosity and Fluid dynamics",
      "Viscosity (Poiseuille's equation excluded), Stoke's law; Terminal velocity, Streamline flow, equation of continuity, Bernoulli's theorem and its applications, Reynolds Number.",
    ),
    g(
      "SHM, Units and dimensions",
      "Linear and angular simple harmonic motions. Units and dimensions, dimensional analysis",
    ),
  ],
  [
    g(
      "Circular motion and Work power energy",
      "Uniform circular motion, Kinetic and potential energy; Work and power; mechanical energy",
    ),
    g(
      "COM and Collisions",
      "Systems of particles; Centre of mass and its motion; Impulse; Elastic and inelastic collisions.",
    ),
  ],
  [
    g(
      "Complete Rotational dynamics-1",
      "Rigid body, moment of inertia, parallel and perpendicular axes theorems, moment of inertia of uniform bodies with simple geometrical shapes; Angular momentum; Torque; Conservation of angular momentum; Dynamics of rigid bodies with fixed axis of rotation; Rolling without slipping of rings, cylinders and spheres; Equilibrium of rigid bodies; Collision of point masses with rigid bodies.",
    ),
    g(
      "Complete Rotational dynamics-2",
      "Rigid body, moment of inertia, parallel and perpendicular axes theorems, moment of inertia of uniform bodies with simple geometrical shapes; Angular momentum; Torque; Conservation of angular momentum; Dynamics of rigid bodies with fixed axis of rotation; Rolling without slipping of rings, cylinders and spheres; Equilibrium of rigid bodies; Collision of point masses with rigid bodies.",
    ),
  ],
];

/* ------------------------------------------------------------------ */
/* Chemistry                                                           */
/* ------------------------------------------------------------------ */

const chemistry: PartTestTopicGroup[][] = [
  [
    g(
      "ISOMERISM",
      "Structural and geometrical isomerism; Optical isomerism of compounds containing up to two asymmetric centres, (R,S and E,Z nomenclature excluded); Conformations of ethane and butane (Newman projections)",
    ),
    g(
      "GOC",
      "inductive effect resonance, aromaticity and hyperconjugation Reactive intermediates acidic and basic strength",
    ),
  ],
  [
    g(
      "HYDROCARBON (IUPAC AS PER NCERT) — Preparation, properties and reactions of alkanes",
      "Homologous series, physical properties of alkanes (melting points, boiling points and density); Combustion and halogenation of alkanes; Preparation of alkanes by Wurtz reaction and decarboxylation reactions.",
    ),
    g(
      "Preparation, properties and reactions of alkenes and alkynes",
      "Physical properties of alkenes and alkynes (boiling points, density and dipole moments); Acidity of alkynes; Acid catalysed hydration of alkenes and alkynes Reactions of alkenes with KMnO4 and ozone; Reduction of alkenes and alkynes; Preparation of alkenes and alkynes by elimination reactions; Electrophilic addition reactions of alkenes with X2, HX, HOX and H2O (X=halogen); Addition reactions of alkynes; Metal acetylides",
    ),
    g(
      "BENZENE AND ARYL HALIDES (IUPAC AS PER NCERT)",
      "Reactions of benzene: Structure and aromaticity; Electrophilic substitution reactions: halogenation, nitration, sulphonation, Friedel Crafts alkylation and acylation; Effect of o-, m and p-directing groups in monosubstituted benzenes; Haloarenes: nucleophilic aromatic substitution in haloarenes and substituted haloarenes (excluding Benzyne mechanism and Cine substitution)",
    ),
  ],
  [
    g(
      "ALKYL HALIDES AND ETHERS (IUPAC AS PER NCERT)",
      "Characteristic reactions of the following : Alkyl halides: Rearrangement reactions of alkyl carbocation, Grignard reactions, nucleophilic substitution reactions, elimination reactions.; Ethers: preparation and properties of ether",
      {
        note: "Many ether reactions have SN1 & SN2 applications so we kept ether with alkyl halide chapter",
      },
    ),
    g(
      "ALCOHOLS, PHENOL CARBOXYLIC ACID (IUPAC AS PER NCERT)",
      "Characteristic reactions of the following : Alcohols: Esterification, dehydration and oxidation, reaction with sodium, phosphorus halides, ZnCl2/concentrated HCl, conversion of alcohols into aldehydes and ketones; Preparation by Williamson's Synthesis; Phenols: Acidity, electrophilic substitution reactions (halogenation, nitration and sulphonation); Reimer-Tiemann reaction, Kolbe reaction; carboxylic acid: preparation and properties of carboxylic acid",
    ),
  ],
  [
    g(
      "CARBONYL COMPOUNDS / (TAUTOMERISM) (IUPAC AS PER NCERT)",
      "Characteristic reactions of the following : conversion of alcohols into aldehydes and ketones; Aldehydes and Ketones: oxidation, reduction, oxime and hydrazone formation; Aldol condensation, Perkin reaction; Cannizzaro reaction; Haloform reaction and nucleophilic addition reactions (Grignard addition)",
    ),
    g(
      "AMINES & ACID DERIVATIVES (IUPAC AS PER NCERT)",
      "Amines: basicity of substituted anilines and aliphatic amines, preparation from nitro compounds, reaction with nitrous acid, azo coupling reaction of diazonium salts of aromatic amines, Sandmeyer and related reactions of diazonium salts; carbylamines reaction; ACID DERIVATIVES: formation of esters, acid chlorides and amides, ester hydrolysis",
      {
        note: "As amine chapter need more time, so we kept amine chapter with acid derivatives, so that students get sufficient time for amine chapter.",
      },
    ),
  ],
  [
    g(
      "MOLE CONCEPT (EXCLUDING REDOX REACTIONS & TITRATIONS) AND GASEOUS STATE",
      "Mole Concept; Chemical formulae; Balanced chemical equations; Calculations based on mole concept concentration terms; Gaseous state: Absolute scale of temperature, ideal gas equation; Deviation from ideality, van der Waals equation; Kinetic theory of gases; Average, root mean square and most probable velocities and their relation with temperature; Law of partial pressures; Vapour pressure; Diffusion of gases.",
      { excluding: ["Redox reactions & titrations (from the Mole Concept chapter)"] },
    ),
    g(
      "CHEMICAL KINETICS AND NUCLEAR CHEMISTRY, REDOX REACTIONS AND TITRATIONS",
      "Chemical kinetics: Rates of chemical reactions; Order of reactions; Rate constant; First order reactions; Temperature dependence of rate constant (Arrhenius equation); Nuclear chemistry: Radioactivity: isotopes and isobars; Properties of α, β and γ rays; Kinetics of radioactive decay (decay series excluded), carbon dating; REDOX REACTIONS AND TITRATIONS: Balancing reactions acid base titrations redox Titration",
    ),
  ],
  [
    g(
      "THERMODYNAMICS: Thermodynamics & Thermochemistry",
      "First law of Thermodynamics; Internal energy, work and heat, pressure volume work; Enthalpy, Hess's law; Heat of reaction, fusion and vapourization; Second law of thermodynamics; Entropy; Free energy; Criterion of spontaneity",
    ),
    g(
      "CHEMICAL & IONIC EQUILIBRIUM",
      "Chemical equilibrium: Law of mass action; Equilibrium constant, Le Chatelier's principle (effect of concentration, temperature and pressure); Significance of ΔG and ΔG° in equilibrium; IONIC EQUILIBRIUM: Solubility product, common ion effect, pH and buffer solutions; Acids and bases (Bronsted and Lewis concepts); Hydrolysis of salts, titration curves",
    ),
  ],
  [
    g(
      "ELECTROCHEMISTRY",
      "Electrochemical cells and cell reactions; Standard electrode potentials; Nernst equation and its relation to ΔG; Electrochemical series, emf of galvanic cells; Faraday's laws of electrolysis; Electrolytic conductance, specific, equivalent and molar conductivity, Kohlrausch's law; Concentration cells.",
    ),
    g(
      "SURFACE CHEMISTRY, LIQUID SOLUTIONS",
      "Surface chemistry: Elementary concepts of adsorption (excluding adsorption isotherms); Colloids: types, methods of preparation and general properties; surfactants and micelles (only definitions and examples).",
      {
        excluding: [
          "emulsions and types, catalysis: homogenous and heterogeneous, activity and selectivity of solid catalysts; enzyme catalysis.",
        ],
      },
    ),
    g(
      "Liquid Solutions",
      "Raoult's law; Molecular weight determination from lowering of vapour pressure, elevation of boiling point and depression of freezing point",
    ),
  ],
  [
    g(
      "ATOMIC STRUCTURE & SOLID STATE — Atomic structure",
      "Bohr model, spectrum of hydrogen atom, quantum numbers; Wave-particle duality, de Broglie hypothesis; Uncertainty principle; Qualitative quantum mechanical picture of hydrogen atom, shapes of s, p and d orbitals; Electronic configurations of elements (up to atomic number 36); Aufbau principle; Pauli's exclusion principle and Hund's rule",
    ),
    g(
      "SOLID STATE",
      "Classification of solids, crystalline state, seven crystal systems (cell parameters a, b, c, α, β, γ), close packed structure of solids (cubic), packing in fcc, bcc and hcp lattices; Nearest neighbours, ionic radii, simple ionic compounds, point defects.",
      { excluding: ["Electrical and magnetic properties"] },
    ),
    g(
      "PERIODIC PROPERTIES AND d-BLOCK ELEMENTS",
      "1) Classification of elements; 2) Periodic properties; d-BLOCK ELEMENTS: Definition, general characteristics size ionisation enthalpy, electrode potential, oxidation states and their stabilities, colour, magnetic properties",
    ),
  ],
  [
    g(
      "CHEMICAL BONDING",
      "Orbital overlap and covalent bond; Hybridisation (involving s, p and d orbitals only); Orbital energy diagrams for homonuclear diatomic species; Hydrogen bond; Polarity in molecules, dipole moment (qualitative aspects only); VSEPR model and shapes of molecules (linear, angular, triangular, square planar, pyramidal, square pyramidal, trigonal bipyramidal, tetrahedral and octahedral). MOT",
    ),
    g("Group 18", "Preparation and properties of the Xenon fluorides"),
    g(
      "COORDINATION COMPOUNDS",
      "nomenclature of mononuclear coordination compounds hybridization and geometries of mononuclear coordination compounds (linear, tetrahedral, square planar and octahedral); bonding in metal carbonyls CFT, Stability of complexes, isomerism",
    ),
  ],
  [
    g(
      "s-Block",
      "General characteristic properties and reactions of elements Oxides, peroxides, hydroxides, carbonates, bicarbonates, chlorides and sulphates of sodium, potassium, magnesium and calcium",
    ),
    g(
      "Group-14",
      "Isolation/preparation and properties of the Silicon Properties of allotropes of carbon (only diamond and graphite) Preparation and properties of the following compounds Carbon: Oxides And Oxyacid (Carbonic Acid); Silicon: Silicones, Silicates and Silicon Carbide",
    ),
    g(
      "Group-13",
      "Isolation/preparation and properties of the Boron. Preparation and properties of following compounds. Boron: diborane, boric acid and borax; Aluminium: alumina, aluminium chloride and alums",
    ),
    g(
      "Group-16",
      "Isolation/preparation and properties of the Following non-metals: oxygen, sulphur; properties of allotropes Sulphur. Preparation and properties of the following Compounds: hydrogen sulphide, oxides, sulphurous acid, sulphuric acid and sodium thiosulphate",
    ),
  ],
];

/* ------------------------------------------------------------------ */
/* Mathematics                                                         */
/* ------------------------------------------------------------------ */

const mathematics: PartTestTopicGroup[][] = [
  [
    g(
      "Functions",
      "Real Valued Functions Of A Real Variable, Into, Onto And One-To-One Functions, Absolute Value, Polynomial, Rational, Trigonometric, Exponential And Logarithmic Functions, Even And Odd Functions",
      {
        excluding: [
          "Sum, Difference, Product And Quotient Of Two Functions, Composite Functions, Inverse Of A Function",
        ],
      },
    ),
    g("Limits", "Limits"),
  ],
  [
    g(
      "Continuity, Differentiability, Derivatives",
      "Continuity Of Composite Functions, Intermediate Value Property Of Continuous Functions, Derivative of a function, derivative of the sum, difference, product and quotient of two functions, chain rule, derivatives of polynomial, rational, trigonometric, inverse trigonometric, exponential and logarithmic functions; derivatives of implicit functions, derivatives up to order two",
    ),
    g(
      "Indefinite Integration",
      "Integration as the inverse process of differentiation, indefinite integrals of standard functions; integration by parts, integration by the methods of substitution and partial fractions.",
      {
        excluding: ["∫ √(ax² + bx + c) dx and ∫ (ax + b) √(ax² + bx + c) dx"],
      },
    ),
  ],
  [
    g(
      "Definite Integration",
      "definite integrals and their properties, fundamental theorem of integral calculus.",
      { excluding: ["definite integrals as a limit of sum"] },
    ),
    g(
      "Areas",
      "application of definite integrals to the determination of areas involving simple curves.",
    ),
  ],
  [
    g(
      "Differential Equations",
      "Solution of homogeneous differential equations, separation of variables method",
      {
        excluding: [
          "Formation of ordinary differential equations, linear first order differential equations.",
        ],
      },
    ),
    g(
      "Applications Of Derivatives",
      "Geometrical interpretation of the derivative, tangents and normals, increasing and decreasing functions, maximum and minimum values of a function",
      {
        excluding: [
          "rolle's theorem and lagrange's mean value theorem. Rate of change of bodies, use of derivatives in approximation.",
        ],
      },
    ),
  ],
  [
    g("Vectors", "Addition Of Vectors, Scalar Multiplication, Dot And Cross Products", {
      excluding: ["Scalar Triple Products And Their Geometrical Interpretations."],
    }),
    g(
      "Vectors -3D",
      "Direction Cosines And Direction Ratios, Equation Of A Straight Line In Space, Equation Of A Plane, Distance Of A Point From A Plane.",
      { excluding: ["Angle between lines, line and plane, two planes."] },
    ),
  ],
  [
    g(
      "Matrices",
      "Matrices as a rectangular array of real numbers, equality of matrices, addition, multiplication by a scalar and product of matrices, transpose of a matrix, determinant of a square matrix of order up to three inverse of a square matrix of order up to three, properties of these matrix operations, diagonal, symmetric and skew-symmetric matrices and their properties, solutions of simultaneous linear equations in two or three variables.",
      {
        excluding: [
          "Existence of non zero matrices whose product is zero matrix. Elementry row transformation proof of uniqueness inverse of matrix. Properties of Determinants, consistency, inconsistency of number of solutions of system of equations.",
        ],
      },
    ),
    g("DETERMINANTS", "DETERMINANTS"),
  ],
  [
    g(
      "Straight line: Two dimensions",
      "Cartesian coordinates, distance between two points, section formulae, shift of origin; equation of a straight line in various forms, angle between two lines, distance of a point from a line; lines through the point of intersection of two given lines, equation of the bisector of the angle between two lines, concurrency of lines; centroid, orthocentre, incentre and circumcentre of a triangle; locus problems.",
    ),
    g(
      "CIRCLES",
      "equation of a circle in various forms, equations of tangent, normal and chord; parametric equations of a circle, intersection of a circle with a straight line or a circle",
    ),
  ],
  [
    g(
      "PARABOLA",
      "In Standard Form, Focus, Directrix, Parametric Equations, Equations Of Tangent And Normal, Locus Problems.",
    ),
    g(
      "Ellipse And Hyperbola",
      "In Standard Form, Their Foci, Directrices And Eccentricity, Parametric Equations, Equations Of Tangent And Normal, Locus Problems.",
    ),
  ],
  [
    g("Trigonometry", "Trigonometry Upto Transformations & Trigonometric Equations"),
    g("Inverse Trigonometric Functions", "Principal Value Only"),
  ],
  [
    g(
      "Complex Numbers",
      "algebra of complex numbers, addition, multiplication, conjugation properties of modulus and principal argument, triangle inequality, cube roots of unity geometric interpretations, polar representation",
    ),
    g(
      "Quadratic Equations And Logarithms",
      "Quadratic Equations In Real And Complex Number System And Their Solutions, Relation Between Roots And Coefficients Nature Of Roots, Formation Of Quadratic Equation With Given Roots, Logarithm And Their Properties",
    ),
    g(
      "Sequences And Series",
      "Arithmetic, Geometric And Harmonic Progressions, Arithmetic, Geometric And Harmonic Means, Sums Of Finite Arithmetic And Geometric Progressions, Infinite Geometric Series, Sums Of Squares And Cubes Of The First N Natural Numbers",
    ),
  ],
];

/** Ten JEE Advanced part-test records, each with all three subject allocations. */
export const jeeAdvancedPartTests: PartTestRecord[] = Array.from({ length: 10 }, (_, i) => ({
  id: `jee-advanced-part-test-${i + 1}`,
  name: `Part Test ${i + 1}`,
  subjects: [
    { subject: "Physics", groups: physics[i] ?? [] },
    { subject: "Chemistry", groups: chemistry[i] ?? [] },
    { subject: "Mathematics", groups: mathematics[i] ?? [] },
  ],
}));

import type { SyllabusContent, SyllabusUnit } from "@/content/types";
import { sources } from "@/content/sources";

/**
 * JEE syllabus — production content, verified 27 August 2026.
 *
 * Provenance rules enforced by this record:
 *  - Every Main hierarchy row is sourced to the official NTA document (S1).
 *  - Every Advanced hierarchy row is sourced to the official JEE Advanced
 *    document (S3).
 *  - `name` is always the authority-issued heading. `group` is a Rank Sarthi
 *    editorial navigation layer and is labelled as such wherever rendered.
 *  - No chapter weightage, frequency, priority score or trend percentage
 *    appears anywhere in this file. B27 stays unrendered by design.
 */

const S1 = ["nta-jee-syllabus"];
const S3 = ["jee-advanced-syllabus"];

function mainUnit(
  id: string,
  group: string,
  name: string,
  scope: string,
  chapterSlugs?: string[],
): SyllabusUnit {
  return { id, group, name, scope, topics: [], variant: "main", sourceRefs: S1, ...(chapterSlugs ? { chapterSlugs } : {}) };
}

function faq(question: string, answer: string) {
  return { question, answer: [{ type: "paragraph" as const, children: [{ text: answer }] }] };
}

function advUnit(id: string, group: string, name: string, scope: string): SyllabusUnit {
  return { id, group, name, scope, topics: [], variant: "advanced", sourceRefs: S3 };
}

export const jeeSyllabus: SyllabusContent = {
  exam: "JEE",
  platform: "jee",
  contentStatus: "draft",
  title: "JEE syllabus: latest official Main and Advanced PCM topics",
  lastVerified: "27 August 2026",

  hero: {
    eyebrow: "Latest official baseline verified 27 August 2026",
    intent:
      "Browse the JEE syllabus by exam, subject, unit group, chapter and topic. The page uses the latest syllabus documents currently listed by NTA and JEE Advanced, then adds prerequisite paths so you can decide what to learn first.",
    chips: [
      "Official-source checked",
      "Main and Advanced labelled separately",
      "No invented chapter weightage",
      "Full syllabus remains visible in HTML",
    ],
  },

  intro: [
    {
      type: "paragraph",
      children: [
        {
          text: "The latest official documents available when this page was verified were JEE Main 2026 and JEE Advanced 2026. No 2027 syllabus was listed on the official portals on 27 August 2026. Students preparing for 2027 can use this as a planning baseline, but must recheck when the new official documents are published.",
        },
      ],
    },
    {
      type: "note",
      tone: "source",
      children: [
        {
          text: "Official headings are preserved exactly as issued. Unit groups, prerequisite paths and relationship labels are Rank Sarthi learning structure, not official order and not weightage.",
        },
      ],
    },
  ],

  officialSource: sources["nta-jee-syllabus"]!,
  sourceRefs: ["nta-jee-syllabus", "jee-advanced-syllabus"],

  /* B03 equivalent — cycle-dependent official status, rendered through B25. */
  cycleStatus: {
    id: "official-status",
    heading: "Official syllabus status at a glance",
    columns: ["Item", "Verified position"],
    rows: [
      ["Latest JEE Main syllabus listed by NTA", "JEE Main 2026"],
      ["JEE Main scope on this page", "Paper 1 for B.E./B.Tech: Mathematics, Physics and Chemistry"],
      ["JEE Main official unit count", "Mathematics 14, Physics 20, Chemistry 20"],
      ["Latest JEE Advanced syllabus listed", "JEE Advanced 2026"],
      ["JEE Advanced official note", "The 2026 syllabus remains the same as the 2025 syllabus"],
      [
        "2027 status on verification date",
        "No 2027 syllabus was listed on the official JEE Main or JEE Advanced syllabus pages checked on 27 August 2026",
      ],
      [
        "B.Arch and B.Planning",
        "Not covered in this Paper 1 explorer. Use the official NTA document for Paper 2A and Paper 2B scope.",
      ],
      [
        "Weightage",
        "Not part of the official syllabus. Historical paper analysis must be labelled separately and is not rendered here.",
      ],
    ],
    note: "Checked against the official NTA syllabus page and the official JEE Advanced 2026 syllabus.",
    verifiedOn: "27 August 2026",
    sourceRefs: ["nta-jee-syllabus", "jee-advanced-syllabus"],
    cycleState: "Latest official baseline: 2026 cycle",
    refreshTrigger: "Recheck when NTA or JEE Advanced publishes a new cycle syllabus document.",
  },

  /* B25 — scope selector. */
  scopeSelector: {
    id: "scope",
    heading: "Choose the correct syllabus before you start",
    intro:
      "JEE Main and JEE Advanced share a large PCM foundation, but they are governed by separate official syllabus documents. Prepare from the document for your target exam, not from a combined coaching list that hides the differences.",
    columns: ["Target", "Official subject scope", "Use on this page", "Important boundary"],
    rows: [
      [
        "JEE Main Paper 1, B.E./B.Tech",
        "Mathematics, Physics and Chemistry",
        "Use the JEE Main explorer",
        "The official Paper 1 syllabus contains 54 units across the three subjects.",
      ],
      [
        "JEE Advanced",
        "Mathematics, Physics and Chemistry",
        "Use the JEE Advanced explorer",
        "Do not assume JEE Main and Advanced have identical topic scope or depth. Use the separate official Advanced document.",
      ],
      [
        "JEE Main Paper 2A, B.Arch",
        "Mathematics, Aptitude Test and Drawing Test",
        "Not covered in this explorer",
        "Use the official NTA Paper 2A syllabus.",
      ],
      [
        "JEE Main Paper 2B, B.Planning",
        "Mathematics, Aptitude Test and Planning",
        "Not covered in this explorer",
        "Use the official NTA Paper 2B syllabus.",
      ],
    ],
    note: "Sources: official NTA JEE Main 2026 syllabus and official JEE Advanced 2026 syllabus.",
  },

  /* Legacy single-hierarchy field kept empty; production render uses
     `hierarchies` so Main and Advanced never merge. */
  sections: [],

  hierarchies: [
    {
      id: "jee-main-syllabus",
      heading: "JEE Main Paper 1 syllabus",
      officialLabel: "Official syllabus — NTA",
      editorialLabel: "Rank Sarthi learning structure",
      intro:
        "Every row below uses the official NTA unit heading. Topic scope condenses the official wording for reading on a phone; it does not add, remove or reorder official scope.",
      readingNotes: [
        "Subject is the official Paper 1 subject.",
        "Unit group is a Rank Sarthi navigation layer. It is not an NTA unit.",
        "Chapter uses the official NTA unit heading.",
        "Topic scope summarises the official unit scope in student-friendly language.",
      ],
      sourceRefs: S1,
      verifiedOn: "27 August 2026",
      sections: [
        {
          id: "main-mathematics",
          subject: "Mathematics",
          accent: "jee",
          countLabel: "14 official units",
          units: [
            mainUnit("m-sets", "Foundations", "Sets, Relations and Functions", "Set representation and operations, power set, relations and their types, equivalence relations, functions, one-one, into, onto and composition."),
            mainUnit("m-complex", "Algebra", "Complex Numbers and Quadratic Equations", "Complex numbers and Argand plane, algebra, modulus and argument, quadratic equations, roots, coefficients, nature of roots and equation formation."),
            mainUnit("m-matrices", "Algebra", "Matrices and Determinants", "Matrix algebra and types, determinants up to order three, triangle area, adjoint, inverse, consistency and simultaneous linear equations."),
            mainUnit("m-pnc", "Algebra", "Permutations and Combinations", "Fundamental counting principle, permutations, combinations and simple applications."),
            mainUnit("m-binomial", "Algebra", "Binomial Theorem and Its Simple Applications", "Positive integral index, general term, middle term and direct applications."),
            mainUnit("m-sequence", "Algebra", "Sequence and Series", "Arithmetic and geometric progressions, insertion of means and the relation between arithmetic and geometric means."),
            mainUnit("m-limits", "Calculus", "Limit, Continuity and Differentiability", "Functions and graphs, limits, continuity, derivatives up to second order, composite and implicit differentiation, rate of change, monotonicity, maxima and minima."),
            mainUnit("m-integral", "Calculus", "Integral Calculus", "Antiderivatives, standard integrals, substitution, parts, partial fractions, trigonometric identities, definite integrals, fundamental theorem and area under simple curves."),
            mainUnit("m-de", "Calculus", "Differential Equations", "Order and degree, separation of variables, homogeneous equations and first-order linear equations."),
            mainUnit("m-coordinate", "Coordinate Geometry", "Coordinate Geometry", "Cartesian plane, distance and section formulae, locus, straight lines, triangle centres, circles and standard parabola, ellipse and hyperbola forms."),
            mainUnit("m-3d", "Coordinate Geometry", "Three Dimensional Geometry", "Points in space, direction cosines and ratios, equations of lines and planes, angles, intersections and shortest distance between skew lines."),
            mainUnit("m-vectors", "Vector Methods", "Vector Algebra", "Vectors and scalars, addition, components, scalar and vector products and scalar triple product."),
            mainUnit("m-stats", "Data and Chance", "Statistics and Probability", "Measures of dispersion for grouped and ungrouped data, probability of events, addition and multiplication theorems and Bayes theorem."),
            mainUnit("m-trig", "Trigonometry", "Trigonometry", "Trigonometric identities and equations, functions, inverse trigonometric functions and their properties."),
          ],
        },
        {
          id: "main-physics",
          subject: "Physics",
          accent: "jee",
          countLabel: "20 official units",
          units: [
            mainUnit("p-units", "Measurement", "Units and Measurements", "SI and other units, fundamental and derived units, least count, significant figures, measurement errors, dimensions and dimensional analysis."),
            mainUnit("p-kinematics", "Mechanics", "Kinematics", "Frames of reference, one-dimensional motion, motion graphs, velocity and acceleration, relative velocity, plane motion, projectiles and uniform circular motion."),
            mainUnit("p-laws", "Mechanics", "Laws of Motion", "Force, inertia, Newton's laws, momentum, impulse, conservation, equilibrium, friction and centripetal-force applications including banked roads."),
            mainUnit("p-work", "Mechanics", "Work, Energy and Power", "Work by constant and variable forces, kinetic and potential energy, work-energy theorem, power, springs, conservation, vertical circles and collisions."),
            mainUnit("p-rotation", "Mechanics", "Rotational Motion", "Centre of mass, torque, angular momentum, moment of inertia, radius of gyration, axis theorems, rigid-body equilibrium and rotational equations."),
            mainUnit("p-gravitation", "Mechanics", "Gravitation", "Universal gravitation, variation of g, Kepler's laws, potential and potential energy, escape velocity and satellite motion."),
            mainUnit("p-solids-liquids", "Matter and Heat", "Properties of Solids and Liquids", "Elasticity and moduli, fluid pressure, viscosity, Stokes law, terminal velocity, flow and Bernoulli principle, surface tension, capillarity, heat, calorimetry, phase change and heat transfer."),
            mainUnit("p-thermo", "Matter and Heat", "Thermodynamics", "Thermal equilibrium, temperature, heat, work, internal energy, zeroth and first laws, isothermal and adiabatic processes, second law, reversibility and irreversibility."),
            mainUnit("p-kinetic", "Matter and Heat", "Kinetic Theory of Gases", "Perfect-gas equation, kinetic-theory assumptions, pressure and temperature interpretation, RMS speed, degrees of freedom, equipartition, heat capacity, mean free path and Avogadro number."),
            mainUnit("p-oscillations", "Oscillations and Waves", "Oscillations and Waves", "Periodic motion, SHM, spring and pendulum models, SHM energy, travelling waves, superposition, reflection, standing waves, strings, organ pipes, harmonics and beats."),
            mainUnit("p-electrostatics", "Electricity", "Electrostatics", "Charges, Coulomb law, superposition, field and field lines, dipoles, flux and Gauss law, potential, equipotential surfaces, potential energy, conductors, dielectrics, capacitance and stored energy.", ["/jee/physics/electrostatics"]),
            mainUnit("p-current", "Electricity", "Current Electricity", "Current, drift velocity and mobility, Ohm law, resistance and resistivity, power, resistor and cell combinations, internal resistance, Kirchhoff laws, Wheatstone bridge and metre bridge.", ["/jee/physics/current-electricity"]),
            mainUnit("p-magnetism", "Magnetism", "Magnetic Effects of Current and Magnetism", "Biot-Savart and Ampere laws, forces on charges and conductors, parallel currents, current-loop torque, galvanometer, magnetic dipoles, bar magnets and magnetic materials."),
            mainUnit("p-emi", "Electromagnetism", "Electromagnetic Induction and Alternating Currents", "Faraday and Lenz laws, eddy currents, self and mutual inductance, AC values, reactance, impedance, LCR series circuits, resonance, AC power, generators and transformers."),
            mainUnit("p-emwaves", "Electromagnetism", "Electromagnetic Waves", "Displacement current, wave characteristics, transverse nature, electromagnetic spectrum and applications."),
            mainUnit("p-optics", "Optics", "Optics", "Mirrors, refraction, lenses, total internal reflection, prisms, microscopes and telescopes; wavefronts, Huygens principle, interference, YDSE, diffraction and polarization."),
            mainUnit("p-dual", "Modern Physics", "Dual Nature of Matter and Radiation", "Photoelectric effect and observations, Einstein equation, particle nature of light, matter waves and de Broglie relation."),
            mainUnit("p-atoms", "Modern Physics", "Atoms and Nuclei", "Rutherford and Bohr models, energy levels and hydrogen spectrum; nuclear composition, mass-energy relation, mass defect, binding energy, fission and fusion."),
            mainUnit("p-devices", "Electronics", "Electronic Devices", "Semiconductors, diode characteristics and rectification, LED, photodiode, solar cell, Zener regulation and OR, AND, NOT, NAND and NOR gates."),
            {
              ...mainUnit("p-experimental", "Laboratory Skills", "Experimental Skills", "Eighteen listed experiments and activities covering measurement, mechanics, fluids, heat, sound, electricity, optics, semiconductor characteristics and component identification."),
              topics: [
                "Vernier callipers",
                "Screw gauge",
                "Pendulum energy loss",
                "Principle of moments",
                "Young's modulus",
                "Surface tension",
                "Viscosity",
                "Resonance-tube sound speed",
                "Specific heat by mixtures",
                "Metre-bridge resistivity",
                "Ohm-law resistance",
                "Galvanometer resistance and figure of merit",
                "Focal-length measurements",
                "Prism deviation",
                "Glass-slab refractive index",
                "p-n diode curve",
                "Zener curve and breakdown voltage",
                "Identification of diode, LED, resistor and capacitor",
              ],
            },
          ],
        },
        {
          id: "main-chemistry",
          subject: "Chemistry",
          accent: "jee",
          countLabel: "20 official units",
          units: [
            mainUnit("c-basic", "Physical Chemistry", "Some Basic Concepts in Chemistry", "Matter, Dalton's theory, atom and molecule concepts, combination laws, masses, mole concept, molar mass, composition, formulae, equations and stoichiometry."),
            mainUnit("c-atomic", "Physical Chemistry", "Atomic Structure", "Electromagnetic radiation, photoelectric effect, hydrogen spectrum, Bohr model, matter waves, uncertainty, quantum model, orbitals, quantum numbers and electron configuration rules."),
            mainUnit("c-bonding", "Physical Chemistry", "Chemical Bonding and Molecular Structure", "Ionic and covalent bonding, lattice enthalpy, electronegativity, Fajan's rule, dipole moment, VSEPR, hybridisation, resonance, molecular orbitals, bond order, metallic and hydrogen bonding."),
            mainUnit("c-thermo", "Physical Chemistry", "Chemical Thermodynamics", "Systems and properties, state functions, entropy, first law, heat and work, internal energy, enthalpy, heat capacity, Hess law, enthalpy changes, second law, spontaneity, Gibbs energy and equilibrium constant."),
            mainUnit("c-solutions", "Physical Chemistry", "Solutions", "Concentration measures, vapour pressure, Raoult law, ideal and non-ideal solutions, colligative properties, molar-mass determination, abnormal molar mass and van't Hoff factor."),
            mainUnit("c-equilibrium", "Physical Chemistry", "Equilibrium", "Physical and chemical equilibrium, Henry law, equilibrium constants, Gibbs energy, Le Chatelier principle, acids and bases, ionic equilibrium, pH, buffers, hydrolysis and solubility product."),
            mainUnit("c-redox", "Physical Chemistry", "Redox Reactions and Electrochemistry", "Oxidation and reduction, oxidation numbers, redox balancing, conductance, Kohlrausch law, cells, electrodes, potentials, emf, Nernst equation, Gibbs relation, batteries and fuel cells."),
            mainUnit("c-kinetics", "Physical Chemistry", "Chemical Kinetics", "Reaction rate and factors, elementary and complex reactions, order and molecularity, rate law, zero and first-order forms, half-life, Arrhenius theory, activation energy and collision theory."),
            mainUnit("c-periodicity", "Inorganic Chemistry", "Classification of Elements and Periodicity in Properties", "Modern periodic law, periodic table blocks and trends in radii, ionisation enthalpy, electron-gain enthalpy, valence, oxidation state and reactivity."),
            mainUnit("c-pblock", "Inorganic Chemistry", "p-Block Elements", "Groups 13 to 18, electronic configuration, physical and chemical trends and the distinctive behaviour of the first element in each group."),
            mainUnit("c-dfblock", "Inorganic Chemistry", "d- and f-Block Elements", "Transition-element trends and compounds including dichromate and permanganate; lanthanoid configuration, oxidation and contraction; actinoid configuration and oxidation states."),
            mainUnit("c-coordination", "Inorganic Chemistry", "Coordination Compounds", "Werner theory, ligands, coordination number, denticity, chelation, nomenclature, isomerism, valence-bond and crystal-field ideas, colour, magnetism and applications."),
            mainUnit("c-purification", "Organic Chemistry", "Purification and Characterisation of Organic Compounds", "Crystallisation, sublimation, distillation, extraction and chromatography; qualitative and quantitative elemental analysis; empirical and molecular formula calculations."),
            mainUnit("c-goc", "Organic Chemistry", "Some Basic Principles of Organic Chemistry", "Carbon tetravalency, hybridisation, classification, homologous series, isomerism, nomenclature, bond fission, intermediates, electronic effects and reaction types."),
            mainUnit("c-hydrocarbons", "Organic Chemistry", "Hydrocarbons", "Classification, isomerism, preparation, properties and reactions of alkanes, alkenes, alkynes and aromatic hydrocarbons, including conformations and core mechanisms."),
            mainUnit("c-halogens", "Organic Chemistry", "Organic Compounds Containing Halogens", "Preparation, properties and reactions, C-X bond, substitution mechanisms and uses or environmental effects of selected halogen compounds."),
            mainUnit("c-oxygen", "Organic Chemistry", "Organic Compounds Containing Oxygen", "Alcohols, phenols and ethers; aldehydes and ketones; carboxylic acids, with preparation, properties, reactions, key mechanisms and distinguishing tests."),
            mainUnit("c-nitrogen", "Organic Chemistry", "Organic Compounds Containing Nitrogen", "Amines and diazonium salts, including preparation, nomenclature, structure, properties, reactions, basic character and synthetic importance."),
            mainUnit("c-biomolecules", "Organic Chemistry", "Biomolecules", "Carbohydrates, proteins, amino acids, enzymes, vitamins, nucleic acids and hormones at the scope specified by NTA."),
            mainUnit("c-practical", "Practical Chemistry", "Principles Related to Practical Chemistry", "Functional-group detection, selected preparations, titrimetric chemistry, qualitative salt analysis and four stated physical-chemistry experiments."),
          ],
        },
      ],
    },
    {
      id: "jee-advanced-syllabus",
      heading: "JEE Advanced syllabus",
      officialLabel: "Official syllabus — JEE Advanced",
      editorialLabel: "Rank Sarthi learning structure",
      intro:
        "JEE Advanced has its own official syllabus. The 2026 document states that it remains the same as the 2025 syllabus. The summaries below follow the official subject headings. For preparation or exclusion decisions, the linked official document remains controlling.",
      readingNotes: [
        "Subject is Physics, Chemistry or Mathematics.",
        "Unit group is a navigation layer added by Rank Sarthi and is labelled as editorial.",
        "Official chapter or section follows the JEE Advanced syllabus heading.",
        "Topic focus is a concise summary of the official scope.",
      ],
      sourceRefs: S3,
      verifiedOn: "27 August 2026",
      sections: [
        {
          id: "advanced-physics",
          subject: "Physics",
          accent: "jee",
          countLabel: "7 official sections",
          units: [
            advUnit("ap-general", "Measurement", "General", "Units and dimensions, significant figures, least count, error analysis and stated measurement experiments."),
            advUnit("ap-mechanics", "Mechanics", "Mechanics", "Kinematics, frames, Newton laws, friction, work and energy, momentum, systems, collisions, rotation, rolling, equilibrium, oscillations, gravitation, elasticity, fluids and waves."),
            advUnit("ap-thermal", "Thermal Physics", "Thermal Physics", "Expansion, calorimetry, heat transfer, gas laws, specific heats, thermodynamic processes and laws, Carnot engine and blackbody-radiation laws."),
            advUnit("ap-em", "Electricity and Magnetism", "Electricity and Magnetism", "Electrostatics, Gauss law, capacitance, current and circuits, magnetic fields and forces, galvanometer conversions, induction, inductance and RC, LR, LC and LCR circuits."),
            advUnit("ap-emwaves", "Electromagnetism", "Electromagnetic Waves", "Electromagnetic-wave characteristics, spectrum and elementary uses."),
            advUnit("ap-optics", "Optics", "Optics", "Geometrical optics, prisms, lenses and mirrors; interference, single-slit diffraction and polarization."),
            advUnit("ap-modern", "Modern Physics", "Modern Physics", "Nuclear radiation and decay, binding energy, fission and fusion, photoelectric effect, Bohr theory, X-rays, Moseley law and matter waves."),
          ],
        },
        {
          id: "advanced-mathematics",
          subject: "Mathematics",
          accent: "jee",
          countLabel: "9 official sections",
          units: [
            advUnit("am-sets", "Foundations", "Sets, Relations and Functions", "Set algebra and De Morgan laws, Cartesian products, relations, mappings, domains and ranges, invertibility, parity and standard special functions."),
            advUnit("am-algebra", "Algebra", "Algebra", "Complex numbers, quadratic equations, progressions, logarithms, permutations and combinations, and binomial theorem."),
            advUnit("am-matrices", "Algebra", "Matrices", "Matrix operations and types, elementary transformations, determinants, adjoint, inverse and simultaneous linear equations."),
            advUnit("am-probability", "Data and Chance", "Probability and Statistics", "Event rules, conditional probability, independence, total probability, Bayes theorem, central tendency, dispersion and random variables."),
            advUnit("am-trig", "Trigonometry", "Trigonometry", "Trigonometric functions, graphs, identities, multiple and submultiple angles, equations and inverse functions."),
            advUnit("am-geometry", "Geometry", "Analytical Geometry", "Two-dimensional lines, circles and conics; three-dimensional lines, planes, distances, angles and coplanarity."),
            advUnit("am-diff", "Calculus", "Differential Calculus", "Limits, continuity, L'Hospital rule, derivatives, tangents and normals, monotonicity, extrema, Rolle theorem and Lagrange mean value theorem."),
            advUnit("am-integral", "Calculus", "Integral Calculus", "Indefinite and definite integration, fundamental theorem, substitution, parts, partial fractions, areas and first-order differential equations."),
            advUnit("am-vectors", "Vector Methods", "Vectors", "Addition, scalar multiplication, dot and cross products, scalar and vector triple products and geometric interpretations."),
          ],
        },
        {
          id: "advanced-chemistry",
          subject: "Chemistry",
          accent: "jee",
          countLabel: "37 official sections",
          units: [
            advUnit("ac-general", "Physical Chemistry", "General Topics", "Atoms and molecules, Dalton theory, mole concept, formulae, equations, stoichiometry, redox, neutralisation, displacement and concentration measures."),
            advUnit("ac-states", "Physical Chemistry", "States of Matter: Gases and Liquids", "Gas laws, ideal and real behaviour, kinetic theory, velocities, partial pressures, diffusion, intermolecular interactions and liquid properties."),
            advUnit("ac-atomic", "Physical Chemistry", "Atomic Structure", "Bohr model, hydrogen spectrum, matter waves, uncertainty, quantum description, orbitals and electron-filling rules."),
            advUnit("ac-bonding", "Physical Chemistry", "Chemical Bonding and Molecular Structure", "Orbital overlap, covalent bonding, hybridisation, molecular-orbital diagrams, hydrogen bonding, polarity, VSEPR and molecular shapes."),
            advUnit("ac-thermo", "Physical Chemistry", "Chemical Thermodynamics", "State functions, thermodynamic laws, energy, enthalpy, entropy, Gibbs energy, equilibrium and spontaneity."),
            advUnit("ac-equilibrium", "Physical Chemistry", "Chemical and Ionic Equilibrium", "Mass action, Gibbs-energy significance, equilibrium constants, Le Chatelier principle, solubility, pH, buffers, acids, bases and salt hydrolysis."),
            advUnit("ac-electrochem", "Physical Chemistry", "Electrochemistry", "Cells, electrode potentials, Nernst equation, series, emf, electrolysis, conductance, Kohlrausch law, batteries, fuel cells and corrosion."),
            advUnit("ac-kinetics", "Physical Chemistry", "Chemical Kinetics", "Rates, order and molecularity, rate laws, zero and first-order forms, half-life, Arrhenius relation, activation energy and catalysis."),
            advUnit("ac-solid", "Physical Chemistry", "Solid State", "Crystal systems, close packing, fcc, bcc and hcp lattices, neighbours, ionic radii, radius ratio and point defects."),
            advUnit("ac-solutions", "Physical Chemistry", "Solutions", "Henry and Raoult laws, ideal solutions, colligative properties and van't Hoff factor."),
            advUnit("ac-surface", "Physical Chemistry", "Surface Chemistry", "Adsorption, Freundlich isotherm, colloids, emulsions, surfactants and micelles at the stated level."),
            advUnit("ac-periodicity", "Inorganic Chemistry", "Classification of Elements and Periodicity in Properties", "Periodic law, configurations and trends in size, ionisation, electron gain, valence, oxidation, electronegativity and reactivity."),
            advUnit("ac-hydrogen", "Inorganic Chemistry", "Hydrogen", "Position, occurrence, isotopes, preparation, properties, hydrides, water, heavy water, hydrogen peroxide and hydrogen as fuel."),
            advUnit("ac-sblock", "Inorganic Chemistry", "s-Block Elements", "Alkali and alkaline-earth reactivity, reducing behaviour, compounds, anomalies and selected sodium and calcium compounds."),
            advUnit("ac-pblock", "Inorganic Chemistry", "p-Block Elements", "Groups 13 to 18, oxidation states, reactivity and specified preparations, properties, compounds and uses."),
            advUnit("ac-dblock", "Inorganic Chemistry", "d-Block Elements", "Oxidation states, electrode potentials, interstitial compounds, alloys, catalysis and chromium or manganese oxoanions."),
            advUnit("ac-fblock", "Inorganic Chemistry", "f-Block Elements", "Lanthanoid and actinoid contraction, oxidation states and general characteristics."),
            advUnit("ac-coordination", "Inorganic Chemistry", "Coordination Compounds", "Werner theory, nomenclature, isomerism, geometry, bonding, colour, magnetism, ligands, stability, applications and metal carbonyls."),
            advUnit("ac-isolation", "Inorganic Chemistry", "Isolation of Metals", "Ore concentration, extraction principles for specified metals, cyanide process and refining."),
            advUnit("ac-qualitative", "Inorganic Chemistry", "Principles of Qualitative Analysis", "Specified cation groups and selected anion tests."),
            advUnit("ac-environmental", "Inorganic Chemistry", "Environmental Chemistry", "Air, water and soil pollution, industrial waste, control strategies and green chemistry."),
            advUnit("ac-goc", "Organic Chemistry", "Basic Principles of Organic Chemistry", "Bonding, hybridisation, aromaticity, isomerism, formula determination, nomenclature, electronic effects, acidity, basicity and reactive intermediates."),
            advUnit("ac-alkanes", "Organic Chemistry", "Alkanes", "Homologous series, physical properties, conformations, preparation and combustion, halogenation and oxidation."),
            advUnit("ac-alkenes", "Organic Chemistry", "Alkenes and Alkynes", "Physical properties, elimination preparation, hydration, metal acetylides, oxidation, reduction, electrophilic addition and polymerisation."),
            advUnit("ac-benzene", "Organic Chemistry", "Benzene", "Structure and electrophilic substitution, including directing effects in monosubstituted benzene."),
            advUnit("ac-phenols", "Organic Chemistry", "Phenols", "Physical properties, preparation, substitution, Reimer-Tiemann, Kolbe, esterification, etherification, aspirin synthesis, oxidation and reduction."),
            advUnit("ac-alkylhalides", "Organic Chemistry", "Alkyl Halides", "Carbocation rearrangement, Grignard reactions and nucleophilic substitution with stereochemical aspects."),
            advUnit("ac-alcohols", "Organic Chemistry", "Alcohols", "Physical properties, esterification, dehydration, reactions with specified reagents and oxidation to carbonyl or carboxylic compounds."),
            advUnit("ac-ethers", "Organic Chemistry", "Ethers", "Williamson synthesis and carbon-oxygen bond cleavage."),
            advUnit("ac-carbonyl", "Organic Chemistry", "Aldehydes and Ketones", "Preparation and oxidation, reduction, derivative formation, condensation, haloform and nucleophilic addition reactions."),
            advUnit("ac-acids", "Organic Chemistry", "Carboxylic Acids", "Physical properties, preparation from specified routes and reduction, halogenation and derivative formation."),
            advUnit("ac-amines", "Organic Chemistry", "Amines", "Preparation, named reactions, diazonium chemistry, tests, alkylation and acylation."),
            advUnit("ac-haloarenes", "Organic Chemistry", "Haloarenes", "Fittig and Wurtz-Fittig reactions and nucleophilic aromatic substitution within the stated exclusions."),
            advUnit("ac-biomolecules", "Organic Chemistry", "Biomolecules", "Carbohydrates, proteins and nucleic acids at the stated structural and reaction scope."),
            advUnit("ac-polymers", "Organic Chemistry", "Polymers", "Polymerisation types, selected natural and synthetic polymers, applications and biodegradable polymers."),
            advUnit("ac-everyday", "Organic Chemistry", "Chemistry in Everyday Life", "Drug-target ideas, therapeutic categories and examples, artificial sweeteners, soaps and detergents."),
            advUnit("ac-practical", "Practical Chemistry", "Practical Organic Chemistry", "Detection of selected elements and identification of hydroxyl, carbonyl, carboxyl, amino and nitro groups."),
          ],
        },
      ],
    },
  ],

  distinctions: {
    id: "main-vs-advanced",
    heading: "What is different between JEE Main and JEE Advanced syllabus?",
    intro:
      "Do not reduce the difference to the idea that Advanced is just deeper. The official documents differ in both wording and listed scope.",
    columns: ["Subject", "Verified distinction from the official 2026 documents", "Preparation implication"],
    rows: [
      [
        "Chemistry",
        "JEE Advanced lists chapters including States of Matter, Solid State, Surface Chemistry, Hydrogen, s-Block Elements, Isolation of Metals, Environmental Chemistry, Polymers and Chemistry in Everyday Life. These do not appear as JEE Main 2026 Paper 1 units.",
        "Keep an Advanced-only checklist. Do not delete an Advanced chapter because it is absent from the Main unit list.",
      ],
      [
        "Mathematics",
        "JEE Advanced explicitly includes topics such as L'Hospital rule, Rolle theorem, Lagrange mean value theorem, planes in three-dimensional geometry and scalar or vector triple products.",
        "Use the Advanced syllabus row, not a Main chapter label, when deciding the exact boundary of study.",
      ],
      [
        "Physics",
        "JEE Advanced explicitly includes forced and damped oscillations, detailed fluid-flow content, blackbody-radiation laws and RC, LR, LC and LCR circuit scope.",
        "Build Advanced extensions after the shared foundation, but track them as named scope rather than a vague harder-questions bucket.",
      ],
    ],
    note: "Academic control: this comparison contains selected verified examples, not an exhaustive set-difference calculation. Main-only, Advanced-only or Both badges will be generated only from a reviewed topic-level crosswalk.",
  },

  prerequisitePaths: [
    {
      id: "prerequisite-paths",
      heading: "Build your learning order from prerequisites",
      intro:
        "Rank Sarthi learning structure. These are dependency paths, not official exam order, not weightage and not a claim about question frequency. Learn the concept that later chapters depend on before the chapter that consumes it.",
      columns: ["Physics path", "Recommended sequence", "Why the relationship matters"],
      rows: [
        ["Mechanics", "Units and Measurements > Kinematics > Laws of Motion > Work, Energy and Power > Rotational Motion > Gravitation", "Motion description comes before force models; force models support energy and rotation; gravitation reuses mechanics and circular-motion ideas."],
        ["Electricity and Magnetism", "Electrostatics > Capacitance > Current Electricity > Magnetic Effects of Current > Electromagnetic Induction > Alternating Current > Electromagnetic Waves", "Field and potential ideas support capacitance; moving charge leads to current and magnetism; changing magnetic flux leads to induction and AC."],
        ["Thermal Physics", "Properties of Solids and Liquids > Kinetic Theory of Gases > Thermodynamics", "Microscopic gas ideas and macroscopic heat, work and state variables must be connected rather than memorised separately."],
        ["Waves and Optics", "Oscillations > Mechanical Waves > Superposition and Standing Waves > Wave Optics", "Phase, frequency and superposition are reused in interference and diffraction."],
        ["Modern Physics", "Dual Nature > Atoms > Nuclei > Electronic Devices", "Quantum ideas support atomic models; nuclear structure follows; semiconductor devices form a separate application branch that still benefits from modern-physics context."],
      ],
    },
    {
      id: "prerequisite-paths-chemistry",
      heading: "Chemistry prerequisite paths",
      columns: ["Chemistry path", "Recommended sequence", "Why the relationship matters"],
      rows: [
        ["Atomic foundation", "Mole Concept > Atomic Structure > Periodicity > Chemical Bonding", "Counting particles, electron structure, periodic trends and bonding form the vocabulary used across later chemistry."],
        ["Physical chemistry", "Mole Concept > Thermodynamics > Equilibrium > Solutions > Electrochemistry > Chemical Kinetics", "Concentration, energy and equilibrium relationships recur in solutions, cells and reaction-rate calculations."],
        ["Inorganic chemistry", "Periodicity > Chemical Bonding > p-Block and d/f-Block > Coordination Compounds", "Trends and bonding explain structure, oxidation states, colour, magnetism and complex formation."],
        ["Organic chemistry", "Basic Principles of Organic Chemistry > Hydrocarbons > Halogen Compounds > Oxygen Compounds > Nitrogen Compounds > Biomolecules", "Nomenclature, electronic effects and reaction intermediates must be stable before reaction families are layered."],
        ["Practical chemistry", "Core theory > Functional-group tests and salt analysis > Experimental interpretation", "Practical observations are easier to retain when linked to the reaction, equilibrium or structure that produces them."],
      ],
    },
    {
      id: "prerequisite-paths-mathematics",
      heading: "Mathematics prerequisite paths",
      columns: ["Mathematics path", "Recommended sequence", "Why the relationship matters"],
      rows: [
        ["Calculus", "Sets and Functions > Trigonometry > Limits > Continuity and Differentiability > Applications of Derivatives > Integral Calculus > Differential Equations", "Function behaviour and limits support derivatives; derivatives and algebra support integration; both feed differential equations."],
        ["Algebra to probability", "Quadratic Equations > Sequences and Series > Binomial Theorem > Permutations and Combinations > Probability", "Algebraic fluency supports counting expressions, and counting supports event probability."],
        ["Geometry", "Coordinate Geometry > Vector Algebra > Three Dimensional Geometry", "Coordinates establish geometric representation; vectors provide direction and products; 3D geometry combines both."],
        ["Matrices", "Linear Equations > Matrices and Determinants > Inverse and Consistency", "Matrix operations are most useful when tied to systems of equations and solution conditions."],
      ],
      note: "Academic review required: every prerequisite edge is validated before this page is considered for indexation. These paths are pedagogical relationships, not official syllabus order.",
    },
  ],

  relationships: {
    id: "relationships",
    heading: "Cross-chapter relationship guide",
    intro: "Rank Sarthi learning structure. Connections between chapters that questions frequently combine.",
    columns: ["Chapter", "Connects strongly to", "Use the connection when"],
    rows: [
      ["Functions", "Limits, calculus, graphs, coordinate geometry", "A question depends on domain, range, transformation or composition."],
      ["Vectors", "3D geometry, mechanics, electrostatics and magnetism", "Direction, components, dot products or cross products control the setup."],
      ["Chemical Bonding", "Periodicity, coordination chemistry, p-block, organic structure", "Shape, polarity, hybridisation or electron distribution explains behaviour."],
      ["Equilibrium", "Ionic chemistry, buffers, solubility, electrochemistry and acid-base organic chemistry", "A reversible process, concentration ratio or competing reaction must be analysed."],
      ["Electrostatics", "Capacitance, current electricity, magnetism and circuits", "Potential, field, energy or charge distribution is the starting variable."],
      ["Thermodynamics", "Equilibrium, electrochemistry, kinetic theory and chemical spontaneity", "Energy, entropy, work or feasibility connects multiple chapters."],
    ],
  },

  coverageModel: {
    id: "how-to-use-the-syllabus",
    heading: "Use the syllabus as a weekly control system",
    intro:
      "Rank Sarthi learning structure. Do not read the syllabus once and forget it. Give every chapter one current status, and change the status only when evidence changes.",
    columns: ["Status", "Meaning", "Next action"],
    rows: [
      ["Not started", "You have not built a usable first understanding.", "Start with the prerequisite path and one clear source."],
      ["Learning", "You can follow worked examples but cannot solve independently.", "Complete guided practice and explain the core idea in your own words."],
      ["Practice ready", "You can solve standard untimed questions independently.", "Mix question types and add moderate time pressure."],
      ["Timed ready", "You can solve representative questions under exam conditions with acceptable accuracy.", "Use mixed sets, PYQs and error review."],
      ["Revision due", "Performance has weakened or recall is unstable.", "Run targeted retrieval and a short retest, not a full restart."],
    ],
    note: "The five-status table and the weekly loop remain fully usable without a Rank Sarthi account or diagnostic tool.",
  },

  interpretation: [
    {
      id: "no-weightage",
      title: "No official chapter weightage is shown",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official syllabus tells you what may be tested. It does not assign official chapter-level percentages. Rank Sarthi will not convert coaching estimates into official-looking syllabus data.",
            },
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "A defined paper sample by year, session and shift." }],
            [{ text: "A documented chapter-tagging method." }],
            [{ text: "Question counts and marks that can be audited." }],
            [{ text: "A visible label stating that the result is historical, not guaranteed." }],
            [{ text: "Academic and data-review sign-off." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "A weightage view will appear on this page only when every condition above exists and has been reviewed.",
            },
          ],
        },
      ],
    },
    {
      id: "weekly-loop",
      title: "The weekly syllabus loop",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Choose one exam target: Main, Advanced or both." }],
            [{ text: "Mark the current status of every active chapter." }],
            [{ text: "Check prerequisites before opening a weak downstream chapter." }],
            [{ text: "Attempt a small representative set or PYQ group." }],
            [{ text: "Classify lost marks as knowledge gap, recall gap, execution error, decision or selection error, or needs review." }],
            [{ text: "Assign one specific next action." }],
            [{ text: "Retest after the action and update the status only when evidence changes." }],
          ],
        },
      ],
    },
  ],

  relatedLinks: [
    { label: "JEE overview", url: "/jee", relation: "up", description: "Exam, process and product overview." },
    { label: "JEE Main Physics syllabus", url: "/jee/syllabus/physics", relation: "forward", description: "Official JEE Main 2026 Physics unit map." },
    { label: "JEE Main Chemistry syllabus", url: "/jee/syllabus/chemistry", relation: "forward", description: "Official JEE Main 2026 Chemistry unit map." },
    { label: "JEE Main Mathematics syllabus", url: "/jee/syllabus/mathematics", relation: "forward", description: "Official JEE Main 2026 Mathematics unit map." },
    { label: "JEE Advanced syllabus", url: "/jee/jee-advanced/syllabus", relation: "related", description: "Official JEE Advanced 2026 scope, kept separate from Main." },
    { label: "JEE Physics", url: "/jee/physics", relation: "related", description: "Physics subject hub with all mapped chapter pages." },
    { label: "JEE Chemistry", url: "/jee/chemistry", relation: "related", description: "Chemistry subject hub with all mapped chapter pages." },
    { label: "JEE Mathematics", url: "/jee/mathematics", relation: "related", description: "Mathematics subject hub with all mapped chapter pages." },
    { label: "Electrostatics", url: "/jee/physics/electrostatics", relation: "forward", description: "Chapter page mapped to the Electrostatics unit." },
    { label: "Current Electricity", url: "/jee/physics/current-electricity", relation: "forward", description: "Chapter page mapped to the Current Electricity unit." },
    { label: "JEE mock tests", url: "/jee/mock-tests", relation: "related", description: "Timed practice across the syllabus." },
    { label: "JEE previous year papers", url: "/jee/previous-year-papers", relation: "related", description: "Past papers by year and subject." },
  ],

  faqs: [
    faq(
      "What is the latest official JEE syllabus?",
      "On 27 August 2026, the latest syllabus documents listed on the official portals were JEE Main 2026 and JEE Advanced 2026. The JEE Advanced document states that its 2026 syllabus remains the same as 2025.",
    ),
    faq(
      "Is the JEE 2027 syllabus officially released?",
      "No 2027 syllabus was listed on the official JEE Main or JEE Advanced syllabus pages checked on 27 August 2026. Use the latest official 2026 documents as a temporary planning baseline and recheck when the authorities publish the next cycle.",
    ),
    faq(
      "How many units are in JEE Main Paper 1?",
      "The official 2026 Paper 1 syllabus contains 14 Mathematics units, 20 Physics units and 20 Chemistry units, for 54 units in total.",
    ),
    faq(
      "Are JEE Main and JEE Advanced syllabi the same?",
      "No. They overlap substantially across Physics, Chemistry and Mathematics, but the official documents use different headings and include differences in listed scope. Use the exam-specific explorer and official source for exclusions.",
    ),
    faq(
      "Does this page cover JEE Main B.Arch and B.Planning?",
      "No. This explorer is for Paper 1 B.E./B.Tech and JEE Advanced. The official NTA syllabus also contains Paper 2A B.Arch and Paper 2B B.Planning, which include aptitude plus drawing or planning scope.",
    ),
    faq(
      "Which chapters have the highest official weightage?",
      "The official syllabus does not publish chapter-level weightage. Historical analysis can show what appeared in a defined paper sample, but it must not be presented as guaranteed or official.",
    ),
    faq(
      "Should I complete the syllabus in the official PDF order?",
      "Not necessarily. The official document defines scope, not the best learning sequence for every student. Use prerequisites to avoid studying a dependent chapter before its foundation.",
    ),
    faq(
      "How should I track syllabus completion?",
      "Use evidence-based states: not started, learning, practice ready, timed ready and revision due. Do not mark a chapter complete only because a lecture or chapter has been watched once.",
    ),
    faq(
      "Can I prepare for Advanced only from the JEE Main list?",
      "No. Use the separate JEE Advanced syllabus. The official Advanced document includes named scope that does not appear as JEE Main 2026 units, especially in Chemistry.",
    ),
  ],

  seo: {
    title: "JEE Syllabus: Main & Advanced PCM Topics | Rank Sarthi",
    description:
      "Explore the latest official JEE Main and JEE Advanced syllabus by subject, chapter and topic, with prerequisite paths, official PDFs and source dates.",
    ogTitle: "JEE Syllabus: Official Main and Advanced PCM Topics",
    ogDescription:
      "Browse the latest official JEE syllabus by exam, subject, chapter and topic, then use prerequisite paths to plan what to study first.",
  },
};

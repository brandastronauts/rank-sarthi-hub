import type { SyllabusContent, SyllabusUnit } from "@/content/types";
import { sources } from "@/content/sources";

/**
 * NEET syllabus — transcribed from the accepted N01 Foundation and Biology
 * Production Package (production date 9 September 2026), record N01-04.
 *
 * Provenance rules enforced by this record:
 *  - Official unit headings are preserved exactly as issued by NMC/NTA.
 *  - `group` fields, where present, are a Rank Sarthi editorial navigation
 *    layer and are always labelled as such through `editorialLabel`.
 *  - Biology links onward to /neet/biology and /neet/syllabus/biology, both
 *    built routes. Physics and Chemistry subject syllabus and hub routes are
 *    still planned; they are named as text only and never linked.
 *  - No chapter weightage, frequency or question-count claim appears here.
 */

const S = ["nmc-neet-ug-2026-syllabus", "nta-neet-2026-bulletin"];

function unit(id: string, name: string, scope: string): SyllabusUnit {
  return { id, name, scope, topics: [], sourceRefs: S };
}

export const neetSyllabus: SyllabusContent = {
  exam: "NEET (UG)",
  platform: "neet",
  contentStatus: "draft",
  title: "NEET UG 2026 Syllabus: Official Physics, Chemistry and Biology Structure",
  lastVerified: "9 September 2026",

  hero: {
    eyebrow: "Verified against the current official NEET (UG) 2026 syllabus",
    intent:
      "See the official NEET UG 2026 syllabus structure across Physics, Chemistry and Biology, verified against the current NMC/NTA source, then move into the subject page that matches your current scope.",
    chips: [
      "Official-source checked",
      "Official wording kept separate from Rank Sarthi navigation",
      "No invented chapter weightage",
      "2027 syllabus not officially announced",
    ],
  },

  intro: [
    {
      type: "paragraph",
      children: [
        {
          text: "The National Medical Commission UGMEB finalized the updated NEET UG 2026 syllabus for academic session 2026-27 in December 2025. The official syllabus contains 20 Physics units, 20 Chemistry units and 10 Biology units. As of 9 September 2026, no NEET (UG) 2027 syllabus was found on the official NTA/NMC sources checked for this record.",
        },
      ],
    },
    {
      type: "note",
      tone: "source",
      children: [
        {
          text: "Official unit headings are preserved exactly as issued. Rank Sarthi's route inventory is a separate navigation and learning layer and is labelled as such wherever it is shown on this page.",
        },
      ],
    },
  ],

  officialSource: sources["nmc-neet-ug-2026-syllabus"]!,
  sourceRefs: ["nmc-neet-ug-2026-syllabus", "nta-neet-2026-bulletin", "nta-neet-documents"],

  cycleStatus: {
    id: "official-status",
    heading: "Official syllabus status at a glance",
    columns: ["Item", "Verified position"],
    rows: [
      ["Latest official NEET UG syllabus", "NEET (UG) 2026, academic session 2026-27"],
      ["Official owner", "National Medical Commission (UGMEB), published through the NTA source stack"],
      ["Physics official unit count", "20 units"],
      ["Chemistry official unit count", "20 units"],
      ["Biology official unit count", "10 units"],
      [
        "2027 status on verification date",
        "No NEET (UG) 2027 syllabus was found on the official NTA/NMC sources checked on 9 September 2026",
      ],
      [
        "Weightage",
        "Not part of the official syllabus. No chapter weightage, frequency or question-count claim is shown on this page.",
      ],
    ],
    note: "Checked against the official NMC NEET (UG) 2026 syllabus and the NEET (UG) 2026 Information Bulletin.",
    verifiedOn: "9 September 2026",
    sourceRefs: ["nmc-neet-ug-2026-syllabus", "nta-neet-2026-bulletin"],
    cycleState: "Latest official baseline: NEET (UG) 2026 cycle",
    refreshTrigger: "Recheck when NMC/NTA publishes a new cycle syllabus document.",
  },

  scopeSelector: {
    id: "wording-boundary",
    heading: "Official wording vs Rank Sarthi navigation",
    intro:
      "The unit headings below are the academic source boundary. Rank Sarthi's URL registry contains broader umbrellas, focused children and some historical routes. Those routes are useful for navigation but are never presented as official syllabus wording.",
    columns: ["Layer", "What it shows", "Where to check it"],
    rows: [
      [
        "Official syllabus",
        "The exact unit headings issued by NMC/NTA for the current cycle",
        "This page, and the current official syllabus document",
      ],
      [
        "Rank Sarthi navigation for Biology",
        "The explicit route-status map for all 38 registered Biology routes",
        "/neet/syllabus/biology",
      ],
      [
        "Rank Sarthi navigation for Physics and Chemistry",
        "Route-by-route current-status classification is not yet performed",
        "Planned Physics and Chemistry syllabus pages, not yet built",
      ],
    ],
    note: "Sources: NMC NEET (UG) 2026 syllabus and the NEET (UG) 2026 Information Bulletin.",
  },

  sections: [],

  hierarchies: [
    {
      id: "neet-syllabus-2026",
      heading: "NEET (UG) 2026 official syllabus",
      officialLabel: "Official syllabus — NMC / NTA",
      editorialLabel: "Rank Sarthi learning structure",
      intro:
        "Every row below uses the official unit heading exactly as published. Rank Sarthi's own chapter and route naming is a separate navigation layer, shown only where a built route exists.",
      readingNotes: [
        "Subject is the official NEET syllabus subject.",
        "Unit uses the official NMC/NTA unit heading.",
        "Scope condenses the official unit for reading on a phone; it does not add, remove or reorder official scope.",
      ],
      sourceRefs: S,
      verifiedOn: "9 September 2026",
      sections: [
        {
          id: "neet-physics",
          subject: "Physics",
          accent: "neet",
          countLabel: "20 official units",
          units: [
            unit("np-measurement", "Physics and Measurement", "SI and other units, dimensional analysis and measurement uncertainty."),
            unit("np-kinematics", "Kinematics", "Motion in a line and a plane, relative velocity and projectile motion."),
            unit("np-laws", "Laws of Motion", "Newton's laws, momentum, friction and circular-motion applications."),
            unit("np-work", "Work, Energy, and Power", "Work-energy theorem, conservation of energy, power and collisions."),
            unit("np-rotation", "Rotational Motion", "Centre of mass, torque, angular momentum and moment of inertia."),
            unit("np-gravitation", "Gravitation", "Universal gravitation, Kepler's laws, potential energy and satellite motion."),
            unit("np-solids-liquids", "Properties of Solids and Liquids", "Elasticity, fluid pressure, viscosity, surface tension and heat transfer."),
            unit("np-thermo", "Thermodynamics", "Thermal equilibrium, laws of thermodynamics and thermodynamic processes."),
            unit("np-kinetic", "Kinetic Theory of Gases", "Gas laws, kinetic-theory assumptions and molecular-speed interpretation."),
            unit("np-oscillations", "Oscillations and Waves", "Periodic motion, SHM, wave superposition and standing waves."),
            unit("np-electrostatics", "Electrostatics", "Charge, Coulomb's law, electric field, potential and capacitance."),
            unit("np-current", "Current Electricity", "Ohm's law, resistor and cell combinations and circuit laws."),
            unit("np-magnetism", "Magnetic Effects of Current and Magnetism", "Biot-Savart and Ampere laws, magnetic force and magnetic materials."),
            unit("np-emi", "Electromagnetic Induction and Alternating Currents", "Faraday and Lenz laws, AC circuits and transformers."),
            unit("np-emwaves", "Electromagnetic Waves", "Displacement current, wave properties and the electromagnetic spectrum."),
            unit("np-optics", "Optics", "Reflection, refraction, optical instruments and wave optics."),
            unit("np-dual", "Dual Nature of Matter and Radiation", "Photoelectric effect and matter waves."),
            unit("np-atoms", "Atoms and Nuclei", "Atomic models, nuclear structure and radioactivity."),
            unit("np-devices", "Electronic Devices", "Semiconductors, diodes and logic gates."),
            unit("np-experimental", "Experimental Skills", "Officially listed measurement and laboratory activities."),
          ],
        },
        {
          id: "neet-chemistry",
          subject: "Chemistry",
          accent: "neet",
          countLabel: "20 official units",
          units: [
            unit("nc-basic", "Some Basic Concepts in Chemistry", "Mole concept, stoichiometry and chemical equations."),
            unit("nc-atomic", "Atomic Structure", "Quantum model, orbitals and electron configuration."),
            unit("nc-bonding", "Chemical Bonding and Molecular Structure", "Ionic and covalent bonding, VSEPR and hybridisation."),
            unit("nc-thermo", "Chemical Thermodynamics", "State functions, enthalpy, entropy and Gibbs energy."),
            unit("nc-solutions", "Solutions", "Concentration measures and colligative properties."),
            unit("nc-equilibrium", "Equilibrium", "Chemical and ionic equilibrium, pH and buffers."),
            unit("nc-redox", "Redox Reactions and Electrochemistry", "Oxidation numbers, cells and the Nernst equation."),
            unit("nc-kinetics", "Chemical Kinetics", "Rate law, order, molecularity and activation energy."),
            unit("nc-periodicity", "Classification of Elements and Periodicity in Properties", "Periodic trends in radii, ionisation and electronegativity."),
            unit("nc-pblock", "P-Block Elements", "Group trends across groups 13 to 18."),
            unit("nc-dfblock", "d- and f-Block Elements", "Transition and inner-transition element trends and compounds."),
            unit("nc-coordination", "Co-ordination Compounds", "Werner theory, nomenclature, isomerism and bonding."),
            unit("nc-purification", "Purification and Characterisation of Organic Compounds", "Purification techniques and qualitative and quantitative analysis."),
            unit("nc-goc", "Some Basic Principles of Organic Chemistry", "Hybridisation, isomerism, nomenclature and reaction types."),
            unit("nc-hydrocarbons", "Hydrocarbons", "Alkanes, alkenes, alkynes and aromatic hydrocarbons."),
            unit("nc-halogens", "Organic Compounds Containing Halogens", "Preparation, properties and substitution mechanisms."),
            unit("nc-oxygen", "Organic Compounds Containing Oxygen", "Alcohols, phenols, ethers, aldehydes, ketones and carboxylic acids."),
            unit("nc-nitrogen", "Organic Compounds Containing Nitrogen", "Amines and diazonium salts."),
            unit("nc-biomolecules", "Biomolecules", "Carbohydrates, proteins, enzymes, vitamins and nucleic acids."),
            unit("nc-practical", "Principles Related to Practical Chemistry", "Functional-group tests, titrations and qualitative salt analysis."),
          ],
        },
        {
          id: "neet-biology",
          subject: "Biology",
          accent: "neet",
          countLabel: "10 official units",
          units: [
            unit("nb-diversity", "Diversity in Living World", "Living world, biodiversity, taxonomy, nomenclature and classification.", ),
            unit("nb-structural", "Structural Organisation in Animals and Plants", "Plant and animal tissues, and morphology and anatomy of flowering plants and the frog."),
            unit("nb-cell", "Cell Structure and Function", "Cell theory, cell organelles, biomolecules and cell division."),
            unit("nb-plant-physiology", "Plant Physiology", "Transport, photosynthesis, respiration in plants and plant growth."),
            unit("nb-human-physiology", "Human Physiology", "Digestion, breathing, circulation, excretion, movement, neural and chemical coordination."),
            unit("nb-reproduction", "Reproduction", "Reproduction in organisms, sexual reproduction in flowering plants, human reproduction and reproductive health."),
            unit("nb-genetics", "Genetics and Evolution", "Principles of inheritance, molecular basis of inheritance and evolution."),
            unit("nb-welfare", "Biology and Human Welfare", "Health and disease, and microbes in human welfare."),
            unit("nb-biotech", "Biotechnology and Its Applications", "Biotechnology principles, processes and applications."),
            unit("nb-ecology", "Ecology and Environment", "Organisms and populations, ecosystems, biodiversity and conservation."),
          ],
        },
      ],
    },
  ],

  relationships: {
    id: "how-to-use",
    heading: "How to use this syllabus for preparation",
    columns: ["Step", "Action"],
    rows: [
      ["1", "Start with the official unit list for your subject."],
      ["2", "Open the Biology route map at /neet/syllabus/biology to see verified route status for Biology."],
      ["3", "Use the Biology subject hub at /neet/biology to select the owned Rank Sarthi learning route."],
      ["4", "Check a route's official-scope label before interpreting exam relevance."],
      ["5", "Physics and Chemistry subject syllabus and hub pages are still planned; use the official syllabus document directly until they are built."],
    ],
    note: "No coaching-style chapter list or unofficial weightage is treated as syllabus authority on this page.",
  },

  relatedLinks: [
    { label: "NEET hub", url: "/neet", relation: "up" },
    { label: "NEET Biology syllabus and route map", url: "/neet/syllabus/biology", relation: "forward" },
    { label: "NEET Biology hub", url: "/neet/biology", relation: "related" },
    { label: "NCERT mapping methodology", url: "/neet/ncert-mapping", relation: "related" },
    { label: "NEET exam overview", url: "/neet/neet-exam", relation: "prerequisite" },
  ],

  faqs: [
    {
      question: "How many official units are in the NEET UG 2026 syllabus?",
      answer: [
        { type: "paragraph", children: [{ text: "The official 2026 syllabus lists 20 Physics units, 20 Chemistry units and 10 Biology units." }] },
      ],
    },
    {
      question: "Are Rank Sarthi chapter URLs the official syllabus list?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. They are navigation and learning routes. Official scope comes from the current NMC/NTA syllabus. For Biology, the explicit route-status map is at /neet/syllabus/biology." }],
        },
      ],
    },
    {
      question: "Does the official syllabus publish chapter weightage?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "This page does not treat weightage as official. Any future frequency analysis must be separately sourced and clearly labelled as Rank Sarthi analysis." }],
        },
      ],
    },
    {
      question: "Is there an official NEET UG 2027 syllabus yet?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. As of the 9 September 2026 verification, it remained not officially announced." }],
        },
      ],
    },
  ],

  seo: {
    title: "NEET UG 2026 Syllabus: Physics, Chemistry & Biology | Rank Sarthi",
    description:
      "View the verified NEET UG 2026 official syllabus structure with 20 Physics units, 20 Chemistry units and 10 Biology units, plus the Biology route map.",
    ogTitle: "NEET UG 2026 Syllabus",
    ogDescription: "Official NEET UG 2026 syllabus structure, verified against NMC/NTA sources, with Biology route ownership.",
  },
};

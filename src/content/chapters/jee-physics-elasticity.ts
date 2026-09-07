import type { ChapterContent } from "@/content/types";

/**
 * Elasticity — T06 production content.
 *
 * Evidence discipline:
 * - Weightage and trend records are deliberately absent.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" until academic review is recorded.
 * - Scope check (verified against the current JEE Main and JEE Advanced
 *   syllabus documents): JEE Main Unit 7 (Properties of Solids and Liquids)
 *   explicitly names elastic behaviour, stress-strain relationship, Hooke's
 *   law, Young's modulus, bulk modulus and modulus of rigidity. JEE Advanced
 *   names Hooke's law and Young's modulus in the Mechanics section, and
 *   modulus of rigidity and bulk modulus in the fluids paragraph. Neither
 *   official document names Poisson's ratio, compressibility, the full
 *   stress-strain curve or thermal stress as separate line items. Those are
 *   treated below as standard NCERT-level supporting concepts, not as
 *   independently notified syllabus lines, and this page says so plainly.
 */
export const jeePhysicsElasticity: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Elasticity",
  slug: "elasticity",
  url: "/jee/physics/elasticity",
  canonicalIntent:
    "Explain how a solid resists deformation using stress, strain and the elastic moduli, choose the correct modulus and formula condition for a given loading, and diagnose common stress-strain mistakes.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Elasticity describes how a solid deforms under load and returns to its original shape when the load is removed, provided the deformation stays within the elastic limit. Stress is the internal restoring force per unit area, strain is the fractional deformation, and the elastic modulus is the ratio of stress to strain for a given type of deformation.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct solution first identifies the type of deformation (length, volume or shape), then picks the matching modulus (Young's, bulk or shear) and checks that the load stays within the region where Hooke's law holds.",
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
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Stabilise SI units, dimensions and significant figures before working with moduli.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Force, equilibrium and free-body reasoning are used to define internal stress.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Subject hub for the Physics chapter set.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every Physics, Chemistry and Mathematics unit.",
    },
  ],

  syllabusMapping: {
    unit: "Properties of Solids and Liquids",
    topics: [
      "Elastic behaviour of solids",
      "Stress and strain",
      "Hooke's law and the elastic limit",
      "Young's modulus",
      "Bulk modulus",
      "Modulus of rigidity (shear modulus)",
      "Stress-strain curve",
      "Poisson's ratio",
      "Compressibility",
      "Elastic potential energy in a stretched wire",
      "Thermal stress",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  conceptBlocks: [
    {
      id: "internal-restoring-force",
      title: "1. Treat stress as an internal restoring force per unit area",
      keyIdea:
        "Stress is force divided by the area over which it acts internally, not the external applied force by itself.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When an external force deforms a solid, internal forces resist the deformation. Stress is this internal restoring force divided by the cross-sectional area over which it acts. Its SI unit is the same as pressure, newton per square metre.",
            },
          ],
        },
      ],
    },
    {
      id: "strain-is-a-ratio",
      title: "2. Strain is a dimensionless ratio",
      keyIdea: "Strain compares the change caused by deformation to the original undeformed value.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Longitudinal strain is change in length divided by original length. Volume strain is change in volume divided by original volume. Shear strain is the angle of deformation, measured in radians. All three are ratios of like quantities, so strain has no unit.",
            },
          ],
        },
      ],
    },
    {
      id: "hookes-law-conditional",
      title: "3. Apply Hooke's law only within the elastic limit",
      keyIdea: "Stress is proportional to strain only up to the proportional limit on the stress-strain curve.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Hooke's law states that stress is proportional to strain for small deformations. Beyond the proportional limit the material can still be elastic for a short range, but the linear relationship no longer holds, and beyond the elastic limit the deformation becomes permanent.",
            },
          ],
        },
      ],
    },
    {
      id: "three-moduli",
      title: "4. Match the deformation type to its modulus",
      keyIdea:
        "Young's modulus is for length change under longitudinal stress, bulk modulus is for volume change under uniform pressure, shear modulus is for shape change under tangential stress.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Young's modulus applies to a rod or wire stretched or compressed along its length. Bulk modulus applies to a body under uniform pressure from all sides, such as a fluid or a submerged solid. Shear modulus (modulus of rigidity) applies when tangential stress changes shape without changing volume.",
            },
          ],
        },
      ],
    },
    {
      id: "stress-strain-curve",
      title: "5. Read the stress-strain curve as a sequence of regions",
      keyIdea: "Proportional region, elastic limit, yield point, plastic region, and fracture point occur in order.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A tensile test produces a stress-strain curve with a straight proportional region, followed by a region where the material remains elastic but the relation is no longer linear, a yield point where plastic deformation begins, a plastic region, and finally fracture. Only the region up to the elastic limit is described by Hooke's law.",
            },
          ],
        },
      ],
    },
    {
      id: "poisson-ratio",
      title: "6. Poisson's ratio links lateral and longitudinal strain",
      keyIdea: "Poisson's ratio is the negative ratio of lateral strain to longitudinal strain, within elastic limits.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When a wire is stretched, it also contracts sideways. Poisson's ratio compares this lateral contraction strain to the longitudinal extension strain. It is a material property used alongside the elastic moduli in NCERT-level treatment of elasticity, and it is not named as a separate line item in the current official JEE Main or JEE Advanced syllabus documents.",
            },
          ],
        },
      ],
    },
    {
      id: "compressibility",
      title: "7. Compressibility is the reciprocal of bulk modulus",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Compressibility measures how readily a substance's volume changes under pressure and is defined as the reciprocal of the bulk modulus. It is a standard supporting idea for bulk modulus problems rather than a separately notified syllabus topic.",
            },
          ],
        },
      ],
    },
    {
      id: "elastic-potential-energy",
      title: "8. Elastic potential energy is stored work done during deformation",
      keyIdea: "Energy stored in a stretched wire equals the work done against the internal restoring force.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "As a wire is stretched gradually within the elastic limit, work is done against the internal restoring force, and this work is stored as elastic potential energy. It can be recovered as the wire returns to its natural length, provided the elastic limit was not exceeded.",
            },
          ],
        },
      ],
    },
    {
      id: "thermal-stress",
      title: "9. Thermal stress arises when constrained expansion is prevented",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "If a rod that would otherwise expand or contract with a temperature change is rigidly constrained at both ends, an internal thermal stress develops instead of a length change. This connects thermal expansion to Young's modulus and is treated as an application of the same stress-strain framework.",
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
          "How a solid responds to deforming forces through stress, strain, Hooke's law and the elastic moduli, and how the stress-strain curve describes elastic and plastic behaviour.",
        ],
        [
          "What is the central method choice?",
          "Identify the type of deformation (length, volume or shape), select the matching modulus (Young's, bulk or shear), and confirm the load stays within the elastic limit before using a linear stress-strain relation.",
        ],
        [
          "Where do most mistakes begin?",
          "Applying Hooke's law beyond the elastic limit, confusing stress with applied force, mixing up which modulus applies to which deformation, and dropping units when combining stress and strain.",
        ],
        [
          "What should come before Elasticity?",
          "SI units and dimensions, and force and equilibrium reasoning from Laws of Motion.",
        ],
        [
          "What comes after it?",
          "Fluid Mechanics uses bulk modulus and pressure ideas in a fluid context, and Surface Tension develops a related but separate surface-force topic.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Elasticity",
      intro:
        "Verified against the current JEE Main 2026 syllabus (Unit 7, Properties of Solids and Liquids) and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Elastic behaviour and stress-strain relationship",
          "Elastic behaviour and stress-strain relationship are explicitly listed in Unit 7.",
          "Not stated as a separate line, but assumed for Hooke's law and Young's modulus.",
          "Learn the stress-strain curve as the basis for every modulus.",
        ],
        [
          "Hooke's law and Young's modulus",
          "Hooke's law and Young's modulus are explicitly listed.",
          "Hooke's law and Young's modulus are explicitly listed in the Mechanics section.",
          "Confirm the elastic-limit condition before every use of Hooke's law.",
        ],
        [
          "Bulk modulus and modulus of rigidity",
          "Bulk modulus and modulus of rigidity are explicitly listed.",
          "Modulus of rigidity and bulk modulus are explicitly listed, described within the fluids paragraph as 'in mechanics'.",
          "Match bulk modulus to uniform-pressure loading and shear modulus to tangential loading.",
        ],
        [
          "Poisson's ratio, compressibility, elastic potential energy, thermal stress",
          "Not named as separate line items in the current official document.",
          "Not named as separate line items in the current official document.",
          "Treated here as standard supporting NCERT-level concepts, not as independently notified syllabus topics. Verify directly against the official PDFs before assuming exam-specific emphasis.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Elasticity",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "SI units and dimensions",
          "Recognise that stress carries pressure units and strain is dimensionless.",
          "Revise base units, dimensional formulas and unit conversion.",
        ],
        [
          "Force and equilibrium",
          "Draw a free-body diagram and identify internal restoring forces.",
          "Revise Newton's third law and equilibrium of a deformable body.",
        ],
        [
          "Graph reading",
          "Read slope as a ratio on a stress-strain curve.",
          "Revise slope as rate of change on a graph.",
        ],
        [
          "Basic algebra",
          "Rearrange ratio-based formulas for an unknown quantity.",
          "Practise solving for stress, strain or modulus given the other two.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the modulus before calculating",
      intro: "Match the type of deformation to the correct modulus before any algebra.",
      columns: ["Information given", "First method", "Validation"],
      rows: [
        ["Wire or rod stretched or compressed along its length", "Young's modulus", "Confirm the load stays within the elastic limit"],
        ["Body under uniform pressure from all sides", "Bulk modulus", "Check that only volume, not shape, changes"],
        ["Tangential force changing the shape of a block", "Shear modulus (modulus of rigidity)", "Confirm volume stays constant"],
        ["Given bulk modulus, asked for volume response to pressure", "Compressibility as the reciprocal of bulk modulus", "Keep pressure and volume change in consistent units"],
        ["Wire stretched, asked for stored energy", "Elastic potential energy from work done against restoring force", "Confirm deformation stayed within the elastic limit"],
        ["Rod rigidly constrained and heated or cooled", "Thermal stress from prevented thermal expansion", "Use the unconstrained expansion that would have occurred as the reference strain"],
      ],
    },
  ],

  formulas: [
    {
      id: "stress",
      expression: "stress = F / A",
      latex: "\\sigma = \\dfrac{F}{A}",
      meaning: "Internal restoring force per unit cross-sectional area.",
      variables: [
        { symbol: "F", meaning: "internal restoring force", unit: "N" },
        { symbol: "A", meaning: "cross-sectional area", unit: "m^2" },
      ],
      useWhen: "A deforming force acts on a defined cross-sectional area within the elastic limit.",
      commonTrap: "Using the externally applied force without confirming it equals the internal restoring force in equilibrium.",
      accessibleText: "Stress equals force divided by area.",
    },
    {
      id: "longitudinal-strain",
      expression: "strain = ΔL / L",
      latex: "\\varepsilon = \\dfrac{\\Delta L}{L}",
      meaning: "Fractional change in length of a stretched or compressed rod or wire.",
      variables: [
        { symbol: "ΔL", meaning: "change in length", unit: "m" },
        { symbol: "L", meaning: "original length", unit: "m" },
      ],
      useWhen: "The deformation is along one dimension, such as a stretched wire.",
      commonTrap: "Using the final length instead of the original length in the denominator.",
      accessibleText: "Longitudinal strain equals change in length divided by original length.",
    },
    {
      id: "volume-strain",
      expression: "strain_v = ΔV / V",
      latex: "\\varepsilon_v = \\dfrac{\\Delta V}{V}",
      meaning: "Fractional change in volume under uniform pressure.",
      variables: [
        { symbol: "ΔV", meaning: "change in volume", unit: "m^3" },
        { symbol: "V", meaning: "original volume", unit: "m^3" },
      ],
      useWhen: "A body is under uniform pressure from all sides.",
      commonTrap: "Applying volume strain to a deformation that only changes shape, not volume.",
      accessibleText: "Volume strain equals change in volume divided by original volume.",
    },
    {
      id: "shear-strain",
      expression: "strain_s = tan(theta) ≈ theta",
      latex: "\\varepsilon_s = \\tan\\theta \\approx \\theta",
      meaning: "Angular deformation produced by a tangential force, for small angles.",
      variables: [{ symbol: "theta", meaning: "angle of shear deformation", unit: "rad" }],
      useWhen: "A tangential stress changes the shape of a block without changing its volume, and the angle is small.",
      commonTrap: "Treating shear strain as a length ratio instead of an angle.",
      accessibleText: "Shear strain equals the tangent of the shear angle, approximately the angle itself for small angles.",
    },
    {
      id: "hookes-law",
      expression: "stress = k × strain",
      latex: "\\sigma = k\\,\\varepsilon",
      meaning: "Stress is directly proportional to strain within the proportional limit.",
      variables: [{ symbol: "k", meaning: "constant of proportionality (a modulus)", unit: "same as stress" }],
      useWhen: "The deformation is within the proportional (linear) part of the elastic region.",
      commonTrap: "Extending the linear relation beyond the elastic limit shown on the stress-strain curve.",
      accessibleText: "Stress equals a constant times strain, within the proportional limit.",
    },
    {
      id: "youngs-modulus",
      expression: "Y = (F / A) / (ΔL / L)",
      latex: "Y = \\dfrac{F/A}{\\Delta L/L}",
      meaning: "Ratio of longitudinal stress to longitudinal strain for a stretched or compressed rod or wire.",
      variables: [{ symbol: "Y", meaning: "Young's modulus", unit: "N/m^2" }],
      useWhen: "The deformation is along the length of a rod or wire, within the elastic limit.",
      commonTrap: "Using Young's modulus for a volume or shape change instead of Young's, bulk or shear as appropriate.",
      accessibleText: "Young's modulus equals longitudinal stress divided by longitudinal strain.",
    },
    {
      id: "bulk-modulus",
      expression: "B = -ΔP / (ΔV / V)",
      latex: "B = -\\dfrac{\\Delta P}{\\Delta V/V}",
      meaning: "Ratio of pressure change to fractional volume change, for uniform compression or expansion.",
      variables: [
        { symbol: "B", meaning: "bulk modulus", unit: "N/m^2" },
        { symbol: "ΔP", meaning: "change in pressure", unit: "N/m^2" },
      ],
      useWhen: "A body is under uniform pressure from all sides and only its volume changes.",
      commonTrap: "Dropping the negative sign convention that reflects volume decreasing as pressure increases.",
      accessibleText: "Bulk modulus equals negative pressure change divided by fractional volume change.",
    },
    {
      id: "shear-modulus",
      expression: "G = (F / A) / theta",
      latex: "G = \\dfrac{F/A}{\\theta}",
      meaning: "Ratio of tangential (shear) stress to shear strain.",
      variables: [{ symbol: "G", meaning: "shear modulus (modulus of rigidity)", unit: "N/m^2" }],
      useWhen: "A tangential force deforms the shape of a body without changing its volume, within the elastic limit.",
      commonTrap: "Confusing shear modulus with Young's modulus when the loading is tangential, not longitudinal.",
      accessibleText: "Shear modulus equals shear stress divided by shear strain.",
    },
    {
      id: "compressibility",
      expression: "k = 1 / B",
      latex: "k = \\dfrac{1}{B}",
      meaning: "Compressibility is the reciprocal of bulk modulus.",
      variables: [{ symbol: "k", meaning: "compressibility", unit: "m^2/N" }],
      useWhen: "Bulk modulus is known and the ease of volume change under pressure is asked for.",
      commonTrap: "Reporting compressibility with the same numerical value as bulk modulus instead of inverting it.",
      accessibleText: "Compressibility equals one divided by bulk modulus.",
    },
    {
      id: "poisson-ratio",
      expression: "sigma_p = -(lateral strain) / (longitudinal strain)",
      latex: "\\sigma_p = -\\dfrac{\\varepsilon_{lateral}}{\\varepsilon_{longitudinal}}",
      meaning: "Ratio comparing sideways contraction strain to lengthwise extension strain.",
      variables: [{ symbol: "sigma_p", meaning: "Poisson's ratio", unit: "dimensionless" }],
      useWhen: "Both lateral and longitudinal strains are given or asked for, within the elastic limit.",
      commonTrap: "Dropping the sign convention that keeps Poisson's ratio positive for materials that contract sideways while stretched.",
      accessibleText: "Poisson's ratio equals negative lateral strain divided by longitudinal strain.",
    },
    {
      id: "elastic-potential-energy",
      expression: "U = (1/2) × F × ΔL",
      latex: "U = \\tfrac{1}{2} F\\,\\Delta L",
      meaning: "Elastic potential energy stored in a wire stretched gradually within the elastic limit.",
      variables: [{ symbol: "U", meaning: "elastic potential energy", unit: "J" }],
      useWhen: "A wire or rod is stretched gradually (not suddenly) and stays within the elastic limit.",
      commonTrap: "Using the final force F over the full extension instead of the average force during gradual loading.",
      accessibleText: "Elastic potential energy equals one half times force times extension, for gradual loading.",
    },
    {
      id: "elastic-energy-density",
      expression: "u = (1/2) × stress × strain",
      latex: "u = \\tfrac{1}{2}\\sigma\\varepsilon",
      meaning: "Elastic potential energy stored per unit volume of a stretched wire.",
      variables: [{ symbol: "u", meaning: "elastic energy per unit volume", unit: "J/m^3" }],
      useWhen: "Volume of the stretched material is known and energy density is required instead of total energy.",
      commonTrap: "Mixing stress and strain from different loading stages instead of the final elastic-limit values.",
      accessibleText: "Elastic energy per unit volume equals one half times stress times strain.",
    },
    {
      id: "thermal-stress",
      expression: "stress_thermal = Y × alpha × ΔT",
      latex: "\\sigma_{thermal} = Y\\,\\alpha\\,\\Delta T",
      meaning: "Internal stress developed in a rigidly constrained rod when its free thermal expansion is prevented.",
      variables: [
        { symbol: "alpha", meaning: "coefficient of linear thermal expansion", unit: "1/K" },
        { symbol: "ΔT", meaning: "change in temperature", unit: "K" },
      ],
      useWhen: "Both ends of a rod are rigidly fixed so the rod cannot expand or contract with a temperature change.",
      commonTrap: "Applying this formula when the rod is free to expand, where no thermal stress develops.",
      accessibleText: "Thermal stress equals Young's modulus times the coefficient of linear expansion times the temperature change.",
    },
  ],

  workedExamples: [
    {
      id: "wire-extension",
      prompt:
        "A steel wire of length 2 m and cross-sectional area 1 mm^2 is stretched by 1 mm under a load. Given Young's modulus for steel, find the tensile force applied.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Compute longitudinal strain: ΔL / L = 0.001 m / 2 m." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Use Y = (F/A) / (ΔL/L) rearranged to F = Y × A × (ΔL/L), substituting the known Young's modulus, area and strain." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Confirm the resulting stress is below the elastic limit of steel before accepting the answer." },
          ],
        },
      ],
      answer: "F = Y × A × (ΔL/L), evaluated with the given numerical values.",
    },
    {
      id: "bulk-modulus-pressure",
      prompt:
        "A solid sphere of volume V is subjected to a uniform pressure increase ΔP, causing a fractional volume decrease. Express the bulk modulus and the compressibility.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Identify the loading as uniform pressure from all sides, so bulk modulus is the correct choice, not Young's or shear modulus." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Apply B = -ΔP / (ΔV/V) using the given pressure increase and fractional volume decrease." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Take the reciprocal of B to state the compressibility." },
          ],
        },
      ],
      answer: "B = -ΔP / (ΔV/V); compressibility k = 1/B.",
    },
    {
      id: "constrained-rod-stress",
      prompt:
        "A metal rod is rigidly fixed at both ends and its temperature is raised by ΔT. Find the thermal stress developed, given Young's modulus Y and coefficient of linear expansion alpha.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "Recognise that the rod would expand by alpha × L × ΔT if free, so the constraint imposes an equivalent compressive strain of alpha × ΔT." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Apply stress = Y × strain with this thermally imposed strain to get stress = Y × alpha × ΔT." },
          ],
        },
      ],
      answer: "Thermal stress = Y × alpha × ΔT.",
    },
  ],

  mistakes: [
    {
      id: "hookes-law-beyond-limit",
      mistake: "Applying Hooke's law (stress proportional to strain) beyond the elastic limit shown on the stress-strain curve.",
      why: [{ type: "paragraph", children: [{ text: "The linear relation only holds up to the proportional limit; beyond the elastic limit deformation becomes permanent and non-linear." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check where the given deformation lies on the stress-strain curve before using a linear stress-strain formula." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "wrong-modulus-choice",
      mistake: "Using Young's modulus for a problem that describes uniform pressure (volume change) or tangential force (shape change).",
      why: [{ type: "paragraph", children: [{ text: "Each modulus is defined for a specific type of deformation; they are not interchangeable." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify whether length, volume or shape is changing before selecting Young's, bulk or shear modulus." }] }],
      errorType: "decision-error",
    },
    {
      id: "stress-vs-applied-force",
      mistake: "Treating stress as the applied external force rather than the internal restoring force per unit area.",
      why: [{ type: "paragraph", children: [{ text: "In equilibrium the two are numerically equal, but the physical meaning of stress is internal and distributed over area, not a single external force." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always divide by the correct cross-sectional area and confirm equilibrium before equating applied force to internal stress." }] }],
      errorType: "recall-gap",
    },
    {
      id: "sign-convention-bulk-modulus",
      mistake: "Dropping the negative sign in the bulk modulus formula and reporting a negative modulus.",
      why: [{ type: "paragraph", children: [{ text: "Volume decreases as pressure increases, so the negative sign keeps bulk modulus a positive quantity." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Track the sign of ΔV relative to ΔP explicitly before finalising the numerical answer." }] }],
      errorType: "execution-error",
    },
    {
      id: "sudden-vs-gradual-loading",
      mistake: "Using the gradual-loading energy formula (1/2) F ΔL when a load is applied suddenly.",
      why: [{ type: "paragraph", children: [{ text: "Sudden loading involves a different work-energy relationship because the force is not built up gradually." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the problem states gradual or sudden loading before applying the (1/2) F ΔL energy formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "shear-strain-as-length-ratio",
      mistake: "Computing shear strain as a length ratio instead of an angle.",
      why: [{ type: "paragraph", children: [{ text: "Shear strain is defined through the angular deformation of the body, not a change-in-length ratio." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Identify the shear angle from the geometry of the deformed shape before computing shear modulus." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "thermal-stress-on-free-rod",
      mistake: "Calculating thermal stress for a rod that is free to expand, where no stress develops.",
      why: [{ type: "paragraph", children: [{ text: "Thermal stress requires a constraint that prevents the natural length change; a free rod simply changes length instead." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the rod is rigidly constrained at both ends before applying the thermal stress formula." }] }],
      errorType: "decision-error",
    },
    {
      id: "unit-mismatch-modulus",
      mistake: "Mixing units for force, area and length when computing a modulus, producing an inconsistent numerical answer.",
      why: [{ type: "paragraph", children: [{ text: "Moduli combine force, area and a dimensionless strain; any unit inconsistency propagates directly into the result." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Convert all quantities to consistent SI units before substituting into a modulus formula." }] }],
      errorType: "execution-error",
    },
    {
      id: "poisson-ratio-scope-assumption",
      mistake: "Assuming Poisson's ratio, compressibility, or thermal stress are heavily tested because they appear in coaching notes.",
      why: [{ type: "paragraph", children: [{ text: "These are standard supporting concepts in NCERT-level treatment, but they are not named as separate line items in the current official JEE Main or JEE Advanced syllabus documents." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the official syllabus mapping table on this page and the linked source documents before assuming exam-specific emphasis." }] }],
      errorType: "needs-review",
    },
  ],

  relatedChapters: [
    {
      label: "Fluid Mechanics",
      url: "/jee/physics/fluid-mechanics",
      relation: "forward",
      description: "Extends pressure and bulk modulus ideas into fluids at rest and in motion.",
    },
    {
      label: "Surface Tension",
      url: "/jee/physics/surface-tension",
      relation: "related",
      description: "A separate surface-force topic; this chapter does not cover surface energy or capillary rise.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Force and equilibrium reasoning used to define internal restoring stress.",
    },
    {
      label: "Kinematics",
      url: "/jee/physics/kinematics",
      relation: "same-unit",
      description: "Shares the same mechanics foundation within the JEE Physics syllabus.",
    },
    {
      label: "Thermal Properties",
      url: "/jee/physics/thermal-properties",
      relation: "related",
      description: "Thermal expansion coefficients used in the thermal stress relation.",
    },
  ],

  links: [
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official syllabus hub.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Physics subject hub.",
    },
    {
      label: "JEE Physics previous-year papers",
      url: "/jee/previous-year-papers/physics",
      relation: "related",
      description: "Official-paper practice path.",
    },
    {
      label: "JEE mock tests",
      url: "/jee/mock-tests",
      relation: "related",
      description: "Mixed application practice.",
    },
  ],

  faqs: [
    {
      question: "Is elasticity the same as fluid mechanics or surface tension?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. This chapter covers how solids deform under stress and strain. Fluid Mechanics and Surface Tension are separate chapters that own pressure-in-fluids and surface-force intents respectively.",
            },
          ],
        },
      ],
    },
    {
      question: "Are Poisson's ratio and compressibility part of the official JEE syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "They are not named as separate line items in the current official JEE Main or JEE Advanced syllabus documents. They are treated here as standard NCERT-level supporting concepts for bulk modulus and strain analysis. Check the official documents directly for confirmation.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between Young's modulus, bulk modulus and shear modulus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Young's modulus applies to length change under longitudinal stress, bulk modulus applies to volume change under uniform pressure, and shear modulus applies to shape change under tangential stress.",
            },
          ],
        },
      ],
    },
    {
      question: "When does Hooke's law stop applying?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Hooke's law holds only up to the proportional limit on the stress-strain curve. Beyond that, the material may still be elastic for a short range, but the linear relation between stress and strain no longer holds.",
            },
          ],
        },
      ],
    },
    {
      question: "How is thermal stress different from thermal expansion?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Thermal expansion is a length or volume change when a material is free to respond to temperature change. Thermal stress develops instead when that expansion or contraction is rigidly prevented.",
            },
          ],
        },
      ],
    },
    {
      question: "Does this page publish weightage or expected question counts for Elasticity?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Weightage, trend percentages and question-count forecasts are deliberately not published on this page.",
            },
          ],
        },
      ],
    },
    {
      question: "What should I study before Elasticity?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "SI units and dimensions, and force and equilibrium reasoning from Laws of Motion, since stress is defined through internal restoring force.",
            },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. Poisson's ratio, compressibility, elastic potential energy and thermal stress are standard NCERT-level supporting concepts, not independently notified syllabus line items, and this page states that boundary explicitly. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a physics education writer experienced in converting senior-secondary Physics into student-facing JEE learning structures.",
    "Academic reviewer: postgraduate qualification in Physics or a closely related field, plus recent JEE Main and JEE Advanced teaching or curriculum-review experience.",
    "Independent checker: a physics educator or subject editor who verifies equations, units, syllabus-boundary claims and worked reasoning separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Elasticity for JEE Physics: Official Scope, Method and Formulas",
    description:
      "Official JEE Main and Advanced 2026 scope for Elasticity, stress-strain method selection, condition-aware formula cards for Young's, bulk and shear modulus, and an error diagnosis framework. No invented weightage.",
    ogTitle: "Elasticity for JEE: stress, strain and the elastic moduli as one system",
    ogDescription:
      "Official syllabus mapping, prerequisites, concept architecture, formula conditions and error diagnosis for JEE Elasticity.",
  },
};

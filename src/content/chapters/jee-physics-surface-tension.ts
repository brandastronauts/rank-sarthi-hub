import type { ChapterContent } from "@/content/types";

/**
 * Surface Tension — T06 production content.
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Scope discipline: this chapter owns molecular origin of surface tension,
 * surface energy, excess pressure in drops and bubbles, angle of contact,
 * wetting, capillary rise, and the effect of temperature and impurities on
 * surface tension. Viscosity, Stokes' law and terminal velocity sit in the
 * same official syllabus unit as this topic, but this site routes that
 * content to Fluid Mechanics, which owns viscous flow and Bernoulli's
 * theorem, to avoid duplicating an intent across two pages. Elasticity owns
 * stress-strain behaviour of solids separately.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet.
 * - contentStatus stays "draft" and the registry keeps this page noindex
 *   until academic review is recorded.
 */
export const jeePhysicsSurfaceTension: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Surface Tension",
  slug: "surface-tension",
  url: "/jee/physics/surface-tension",
  canonicalIntent:
    "Explain surface tension from molecular attraction, apply surface energy and excess pressure relations to drops and bubbles, use angle of contact and wetting to predict capillary behaviour, and diagnose why a surface tension solution goes wrong.",

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
          text: "Surface tension is the tendency of a liquid surface to behave like a stretched elastic membrane, caused by unbalanced intermolecular attraction on molecules at the surface compared with molecules inside the bulk liquid. It is measured as force per unit length along the surface, and equivalently as surface energy per unit area.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A correct solution identifies how many free surfaces are involved, whether the shape is a drop or a bubble, what the angle of contact tells you about wetting, and whether temperature or an added impurity is changing the surface tension value itself before any pressure or capillary rise formula is applied.",
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
      description: "Stabilise units and dimensional consistency before surface tension formulas.",
    },
    {
      label: "Elasticity",
      url: "/jee/physics/elasticity",
      relation: "prerequisite",
      description: "Understand stress, strain and elastic energy of solids before surface energy of liquids.",
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
      "Surface energy and surface tension",
      "Angle of contact",
      "Application of surface tension: shape of drops and bubbles",
      "Excess pressure across a curved liquid surface",
      "Capillary rise",
      "Effect of temperature and impurities on surface tension",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35): molecular cause, energy, pressure,      */
  /* interface, application                                              */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "molecular-origin",
      title: "1. Trace surface tension to molecular attraction",
      keyIdea:
        "A molecule inside the bulk liquid is pulled equally in all directions; a molecule at the surface has neighbours only on the liquid side, producing a net inward pull that resists surface expansion.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Molecules inside a liquid are surrounded by neighbours on every side, so their net intermolecular force averages to zero. Molecules at the free surface have liquid neighbours only below and beside them, so they experience a net inward pull. Increasing surface area means moving more molecules to this less favourable surface position, which requires work.",
            },
          ],
        },
      ],
    },
    {
      id: "surface-energy",
      title: "2. Read surface tension as energy per unit area",
      keyIdea: "Surface tension equals work done per unit increase in surface area at constant temperature.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Because increasing surface area requires work against the inward molecular pull, surface tension can be expressed either as force per unit length along a line on the surface, or as surface energy per unit area. Both descriptions are numerically equal and physically consistent.",
            },
          ],
        },
      ],
    },
    {
      id: "curved-surface-pressure",
      title: "3. Link curvature to excess pressure",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A curved liquid surface under tension supports a pressure difference between its concave and convex sides. The excess pressure on the concave side increases as the radius of curvature decreases, which is why smaller drops and bubbles sustain a larger excess pressure than larger ones of the same liquid.",
            },
          ],
        },
      ],
    },
    {
      id: "drop-vs-bubble",
      title: "4. Separate a drop from a bubble before counting surfaces",
      keyIdea: "A liquid drop has one free surface; a soap bubble in air has two free surfaces.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A liquid drop or a cavity inside a liquid has a single liquid-air interface. A soap bubble in air has an inner and an outer liquid film surface, so its excess pressure relation carries an extra factor compared with a drop of the same radius and surface tension.",
            },
          ],
        },
      ],
    },
    {
      id: "angle-of-contact",
      title: "5. Use angle of contact to read wetting behaviour",
      keyIdea: "The angle of contact is decided by the liquid, the solid surface and the surrounding medium together, not by the liquid alone.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The angle of contact is the angle measured inside the liquid between the solid surface and the tangent to the liquid surface at the point of contact. A liquid that wets a solid has an acute angle of contact and a concave meniscus; a liquid that does not wet a solid has an obtuse angle of contact and a convex meniscus.",
            },
          ],
        },
      ],
    },
    {
      id: "capillary-rise",
      title: "6. Connect wetting to capillary rise",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In a narrow tube, the curved meniscus produced by the angle of contact creates a pressure difference that pushes the wetting liquid up the tube until the weight of the raised liquid column balances that pressure difference. A non-wetting liquid is depressed in the tube instead of rising.",
            },
          ],
        },
      ],
    },
    {
      id: "temperature-impurity",
      title: "7. Track how temperature and impurities change surface tension itself",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Surface tension of a liquid generally decreases as temperature rises, because increased molecular agitation weakens the net inward attraction at the surface, and it becomes zero at the critical temperature. Dissolved impurities can raise or lower surface tension depending on the specific solute and liquid, so this effect is read from the given data rather than assumed in one direction.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25) placed at typed anchor points               */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is the chapter about?",
          "Why a liquid surface behaves like a stretched membrane, how that is expressed as surface energy, how it produces excess pressure inside curved surfaces, and how angle of contact and capillary rise follow from the same idea.",
        ],
        [
          "What is the central method choice?",
          "Decide whether the interface is a single free surface, a drop, or a two-surface film like a soap bubble before writing an excess pressure relation, and check whether the question is asking about a shape change (surface energy) or a height change (capillary rise).",
        ],
        [
          "Where do most mistakes begin?",
          "Treating a soap bubble like a single-surface drop, ignoring the angle of contact when writing the capillary rise relation, and assuming surface tension always decreases with any impurity.",
        ],
        [
          "What should come before Surface Tension?",
          "SI units and dimensional consistency, and a basic sense of stress, strain and elastic energy from Elasticity.",
        ],
        [
          "What comes after it?",
          "Fluid Mechanics extends the same pressure reasoning to moving fluids, viscosity, Stokes' law, terminal velocity and Bernoulli's theorem.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Surface Tension",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Surface energy and surface tension",
          "Surface energy and surface tension are explicitly listed under Properties of Solids and Liquids.",
          "Surface tension and surface energy are covered under the mechanical properties of fluids.",
          "Keep the force-per-length and energy-per-area descriptions linked as one idea.",
        ],
        [
          "Angle of contact and applications",
          "Angle of contact and applications of surface tension such as the shape of drops and bubbles are explicitly listed.",
          "Angle of contact is covered as part of the fluid properties scope.",
          "Read the angle of contact before assuming a liquid wets or does not wet a surface.",
        ],
        [
          "Excess pressure and capillary rise",
          "Excess pressure across a curved surface and capillary rise are explicitly listed.",
          "Excess pressure and capillary rise are covered as part of the fluid properties scope.",
          "Count the number of free surfaces before writing the excess pressure relation.",
        ],
        [
          "Effect of temperature and impurities",
          "Effect of temperature and impurities on surface tension is listed as part of this topic.",
          "Covered as part of the same properties-of-fluids scope, without a separate quantitative law prescribed.",
          "Read the direction of change from the given data rather than from a memorised rule.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below. Viscosity, Stokes' law, terminal velocity, streamline flow and Bernoulli's theorem sit in the same official unit but are treated on the Fluid Mechanics page on this site.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Surface Tension",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "SI units and dimensions",
          "Use SI units for force, energy, length and area consistently.",
          "Revise base units and dimensional formulas.",
        ],
        [
          "Elastic energy",
          "Relate work done against a restoring effect to stored energy.",
          "Revisit stress, strain and elastic potential energy in Elasticity.",
        ],
        [
          "Pressure basics",
          "State that pressure is force per unit area and can differ across a curved boundary.",
          "Revise basic fluid pressure before excess pressure relations.",
        ],
        [
          "Geometry of spheres and tubes",
          "Relate a sphere's radius to its surface area and a cylinder's radius to a meniscus.",
          "Revise basic mensuration for spheres and cylinders.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the method before calculating",
      intro: "Identify the situation before writing a formula.",
      columns: ["Information given", "First method", "Validation"],
      rows: [
        ["Liquid film area is changed", "Use work done equal to surface tension times change in area", "Count one or two surfaces before multiplying"],
        ["Spherical liquid drop or bubble in the liquid", "Use excess pressure with one surface", "Confirm only one liquid-air interface exists"],
        ["Soap bubble in air", "Use excess pressure with two surfaces", "Confirm both an inner and outer film surface exist"],
        ["Liquid meets a solid surface", "Read the angle of contact first", "Decide wetting or non-wetting before proceeding"],
        ["Narrow tube dipped in liquid", "Use the capillary rise relation with the angle of contact", "Check tube radius is small enough for the meniscus assumption"],
        ["Surface tension changes with a stated condition", "Read the direction of change from the given data", "Do not assume a fixed direction for temperature or impurity effects"],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "readiness-check",
      slot: "prerequisites",
      heading: "Readiness check before starting Surface Tension",
      concepts: [
        {
          id: "readiness-body",
          title: "Prepare units, elastic energy and basic geometry",
          body: [
            {
              type: "paragraph",
              children: [{ text: "You should be able to:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "use SI units for force, energy, length and area;" }],
                [{ text: "relate work done to stored energy;" }],
                [{ text: "state that pressure can differ across a curved boundary;" }],
                [{ text: "relate radius to surface area and to meniscus geometry." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "Start with Elasticity if elastic energy reasoning is unstable.",
                  href: "/jee/physics/elasticity",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "surface-tension-definition",
      expression: "T = F / l",
      latex: "T = \\dfrac{F}{l}",
      meaning: "Surface tension is the force per unit length acting along a line on the liquid surface.",
      variables: [
        { symbol: "T", meaning: "surface tension", unit: "N/m" },
        { symbol: "F", meaning: "force along the surface", unit: "N" },
        { symbol: "l", meaning: "length of the line on the surface", unit: "m" },
      ],
      useWhen: "A force is described as acting along a line drawn on a liquid surface.",
      commonTrap: "Treating surface tension as a bulk force rather than a force confined to the surface.",
      accessibleText: "Surface tension equals force divided by the length along which it acts.",
    },
    {
      id: "surface-energy-definition",
      expression: "T = W / A",
      latex: "T = \\dfrac{W}{A}",
      meaning: "Surface tension equals the work done per unit increase in surface area at constant temperature.",
      variables: [
        { symbol: "W", meaning: "work done to increase the surface", unit: "J" },
        { symbol: "A", meaning: "increase in surface area", unit: "m^2" },
      ],
      useWhen: "A surface area is increased and the associated work or energy is asked for.",
      commonTrap: "Forgetting to double the area for a two-surface film such as a soap film.",
      accessibleText: "Surface tension equals work done divided by the increase in surface area.",
    },
    {
      id: "work-done-film-two-surfaces",
      expression: "W = T (2A)",
      latex: "W = T(2A)",
      meaning: "Work done to increase a soap film of given area, counting both surfaces of the film.",
      variables: [
        { symbol: "W", meaning: "work done", unit: "J" },
        { symbol: "T", meaning: "surface tension", unit: "N/m" },
        { symbol: "A", meaning: "increase in area of one face", unit: "m^2" },
      ],
      useWhen: "The film has two liquid-air surfaces, such as a soap film stretched on a frame.",
      commonTrap: "Using a single-surface area when the film actually has two exposed surfaces.",
      accessibleText: "Work done equals surface tension times twice the increase in one-face area.",
    },
    {
      id: "excess-pressure-drop",
      expression: "delta p = 2T / r",
      latex: "\\Delta p = \\dfrac{2T}{r}",
      meaning: "Excess pressure inside a spherical liquid drop or a gas bubble inside a liquid, with one liquid surface.",
      variables: [
        { symbol: "delta p", meaning: "excess pressure inside over outside", unit: "Pa" },
        { symbol: "T", meaning: "surface tension", unit: "N/m" },
        { symbol: "r", meaning: "radius of the drop or bubble", unit: "m" },
      ],
      useWhen: "Exactly one liquid-air interface bounds the sphere.",
      commonTrap: "Applying this single-surface relation to a soap bubble in air, which has two surfaces.",
      accessibleText: "Excess pressure equals two times surface tension divided by the radius.",
    },
    {
      id: "excess-pressure-soap-bubble",
      expression: "delta p = 4T / r",
      latex: "\\Delta p = \\dfrac{4T}{r}",
      meaning: "Excess pressure inside a soap bubble in air, accounting for its two liquid-film surfaces.",
      variables: [
        { symbol: "delta p", meaning: "excess pressure inside over outside", unit: "Pa" },
        { symbol: "T", meaning: "surface tension of the soap solution", unit: "N/m" },
        { symbol: "r", meaning: "radius of the bubble", unit: "m" },
      ],
      useWhen: "The bubble is a thin liquid film with air on both sides, giving two surfaces.",
      commonTrap: "Using the single-surface relation for a bubble that actually has two film surfaces.",
      accessibleText: "Excess pressure equals four times surface tension divided by the radius.",
    },
    {
      id: "capillary-rise",
      expression: "h = 2T cos(theta) / (rho g r)",
      latex: "h = \\dfrac{2T\\cos\\theta}{\\rho g r}",
      meaning: "Height risen or depressed by a liquid in a narrow tube of given radius, set by the balance of the meniscus pressure difference and the weight of the raised column.",
      variables: [
        { symbol: "h", meaning: "height of rise or depression", unit: "m" },
        { symbol: "T", meaning: "surface tension of the liquid", unit: "N/m" },
        { symbol: "theta", meaning: "angle of contact", unit: "radian or degree" },
        { symbol: "rho", meaning: "density of the liquid", unit: "kg/m^3" },
        { symbol: "g", meaning: "acceleration due to gravity", unit: "m/s^2" },
        { symbol: "r", meaning: "inner radius of the capillary tube", unit: "m" },
      ],
      useWhen: "The tube radius is small enough that the liquid surface inside forms a near-spherical meniscus.",
      commonTrap: "Ignoring the sign carried by the angle of contact, which decides rise versus depression.",
      accessibleText: "Height of rise equals two times surface tension times cosine of the angle of contact, divided by density, gravity and radius.",
    },
    {
      id: "meniscus-radius-relation",
      expression: "r = R cos(theta)",
      latex: "r = R\\cos\\theta",
      meaning: "Relates a capillary tube's radius to the radius of curvature of the meniscus formed inside it, through the angle of contact.",
      variables: [
        { symbol: "r", meaning: "inner radius of the tube", unit: "m" },
        { symbol: "R", meaning: "radius of curvature of the meniscus", unit: "m" },
        { symbol: "theta", meaning: "angle of contact", unit: "radian or degree" },
      ],
      useWhen: "The meniscus is treated as a spherical cap inside a narrow tube.",
      commonTrap: "Confusing the tube radius with the meniscus radius of curvature when the angle of contact is not zero.",
      accessibleText: "Tube radius equals meniscus radius of curvature times cosine of the angle of contact.",
    },
    {
      id: "excess-pressure-general-curved-surface",
      expression: "delta p = T (1/R1 + 1/R2)",
      latex: "\\Delta p = T\\left(\\dfrac{1}{R_1}+\\dfrac{1}{R_2}\\right)",
      meaning: "General excess pressure across a curved liquid surface with two principal radii of curvature, of which the spherical drop relation is a special case.",
      variables: [
        { symbol: "delta p", meaning: "excess pressure across the surface", unit: "Pa" },
        { symbol: "T", meaning: "surface tension", unit: "N/m" },
        { symbol: "R1", meaning: "first principal radius of curvature", unit: "m" },
        { symbol: "R2", meaning: "second principal radius of curvature", unit: "m" },
      ],
      useWhen: "The liquid surface is not a simple sphere, such as a curved film with two distinct curvatures.",
      commonTrap: "Applying the simple 2T/r drop relation to a surface that is not spherical.",
      accessibleText: "Excess pressure equals surface tension times the sum of the reciprocals of the two principal radii of curvature.",
    },
  ],

  workedExamples: [
    {
      id: "soap-bubble-pressure",
      prompt:
        "A soap bubble of radius r and surface tension T is formed in air. State the excess pressure inside the bubble and explain why the relation differs from that of a liquid drop of the same radius and surface tension.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "A liquid drop has a single liquid-air surface, so its excess pressure is 2T/r. A soap bubble is a thin liquid film with air on both the inside and outside, giving two liquid-air surfaces. Each surface contributes an inward pull of T/r type magnitude, so the two surfaces add to give an excess pressure of 4T/r.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The surface count, not the formula alone, is what must be checked first: mistaking a bubble for a drop halves the correct excess pressure.",
            },
          ],
        },
      ],
      answer: "Excess pressure inside the soap bubble is 4T/r, twice the value for a drop of the same radius and surface tension, because the bubble has two liquid-air surfaces.",
    },
    {
      id: "capillary-rise-wetting",
      prompt:
        "Water rises in a narrow vertical capillary tube dipped in a beaker of water, while mercury is depressed in an identical tube dipped in mercury. Explain this difference using the angle of contact.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "Water wets glass, giving an acute angle of contact and a concave meniscus. In the capillary rise relation, cosine of an acute angle is positive, so the relation predicts a positive height, meaning the water surface rises inside the tube until the raised column's weight balances the pressure difference at the meniscus.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Mercury does not wet glass, giving an obtuse angle of contact and a convex meniscus. Cosine of an obtuse angle is negative, so the same relation predicts a negative height, meaning the mercury surface inside the tube is depressed below the level outside.",
            },
          ],
        },
      ],
      answer: "The sign of cosine of the angle of contact, positive for water on glass and negative for mercury on glass, is what decides rise versus depression in the capillary relation.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* PI v1.1 mistake diagnosis                                           */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "bubble-as-drop",
      mistake: "Using the single-surface excess pressure relation for a soap bubble",
      why: [
        { type: "paragraph", children: [{ text: "A soap bubble in air has two liquid-air surfaces, not one." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use 4T/r for a soap bubble in air and 2T/r for a drop or a bubble inside a liquid." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "ignoring-angle-of-contact-sign",
      mistake: "Dropping the sign carried by the angle of contact in capillary rise",
      why: [
        { type: "paragraph", children: [{ text: "Cosine of the angle of contact can be negative for a non-wetting liquid, which changes rise to depression." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Read the angle of contact first and keep its sign through the calculation." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "single-surface-work-error",
      mistake: "Computing work done on a soap film using only one face's area",
      why: [
        { type: "paragraph", children: [{ text: "A soap film has two exposed surfaces, so the true increase in surface area is twice the increase in one face." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Multiply the one-face area change by two before multiplying by surface tension." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "assuming-fixed-temperature-direction",
      mistake: "Assuming surface tension always decreases with any impurity",
      why: [
        { type: "paragraph", children: [{ text: "The direction of change from an impurity depends on the specific solute and liquid and is not fixed in one direction." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Read the direction of change from the data given in the question rather than from a memorised assumption." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "confusing-tube-and-meniscus-radius",
      mistake: "Using the capillary tube's radius as the meniscus radius of curvature directly",
      why: [
        { type: "paragraph", children: [{ text: "The two radii are equal only when the angle of contact is zero; otherwise they are related through cosine of the angle of contact." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Use r = R cos(theta) to convert between tube radius and meniscus radius of curvature when the angle of contact is not zero." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "surface-tension-vs-viscosity-mixup",
      mistake: "Bringing viscosity or Stokes' law reasoning into a surface tension question",
      why: [
        { type: "paragraph", children: [{ text: "Surface tension concerns a static liquid surface's energy and curvature; viscosity and Stokes' law concern resistance to relative motion within a moving fluid." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep the two topics separate; viscosity, Stokes' law and terminal velocity are covered on the Fluid Mechanics page." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "force-vs-energy-confusion",
      mistake: "Not recognising that the force-per-length and energy-per-area descriptions of surface tension are the same quantity",
      why: [
        { type: "paragraph", children: [{ text: "Treating them as unrelated quantities can lead to inconsistent units or an extra unnecessary conversion." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Recall that N/m and J/m^2 are dimensionally identical for surface tension and switch between them as convenient." }] },
      ],
      errorType: "knowledge-gap",
    },
  ],

  faqs: [
    {
      question: "What is surface tension?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Surface tension is the property of a liquid surface that makes it behave like a stretched elastic membrane, caused by unbalanced intermolecular attraction on surface molecules compared with bulk molecules.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does a soap bubble have twice the excess pressure of a drop of the same radius?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "A soap bubble in air has two liquid-air surfaces while a drop has only one, so the bubble's excess pressure relation carries an extra factor of two.",
            },
          ],
        },
      ],
    },
    {
      question: "What does the angle of contact tell you?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It tells you whether a liquid wets a given solid surface. An acute angle of contact indicates wetting with a concave meniscus, and an obtuse angle indicates non-wetting with a convex meniscus.",
            },
          ],
        },
      ],
    },
    {
      question: "Does surface tension always decrease when temperature increases?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "For most liquids surface tension decreases as temperature rises and becomes zero at the critical temperature, but the effect of a specific impurity should be read from the given data rather than assumed.",
            },
          ],
        },
      ],
    },
    {
      question: "Are viscosity, Stokes' law and terminal velocity covered on this page?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Those topics are covered on the Fluid Mechanics page, which also covers streamline flow and Bernoulli's theorem.",
              href: "/jee/physics/fluid-mechanics",
            },
          ],
        },
      ],
    },
    {
      question: "Why does mercury get depressed instead of rising in a glass capillary tube?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mercury does not wet glass, so its angle of contact is obtuse and the capillary rise relation gives a negative height, meaning depression rather than rise.",
            },
          ],
        },
      ],
    },
  ],

  relatedChapters: [
    {
      label: "Fluid Mechanics",
      url: "/jee/physics/fluid-mechanics",
      relation: "forward",
      description: "Extend pressure reasoning to moving fluids, viscosity, Stokes' law, terminal velocity and Bernoulli's theorem.",
    },
    {
      label: "Elasticity",
      url: "/jee/physics/elasticity",
      relation: "prerequisite",
      description: "Understand stress, strain and elastic energy of solids before surface energy of liquids.",
    },
    {
      label: "Units and Measurements",
      url: "/jee/physics/units-and-measurements",
      relation: "prerequisite",
      description: "Stabilise units and dimensional consistency.",
    },
    {
      label: "Kinetic Theory of Gases",
      url: "/jee/physics/kinetic-theory-of-gases",
      relation: "related",
      description: "Connect molecular-level reasoning about intermolecular forces used across fluid properties chapters.",
    },
  ],
  links: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to the Physics subject hub.",
    },
    {
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Official Physics scope.",
    },
    {
      label: "Previous Year Papers",
      url: "/jee/previous-year-papers",
      relation: "related",
      description: "Connect surface tension reasoning with reviewed official problems.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Provenance (B37)                                                    */
  /* ------------------------------------------------------------------ */
  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official current JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Author: a JEE Physics educator or academic content specialist experienced in mechanical properties of fluids, surface energy and capillary phenomena.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE teaching and solution-review experience, covering surface energy, excess pressure across curved surfaces, angle of contact, wetting and capillary rise.",
    "Independent checker: verifies official mapping, formula conditions, worked-example reasoning, mistake classifications and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Surface Tension for JEE: Surface Energy, Drops, Bubbles and Capillary Rise",
    description:
      "Learn Surface Tension for JEE Main and Advanced through molecular origin, surface energy, excess pressure in drops and bubbles, angle of contact, wetting, capillary rise and common traps.",
    ogTitle: "Surface Tension for JEE, From Molecular Origin to Capillary Rise",
    ogDescription:
      "A structured guide to surface energy, excess pressure, angle of contact and capillary rise with official scope and diagnosis.",
  },
};

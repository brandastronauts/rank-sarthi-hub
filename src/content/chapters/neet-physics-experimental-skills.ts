import type { ChapterContent } from "@/content/types";

/**
 * NEET Experimental Skills — official NEET UG 2026 Physics Unit 20 (T06).
 * Activity scope follows the official NMC NEET (UG) 2026 syllabus list only.
 * No weightage, question frequency or trend data is asserted.
 */
const activities: [string, string][] = [
  ["Vernier callipers", "Its use to measure the internal and external diameter and depth of a vessel."],
  ["Screw gauge", "Its use to determine the thickness or diameter of a thin sheet or wire."],
  ["Simple pendulum", "Dissipation of energy by plotting a graph between the square of amplitude and time."],
  ["Metre scale", "Mass of a given object by the principle of moments."],
  ["Young's modulus", "Young's modulus of elasticity of the material of a metallic wire."],
  ["Surface tension", "Surface tension of water by capillary rise and the effect of detergents."],
  ["Coefficient of viscosity", "Coefficient of viscosity of a given viscous liquid by measuring the terminal velocity of a given spherical body."],
  ["Speed of sound", "Speed of sound in air at room temperature using a resonance tube."],
  ["Specific heat capacity", "Specific heat capacity of a given solid and liquid by the method of mixtures."],
  ["Resistivity", "Resistivity of the material of a given wire using a metre bridge."],
  ["Resistance", "Resistance of a given wire using Ohm's law."],
  ["Galvanometer", "Resistance and figure of merit of a galvanometer by the half-deflection method."],
  ["Focal length", "Focal length of a convex mirror, a concave mirror and a convex lens, using the parallax method."],
  ["Prism", "Plot of angle of deviation versus angle of incidence for a triangular prism."],
  ["Refractive index", "Refractive index of a glass slab using a travelling microscope."],
  ["p-n junction diode", "Characteristic curves of a p-n junction diode in forward and reverse bias."],
  ["Zener diode", "Characteristic curves of a Zener diode and finding the reverse breakdown voltage."],
  ["Component identification", "Identification of a diode, LED, resistor and capacitor from a mixed collection of such items."],
];

export const neetPhysicsExperimentalSkills: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "NEET Experimental Skills: Official Unit 20 Activities, Instruments and Graphs",
  slug: "experimental-skills",
  url: "/neet/physics/experimental-skills",
  canonicalIntent:
    "Cover official NEET UG 2026 Physics Unit 20, Experimental Skills: the listed experiments and activities, the instrument readings they need, and the graph and error reasoning behind them.",
  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Experimental Skills is Unit 20 of the official NEET UG 2026 Physics syllabus. It asks for familiarity with the basic approach and observations of 18 listed experiments and activities, from Vernier callipers and the screw gauge to diode and Zener characteristic curves. The skill being tested is reading an instrument correctly, knowing what is measured and why, and interpreting the resulting graph or reading.",
        },
      ],
    },
  ],
  heroChips: ["NEET UG 2026 Physics Unit 20", "18 official activities", "No weightage or question-count claims"],
  prerequisites: [
    { label: "NEET Physics", url: "/neet/physics", relation: "up" },
    { label: "NEET Physics syllabus", url: "/neet/syllabus/physics", relation: "up" },
  ],
  syllabusMapping: {
    unit: "Experimental Skills (NEET UG 2026 Unit 20)",
    topics: activities.map(([t]) => t),
    syllabusUrl: "/neet/syllabus/physics",
  },
  tables: [
    {
      id: "official-activities",
      slot: "scope",
      heading: "The 18 official NEET UG 2026 activities",
      intro: "Listed in official order. Each row names the chapter page that explains the underlying physics.",
      columns: ["#", "Activity", "Official scope", "Related topic page"],
      rows: [
        ["1", "Vernier callipers", activities[0]![1], "Physics and Measurement"],
        ["2", "Screw gauge", activities[1]![1], "Physics and Measurement"],
        ["3", "Simple pendulum", activities[2]![1], "Oscillations and Waves"],
        ["4", "Metre scale", activities[3]![1], "Rotational Motion"],
        ["5", "Young's modulus", activities[4]![1], "Properties of Solids and Liquids"],
        ["6", "Surface tension", activities[5]![1], "Properties of Solids and Liquids"],
        ["7", "Coefficient of viscosity", activities[6]![1], "Properties of Solids and Liquids"],
        ["8", "Speed of sound", activities[7]![1], "Oscillations and Waves"],
        ["9", "Specific heat capacity", activities[8]![1], "Thermal Properties"],
        ["10", "Resistivity", activities[9]![1], "Current Electricity"],
        ["11", "Resistance", activities[10]![1], "Current Electricity"],
        ["12", "Galvanometer", activities[11]![1], "Magnetic Effects of Current and Magnetism"],
        ["13", "Focal length", activities[12]![1], "Ray Optics"],
        ["14", "Prism", activities[13]![1], "Ray Optics"],
        ["15", "Refractive index", activities[14]![1], "Ray Optics"],
        ["16", "p-n junction diode", activities[15]![1], "Electronic Devices"],
        ["17", "Zener diode", activities[16]![1], "Electronic Devices"],
        ["18", "Component identification", activities[17]![1], "Electronic Devices"],
      ],
      note: "Activity wording follows the official NEET (UG) 2026 syllabus. Related pages are Rank Sarthi study links, not official groupings.",
      jump: true,
    },
  ],
  conceptBlocks: [
    {
      id: "experimental-skills-c1",
      title: "1. Least count decides what you may report",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For Vernier callipers, least count = value of one main-scale division − value of one Vernier-scale division. For the screw gauge, least count = pitch ÷ number of circular-scale divisions. A reading is main-scale reading + (coinciding division × least count), corrected for zero error. Report no more decimal places than the least count supports.",
            },
          ],
        },
      ],
    },
    {
      id: "experimental-skills-c2",
      title: "2. Zero error is subtracted with its sign",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "If the zero of the Vernier or circular scale sits ahead of the reference with jaws closed, the zero error is positive and must be subtracted from every reading. If it sits behind, the error is negative and subtracting it adds to the reading. Correct reading = observed reading − zero error.",
            },
          ],
        },
      ],
    },
    {
      id: "experimental-skills-c3",
      title: "3. Know which graph the activity asks for",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Several activities are defined by a graph: amplitude squared against time for the pendulum, angle of deviation against angle of incidence for the prism, and current against voltage for the p-n junction and Zener diodes. Read what the slope, minimum or turning point means physically before using any number from the graph. For the prism, the minimum of the curve is the angle of minimum deviation.",
            },
          ],
        },
      ],
    },
    {
      id: "experimental-skills-c4",
      title: "4. Separate the measured quantity from the derived one",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Most activities measure simple quantities (length, time, mass, temperature, current, voltage) and then derive the target: Young's modulus from load and extension, viscosity from terminal velocity, resistivity from a balance length, specific heat from a heat balance. The largest fractional error in the measured quantities, especially those raised to a power, usually dominates the error in the derived result.",
            },
          ],
        },
      ],
    },
    {
      id: "experimental-skills-c5",
      title: "5. Electronic components are identified by behaviour",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In the identification activity, a resistor conducts equally in both directions, a diode conducts in one direction only, an LED conducts in one direction and emits light, and a capacitor shows a momentary current that then falls to zero under a steady voltage.",
            },
          ],
        },
      ],
    },
  ],
  formulas: [
    {
      id: "experimental-skills-f1",
      expression: "LC (Vernier) = 1 MSD − 1 VSD",
      meaning: "Least count of Vernier callipers",
      variables: [],
      useWhen: "Use the value of one main-scale division and one Vernier-scale division in the same unit.",
      accessibleText: "Least count of Vernier callipers equals one main-scale division minus one Vernier-scale division.",
    },
    {
      id: "experimental-skills-f2",
      expression: "LC (screw gauge) = pitch / N",
      meaning: "Least count of a screw gauge",
      variables: [],
      useWhen: "N is the number of divisions on the circular scale; pitch is the linear advance per full rotation.",
      accessibleText: "Least count of a screw gauge equals pitch divided by the number of circular-scale divisions.",
    },
    {
      id: "experimental-skills-f3",
      expression: "Y = (F L) / (A ΔL)",
      meaning: "Young's modulus of a wire",
      variables: [],
      useWhen: "Within the elastic limit. A = πr², so the error in radius counts twice.",
      accessibleText: "Young's modulus equals load times original length divided by cross-sectional area times extension.",
    },
    {
      id: "experimental-skills-f4",
      expression: "η = 2 r² (ρ − σ) g / (9 v_t)",
      meaning: "Viscosity from terminal velocity (Stokes' law)",
      variables: [],
      useWhen: "Small sphere at terminal velocity in a viscous liquid; ρ is the sphere density and σ the liquid density.",
      accessibleText: "Viscosity equals two r squared times density difference times g, divided by nine times terminal velocity.",
    },
    {
      id: "experimental-skills-f5",
      expression: "R / S = l / (100 − l)",
      meaning: "Metre bridge balance condition",
      variables: [],
      useWhen: "At the null point, with l in centimetres measured from the end next to R.",
      accessibleText: "At balance, R over S equals l over one hundred minus l.",
    },
  ],
  mistakes: [
    {
      id: "experimental-skills-m1",
      mistake: "Adding a negative zero error instead of subtracting it",
      why: [{ type: "paragraph", children: [{ text: "Preparation Intelligence classification: Execution Error." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Always apply correct reading = observed reading − zero error, keeping the sign of the zero error." }] }],
      errorType: "execution-error",
    },
    {
      id: "experimental-skills-m2",
      mistake: "Reading the prism graph's end points instead of its minimum",
      why: [{ type: "paragraph", children: [{ text: "Preparation Intelligence classification: Knowledge Gap." }] }],
      fix: [{ type: "paragraph", children: [{ text: "The angle of minimum deviation is the lowest point of the deviation against incidence curve." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "experimental-skills-m3",
      mistake: "Treating the Zener breakdown region as forward bias",
      why: [{ type: "paragraph", children: [{ text: "Preparation Intelligence classification: Knowledge Gap." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Zener breakdown is a reverse-bias effect; the sharp current rise appears on the negative-voltage side of the curve." }] }],
      errorType: "knowledge-gap",
    },
  ],
  faqs: [
    {
      question: "Is Experimental Skills an official NEET UG 2026 Physics unit?",
      answer: [{ type: "paragraph", children: [{ text: "Yes. It is Unit 20 of the official NEET UG 2026 Physics syllabus." }] }],
    },
    {
      question: "How many activities does the unit list?",
      answer: [{ type: "paragraph", children: [{ text: "Eighteen experiments and activities, shown in official order on this page." }] }],
    },
    {
      question: "Does this page say how many questions come from this unit?",
      answer: [{ type: "paragraph", children: [{ text: "No. Rank Sarthi does not publish weightage or question-count claims without a verified dataset." }] }],
    },
  ],
  relatedChapters: [
    { label: "Physics and Measurement", url: "/neet/physics/units-measurements", relation: "related" },
    { label: "Properties of Solids and Liquids", url: "/neet/physics/properties-of-matter", relation: "related" },
    { label: "Ray Optics", url: "/neet/physics/ray-optics", relation: "related" },
    { label: "Electronic Devices", url: "/neet/physics/semiconductor-electronics", relation: "related" },
  ],
  sources: ["nmc-neet-ug-2026-syllabus", "ncert-physics-11-contents", "ncert-physics-12-contents"],
  sourceNote:
    "Activity scope is taken from the official NEET (UG) 2026 syllabus. No performance, weightage or question-frequency data is asserted.",
  contentStatus: "verified",
  meta: {
    title: "NEET Experimental Skills 2026: Unit 20 Activities & Graphs | Rank Sarthi",
    description:
      "All 18 official NEET UG 2026 Physics Unit 20 activities: Vernier callipers, screw gauge, metre bridge, prism, diode and Zener curves, with least count and error rules.",
    ogTitle: "NEET Experimental Skills 2026: Unit 20 Activities & Graphs | Rank Sarthi",
    ogDescription:
      "All 18 official NEET UG 2026 Physics Unit 20 activities, with least count, zero error and graph-reading rules.",
    ogType: "article",
  },
};

/**
 * Official 2026 Physics unit → route ownership (JEE Main and NEET UG).
 *
 * One explicit source for syllabus-unit navigation: every official unit names
 * its primary route and any supporting split routes. Unit wording follows each
 * exam's own official document, so JEE and NEET are deliberately not identical.
 * Umbrella overview routes are listed separately and never act as a unit.
 */
export interface PhysicsUnit {
  n: number;
  name: string;
  primary: string;
  /** Focused routes that cover part of this official unit. */
  parts?: string[];
}

export interface PhysicsOverview {
  url: string;
  /** Official unit numbers this overview spans. */
  covers: number[];
}

export const jeeMainPhysicsUnits: PhysicsUnit[] = [
  { n: 1, name: "Units and Measurements", primary: "/jee/physics/units-and-measurements" },
  { n: 2, name: "Kinematics", primary: "/jee/physics/kinematics" },
  { n: 3, name: "Laws of Motion", primary: "/jee/physics/laws-of-motion" },
  { n: 4, name: "Work, Energy and Power", primary: "/jee/physics/work-energy-power" },
  { n: 5, name: "Rotational Motion", primary: "/jee/physics/rotational-motion", parts: ["/jee/physics/center-of-mass"] },
  { n: 6, name: "Gravitation", primary: "/jee/physics/gravitation" },
  {
    n: 7,
    name: "Properties of Solids and Liquids",
    primary: "/jee/physics/fluid-mechanics",
    parts: ["/jee/physics/elasticity", "/jee/physics/surface-tension", "/jee/physics/thermal-properties"],
  },
  { n: 8, name: "Thermodynamics", primary: "/jee/physics/thermodynamics" },
  { n: 9, name: "Kinetic Theory of Gases", primary: "/jee/physics/kinetic-theory-of-gases" },
  { n: 10, name: "Oscillations and Waves", primary: "/jee/physics/simple-harmonic-motion", parts: ["/jee/physics/waves"] },
  { n: 11, name: "Electrostatics", primary: "/jee/physics/electrostatics", parts: ["/jee/physics/capacitance"] },
  { n: 12, name: "Current Electricity", primary: "/jee/physics/current-electricity" },
  { n: 13, name: "Magnetic Effects of Current and Magnetism", primary: "/jee/physics/magnetism" },
  {
    n: 14,
    name: "Electromagnetic Induction and Alternating Currents",
    primary: "/jee/physics/electromagnetic-induction",
    parts: ["/jee/physics/alternating-current"],
  },
  { n: 15, name: "Electromagnetic Waves", primary: "/jee/physics/electromagnetic-waves" },
  { n: 16, name: "Optics", primary: "/jee/physics/optics", parts: ["/jee/physics/ray-optics", "/jee/physics/wave-optics"] },
  { n: 17, name: "Dual Nature of Matter and Radiation", primary: "/jee/physics/dual-nature-of-matter" },
  { n: 18, name: "Atoms and Nuclei", primary: "/jee/physics/atoms-and-nuclei" },
  { n: 19, name: "Electronic Devices", primary: "/jee/physics/semiconductors" },
  { n: 20, name: "Experimental Skills", primary: "/jee/physics/experimental-skills" },
];

export const neetPhysicsUnits: PhysicsUnit[] = [
  { n: 1, name: "Physics and Measurement", primary: "/neet/physics/units-measurements" },
  { n: 2, name: "Kinematics", primary: "/neet/physics/kinematics", parts: ["/neet/physics/motion-in-plane"] },
  { n: 3, name: "Laws of Motion", primary: "/neet/physics/laws-of-motion" },
  { n: 4, name: "Work, Energy, and Power", primary: "/neet/physics/work-energy-power" },
  { n: 5, name: "Rotational Motion", primary: "/neet/physics/rotational-motion" },
  { n: 6, name: "Gravitation", primary: "/neet/physics/gravitation" },
  {
    n: 7,
    name: "Properties of Solids and Liquids",
    primary: "/neet/physics/properties-of-matter",
    parts: ["/neet/physics/thermal-properties"],
  },
  { n: 8, name: "Thermodynamics", primary: "/neet/physics/thermodynamics" },
  { n: 9, name: "Kinetic Theory of Gases", primary: "/neet/physics/kinetic-theory" },
  { n: 10, name: "Oscillations and Waves", primary: "/neet/physics/oscillations", parts: ["/neet/physics/waves"] },
  { n: 11, name: "Electrostatics", primary: "/neet/physics/electrostatics" },
  { n: 12, name: "Current Electricity", primary: "/neet/physics/current-electricity" },
  { n: 13, name: "Magnetic Effects of Current and Magnetism", primary: "/neet/physics/magnetism" },
  {
    n: 14,
    name: "Electromagnetic Induction and Alternating Currents",
    primary: "/neet/physics/electromagnetic-induction",
    parts: ["/neet/physics/alternating-current"],
  },
  { n: 15, name: "Electromagnetic Waves", primary: "/neet/physics/electromagnetic-waves" },
  { n: 16, name: "Optics", primary: "/neet/physics/optics", parts: ["/neet/physics/ray-optics", "/neet/physics/wave-optics"] },
  { n: 17, name: "Dual Nature of Matter and Radiation", primary: "/neet/physics/dual-nature-radiation" },
  { n: 18, name: "Atoms and Nuclei", primary: "/neet/physics/atoms", parts: ["/neet/physics/nuclei"] },
  { n: 19, name: "Electronic Devices", primary: "/neet/physics/semiconductor-electronics" },
  { n: 20, name: "Experimental Skills", primary: "/neet/physics/experimental-skills" },
];

export const physicsOverviews: PhysicsOverview[] = [
  { url: "/jee/physics/modern-physics", covers: [17, 18] },
  { url: "/neet/physics/mechanics", covers: [1, 2, 3, 4, 5, 6] },
  { url: "/neet/physics/modern-physics", covers: [17, 18, 19] },
];

export function physicsUnitsFor(platform: string): PhysicsUnit[] | undefined {
  if (platform === "jee") return jeeMainPhysicsUnits;
  if (platform === "neet") return neetPhysicsUnits;
  return undefined;
}

/** Visible "Official syllabus unit" label for a Physics route. */
export function officialUnitLabel(url: string): string | undefined {
  const platform = url.split("/")[1] ?? "";
  const units = physicsUnitsFor(platform);
  if (!units) return undefined;
  const overview = physicsOverviews.find((o) => o.url === url);
  if (overview) {
    const names = overview.covers.map((n) => units.find((u) => u.n === n)!.name);
    return `Overview, not an official unit. Covers ${names.join("; ")}`;
  }
  const unit = units.find((u) => u.primary === url || u.parts?.includes(url));
  return unit ? `Unit ${unit.n}: ${unit.name}` : undefined;
}

/** Explicit primary route for an official Physics unit name. */
export function physicsUnitRoute(platform: string, label: string): string | undefined {
  const key = label.trim().toLowerCase();
  return physicsUnitsFor(platform)?.find((u) => u.name.toLowerCase() === key)?.primary;
}

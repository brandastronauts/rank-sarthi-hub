import type { ChapterContent } from "@/content/types";
import { jeePhysicsElectrostatics } from "./jee-physics-electrostatics";
import { jeePhysicsCurrentElectricity } from "./jee-physics-current-electricity";
import { jeePhysicsLawsOfMotion } from "./jee-physics-laws-of-motion";
import { jeePhysicsModernPhysics } from "./jee-physics-modern-physics";
import { jeePhysicsOptics } from "./jee-physics-optics";
import { jeePhysicsWaves } from "./jee-physics-waves";
import { jeePhysicsThermodynamics } from "./jee-physics-thermodynamics";
import { jeePhysicsMagnetism } from "./jee-physics-magnetism";
import { jeePhysicsElectromagneticInduction } from "./jee-physics-electromagnetic-induction";
import { jeePhysicsKinematics } from "./jee-physics-kinematics";
import { jeePhysicsRayOptics } from "./jee-physics-ray-optics";
import { jeePhysicsWaveOptics } from "./jee-physics-wave-optics";
import { jeePhysicsCapacitance } from "./jee-physics-capacitance";
import { jeePhysicsElectromagneticWaves } from "./jee-physics-electromagnetic-waves";
import { jeePhysicsKineticTheoryOfGases } from "./jee-physics-kinetic-theory-of-gases";
import { jeePhysicsThermalProperties } from "./jee-physics-thermal-properties";
import { jeePhysicsCenterOfMass } from "./jee-physics-center-of-mass";
import { jeePhysicsElasticity } from "./jee-physics-elasticity";
import { jeePhysicsSurfaceTension } from "./jee-physics-surface-tension";
import { jeePhysicsCommunicationSystems } from "./jee-physics-communication-systems";
import { jeePhysicsWorkEnergyPower } from "./jee-physics-work-energy-power";
import { jeePhysicsRotationalMotion } from "./jee-physics-rotational-motion";
import { jeePhysicsGravitation } from "./jee-physics-gravitation";
import { jeePhysicsFluidMechanics } from "./jee-physics-fluid-mechanics";
import { jeePhysicsSimpleHarmonicMotion } from "./jee-physics-simple-harmonic-motion";
import { jeePhysicsUnitsAndMeasurements } from "./jee-physics-units-and-measurements";
import { jeePhysicsAlternatingCurrent } from "./jee-physics-alternating-current";
import { jeePhysicsDualNatureOfMatter } from "./jee-physics-dual-nature-of-matter";
import { jeePhysicsAtomsAndNuclei } from "./jee-physics-atoms-and-nuclei";
import { jeePhysicsSemiconductors } from "./jee-physics-semiconductors";
import { jeeChemistryAlcoholsPhenolsEthers } from "./jee-chemistry-alcohols-phenols-ethers";
import { jeeChemistryAldehydesKetones } from "./jee-chemistry-aldehydes-ketones";
import { jeeChemistryAmines } from "./jee-chemistry-amines";
import { jeeChemistryAtomicStructure } from "./jee-chemistry-atomic-structure";
import { jeeChemistryBiomolecules } from "./jee-chemistry-biomolecules";
import { jeeChemistryCarboxylicAcids } from "./jee-chemistry-carboxylic-acids";
import { jeeChemistryChemicalBonding } from "./jee-chemistry-chemical-bonding";
import { jeeChemistryChemicalKinetics } from "./jee-chemistry-chemical-kinetics";
import { jeeChemistryChemistryEverydayLife } from "./jee-chemistry-chemistry-everyday-life";
import { jeeChemistryCoordinationCompounds } from "./jee-chemistry-coordination-compounds";
import { jeeChemistryDAndFBlockElements } from "./jee-chemistry-d-and-f-block-elements";
import { jeeChemistryElectrochemistry } from "./jee-chemistry-electrochemistry";
import { jeeChemistryEnvironmentalChemistry } from "./jee-chemistry-environmental-chemistry";
import { jeeChemistryEquilibrium } from "./jee-chemistry-equilibrium";
import { jeeChemistryGaseousState } from "./jee-chemistry-gaseous-state";
import { jeeChemistryHaloalkanesHaloarenes } from "./jee-chemistry-haloalkanes-haloarenes";
import { jeeChemistryHydrocarbons } from "./jee-chemistry-hydrocarbons";
import { jeeChemistryIonicEquilibrium } from "./jee-chemistry-ionic-equilibrium";
import { jeeChemistryMoleConcept } from "./jee-chemistry-mole-concept";
import { jeeChemistryOrganicBasics } from "./jee-chemistry-organic-basics";
import { jeeChemistryPBlockElements } from "./jee-chemistry-p-block-elements";
import { jeeChemistryPeriodicTable } from "./jee-chemistry-periodic-table";
import { jeeChemistryPolymers } from "./jee-chemistry-polymers";
import { jeeChemistryRedoxReactions } from "./jee-chemistry-redox-reactions";
import { jeeChemistrySBlockElements } from "./jee-chemistry-s-block-elements";
import { jeeChemistrySolidState } from "./jee-chemistry-solid-state";
import { jeeChemistrySolutions } from "./jee-chemistry-solutions";
import { jeeChemistryStatesOfMatter } from "./jee-chemistry-states-of-matter";
import { jeeChemistrySurfaceChemistry } from "./jee-chemistry-surface-chemistry";
import { jeeChemistryThermodynamics } from "./jee-chemistry-thermodynamics";

/**
 * Chapter content registry (T06).
 *
 * Adding a chapter page = adding ONE record here. No route, no layout, no
 * JSX, no CSS. The generic /$platform/$subject/$chapter route resolves the
 * record and the T06 recipe decides which blocks the data supports.
 */
const chapters: ChapterContent[] = [
  jeePhysicsElectrostatics,
  jeePhysicsCurrentElectricity,
  jeePhysicsLawsOfMotion,
  jeePhysicsModernPhysics,
  jeePhysicsOptics,
  jeePhysicsWaves,
  jeePhysicsThermodynamics,
  jeePhysicsMagnetism,
  jeePhysicsElectromagneticInduction,
  jeePhysicsKinematics,
  jeePhysicsRayOptics,
  jeePhysicsWaveOptics,
  jeePhysicsCapacitance,
  jeePhysicsElectromagneticWaves,
  jeePhysicsKineticTheoryOfGases,
  jeePhysicsThermalProperties,
  jeePhysicsCenterOfMass,
  jeePhysicsElasticity,
  jeePhysicsSurfaceTension,
  jeePhysicsCommunicationSystems,
  jeePhysicsWorkEnergyPower,
  jeePhysicsRotationalMotion,
  jeePhysicsGravitation,
  jeePhysicsFluidMechanics,
  jeePhysicsSimpleHarmonicMotion,
  jeePhysicsUnitsAndMeasurements,
  jeePhysicsAlternatingCurrent,
  jeePhysicsDualNatureOfMatter,
  jeePhysicsAtomsAndNuclei,
  jeePhysicsSemiconductors,
  jeeChemistryAlcoholsPhenolsEthers,
  jeeChemistryAldehydesKetones,
  jeeChemistryAmines,
  jeeChemistryAtomicStructure,
  jeeChemistryBiomolecules,
  jeeChemistryCarboxylicAcids,
  jeeChemistryChemicalBonding,
  jeeChemistryChemicalKinetics,
  jeeChemistryChemistryEverydayLife,
  jeeChemistryCoordinationCompounds,
  jeeChemistryDAndFBlockElements,
  jeeChemistryElectrochemistry,
  jeeChemistryEnvironmentalChemistry,
  jeeChemistryEquilibrium,
  jeeChemistryGaseousState,
  jeeChemistryHaloalkanesHaloarenes,
  jeeChemistryHydrocarbons,
  jeeChemistryIonicEquilibrium,
  jeeChemistryMoleConcept,
  jeeChemistryOrganicBasics,
  jeeChemistryPBlockElements,
  jeeChemistryPeriodicTable,
  jeeChemistryPolymers,
  jeeChemistryRedoxReactions,
  jeeChemistrySBlockElements,
  jeeChemistrySolidState,
  jeeChemistrySolutions,
  jeeChemistryStatesOfMatter,
  jeeChemistrySurfaceChemistry,
  jeeChemistryThermodynamics,
];

const byUrl = new Map(chapters.map((c) => [c.url, c]));

export function getChapter(platform: string, subject: string, slug: string): ChapterContent | undefined {
  return byUrl.get(`/${platform}/${subject}/${slug}`);
}

export function allChapters(): ChapterContent[] {
  return chapters;
}

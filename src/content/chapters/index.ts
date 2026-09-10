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
import { jeeMathematicsThreeDGeometry } from "./jee-mathematics-3d-geometry";
import { jeeMathematicsAreaUnderCurves } from "./jee-mathematics-area-under-curves";
import { jeeMathematicsBinomialTheorem } from "./jee-mathematics-binomial-theorem";
import { jeeMathematicsCalculus } from "./jee-mathematics-calculus";
import { jeeMathematicsCircles } from "./jee-mathematics-circles";
import { jeeMathematicsComplexNumbers } from "./jee-mathematics-complex-numbers";
import { jeeMathematicsConicSections } from "./jee-mathematics-conic-sections";
import { jeeMathematicsCoordinateGeometry } from "./jee-mathematics-coordinate-geometry";
import { jeeMathematicsDefiniteIntegrals } from "./jee-mathematics-definite-integrals";
import { jeeMathematicsDifferentialEquations } from "./jee-mathematics-differential-equations";
import { jeeMathematicsDifferentiation } from "./jee-mathematics-differentiation";
import { jeeMathematicsEllipse } from "./jee-mathematics-ellipse";
import { jeeMathematicsFunctions } from "./jee-mathematics-functions";
import { jeeMathematicsHyperbola } from "./jee-mathematics-hyperbola";
import { jeeMathematicsIntegration } from "./jee-mathematics-integration";
import { jeeMathematicsInverseTrigonometry } from "./jee-mathematics-inverse-trigonometry";
import { jeeMathematicsLimitsContinuity } from "./jee-mathematics-limits-continuity";
import { jeeMathematicsMatricesDeterminants } from "./jee-mathematics-matrices-determinants";
import { jeeMathematicsParabola } from "./jee-mathematics-parabola";
import { jeeMathematicsPermutationsCombinations } from "./jee-mathematics-permutations-combinations";
import { jeeMathematicsProbability } from "./jee-mathematics-probability";
import { jeeMathematicsQuadraticEquations } from "./jee-mathematics-quadratic-equations";
import { jeeMathematicsSequencesSeries } from "./jee-mathematics-sequences-series";
import { jeeMathematicsSetsRelations } from "./jee-mathematics-sets-relations";
import { jeeMathematicsStatistics } from "./jee-mathematics-statistics";
import { jeeMathematicsStraightLines } from "./jee-mathematics-straight-lines";
import { jeeMathematicsTrigonometry } from "./jee-mathematics-trigonometry";
import { jeeMathematicsVectors } from "./jee-mathematics-vectors";
import { jeeMathematicsApplicationOfDerivatives } from "./jee-mathematics-application-of-derivatives";
import { jeeMathematicsMathematicalReasoning } from "./jee-mathematics-mathematical-reasoning";
import { neetBiologyAnatomyOfPlants } from "./neet-biology-anatomy-of-plants";
import { neetBiologyAnimalKingdom } from "./neet-biology-animal-kingdom";
import { neetBiologyBiodiversityConservation } from "./neet-biology-biodiversity-conservation";
import { neetBiologyBiologicalClassification } from "./neet-biology-biological-classification";
import { neetBiologyBiomolecules } from "./neet-biology-biomolecules";
import { neetBiologyBiotechnologyApplications } from "./neet-biology-biotechnology-applications";
import { neetBiologyBiotechnology } from "./neet-biology-biotechnology";
import { neetBiologyBodyFluidsCirculation } from "./neet-biology-body-fluids-circulation";
import { neetBiologyBreathingExchangeGases } from "./neet-biology-breathing-exchange-gases";
import { neetBiologyCellBiology } from "./neet-biology-cell-biology";
import { neetBiologyChemicalCoordination } from "./neet-biology-chemical-coordination";
import { neetBiologyDigestionAbsorption } from "./neet-biology-digestion-absorption";
import { neetBiologyEcology } from "./neet-biology-ecology";
import { neetBiologyEcosystem } from "./neet-biology-ecosystem";
import { neetBiologyEnvironmentalIssues } from "./neet-biology-environmental-issues";
import { neetBiologyEvolution } from "./neet-biology-evolution";
import { neetBiologyExcretoryProducts } from "./neet-biology-excretory-products";
import { neetBiologyGenetics } from "./neet-biology-genetics";
import { neetBiologyHumanHealthDisease } from "./neet-biology-human-health-disease";
import { neetBiologyHumanPhysiology } from "./neet-biology-human-physiology";
import { neetBiologyHumanReproduction } from "./neet-biology-human-reproduction";
import { neetBiologyLivingWorld } from "./neet-biology-living-world";
import { neetBiologyLocomotionMovement } from "./neet-biology-locomotion-movement";
import { neetBiologyMicrobesHumanWelfare } from "./neet-biology-microbes-human-welfare";
import { neetBiologyMolecularBasisOfInheritance } from "./neet-biology-molecular-basis-of-inheritance";
import { neetBiologyMorphologyOfPlants } from "./neet-biology-morphology-of-plants";
import { neetBiologyNeuralControl } from "./neet-biology-neural-control";
import { neetBiologyOrganismsPopulations } from "./neet-biology-organisms-populations";
import { neetBiologyPhotosynthesis } from "./neet-biology-photosynthesis";
import { neetBiologyPlantKingdom } from "./neet-biology-plant-kingdom";
import { neetBiologyPlantPhysiology } from "./neet-biology-plant-physiology";
import { neetBiologyPrinciplesOfInheritance } from "./neet-biology-principles-of-inheritance";
import { neetBiologyReproduction } from "./neet-biology-reproduction";
import { neetBiologyReproductiveHealth } from "./neet-biology-reproductive-health";
import { neetBiologyRespirationInPlants } from "./neet-biology-respiration-in-plants";
import { neetBiologySexualReproductionPlants } from "./neet-biology-sexual-reproduction-plants";
import { neetBiologyStructuralOrganisationAnimals } from "./neet-biology-structural-organisation-animals";
import { neetBiologyTransportInPlants } from "./neet-biology-transport-in-plants";

import { neetChemistryAtomicStructure } from "./neet-chemistry-atomic-structure";
import { neetChemistryChemicalBonding } from "./neet-chemistry-chemical-bonding";
import { neetChemistryChemicalKinetics } from "./neet-chemistry-chemical-kinetics";
import { neetChemistryCoordinationCompounds } from "./neet-chemistry-coordination-compounds";
import { neetChemistryDAndFBlockElements } from "./neet-chemistry-d-and-f-block-elements";
import { neetChemistryElectrochemistry } from "./neet-chemistry-electrochemistry";
import { neetChemistryEquilibrium } from "./neet-chemistry-equilibrium";
import { neetChemistryIonicEquilibrium } from "./neet-chemistry-ionic-equilibrium";
import { neetChemistryPBlockElements } from "./neet-chemistry-p-block-elements";
import { neetChemistryPeriodicClassification } from "./neet-chemistry-periodic-classification";
import { neetChemistryRedoxReactions } from "./neet-chemistry-redox-reactions";
import { neetChemistrySolutions } from "./neet-chemistry-solutions";
import { neetChemistrySomeBasicConcepts } from "./neet-chemistry-some-basic-concepts";
import { neetChemistryStructureOfAtom } from "./neet-chemistry-structure-of-atom";
import { neetChemistryThermodynamics } from "./neet-chemistry-thermodynamics";
import { neetPhysicsAlternatingCurrent } from "./neet-physics-alternating-current";
import { neetPhysicsAtoms } from "./neet-physics-atoms";
import { neetPhysicsCurrentElectricity } from "./neet-physics-current-electricity";
import { neetPhysicsDualNatureRadiation } from "./neet-physics-dual-nature-radiation";
import { neetPhysicsElectromagneticInduction } from "./neet-physics-electromagnetic-induction";
import { neetPhysicsElectromagneticWaves } from "./neet-physics-electromagnetic-waves";
import { neetPhysicsElectrostatics } from "./neet-physics-electrostatics";
import { neetPhysicsGravitation } from "./neet-physics-gravitation";
import { neetPhysicsGravitation2 } from "./neet-physics-gravitation-2";
import { neetPhysicsKinematics } from "./neet-physics-kinematics";
import { neetPhysicsKineticTheory } from "./neet-physics-kinetic-theory";
import { neetPhysicsLawsOfMotion } from "./neet-physics-laws-of-motion";
import { neetPhysicsMagnetism } from "./neet-physics-magnetism";
import { neetPhysicsMechanics } from "./neet-physics-mechanics";
import { neetPhysicsModernPhysics } from "./neet-physics-modern-physics";
import { neetPhysicsMotionInPlane } from "./neet-physics-motion-in-plane";
import { neetPhysicsNuclei } from "./neet-physics-nuclei";
import { neetPhysicsOptics } from "./neet-physics-optics";
import { neetPhysicsOscillations } from "./neet-physics-oscillations";
import { neetPhysicsPropertiesOfMatter } from "./neet-physics-properties-of-matter";
import { neetPhysicsRayOptics } from "./neet-physics-ray-optics";
import { neetPhysicsRotationalMotion } from "./neet-physics-rotational-motion";
import { neetPhysicsSemiconductorElectronics } from "./neet-physics-semiconductor-electronics";
import { neetPhysicsThermalProperties } from "./neet-physics-thermal-properties";
import { neetPhysicsThermodynamics } from "./neet-physics-thermodynamics";
import { neetPhysicsUnitsMeasurements } from "./neet-physics-units-measurements";
import { neetPhysicsWaveOptics } from "./neet-physics-wave-optics";
import { neetPhysicsWaves } from "./neet-physics-waves";
import { neetPhysicsWorkEnergyPower } from "./neet-physics-work-energy-power";

import { neetChemistryOrganicChemistry } from "./neet-chemistry-organic-chemistry";
import { neetChemistryHydrocarbons } from "./neet-chemistry-hydrocarbons";
import { neetChemistryHaloalkanesHaloarenes } from "./neet-chemistry-haloalkanes-haloarenes";
import { neetChemistryAlcoholsPhenolsEthers } from "./neet-chemistry-alcohols-phenols-ethers";
import { neetChemistryAldehydesKetones } from "./neet-chemistry-aldehydes-ketones";
import { neetChemistryCarboxylicAcids } from "./neet-chemistry-carboxylic-acids";
import { neetChemistryAmines } from "./neet-chemistry-amines";
import { neetChemistryBiomolecules } from "./neet-chemistry-biomolecules";
import { neetChemistryPolymers } from "./neet-chemistry-polymers";
import { neetChemistrySolidState } from "./neet-chemistry-solid-state";
import { neetChemistrySurfaceChemistry } from "./neet-chemistry-surface-chemistry";
import { neetChemistrySBlockElements } from "./neet-chemistry-s-block-elements";
import { neetChemistryStatesOfMatter } from "./neet-chemistry-states-of-matter";
import { neetChemistryEnvironmentalChemistry } from "./neet-chemistry-environmental-chemistry";
import { neetChemistryChemistryEverydayLife } from "./neet-chemistry-chemistry-everyday-life";

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
  jeeMathematicsThreeDGeometry,
  jeeMathematicsAreaUnderCurves,
  jeeMathematicsBinomialTheorem,
  jeeMathematicsCalculus,
  jeeMathematicsCircles,
  jeeMathematicsComplexNumbers,
  jeeMathematicsConicSections,
  jeeMathematicsCoordinateGeometry,
  jeeMathematicsDefiniteIntegrals,
  jeeMathematicsDifferentialEquations,
  jeeMathematicsDifferentiation,
  jeeMathematicsEllipse,
  jeeMathematicsFunctions,
  jeeMathematicsHyperbola,
  jeeMathematicsIntegration,
  jeeMathematicsInverseTrigonometry,
  jeeMathematicsLimitsContinuity,
  jeeMathematicsMatricesDeterminants,
  jeeMathematicsParabola,
  jeeMathematicsPermutationsCombinations,
  jeeMathematicsProbability,
  jeeMathematicsQuadraticEquations,
  jeeMathematicsSequencesSeries,
  jeeMathematicsSetsRelations,
  jeeMathematicsStatistics,
  jeeMathematicsStraightLines,
  jeeMathematicsTrigonometry,
  jeeMathematicsVectors,
  jeeMathematicsApplicationOfDerivatives,
  jeeMathematicsMathematicalReasoning,
  neetBiologyAnatomyOfPlants,
  neetBiologyAnimalKingdom,
  neetBiologyBiodiversityConservation,
  neetBiologyBiologicalClassification,
  neetBiologyBiomolecules,
  neetBiologyBiotechnologyApplications,
  neetBiologyBiotechnology,
  neetBiologyBodyFluidsCirculation,
  neetBiologyBreathingExchangeGases,
  neetBiologyCellBiology,
  neetBiologyChemicalCoordination,
  neetBiologyDigestionAbsorption,
  neetBiologyEcology,
  neetBiologyEcosystem,
  neetBiologyEnvironmentalIssues,
  neetBiologyEvolution,
  neetBiologyExcretoryProducts,
  neetBiologyGenetics,
  neetBiologyHumanHealthDisease,
  neetBiologyHumanPhysiology,
  neetBiologyHumanReproduction,
  neetBiologyLivingWorld,
  neetBiologyLocomotionMovement,
  neetBiologyMicrobesHumanWelfare,
  neetBiologyMolecularBasisOfInheritance,
  neetBiologyMorphologyOfPlants,
  neetBiologyNeuralControl,
  neetBiologyOrganismsPopulations,
  neetBiologyPhotosynthesis,
  neetBiologyPlantKingdom,
  neetBiologyPlantPhysiology,
  neetBiologyPrinciplesOfInheritance,
  neetBiologyReproduction,
  neetBiologyReproductiveHealth,
  neetBiologyRespirationInPlants,
  neetBiologySexualReproductionPlants,
  neetBiologyStructuralOrganisationAnimals,
  neetBiologyTransportInPlants,
  neetChemistryAtomicStructure,
  neetChemistryChemicalBonding,
  neetChemistryChemicalKinetics,
  neetChemistryCoordinationCompounds,
  neetChemistryDAndFBlockElements,
  neetChemistryElectrochemistry,
  neetChemistryEquilibrium,
  neetChemistryIonicEquilibrium,
  neetChemistryPBlockElements,
  neetChemistryPeriodicClassification,
  neetChemistryRedoxReactions,
  neetChemistrySolutions,
  neetChemistrySomeBasicConcepts,
  neetChemistryStructureOfAtom,
  neetChemistryThermodynamics,
  neetPhysicsAlternatingCurrent,
  neetPhysicsAtoms,
  neetPhysicsCurrentElectricity,
  neetPhysicsDualNatureRadiation,
  neetPhysicsElectromagneticInduction,
  neetPhysicsElectromagneticWaves,
  neetPhysicsElectrostatics,
  neetPhysicsGravitation,
  neetPhysicsGravitation2,
  neetPhysicsKinematics,
  neetPhysicsKineticTheory,
  neetPhysicsLawsOfMotion,
  neetPhysicsMagnetism,
  neetPhysicsMechanics,
  neetPhysicsModernPhysics,
  neetPhysicsMotionInPlane,
  neetPhysicsNuclei,
  neetPhysicsOptics,
  neetPhysicsOscillations,
  neetPhysicsPropertiesOfMatter,
  neetPhysicsRayOptics,
  neetPhysicsRotationalMotion,
  neetPhysicsSemiconductorElectronics,
  neetPhysicsThermalProperties,
  neetPhysicsThermodynamics,
  neetPhysicsUnitsMeasurements,
  neetPhysicsWaveOptics,
  neetPhysicsWaves,
  neetPhysicsWorkEnergyPower,
  neetChemistryOrganicChemistry,
  neetChemistryHydrocarbons,
  neetChemistryHaloalkanesHaloarenes,
  neetChemistryAlcoholsPhenolsEthers,
  neetChemistryAldehydesKetones,
  neetChemistryCarboxylicAcids,
  neetChemistryAmines,
  neetChemistryBiomolecules,
  neetChemistryPolymers,
  neetChemistrySolidState,
  neetChemistrySurfaceChemistry,
  neetChemistrySBlockElements,
  neetChemistryStatesOfMatter,
  neetChemistryEnvironmentalChemistry,
  neetChemistryChemistryEverydayLife,
];

const byUrl = new Map(chapters.map((c) => [c.url, c]));

export function getChapter(platform: string, subject: string, slug: string): ChapterContent | undefined {
  return byUrl.get(`/${platform}/${subject}/${slug}`);
}

export function allChapters(): ChapterContent[] {
  return chapters;
}

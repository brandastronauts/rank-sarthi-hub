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
];

const byUrl = new Map(chapters.map((c) => [c.url, c]));

export function getChapter(platform: string, subject: string, slug: string): ChapterContent | undefined {
  return byUrl.get(`/${platform}/${subject}/${slug}`);
}

export function allChapters(): ChapterContent[] {
  return chapters;
}

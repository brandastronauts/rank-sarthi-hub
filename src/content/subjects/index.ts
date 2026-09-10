import type { SubjectHubContent } from "@/content/types";
import { jeePhysicsHub } from "./jee-physics";
import { jeeChemistryHub } from "./jee-chemistry";
import { jeeMathematicsHub } from "./jee-mathematics";
import { neetBiologyHub } from "./neet-biology";
import { neetPhysicsHub } from "./neet-physics";
import { neetChemistryHub } from "./neet-chemistry";

/**
 * Subject hub registry (T04). One record per built subject hub; a subject
 * with no record has no hub route.
 */
const hubs: SubjectHubContent[] = [jeePhysicsHub, jeeChemistryHub, jeeMathematicsHub, neetBiologyHub, neetPhysicsHub, neetChemistryHub];

const byUrl = new Map(hubs.map((h) => [h.url, h]));

export function getSubjectHub(platform: string, subject: string): SubjectHubContent | undefined {
  return byUrl.get(`/${platform}/${subject}`);
}

export function allSubjectHubs(): SubjectHubContent[] {
  return hubs;
}

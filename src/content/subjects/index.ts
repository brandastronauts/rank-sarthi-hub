import type { SubjectHubContent } from "@/content/types";
import { jeePhysicsHub } from "./jee-physics";

/**
 * Subject hub registry (T04). One record per built subject hub; a subject
 * with no record has no hub route.
 */
const hubs: SubjectHubContent[] = [jeePhysicsHub];

const byUrl = new Map(hubs.map((h) => [h.url, h]));

export function getSubjectHub(platform: string, subject: string): SubjectHubContent | undefined {
  return byUrl.get(`/${platform}/${subject}`);
}

export function allSubjectHubs(): SubjectHubContent[] {
  return hubs;
}

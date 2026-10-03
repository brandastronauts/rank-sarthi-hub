import { describe, expect, it } from "vitest";
import { jeeMainPhysicsUnits, neetPhysicsUnits, officialUnitLabel } from "@/content/physics-units";
import { getUrl, isIndexable } from "@/content/registry";
import { resolveTopicRoute } from "@/content/topic-links";

describe("official 2026 Physics units", () => {
  it("JEE Main has 20 units, every primary route built", () => {
    expect(jeeMainPhysicsUnits).toHaveLength(20);
    for (const u of jeeMainPhysicsUnits) expect(getUrl(u.primary)?.buildStatus).toBe("built");
  });
  it("NEET has 20 units, every primary route built", () => {
    expect(neetPhysicsUnits).toHaveLength(20);
    for (const u of neetPhysicsUnits) expect(getUrl(u.primary)?.buildStatus).toBe("built");
  });
  it("keeps exam-specific wording", () => {
    expect(jeeMainPhysicsUnits[0]!.name).toBe("Units and Measurements");
    expect(neetPhysicsUnits[0]!.name).toBe("Physics and Measurement");
    expect(jeeMainPhysicsUnits[3]!.name).toBe("Work, Energy and Power");
    expect(neetPhysicsUnits[3]!.name).toBe("Work, Energy, and Power");
  });
  it("syllabus unit labels resolve explicitly and stay in-exam", () => {
    for (const [platform, units] of [["jee", jeeMainPhysicsUnits], ["neet", neetPhysicsUnits]] as const) {
      for (const u of units) {
        expect(resolveTopicRoute(u.name, { platform, subject: "Physics" })?.url).toBe(u.primary);
      }
    }
  });
  it("Communication Systems is noindex and not a current unit", () => {
    expect(isIndexable(getUrl("/jee/physics/communication-systems"))).toBe(false);
    expect(officialUnitLabel("/jee/physics/communication-systems")).toBeUndefined();
  });
  it("Gravitation 2 redirects to the primary Gravitation page", () => {
    expect(getUrl("/neet/physics/gravitation-2")?.redirectTo).toBe("/neet/physics/gravitation");
    expect(isIndexable(getUrl("/neet/physics/gravitation-2"))).toBe(false);
  });
  it("JEE Experimental Skills indexable; NEET held noindex pending faculty review", () => {
    expect(isIndexable(getUrl("/jee/physics/experimental-skills"))).toBe(true);
    expect(isIndexable(getUrl("/neet/physics/experimental-skills"))).toBe(false);
    expect(getUrl("/neet/physics/experimental-skills")?.internalStatus).toBe("FACULTY_REVIEW_PENDING");
    expect(getUrl("/neet/physics/experimental-skills")?.buildStatus).toBe("built");
  });
  it("split pages name their official unit", () => {
    expect(officialUnitLabel("/jee/physics/surface-tension")).toBe("Unit 7: Properties of Solids and Liquids");
    expect(officialUnitLabel("/neet/physics/nuclei")).toBe("Unit 18: Atoms and Nuclei");
    expect(officialUnitLabel("/neet/physics/waves")).toBe("Unit 10: Oscillations and Waves");
  });
});

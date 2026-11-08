import { describe, expect, it } from "vitest";
import { getAcademicProfile, publicAcademicProfiles, reviewerPools } from "@/content/academic-profiles";
import { getUrl } from "@/content/registry";

describe("Mrs. Aparna Arya faculty record", () => {
  it("is public Biology faculty with the supplied name", () => {
    const p = publicAcademicProfiles.find((x) => x.slug === "aparna-arya");
    expect(p?.name).toBe("Mrs. Aparna Arya");
    expect(p?.subject).toBe("Biology");
    expect(p?.title).toBe("Biology Faculty | Zoology Expert");
  });
  it("has a profile URL and no implied review assignment", () => {
    expect(getUrl("/about/faculty/aparna-arya")).toBeDefined();
    expect(reviewerPools.Biology).not.toContain("aparna-arya");
    expect(getAcademicProfile("aparna-arya")?.reviewAreas).toEqual([]);
  });
});

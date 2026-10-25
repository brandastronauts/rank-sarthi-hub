import { describe, expect, it } from "vitest";
import { academicProfiles, getAcademicProfile, publicAcademicProfiles, reviewerPools } from "@/content/academic-profiles";
import { getUrl } from "@/content/registry";
import { subjectFacultyFor } from "@/content/subject-faculty";

describe("approved October faculty update", () => {
  it("adds one Pallavi record without inventing a surname or honorific", () => {
    expect(academicProfiles.filter((profile) => profile.id === "pallavi")).toHaveLength(1);
    expect(getAcademicProfile("pallavi")?.name).toBe("Pallavi");
  });

  it("publishes Pallavi for Biology and NEET only", () => {
    const pallavi = publicAcademicProfiles.find((profile) => profile.slug === "pallavi");
    expect(pallavi?.subject).toBe("Biology");
    expect(pallavi?.examScope).toEqual(["NEET UG Biology", "NEET UG Zoology"]);
    expect(getUrl("/about/faculty/pallavi")?.indexation).toBe("noindex");
  });

  it("does not infer a Biology review assignment from the new profile", () => {
    expect(reviewerPools.Biology).toEqual([]);
    expect(subjectFacultyFor("/neet/biology/cell-the-unit-of-life")).toBeUndefined();
  });

  it("uses the supplied BPT and healthcare specialization without an inferred doctorate", () => {
    expect(getAcademicProfile("pallavi")?.credentials?.filter((row) => row.section === "Education").map((row) => row.value)).toEqual(["Bachelor of Physiotherapy (BPT)", "Healthcare Administration"]);
  });

  it("preserves Ashutosh's photograph and records the supplied engineering background", () => {
    const ashutosh = getAcademicProfile("ashutosh-pande");
    expect(ashutosh?.photo).toBe("/faculty/ashutosh-pande-senior-mathematics-faculty-rank-sarthi.webp");
    expect(ashutosh?.education).toBe("HBTI, Kanpur");
    expect(ashutosh?.credentials?.map((row) => row.value)).toEqual(["B.Tech in Chemical Engineering, HBTI, Kanpur", "JEE 1998 qualifier"]);
  });

  it("preserves Hardik's photograph without unverified education or achievement badges", () => {
    const hardik = getAcademicProfile("hardik-agrawal");
    expect(hardik?.photo).toBe("/faculty/hardik-agrawal-physics-expert-rank-sarthi.webp");
    expect(hardik?.education).toBeUndefined();
    expect(hardik?.credentials).toBeUndefined();
    expect(hardik?.claimsRequiringEvidence).toContain("JEE Advanced 2024: CRL 11047 requires verification");
  });

  it("keeps every previously public faculty member and both existing URLs", () => {
    expect(publicAcademicProfiles.map((profile) => profile.slug)).toEqual(expect.arrayContaining(["sachin-garg", "gandharva-saxena", "adarsh-kumar", "ashwin-m", "ashutosh-pande", "hardik-agrawal", "pallavi"]));
    expect(getUrl("/about/faculty/ashutosh-pande")?.buildStatus).toBe("built");
    expect(getUrl("/about/faculty/hardik-agrawal")?.buildStatus).toBe("built");
    expect(new Set(academicProfiles.map((profile) => profile.slug)).size).toBe(academicProfiles.length);
  });
});
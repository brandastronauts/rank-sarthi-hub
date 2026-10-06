import { describe, expect, it } from "vitest";
import { academicProfiles } from "@/content/academic-profiles";
import { company } from "@/content/company";

function profile(slug: string) {
  const match = academicProfiles.find((item) => item.slug === slug);
  expect(match).toBeDefined();
  return match;
}

describe("approved brand, faculty, and contact rules", () => {
  it("uses the new official Rank Sarthi business phone formats", () => {
    expect(company.phoneDisplay).toBe("+91 92205 52551");
    expect(company.phoneE164).toBe("+919220552551");
    expect(company.phoneHref).toBe("tel:+919220552551");
  });

  it("keeps Sachin Garg on his canonical profile with approved credentials", () => {
    const sachin = profile("sachin-garg");
    expect(sachin?.name).toBe("Sachin Garg");
    expect(sachin?.featuredCredential).toBe("M.Sc. Mathematics, IIT Madras · CSIR-NET/JRF Qualified");
    expect(sachin?.credentials).toContainEqual({
      label: "Postgraduate degree",
      value: "M.Sc. Mathematics, IIT Madras — 2009",
    });
  });

  it("keeps Adarsh Kumar on his canonical profile with only supplied research claims", () => {
    const adarsh = profile("adarsh-kumar");
    expect(adarsh?.featuredCredential).toBe("PhD Scholar · GATE & CSIR-NET Qualified");
    expect(adarsh?.publications).toEqual(["Two papers related to air pollution"]);
    expect(adarsh?.credentials).toContainEqual({
      label: "Innovation",
      value: "Patent granted for a zero-waste air-pollution filter system",
    });
  });

  it("renames the existing Gandharva display record without changing its route", () => {
    const gandharva = profile("gandharva-saxena");
    expect(gandharva?.name).toBe("Kumar Gandharva Saxena");
    expect(gandharva?.featuredCredential).toBe("B.Tech, Automation Engineering — NSIT");
    expect(gandharva?.credentials).toContainEqual({ label: "DCE entrance rank", value: "655" });
    expect(gandharva?.credentials).toContainEqual({ label: "Roorkee entrance rank", value: "764" });
    expect(JSON.stringify(gandharva)).not.toMatch(/PEC|Punjab Engineering College/i);
  });

  it("does not create duplicate faculty records", () => {
    expect(new Set(academicProfiles.map((item) => item.slug)).size).toBe(academicProfiles.length);
  });
});
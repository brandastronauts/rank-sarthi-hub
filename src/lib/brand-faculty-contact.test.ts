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
    expect(sachin?.credentials).toContainEqual(expect.objectContaining({
      label: "Postgraduate degree",
      value: "M.Sc. Mathematics, IIT Madras — 2009",
    }));
  });

  it("keeps Adarsh Kumar on his canonical profile with only supplied research claims", () => {
    const adarsh = profile("adarsh-kumar");
    expect(adarsh?.featuredCredential).toBe("PhD Scholar · GATE & CSIR-NET Qualified");
    expect(adarsh?.publications).toEqual(["Two papers related to air pollution"]);
    expect(adarsh?.credentials).toContainEqual(expect.objectContaining({
      label: "Innovation",
      value: "Patent granted for a zero-waste air-pollution filter system",
    }));
  });

  it("renames the existing Gandharva display record without changing its route", () => {
    const gandharva = profile("gandharva-saxena");
    expect(gandharva?.name).toBe("Kumar Gandharva Saxena");
    expect(gandharva?.featuredCredential).toBe("B.Tech, Automation Engineering — NSIT");
    expect(gandharva?.credentials).toContainEqual(expect.objectContaining({ label: "DCE entrance rank", value: "655" }));
    expect(gandharva?.credentials).toContainEqual(expect.objectContaining({ label: "Roorkee entrance rank", value: "764" }));
    expect(JSON.stringify(gandharva)).not.toMatch(/PEC|Punjab Engineering College/i);
  });

  it("does not create duplicate faculty records", () => {
    expect(new Set(academicProfiles.map((item) => item.slug)).size).toBe(academicProfiles.length);
  });

  it("limits Adarsh's IIT Delhi credential to project research", () => {
    const adarsh = profile("adarsh-kumar");
    expect(adarsh?.credentials?.find((row) => row.institution)?.institution).toEqual({ name: "IIT Delhi", context: "Project Research" });
    expect(JSON.stringify(adarsh)).not.toMatch(/alumnus|graduate|patent number|patent year/i);
  });

  it("does not infer an Ashwini degree from the IIT Madras association", () => {
    const ashwin = profile("ashwin-m");
    expect(ashwin?.name).toBe("Ashwini M.");
    expect(ashwin?.featuredCredential).toBe("IIT Madras");
    expect(ashwin?.credentials).toEqual([{ label: "Academic association", value: "IIT Madras", section: "Academic Credentials", institution: { name: "IIT Madras" } }]);
    expect(ashwin?.education).toBeUndefined();
  });

  it("retains Sachin's three supplied academic qualifications", () => {
    const sachin = profile("sachin-garg");
    expect(sachin?.credentials?.filter((row) => row.section === "Competitive / Academic Qualifications").map((row) => row.value)).toEqual(["IIT JAM Qualified", "GATE Qualified", "CSIR-NET/JRF Qualified"]);
  });
});
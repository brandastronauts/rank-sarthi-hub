import { describe, expect, it, vi } from "vitest";
import { INSTITUTE_INTAKE, INSTITUTE_PATHS, INSTITUTE_REDIRECTS, instituteIntakeReady, instituteRedirect } from "@/content/institutes/policy";
import { campaignFor } from "@/content/offers/campaign";
import { instituteEnquirySchema, instituteLeadRow, pickInstituteAttribution } from "./institute-enquiry-schema";
import { getUrl, sitemapUrls } from "@/content/registry";

import { processInstituteEnquiry } from "./institute-enquiry.server";

const quote = { intent: "quote", fullName: "QA Reviewer", instituteName: "Preview Test Institute", email: "qa@example.com", phone: "+91 90000 00000", studentCount: "0", exams: ["JEE Main"], consent: true, sourcePage: "/institutes/pricing" };
describe("Approved institutes rules", () => {
  it.each(["fullName", "instituteName", "email", "phone", "studentCount", "exams"])("requires quote qualification: %s", (field) => {
    const input: Record<string, unknown> = { ...quote }; delete input[field];
    expect(instituteEnquirySchema.safeParse(input).success).toBe(false);
  });
  it("permits optional additional requirements, location and institute type", () => {
    const result = instituteEnquirySchema.parse(quote);
    expect(result.message).toBe(""); expect(result.city).toBe(""); expect(result.instituteType).toBe("");
  });
  it("student count is a nonnegative whole number, not a minimum-seat requirement", () => {
    expect(instituteEnquirySchema.safeParse({ ...quote, studentCount: "0" }).success).toBe(true);
    for (const studentCount of ["-1", "1.5", "", "NaN"]) expect(instituteEnquirySchema.safeParse({ ...quote, studentCount }).success).toBe(false);
  });
  it("only four approved exams are current enrolment interests", () => {
    expect(instituteEnquirySchema.parse({ ...quote, exams: ["JEE Main", "JEE Advanced", "NEET UG", "NDA"] }).exams).toHaveLength(4);
    for (const exam of ["BITSAT", "IISER Aptitude Test", "NEST"]) expect(instituteEnquirySchema.safeParse({ ...quote, exams: [exam] }).success).toBe(false);
  });
  it("demo accepts one primary exam and cannot masquerade as quote", () => {
    expect(instituteEnquirySchema.safeParse({ ...quote, intent: "demo", sourcePage: "/institutes/request-demo" }).success).toBe(true);
    expect(instituteEnquirySchema.safeParse({ ...quote, intent: "demo" }).success).toBe(false);
    expect(instituteEnquirySchema.safeParse({ ...quote, intent: "demo", sourcePage: "/institutes/request-demo", exams: ["JEE Main", "NEET UG"] }).success).toBe(false);
  });
  it("validates phone/email, bounds messages, and requires privacy acknowledgement", () => {
    for (const bad of [{ phone: "abc" }, { email: "invalid" }, { consent: false }, { message: "x".repeat(2001) }]) expect(instituteEnquirySchema.safeParse({ ...quote, ...bad }).success).toBe(false);
  });
  it("suppresses both offers only on the exact four B2B destinations", () => {
    for (const path of INSTITUTE_PATHS) for (const suffix of ["", "/", "?utm_source=qa", "#form"]) expect(campaignFor(path + suffix)).toEqual({});
    for (const path of ["/", "/jee", "/neet", "/about", "/contact", "/institutes/unapproved"]) expect(campaignFor(path).popup).toBeDefined();
  });
  it("maps exactly four permanent migration destinations including slash variants", () => {
    expect(INSTITUTE_REDIRECTS).toEqual({ "/for-institutes": "/institutes", "/for-institutes/pricing": "/institutes/pricing", "/for-institutes/case-studies": "/institutes/case-studies", "/for-institutes/demo": "/institutes/request-demo" });
    for (const [old, target] of Object.entries(INSTITUTE_REDIRECTS)) { expect(instituteRedirect(old + "/")).toBe(target); expect(getUrl(old)?.redirectTo).toBe(target); }
    expect(instituteRedirect("/for-institutes/unknown")).toBeUndefined();
  });
  it("preview pages and redirect aliases stay out of XML sitemap until release", () => {
    const output = new Set(sitemapUrls().map((p) => p.url));
    for (const path of [...INSTITUTE_PATHS, ...Object.keys(INSTITUTE_REDIRECTS)]) expect(output.has(path)).toBe(false);
  });
  it("requires all three operational gates; current submission makes no storage call", async () => {
    expect(instituteIntakeReady(INSTITUTE_INTAKE)).toBe(false);
    for (const missing of ["recipientConfirmed", "receivingProcessVerified", "productionActivationApproved"]) expect(instituteIntakeReady({ recipientConfirmed: true, receivingProcessVerified: true, productionActivationApproved: true, [missing]: false })).toBe(false);
    expect(instituteIntakeReady({ recipientConfirmed: true, receivingProcessVerified: true, productionActivationApproved: true })).toBe(true);
    const storage = vi.fn();
    expect(await processInstituteEnquiry(instituteEnquirySchema.parse(quote), storage)).toEqual({ ok: false, reason: "inactive" });
    expect(storage).not.toHaveBeenCalled();
  });
  it("stores distinct intent/source and structured qualification without public-read code", () => {
    const row = instituteLeadRow(instituteEnquirySchema.parse(quote), "client-hash");
    expect(row.enquiry_type).toBe("Institute / Quote"); expect(row.source_page).toBe("/institutes/pricing");
    expect(JSON.parse(row.message)).toMatchObject({ version: 1, audience: "b2b", intent: "quote", studentCount: 0, instituteName: "Preview Test Institute" });
    const demo = instituteLeadRow(instituteEnquirySchema.parse({ ...quote, intent: "demo", sourcePage: "/institutes/request-demo" }), "client-hash");
    expect(demo.enquiry_type).toBe("Institute / Demo"); expect(demo.source_page).toBe("/institutes/request-demo");
  });
  it("keeps only bounded attribution tokens, excluding unknown fields and email-like values", () => {
    expect(pickInstituteAttribution("?utm_source=partner&utm_campaign=autumn&email=person@example.com&rs_cta=offer&utm_term=person@example.com&fbclid=" + "x".repeat(151))).toEqual({ utm_source: "partner", utm_campaign: "autumn" });
  });
});
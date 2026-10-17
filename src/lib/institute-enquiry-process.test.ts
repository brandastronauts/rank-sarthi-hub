import { beforeEach, describe, expect, it, vi } from "vitest";
import { instituteEnquirySchema } from "./institute-enquiry-schema";
const { state } = vi.hoisted(() => ({ state: { recipientConfirmed: true, receivingProcessVerified: true, productionActivationApproved: true } }));
vi.mock("@/content/institutes/policy", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/content/institutes/policy")>();
  return { ...original, INSTITUTE_INTAKE: state };
});
import { processInstituteEnquiry } from "./institute-enquiry.server";
const input = instituteEnquirySchema.parse({ intent: "quote", fullName: "QA Reviewer", instituteName: "Preview Test Institute", email: "qa@example.com", phone: "+91 90000 00000", studentCount: "100", exams: ["NEET UG"], consent: true, sourcePage: "/institutes/pricing" });
describe("Institute protected intake processor with simulated operational approvals", () => {
  beforeEach(() => { state.recipientConfirmed = true; state.receivingProcessVerified = true; state.productionActivationApproved = true; });
  it("stores a validated quote only after approvals and safe count read", async () => {
    const insert = vi.fn(async () => true);
    expect(await processInstituteEnquiry(input, async () => ({ clientHash: "test-hash", store: { count: async () => ({ count: 0, error: false }), insert } }))).toEqual({ ok: true });
    expect(insert).toHaveBeenCalledOnce();
    expect(insert.mock.calls[0]?.[0]).toMatchObject({ enquiry_type: "Institute / Quote", source_page: "/institutes/pricing", client_hash: "test-hash" });
  });
  it("honeypot never opens storage or returns a fake receipt", async () => {
    const storage = vi.fn();
    expect(await processInstituteEnquiry({ ...input, website: "bot" }, storage)).toEqual({ ok: false, reason: "spam" });
    expect(storage).not.toHaveBeenCalled();
  });
  it.each([{ count: null, error: false }, { count: 0, error: true }])("count failure refuses a write: %j", async (result) => {
    const insert = vi.fn(async () => true);
    expect(await processInstituteEnquiry(input, async () => ({ clientHash: "test", store: { count: async () => result, insert } }))).toEqual({ ok: false, reason: "server" });
    expect(insert).not.toHaveBeenCalled();
  });
  it("reuses the existing five-per-hour enquiry threshold", async () => {
    const insert = vi.fn(async () => true);
    expect(await processInstituteEnquiry(input, async () => ({ clientHash: "test", store: { count: async () => ({ count: 5, error: false }), insert } }))).toEqual({ ok: false, reason: "rate_limited" });
    expect(insert).not.toHaveBeenCalled();
  });
  it("failed insert never returns success", async () => {
    expect(await processInstituteEnquiry(input, async () => ({ clientHash: "test", store: { count: async () => ({ count: 0, error: false }), insert: async () => false } }))).toEqual({ ok: false, reason: "server" });
  });
});
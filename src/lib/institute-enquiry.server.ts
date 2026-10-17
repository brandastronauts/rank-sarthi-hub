import { INSTITUTE_INTAKE, instituteIntakeReady } from "@/content/institutes/policy";
import { instituteLeadRow, type InstituteEnquiry } from "./institute-enquiry-schema";
export type InstituteStorage = {
  count: () => Promise<{ count: number | null; error: boolean }>;
  insert: (row: ReturnType<typeof instituteLeadRow>) => Promise<boolean>;
};
/** Lazy storage makes inactive requests incapable of opening the lead store. */
export async function processInstituteEnquiry(data: InstituteEnquiry, storage: () => Promise<{ clientHash: string; store: InstituteStorage }>) {
  if (!instituteIntakeReady(INSTITUTE_INTAKE)) return { ok: false as const, reason: "inactive" as const };
  if (data.website) return { ok: false as const, reason: "spam" as const };
  const { clientHash, store } = await storage();
  const result = await store.count();
  if (result.error || result.count === null) return { ok: false as const, reason: "server" as const };
  if (result.count >= 5) return { ok: false as const, reason: "rate_limited" as const };
  if (!await store.insert(instituteLeadRow(data, clientHash))) return { ok: false as const, reason: "server" as const };
  return { ok: true as const };
}

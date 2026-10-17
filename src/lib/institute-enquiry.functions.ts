import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";
import { INSTITUTE_INTAKE, instituteIntakeReady } from "@/content/institutes/policy";
import { instituteEnquirySchema } from "./institute-enquiry-schema";

/** Public write-only intake. No read endpoint, email service or CRM is invented. */
export const submitInstituteEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => instituteEnquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Authoritative fail-closed gate, before any storage access or bot success.
    if (!instituteIntakeReady(INSTITUTE_INTAKE)) return { ok: false as const, reason: "inactive" as const };
    const origin = getRequestHeader("origin");
    if (!origin || origin !== new URL(getRequest().url).origin) return { ok: false as const, reason: "server" as const };
    const { processInstituteEnquiry } = await import("./institute-enquiry.server");
    return processInstituteEnquiry(data, async () => {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      // Production proxy must overwrite IP headers. Reuses the existing
      // contact limit, not a distributed atomic abuse-control guarantee.
      const ip = getRequestHeader("cf-connecting-ip") ?? getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
      const ua = getRequestHeader("user-agent") ?? "";
      const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${ip}|${ua}|rank-sarthi-contact`));
      const clientHash = Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
      return { clientHash, store: {
        count: async () => {
          const { count, error } = await supabaseAdmin.from("contact_enquiries").select("id", { count: "exact", head: true }).eq("client_hash", clientHash).gte("created_at", new Date(Date.now() - 60 * 60 * 1000).toISOString());
          return { count, error: !!error };
        },
        insert: async (row) => { const { error } = await supabaseAdmin.from("contact_enquiries").insert(row); return !error; },
      } };
    });
  });
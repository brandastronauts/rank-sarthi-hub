import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { contactSchema } from "./contact-schema";

/**
 * Stores a contact enquiry in Lovable Cloud. Email delivery to
 * info@ranksarthi.com is NOT configured yet, so rows are stored with
 * delivery_status "stored_email_not_configured" and the UI never claims
 * an email was sent.
 */
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: bots fill the hidden field. Pretend success, store nothing.
    if (data.website && data.website.length > 0) return { ok: true as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const ip =
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const ua = getRequestHeader("user-agent") ?? "";
    const digest = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(`${ip}|${ua}|rank-sarthi-contact`),
    );
    const clientHash = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Rate limit: max 5 enquiries per client per hour.
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("contact_enquiries")
      .select("id", { count: "exact", head: true })
      .eq("client_hash", clientHash)
      .gte("created_at", since);
    if ((count ?? 0) >= 5) return { ok: false as const, reason: "rate_limited" as const };

    const { error } = await supabaseAdmin.from("contact_enquiries").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      enquiry_type: data.enquiryType,
      visitor_type: data.visitorType || null,
      message: data.message,
      source_page: "/contact",
      client_hash: clientHash,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      return { ok: false as const, reason: "server" as const };
    }
    return { ok: true as const };
  });

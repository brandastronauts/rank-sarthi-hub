import { z } from "zod";
import { INSTITUTE_PATHS } from "@/content/institutes/policy";

export const INSTITUTE_EXAMS = ["JEE Main", "JEE Advanced", "NEET UG", "NDA"] as const;
export const FUTURE_EXAMS = ["BITSAT", "IISER Aptitude Test", "NEST"] as const;
export const INSTITUTE_TYPES = ["Coaching institute", "School", "Educational group", "Other"] as const;
export const B2B_ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "msclkid"] as const;
const boundedToken = z.string().trim().max(150).regex(/^[A-Za-z0-9._~+\- ]*$/);
const attributionFields = Object.fromEntries(B2B_ATTRIBUTION_KEYS.map((k) => [k, boundedToken.optional()]));
const touch = z.object(attributionFields).strip();
export const instituteAttributionSchema = z.object({ first: touch, last: touch, entryPath: z.enum(INSTITUTE_PATHS) }).strict();
export type InstituteAttribution = z.infer<typeof instituteAttributionSchema>;

export function pickInstituteAttribution(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const picked: Record<string, string> = {};
  for (const key of B2B_ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value && boundedToken.safeParse(value).success && !value.includes("@")) picked[key] = value.trim();
  }
  return picked;
}

export const instituteEnquirySchema = z.object({
  intent: z.enum(["quote", "demo"]),
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  instituteName: z.string().trim().min(2, "Please enter your institute name.").max(150),
  email: z.string().trim().max(255).email("Please enter a valid email address."),
  phone: z.string().trim().max(20).refine((v) => /^\+?[0-9\s\-()]{7,20}$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 7 && (v.match(/\d/g)?.length ?? 0) <= 15, "Please enter a valid phone number."),
  studentCount: z.string().trim().regex(/^\d+$/, "Enter an approximate whole-number student count.").refine((v) => Number.isSafeInteger(Number(v)), "Enter a valid whole-number student count."),
  exams: z.array(z.enum(INSTITUTE_EXAMS)).min(1, "Please choose an examination.").max(4).refine((a) => new Set(a).size === a.length),
  city: z.string().trim().max(100).default(""),
  state: z.string().trim().max(100).default(""),
  instituteType: z.union([z.enum(INSTITUTE_TYPES), z.literal("")]).default(""),
  futureExams: z.array(z.enum(FUTURE_EXAMS)).max(3).default([]),
  message: z.string().trim().max(2000, "Additional requirements must be under 2,000 characters.").default(""),
  consent: z.literal(true, { errorMap: () => ({ message: "Please acknowledge the Privacy Policy." }) }),
  website: z.string().max(200).default(""),
  sourcePage: z.literal("/institutes"),
  attribution: instituteAttributionSchema.optional(),
}).strict().superRefine((data, ctx) => {
  if (data.intent === "demo" && data.exams.length !== 1) ctx.addIssue({ code: "custom", path: ["exams"], message: "Choose one primary examination for your demo enquiry." });
});
export type InstituteEnquiry = z.infer<typeof instituteEnquirySchema>;

/** Structured JSON in the existing protected message column; no schema change. */
export function instituteLeadRow(data: InstituteEnquiry, clientHash: string) {
  return {
    full_name: data.fullName, email: data.email, phone: data.phone,
    enquiry_type: data.intent === "quote" ? "Institute / Quote" : "Institute / Demo",
    visitor_type: "Institute / Organisation", source_page: data.sourcePage, client_hash: clientHash,
    delivery_status: "stored_private_review",
    message: JSON.stringify({ version: 1, audience: "b2b", intent: data.intent, instituteName: data.instituteName, studentCount: Number(data.studentCount), exams: data.exams, city: data.city, state: data.state, instituteType: data.instituteType, futureExams: data.futureExams, additionalRequirements: data.message, consent: data.consent, ...(data.attribution ? { attribution: data.attribution } : {}) }),
  };
}
import { z } from "zod";

export const ENQUIRY_TYPES = [
  "JEE",
  "NEET",
  "NDA",
  "Test Series",
  "Academic Resources",
  "Tools / Calculators",
  "Institute / Partnership",
  "Technical Support",
  "General Enquiry",
] as const;

export const VISITOR_TYPES = ["Student", "Parent", "Educator", "Institute / Organisation", "Other"] as const;

// Digits with optional leading +, spaces, hyphens, brackets; 7–15 digits total.
const phoneOk = (v: string) =>
  /^\+?[0-9\s\-()]{7,20}$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 7 && (v.match(/\d/g)?.length ?? 0) <= 15;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().max(255, "Email is too long.").email("Please enter a valid email address."),
  phone: z.string().trim().refine(phoneOk, "Please enter a valid phone number, e.g. +91 98765 43210."),
  enquiryType: z.enum(ENQUIRY_TYPES, { message: "Please choose what you are enquiring about." }),
  visitorType: z.union([z.enum(VISITOR_TYPES), z.literal("")]).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(2000, "Your message must be under 2000 characters."),
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

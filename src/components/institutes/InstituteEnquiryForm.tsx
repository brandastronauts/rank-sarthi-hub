import { useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { LockKeyhole, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { INSTITUTE_INTAKE, instituteIntakeReady } from "@/content/institutes/config";
import { INSTITUTE_EXAMS, FUTURE_EXAMS, INSTITUTE_TYPES, instituteEnquirySchema, type InstituteAttribution } from "@/lib/institute-enquiry-schema";
import { submitInstituteEnquiry } from "@/lib/institute-enquiry.functions";
import { company } from "@/content/company";

export function InstituteEnquiryForm({ intent, attribution }: { intent: "quote" | "demo"; attribution?: InstituteAttribution }) {
  const submit = useServerFn(submitInstituteEnquiry);
  const ready = instituteIntakeReady(INSTITUTE_INTAKE);
  const [values, setValues] = useState({ fullName: "", instituteName: "", email: "", phone: "", studentCount: "", city: "", state: "", instituteType: "", message: "", website: "", consent: false, exams: [] as string[], futureExams: [] as string[] });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("idle");
  const busy = useRef(false);
  const prefix = `institute-${intent}`;
  const label = intent === "quote" ? "Request a Quote" : "Request a Demo";
  const set = (key: string, value: string | boolean | string[]) => { setValues((s) => ({ ...s, [key]: value })); setErrors((s) => ({ ...s, [key]: "" })); };
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (busy.current || status === "sent") return;
    const result = instituteEnquirySchema.safeParse({ ...values, intent, sourcePage: intent === "quote" ? "/institutes/pricing" : "/institutes/request-demo", ...(attribution ? { attribution } : {}) });
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] ??= issue.message;
      setErrors(next);
      document.getElementById(`${prefix}-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    if (!ready) { setStatus("inactive"); return; }
    busy.current = true; setStatus("sending");
    try { const response = await submit({ data: result.data }); setStatus(response.ok ? "sent" : response.reason); }
    catch { setStatus("server"); }
    finally { busy.current = false; }
  }
  const error = (key: string) => errors[key] ? <p id={`${prefix}-${key}-error`} className="mt-1 text-sm text-destructive">{errors[key]}</p> : null;
  const fields = [
    ["fullName", "Full name", "text", "name", 100],
    ["instituteName", "Institute name", "text", "organization", 150],
    ["email", "Email address", "email", "email", 255],
    ["phone", "Phone number", "tel", "tel", 20],
    ["studentCount", "Approximate number of students", "text", "off", 16],
  ] as const;
  return <form id={`${intent}-form`} onSubmit={onSubmit} noValidate className="mt-7 space-y-6">
    {!ready && <div role="status" className="flex items-start gap-3 border-l-4 border-gold bg-secondary px-4 py-4 text-sm text-secondary-foreground"><LockKeyhole className="mt-0.5 size-5 shrink-0" aria-hidden /><p>Enquiry submission is not active yet. Requests are not sent or stored from this form.</p></div>}
    <div className="grid gap-5 md:grid-cols-2">{fields.map(([key, text, type, autocomplete, max]) => <div key={key}>
      <label className="mb-2 block text-sm font-semibold text-primary" htmlFor={`${prefix}-${key}`}>{text} <span aria-hidden>*</span></label>
      <Input id={`${prefix}-${key}`} required type={type} autoComplete={autocomplete} inputMode={key === "studentCount" ? "numeric" : undefined} value={values[key]} maxLength={max} onChange={(e) => set(key, e.target.value)} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${prefix}-${key}-error` : undefined} className="h-12 text-base md:text-base" />
      {key === "email" && <p className="mt-1 text-sm text-muted-foreground">Use your official work email where available.</p>}
      {key === "studentCount" && <p className="mt-1 text-sm text-muted-foreground">This is not a minimum purchase requirement.</p>}{error(key)}
    </div>)}</div>
    <fieldset><legend className="mb-3 text-sm font-semibold text-primary">{intent === "quote" ? "Examination focus" : "Primary examination interest"} *</legend>
      {intent === "quote" ? <div id={`${prefix}-exams`} tabIndex={-1} className="grid gap-3 sm:grid-cols-2">{INSTITUTE_EXAMS.map((exam) => <label key={exam} className="flex items-center gap-3 text-base"><Checkbox checked={values.exams.includes(exam)} onCheckedChange={(checked) => set("exams", checked ? [...values.exams, exam] : values.exams.filter((e) => e !== exam))} />{exam}</label>)}</div> : <select id={`${prefix}-exams`} required value={values.exams[0] ?? ""} onChange={(e) => set("exams", e.target.value ? [e.target.value] : [])} className="h-12 w-full rounded-md border border-input bg-background px-3 text-base text-foreground focus-visible:ring-2 focus-visible:ring-ring" aria-invalid={!!errors["exams"]}><option value="">Choose an examination</option>{INSTITUTE_EXAMS.map((e) => <option key={e}>{e}</option>)}</select>}{error("exams")}
    </fieldset>
    <details className="border-y border-border py-4"><summary className="cursor-pointer text-base font-semibold text-primary">Location and institute type (optional)</summary><div className="mt-4 grid gap-4 md:grid-cols-2">{(["city", "state"] as const).map((key) => <div key={key}><label htmlFor={`${prefix}-${key}`} className="mb-2 block text-sm font-semibold text-primary">{key === "city" ? "City" : "State or union territory"}</label><Input id={`${prefix}-${key}`} value={values[key]} maxLength={100} autoComplete={key === "city" ? "address-level2" : "address-level1"} onChange={(e) => set(key, e.target.value)} className="h-12 text-base md:text-base" />{error(key)}</div>)}<div><label htmlFor={`${prefix}-instituteType`} className="mb-2 block text-sm font-semibold text-primary">Institute type</label><select id={`${prefix}-instituteType`} value={values.instituteType} onChange={(e) => set("instituteType", e.target.value)} className="h-12 w-full rounded-md border border-input bg-background px-3 text-base"><option value="">Select if relevant</option>{INSTITUTE_TYPES.map((t) => <option key={t}>{t}</option>)}</select></div></div></details>
    {intent === "quote" && <details className="border-b border-border pb-4"><summary className="cursor-pointer text-base font-semibold text-primary">Future examination interest (optional)</summary><div className="mt-4 space-y-3">{FUTURE_EXAMS.map((exam) => <label key={exam} className="flex items-center gap-3 text-base"><Checkbox checked={values.futureExams.includes(exam)} onCheckedChange={(checked) => set("futureExams", checked ? [...values.futureExams, exam] : values.futureExams.filter((e) => e !== exam))} />{exam} — Coming Soon</label>)}</div></details>}
    <div><label htmlFor={`${prefix}-message`} className="mb-2 block text-sm font-semibold text-primary">{intent === "quote" ? "Additional requirements" : "Message"} (optional)</label><Textarea id={`${prefix}-message`} value={values.message} maxLength={2000} onChange={(e) => set("message", e.target.value)} className="min-h-32 text-base md:text-base" />{error("message")}</div>
    <div className="hidden" aria-hidden><label htmlFor={`${prefix}-website`}>Website</label><input id={`${prefix}-website`} tabIndex={-1} autoComplete="off" value={values.website} maxLength={200} onChange={(e) => set("website", e.target.value)} /></div>
    <div><label className="flex items-start gap-3 text-sm leading-relaxed"><Checkbox id={`${prefix}-consent`} checked={values.consent} onCheckedChange={(checked) => set("consent", checked === true)} className="mt-1 shrink-0" /><span>I have read the <Link to="/privacy-policy" className="text-accent underline underline-offset-4">Privacy Policy</Link> and agree that Rank Sarthi may use these details to respond to my institute enquiry.</span></label>{error("consent")}</div>
    <p className="text-sm text-muted-foreground">Do not include student names, individual results, payment details or other sensitive information in this form.</p>
    <Button type="submit" variant="destructive" className="h-12 w-full sm:w-auto" disabled={!ready || status === "sending" || status === "sent"}>{label}<ArrowRight aria-hidden /></Button>
    {status === "sent" && <p role="status" className="text-success">Your enquiry has been stored for review. Meeting arrangements and quotation details must be confirmed separately.</p>}
    {["inactive", "server", "spam", "rate_limited"].includes(status) && <p role="alert" className="text-destructive">{status === "inactive" ? "Enquiry submission is not active. Nothing was sent or stored." : status === "rate_limited" ? "Please wait before making another enquiry." : "Your enquiry could not be submitted. Please try again later."}</p>}
    <p className="text-sm text-muted-foreground">Prefer to speak directly? Call <a className="text-accent underline" href={`tel:${company.phoneE164}`}>{company.phoneDisplay}</a> or email <a className="break-all text-accent underline" href={`mailto:${company.email}`}>{company.email}</a>.</p>
  </form>;
}
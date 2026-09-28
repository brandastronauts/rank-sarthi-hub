import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Navigation, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageFrame } from "@/components/shell/PageFrame";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { absolute, getUrl } from "@/content/registry";
import { company, mapsDirectionsUrl, mapsEmbedUrl } from "@/content/company";
import { contactSchema, ENQUIRY_TYPES, VISITOR_TYPES } from "@/lib/contact-schema";
import { submitEnquiry } from "@/lib/contact.functions";

const URL_PATH = "/contact";
const TITLE = "Contact Rank Sarthi | Rank Sarthi Next Gen Private Limited";
const DESCRIPTION =
  "Contact Rank Sarthi Next Gen Private Limited in New Delhi for questions about JEE, NEET, NDA, test preparation, academic resources, tools and institutional enquiries.";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      url: URL_PATH,
      title: TITLE,
      description: DESCRIPTION,
      ogType: "website",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Rank Sarthi",
          url: absolute(URL_PATH),
          description: DESCRIPTION,
          about: {
            "@type": "Organization",
            name: company.legalName,
            url: absolute("/"),
            email: company.email,
            telephone: company.phoneDisplay,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.streetAddress,
              addressLocality: company.locality,
              postalCode: company.postalCode,
              addressCountry: company.country,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: company.phoneDisplay,
              email: company.email,
            },
          },
        },
        breadcrumbSchema(URL_PATH),
      ].filter(Boolean),
    }),
  component: ContactPage,
});

type Field = "fullName" | "email" | "phone" | "enquiryType" | "message";
type Status = "idle" | "sending" | "sent" | "error" | "rate";

const HELP_LINKS = [
  { to: "/jee", label: "JEE", text: "Syllabus, papers and preparation guides" },
  { to: "/neet", label: "NEET", text: "Biology, Physics and Chemistry resources" },
  { to: "/nda", label: "NDA", text: "Exam, SSB and syllabus guidance" },
  { to: "/jee/mock-tests", label: "Test Series", text: "JEE test series details" },
  { to: "/tools", label: "Free Tools", text: "Score and target calculators" },
  { to: "/for-institutes", label: "For Institutes", text: "Programmes for institutions" },
].filter((l) => getUrl(l.to)?.buildStatus === "built");

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-destructive";

function ContactPage() {
  const submit = useServerFn(submitEnquiry);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    visitorType: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);

  const set = (k: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k as Field]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (inFlight.current || status === "sent") return;
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as Field;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      const first = Object.keys(next)[0];
      if (first) document.getElementById(`c-${first}`)?.focus();
      return;
    }
    inFlight.current = true;
    setStatus("sending");
    try {
      const res = await submit({ data: parsed.data });
      setStatus(res.ok ? "sent" : res.reason === "rate_limited" ? "rate" : "error");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  const err = (k: Field) =>
    errors[k] ? (
      <p id={`c-${k}-err`} className="mt-1.5 text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: Field) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `c-${k}-err` : undefined,
  });

  return (
    <PageFrame url={URL_PATH}>
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Contact Rank Sarthi</h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Have a question about Rank Sarthi, our academic resources, test preparation, tools or institutional
          programmes? Send us a message and our team will get back to you.
        </p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <section aria-labelledby="form-heading" className="rounded-xl border border-border bg-card p-5 shadow-sm md:p-8">
          <h2 id="form-heading" className="text-xl font-bold text-primary">
            Send an enquiry
          </h2>

          {status === "sent" ? (
            <div role="status" className="mt-6 rounded-lg border border-border bg-ivory p-6">
              <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden />
              <p className="mt-3 text-base font-semibold text-foreground">
                Thanks for contacting Rank Sarthi. We've received your enquiry and will get back to you.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/" className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground">
                  Back to Home
                </Link>
                <Link to="/resources" className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm font-semibold text-foreground">
                  Explore Resources
                </Link>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="mt-6 space-y-5" aria-busy={status === "sending"}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-fullName" className="mb-1.5 block text-sm font-medium text-foreground">
                    Full Name <span aria-hidden>*</span>
                  </label>
                  <input id="c-fullName" className={inputCls} autoComplete="name" required maxLength={100}
                    value={values.fullName} onChange={(e) => set("fullName", e.target.value)} {...aria("fullName")} />
                  {err("fullName")}
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email Address <span aria-hidden>*</span>
                  </label>
                  <input id="c-email" type="email" inputMode="email" className={inputCls} autoComplete="email" required
                    value={values.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
                  {err("email")}
                </div>
                <div>
                  <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Mobile Number <span aria-hidden>*</span>
                  </label>
                  <input id="c-phone" type="tel" inputMode="tel" className={inputCls} autoComplete="tel" required
                    placeholder="+91 98765 43210" value={values.phone} onChange={(e) => set("phone", e.target.value)} {...aria("phone")} />
                  {err("phone")}
                </div>
                <div>
                  <label htmlFor="c-visitorType" className="mb-1.5 block text-sm font-medium text-foreground">
                    You are <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <select id="c-visitorType" className={inputCls} value={values.visitorType}
                    onChange={(e) => set("visitorType", e.target.value)}>
                    <option value="">Select</option>
                    {VISITOR_TYPES.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="c-enquiryType" className="mb-1.5 block text-sm font-medium text-foreground">
                  I am enquiring about <span aria-hidden>*</span>
                </label>
                <select id="c-enquiryType" className={inputCls} required value={values.enquiryType}
                  onChange={(e) => set("enquiryType", e.target.value)} {...aria("enquiryType")}>
                  <option value="">Choose a topic</option>
                  {ENQUIRY_TYPES.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                {err("enquiryType")}
              </div>
              <div>
                <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message <span aria-hidden>*</span>
                </label>
                <textarea id="c-message" rows={6} maxLength={2000} className={`${inputCls} resize-y`} required
                  value={values.message} onChange={(e) => set("message", e.target.value)} {...aria("message")} />
                <div className="mt-1 flex justify-between gap-3">
                  <div className="min-w-0">{err("message")}</div>
                  <span className="shrink-0 text-xs text-muted-foreground">{values.message.length}/2000</span>
                </div>
              </div>
              {/* Honeypot — hidden from people and assistive tech */}
              <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="c-website">Website</label>
                <input id="c-website" tabIndex={-1} autoComplete="off" value={values.website}
                  onChange={(e) => set("website", e.target.value)} />
              </div>

              {status === "error" || status === "rate" ? (
                <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-foreground">
                  {status === "rate"
                    ? "You've sent several enquiries recently. Please try again later, or contact us directly at "
                    : "We couldn't submit your enquiry right now. Please try again, or contact us directly at "}
                  <a href={`mailto:${company.email}`} className="font-semibold text-primary underline">{company.email}</a>.
                </p>
              ) : null}

              <button type="submit" disabled={status === "sending"}
                className="btn-press inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-opacity disabled:opacity-70 sm:w-auto">
                {status === "sending" ? "Sending..." : "Send Enquiry"}
              </button>
              <p className="text-sm text-muted-foreground">
                By submitting this form, you agree that Rank Sarthi may contact you regarding your enquiry.
              </p>
            </form>
          )}
        </section>

        <aside aria-labelledby="details-heading" className="space-y-5">
          <div className="rounded-xl border border-border bg-ivory p-5 md:p-7">
            <h2 id="details-heading" className="text-xl font-bold text-primary">{company.legalName}</h2>
            <ul className="mt-5 space-y-4 text-base text-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <address className="not-italic">
                  {company.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <a href={company.phoneHref} className="font-medium hover:underline">{company.phoneDisplay}</a>
              </li>
              <li className="flex min-w-0 gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${company.email}`} className="break-all font-medium hover:underline">{company.email}</a>
              </li>
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <a href={company.phoneHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">
                <Phone className="h-4 w-4" aria-hidden /> Call Us
              </a>
              <a href={`mailto:${company.email}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold text-foreground">
                <Mail className="h-4 w-4" aria-hidden /> Email Us
              </a>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold text-foreground">
                <Navigation className="h-4 w-4" aria-hidden /> Get Directions
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <section aria-labelledby="map-heading" className="mt-12">
        <h2 id="map-heading" className="text-2xl font-bold text-primary">Find Rank Sarthi</h2>
        <p className="mt-2 text-muted-foreground">Visit our New Delhi location or open directions in Google Maps.</p>
        <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted sm:aspect-[16/7]">
          <iframe title="Map showing Harihar Apartments, New Mangalapuri, New Delhi" src={mapsEmbedUrl}
            className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      {HELP_LINKS.length ? (
        <section aria-labelledby="help-heading" className="mt-12">
          <h2 id="help-heading" className="text-2xl font-bold text-primary">Not sure where to start?</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="group flex h-full items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <span>
                    <span className="block font-semibold text-foreground">{l.label}</span>
                    <span className="block text-sm text-muted-foreground">{l.text}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </PageFrame>
  );
}

import { Fragment, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { PageFrame } from "@/components/shell/PageFrame";
import { Button } from "@/components/ui/button";
import { institutePage, type InstitutePath, INSTITUTE_PATHS } from "@/content/institutes/config";
import { instituteAttributionSchema, pickInstituteAttribution, type InstituteAttribution } from "@/lib/institute-enquiry-schema";
import { InstituteEnquiryForm } from "./InstituteEnquiryForm";
import { company } from "@/content/company";

const navigation = ["Overview", "Institute Plans", "Institute Use Cases", "Request a Demo"];
const currentExams: Record<string, string> = { "JEE Main": "/jee/jee-main", "JEE Advanced": "/jee/jee-advanced", "NEET UG": "/neet/neet-exam", "NDA": "/nda" };

function Inline({ text }: { text: string }) {
  const clean = text.replace(/\+91 92205 52551/g, company.phoneDisplay).replace(/info@ranksarthi.com/g, company.email);
  return <>{clean.split(/(\*\*.*?\*\*)/g).filter(Boolean).map((part, i) => part.startsWith("**") ? <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>)}</>;
}

export function InstitutePage({ url }: { url: InstitutePath }) {
  const page = institutePage(url);
  const [attribution, setAttribution] = useState<InstituteAttribution>();
  const [search, setSearch] = useState<Record<string, string>>({});
  useEffect(() => {
    const last = pickInstituteAttribution(window.location.search);
    setSearch(last);
    try {
      const key = "rs-b2b-attribution-v1";
      const existing = sessionStorage.getItem(key);
      const parsed = existing ? instituteAttributionSchema.safeParse(JSON.parse(existing)) : undefined;
      const next = { first: parsed?.success ? parsed.data.first : last, last: Object.keys(last).length ? last : parsed?.success ? parsed.data.last : {}, entryPath: parsed?.success ? parsed.data.entryPath : url };
      sessionStorage.setItem(key, JSON.stringify(next)); setAttribution(next);
    } catch { setAttribution({ first: last, last, entryPath: url }); }
  }, [url]);
  const action = (label: string, key: string) => {
    const quote = label === "Request a Quote";
    const plans = label.includes("Plans");
    const target = quote ? "/institutes/pricing" : plans ? "/institutes/pricing" : "/institutes/request-demo";
    const hash = target === url ? quote ? "quote-form" : "demo-form" : undefined;
    return <Button key={key} asChild variant={plans ? "outline" : "destructive"} className="h-12 w-full whitespace-normal px-6 sm:w-auto"><Link to={target} {...(hash ? { hash } : {})} search={search}>{label}<ArrowRight aria-hidden /></Link></Button>;
  };
  const heroEnd = page.blocks.findIndex((block) => block.type === "heading");
  const hero = page.blocks.slice(0, heroEnd);
  const rest = page.blocks.slice(heroEnd);
  const sections: Array<{ title: string; blocks: typeof rest }> = [];
  for (const block of rest) {
    if (block.type === "heading" && block.level !== 3) sections.push({ title: block.text, blocks: [] });
    else sections[sections.length - 1]?.blocks.push(block);
  }
  const renderBlocks = (blocks: typeof rest, faq = false) => {
    if (faq) {
      const entries: Array<{ question: string; answer: string[] }> = [];
      for (const block of blocks) {
        if (block.type === "paragraph" && /^\*\*.+\?\*\*$/.test(block.text)) entries.push({ question: block.text.replace(/\*\*/g, "").replace(/^\d+\. /, ""), answer: [] });
        else if (block.type === "paragraph") entries[entries.length - 1]?.answer.push(block.text);
      }
      return <div className="divide-y divide-border border-y border-border">{entries.map((entry) => <details key={entry.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-base font-semibold text-primary"><span>{entry.question}</span><ChevronDown className="mt-1 size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden /></summary><div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">{entry.answer.map((answer) => <p key={answer}><Inline text={answer} /></p>)}</div></details>)}</div>;
    }
    return <div className="space-y-5">{blocks.map((block, i) => {
      if (block.type === "omit") return null;
      if (block.type === "heading") return <h3 key={i} className="pt-3 text-xl font-bold text-primary">{block.text}</h3>;
      if (block.type === "cta") return action(block.text, String(i));
      if (block.type === "links") return <div key={i} className="flex flex-wrap gap-3">{action("Explore Institute Plans", `${i}-plans`)}{block.text.includes("Related links") && <Button asChild variant="outline" className="h-12 w-full sm:w-auto"><Link to="/institutes/case-studies" search={search}>View Institute Use Cases<ArrowRight aria-hidden /></Link></Button>}</div>;
      if (block.type === "form") return <InstituteEnquiryForm key={i} intent={block.text === "quote" ? "quote" : "demo"} {...(attribution ? { attribution } : {})} />;
      if (block.type === "bullet") {
        const match = Object.keys(currentExams).find((e) => block.text.startsWith(`**${e}**`));
        const destination = match ? currentExams[match] : undefined;
        return <div key={i} className="flex items-start gap-3 text-base leading-relaxed text-foreground"><Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden />{destination ? <Link to={destination} className="font-semibold text-accent underline underline-offset-4">{block.text.replace(/\*\*/g, "")}</Link> : <span><Inline text={block.text} /></span>}</div>;
      }
      if (/^\*\*[^*]+\*\*$/.test(block.text) && !block.text.includes("illustrative")) return <h3 key={i} className="pt-3 text-lg font-bold text-primary">{block.text.replace(/\*\*/g, "")}</h3>;
      return <p key={i} className="text-base leading-relaxed text-muted-foreground"><Inline text={block.text} /></p>;
    })}</div>;
  };
  return <PageFrame frame="F1" url={url}>
    <header className="border-b border-border bg-secondary pt-28 md:pt-32"><div className="container-page pb-10 md:pb-14">
      <p className="mb-4 text-sm font-semibold text-accent">{page.eyebrow}</p>
      <h1 className="max-w-4xl font-display text-3xl font-extrabold leading-tight text-primary md:text-5xl">{page.heading}</h1>
      <div className="mt-6 max-w-3xl">{renderBlocks(hero)}</div>
    </div></header>
    <nav aria-label="Institute pages" className="border-b border-border bg-background"><div className="container-page flex flex-wrap gap-x-7 gap-y-3 py-5">{INSTITUTE_PATHS.map((path, i) => <Button key={path} asChild variant="link" className={`h-auto px-0 py-1 ${path === url ? "text-accent underline" : "text-primary"}`}><Link to={path} search={search} aria-current={path === url ? "page" : undefined}>{navigation[i]}</Link></Button>)}</div></nav>
    <div>{sections.map((section, i) => <section key={`${i}-${section.title}`} className={`border-b border-border py-10 md:py-14 ${i % 3 === 2 ? "bg-secondary" : "bg-background"}`}><div className="container-page grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16"><h2 className="max-w-lg font-display text-2xl font-bold leading-snug text-primary md:text-3xl">{section.title}</h2><div className="min-w-0">{renderBlocks(section.blocks, /FAQs|Questions from Schools/.test(section.title))}</div></div></section>)}</div>
  </PageFrame>;
}
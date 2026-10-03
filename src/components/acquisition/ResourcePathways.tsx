import { ArrowRight, BookOpen, Calculator, FileText, Library } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";

const resources = [
  { title: "Previous year papers", body: "Find verified JEE, NEET and NDA question papers.", href: "/jee/previous-year-papers", icon: FileText },
  { title: "Syllabus", body: "Browse exam, subject and chapter-level syllabus resources.", href: "/jee/syllabus", icon: BookOpen },
  { title: "Free tools", body: "Use deterministic score, rank and study calculators.", href: "/tools", icon: Calculator },
  { title: "Resource library", body: "Explore exam guidance and preparation resources.", href: "/resources", icon: Library },
] as const;

export function ResourcePathways({ id = "resources" }: { id?: string }) {
  return (
    <section id={id} className="bg-background py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Free resources</p>
          <h2 className="mt-4 text-display-lg text-primary">Keep preparing while you diagnose.</h2>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((item, index) => (
            <Reveal key={item.href} delay={index * 70}>
              <CtaLink
                d={destinations.page(item.title, item.href)}
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <item.icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent">
                  Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </CtaLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
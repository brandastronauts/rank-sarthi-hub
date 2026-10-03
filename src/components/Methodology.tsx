import { Reveal } from "@/components/Reveal";
import { BookOpenCheck, ChartNoAxesCombined, FileQuestion, ListChecks } from "lucide-react";

const principles = [
  {
    icon: ChartNoAxesCombined,
    title: "Diagnostic analysis",
    body: "Understand concept gaps, execution mistakes and attempt patterns behind a score.",
  },
  {
    icon: ListChecks,
    title: "Clear priorities",
    body: "See what deserves attention next instead of revising every weak area equally.",
  },
  {
    icon: FileQuestion,
    title: "Previous year papers",
    body: "Use verified paper resources and exam-specific practice from the existing Rank Sarthi library.",
  },
  {
    icon: BookOpenCheck,
    title: "Syllabus and resources",
    body: "Find structured JEE, NEET and NDA syllabus, subject, chapter and preparation resources.",
  },
];

export function Methodology({ id }: { id?: string }) {
  return (
    <section
      id={id ?? "method"}
      className="relative overflow-hidden bg-navy-gradient-soft py-14 text-primary-foreground sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60"
      />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">Useful from the first visit</p>
          <h2 className="mt-4 text-display-lg">One place to diagnose, practise and prepare.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Start with the diagnostic or use the free academic resources while you prepare.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((pr, i) => (
            <Reveal key={pr.title} delay={i * 90}>
              <div className="h-full rounded-lg border border-white/15 bg-white/5 p-5">
                <pr.icon className="size-5 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{pr.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{pr.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

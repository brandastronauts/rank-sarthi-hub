import { RichText } from "@/components/content/RichText";
import type { MistakeRecord, PreparationIntelligenceTag } from "@/content/types";

/** Preparation Intelligence v1.1 labels — display only; classification comes from content. */
const TAGS: Record<PreparationIntelligenceTag, { label: string; className: string }> = {
  "knowledge-gap": { label: "Knowledge gap", className: "bg-nda/15 text-nda" },
  "recall-gap": { label: "Recall gap", className: "bg-accent/15 text-accent" },
  "execution-error": { label: "Execution error", className: "bg-danger/10 text-danger" },
  "decision-error": { label: "Decision / selection error", className: "bg-primary/10 text-primary" },
  "needs-review": { label: "Needs review", className: "bg-muted text-muted-foreground" },
};

/**
 * B30 — Common mistakes, mapped to the Preparation Intelligence taxonomy.
 */
export function CommonMistakes({
  id = "mistakes",
  mistakes = [],
  heading = "Common mistakes and what they actually indicate",
}: {
  id?: string;
  mistakes?: MistakeRecord[];
  heading?: string;
}) {
  if (!mistakes.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <ul className="mt-5 space-y-4">
        {mistakes.map((m) => {
          const tag = TAGS[m.errorType] ?? TAGS["needs-review"];
          return (
            <li key={m.id} className="rounded-2xl border border-border bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="text-base font-bold text-primary">{m.mistake}</p>
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tag.className}`}>
                  {tag.label}
                </span>
              </div>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Why it happens
                  </p>
                  <div className="mt-1.5 text-sm">
                    <RichText nodes={m.why} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    How it is corrected
                  </p>
                  <div className="mt-1.5 text-sm">
                    <RichText nodes={m.fix} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

import { useState } from "react";
import type { PartTestSyllabusData } from "@/content/types";

/**
 * B52 — Part-test syllabus tabs.
 *
 * The data structure already carries every part-test record and its subject
 * slots. While no track has approved topics, the block shows ONE neutral
 * status line instead of a wall of empty accordions. When the academic team
 * supplies topics, the same record set renders as per-test detail with no
 * change to the page architecture.
 */
export function PartTestSyllabus({
  id,
  heading,
  intro,
  data,
  note,
}: {
  id?: string;
  heading?: string;
  intro?: string;
  data?: PartTestSyllabusData;
  note?: string;
}) {
  const tracks = data?.tracks ?? [];
  const [active, setActive] = useState(0);

  if (!tracks.length) return null;

  const track = tracks[Math.min(active, tracks.length - 1)]!;
  const hasTopics = track.tests.some((test) => test.subjects.some((s) => s.topics.length > 0));

  return (
    <section id={id} className="scroll-mt-28">
      {heading ? <h2 className="text-display-md text-primary">{heading}</h2> : null}
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}

      <div
        role="tablist"
        aria-label="Part-test tracks"
        className="mt-5 flex flex-wrap gap-2 rounded-xl border border-border bg-ivory p-2"
      >
        {tracks.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              i === active
                ? "bg-primary text-primary-foreground"
                : "bg-white text-primary hover:bg-white/70"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-white p-5">
        {hasTopics ? (
          <ul className="space-y-3">
            {track.tests.map((test) => (
              <li key={test.id} className="rounded-lg border border-border p-4">
                <p className="text-sm font-bold text-primary">{test.name}</p>
                <dl className="mt-2 space-y-2">
                  {test.subjects.map((s) => (
                    <div key={s.subject}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {s.subject}
                      </dt>
                      <dd className="mt-0.5 text-sm text-ink/85">
                        {s.topics.length ? s.topics.join(", ") : "Awaiting academic review"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Under academic review
            </p>
            <p className="mt-2 text-sm text-ink/85">{data?.statusMessage}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              {track.tests.length} part tests are planned for {track.label.toLowerCase()}, each
              covering{" "}
              {(track.tests[0]?.subjects ?? []).map((s) => s.subject).join(", ") ||
                "the announced subjects"}
              .
            </p>
          </>
        )}
      </div>

      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}

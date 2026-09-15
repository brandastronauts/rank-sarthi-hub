import { useState } from "react";
import type { PartTestSyllabusData, PartTestSubjectAllocation } from "@/content/types";

/**
 * B52 — Part-test syllabus tabs.
 *
 * A track with supplied allocations renders Part Test 1–10 as expandable
 * records with one section per subject. A track with no supplied allocation
 * shows ONE neutral status line instead of ten empty cards, and its record set
 * stays intact so the syllabus can be inserted later without layout changes.
 *
 * EXCLUDING statements always render in a distinct exclusion note so they can
 * never be mistaken for positive syllabus scope.
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
  const [openTest, setOpenTest] = useState<string | null>(null);

  if (!tracks.length) return null;

  const track = tracks[Math.min(active, tracks.length - 1)]!;
  const hasSyllabus = track.tests.some((test) => test.subjects.some((s) => s.groups.length > 0));

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
            onClick={() => {
              setActive(i);
              setOpenTest(null);
            }}
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

      {hasSyllabus ? (
        <div className="mt-4">
          {track.sourceLabel ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {track.sourceLabel}
            </p>
          ) : null}
          {track.reviewNote ? (
            <p className="mt-2 rounded-lg border border-border bg-ivory px-4 py-3 text-xs text-ink/80">
              {track.reviewNote}
            </p>
          ) : null}

          <ul className="mt-4 space-y-3">
            {track.tests.map((test) => {
              const open = openTest === test.id;
              return (
                <li key={test.id} className="overflow-hidden rounded-xl border border-border bg-white">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenTest(open ? null : test.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-ivory"
                  >
                    <span className="text-sm font-bold text-primary md:text-base">{test.name}</span>
                    <span className="shrink-0 text-xs font-semibold text-accent">
                      {open ? "Hide syllabus" : "View syllabus"}
                    </span>
                  </button>

                  {open ? (
                    <div className="space-y-6 border-t border-border px-5 py-5">
                      {test.subjects.map((subject) => (
                        <SubjectAllocation key={subject.subject} subject={subject} />
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Awaiting academic confirmation
          </p>
          <p className="mt-2 text-sm text-ink/85">{track.statusMessage ?? data?.statusMessage}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {track.tests.length} part tests are planned for {track.label.toLowerCase()}, each
            covering{" "}
            {(track.tests[0]?.subjects ?? []).map((s) => s.subject).join(", ") ||
              "the announced subjects"}
            .
          </p>
        </div>
      )}

      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}

function SubjectAllocation({ subject }: { subject: PartTestSubjectAllocation }) {
  return (
    <div>
      <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-accent">
        {subject.subject}
      </h3>

      {subject.groups.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">
          Allocation awaiting academic confirmation.
        </p>
      ) : (
        <div className="mt-3 space-y-5">
          {subject.groups.map((group, i) => (
            <div key={`${subject.subject}-${i}`}>
              {group.heading ? (
                <p className="text-sm font-bold text-primary">{group.heading}</p>
              ) : null}

              <ul className="mt-2 space-y-1.5">
                {group.topics.map((topic, t) => (
                  <li key={t} className="flex gap-2 text-sm leading-relaxed text-ink/85">
                    <span aria-hidden="true" className="mt-[3px] text-accent">
                      •
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              {group.excluding?.length ? (
                <div className="mt-3 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent">
                    Excluding
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {group.excluding.map((item, e) => (
                      <li key={e} className="text-sm leading-relaxed text-ink/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {group.note ? (
                <p className="mt-3 rounded-lg border border-border bg-ivory px-4 py-3 text-xs text-ink/80">
                  Academic-team note: {group.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

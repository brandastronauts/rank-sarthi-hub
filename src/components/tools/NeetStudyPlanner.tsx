import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { getUrl } from "@/content/registry";

/**
 * T16 rule-based NEET study plan builder.
 * Deterministic: the plan is selected from approved frameworks by the
 * student's own answers. There is no model, no inference and no automated
 * weakness detection anywhere in this component.
 */

type Horizon = "12m" | "6m" | "90d" | "30d" | "7d";
type Coverage = "early" | "partial" | "mostly" | "first-pass";
type Stage = "learning" | "consolidation" | "active-revision" | "final-revision";

const HORIZONS: { id: Horizon; label: string }[] = [
  { id: "12m", label: "12 months" },
  { id: "6m", label: "6 months" },
  { id: "90d", label: "90 days" },
  { id: "30d", label: "30 days" },
  { id: "7d", label: "Final 7 days" },
];

const COVERAGE: { id: Coverage; label: string }[] = [
  { id: "early", label: "Early coverage" },
  { id: "partial", label: "Partial coverage" },
  { id: "mostly", label: "Mostly covered" },
  { id: "first-pass", label: "Full first pass complete" },
];

const STAGES: { id: Stage; label: string }[] = [
  { id: "learning", label: "First learning pass" },
  { id: "consolidation", label: "Consolidation" },
  { id: "active-revision", label: "Active revision" },
  { id: "final-revision", label: "Final revision" },
];

const QUEUE_STATES = [
  { id: "NOT_COVERED", label: "Not covered", note: "Never studied in this cycle. Enters the LEARN slot first." },
  {
    id: "LEARNED_NOT_STABLE",
    label: "Learned, not stable",
    note: "Understood once but not reliable. Needs a recall pass before more practice.",
  },
  {
    id: "PRACTICE_NEEDED",
    label: "Practice needed",
    note: "Theory is stable; accuracy and speed are not. Enters the PRACTISE slot.",
  },
  {
    id: "REVISION_READY",
    label: "Revision ready",
    note: "Stable. Enters a spaced REVIEW slot instead of a fresh learning slot.",
  },
];

const WEEKLY_LOOP = [
  { id: "LEARN", label: "Learn", note: "New chapters from the NOT_COVERED queue, read against NCERT and the official syllabus." },
  { id: "PRACTISE", label: "Practise", note: "Question sets on what you learned this week and last week." },
  { id: "RECALL", label: "Recall", note: "Closed-book retrieval of definitions, sequences and formulas." },
  { id: "REVIEW_ERRORS", label: "Review errors", note: "Classify each mistake yourself using the five categories below." },
  { id: "CHECKPOINT", label: "Checkpoint", note: "Move each chapter to its new queue state before planning the next week." },
];

const PI_CATEGORIES = [
  { id: "knowledge-gap", label: "Knowledge Gap", note: "The concept was never learned properly." },
  { id: "recall-gap", label: "Recall Gap", note: "You knew it but could not retrieve it in time." },
  { id: "execution-error", label: "Execution Error", note: "Correct approach, wrong calculation or misread data." },
  { id: "decision-error", label: "Decision / Selection Error", note: "Wrong choice of method, or a question you should have skipped." },
  { id: "needs-review", label: "Needs Review", note: "You are not yet sure which of the above it was." },
];

const FRAMEWORKS: Record<Horizon, { title: string; rhythm: string; blocks: { heading: string; points: string[] }[] }> = {
  "12m": {
    title: "12-month framework",
    rhythm: "Four weekly LEARN slots, two PRACTISE slots, one RECALL slot, one CHECKPOINT.",
    blocks: [
      {
        heading: "Months 1–6 — first pass",
        points: [
          "Cover Class 11 Biology, Physics and Chemistry chapter by chapter against the official syllabus.",
          "Every chapter finishes with a closed-book recall pass before it leaves the LEARN queue.",
          "Keep a written error log from week one; classify each mistake yourself.",
        ],
      },
      {
        heading: "Months 7–10 — Class 12 pass with spaced return",
        points: [
          "Add Class 12 chapters while returning to Class 11 chapters in REVISION_READY state.",
          "Shift Biology towards line-by-line NCERT reading; keep Physics on problem practice.",
          "Move chapters between queue states at the weekly checkpoint, never mid-week.",
        ],
      },
      {
        heading: "Months 11–12 — consolidation",
        points: [
          "Full-syllabus retrieval cycles instead of new learning.",
          "Previous-year paper practice under timed conditions.",
          "Rebuild only the chapters your own error log keeps flagging.",
        ],
      },
    ],
  },
  "6m": {
    title: "6-month framework",
    rhythm: "Three LEARN slots, three PRACTISE slots, one RECALL slot, one CHECKPOINT each week.",
    blocks: [
      {
        heading: "Months 1–3 — close the gaps",
        points: [
          "Prioritise NOT_COVERED chapters; do not restart chapters already in REVISION_READY.",
          "Biology first each day while retention is highest, Physics in a dedicated problem block.",
          "One weekly mixed set drawn from everything covered so far.",
        ],
      },
      {
        heading: "Months 4–5 — practice-led",
        points: [
          "Two-thirds of study time on question practice and error review.",
          "Return to NCERT lines for every Biology error rather than to notes.",
          "Timed subject-wise sets before any full-length attempt.",
        ],
      },
      {
        heading: "Month 6 — revision only",
        points: [
          "No new chapters unless a chapter is still NOT_COVERED and officially in scope.",
          "Daily recall of formulas, reactions and biological sequences.",
          "Weekly full-syllabus retrieval checkpoint.",
        ],
      },
    ],
  },
  "90d": {
    title: "90-day framework",
    rhythm: "Three 30-day cycles: cover, practise, retrieve.",
    blocks: [
      {
        heading: "Days 1–30 — coverage triage",
        points: [
          "List every chapter by queue state, then work strictly down the NOT_COVERED list.",
          "Cap new learning at two chapters a day so recall keeps up.",
          "Close each day with a 20-minute recall of that day's chapters.",
        ],
      },
      {
        heading: "Days 31–60 — practice and error review",
        points: [
          "Subject-wise timed sets, then a written error classification for each mistake.",
          "Repeat the specific NCERT pages behind repeated Biology errors.",
          "Rebuild formula recall in Physics and reaction conditions in Chemistry.",
        ],
      },
      {
        heading: "Days 61–90 — retrieval",
        points: [
          "Previous-year papers under exam timing, one at a time, each fully reviewed.",
          "Second and third passes over your own error log, not over fresh material.",
          "Weekly checkpoint to keep the revision list shrinking.",
        ],
      },
    ],
  },
  "30d": {
    title: "30-day framework",
    rhythm: "Weekly cycle of revise, practise, review errors, checkpoint.",
    blocks: [
      {
        heading: "Weeks 1–2",
        points: [
          "Revise chapters already in LEARNED_NOT_STABLE — they convert fastest.",
          "Do not open a chapter that is NOT_COVERED unless nothing else remains.",
          "Daily Biology NCERT reading block plus one Physics problem block.",
        ],
      },
      {
        heading: "Weeks 3–4",
        points: [
          "Timed practice every day, followed by full error classification.",
          "Formula, reaction and diagram recall sheets rewritten from memory.",
          "Stop adding material in the last five days of the month.",
        ],
      },
    ],
  },
  "7d": {
    title: "Final 7-day framework",
    rhythm: "Retrieval, not coverage.",
    blocks: [
      {
        heading: "Days 1–5",
        points: [
          "Only REVISION_READY and PRACTICE_NEEDED chapters. No new chapters.",
          "One NCERT Biology reading block and one recall sheet per day.",
          "Short timed sets to hold exam rhythm; review every error the same day.",
        ],
      },
      {
        heading: "Days 6–7",
        points: [
          "Read your own error log instead of new questions.",
          "Confirm exam-day logistics against the official exam dates page.",
          "Protect sleep; a lost night costs more marks than one more chapter.",
        ],
      },
    ],
  },
};

const COVERAGE_ADVICE: Record<Coverage, string> = {
  early: "Coverage is the constraint. Keep LEARN slots protected and accept slower practice volume for now.",
  partial: "Split the week between finishing NOT_COVERED chapters and stabilising the ones already learned.",
  mostly: "Shift the balance to practice and recall; use learning slots only for the remaining gaps.",
  "first-pass": "No fresh coverage is needed. Run retrieval and error review cycles instead.",
};

const STAGE_ADVICE: Record<Stage, string> = {
  learning: "Every chapter closes with a closed-book recall before it counts as learned.",
  consolidation: "Alternate practice and recall on the same chapter within 48 hours.",
  "active-revision": "Work from your error log, not from the syllabus order.",
  "final-revision": "Only retrieval, previous-year papers and your own error log.",
};

const WEAK_AREAS = [
  "Physics — Mechanics",
  "Physics — Thermal and Waves",
  "Physics — Electricity and Magnetism",
  "Physics — Optics and Modern Physics",
  "Chemistry — Physical",
  "Chemistry — Inorganic",
  "Chemistry — Organic",
  "Biology — Botany",
  "Biology — Human Physiology",
  "Biology — Genetics and Evolution",
  "Biology — Ecology",
];

const RESOURCES: { url: string; label: string }[] = [
  { url: "/neet/syllabus", label: "Official syllabus" },
  { url: "/neet/ncert-mapping", label: "NCERT mapping" },
  { url: "/neet/biology", label: "Biology chapters" },
  { url: "/neet/physics", label: "Physics chapters" },
  { url: "/neet/chemistry", label: "Chemistry chapters" },
  { url: "/neet/previous-year-papers", label: "Previous-year papers" },
  { url: "/neet/answer-key", label: "Answer keys" },
  { url: "/neet/score-calculator", label: "Score calculator" },
  { url: "/neet/exam-dates", label: "Exam dates" },
];

export function NeetStudyPlanner() {
  const [horizon, setHorizon] = useState<Horizon>("90d");
  const [coverage, setCoverage] = useState<Coverage>("partial");
  const [stage, setStage] = useState<Stage>("consolidation");
  const [weak, setWeak] = useState<string[]>([]);

  const framework = FRAMEWORKS[horizon];
  const liveResources = RESOURCES.filter((r) => getUrl(r.url)?.buildStatus === "built");

  const toggle = (area: string) =>
    setWeak((s) => (s.includes(area) ? s.filter((a) => a !== area) : [...s, area]));

  return (
    <div className="mt-5 space-y-6">
      <div className="grid gap-5 rounded-xl border border-border bg-white p-5 md:grid-cols-2">
        <Choice legend="Time horizon" options={HORIZONS} value={horizon} onChange={setHorizon} name="horizon" />
        <Choice legend="Syllabus completion" options={COVERAGE} value={coverage} onChange={setCoverage} name="coverage" />
        <Choice legend="Revision stage" options={STAGES} value={stage} onChange={setStage} name="stage" />
        <fieldset>
          <legend className="text-sm font-bold text-primary">Weak concepts (you choose)</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {WEAK_AREAS.map((area) => {
              const on = weak.includes(area);
              return (
                <button
                  key={area}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(area)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    on ? "border-accent bg-accent/10 text-accent" : "border-border bg-ivory text-ink/80"
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            You select these yourself. Nothing here is automated detection or a generated profile.
          </p>
        </fieldset>
      </div>

      <div className="rounded-xl border border-border bg-ivory p-5">
        <p className="text-sm font-semibold text-muted-foreground">Your plan framework</p>
        <h3 className="mt-1 text-display-md text-primary">{framework.title}</h3>
        <p className="mt-2 text-sm text-ink/85">{framework.rhythm}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/85">
          <li>{COVERAGE_ADVICE[coverage]}</li>
          <li>{STAGE_ADVICE[stage]}</li>
          <li>
            {weak.length
              ? `Priority areas you marked: ${weak.join(", ")}. Give these the first practice slot of each week.`
              : "No weak areas marked yet. Mark them above to bias the practice slots."}
          </li>
        </ul>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {framework.blocks.map((b) => (
            <div key={b.heading} className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm font-bold text-primary">{b.heading}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/85">
                {b.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Panel heading="Chapter queue states">
          {QUEUE_STATES.map((q) => (
            <Row key={q.id} label={q.label} note={q.note} tag={q.id} />
          ))}
        </Panel>
        <Panel heading="Weekly loop">
          {WEEKLY_LOOP.map((w) => (
            <Row key={w.id} label={w.label} note={w.note} tag={w.id} />
          ))}
        </Panel>
      </div>

      <Panel heading="Manual error log — Preparation Intelligence v1.1">
        {PI_CATEGORIES.map((c) => (
          <Row key={c.id} label={c.label} note={c.note} />
        ))}
        <p className="pt-2 text-xs text-muted-foreground">
          You classify your own mistakes. This is a manual student log, not an automated diagnosis.
        </p>
      </Panel>

      {liveResources.length ? (
        <div className="rounded-xl border border-border bg-white p-5">
          <p className="text-sm font-bold text-primary">Resources this plan uses</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {liveResources.map((r) => (
              <li key={r.url}>
                <Link
                  to={r.url}
                  rel="nofollow"
                  className="inline-block rounded-full border border-border bg-ivory px-3 py-1 text-xs font-semibold text-ink/85 hover:border-accent/50"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Mock tests and the weakness finder are planned future integrations and are not part of
            this plan yet.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function Choice<T extends string>({
  legend,
  options,
  value,
  onChange,
  name,
}: {
  legend: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  name: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-bold text-primary">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o.id}
            className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-semibold ${
              value === o.id ? "border-accent bg-accent/10 text-accent" : "border-border bg-ivory text-ink/80"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.id}
              checked={value === o.id}
              onChange={() => onChange(o.id)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Panel({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <p className="text-sm font-bold text-primary">{heading}</p>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

function Row({ label, note, tag }: { label: string; note: string; tag?: string }) {
  return (
    <div className="border-b border-border pb-3 last:border-0 last:pb-0">
      <p className="text-sm font-semibold text-ink">
        {label}
        {tag ? (
          <span className="ml-2 rounded bg-ivory px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tag}
          </span>
        ) : null}
      </p>
      <p className="mt-1 text-sm text-ink/80">{note}</p>
    </div>
  );
}

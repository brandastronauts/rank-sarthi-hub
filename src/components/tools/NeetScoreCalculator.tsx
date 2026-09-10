import { useState } from "react";
import {
  NEET_MAX_MARKS,
  NEET_TOTAL_QUESTIONS,
  calculateScore,
  validateScoreInput,
  type ScoreInput,
  type ScoreResult,
} from "@/lib/neet-score";

/**
 * NEET marks calculator (T13 interactive tool).
 * Marks arithmetic only: no rank, percentile, college or cutoff prediction,
 * and no email or login gate before the first result.
 */

const FIELDS: { key: keyof ScoreInput; label: string; help: string }[] = [
  { key: "correct", label: "Correct answers", help: "+4 marks each" },
  { key: "incorrect", label: "Incorrect answers", help: "−1 mark each" },
  { key: "unanswered", label: "Unanswered questions", help: "0 marks" },
  {
    key: "bonus",
    label: "Official all-candidate bonus questions",
    help: "Dropped or no-correct-option questions in the official final key: +4 to every candidate",
  },
];

const EMPTY = { correct: "", incorrect: "", unanswered: "", bonus: "0" } as Record<
  keyof ScoreInput,
  string
>;

export function NeetScoreCalculator() {
  const [raw, setRaw] = useState<Record<keyof ScoreInput, string>>(EMPTY);
  const [errors, setErrors] = useState<string[]>([]);
  const [result, setResult] = useState<(ScoreResult & ScoreInput) | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = validateScoreInput(raw);
    if (!parsed.ok) {
      setErrors(parsed.errors);
      setResult(null);
      return;
    }
    setErrors([]);
    setResult({ ...parsed.value, ...calculateScore(parsed.value) });
  };

  const reset = () => {
    setRaw(EMPTY);
    setErrors([]);
    setResult(null);
  };

  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-2">
      <form onSubmit={submit} noValidate className="rounded-xl border border-border bg-white p-5">
        <fieldset className="space-y-4">
          <legend className="text-sm font-bold text-primary">
            Enter your answer classification ({NEET_TOTAL_QUESTIONS} questions in total)
          </legend>
          {FIELDS.map((f) => (
            <div key={f.key}>
              <label htmlFor={`neet-score-${f.key}`} className="block text-sm font-semibold text-ink">
                {f.label}
              </label>
              <p className="text-xs text-muted-foreground">{f.help}</p>
              <input
                id={`neet-score-${f.key}`}
                name={f.key}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={raw[f.key]}
                onChange={(e) => setRaw((s) => ({ ...s, [f.key]: e.target.value }))}
                className="mt-2 w-full rounded-lg border border-border bg-ivory px-3 py-2 text-sm text-ink outline-none focus:border-accent"
                placeholder="0"
              />
            </div>
          ))}
        </fieldset>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Calculate score
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-ink"
          >
            Reset
          </button>
        </div>

        {errors.length ? (
          <div
            role="alert"
            className="mt-4 rounded-lg border border-accent/40 bg-accent/5 p-4 text-sm text-ink"
          >
            <p className="font-semibold text-accent">Check your entries</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {errors.map((msg) => (
                <li key={msg}>{msg}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </form>

      <div aria-live="polite" className="rounded-xl border border-border bg-ivory p-5">
        {result ? (
          <>
            <p className="text-sm font-semibold text-muted-foreground">
              Your calculated NEET score
            </p>
            <p className="mt-1 text-display-md text-primary">
              {result.score} / {NEET_MAX_MARKS}
            </p>

            <dl className="mt-5 space-y-2 text-sm">
              {[
                ["Correct", `${result.correct}`],
                ["Incorrect", `${result.incorrect}`],
                ["Unanswered", `${result.unanswered}`],
                ["Official all-candidate bonus", `${result.bonus}`],
                ["Positive marks", `+${result.positiveMarks}`],
                ["Negative marks", `${result.negativeMarks}`],
                ["Bonus marks", `+${result.bonusMarks}`],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                  <dt className="text-ink/80">{k}</dt>
                  <dd className="font-semibold text-primary">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-sm text-ink/85">
              Final calculation: ({result.correct} × 4) − {result.incorrect} + ({result.bonus} × 4) ={" "}
              <strong className="text-primary">{result.score}</strong>
            </p>

            <p className="mt-4 rounded-lg border border-border bg-white p-3 text-xs text-ink/80">
              This is a marks calculation, not a rank, percentile or admission prediction.
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-primary">How this is calculated</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/85">
              <li>{NEET_TOTAL_QUESTIONS} questions, maximum {NEET_MAX_MARKS} marks.</li>
              <li>Correct +4, incorrect −1, unanswered 0.</li>
              <li>
                A question dropped or accepted with no correct option in the official final key adds
                +4 for every candidate who appeared.
              </li>
              <li>Your four counts must add up to exactly {NEET_TOTAL_QUESTIONS}.</li>
            </ul>
            <p className="mt-4 rounded-lg border border-border bg-white p-3 text-xs text-ink/80">
              This is a marks calculation, not a rank, percentile or admission prediction.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

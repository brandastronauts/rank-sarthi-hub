import { useMemo, useState } from "react";
import {
  advancedScore,
  display2,
  validateAdvancedSection,
  type AdvancedSectionConfig,
  type AdvancedSectionCounts,
} from "@/lib/tools/engine";
import {
  FormulaCard,
  GhostButton,
  NumberField,
  PrimaryButton,
  ScenarioTable,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
} from "./workbench";

/**
 * JEE Advanced score calculator.
 *
 * JEE Advanced marking is defined by the instructions printed for each paper
 * and question type, so there is no permanent universal preset here. The
 * student enters their own section rules; the tool only does the arithmetic.
 */

interface SectionState {
  config: AdvancedSectionConfig;
  raw: Record<keyof AdvancedSectionCounts, string>;
}

let idCounter = 0;
function newSection(paper: 1 | 2, name: string): SectionState {
  idCounter += 1;
  return {
    config: {
      id: `section-${idCounter}`,
      name,
      paper,
      questions: 6,
      fullCorrectMarks: 4,
      wrongPenalty: 2,
      unattemptedMarks: 0,
      partialEnabled: false,
      partialAMarks: 0,
      partialBMarks: 0,
      partialCMarks: 0,
    },
    raw: { fullCorrect: "", partialA: "0", partialB: "0", partialC: "0", wrong: "", unattempted: "" },
  };
}

const COUNT_FIELDS: { key: keyof AdvancedSectionCounts; label: string }[] = [
  { key: "fullCorrect", label: "Full correct count" },
  { key: "partialA", label: "Partial A count" },
  { key: "partialB", label: "Partial B count" },
  { key: "partialC", label: "Partial C count" },
  { key: "wrong", label: "Wrong count" },
  { key: "unattempted", label: "Unattempted count" },
];

function parseCounts(raw: Record<keyof AdvancedSectionCounts, string>): AdvancedSectionCounts | null {
  const out = {} as AdvancedSectionCounts;
  for (const field of COUNT_FIELDS) {
    const text = (raw[field.key] ?? "").trim();
    const value = text === "" ? 0 : Number(text);
    if (!/^\d*$/.test(text) || !Number.isFinite(value)) return null;
    out[field.key] = value;
  }
  return out;
}

export function JeeAdvancedScoreCalculator() {
  const [sections, setSections] = useState<SectionState[]>([
    newSection(1, "Paper 1 — Section 1"),
    newSection(2, "Paper 2 — Section 1"),
  ]);

  const update = (id: string, patch: Partial<AdvancedSectionConfig>) =>
    setSections((list) => list.map((s) => (s.config.id === id ? { ...s, config: { ...s.config, ...patch } } : s)));

  const updateRaw = (id: string, key: keyof AdvancedSectionCounts, value: string) =>
    setSections((list) => list.map((s) => (s.config.id === id ? { ...s, raw: { ...s.raw, [key]: value } } : s)));

  const evaluated = useMemo(
    () =>
      sections.map((section) => {
        const counts = parseCounts(section.raw);
        if (!counts) {
          return { section, counts: null, error: `${section.config.name}: response counts must be whole numbers.` };
        }
        const check = validateAdvancedSection(section.config, counts);
        return { section, counts, error: check.ok ? undefined : check.error };
      }),
    [sections],
  );

  const errors = evaluated.map((e) => e.error).filter((e): e is string => !!e);
  const result =
    errors.length === 0
      ? advancedScore(evaluated.map((e) => ({ config: e.section.config, counts: e.counts! })))
      : null;

  return (
    <>
      <p className="mt-5 rounded-xl border border-accent/40 bg-accent/5 p-4 text-sm text-ink">
        <span className="font-semibold text-accent">Read before you calculate: </span>
        JEE Advanced marking rules can vary by paper and question type. Enter the exact marking scheme printed in the
        instructions for the paper you are calculating.
      </p>

      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your paper sections, their marking rules and your responses"
            description="Add one block per section of your paper. Every section's response counts must add up to that section's question count."
            {...(errors.length ? { formError: errors[0] } : {})}
            actions={
              <>
                <PrimaryButton
                  type="button"
                  onClick={() => setSections((list) => [...list, newSection(1, `Paper 1 — Section ${list.length + 1}`)])}
                >
                  Add Paper 1 section
                </PrimaryButton>
                <PrimaryButton
                  type="button"
                  onClick={() => setSections((list) => [...list, newSection(2, `Paper 2 — Section ${list.length + 1}`)])}
                >
                  Add Paper 2 section
                </PrimaryButton>
                <GhostButton
                  type="button"
                  onClick={() => setSections([newSection(1, "Paper 1 — Section 1"), newSection(2, "Paper 2 — Section 1")])}
                >
                  Reset
                </GhostButton>
              </>
            }
          >
            {evaluated.map(({ section, error }) => {
              const { config, raw } = section;
              return (
                <div key={config.id} className="rounded-lg border border-border bg-ivory p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex-1">
                      <label htmlFor={`${config.id}-name`} className="block text-sm font-semibold text-ink">
                        Section name
                      </label>
                      <input
                        id={`${config.id}-name`}
                        type="text"
                        value={config.name}
                        onChange={(e) => update(config.id, { name: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
                      />
                    </div>
                    {sections.length > 1 ? (
                      <GhostButton
                        type="button"
                        onClick={() => setSections((list) => list.filter((s) => s.config.id !== config.id))}
                      >
                        Remove
                      </GhostButton>
                    ) : null}
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-semibold text-ink">Paper</p>
                    <div className="mt-1 flex gap-2">
                      {([1, 2] as const).map((paper) => (
                        <button
                          key={paper}
                          type="button"
                          aria-pressed={config.paper === paper}
                          onClick={() => update(config.id, { paper })}
                          className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                            config.paper === paper
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-white text-ink"
                          }`}
                        >
                          Paper {paper}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <NumberField
                      id={`${config.id}-questions`}
                      label="Number of questions"
                      value={String(config.questions)}
                      onChange={(v) => update(config.id, { questions: Number(v) || 0 })}
                    />
                    <NumberField
                      id={`${config.id}-full`}
                      label="Full correct marks"
                      value={String(config.fullCorrectMarks)}
                      onChange={(v) => update(config.id, { fullCorrectMarks: Number(v) || 0 })}
                      decimal
                    />
                    <NumberField
                      id={`${config.id}-wrong-penalty`}
                      label="Wrong answer penalty (positive value)"
                      value={String(config.wrongPenalty)}
                      onChange={(v) => update(config.id, { wrongPenalty: Number(v) || 0 })}
                      decimal
                    />
                    <NumberField
                      id={`${config.id}-unattempted-marks`}
                      label="Unattempted marks"
                      value={String(config.unattemptedMarks)}
                      onChange={(v) => update(config.id, { unattemptedMarks: Number(v) || 0 })}
                      decimal
                    />
                  </div>

                  <label className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink">
                    <input
                      type="checkbox"
                      checked={config.partialEnabled}
                      onChange={(e) => update(config.id, { partialEnabled: e.target.checked })}
                      className="h-4 w-4 rounded border-border"
                    />
                    This section has partial credit (off by default)
                  </label>

                  {config.partialEnabled ? (
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      <NumberField
                        id={`${config.id}-partial-a`}
                        label="Partial A marks"
                        value={String(config.partialAMarks)}
                        onChange={(v) => update(config.id, { partialAMarks: Number(v) || 0 })}
                        decimal
                      />
                      <NumberField
                        id={`${config.id}-partial-b`}
                        label="Partial B marks"
                        value={String(config.partialBMarks)}
                        onChange={(v) => update(config.id, { partialBMarks: Number(v) || 0 })}
                        decimal
                      />
                      <NumberField
                        id={`${config.id}-partial-c`}
                        label="Partial C marks"
                        value={String(config.partialCMarks)}
                        onChange={(v) => update(config.id, { partialCMarks: Number(v) || 0 })}
                        decimal
                      />
                    </div>
                  ) : null}

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {COUNT_FIELDS.filter((f) => config.partialEnabled || !f.key.startsWith("partial")).map((field) => (
                      <NumberField
                        key={field.key}
                        id={`${config.id}-${field.key}`}
                        label={field.label}
                        value={raw[field.key]}
                        onChange={(v) => updateRaw(config.id, field.key, v)}
                        max={config.questions}
                      />
                    ))}
                  </div>

                  {error ? (
                    <p role="alert" className="mt-2 text-xs font-semibold text-accent">
                      {error}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </ToolInputPanel>
        }
        result={
          <ToolResultPanel
            status="Your calculated JEE Advanced score"
            {...(result ? { headline: display2(result.combined) } : {})}
            {...(result ? { headlineSuffix: "combined marks" } : {})}
            {...(result
              ? {
                  stats: [
                    { label: "Paper 1", value: display2(result.paper1) },
                    { label: "Paper 2", value: display2(result.paper2) },
                    { label: "Positive marks (full correct)", value: `+${display2(result.positiveMarks)}` },
                    { label: "Partial-credit marks", value: `+${display2(result.partialMarks)}` },
                    { label: "Negative marks", value: `−${display2(result.negativeMarks)}` },
                    { label: "Sections configured", value: `${result.sections.length}` },
                  ],
                }
              : {})}
            {...(result
              ? {
                  shareText: `JEE Advanced calculated score: ${display2(result.combined)} (Paper 1 ${display2(
                    result.paper1,
                  )}, Paper 2 ${display2(result.paper2)}) using my own paper's marking scheme — Rank Sarthi JEE Advanced Score Calculator.`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Enter each section's question count and marking rules from your paper instructions.</li>
                <li>Partial credit stays off until you switch it on and enter the marks yourself.</li>
                <li>Every section's response counts must equal that section's question count.</li>
              </ul>
            }
            note="No rank, All India Rank, IIT allotment or cut-off probability is produced here — only the marks arithmetic from the rules you entered."
          />
        }
      />

      {result ? (
        <ScenarioTable
          caption="Section breakdown"
          columns={["Section", "Paper", "Positive", "Partial", "Negative", "Section score"]}
          rows={result.sections.map((section) => [
            section.name,
            `Paper ${section.paper}`,
            `+${display2(section.positiveMarks)}`,
            `+${display2(section.partialMarks)}`,
            `−${display2(section.negativeMarks)}`,
            display2(section.score),
          ])}
        />
      ) : null}

      <FormulaCard
        title="Formula used per section"
        lines={[
          "sectionScore = (fullCorrectCount × fullCorrectMarks)",
          "  + (partialACount × partialAMarks) + (partialBCount × partialBMarks) + (partialCCount × partialCMarks)",
          "  − (wrongCount × wrongPenalty) + (unattemptedCount × unattemptedMarks)",
          "validation: sum of all response states = section question count",
          "paperScore = sum of that paper's section scores; combined = Paper 1 + Paper 2",
        ]}
        note="Marks values are never assumed. Rank Sarthi does not publish a permanent JEE Advanced marking preset because the official instructions define it per paper and question type."
      />
    </>
  );
}

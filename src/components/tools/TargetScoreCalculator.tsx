import { useMemo, useState } from "react";
import {
  MARKING_PRESETS,
  display2,
  fieldError,
  presetById,
  targetScoreResult,
  validateTargetScore,
  type TargetScoreInput,
} from "@/lib/tools/engine";
import {
  FormulaCard,
  GhostButton,
  NumberField,
  PresetSelector,
  ScenarioTable,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
  useQueryPrefill,
} from "./workbench";

/** Target score calculator: feasible correct/wrong combinations for a target. */

type Raw = Record<keyof TargetScoreInput, string>;

function rawForPreset(id: string, target: string): Raw {
  const preset = presetById(id);
  return {
    target,
    totalQuestions: String(preset.totalQuestions),
    marksPerCorrect: String(preset.marksPerCorrect),
    penaltyPerWrong: String(preset.penaltyPerWrong),
  };
}

export function TargetScoreCalculator() {
  const [presetId, setPresetId] = useState("jee-main");
  const [raw, setRaw] = useState<Raw>(rawForPreset("jee-main", "200"));

  useQueryPrefill((params) => {
    setRaw((s) => ({ ...s, target: params.get("target") ?? s.target }));
  });

  const preset = presetById(presetId);
  const parsed = useMemo(() => validateTargetScore(raw), [raw]);
  const result = parsed.ok ? targetScoreResult(parsed.value) : null;

  return (
    <>
      <div className="mt-5">
        <PresetSelector
          name="target-preset"
          label="Exam preset"
          value={presetId}
          onChange={(id) => {
            setPresetId(id);
            setRaw((s) => rawForPreset(id, s.target));
          }}
          options={MARKING_PRESETS.map((p) => ({ id: p.id, label: p.label }))}
        />
        <p className="mt-2 text-xs text-muted-foreground">{preset.note}</p>
      </div>

      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your target and the marking scheme"
            description="The target cannot exceed the theoretical maximum for the question count and marks per correct answer."
            actions={
              <GhostButton type="button" onClick={() => setRaw(rawForPreset(presetId, ""))}>
                Reset
              </GhostButton>
            }
          >
            <NumberField
              id="ts-target"
              label="Target score (T)"
              value={raw.target}
              onChange={(v) => setRaw((s) => ({ ...s, target: v }))}
              error={fieldError(parsed.errors, "target")}
              decimal
              step={5}
            />
            <NumberField
              id="ts-questions"
              label="Total questions (Q)"
              value={raw.totalQuestions}
              onChange={(v) => setRaw((s) => ({ ...s, totalQuestions: v }))}
              error={fieldError(parsed.errors, "totalQuestions")}
            />
            <NumberField
              id="ts-per-correct"
              label="Marks per correct answer (P)"
              value={raw.marksPerCorrect}
              onChange={(v) => setRaw((s) => ({ ...s, marksPerCorrect: v }))}
              error={fieldError(parsed.errors, "marksPerCorrect")}
              decimal
              step={0.5}
            />
            <NumberField
              id="ts-penalty"
              label="Penalty per wrong answer (N)"
              help={`Preset value: ${preset.penaltyLabel}`}
              value={raw.penaltyPerWrong}
              onChange={(v) => setRaw((s) => ({ ...s, penaltyPerWrong: v }))}
              error={fieldError(parsed.errors, "penaltyPerWrong")}
              decimal
              step={0.25}
            />
          </ToolInputPanel>
        }
        result={
          <ToolResultPanel
            status="Minimum correct answers with zero wrong answers"
            {...(result ? { headline: `${result.minimumCorrectIfNoWrong}` } : {})}
            {...(result ? { headlineSuffix: "correct" } : {})}
            {...(result && parsed.ok
              ? {
                  equation: `ceil(${parsed.value.target} ÷ ${parsed.value.marksPerCorrect}) = ${result.minimumCorrectIfNoWrong}`,
                }
              : {})}
            {...(result && parsed.ok
              ? {
                  stats: [
                    { label: "Maximum wrong answers still feasible", value: `${result.maxWrongAllowed}` },
                    { label: "Theoretical maximum score", value: display2(result.maximumPossibleScore) },
                    { label: "Target", value: display2(parsed.value.target) },
                    { label: "Questions available", value: `${parsed.value.totalQuestions}` },
                  ],
                }
              : {})}
            {...(result && parsed.ok
              ? {
                  shareText: `To score ${parsed.value.target}, I need at least ${result.minimumCorrectIfNoWrong} correct with no wrong answers, and up to ${result.maxWrongAllowed} wrong answers can still work (Rank Sarthi Target Score Calculator).`,
                  shareQuery: `target=${parsed.value.target}`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Enter a target and the calculator lists correct/wrong combinations that reach it.</li>
                <li>Each combination must fit inside the total question count.</li>
                <li>A target above the theoretical maximum is rejected, not rounded down.</li>
              </ul>
            }
            note="These are arithmetic combinations only. Reaching a marks target is not a rank, percentile or admission outcome."
          />
        }
      />

      {result && !result.feasible ? (
        <p role="alert" className="mt-4 rounded-lg border border-accent/40 bg-accent/5 p-3 text-sm text-ink">
          No correct/wrong combination reaches this target within the question count you entered.
        </p>
      ) : null}

      {result?.combinations.length ? (
        <ScenarioTable
          caption="Combinations that reach your target"
          columns={["Correct", "Wrong", "Unattempted", "Score"]}
          rows={result.combinations.map((c) => [c.correct, c.wrong, c.unattempted, display2(c.score)])}
          note="Each row is the minimum number of correct answers needed for that number of wrong answers."
        />
      ) : null}

      <FormulaCard
        title="Formula used"
        lines={[
          "minimumCorrectIfNoWrong = ceil(T ÷ P)",
          "for a chosen wrong count W: minimumCorrect = ceil((T + (N × W)) ÷ P)",
          "a combination is feasible only when minimumCorrect + W ≤ Q",
          "maxWrongAllowed = the largest W with a feasible combination",
        ]}
      />
    </>
  );
}

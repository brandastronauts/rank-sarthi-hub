import { useMemo, useState } from "react";
import {
  MARKING_PRESETS,
  correctAnswersNeeded,
  display2,
  fieldError,
  presetById,
  validateCorrectNeeded,
  type CorrectNeededInput,
} from "@/lib/tools/engine";
import {
  FormulaCard,
  GhostButton,
  NumberField,
  PresetSelector,
  RatioBar,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
  useQueryPrefill,
} from "./workbench";

/** How many of a planned number of attempts must be correct to hit a target. */

type Raw = Record<keyof CorrectNeededInput, string>;

function rawForPreset(id: string, target: string, attempts: string): Raw {
  const preset = presetById(id);
  return {
    target,
    attempts,
    marksPerCorrect: String(preset.marksPerCorrect),
    penaltyPerWrong: String(preset.penaltyPerWrong),
  };
}

export function CorrectAnswersNeededCalculator() {
  const [presetId, setPresetId] = useState("jee-main");
  const [raw, setRaw] = useState<Raw>(rawForPreset("jee-main", "200", "60"));

  useQueryPrefill((params) => {
    setRaw((s) => ({
      ...s,
      target: params.get("target") ?? s.target,
      attempts: params.get("attempts") ?? s.attempts,
    }));
  });

  const preset = presetById(presetId);
  const parsed = useMemo(() => validateCorrectNeeded(raw), [raw]);
  const result = parsed.ok ? correctAnswersNeeded(parsed.value) : null;

  return (
    <>
      <div className="mt-5">
        <PresetSelector
          name="can-preset"
          label="Exam preset"
          value={presetId}
          onChange={(id) => {
            setPresetId(id);
            setRaw((s) => rawForPreset(id, s.target, s.attempts));
          }}
          options={MARKING_PRESETS.map((p) => ({ id: p.id, label: p.label }))}
        />
        <p className="mt-2 text-xs text-muted-foreground">{preset.note}</p>
      </div>

      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your target and how many questions you plan to attempt"
            description="Every attempted question counts as either correct or wrong, so wrong = attempts − correct."
            actions={
              <GhostButton type="button" onClick={() => setRaw(rawForPreset(presetId, "", ""))}>
                Reset
              </GhostButton>
            }
          >
            <NumberField
              id="can-target"
              label="Target score (T)"
              value={raw.target}
              onChange={(v) => setRaw((s) => ({ ...s, target: v }))}
              error={fieldError(parsed.errors, "target")}
              decimal
              step={5}
            />
            <NumberField
              id="can-attempts"
              label="Planned attempts (A)"
              value={raw.attempts}
              onChange={(v) => setRaw((s) => ({ ...s, attempts: v }))}
              error={fieldError(parsed.errors, "attempts")}
            />
            <NumberField
              id="can-per-correct"
              label="Marks per correct answer (P)"
              value={raw.marksPerCorrect}
              onChange={(v) => setRaw((s) => ({ ...s, marksPerCorrect: v }))}
              error={fieldError(parsed.errors, "marksPerCorrect")}
              decimal
              step={0.5}
            />
            <NumberField
              id="can-penalty"
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
            status="Minimum correct answers within your planned attempts"
            {...(result ? { headline: `${result.minimumCorrect}` } : {})}
            {...(result ? { headlineSuffix: `of ${result.attempts} attempts` } : {})}
            {...(result && parsed.ok
              ? {
                  equation: `ceil((${parsed.value.target} + (${display2(parsed.value.penaltyPerWrong)} × ${parsed.value.attempts})) ÷ (${parsed.value.marksPerCorrect} + ${display2(
                    parsed.value.penaltyPerWrong,
                  )})) = ${result.minimumCorrect}`,
                }
              : {})}
            {...(result && result.reachable
              ? {
                  stats: [
                    { label: "Maximum wrong within those attempts", value: `${result.maximumWrong}` },
                    { label: "Required accuracy", value: `${result.requiredAccuracy.toFixed(2)}%` },
                    { label: "Resulting score", value: display2(result.resultingScore) },
                    { label: "Attempts", value: `${result.attempts}` },
                  ],
                }
              : {})}
            {...(result && result.reachable && parsed.ok
              ? {
                  shareText: `To score ${parsed.value.target} from ${parsed.value.attempts} attempts I need at least ${result.minimumCorrect} correct (at most ${result.maximumWrong} wrong) — Rank Sarthi Correct Answers Needed Calculator.`,
                  shareQuery: `target=${parsed.value.target}&attempts=${parsed.value.attempts}`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Use this when you already know how many questions you plan to attempt.</li>
                <li>Wrong answers are whatever is left over from your attempts.</li>
                <li>If the target is out of reach for those attempts, the calculator says so.</li>
              </ul>
            }
            note="This is arithmetic on your own plan. It is not a rank, percentile or admission prediction."
          >
            {result && !result.reachable ? (
              <p role="alert" className="mt-4 rounded-lg border border-accent/40 bg-accent/5 p-3 text-sm text-ink">
                This target cannot be reached with the number of attempts you selected. Increase attempted questions or
                change your target.
              </p>
            ) : null}
            {result?.reachable ? <RatioBar label="Required accuracy" value={result.requiredAccuracy} /> : null}
          </ToolResultPanel>
        }
      />

      <FormulaCard
        title="Formula used"
        lines={[
          "wrong = A − correct",
          "score = (P × C) − (N × (A − C)) = (P + N)C − NA",
          "minimumCorrect = ceil((T + (N × A)) ÷ (P + N))",
          "if minimumCorrect > A the target is not reachable with those attempts",
        ]}
      />
    </>
  );
}

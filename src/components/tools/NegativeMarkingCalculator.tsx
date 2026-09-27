import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  MARKING_PRESETS,
  display2,
  fieldError,
  negativeMarkingScore,
  presetById,
  validateNegativeMarking,
  type NegativeMarkingInput,
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

/** Generic negative-marking calculator with official exam presets. */

type Raw = Record<keyof NegativeMarkingInput, string>;

function rawForPreset(id: string): Raw {
  const preset = presetById(id);
  return {
    totalQuestions: String(preset.totalQuestions),
    correct: "",
    incorrect: "",
    unattempted: "",
    marksPerCorrect: String(preset.marksPerCorrect),
    penaltyPerWrong: String(preset.penaltyPerWrong),
  };
}

export function NegativeMarkingCalculator() {
  const [presetId, setPresetId] = useState("jee-main");
  const [raw, setRaw] = useState<Raw>(rawForPreset("jee-main"));

  useQueryPrefill((params) => {
    setRaw((s) => ({
      ...s,
      correct: params.get("correct") ?? s.correct,
      incorrect: params.get("wrong") ?? s.incorrect,
      unattempted: params.get("unattempted") ?? s.unattempted,
    }));
  });

  const preset = presetById(presetId);
  const parsed = useMemo(() => validateNegativeMarking(raw), [raw]);
  const result = parsed.ok ? negativeMarkingScore(parsed.value) : null;

  const choosePreset = (id: string) => {
    setPresetId(id);
    setRaw((s) => ({ ...rawForPreset(id), correct: s.correct, incorrect: s.incorrect, unattempted: s.unattempted }));
  };

  const custom = presetId === "custom";

  return (
    <>
      <div className="mt-5">
        <PresetSelector
          name="negative-marking-preset"
          label="Exam preset"
          value={presetId}
          onChange={choosePreset}
          options={MARKING_PRESETS.map((p) => ({ id: p.id, label: p.label }))}
        />
        <p className="mt-2 text-xs text-muted-foreground">{preset.note}</p>
        <p className="mt-2 text-xs text-ink/80">
          JEE Advanced is deliberately not a preset because its marking varies by paper and question type.{" "}
          <Link
            to="/$platform/$subject"
            params={{ platform: "tools", subject: "jee-advanced-score-calculator" }}
            className="font-semibold text-primary underline"
          >
            Use the JEE Advanced Score Calculator
          </Link>{" "}
          instead.
        </p>
      </div>

      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your responses and the marking scheme"
            description="Correct, incorrect and unattempted must add up to the total question count."
            formError={fieldError(parsed.errors, "form")}
            actions={
              <GhostButton type="button" onClick={() => setRaw(rawForPreset(presetId))}>
                Reset
              </GhostButton>
            }
          >
            <NumberField
              id="nm-total"
              label="Total questions"
              value={raw.totalQuestions}
              onChange={(v) => setRaw((s) => ({ ...s, totalQuestions: v }))}
              error={fieldError(parsed.errors, "totalQuestions")}
            />
            <NumberField
              id="nm-correct"
              label="Correct answers"
              value={raw.correct}
              onChange={(v) => setRaw((s) => ({ ...s, correct: v }))}
              error={fieldError(parsed.errors, "correct")}
            />
            <NumberField
              id="nm-incorrect"
              label="Incorrect answers"
              value={raw.incorrect}
              onChange={(v) => setRaw((s) => ({ ...s, incorrect: v }))}
              error={fieldError(parsed.errors, "incorrect")}
            />
            <NumberField
              id="nm-unattempted"
              label="Unattempted questions"
              value={raw.unattempted}
              onChange={(v) => setRaw((s) => ({ ...s, unattempted: v }))}
              error={fieldError(parsed.errors, "unattempted")}
            />
            <NumberField
              id="nm-per-correct"
              label="Marks per correct answer (P)"
              help={custom ? "Enter the value printed in your paper instructions." : `Preset value: ${preset.marksPerCorrect}`}
              value={raw.marksPerCorrect}
              onChange={(v) => setRaw((s) => ({ ...s, marksPerCorrect: v }))}
              error={fieldError(parsed.errors, "marksPerCorrect")}
              decimal
              step={0.5}
            />
            <NumberField
              id="nm-penalty"
              label="Penalty per wrong answer (N)"
              help={custom ? "Enter 0 if the exam has no negative marking." : `Preset value: ${preset.penaltyLabel}`}
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
            status="Your calculated score after negative marking"
            {...(result ? { headline: display2(result.score) } : {})}
            {...(result ? { headlineSuffix: `/ ${display2(result.maxMarks)}` } : {})}
            {...(result && parsed.ok
              ? {
                  equation: `(${parsed.value.correct} × ${parsed.value.marksPerCorrect}) − (${parsed.value.incorrect} × ${display2(
                    parsed.value.penaltyPerWrong,
                  )}) = ${display2(result.score)}`,
                }
              : {})}
            {...(result && parsed.ok
              ? {
                  stats: [
                    { label: "Positive marks", value: `+${display2(result.positiveMarks)}` },
                    { label: "Marks lost to negative marking", value: `−${display2(result.negativeMarks)}` },
                    { label: "Correct answers", value: `${parsed.value.correct}` },
                    { label: "Wrong answers", value: `${parsed.value.incorrect}` },
                    { label: "Accuracy", value: `${result.accuracy.toFixed(2)}%`, hint: "Correct ÷ attempted" },
                    { label: "Attempt rate", value: `${result.attemptRate.toFixed(2)}%` },
                  ],
                }
              : {})}
            {...(result && parsed.ok
              ? {
                  shareText: `Score after negative marking: ${display2(result.score)} from ${parsed.value.correct} correct and ${parsed.value.incorrect} wrong (Rank Sarthi Negative Marking Calculator).`,
                  shareQuery: `correct=${parsed.value.correct}&wrong=${parsed.value.incorrect}&unattempted=${parsed.value.unattempted}`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Pick a preset or enter your own marks-per-correct and penalty values.</li>
                <li>Correct, incorrect and unattempted must add up to the total question count.</li>
                <li>The calculator reports invalid combinations instead of adjusting them.</li>
              </ul>
            }
            note="This is a marks calculation only — no rank, percentile or cut-off is produced."
          >
            {result ? (
              <RatioBar
                label="Share of positive marks kept after penalties"
                value={result.positiveMarks > 0 ? (result.score / result.positiveMarks) * 100 : 0}
              />
            ) : null}
          </ToolResultPanel>
        }
      />

      <FormulaCard
        title="Formula used"
        lines={[
          "positiveMarks = correct × P",
          "negativeMarks = incorrect × N",
          "score = positiveMarks − negativeMarks",
          "correct + incorrect + unattempted = totalQuestions",
        ]}
        note="NDA penalties are held at full precision (2.5 ÷ 3 and 4 ÷ 3) inside the calculation and only rounded for display."
      />
    </>
  );
}

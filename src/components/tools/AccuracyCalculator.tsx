import { useMemo, useState } from "react";
import { accuracyResult, fieldError, validateAccuracy, type AccuracyInput } from "@/lib/tools/engine";
import {
  FormulaCard,
  GhostButton,
  NumberField,
  RatioBar,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
  useQueryPrefill,
} from "./workbench";

/** Mock-test accuracy calculator: ratios only, no performance diagnosis. */

type Raw = Record<keyof AccuracyInput, string>;
const EMPTY: Raw = { total: "75", attempted: "", correct: "" };

export function AccuracyCalculator() {
  const [raw, setRaw] = useState<Raw>(EMPTY);

  useQueryPrefill((params) => {
    setRaw((s) => ({
      total: params.get("total") ?? s.total,
      attempted: params.get("attempted") ?? s.attempted,
      correct: params.get("correct") ?? s.correct,
    }));
  });

  const parsed = useMemo(() => validateAccuracy(raw), [raw]);
  const result = parsed.ok ? accuracyResult(parsed.value) : null;

  return (
    <>
      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your test attempt"
            description="Whole numbers only. Correct answers cannot exceed attempted questions, and attempted cannot exceed the total."
            actions={
              <GhostButton type="button" onClick={() => setRaw(EMPTY)}>
                Reset
              </GhostButton>
            }
          >
            <NumberField
              id="acc-total"
              label="Total questions in the test"
              value={raw.total}
              onChange={(v) => setRaw((s) => ({ ...s, total: v }))}
              error={fieldError(parsed.errors, "total")}
            />
            <NumberField
              id="acc-attempted"
              label="Questions you attempted"
              value={raw.attempted}
              onChange={(v) => setRaw((s) => ({ ...s, attempted: v }))}
              error={fieldError(parsed.errors, "attempted")}
            />
            <NumberField
              id="acc-correct"
              label="Correct answers"
              value={raw.correct}
              onChange={(v) => setRaw((s) => ({ ...s, correct: v }))}
              error={fieldError(parsed.errors, "correct")}
            />
          </ToolInputPanel>
        }
        result={
          <ToolResultPanel
            status="Your accuracy on attempted questions"
            {...(result ? { headline: `${result.accuracy.toFixed(2)}%` } : {})}
            {...(result && parsed.ok
              ? { equation: `(${parsed.value.correct} ÷ ${parsed.value.attempted}) × 100 = ${result.accuracy.toFixed(2)}%` }
              : {})}
            {...(result && parsed.ok
              ? {
                  stats: [
                    { label: "Attempt rate", value: `${result.attemptRate.toFixed(2)}%`, hint: "Attempted ÷ total" },
                    { label: "Error rate", value: `${result.errorRate.toFixed(2)}%`, hint: "Wrong ÷ attempted" },
                    {
                      label: "Overall correct rate",
                      value: `${result.overallCorrectRate.toFixed(2)}%`,
                      hint: "Correct ÷ total",
                    },
                    { label: "Correct", value: `${parsed.value.correct}` },
                    { label: "Wrong", value: `${result.wrong}` },
                    { label: "Unattempted", value: `${result.unattempted}` },
                  ],
                }
              : {})}
            {...(result && parsed.ok
              ? {
                  shareText: `Accuracy ${result.accuracy.toFixed(2)}% on ${parsed.value.attempted} attempted questions (${parsed.value.correct} correct) — Rank Sarthi Accuracy Calculator.`,
                  shareQuery: `total=${parsed.value.total}&attempted=${parsed.value.attempted}&correct=${parsed.value.correct}`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Accuracy measures correct answers against the questions you actually attempted.</li>
                <li>Attempt rate measures how much of the paper you attempted.</li>
                <li>With zero attempts, accuracy and error rate are reported as 0% rather than dividing by zero.</li>
              </ul>
            }
            note="These are ratios from your own counts. They are not a score, a rank or an assessment of your preparation."
          >
            {result ? (
              <>
                <RatioBar label="Accuracy on attempted questions" value={result.accuracy} />
                <RatioBar label="Attempt rate across the paper" value={result.attemptRate} />
              </>
            ) : null}
          </ToolResultPanel>
        }
      />

      <FormulaCard
        title="Formula used"
        lines={[
          "wrong = attempted − correct",
          "unattempted = total − attempted",
          "accuracy = (correct ÷ attempted) × 100",
          "errorRate = (wrong ÷ attempted) × 100",
          "attemptRate = (attempted ÷ total) × 100",
          "overallCorrectRate = (correct ÷ total) × 100",
        ]}
      />
    </>
  );
}

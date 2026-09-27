import { useMemo, useState } from "react";
import { dailyTargetResult, fieldError, validateDailyTarget, type DailyTargetInput } from "@/lib/tools/engine";
import {
  FormulaCard,
  GhostButton,
  NumberField,
  RatioBar,
  ScenarioTable,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
  useQueryPrefill,
} from "./workbench";

/** Daily question target from a question goal, progress, days and rest days. */

type Raw = Record<keyof DailyTargetInput, string>;
const EMPTY: Raw = { goal: "", completed: "0", days: "", restDays: "0" };

export function DailyQuestionTargetCalculator() {
  const [raw, setRaw] = useState<Raw>(EMPTY);

  useQueryPrefill((params) => {
    setRaw((s) => ({
      goal: params.get("goal") ?? s.goal,
      completed: params.get("completed") ?? s.completed,
      days: params.get("days") ?? s.days,
      restDays: params.get("rest") ?? s.restDays,
    }));
  });

  const parsed = useMemo(() => validateDailyTarget(raw), [raw]);
  const result = parsed.ok ? dailyTargetResult(parsed.value) : null;

  return (
    <>
      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your question goal and time available"
            description="Whole numbers only. Completed questions cannot exceed the goal, and rest days must be fewer than the days available."
            actions={
              <GhostButton type="button" onClick={() => setRaw(EMPTY)}>
                Reset
              </GhostButton>
            }
          >
            <NumberField
              id="dq-goal"
              label="Total question goal"
              value={raw.goal}
              onChange={(v) => setRaw((s) => ({ ...s, goal: v }))}
              error={fieldError(parsed.errors, "goal")}
              step={50}
            />
            <NumberField
              id="dq-completed"
              label="Questions already completed"
              value={raw.completed}
              onChange={(v) => setRaw((s) => ({ ...s, completed: v }))}
              error={fieldError(parsed.errors, "completed")}
              step={10}
            />
            <NumberField
              id="dq-days"
              label="Days available"
              value={raw.days}
              onChange={(v) => setRaw((s) => ({ ...s, days: v }))}
              error={fieldError(parsed.errors, "days")}
            />
            <NumberField
              id="dq-rest"
              label="Planned rest days"
              value={raw.restDays}
              onChange={(v) => setRaw((s) => ({ ...s, restDays: v }))}
              error={fieldError(parsed.errors, "restDays")}
            />
          </ToolInputPanel>
        }
        result={
          <ToolResultPanel
            status="Questions per active practice day"
            {...(result ? { headline: `${result.dailyTarget}` } : {})}
            {...(result ? { headlineSuffix: "questions / day" } : {})}
            {...(result && parsed.ok
              ? { equation: `ceil(${result.remaining} ÷ ${result.activeDays}) = ${result.dailyTarget}` }
              : {})}
            {...(result
              ? {
                  stats: [
                    { label: "Questions remaining", value: `${result.remaining}` },
                    { label: "Active practice days", value: `${result.activeDays}` },
                    { label: "Weekly equivalent", value: `${result.weeklyEquivalent}` },
                    { label: "Completion so far", value: `${result.completionPercent.toFixed(2)}%` },
                  ],
                }
              : {})}
            {...(result && parsed.ok
              ? {
                  shareText: `${result.dailyTarget} questions per active day to finish ${result.remaining} remaining questions in ${result.activeDays} days (Rank Sarthi Daily Question Target Calculator).`,
                  shareQuery: `goal=${parsed.value.goal}&completed=${parsed.value.completed}&days=${parsed.value.days}&rest=${parsed.value.restDays}`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Enter the total questions you want to finish and the days you have.</li>
                <li>Rest days are removed before the daily target is calculated.</li>
                <li>Once the goal is already met, the daily target is 0.</li>
              </ul>
            }
            note="This is division, not study advice. Rank Sarthi is not claiming a question count guarantees any outcome."
          >
            {result ? <RatioBar label="Goal completed so far" value={result.completionPercent} /> : null}
          </ToolResultPanel>
        }
      />

      {result ? (
        <ScenarioTable
          caption="Milestone question counts"
          columns={["Milestone", "Questions completed", "Still remaining"]}
          rows={result.milestones.map((milestone) => [
            milestone.label,
            milestone.questions,
            Math.max(0, milestone.questions - (parsed.ok ? parsed.value.completed : 0)),
          ])}
        />
      ) : null}

      <FormulaCard
        title="Formula used"
        lines={[
          "remaining = max(goal − completed, 0)",
          "activeDays = daysAvailable − restDays",
          "dailyTarget = ceil(remaining ÷ activeDays)",
          "weeklyEquivalent = dailyTarget × 7",
          "completion = (completed ÷ goal) × 100",
        ]}
      />
    </>
  );
}

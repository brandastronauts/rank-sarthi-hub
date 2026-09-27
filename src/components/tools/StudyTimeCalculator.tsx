import { useMemo, useState } from "react";
import { fieldError, studyTimeResult, validateStudyTime, type StudyTimeInput } from "@/lib/tools/engine";
import {
  DateField,
  FormulaCard,
  GhostButton,
  NumberField,
  PresetSelector,
  ScenarioTable,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
} from "./workbench";

/** Study hours available between two dates. Arithmetic only, no study advice. */

type Raw = Record<keyof StudyTimeInput, string>;

const EMPTY: Raw = {
  startDate: "",
  endDate: "",
  weekdayHours: "4",
  weekendHours: "8",
  bufferDays: "0",
};

const SPLITS = [
  { id: "none", label: "No subject split" },
  { id: "3", label: "3 subjects" },
  { id: "4", label: "4 subjects" },
];

export function StudyTimeCalculator() {
  const [raw, setRaw] = useState<Raw>(EMPTY);
  const [split, setSplit] = useState("none");

  const parsed = useMemo(() => validateStudyTime(raw), [raw]);
  const result = parsed.ok ? studyTimeResult(parsed.value) : null;

  const hours = (value: number) => `${value.toFixed(1)} h`;
  const subjectCount = split === "none" ? 0 : Number(split);

  return (
    <>
      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your dates and daily study hours"
            description="The start date is counted as a study day; the exam or end date is excluded from study days."
            actions={
              <GhostButton type="button" onClick={() => setRaw(EMPTY)}>
                Reset
              </GhostButton>
            }
          >
            <DateField
              id="st-start"
              label="Start date"
              help="Counted as your first study day."
              value={raw.startDate}
              onChange={(v) => setRaw((s) => ({ ...s, startDate: v }))}
              error={fieldError(parsed.errors, "startDate")}
            />
            <DateField
              id="st-end"
              label="Exam or end date"
              help="Excluded from study days."
              value={raw.endDate}
              onChange={(v) => setRaw((s) => ({ ...s, endDate: v }))}
              error={fieldError(parsed.errors, "endDate")}
            />
            <NumberField
              id="st-weekday"
              label="Weekday study hours (Mon–Fri)"
              value={raw.weekdayHours}
              onChange={(v) => setRaw((s) => ({ ...s, weekdayHours: v }))}
              error={fieldError(parsed.errors, "weekdayHours")}
              decimal
              step={0.5}
              max={24}
            />
            <NumberField
              id="st-weekend"
              label="Weekend study hours (Sat–Sun)"
              value={raw.weekendHours}
              onChange={(v) => setRaw((s) => ({ ...s, weekendHours: v }))}
              error={fieldError(parsed.errors, "weekendHours")}
              decimal
              step={0.5}
              max={24}
            />
            <NumberField
              id="st-buffer"
              label="Reserved / buffer days"
              help="Days you keep aside for rest, travel or revision slack. Default 0."
              value={raw.bufferDays}
              onChange={(v) => setRaw((s) => ({ ...s, bufferDays: v }))}
              error={fieldError(parsed.errors, "bufferDays")}
            />
            <PresetSelector
              name="st-split"
              label="Optional equal subject split"
              value={split}
              onChange={setSplit}
              options={SPLITS}
            />
          </ToolInputPanel>
        }
        result={
          <ToolResultPanel
            status="Study hours available before your exam"
            {...(result ? { headline: hours(result.effectiveHours) } : {})}
            {...(result
              ? {
                  equation: `(${result.weekdayCount} weekdays × ${raw.weekdayHours} h) + (${result.weekendCount} weekend days × ${raw.weekendHours} h) − ${hours(
                    result.bufferHours,
                  )} buffer = ${hours(result.effectiveHours)}`,
                }
              : {})}
            {...(result
              ? {
                  stats: [
                    { label: "Days remaining", value: `${result.daysRemaining}` },
                    { label: "Effective study days", value: `${result.effectiveStudyDays}` },
                    { label: "Total planned hours", value: hours(result.plannedHours) },
                    { label: "Buffer hours removed", value: hours(result.bufferHours) },
                    { label: "Weekday hours", value: hours(result.weekdayHours) },
                    { label: "Weekend hours", value: hours(result.weekendHours) },
                    { label: "Average hours / day", value: hours(result.averageHoursPerDay) },
                    { label: "Average hours / week", value: hours(result.averageHoursPerWeek) },
                  ],
                }
              : {})}
            {...(result
              ? {
                  shareText: `${hours(result.effectiveHours)} of study time available across ${result.effectiveStudyDays} days before my exam (Rank Sarthi Study Time Calculator).`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Pick a start date and your exam date, then set weekday and weekend hours.</li>
                <li>Buffer days are removed at your own average planned rate.</li>
                <li>Hours never fall below zero, and the buffer must be smaller than the study window.</li>
              </ul>
            }
            note="This is calendar and hour arithmetic only. It does not recommend how to spend the time."
          />
        }
      />

      {result && subjectCount > 0 ? (
        <ScenarioTable
          caption={`Equal split across ${subjectCount} subjects`}
          columns={["Subject", "Hours"]}
          rows={Array.from({ length: subjectCount }, (_, index) => [
            `Subject ${index + 1}`,
            hours(result.effectiveHours / subjectCount),
          ])}
          note="An equal division of the calculated hours. Rank Sarthi is not recommending this allocation academically."
        />
      ) : null}

      <FormulaCard
        title="Formula used"
        lines={[
          "studyDays = calendar days from the start date up to (not including) the exam date",
          "plannedHours = (weekdayCount × weekdayHours) + (weekendCount × weekendHours)",
          "averageDailyHours = plannedHours ÷ studyDays",
          "bufferHours = bufferDays × averageDailyHours",
          "effectiveHours = max(plannedHours − bufferHours, 0)",
        ]}
      />
    </>
  );
}

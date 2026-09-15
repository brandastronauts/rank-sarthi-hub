import { useMemo, useState } from "react";
import {
  JEE_MAIN_RULES,
  jeeMainScore,
  subjectScore,
  validateJeeMain,
  fieldError,
  validateJeeMainSubjects,
  type MarksInput,
} from "@/lib/tools/engine";
import {
  FormulaCard,
  GhostButton,
  NumberField,
  PresetSelector,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
  useQueryPrefill,
} from "./workbench";

/**
 * JEE Main Paper 1 marks calculator. Arithmetic only — never a rank,
 * percentile, cutoff or college prediction.
 */

const EMPTY_QUICK: Record<keyof MarksInput, string> = {
  correct: "",
  incorrect: "",
  unattempted: "",
  bonus: "0",
};

const SUBJECTS = [
  { key: "physics", label: "Physics" },
  { key: "chemistry", label: "Chemistry" },
  { key: "mathematics", label: "Mathematics" },
] as const;

type SubjectKey = (typeof SUBJECTS)[number]["key"];
type Counts = { correct: string; incorrect: string; unattempted: string };

const EMPTY_SUBJECTS: Record<SubjectKey, Counts> = {
  physics: { correct: "", incorrect: "", unattempted: "" },
  chemistry: { correct: "", incorrect: "", unattempted: "" },
  mathematics: { correct: "", incorrect: "", unattempted: "" },
};

export function JeeMainScoreCalculator() {
  const [mode, setMode] = useState<"quick" | "subject">("quick");
  const [quick, setQuick] = useState(EMPTY_QUICK);
  const [subjects, setSubjects] = useState<Record<SubjectKey, Counts>>(EMPTY_SUBJECTS);
  const [bonus, setBonus] = useState("0");

  useQueryPrefill((params) => {
    setQuick((s) => ({
      correct: params.get("correct") ?? s.correct,
      incorrect: params.get("wrong") ?? params.get("incorrect") ?? s.incorrect,
      unattempted: params.get("unattempted") ?? s.unattempted,
      bonus: params.get("bonus") ?? s.bonus,
    }));
  });

  const quickParsed = useMemo(() => validateJeeMain(quick), [quick]);
  const subjectParsed = useMemo(
    () =>
      validateJeeMainSubjects(
        SUBJECTS.map((s) => ({ key: s.key, label: s.label, counts: subjects[s.key] })),
        bonus,
      ),
    [subjects, bonus],
  );

  const reset = () => {
    setQuick(EMPTY_QUICK);
    setSubjects(EMPTY_SUBJECTS);
    setBonus("0");
  };

  const active =
    mode === "quick"
      ? quickParsed.ok
        ? quickParsed.value
        : null
      : subjectParsed.ok
        ? {
            correct: subjectParsed.value.subjects.reduce((t, s) => t + s.counts.correct, 0),
            incorrect: subjectParsed.value.subjects.reduce((t, s) => t + s.counts.incorrect, 0),
            unattempted: subjectParsed.value.subjects.reduce((t, s) => t + s.counts.unattempted, 0),
            bonus: subjectParsed.value.bonus,
          }
        : null;

  const result = active ? jeeMainScore(active) : null;
  const errors = mode === "quick" ? quickParsed.errors : subjectParsed.errors;

  return (
    <>
      <div className="mt-5">
        <PresetSelector
          name="jee-main-mode"
          label="Entry mode"
          value={mode}
          onChange={(id) => setMode(id as "quick" | "subject")}
          options={[
            { id: "quick", label: "Quick mode" },
            { id: "subject", label: "Subject mode" },
          ]}
        />
      </div>

      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend={
              mode === "quick"
                ? `Your responses across all ${JEE_MAIN_RULES.questions} questions`
                : `Your responses subject by subject (${JEE_MAIN_RULES.perSubject} questions each)`
            }
            description={`Whole numbers only. Correct, incorrect, unattempted and official bonus questions must add up to exactly ${JEE_MAIN_RULES.questions}.`}
            formError={fieldError(errors, "form")}
            actions={
              <GhostButton type="button" onClick={reset}>
                Reset
              </GhostButton>
            }
          >
            {mode === "quick" ? (
              <>
                <NumberField
                  id="jee-main-correct"
                  label="Correct answers"
                  help="+4 marks each"
                  value={quick.correct}
                  onChange={(v) => setQuick((s) => ({ ...s, correct: v }))}
                  error={fieldError(errors, "correct")}
                  max={JEE_MAIN_RULES.questions}
                />
                <NumberField
                  id="jee-main-incorrect"
                  label="Incorrect answers"
                  help="−1 mark each"
                  value={quick.incorrect}
                  onChange={(v) => setQuick((s) => ({ ...s, incorrect: v }))}
                  error={fieldError(errors, "incorrect")}
                  max={JEE_MAIN_RULES.questions}
                />
                <NumberField
                  id="jee-main-unattempted"
                  label="Unattempted questions"
                  help="0 marks"
                  value={quick.unattempted}
                  onChange={(v) => setQuick((s) => ({ ...s, unattempted: v }))}
                  error={fieldError(errors, "unattempted")}
                  max={JEE_MAIN_RULES.questions}
                />
                <NumberField
                  id="jee-main-bonus"
                  label="Official dropped or bonus questions"
                  help="Only questions the official answer key awards to every candidate. Default 0."
                  value={quick.bonus}
                  onChange={(v) => setQuick((s) => ({ ...s, bonus: v }))}
                  error={fieldError(errors, "bonus")}
                  max={JEE_MAIN_RULES.questions}
                />
              </>
            ) : (
              <>
                {SUBJECTS.map((subject) => (
                  <div key={subject.key} className="rounded-lg border border-border bg-ivory p-3">
                    <p className="text-sm font-bold text-primary">{subject.label}</p>
                    {fieldError(errors, `${subject.key}-form`) ? (
                      <p role="alert" className="mt-1 text-xs font-semibold text-accent">
                        {fieldError(errors, `${subject.key}-form`)}
                      </p>
                    ) : null}
                    <div className="mt-3 space-y-3">
                      {(["correct", "incorrect", "unattempted"] as const).map((field) => (
                        <NumberField
                          key={field}
                          id={`jee-main-${subject.key}-${field}`}
                          label={`${subject.label} ${field}`}
                          value={subjects[subject.key][field]}
                          onChange={(v) =>
                            setSubjects((s) => ({ ...s, [subject.key]: { ...s[subject.key], [field]: v } }))
                          }
                          error={fieldError(errors, `${subject.key}-${field}`)}
                          max={JEE_MAIN_RULES.perSubject}
                        />
                      ))}
                    </div>
                  </div>
                ))}
                <NumberField
                  id="jee-main-subject-bonus"
                  label="Official dropped or bonus questions"
                  help="Only questions the official answer key awards to every candidate. Default 0."
                  value={bonus}
                  onChange={setBonus}
                  error={fieldError(errors, "bonus")}
                  max={JEE_MAIN_RULES.questions}
                />
              </>
            )}
          </ToolInputPanel>
        }
        result={
          <ToolResultPanel
            status="Your calculated JEE Main Paper 1 marks"
            {...(result ? { headline: `${result.score}` } : {})}
            {...(result ? { headlineSuffix: `/ ${result.maxMarks}` } : {})}
            {...(result && active
              ? {
                  equation: `(${active.correct} × 4) − ${active.incorrect}${
                    active.bonus ? ` + (${active.bonus} × 4)` : ""
                  } = ${result.score}`,
                }
              : {})}
            {...(result
              ? {
                  stats: [
                    { label: "Positive marks", value: `+${result.positiveMarks}` },
                    { label: "Negative marks", value: `−${result.negativeMarks}` },
                    ...(result.bonusMarks ? [{ label: "Official bonus marks", value: `+${result.bonusMarks}` }] : []),
                    { label: "Attempted", value: `${result.attempted}` },
                    { label: "Unattempted", value: `${result.unattempted}` },
                    { label: "Accuracy", value: `${result.accuracy.toFixed(2)}%`, hint: "Correct ÷ attempted" },
                    { label: "Attempt rate", value: `${result.attemptRate.toFixed(2)}%`, hint: "Attempted ÷ 75" },
                  ],
                }
              : {})}
            {...(result && active
              ? {
                  shareText: `JEE Main Paper 1 marks: ${result.score}/300 from ${active.correct} correct, ${active.incorrect} incorrect, ${active.unattempted} unattempted (Rank Sarthi JEE Main Score Calculator).`,
                  shareQuery: `correct=${active.correct}&wrong=${active.incorrect}&unattempted=${active.unattempted}&bonus=${active.bonus}`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  {JEE_MAIN_RULES.questions} questions, maximum {JEE_MAIN_RULES.maxMarks} marks.
                </li>
                <li>Correct +4, incorrect −1, unattempted 0 — for both MCQs and numerical value questions.</li>
                <li>A dropped or bonus question occupies one of the 75, so all four counts must total 75.</li>
              </ul>
            }
            note="This is a marks calculation only. It does not estimate percentile, rank, cutoff or college admission."
          >
            {mode === "subject" && subjectParsed.ok ? (
              <div className="mt-4 space-y-2">
                {subjectParsed.value.subjects.map((subject) => (
                  <div
                    key={subject.key}
                    className="flex items-baseline justify-between gap-3 border-b border-border pb-2 text-sm last:border-0"
                  >
                    <span className="text-ink/80">{subject.label}</span>
                    <span className="font-semibold text-primary">{subjectScore(subject.counts)} / 100</span>
                  </div>
                ))}
                {subjectParsed.value.bonus ? (
                  <p className="text-xs text-muted-foreground">
                    Official bonus marks ({subjectParsed.value.bonus} × 4) are added to the paper total, not to a single
                    subject.
                  </p>
                ) : null}
              </div>
            ) : null}
          </ToolResultPanel>
        }
      />

      <FormulaCard
        title="Formula used"
        lines={[
          "score = (correct × 4) − incorrect",
          "score = (correct × 4) − incorrect + (officialBonusQuestions × 4)",
          "correct + incorrect + unattempted + officialBonusQuestions = 75",
        ]}
        note={`${JEE_MAIN_RULES.ruleVersion} · verified for ${JEE_MAIN_RULES.verifiedForCycle} · ${JEE_MAIN_RULES.authority} · last verified ${JEE_MAIN_RULES.lastVerified}.`}
      />
    </>
  );
}

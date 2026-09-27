import { useMemo, useState } from "react";
import {
  NDA_GAT_PENALTY,
  NDA_GAT_PER_QUESTION,
  NDA_MATHS_PENALTY,
  NDA_MATHS_PER_QUESTION,
  NDA_RULES,
  display2,
  fieldError,
  ndaScore,
  validateNdaPaper,
  type NdaPaperInput,
} from "@/lib/tools/engine";
import {
  FormulaCard,
  GhostButton,
  NumberField,
  ToolInputPanel,
  ToolResultPanel,
  ToolWorkbench,
  useQueryPrefill,
} from "./workbench";

/**
 * UPSC NDA written-examination marks calculator (Mathematics + GAT).
 * Full-precision arithmetic internally, two decimal places on display.
 * Written paper only — no SSB marks, no merit or selection prediction.
 */

type Raw = Record<keyof NdaPaperInput, string>;
const EMPTY: Raw = { correct: "", wrong: "", unanswered: "" };

export function NdaScoreCalculator() {
  const [maths, setMaths] = useState<Raw>(EMPTY);
  const [gat, setGat] = useState<Raw>(EMPTY);

  useQueryPrefill((params) => {
    setMaths((s) => ({
      correct: params.get("mcorrect") ?? s.correct,
      wrong: params.get("mwrong") ?? s.wrong,
      unanswered: params.get("munanswered") ?? s.unanswered,
    }));
    setGat((s) => ({
      correct: params.get("gcorrect") ?? s.correct,
      wrong: params.get("gwrong") ?? s.wrong,
      unanswered: params.get("gunanswered") ?? s.unanswered,
    }));
  });

  const mathsParsed = useMemo(() => validateNdaPaper(maths, "mathematics"), [maths]);
  const gatParsed = useMemo(() => validateNdaPaper(gat, "gat"), [gat]);
  const result = mathsParsed.ok && gatParsed.ok ? ndaScore(mathsParsed.value, gatParsed.value) : null;

  const reset = () => {
    setMaths(EMPTY);
    setGat(EMPTY);
  };

  const papers = [
    {
      key: "maths",
      title: `Mathematics — ${NDA_RULES.mathematics.questions} questions, ${NDA_RULES.mathematics.maxMarks} marks`,
      help: `${NDA_MATHS_PER_QUESTION} marks per correct answer, one-third penalty (${NDA_MATHS_PER_QUESTION} ÷ 3) per wrong answer.`,
      raw: maths,
      setRaw: setMaths,
      errors: mathsParsed.errors,
      max: NDA_RULES.mathematics.questions,
    },
    {
      key: "gat",
      title: `General Ability Test — ${NDA_RULES.gat.questions} questions, ${NDA_RULES.gat.maxMarks} marks`,
      help: `${NDA_GAT_PER_QUESTION} marks per correct answer, one-third penalty (${NDA_GAT_PER_QUESTION} ÷ 3) per wrong answer.`,
      raw: gat,
      setRaw: setGat,
      errors: gatParsed.errors,
      max: NDA_RULES.gat.questions,
    },
  ] as const;

  return (
    <>
      <ToolWorkbench
        inputs={
          <ToolInputPanel
            legend="Your responses in each written paper"
            description="Whole numbers only. Each paper's counts must add up to that paper's question total."
            actions={
              <GhostButton type="button" onClick={reset}>
                Reset
              </GhostButton>
            }
          >
            {papers.map((paper) => (
              <div key={paper.key} className="rounded-lg border border-border bg-ivory p-3">
                <p className="text-sm font-bold text-primary">{paper.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{paper.help}</p>
                {fieldError(paper.errors, "form") ? (
                  <p role="alert" className="mt-2 text-xs font-semibold text-accent">
                    {fieldError(paper.errors, "form")}
                  </p>
                ) : null}
                <div className="mt-3 space-y-3">
                  {(["correct", "wrong", "unanswered"] as const).map((field) => (
                    <NumberField
                      key={field}
                      id={`nda-${paper.key}-${field}`}
                      label={`${paper.key === "maths" ? "Mathematics" : "GAT"} ${field}`}
                      value={paper.raw[field]}
                      onChange={(v) => paper.setRaw((s) => ({ ...s, [field]: v }))}
                      error={fieldError(paper.errors, field)}
                      max={paper.max}
                    />
                  ))}
                </div>
              </div>
            ))}
          </ToolInputPanel>
        }
        result={
          <ToolResultPanel
            status="Your calculated NDA written-examination score"
            {...(result ? { headline: display2(result.writtenScore) } : {})}
            {...(result ? { headlineSuffix: `/ ${result.maxMarks}` } : {})}
            {...(result && mathsParsed.ok && gatParsed.ok
              ? {
                  equation: `Maths: (${mathsParsed.value.correct} × 2.5) − (${mathsParsed.value.wrong} × 2.5 ÷ 3) = ${display2(
                    result.mathematics.score,
                  )}   |   GAT: (${gatParsed.value.correct} × 4) − (${gatParsed.value.wrong} × 4 ÷ 3) = ${display2(
                    result.gat.score,
                  )}`,
                }
              : {})}
            {...(result
              ? {
                  stats: [
                    { label: "Mathematics", value: `${display2(result.mathematics.score)} / 300` },
                    { label: "GAT", value: `${display2(result.gat.score)} / 600` },
                    { label: "Maths positive marks", value: `+${display2(result.mathematics.positiveMarks)}` },
                    { label: "Maths negative marks", value: `−${display2(result.mathematics.negativeMarks)}` },
                    { label: "GAT positive marks", value: `+${display2(result.gat.positiveMarks)}` },
                    { label: "GAT negative marks", value: `−${display2(result.gat.negativeMarks)}` },
                    {
                      label: "Maths accuracy",
                      value: `${result.mathematics.accuracy.toFixed(2)}%`,
                      hint: "Correct ÷ attempted",
                    },
                    { label: "GAT accuracy", value: `${result.gat.accuracy.toFixed(2)}%`, hint: "Correct ÷ attempted" },
                  ],
                }
              : {})}
            {...(result && mathsParsed.ok && gatParsed.ok
              ? {
                  shareText: `NDA written score: ${display2(result.writtenScore)}/900 (Mathematics ${display2(
                    result.mathematics.score,
                  )}, GAT ${display2(result.gat.score)}) — Rank Sarthi NDA Score Calculator.`,
                  shareQuery: `mcorrect=${mathsParsed.value.correct}&mwrong=${mathsParsed.value.wrong}&munanswered=${mathsParsed.value.unanswered}&gcorrect=${gatParsed.value.correct}&gwrong=${gatParsed.value.wrong}&gunanswered=${gatParsed.value.unanswered}`,
                }
              : {})}
            empty={
              <ul className="list-disc space-y-1 pl-5">
                <li>Mathematics: 120 questions, 300 marks, 2.5 marks per correct answer.</li>
                <li>General Ability Test: 150 questions, 600 marks, 4 marks per correct answer.</li>
                <li>A wrong answer costs one-third of that question's marks; unanswered questions score 0.</li>
                <li>Maximum written total: 900 marks.</li>
              </ul>
            }
            note="This calculates the written-examination score only. It does not include SSB interview marks and does not predict merit, selection or a cut-off."
          />
        }
      />

      <FormulaCard
        title="Formula used"
        lines={[
          "mathScore = (correctMath × 2.5) − (wrongMath × (2.5 ÷ 3))",
          "gatScore = (correctGat × 4) − (wrongGat × (4 ÷ 3))",
          "writtenScore = mathScore + gatScore",
          `Penalties held at full precision internally: ${NDA_MATHS_PENALTY} and ${NDA_GAT_PENALTY}`,
        ]}
        note={`${NDA_RULES.ruleVersion} · verified for ${NDA_RULES.verifiedForCycle} · ${NDA_RULES.authority} · last verified ${NDA_RULES.lastVerified}. The approximate values −0.83 and −1.33 are shown for explanation only and are never used in the calculation.`}
      />
    </>
  );
}

import { NeetScoreCalculator } from "@/components/tools/NeetScoreCalculator";
import { NeetStudyPlanner } from "@/components/tools/NeetStudyPlanner";
import { JeeMainScoreCalculator } from "@/components/tools/JeeMainScoreCalculator";
import { JeeAdvancedScoreCalculator } from "@/components/tools/JeeAdvancedScoreCalculator";
import { NdaScoreCalculator } from "@/components/tools/NdaScoreCalculator";
import { NegativeMarkingCalculator } from "@/components/tools/NegativeMarkingCalculator";
import { AccuracyCalculator } from "@/components/tools/AccuracyCalculator";
import { TargetScoreCalculator } from "@/components/tools/TargetScoreCalculator";
import { CorrectAnswersNeededCalculator } from "@/components/tools/CorrectAnswersNeededCalculator";
import { StudyTimeCalculator } from "@/components/tools/StudyTimeCalculator";
import { DailyQuestionTargetCalculator } from "@/components/tools/DailyQuestionTargetCalculator";
import type { ToolMountId } from "@/content/types";

export type ToolId = ToolMountId;

const TOOLS: Record<ToolId, React.ComponentType> = {
  "neet-score-calculator": NeetScoreCalculator,
  "neet-study-planner": NeetStudyPlanner,
  "jee-main-score-calculator": JeeMainScoreCalculator,
  "jee-advanced-score-calculator": JeeAdvancedScoreCalculator,
  "nda-score-calculator": NdaScoreCalculator,
  "negative-marking-calculator": NegativeMarkingCalculator,
  "accuracy-calculator": AccuracyCalculator,
  "target-score-calculator": TargetScoreCalculator,
  "correct-answers-needed-calculator": CorrectAnswersNeededCalculator,
  "study-time-calculator": StudyTimeCalculator,
  "daily-question-target-calculator": DailyQuestionTargetCalculator,
};

/**
 * B49 — Interactive tool mount (T13 / T16).
 * A content record names a registered tool id; an unknown id renders nothing,
 * so a page never advertises a tool that does not exist.
 */
export function ToolBlock({
  id,
  heading,
  intro,
  tool,
  note,
}: {
  id?: string;
  heading?: string;
  intro?: string;
  tool: ToolId;
  note?: string;
}) {
  const Tool = TOOLS[tool];
  if (!Tool) return null;

  return (
    <section id={id} className="scroll-mt-28">
      {heading ? <h2 className="text-display-md text-primary">{heading}</h2> : null}
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}
      <Tool />
      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}

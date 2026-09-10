import { NeetScoreCalculator } from "@/components/tools/NeetScoreCalculator";
import { NeetStudyPlanner } from "@/components/tools/NeetStudyPlanner";

export type ToolId = "neet-score-calculator" | "neet-study-planner";

const TOOLS: Record<ToolId, React.ComponentType> = {
  "neet-score-calculator": NeetScoreCalculator,
  "neet-study-planner": NeetStudyPlanner,
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

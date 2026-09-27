import { describe, expect, it } from "vitest";
import {
  accuracyResult,
  advancedScore,
  correctAnswersNeeded,
  dailyTargetResult,
  display2,
  jeeMainScore,
  ndaScore,
  negativeMarkingScore,
  studyTimeResult,
  targetScoreResult,
  validateAccuracy,
  validateAdvancedSection,
  validateCorrectNeeded,
  validateDailyTarget,
  validateJeeMain,
  validateNdaPaper,
  validateNegativeMarking,
  validateStudyTime,
  validateTargetScore,
  type AdvancedSectionConfig,
} from "./engine";
import { calculateScore, validateScoreInput } from "@/lib/neet-score";

describe("JEE Main score calculator", () => {
  it("scores 60 correct / 10 wrong / 5 unattempted as 230", () => {
    const parsed = validateJeeMain({ correct: "60", incorrect: "10", unattempted: "5", bonus: "0" });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const result = jeeMainScore(parsed.value);
    expect(result.score).toBe(230);
    expect(result.maxMarks).toBe(300);
    expect(result.positiveMarks).toBe(240);
    expect(result.negativeMarks).toBe(10);
  });

  it("scores 50 correct / 15 wrong / 10 unattempted as 185", () => {
    const parsed = validateJeeMain({ correct: "50", incorrect: "15", unattempted: "10", bonus: "0" });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(jeeMainScore(parsed.value).score).toBe(185);
  });

  it("adds +4 for each official dropped/bonus question inside the 75", () => {
    const parsed = validateJeeMain({ correct: "59", incorrect: "10", unattempted: "5", bonus: "1" });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(jeeMainScore(parsed.value).score).toBe(230);
  });

  it("rejects response totals other than 75", () => {
    const parsed = validateJeeMain({ correct: "70", incorrect: "10", unattempted: "0", bonus: "0" });
    expect(parsed.ok).toBe(false);
  });

  it("rejects negative, decimal and text input", () => {
    expect(validateJeeMain({ correct: "-5", incorrect: "10", unattempted: "70", bonus: "0" }).ok).toBe(false);
    expect(validateJeeMain({ correct: "60.5", incorrect: "10", unattempted: "4.5", bonus: "0" }).ok).toBe(false);
    expect(validateJeeMain({ correct: "sixty", incorrect: "10", unattempted: "5", bonus: "0" }).ok).toBe(false);
  });
});

describe("NEET score calculator (existing accepted logic)", () => {
  const run = (correct: string, incorrect: string, unanswered: string, bonus: string) => {
    const parsed = validateScoreInput({ correct, incorrect, unanswered, bonus });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) throw new Error("invalid");
    return calculateScore(parsed.value).score;
  };

  it("preserves the accepted regression cases", () => {
    expect(run("180", "0", "0", "0")).toBe(720);
    expect(run("150", "20", "10", "0")).toBe(580);
    expect(run("100", "50", "30", "0")).toBe(350);
    expect(run("0", "180", "0", "0")).toBe(-180);
    expect(run("120", "40", "19", "1")).toBe(444);
  });

  it("rejects totals other than 180", () => {
    expect(validateScoreInput({ correct: "180", incorrect: "5", unanswered: "0", bonus: "0" }).ok).toBe(false);
  });
});

describe("NDA written score calculator", () => {
  it("calculates Mathematics and GAT at full precision and displays two decimals", () => {
    const maths = validateNdaPaper({ correct: "80", wrong: "20", unanswered: "20" }, "mathematics");
    const gat = validateNdaPaper({ correct: "100", wrong: "30", unanswered: "20" }, "gat");
    expect(maths.ok && gat.ok).toBe(true);
    if (!maths.ok || !gat.ok) return;
    const result = ndaScore(maths.value, gat.value);
    expect(result.mathematics.score).toBeCloseTo(200 - 20 * (2.5 / 3), 10);
    expect(display2(result.mathematics.score)).toBe("183.33");
    expect(result.gat.score).toBeCloseTo(360, 10);
    expect(display2(result.gat.score)).toBe("360.00");
    expect(display2(result.writtenScore)).toBe("543.33");
    expect(result.maxMarks).toBe(900);
  });

  it("rejects response totals that do not match the paper", () => {
    expect(validateNdaPaper({ correct: "80", wrong: "20", unanswered: "0" }, "mathematics").ok).toBe(false);
    expect(validateNdaPaper({ correct: "100", wrong: "30", unanswered: "0" }, "gat").ok).toBe(false);
    expect(validateNdaPaper({ correct: "-1", wrong: "0", unanswered: "121" }, "mathematics").ok).toBe(false);
  });
});

describe("JEE Advanced configurable section scoring", () => {
  const section = (over: Partial<AdvancedSectionConfig>): AdvancedSectionConfig => ({
    id: "s1",
    name: "Section 1",
    paper: 1,
    questions: 6,
    fullCorrectMarks: 4,
    wrongPenalty: 2,
    unattemptedMarks: 0,
    partialEnabled: false,
    partialAMarks: 0,
    partialBMarks: 0,
    partialCMarks: 0,
    ...over,
  });

  it("applies configured full, partial, wrong and unattempted marks", () => {
    const config = section({ partialEnabled: true, partialAMarks: 3, partialBMarks: 2, partialCMarks: 1, questions: 8 });
    const counts = { fullCorrect: 3, partialA: 1, partialB: 1, partialC: 1, wrong: 1, unattempted: 1 };
    const result = advancedScore([{ config, counts }]);
    expect(result.combined).toBe(3 * 4 + 3 + 2 + 1 - 2);
    expect(result.paper1).toBe(result.combined);
    expect(result.paper2).toBe(0);
    expect(result.partialMarks).toBe(6);
  });

  it("ignores partial marks when partial credit is off", () => {
    const config = section({ questions: 6 });
    const counts = { fullCorrect: 4, partialA: 0, partialB: 0, partialC: 0, wrong: 1, unattempted: 1 };
    expect(advancedScore([{ config, counts }]).combined).toBe(14);
  });

  it("rejects state counts that do not equal the section question count", () => {
    const config = section({ questions: 6 });
    const bad = { fullCorrect: 4, partialA: 0, partialB: 0, partialC: 0, wrong: 4, unattempted: 0 };
    expect(validateAdvancedSection(config, bad).ok).toBe(false);
    const negative = { fullCorrect: -1, partialA: 0, partialB: 0, partialC: 0, wrong: 3, unattempted: 4 };
    expect(validateAdvancedSection(config, negative).ok).toBe(false);
    const decimal = { fullCorrect: 2.5, partialA: 0, partialB: 0, partialC: 0, wrong: 1.5, unattempted: 2 };
    expect(validateAdvancedSection(config, decimal).ok).toBe(false);
  });
});

describe("Negative marking calculator", () => {
  it("scores 50 correct / 10 wrong at +4 / −1 as 190", () => {
    const parsed = validateNegativeMarking({
      totalQuestions: "75",
      correct: "50",
      incorrect: "10",
      unattempted: "15",
      marksPerCorrect: "4",
      penaltyPerWrong: "1",
    });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const result = negativeMarkingScore(parsed.value);
    expect(result.score).toBe(190);
    expect(result.negativeMarks).toBe(10);
    expect(result.accuracy).toBeCloseTo((50 / 60) * 100, 6);
  });

  it("rejects response totals that do not match the total questions", () => {
    expect(
      validateNegativeMarking({
        totalQuestions: "75",
        correct: "60",
        incorrect: "20",
        unattempted: "0",
        marksPerCorrect: "4",
        penaltyPerWrong: "1",
      }).ok,
    ).toBe(false);
  });

  it("rejects a zero or missing question count", () => {
    expect(
      validateNegativeMarking({
        totalQuestions: "0",
        correct: "0",
        incorrect: "0",
        unattempted: "0",
        marksPerCorrect: "4",
        penaltyPerWrong: "1",
      }).ok,
    ).toBe(false);
  });
});

describe("Accuracy calculator", () => {
  it("returns 76.92% accuracy and 86.67% attempt rate", () => {
    const parsed = validateAccuracy({ total: "75", attempted: "65", correct: "50" });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const result = accuracyResult(parsed.value);
    expect(result.accuracy.toFixed(2)).toBe("76.92");
    expect(result.attemptRate.toFixed(2)).toBe("86.67");
    expect(result.wrong).toBe(15);
    expect(result.unattempted).toBe(10);
  });

  it("returns 0% instead of dividing by zero", () => {
    const result = accuracyResult({ total: 75, attempted: 0, correct: 0 });
    expect(result.accuracy).toBe(0);
    expect(result.errorRate).toBe(0);
  });

  it("rejects correct > attempted and attempted > total", () => {
    expect(validateAccuracy({ total: "75", attempted: "60", correct: "65" }).ok).toBe(false);
    expect(validateAccuracy({ total: "75", attempted: "80", correct: "10" }).ok).toBe(false);
  });
});

describe("Target score calculator", () => {
  const input = { target: 200, totalQuestions: 75, marksPerCorrect: 4, penaltyPerWrong: 1 };

  it("matches the JEE Main worked cases", () => {
    const result = targetScoreResult(input);
    expect(result.minimumCorrectIfNoWrong).toBe(50);
    expect(result.maxWrongAllowed).toBe(20);
    expect(result.feasible).toBe(true);
    const at = (wrong: number) => Math.ceil((200 + wrong) / 4);
    expect(at(0)).toBe(50);
    expect(at(4)).toBe(51);
    expect(at(20)).toBe(55);
  });

  it("keeps every published scenario feasible", () => {
    for (const combo of targetScoreResult(input).combinations) {
      expect(combo.correct + combo.wrong).toBeLessThanOrEqual(75);
      expect(combo.score).toBeGreaterThanOrEqual(200);
    }
  });

  it("rejects a target above the theoretical maximum", () => {
    expect(
      validateTargetScore({ target: "400", totalQuestions: "75", marksPerCorrect: "4", penaltyPerWrong: "1" }).ok,
    ).toBe(false);
  });

  it("rejects zero marks per correct answer", () => {
    expect(
      validateTargetScore({ target: "200", totalQuestions: "75", marksPerCorrect: "0", penaltyPerWrong: "1" }).ok,
    ).toBe(false);
  });
});

describe("Correct answers needed calculator", () => {
  it("needs 52 correct out of 60 attempts for 200 marks", () => {
    const parsed = validateCorrectNeeded({ target: "200", attempts: "60", marksPerCorrect: "4", penaltyPerWrong: "1" });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const result = correctAnswersNeeded(parsed.value);
    expect(result.minimumCorrect).toBe(52);
    expect(result.maximumWrong).toBe(8);
    expect(result.resultingScore).toBe(200);
    expect(result.reachable).toBe(true);
  });

  it("flags an unreachable target instead of correcting it", () => {
    const result = correctAnswersNeeded({ target: 300, attempts: 60, marksPerCorrect: 4, penaltyPerWrong: 1 });
    expect(result.minimumCorrect).toBeGreaterThan(60);
    expect(result.reachable).toBe(false);
  });

  it("rejects zero attempts and text input", () => {
    expect(validateCorrectNeeded({ target: "200", attempts: "0", marksPerCorrect: "4", penaltyPerWrong: "1" }).ok).toBe(false);
    expect(validateCorrectNeeded({ target: "abc", attempts: "60", marksPerCorrect: "4", penaltyPerWrong: "1" }).ok).toBe(false);
  });
});

describe("Study time calculator", () => {
  it("counts weekdays and weekends between the dates", () => {
    // 2026-09-21 (Mon) to 2026-10-05 (Mon), end excluded: 14 days = 10 weekdays + 4 weekend days.
    const parsed = validateStudyTime({
      startDate: "2026-09-21",
      endDate: "2026-10-05",
      weekdayHours: "4",
      weekendHours: "8",
      bufferDays: "0",
    });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const result = studyTimeResult(parsed.value);
    expect(result.studyDays).toBe(14);
    expect(result.weekdayCount).toBe(10);
    expect(result.weekendCount).toBe(4);
    expect(result.plannedHours).toBe(10 * 4 + 4 * 8);
    expect(result.effectiveHours).toBe(72);
  });

  it("removes buffer days at the average planned rate and never goes below zero", () => {
    const result = studyTimeResult({
      startDate: "2026-09-21",
      endDate: "2026-10-05",
      weekdayHours: 4,
      weekendHours: 8,
      bufferDays: 2,
    });
    const average = 72 / 14;
    expect(result.bufferHours).toBeCloseTo(2 * average, 10);
    expect(result.effectiveHours).toBeCloseTo(72 - 2 * average, 10);
    expect(result.effectiveStudyDays).toBe(12);
    expect(result.effectiveHours).toBeGreaterThanOrEqual(0);
  });

  it("rejects invalid dates, reversed dates and oversized buffers", () => {
    expect(validateStudyTime({ startDate: "", endDate: "2026-10-05", weekdayHours: "4", weekendHours: "8", bufferDays: "0" }).ok).toBe(false);
    expect(validateStudyTime({ startDate: "2026-10-05", endDate: "2026-09-21", weekdayHours: "4", weekendHours: "8", bufferDays: "0" }).ok).toBe(false);
    expect(validateStudyTime({ startDate: "2026-09-21", endDate: "2026-10-05", weekdayHours: "4", weekendHours: "8", bufferDays: "14" }).ok).toBe(false);
    expect(validateStudyTime({ startDate: "2026-09-21", endDate: "2026-10-05", weekdayHours: "-2", weekendHours: "8", bufferDays: "0" }).ok).toBe(false);
  });
});

describe("Daily question target calculator", () => {
  it("needs 50 questions per active day", () => {
    const parsed = validateDailyTarget({ goal: "1000", completed: "200", days: "20", restDays: "4" });
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const result = dailyTargetResult(parsed.value);
    expect(result.remaining).toBe(800);
    expect(result.activeDays).toBe(16);
    expect(result.dailyTarget).toBe(50);
    expect(result.weeklyEquivalent).toBe(350);
    expect(result.completionPercent).toBe(20);
    expect(result.milestones.map((m) => m.questions)).toEqual([250, 500, 750, 1000]);
  });

  it("returns a zero target once the goal is met", () => {
    expect(dailyTargetResult({ goal: 500, completed: 500, days: 10, restDays: 2 }).dailyTarget).toBe(0);
  });

  it("rejects completed > goal, rest days >= days available and decimals", () => {
    expect(validateDailyTarget({ goal: "1000", completed: "1200", days: "20", restDays: "4" }).ok).toBe(false);
    expect(validateDailyTarget({ goal: "1000", completed: "200", days: "20", restDays: "20" }).ok).toBe(false);
    expect(validateDailyTarget({ goal: "1000.5", completed: "200", days: "20", restDays: "4" }).ok).toBe(false);
  });
});

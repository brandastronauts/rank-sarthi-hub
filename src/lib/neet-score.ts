/**
 * NEET (UG) marks calculation — official 2026 rule.
 *   180 questions, 720 maximum marks, +4 correct, -1 incorrect, 0 unanswered.
 * Official final-key edge case: a question that is dropped, wrong, or has no
 * correct option is awarded +4 to every candidate who appeared, regardless of
 * whether that candidate attempted it. Those questions are counted separately
 * as `bonus` and must be part of the 180 classification.
 *
 * This module contains marks arithmetic ONLY. It never produces a rank,
 * percentile, expected cutoff or admission probability.
 */

export const NEET_TOTAL_QUESTIONS = 180;
export const NEET_MAX_MARKS = 720;
export const MARK_CORRECT = 4;
export const MARK_INCORRECT = -1;

export interface ScoreInput {
  correct: number;
  incorrect: number;
  unanswered: number;
  bonus: number;
}

export interface ScoreResult {
  positiveMarks: number;
  negativeMarks: number;
  bonusMarks: number;
  score: number;
  classified: number;
}

export type ValidationResult = { ok: true; value: ScoreInput } | { ok: false; errors: string[] };

const FIELD_LABEL: Record<keyof ScoreInput, string> = {
  correct: "Correct answers",
  incorrect: "Incorrect answers",
  unanswered: "Unanswered questions",
  bonus: "Official all-candidate bonus questions",
};

/** Strict parse: integers only, 0–180, no decimals, no blanks, no text. */
export function validateScoreInput(raw: Record<keyof ScoreInput, string>): ValidationResult {
  const errors: string[] = [];
  const value: ScoreInput = { correct: 0, incorrect: 0, unanswered: 0, bonus: 0 };

  (Object.keys(FIELD_LABEL) as (keyof ScoreInput)[]).forEach((key) => {
    const input = (raw[key] ?? "").trim();
    if (input === "") {
      errors.push(`${FIELD_LABEL[key]}: enter a whole number between 0 and ${NEET_TOTAL_QUESTIONS}.`);
      return;
    }
    if (!/^\d+$/.test(input)) {
      errors.push(
        `${FIELD_LABEL[key]}: only whole numbers are accepted — no decimals, negative values or text.`,
      );
      return;
    }
    const n = Number(input);
    if (n > NEET_TOTAL_QUESTIONS) {
      errors.push(`${FIELD_LABEL[key]}: cannot be more than ${NEET_TOTAL_QUESTIONS}.`);
      return;
    }
    value[key] = n;
  });

  if (errors.length) return { ok: false, errors };

  const classified = value.correct + value.incorrect + value.unanswered + value.bonus;
  if (classified !== NEET_TOTAL_QUESTIONS) {
    errors.push(
      `Correct + incorrect + unanswered + bonus must be exactly ${NEET_TOTAL_QUESTIONS}. You classified ${classified}.`,
    );
    return { ok: false, errors };
  }

  return { ok: true, value };
}

export function calculateScore(input: ScoreInput): ScoreResult {
  const positiveMarks = input.correct * MARK_CORRECT;
  const negativeMarks = input.incorrect * MARK_INCORRECT;
  const bonusMarks = input.bonus * MARK_CORRECT;
  return {
    positiveMarks,
    negativeMarks,
    bonusMarks,
    score: positiveMarks + negativeMarks + bonusMarks,
    classified: input.correct + input.incorrect + input.unanswered + input.bonus,
  };
}

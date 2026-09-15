/**
 * Rank Sarthi free tools — deterministic calculation engine.
 *
 * Pure TypeScript only: no React, no network, no storage. Every calculator UI
 * imports from here so the arithmetic is unit-testable in isolation.
 *
 * Nothing in this file predicts rank, percentile, cutoff or admission.
 */

/* ------------------------------------------------------------------ *
 * Versioned exam rule configuration
 * ------------------------------------------------------------------ */

export interface ExamRuleConfig {
  ruleVersion: string;
  verifiedForCycle: string;
  authority: string;
  lastVerified: string;
}

export const JEE_MAIN_RULES = {
  ruleVersion: "JEE_MAIN_2026",
  verifiedForCycle: "2026",
  authority: "NTA — official JEE Main information bulletin",
  lastVerified: "15 September 2026",
  questions: 75,
  perSubject: 25,
  maxMarks: 300,
  marksPerCorrect: 4,
  penaltyPerWrong: 1,
} as const;

export const NEET_RULES = {
  ruleVersion: "NEET_UG_2026",
  verifiedForCycle: "2026",
  authority: "NTA — official NEET (UG) information bulletin",
  lastVerified: "10 September 2026",
  questions: 180,
  maxMarks: 720,
  marksPerCorrect: 4,
  penaltyPerWrong: 1,
} as const;

export const NDA_RULES = {
  ruleVersion: "NDA_2026",
  verifiedForCycle: "2026",
  authority: "UPSC — official NDA & NA examination notification",
  lastVerified: "15 September 2026",
  mathematics: { questions: 120, maxMarks: 300 },
  gat: { questions: 150, maxMarks: 600 },
  maxMarks: 900,
} as const;

export const NDA_MATHS_PER_QUESTION = NDA_RULES.mathematics.maxMarks / NDA_RULES.mathematics.questions; // 2.5
export const NDA_MATHS_PENALTY = NDA_MATHS_PER_QUESTION / 3; // 0.8333...
export const NDA_GAT_PER_QUESTION = NDA_RULES.gat.maxMarks / NDA_RULES.gat.questions; // 4
export const NDA_GAT_PENALTY = NDA_GAT_PER_QUESTION / 3; // 1.3333...

/* ------------------------------------------------------------------ *
 * Input parsing / validation primitives
 * ------------------------------------------------------------------ */

export type FieldErrors = Record<string, string>;

export type Parsed<T> = { ok: true; value: T; errors: FieldErrors } | { ok: false; errors: FieldErrors };

export interface NumberRule {
  label: string;
  integer?: boolean;
  min?: number;
  max?: number;
  /** Treat empty string as this value instead of an error. */
  emptyAs?: number;
}

export function parseNumber(raw: string, rule: NumberRule): { ok: true; value: number } | { ok: false; error: string } {
  const text = (raw ?? "").trim();
  if (text === "") {
    if (rule.emptyAs !== undefined) return { ok: true, value: rule.emptyAs };
    return { ok: false, error: `${rule.label} is required.` };
  }
  if (!/^-?\d*\.?\d+$/.test(text)) {
    return { ok: false, error: `${rule.label} must be a number.` };
  }
  const value = Number(text);
  if (!Number.isFinite(value)) return { ok: false, error: `${rule.label} must be a number.` };
  if (rule.integer && !Number.isInteger(value)) {
    return { ok: false, error: `${rule.label} must be a whole number.` };
  }
  const min = rule.min ?? 0;
  if (value < min) return { ok: false, error: `${rule.label} cannot be less than ${min}.` };
  if (rule.max !== undefined && value > rule.max) {
    return { ok: false, error: `${rule.label} cannot be more than ${rule.max}.` };
  }
  return { ok: true, value };
}

export function parseFields<K extends string>(
  raw: Record<K, string>,
  rules: Record<K, NumberRule>,
): Parsed<Record<K, number>> {
  const errors: FieldErrors = {};
  const value = {} as Record<K, number>;
  for (const key of Object.keys(rules) as K[]) {
    const parsed = parseNumber(raw[key] ?? "", rules[key]);
    if (parsed.ok) value[key] = parsed.value;
    else errors[key] = parsed.error;
  }
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, value, errors: {} };
}

export function fieldError(errors: FieldErrors, key: string): string | undefined {
  return errors[key];
}

export function percent(part: number, whole: number): number {
  if (whole <= 0) return 0;
  return (part / whole) * 100;
}

export function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function display2(value: number): string {
  return value.toFixed(2);
}

/* ------------------------------------------------------------------ *
 * Tool 1 — JEE Main score
 * ------------------------------------------------------------------ */

export interface MarksInput {
  correct: number;
  incorrect: number;
  unattempted: number;
  bonus: number;
}

export interface MarksResult {
  score: number;
  maxMarks: number;
  positiveMarks: number;
  negativeMarks: number;
  bonusMarks: number;
  attempted: number;
  unattempted: number;
  accuracy: number;
  attemptRate: number;
}

export function jeeMainScore(input: MarksInput): MarksResult {
  const { correct, incorrect, unattempted, bonus } = input;
  const positiveMarks = correct * JEE_MAIN_RULES.marksPerCorrect;
  const negativeMarks = incorrect * JEE_MAIN_RULES.penaltyPerWrong;
  const bonusMarks = bonus * JEE_MAIN_RULES.marksPerCorrect;
  const attempted = correct + incorrect;
  return {
    score: positiveMarks - negativeMarks + bonusMarks,
    maxMarks: JEE_MAIN_RULES.maxMarks,
    positiveMarks,
    negativeMarks,
    bonusMarks,
    attempted,
    unattempted,
    accuracy: percent(correct, attempted),
    attemptRate: percent(attempted, JEE_MAIN_RULES.questions),
  };
}

export function validateJeeMain(raw: Record<keyof MarksInput, string>): Parsed<MarksInput> {
  const parsed = parseFields(raw, {
    correct: { label: "Correct answers", integer: true, max: JEE_MAIN_RULES.questions },
    incorrect: { label: "Incorrect answers", integer: true, max: JEE_MAIN_RULES.questions },
    unattempted: { label: "Unattempted questions", integer: true, max: JEE_MAIN_RULES.questions, emptyAs: 0 },
    bonus: { label: "Official dropped/bonus questions", integer: true, max: JEE_MAIN_RULES.questions, emptyAs: 0 },
  });
  if (!parsed.ok) return parsed;

  const { correct, incorrect, unattempted, bonus } = parsed.value;
  const total = correct + incorrect + unattempted + bonus;
  if (total !== JEE_MAIN_RULES.questions) {
    return {
      ok: false,
      errors: {
        form: `Correct, incorrect, unattempted and official bonus questions must add up to exactly ${JEE_MAIN_RULES.questions}. Your entries add up to ${total}.`,
      },
    };
  }
  return parsed;
}

export interface SubjectCounts {
  correct: number;
  incorrect: number;
  unattempted: number;
}

export function validateJeeMainSubjects(
  subjects: { key: string; label: string; counts: Record<keyof SubjectCounts, string> }[],
  bonusRaw: string,
): Parsed<{ subjects: { key: string; label: string; counts: SubjectCounts }[]; bonus: number }> {
  const errors: FieldErrors = {};
  const out: { key: string; label: string; counts: SubjectCounts }[] = [];

  for (const subject of subjects) {
    const parsed = parseFields(subject.counts, {
      correct: { label: `${subject.label} correct`, integer: true, max: JEE_MAIN_RULES.perSubject },
      incorrect: { label: `${subject.label} incorrect`, integer: true, max: JEE_MAIN_RULES.perSubject },
      unattempted: { label: `${subject.label} unattempted`, integer: true, max: JEE_MAIN_RULES.perSubject, emptyAs: 0 },
    });
    if (!parsed.ok) {
      for (const [k, v] of Object.entries(parsed.errors)) errors[`${subject.key}-${k}`] = v;
      continue;
    }
    const sum = parsed.value.correct + parsed.value.incorrect + parsed.value.unattempted;
    if (sum > JEE_MAIN_RULES.perSubject) {
      errors[`${subject.key}-form`] =
        `${subject.label} responses add up to ${sum}. Each subject has only ${JEE_MAIN_RULES.perSubject} questions.`;
      continue;
    }
    out.push({ key: subject.key, label: subject.label, counts: parsed.value });
  }

  const bonus = parseNumber(bonusRaw, {
    label: "Official dropped/bonus questions",
    integer: true,
    max: JEE_MAIN_RULES.questions,
    emptyAs: 0,
  });
  if (!bonus.ok) errors["bonus"] = bonus.error;

  if (Object.keys(errors).length) return { ok: false, errors };

  const bonusValue = bonus.ok ? bonus.value : 0;
  const total =
    out.reduce((sum, s) => sum + s.counts.correct + s.counts.incorrect + s.counts.unattempted, 0) + bonusValue;
  if (total !== JEE_MAIN_RULES.questions) {
    return {
      ok: false,
      errors: {
        form: `All subject responses plus official bonus questions must add up to exactly ${JEE_MAIN_RULES.questions}. Your entries add up to ${total}.`,
      },
    };
  }
  return { ok: true, value: { subjects: out, bonus: bonusValue }, errors: {} };
}

export function subjectScore(counts: SubjectCounts): number {
  return counts.correct * JEE_MAIN_RULES.marksPerCorrect - counts.incorrect * JEE_MAIN_RULES.penaltyPerWrong;
}

/* ------------------------------------------------------------------ *
 * Tool 3 — NDA written score (Mathematics + GAT)
 * ------------------------------------------------------------------ */

export interface NdaPaperInput {
  correct: number;
  wrong: number;
  unanswered: number;
}

export interface NdaPaperResult {
  score: number;
  positiveMarks: number;
  negativeMarks: number;
  attempted: number;
  accuracy: number;
  attemptRate: number;
  maxMarks: number;
}

export interface NdaResult {
  mathematics: NdaPaperResult;
  gat: NdaPaperResult;
  writtenScore: number;
  maxMarks: number;
}

function ndaPaper(
  input: NdaPaperInput,
  perQuestion: number,
  penalty: number,
  questions: number,
  maxMarks: number,
): NdaPaperResult {
  const positiveMarks = input.correct * perQuestion;
  const negativeMarks = input.wrong * penalty;
  const attempted = input.correct + input.wrong;
  return {
    score: positiveMarks - negativeMarks,
    positiveMarks,
    negativeMarks,
    attempted,
    accuracy: percent(input.correct, attempted),
    attemptRate: percent(attempted, questions),
    maxMarks,
  };
}

export function ndaScore(maths: NdaPaperInput, gat: NdaPaperInput): NdaResult {
  const mathematics = ndaPaper(
    maths,
    NDA_MATHS_PER_QUESTION,
    NDA_MATHS_PENALTY,
    NDA_RULES.mathematics.questions,
    NDA_RULES.mathematics.maxMarks,
  );
  const gatResult = ndaPaper(gat, NDA_GAT_PER_QUESTION, NDA_GAT_PENALTY, NDA_RULES.gat.questions, NDA_RULES.gat.maxMarks);
  return {
    mathematics,
    gat: gatResult,
    writtenScore: mathematics.score + gatResult.score,
    maxMarks: NDA_RULES.maxMarks,
  };
}

export function validateNdaPaper(
  raw: Record<keyof NdaPaperInput, string>,
  paper: "mathematics" | "gat",
): Parsed<NdaPaperInput> {
  const config = paper === "mathematics" ? NDA_RULES.mathematics : NDA_RULES.gat;
  const name = paper === "mathematics" ? "Mathematics" : "GAT";
  const parsed = parseFields(raw, {
    correct: { label: `${name} correct answers`, integer: true, max: config.questions },
    wrong: { label: `${name} wrong answers`, integer: true, max: config.questions },
    unanswered: { label: `${name} unanswered questions`, integer: true, max: config.questions, emptyAs: 0 },
  });
  if (!parsed.ok) return parsed;
  const total = parsed.value.correct + parsed.value.wrong + parsed.value.unanswered;
  if (total !== config.questions) {
    return {
      ok: false,
      errors: {
        form: `${name} responses must add up to exactly ${config.questions}. Your entries add up to ${total}.`,
      },
    };
  }
  return parsed;
}

/* ------------------------------------------------------------------ *
 * Tool 4 — JEE Advanced, configurable section scoring
 * ------------------------------------------------------------------ */

export interface AdvancedSectionConfig {
  id: string;
  name: string;
  paper: 1 | 2;
  questions: number;
  fullCorrectMarks: number;
  wrongPenalty: number;
  unattemptedMarks: number;
  partialEnabled: boolean;
  partialAMarks: number;
  partialBMarks: number;
  partialCMarks: number;
}

export interface AdvancedSectionCounts {
  fullCorrect: number;
  partialA: number;
  partialB: number;
  partialC: number;
  wrong: number;
  unattempted: number;
}

export interface AdvancedSectionResult {
  id: string;
  name: string;
  paper: 1 | 2;
  score: number;
  positiveMarks: number;
  partialMarks: number;
  negativeMarks: number;
  unattemptedMarks: number;
}

export function advancedSectionScore(
  config: AdvancedSectionConfig,
  counts: AdvancedSectionCounts,
): AdvancedSectionResult {
  const positiveMarks = counts.fullCorrect * config.fullCorrectMarks;
  const partialMarks = config.partialEnabled
    ? counts.partialA * config.partialAMarks +
      counts.partialB * config.partialBMarks +
      counts.partialC * config.partialCMarks
    : 0;
  const negativeMarks = counts.wrong * config.wrongPenalty;
  const unattemptedMarks = counts.unattempted * config.unattemptedMarks;
  return {
    id: config.id,
    name: config.name,
    paper: config.paper,
    score: positiveMarks + partialMarks - negativeMarks + unattemptedMarks,
    positiveMarks,
    partialMarks,
    negativeMarks,
    unattemptedMarks,
  };
}

export interface AdvancedResult {
  sections: AdvancedSectionResult[];
  paper1: number;
  paper2: number;
  combined: number;
  positiveMarks: number;
  partialMarks: number;
  negativeMarks: number;
}

export function advancedScore(
  entries: { config: AdvancedSectionConfig; counts: AdvancedSectionCounts }[],
): AdvancedResult {
  const sections = entries.map((e) => advancedSectionScore(e.config, e.counts));
  const sum = (predicate: (s: AdvancedSectionResult) => boolean) =>
    sections.filter(predicate).reduce((total, s) => total + s.score, 0);
  return {
    sections,
    paper1: sum((s) => s.paper === 1),
    paper2: sum((s) => s.paper === 2),
    combined: sections.reduce((t, s) => t + s.score, 0),
    positiveMarks: sections.reduce((t, s) => t + s.positiveMarks, 0),
    partialMarks: sections.reduce((t, s) => t + s.partialMarks, 0),
    negativeMarks: sections.reduce((t, s) => t + s.negativeMarks, 0),
  };
}

export function validateAdvancedSection(
  config: AdvancedSectionConfig,
  counts: AdvancedSectionCounts,
): { ok: boolean; error?: string } {
  const values = Object.values(counts);
  if (values.some((v) => !Number.isFinite(v) || v < 0 || !Number.isInteger(v))) {
    return { ok: false, error: `${config.name}: response counts must be whole numbers of 0 or more.` };
  }
  const total = values.reduce((a, b) => a + b, 0);
  if (total !== config.questions) {
    return {
      ok: false,
      error: `${config.name}: response counts add up to ${total}, but the section has ${config.questions} questions.`,
    };
  }
  return { ok: true };
}

/* ------------------------------------------------------------------ *
 * Tool 5 — Negative marking
 * ------------------------------------------------------------------ */

export interface NegativeMarkingInput {
  totalQuestions: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  marksPerCorrect: number;
  penaltyPerWrong: number;
}

export interface NegativeMarkingResult {
  score: number;
  positiveMarks: number;
  negativeMarks: number;
  attempted: number;
  accuracy: number;
  attemptRate: number;
  maxMarks: number;
}

export function negativeMarkingScore(input: NegativeMarkingInput): NegativeMarkingResult {
  const positiveMarks = input.correct * input.marksPerCorrect;
  const negativeMarks = input.incorrect * input.penaltyPerWrong;
  const attempted = input.correct + input.incorrect;
  return {
    score: positiveMarks - negativeMarks,
    positiveMarks,
    negativeMarks,
    attempted,
    accuracy: percent(input.correct, attempted),
    attemptRate: percent(attempted, input.totalQuestions),
    maxMarks: input.totalQuestions * input.marksPerCorrect,
  };
}

export function validateNegativeMarking(raw: Record<keyof NegativeMarkingInput, string>): Parsed<NegativeMarkingInput> {
  const parsed = parseFields(raw, {
    totalQuestions: { label: "Total questions", integer: true, min: 1 },
    correct: { label: "Correct answers", integer: true },
    incorrect: { label: "Incorrect answers", integer: true },
    unattempted: { label: "Unattempted questions", integer: true, emptyAs: 0 },
    marksPerCorrect: { label: "Marks per correct answer", min: 0 },
    penaltyPerWrong: { label: "Penalty per wrong answer", min: 0, emptyAs: 0 },
  });
  if (!parsed.ok) return parsed;
  const v = parsed.value;
  const total = v.correct + v.incorrect + v.unattempted;
  if (total !== v.totalQuestions) {
    return {
      ok: false,
      errors: {
        form: `Correct, incorrect and unattempted must add up to the total of ${v.totalQuestions}. Your entries add up to ${total}.`,
      },
    };
  }
  return parsed;
}

/* ------------------------------------------------------------------ *
 * Tool 6 — Accuracy
 * ------------------------------------------------------------------ */

export interface AccuracyInput {
  total: number;
  attempted: number;
  correct: number;
}

export interface AccuracyResult {
  accuracy: number;
  errorRate: number;
  attemptRate: number;
  overallCorrectRate: number;
  wrong: number;
  unattempted: number;
}

export function accuracyResult(input: AccuracyInput): AccuracyResult {
  const wrong = input.attempted - input.correct;
  const unattempted = input.total - input.attempted;
  return {
    accuracy: input.attempted > 0 ? percent(input.correct, input.attempted) : 0,
    errorRate: input.attempted > 0 ? percent(wrong, input.attempted) : 0,
    attemptRate: percent(input.attempted, input.total),
    overallCorrectRate: percent(input.correct, input.total),
    wrong,
    unattempted,
  };
}

export function validateAccuracy(raw: Record<keyof AccuracyInput, string>): Parsed<AccuracyInput> {
  const parsed = parseFields(raw, {
    total: { label: "Total questions", integer: true, min: 1 },
    attempted: { label: "Attempted questions", integer: true },
    correct: { label: "Correct answers", integer: true },
  });
  if (!parsed.ok) return parsed;
  const v = parsed.value;
  const errors: FieldErrors = {};
  if (v.attempted > v.total) errors["attempted"] = "Attempted questions cannot be more than the total questions.";
  if (v.correct > v.attempted) errors["correct"] = "Correct answers cannot be more than attempted questions.";
  return Object.keys(errors).length ? { ok: false, errors } : parsed;
}

/* ------------------------------------------------------------------ *
 * Tool 7 — Target score
 * ------------------------------------------------------------------ */

export interface TargetScoreInput {
  target: number;
  totalQuestions: number;
  marksPerCorrect: number;
  penaltyPerWrong: number;
}

export interface TargetCombination {
  correct: number;
  wrong: number;
  unattempted: number;
  score: number;
}

export interface TargetScoreResult {
  minimumCorrectIfNoWrong: number;
  maxWrongAllowed: number;
  feasible: boolean;
  maximumPossibleScore: number;
  combinations: TargetCombination[];
}

export function targetScoreResult(input: TargetScoreInput, scenarioCount = 6): TargetScoreResult {
  const { target, totalQuestions: q, marksPerCorrect: p, penaltyPerWrong: n } = input;
  const feasibleAll: TargetCombination[] = [];

  for (let wrong = 0; wrong <= q; wrong++) {
    const correct = Math.ceil((target + n * wrong) / p - 1e-9);
    if (correct < 0) continue;
    if (correct + wrong > q) continue;
    feasibleAll.push({
      correct,
      wrong,
      unattempted: q - correct - wrong,
      score: correct * p - wrong * n,
    });
  }

  const minimumCorrectIfNoWrong = Math.max(0, Math.ceil(target / p - 1e-9));
  const maxWrongAllowed = feasibleAll.length ? feasibleAll[feasibleAll.length - 1]!.wrong : 0;

  // Evenly spread scenarios across the feasible wrong-answer range.
  const combinations: TargetCombination[] = [];
  if (feasibleAll.length) {
    const step = Math.max(1, Math.floor((feasibleAll.length - 1) / (scenarioCount - 1)) || 1);
    for (let i = 0; i < feasibleAll.length && combinations.length < scenarioCount; i += step) {
      combinations.push(feasibleAll[i]!);
    }
    const last = feasibleAll[feasibleAll.length - 1]!;
    if (!combinations.some((c) => c.wrong === last.wrong)) {
      if (combinations.length >= scenarioCount) combinations.pop();
      combinations.push(last);
    }
  }

  return {
    minimumCorrectIfNoWrong,
    maxWrongAllowed,
    feasible: feasibleAll.length > 0,
    maximumPossibleScore: q * p,
    combinations,
  };
}

export function validateTargetScore(raw: Record<keyof TargetScoreInput, string>): Parsed<TargetScoreInput> {
  const parsed = parseFields(raw, {
    target: { label: "Target score", min: 0 },
    totalQuestions: { label: "Total questions", integer: true, min: 1 },
    marksPerCorrect: { label: "Marks per correct answer", min: 0.01 },
    penaltyPerWrong: { label: "Penalty per wrong answer", min: 0, emptyAs: 0 },
  });
  if (!parsed.ok) return parsed;
  const v = parsed.value;
  const maximum = v.totalQuestions * v.marksPerCorrect;
  if (v.target > maximum) {
    return {
      ok: false,
      errors: {
        target: `A target of ${v.target} is above the theoretical maximum of ${round2(maximum)} marks for ${v.totalQuestions} questions at ${v.marksPerCorrect} marks each.`,
      },
    };
  }
  return parsed;
}

/* ------------------------------------------------------------------ *
 * Tool 8 — Correct answers needed for planned attempts
 * ------------------------------------------------------------------ */

export interface CorrectNeededInput {
  target: number;
  attempts: number;
  marksPerCorrect: number;
  penaltyPerWrong: number;
}

export interface CorrectNeededResult {
  minimumCorrect: number;
  maximumWrong: number;
  requiredAccuracy: number;
  resultingScore: number;
  attempts: number;
  reachable: boolean;
}

export function correctAnswersNeeded(input: CorrectNeededInput): CorrectNeededResult {
  const { target, attempts: a, marksPerCorrect: p, penaltyPerWrong: n } = input;
  const minimumCorrect = Math.max(0, Math.ceil((target + n * a) / (p + n) - 1e-9));
  const reachable = minimumCorrect <= a;
  const correct = reachable ? minimumCorrect : a;
  const wrong = a - correct;
  return {
    minimumCorrect,
    maximumWrong: reachable ? wrong : 0,
    requiredAccuracy: a > 0 ? percent(correct, a) : 0,
    resultingScore: correct * p - wrong * n,
    attempts: a,
    reachable,
  };
}

export function validateCorrectNeeded(raw: Record<keyof CorrectNeededInput, string>): Parsed<CorrectNeededInput> {
  return parseFields(raw, {
    target: { label: "Target score", min: 0 },
    attempts: { label: "Planned attempts", integer: true, min: 1 },
    marksPerCorrect: { label: "Marks per correct answer", min: 0.01 },
    penaltyPerWrong: { label: "Penalty per wrong answer", min: 0, emptyAs: 0 },
  });
}

/* ------------------------------------------------------------------ *
 * Tool 9 — Study time available
 * ------------------------------------------------------------------ */

export interface StudyTimeInput {
  startDate: string; // yyyy-mm-dd
  endDate: string; // yyyy-mm-dd (exam day, excluded from study days)
  weekdayHours: number;
  weekendHours: number;
  bufferDays: number;
}

export interface StudyTimeResult {
  daysRemaining: number;
  studyDays: number;
  effectiveStudyDays: number;
  weekdayCount: number;
  weekendCount: number;
  weekdayHours: number;
  weekendHours: number;
  plannedHours: number;
  bufferHours: number;
  effectiveHours: number;
  averageHoursPerDay: number;
  averageHoursPerWeek: number;
}

function toUtcDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function studyTimeResult(input: StudyTimeInput): StudyTimeResult {
  const start = toUtcDate(input.startDate)!;
  const end = toUtcDate(input.endDate)!;
  const dayMs = 86_400_000;
  const daysRemaining = Math.round((end.getTime() - start.getTime()) / dayMs);

  let weekdayCount = 0;
  let weekendCount = 0;
  for (let t = start.getTime(); t < end.getTime(); t += dayMs) {
    const day = new Date(t).getUTCDay();
    if (day === 0 || day === 6) weekendCount++;
    else weekdayCount++;
  }

  const studyDays = weekdayCount + weekendCount;
  const weekdayHours = weekdayCount * input.weekdayHours;
  const weekendHours = weekendCount * input.weekendHours;
  const plannedHours = weekdayHours + weekendHours;
  const averagePlanned = studyDays > 0 ? plannedHours / studyDays : 0;
  const bufferDays = Math.min(input.bufferDays, studyDays);
  const bufferHours = bufferDays * averagePlanned;
  const effectiveHours = Math.max(0, plannedHours - bufferHours);
  const effectiveStudyDays = Math.max(0, studyDays - bufferDays);

  return {
    daysRemaining,
    studyDays,
    effectiveStudyDays,
    weekdayCount,
    weekendCount,
    weekdayHours,
    weekendHours,
    plannedHours,
    bufferHours,
    effectiveHours,
    averageHoursPerDay: effectiveStudyDays > 0 ? effectiveHours / effectiveStudyDays : 0,
    averageHoursPerWeek: effectiveStudyDays > 0 ? (effectiveHours / effectiveStudyDays) * 7 : 0,
  };
}

export function validateStudyTime(raw: Record<keyof StudyTimeInput, string>): Parsed<StudyTimeInput> {
  const errors: FieldErrors = {};
  const start = toUtcDate((raw.startDate ?? "").trim());
  const end = toUtcDate((raw.endDate ?? "").trim());
  if (!start) errors["startDate"] = "Enter a valid start date.";
  if (!end) errors["endDate"] = "Enter a valid exam or end date.";
  if (start && end && end.getTime() <= start.getTime()) {
    errors["endDate"] = "The exam or end date must be after the start date.";
  }

  const numbers = parseFields(
    {
      weekdayHours: raw.weekdayHours ?? "",
      weekendHours: raw.weekendHours ?? "",
      bufferDays: raw.bufferDays ?? "",
    },
    {
      weekdayHours: { label: "Weekday study hours", min: 0, max: 24 },
      weekendHours: { label: "Weekend study hours", min: 0, max: 24 },
      bufferDays: { label: "Reserved / buffer days", integer: true, min: 0, emptyAs: 0 },
    },
  );
  if (!numbers.ok) Object.assign(errors, numbers.errors);

  if (Object.keys(errors).length || !numbers.ok) return { ok: false, errors };

  const value: StudyTimeInput = {
    startDate: raw.startDate.trim(),
    endDate: raw.endDate.trim(),
    weekdayHours: numbers.value.weekdayHours,
    weekendHours: numbers.value.weekendHours,
    bufferDays: numbers.value.bufferDays,
  };
  const studyDays = Math.round((toUtcDate(value.endDate)!.getTime() - toUtcDate(value.startDate)!.getTime()) / 86_400_000);
  if (value.bufferDays >= studyDays) {
    return {
      ok: false,
      errors: { bufferDays: `Buffer days must be fewer than the ${studyDays} study days between your dates.` },
    };
  }
  return { ok: true, value, errors: {} };
}

/* ------------------------------------------------------------------ *
 * Tool 10 — Daily question target
 * ------------------------------------------------------------------ */

export interface DailyTargetInput {
  goal: number;
  completed: number;
  days: number;
  restDays: number;
}

export interface DailyTargetResult {
  remaining: number;
  activeDays: number;
  dailyTarget: number;
  weeklyEquivalent: number;
  completionPercent: number;
  milestones: { label: string; questions: number }[];
}

export function dailyTargetResult(input: DailyTargetInput): DailyTargetResult {
  const remaining = Math.max(input.goal - input.completed, 0);
  const activeDays = input.days - input.restDays;
  const dailyTarget = remaining === 0 ? 0 : Math.ceil(remaining / activeDays);
  return {
    remaining,
    activeDays,
    dailyTarget,
    weeklyEquivalent: dailyTarget * 7,
    completionPercent: percent(input.completed, input.goal),
    milestones: [25, 50, 75, 100].map((pct) => ({
      label: `${pct}%`,
      questions: Math.ceil((input.goal * pct) / 100),
    })),
  };
}

export function validateDailyTarget(raw: Record<keyof DailyTargetInput, string>): Parsed<DailyTargetInput> {
  const parsed = parseFields(raw, {
    goal: { label: "Total question goal", integer: true, min: 1 },
    completed: { label: "Questions already completed", integer: true, emptyAs: 0 },
    days: { label: "Days available", integer: true, min: 1 },
    restDays: { label: "Planned rest days", integer: true, emptyAs: 0 },
  });
  if (!parsed.ok) return parsed;
  const v = parsed.value;
  const errors: FieldErrors = {};
  if (v.completed > v.goal) errors["completed"] = "Completed questions cannot be more than the total goal.";
  if (v.restDays >= v.days) errors["restDays"] = "Rest days must be fewer than the days available.";
  return Object.keys(errors).length ? { ok: false, errors } : parsed;
}

/* ------------------------------------------------------------------ *
 * Shared presets for the generic marks tools
 * ------------------------------------------------------------------ */

export interface MarkingPreset {
  id: string;
  label: string;
  totalQuestions: number;
  marksPerCorrect: number;
  penaltyPerWrong: number;
  penaltyLabel: string;
  note?: string;
}

export const MARKING_PRESETS: MarkingPreset[] = [
  {
    id: "jee-main",
    label: "JEE Main",
    totalQuestions: 75,
    marksPerCorrect: 4,
    penaltyPerWrong: 1,
    penaltyLabel: "1",
    note: "JEE Main Paper 1: 75 questions, +4 correct, −1 incorrect.",
  },
  {
    id: "neet",
    label: "NEET (UG)",
    totalQuestions: 180,
    marksPerCorrect: 4,
    penaltyPerWrong: 1,
    penaltyLabel: "1",
    note: "NEET (UG): 180 questions, +4 correct, −1 incorrect.",
  },
  {
    id: "nda-maths",
    label: "NDA Mathematics",
    totalQuestions: 120,
    marksPerCorrect: 2.5,
    penaltyPerWrong: NDA_MATHS_PENALTY,
    penaltyLabel: "2.5 ÷ 3",
    note: "NDA Mathematics: 120 questions, 2.5 marks each, one-third penalty (2.5 ÷ 3).",
  },
  {
    id: "nda-gat",
    label: "NDA GAT",
    totalQuestions: 150,
    marksPerCorrect: 4,
    penaltyPerWrong: NDA_GAT_PENALTY,
    penaltyLabel: "4 ÷ 3",
    note: "NDA GAT: 150 questions, 4 marks each, one-third penalty (4 ÷ 3).",
  },
  {
    id: "custom",
    label: "Custom",
    totalQuestions: 100,
    marksPerCorrect: 1,
    penaltyPerWrong: 0,
    penaltyLabel: "your value",
    note: "Enter the marking scheme printed in your own paper instructions.",
  },
];

export function presetById(id: string): MarkingPreset {
  return MARKING_PRESETS.find((p) => p.id === id) ?? MARKING_PRESETS[MARKING_PRESETS.length - 1]!;
}

/**
 * Rank Sarthi — core content contracts.
 * These types are the boundary between data and UI. They are deliberately
 * CMS-portable: every field is serialisable JSON, no HTML strings anywhere.
 */

/* ------------------------------------------------------------------ */
/* URL registry                                                        */
/* ------------------------------------------------------------------ */

export type Platform = "main" | "jee" | "neet" | "nda";

export type TemplateId =
  | "T01" | "T02" | "T03" | "T04" | "T05" | "T06" | "T07" | "T08" | "T09" | "T10"
  | "T11" | "T12" | "T13" | "T14" | "T15" | "T16" | "T17" | "T18" | "T19" | "T20"
  | "T21" | "T22" | "T23" | "T24" | "T25" | "T26" | "T27" | "T28" | "T29";

/** Page lifecycle. Independent of whether optional proof blocks have data. */
export type BuildStatus = "planned" | "building" | "built";

/** Indexation decision. Independent of buildStatus. */
export type Indexation = "index" | "noindex" | "blocked";

export interface UrlRecord {
  /** Path only, no domain, no trailing slash (root is "/"). */
  url: string;
  name: string;
  template: TemplateId;
  platform: Platform;
  /** Section label from the locked URL workbook. */
  section: string;
  /** P1 | P2 | P3 from the workbook. */
  priority: string;
  /** Parent path for breadcrumbs / orphan checks. */
  parent: string | null;
  /** Schema intent as recorded in the workbook (advisory, not emitted verbatim). */
  schemaType: string;
  buildStatus: BuildStatus;
  indexation: Indexation;
  contentOwner: string;
  sourceRequirement: string;
  /** ISO date the factual content was last verified against sources. */
  lastVerified?: string;
}

/* ------------------------------------------------------------------ */
/* Safe structured rich text (no HTML strings, no dangerouslySetInnerHTML) */
/* ------------------------------------------------------------------ */

export interface InlineText {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  /** Internal path or absolute external URL. */
  href?: string;
}

export type RichTextNode =
  | { type: "paragraph"; children: InlineText[] }
  | { type: "heading"; level: 2 | 3 | 4; id?: string; children: InlineText[] }
  | { type: "list"; ordered?: boolean; items: InlineText[][] }
  | { type: "note"; tone?: "info" | "caution" | "source"; children: InlineText[] }
  | { type: "definition"; term: string; children: InlineText[] };

export type RichText = RichTextNode[];

/* ------------------------------------------------------------------ */
/* Sources, people, provenance                                         */
/* ------------------------------------------------------------------ */

export type SourceType = "official" | "official-pdf" | "first-party" | "textbook" | "news";

export interface SourceRef {
  id: string;
  label: string;
  publisher: string;
  url?: string;
  sourceType: SourceType;
  /** ISO date this reference was last checked. */
  lastVerified?: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  /** Only true when identity and credentials are verified by us. */
  verified: boolean;
  profileUrl?: string;
  image?: string;
}

/* ------------------------------------------------------------------ */
/* Platform / exam / subject / syllabus                                */
/* ------------------------------------------------------------------ */

export interface PlatformData {
  slug: Exclude<Platform, "main">;
  productName: string;
  examName: string;
  /** Route safety: only "built" platforms resolve; others 404. */
  buildStatus: BuildStatus;
  accent: "jee" | "neet" | "nda";
  tagline: string;
  intro: RichText;
  subjects: string[];

  /* --- T02 optional content. Every field is omittable; blocks disappear
        cleanly when the data is absent. ------------------------------- */

  /** Short masthead deck line under the H1. */
  deck?: string;
  /** Conducting body, only when factually verified. */
  conductingBody?: string;
  /** Non-cycle-dependent paper structure. No marks, dates or cutoffs. */
  papers?: { id: string; name: string; covers: string[]; note?: string }[];
  /** How the diagnostic reads this exam, in exam-specific language. */
  diagnosticLenses?: { title: string; body: string }[];
  /** Selection pathway stages (structure only, never statistics). */
  pathway?: { id: string; stage: string; body: string }[];
  /** Registry paths this platform links onward to, when they are built. */
  relatedUrls?: string[];
  /** Platform-specific FAQs (plain text, rendered by B22). */
  faqs?: { q: string; a: string }[];

  /** Provenance line for the exam-structure content. */
  sourceStatus?: string;
}


export interface ExamData {
  id: string;
  platform: Exclude<Platform, "main">;
  name: string;
  conductingBody: string;
  mode?: string;
  snapshot: { label: string; value: string; sourceRef?: string }[];
  sources: string[];
  lastVerified?: string;
}

export interface SubjectData {
  slug: string;
  platform: Exclude<Platform, "main">;
  name: string;
  units: { id: string; name: string; chapterSlugs: string[] }[];
}

export interface SyllabusUnit {
  id: string;
  name: string;
  topics: string[];
  /** Official documents that verify this unit's topic list. */
  sourceRefs?: string[];
  /** Where verified, which paper this unit belongs to. */
  variant?: "main" | "advanced" | "both";
  /** Chapter page slugs that exist for this unit, for internal linking. */
  chapterSlugs?: string[];
  note?: string;
}

export interface SyllabusSection {
  id: string;
  subject: string;
  accent?: "jee" | "neet" | "nda";
  units: SyllabusUnit[];
}

export interface SyllabusContent {
  exam: string;
  /** Structure-only until the Content Engine supplies verified topics. */
  contentStatus: ContentStatus;
  /** Editorial interpretation blocks — never a substitute for the syllabus. */
  interpretation?: { id: string; title: string; body: RichText }[];
  platform: Exclude<Platform, "main">;
  title: string;
  intro: RichText;
  officialSource: SourceRef;
  sections: SyllabusSection[];
  faqs?: FaqItem[];
  lastVerified?: string;
}

/* ------------------------------------------------------------------ */
/* Chapter engine (T06 / T07 / T08)                                    */
/* ------------------------------------------------------------------ */

export interface ConceptBlock {
  id: string;
  title: string;
  body: RichText;
  /** Optional worked intuition, still authored, never generated. */
  keyIdea?: string;
}

export interface FormulaRecord {
  id: string;
  /** Plain expression; latex optional for future MathML/KaTeX rendering. */
  expression: string;
  latex?: string;
  meaning: string;
  variables: { symbol: string; meaning: string; unit?: string }[];
  units?: string;
  useWhen: string;
  commonTrap?: string;
  /** Screen-reader friendly reading of the expression. */
  accessibleText: string;
}

export type RightsStatus = "public-official" | "licensed" | "internal-only" | "unverified";

export interface PyqRecord {
  year: number;
  paper: string;
  /** e.g. subtopic or question references, when we genuinely have them. */
  references?: string[];
  sourceRef: string;
  rightsStatus: RightsStatus;
  sourceType: SourceType;
  note?: string;
}

export type Confidence = "high" | "medium" | "low";

export interface TrendRecord {
  label: string;
  value: string;
  analysisWindow: string;
  sourceRefs: string[];
  methodology: string;
  confidence: Confidence;
  lastVerified?: string;
}

/**
 * Preparation Intelligence v1.1 taxonomy. The Content Engine classifies every
 * mistake with one of these; the UI never infers or invents a classification.
 */
export type PreparationIntelligenceTag =
  | "knowledge-gap"
  | "recall-gap"
  | "execution-error"
  | "decision-error"
  | "needs-review";

export interface MistakeRecord {
  id: string;
  mistake: string;
  why: RichText;
  fix: RichText;
  /** Supplied by the Content Engine, never derived in the template. */
  errorType: PreparationIntelligenceTag;
  sourceRefs?: string[];
}

/** Worked example — rendered only when the Content Engine supplies one. */
export interface WorkedExample {
  id: string;
  prompt: string;
  steps: RichText;
  answer?: string;
  sourceRef?: string;
}

/**
 * Chapter priority signal (B28). Every entry must carry its basis and
 * confidence; an unsourced priority claim is not renderable.
 */
export interface PriorityRecord {
  label: string;
  value: string;
  basis: string;
  confidence: Confidence;
  sourceRefs?: string[];
  lastVerified?: string;
}

/**
 * Content lifecycle, separate from buildStatus and indexation.
 * "scaffold" = structure only, "draft" = Content Engine copy under review,
 * "verified" = passed the unique-content and source gate.
 */
export type ContentStatus = "scaffold" | "draft" | "verified";

export interface FaqItem {
  question: string;
  answer: RichText;
}

/** Structured internal-link graph. Rendered as crawlable anchors. */
export interface LinkContract {
  label: string;
  url: string;
  relation: "up" | "prerequisite" | "related" | "same-unit" | "next" | "forward";
  description?: string;
}

export interface ChapterContent {
  exam: string;
  /** JEE Main vs Advanced etc., when the distinction is verified. */
  examVariant?: string;
  platform: Exclude<Platform, "main">;
  subject: string;
  subjectSlug: string;
  chapter: string;
  slug: string;
  /** Full page path; must exist in the URL registry. */
  url: string;
  /** The single search/user intent this page serves. */
  canonicalIntent: string;
  /** Answer-first block shown above the fold. */
  directAnswer: RichText;
  prerequisites: LinkContract[];
  syllabusMapping: { unit: string; topics: string[]; syllabusUrl: string };
  conceptBlocks: ConceptBlock[];
  formulas?: FormulaRecord[];
  pyqs?: PyqRecord[];
  trends?: TrendRecord[];
  mistakes?: MistakeRecord[];
  diagnosticCta?: { destinationId: string; headline: string; body: string };
  relatedChapters: LinkContract[];
  sources: string[];
  reviewerId?: string;
  authorId?: string;
  updated?: string;
  faqs?: FaqItem[];
  workedExamples?: WorkedExample[];
  priority?: PriorityRecord[];
  /** Extra internal links beyond prerequisites/related. */
  links?: LinkContract[];
  /** Optional block toggles the Content Engine may set per chapter. */
  contentFlags?: string[];
  /** Gates indexation: only "verified" chapters may be marked index. */
  contentStatus: ContentStatus;
  meta: PageMeta;
}

/* ------------------------------------------------------------------ */
/* Page metadata                                                       */
/* ------------------------------------------------------------------ */

export interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

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
  /**
   * Masthead overrides (B38). When present the masthead uses this exact
   * copy instead of the generic product framing. In-page actions only;
   * product actions still resolve through the destination contract.
   */
  hero?: {
    eyebrow?: string;
    heading?: string;
    support?: string;
    chips?: string[];
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
    /** Product CTA label; state is decided by destinations.diagnostic(). */
    productCtaLabel?: string;
  };
  /**
   * Current-cycle snapshot (B03). Cycle-dependent facts always travel with
   * their verification date, source refs and refresh trigger.
   */
  cycleSnapshot?: {
    eyebrow?: string;
    heading: string;
    rows: { label: string; value: string }[];
    note: string;
    verifiedOn: string;
    sourceRefs?: string[];
    refreshTrigger?: string;
  };
  /** Task-based routing groups (B39). Destinations resolve via the registry. */
  taskGroups?: {
    id: string;
    title: string;
    body: string;
    links: { label: string; url: string }[];
  }[];
  /** Non-cycle-dependent paper structure. */
  papers?: {
    id: string;
    name: string;
    covers: string[];
    note?: string;
    marks?: string;
    duration?: string;
  }[];
  /** Structure-block overrides (B40). */
  structure?: {
    eyebrow?: string;
    heading?: string;
    intro?: string;
    /** Official composition table, e.g. GAT Part B proportions. */
    table?: { heading: string; caption?: string; columns: [string, string]; rows: [string, string][] };
    /** Official rules that apply to the whole written stage. */
    rules?: string[];
    /** What the structure means for preparation. */
    implications?: { heading: string; points: string[] };
  };
  /** How the diagnostic reads this exam, in exam-specific language. */
  diagnosticLenses?: { title: string; body: string }[];
  /** Error taxonomy table rendered with the diagnosis block (B41). */
  errorTaxonomy?: {
    heading?: string;
    columns: [string, string, string];
    rows: { signal: string; category: string; action: string }[];
    note?: string;
  };
  /** Selection pathway stages (structure only, never statistics). */
  pathway?: {
    id: string;
    stage: string;
    body: string;
    links?: { label: string; url: string }[];
  }[];
  /** Pathway block copy overrides (B42). */
  pathwayIntro?: { heading?: string; body?: string };
  /** Registry paths this platform links onward to, when they are built. */
  relatedUrls?: string[];
  /** Pricing block (B19) stays hidden until commercial terms are verified. */
  showPricing?: boolean;
  /** Platform-specific FAQs (plain text, rendered by B22). */
  faqs?: { q: string; a: string }[];
  /** Closing band copy (B24). */
  finalCta?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
  /** Per-page metadata overrides used by the T02 route head(). */
  seo?: { title?: string; description?: string; ogTitle?: string; ogDescription?: string };

  /** Provenance line for the exam-structure content. */
  sourceStatus?: string;
  /** Source ids (see content/sources.ts) backing structural claims. */
  sourceRefs?: string[];
  /** Verification date for the sourced content on this page. */
  lastVerified?: string;
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
  /**
   * Condensed official scope for the unit, in one student-facing sentence.
   * Used when the official document defines scope as prose rather than as a
   * discrete topic list.
   */
  scope?: string;
  /**
   * Rank Sarthi editorial navigation group. NEVER an official heading; the
   * explorer labels it as an editorial layer wherever it is rendered.
   */
  group?: string;
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
  /** e.g. "14 official units" — factual count of the official document. */
  countLabel?: string;
}

/** Generic tabular payload rendered through B25. */
export interface SyllabusTable {
  id: string;
  heading: string;
  intro?: string;
  columns: string[];
  rows: string[][];
  note?: string;
}

/** One exam-scoped hierarchy (JEE Main Paper 1 or JEE Advanced). */
export interface SyllabusHierarchy {
  id: string;
  heading: string;
  /** Provenance badge, e.g. "Official syllabus — NTA". */
  officialLabel: string;
  /** Editorial-layer badge, e.g. "Rank Sarthi learning structure". */
  editorialLabel?: string;
  intro?: string;
  readingNotes?: string[];
  sourceRefs?: string[];
  verifiedOn?: string;
  sections: SyllabusSection[];
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

  /* --- Optional production payload. Every field is omittable; a slot with
        no data is skipped, never placeholdered. --------------------------- */

  /** Masthead overrides (B34). */
  hero?: { eyebrow?: string; intent?: string; chips?: string[] };
  /** Cycle-dependent official status (B25) with its own provenance. */
  cycleStatus?: SyllabusTable & {
    verifiedOn: string;
    sourceRefs?: string[];
    refreshTrigger?: string;
    cycleState?: string;
  };
  /** Which official document applies to which target (B25). */
  scopeSelector?: SyllabusTable;
  /**
   * Exam-scoped hierarchies (B26). When present these replace the single
   * `sections` render, so Main and Advanced never merge into one list.
   */
  hierarchies?: SyllabusHierarchy[];
  /** Verified Main vs Advanced differences (B25). */
  distinctions?: SyllabusTable;
  /** Editorial prerequisite paths, one table per subject (B25). */
  prerequisitePaths?: SyllabusTable[];
  /** Cross-chapter relationship guide (B25). */
  relationships?: SyllabusTable;
  /** Five-state coverage model (B25). */
  coverageModel?: SyllabusTable;
  /** Onward routes; the rail renders only registry-live destinations (B36). */
  relatedLinks?: LinkContract[];
  /** All source ids backing this page, rendered by B37. */
  sourceRefs?: string[];
  /** Per-page metadata overrides used by the T05 route head(). */
  seo?: { title?: string; description?: string; ogTitle?: string; ogDescription?: string };

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

/**
 * Anchor points a chapter table or extra concept group may attach to.
 * Keeps structured academic content typed instead of flattened into prose,
 * without adding chapter-specific components.
 */
export type ChapterSlot =
  | "scope"
  | "prerequisites"
  | "concepts"
  | "formulas"
  | "mistakes"
  | "diagnosis"
  | "practice"
  | "related";

/** Tabular academic content rendered through B25. */
export interface ChapterTable {
  id: string;
  slot: ChapterSlot;
  heading: string;
  intro?: string;
  columns: string[];
  rows: string[][];
  note?: string;
  /** Surface this anchor in the page jump navigation. */
  jump?: boolean;
}

/** Extra concept group rendered through B35 at a given anchor point. */
export interface ChapterSection {
  id: string;
  slot: ChapterSlot;
  heading: string;
  concepts: ConceptBlock[];
  /** Surface this anchor in the page jump navigation. */
  jump?: boolean;
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
  /** Short factual chips under the masthead answer (no product claims). */
  heroChips?: string[];
  /** Structured tables placed at typed anchor points. */
  tables?: ChapterTable[];
  /** Additional concept groups placed at typed anchor points. */
  sections?: ChapterSection[];
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
  /** Evidence boundary shown with the source list. */
  sourceNote?: string;
  /** Contributor requirements shown as policy, never as named people. */
  contributorPolicy?: string[];
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

/* ------------------------------------------------------------------ */
/* Subject hub (T04)                                                   */
/* ------------------------------------------------------------------ */

/** Per-chapter editorial annotation. Names and URLs come from the registry. */
export interface SubjectChapterNote {
  /** Registry path of the chapter route. */
  url: string;
  /** Official-scope label, e.g. "Both", "Main", "No current mapping". */
  scope: string;
  /** Relationship and next-use sentence. */
  note: string;
  /** Display order in the chapter map. */
  order?: number;
  /** True when the route is NOT current official syllabus scope. */
  contextual?: boolean;
}

export interface SubjectHubContent {
  /** Registry path, e.g. "/jee/physics". */
  url: string;
  platform: Exclude<Platform, "main">;
  /** Route slug, e.g. "physics". */
  slug: string;
  subject: string;
  exam: string;
  title: string;
  eyebrow?: string;
  intent?: string;
  answer: RichText;
  contentStatus: ContentStatus;
  chips?: string[];
  /** Task-routing table (B25). Destinations are labels, never dead links. */
  taskTable?: SyllabusTable;
  /** Concept-architecture table (B25). */
  architecture?: SyllabusTable;
  chapterMap: {
    heading: string;
    scopeNote?: string;
    contextualHeading?: string;
    contextualNote?: string;
    /** Expected number of built chapter routes; used by QA only. */
    expectedCount?: number;
    notes: SubjectChapterNote[];
  };
  /** Subject-level PYQ availability statement (plain text, no invented data). */
  pyqNote?: string;
  /** Diagnosis table (B25). */
  diagnosis?: SyllabusTable;
  relatedLinks?: LinkContract[];
  faqs?: FaqItem[];
  sourceRefs?: string[];
  lastVerified?: string;
  seo?: PageMeta;
}

/* ------------------------------------------------------------------ */
/* Exam information pages (T03 / T10 / T12 family)                     */
/* ------------------------------------------------------------------ */

/**
 * Provenance of an external exam resource (question paper, key, notice).
 * Platform-agnostic: JEE and NDA reuse the same four states.
 */
export type ResourceProvenance =
  | "OFFICIAL_AUTHORITY_COPY"
  | "VERIFIED_TEST_BOOKLET_SCAN"
  | "VERIFIED_PAPER_RECONSTRUCTION"
  | "SOURCE_NOT_VERIFIED"
  | "NOT_AVAILABLE";

/**
 * One student-facing action on a resource row. A resource with no verified
 * destination carries no href and renders as an inactive status, never as a
 * decorative or empty link.
 */
export interface ResourceAction {
  provenance: ResourceProvenance;
  /** Student-facing resource label, e.g. "Verified Paper Scan". */
  label: string;
  /** Short trust badge, e.g. "Official NTA" / "Verified reference". */
  badge?: string;
  /** Button text. Rendered only together with a real href. */
  cta?: string;
  href?: string;
  /** Visible owner of the destination file. Required for external copies. */
  owner?: string;
  /** Extra visible disclosure, e.g. the reconstruction trust note. */
  trustNote?: string;
  /** Structural detail line, e.g. "Code 50 · English". */
  detail?: string;
}

/** One event row in a resource library (B47). */
export interface ResourceRow {
  id: string;
  eventLabel: string;
  eventDate?: string;
  /** Ordered resource columns for this event. */
  cells: { label: string; actions: ResourceAction[] }[];
  note?: string;
}

/** One ordered content block on an information page. */
export type InfoBlock =
  | {
      kind: "table";
      id: string;
      heading: string;
      intro?: string;
      columns: string[];
      rows: string[][];
      note?: string;
      jump?: boolean;
    }
  | {
      kind: "resources";
      id: string;
      heading: string;
      intro?: string;
      rows: ResourceRow[];
      note?: string;
      jump?: boolean;
    }
  | {
      kind: "prose";
      id: string;
      heading?: string;
      concepts: ConceptBlock[];
      jump?: boolean;
    }
  | {
      /** Editorial link-card grid (B48). Cards resolve through the registry. */
      kind: "links";
      id: string;
      heading: string;
      intro?: string;
      items: { url: string; label: string; type: string; description?: string }[];
      note?: string;
      jump?: boolean;
    }
  | {
      /** Interactive tool mount (B49). The tool id must be registered. */
      kind: "tool";
      id: string;
      heading: string;
      intro?: string;
      tool: "neet-score-calculator" | "neet-study-planner";
      note?: string;
      jump?: boolean;
    };


/**
 * Generic, platform-agnostic exam information page. Cycle-dependent facts are
 * never inlined as copy: they travel as FreshnessWatch record ids so the page
 * always shows the approved value with its authority and verification dates.
 */
export interface InfoPageContent {
  /** Registry path, e.g. "/jee/exam-dates". */
  url: string;
  /** Owning platform. Core site pages such as /about use "main". */
  platform: Platform;
  /** Second path segment, e.g. "exam-dates". */
  slug: string;
  exam: string;
  title: string;
  eyebrow?: string;
  intent?: string;
  answer: RichText;
  contentStatus: ContentStatus;
  chips?: string[];
  meta?: { label: string; value: string }[];
  /** FreshnessWatch panel (B45). Ids must exist and be approved. */
  freshness?: { heading?: string; intro?: string; recordIds: string[]; note?: string };
  /** Ordered page body. */
  blocks: InfoBlock[];
  relatedLinks?: LinkContract[];
  faqs?: FaqItem[];
  sourceRefs?: string[];
  sourceNote?: string;
  contributorPolicy?: string[];
  lastVerified?: string;
  seo?: PageMeta;
}

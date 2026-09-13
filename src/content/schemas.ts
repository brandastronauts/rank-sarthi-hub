import { z } from "zod";

/**
 * Runtime contracts for Content Engine payloads.
 *
 * Runtime schemas own the SHAPE; the Rank Sarthi Content Engine owns the WORDS.
 * Every academic field is optional-by-design: a missing field must make its
 * block disappear, never produce invented filler.
 */

/* ---------------- rich text ---------------- */

export const inlineTextSchema = z.object({
  text: z.string(),
  bold: z.boolean().optional(),
  italic: z.boolean().optional(),
  code: z.boolean().optional(),
  href: z.string().optional(),
});

export const richTextSchema = z.array(
  z.union([
    z.object({ type: z.literal("paragraph"), children: z.array(inlineTextSchema) }),
    z.object({
      type: z.literal("heading"),
      level: z.union([z.literal(2), z.literal(3), z.literal(4)]),
      id: z.string().optional(),
      children: z.array(inlineTextSchema),
    }),
    z.object({
      type: z.literal("list"),
      ordered: z.boolean().optional(),
      items: z.array(z.array(inlineTextSchema)),
    }),
    z.object({
      type: z.literal("note"),
      tone: z.enum(["info", "caution", "source"]).optional(),
      children: z.array(inlineTextSchema),
    }),
    z.object({ type: z.literal("definition"), term: z.string(), children: z.array(inlineTextSchema) }),
  ]),
);

/* ---------------- shared ---------------- */

export const contentStatusSchema = z.enum(["scaffold", "draft", "verified"]);
export const confidenceSchema = z.enum(["high", "medium", "low"]);
export const sourceTypeSchema = z.enum(["official", "official-pdf", "first-party", "textbook", "news"]);
export const rightsStatusSchema = z.enum(["public-official", "licensed", "internal-only", "unverified"]);

/** Preparation Intelligence v1.1 — supplied by the Content Engine only. */
export const preparationIntelligenceTagSchema = z.enum([
  "knowledge-gap",
  "recall-gap",
  "execution-error",
  "decision-error",
  "needs-review",
]);

export const linkContractSchema = z.object({
  label: z.string(),
  url: z.string().startsWith("/"),
  relation: z.enum(["up", "prerequisite", "related", "same-unit", "next", "forward"]),
  description: z.string().optional(),
});

export const pageMetaSchema = z.object({
  title: z.string().min(10),
  description: z.string().min(40),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().url().optional(),
  ogType: z.enum(["website", "article"]).optional(),
});

/* ---------------- evidence records ---------------- */

export const formulaRecordSchema = z.object({
  id: z.string(),
  expression: z.string(),
  latex: z.string().optional(),
  meaning: z.string(),
  variables: z.array(z.object({ symbol: z.string(), meaning: z.string(), unit: z.string().optional() })),
  units: z.string().optional(),
  useWhen: z.string(),
  commonTrap: z.string().optional(),
  accessibleText: z.string(),
});

export const pyqRecordSchema = z.object({
  year: z.number().int(),
  paper: z.string(),
  references: z.array(z.string()).optional(),
  sourceRef: z.string(),
  rightsStatus: rightsStatusSchema,
  sourceType: sourceTypeSchema,
  note: z.string().optional(),
});

export const trendRecordSchema = z.object({
  label: z.string(),
  value: z.string(),
  analysisWindow: z.string(),
  sourceRefs: z.array(z.string()).min(1),
  methodology: z.string(),
  confidence: confidenceSchema,
  lastVerified: z.string().optional(),
});

export const priorityRecordSchema = z.object({
  label: z.string(),
  value: z.string(),
  basis: z.string(),
  confidence: confidenceSchema,
  sourceRefs: z.array(z.string()).optional(),
  lastVerified: z.string().optional(),
});

export const mistakeRecordSchema = z.object({
  id: z.string(),
  mistake: z.string(),
  why: richTextSchema,
  fix: richTextSchema,
  errorType: preparationIntelligenceTagSchema,
  sourceRefs: z.array(z.string()).optional(),
});

export const workedExampleSchema = z.object({
  id: z.string(),
  prompt: z.string(),
  steps: richTextSchema,
  answer: z.string().optional(),
  sourceRef: z.string().optional(),
});

export const conceptBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: richTextSchema,
  keyIdea: z.string().optional(),
});

export const faqItemSchema = z.object({ question: z.string(), answer: richTextSchema });

/* ---------------- ChapterContent (T06 contract) ---------------- */

export const chapterSlotSchema = z.enum([
  "scope",
  "prerequisites",
  "concepts",
  "formulas",
  "mistakes",
  "diagnosis",
  "practice",
  "related",
]);

export const chapterTableSchema = z.object({
  id: z.string(),
  slot: chapterSlotSchema,
  heading: z.string(),
  intro: z.string().optional(),
  columns: z.array(z.string()).min(2),
  rows: z.array(z.array(z.string())).min(1),
  note: z.string().optional(),
  jump: z.boolean().optional(),
});

export const chapterSectionSchema = z.object({
  id: z.string(),
  slot: chapterSlotSchema,
  heading: z.string(),
  concepts: z.array(conceptBlockSchema).min(1),
  jump: z.boolean().optional(),
});

export const chapterContentSchema = z.object({
  exam: z.string(),
  examVariant: z.string().optional(),
  platform: z.enum(["jee", "neet", "nda"]),
  subject: z.string(),
  subjectSlug: z.string(),
  chapter: z.string(),
  slug: z.string(),
  url: z.string().startsWith("/"),
  canonicalIntent: z.string(),
  directAnswer: richTextSchema,
  heroChips: z.array(z.string()).optional(),
  tables: z.array(chapterTableSchema).optional(),
  sections: z.array(chapterSectionSchema).optional(),
  prerequisites: z.array(linkContractSchema),
  syllabusMapping: z.object({
    unit: z.string(),
    topics: z.array(z.string()),
    syllabusUrl: z.string().startsWith("/"),
  }),
  conceptBlocks: z.array(conceptBlockSchema),

  /* optional evidence — absent means the block does not render */
  formulas: z.array(formulaRecordSchema).optional(),
  pyqs: z.array(pyqRecordSchema).optional(),
  trends: z.array(trendRecordSchema).optional(),
  priority: z.array(priorityRecordSchema).optional(),
  mistakes: z.array(mistakeRecordSchema).optional(),
  workedExamples: z.array(workedExampleSchema).optional(),
  faqs: z.array(faqItemSchema).optional(),

  diagnosticCta: z
    .object({ destinationId: z.string(), headline: z.string(), body: z.string() })
    .optional(),
  relatedChapters: z.array(linkContractSchema),
  links: z.array(linkContractSchema).optional(),
  sources: z.array(z.string()),
  sourceNote: z.string().optional(),
  contributorPolicy: z.array(z.string()).optional(),
  reviewerId: z.string().optional(),
  authorId: z.string().optional(),
  updated: z.string().optional(),
  contentFlags: z.array(z.string()).optional(),
  contentStatus: contentStatusSchema,
  meta: pageMetaSchema,
});

/* ---------------- SyllabusContent (T05 contract) ---------------- */

export const syllabusUnitSchema = z.object({
  id: z.string(),
  name: z.string(),
  topics: z.array(z.string()),
  /** Condensed official scope sentence. */
  scope: z.string().optional(),
  /** Editorial navigation layer, never an official heading. */
  group: z.string().optional(),
  chapterSlugs: z.array(z.string()).optional(),
  sourceRefs: z.array(z.string()).optional(),
  variant: z.enum(["main", "advanced", "both"]).optional(),
  note: z.string().optional(),
});

export const syllabusSectionSchema = z.object({
  id: z.string(),
  subject: z.string(),
  accent: z.enum(["jee", "neet", "nda"]).optional(),
  units: z.array(syllabusUnitSchema),
  countLabel: z.string().optional(),
});

/** Generic tabular payload rendered through B25. */
export const syllabusTableSchema = z.object({
  id: z.string(),
  heading: z.string(),
  intro: z.string().optional(),
  columns: z.array(z.string()),
  rows: z.array(z.array(z.string())),
  note: z.string().optional(),
});

export const syllabusHierarchySchema = z.object({
  id: z.string(),
  heading: z.string(),
  officialLabel: z.string(),
  editorialLabel: z.string().optional(),
  intro: z.string().optional(),
  readingNotes: z.array(z.string()).optional(),
  sourceRefs: z.array(z.string()).optional(),
  verifiedOn: z.string().optional(),
  sections: z.array(syllabusSectionSchema),
});

export const syllabusContentSchema = z.object({
  exam: z.string(),
  platform: z.enum(["jee", "neet", "nda"]),
  title: z.string(),
  contentStatus: contentStatusSchema,
  intro: richTextSchema,
  officialSource: z.object({
    id: z.string(),
    label: z.string(),
    publisher: z.string(),
    url: z.string().url().optional(),
    sourceType: sourceTypeSchema,
    lastVerified: z.string().optional(),
  }),
  sections: z.array(syllabusSectionSchema),
  interpretation: z
    .array(z.object({ id: z.string(), title: z.string(), body: richTextSchema }))
    .optional(),
  hero: z
    .object({
      eyebrow: z.string().optional(),
      intent: z.string().optional(),
      chips: z.array(z.string()).optional(),
    })
    .optional(),
  cycleStatus: syllabusTableSchema
    .extend({
      verifiedOn: z.string(),
      sourceRefs: z.array(z.string()).optional(),
      refreshTrigger: z.string().optional(),
      cycleState: z.string().optional(),
    })
    .optional(),
  scopeSelector: syllabusTableSchema.optional(),
  hierarchies: z.array(syllabusHierarchySchema).optional(),
  distinctions: syllabusTableSchema.optional(),
  prerequisitePaths: z.array(syllabusTableSchema).optional(),
  relationships: syllabusTableSchema.optional(),
  coverageModel: syllabusTableSchema.optional(),
  relatedLinks: z
    .array(
      z.object({
        label: z.string(),
        url: z.string(),
        relation: z.enum(["up", "prerequisite", "related", "same-unit", "next", "forward"]),
        description: z.string().optional(),
      }),
    )
    .optional(),
  sourceRefs: z.array(z.string()).optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogTitle: z.string().optional(),
      ogDescription: z.string().optional(),
    })
    .optional(),
  faqs: z.array(faqItemSchema).optional(),
  lastVerified: z.string().optional(),
});

export type ChapterContentInput = z.infer<typeof chapterContentSchema>;
export type SyllabusContentInput = z.infer<typeof syllabusContentSchema>;

/** Parse a Content Engine payload; throws with a precise path on mismatch. */
export function parseChapterContent(input: unknown): ChapterContentInput {
  return chapterContentSchema.parse(input);
}

export function parseSyllabusContent(input: unknown): SyllabusContentInput {
  return syllabusContentSchema.parse(input);
}

/** Indexation gate: only verified content may ever be marked index. */
export function mayIndex(contentStatus: z.infer<typeof contentStatusSchema>): boolean {
  return contentStatus === "verified";
}

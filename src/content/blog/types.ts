export type BlogExam = "JEE" | "NEET" | "NDA" | "GENERAL";

export type BlogCategory =
  | "JEE"
  | "NEET"
  | "NDA"
  | "Exam Updates"
  | "Preparation Strategy"
  | "Study Resources";

export interface BlogInline {
  text: string;
  bold?: boolean;
  italic?: boolean;
  href?: string;
}

export type BlogContentNode =
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "paragraph"; children: BlogInline[] }
  | { type: "list"; ordered?: boolean; items: BlogInline[][] }
  | { type: "blockquote"; children: BlogInline[] }
  | { type: "table"; caption?: string; columns: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; title?: string; tone?: "info" | "caution"; children: BlogInline[] };

export interface BlogPerson {
  name: string;
  role?: string;
  verified: true;
}

export interface BlogSource {
  name: string;
  sourceType: "official" | "official-pdf" | "first-party" | "textbook" | "news";
  url: string;
  official: boolean;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogContentNode[];
  keyTakeaways?: BlogInline[][];
  featuredImage: string;
  featuredImageAlt: string;
  primaryExam: BlogExam;
  category: BlogCategory;
  tags: string[];
  publishedAt?: string;
  updatedAt?: string;
  author: BlogPerson | null;
  reviewer: BlogPerson | null;
  reviewStatus: "UNASSIGNED" | "REVIEW_PENDING" | "REVIEWED";
  sources: BlogSource[];
  relatedArticleSlugs: string[];
  relatedInternalRoutes: string[];
  seoTitle: string;
  metaDescription: string;
  canonicalOverride: string | null;
  featured: boolean;
  status: "draft" | "published";
}

export interface BlogDataProvider {
  listArticles(): Promise<BlogArticle[]>;
  getArticleBySlug(slug: string): Promise<BlogArticle | undefined>;
}
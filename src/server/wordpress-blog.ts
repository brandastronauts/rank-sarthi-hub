import * as cheerio from "cheerio/slim";
import type { AnyNode } from "domhandler";
import { getUrl } from "@/content/registry";
import type {
  BlogAlign,
  BlogArticle,
  BlogCategory,
  BlogComment,
  BlogCommentInput,
  BlogCommentResult,
  BlogContentNode,
  BlogExam,
  BlogHeadingLevel,
  BlogInline,
  BlogInlineStyle,
  BlogListParams,
  BlogListResult,
  BlogPerson,
  BlogSource,
} from "@/content/blog/types";

/**
 * Headless WordPress adapter — implements the contract documented in
 * Rank_Sarthi_WordPress_API_Contract.md / _Blog_Field_Mapping.md.
 *
 * Server-only: does the network fetch, HTML→block parsing and in-memory
 * caching, so no visitor's browser ever talks to WordPress directly and the
 * heavier parsing code never ships in the client bundle.
 */

const CMS_ORIGIN = (process.env["WP_CMS_ORIGIN"] ?? "").replace(/\/+$/, "");
const CACHE_TTL_MS = 5 * 60 * 1000;
const TAXONOMY_CACHE_TTL_MS = 30 * 60 * 1000;
const FETCH_TIMEOUT_MS = 8000;
const DEFAULT_PER_PAGE = 12;
const PLACEHOLDER_IMAGE = "/brand/rank-sarthi-logo.png";

const CATEGORY_MAP: Record<string, BlogCategory> = {
  jee: "JEE",
  neet: "NEET",
  nda: "NDA",
  "exam updates": "Exam Updates",
  "preparation strategy": "Preparation Strategy",
  "study resources": "Study Resources",
};

function mapExam(value: string | undefined): BlogExam {
  const v = (value ?? "").trim().toUpperCase();
  return v === "JEE" || v === "NEET" || v === "NDA" ? v : "GENERAL";
}

function decodeText(html: string): string {
  if (!html) return "";
  return cheerio.load(`<div>${html}</div>`)("div").text().trim();
}

/** Safe protocols only; anything else is rendered as plain text, never a link. */
function isSafeHref(href: string): boolean {
  return href.startsWith("/") || /^https?:|^mailto:|^tel:/i.test(href);
}

/** Allow-lists a curated set of CSS colour formats; rejects anything else (url(), expressions, breakouts). */
const SAFE_COLOR = /^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|hsla?\([\d\s.,%]+\)|[a-z-]+)$/i;
function safeColor(value: string | undefined): string | undefined {
  const v = value?.trim();
  return v && SAFE_COLOR.test(v) ? v : undefined;
}

/** Reads editor-applied colour/background from a style attribute, allow-list only. */
function styleFromAttr(style: string | undefined): BlogInlineStyle {
  if (!style) return {};
  const out: BlogInlineStyle = {};
  for (const decl of style.split(";")) {
    const [prop, ...rest] = decl.split(":");
    const value = rest.join(":").trim();
    if (!prop || !value) continue;
    const name = prop.trim().toLowerCase();
    if (name === "color") {
      const c = safeColor(value);
      if (c) out.color = c;
    } else if (name === "background-color") {
      const c = safeColor(value);
      if (c) out.backgroundColor = c;
    }
  }
  return out;
}

/** WordPress's block editor marks alignment via has-text-align-* classes or inline style. */
function alignFromEl($: cheerio.CheerioAPI, el: AnyNode): BlogAlign | undefined {
  const cls = $(el).attr("class") ?? "";
  if (/has-text-align-center/.test(cls)) return "center";
  if (/has-text-align-right/.test(cls)) return "right";
  if (/has-text-align-left/.test(cls)) return "left";
  const style = $(el).attr("style") ?? "";
  const m = /text-align\s*:\s*(left|center|right)/i.exec(style);
  return m ? (m[1]!.toLowerCase() as BlogAlign) : undefined;
}

interface InlineMarks {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  code: boolean;
  href: string | undefined;
  style: BlogInlineStyle;
}

/** Images WordPress placed inside a paragraph/heading (e.g. a "Media & Text" block) — pulled out as their own block. */
function collectInlineImages($: cheerio.CheerioAPI, el: AnyNode): BlogContentNode[] {
  const nodes: BlogContentNode[] = [];
  for (const img of $(el).find("img").toArray()) {
    const src = $(img).attr("src") ?? "";
    const alt = $(img).attr("alt") ?? "";
    if (src && alt) nodes.push({ type: "image", src, alt });
  }
  return nodes;
}

function parseInline($: cheerio.CheerioAPI, node: AnyNode): BlogInline[] {
  const out: BlogInline[] = [];
  const walk = (el: AnyNode, marks: InlineMarks) => {
    if (el.type === "text") {
      const text = (el as unknown as { data: string }).data;
      if (text) {
        out.push({
          text,
          ...(marks.bold ? { bold: true } : {}),
          ...(marks.italic ? { italic: true } : {}),
          ...(marks.underline ? { underline: true } : {}),
          ...(marks.strikethrough ? { strikethrough: true } : {}),
          ...(marks.code ? { code: true } : {}),
          ...(marks.href ? { href: marks.href } : {}),
          ...marks.style,
        });
      }
      return;
    }
    if (el.type !== "tag") return;
    const tag = el.name.toLowerCase();
    if (tag === "img") return; // pulled out separately by collectInlineImages
    const next: InlineMarks = {
      bold: marks.bold || tag === "strong" || tag === "b",
      italic: marks.italic || tag === "em" || tag === "i",
      underline: marks.underline || tag === "u" || tag === "ins",
      strikethrough: marks.strikethrough || tag === "s" || tag === "del" || tag === "strike",
      code: marks.code || tag === "code",
      href: marks.href,
      style: { ...marks.style, ...styleFromAttr($(el).attr("style")) },
    };
    if (tag === "a") {
      const raw = $(el).attr("href") ?? "";
      if (isSafeHref(raw)) next.href = raw;
    }
    if (tag === "br") {
      out.push({ text: " " });
      return;
    }
    for (const child of (el as unknown as { children: AnyNode[] }).children ?? []) {
      walk(child, next);
    }
  };
  for (const child of (node as unknown as { children: AnyNode[] }).children ?? []) {
    walk(child, { bold: false, italic: false, underline: false, strikethrough: false, code: false, href: undefined, style: {} });
  }
  return out.filter((n) => n.text.trim().length > 0 || n.href);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** Maps sanitised WordPress body HTML into the supported block allow-list. */
const HEADING_TAGS = new Set(["h2", "h3", "h4", "h5", "h6"]);
/** Container blocks (Group, Columns, Cover, Media & Text, buttons row, ...) whose content we still want. */
const RECURSE_TAGS = new Set(["div", "section", "aside", "details", "summary"]);
const DROP_TAGS = new Set(["script", "style", "iframe", "form", "noscript", "button", "input", "select", "textarea", "svg", "canvas"]);

function parseContent(html: string): BlogContentNode[] {
  if (!html) return [];
  const $ = cheerio.load(html);
  const seenIds = new Set<string>();

  const uniqueId = (text: string) => {
    let id = slugify(text) || "section";
    let n = 2;
    while (seenIds.has(id)) id = `${slugify(text)}-${n++}`;
    seenIds.add(id);
    return id;
  };

  const processList = (elements: AnyNode[]): BlogContentNode[] => {
    const nodes: BlogContentNode[] = [];
    for (const el of elements) {
      if (el.type !== "tag") continue;
      const $el = $(el);
      const tag = el.name.toLowerCase();
      const align = alignFromEl($, el);

      if (HEADING_TAGS.has(tag)) {
        const text = $el.text().trim();
        if (text) {
          const level = Number(tag[1]) as BlogHeadingLevel;
          nodes.push({ type: "heading", level, id: uniqueId(text), text, ...(align ? { align } : {}) });
        }
        continue;
      }
      if (tag === "hr") {
        nodes.push({ type: "separator" });
        continue;
      }
      if (tag === "pre") {
        const codeEl = $el.find("code").first();
        const code = (codeEl.length ? codeEl : $el).text().replace(/\n$/, "");
        const langMatch = /language-(\S+)/.exec(codeEl.attr("class") ?? "");
        if (code.trim()) nodes.push({ type: "code", code, ...(langMatch ? { language: langMatch[1] } : {}) });
        continue;
      }
      if (tag === "p") {
        const children = parseInline($, el);
        const images = collectInlineImages($, el);
        if (children.length) nodes.push({ type: "paragraph", children, ...(align ? { align } : {}) });
        nodes.push(...images);
        continue;
      }
      if (tag === "ul" || tag === "ol") {
        const items = $el
          .children("li")
          .toArray()
          .map((li) => parseInline($, li))
          .filter((item) => item.length > 0);
        if (items.length) nodes.push({ type: "list", ordered: tag === "ol", items });
        continue;
      }
      if (tag === "blockquote" || tag === "cite") {
        // A blockquote's children only ever render as a single flowing
        // paragraph, so multiple <p>s inside get joined rather than only
        // keeping the first one.
        const paragraphs = $el.children("p").toArray();
        const children = paragraphs.length
          ? paragraphs.flatMap((p, i) => (i === 0 ? parseInline($, p) : [{ text: " " }, ...parseInline($, p)]))
          : parseInline($, el);
        if (children.length) nodes.push({ type: "blockquote", children });
        continue;
      }
      if (tag === "table") {
        const columns = $el
          .find("thead th, tr:first-child th")
          .toArray()
          .map((th) => $(th).text().trim());
        const rows = $el
          .find("tbody tr, tr")
          .toArray()
          .filter((tr) => $(tr).find("th").length === 0)
          .map((tr) => $(tr).find("td").toArray().map((td) => $(td).text().trim()));
        const caption = $el.find("caption").first().text().trim() || undefined;
        if (columns.length && rows.length) nodes.push({ type: "table", ...(caption ? { caption } : {}), columns, rows });
        continue;
      }
      if (tag === "figure") {
        const img = $el.find("img").first();
        if (img.length) {
          const src = img.attr("src") ?? "";
          const alt = img.attr("alt") ?? "";
          const caption = $el.find("figcaption").first().text().trim() || undefined;
          if (src && alt) nodes.push({ type: "image", src, alt, ...(caption ? { caption } : {}) });
          continue;
        }
        // A figure with no <img> (e.g. an unsupported embed) — try its children instead.
        nodes.push(...processList((el as unknown as { children: AnyNode[] }).children ?? []));
        continue;
      }
      if (tag === "img") {
        const src = $el.attr("src") ?? "";
        const alt = $el.attr("alt") ?? "";
        if (src && alt) nodes.push({ type: "image", src, alt });
        continue;
      }
      if (tag === "a" && /wp-block-button__link/.test($el.attr("class") ?? "")) {
        const children = parseInline($, el);
        if (children.length) nodes.push({ type: "paragraph", children });
        continue;
      }
      if (DROP_TAGS.has(tag)) continue;
      const classes = ($el.attr("class") ?? "").split(/\s+/);
      if (RECURSE_TAGS.has(tag) || classes.some((c) => c.startsWith("wp-block-"))) {
        // Group/Columns/Cover/Media-&-Text and any other unrecognised WordPress
        // block wrapper: keep its content instead of silently dropping it.
        nodes.push(...processList((el as unknown as { children: AnyNode[] }).children ?? []));
        continue;
      }
      // Anything else with no known mapping (embeds, raw markup) is dropped —
      // never dangerouslySetInnerHTML'd, per the sanitisation contract.
    }
    return nodes;
  };

  // cheerio.load() wraps a fragment in an implicit <html><body>, so the
  // actual content lives one level below root.
  const root = $("body").get(0);
  if (!root) return [];
  return processList((root as unknown as { children: AnyNode[] }).children ?? []);
}

interface WpTerm {
  id: number;
  name: string;
  taxonomy: string;
}

interface WpCategory {
  id: number;
  name: string;
  parent: number;
}

interface WpPost {
  id: number;
  slug: string;
  status: string;
  date_gmt: string;
  modified_gmt: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  meta?: Record<string, unknown>;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text?: string }[];
    "wp:term"?: WpTerm[][];
    author?: { name: string; avatar_urls?: Record<string, string> }[];
  };
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: { url: string }[];
    canonical?: string;
  };
}

function toIso(gmtDate: string | undefined): string | undefined {
  if (!gmtDate) return undefined;
  const iso = gmtDate.endsWith("Z") ? gmtDate : `${gmtDate}Z`;
  return Number.isNaN(Date.parse(iso)) ? undefined : iso;
}

function readMeta(post: WpPost, key: string): unknown {
  return post.meta?.[key];
}

function readStringArrayMeta(post: WpPost, key: string): string[] {
  const value = readMeta(post, key);
  if (Array.isArray(value)) return value.filter((v): v is string => typeof v === "string");
  if (typeof value === "string" && value.trim()) return value.split(",").map((v) => v.trim()).filter(Boolean);
  return [];
}

function readSourcesMeta(post: WpPost): BlogSource[] {
  const value = readMeta(post, "sources");
  if (!Array.isArray(value)) return [];
  const allowed = new Set(["official", "official-pdf", "first-party", "textbook", "news"]);
  return value
    .filter(
      (v): v is { name: string; sourceType: string; url: string; official: boolean } =>
        !!v && typeof v === "object" && typeof (v as { url?: unknown }).url === "string",
    )
    .filter((v) => allowed.has(v.sourceType) && /^https:\/\//i.test(v.url))
    .map((v) => ({ name: v.name, sourceType: v.sourceType as BlogSource["sourceType"], url: v.url, official: !!v.official }));
}

/** Resolves the frontend category plus an optional child category name from WP's category hierarchy. */
function resolveCategory(
  terms: WpTerm[],
  hierarchy: Map<number, WpCategory>,
): { category: BlogCategory; subCategory?: string } {
  const categoryTerms = terms.filter((t) => t.taxonomy === "category");
  for (const term of categoryTerms) {
    const node = hierarchy.get(term.id);
    if (node && node.parent) {
      const parent = hierarchy.get(node.parent);
      const mapped = parent ? CATEGORY_MAP[parent.name.trim().toLowerCase()] : undefined;
      if (mapped) return { category: mapped, subCategory: node.name };
    }
  }
  for (const term of categoryTerms) {
    const mapped = CATEGORY_MAP[term.name.trim().toLowerCase()];
    if (mapped) return { category: mapped };
  }
  return { category: "Study Resources" };
}

function normalisePost(post: WpPost, hierarchy: Map<number, WpCategory>): BlogArticle {
  const terms = (post._embedded?.["wp:term"] ?? []).flat();
  const tags = terms.filter((t) => t.taxonomy === "post_tag").map((t) => t.name);
  const examTerm = terms.find((t) => t.taxonomy === "primary_exam")?.name;
  const { category, subCategory } = resolveCategory(terms, hierarchy);

  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const hasImage = !!media?.source_url && !!media?.alt_text;

  const title = decodeText(post.title.rendered);
  const excerptSource = decodeText(post.excerpt.rendered);
  const publishedAt = toIso(post.date_gmt);
  const updatedAt = toIso(post.modified_gmt);
  const relatedInternalRoutes = readStringArrayMeta(post, "related_internal_routes").filter(
    (url) => getUrl(url)?.buildStatus === "built",
  );

  const yoast = post.yoast_head_json;
  const keywords = readStringArrayMeta(post, "meta_keywords").join(", ") || undefined;

  const wpAuthor = post._embedded?.author?.[0];
  const authorAvatar = wpAuthor?.avatar_urls ? Object.values(wpAuthor.avatar_urls).pop() : undefined;
  const author: BlogPerson | null = wpAuthor?.name
    ? { name: wpAuthor.name, verified: true, ...(authorAvatar ? { avatarUrl: authorAvatar } : {}) }
    : null;
  const reviewerName = readMeta(post, "reviewer_name");
  const reviewer: BlogPerson | null = typeof reviewerName === "string" && reviewerName.trim() ? { name: reviewerName.trim(), verified: true } : null;

  return {
    id: String(post.id),
    slug: post.slug,
    title,
    excerpt: excerptSource || title,
    content: parseContent(post.content.rendered),
    featuredImage: hasImage ? media!.source_url : PLACEHOLDER_IMAGE,
    featuredImageAlt: hasImage ? media!.alt_text! : "Rank Sarthi",
    primaryExam: mapExam(examTerm),
    category,
    ...(subCategory ? { subCategory } : {}),
    tags,
    ...(publishedAt ? { publishedAt } : {}),
    ...(updatedAt && updatedAt !== publishedAt ? { updatedAt } : {}),
    author,
    reviewer,
    reviewStatus: (() => {
      const v = readMeta(post, "review_status");
      return v === "REVIEW_PENDING" || v === "REVIEWED" ? v : "UNASSIGNED";
    })(),
    sources: readSourcesMeta(post),
    relatedArticleSlugs: readStringArrayMeta(post, "related_article_slugs"),
    relatedInternalRoutes,
    seoTitle: yoast?.title || `${title} | Rank Sarthi`,
    metaDescription: yoast?.description || excerptSource || title,
    ...(keywords ? { keywords } : {}),
    canonicalOverride: `https://ranksarthi.com/blog/${post.slug}`,
    featured: readMeta(post, "featured") === true,
    status: post.status === "publish" ? "published" : "draft",
  };
}

async function wpFetch(path: string): Promise<{ data: unknown; headers: Headers } | null> {
  if (!CMS_ORIGIN) return null;
  const res = await fetch(`${CMS_ORIGIN}${path}`, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`WordPress request failed: ${res.status} ${path}`);
  return { data: await res.json(), headers: res.headers };
}

let categoryHierarchy: { data: Map<number, WpCategory>; expires: number } | null = null;
let categoryHierarchyInFlight: Promise<Map<number, WpCategory>> | null = null;

async function getCategoryHierarchy(): Promise<Map<number, WpCategory>> {
  const now = Date.now();
  if (categoryHierarchy && categoryHierarchy.expires > now) return categoryHierarchy.data;
  if (categoryHierarchyInFlight) return categoryHierarchyInFlight;

  categoryHierarchyInFlight = (async () => {
    try {
      const result = await wpFetch("/wp-json/wp/v2/categories?per_page=100");
      const raw = Array.isArray(result?.data) ? (result.data as WpCategory[]) : [];
      const map = new Map(raw.map((c) => [c.id, c]));
      categoryHierarchy = { data: map, expires: Date.now() + TAXONOMY_CACHE_TTL_MS };
      return map;
    } catch (error) {
      console.error("[wordpress-blog] category hierarchy fetch failed:", error);
      return categoryHierarchy?.data ?? new Map();
    } finally {
      categoryHierarchyInFlight = null;
    }
  })();
  return categoryHierarchyInFlight;
}

/** category name -> WP category ids (a frontend category can map from >1 WP category, e.g. a parent + its children). */
async function categoryIdsFor(category: BlogCategory): Promise<number[]> {
  const hierarchy = await getCategoryHierarchy();
  const ids: number[] = [];
  for (const [id, node] of hierarchy) {
    const own = CATEGORY_MAP[node.name.trim().toLowerCase()];
    const parent = node.parent ? hierarchy.get(node.parent) : undefined;
    const viaParent = parent ? CATEGORY_MAP[parent.name.trim().toLowerCase()] : undefined;
    if (own === category || viaParent === category) ids.push(id);
  }
  return ids;
}

let tagIndex: { data: Map<string, number>; expires: number } | null = null;
let tagIndexInFlight: Promise<Map<string, number>> | null = null;

async function getTagIndex(): Promise<Map<string, number>> {
  const now = Date.now();
  if (tagIndex && tagIndex.expires > now) return tagIndex.data;
  if (tagIndexInFlight) return tagIndexInFlight;

  tagIndexInFlight = (async () => {
    try {
      const result = await wpFetch("/wp-json/wp/v2/tags?per_page=100");
      const raw = Array.isArray(result?.data) ? (result.data as { id: number; name: string }[]) : [];
      const map = new Map(raw.map((t) => [t.name.trim().toLowerCase(), t.id]));
      tagIndex = { data: map, expires: Date.now() + TAXONOMY_CACHE_TTL_MS };
      return map;
    } catch (error) {
      console.error("[wordpress-blog] tag index fetch failed:", error);
      return tagIndex?.data ?? new Map();
    } finally {
      tagIndexInFlight = null;
    }
  })();
  return tagIndexInFlight;
}

const listCache = new Map<string, { data: BlogListResult; expires: number }>();
const listInFlight = new Map<string, Promise<BlogListResult>>();
const articleCache = new Map<string, { data: BlogArticle | undefined; expires: number }>();

function cacheKey(params: BlogListParams): string {
  return JSON.stringify([params.page ?? 1, params.perPage ?? DEFAULT_PER_PAGE, params.category ?? "", params.tag ?? ""]);
}

export async function fetchBlogList(params: BlogListParams = {}): Promise<BlogListResult> {
  const key = cacheKey(params);
  const now = Date.now();
  const cached = listCache.get(key);
  if (cached && cached.expires > now) return cached.data;
  const inFlight = listInFlight.get(key);
  if (inFlight) return inFlight;

  const page = Math.max(1, params.page ?? 1);
  const perPage = Math.min(50, Math.max(1, params.perPage ?? DEFAULT_PER_PAGE));

  const task = (async () => {
    try {
      const query = new URLSearchParams({
        status: "publish",
        page: String(page),
        per_page: String(perPage),
        _embed: "1",
      });
      if (params.category) {
        const ids = await categoryIdsFor(params.category);
        if (ids.length) query.set("categories", ids.join(","));
      }
      if (params.tag) {
        const tagId = (await getTagIndex()).get(params.tag.trim().toLowerCase());
        if (tagId) query.set("tags", String(tagId));
      }

      const result = await wpFetch(`/wp-json/wp/v2/posts?${query.toString()}`);
      const posts = result && Array.isArray(result.data) ? (result.data as WpPost[]) : [];
      const hierarchy = await getCategoryHierarchy();
      const items = posts.map((p) => normalisePost(p, hierarchy));

      const totalItems = Number(result?.headers.get("x-wp-total") ?? items.length);
      const totalPages = Number(result?.headers.get("x-wp-totalpages") ?? 1);
      const data: BlogListResult = { items, pagination: { page, perPage, totalItems, totalPages: totalPages || 1 } };
      listCache.set(key, { data, expires: Date.now() + CACHE_TTL_MS });
      return data;
    } catch (error) {
      console.error("[wordpress-blog] list fetch failed:", error);
      return listCache.get(key)?.data ?? { items: [], pagination: { page, perPage, totalItems: 0, totalPages: 1 } };
    } finally {
      listInFlight.delete(key);
    }
  })();
  listInFlight.set(key, task);
  return task;
}

export async function fetchBlogArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
  const now = Date.now();
  const cached = articleCache.get(slug);
  if (cached && cached.expires > now) return cached.data;

  try {
    const result = await wpFetch(`/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&status=publish&_embed=1`);
    const posts = result && Array.isArray(result.data) ? (result.data as WpPost[]) : [];
    if (posts.length !== 1) {
      articleCache.set(slug, { data: undefined, expires: now + CACHE_TTL_MS });
      return undefined;
    }
    const hierarchy = await getCategoryHierarchy();
    const data = normalisePost(posts[0]!, hierarchy);
    articleCache.set(slug, { data, expires: now + CACHE_TTL_MS });
    return data;
  } catch (error) {
    console.error(`[wordpress-blog] article fetch failed for "${slug}":`, error);
    return cached?.data;
  }
}

interface WpComment {
  id: number;
  parent: number;
  author_name: string;
  author_avatar_urls?: Record<string, string>;
  content: { rendered: string };
  date_gmt: string;
}

function normaliseComment(c: WpComment): BlogComment {
  const avatarUrl = c.author_avatar_urls ? Object.values(c.author_avatar_urls).pop() : undefined;
  return {
    id: String(c.id),
    ...(c.parent ? { parentId: String(c.parent) } : {}),
    authorName: c.author_name || "Anonymous",
    ...(avatarUrl ? { avatarUrl } : {}),
    content: decodeText(c.content.rendered),
    publishedAt: toIso(c.date_gmt) ?? new Date().toISOString(),
  };
}

const COMMENTS_CACHE_TTL_MS = 60 * 1000; // short: a poster should see their own approved comment appear promptly
const commentsCache = new Map<string, { data: BlogComment[]; expires: number }>();

export async function fetchComments(postId: string): Promise<BlogComment[]> {
  const now = Date.now();
  const cached = commentsCache.get(postId);
  if (cached && cached.expires > now) return cached.data;
  try {
    const result = await wpFetch(
      `/wp-json/wp/v2/comments?post=${encodeURIComponent(postId)}&status=approve&per_page=100&order=asc`,
    );
    const raw = result && Array.isArray(result.data) ? (result.data as WpComment[]) : [];
    const data = raw.map(normaliseComment);
    commentsCache.set(postId, { data, expires: now + COMMENTS_CACHE_TTL_MS });
    return data;
  } catch (error) {
    console.error(`[wordpress-blog] comments fetch failed for post ${postId}:`, error);
    return cached?.data ?? [];
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitComment(input: BlogCommentInput): Promise<BlogCommentResult> {
  if (!CMS_ORIGIN) return { ok: false, reason: "Comments are not available right now." };
  const authorName = input.authorName.trim().slice(0, 100);
  const authorEmail = input.authorEmail.trim();
  const content = input.content.trim().slice(0, 5000);
  if (!authorName || !isValidEmail(authorEmail) || !content) {
    return { ok: false, reason: "Please fill in your name, a valid email and a comment." };
  }
  const postId = Number(input.postId);
  if (!Number.isFinite(postId)) return { ok: false, reason: "Unknown article." };

  try {
    const res = await fetch(`${CMS_ORIGIN}/wp-json/wp/v2/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        post: postId,
        author_name: authorName,
        author_email: authorEmail,
        content,
        ...(input.parentId ? { parent: Number(input.parentId) } : {}),
      }),
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as { message?: string } | null;
      return { ok: false, reason: body?.message ?? "Your comment could not be submitted." };
    }
    commentsCache.delete(input.postId);
    return { ok: true };
  } catch (error) {
    console.error(`[wordpress-blog] comment submit failed for post ${input.postId}:`, error);
    return { ok: false, reason: "Your comment could not be submitted. Please try again." };
  }
}

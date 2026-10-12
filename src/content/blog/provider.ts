import type {
  BlogArticle,
  BlogComment,
  BlogCommentInput,
  BlogCommentResult,
  BlogDataProvider,
  BlogListParams,
  BlogListResult,
} from "./types";
import { WordPressBlogDataProvider } from "./wordpress-provider";
import { isHiddenBlogSlug } from "./visibility";

const DEFAULT_PER_PAGE = 12;

function paginate(all: BlogArticle[], params: BlogListParams = {}): BlogListResult {
  const filtered = all.filter(
    (a) =>
      !isHiddenBlogSlug(a.slug) &&
      (!params.category || a.category === params.category) &&
      (!params.tag || a.tags.includes(params.tag)),
  );
  const perPage = params.perPage ?? DEFAULT_PER_PAGE;
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const page = Math.min(Math.max(1, params.page ?? 1), totalPages);
  const start = (page - 1) * perPage;
  return {
    items: filtered.slice(start, start + perPage),
    pagination: { page, perPage, totalItems, totalPages },
  };
}

export class LocalBlogDataProvider implements BlogDataProvider {
  async listArticles(params?: BlogListParams): Promise<BlogListResult> {
    if (!import.meta.env.DEV) return paginate([], params);
    const { localBlogArticles } = await import("./local-data");
    return paginate(localBlogArticles, params);
  }

  async getArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
    if (!import.meta.env.DEV) return undefined;
    const { localBlogArticles } = await import("./local-data");
    return localBlogArticles.find((article) => article.slug === slug);
  }

  async listComments(): Promise<BlogComment[]> {
    return [];
  }

  async submitComment(): Promise<BlogCommentResult> {
    return { ok: false, reason: "Comments are not available on local sample articles." };
  }
}

export class EmptyBlogDataProvider implements BlogDataProvider {
  async listArticles(params?: BlogListParams): Promise<BlogListResult> {
    return paginate([], params);
  }

  async getArticleBySlug(): Promise<BlogArticle | undefined> {
    return undefined;
  }

  async listComments(): Promise<BlogComment[]> {
    return [];
  }

  async submitComment(): Promise<BlogCommentResult> {
    return { ok: false, reason: "Comments are not available right now." };
  }
}

/**
 * DEV uses the local sample articles. Production uses WordPress once it's
 * connected (see src/server/wordpress-blog.ts); until WP_CMS_ORIGIN is set,
 * WordPressBlogDataProvider's underlying fetch simply returns nothing, which
 * degrades to the same "empty editorial hub" state EmptyBlogDataProvider
 * used to provide explicitly.
 */
export function selectBlogDataProvider(isDevelopment: boolean): BlogDataProvider {
  return isDevelopment ? new LocalBlogDataProvider() : new WordPressBlogDataProvider();
}

export const blogDataProvider: BlogDataProvider = selectBlogDataProvider(import.meta.env.DEV);

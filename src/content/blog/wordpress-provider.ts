import type {
  BlogArticle,
  BlogComment,
  BlogCommentInput,
  BlogCommentResult,
  BlogDataProvider,
  BlogListParams,
  BlogListResult,
} from "./types";
import { getBlogArticleFn, listBlogArticlesFn, listBlogCommentsFn } from "./blog.functions";

/**
 * Reads go through server functions: they run in-process during SSR (the
 * hosted server runtime cannot make loopback HTTP calls to itself) and over
 * RPC during client-side navigation. Comment submission only happens from a
 * browser form, so it posts to the public endpoint with a relative URL.
 */
export class WordPressBlogDataProvider implements BlogDataProvider {
  async listArticles(params?: BlogListParams): Promise<BlogListResult> {
    return (await listBlogArticlesFn({ data: params ?? {} })) as BlogListResult;
  }

  async getArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
    const article = (await getBlogArticleFn({ data: { slug } })) as BlogArticle | null;
    return article ?? undefined;
  }

  async listComments(articleId: string): Promise<BlogComment[]> {
    return (await listBlogCommentsFn({ data: { postId: articleId } })) as BlogComment[];
  }

  async submitComment(input: BlogCommentInput): Promise<BlogCommentResult> {
    try {
      const res = await fetch(`/api/public/blog-comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      return (await res.json()) as BlogCommentResult;
    } catch {
      return { ok: false, reason: "Your comment could not be submitted. Please try again." };
    }
  }
}

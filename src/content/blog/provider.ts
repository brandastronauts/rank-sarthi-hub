import type { BlogArticle, BlogDataProvider } from "./types";

export class LocalBlogDataProvider implements BlogDataProvider {
  async listArticles(): Promise<BlogArticle[]> {
    if (!import.meta.env.DEV) return [];
    const { localBlogArticles } = await import("./local-data");
    return localBlogArticles;
  }

  async getArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
    if (!import.meta.env.DEV) return undefined;
    const { localBlogArticles } = await import("./local-data");
    return localBlogArticles.find((article) => article.slug === slug);
  }
}

export class EmptyBlogDataProvider implements BlogDataProvider {
  async listArticles(): Promise<BlogArticle[]> {
    return [];
  }

  async getArticleBySlug(): Promise<BlogArticle | undefined> {
    return undefined;
  }
}

export function selectBlogDataProvider(isDevelopment: boolean): BlogDataProvider {
  return isDevelopment ? new LocalBlogDataProvider() : new EmptyBlogDataProvider();
}

export const blogDataProvider: BlogDataProvider = selectBlogDataProvider(import.meta.env.DEV);
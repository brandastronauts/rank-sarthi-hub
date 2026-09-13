import { localBlogArticles } from "./local-data";
import type { BlogArticle, BlogDataProvider } from "./types";

export class LocalBlogDataProvider implements BlogDataProvider {
  async listArticles(): Promise<BlogArticle[]> {
    return localBlogArticles;
  }

  async getArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
    return localBlogArticles.find((article) => article.slug === slug);
  }
}

export const blogDataProvider: BlogDataProvider = new LocalBlogDataProvider();
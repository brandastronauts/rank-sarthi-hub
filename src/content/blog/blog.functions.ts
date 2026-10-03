import { createServerFn } from "@tanstack/react-start";
import type { BlogListParams } from "./types";

/**
 * Blog reads as server functions: during SSR they run in-process (no
 * loopback HTTP, which the hosted server runtime cannot do), and during a
 * client-side navigation they are called over RPC.
 */
export const listBlogArticlesFn = createServerFn({ method: "GET" })
  .inputValidator((data: BlogListParams | undefined) => data ?? {})
  .handler(async ({ data }) => {
    const { fetchBlogList } = await import("@/server/wordpress-blog");
    return fetchBlogList(data);
  });

export const getBlogArticleFn = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => ({ slug: String(data.slug) }))
  .handler(async ({ data }) => {
    const { fetchBlogArticleBySlug } = await import("@/server/wordpress-blog");
    return (await fetchBlogArticleBySlug(data.slug)) ?? null;
  });

export const listBlogCommentsFn = createServerFn({ method: "GET" })
  .inputValidator((data: { postId: string }) => ({ postId: String(data.postId) }))
  .handler(async ({ data }) => {
    const { fetchComments } = await import("@/server/wordpress-blog");
    return fetchComments(data.postId);
  });

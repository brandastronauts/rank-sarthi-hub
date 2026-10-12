/**
 * Blog posts that stay reachable by direct URL but are excluded from search
 * and public discovery: noindex,follow, no sitemap, no listing, no related-post
 * cards. Add a slug here instead of deleting the WordPress post.
 */
export const HIDDEN_BLOG_SLUGS: ReadonlySet<string> = new Set(["human-review-pending-on-rank-sarthi"]);

export function isHiddenBlogSlug(slug: string): boolean {
  return HIDDEN_BLOG_SLUGS.has(slug);
}

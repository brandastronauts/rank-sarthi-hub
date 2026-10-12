import { describe, expect, it } from "vitest";
import { isHiddenBlogSlug } from "@/content/blog/visibility";

describe("hidden blog posts", () => {
  it("hides the review-pending post from discovery", () => {
    expect(isHiddenBlogSlug("human-review-pending-on-rank-sarthi")).toBe(true);
  });
  it("keeps regular posts discoverable", () => {
    expect(isHiddenBlogSlug("jee-main-vs-jee-advanced-preparation-depth")).toBe(false);
  });
});

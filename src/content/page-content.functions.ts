import { createServerFn } from "@tanstack/react-start";
import type { ChapterContent, InfoPageContent } from "@/content/types";

/**
 * Chapter and info-page records are several MB of source. Reading them through
 * server functions keeps them out of the browser bundle: during SSR these run
 * in-process (content is still in the initial HTML), and on client-side
 * navigation they are fetched over RPC for just the requested page.
 */
export const getChapterContentFn = createServerFn({ method: "GET" })
  .inputValidator((d: { platform: string; subject: string; slug: string }) => ({
    platform: String(d.platform),
    subject: String(d.subject),
    slug: String(d.slug),
  }))
  .handler(async ({ data }) => {
    const { getChapter } = await import("@/content/chapters");
    return (getChapter(data.platform, data.subject, data.slug) ?? null) as ChapterContent | null;
  });

export const getInfoPageByUrlFn = createServerFn({ method: "GET" })
  .inputValidator((d: { url: string }) => ({ url: String(d.url) }))
  .handler(async ({ data }) => {
    const { getInfoPageByUrl } = await import("@/content/info");
    return (getInfoPageByUrl(data.url) ?? null) as InfoPageContent | null;
  });

export const getInfoPageFn = createServerFn({ method: "GET" })
  .inputValidator((d: { platform: string; slug: string }) => ({ platform: String(d.platform), slug: String(d.slug) }))
  .handler(async ({ data }) => {
    const { getInfoPage } = await import("@/content/info");
    return (getInfoPage(data.platform, data.slug) ?? null) as InfoPageContent | null;
  });

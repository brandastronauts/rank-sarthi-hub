import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absolute, sitemapUrls } from "@/content/registry";

/**
 * Sitemap inclusion depends ONLY on the URL registry:
 *   buildStatus === "built" && indexation === "index".
 * Optional/proof block availability never affects it.
 */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = sitemapUrls().map((record) =>
          [
            "  <url>",
            `    <loc>${absolute(record.url)}</loc>`,
            `    <priority>${record.priority === "P1" ? "1.0" : record.priority === "P2" ? "0.7" : "0.5"}</priority>`,
            record.lastVerified ? `    <lastmod>${record.lastVerified}</lastmod>` : null,
            "  </url>",
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

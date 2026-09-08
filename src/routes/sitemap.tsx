import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/shell/PageFrame";
import { builtUrls } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import type { UrlRecord } from "@/content/types";

/**
 * T29 — HTML sitemap for humans (teachers / internal content review).
 * Generated entirely from the URL registry: every record with
 * buildStatus === "built", regardless of indexation. Never hand-maintained.
 * Separate from /sitemap.xml, which stays built + index only.
 */
export const Route = createFileRoute("/sitemap")({
  head: () =>
    buildHead({
      url: "/sitemap",
      title: "Rank Sarthi Sitemap — every published page",
      description:
        "A single index of every page currently live on Rank Sarthi, grouped by exam and subject, for readers and internal content review.",
      jsonLd: [breadcrumbSchema("/sitemap")],
    }),
  component: SitemapPage,
});

interface Group {
  heading: string;
  records: UrlRecord[];
}

function jeeBucket(record: UrlRecord): string {
  if (record.url.startsWith("/jee/physics")) return "JEE — Physics";
  if (record.url.startsWith("/jee/chemistry")) return "JEE — Chemistry";
  if (record.url.startsWith("/jee/mathematics")) return "JEE — Mathematics";
  return "JEE — General & Syllabus";
}

function buildGroups(records: UrlRecord[]): Group[] {
  const order = [
    "Main",
    "JEE — General & Syllabus",
    "JEE — Physics",
    "JEE — Chemistry",
    "JEE — Mathematics",
    "NEET",
    "NDA",
  ];
  const buckets = new Map<string, UrlRecord[]>();

  for (const record of records) {
    let heading: string;
    if (record.platform === "jee") heading = jeeBucket(record);
    else if (record.platform === "neet") heading = "NEET";
    else if (record.platform === "nda") heading = "NDA";
    else heading = "Main";
    const list = buckets.get(heading) ?? [];
    list.push(record);
    buckets.set(heading, list);
  }

  const known = order
    .filter((heading) => (buckets.get(heading)?.length ?? 0) > 0)
    .map((heading) => ({ heading, records: buckets.get(heading)! }));

  const other = [...buckets.keys()]
    .filter((heading) => !order.includes(heading))
    .sort()
    .map((heading) => ({ heading, records: buckets.get(heading)! }));

  return [...known, ...other].map((group) => ({
    heading: group.heading,
    records: [...group.records].sort((a, b) => a.url.localeCompare(b.url)),
  }));
}

function SitemapPage() {
  const records = builtUrls();
  const groups = buildGroups(records);

  return (
    <PageFrame url="/sitemap">
      <header className="mb-10 max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">Rank Sarthi Sitemap</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Every page currently built on Rank Sarthi, grouped by exam and subject. Pages marked
          “Draft — review pending” are published for internal academic review and are not yet
          open to search engines.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {records.length} pages listed across {groups.length} sections.
        </p>
      </header>

      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.heading} aria-labelledby={`grp-${slug(group.heading)}`}>
            <h2
              id={`grp-${slug(group.heading)}`}
              className="border-b border-border pb-2 font-display text-xl font-semibold text-navy"
            >
              {group.heading}{" "}
              <span className="text-sm font-normal text-muted-foreground">({group.records.length})</span>
            </h2>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {group.records.map((record) => (
                <li key={record.url} className="min-w-0 text-sm">
                  <Link
                    to={record.url}
                    className="break-words font-medium text-navy underline-offset-4 hover:text-crimson hover:underline"
                  >
                    {record.name}
                  </Link>
                  <span className="block break-words text-xs text-muted-foreground">
                    {record.url}
                    {record.indexation === "noindex" ? " · Draft — review pending" : null}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageFrame>
  );
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

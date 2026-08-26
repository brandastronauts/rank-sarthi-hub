import { Link } from "@tanstack/react-router";
import { getUrl, isIndexable } from "@/content/registry";
import type { LinkContract } from "@/content/types";

const RELATION_LABEL: Record<string, string> = {
  up: "Parent",
  prerequisite: "Prerequisite",
  related: "Related",
  "same-unit": "Same unit",
  next: "Next",
  forward: "Builds towards",
};

/**
 * B36 — Related content rail.
 * Only links to URLs that exist in the registry AND are built. Links to
 * non-indexable pages carry rel="nofollow" so crawl signals stay honest.
 */
export function RelatedRail({
  id = "related",
  links = [],
  heading = "Related chapters and pages",
}: {
  id?: string;
  links?: LinkContract[];
  heading?: string;
}) {
  const live = links
    .map((l) => ({ link: l, record: getUrl(l.url) }))
    .filter((e) => e.record?.buildStatus === "built");

  if (!live.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {live.map(({ link, record }) => (
          <li key={link.url}>
            <Link
              to={link.url}
              rel={isIndexable(record) ? undefined : "nofollow"}
              className="card-lift block h-full rounded-xl border border-border bg-white p-4 transition-colors hover:border-accent/50"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {RELATION_LABEL[link.relation] ?? "Related"}
              </p>
              <p className="mt-1 text-sm font-bold text-primary">{link.label}</p>
              {link.description ? (
                <p className="mt-1 text-xs text-ink/75">{link.description}</p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

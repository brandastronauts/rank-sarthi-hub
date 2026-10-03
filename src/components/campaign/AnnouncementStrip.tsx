import { Link } from "@tanstack/react-router";
import { getUrl, isIndexable } from "@/content/registry";
import type { AnnouncementCampaign } from "@/content/offers/campaign";

/**
 * JEE campaign announcement strip.
 * Renders only when the offer page is actually built, so the strip can never
 * point at a planned route. Wraps safely at 390px with no horizontal overflow.
 */
export function AnnouncementStrip({ campaign }: { campaign: AnnouncementCampaign }) {
  const href: string = campaign.href;
  const record = getUrl(href);
  if (record?.buildStatus !== "built") return null;

  return (
    <aside aria-label={"ariaLabel" in campaign ? campaign.ariaLabel : "JEE Test Series announcement"} className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col items-start gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <p className="min-w-0 break-words text-xs font-medium leading-snug sm:text-sm">
          {campaign.message}
        </p>
        <Link
          to={href}
          rel={isIndexable(record) ? undefined : "nofollow"}
          className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-opacity hover:opacity-90"
        >
          {campaign.ctaLabel}
        </Link>
      </div>
    </aside>
  );
}

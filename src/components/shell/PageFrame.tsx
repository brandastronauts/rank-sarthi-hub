import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "./Breadcrumbs";
import { AnnouncementStrip } from "@/components/campaign/AnnouncementStrip";
import { OfferPopup } from "@/components/campaign/OfferPopup";
import { showJeeAnnouncement, showJeeOfferPopup } from "@/content/offers/campaign";
import { HomepageAcquisition } from "@/components/acquisition/HomepageAcquisition";

/**
 * Global page frames.
 *
 * F1 — cinematic/editorial (homepage, platform homes): no breadcrumb band,
 *      sections own their own full-bleed backgrounds.
 * F2 — document frame (syllabus, chapter, guides): breadcrumb band + contained
 *      content column.
 * F3 — dense two-column frame: breadcrumb band + sticky aside slot.
 *
 * Campaign surfaces (JEE announcement strip, JEE offer popup) are scoped by
 * URL, so NEET and NDA pages never carry JEE commercial copy.
 */
export type FrameId = "F1" | "F2" | "F3";

interface PageFrameProps {
  frame?: FrameId;
  url: string;
  children: ReactNode;
  aside?: ReactNode;
  /** Optional full-bleed header rendered above the content column. */
  masthead?: ReactNode;
  /**
   * True only when the page's own first section is a full-bleed dark hero
   * that the header can float transparently over (homepage, platform homes).
   * Every other page keeps the header solid from the first paint, since a
   * transparent header over light content renders illegibly white-on-white.
   */
  heroBackdrop?: boolean;
}

export function PageFrame({ frame = "F2", url, children, aside, masthead, heroBackdrop = false }: PageFrameProps) {
  const strip = showJeeAnnouncement(url);
  const popup = showJeeOfferPopup(url);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader transparentAtTop={heroBackdrop} />
      <main id="main" className="flex-1">
        {strip ? (
          <div className="pt-20 md:pt-24">
            <AnnouncementStrip />
          </div>
        ) : null}
        {frame === "F1" ? (
          <>
            {masthead}
            {children}
          </>
        ) : (
          <>
            <div
              className={`border-b border-border bg-ivory ${strip ? "pt-5" : "pt-20 md:pt-24"}`}
            >
              <div className="container-page">
                <Breadcrumbs url={url} />
              </div>
            </div>
            {masthead}
            <div className="container-page py-10 md:py-14">
              {frame === "F3" && aside ? (
                <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
                  <aside className="hidden lg:block lg:pt-1">{aside}</aside>
                  <div className="min-w-0">{children}</div>
                </div>
              ) : (
                children
              )}
            </div>
          </>
        )}
      </main>
      <SiteFooter />
      {url === "/" ? <HomepageAcquisition /> : null}
      {popup ? <OfferPopup /> : null}
    </div>
  );
}

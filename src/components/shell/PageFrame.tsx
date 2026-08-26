import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "./Breadcrumbs";

/**
 * Global page frames.
 *
 * F1 — cinematic/editorial (homepage, platform homes): no breadcrumb band,
 *      sections own their own full-bleed backgrounds.
 * F2 — document frame (syllabus, chapter, guides): breadcrumb band + contained
 *      content column.
 * F3 — dense two-column frame: breadcrumb band + sticky aside slot.
 */
export type FrameId = "F1" | "F2" | "F3";

interface PageFrameProps {
  frame?: FrameId;
  url: string;
  children: ReactNode;
  aside?: ReactNode;
  /** Optional full-bleed header rendered above the content column. */
  masthead?: ReactNode;
}

export function PageFrame({ frame = "F2", url, children, aside, masthead }: PageFrameProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main id="main" className="flex-1">
        {frame === "F1" ? (
          <>
            {masthead}
            {children}
          </>
        ) : (
          <>
            <div className="border-b border-border bg-ivory pt-16 md:pt-20">
              <div className="container-page">
                <Breadcrumbs url={url} />
              </div>
            </div>
            {masthead}
            <div className="container-page py-10 md:py-14">
              {frame === "F3" && aside ? (
                <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
                  <aside className="lg:pt-1">{aside}</aside>
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
    </div>
  );
}

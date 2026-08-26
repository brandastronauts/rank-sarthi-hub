import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { ancestorsOf, getUrl } from "@/content/registry";

/** B23 — Breadcrumb (server-rendered crawlable anchors). */
export function Breadcrumbs({ url, tone = "light" }: { url: string; tone?: "light" | "dark" }) {
  const record = getUrl(url);
  if (!record || record.url === "/") return null;

  const ancestors = ancestorsOf(url);
  const home = ancestors.some((a) => a.url === "/") ? undefined : getUrl("/");
  const trail = [...(home ? [home] : []), ...ancestors];

  const muted = tone === "dark" ? "text-white/60" : "text-muted-foreground";
  const current = tone === "dark" ? "text-white" : "text-primary";

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm ${muted}`}>
        {trail.map((crumb) => (
          <li key={crumb.url} className="flex items-center gap-1.5">
            {crumb.buildStatus === "built" ? (
              <Link to={crumb.url} className="transition-colors hover:text-accent">
                {crumb.name}
              </Link>
            ) : (
              /* Never link to a page that does not exist yet. */
              <span className="opacity-70">{crumb.name}</span>
            )}
            <ChevronRight className="size-3.5 opacity-50" aria-hidden />
          </li>
        ))}
        <li className={`font-medium ${current}`} aria-current="page">
          {record.name}
        </li>
      </ol>
    </nav>
  );
}

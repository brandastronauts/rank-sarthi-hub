import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ToolCard } from "@/content/types";

/**
 * B54 — Tool directory grid with client-side filters.
 * Filtering never changes the URL, so no thin filter pages are created.
 */
export function ToolsGrid({
  id,
  heading,
  intro,
  filters,
  items,
  note,
}: {
  id?: string;
  heading?: string;
  intro?: string;
  filters: string[];
  items: ToolCard[];
  note?: string;
}) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((item) => item.filters.includes(active));
  const options = ["All", ...filters.filter((f) => f !== "All")];

  return (
    <section id={id} className="scroll-mt-28">
      {heading ? <h2 className="text-display-md text-primary">{heading}</h2> : null}
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter tools">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={active === option}
            onClick={() => setActive(option)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              active === option
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white text-ink hover:border-primary/60"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
        Showing {shown.length} of {items.length} tools.
      </p>

      <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => {
          const segments = item.url.replace(/^\//, "").split("/");
          return (
            <li
              key={item.url}
              className={`flex h-full flex-col rounded-xl border bg-white p-5 ${
                item.featured ? "border-primary/50 shadow-sm" : "border-border"
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-base font-bold text-ink">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/80">{item.tagline}</p>
              {segments.length === 2 ? (
                <Link
                  to="/$platform/$subject"
                  params={{ platform: segments[0]!, subject: segments[1]! }}
                  className="mt-4 inline-flex w-fit items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  {item.cta ?? "Open Calculator"}
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>

      {note ? <p className="mt-4 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}

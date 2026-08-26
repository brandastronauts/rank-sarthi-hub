import { NavLinkOrText } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { builtPlatforms } from "@/content/platforms";
import { builtUrls } from "@/content/registry";
import { site } from "@/content/site";

/**
 * Footer links come from the URL registry: only pages with buildStatus
 * "built" are rendered. Planned pages are simply absent — the footer never
 * ships dead links or placeholder routes.
 */
function useFooterColumns() {
  const platformLinks = builtPlatforms().map((p) => destinations.platformHome(p.slug));

  const legal = builtUrls()
    .filter((r) => r.parent === "/legal" || r.url.startsWith("/legal"))
    .map((r) => destinations.page(r.name, r.url));

  const company = ["/about", "/contact", "/how-it-works"].map((url) =>
    destinations.page(url.replace("/", "").replace(/-/g, " "), url),
  );

  return [
    { title: "Platforms", links: platformLinks },
    { title: "Company", links: company },
    { title: "Legal", links: legal },
  ].filter((col) => col.links.some((d) => d.kind !== "hidden"));
}

export function SiteFooter() {
  const columns = useFooterColumns();
  const sections = [
    { label: "How it works", href: "/#how" },
    { label: "For institutes", href: "/#institutes" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold">
              Rank Sarthi<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/65">{site.tagline}</p>
          </div>

          <nav aria-label="On this site">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gold">Rank Sarthi</h2>
            <ul className="mt-4 space-y-2.5">
              {sections.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((d, i) => (
                  <li key={`${col.title}-${i}`}>
                    <NavLinkOrText
                      d={d}
                      className="text-sm capitalize text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-sm text-primary-foreground/55">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

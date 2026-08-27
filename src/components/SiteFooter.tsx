import { NavLinkOrText } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { footerGroups } from "@/components/nav-data";
import { site } from "@/content/site";
import { BrandLogo } from "@/components/BrandLogo";

/**
 * The footer communicates the full information architecture. Visibility comes
 * from footerGroups (IA); clickability comes from destinations.nav
 * (availability). A category is never dropped just because its routes are
 * still planned, and a planned route is never rendered as an anchor.
 */
const BRAND_BLURB =
  "Preparation Intelligence for JEE, NEET and NDA aspirants. Understand why marks are being lost, what deserves attention next and whether preparation is actually improving.";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-page py-10 md:py-12">
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-[minmax(15rem,1.65fr)_repeat(5,minmax(0,1fr))] xl:gap-x-10">
          <div>
            <BrandLogo height={62} mobileHeight={54} surface="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">{BRAND_BLURB}</p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold">{group.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.links
                  .filter((l) => !l.suppressed)
                  .map((l) => (
                    <li key={l.label}>
                      <NavLinkOrText
                        d={destinations.nav(l.label, l.href)}
                        className="text-sm text-primary-foreground/90 transition-colors hover:text-gold"
                      />
                    </li>
                  ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-10 border-t border-white/10 pt-5 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

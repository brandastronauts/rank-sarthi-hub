import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, type NavItem, type NavLink } from "./nav-data";
import { CtaLink, NavLinkOrText } from "@/components/CtaLink";
import { BrandLogo } from "@/components/BrandLogo";
import { destinations } from "@/content/destinations";

const tintStyles: Record<string, { bar: string; heading: string; chip: string }> = {
  jee: { bar: "bg-jee", heading: "text-jee", chip: "bg-jee/10 text-jee" },
  neet: { bar: "bg-neet", heading: "text-neet", chip: "bg-neet/10 text-neet" },
  nda: { bar: "bg-nda", heading: "text-nda", chip: "bg-nda/15 text-nda" },
};

const linkClass =
  "block rounded-md py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:text-accent";

function visible(links: NavLink[]) {
  return links.filter((l) => !l.suppressed);
}

function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <a href="/" onClick={onNavigate} aria-label="Rank Sarthi home" className="inline-flex items-center">
      <BrandLogo height={70} mobileHeight={48} surface="dark" priority />
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  const solid = scrolled || openIndex !== null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-navy-deep/95 backdrop-blur-md shadow-elevated text-primary-foreground"
          : "bg-transparent text-primary-foreground"
      }`}
    >
      <nav aria-label="Main navigation" className="container-page">
        <div className="flex items-center justify-between gap-4 py-2.5">
          <Logo />

          <ul className="hidden items-center gap-0.5 min-[900px]:flex">
            {navItems.map((item, i) => {
              const hasMenu = !!(item.columns || item.simple);
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => (hasMenu ? open(i) : setOpenIndex(null))}
                  onMouseLeave={scheduleClose}
                  onFocus={() => (hasMenu ? undefined : setOpenIndex(null))}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
                  }}
                >
                  {hasMenu ? (
                    <button
                      type="button"
                      aria-expanded={openIndex === i}
                      aria-haspopup="true"
                      onClick={(e) =>
                        // Keyboard activation (detail 0) toggles; pointer clicks
                        // only open, because hover has already opened the menu.
                        e.detail === 0 ? setOpenIndex(openIndex === i ? null : i) : open(i)
                      }
                      className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-4 transition-transform duration-200 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <NavLinkOrText
                      d={destinations.nav(item.label, item.href)}
                      className="block rounded-md px-3 py-2 text-sm font-semibold text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                    />
                  )}

                  {openIndex === i && hasMenu && (
                    <Dropdown item={item} onNavigate={() => setOpenIndex(null)} />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 min-[900px]:flex">
            <NavLinkOrText
              d={destinations.nav("Log in", "/login")}
              className="rounded-md px-3 py-2 text-sm font-semibold text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-primary-foreground"
            />
            <CtaLink
              d={destinations.diagnostic("Take a diagnostic")}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              disabledClassName="hover:translate-y-0"
            />
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-white/20 text-primary-foreground min-[900px]:hidden"
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 bg-navy-deep text-primary-foreground transition-transform duration-300 min-[900px]:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col">
          <div className="container-page flex items-center justify-between py-2.5">
            <Logo onNavigate={() => setMobileOpen(false)} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-white/20"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="container-page flex-1 overflow-y-auto pb-10">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {navItems.map((item, i) => {
                const groups =
                  item.columns ?? (item.simple ? [{ title: item.label, links: item.simple }] : null);
                const expanded = mobileSection === i;
                return (
                  <li key={item.label}>
                    {groups ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setMobileSection(expanded ? null : i)}
                          className="flex min-h-11 w-full items-center justify-between py-4 text-left text-base font-semibold"
                        >
                          {item.label}
                          <ChevronDown
                            aria-hidden="true"
                            className={`size-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                          />
                        </button>
                        {expanded && (
                          <div className="menu-in space-y-5 pb-5">
                            {groups.map((col) => (
                              <div key={col.title}>
                                <p
                                  className={`text-xs font-bold uppercase tracking-widest ${
                                    (item.tint ? tintStyles[item.tint]?.heading : null) ?? "text-gold"
                                  }`}
                                >
                                  {col.title}
                                </p>
                                <ul className="mt-2 space-y-1">
                                  {visible(col.links).map((l) => (
                                    <li key={l.label}>
                                      <NavLinkOrText
                                        d={destinations.nav(l.label, l.href)}
                                        className="block py-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
                                      />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLinkOrText
                        d={destinations.nav(item.label, item.href)}
                        className="block py-4 text-base font-semibold"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-3">
              <NavLinkOrText
                d={destinations.nav("Log in", "/login")}
                className="block rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-semibold"
              />
              <CtaLink
                d={destinations.diagnostic("Take a diagnostic")}
                className="block rounded-lg bg-accent px-5 py-3 text-center text-sm font-bold text-accent-foreground"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Dropdown({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const tint = item.tint ? tintStyles[item.tint] : null;

  const simple = item.simple;
  if (simple) {
    return (
      <div className="menu-in absolute left-0 top-full w-64 pt-3">
        <div className="overflow-hidden rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-menu">
          <span className={`block h-1 rounded-full ${tint?.bar ?? "bg-gold"} mb-2`} aria-hidden="true" />
          <ul>
            {visible(simple).map((l) => (
              <li key={l.label} onClick={onNavigate}>
                <NavLinkOrText
                  d={destinations.nav(l.label, l.href)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="menu-in absolute left-1/2 top-full w-[min(64rem,90vw)] -translate-x-1/2 pt-3">
      <div className="overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-menu">
        <span className={`block h-1 w-full ${tint?.bar ?? "bg-gold"}`} aria-hidden="true" />
        <div className="grid gap-8 p-8 md:grid-cols-4">
          {item.columns?.map((col) => (
            <div key={col.title}>
              <h3 className={`text-xs font-bold uppercase tracking-widest ${tint?.heading ?? "text-primary"}`}>
                {col.title}
              </h3>
              <ul className="mt-3 space-y-1">
                {visible(col.links).map((l) => (
                  <li key={l.label} onClick={onNavigate}>
                    <NavLinkOrText d={destinations.nav(l.label, l.href)} className={linkClass} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.blurb && (
          <p className={`px-8 py-4 text-sm font-medium ${tint?.chip ?? "bg-secondary text-foreground"}`}>
            {item.blurb}
          </p>
        )}
      </div>
    </div>
  );
}

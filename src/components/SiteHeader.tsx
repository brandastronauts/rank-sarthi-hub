import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, type NavItem } from "./nav-data";

const tintStyles: Record<string, { bar: string; heading: string; chip: string }> = {
  jee: {
    bar: "bg-jee",
    heading: "text-jee",
    chip: "bg-jee/10 text-jee",
  },
  neet: {
    bar: "bg-neet",
    heading: "text-neet",
    chip: "bg-neet/10 text-neet",
  },
  nda: {
    bar: "bg-nda",
    heading: "text-nda",
    chip: "bg-nda/15 text-nda",
  },
};

function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <a
      href="#home"
      onClick={onNavigate}
      aria-label="Rank Sarthi home"
      className="font-display text-xl font-extrabold tracking-tight"
    >
      Rank Sarthi<span className="text-accent">.</span>
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
        <div className="flex h-18 items-center justify-between gap-6 py-4">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => (item.columns || item.simple ? open(i) : setOpenIndex(null))}
                onMouseLeave={scheduleClose}
              >
                {item.columns || item.simple ? (
                  <button
                    type="button"
                    aria-expanded={openIndex === i}
                    aria-haspopup="true"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-primary-foreground/85 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                )}

                {openIndex === i && (item.columns || item.simple) && (
                  <Dropdown item={item} onNavigate={() => setOpenIndex(null)} />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="/coming-soon?topic=Log%20In"
              className="text-sm font-semibold text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              Log In
            </a>
            <a
              href="/coming-soon?topic=Start%20Free%20Test"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              Take a Diagnostic
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20 text-primary-foreground lg:hidden"
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 bg-navy-deep text-primary-foreground transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col">
          <div className="container-page flex h-18 items-center justify-between py-4">
            <Logo onNavigate={() => setMobileOpen(false)} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="container-page flex-1 overflow-y-auto pb-10">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {navItems.map((item, i) => {
                const groups = item.columns ?? (item.simple ? [{ title: item.label, links: item.simple }] : null);
                const expanded = mobileSection === i;
                return (
                  <li key={item.label}>
                    {groups ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setMobileSection(expanded ? null : i)}
                          className="flex w-full items-center justify-between py-4 text-left text-base font-semibold"
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
                                  {col.links.map((l) => (
                                    <li key={l.label}>
                                      <a
                                        href={l.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-md py-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                                      >
                                        {l.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 text-base font-semibold"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-3">
              <a
                href="/coming-soon?topic=Start%20Free%20Test"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-accent px-5 py-3 text-center text-sm font-bold text-accent-foreground"
              >
                Take a Diagnostic
              </a>
              <a
                href="/coming-soon?topic=Log%20In"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg border border-white/25 px-5 py-3 text-center text-sm font-semibold"
              >
                Log In
              </a>
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
            {simple.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={onNavigate}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
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
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={onNavigate}
                      className="block rounded-md py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.blurb && (
          <p className={`px-8 py-4 text-sm font-medium ${tint?.chip ?? "bg-secondary text-foreground"}`}>{item.blurb}</p>
        )}
      </div>
    </div>
  );
}

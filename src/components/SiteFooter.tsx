import { placeholder as p } from "./nav-data";

const columns = [
  {
    title: "Platforms",
    links: [
      { label: "JeeRankUp", href: "#platforms" },
      { label: "NeetRankUp", href: "#platforms" },
      { label: "NDARankUp", href: "#platforms" },
    ],
  },
  {
    title: "Free Resources",
    links: [
      { label: "NDA Syllabus PDF", href: p("NDA Syllabus PDF") },
      { label: "JEE Formula Sheet", href: p("JEE Formula Sheet") },
      { label: "NEET NCERT Guide", href: p("NEET NCERT Guide") },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: p("About") },
      { label: "Blog", href: p("Blog") },
      { label: "Contact", href: p("Contact") },
      { label: "For Institutes", href: "#institutes" },
      { label: "Careers", href: p("Careers") },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: p("Privacy Policy") },
      { label: "Terms of Service", href: p("Terms of Service") },
      { label: "Refund Policy", href: p("Refund Policy") },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-extrabold">
              Rank Sarthi<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/65">
              AI-powered mock tests and diagnosis for JEE, NEET and NDA aspirants across India.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-14 border-t border-white/10 pt-6 text-sm text-primary-foreground/55">
          © 2026 Rank Sarthi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

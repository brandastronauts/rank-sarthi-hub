import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon | Rank Sarthi" },
      { name: "description", content: "This Rank Sarthi page is being built. Explore our AI mock tests for JEE, NEET and NDA in the meantime." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Coming Soon | Rank Sarthi" },
      { property: "og:description", content: "This Rank Sarthi page is being built." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/coming-soon" }],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  return (
    <>
      <SiteHeader />
      <main className="bg-navy-gradient flex min-h-screen items-center justify-center px-5 text-primary-foreground">
        <div className="max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Rank Sarthi</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">This page is on the way</h1>
          <p className="mt-4 text-primary-foreground/75">
            We are building this section right now. Head back to the homepage to explore JeeRankUp, NeetRankUp and
            NDARankUp.
          </p>
          <a
            href="/#home"
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground"
          >
            Back to homepage
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { EditorialFacultyExample } from "@/components/academic/EditorialFacultyExample";

export const Route = createFileRoute("/faculty-design-preview")({
  head: () => ({
    meta: [
      { title: "Sachin Garg Faculty Design Preview | Rank Sarthi" },
      { name: "description", content: "Single-profile editorial faculty design proposal for Sachin Garg at Rank Sarthi." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Sachin Garg Faculty Design Preview | Rank Sarthi" },
      { property: "og:description", content: "Single-profile editorial faculty design proposal for Sachin Garg at Rank Sarthi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: FacultyDesignPreview,
});

function FacultyDesignPreview() {
  return (
    <main className="min-h-screen bg-ivory py-12 sm:py-20">
      <section className="container-page" aria-label="Faculty design proposal">
        <p className="eyebrow text-primary">Your Subject Sarthi</p>
        <h1 className="mt-3 text-display-md text-primary">Meet Our Subject Matter Experts</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EditorialFacultyExample />
        </div>
      </section>
    </main>
  );
}
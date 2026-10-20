import { createFileRoute } from "@tanstack/react-router";
import { DiagnosticChooser } from "@/components/DiagnosticChooser";
import { PageFrame } from "@/components/shell/PageFrame";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildHead } from "@/lib/seo";

const title = "Take a Diagnostic | Rank Sarthi";
const description =
  "Choose JEE or NEET to continue to Rank Up and start improving your score. Explore free NDA preparation resources on Rank Sarthi.";

export const Route = createFileRoute("/diagnostic")({
  head: () =>
    buildHead({
      url: "/diagnostic",
      title,
      description,
      ogType: "website",
      // No itemList: the cards here link to external sub-portal domains, not
      // internal registry paths, so there is nothing absolute() can resolve.
      jsonLd: [
        collectionPageSchema({ url: "/diagnostic", name: "Take a Diagnostic", description }),
        breadcrumbSchema("/diagnostic"),
      ],
    }),
  component: DiagnosticPage,
});

function DiagnosticPage() {
  return (
    <PageFrame frame="F1" url="/diagnostic">
      <DiagnosticChooser />
    </PageFrame>
  );
}

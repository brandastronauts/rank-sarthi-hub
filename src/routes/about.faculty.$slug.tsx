import { createFileRoute, notFound } from "@tanstack/react-router";
import { FacultyProfilePage } from "@/components/academic/FacultyProfilePage";
import { PageFrame } from "@/components/shell/PageFrame";
import { getAcademicProfile } from "@/content/academic-profiles";
import { absolute, getUrl } from "@/content/registry";
import { breadcrumbSchema } from "@/lib/schema";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/about/faculty/$slug")({
  loader: ({ params }) => {
    const url = `/about/faculty/${params.slug}`;
    const record = getUrl(url);
    const profile = getAcademicProfile(params.slug);
    if (!profile || record?.buildStatus !== "built") throw notFound();
    return { profile, url };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Faculty profile not found | Rank Sarthi" }, { name: "robots", content: "noindex, follow" }] };
    const { profile, url } = loaderData;
    const description = `${profile.name} is ${profile.title} at Rank Sarthi, contributing to ${profile.subject} learning resources and academic development.`;
    return buildHead({
      url,
      title: `${profile.name} — ${profile.title} | Rank Sarthi`,
      description,
      ogTitle: `${profile.name} — ${profile.title}`,
      ogDescription: description,
      ogType: "website",
      jsonLd: [
        { "@context": "https://schema.org", "@type": "WebPage", name: profile.name, description, url: absolute(url), inLanguage: "en-IN" },
        breadcrumbSchema(url),
      ].filter(Boolean),
    });
  },
  component: FacultyProfileRoute,
});

function FacultyProfileRoute() {
  const { profile, url } = Route.useLoaderData();
  return <PageFrame frame="F2" url={url}><FacultyProfilePage profile={profile} /></PageFrame>;
}
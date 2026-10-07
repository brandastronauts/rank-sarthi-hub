import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { AcademicProfile } from "@/content/types";
import { Button } from "@/components/ui/button";
import { getUrl } from "@/content/registry";
import { FacultyPhoto } from "./FacultyPhoto";
import { InstitutionCredentialBadge } from "./InstitutionCredentialBadge";

/**
 * Public faculty profile page.
 *
 * Only approved, publication-safe content is rendered. Internal verification
 * status, evidence queues and review-workflow states are never displayed.
 * Credentials, publications, research, LinkedIn and email sections render only
 * when real approved values exist; otherwise the whole section is omitted.
 */
export function FacultyProfilePage({ profile }: { profile: AcademicProfile }) {
  const relatedPages = (profile.relatedPages ?? [])
    .map((url) => getUrl(url))
    .filter((record): record is NonNullable<typeof record> => !!record && record.buildStatus === "built");

  const hasContactInfo = !!(profile.linkedin || profile.email);
  const hasCredentials = !!(profile.credentials?.length || profile.publications?.length || profile.research?.length);
  const credentialSections = Array.from(new Set(profile.credentials?.map((row) => row.section ?? "Academic Credentials") ?? []));

  return (
    <article>
      {/* 1. Hero */}
      <header className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <p className="eyebrow text-accent">Academic Team · {profile.subject}</p>
          <h1 className="mt-3 text-display-lg text-primary">{profile.name}</h1>
          <p className="mt-3 text-lg font-semibold text-ink/85">{profile.title}</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{profile.shortProfile}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.expertise.slice(0, 5).map((item) => (
              <li key={item} className="rounded-full border border-border bg-ivory px-3 py-1.5 text-xs font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-lg border border-border bg-secondary shadow-card">
          <FacultyPhoto profile={profile} initialsClassName="text-6xl" />
        </div>
      </header>

      {/* 2. About */}
      <section className="mt-12 border-t border-border pt-10" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-display-md text-primary">About {profile.name}</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85">
          {profile.detailedProfile.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 3. Academic focus */}
      {profile.academicFocus.length ? (
        <section className="mt-10" aria-labelledby="focus-heading">
          <h2 id="focus-heading" className="text-xl font-bold text-primary">Academic focus</h2>
          <ul className="mt-4 grid max-w-3xl gap-3 sm:grid-cols-2">
            {profile.academicFocus.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-ink/85">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 4. Areas of expertise */}
      <section className="mt-10" aria-labelledby="expertise-heading">
        <h2 id="expertise-heading" className="text-xl font-bold text-primary">Areas of expertise</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.expertise.map((item) => (
            <li key={item} className="rounded-full border border-border bg-ivory px-3 py-1.5 text-sm font-medium text-ink">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Exams and subjects */}
      {profile.examScope.length ? (
        <section className="mt-10" aria-labelledby="scope-heading">
          <h2 id="scope-heading" className="text-xl font-bold text-primary">Exams and subjects supported</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.examScope.map((item) => (
              <li key={item} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 6. Contribution at Rank Sarthi */}
      {profile.contribution.length ? (
        <section className="mt-10" aria-labelledby="contribution-heading">
          <h2 id="contribution-heading" className="text-xl font-bold text-primary">
            Academic contribution at Rank Sarthi
          </h2>
          <ul className="mt-4 max-w-3xl space-y-3">
            {profile.contribution.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-ink/85">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 7. Academic areas */}
      {profile.reviewAreas.length ? (
        <section className="mt-10 rounded-lg border border-border bg-ivory p-5" aria-labelledby="areas-heading">
          <h2 id="areas-heading" className="text-lg font-bold text-primary">Academic areas</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.reviewAreas.map((item) => (
              <li key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {profile.name} contributes to Rank Sarthi&rsquo;s {profile.subject} academic work. Review attribution is shown on an
            individual page only after that specific content version has been reviewed.
          </p>
        </section>
      ) : null}

      {/* 8. Related academic pages */}
      {relatedPages.length ? (
        <section className="mt-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-bold text-primary">Related Rank Sarthi academic pages</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedPages.map((record) => (
              <li key={record.url}>
                <a
                  href={record.url}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-ivory"
                >
                  <span>{record.name}</span>
                  <ArrowRight aria-hidden className="h-4 w-4 text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 9. Verified credentials — rendered only when real data exists */}
      {hasCredentials ? (
        <section className="mt-10" aria-labelledby="credentials-heading">
          <h2 id="credentials-heading" className="text-xl font-bold text-primary">Credentials and academic record</h2>
          {credentialSections.map((section) => (
            <div key={section} className="mt-6 max-w-3xl">
              <h3 className="text-lg font-bold text-primary">{section}</h3>
              <dl className="mt-3 divide-y divide-border border-y border-border">
                {profile.credentials?.filter((row) => (row.section ?? "Academic Credentials") === section).map((row) => (
                  <div key={`${row.label}-${row.value}`} className="grid gap-2 py-3 text-sm sm:grid-cols-[180px_minmax(0,1fr)]">
                    <dt className="font-semibold text-ink/80">{row.label}</dt>
                    <dd className="min-w-0 space-y-2 text-ink/85">
                      {row.institution ? <InstitutionCredentialBadge institution={row.institution} /> : null}
                      <p>{row.value}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          {profile.publications?.length ? (
            <>
              <h3 className="mt-6 text-lg font-bold text-primary">Publications</h3>
              <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-ink/85">
                {profile.publications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
          {profile.research?.length ? (
            <>
              <h3 className="mt-6 text-lg font-bold text-primary">Research</h3>
              <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-ink/85">
                {profile.research.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      ) : null}

      {/* 10. Professional links — rendered only when real approved values exist */}
      {hasContactInfo ? (
        <section className="mt-10" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-xl font-bold text-primary">Professional links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {profile.linkedin ? (
              <li>
                <a href={profile.linkedin} rel="nofollow noopener" className="font-semibold text-accent underline-offset-4 hover:underline">
                  LinkedIn profile
                </a>
              </li>
            ) : null}
            {profile.email ? (
              <li>
                <a href={`mailto:${profile.email}`} className="font-semibold text-accent underline-offset-4 hover:underline">
                  {profile.email}
                </a>
              </li>
            ) : null}
          </ul>
        </section>
      ) : null}

      <Button asChild variant="outline" className="mt-10">
        <Link to="/$platform" params={{ platform: "about" }}>
          <ArrowLeft aria-hidden /> Back to About Rank Sarthi
        </Link>
      </Button>
    </article>
  );
}

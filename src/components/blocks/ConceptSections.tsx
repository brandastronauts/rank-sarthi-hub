import { RichText } from "@/components/content/RichText";
import { TopicLink } from "@/components/blocks/TopicLink";
import type { TopicLinkScope } from "@/content/topic-links";
import type { ConceptBlock } from "@/content/types";

/**
 * B35 — Concept sections.
 * The academic body of a chapter page. Each concept is its own anchored
 * section so jump navigation and deep links work.
 */
export function ConceptSections({
  id = "concepts",
  concepts = [],
  heading = "Concepts in this chapter",
  linkScope,
}: {
  id?: string;
  concepts?: ConceptBlock[];
  heading?: string;
  /** Enables registry-driven links on official unit/topic headings. */
  linkScope?: TopicLinkScope;
}) {
  if (!concepts.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <div className="mt-6 space-y-10">
        {concepts.map((c) => (
          <article key={c.id} id={c.id} className="scroll-mt-28">
            {c.title ? (
              <h3 className="text-lg font-bold text-primary">
                {linkScope ? <TopicLink label={c.title} scope={linkScope} /> : c.title}
              </h3>
            ) : null}
            {c.keyIdea ? (
              <p className="mt-2 border-l-2 border-accent pl-4 text-sm font-medium text-ink">{c.keyIdea}</p>
            ) : null}
            <div className="mt-3">
              <RichText nodes={c.body} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

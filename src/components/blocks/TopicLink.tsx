import { Link } from "@tanstack/react-router";
import { resolveTopicHash, resolveTopicRoute, type TopicLinkScope } from "@/content/topic-links";

/**
 * Renders a syllabus unit/topic label as an internal link when the registry
 * owns a BUILT destination for it, and as plain text otherwise. Never emits a
 * link to a planned/blocked route.
 */
export function TopicLink({
  label,
  scope,
  className,
}: {
  label: string;
  scope?: TopicLinkScope;
  className?: string;
}) {
  const record = scope ? resolveTopicRoute(label, scope) : undefined;
  if (!record) return <>{label}</>;

  return (
    <Link
      to={record.url}
      hash={scope ? resolveTopicHash(label, scope) : undefined}
      rel={record.indexation === "index" ? undefined : "nofollow"}
      className={
        className ??
        "inline-flex items-baseline gap-1 py-0.5 font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      }
    >
      <span>{label}</span>
      <span aria-hidden="true" className="text-[0.75em] leading-none">
        ↗
      </span>
    </Link>
  );
}

import { publisher } from "@/content/publisher";

/** Text-only recognition until the genuine publisher logo can be retrieved. */
export function PublisherLockup({ dark = false }: { dark?: boolean }) {
  return (
    <a href={publisher.website} target="_blank" rel="noopener noreferrer" className={`inline-flex max-w-full flex-col gap-0.5 border-l-2 pl-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${dark ? "border-gold/60 text-primary-foreground/80 hover:text-gold" : "border-gold text-muted-foreground hover:text-primary"}`}>
      <span className="text-xs">Powered by</span>
      <span className="font-display text-sm font-semibold">{publisher.name}</span>
    </a>
  );
}
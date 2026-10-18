import { publisher } from "@/content/publisher";
import publisherLogo from "@/assets/sbj-balaji-logo.jpg";

/** Original supplied mark, contained without cropping or alteration. */
export function PublisherLockup({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <a href={publisher.website} target="_blank" rel="noopener noreferrer" className={`inline-flex max-w-full gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${compact ? "items-center" : "flex-col items-start"} ${dark ? "text-primary-foreground/80 hover:text-gold" : "text-muted-foreground hover:text-primary"}`}>
      <span className="text-xs">Powered by</span>
      <span className={`block max-w-full rounded-md bg-primary-foreground p-2 ${compact ? "w-[170px]" : "w-[196px]"}`}>
        <img src={publisherLogo} alt="Shri Balaji Publications — Dedicated to Excellence" width={632} height={152} loading={compact ? "eager" : "lazy"} decoding="async" className="block h-auto w-full object-contain" />
      </span>
    </a>
  );
}
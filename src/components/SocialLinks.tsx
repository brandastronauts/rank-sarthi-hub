import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { socialAccounts } from "@/content/social";

function XMark() {
  return <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>;
}

const icons = { Facebook, Instagram, LinkedIn: Linkedin, "X (Twitter)": XMark, YouTube: Youtube };

export function SocialLinks({ labelled = false, dark = false }: { labelled?: boolean; dark?: boolean }) {
  return (
    <nav aria-label="Rank Sarthi social media">
      <ul className={labelled ? "flex flex-wrap gap-3" : "flex gap-2"}>
        {socialAccounts.map(({ platform, url }) => {
          const Icon = icons[platform];
          return (
            <li key={platform}>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Rank Sarthi on ${platform}`} title={`Rank Sarthi on ${platform}`} className={`inline-flex min-h-11 items-center justify-center gap-3 rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${labelled ? "px-4 py-3" : "size-11"} ${dark ? "border-primary-foreground/20 text-primary-foreground/85 hover:border-gold hover:text-gold focus-visible:ring-offset-navy-deep" : "border-border bg-card text-primary hover:border-primary hover:bg-muted focus-visible:ring-offset-background"}`}>
                <Icon className="size-5 shrink-0" aria-hidden="true" />
                {labelled ? <span className="text-sm font-semibold">{platform}</span> : null}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
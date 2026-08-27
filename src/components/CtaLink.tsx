import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { isLinkable, relFor, type Destination } from "@/content/destinations";

/**
 * Single CTA contract for the whole site.
 * A destination is live, external, disabled (with an honest reason) or hidden.
 * There is no placeholder page and no /coming-soon fallback.
 */
export function CtaLink({
  d,
  className = "",
  disabledClassName = "",
  children,
}: {
  d: Destination;
  className?: string;
  disabledClassName?: string;
  children?: ReactNode;
}) {
  if (d.kind === "hidden") return null;

  const content = children ?? ("label" in d ? d.label : null);

  if (d.kind === "disabled") {
    return (
      <span
        aria-disabled="true"
        title={d.reason}
        className={`${className} ${disabledClassName} cursor-not-allowed opacity-80`}
      >
        {content}
      </span>
    );
  }

  if (!isLinkable(d)) return null;

  // In-page anchors are plain anchors: the router has no route for "/#id".
  if (d.href.includes("#")) {
    return (
      <a href={d.href} className={className}>
        {content}
      </a>
    );
  }

  if (d.kind === "external") {
    return (
      <a href={d.href} rel={relFor(d)} target="_blank" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={d.href} rel={relFor(d)} className={className}>
      {content}
    </Link>
  );
}

/** Inline text link used inside prose, nav lists and footers. */
export function NavLinkOrText({ d, className = "" }: { d: Destination; className?: string }) {
  if (d.kind === "hidden") return null;
  if (d.kind === "disabled") {
    return (
      <span title={d.reason} className={`${className} cursor-default opacity-70`}>
        {d.label}
      </span>
    );
  }
  return <CtaLink d={d} className={className} />;
}

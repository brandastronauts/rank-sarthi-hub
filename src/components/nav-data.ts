import { builtPlatforms } from "@/content/platforms";
import { childrenOf, getUrl } from "@/content/registry";

export type MenuLink = { label: string; href: string };
export type MenuColumn = { title: string; links: MenuLink[] };
export type NavItem = {
  label: string;
  href: string;
  tint?: "jee" | "neet" | "nda";
  columns?: MenuColumn[];
  simple?: MenuLink[];
  blurb?: string;
};

/**
 * Navigation is generated from the URL registry + PlatformData.
 * A route appears in navigation ONLY when its record is buildStatus "built".
 * Planned routes (JEE, NEET, tools, resources) are therefore absent — no nav
 * item can lead to a thin or unbuilt page, and there is no placeholder route.
 */
function builtChildLinks(parent: string): MenuLink[] {
  return childrenOf(parent)
    .filter((r) => r.buildStatus === "built")
    .map((r) => ({ label: r.name, href: r.url }));
}

function platformItems(): NavItem[] {
  return builtPlatforms().map((platform) => {
    const children = builtChildLinks(`/${platform.slug}`);
    return {
      label: platform.slug.toUpperCase(),
      href: `/${platform.slug}`,
      tint: platform.accent,
      blurb: `${platform.productName} — ${platform.tagline}`,
      ...(children.length
        ? { columns: [{ title: platform.productName, links: children }] }
        : {}),
    };
  });
}

/** Homepage in-page anchors are absolute so they work from any route. */
const sectionItems: NavItem[] = [
  { label: "How it works", href: "/#how" },
  { label: "For institutes", href: "/#institutes" },
  { label: "Pricing", href: "/#pricing" },
];

export const navItems: NavItem[] = [...platformItems(), ...sectionItems].filter(
  (item) => !item.href.startsWith("/") || item.href.includes("#") || !!getUrl(item.href),
);

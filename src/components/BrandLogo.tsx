import { site } from "@/content/site";

/**
 * The single Rank Sarthi brand mark.
 *
 * Every header, footer and template renders this component; no template or
 * block references the logo path directly. The asset is used exactly as
 * supplied — never recoloured, redrawn, stretched or effect-treated. On dark
 * surfaces the mark sits on a light surface chip rather than being inverted,
 * because no approved inverse variant exists.
 */
export function BrandLogo({
  height = 40,
  surface = "light",
  priority = false,
  className = "",
}: {
  height?: number;
  /** "dark" adds a light surface behind the unmodified mark for contrast. */
  surface?: "light" | "dark";
  /** True for the above-the-fold header mark: never lazy-loaded. */
  priority?: boolean;
  className?: string;
}) {
  const { logo, name } = site.brand;
  const ratio = logo.width / logo.height;
  const width = Math.round(height * ratio);

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        surface === "dark" ? "rounded-lg bg-white px-2 py-1" : ""
      } ${className}`}
    >
      <img
        src={logo.url}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        style={{ height, width, aspectRatio: `${logo.width} / ${logo.height}` }}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        className="block object-contain"
      />
      <span className="sr-only">{name}</span>
    </span>
  );
}

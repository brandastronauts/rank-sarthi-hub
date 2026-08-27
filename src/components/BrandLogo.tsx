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
  mobileHeight,
  surface = "light",
  priority = false,
  className = "",
}: {
  /** Rendered height from the md breakpoint upward. */
  height?: number;
  /** Rendered height below md. Defaults to `height`. */
  mobileHeight?: number;
  /** "dark" adds a light surface behind the unmodified mark for contrast. */
  surface?: "light" | "dark";
  /** True for the above-the-fold header mark: never lazy-loaded. */
  priority?: boolean;
  className?: string;
}) {
  const { logo, name } = site.brand;
  const ratio = logo.width / logo.height;
  const small = mobileHeight ?? height;

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        surface === "dark" ? "rounded-lg bg-white px-2 py-1" : ""
      } ${className}`}
    >
      <img
        src={logo.url}
        alt={logo.alt}
        width={Math.round(height * ratio)}
        height={height}
        style={
          {
            "--logo-h": `${small}px`,
            "--logo-h-md": `${height}px`,
            aspectRatio: `${logo.width} / ${logo.height}`,
          } as React.CSSProperties
        }
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        className="block h-[var(--logo-h)] w-auto object-contain md:h-[var(--logo-h-md)]"
      />
      <span className="sr-only">{name}</span>
    </span>
  );
}

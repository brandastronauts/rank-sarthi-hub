/** B23 — Jump navigation. Server-rendered anchor list for dense pages. */
export function JumpNav({
  items,
  label = "On this page",
  sticky = true,
}: {
  items: { id: string; label: string }[];
  label?: string;
  sticky?: boolean;
}) {
  if (!items.length) return null;

  return (
    <nav
      aria-label={label}
      className={`${sticky ? "lg:sticky lg:top-28" : ""} rounded-xl border border-border bg-white p-4`}
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">{label}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-md px-2 py-1.5 text-sm text-ink/80 transition-colors hover:bg-ice hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

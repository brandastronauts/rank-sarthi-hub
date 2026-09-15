import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Shared Rank Sarthi tool workbench primitives.
 *
 * Every free calculator uses these so the ten tools share one visual system
 * (existing typography, cards, radius, chips and buttons) instead of ten
 * bespoke layouts. Calculation logic never lives here — it stays in
 * src/lib/tools/engine.ts.
 */

/* ------------------------------------------------------------------ *
 * Layout
 * ------------------------------------------------------------------ */

export function ToolWorkbench({ inputs, result }: { inputs: ReactNode; result: ReactNode }) {
  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
      <div>{inputs}</div>
      <div className="lg:sticky lg:top-28">{result}</div>
    </div>
  );
}

export function ToolInputPanel({
  legend,
  description,
  children,
  actions,
  formError,
}: {
  legend: string;
  description?: string | undefined;
  children: ReactNode;
  actions?: ReactNode | undefined;
  formError?: string | undefined;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <fieldset>
        <legend className="text-sm font-bold text-primary">{legend}</legend>
        {description ? <p className="mt-1 text-xs text-muted-foreground">{description}</p> : null}
        <div className="mt-4 space-y-4">{children}</div>
      </fieldset>

      {formError ? (
        <p role="alert" className="mt-4 rounded-lg border border-accent/40 bg-accent/5 p-3 text-sm text-ink">
          <span className="font-semibold text-accent">Check your entries: </span>
          {formError}
        </p>
      ) : null}

      {actions ? <div className="mt-5 flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Inputs
 * ------------------------------------------------------------------ */

export function NumberField({
  id,
  label,
  help,
  value,
  onChange,
  error,
  suffix,
  step = 1,
  min = 0,
  max,
  decimal = false,
}: {
  id: string;
  label: string;
  help?: string | undefined;
  value: string;
  onChange: (next: string) => void;
  error?: string | undefined;
  suffix?: string | undefined;
  step?: number | undefined;
  min?: number;
  max?: number | undefined;
  decimal?: boolean | undefined;
}) {
  const helpId = help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  const nudge = (delta: number) => {
    const current = Number(value);
    const base = Number.isFinite(current) && value.trim() !== "" ? current : 0;
    let next = base + delta * step;
    if (next < min) next = min;
    if (max !== undefined && next > max) next = max;
    onChange(decimal ? String(Math.round(next * 100) / 100) : String(Math.round(next)));
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      {help ? (
        <p id={helpId} className="text-xs text-muted-foreground">
          {help}
        </p>
      ) : null}
      <div className="mt-2 flex items-stretch gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label={`Decrease ${label}`}
          className="w-10 shrink-0 rounded-lg border border-border text-lg font-semibold text-ink hover:border-accent"
        >
          −
        </button>
        <div className="relative flex-1">
          <input
            id={id}
            type="text"
            inputMode={decimal ? "decimal" : "numeric"}
            autoComplete="off"
            value={value}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full rounded-lg border bg-ivory px-3 py-2 text-sm text-ink outline-none focus:border-accent ${
              error ? "border-accent" : "border-border"
            }`}
            placeholder="0"
          />
          {suffix ? (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
              {suffix}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label={`Increase ${label}`}
          className="w-10 shrink-0 rounded-lg border border-border text-lg font-semibold text-ink hover:border-accent"
        >
          +
        </button>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-1 text-xs font-semibold text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function DateField({
  id,
  label,
  help,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  help?: string | undefined;
  value: string;
  onChange: (next: string) => void;
  error?: string | undefined;
}) {
  const helpId = help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      {help ? (
        <p id={helpId} className="text-xs text-muted-foreground">
          {help}
        </p>
      ) : null}
      <input
        id={id}
        type="date"
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={[helpId, errorId].filter(Boolean).join(" ") || undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full rounded-lg border bg-ivory px-3 py-2 text-sm text-ink outline-none focus:border-accent ${
          error ? "border-accent" : "border-border"
        }`}
      />
      {error ? (
        <p id={errorId} role="alert" className="mt-1 text-xs font-semibold text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function PresetSelector({
  label,
  options,
  value,
  onChange,
  name,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  name: string;
}) {
  return (
    <div role="group" aria-label={label}>
      <p className="text-sm font-semibold text-ink">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              name={name}
              aria-pressed={active}
              onClick={() => onChange(option.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-ink hover:border-accent"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Buttons
 * ------------------------------------------------------------------ */

export function PrimaryButton({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-ink hover:border-accent"
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ *
 * Result panel
 * ------------------------------------------------------------------ */

export interface ToolStatItem {
  label: string;
  value: string;
  hint?: string | undefined;
}

export function ToolStat({ label, value, hint }: ToolStatItem) {
  return (
    <div className="rounded-lg border border-border bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-bold text-primary">{value}</p>
      {hint ? <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function RatioBar({
  label,
  value,
  caption,
}: {
  label: string;
  value: number;
  caption?: string | undefined;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between text-xs text-ink/80">
        <span>{label}</span>
        <span className="font-semibold text-primary">{clamped.toFixed(2)}%</span>
      </div>
      <div
        role="img"
        aria-label={`${label}: ${clamped.toFixed(2)} percent`}
        className="mt-1 h-2 w-full overflow-hidden rounded-full border border-border bg-ivory"
      >
        <div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${clamped}%` }} />
      </div>
      {caption ? <p className="mt-1 text-xs text-muted-foreground">{caption}</p> : null}
    </div>
  );
}

export function ToolResultPanel({
  status,
  headline,
  headlineSuffix,
  equation,
  stats,
  children,
  shareText,
  shareQuery,
  empty,
  note,
}: {
  status: string;
  headline?: string | undefined;
  headlineSuffix?: string | undefined;
  equation?: string | undefined;
  stats?: ToolStatItem[] | undefined;
  children?: ReactNode | undefined;
  shareText?: string | undefined;
  shareQuery?: string | undefined;
  empty?: ReactNode | undefined;
  note?: string | undefined;
}) {
  const hasResult = headline !== undefined;

  return (
    <div className="rounded-xl border border-border bg-ivory p-5" aria-live="polite">
      <p className="text-sm font-semibold text-muted-foreground">{status}</p>

      {hasResult ? (
        <>
          <p className="mt-1 text-display-md leading-tight text-primary break-words">
            {headline}
            {headlineSuffix ? (
              <span className="ml-1 text-base font-semibold text-ink/70">{headlineSuffix}</span>
            ) : null}
          </p>

          {equation ? (
            <p className="mt-3 rounded-lg border border-border bg-white p-3 font-mono text-xs text-ink/85 break-words">
              {equation}
            </p>
          ) : null}

          {stats?.length ? (
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {stats.map((stat) => (
                <ToolStat key={stat.label} {...stat} />
              ))}
            </div>
          ) : null}

          {children}

          <ResultActions shareText={shareText} shareQuery={shareQuery} />
        </>
      ) : (
        <div className="mt-3 text-sm text-ink/85">{empty}</div>
      )}

      {note ? (
        <p className="mt-4 rounded-lg border border-border bg-white p-3 text-xs text-ink/80">{note}</p>
      ) : null}
    </div>
  );
}

/** Copy / share without any account, network call or stored personal data. */
export function ResultActions({ shareText, shareQuery }: { shareText?: string | undefined; shareQuery?: string | undefined }) {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const flash = (text: string) => {
    setMessage(text);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 2500);
  };

  const shareUrl = () => {
    if (typeof window === "undefined") return "";
    const base = `${window.location.origin}${window.location.pathname}`;
    return shareQuery ? `${base}?${shareQuery}` : base;
  };

  const copy = async (text: string, confirmation: string) => {
    try {
      await navigator.clipboard.writeText(text);
      flash(confirmation);
    } catch {
      flash("Copying is blocked in this browser. Select the result text to copy it manually.");
    }
  };

  const share = async () => {
    const url = shareUrl();
    const payload = { title: "Rank Sarthi calculator", text: shareText ?? "", url };
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await (navigator as Navigator & { share: (data: ShareData) => Promise<void> }).share(payload);
        return;
      } catch {
        /* fall through to copying the link */
      }
    }
    await copy(url, "Shareable link copied.");
  };

  if (!shareText) return null;

  return (
    <div className="mt-5">
      <div className="flex flex-wrap gap-3">
        <GhostButton type="button" onClick={() => copy(shareText, "Result copied.")}>
          Copy result
        </GhostButton>
        <GhostButton type="button" onClick={share}>
          Share result
        </GhostButton>
      </div>
      <p aria-live="polite" className="mt-2 min-h-4 text-xs text-muted-foreground">
        {message}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Content helpers
 * ------------------------------------------------------------------ */

export function FormulaCard({
  title,
  lines,
  note,
}: {
  title: string;
  lines: string[];
  note?: string | undefined;
}) {
  return (
    <div className="mt-4 rounded-xl border border-border bg-white p-4">
      <p className="text-sm font-bold text-primary">{title}</p>
      <ul className="mt-2 space-y-1 font-mono text-xs text-ink/85">
        {lines.map((line) => (
          <li key={line} className="break-words">
            {line}
          </li>
        ))}
      </ul>
      {note ? <p className="mt-2 text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
}

export function ScenarioTable({
  caption,
  columns,
  rows,
  note,
}: {
  caption: string;
  columns: string[];
  rows: (string | number)[][];
  note?: string | undefined;
}) {
  if (!rows.length) return null;
  return (
    <div className="mt-4">
      <div className="overflow-x-auto rounded-xl border border-border bg-white">
        <table className="w-full min-w-[420px] text-left text-sm">
          <caption className="px-4 pt-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {caption}
          </caption>
          <thead>
            <tr className="border-b border-border">
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-2 text-xs font-bold text-primary">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-border/60 last:border-0">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 text-ink/85">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="mt-2 text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
}

/**
 * Optional shared-result prefill. Query parameters only ever prefill inputs on
 * the client; the canonical URL stays the clean tool path and no page variant
 * is created for a query string.
 */
export function useQueryPrefill(apply: (params: URLSearchParams) => void) {
  const done = useRef(false);
  useEffect(() => {
    if (done.current || typeof window === "undefined") return;
    done.current = true;
    const params = new URLSearchParams(window.location.search);
    if ([...params.keys()].length) apply(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

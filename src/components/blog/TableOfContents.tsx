import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { BlogContentNode } from "@/content/blog";

export interface TocItem {
  id: string;
  label: string;
  level: 2 | 3;
}

export function tableOfContentsFor(content: BlogContentNode[]): TocItem[] {
  return content
    .filter((node): node is Extract<BlogContentNode, { type: "heading" }> => node.type === "heading")
    .map((node) => ({ id: node.id, label: node.text, level: node.level }));
}

function TocLinks({ items }: { items: TocItem[] }) {
  return (
    <ol className="space-y-1.5">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
          <a
            href={`#${item.id}`}
            className="block rounded-md px-2 py-1.5 text-sm text-ink/75 transition-colors hover:bg-ice hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;
  return (
    <>
      <nav aria-label="On this page" className="sticky top-28 hidden rounded-xl border border-border bg-card p-4 lg:block">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">On this page</p>
        <TocLinks items={items} />
      </nav>
      <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-4 lg:hidden">
        <AccordionItem value="toc" className="border-0">
          <AccordionTrigger>On this page</AccordionTrigger>
          <AccordionContent><TocLinks items={items} /></AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
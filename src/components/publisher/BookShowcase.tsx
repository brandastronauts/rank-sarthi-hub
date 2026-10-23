import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { booksForExam, publisher, type BookExam, type PublisherBook } from "@/content/publisher";
import type { PlatformData } from "@/content/types";

function BookGrid({ exam }: { exam: BookExam }) {
  return (
    <div className="grid auto-rows-fr grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
      {booksForExam(exam).map((book: PublisherBook) => (
        <article key={book.id} className="flex min-w-0 flex-col rounded-lg border border-border bg-card p-3 text-card-foreground transition-shadow hover:shadow-card motion-reduce:transition-none sm:p-5">
          {book.cover && (
            <div className="mb-5 flex aspect-[4/5] items-center justify-center bg-muted p-3">
              <img src={book.cover.url} width={book.cover.width} height={book.cover.height} alt={`${book.title} by ${book.author} — front cover`} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
            </div>
          )}
          <p className="text-xs font-semibold uppercase text-accent">{exam === "jee" ? "JEE Main & Advanced" : "NEET UG"}</p>
          <h3 className="mt-3 text-base leading-snug text-primary sm:text-lg">{book.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{book.author}</p>
          <p className="mt-1 text-xs text-muted-foreground">{book.edition}</p>
        </article>
      ))}
    </div>
  );
}

export function BookShowcase({ id = "books", platform }: { id?: string; platform?: PlatformData }) {
  const exam = platform?.slug === "jee" || platform?.slug === "neet" ? platform.slug : undefined;
  if (platform && !exam) return null;
  return (
    <section id={id} className="border-y border-border bg-secondary/50 py-10 md:py-16">
      <div className="container-page">
        <p className="eyebrow text-accent">{publisher.name}</p>
        <h2 className="mt-3 max-w-3xl text-2xl text-primary md:text-4xl">{exam ? "Recommended Reading from Shri Balaji Publications" : "Trusted Books. Stronger Concepts. Smarter Preparation."}</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">Discover {exam === "jee" ? "JEE" : exam === "neet" ? "NEET" : "JEE and NEET"} preparation books from Shri Balaji Publications, designed to strengthen conceptual understanding, build problem-solving skills and support focused exam preparation.</p>
        {exam ? <div className="mt-7"><BookGrid exam={exam} /></div> : (
          <Tabs defaultValue="jee" className="mt-7">
            <TabsList aria-label="Book examination" className="mb-6 h-auto max-w-full flex-wrap gap-1 rounded-md border border-border bg-background p-1">
              <TabsTrigger value="jee" className="min-h-11 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">JEE Main & Advanced</TabsTrigger>
              <TabsTrigger value="neet" className="min-h-11 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">NEET UG</TabsTrigger>
            </TabsList>
            <TabsContent value="jee" forceMount className="data-[state=inactive]:hidden"><BookGrid exam="jee" /></TabsContent>
            <TabsContent value="neet" forceMount className="data-[state=inactive]:hidden"><BookGrid exam="neet" /></TabsContent>
          </Tabs>
        )}
      </div>
    </section>
  );
}
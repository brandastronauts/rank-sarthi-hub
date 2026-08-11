import { Reveal } from "@/components/Reveal";
import f1 from "@/assets/faculty-1.jpg";
import f2 from "@/assets/faculty-2.jpg";
import f3 from "@/assets/faculty-3.jpg";
import f4 from "@/assets/faculty-4.jpg";

const faculty = [
  {
    img: f1,
    name: "Sample Faculty",
    cred: "IIT Delhi • 8 years JEE Physics",
    line: "A problem is only hard until you can name the concept it is hiding behind.",
  },
  {
    img: f2,
    name: "Sample Faculty",
    cred: "AIIMS • NEET Biology mentor",
    line: "Biology rewards precision. We teach students to read NCERT the way the paper reads it.",
  },
  {
    img: f3,
    name: "Sample Faculty",
    cred: "Ex-NDA • SSB interview coach",
    line: "Officer-like qualities are built in daily habits, not rehearsed the week before the board.",
  },
  {
    img: f4,
    name: "Sample Faculty",
    cred: "IIT Bombay • Quant & GAT",
    line: "Speed is not rushing. It is knowing in ten seconds which question to leave alone.",
  },
];

export function Faculty() {
  return (
    <section id="faculty" className="bg-secondary py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">The People</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
            Built by people who've cracked these exams.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The AI ranks your weaknesses. The questions, explanations and fix-lists behind it are written by teachers
            who have sat in the same exam halls.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <Reveal key={f.cred} delay={i * 100} as="article">
              <div className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-gradient">
                  <img
                    src={f.img}
                    alt="Representative faculty portrait — sample image"
                    loading="lazy"
                    width={512}
                    height={640}
                    className="size-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/10 to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block text-sm font-bold text-primary-foreground">{f.name}</span>
                    <span className="mt-0.5 block text-xs font-semibold text-gold">{f.cred}</span>
                  </span>
                </div>
                <p className="flex-1 p-5 text-sm italic leading-relaxed text-muted-foreground">“{f.line}”</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="mt-8">
          <p className="mx-auto max-w-3xl rounded-xl border border-dashed border-border bg-background px-6 py-4 text-center text-sm text-muted-foreground">
            Sample faculty profiles shown for layout — names, credentials and photos are placeholders and will be
            replaced with our verified teaching team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

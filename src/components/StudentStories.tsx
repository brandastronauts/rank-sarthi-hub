import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";

const stories = [
  {
    img: s1,
    name: "Sample Student",
    meta: "JEE Aspirant • Kota",
    quote:
      "I kept taking mocks and kept scoring the same. The diagnosis showed me that most of my lost marks came from three chapters, not from everything. That changed how I revised.",
    chip: "Physics: 54 → 78 in mock scores",
  },
  {
    img: s2,
    name: "Sample Student",
    meta: "NEET Aspirant • Patna",
    quote:
      "Biology felt fine until the report broke it down line by line. Seeing exactly which NCERT pages my errors traced back to made revision feel possible instead of endless.",
    chip: "Biology accuracy: 71% → 89%",
  },
  {
    img: s3,
    name: "Sample Student",
    meta: "NDA Aspirant • Chandigarh",
    quote:
      "The timing report was the shock. Nine questions were eating half my Maths paper. I fixed the pacing first and the score moved before I learned anything new.",
    chip: "Maths attempts: 62 → 84 per paper",
  },
];

export function StudentStories() {
  return (
    <section id="stories" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 size-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Student Stories</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">Stories that keep us building.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every line of this product exists because an aspirant somewhere is working hard in the dark. These are the
            kinds of stories we are building towards.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((st, i) => (
            <Reveal key={st.meta} delay={i * 120} as="article">
              <figure className="card-lift relative flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <Quote className="absolute right-6 top-6 size-8 text-gold/25" aria-hidden="true" />
                <div className="flex items-center gap-4">
                  <img
                    src={st.img}
                    alt="Representative student portrait — sample image"
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-16 shrink-0 rounded-full object-cover ring-2 ring-gold/40 ring-offset-2 ring-offset-card"
                  />
                  <figcaption>
                    <p className="text-sm font-bold text-primary">{st.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{st.meta}</p>
                  </figcaption>
                </div>
                <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-foreground/80">
                  “{st.quote}”
                </blockquote>
                <span className="mt-6 inline-flex w-fit rounded-full bg-neet/10 px-3.5 py-1.5 text-xs font-bold text-neet">
                  {st.chip}
                </span>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="mt-8">
          <p className="mx-auto max-w-3xl rounded-xl border border-dashed border-border bg-secondary px-6 py-4 text-center text-sm text-muted-foreground">
            Sample stories shown for layout — real verified student results coming soon. Names, quotes and figures above
            are placeholders, and photos are representative stock imagery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

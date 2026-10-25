import { Reveal } from "@/components/Reveal";
import { publicAcademicProfiles } from "@/content/academic-profiles";
import { FacultyCard } from "@/components/academic/FacultyCard";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Homepage subject-matter experts — the same approved faculty records as /about. */
export function AuthorityPeople({ id }: { id?: string }) {
  const [carouselRef, carousel] = useEmblaCarousel({ align: "start", loop: false, slidesToScroll: 1 });
  const [previousEnabled, setPreviousEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(true);
  const [position, setPosition] = useState(1);
  const updateControls = useCallback(() => {
    if (!carousel) return;
    setPreviousEnabled(carousel.canScrollPrev());
    setNextEnabled(carousel.canScrollNext());
    setPosition(carousel.selectedScrollSnap() + 1);
  }, [carousel]);
  useEffect(() => {
    if (!carousel) return;
    updateControls();
    carousel.on("select", updateControls).on("reInit", updateControls);
    return () => { carousel.off("select", updateControls).off("reInit", updateControls); };
  }, [carousel, updateControls]);
  return (
    <section id={id} aria-label="Subject Matter Experts" className="bg-ivory py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Your Subject Sarthi</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Meet Our Subject Matter Experts</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4">
            Experienced subject experts who help shape Rank Sarthi&rsquo;s academic content and diagnostic thinking.
          </p>
        </Reveal>
        <div className="mt-8" role="region" aria-roledescription="carousel" aria-label="Faculty showcase"
          onKeyDown={(event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (event.key === "ArrowLeft") { event.preventDefault(); carousel?.scrollPrev(); }
            if (event.key === "ArrowRight") { event.preventDefault(); carousel?.scrollNext(); }
            if (event.key === "Home") { event.preventDefault(); carousel?.scrollTo(0); }
            if (event.key === "End") { event.preventDefault(); carousel?.scrollTo(publicAcademicProfiles.length - 1); }
          }}>
          <div ref={carouselRef} tabIndex={0} aria-label="Faculty cards" className="overflow-clip rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <ul className="-ml-6 flex touch-pan-y items-stretch pb-4">
              {publicAcademicProfiles.map((profile, index) => (
                <li key={profile.id} className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3" aria-label={`${index + 1} of ${publicAcademicProfiles.length}`}>
                  <FacultyCard profile={profile} />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <Button asChild variant="link" className="h-auto p-0 text-primary">
              <Link to="/$platform" params={{ platform: "about" }} hash="academic-team">View All Faculty <ArrowRight aria-hidden /></Link>
            </Button>
            <div className="flex items-center gap-3">
              <span role="status" aria-live="polite" aria-atomic="true" className="sr-only">Faculty carousel position {position}</span>
              <Button variant="outline" size="icon" aria-label="Previous faculty" title="Previous faculty" disabled={!previousEnabled} onClick={() => carousel?.scrollPrev()}><ArrowLeft aria-hidden /></Button>
              <Button variant="outline" size="icon" aria-label="Next faculty" title="Next faculty" disabled={!nextEnabled} onClick={() => carousel?.scrollNext()}><ArrowRight aria-hidden /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

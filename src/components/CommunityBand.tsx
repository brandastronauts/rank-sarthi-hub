import { Reveal } from "@/components/Reveal";
import community from "@/assets/community.jpg";

const cities = ["Kota", "Patna", "Chandigarh", "Lucknow", "Nagpur", "Kochi", "Guwahati"];

export function CommunityBand() {
  return (
    <section id="community" className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
      <img
        src={community}
        alt="Indian exam aspirants walking together with books and backpacks"
        loading="lazy"
        width={1920}
        height={640}
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/40"
      />
      <div className="container-page relative py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">The Community</p>
          <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
            Built for aspirants from Kota to Chandigarh to Patna.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
            Small towns and big coaching hubs, first-generation aspirants and second attempts — this is who Rank Sarthi
            is designed for. You are not preparing alone.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-primary-foreground/50">
            Cities shown represent our target aspirant community, not a claimed user count.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

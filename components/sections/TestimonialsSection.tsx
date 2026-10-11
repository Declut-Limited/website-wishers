import { LuStar } from "react-icons/lu";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// "Loved across Nigeria.": three quote cards with the app rating on the right.
const RATING = 4.8;

const testimonials = [
  {
    name: "Amaka O.",
    initials: "AO",
    location: "Lagos",
    text: "I shared my birthday list on WhatsApp. By the weekend, my friends had funded the phone I had been saving for.",
  },
  {
    name: "Kemi & Ade",
    initials: "KA",
    location: "Abuja",
    text: "Nobody had to ask what we needed for the wedding. One link made everything simple for both families.",
  },
  {
    name: "Tunde E.",
    initials: "TE",
    location: "Port Harcourt",
    text: "The best part was watching small contributions add up. It felt like everyone was building the dream with me.",
  },
];

function Stars({ rating }: { rating: number }) {
  // whole stars filled, the rest outlined (4.8 → four filled, one outline, as in the design)
  const filled = Math.floor(rating);
  return (
    <div className="flex gap-1 text-wisher-primary" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <LuStar key={i} className={`h-4 w-4 ${i < filled ? "fill-current" : ""}`} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-label="Wishes that became real" className="bg-wisher-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 sm:mb-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.04em] text-wisher-primary">
              Wishes that became real
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-wisher-forest">
              Loved across Nigeria.
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end" aria-label={`Average app rating ${RATING} out of 5`}>
            <p className="text-5xl font-bold leading-none tracking-tight text-wisher-forest">{RATING}</p>
            <div className="mt-3">
              <Stars rating={RATING} />
            </div>
            <p className="mt-2 text-sm font-medium text-wisher-forest/60">Average app rating</p>
          </div>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              as="figure"
              className="flex flex-col justify-between gap-8 rounded-3xl bg-white p-7 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-wisher-forest/5"
            >
              <blockquote className="text-lg font-medium leading-relaxed text-wisher-forest">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wisher-lime-pale text-sm font-bold text-wisher-forest">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-wisher-forest">{t.name}</span>
                  <span className="block text-xs font-medium text-wisher-forest/55">{t.location}</span>
                </span>
              </figcaption>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

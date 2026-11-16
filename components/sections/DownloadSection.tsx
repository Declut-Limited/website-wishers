import FadeIn from "@/components/motion/FadeIn";
import StoreButton from "@/components/elements/StoreButton";

// "Make it easier to gift you well.": closing download band on lime (#C5F961),
// using the same black store pills as the hero.

export default function DownloadSection() {
  return (
    <section id="download" aria-label="Your next celebration starts here" className="py-20 sm:py-28" style={{ backgroundColor: "#C5F961" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:px-8">
        <FadeIn>
          <p className="mb-5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-wisher-primary">
            Your next celebration starts here
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-wisher-forest">
            Make it easier
            <br />
            to gift you well.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="max-w-md text-base sm:text-lg font-medium leading-relaxed text-wisher-ink">
            Birthdays, weddings, graduations, baby showers, and everyday dreams, all in one beautiful wishlist.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <StoreButton
              store="android"
              className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-black py-2.5 pl-5 pr-6 text-white transition-[background-color,translate] duration-200 hover:-translate-y-0.5 hover:bg-black/80"
            />
            <StoreButton
              store="ios"
              className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-black py-2.5 pl-5 pr-6 text-white transition-[background-color,translate] duration-200 hover:-translate-y-0.5 hover:bg-black/80"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import FadeIn from "@/components/motion/FadeIn";

// "Make it easier to gift you well.": closing download band on lime (#C5F961),
// using the same black store pills as the hero.
const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";
const IOS_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  "https://apps.apple.com/app/wisher/id[APP_ID]";

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
            <a
              href={ANDROID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-black py-2.5 pl-5 pr-6 text-white transition-[background-color,translate] duration-200 hover:-translate-y-0.5 hover:bg-black/80"
            >
              <img src="/assets/google-play.svg" alt="" width={24} height={26} className="h-6 w-auto shrink-0" />
              <span className="text-left">
                <span className="block text-[10px] font-medium uppercase leading-none tracking-wide">Get it on</span>
                <span className="block text-lg font-semibold leading-tight">Google Play</span>
              </span>
            </a>

            <a
              href={IOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-black py-2.5 pl-5 pr-6 text-white transition-[background-color,translate] duration-200 hover:-translate-y-0.5 hover:bg-black/80"
            >
              <img src="/assets/apple-store.svg" alt="" width={18} height={22} className="h-6 w-auto shrink-0" />
              <span className="text-left">
                <span className="block text-[10px] font-medium leading-none tracking-wide">Download on the</span>
                <span className="block text-lg font-semibold leading-tight">App Store</span>
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

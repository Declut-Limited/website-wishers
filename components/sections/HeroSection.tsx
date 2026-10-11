import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import Float from "@/components/motion/Float";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";
const IOS_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  "https://apps.apple.com/app/wisher/id[APP_ID]";

// Social-proof avatars (initial + colour), as in the Figma frame.
const AVATARS = [
  { letter: "A", bg: "bg-[#f4845f]" },
  { letter: "T", bg: "bg-[#2fb5a6]" },
  { letter: "C", bg: "bg-[#b06ad9]" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-wisher-ink pt-32 sm:pt-40 lg:pt-36"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-8">
          {/* ── Left column: text + CTAs, staggering in on load ── */}
          <StaggerGroup trigger="load" className="flex-1 text-center lg:text-left lg:pb-36">
            {/* Badge */}
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white text-sm font-medium px-3.5 py-1.5 mb-7">
                <span className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-solid border-wisher-lime" />
                Nigeria&apos;s #1 gifting app
              </div>
            </StaggerItem>

            {/* Headline */}
            <StaggerItem>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6">
                Wish it. <span className="font-medium text-wisher-lime">Share it.</span>
                <br />
                Watch it happen.
              </h1>
            </StaggerItem>

            {/* Subheadline */}
            <StaggerItem>
              <p className="text-lg sm:text-xl font-medium text-white/85 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Create a wishlist, share one simple link, and let the people who
                love you contribute together.
              </p>
            </StaggerItem>

            {/* Store buttons */}
            <StaggerItem className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-black hover:bg-black/70 text-white pl-5 pr-6 py-2.5 transition-colors duration-200"
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
                className="inline-flex items-center gap-3 rounded-full bg-black hover:bg-black/70 text-white pl-5 pr-6 py-2.5 transition-colors duration-200"
              >
                <img src="/assets/apple-store.svg" alt="" width={18} height={22} className="h-6 w-auto shrink-0" />
                <span className="text-left">
                  <span className="block text-[10px] font-medium leading-none tracking-wide">Download on the</span>
                  <span className="block text-lg font-semibold leading-tight">App Store</span>
                </span>
              </a>
            </StaggerItem>

            {/* Social proof */}
            <StaggerItem className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((a) => (
                  <span
                    key={a.letter}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white ${a.bg}`}
                  >
                    {a.letter}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Loved by wishers across Nigeria</p>
                <p className="text-xs text-white/55">Birthdays, big dreams and everything between.</p>
              </div>
            </StaggerItem>
          </StaggerGroup>

          {/* ── Right column: photo + floating notes (separate DOM elements, not baked in) ── */}
          <FadeIn delay={0.25} className="relative flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none self-center lg:self-end">
            <div className="relative mx-auto w-[82%] sm:w-[78%] lg:w-[80%] lg:ml-auto lg:mr-6">
              <Image
                src="/assets/new-wishers-hero-asser.png"
                alt="Smiling woman in a green outfit holding up a gift box with a lime ribbon"
                width={2032}
                height={3048}
                priority
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 80vw"
                className="w-full h-auto"
              />

              {/* handwritten note + the two cards bob gently (GSAP) */}
              <Float
                distance={-8}
                duration={2.8}
                className="pointer-events-none absolute -right-6 sm:-right-20 lg:-right-24 top-[4%] rotate-[-8deg]"
              >
                <p className="font-caveat text-2xl sm:text-3xl font-bold leading-tight text-wisher-lime">
                  A little hint,
                  <br />
                  <span className="ml-2">A lot of love</span>
                </p>
              </Float>

              {/* "Almost there!" card */}
              <Float
                distance={10}
                duration={2.6}
                className="absolute -right-3 sm:-right-8 top-[46%] rotate-[-2deg] rounded-2xl bg-wisher-lime px-4 py-3 shadow-lg shadow-black/30"
              >
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-wisher-forest" aria-hidden="true">
                    <path d="M12 0c.6 5.6 4.4 9.4 12 12-7.6 2.6-11.4 6.4-12 12-.6-5.6-4.4-9.4-12-12C7.6 9.4 11.4 5.6 12 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-wisher-forest leading-tight">Almost there!</p>
                    <p className="text-[11px] text-wisher-forest/80 leading-tight">₦360,000 left to make it happen.</p>
                  </div>
                </div>
              </Float>

              {/* "Just now" contribution card */}
              <Float
                distance={-10}
                duration={2.2}
                delay={0.3}
                className="absolute -left-4 sm:-left-14 bottom-[16%] rounded-2xl bg-white px-4 py-3 shadow-lg shadow-black/30"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500 mb-1">Just now</p>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wisher-lime text-xs font-bold text-wisher-forest">
                    T
                  </span>
                  <div>
                    <p className="text-sm font-bold text-wisher-ink leading-tight">Tobi contributed ₦10,000</p>
                    <p className="text-[11px] text-neutral-500 leading-tight">&ldquo;Go get that MacBook 💻&rdquo;</p>
                  </div>
                </div>
              </Float>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

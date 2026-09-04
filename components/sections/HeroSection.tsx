const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";
const IOS_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  "https://apps.apple.com/app/wisher/id[APP_ID]";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-wisher-ink pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left column: text + CTAs ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-semibold px-4 py-1.5 mb-6">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-wisher-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-wisher-lime" />
              </span>
              Nigeria&apos;s #1 gifting app
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
              Wish it. <span className="text-wisher-lime">Share it.</span>
              <br />
              Watch it happen.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Create a wishlist, share one simple link, and let the people who
              love you contribute together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Android */}
              <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-white/10 text-white px-6 py-3.5 rounded-2xl transition-colors duration-200 min-w-55 justify-center border border-white/10"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                  <path d="M3.18 23.76c.3.17.64.24.98.21l12.06-6.97-2.54-2.54L3.18 23.76zm-1.6-17.84A2 2 0 0 0 1 7.25v9.5a2 2 0 0 0 .58 1.33l.07.07L8.73 11l-7.15-5.08zm19.49 5.46-2.66-1.54-2.86 2.86 2.86 2.86 2.67-1.54a2 2 0 0 0 0-3.64zm-16.3-6.8L16.83 7.5 14.3 10.04 2.75 5.58z" />
                </svg>
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-70 leading-none">
                    GET IT ON
                  </div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </a>

              {/* iOS */}
              <a
                href={IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-white/10 text-white px-6 py-3.5 rounded-2xl transition-colors duration-200 min-w-55 justify-center border border-white/10"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-70 leading-none">
                    Download on the
                  </div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── Right column: flattened hero asset (card + floating contribution
                badges + "Almost there" bubble are baked into this single PNG) ── */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/assets/hero-assets.png"
              alt="Wisher wishlist card for a MacBook wish, 70% funded with 12 givers"
              width={2568}
              height={1420}
              loading="eager"
              className="w-full max-w-xl lg:max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

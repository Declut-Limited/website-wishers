"use client";

const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";
const IOS_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  "https://apps.apple.com/app/wisher/id[APP_ID]";

const confettiDots = [
  { color: "#ccf88e", size: 18, top: "12%", left: "8%", delay: "0s" },
  { color: "#ccf88e", size: 12, top: "20%", left: "88%", delay: "1s" },
  { color: "#e9fcce", size: 10, top: "65%", left: "5%", delay: "2s" },
  { color: "#ccf88e", size: 20, top: "70%", left: "92%", delay: "0.5s" },
  { color: "#e9fcce", size: 12, top: "40%", left: "3%", delay: "1.5s" },
  { color: "#2d6339", size: 14, top: "30%", left: "95%", delay: "2.5s" },
  { color: "#ccf88e", size: 10, top: "80%", left: "15%", delay: "3s" },
  { color: "#e9fcce", size: 8, top: "15%", left: "55%", delay: "0.8s" },
  { color: "#ccf88e", size: 14, top: "55%", left: "78%", delay: "1.8s" },
  { color: "#e9fcce", size: 9, top: "88%", left: "60%", delay: "2.2s" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient — accent-light as the lightest wash */}
      <div className="absolute inset-0 bg-radial-[at_50%_30%] from-wisher-accent-light via-background to-background dark:from-wisher-primary-dark/40 dark:via-background dark:to-background" />

      {/* Floating confetti dots — accent-dark (#ccf88e) dominant */}
      {confettiDots.map((dot, i) => (
        <span
          key={i}
          className="confetti-dot absolute rounded-full pointer-events-none hidden sm:block"
          style={{
            backgroundColor: dot.color,
            opacity: 0.7,
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            animationDelay: dot.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge — accent-dark bg in dark mode, accent in light mode */}
        <div className="inline-flex items-center gap-2 rounded-full bg-wisher-accent dark:bg-wisher-accent-dark text-wisher-primary-dark dark:text-wisher-primary-dark text-sm font-bold px-4 py-1.5 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-wisher-primary dark:bg-wisher-primary-dark animate-pulse" />
          Nigeria&apos;s #1 gifting app
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
          Share Your Wishes.{" "}
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="relative z-10 text-wisher-primary dark:text-wisher-accent-dark">
              Receive the Gifts You Love.
            </span>
            {/* accent underline highlight */}
            <span className="absolute -bottom-1 left-0 right-0 h-3 bg-wisher-accent-dark/40 dark:bg-wisher-accent-dark/25 rounded-sm -z-10 skew-x-1" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Create your wishlist, share your unique link, and let friends and
          family contribute to what matters most — all powered by Paystack.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Android — deep green */}
          <a
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wisher-primary hover:bg-wisher-primary-light text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl min-w-[220px] justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0">
              <path d="M3.18 23.76c.3.17.64.24.98.21l12.06-6.97-2.54-2.54L3.18 23.76zm-1.6-17.84A2 2 0 0 0 1 7.25v9.5a2 2 0 0 0 .58 1.33l.07.07L8.73 11l-7.15-5.08zm19.49 5.46-2.66-1.54-2.86 2.86 2.86 2.86 2.67-1.54a2 2 0 0 0 0-3.64zm-16.3-6.8L16.83 7.5 14.3 10.04 2.75 5.58z" />
            </svg>
            <div className="text-left">
              <div className="text-xs font-normal opacity-80 leading-none">Download on</div>
              <div className="text-base font-bold leading-tight">Google Play</div>
            </div>
          </a>

          {/* iOS — accent-dark (#ccf88e) with dark text so it pops */}
          <a
            href={IOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wisher-accent-dark hover:bg-wisher-accent text-wisher-primary-dark font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl min-w-[220px] justify-center dark:bg-wisher-accent-dark dark:hover:bg-wisher-accent dark:text-wisher-primary-dark"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-wisher-primary-dark flex-shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs font-normal opacity-70 leading-none">Download on the</div>
              <div className="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-muted-foreground">
          Free to download · Powered by{" "}
          <span className="font-semibold text-foreground">Paystack</span>
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

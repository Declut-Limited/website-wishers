"use client";

const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";
const IOS_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  "https://apps.apple.com/app/wisher/id[APP_ID]";

const confettiDots = [
  { color: "#ccf88e", size: 18, top: "10%", left: "4%", delay: "0s" },
  { color: "#e9fcce", size: 10, top: "60%", left: "3%", delay: "2s" },
  { color: "#e9fcce", size: 12, top: "38%", left: "2%", delay: "1.5s" },
  { color: "#ccf88e", size: 10, top: "78%", left: "8%", delay: "3s" },
  { color: "#e9fcce", size: 8, top: "18%", left: "48%", delay: "0.8s" },
  { color: "#ccf88e", size: 14, top: "22%", left: "94%", delay: "1s" },
  { color: "#ccf88e", size: 20, top: "68%", left: "96%", delay: "0.5s" },
  { color: "#2d6339", size: 14, top: "32%", left: "97%", delay: "2.5s" },
  { color: "#ccf88e", size: 12, top: "50%", left: "96%", delay: "1.8s" },
  { color: "#e9fcce", size: 9, top: "85%", left: "85%", delay: "2.2s" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background gradient + confetti — overflow clipped here so badges can escape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-radial-[at_40%_30%] from-wisher-accent-light via-background to-background dark:from-wisher-primary-dark/40 dark:via-background dark:to-background" />

        {/* Floating confetti dots */}
        {confettiDots.map((dot, i) => (
          <span
            key={i}
            className="confetti-dot absolute rounded-full hidden sm:block"
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
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">

          {/* ── Left column: text + CTAs ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-wisher-accent dark:bg-wisher-accent-dark text-wisher-primary-dark text-sm font-bold px-4 py-1.5 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-wisher-primary dark:bg-wisher-primary-dark animate-pulse" />
              Nigeria&apos;s #1 gifting app
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4">
              Share Your Wishes.{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-wisher-primary dark:text-wisher-accent-dark">
                  Receive the Gifts You Love.
                </span>
                {/* <span className="absolute -bottom-1 left-0 right-0 h-3 bg-wisher-accent-dark/40 dark:bg-wisher-accent-dark/25 rounded-sm -z-10 skew-x-1" /> */}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-7 leading-relaxed mx-auto lg:mx-0">
              Create your wishlist, share your unique link, and let friends and
              family contribute to what matters most — all powered by Paystack.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Android — deep green */}
              <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-wisher-primary hover:bg-wisher-primary-light text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl min-w-55 justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
                  <path d="M3.18 23.76c.3.17.64.24.98.21l12.06-6.97-2.54-2.54L3.18 23.76zm-1.6-17.84A2 2 0 0 0 1 7.25v9.5a2 2 0 0 0 .58 1.33l.07.07L8.73 11l-7.15-5.08zm19.49 5.46-2.66-1.54-2.86 2.86 2.86 2.86 2.67-1.54a2 2 0 0 0 0-3.64zm-16.3-6.8L16.83 7.5 14.3 10.04 2.75 5.58z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs font-normal opacity-80 leading-none">Download on</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </a>

              {/* iOS — accent-dark (#ccf88e) */}
              <a
                href={IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-wisher-accent-dark hover:bg-wisher-accent text-wisher-primary-dark font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl min-w-55 justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-wisher-primary-dark shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs font-normal opacity-70 leading-none">Download on the</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </a>
            </div>

            {/* Social proof */}
            <p className="mt-5 text-sm text-muted-foreground">
              Free to download · Powered by{" "}
              <span className="font-semibold text-foreground">Paystack</span>
            </p>
          </div>

          {/* ── Right column: phone mockup ── */}
          <div className="flex shrink-0 justify-center items-center py-4">
            <div className="relative rotate-2">

              {/* Diffuse lime glow behind phone */}
              <div className="absolute -inset-12 rounded-[4rem] bg-wisher-accent-dark/20 dark:bg-wisher-accent-dark/12 blur-3xl pointer-events-none" />

              {/* ── Phone shell ──
                  Outer div = bezel (bg + padding, NO overflow-hidden so buttons aren't clipped)
                  Inner div = screen (overflow-hidden clips the image)               */}
              <div className="relative rounded-[3.2rem] bg-[#1c1c1e] p-2.5 shadow-[0_50px_100px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.07)] w-56 sm:w-60 lg:w-68">

                {/* Volume buttons — left side, outside overflow-hidden */}
                <div className="absolute -left-1.25 top-23  w-1.25 h-7 bg-[#3a3a3c] rounded-l-sm" />
                <div className="absolute -left-1.25 top-32.5 w-1.25 h-7 bg-[#3a3a3c] rounded-l-sm" />
                {/* Power button — right side */}
                <div className="absolute -right-1.25 top-28 w-1.25 h-12 bg-[#3a3a3c] rounded-r-sm" />

                {/* Screen */}
                <div className="rounded-[2.4rem] overflow-hidden relative">
                  {/* Subtle glare highlight */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)",
                    }}
                  />
                  <img
                    src="/app-screenshot.png"
                    alt="Wisher app home screen"
                    width={252}
                    loading="eager"
                    className="w-full block"
                  />
                </div>
              </div>

              {/* ── Floating stat badges — desktop only (overflow on narrow screens) ── */}

              {/* Contributors — top right */}
              <div className="absolute -right-10 sm:-right-12 lg:-right-14 top-[14%] bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl px-3.5 py-2.5 flex items-center gap-2.5 border border-border/60 min-w-32.5">
                <div className="flex -space-x-1.5">
                  {["#2d6339", "#ccf88e", "#6366f1"].map((c, i) => (
                    <span
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white dark:border-[#1e1e1e] inline-block"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-foreground leading-none">103 Givers</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">joined this wish</div>
                </div>
              </div>

              {/* Amount raised — bottom left */}
              <div className="absolute -left-10 sm:-left-12 lg:-left-14 bottom-[22%] bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl px-3.5 py-2.5 border border-border/60 min-w-32.5">
                <div className="text-[10px] text-muted-foreground mb-0.5">Total raised</div>
                <div className="text-sm font-extrabold text-wisher-primary dark:text-wisher-accent-dark leading-none">
                  ₦2,124,250
                </div>
                {/* Mini progress bar */}
                <div className="mt-2 w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div className="h-1.5 rounded-full bg-wisher-primary dark:bg-wisher-accent-dark" style={{ width: "20%" }} />
                </div>
                <div className="text-[9px] text-muted-foreground mt-0.5">20% of goal</div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

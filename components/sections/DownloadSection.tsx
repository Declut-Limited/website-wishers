const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";
const IOS_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  "https://apps.apple.com/app/wisher/id[APP_ID]";

export default function DownloadSection() {
  return (
    <section className="py-20 sm:py-28 bg-wisher-primary dark:bg-[#111111] relative overflow-hidden">
      {/* Accent glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-wisher-accent-dark/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-wisher-accent-dark/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow label in accent-dark */}
        <span className="inline-block bg-wisher-accent-dark text-wisher-primary-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Free to download
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to Start Receiving?
        </h2>
        <p className="text-lg text-white/70 mb-10">
          Download Wisher for free and create your first wishlist in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Android — #ccf88e (accent-dark) with dark green text: the signature CTA */}
          <a
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wisher-accent-dark hover:bg-wisher-accent text-wisher-primary-dark font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl min-w-55 justify-center border border-wisher-accent-dark hover:border-wisher-accent"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-wisher-primary-dark shrink-0">
              <path d="M3.18 23.76c.3.17.64.24.98.21l12.06-6.97-2.54-2.54L3.18 23.76zm-1.6-17.84A2 2 0 0 0 1 7.25v9.5a2 2 0 0 0 .58 1.33l.07.07L8.73 11l-7.15-5.08zm19.49 5.46-2.66-1.54-2.86 2.86 2.86 2.86 2.67-1.54a2 2 0 0 0 0-3.64zm-16.3-6.8L16.83 7.5 14.3 10.04 2.75 5.58z" />
            </svg>
            <div className="text-left">
              <div className="text-xs font-normal opacity-60 leading-none">Download for</div>
              <div className="text-base leading-tight">Android</div>
            </div>
          </a>

          {/* iOS — outlined ghost: white border / white text on dark bg */}
          <a
            href={IOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-bold px-7 py-4 rounded-xl transition-all duration-200 min-w-55 justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs font-normal opacity-70 leading-none">Download for</div>
              <div className="text-base leading-tight">iOS</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

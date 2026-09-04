import { LuTarget } from "react-icons/lu";

const highlights = [
  {
    glyph: "₦",
    eyebrow: "Wisher Wallet",
    title: "See every gift add up.",
    description:
      "Track contributions in real time and withdraw to your Nigerian bank account when you are ready.",
  },
  {
    glyph: <LuTarget className="w-5 h-5" />,
    eyebrow: "Boost your wish",
    title: "Reach beyond your circle.",
    description:
      "Feature a public wishlist and help more generous people discover what you are building toward.",
  },
  {
    glyph: "1%",
    eyebrow: "Referral rewards",
    title: "Share Wisher. Keep earning.",
    description:
      "Invite friends and earn 1% when people you referred make eligible withdrawals.",
  },
];

export default function FeatureHighlightsSection() {
  return (
    <section id="highlights" className="bg-wisher-sage py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-wisher-primary mb-4">
            Everything in one place
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-wisher-forest">
            Built to make giving
            <br />
            <span className="font-fraunces italic font-normal text-wisher-primary">
              feel good.
            </span>
          </h2>
        </div>

        {/* Hero feature card */}
        <div className="rounded-3xl bg-wisher-forest p-8 sm:p-14 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
                Shareable wishlists
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-5">
                Your wishes, beautifully put together.
              </h3>
              <p className="text-white/60 leading-relaxed max-w-md">
                Add items, cover photos, goal amounts, and a personal note.
                Every wishlist gets one clean link that is ready to share
                anywhere.
              </p>
            </div>

            <div className="rounded-2xl bg-wisher-cream p-8">
              <p className="text-sm text-wisher-forest/50 mb-1">
                pay.wishers.app/
              </p>
              <p className="text-2xl font-bold text-wisher-forest mb-6">
                amaka-turns-30
              </p>
              <button
                type="button"
                className="rounded-full bg-wisher-lime text-wisher-forest font-bold text-sm px-6 py-3 hover:bg-wisher-lime/90 transition-colors"
              >
                Copy link
              </button>
            </div>
          </div>
        </div>

        {/* Supporting feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.eyebrow}
              className="rounded-3xl bg-wisher-cream p-8"
            >
              <div className="w-14 h-14 rounded-full bg-wisher-sage flex items-center justify-center text-wisher-forest font-bold mb-8">
                {item.glyph}
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-wisher-forest/40 mb-3">
                {item.eyebrow}
              </p>
              <h3 className="text-xl font-bold text-wisher-forest mb-2">
                {item.title}
              </h3>
              <p className="text-wisher-forest/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

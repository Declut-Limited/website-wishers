import { LuArrowUpRight } from "react-icons/lu";

const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";

const moments = [
  {
    emoji: "🎂",
    title: "Birthday",
    description: "The phone, trip, or experience you actually want.",
  },
  {
    emoji: "💍",
    title: "Wedding",
    description: "One shared list for the home you are building together.",
  },
  {
    emoji: "🎓",
    title: "Graduation",
    description: "Let your people back the next chapter of your life.",
  },
  {
    emoji: "🍼",
    title: "New baby",
    description: "All the essentials, with fewer duplicate gifts.",
  },
  {
    emoji: "🚀",
    title: "Big dream",
    description:
      "A laptop, start-up fund, or down payment supported by friends.",
  },
  {
    emoji: "✨",
    title: "Just because",
    description: "You don't need an occasion to share what makes you smile.",
  },
];

export default function GiftMomentsSection() {
  return (
    <section id="gift-moments" className="bg-wisher-linen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14 lg:mb-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-wisher-forest/50 mb-4">
              Real life. Worth celebrating.
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-wisher-forest">
              There is a Wisher
              <br />
              for every moment.
            </h2>
          </div>
          <div className="lg:pt-2 lg:flex lg:items-start lg:justify-end">
            <p className="text-lg text-wisher-forest/60 leading-relaxed lg:text-right lg:max-w-sm">
              From milestones everyone sees coming to the quiet dreams you
              have been saving for.
            </p>
          </div>
        </div>

        {/* Moments grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moments.map((moment) => (
            <div
              key={moment.title}
              className="rounded-3xl bg-wisher-sand p-8 sm:p-10 flex flex-col"
            >
              <span className="text-4xl mb-10 sm:mb-14">{moment.emoji}</span>

              <div className="mt-auto">
                <h3 className="text-xl font-bold text-wisher-forest mb-2">
                  {moment.title}
                </h3>
                <p className="text-wisher-forest/60 mb-8 leading-relaxed">
                  {moment.description}
                </p>
                <a
                  href={ANDROID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-wisher-forest hover:underline underline-offset-4"
                >
                  Create this wishlist
                  <LuArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

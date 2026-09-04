import { LuPlus, LuArrowUpRight, LuHeart } from "react-icons/lu";

const steps = [
  {
    number: "01",
    icon: LuPlus,
    title: "Create your wish",
    description:
      "Add what you want, a photo, and your goal. It takes less than two minutes.",
    card: "bg-wisher-mist",
    heading: "text-wisher-forest",
    body: "text-wisher-forest/60",
    numeral: "text-wisher-forest/10",
  },
  {
    number: "02",
    icon: LuArrowUpRight,
    title: "Share one link",
    description:
      "Drop it on WhatsApp, Instagram, or send it straight to friends and family.",
    card: "bg-wisher-lime-pale",
    heading: "text-wisher-forest",
    body: "text-wisher-forest/60",
    numeral: "text-wisher-forest/10",
  },
  {
    number: "03",
    icon: LuHeart,
    title: "Feel the love",
    description:
      "Every contribution moves your wish closer— securely, visibly, together.",
    card: "bg-wisher-forest",
    heading: "text-white",
    body: "text-white/60",
    numeral: "text-white/10",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-wisher-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 lg:mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-wisher-primary mb-4">
            One link. A lot of love.
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-wisher-forest">
            From &ldquo;I wish&rdquo; to{" "}
            <span className="font-fraunces italic font-normal text-wisher-primary">
              &ldquo;we got you.&rdquo;
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative overflow-hidden rounded-3xl p-8 min-h-80 flex flex-col ${step.card}`}
              >
                {/* Watermark numeral */}
                <span
                  className={`absolute top-4 right-6 text-8xl font-extrabold leading-none select-none pointer-events-none ${step.numeral}`}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 text-wisher-forest" />
                </div>

                {/* Copy */}
                <div className="relative z-10 mt-auto pt-10">
                  <h3 className={`text-2xl font-bold mb-3 ${step.heading}`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed ${step.body}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

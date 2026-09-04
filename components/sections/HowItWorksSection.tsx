import { LuCirclePlus, LuShare2, LuWallet } from "react-icons/lu";

const steps = [
  {
    number: "01",
    icon: LuCirclePlus,
    title: "Create",
    description:
      "Sign up and create your wishlist with items, images, and goal amounts in minutes.",
  },
  {
    number: "02",
    icon: LuShare2,
    title: "Share",
    description:
      "Share your unique link with friends and family via WhatsApp, social media, or anywhere.",
  },
  {
    number: "03",
    icon: LuWallet,
    title: "Receive",
    description:
      "Friends contribute via Paystack. Funds go straight to your Wisher wallet, ready to withdraw.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-wisher-primary dark:text-wisher-accent-dark mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Three simple steps to start receiving
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Getting started with Wisher takes less than two minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-wisher-primary/30 to-transparent" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center gap-4 relative"
              >
                {/* Number badge + icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-wisher-accent dark:bg-wisher-primary/20 flex items-center justify-center shadow-sm">
                    <Icon className="w-9 h-9 text-wisher-primary dark:text-wisher-accent-dark" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-wisher-primary text-white text-xs font-bold flex items-center justify-center">
                    {step.number.slice(-1)}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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

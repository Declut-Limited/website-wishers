import { LuGift, LuLink2, LuWallet, LuRocket, LuUsers, LuShield } from "react-icons/lu";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: LuGift,
    title: "Wishlist Creation",
    description:
      "Create multiple wishlists with custom items, cover images, and goal amounts for any occasion.",
  },
  {
    icon: LuLink2,
    title: "Shareable Links",
    description:
      "Every wishlist gets a unique pay.wishers.app link — share anywhere in seconds.",
  },
  {
    icon: LuWallet,
    title: "In-App Wallet",
    description:
      "All contributions land in your Wisher wallet. Withdraw anytime to your Nigerian bank account.",
  },
  {
    icon: LuRocket,
    title: "Boost Your Wishlist",
    description:
      "Pay to feature your wishlist publicly and reach more potential givers across Nigeria.",
  },
  {
    icon: LuUsers,
    title: "Referral Earnings",
    description:
      "Earn 1% of every withdrawal your referred users make — a passive income stream built in.",
  },
  {
    icon: LuShield,
    title: "Secure Payments",
    description:
      "All payments processed by Paystack — Nigeria's most trusted payment gateway.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-muted/30 dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-wisher-primary dark:text-wisher-accent-dark mb-3">
            Everything you need
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Built for Nigerian gifters
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Wisher is packed with features that make giving and receiving gifts
            simple, social, and rewarding.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group border border-border bg-background hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wisher-accent dark:bg-wisher-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-wisher-primary dark:text-wisher-accent-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

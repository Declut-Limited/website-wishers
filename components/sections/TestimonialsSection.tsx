import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amaka O.",
    location: "Lagos",
    text: "I created my birthday wishlist and my friends funded my new phone in 3 days. Wisher is amazing!",
  },
  {
    name: "Tunde B.",
    location: "Abuja",
    text: "So easy to use. I shared the link on my WhatsApp status and received contributions within hours.",
  },
  {
    name: "Chisom E.",
    location: "Port Harcourt",
    text: "The boost feature put my wishlist in front of so many people. Highly recommend!",
  },
];

function InitialsAvatar({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-wisher-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
      {name.charAt(0)}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30 dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-wisher-primary dark:text-wisher-accent-dark mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Loved by thousands across Nigeria
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="bg-background border border-border shadow-sm"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <Quote className="w-8 h-8 text-wisher-primary/30 dark:text-wisher-accent-dark/30" />
                <p className="text-foreground/80 leading-relaxed text-sm flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <InitialsAvatar name={t.name} />
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

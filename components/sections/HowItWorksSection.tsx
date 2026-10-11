import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// How it works: three photo cards (wish it → share it → watch it happen).
// Same id as before so the Header "How it works" link still resolves.
const STEPS = [
  {
    step: "01 · Wish it",
    title: "Say what you really want.",
    body: "Add the wish, tell the story and choose your target.",
    image: "/assets/nigeria-wish-creator.jpg",
    alt: "Young woman smiling at her phone as she creates a wish",
    extra: null,
  },
  {
    step: "02 · Share it",
    title: "Give your people the link.",
    body: "One tap takes it to your story, DM or group chat.",
    image: "/assets/nigeria-share.jpg",
    alt: "Two friends looking at a phone together",
    extra: "pay.wishers.app/amaka ↗",
  },
  {
    step: "03 · Watch it happen",
    title: "Watch the love add up.",
    body: "Names, messages and contributions—all in one living wish.",
    image: "/assets/nigeria-wish-happened.jpg",
    alt: "Two friends smiling at a laptop as contributions come in",
    extra: "87% funded · 12 friends",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-wisher-linen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-wisher-forest/60">How it works</p>
          <h2 className="mb-12 sm:mb-14 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-wisher-forest">
            From a thought to
            <br />
            <span className="font-fraunces italic font-normal text-wisher-primary">&ldquo;we got you.&rdquo;</span>
          </h2>
        </FadeIn>

        <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <StaggerItem
              key={s.step}
              as="article"
              className="relative aspect-[431/540] overflow-hidden rounded-3xl bg-wisher-forest transition-[translate,scale,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-wisher-forest/15"
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              {/* forest tint from the Figma stops: shaded top for the step label, clear middle, dark bottom for the text */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #07140D4A 0%, #07140D00 35%, #07140DE9 91.4%)",
                }}
              />

              <p className="absolute left-6 top-6 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                {s.step}
              </p>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="mb-2 text-2xl font-bold leading-snug text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{s.body}</p>
                {s.extra ? (
                  <p className="mt-3 text-xs font-semibold text-wisher-lime">{s.extra}</p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

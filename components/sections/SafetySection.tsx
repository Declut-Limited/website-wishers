import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// "Share the wish. Not your details.": safety promises on near-black, with a giant glossy "SAFE"
// sitting behind the heading. id="safety" is the Header's Safety link.
const POINTS = [
  {
    n: "01",
    title: "Paystack-secured payments",
    body: "Trusted payment infrastructure handles every contribution.",
    icon: <LuArrowUpRight className="h-4 w-4" strokeWidth={2.5} />,
  },
  {
    n: "02",
    title: "Your details stay private",
    body: "Givers see your wish, never your bank information.",
    icon: <span className="block h-1.5 w-1.5 rounded-full bg-current" />,
  },
  {
    n: "03",
    title: "Clear contribution tracking",
    body: "Every naira and every message stays visible in one place.",
    icon: <LuCheck className="h-4 w-4" strokeWidth={2.5} />,
  },
];

export default function SafetySection() {
  return (
    <section
      id="safety"
      aria-label="Protected at every step"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ backgroundColor: "#0B120E" }}
    >
      {/* giant background word with a faint glossy sheen (decorative) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.18em] -left-[0.04em] select-none bg-clip-text text-[34vw] font-black leading-none tracking-tighter text-transparent lg:text-[27vw] xl:text-[400px]"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgb(255 255 255 / 0.07) 0%, rgb(255 255 255 / 0.025) 45%, rgb(255 255 255 / 0.05) 70%, rgb(255 255 255 / 0.015) 100%)",
        }}
      >
        SAFE
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-white">Protected at every step</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight text-white">
            Share the wish.
            <br />
            <span className="font-fraunces italic font-normal text-wisher-lime">
              Not your
              <br />
              details.
            </span>
          </h2>
        </FadeIn>

        <StaggerGroup as="ul" className="flex flex-col gap-3">
          {POINTS.map((p) => (
            <StaggerItem
              key={p.n}
              as="li"
              className="group flex items-start gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition-colors duration-300 hover:border-wisher-lime/30 hover:bg-white/[0.04]"
            >
              <span className="mt-1 w-6 shrink-0 text-[10px] font-semibold text-wisher-lime">{p.n}</span>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm font-medium text-white/50">{p.body}</p>
              </div>
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wisher-lime text-wisher-ink transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12"
              >
                {p.icon}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

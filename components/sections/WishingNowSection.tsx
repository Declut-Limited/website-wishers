import Image from "next/image";
import SwipeRail, { RailControls, SwipeRailProvider } from "./SwipeRail";
import FadeIn from "@/components/motion/FadeIn";

// "People are wishing right now" — showcase of live-looking wishlists.
// STATIC SAMPLE DATA for now. It becomes dynamic (real wishlists from the Wishers API) once a
// payment gateway is in place; keep this shape close to the API's so the swap is a data change.
type ShowcaseWish = {
  id: string;
  owner: string;
  category: string;
  title: string;
  image: string;
  raised: number;
  goal: number;
  contributors: number;
};

const WISHES: ShowcaseWish[] = [
  { id: "kemi", owner: "Kemi", category: "Wedding", title: "Our first home together", image: "/assets/couple-home.jpg", raised: 910000, goal: 1300000, contributors: 14 },
  { id: "amaka", owner: "Amaka", category: "Work & growth", title: "MacBook for My Design Journey", image: "/assets/macbook-gift.png", raised: 436800, goal: 840000, contributors: 12 },
  { id: "zainab", owner: "Zainab", category: "Experience", title: "A birthday trip to Zanzibar", image: "/assets/zamziba-trip.jpg", raised: 275400, goal: 510000, contributors: 33 },
  { id: "yemi", owner: "Yemi", category: "Creative", title: "Sony A7 IV Dream", image: "/assets/new-camera.jpg", raised: 419200, goal: 655000, contributors: 26 },
  { id: "tolu", owner: "Tolu", category: "Graduation", title: "Graduation gift for my next chapter", image: "/assets/graduation.png", raised: 318000, goal: 450000, contributors: 19 },
];

const naira = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

function WishCard({ wish }: { wish: ShowcaseWish }) {
  const percent = Math.min(100, Math.round((wish.raised / wish.goal) * 100));

  return (
    <article className="relative h-[400px] sm:h-[460px] w-[250px] sm:w-[320px] shrink-0 select-none overflow-hidden rounded-3xl bg-wisher-forest">
      <Image
        src={wish.image}
        alt={wish.title}
        fill
        sizes="(min-width: 640px) 340px, 260px"
        draggable={false}
        className="object-cover"
      />
      {/* green-tinted shade so the text reads on any photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-wisher-forest/25 via-wisher-forest/30 to-wisher-forest/85" />

      {/* owner chip */}
      <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 py-1 pl-1 pr-3 backdrop-blur-sm">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold text-white">
          {wish.owner[0]}
        </span>
        <span className="text-xs font-semibold text-white">{wish.owner}</span>
      </div>

      {/* details */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-wisher-lime">{wish.category}</p>
        <h3 className="mb-3 text-xl sm:text-[22px] font-semibold leading-snug text-white">{wish.title}</h3>

        <div className="mb-2 flex items-end justify-between">
          <span className="text-base font-bold text-white">{naira(wish.raised)}</span>
          <span className="text-xs font-semibold text-wisher-lime">{percent}%</span>
        </div>
        <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/25">
          <div className="h-full rounded-full bg-wisher-lime" style={{ width: `${percent}%` }} />
        </div>
        <p className="text-xs font-medium text-white/70">
          {naira(wish.goal)} goal · {wish.contributors} contributors
        </p>
      </div>
    </article>
  );
}

export default function WishingNowSection() {
  return (
    <section id="wishing-now" className="bg-wisher-linen py-20 sm:py-24 overflow-hidden">
      {/* provider lets the back/next buttons in the heading drive the rail below */}
      <SwipeRailProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-wisher-forest/60">Live on Wisher</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-wisher-forest">
              People are wishing
              <br />
              <span className="font-fraunces italic font-normal text-wisher-primary">right now.</span>
            </h2>
          </div>
          <div className="flex items-end gap-6 lg:mb-2">
            <p className="max-w-sm text-base font-medium leading-relaxed text-wisher-forest/65">
              Real goals. Real people. One link that makes it easier for everyone to show up.
            </p>
            <RailControls className="shrink-0" />
          </div>
        </FadeIn>
      </div>

      {/* swiper: drag or swipe both ways; starts in line with the heading */}
      <FadeIn delay={0.1}>
        <SwipeRail>
          {WISHES.map((wish) => (
            <WishCard key={wish.id} wish={wish} />
          ))}
        </SwipeRail>
      </FadeIn>
      </SwipeRailProvider>
    </section>
  );
}

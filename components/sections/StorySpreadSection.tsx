"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/motion/FadeIn";

// "Wishers spreads the way everything spreads.": three cards that are the three frames of one
// person's Instagram story. Desktop: hovering a card lifts it and plays only its own bar; clicking
// skips to the next frame. Phones: one card at a time, playing itself like a real story (frame 1 →
// 2 → 3, then round again) while the section is on screen; a tap skips ahead.
// The bar's story-fill keyframe lives in globals.css.
const FRAME_MS = 4000;
const AVATAR = "/assets/nigeria-wish-creator.jpg";

const FRAMES = [
  {
    image: "/assets/birthday-cake.png",
    alt: "Lit candles on a birthday cake",
    caption: ["Birthday in 10 days 🎂", "you people know what to do 😂"],
    link: "pay.wishers.app/amaka",
    shade: "linear-gradient(180deg, #07140D59 0%, #07140D00 22%, #07140D00 60%, #07140DE6 100%)",
  },
  {
    image: "/assets/new-camera.png",
    alt: "A vintage camera with a leather strap and memory cards",
    caption: ["Help me get my dream camera 📸"],
    link: "pay.wishers.app/camera",
    shade: "linear-gradient(180deg, #07140D40 0%, #07140D00 22%, #07140D00 65%, #07140DB3 100%)",
  },
  {
    image: "/assets/graduation.png",
    alt: "A graduate in a purple gown and cap cheering with both arms up",
    caption: ["Graduation soon! 🎓❤️", "link in bio, no pressure lol"],
    link: "pay.wishers.app/grad",
    shade: "linear-gradient(180deg, #07140D40 0%, #07140D00 22%, #07140D00 60%, #07140DCC 100%)",
  },
];

export default function StorySpreadSection() {
  // the frame whose bar is filling right now (null = all frames at rest)
  const [playing, setPlaying] = useState<number | null>(null);
  // bumped so replaying the same frame restarts its fill
  const [run, setRun] = useState(0);
  // phones only: the one frame on screen
  const [shown, setShown] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const play = (i: number) => {
    setPlaying(i);
    setShown(i);
    setRun((r) => r + 1);
  };

  // below md (Tailwind's 768px) the cards stack into one story player
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // phones: start (or resume) the story when it scrolls into view, stop it when it leaves
  const autoplay = isMobile && inView;
  useEffect(() => {
    if (autoplay) play(shown);
    else setPlaying(null);
    // deliberately keyed on autoplay alone: resume from the current frame only when it flips
  }, [autoplay]);

  const onFrameEnd = (i: number) => {
    if (autoplay) play((i + 1) % FRAMES.length);
    else setPlaying((p) => (p === i ? null : p));
  };

  return (
    <section
      ref={sectionRef}
      id="story-spread"
      aria-label="Wishers spreads the way everything spreads"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#0A1D13" }}
    >
      <FadeIn className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white">
          Wishers spreads
          <br />
          the way everything
          <br />
          spreads.
        </h2>
        <p className="mt-6 text-sm sm:text-base font-medium text-white/45">
          Story today. Group chat by tonight. Funded by the weekend.
        </p>
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto mt-14 sm:mt-20 grid max-w-6xl grid-cols-1 justify-items-center gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {FRAMES.map((f, i) => {
          const isActive = playing === i;
          return (
            <article
              key={f.link}
              data-active={isActive}
              data-shown={shown === i}
              aria-hidden={isMobile && shown !== i ? true : undefined}
              onMouseEnter={() => {
                // phones fire a fake mouseenter on tap; the story player handles taps itself
                if (!isMobile) play(i);
              }}
              onClick={() => play((i + 1) % FRAMES.length)}
              className="group relative aspect-[33/52] w-full max-w-[330px] cursor-pointer select-none overflow-hidden rounded-3xl bg-wisher-forest shadow-2xl shadow-black/50 transition-[translate,scale,box-shadow,opacity] duration-500 max-md:[grid-area:1/1] max-md:data-[shown=false]:pointer-events-none max-md:data-[shown=false]:opacity-0 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-3.5 hover:scale-[1.03] hover:shadow-black/70 hover:ring-1 hover:ring-wisher-lime/20 data-[active=true]:-translate-y-3.5 data-[active=true]:scale-[1.03] data-[active=true]:shadow-black/70 data-[active=true]:ring-1 data-[active=true]:ring-wisher-lime/20 motion-reduce:hover:scale-100 motion-reduce:data-[active=true]:scale-100"
            >
              <Image
                src={f.image}
                alt={f.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: f.shade }} />

              {/* avatar + story bars: frames before this one are seen, this one plays */}
              <div className="absolute inset-x-0 top-0 flex items-center gap-3 p-5">
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-wisher-lime/70 ring-offset-2 ring-offset-black/40">
                  <Image src={AVATAR} alt="" fill sizes="36px" className="object-cover" />
                </span>
                <div className="flex flex-1 gap-1.5">
                  {FRAMES.map((_, s) => (
                    <span key={s} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
                      {s < i || (s === i && !isActive) ? (
                        <span className="block h-full w-full rounded-full bg-white" />
                      ) : s === i ? (
                        <span
                          key={run}
                          onAnimationEnd={() => onFrameEnd(i)}
                          className="block h-full w-full origin-left rounded-full bg-white"
                          style={{ animation: `story-fill ${FRAME_MS}ms linear forwards` }}
                        />
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-data-[active=true]:-translate-y-1">
                <p className="mb-4 text-[15px] font-semibold leading-snug text-white">
                  {f.caption.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <div className="rounded-full bg-white/15 py-3 text-center text-xs font-medium text-white backdrop-blur-md transition-colors duration-500 group-hover:bg-white/25 group-data-[active=true]:bg-white/25">
                  {f.link}
                </div>
              </div>
            </article>
          );
        })}
      </FadeIn>
    </section>
  );
}

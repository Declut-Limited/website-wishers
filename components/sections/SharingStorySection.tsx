"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/motion/FadeIn";

// The sharing story: three tilted story cards (create → post → result) on deep forest,
// with the places a Wisher link goes listed underneath.
// Desktop: the three cards sit in a row and animate on hover.
// Below lg (where they'd stack): one card at a time, playing itself like a story (1 → 2 → 3, then
// round again) while on screen, with the hover animation running on the card that's up; a tap skips.
const FRAME_MS = 4000;
const PLATFORMS = ["Instagram story", "WhatsApp status", "TikTok bio", "Messages"];

// Instagram-style progress bars across the top of each story card; they refill one by one on hover
// (hover animations live in globals.css under "Sharing story cards"). In the phone player each card
// is one frame of the story: earlier bars are seen, its own bar fills, later bars wait (data-state).
function StoryBars({ frame }: { frame?: number }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          data-state={frame === undefined ? undefined : i < frame ? "seen" : i === frame ? "current" : "upcoming"}
          className="story-bar h-[3px] flex-1 overflow-hidden rounded-full bg-white/30"
        >
          <span className="story-bar-fill block h-full w-full rounded-full bg-white/90" />
        </span>
      ))}
    </div>
  );
}

function StoryMeta({ left, right }: { left: string; right: string }) {
  return (
    <div className="mt-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

function Arrow() {
  return (
    <span aria-hidden className="hidden lg:block text-xl text-wisher-leaf">
      →
    </span>
  );
}

export default function SharingStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  // the one card on screen in the phone story player
  const [shown, setShown] = useState(0);

  // below lg (Tailwind's 1024px) the cards stack, so they become a story player instead
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
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

  const autoplay = isMobile && inView;

  // each frame plays for FRAME_MS, then the next card comes in; a tap (shown change) restarts the clock
  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setShown((s) => (s + 1) % 3), FRAME_MS);
    return () => clearTimeout(t);
  }, [autoplay, shown]);

  // per-card props for the phone player; .is-playing triggers the hover animation (globals.css)
  const player = (i: number) => ({
    "data-shown": shown === i,
    "aria-hidden": isMobile && shown !== i ? true : undefined,
    onClick: () => {
      if (isMobile) setShown((i + 1) % 3);
    },
    className: `max-lg:[grid-area:1/1] max-lg:data-[shown=false]:pointer-events-none max-lg:data-[shown=false]:opacity-0 ${
      autoplay && shown === i ? "is-playing" : ""
    }`,
  });

  return (
    <section
      ref={sectionRef}
      id="sharing-story"
      aria-label="The sharing story"
      className="overflow-hidden pt-20 sm:pt-28"
      style={{ backgroundColor: "#0A1D13" }}
    >
      <FadeIn className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/60">The sharing story</p>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white">
          Create it. Post it.
          <br />
          <span className="font-fraunces italic font-semibold text-wisher-lime">Watch them show up.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base font-medium leading-relaxed text-white/55">
          This is the full journey, from your Wisher link leaving the app to your people making the wish happen.
        </p>
      </FadeIn>

      {/* below lg every card shares one grid cell, so only the one being played shows */}
      <FadeIn delay={0.1}>
      <div className="mx-auto mt-14 sm:mt-20 grid max-w-6xl justify-items-center px-4 pb-20 sm:pb-24 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8">
        {/* 01 · Create */}
        <article
          {...player(0)}
          className={`story-card group relative aspect-[9/16] w-full max-w-[330px] overflow-hidden rounded-3xl bg-wisher-forest shadow-2xl shadow-black/50 lg:[--tilt:-3deg] ${player(0).className}`}
        >
          <Image
            src="/assets/nigeria-story-create.jpg"
            alt="Two friends at a café table planning a birthday wish"
            fill
            sizes="330px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, #07150E65 39.6%, #07150EF2 95%)" }}
          />
          <div className="absolute inset-0 flex flex-col p-5 text-left">
            <StoryBars frame={isMobile ? 0 : undefined} />
            <StoryMeta left="Your wish is ready" right="01 · Create" />
            <h3 className="mt-14 text-4xl font-medium leading-[1.05] tracking-tight text-white">
              Birthday
              <br />
              in 10 days.
              <br />
              <span className="font-fraunces italic text-wisher-lime">Let&apos;s go.</span>
            </h3>
            {/* link pill, tilted like it's been dropped onto the story */}
            {/* on hover it straightens and pops, and the arrow nudges out */}
            <div className="mt-auto mb-4 -mx-1 flex -rotate-3 items-center justify-between gap-3 rounded-xl bg-wisher-cream px-4 py-3.5 shadow-lg shadow-black/30 transition-[rotate,scale] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-0 group-hover:scale-105 group-[.is-playing]:rotate-0 group-[.is-playing]:scale-105">
              <span className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold text-wisher-forest">
                <span className="truncate">pay.wishers.app/amaka</span>
                <span
                  aria-hidden
                  className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] bg-wisher-primary text-[8px] leading-none text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-[.is-playing]:-translate-y-0.5 group-[.is-playing]:translate-x-0.5"
                >
                  ↗
                </span>
              </span>
              <span className="shrink-0 text-[10px] font-medium text-wisher-forest/60">Copy link · Share to story</span>
            </div>
          </div>
        </article>

        <Arrow />

        {/* 02 · Post */}
        <article
          {...player(1)}
          className={`story-card group relative aspect-[9/16] w-full max-w-[330px] lg:max-w-[370px] overflow-hidden rounded-3xl bg-wisher-forest shadow-2xl shadow-black/50 ${player(1).className}`}
        >
          <Image
            src="/assets/nigeria-story-shared.jpg"
            alt="Young woman in a red bucket hat holding up her phone"
            fill
            sizes="370px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, #07140D00 0%, #07140D00 40%, #07140DCC 100%)" }}
          />
          <div className="absolute inset-0 flex flex-col p-5 text-left">
            <StoryBars frame={isMobile ? 1 : undefined} />
            <div className="mt-4 flex items-center justify-between text-[10px] font-semibold tracking-[0.08em] text-white/85">
              <span>@amaka · 2m</span>
              <span className="uppercase">02 · Post</span>
            </div>
            <p className="mt-auto font-fraunces text-4xl italic leading-[1.1] text-white">
              You people
              <br />
              know what
              <br />
              to do <span className="story-jiggle inline-block">😂</span>
            </p>
            {/* story link sticker: pings lime on hover like it's begging to be tapped */}
            <div className="story-ping mt-6 mb-1 flex items-center justify-center rounded-xl bg-wisher-cream px-4 py-4 shadow-lg shadow-black/30">
              <span className="truncate text-[11px] font-extrabold uppercase tracking-[0.06em] text-wisher-forest">
                Amaka&apos;s birthday wish · Tap to open
              </span>
            </div>
          </div>
        </article>

        <Arrow />

        {/* 03 · Result */}
        <article
          {...player(2)}
          className={`story-card group relative aspect-[9/16] w-full max-w-[330px] overflow-hidden rounded-3xl shadow-2xl shadow-black/50 lg:[--tilt:3deg] ${player(2).className}`}
          style={{ background: "radial-gradient(circle at 50% 40%, #41653C 0%, #132B1D 55%, #07140D 100%)" }}
        >
          {/* lime glow that blooms behind the 100% on hover */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-[.is-playing]:opacity-100"
            style={{ background: "radial-gradient(circle at 50% 40%, rgb(201 250 115 / 0.22) 0%, transparent 55%)" }}
          />
          <div className="absolute inset-0 flex flex-col p-5 text-center">
            <StoryBars frame={isMobile ? 2 : undefined} />
            <StoryMeta left="12 friends contributed" right="03 · Result" />
            <p className="mt-16 text-[10px] font-semibold uppercase tracking-[0.14em] text-wisher-lime">Wish funded</p>
            <p className="mt-6 text-7xl font-bold tracking-tight text-white transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-[.is-playing]:scale-110">
              100%
            </p>
            <p className="mt-6 font-fraunces text-3xl italic leading-[1.1] text-white">
              They came
              <br />
              through.
            </p>
            <p className="mt-auto mb-4 flex justify-center gap-4 text-base" aria-label="Happy reactions">
              <span className="story-bounce inline-block">🥹</span>
              <span className="story-bounce inline-block">❤️</span>
              <span className="story-bounce inline-block">✨</span>
            </p>
          </div>
        </article>
      </div>
      </FadeIn>

      {/* where the link lives */}
      <div className="border-t border-white/10">
        <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-8 text-sm text-white/60">
          {PLATFORMS.map((p, i) => (
            <li key={p} className="flex items-center gap-10">
              {i > 0 ? <span aria-hidden className="hidden sm:block h-px w-11 bg-wisher-primary-light/60" /> : null}
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import useEmblaCarousel from "embla-carousel-react";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

// Horizontal swiper for card rows: drag with a mouse, swipe on touch/trackpad, both directions.
// Starts in line with the max-w-7xl container and runs past the right edge.
// Embla handles the drag and momentum. Wrap the rail and its RailControls (back/next buttons,
// which can sit anywhere above it, e.g. in the heading) in one SwipeRailProvider so they share it.
const RAIL_INSET = "max(1rem, calc((100vw - 80rem) / 2 + 2rem))";

type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

const RailContext = createContext<{ api: EmblaApi; setApi: (api: EmblaApi) => void } | null>(null);

export function SwipeRailProvider({ children }: { children: ReactNode }) {
  const [api, setApi] = useState<EmblaApi>(undefined);
  return <RailContext.Provider value={{ api, setApi }}>{children}</RailContext.Provider>;
}

export default function SwipeRail({ children }: { children: ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const setApi = useContext(RailContext)?.setApi;

  useEffect(() => {
    setApi?.(emblaApi);
  }, [emblaApi, setApi]);

  return (
    <div ref={emblaRef} className="cursor-grab overflow-hidden active:cursor-grabbing" style={{ paddingLeft: RAIL_INSET }}>
      <div className="flex gap-5 pr-4 sm:pr-8">{children}</div>
    </div>
  );
}

const arrowButton =
  "flex h-11 w-11 items-center justify-center rounded-full border border-wisher-forest/15 text-wisher-forest transition-colors hover:border-wisher-forest hover:bg-wisher-forest hover:text-white disabled:pointer-events-none disabled:opacity-35";

// Back / next buttons for the rail in the same SwipeRailProvider; each greys out at its end.
export function RailControls({ className }: { className?: string }) {
  const api = useContext(RailContext)?.api;
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    update();
    api.on("select", update).on("reInit", update).on("scroll", update);
    return () => {
      api.off("select", update).off("reInit", update).off("scroll", update);
    };
  }, [api, update]);

  return (
    <div className={`flex gap-3 ${className ?? ""}`}>
      <button type="button" aria-label="Previous wishes" onClick={() => api?.scrollPrev()} disabled={!canPrev} className={arrowButton}>
        <LuArrowLeft className="h-4 w-4" />
      </button>
      <button type="button" aria-label="Next wishes" onClick={() => api?.scrollNext()} disabled={!canNext} className={arrowButton}>
        <LuArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

"use client";

import { useId, useState } from "react";
import { LuCircleX, LuPlus } from "react-icons/lu";
import FadeIn from "@/components/motion/FadeIn";

// "Questions, answered.": FAQ accordion, one answer open at a time (the first starts open).
const FAQS = [
  {
    q: "What is Wisher?",
    a: "Wisher is a social gifting app. You create a wishlist, share its unique link, and friends or family contribute securely toward the things that matter to you.",
  },
  {
    q: "Does a giver need the app?",
    a: "No. Givers open your link in any browser, see your wish and contribute in a few taps. Only the person making the wish needs the app.",
  },
  {
    q: "Where does the money go?",
    a: "Every contribution goes into your Wisher wallet, where you can see who gave and what they said. When you're ready, you withdraw it to your own bank account.",
  },
  {
    q: "Are payments secure?",
    a: "Yes. Payments run on trusted payment infrastructure, and givers only ever see your wish, never your bank details.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-label="Good to know" className="bg-wisher-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.04em] text-wisher-primary">Good to know</p>
          <h2 className="text-5xl sm:text-6xl font-bold leading-[1.02] tracking-tight text-wisher-forest">
            Questions,
            <br />
            <span className="font-fraunces italic font-normal text-wisher-primary">answered.</span>
          </h2>
          <p className="mt-8 text-sm sm:text-base font-medium text-wisher-forest/60">
            Everything you need before creating your first wishlist.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <div key={f.q} className="border-b border-wisher-forest/10 last:border-b-0">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg sm:text-xl font-semibold text-wisher-forest"
                  >
                    {f.q}
                    <span className="shrink-0 text-wisher-primary transition-transform duration-300 group-hover:scale-110">
                      {isOpen ? <LuCircleX className="h-4 w-4" strokeWidth={2.5} /> : <LuPlus className="h-4 w-4" strokeWidth={2.5} />}
                    </span>
                  </button>
                </h3>
                {/* grid-rows 0fr → 1fr animates the height without measuring it */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-sm sm:text-base font-medium leading-relaxed text-wisher-forest/60">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}

// Thin trust strip under the Hero: three short claims scrolling as a slow marquee.
// The list is rendered twice inside the track so the -50% slide (globals.css → .marquee-track)
// loops without a gap. Pauses on hover; static for reduced-motion users.
const ITEMS = [
  "Free to start",
  "Payments secured by Paystack",
  "Made for gifting in Nigeria",
];

export default function TrustMarquee() {
  // enough copies to always overflow wide screens, then the whole set twice for the loop
  const row = [...ITEMS, ...ITEMS];

  return (
    <section aria-label="Why Wisher" className="marquee overflow-hidden border-t border-white/10 bg-wisher-ink py-3.5">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="px-16 sm:px-28 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-white/65 whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

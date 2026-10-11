import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

// Full-bleed photo band: "It's seeing who showed up." over friends looking at a phone.
export default function ShowedUpSection() {
  return (
    <section
      id="showed-up"
      aria-label="It's seeing who showed up"
      className="relative h-[340px] sm:h-[420px] lg:h-[460px] overflow-hidden bg-wisher-ink"
    >
      <Image
        src="/assets/friends-phone.jpg"
        alt="Three friends crowded around a phone, smiling at the contributions coming in"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* darken overall, heavier on the left where the text sits */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="mb-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-white/80">
            The best part isn&apos;t just the gift.
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white">
            It&apos;s seeing
            <br />
            <span className="font-fraunces italic font-normal text-wisher-lime">who showed up.</span>
          </h2>
        </FadeIn>
      </div>

      <p className="absolute bottom-6 left-0 right-0 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-white/75">
        Lagos · Birthday weekend
      </p>
    </section>
  );
}

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// "Some wishes deserve to be said out loud.": closing call to action over a celebration photo,
// tinted deep green (#0B2016), heaviest on the left where the copy sits.
const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";

export default function PeopleReadySection() {
  return (
    <section
      id="start"
      aria-label="Your people are ready"
      className="relative flex min-h-[480px] items-center overflow-hidden lg:min-h-[560px]"
      style={{ backgroundColor: "#0B2016" }}
    >
      <Image
        src="/assets/nigeria-people-ready.jpg"
        alt="Friends celebrating and spraying money at a Nigerian party"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* green tint: strong behind the copy, easing off toward the right, plus a soft bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0B2016F2 0%, #0B2016CC 40%, #0B201699 70%, #0B2016B3 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2016]/80 via-transparent to-[#0B2016]/40" />

      <StaggerGroup className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <StaggerItem>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">Your people are ready</p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="max-w-2xl text-5xl sm:text-6xl lg:text-[74px] font-normal leading-[0.98] tracking-tight text-white">
            Some wishes
            <br />
            deserve to be
            <br />
            <span className="font-fraunces italic text-wisher-lime">said out loud.</span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-6 max-w-md text-sm sm:text-base font-medium leading-relaxed text-white/70">
            Turn the thing you have been quietly hoping for into one beautiful link your people can rally around.
          </p>
        </StaggerItem>
        <StaggerItem>
          <a
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex h-14 items-center gap-8 rounded-full bg-wisher-lime px-7 text-base font-extrabold text-wisher-ink transition-colors hover:bg-wisher-lime/90"
          >
            Start a wish
            <LuArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </StaggerItem>
      </StaggerGroup>

      {/* from "maybe someday" to "we got you." */}
      <div className="absolute bottom-10 right-4 z-10 hidden w-64 sm:block sm:right-6 lg:right-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <FadeIn delay={0.4} className="border-t border-white/25 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">From &ldquo;maybe someday&rdquo;</p>
          <p className="mt-2 font-fraunces text-2xl italic uppercase text-wisher-lime">To &ldquo;we got you.&rdquo;</p>
        </FadeIn>
      </div>
    </section>
  );
}

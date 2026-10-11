import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

// "Big days. Quiet dreams.": six-photo moments gallery in three columns
// (three stacked · one tall · short over tall).
// Hangouts and Graduation use the final shots; the rest are stand-ins from the Live on Wisher rail
// and story assets until their photos arrive.
type Moment = { n: string; label: string; image: string; alt: string; className: string };

const COLUMNS: Moment[][] = [
  [
    { n: "01", label: "Birthdays", image: "/assets/zamziba-trip.jpg", alt: "Friends celebrating a birthday trip", className: "h-48 sm:h-56 lg:flex-1" },
    { n: "02", label: "Hangouts", image: "/assets/nigeria-success.jpg", alt: "Two friends high-fiving over coffee at a café", className: "h-48 sm:h-56 lg:flex-1" },
    { n: "03", label: "Big dreams", image: "/assets/new-camera.jpg", alt: "A camera for a creative dream", className: "h-48 sm:h-56 lg:flex-1" },
  ],
  [
    { n: "04", label: "Graduation", image: "/assets/lagos-graduation.jpg", alt: "A graduate in a cap seated at a convocation ceremony", className: "h-80 sm:h-[440px] lg:flex-1" },
  ],
  [
    { n: "05", label: "Parties", image: "/assets/nigeria-wish-happened.jpg", alt: "Friends smiling at a laptop together", className: "h-48 sm:h-56 lg:flex-[1]" },
    { n: "06", label: "Weddings", image: "/assets/couple-home.jpg", alt: "A couple in front of their first home", className: "h-64 sm:h-80 lg:flex-[1.8]" },
  ],
];

function MomentCard({ m }: { m: Moment }) {
  return (
    <article className={`group relative lg:h-auto overflow-hidden rounded-2xl bg-wisher-forest ${m.className}`}>
      {/* hover: the photo zooms inside the card while the frame stays put */}
      <Image
        src={m.image}
        alt={m.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-110"
      />
      {/* light shade at the top for the number, darker at the bottom for the label; deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="absolute left-5 top-5 text-[11px] font-semibold tracking-[0.08em] text-white">{m.n}</p>
      <h3 className="absolute bottom-5 left-5 text-xl sm:text-2xl font-bold leading-none text-white transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1.5">
        {m.label}
      </h3>
    </article>
  );
}

export default function MomentsGallerySection() {
  return (
    <section id="moments" aria-label="For every kind of moment" className="bg-wisher-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 sm:mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-wisher-forest/60">For every kind of moment</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-wisher-ink">
              Big days.
              <br />
              <span className="font-fraunces italic font-normal text-wisher-primary">Quiet dreams.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base font-medium leading-relaxed text-wisher-forest/65 lg:mb-3">
            You don&apos;t need a perfect reason to let people know what would make you happy.
          </p>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[650px] lg:grid-cols-3">
          {COLUMNS.map((col, i) => (
            <StaggerItem key={i} className="flex flex-col gap-4">
              {col.map((m) => (
                <MomentCard key={m.n} m={m} />
              ))}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

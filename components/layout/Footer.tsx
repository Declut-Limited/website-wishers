import Link from "next/link";
import { LuArrowUp } from "react-icons/lu";

// Site footer on near-black (#0C1310). Section links use "/#…" so they also work from the
// privacy and terms pages. Features points where the Header's Features link does (the story section).
const PAGE_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#story-spread" },
  { label: "Safety", href: "/#safety" },
];

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of use", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0C1310" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16 sm:py-20 lg:grid-cols-[4fr_5fr_3fr_2fr]">
          <Link href="/" className="col-span-2 flex items-center gap-3 self-start lg:col-span-1">
            <img src="/favicon.svg" alt="" width={40} height={40} className="h-10 w-10" />
            <span className="text-2xl font-bold tracking-tight text-white">Wisher</span>
          </Link>

          <p className="col-span-2 text-lg font-medium leading-loose text-white/55 lg:col-span-1">
            Share what you would love.
            <br />
            Let your people show up.
          </p>

          <nav aria-label="Page sections">
            <ul className="flex flex-col gap-5">
              {PAGE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-medium text-white/90 transition-colors hover:text-wisher-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <ul className="flex flex-col gap-5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-medium text-white/90 transition-colors hover:text-wisher-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm font-medium text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wisher. Made with ♡ in Nigeria.</p>
          <a href="#" className="group inline-flex items-center gap-1 transition-colors hover:text-white">
            Back to top
            <LuArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Gift moments", href: "#moments" },
  { label: "Features", href: "#story-spread" },
  { label: "Safety", href: "#safety" },
];

const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/apps/details?id=com.wishers.app";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-wisher-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/favicon.svg"
            alt=""
            width={44}
            height={44}
            className="w-11 h-11 rounded-xl"
          />
          <span className="text-2xl font-bold tracking-tight text-white">Wisher</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "text-[15px] lg:text-[17px] font-bold text-white transition-colors"
                  : "text-[15px] lg:text-[17px] font-medium text-white/85 hover:text-white transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            className="bg-wisher-lime hover:bg-wisher-lime/90 text-wisher-ink text-base font-extrabold rounded-full h-12 px-7"
          >
            <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">
              Get Wisher
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <LuMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 pt-12 bg-wisher-ink border-white/10"
            >
              <nav className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-base font-semibold text-white/80 hover:text-white py-2 border-b border-white/10 transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <a
                  href={ANDROID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-wisher-lime text-wisher-ink font-extrabold py-3 px-6 hover:bg-wisher-lime/90 transition-colors"
                >
                  Get Wisher
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

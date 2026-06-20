import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/40 dark:bg-[#0d0d0d] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt="Wisher"
              width={28}
              height={28}
              className="w-7 h-7 rounded-md"
            />
            <span className="font-bold text-wisher-primary dark:text-white">
              Wisher
            </span>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <span className="text-sm text-muted-foreground">© 2025</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-foreground transition-colors"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

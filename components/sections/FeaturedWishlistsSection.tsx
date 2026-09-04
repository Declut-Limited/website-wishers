import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { WishlistType } from "@/types";
import WishlistCard from "@/components/wishlist/WishlistCard";

interface FeaturedWishlistsSectionProps {
  wishlists: WishlistType[];
}

export default function FeaturedWishlistsSection({
  wishlists,
}: FeaturedWishlistsSectionProps) {
  if (wishlists.length === 0) return null;

  // Show up to 4 teasers
  const preview = wishlists.slice(0, 4);

  return (
    <section
      id="featured"
      className="py-14 sm:py-20 bg-muted/30 dark:bg-[#0d0d0d] border-y border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            {/* Live pulse */}
            <span className="flex items-center gap-1.5 bg-wisher-primary-accent dark:bg-wisher-primary/20 text-wisher-primary dark:text-wisher-accent-dark text-xs font-bold px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-wisher-primary dark:bg-wisher-accent-dark animate-pulse" />
              Live now
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-foreground">
              Wishlists Accepting Contributions
            </h2>
          </div>

          <Link
            href="/featured"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-wisher-primary dark:text-wisher-accent-dark hover:underline underline-offset-4 shrink-0 transition-colors"
          >
            See all
            <LuArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory scrollbar-none">
          {preview.map((item) => (
            <div
              key={item.id}
              className="min-w-70 sm:min-w-0 snap-start shrink-0 sm:shrink"
            >
              <WishlistCard item={item} />
            </div>
          ))}
        </div>

        {/* Mobile "See All" button */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/featured"
            className="inline-flex items-center gap-2 text-sm font-semibold text-wisher-primary dark:text-wisher-accent-dark hover:underline underline-offset-4 transition-colors"
          >
            See all featured wishlists
            <LuArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

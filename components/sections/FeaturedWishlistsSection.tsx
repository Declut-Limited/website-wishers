import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WishlistType } from "@/types";
import WishlistCard from "@/components/wishlist/WishlistCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedWishlistsSectionProps {
  wishlists: WishlistType[];
}

export default function FeaturedWishlistsSection({
  wishlists,
}: FeaturedWishlistsSectionProps) {
  if (wishlists.length === 0) return null;

  return (
    <section id="featured" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-wisher-primary dark:text-wisher-accent-dark mb-3">
            Featured wishlists
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Wishlists People Are Rallying Behind
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            These wishlists are live and accepting contributions right now.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {wishlists.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <WishlistCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6" />
          <CarouselNext className="hidden sm:flex -right-4 lg:-right-6" />
        </Carousel>

        {/* Show More CTA */}
        <div className="text-center mt-10">
          <Link
            href="/featured"
            className="inline-flex items-center gap-2 text-wisher-primary dark:text-wisher-accent-dark font-semibold hover:underline underline-offset-4 transition-colors"
          >
            See All Featured Wishlists
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GiftMomentsSection from "@/components/sections/GiftMomentsSection";
import FeaturedWishlistsSection from "@/components/sections/FeaturedWishlistsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DownloadSection from "@/components/sections/DownloadSection";
import { getFeaturedWishlists } from "@/lib/wishlists";
import { WishlistType } from "@/types";

export const revalidate = 300;

export default async function Home() {
  let wishlists: WishlistType[] = [];
  try {
    wishlists = await getFeaturedWishlists(6);
  } catch {
    // Firebase not configured; render page without featured section
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* {wishlists.length > 0 && ( */}
          <FeaturedWishlistsSection wishlists={wishlists} />
        {/* )} */}
        <HowItWorksSection />
        <FeaturesSection />
        <GiftMomentsSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}

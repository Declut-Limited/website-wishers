import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustMarquee from "@/components/sections/TrustMarquee";
import WishingNowSection from "@/components/sections/WishingNowSection";
import ShowedUpSection from "@/components/sections/ShowedUpSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SharingStorySection from "@/components/sections/SharingStorySection";
import MomentsGallerySection from "@/components/sections/MomentsGallerySection";
import StorySpreadSection from "@/components/sections/StorySpreadSection";
// Featured wishlists are parked until boosting exists on the Wishers API (Firebase removed 2026-10-12).
// import FeaturedWishlistsSection from "@/components/sections/FeaturedWishlistsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SafetySection from "@/components/sections/SafetySection";
import FaqSection from "@/components/sections/FaqSection";
import PeopleReadySection from "@/components/sections/PeopleReadySection";
import DownloadSection from "@/components/sections/DownloadSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustMarquee />
        <WishingNowSection />
        <ShowedUpSection />
        {/* Featured wishlists: parked until boosting is on the API */}
        {/* <FeaturedWishlistsSection wishlists={wishlists} /> */}
        <HowItWorksSection />
        <SharingStorySection />
        <MomentsGallerySection />
        <StorySpreadSection />
        <TestimonialsSection />
        <SafetySection />
        <FaqSection />
        <PeopleReadySection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}

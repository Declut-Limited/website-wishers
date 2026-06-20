import Link from "next/link";
import { ArrowLeft, Inbox } from "lucide-react";
import { getFeaturedWishlistsPaginated } from "@/lib/wishlists";
import { WishlistType } from "@/types";
import LoadMoreClient from "./LoadMoreClient";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const revalidate = 300;

export default async function FeaturedPage() {
  let initialItems: WishlistType[] = [];
  let initialLastDocId: string | null = null;
  let initialHasMore = false;

  try {
    const result = await getFeaturedWishlistsPaginated(12);
    initialItems = result.items;
    initialLastDocId = result.lastDoc?.id ?? null;
    initialHasMore = result.hasMore;
  } catch {
    // Firebase not configured; show empty state
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Page heading */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Featured Wishlists
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse and support wishlists people are rallying around.
            </p>
          </div>

          {initialItems.length > 0 ? (
            <LoadMoreClient
              initialItems={initialItems}
              initialLastDocId={initialLastDocId}
              initialHasMore={initialHasMore}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                <Inbox className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                No featured wishlists right now
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Check back soon — wishlists that have been boosted will appear
                here.
              </p>
              <Link
                href="/"
                className="mt-2 text-sm text-wisher-primary dark:text-wisher-accent-dark font-semibold hover:underline underline-offset-4"
              >
                ← Back to Home
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

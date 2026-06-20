"use client";

import { useState } from "react";
import { getFeaturedWishlistsPaginated } from "@/lib/wishlists";
import { WishlistType } from "@/types";
import WishlistCard from "@/components/wishlist/WishlistCard";
import WishlistSkeleton from "@/components/wishlist/WishlistSkeleton";
import { Button } from "@/components/ui/button";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface LoadMoreClientProps {
  initialItems: WishlistType[];
  initialLastDocId: string | null;
  initialHasMore: boolean;
}

export default function LoadMoreClient({
  initialItems,
  initialLastDocId,
  initialHasMore,
}: LoadMoreClientProps) {
  const [items, setItems] = useState<WishlistType[]>(initialItems);
  const [lastDocId, setLastDocId] = useState<string | null>(initialLastDocId);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    if (!lastDocId || loading) return;
    setLoading(true);
    try {
      const lastDocSnap = await getDoc(doc(collection(db, "wishlists"), lastDocId));
      const result = await getFeaturedWishlistsPaginated(12, lastDocSnap as Parameters<typeof getFeaturedWishlistsPaginated>[1]);
      setItems((prev) => [...prev, ...result.items]);
      setLastDocId(result.lastDoc?.id ?? null);
      setHasMore(result.hasMore);
    } catch (err) {
      console.error("Failed to load more wishlists:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <WishlistSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      {/* Load More */}
      {hasMore && !loading && (
        <div className="flex justify-center">
          <Button
            onClick={loadMore}
            variant="outline"
            className="border-wisher-primary text-wisher-primary hover:bg-wisher-primary-accent dark:border-wisher-accent-dark dark:text-wisher-accent-dark dark:hover:bg-wisher-primary/20 font-semibold px-8"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

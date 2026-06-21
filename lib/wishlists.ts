import {
  collection, query, where, orderBy,
  limit, startAfter, getDocs,
  QueryDocumentSnapshot, DocumentData,
} from "firebase/firestore";
import { db } from "./firebase";
import { WishlistType } from "@/types";

// Composite index required in Firestore console:
// currentboostExpiresAt ASC, previousBoostingCount DESC, lastBoostedAt DESC,
// totalAmountReceived DESC, totalContributors DESC
// If the index is missing, Firestore logs an error with a direct creation link.
const BOOST_CONSTRAINTS = [
  where("currentboostExpiresAt", ">=", new Date().toISOString()),
  orderBy("previousBoostingCount", "desc"),
  orderBy("lastBoostedAt", "desc"),
  orderBy("totalAmountReceived", "desc"),
  orderBy("totalContributors", "desc"),
];

// For the carousel — call this in a Server Component
export async function getFeaturedWishlists(count = 6): Promise<WishlistType[]> {
  const q = query(collection(db, "wishlists"), ...BOOST_CONSTRAINTS, limit(count));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as WishlistType));
}

// For the /featured paginated page
export async function getFeaturedWishlistsPaginated(
  perPage = 12,
  lastDoc?: QueryDocumentSnapshot<DocumentData>
): Promise<{
  items: WishlistType[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean;
}> {
  const q = query(
    collection(db, "wishlists"),
    ...BOOST_CONSTRAINTS,
    ...(lastDoc ? [startAfter(lastDoc)] : []),
    limit(perPage + 1),
  );
  const snap = await getDocs(q);
  const hasMore = snap.docs.length > perPage;
  const docs = hasMore ? snap.docs.slice(0, perPage) : snap.docs;
  return {
    items: docs.map(d => ({ id: d.id, ...d.data() } as WishlistType)),
    lastDoc: docs.at(-1) ?? null,
    hasMore,
  };
}

export function optimizeCloudinaryUrl(url: string, width = 600): string {
  if (!url) return "/placeholder-wishlist.png";
  return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
}

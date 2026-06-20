import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { WishlistType } from "@/types";

const now = () => new Date().toISOString();

export async function getFeaturedWishlists(count = 6): Promise<WishlistType[]> {
  const q = query(
    collection(db, "wishlists"),
    where("currentboostExpiresAt", ">=", now()),
    orderBy("currentboostExpiresAt", "desc"),
    orderBy("totalAmountReceived", "desc"),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as WishlistType));
}

export async function getFeaturedWishlistsPaginated(
  perPage = 12,
  lastDoc?: QueryDocumentSnapshot
): Promise<{
  items: WishlistType[];
  lastDoc: QueryDocumentSnapshot | null;
  hasMore: boolean;
}> {
  const constraints = [
    where("currentboostExpiresAt", ">=", now()),
    orderBy("currentboostExpiresAt", "desc"),
    orderBy("totalAmountReceived", "desc"),
    limit(perPage + 1),
    ...(lastDoc ? [startAfter(lastDoc)] : []),
  ];
  const q = query(collection(db, "wishlists"), ...constraints);
  const snap = await getDocs(q);
  const hasMore = snap.docs.length > perPage;
  const docs = hasMore ? snap.docs.slice(0, perPage) : snap.docs;
  return {
    items: docs.map((d) => ({ id: d.id, ...d.data() } as WishlistType)),
    lastDoc: docs[docs.length - 1] ?? null,
    hasMore,
  };
}

export function optimizeCloudinaryUrl(url: string, width = 600): string {
  if (!url) return "/placeholder-wishlist.png";
  return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
}

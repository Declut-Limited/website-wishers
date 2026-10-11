// Wishlist helpers. The Firestore queries that lived here were removed with Firebase
// (2026-10-12); featured wishlists will come from the Wishers API once boosting exists.

export function optimizeCloudinaryUrl(url: string, width = 600): string {
  if (!url) return "/placeholder-wishlist.png";
  return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
}

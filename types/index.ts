export interface WishlistType {
  id: string;
  uid: string;
  title: string;
  description?: string;
  image: string;
  slug: string;
  link: string;
  totalWishItems: number;
  totalContributors: number;
  totalGoalAmount: number;
  totalAmountReceived: number;
  isCompleted: boolean;
  currentboostExpiresAt?: string;
  contributorsImages?: string[];
  visitCount?: number;
  created: string;
}

import { WishlistType } from "@/types";
import { optimizeCloudinaryUrl } from "@/lib/wishlists";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Gift } from "lucide-react";

interface WishlistCardProps {
  item: WishlistType;
}

export default function WishlistCard({ item }: WishlistCardProps) {
  const progress =
    item.totalGoalAmount > 0
      ? Math.min((item.totalAmountReceived / item.totalGoalAmount) * 100, 100)
      : 0;

  const imageUrl = optimizeCloudinaryUrl(item.image, 600);

  return (
    <Card className="overflow-hidden flex flex-col h-full border border-border hover:-translate-y-1 transition-transform duration-200 shadow-sm">
      {/* Cover image */}
      <div className="relative w-full h-48 bg-muted overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={item.title}
          width={600}
          height={192}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {item.isCompleted && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-wisher-primary text-white text-xs font-semibold">
              Completed
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="flex flex-col flex-1 p-4 gap-3">
        {/* Title */}
        <h3 className="font-bold text-base text-foreground line-clamp-1">
          {item.title}
        </h3>

        {/* Description */}
        {item.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-2 rounded-full bg-wisher-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">
              ₦{item.totalAmountReceived.toLocaleString("en-NG")} raised
            </span>
            <span>of ₦{item.totalGoalAmount.toLocaleString("en-NG")}</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {item.totalContributors} contributor
            {item.totalContributors !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <Gift className="w-3.5 h-3.5" />
            {item.totalWishItems} item{item.totalWishItems !== 1 ? "s" : ""}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-1">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-wisher-primary-accent dark:bg-wisher-primary/20 text-wisher-primary dark:text-wisher-accent-dark font-semibold text-sm py-2.5 px-4 hover:bg-wisher-primary hover:text-white dark:hover:bg-wisher-primary dark:hover:text-white transition-colors"
          >
            Gift This Wishlist →
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

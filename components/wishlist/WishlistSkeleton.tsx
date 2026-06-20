export default function WishlistSkeleton() {
  return (
    <div className="rounded-xl bg-muted animate-pulse overflow-hidden">
      <div className="h-48 w-full bg-muted-foreground/10" />
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 rounded bg-muted-foreground/10" />
        <div className="h-4 w-full rounded bg-muted-foreground/10" />
        <div className="h-4 w-5/6 rounded bg-muted-foreground/10" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/10" />
        <div className="flex justify-between">
          <div className="h-4 w-1/3 rounded bg-muted-foreground/10" />
          <div className="h-4 w-1/4 rounded bg-muted-foreground/10" />
        </div>
        <div className="h-10 w-full rounded-md bg-muted-foreground/10 mt-2" />
      </div>
    </div>
  );
}

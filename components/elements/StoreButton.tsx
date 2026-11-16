"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { LuX } from "react-icons/lu";
import { WEB_APP_LOGIN_URL } from "@/lib/links";

// The apps aren't in the stores yet, so the store pills open a "coming soon" dialog
// that points to the web app instead (16 November 2026).

const STORES = {
  android: { icon: "/assets/google-play.svg", width: 24, height: 26, kicker: "Get it on", kickerCase: "uppercase", name: "Google Play" },
  ios: { icon: "/assets/apple-store.svg", width: 18, height: 22, kicker: "Download on the", kickerCase: "", name: "App Store" },
} as const;

export default function StoreButton({ store, className }: { store: keyof typeof STORES; className?: string }) {
  const s = STORES[store];
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={className}>
          <img src={s.icon} alt="" width={s.width} height={s.height} className="h-6 w-auto shrink-0" />
          <span className="text-left">
            <span className={`block text-[10px] font-medium leading-none tracking-wide ${s.kickerCase}`}>{s.kicker}</span>
            <span className="block text-lg font-semibold leading-tight">{s.name}</span>
          </span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/70" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[60] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-7 text-center shadow-2xl focus:outline-none">
          <Dialog.Close
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-wisher-ink"
          >
            <LuX className="h-5 w-5" />
          </Dialog.Close>

          <img src="/favicon.svg" alt="" width={56} height={56} className="mx-auto mb-5 h-14 w-14 rounded-2xl" />
          <Dialog.Title className="text-2xl font-bold tracking-tight text-wisher-ink">Coming soon</Dialog.Title>
          <Dialog.Description className="mt-3 text-base leading-relaxed text-neutral-600">
            Wisher is on its way to {s.name}. In the meantime, you can make your wishlist on the web.
          </Dialog.Description>

          <a
            href={WEB_APP_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-wisher-lime px-7 text-base font-extrabold text-wisher-ink transition-colors hover:bg-wisher-lime/90"
          >
            Get started on the web
          </a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

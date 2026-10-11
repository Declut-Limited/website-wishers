"use client";

import { useEffect } from "react";
import Link from "next/link";

// Route error boundary: catches render errors below the root layout.
// Visitors get a friendly message (never the raw error); the details go to the console,
// and the digest ties a production error to its server log entry.
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-wisher-cream px-4">
      <div className="max-w-md text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-wisher-forest/60">Something broke</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-wisher-ink">
          Oops.
          <br />
          <span className="font-fraunces italic font-normal text-wisher-primary">That wasn&apos;t meant to happen.</span>
        </h1>
        <p className="mt-5 text-sm sm:text-base font-medium leading-relaxed text-wisher-forest/65">
          Something went wrong loading this page. Give it another go, or head back home.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-full bg-wisher-lime px-6 font-bold text-wisher-ink transition-colors hover:bg-wisher-lime/90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-wisher-forest/15 px-6 font-semibold text-wisher-forest transition-colors hover:bg-wisher-forest/5"
          >
            Go home
          </Link>
        </div>

        {error.digest ? (
          <p className="mt-6 text-xs font-medium text-wisher-forest/40">Reference: {error.digest}</p>
        ) : null}
      </div>
    </main>
  );
}

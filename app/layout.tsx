import type { Metadata } from "next";
import { Urbanist, Fraunces, Caveat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Handwritten accent (Hero's "A little hint, A lot of love" note)
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wishers.com.ng"),
  title: {
    default: "Wishers — Share Your Wishes, Receive the Gifts You Love",
    template: "%s — Wishers",
  },
  description:
    "Create a wishlist, share your unique link, and let friends contribute via Paystack. Nigeria's #1 gifting app.",
  applicationName: "Wishers",
  // Each page points Google at its one wishers.com.ng address.
  alternates: { canonical: "./" },
  openGraph: {
    title: "Wishers",
    description: "Create a wishlist, share your link, receive gifts.",
    url: "https://wishers.com.ng",
    siteName: "Wishers",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishers — Share Your Wishes",
    description:
      "Nigeria's gifting app. Create wishlists, share links, receive contributions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${urbanist.variable} ${fraunces.variable} ${caveat.variable}`}
    >
      <body className="font-[family-name:var(--font-urbanist)] antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

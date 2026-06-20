import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wisher — Share Your Wishes, Receive the Gifts You Love",
  description:
    "Create a wishlist, share your unique link, and let friends contribute via Paystack. Nigeria's #1 gifting app.",
  openGraph: {
    title: "Wisher",
    description: "Create a wishlist, share your link, receive gifts.",
    url: "https://wishers.app",
    siteName: "Wisher",
    images: [
      { url: "https://wishers.app/og-image.png", width: 1200, height: 630 },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisher — Share Your Wishes",
    description:
      "Nigeria's gifting app. Create wishlists, share links, receive contributions.",
    images: ["https://wishers.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={urbanist.variable}>
      <body className="font-[family-name:var(--font-urbanist)] antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

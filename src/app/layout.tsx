import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { CoinsProvider } from "@/context/coinsContext";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "CoinTracker",
  description: "Track Cryptocurrency Stats in Real Time",
  keywords: "cryptocurrency, crypto, coin, bitcoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} bg-background overflow-x-hidden`}>
        <CoinsProvider>
          {children}
        </CoinsProvider>
      </body>
    </html>
  );
}

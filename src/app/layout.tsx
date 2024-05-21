import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { CoinsProvider } from "@/context/coinsContext";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Coin Tracker",
  description: "Track Cryptocurrency Stats in Real Time",
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
          <Header />
          {children}
        </CoinsProvider>
      </body>
    </html>
  );
}

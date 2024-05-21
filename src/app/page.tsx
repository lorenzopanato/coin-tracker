import CoinsCarousel from "@/components/coins-carousel";
import Hero from "@/components/hero";
import Ranking from "@/components/ranking";

export default function Home() {
  return (
    <main className="flex min-h-screen relative pt-10 flex-col items-center text-primary">
      <Hero />
      <CoinsCarousel />
      <Ranking />
    </main>
  );
}

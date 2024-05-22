import CoinsCarousel from "@/components/coins-carousel";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Ranking from "@/components/ranking";
import Testimonials from "@/components/testimonials";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

export default function Home() {
  return (
    <main className="flex min-h-screen relative pt-10 flex-col items-center text-primary">
      <Hero />
      <CoinsCarousel />
      <Ranking />
      <Testimonials />
      <section className="w-full flex flex-col gap-16 items-center bg-gradient-to-b from-background via-background to-gradient">
        <Faq />
        <footer className="flex justify-between w-full mt-36 max-w-screen-2xl border-t border-zinc-700 px-8 py-6">
          <span className="text-sm xl:text-base text-mainGray">
            © CoinTracker 2024 • All Rights Reserved
          </span>
          <div className="flex gap-6">
            <LuFacebook size={24} />
            <LuInstagram size={24} />
            <LuTwitter size={24} />
            <LuLinkedin size={24} />
          </div>
        </footer>
      </section>
    </main>
  );
}

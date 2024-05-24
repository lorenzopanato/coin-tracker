import CoinsCarousel from "@/components/coins-carousel";
import Faq from "@/components/faq";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Ranking from "@/components/ranking";
import Testimonials from "@/components/testimonials";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col items-center text-primary">
      <section id="home" className="w-full flex flex-col items-center gap-16 sm:gap-24 xl:gap-36 pb-20 xl:pb-36 bg-gradient-to-t from-background via-background to-gradient">
        <Header />
        <Hero />
      </section>
      <CoinsCarousel />
      <Ranking />
      <Testimonials />
      <section id="faq" className="w-full flex flex-col sm:gap-16 items-center bg-gradient-to-b from-background via-background to-gradient">
        <Faq />
        <footer className="flex justify-center w-full mt-36 border-t border-zinc-700">
          <div className="max-w-screen-2xl w-full flex justify-between items-center px-7 sm:px-8 py-6">
            <span className="text-sm xl:text-base text-mainGray">
              © CoinTracker 2024 • All Rights Reserved
            </span>
            <div className="flex gap-3 sm:gap-6">
              <LuFacebook className="text-xl sm:text-2xl" />
              <LuInstagram className="text-xl sm:text-2xl" />
              <LuTwitter className="text-xl sm:text-2xl" />
              <LuLinkedin className="text-xl sm:text-2xl" />
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}

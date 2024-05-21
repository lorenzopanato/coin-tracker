"use client";

import { useCoinsContext } from "@/context/coinsContext";

export default function CoinsCarousel() {
  const { coinsData } = useCoinsContext();

  return (
    <section className="max-w-screen-2xl flex flex-col text-center pt-36 overflow-hidden px-10">
      <h2 className="text-[1.9rem] xl:text-[2.2rem] font-medium">Data for 100+ cryptocurrencies</h2>
      <p className="text-mainGray text-base xl:text-lg mt-1.5 xl:mt-3 mb-10 xl:mb-16">Check out updated market data and much more for the cryptocurrencies we support</p>

      <div className="inline-flex overflow-hidden gap-16">
        <div className="flex items-center gap-16 animate-infinite-scroll">
          {coinsData.map((coin, index) => (
            <img
              key={index}
              src={coin.image}
              alt={`${coin.name} image`}
              className="max-w-[56px] xl:max-w-[66px]"
            />
          ))}
        </div>
        <div
          className="flex items-center gap-16 animate-infinite-scroll"
          aria-hidden="true"
        >
          {coinsData.map((coin, index) => (
            <img
              key={index}
              src={coin.image}
              alt={`${coin.name} image`}
              className="max-w-[56px] xl:max-w-[66px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

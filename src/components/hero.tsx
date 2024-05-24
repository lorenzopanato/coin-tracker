"use client";

import { useCoinsContext } from "@/context/coinsContext";
import { formatDate, formatPrice } from "@/utils/formatters/coinDataFormat";
import { LuArrowDown, LuArrowUp, LuChevronDown } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  const { coinsData } = useCoinsContext();

  const bitcoinData = coinsData.filter((coin) => coin.id === "bitcoin")[0];
  const ethereumData = coinsData.filter((coin) => coin.id === "ethereum")[0];

  return (
    <div className="max-w-screen-2xl md:h-[460px] lg:h-[250px] px-7 sm:px-10 flex flex-col lg:flex-row gap-10 sm:gap-20 xl:gap-40">
      <article className="flex-1 flex flex-col gap-3">
        <h1 className="font-medium text-3xl sm:text-4xl xl:text-[3rem] xl:leading-tight">
          Track Cryptocurrency Stats in Real Time
        </h1>
        <p className="text-sm xl:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          perferendis tempore deleniti adipisci quod ipsum perspiciatis officia
          cumque at! Nam atque inventore error officia voluptas qui ad magnam
          explicabo cupiditate?
        </p>
        <div className="flex gap-4 mt-4 text-sm xl:text-base">
          <ScrollLink
            to="faq"
            className="hover:text-primary transition-all cursor-pointer"
            spy={true}
            smooth={true}
            duration={700}
          >
            <button className="py-2 px-5 rounded-full text-sm sm:text-base bg-primary text-black font-semibold transition-all hover:opacity-90">
              Learn more
            </button>
          </ScrollLink>

          <ScrollLink
            to="features"
            className="hover:text-primary transition-all cursor-pointer"
            spy={true}
            smooth={true}
            duration={700}
          >
            <button
              onClick={() => console.log(bitcoinData)}
              className="py-2 pl-5 pr-4 flex justify-center items-center gap-2 border transition-all hover:bg-zinc-800/70 rounded-full text-sm sm:text-base font-medium"
            >
              Explore
              <LuChevronDown className="text-lg xl:text-xl" />
            </button>
          </ScrollLink>
        </div>
      </article>
      <div className="md:flex-1 hidden md:block">
        <div className="text-primary flex justify-center max-h-[305px] relative w-full h-full">
          <div className="absolute bg-darkGray border flex flex-col border-zinc-700 left-0 w-[49%] lg:w-full lg:max-w-[340px] 2xl:max-w-[400px] h-48 p-4 rounded-lg">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-2">
                <img
                  src={ethereumData?.image}
                  alt={`${ethereumData?.name} image`}
                  className="h-10 w-10"
                />
                <span className="">
                  {ethereumData?.name} ({ethereumData?.symbol.toUpperCase()})
                </span>
              </div>
              <div
                className={`flex gap-2 items-center ${
                  ethereumData?.price_change_percentage_24h > 0
                    ? "text-secondary"
                    : "text-[#fa5d5d]"
                } text-base sm:text-lg`}
              >
                {ethereumData?.price_change_percentage_24h > 0 ? (
                  <LuArrowUp />
                ) : (
                  <LuArrowDown />
                )}
                <span>
                  {ethereumData?.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </div>

            <span className="mt-12 text-2xl xl:text-3xl">
              $ {formatPrice(ethereumData?.current_price)}
            </span>
            <span className="text-mainGray mt-1 text-sm sm:text-base">
              {formatDate(ethereumData?.last_updated)}
            </span>
          </div>

          <div className="absolute bg-darkGray border flex flex-col border-zinc-700 lg:-bottom-20 right-0 w-full md:w-[49%] lg:w-full lg:max-w-[340px] 2xl:max-w-[400px] h-44 sm:h-48 p-4 rounded-lg">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={bitcoinData?.image}
                  alt={`${bitcoinData?.name} image`}
                  className="h-[40px] w-[40px] sm:h-[52px] sm:w-[52px]"
                />
                <span className="text-base sm:text-lg">
                  {bitcoinData?.name}
                </span>
              </div>
              <div
                className={`flex gap-2 items-center ${
                  bitcoinData?.price_change_percentage_24h > 0
                    ? "text-secondary"
                    : "text-[#fd5252]"
                } text-base sm:text-lg`}
              >
                {bitcoinData?.price_change_percentage_24h > 0 ? (
                  <LuArrowUp />
                ) : (
                  <LuArrowDown />
                )}
                <span>
                  {bitcoinData?.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </div>

            <div className="flex justify-between items-start mt-10">
              <div className="flex flex-col">
                <span className="text-2xl xl:text-3xl">
                  $ {formatPrice(bitcoinData?.current_price)}
                </span>
                <span className="text-mainGray mt-1">
                  {formatDate(bitcoinData?.last_updated)}
                </span>
              </div>
              <span className="text-mainGray mt-1 text-base sm:text-lg">
                {bitcoinData?.symbol.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

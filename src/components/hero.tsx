  "use client";

  import { useCoinsContext } from "@/context/coinsContext";
import { formatDate, formatPrice } from "@/utils/formatters/coinDataFormat";
  import { LuArrowDown, LuArrowUp, LuChevronDown } from "react-icons/lu";

  export default function Hero() {
    const { coinsData } = useCoinsContext();

    const bitcoinData = coinsData.filter((coin) => coin.id === "bitcoin")[0];
    const ethereumData = coinsData.filter((coin) => coin.id === "ethereum")[0];

    return (
      <section className="flex justify-center w-full pt-16 xl:pt-28 pb-20 xl:pb-36 bg-gradient-to-t from-background via-[#0d232e] to-background">
        <div className="max-w-screen-2xl h-[460px] lg:h-[250px] px-10 flex flex-col lg:flex-row gap-20 xl:gap-40">
          <article className="flex-1 flex flex-col gap-4">
            <h1 className="font-medium text-4xl xl:text-[3rem] leading-tight">
              Track Cryptocurrency Stats in Real Time
            </h1>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              perferendis tempore deleniti adipisci quod ipsum perspiciatis
              officia cumque at! Nam atque inventore error officia voluptas qui ad
              magnam explicabo cupiditate?
            </p>
            <div className="flex gap-4 mt-6 text-sm xl:text-base">
              <button className="py-2 px-5 rounded-full bg-primary text-black font-semibold transition-all hover:opacity-90">
                Learn more
              </button>
              <button onClick={() => console.log(bitcoinData)} className="py-2 pl-5 pr-4 flex justify-center items-center gap-2 border transition-all hover:bg-zinc-800/70 rounded-full font-medium">
                Explore
                <LuChevronDown className="text-lg xl:text-xl" />
              </button>
            </div>
          </article>
          <div className="flex-1">
            <div className="text-primary flex justify-center max-h-[305px] relative w-full h-full">
              <div className="absolute bg-darkGray border border-zinc-700 left-0 w-[49%] lg:w-full lg:max-w-[340px] 2xl:max-w-[400px] h-48 p-4 rounded-lg flex flex-col">
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
                    } text-lg`}
                  >
                    {ethereumData?.price_change_percentage_24h > 0 ? (
                      <LuArrowUp />
                    ) : (
                      <LuArrowDown />
                    )}
                    <span>{ethereumData?.price_change_percentage_24h.toFixed(2)}%</span>
                  </div>
                </div>

                <span className="mt-12 text-2xl xl:text-3xl">
                  $ {formatPrice(ethereumData?.current_price)}
                </span>
                <span className="text-mainGray mt-1">
                  {formatDate(ethereumData?.last_updated)}
                </span>
              </div>

              <div className="absolute bg-darkGray border border-zinc-700 lg:-bottom-20 right-0 w-[49%] lg:w-full lg:max-w-[340px] 2xl:max-w-[400px] h-48 p-4 rounded-lg flex flex-col">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <img
                      src={bitcoinData?.image}
                      alt={`${bitcoinData?.name} image`}
                      className="h-[52px] w-[52px]"
                    />
                    <span className="text-lg">{bitcoinData?.name}</span>
                  </div>
                  <div
                    className={`flex gap-2 items-center ${
                      bitcoinData?.price_change_percentage_24h > 0
                        ? "text-secondary"
                        : "text-[#fd5252]"
                    } text-lg`}
                  >
                    {bitcoinData?.price_change_percentage_24h > 0 ? (
                      <LuArrowUp />
                    ) : (
                      <LuArrowDown />
                    )}
                    <span>{bitcoinData?.price_change_percentage_24h.toFixed(2)}%</span>
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
                  <span className="text-mainGray mt-1 text-lg">
                    {bitcoinData?.symbol.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

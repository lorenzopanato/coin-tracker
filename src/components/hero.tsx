import { LuArrowDown, LuChevronDown, LuChevronRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="flex justify-center w-full pt-10 xl:pt-16 bg-gradient-to-t from-background via-secondary/10 to-background">
      <div className="max-w-screen-2xl max-h-[250px] px-10 flex gap-20 xl:gap-40">
        <article className="text-primary flex-1 flex flex-col gap-4">
          <h1 className="font-medium text-4xl xl:text-[2.8rem] leading-tight">
            Track Cryptocurrency Stats in Real Time
          </h1>
          <p className="text-mainGray text-sm xl:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            nesciunt perferendis nihil, ipsa, obcaecati tempora eaque porro
            aliquam magni maxime non qui aspernatur dolore.
          </p>
          <div className="flex gap-4 mt-6 text-sm xl:text-base">
            <button className="py-2 px-5 rounded-full bg-primary text-black font-semibold transition-all hover:opacity-90">
              Learn more
            </button>
            <button className="py-2 pl-5 pr-4 flex justify-center items-center gap-2 border transition-all hover:bg-zinc-800/70 rounded-full font-medium">
              Explore
              <LuChevronDown className="text-lg xl:text-xl" />
            </button>
          </div>
        </article>
        <div className="flex-1">
          <div className="text-primary flex justify-center max-h-[305px] relative w-full h-full">
            <div className="absolute bg-zinc-800 border border-zinc-700 left-0 max-w-[300px] xl:max-w-[340px] 2xl:max-w-[400px] w-full max-h-48 h-full p-4 rounded-lg flex flex-col">
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded-full bg-violet-500"></div>
                  <span className="font-medium">Ethereum (ETH)</span>
                </div>
                <span className="text-red-500">0.76%</span>
              </div>

              <span className="font-medium text-2xl xl:text-3xl mt-8">
                0.8273821
              </span>
              <span className="text-mainGray mt-1 text-base xl:text-lg">
                3,4432.52 USD
              </span>
            </div>

            <div className="absolute bg-zinc-800 border border-zinc-700 -bottom-20 right-0 max-w-[300px] xl:max-w-[340px] 2xl:max-w-[400px] w-full max-h-48 h-full p-4 rounded-lg flex flex-col">
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2">
                  <div className="h-10 w-10 rounded-full bg-yellow-500"></div>
                  <span className="font-medium">Bitcoin</span>
                </div>
                <span className="text-cyan-500">4.98%</span>
              </div>

              <div className="flex justify-between items-center mt-8">
                <span className="font-medium text-2xl xl:text-3xl">
                  48,324.45 USD
                </span>
                <span className="text-mainGray mt-1 text-lg">BTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

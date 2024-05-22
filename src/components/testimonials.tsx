import { TiStarFullOutline } from "react-icons/ti";
import { FaQuoteRight } from "react-icons/fa6";
import User1 from "../../public/user-1.jpg"
import User2 from "../../public/user-2.jpg"
import User3 from "../../public/user-3.jpg"
import User4 from "../../public/user-4.jpg"

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-20 max-w-screen-2xl w-full px-10 mt-16 py-20">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-gradient-to-tr from-darkGray to-background/90 border border-zinc-700">
          <TiStarFullOutline className="text-secondary" size={16} />
          Validated by users
        </div>
        <h2 className="text-[1.9rem] mt-4 xl:text-[2.2rem] text-center font-medium">
          User Testimonials
        </h2>
        <p className="text-mainGray mt-2 text-base xl:text-lg w-full max-w-[700px]">
          At CoinTracker, the opinions and experiences of our users matter the
          most. Here's what some of our valued users have to say about their
          journey with us.
        </p>
      </div>

      <div className="flex gap-10 max-w-screen-xl flex-wrap">
        <div className="p-6 rounded-md bg-darkGray/50 min-w-[335px] flex-1 border border-zinc-700">
          <div className="flex justify-between pb-6 items-center border-b border-zinc-700">
            <div className="flex items-center gap-4">
              <img src={User1.src} alt="imagem do usuário 1" className="rounded-full h-14 w-14 object-cover" />
              <div>
                <strong className="ml-[2px] font-medium">Alexander Harris</strong>
                <p className="text-sm text-mainGray">Crypto Investor</p>
              </div>
            </div>
            <FaQuoteRight className="text-4xl text-secondary" />
          </div>
          <p className="text-mainGray pt-6">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptate in aliquid cumque consequatur recusandae itaque quae
            obcaecati odit est!"
          </p>
        </div>

        <div className="p-6 rounded-md bg-darkGray/50 min-w-[335px] flex-1 border border-zinc-700">
          <div className="flex justify-between pb-6 items-center border-b border-zinc-700">
            <div className="flex items-center gap-4">
              <img src={User2.src} alt="imagem do usuário 2" className="rounded-full h-14 w-14 object-cover" />
              <div>
                <strong className="ml-[2px] font-medium">Olivia Brooks</strong>
                <p className="text-sm text-mainGray">Novice Crypto Enthusiast</p>
              </div>
            </div>
            <FaQuoteRight className="text-4xl text-secondary" />
          </div>
          <p className="text-mainGray pt-6">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptate in aliquid cumque consequatur recusandae itaque quae
            obcaecati odit est!"
          </p>
        </div>

        <div className="p-6 rounded-md bg-darkGray/50 min-w-[335px] flex-1 border border-zinc-700">
          <div className="flex justify-between pb-6 items-center border-b border-zinc-700">
            <div className="flex items-center gap-4">
              <img src={User3.src} alt="imagem do usuário 3" className="rounded-full h-14 w-14 object-cover" />
              <div>
                <strong className="ml-[2px] font-medium">John Doe</strong>
                <p className="text-sm text-mainGray">Novice Trader</p>
              </div>
            </div>
            <FaQuoteRight className="text-4xl text-secondary" />
          </div>
          <p className="text-mainGray pt-6">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptate in aliquid cumque consequatur recusandae itaque quae
            obcaecati odit est!"
          </p>
        </div>
      </div>
    </div>
  );
}

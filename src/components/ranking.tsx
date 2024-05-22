"use client";

import { useCoinsContext } from "@/context/coinsContext";
import { formatPrice } from "@/utils/formatters/coinDataFormat";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  ThemeProvider,
  createTheme,
  Pagination,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuArrowRight, LuGlobe, LuLineChart, LuWallet } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

export default function Ranking() {
  const { coinsData, pageCoins, fetchPageCoins } = useCoinsContext();

  const theme = createTheme({
    typography: {
      fontFamily: "'Open Sans', sans-serif",
    },
  });

  const colorTheme = createTheme({
    palette: {
      text: {
        primary: "#ffffff",
      },
    },
  });

  const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
    fetchPageCoins(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="flex flex-col items-center justify-start w-full bg-darkGray/50 px-10 mt-28 py-20 text-center">
        <div className="pb-24 xl:pb-40 flex flex-col items-center">
          <div className="flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-gradient-to-tr from-darkGray to-background/90 border border-zinc-700">
            <TiStarFullOutline className="text-secondary" size={16} />
            Discover Our Features
          </div>
          <h2 className="text-[1.9rem] mt-4 xl:text-[2.2rem] text-center font-medium">
            Explore CoinTracker Main Features
          </h2>
          <p className="text-mainGray mt-2 text-base xl:text-lg w-full max-w-[540px]">
            At CoinTracker, we are dedicated to providing our users with
            up-to-date data through a beautiful and modern interface
          </p>
        </div>
        <div className="flex gap-[110px] max-w-screen-2xl w-full">
          <div className="w-full max-w-[700px]">
            <div>
              <div className="flex items-center gap-4 xl:gap-8">
                <MdOutlineQueryStats className="text-secondary text-[2.2rem] xl:text-[2.8rem]" />
                <h3 className="text-start text-[1.5rem] xl:text-[2rem]">
                  Real-Time Insights
                </h3>
              </div>
              <p className="text-mainGray pt-6 max-w-[600px] text-base xl:text-lg text-start">
                Stay ahead of the crypto curve with real-time market data,
                expert analysis, and the latest trends. Our plataform enables
                you to make timely and informed investment decisions in the
                ever-changing cryptocurrency landscape. By using these insights,
                you can confidently manage the crypto market's complexities and
                boost your investment potential.
              </p>
              <span className="flex items-center w-[220px] cursor-pointer gap-2 text-base xl:text-lg mt-8 xl:mt-12 transition-all hover:text-secondary hover:gap-2.5">
                More information
                <LuArrowRight className="text-xl" />
              </span>
            </div>

            <div className="pt-[25%] xl:pt-[40%]">
              <div className="flex items-center gap-4 xl:gap-8">
                <LuWallet className="text-secondary text-[2.2rem] xl:text-[2.8rem]" />
                <h3 className="text-start text-[1.5rem] xl:text-[2rem]">
                  Secure Wallet Integration
                </h3>
              </div>
              <p className="text-mainGray pt-6 max-w-[600px] text-base xl:text-lg text-start">
                Your digital assets are precious. CoinTracker provides robust
                security and wallet integration to safeguard your investments.
                With reliable protection and easy access, you can feel confident
                that your assets are safe while managing your cryptocurrency
                portfolio. Don't miss the chance to secure your investments
                today.
              </p>
              <span className="flex items-center w-[220px] cursor-pointer gap-2 text-base xl:text-lg mt-8 xl:mt-12 transition-all hover:text-secondary hover:gap-2.5">
                Get started now
                <LuArrowRight className="text-xl" />
              </span>
            </div>

            <div className="pt-[25%] xl:pt-[40%]">
              <div className="flex items-center gap-3 xl:gap-6">
                <AiOutlineThunderbolt className="text-secondary text-[2.2rem] xl:text-[2.8rem]" />
                <h3 className="text-start text-[1.5rem] xl:text-[2rem]">
                  AI-Powered Predictions
                </h3>
              </div>
              <p className="text-mainGray pt-6 max-w-[600px] text-base xl:text-lg text-start">
                Gain a competitive edge with our AI-powered market predictions.
                Our advanced algorithms analyze market trends and data to
                provide accurate forecasts, giving you valuable insights to stay
                ahead of the curve. With our predictive analytics, you can make
                informed decisions and seize profitable opportunities in the
                ever-changing landscape of financial markets.
              </p>
              <span className="flex items-center w-[220px] cursor-pointer gap-2 text-base xl:text-lg mt-8 xl:mt-12 transition-all hover:text-secondary hover:gap-2.5">
                To know better
                <LuArrowRight className="text-xl" />
              </span>
            </div>

            <div className="xl:mb-10 pt-[25%] xl:pt-[40%]">
              <div className="flex items-center gap-3 xl:gap-6">
                <LuGlobe className="text-secondary text-[2.2rem] xl:text-[2.8rem]" />
                <h3 className="text-start text-[1.5rem] xl:text-[2rem]">
                  Global Community
                </h3>
              </div>
              <p className="text-mainGray pt-6 max-w-[600px] text-base xl:text-lg text-start">
                Share insights, discover new opportunities, and grow together in
                this exciting financial landscape. Join our community to access
                valuable knowledge, network with like-minded individuals, and
                stay informed about the latest trends and developments.
              </p>
              <span className="flex items-center w-[220px] cursor-pointer gap-2 text-base xl:text-lg mt-8 xl:mt-12 transition-all hover:text-secondary hover:gap-2.5">
                Join us via discord
                <LuArrowRight className="text-xl" />
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center max-h-[90vh] sticky top-8 xl:top-14">
            <div className="flex items-center gap-2 rounded-full px-5 py-1.5 text-primary text-sm bg-gradient-to-tr from-darkGray to-background/90 border border-zinc-700 mb-6">
              <LuLineChart size={16} />
              Market update
            </div>
            <TableContainer
              component={Paper}
              className="rounded-md bg-transparent border border-zinc-700 w-full"
            >
              <Table aria-label="simple table">
                <TableHead className="bg-gradient-to-tr from-darkGray to-background/50">
                  <TableRow>
                    <TableCell
                      align="left"
                      className="text-primary text-sm xl:text-base border-zinc-700"
                    >
                      Name
                    </TableCell>
                    <TableCell
                      align="right"
                      className="text-primary text-sm xl:text-base border-zinc-700"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      align="right"
                      className="text-primary text-nowrap text-sm xl:text-base border-zinc-700"
                    >
                      24h change
                    </TableCell>
                    <TableCell
                      align="right"
                      className="text-primary text-sm xl:text-base border-zinc-700"
                    >
                      Market cap
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pageCoins?.map((coin, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        align="right"
                        component="th"
                        scope="row"
                        className="text-white text-sm xl:text-base border-zinc-700"
                      >
                        <div className="flex items-center gap-2 text-nowrap">
                          <img
                            src={coin.image}
                            alt={`${coin.name} image`}
                            className="max-w-6 xl:max-w-8"
                          />
                          {coin.name}
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        className="text-white text-sm xl:text-base border-zinc-700"
                      >
                        <div className="flex items-center justify-end gap-1">
                          <span>$</span>{" "}
                          <span>{formatPrice(coin.current_price)}</span>
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        className={`text-white text-sm xl:text-base border-zinc-700 ${
                          coin.price_change_percentage_24h > 0
                            ? "text-secondary"
                            : "text-[#fd5252]"
                        }`}
                      >
                        <div
                          className={`${
                            coin.price_change_percentage_24h > 0
                              ? "text-secondary"
                              : "text-[#fa5d5d]"
                          }`}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                      </TableCell>
                      <TableCell
                        align="right"
                        className="text-white text-sm xl:text-base border-zinc-700"
                      >
                        <div className="flex items-center justify-end gap-1">
                          <span>$</span>
                          <span>{formatPrice(coin.market_cap)}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className="flex justify-center mt-6">
              <ThemeProvider theme={colorTheme}>
                <Pagination
                  count={coinsData.length / 10}
                  shape="rounded"
                  color="primary"
                  onChange={changePage}
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

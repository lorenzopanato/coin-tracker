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
import { LuLineChart } from "react-icons/lu";

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
      <section className="flex flex-col items-center justify-start w-full bg-darkGray/20 px-10 mt-28 mb-96 py-20 text-center">
        <div className="flex gap-10 max-w-screen-2xl w-full h-[200vh]">
          <div className="flex-1">
            <h2></h2>
          </div>

          <div className="flex-1 flex flex-col items-center max-h-screen sticky top-20">
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

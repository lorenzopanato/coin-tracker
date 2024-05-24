import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { LuChevronDown } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";

export default function Faq() {
  return (
    <div className="flex flex-col items-center gap-12 sm:gap-20 max-w-screen-2xl w-full px-7 sm:px-10 lg:mt-16 py-20">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-gradient-to-tr from-darkGray to-background/90 border border-zinc-700">
          <TiStarFullOutline className="text-secondary" size={16} />
          FAQ
        </div>
        <h2 className="text-[1.5rem] sm:text-[1.9rem] xl:text-[2.2rem] mt-4 text-center font-medium">
          Frequently Asked Questions
        </h2>
        <p className="text-mainGray mt-2 text-sm sm:text-base xl:text-lg w-full max-w-[600px]">
          Frequently Asked Questions about how CoinTracker works - Answers to
          the most common questions
        </p>
      </div>

      <div className="w-full max-w-screen-lg bg-darkGray/20">
        <Accordion className="border-b border-zinc-700 bg-transparent text-primary px-2">
          <AccordionSummary
            sx={{
              "&> div.Mui-expanded": {
                margin: 0,
              },
              "&> div": {
                margin: 0,
              },
            }}
            expandIcon={<LuChevronDown className="text-primary text-2xl" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-primary py-2 sm:py-4"
          >
            <h2 className="text-sm sm:text-base xl:text-lg">
              What is CoinTracker, and how does it works?
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-mainGray text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              perferendis tempore deleniti adipisci quod ipsum perspiciatis
              officia cumque at! Nam atque inventore error officia voluptas qui
              ad magnam explicabo cupiditate?
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="border-b border-zinc-700 bg-transparent text-primary px-2">
          <AccordionSummary
            sx={{
              "&> div.Mui-expanded": {
                margin: 0,
              },
              "&> div": {
                margin: 0,
              },
              margin: "0 !important",
            }}
            expandIcon={<LuChevronDown className="text-primary text-2xl" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-primary py-2 sm:py-4"
          >
            <h2 className="text-sm sm:text-base xl:text-lg">
              I'm new to cryptocurrency. Can I use CoinTracker?
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-mainGray text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              perferendis tempore deleniti adipisci quod ipsum perspiciatis
              officia cumque at! Nam atque inventore error officia voluptas qui
              ad magnam explicabo cupiditate?
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="border-b border-zinc-700 bg-transparent text-primary px-2">
          <AccordionSummary
            sx={{
              "&> div.Mui-expanded": {
                margin: 0,
              },
              "&> div": {
                margin: 0,
              },
              margin: "0 !important",
            }}
            expandIcon={<LuChevronDown className="text-primary text-2xl" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-primary py-2 sm:py-4"
          >
            <h2 className="text-sm sm:text-base xl:text-lg">
              Is there a CoinTracker community I can join?
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-mainGray text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              perferendis tempore deleniti adipisci quod ipsum perspiciatis
              officia cumque at! Nam atque inventore error officia voluptas qui
              ad magnam explicabo cupiditate?
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

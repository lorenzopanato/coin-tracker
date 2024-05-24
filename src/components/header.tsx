"use client";

import Link from "next/link";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  let container = null;
  let drawer = null;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  if (typeof window !== "undefined") {
    container = window !== undefined ? () => window.document.body : undefined;

    drawer = (
      <Box onClick={handleDrawerToggle} sx={{ height: "100vh" }}>
        <div className="h-full bg-textLight dark:text-textLight dark:bg-slate-900 text-mainGray">
          <div className="py-5 px-7 flex items-center justify-between">
            <Link
              href="/"
              className="bg-gradient-to-tr from-primary to-mainGray text-transparent bg-clip-text transition-colors text-xl font-semibold"
            >
              cointracker.
            </Link>
            <LuX size={30} className="cursor-pointer" />
          </div>
          <ul className="text-lg flex flex-col items-start pl-7 pt-7 gap-4 font-medium w-full">
            <li className="relative flex justify-start group w-auto">
              <ScrollLink
                to="home"
                href="#home"
                className="hover:text-primary transition-all cursor-pointer"
                spy={true}
                smooth={true}
                duration={700}
                onClick={handleDrawerToggle}
              >
                Home
              </ScrollLink>
              <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
            </li>
            <li className="relative flex justify-start group w-auto">
              <ScrollLink
                to="coins-carousel"
                href="#coins-carousel"
                className="hover:text-primary transition-all cursor-pointer"
                spy={true}
                smooth={true}
                duration={700}
                onClick={handleDrawerToggle}
              >
                About us
              </ScrollLink>
              <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
            </li>
            <li className="relative flex justify-start group w-auto">
              <ScrollLink
                to="features"
                href="#features"
                className="hover:text-primary transition-all cursor-pointer"
                spy={true}
                smooth={true}
                duration={700}
                onClick={handleDrawerToggle}
              >
                Features
              </ScrollLink>
              <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
            </li>
            <li className="relative flex justify-start group w-auto">
              <ScrollLink
                to="testimonials"
                href="#testimonials"
                className="hover:text-primary transition-all cursor-pointer"
                spy={true}
                smooth={true}
                duration={700}
                onClick={handleDrawerToggle}
              >
                Testimonials
              </ScrollLink>
              <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
            </li>
            <li className="relative flex justify-start group w-auto">
              <ScrollLink
                to="faq"
                href="#faq"
                className="hover:text-primary transition-all cursor-pointer"
                spy={true}
                smooth={true}
                duration={700}
                onClick={handleDrawerToggle}
              >
                Faq
              </ScrollLink>
              <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </Box>
    );
  }

  return (
    <header className="flex justify-center text-mainGray font-medium shadow shadow-zinc-700 w-full">
      <nav className="flex justify-between items-center max-w-screen-2xl w-full py-5 px-7 sm:px-10">
        <Link
          href={"/"}
          className="bg-gradient-to-tr from-primary to-mainGray text-transparent bg-clip-text transition-colors text-lg lg:text-xl font-semibold"
        >
          cointracker.
        </Link>
        <ul className="text-mainGray hidden md:flex gap-6 items-center text-sm lg:text-base">
          <li className="relative group flex justify-start">
            <ScrollLink
              to="home"
              href="#home"
              className="hover:text-primary transition-all cursor-pointer"
              spy={true}
              smooth={true}
              duration={700}
            >
              Home
            </ScrollLink>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <ScrollLink
              to="coins-carousel"
              href="#coins-carousel"
              className="hover:text-primary transition-all cursor-pointer"
              spy={true}
              smooth={true}
              duration={700}
            >
              About us
            </ScrollLink>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <ScrollLink
              to="features"
              href="#features"
              className="hover:text-primary transition-all cursor-pointer"
              spy={true}
              smooth={true}
              duration={700}
            >
              Features
            </ScrollLink>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <ScrollLink
              to="testimonials"
              href="#testimonials"
              className="hover:text-primary transition-all cursor-pointer"
              spy={true}
              smooth={true}
              duration={700}
            >
              Testimonials
            </ScrollLink>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <ScrollLink
              to="faq"
              href="#faq"
              className="hover:text-primary transition-all cursor-pointer"
              spy={true}
              smooth={true}
              duration={700}
            >
              Faq
            </ScrollLink>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
        </ul>
        <button className="bg-primary hidden md:block shadow-inner text-sm lg:text-base text-black rounded-full font-semibold px-6 lg:px-10 py-2 transition-opacity hover:opacity-90">
          Contact
        </button>

        <LuMenu
          size={28}
          onClick={handleDrawerToggle}
          className="cursor-pointer block md:hidden"
        />
      </nav>

      <div>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              maxWidth: 400,
              backgroundColor: "#171717",
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </header>
  );
}

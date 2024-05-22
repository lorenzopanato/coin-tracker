import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 180s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        primary: "#ffffff",
        secondary: "#22d3ee",
        mainGray: "#cccccc",
        darkGray: "#27272a",
        background: "#171717",
        gradient: "#092733"
      },
    },
  },
  plugins: [nextui()],
};
export default config;

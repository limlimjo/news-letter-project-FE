import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "primary-50": "#F1FFEF",
        "primary-100": "#D4FECE",
        "primary-200": "#BFFEB7",
        "primary-500": "#74FD62",
        "primary-600": "#6AE659",
        "primary-700": "#52B446",
        "header": "rgba(28, 28, 28, 0.7)",
        "main-content": "linear-gradient(180deg,#000000 5%,#1C1C1C 100%)",
        "content": "rgba(241,255,239,0.05)"
      },
      screens: {
        xs: { max: "375px" },   // mobile
        md: "376px",            // tablet 이상
        xl: "961px",            // pc
      },
    },
  },
  plugins: [typography],
};

export default config;

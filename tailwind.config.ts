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
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [typography],
};

export default config;

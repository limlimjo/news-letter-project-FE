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
        "newsletter-light-purple": "#F3EAFF",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [typography],
};

export default config;

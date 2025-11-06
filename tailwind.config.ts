import type { Config } from "tailwindcss";

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
  plugins: [],
};

export default config;

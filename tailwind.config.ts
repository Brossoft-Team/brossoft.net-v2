import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F5F2",
        primarycolor: "#F7CB45",
        secondry:"#1F1F1F",
      },
    },
  },
  plugins: [],
};
export default config;

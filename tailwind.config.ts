import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F5F2",
        primaryColor: "#F7CB45",
        secondaryColor: "#1F1F1F",
      },
      screens: {
        sm: '567px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};

export default config;


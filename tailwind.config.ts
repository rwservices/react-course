import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          ...colors.red,
          DEFAULT:colors.teal[500],
          300:'green'
        },
        secondary: {
          ...colors.voilet,
          50:'#fb923c',
          100:'#4ade80',
          200:'green',
          300:'green'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

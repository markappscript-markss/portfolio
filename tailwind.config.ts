import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#D85A30", // coral, from the mockup — swap for your brand color
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        ocean: "#1f5eff",
        mist: "#eef4ff",
        cloud: "#f7f9fc",
        slate: "#5f6f89",
        line: "#e4e9f2",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(19, 37, 76, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

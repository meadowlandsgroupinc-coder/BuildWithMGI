import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#282828",
        "charcoal-light": "#333333",
        "charcoal-mid": "#3D3D3D",
        teal: {
          DEFAULT: "#005F7A",
          light: "#007A9E",
          pale: "#0099C2",
          muted: "#004D63",
        },
        warm: {
          DEFAULT: "#5E5C5A",
          light: "#7A7876",
          dark: "#3E3C3A",
        },
        offwhite: "#F5F4F2",
        snow: "#FAFAF9",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-opensans)", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.9s ease forwards",
        "slide-right": "slideRight 1s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;

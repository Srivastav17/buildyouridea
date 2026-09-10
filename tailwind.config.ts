import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090c",
          900: "#0d0f14",
          850: "#12151c",
          800: "#171b24",
          700: "#232733",
          600: "#343a49",
          500: "#4a5164",
          400: "#6b7286",
          300: "#9aa0b2",
          200: "#c4c8d4",
          100: "#e4e6ec",
        },
        accent: {
          DEFAULT: "#7c5cff",
          50: "#f2effe",
          100: "#e4ddfe",
          200: "#c9bbfd",
          300: "#ac96fb",
          400: "#9377fa",
          500: "#7c5cff",
          600: "#6644e6",
          700: "#5133b8",
          800: "#3c268a",
          900: "#281a5c",
        },
        signal: {
          teal: "#3fe0c5",
          amber: "#ffb545",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(8,9,12,1)), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,92,255,0.25), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

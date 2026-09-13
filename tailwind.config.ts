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
          950: "#0b0d10",
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
          DEFAULT: "#F5A623",
          50: "#fef8ec",
          100: "#fdedc9",
          200: "#fad98d",
          300: "#f7c358",
          400: "#f5a623",
          500: "#e8940f",
          600: "#c2760a",
          700: "#96590c",
          800: "#78480f",
          900: "#4a2c08",
        },
        signal: {
          teal: "#3fe0c5",
          amber: "#f5a623",
        },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(11,13,16,1)), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,166,35,0.14), transparent)",
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FFFFFF",
        "base-alt": "#F6F8FA",
        surface: "#FFFFFF",
        edge: "#E4E8EC",
        "edge-strong": "#D3D9DF",
        ink: "#16222E",
        muted: "#5B6672",
        "muted-2": "#8A94A0",
        accent: "#0E7C86",
        "accent-dark": "#0B5F67",
        "accent-soft": "rgba(14, 124, 134, 0.08)",
        "accent-soft-strong": "rgba(14, 124, 134, 0.14)",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,34,46,0.04), 0 8px 24px -12px rgba(22,34,46,0.08)",
        "card-hover": "0 4px 10px rgba(22,34,46,0.06), 0 16px 32px -12px rgba(14,124,134,0.16)",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(22,34,46,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,34,46,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "count-bar": {
          "0%": { transform: "scaleY(0.3)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "count-bar": "count-bar 1s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;

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
        void: "#07080B",
        surface: "#0E1015",
        "surface-2": "#151821",
        edge: "rgba(245, 243, 238, 0.08)",
        "edge-strong": "rgba(245, 243, 238, 0.14)",
        ink: "#F5F3EE",
        muted: "#9C9A93",
        "muted-2": "#6E6C67",
        brass: "#C9A66B",
        "brass-dim": "#8A7248",
        "brass-soft": "rgba(201, 166, 107, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(201,166,107,0.14), transparent 60%)",
        "grid-fine":
          "linear-gradient(rgba(245,243,238,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,238,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "drift-line": {
          "0%": { transform: "translateX(-8%)" },
          "100%": { transform: "translateX(8%)" },
        },
        "ticker-fade": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "drift-line": "drift-line 18s ease-in-out infinite alternate",
        "ticker-fade": "ticker-fade 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

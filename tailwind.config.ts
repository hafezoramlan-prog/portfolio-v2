import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14171C",
        panel: "#1B2027",
        paper: "#ECEAE4",
        paperdim: "#DEDBD2",
        safety: "#F2A900",
        route: "#3E6B5C",
        line: "rgba(20,23,28,0.15)",
        linelight: "rgba(236,234,228,0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};
export default config;

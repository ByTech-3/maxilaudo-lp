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
        azul: "#0a2b8f",
        "azul-escuro": "#071a5e",
        "azul-claro": "#f0f4ff",
        "azul-mid": "#a8b8e6",
        vermelho: "#fa0c13",
        "vermelho-hover": "#d20910",
        "verde-wpp": "#25d366",
        "verde-wpp-hover": "#1eb957",
        "verde-ok": "#16a34a",
        "cinza-texto": "#1d2330",
        "cinza-claro": "#5b6478",
        amarelo: "#fbbf24",
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "Poppins", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      keyframes: {
        scan: {
          "0%, 100%": { transform: "translateY(-36%)" },
          "50%": { transform: "translateY(36%)" },
        },
        pulse: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        scan: "scan 3.6s ease-in-out infinite",
        "pulse-wpp": "pulse 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

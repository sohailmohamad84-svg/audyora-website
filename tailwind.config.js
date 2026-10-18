/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about/**/*.html",
    "./services/**/*.html",
    "./work/**/*.html",
    "./contact/**/*.html",
    "./404.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        audyora: {
          bg: "#090A0F",
          surface: "#0E1017",
          card: "#12141F",
          cardHover: "#181B2A",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(99, 102, 241, 0.3)",
          text: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
          indigo: "#6366F1",
          cyan: "#38BDF8",
          violet: "#8B5CF6",
          darkNavy: "#06070B",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)",
        "radial-accent": "radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.12) 0%, transparent 50%)",
        "gradient-accent": "linear-gradient(135deg, #6366F1 0%, #38BDF8 100%)",
        "gradient-card": "linear-gradient(180deg, rgba(18, 20, 31, 0.8) 0%, rgba(14, 16, 23, 0.95) 100%)",
      },
      boxShadow: {
        "glow-indigo": "0 0 40px -10px rgba(99, 102, 241, 0.35)",
        "glow-cyan": "0 0 40px -10px rgba(56, 189, 248, 0.35)",
        "card": "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

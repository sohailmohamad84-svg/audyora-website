function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}-rgb), ${opacityValue})`;
    }
    return `var(${variableName})`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./404.html",
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        audyora: {
          bg: withOpacity("--audyora-bg"),
          surface: withOpacity("--audyora-surface"),
          card: withOpacity("--audyora-card"),
          cardHover: withOpacity("--audyora-card-hover"),
          border: "var(--audyora-border)",
          borderHover: "var(--audyora-border-hover)",
          text: withOpacity("--audyora-text"),
          muted: withOpacity("--audyora-muted"),
          subtle: withOpacity("--audyora-subtle"),
          indigo: withOpacity("--audyora-indigo"),
          cyan: withOpacity("--audyora-cyan"),
          violet: withOpacity("--audyora-violet"),
          darkNavy: withOpacity("--audyora-dark-navy"),
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

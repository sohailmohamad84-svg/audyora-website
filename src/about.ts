import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { siteConfig } from "./config/audyora.config";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // Mount Navigation & Footer
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  if (navRoot) navRoot.innerHTML = Navbar.render("/about/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  Navbar.initInteractions();

  // Render Core Values
  const valuesContainer = document.getElementById("about-values-grid");
  if (valuesContainer) {
    valuesContainer.innerHTML = siteConfig.values
      .map(
        (val, idx) => `
        <div class="bg-audyora-card rounded-3xl p-8 border border-audyora-border hover:border-audyora-cyan/30 transition-all duration-300 shadow-card stagger-item">
          <div class="w-10 h-10 rounded-xl bg-audyora-surface border border-audyora-border flex items-center justify-center text-audyora-cyan font-satoshi font-bold text-sm mb-6">
            0${idx + 1}
          </div>
          <h3 class="font-satoshi text-2xl font-bold text-white mb-2">
            ${val.title}
          </h3>
          <p class="font-inter text-xs text-audyora-cyan mb-4 font-medium">
            ${val.subtitle}
          </p>
          <p class="font-inter text-sm text-audyora-muted leading-relaxed">
            ${val.description}
          </p>
        </div>
      `
      )
      .join("");
  }

  // Initialize animations
  MotionEngine.init();
});

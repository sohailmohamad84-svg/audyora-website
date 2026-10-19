import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ServiceCard } from "./components/ServiceCard";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { siteConfig } from "./config/audyora.config";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // Mount Navigation & Footer
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  const waRoot = document.getElementById("whatsapp-root");

  if (navRoot) navRoot.innerHTML = Navbar.render("/services/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  if (waRoot) waRoot.innerHTML = WhatsAppWidget.render();
  Navbar.initInteractions();

  // Render All 8 Comprehensive Services
  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    servicesGrid.innerHTML = siteConfig.services
      .map((service) => ServiceCard.render(service))
      .join("");
  }

  // Initialize Motion Engine
  MotionEngine.init();

  const disciplinePills = document.querySelectorAll<HTMLAnchorElement>(".discipline-pill");

  const setActivePill = (hash: string) => {
    disciplinePills.forEach((pill) => {
      const isMatch = pill.getAttribute("href") === hash;
      if (isMatch) {
        pill.classList.add("bg-audyora-indigo", "text-white", "shadow-glow-indigo", "border-audyora-indigo");
        pill.classList.remove("bg-audyora-card", "text-slate-700", "dark:text-audyora-muted");
      } else {
        pill.classList.remove("bg-audyora-indigo", "text-white", "shadow-glow-indigo", "border-audyora-indigo");
        pill.classList.add("bg-audyora-card", "text-slate-700", "dark:text-audyora-muted");
      }
    });
  };

  const scrollToHash = (hash: string) => {
    const target = document.querySelector(hash) as HTMLElement | null;
    if (target) {
      MotionEngine.scrollTo(target, -190);
      setActivePill(hash);

      // Subtle pulse highlight on the target card
      target.classList.add("ring-2", "ring-audyora-cyan", "shadow-glow-indigo");
      setTimeout(() => {
        target.classList.remove("ring-2", "ring-audyora-cyan", "shadow-glow-indigo");
      }, 2000);
    }
  };

  // Wire up jump link clicks with offset to clear sticky bar + navbar
  disciplinePills.forEach((pill) => {
    pill.addEventListener("click", (e) => {
      const hash = pill.getAttribute("href");
      if (hash && hash.startsWith("#") && hash.length > 1) {
        e.preventDefault();
        history.pushState(null, "", hash);
        scrollToHash(hash);
      }
    });
  });

  // Smooth scroll to anchor if hash is present on initial load
  if (window.location.hash) {
    setTimeout(() => {
      scrollToHash(window.location.hash);
    }, 250);
  }
});

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

  // Smooth scroll to anchor if hash is present
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  }

  // Initialize Motion Engine
  MotionEngine.init();
});

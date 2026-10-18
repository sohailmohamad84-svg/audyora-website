import { CaseStudyCard } from "./components/CaseStudyCard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { siteConfig } from "./config/audyora.config";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // Mount Navigation & Footer
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  const waRoot = document.getElementById("whatsapp-root");

  if (navRoot) navRoot.innerHTML = Navbar.render("/work/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  if (waRoot) waRoot.innerHTML = WhatsAppWidget.render();
  Navbar.initInteractions();

  const showcaseGrid = document.getElementById("work-showcase-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  const renderItems = (category = "all") => {
    if (!showcaseGrid) return;
    const filtered =
      category === "all"
        ? siteConfig.caseStudies
        : siteConfig.caseStudies.filter((item) => item.category === category);

    showcaseGrid.innerHTML = filtered.map((item) => CaseStudyCard.render(item)).join("");
    MotionEngine.init();
  };

  // Filter button handlers
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("bg-audyora-indigo", "text-white");
        b.classList.add("bg-audyora-card", "text-audyora-muted");
      });
      btn.classList.add("bg-audyora-indigo", "text-white");
      btn.classList.remove("bg-audyora-card", "text-audyora-muted");

      const category = btn.getAttribute("data-filter") || "all";
      renderItems(category);
    });
  });

  renderItems("all");
  MotionEngine.init();
});

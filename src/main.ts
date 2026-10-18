import { CaseStudyCard } from "./components/CaseStudyCard";
import { Footer } from "./components/Footer";
import { HeroCanvas } from "./components/HeroCanvas";
import { Navbar } from "./components/Navbar";
import { ServiceCard } from "./components/ServiceCard";
import { siteConfig } from "./config/audyora.config";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mount Navigation & Footer
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  if (navRoot) navRoot.innerHTML = Navbar.render("/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  Navbar.initInteractions();

  // 2. Initialize Hero Canvas Particle Wave
  const canvasElement = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
  if (canvasElement) {
    new HeroCanvas(canvasElement);
  }

  // 3. Render Service Overview (First 4 on Home with link to full page)
  const servicesContainer = document.getElementById("home-services-grid");
  if (servicesContainer) {
    servicesContainer.innerHTML = siteConfig.services
      .slice(0, 4)
      .map((service) => ServiceCard.render(service))
      .join("");
  }

  // 4. Render Why Audyora (Values)
  const valuesContainer = document.getElementById("home-values-grid");
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

  // 5. Render Working Process
  const processContainer = document.getElementById("home-process-grid");
  if (processContainer) {
    processContainer.innerHTML = siteConfig.processStages
      .map(
        (stage) => `
        <div class="relative bg-audyora-card/60 backdrop-blur-md rounded-3xl p-8 border border-audyora-border hover:border-audyora-indigo/40 transition-all duration-300 stagger-item">
          <span class="font-satoshi text-4xl font-black text-audyora-border block mb-4">
            ${stage.number}
          </span>
          <h3 class="font-satoshi text-xl font-bold text-white mb-1">
            ${stage.name}
          </h3>
          <span class="font-inter text-xs text-audyora-cyan font-medium block mb-4">
            ${stage.headline}
          </span>
          <p class="font-inter text-xs text-audyora-muted leading-relaxed mb-6">
            ${stage.description}
          </p>
          <div class="border-t border-audyora-border/60 pt-4">
            <span class="block font-satoshi text-[10px] font-bold uppercase tracking-wider text-audyora-subtle mb-2">Key Outcomes</span>
            <ul class="space-y-1.5">
              ${stage.deliverables
                .map(
                  (d) => `
                <li class="font-inter text-xs text-white/80 flex items-center gap-2">
                  <span class="w-1 h-1 rounded-full bg-audyora-indigo"></span>
                  <span>${d}</span>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
      `
      )
      .join("");
  }

  // 6. Render Creative Showcase preview
  const showcaseContainer = document.getElementById("home-showcase-grid");
  if (showcaseContainer) {
    showcaseContainer.innerHTML = siteConfig.caseStudies
      .slice(0, 2)
      .map((cs) => CaseStudyCard.render(cs))
      .join("");
  }

  // 7. Initialize GSAP Motion & Lenis Scroll Engine
  MotionEngine.init();
});

import { CaseStudyCard } from "./components/CaseStudyCard";
import { Footer } from "./components/Footer";
import { HeroCanvas } from "./components/HeroCanvas";
import { Navbar } from "./components/Navbar";
import { PipelineCalculator } from "./components/PipelineCalculator";
import { ServiceCard } from "./components/ServiceCard";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { siteConfig } from "./config/audyora.config";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mount Navigation, Footer & WhatsApp
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  const waRoot = document.getElementById("whatsapp-root");

  if (navRoot) navRoot.innerHTML = Navbar.render("/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  if (waRoot) waRoot.innerHTML = WhatsAppWidget.render();

  Navbar.initInteractions();

  // 2. Initialize Hero Canvas Particle Wave
  const canvasElement = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
  if (canvasElement) {
    new HeroCanvas(canvasElement);
  }

  // 3. Mount Pipeline ROI Calculator
  const calcContainer = document.getElementById("pipeline-calc-root");
  if (calcContainer) {
    calcContainer.innerHTML = PipelineCalculator.render();
    PipelineCalculator.init();
  }

  // 4. Render Service Overview (Top 4 on Home with link to full services page)
  const servicesContainer = document.getElementById("home-services-grid");
  if (servicesContainer) {
    servicesContainer.innerHTML = siteConfig.services
      .slice(0, 4)
      .map((service) => ServiceCard.render(service))
      .join("");
  }

  // 5. Render Why Audyora (B2B Pillars)
  const valuesContainer = document.getElementById("home-values-grid");
  if (valuesContainer) {
    valuesContainer.innerHTML = siteConfig.values
      .map(
        (val, idx) => `
        <div class="bg-audyora-card rounded-3xl p-8 border border-audyora-border hover:border-audyora-cyan/30 transition-all duration-300 shadow-card stagger-item">
          <div class="w-10 h-10 rounded-xl bg-audyora-surface border border-audyora-border flex items-center justify-center text-audyora-cyan font-satoshi font-bold text-sm mb-6">
            0${idx + 1}
          </div>
          <h3 class="font-satoshi text-2xl font-bold text-slate-900 dark:text-white mb-2">
            ${val.title}
          </h3>
          <p class="font-inter text-xs text-audyora-cyan mb-4 font-semibold">
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

  // 6. Render 4-Stage Full-Funnel Pipeline Process
  const processContainer = document.getElementById("home-process-grid");
  if (processContainer) {
    processContainer.innerHTML = siteConfig.processStages
      .map(
        (stage) => `
        <div class="relative bg-audyora-card rounded-3xl p-8 border border-audyora-border hover:border-audyora-indigo/40 transition-all duration-300 shadow-card stagger-item">
          <span class="font-satoshi text-4xl font-black text-audyora-border block mb-4">
            ${stage.number}
          </span>
          <h3 class="font-satoshi text-xl font-bold text-slate-900 dark:text-white mb-1">
            ${stage.name}
          </h3>
          <span class="font-inter text-xs text-audyora-cyan font-semibold block mb-4">
            ${stage.headline}
          </span>
          <p class="font-inter text-xs text-audyora-muted leading-relaxed mb-6">
            ${stage.description}
          </p>
          <div class="border-t border-audyora-border pt-4">
            <span class="block font-satoshi text-xs font-bold uppercase tracking-wider text-audyora-muted mb-2">Deliverables</span>
            <ul class="space-y-1.5">
              ${stage.deliverables
                .map(
                  (d) => `
                <li class="font-inter text-xs text-slate-800 dark:text-white flex items-center gap-2">
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

  // 7. Render Creative Pipeline Showcase
  const showcaseContainer = document.getElementById("home-showcase-grid");
  if (showcaseContainer) {
    showcaseContainer.innerHTML = siteConfig.caseStudies
      .slice(0, 2)
      .map((cs) => CaseStudyCard.render(cs))
      .join("");
  }

  // 8. Initialize Motion Engine
  MotionEngine.init();
});

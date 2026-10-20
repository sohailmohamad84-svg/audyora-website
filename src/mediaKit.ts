import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { MotionEngine } from "./services/motion/MotionEngine";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  // Mount Navigation, Footer & WhatsApp Widget
  const navRoot = document.getElementById("nav-root");
  const footerRoot = document.getElementById("footer-root");
  const waRoot = document.getElementById("whatsapp-root");

  if (navRoot) navRoot.innerHTML = Navbar.render("/media-kit/");
  if (footerRoot) footerRoot.innerHTML = Footer.render();
  if (waRoot) waRoot.innerHTML = WhatsAppWidget.render();

  Navbar.initInteractions();

  // Print / PDF download trigger
  const printBtn = document.getElementById("print-media-kit-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Slide Deck Presentation Logic
  const mainContainer = document.getElementById("media-kit-main");
  const slides = document.querySelectorAll<HTMLElement>(".media-kit-slide");
  const totalSlides = slides.length;
  let currentSlide = 1;

  const prevBtn = document.getElementById("slide-prev-btn");
  const nextBtn = document.getElementById("slide-next-btn");
  const slideIndicator = document.getElementById("slide-indicator");
  const slideSelect = document.getElementById("slide-select") as HTMLSelectElement | null;
  const viewDeckBtn = document.getElementById("view-mode-deck");
  const viewDocBtn = document.getElementById("view-mode-doc");
  const deckControls = document.getElementById("deck-nav-controls");

  function goToSlide(slideNum: number, shouldScroll = true) {
    if (slideNum < 1) slideNum = 1;
    if (slideNum > totalSlides) slideNum = totalSlides;
    currentSlide = slideNum;

    slides.forEach((slide) => {
      const num = parseInt(slide.getAttribute("data-slide") || "1", 10);
      if (num === currentSlide) {
        slide.classList.add("active-slide");
      } else {
        slide.classList.remove("active-slide");
      }
    });

    if (slideIndicator) {
      const paddedCurrent = currentSlide.toString().padStart(2, "0");
      const paddedTotal = totalSlides.toString().padStart(2, "0");
      slideIndicator.textContent = `Slide ${paddedCurrent} / ${paddedTotal}`;
    }

    if (slideSelect) {
      slideSelect.value = currentSlide.toString();
    }

    // Smoothly scroll slide into view if needed, leaving ample clearance below sticky toolbar so rounded corners stay visible
    if (shouldScroll) {
      const activeElem = document.querySelector<HTMLElement>(`.media-kit-slide[data-slide="${currentSlide}"]`);
      if (activeElem && mainContainer?.classList.contains("deck-mode")) {
        const targetTop = Math.max(0, activeElem.offsetTop - 180);
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    }
  }

  // Next / Prev listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
  }

  // Dropdown selector listener
  if (slideSelect) {
    slideSelect.addEventListener("change", (e) => {
      const target = parseInt((e.target as HTMLSelectElement).value, 10);
      goToSlide(target);
    });
  }

  // View Mode: Deck Mode vs Document Mode
  if (viewDeckBtn && viewDocBtn && mainContainer) {
    viewDeckBtn.addEventListener("click", () => {
      mainContainer.classList.add("deck-mode");
      viewDeckBtn.classList.add("bg-audyora-indigo", "text-white");
      viewDeckBtn.classList.remove("text-slate-700", "dark:text-audyora-muted");
      viewDocBtn.classList.remove("bg-audyora-indigo", "text-white");
      viewDocBtn.classList.add("text-slate-700", "dark:text-audyora-muted");
      if (deckControls) deckControls.style.display = "flex";
      goToSlide(currentSlide);
    });

    viewDocBtn.addEventListener("click", () => {
      mainContainer.classList.remove("deck-mode");
      viewDocBtn.classList.add("bg-audyora-indigo", "text-white");
      viewDocBtn.classList.remove("text-slate-700", "dark:text-audyora-muted");
      viewDeckBtn.classList.remove("bg-audyora-indigo", "text-white");
      viewDeckBtn.classList.add("text-slate-700", "dark:text-audyora-muted");
      if (deckControls) deckControls.style.display = "none";
      // In document view, all slides are visible with margin
      slides.forEach((slide) => slide.classList.add("active-slide"));
    });
  }

  // Keyboard navigation for presentation deck mode
  window.addEventListener("keydown", (e) => {
    // Only navigate if deck mode is active and user isn't typing in an input
    if (!mainContainer?.classList.contains("deck-mode")) return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement).tagName)) return;

    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      goToSlide(currentSlide + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goToSlide(currentSlide - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      goToSlide(1);
    } else if (e.key === "End") {
      e.preventDefault();
      goToSlide(totalSlides);
    }
  });

  // Initialize first slide without forcing premature scroll
  goToSlide(1, false);

  MotionEngine.init();
});

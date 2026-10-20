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
        pill.classList.add("active", "bg-audyora-indigo", "text-white", "shadow-glow-indigo", "border-audyora-indigo");
        pill.classList.remove("bg-audyora-card", "text-slate-700", "dark:text-audyora-muted");
      } else {
        pill.classList.remove("active", "bg-audyora-indigo", "text-white", "shadow-glow-indigo", "border-audyora-indigo");
        pill.classList.add("bg-audyora-card", "text-slate-700", "dark:text-audyora-muted");
      }
    });
  };

  const scrollToHash = (hash: string) => {
    const target = document.querySelector(hash) as HTMLElement | null;
    if (target) {
      const stickyNav = document.getElementById("disciplines-nav");
      const stickyHeight = stickyNav ? stickyNav.offsetHeight : 60;
      const navbarHeight = 80;
      const buffer = 16;

      const elementTop = target.getBoundingClientRect().top + window.scrollY;
      const targetScrollY = Math.max(0, Math.round(elementTop - (navbarHeight + stickyHeight + buffer)));

      MotionEngine.scrollTo(targetScrollY);
      setActivePill(hash);

      // Subtle pulse highlight on the target card so the user immediately identifies the selected tile
      target.classList.add("ring-2", "ring-audyora-cyan", "shadow-glow-indigo");
      setTimeout(() => {
        target.classList.remove("ring-2", "ring-audyora-cyan", "shadow-glow-indigo");
      }, 2000);
    }
  };

  // Wire up jump link clicks with exact pixel position to dock right below sticky bar
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

  // ScrollSpy to keep discipline pills synchronized as the user scrolls naturally
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActivePill(`#${id}`);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    document.querySelectorAll("#services-grid > div").forEach((card) => {
      observer.observe(card);
    });
  }

  // Smooth scroll to anchor if hash is present on initial load
  if (window.location.hash) {
    setTimeout(() => {
      scrollToHash(window.location.hash);
    }, 300);
  }
});

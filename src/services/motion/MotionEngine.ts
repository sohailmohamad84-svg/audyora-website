import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export class MotionEngine {
  private static lenisInstance: Lenis | null = null;
  private static isInitialized = false;

  public static init(): void {
    if (typeof window === "undefined" || this.isInitialized) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      console.info("[Audyora Motion] Reduced motion preference detected. Skipping smooth scroll & heavy animations.");
      this.revealStaticContent();
      return;
    }

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis Smooth Scroll
    try {
      this.lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      this.lenisInstance.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        this.lenisInstance?.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      console.warn("[Audyora Motion] Lenis init failed, fallback to native scroll", e);
    }

    // Initialize Standard Scroll Reveals
    this.initScrollReveals();
    this.initMagneticButtons();

    this.isInitialized = true;
  }

  private static revealStaticContent(): void {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.remove("opacity-0", "translate-y-8");
      el.classList.add("opacity-100", "translate-y-0");
    });
  }

  private static initScrollReveals(): void {
    // Fade Up animations
    const revealElements = document.querySelectorAll("[data-reveal='fade-up']");
    revealElements.forEach((elem) => {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Staggered list / cards
    const staggerContainers = document.querySelectorAll("[data-reveal='stagger']");
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll(".stagger-item");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }

  private static initMagneticButtons(): void {
    const magneticButtons = document.querySelectorAll<HTMLElement>(".btn-magnetic");
    magneticButtons.forEach((btn) => {
      btn.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      });
    });
  }

  public static scrollTo(target: string | HTMLElement, offset: number = -190): void {
    if (this.lenisInstance) {
      this.lenisInstance.scrollTo(target, { offset, duration: 1.0 });
    } else {
      const el = typeof target === "string" ? (document.querySelector(target) as HTMLElement | null) : target;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }

  public static getLenis(): Lenis | null {
    return this.lenisInstance;
  }

  public static destroy(): void {
    this.lenisInstance?.destroy();
    this.lenisInstance = null;
    this.isInitialized = false;
  }
}

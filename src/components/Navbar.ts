import { ThemeManager } from "../services/theme/ThemeManager";
import { AudyoraLogo } from "./AudyoraLogo";

export class Navbar {
  public static render(activeRoute = "/"): string {
    const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about/" },
      { name: "Services", href: "/services/" },
      { name: "Industries", href: "/industries/" },
      { name: "Media Kit", href: "/media-kit/" },
      { name: "Work", href: "/work/" },
      { name: "Contact", href: "/contact/" },
    ];

    const desktopLinksHtml = navLinks
      .map((link) => {
        const isActive =
          activeRoute === link.href ||
          (link.href !== "/" && activeRoute.startsWith(link.href));
        return `
          <a href="${link.href}" 
             class="relative px-4 py-2 font-inter text-sm font-medium transition-colors duration-200 group ${
               isActive
                 ? "text-slate-900 dark:text-white"
                 : "text-audyora-muted hover:text-slate-900 dark:hover:text-white"
             }">
            ${link.name}
            ${
              isActive
                ? `<span class="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-audyora-indigo to-audyora-cyan rounded-full"></span>`
                : `<span class="absolute bottom-0 left-4 right-4 h-0.5 bg-slate-900/0 dark:bg-white/0 group-hover:bg-slate-900/40 dark:group-hover:bg-white/40 transition-all rounded-full scale-x-0 group-hover:scale-x-100"></span>`
            }
          </a>
        `;
      })
      .join("");

    const mobileLinksHtml = navLinks
      .map((link) => {
        const isActive =
          activeRoute === link.href ||
          (link.href !== "/" && activeRoute.startsWith(link.href));
        return `
          <a href="${link.href}" 
             class="flex items-center justify-between py-4 text-2xl font-satoshi font-bold border-b border-audyora-border/40 transition-colors ${
               isActive ? "text-audyora-cyan" : "text-slate-900 dark:text-white hover:text-audyora-cyan"
             }">
            <span>${link.name}</span>
            <span class="text-sm font-inter font-normal text-audyora-muted">→</span>
          </a>
        `;
      })
      .join("");

    return `
      <header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-audyora-bg/80 backdrop-blur-xl border-b border-audyora-border">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <!-- Logo -->
          <a href="/" class="focus:outline-none focus-visible:ring-2 focus-visible:ring-audyora-indigo rounded-lg" aria-label="Audyora Home">
            ${AudyoraLogo.renderFull()}
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-1 bg-audyora-card/60 px-3 py-1.5 rounded-full border border-audyora-border/80 shadow-inner" aria-label="Main Navigation">
            ${desktopLinksHtml}
          </nav>

          <!-- Desktop CTA & Theme Toggle -->
          <div class="hidden md:flex items-center gap-3">
            <button type="button" 
                    class="theme-toggle-btn w-9 h-9 rounded-full bg-audyora-surface border border-audyora-border hover:border-audyora-cyan/40 flex items-center justify-center transition-all cursor-pointer shadow-sm text-audyora-text"
                    title="Toggle Dark / Light Theme"
                    aria-label="Toggle theme">
            </button>
            <a href="/contact/" 
               class="btn-magnetic relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-satoshi text-sm font-bold text-white bg-gradient-to-r from-audyora-indigo to-audyora-violet hover:shadow-glow-indigo transition-all duration-300">
              <span>Let's Talk</span>
              <svg class="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>

          <!-- Mobile Controls (Theme Toggle + Hamburger) -->
          <div class="flex items-center gap-2 md:hidden">
            <button type="button" 
                    class="theme-toggle-btn w-9 h-9 rounded-lg bg-audyora-surface border border-audyora-border hover:border-audyora-cyan/40 flex items-center justify-center transition-all cursor-pointer text-audyora-text"
                    title="Toggle Dark / Light Theme"
                    aria-label="Toggle theme">
            </button>
            <button id="mobile-menu-btn" 
                    type="button"
                    class="flex flex-col justify-center items-center w-10 h-10 rounded-lg text-slate-900 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-audyora-indigo"
                    aria-expanded="false" 
                    aria-controls="mobile-menu" 
                    aria-label="Toggle navigation menu">
              <span class="w-6 h-0.5 bg-slate-900 dark:bg-white transition-transform duration-300 mb-1.5" id="hamburger-line-1"></span>
              <span class="w-6 h-0.5 bg-slate-900 dark:bg-white transition-opacity duration-300 mb-1.5" id="hamburger-line-2"></span>
              <span class="w-6 h-0.5 bg-slate-900 dark:bg-white transition-transform duration-300" id="hamburger-line-3"></span>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-menu" 
             class="fixed inset-x-0 top-20 bottom-0 bg-audyora-bg/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-in-out md:hidden z-40 border-t border-audyora-border"
             aria-hidden="true">
          <nav class="flex flex-col space-y-2">
            ${mobileLinksHtml}
          </nav>

          <div class="pt-8 pb-12 flex flex-col gap-4">
            <a href="/contact/" 
               class="w-full py-4 text-center rounded-full font-satoshi font-bold text-white bg-gradient-to-r from-audyora-indigo to-audyora-violet shadow-glow-indigo">
              Let's Talk
            </a>
            <div class="text-center font-inter text-xs text-audyora-subtle">
              Audyora Corporate Website • Advertising, Marketing & Media
            </div>
          </div>
        </div>
      </header>
    `;
  }

  public static initInteractions(): void {
    // Initialize ThemeManager & wire toggle buttons
    ThemeManager.init();
    const themeButtons = document.querySelectorAll<HTMLButtonElement>(".theme-toggle-btn");
    themeButtons.forEach((toggleBtn) => {
      toggleBtn.addEventListener("click", () => {
        ThemeManager.toggle();
      });
    });

    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const line1 = document.getElementById("hamburger-line-1");
    const line2 = document.getElementById("hamburger-line-2");
    const line3 = document.getElementById("hamburger-line-3");
    let isOpen = false;

    if (!btn || !menu) return;

    const toggleMenu = (open?: boolean) => {
      isOpen = open !== undefined ? open : !isOpen;
      btn.setAttribute("aria-expanded", String(isOpen));
      menu.setAttribute("aria-hidden", String(!isOpen));

      if (isOpen) {
        menu.classList.remove("translate-x-full");
        menu.classList.add("translate-x-0");
        document.body.style.overflow = "hidden";
        if (line1 && line2 && line3) {
          line1.style.transform = "translateY(8px) rotate(45deg)";
          line2.style.opacity = "0";
          line3.style.transform = "translateY(-8px) rotate(-45deg)";
        }
      } else {
        menu.classList.remove("translate-x-0");
        menu.classList.add("translate-x-full");
        document.body.style.overflow = "";
        if (line1 && line2 && line3) {
          line1.style.transform = "none";
          line2.style.opacity = "1";
          line3.style.transform = "none";
        }
      }
    };

    btn.addEventListener("click", () => toggleMenu());

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        toggleMenu(false);
      }
    });

    // Close when clicking mobile links
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });
  }
}

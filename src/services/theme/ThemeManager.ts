export type ThemeMode = "dark" | "light";

export class ThemeManager {
  private static readonly STORAGE_KEY = "audyora-theme";

  /**
   * Returns current active theme from document class or localStorage.
   */
  public static getTheme(): ThemeMode {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem(this.STORAGE_KEY) as ThemeMode | null;
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }

  /**
   * Sets the theme and updates the DOM, localStorage, and dispatches an event.
   */
  public static setTheme(theme: ThemeMode): void {
    if (typeof window === "undefined") return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateToggleButtons(theme);

    // Dispatch theme changed event for canvas and other dynamic components
    window.dispatchEvent(
      new CustomEvent("audyora-theme-change", { detail: { theme } })
    );
  }

  /**
   * Toggles theme between dark and light.
   */
  public static toggle(): ThemeMode {
    const current = this.getTheme();
    const next: ThemeMode = current === "dark" ? "light" : "dark";
    this.setTheme(next);
    return next;
  }

  /**
   * Initializes theme on page load.
   */
  public static init(): void {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem(this.STORAGE_KEY);
    let activeTheme: ThemeMode = "dark";

    if (saved === "light") {
      activeTheme = "light";
    } else if (saved === "dark") {
      activeTheme = "dark";
    } else {
      // Default to dark mode for signature brand aesthetic, or check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      activeTheme = prefersDark ? "dark" : "dark"; // Defaulting to signature dark
    }

    this.setTheme(activeTheme);
  }

  /**
   * Updates all theme toggle buttons across the DOM with appropriate icons and aria labels.
   */
  public static updateToggleButtons(theme: ThemeMode): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".theme-toggle-btn");
    buttons.forEach((btn) => {
      btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
      btn.title = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

      if (theme === "dark") {
        // Show Sun icon (to indicate clicking will switch to Light)
        btn.innerHTML = `
          <svg class="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        `;
      } else {
        // Show Moon icon (to indicate clicking will switch to Dark)
        btn.innerHTML = `
          <svg class="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        `;
      }
    });
  }
}

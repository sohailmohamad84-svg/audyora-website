/**
 * Audyora Brand Identity - Original Vector Wordmark and Monogram.
 * Represents audience resonance, creative energy, and international authority.
 */
export class AudyoraLogo {
  /**
   * Generates the Audyora emblem symbol (geometric stylized 'A' with radiant harmonic arcs).
   */
  public static renderSymbol(size = 36, className = "text-audyora-indigo"): string {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="${className} shrink-0" aria-hidden="true" focusable="false">
        <title>Audyora Emblem</title>
        <defs>
          <linearGradient id="audyora-sym-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6366F1" />
            <stop offset="50%" stop-color="#8B5CF6" />
            <stop offset="100%" stop-color="#38BDF8" />
          </linearGradient>
          <filter id="audyora-sym-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>
        <!-- Outer resonance arc -->
        <path d="M6 34C6 24.0589 14.0589 16 24 16C33.9411 16 42 24.0589 42 34" stroke="url(#audyora-sym-grad)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 4" opacity="0.6"/>
        <!-- Mid resonance arc -->
        <path d="M11 36C11 28.8203 16.8203 23 24 23C31.1797 23 37 28.8203 37 36" stroke="url(#audyora-sym-grad)" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
        <!-- Inner Stylized Geometric 'A' Apex -->
        <path d="M24 7L33 38H27L24 27L21 38H15L24 7Z" fill="url(#audyora-sym-grad)" filter="url(#audyora-sym-glow)"/>
        <!-- Harmonic bridge -->
        <circle cx="24" cy="24" r="2.5" fill="#FFFFFF"/>
      </svg>
    `;
  }

  /**
   * Generates the complete typography-led logo with wordmark and symbol.
   */
  public static renderFull(className = "", symbolSize = 36): string {
    return `
      <div class="inline-flex items-center gap-3.5 group select-none ${className}">
        ${this.renderSymbol(symbolSize)}
        <div class="flex flex-col">
          <span class="font-satoshi text-2xl font-black tracking-[-0.04em] text-white audyora-logo-wordmark flex items-center leading-none">
            AUDYORA
            <span class="w-1.5 h-1.5 rounded-full bg-audyora-cyan ml-1 inline-block animate-pulse"></span>
          </span>
          <span class="font-inter text-xs font-semibold uppercase tracking-[0.24em] text-audyora-muted mt-0.5">
            Creative & Media
          </span>
        </div>
      </div>
    `;
  }
}

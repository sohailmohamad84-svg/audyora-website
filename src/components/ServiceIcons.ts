/**
 * Original SVG Icon compositions for Audyora's 8 comprehensive service lines.
 * 100% original, copyright-safe, scalable vector illustrations.
 */
export class ServiceIcons {
  public static getIcon(serviceId: string, size = 32): string {
    switch (serviceId) {
      case "brand-strategy":
        // Compass & Geometric Foundation
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-indigo">
            <circle cx="16" cy="16" r="13" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 3" opacity="0.4"/>
            <circle cx="16" cy="16" r="7" stroke="currentColor" stroke-width="1.8"/>
            <path d="M16 5V9M16 23V27M5 16H9M23 16H27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <polygon points="16,11 18.5,16 16,21 13.5,16" fill="#38BDF8"/>
          </svg>
        `;

      case "advertising-creative":
        // Spark of Creative Energy / Radiant Prism
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-cyan">
            <path d="M16 4L19.5 12.5L28 16L19.5 19.5L16 28L12.5 19.5L4 16L12.5 12.5L16 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            <circle cx="16" cy="16" r="3" fill="#6366F1"/>
            <path d="M7 7L10 10M25 7L22 10M25 25L22 22M7 25L10 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
          </svg>
        `;

      case "digital-marketing":
        // Interconnected Nodes & Funnel Synthesis
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-violet">
            <rect x="5" y="6" width="22" height="15" rx="3" stroke="currentColor" stroke-width="1.8"/>
            <path d="M11 26H21M16 21V26" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M9 13L14 17L18 11L23 15" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="23" cy="15" r="2" fill="#38BDF8"/>
          </svg>
        `;

      case "social-media":
        // Resonant Network Orbit & Amplification
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-indigo">
            <circle cx="16" cy="16" r="5" stroke="currentColor" stroke-width="2"/>
            <circle cx="8" cy="9" r="3" fill="#38BDF8"/>
            <circle cx="24" cy="9" r="3" fill="#8B5CF6"/>
            <circle cx="16" cy="26" r="3" fill="#6366F1"/>
            <path d="M10.5 10.5L13.5 13.5M21.5 10.5L18.5 13.5M16 21V23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
          </svg>
        `;

      case "media-planning":
        // Precision Radar / Target Attention Matrix
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-cyan">
            <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
            <circle cx="16" cy="16" r="8" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
            <circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="1.8"/>
            <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
            <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
            <circle cx="22" cy="10" r="2" fill="#6366F1"/>
          </svg>
        `;

      case "content-production":
        // Film Shutter & Dynamic 3D Aperture
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-violet">
            <rect x="5" y="7" width="22" height="18" rx="3" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="16" cy="16" r="5" stroke="currentColor" stroke-width="1.5"/>
            <polygon points="15,14 19,16 15,18" fill="#38BDF8"/>
            <path d="M9 7L11 11M17 7L19 11M25 7L27 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
          </svg>
        `;

      case "performance-marketing":
        // Algorithmic Growth Curve & Metric Calibration
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-indigo">
            <path d="M6 26H26" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M6 22L13 15L18 20L26 8" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <polygon points="26,8 21,8 26,13" fill="#38BDF8"/>
            <circle cx="13" cy="15" r="2" fill="#6366F1"/>
            <circle cx="18" cy="20" r="2" fill="#8B5CF6"/>
          </svg>
        `;

      case "marketing-consulting":
        // Strategic Chess & Vision Architecture
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-cyan">
            <path d="M12 26H20M14 22H18M13 14C11 12 11 9 13 7C14.5 5.5 17.5 5.5 19 7C21 9 21 12 19 14L18 18H14L13 14Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            <line x1="16" y1="10" x2="16" y2="14" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/>
            <circle cx="16" cy="10" r="1.5" fill="#38BDF8"/>
          </svg>
        `;

      default:
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-audyora-indigo">
            <circle cx="16" cy="16" r="11" stroke="currentColor" stroke-width="1.8"/>
            <path d="M16 11V16L19 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        `;
    }
  }
}

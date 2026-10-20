/**
 * Original SVG Icon compositions for Audyora's 8 B2B Pipeline Architecture disciplines.
 * 100% original vector illustrations designed for B2B growth engines.
 */
export class ServiceIcons {
  public static getIcon(serviceId: string, size = 32): string {
    switch (serviceId) {
      case "b2b-lead-generation":
        // Outbound Pipeline & Funnel Conversion
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-500" aria-hidden="true" focusable="false">
            <path d="M4 6H28L19 17V26L13 22V17L4 6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <circle cx="23" cy="23" r="3" fill="#38BDF8"/>
          </svg>
        `;

      case "account-based-marketing":
        // Tier-1 Target Account Precision / Crosshairs
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-cyan-400" aria-hidden="true" focusable="false">
            <circle cx="16" cy="16" r="11" stroke="currentColor" stroke-width="1.8" stroke-dasharray="2 3"/>
            <circle cx="16" cy="16" r="6" stroke="currentColor" stroke-width="2"/>
            <circle cx="16" cy="16" r="2.5" fill="#6366F1"/>
            <path d="M16 2V6M16 26V30M2 16H6M26 16H30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;

      case "demand-generation":
        // Multi-Channel Pipeline Engine & Flywheel
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-indigo-400" aria-hidden="true" focusable="false">
            <path d="M16 4V10M16 22V28M4 16H10M22 16H28" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M8 8L12 12M20 20L24 24M24 8L20 12M12 20L8 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="16" cy="16" r="4.5" stroke="#38BDF8" stroke-width="2"/>
          </svg>
        `;

      case "bant-qualification":
        // Shield of Verified Criteria (Budget, Authority, Need, Timeline)
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-400" aria-hidden="true" focusable="false">
            <path d="M16 4L26 8V16C26 22 21 27 16 29C11 27 6 22 6 16V8L16 4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M11 16L14.5 19.5L21 13" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;

      case "content-syndication":
        // Whitepaper / Research Broadcast to Target Buyers
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-cyan-400" aria-hidden="true" focusable="false">
            <rect x="6" y="6" width="14" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M10 11H16M10 15H16M10 19H14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M23 10C25 12 26 14 26 16C26 18 25 20 23 22" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 13C21 14 21.5 15 21.5 16C21.5 17 21 18 20 19" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;

      case "email-infrastructure":
        // Inbound / Outbound Inbox & Deliverability DNS Hardening
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-indigo-400" aria-hidden="true" focusable="false">
            <rect x="4" y="7" width="24" height="18" rx="3" stroke="currentColor" stroke-width="2"/>
            <path d="M4 10L16 18L28 10" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round"/>
            <circle cx="23" cy="20" r="2.5" fill="#6366F1"/>
          </svg>
        `;

      case "data-cleansing":
        // Real-Time Contact Verification & Database Hygiene
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-500" aria-hidden="true" focusable="false">
            <ellipse cx="16" cy="8" rx="10" ry="4" stroke="currentColor" stroke-width="1.8"/>
            <path d="M6 8V16C6 18 10.5 20 16 20C21.5 20 26 18 26 16V8" stroke="currentColor" stroke-width="1.8"/>
            <path d="M6 16V24C6 26 10.5 28 16 28C21.5 28 26 26 26 24V16" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="20" cy="22" r="2" fill="#38BDF8"/>
          </svg>
        `;

      case "revenue-operations":
        // RevOps Architecture & Continuous A/B Growth
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-cyan-400" aria-hidden="true" focusable="false">
            <path d="M5 26H27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M6 22L12 15L17 19L26 8" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <polygon points="26,8 21,8 26,13" fill="#38BDF8"/>
            <circle cx="12" cy="15" r="2" fill="#6366F1"/>
            <circle cx="17" cy="19" r="2" fill="#6366F1"/>
          </svg>
        `;

      default:
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-500" aria-hidden="true" focusable="false">
            <circle cx="16" cy="16" r="11" stroke="currentColor" stroke-width="2"/>
            <path d="M16 11V16L19 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
    }
  }
}

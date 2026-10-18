import { siteConfig } from "../config/audyora.config";
import { AudyoraLogo } from "./AudyoraLogo";

export class Footer {
  public static render(): string {
    const servicesListHtml = siteConfig.services
      .map(
        (service) => `
          <li>
            <a href="/services/#${service.id}" 
               class="text-sm font-inter text-audyora-muted hover:text-audyora-cyan transition-colors duration-200">
              ${service.title}
            </a>
          </li>
        `
      )
      .join("");

    return `
      <footer class="bg-audyora-darkNavy border-t border-audyora-border pt-20 pb-12 text-white relative overflow-hidden">
        <!-- Ambient radial glow -->
        <div class="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-audyora-indigo/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-audyora-border/60">
            <!-- Brand Column -->
            <div class="lg:col-span-2 space-y-6">
              <a href="/" aria-label="Audyora Home">
                ${AudyoraLogo.renderFull("", 40)}
              </a>
              <p class="font-inter text-sm text-audyora-muted max-w-sm leading-relaxed">
                ${siteConfig.positioning}
              </p>
              <div class="space-y-2 pt-2">
                <div class="flex items-center gap-3 text-xs font-inter text-audyora-subtle">
                  <span class="w-2 h-2 rounded-full bg-audyora-cyan"></span>
                  <span>Direct Inquiries: <a href="mailto:${siteConfig.coordinates.emailPlaceholder}" class="text-audyora-muted hover:text-white underline underline-offset-4">${siteConfig.coordinates.emailPlaceholder}</a></span>
                </div>
                <div class="flex items-center gap-3 text-xs font-inter text-audyora-subtle">
                  <span class="w-2 h-2 rounded-full bg-audyora-indigo"></span>
                  <span>Executive Line: <span class="text-audyora-muted">${siteConfig.coordinates.phonePlaceholder}</span></span>
                </div>
              </div>
            </div>

            <!-- Navigation Links -->
            <div class="space-y-4">
              <h4 class="font-satoshi text-sm font-bold uppercase tracking-wider text-white">
                Platform & Solutions
              </h4>
              <ul class="space-y-2.5">
                <li><a href="/" class="text-sm font-inter text-audyora-muted hover:text-white transition-colors">Home</a></li>
                <li><a href="/about/" class="text-sm font-inter text-audyora-muted hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services/" class="text-sm font-inter text-audyora-muted hover:text-white transition-colors">B2B Services</a></li>
                <li><a href="/industries/" class="text-sm font-inter text-audyora-muted hover:text-white transition-colors">Industries Served</a></li>
                <li><a href="/methodology/" class="text-sm font-inter text-audyora-muted hover:text-white transition-colors">Pipeline Methodology</a></li>
                <li><a href="/media-kit/" class="text-sm font-inter text-audyora-cyan hover:text-white transition-colors font-semibold">Official Media Kit</a></li>
                <li><a href="/work/" class="text-sm font-inter text-audyora-muted hover:text-white transition-colors">Pipeline Showcase</a></li>
                <li><a href="/contact/" class="text-sm font-inter text-audyora-muted hover:text-white transition-colors">Book Pipeline Audit</a></li>
              </ul>
            </div>

            <!-- Capabilities (Services) -->
            <div class="lg:col-span-1 space-y-4">
              <h4 class="font-satoshi text-sm font-bold uppercase tracking-wider text-white">
                Core Disciplines
              </h4>
              <ul class="space-y-2.5">
                ${servicesListHtml}
              </ul>
            </div>

            <!-- Operations & Socials -->
            <div class="space-y-4">
              <h4 class="font-satoshi text-sm font-bold uppercase tracking-wider text-white">
                Global Network
              </h4>
              <p class="font-inter text-xs text-audyora-muted leading-relaxed">
                ${siteConfig.coordinates.addressPlaceholder}
              </p>
              <div class="pt-2">
                <span class="block font-inter text-xs text-audyora-subtle mb-3">Connect & Follow</span>
                <div class="flex items-center gap-3">
                  <a href="${siteConfig.socials.linkedin}" target="_blank" rel="noopener noreferrer" 
                     class="w-9 h-9 rounded-full bg-audyora-card border border-audyora-border flex items-center justify-center text-audyora-muted hover:text-audyora-cyan hover:border-audyora-cyan/50 transition-all duration-200" 
                     aria-label="LinkedIn">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="${siteConfig.socials.twitter}" target="_blank" rel="noopener noreferrer" 
                     class="w-9 h-9 rounded-full bg-audyora-card border border-audyora-border flex items-center justify-center text-audyora-muted hover:text-audyora-cyan hover:border-audyora-cyan/50 transition-all duration-200" 
                     aria-label="X / Twitter">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener noreferrer" 
                     class="w-9 h-9 rounded-full bg-audyora-card border border-audyora-border flex items-center justify-center text-audyora-muted hover:text-audyora-cyan hover:border-audyora-cyan/50 transition-all duration-200" 
                     aria-label="Instagram">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="${siteConfig.socials.behance}" target="_blank" rel="noopener noreferrer" 
                     class="w-9 h-9 rounded-full bg-audyora-card border border-audyora-border flex items-center justify-center text-audyora-muted hover:text-audyora-cyan hover:border-audyora-cyan/50 transition-all duration-200" 
                     aria-label="Behance">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.109 0-5.5-2.214-5.5-5.5 0-3.243 2.378-5.5 5.5-5.5 3.328 0 5.253 2.457 4.939 6.002h-7.939c.075 1.956 1.442 2.998 3.018 2.998 1.498 0 2.338-.797 2.698-1.5h2.01zm-4.726-6.5c-1.408 0-2.479.914-2.679 2.5h5.358c-.14-1.57-1.199-2.5-2.679-2.5zm-11.5 8.5h-7.5v-13h7.625c2.923 0 4.875 1.583 4.875 3.868 0 1.53-.787 2.766-2.062 3.322 1.637.585 2.562 2.067 2.562 3.81 0 2.602-2.129 4-5.5 4zm-4.5-8h4c1.378 0 2.5-.724 2.5-1.875 0-1.127-.92-1.625-2.25-1.625h-4.25v3.5zm0 5.5h4.25c1.558 0 2.75-.758 2.75-2.125 0-1.343-1.071-2.125-2.75-2.125h-4.25v4.25z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Copyright & Legal Notice -->
          <div class="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-inter text-audyora-subtle gap-4">
            <div>
              © 2026 ${siteConfig.companyName}. All rights reserved. Registered B2B Pipeline Architecture &amp; Growth Engine.
            </div>
            <div class="flex items-center gap-6">
              <a href="/privacy/" class="hover:text-white transition-colors">Privacy &amp; Data Governance</a>
              <a href="/terms/" class="hover:text-white transition-colors">Terms of Commercial Engagement</a>
              <a href="/sitemap.xml" class="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

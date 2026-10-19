import { ServiceItem } from "../types/index";
import { ServiceIcons } from "./ServiceIcons";

export class ServiceCard {
  public static render(service: ServiceItem): string {
    const deliverablesList = service.keyDeliverables
      .map(
        (item) => `
          <li class="flex items-center gap-2 text-xs font-inter text-audyora-muted">
            <span class="w-1.5 h-1.5 rounded-full bg-audyora-cyan shrink-0"></span>
            <span>${item}</span>
          </li>
        `
      )
      .join("");

    return `
      <div id="${service.id}" 
           class="service-card-anchor group relative scroll-mt-48 bg-audyora-card hover:bg-audyora-cardHover rounded-3xl p-8 border border-audyora-border hover:border-audyora-borderHover transition-all duration-300 shadow-card flex flex-col justify-between"
           data-reveal="fade-up">
        <!-- Top category tag & number -->
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="w-12 h-12 rounded-2xl bg-audyora-surface border border-audyora-border/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
              ${ServiceIcons.getIcon(service.id, 24)}
            </div>
            <span class="font-satoshi text-xs font-bold tracking-widest uppercase text-audyora-subtle">
              ${service.categoryNumber}
            </span>
          </div>

          <h3 class="font-satoshi text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-audyora-cyan transition-colors">
            ${service.title}
          </h3>
          <p class="font-inter text-xs font-medium text-audyora-cyan/90 mb-4">
            ${service.tagline}
          </p>

          <!-- Problem & Value -->
          <div class="space-y-3.5 mb-6">
            <div class="bg-audyora-surface/70 rounded-xl p-3.5 border border-audyora-border/40">
              <span class="block font-satoshi text-[11px] font-bold uppercase tracking-wider text-audyora-subtle mb-1">
                The Business Challenge
              </span>
              <p class="font-inter text-xs text-audyora-muted leading-relaxed">
                ${service.businessProblem}
              </p>
            </div>

            <div class="bg-audyora-surface/70 rounded-xl p-3.5 border border-audyora-border/40">
              <span class="block font-satoshi text-[11px] font-bold uppercase tracking-wider text-audyora-indigo mb-1">
                The Strategic Solution
              </span>
              <p class="font-inter text-xs text-slate-800 dark:text-white/90 leading-relaxed">
                ${service.clientValue}
              </p>
            </div>
          </div>

          <!-- Deliverables list -->
          <ul class="space-y-2 mb-8">
            ${deliverablesList}
          </ul>
        </div>

        <!-- Action CTA -->
        <div class="pt-4 border-t border-audyora-border/50 flex items-center justify-between">
          <a href="/contact/?service=${encodeURIComponent(service.title)}" 
             class="inline-flex items-center gap-2 font-satoshi text-xs font-bold text-slate-900 dark:text-white hover:text-audyora-cyan transition-colors">
            <span>${service.ctaText}</span>
            <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    `;
  }
}

import { CaseStudyItem } from "../types/index";

export class CaseStudyCard {
  public static render(item: CaseStudyItem): string {
    return `
      <article class="group relative bg-audyora-card rounded-3xl overflow-hidden border border-audyora-border hover:border-audyora-borderHover transition-all duration-300 shadow-card flex flex-col justify-between"
               data-reveal="fade-up">
        <!-- Abstract Visual Art Header (100% Original Geometric Composition) -->
        <div class="relative w-full aspect-[16/10] bg-audyora-surface overflow-hidden border-b border-audyora-border/60">
          <div class="absolute inset-0 bg-gradient-to-br ${item.accentGradient} opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
          
          <!-- Geometric Abstract Shapes -->
          <div class="absolute inset-0 flex items-center justify-center p-8 select-none pointer-events-none">
            <svg class="w-full h-full opacity-40 group-hover:opacity-70 transition-opacity duration-500" viewBox="0 0 200 120" fill="none">
              <circle cx="100" cy="60" r="45" stroke="#6366F1" stroke-width="1.5" stroke-dasharray="3 3"/>
              <circle cx="100" cy="60" r="28" stroke="#38BDF8" stroke-width="2"/>
              <line x1="20" y1="60" x2="180" y2="60" stroke="#8B5CF6" stroke-width="1" stroke-opacity="0.5"/>
              <rect x="75" y="35" width="50" height="50" rx="8" stroke="#FFFFFF" stroke-width="1.2" transform="rotate(45 100 60)"/>
            </svg>
          </div>

          <!-- Conceptual Flag Badge -->
          <div class="absolute top-4 left-4 z-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-satoshi font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-audyora-cyan border border-white/10">
              <span class="w-1.5 h-1.5 rounded-full bg-audyora-cyan animate-pulse"></span>
              Conceptual Showcase
            </span>
          </div>

          <div class="absolute bottom-4 right-4 z-10">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-inter font-medium bg-audyora-card/80 backdrop-blur-md text-audyora-muted border border-white/5">
              ${item.category}
            </span>
          </div>
        </div>

        <!-- Body content -->
        <div class="p-8 flex flex-col justify-between flex-grow">
          <div>
            <span class="block font-inter text-xs text-audyora-subtle mb-1">Scope: ${item.scope}</span>
            <h3 class="font-satoshi text-2xl font-bold text-white mb-3 group-hover:text-audyora-cyan transition-colors">
              ${item.title}
            </h3>

            <div class="space-y-3 mb-6">
              <div>
                <span class="font-satoshi text-[11px] font-bold uppercase tracking-wider text-audyora-subtle block mb-1">Conceptual Challenge</span>
                <p class="font-inter text-xs text-audyora-muted leading-relaxed">
                  ${item.challenge}
                </p>
              </div>

              <div>
                <span class="font-satoshi text-[11px] font-bold uppercase tracking-wider text-audyora-indigo block mb-1">Strategic Architecture</span>
                <p class="font-inter text-xs text-white/90 leading-relaxed">
                  ${item.conceptApproach}
                </p>
              </div>
            </div>
          </div>

          <!-- Purpose note -->
          <div class="pt-4 border-t border-audyora-border/50 flex items-center justify-between">
            <span class="font-inter text-[11px] text-audyora-subtle italic">
              Built as a demonstration of creative methodology.
            </span>
            <a href="/contact/?brief=${encodeURIComponent(item.title)}" 
               class="font-satoshi text-xs font-bold text-audyora-cyan hover:text-white transition-colors">
              Request Similar Brief →
            </a>
          </div>
        </div>
      </article>
    `;
  }
}

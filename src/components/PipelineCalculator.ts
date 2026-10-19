/**
 * Interactive B2B Pipeline ROI Calculator.
 * Empowers prospects to simulate outbound pipeline yield, meeting requirements,
 * and commercial ROI based on their Average Contract Value (ACV).
 */
export class PipelineCalculator {
  public static render(): string {
    return `
      <div class="relative bg-audyora-card/95 rounded-3xl p-8 sm:p-12 border border-audyora-border shadow-2xl backdrop-blur-xl">
        <div class="mb-8">
          <span class="inline-block px-3.5 py-1.5 rounded-full text-xs font-satoshi font-semibold tracking-wider uppercase text-audyora-cyan bg-audyora-cyan/10 border border-audyora-cyan/20 mb-3">
            Interactive Forecast
          </span>
          <h3 class="font-satoshi text-3xl font-extrabold text-slate-900 dark:text-white">
            B2B Pipeline & ROI Simulator
          </h3>
          <p class="font-inter text-sm text-audyora-muted mt-2">
            Calculate your estimated qualified meeting volume, pipeline addition, and expected revenue return.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Left Controls -->
          <div class="lg:col-span-7 space-y-6">
            <!-- ACV Slider -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <label for="calc-acv" class="font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted">
                  Average Deal Size (ACV)
                </label>
                <span id="display-acv" class="font-satoshi text-lg font-bold text-slate-900 dark:text-white">$25,000</span>
              </div>
              <input type="range" id="calc-acv" min="10000" max="150000" step="5000" value="25000"
                     class="w-full h-2 bg-audyora-surface rounded-lg appearance-none cursor-pointer accent-audyora-cyan" />
              <div class="flex justify-between text-[11px] font-inter text-audyora-subtle mt-1">
                <span>$10k</span>
                <span>$75k</span>
                <span>$150k+</span>
              </div>
            </div>

            <!-- Target Monthly Deals Slider -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <label for="calc-deals" class="font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted">
                  Desired Monthly Closed Deals
                </label>
                <span id="display-deals" class="font-satoshi text-lg font-bold text-slate-900 dark:text-white">3 Deals / mo</span>
              </div>
              <input type="range" id="calc-deals" min="1" max="15" step="1" value="3"
                     class="w-full h-2 bg-audyora-surface rounded-lg appearance-none cursor-pointer accent-audyora-indigo" />
              <div class="flex justify-between text-[11px] font-inter text-audyora-subtle mt-1">
                <span>1 Deal</span>
                <span>8 Deals</span>
                <span>15 Deals</span>
              </div>
            </div>

            <!-- Industry Selector -->
            <div>
              <label for="calc-industry" class="block font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted mb-2">
                Target Sector / Vertical
              </label>
              <select id="calc-industry" class="w-full px-4 py-3 rounded-xl bg-audyora-surface border border-audyora-border text-white text-sm focus:outline-none focus:border-audyora-cyan transition-colors">
                <option value="cybersecurity">Cybersecurity & SecOps (High Win Rate / High ACV)</option>
                <option value="saas" selected>B2B SaaS & Cloud Tech (Velocity Outbound)</option>
                <option value="enterprise-it">Enterprise IT & Cloud Infrastructure</option>
                <option value="fintech">FinTech & WealthTech Platforms</option>
              </select>
            </div>
          </div>

          <!-- Right Calculation Results Card -->
          <div class="lg:col-span-5 bg-audyora-surface rounded-2xl p-6 sm:p-8 border border-audyora-border/80 text-center relative overflow-hidden">
            <div class="absolute -right-12 -top-12 w-36 h-36 bg-audyora-cyan/10 rounded-full blur-2xl pointer-events-none"></div>

            <span class="block font-inter text-xs text-audyora-subtle uppercase tracking-wider mb-1">
              Projected Monthly Pipeline
            </span>
            <div id="result-pipeline" class="font-satoshi text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-audyora-indigo to-audyora-cyan mb-4">
              $375,000
            </div>

            <div class="grid grid-cols-2 gap-4 py-4 border-y border-audyora-border/50 mb-6 text-left">
              <div>
                <span class="block font-inter text-[11px] text-audyora-subtle">BANT Meetings Needed</span>
                <span id="result-meetings" class="font-satoshi text-xl font-bold text-slate-900 dark:text-white">15 Meetings</span>
              </div>
              <div>
                <span class="block font-inter text-[11px] text-audyora-subtle">Estimated ROI Yield</span>
                <span id="result-roi" class="font-satoshi text-xl font-bold text-emerald-400">4.8x ROI</span>
              </div>
            </div>

            <a id="calc-audit-cta" href="/contact/?brief=Custom%20Pipeline%20Model" 
               class="btn-magnetic w-full py-3.5 px-6 rounded-full font-satoshi font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-audyora-indigo to-audyora-violet hover:shadow-glow-indigo transition-all block text-center">
              Request Audit For This Scope →
            </a>
          </div>
        </div>
      </div>
    `;
  }

  public static init(): void {
    const acvInput = document.getElementById("calc-acv") as HTMLInputElement | null;
    const dealsInput = document.getElementById("calc-deals") as HTMLInputElement | null;
    const displayAcv = document.getElementById("display-acv");
    const displayDeals = document.getElementById("display-deals");
    const resultPipeline = document.getElementById("result-pipeline");
    const resultMeetings = document.getElementById("result-meetings");
    const resultRoi = document.getElementById("result-roi");
    const auditCta = document.getElementById("calc-audit-cta") as HTMLAnchorElement | null;

    if (!acvInput || !dealsInput) return;

    const updateCalculator = () => {
      const acv = parseInt(acvInput.value, 10) || 25000;
      const deals = parseInt(dealsInput.value, 10) || 3;

      // Realistic B2B benchmark conversion: Average closing rate from BANT meeting to closed won is ~20% (1 in 5)
      const meetingsNeeded = Math.ceil(deals * 5);
      // Pipeline value typically 5x closed revenue target
      const pipelineValue = deals * acv * 5;
      // ROI estimate
      const estimatedCost = Math.max(4500, meetingsNeeded * 350);
      const grossRevenue = deals * acv;
      const roi = Math.min(8.5, Math.max(2.8, grossRevenue / estimatedCost)).toFixed(1);

      if (displayAcv) displayAcv.textContent = `$${acv.toLocaleString()}`;
      if (displayDeals) displayDeals.textContent = `${deals} Deal${deals > 1 ? "s" : ""} / mo`;
      if (resultPipeline) resultPipeline.textContent = `$${pipelineValue.toLocaleString()}`;
      if (resultMeetings) resultMeetings.textContent = `${meetingsNeeded} Meetings / mo`;
      if (resultRoi) resultRoi.textContent = `${roi}x Est. ROI`;

      if (auditCta) {
        auditCta.href = `/contact/?brief=${encodeURIComponent(
          `Projected Pipeline: $${pipelineValue.toLocaleString()} with ${meetingsNeeded} monthly BANT meetings at $${acv.toLocaleString()} ACV`
        )}`;
      }
    };

    acvInput.addEventListener("input", updateCalculator);
    dealsInput.addEventListener("input", updateCalculator);
  }
}

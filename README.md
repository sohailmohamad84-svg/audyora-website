# Audyora Corporate Website

> **Full-Service Advertising, Marketing, Media & Creative Solutions**  
> **Production Domain:** [https://audyora.com/](https://audyora.com/)  
> **Visual Language:** Dark Premium (Cosmic Noir, Obsidian Navy, Electric Indigo, Royal Cyan)

---

## 1. Architectural Overview & SOLID Principles

The Audyora website was designed and constructed following **SOLID** software engineering principles, ensuring modularity, maintainability, high testability, and strict separation of presentation from business logic:

### Single Responsibility Principle (SRP)
- **`src/services/validation/EnquiryValidator.ts`**: Pure validation logic verifying email RFC syntax, field lengths, consent, and honeypot spam protection. Isolated from DOM and HTTP layers.
- **`src/services/enquiry/HonestEnquiryService.ts`**: Handles transport and backend interaction without UI entanglement.
- **`src/services/motion/MotionEngine.ts`**: Manages GSAP, ScrollTrigger, and Lenis lifecycle while respecting accessibility preferences (`prefers-reduced-motion`).
- **`src/services/seo/SEOManager.ts`**: Handles Schema.org JSON-LD generation and metadata consistency.
- **`src/components/*`**: Individual presentation components (`Navbar`, `Footer`, `HeroCanvas`, `ServiceCard`, `CaseStudyCard`, `ContactForm`, `AudyoraLogo`, `ServiceIcons`).

### Open/Closed Principle (OCP)
- **`src/config/audyora.config.ts`**: Single central source of truth for site-wide settings. All 8 core disciplines, conceptual showcases, brand values, working process stages, and configurable business placeholders (email, phone, address, operating hours, social media) are defined in structured data. The site can be extended with new services or portfolio items without modifying core component templates.

### Liskov Substitution Principle (LSP)
- **`src/services/enquiry/IEnquiryService.ts`**: Contract interface. Any alternate transport implementation (e.g. `FormspreeService`, `SupabaseService`, `WebhookService`) can replace `HonestEnquiryService` without modifying UI consumption code.

### Interface Segregation Principle (ISP)
- **`src/types/index.ts`**: Segregated, focused TypeScript interfaces (`ServiceItem`, `CaseStudyItem`, `ContactFormData`, `FormValidationResult`, `EnquirySubmissionResult`) preventing components from depending on unused fields.

### Dependency Inversion Principle (DIP)
- High-level modules (e.g. `ContactForm`) depend on the `IEnquiryService` abstraction rather than tightly coupling to a hard-coded vendor API or database endpoint.

---

## 2. Technology Stack

- **Architecture:** Multi-Page App (MPA) pre-rendered for search engine indexing and zero-JS accessibility.
- **Build Tool:** Vite 6 with TypeScript and PostCSS.
- **CSS Framework:** Tailwind CSS with custom Audyora Dark Premium theme tokens.
- **Typography:** Fontshare Satoshi (display/headings) + Google Fonts Inter (interface/body).
- **Motion & Smooth Scroll:** GSAP 3.12 (ScrollTrigger) and Lenis 1.1 smooth scrolling.
- **Testing:** Vitest automated test suite covering validation, configuration, and SEO schema generation.

---

## 3. Sitemap & Page Structure

1. **Home (`/`)**:
   - Glassmorphic responsive header with Audyora wordmark and emblem.
   - Hero section featuring headline *"Make Your Brand Impossible to Ignore."*, supporting copy, magnetic CTAs, and an original interactive HTML5 Canvas harmonic particle wave representing audience connectivity and creative resonance.
   - Core positioning statement.
   - Service overview grid previewing core disciplines.
   - Why Audyora value pillars.
   - 4-stage working process (Discover & Align → Strategize & Create → Execute & Amplify → Measure & Scale).
   - Curated creative showcase preview.
   - Mission & Vision narrative cards.
   - Final conversion banner and comprehensive footer.
2. **About (`/about/`)**:
   - Company introduction, purpose, positioning, mission, vision, brand values, working philosophy, and client partnership ethos.
3. **Services (`/services/`)**:
   - Comprehensive presentation of all 8 core disciplines:
     1. Brand Strategy & Identity
     2. Advertising & Creative Campaigns
     3. Digital Marketing
     4. Social Media Marketing & Management
     5. Media Planning & Buying
     6. Content Creation & Production
     7. Performance Marketing & Campaign Optimisation
     8. Marketing Strategy & Consulting
   - Structured breakdown of business challenges, strategic solutions, key deliverables, handcrafted vector icons, and contextual CTAs.
4. **Work / Creative Showcase (`/work/`)**:
   - Illustrative conceptual projects clearly marked as conceptual work without fabricated client claims or inflated metrics.
   - Interactive category filter (All, Brand Strategy, Advertising, Digital Experience, Media & Scale).
5. **Contact (`/contact/`)**:
   - Full briefing form with name, work email, company, service selection, scope, consent, and honeypot spam protection.
   - Reactive client-side validation.
   - Honest submission dialog (explains configuration status with zero false success claims).
   - Configurable business coordinates.
6. **404 Page (`/404.html`)**:
   - Custom dark premium error page with return navigation.
7. **SEO Assets**:
   - `/robots.txt` and `/sitemap.xml` referencing `https://audyora.com/`.

---

## 4. Local Development & Testing

```bash
# Install dependencies
npm install

# Run automated tests
npm test

# Start local development server (http://localhost:3000)
npm run dev

# Run type check and build production distribution
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Contact Form Backend Configuration

The contact form uses the `HonestEnquiryService`. By default, it operates in demonstration / pre-deployment mode: it validates all inputs and honestly informs the user that the form is ready for a production API endpoint.

To connect live email routing:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set `VITE_CONTACT_API_URL` to your preferred endpoint (e.g., Formspree, Resend, Netlify Forms, or internal API):
   ```env
   VITE_CONTACT_API_URL=https://formspree.io/f/your_form_id
   ```
3. In production (Vercel/Netlify), add `VITE_CONTACT_API_URL` under Environment Variables.

---

## 6. Production Hosting & DNS Setup

### Recommended Platforms: Vercel or Netlify
Both platforms provide zero-configuration Git deployments, edge caching, and automated SSL/TLS certificates.

#### Deploying on Vercel:
1. Connect repository `sohailmohamad84-svg/audyora-website`.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Add custom domain: `audyora.com` and `www.audyora.com`.

#### GoDaddy DNS Configuration for `audyora.com`:
- **A Record**: Point `@` to `76.76.21.21` (Vercel Edge IP)
- **CNAME Record**: Point `www` to `cname.vercel-dns.com`
- Verify existing records (MX, TXT) remain intact.

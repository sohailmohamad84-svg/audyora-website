import { SiteConfig } from "../types/index";

export const siteConfig: SiteConfig = {
  companyName: "Audyora",
  tagline: "Make Your Brand Impossible to Ignore.",
  positioning:
    "Strategy, creativity and media solutions that help ambitious brands connect with the right audiences and create meaningful impact.",
  description:
    "Audyora is a full-service advertising, marketing, media, and creative solutions company. We unite brand strategy, campaign creativity, and media engineering to build resonant, market-leading brands.",
  productionDomain: "https://audyora.com/",
  canonicalUrl: "https://audyora.com/",

  // Central configurable business placeholders (no fabricated real numbers or addresses)
  coordinates: {
    emailPlaceholder: "contact@audyora.com",
    phonePlaceholder: "+1 (800) 555-0190",
    addressPlaceholder: "Global Creative Hub & Strategic Operations (Configurable Address)",
    operatingHours: "Monday – Friday: 09:00 – 18:00 (EST / GMT)",
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/audyora-placeholder",
    twitter: "https://x.com/audyora_placeholder",
    instagram: "https://www.instagram.com/audyora.placeholder",
    behance: "https://www.behance.net/audyora-placeholder",
  },

  // The 8 comprehensive service categories required by specification
  services: [
    {
      id: "brand-strategy",
      categoryNumber: "01",
      title: "Brand Strategy & Identity",
      tagline: "Define who you are and why it matters.",
      businessProblem:
        "Brands often struggle with diluted positioning, commoditised messaging, and visual incoherence that fails to resonate in saturated markets.",
      clientValue:
        "We construct distinctive market positioning, core narrative frameworks, and enduring visual systems that command immediate recognition and competitive authority.",
      keyDeliverables: [
        "Market & Competitor Positioning",
        "Brand Architecture & Core Narrative",
        "Visual Identity Systems & Design Tokens",
        "Brand Guidelines & Verbal Identity",
      ],
      iconSvg: "brand-strategy",
      ctaText: "Shape Your Identity",
    },
    {
      id: "advertising-creative",
      categoryNumber: "02",
      title: "Advertising & Creative Campaigns",
      tagline: "Ideas with cultural velocity and commercial weight.",
      businessProblem:
        "Modern audiences filter out mundane advertising. Generic campaigns burn budget without provoking memory, emotional engagement, or intent.",
      clientValue:
        "We engineer integrated multi-channel creative concepts that stop thumbs, spark conversation, and translate creative audacity into verified consumer recall.",
      keyDeliverables: [
        "Integrated Campaign Concepts",
        "Art Direction & Creative Copywriting",
        "Cross-Platform Campaign Rollouts",
        "Multi-Format Creative Production",
      ],
      iconSvg: "advertising-creative",
      ctaText: "Ignite a Campaign",
    },
    {
      id: "digital-marketing",
      categoryNumber: "03",
      title: "Digital Marketing",
      tagline: "Full-funnel digital dominance designed for modern consumers.",
      businessProblem:
        "Siloed digital efforts produce fragmented customer journeys and disjointed touchpoints that leak potential buyers before conversion.",
      clientValue:
        "We synchronize search, organic discovery, paid touchpoints, and conversion design into an orchestrated ecosystem that reliably captures and nurtures intent.",
      keyDeliverables: [
        "Full-Funnel Acquisition Architecture",
        "Search Engine Optimization (SEO)",
        "Conversion Rate Optimization (CRO)",
        "Omnichannel User Journey Orchestration",
      ],
      iconSvg: "digital-marketing",
      ctaText: "Scale Digital Growth",
    },
    {
      id: "social-media",
      categoryNumber: "04",
      title: "Social Media Marketing & Management",
      tagline: "Build genuine community around your commercial purpose.",
      businessProblem:
        "Shallow vanity metrics on social platforms rarely translate into long-term brand equity, customer loyalty, or attributable business value.",
      clientValue:
        "We develop community-driven content rhythms, creator collaborations, and proactive brand voice management that transform casual scrollers into loyal brand advocates.",
      keyDeliverables: [
        "Social Content Strategy & Voice",
        "Community Growth & Moderation",
        "Influencer & Creator Partnerships",
        "Social Listening & Trend Capitalisation",
      ],
      iconSvg: "social-media",
      ctaText: "Command Social Channels",
    },
    {
      id: "media-planning",
      categoryNumber: "05",
      title: "Media Planning & Buying",
      tagline: "High-impact placements where attention actually lives.",
      businessProblem:
        "Opaque ad networks and uncalibrated media buys lead to massive budget waste, ad fraud vulnerability, and irrelevant audience impressions.",
      clientValue:
        "We leverage data-informed audience mapping, transparent programmatic bidding, and direct publisher relationships to guarantee high-value placement efficiency.",
      keyDeliverables: [
        "Target Audience Persona Mapping",
        "Programmatic & Direct Media Buying",
        "Cross-Channel Media Scheduling",
        "Transparent Budget Allocation & Auditing",
      ],
      iconSvg: "media-planning",
      ctaText: "Optimize Media Spend",
    },
    {
      id: "content-production",
      categoryNumber: "06",
      title: "Content Creation & Production",
      tagline: "Cinema-grade visual storytelling engineered for speed.",
      businessProblem:
        "High-velocity content requirements often force brands to choose between compromising on production craft or missing topical cultural moments.",
      clientValue:
        "Our agile production framework delivers premium film, motion design, 3D conceptual assets, and editorial copy engineered for modern digital distribution.",
      keyDeliverables: [
        "Commercial Video & Motion Design",
        "Editorial & Long-Form Storytelling",
        "3D Visualisation & Abstract Compositions",
        "Agile Content Studio Workflows",
      ],
      iconSvg: "content-production",
      ctaText: "Produce World-Class Content",
    },
    {
      id: "performance-marketing",
      categoryNumber: "07",
      title: "Performance Marketing & Campaign Optimisation",
      tagline: "Rigorous mathematical discipline behind creative impact.",
      businessProblem:
        "Rising customer acquisition costs (CAC) and inaccurate attribution models erode profit margins and leave executives guessing about ROI.",
      clientValue:
        "We implement granular event tracking, creative split-testing matrices, and algorithmic bidding strategies that systematically push CAC down and lifetime value up.",
      keyDeliverables: [
        "Attribution Modeling & Analytics",
        "High-Velocity Creative A/B Testing",
        "Paid Social & Paid Search Optimization",
        "Unit Economics & Margin Preservation",
      ],
      iconSvg: "performance-marketing",
      ctaText: "Accelerate Performance",
    },
    {
      id: "marketing-consulting",
      categoryNumber: "08",
      title: "Marketing Strategy & Consulting",
      tagline: "Executive clarity for complex commercial horizons.",
      businessProblem:
        "Rapid market shifts, emerging technologies, and unclear internal team structures leave leadership without a unified go-to-market direction.",
      clientValue:
        "We provide board-level advisory, commercial marketing audits, and strategic roadmaps that align internal capability with scalable revenue opportunities.",
      keyDeliverables: [
        "Go-To-Market (GTM) Strategy",
        "Marketing Operations & Stack Audits",
        "Fractional Executive Advisory",
        "Growth Modeling & Scenario Planning",
      ],
      iconSvg: "marketing-consulting",
      ctaText: "Consult With Strategists",
    },
  ],

  // Conceptual showcases clearly designated as illustrative concept explorations
  caseStudies: [
    {
      id: "aurora-automotive",
      title: "Project Lumina: Autonomous Transit Rebrand",
      category: "Brand Strategy",
      scope: "Brand Architecture, Dynamic Identity, GTM Narrative",
      challenge:
        "An emerging smart electric mobility provider required an identity that felt fundamentally human rather than cold and utilitarian.",
      conceptApproach:
        "Developed a kinetic brand system inspired by harmonic light frequencies, pairing a bold geometric wordmark with responsive typographic motion.",
      intendedOutcome:
        "Demonstrates how distinctive typography and restrained color discipline establish international premium credibility.",
      accentGradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      isConceptual: true,
    },
    {
      id: "strata-fintech",
      title: "Vortex: Pan-European Wealth Narrative",
      category: "Advertising",
      scope: "Integrated Advertising, Narrative Copy, Hero Film Concepts",
      challenge:
        "Next-generation wealth platforms face pervasive skepticism and visual fatigue from repetitive corporate blue interfaces.",
      conceptApproach:
        "Structured an evocative dark-canvas advertising concept centered on 'Silent Power', contrasting deep obsidian tones with electric emerald accents.",
      intendedOutcome:
        "Illustrates full-funnel creative execution capable of commanding high-net-worth investor mindshare.",
      accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      isConceptual: true,
    },
    {
      id: "solis-sustainable",
      title: "Aethel: Circular Material Innovations",
      category: "Digital Experience",
      scope: "Interactive Digital Experience, Content Engine, 3D Visuals",
      challenge:
        "Complex sustainable bio-materials needed an immersive digital platform to communicate technical scientific specifications without sacrificing elegance.",
      conceptApproach:
        "Engineered an interactive 3D particle landscape that responds dynamically to user scroll gestures, contextualizing material lifecycles seamlessly.",
      intendedOutcome:
        "Exemplifies how spatial interactivity and performance engineering drive deep stakeholder immersion.",
      accentGradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
      isConceptual: true,
    },
    {
      id: "nexus-enterprise",
      title: "Chronos: Cross-Border Media Distribution",
      category: "Media & Scale",
      scope: "Media Modeling, Multi-Market Attribution, Programmatic Framework",
      challenge:
        "Global enterprise software required an efficient media distribution architecture across 14 European and North American markets.",
      conceptApproach:
        "Architected an audience-frequency capped programmatic framework that synchronizes out-of-home visibility with targeted digital sequencing.",
      intendedOutcome:
        "Highlights the synthesis of creative messaging with rigorous quantitative media scheduling.",
      accentGradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
      isConceptual: true,
    },
  ],

  // Core brand values
  values: [
    {
      title: "Strategic Rigour",
      subtitle: "Creativity anchored in commercial reality",
      description:
        "We reject superficial design that fails to serve business objectives. Every creative gesture is grounded in audience insight and measurable commercial intent.",
      iconName: "strategy",
    },
    {
      title: "Audience Empathy",
      subtitle: "Connecting where genuine attention resides",
      description:
        "Brands are built in the minds of customers. We obsess over the real motivations, pain points, and cultural context of the people your business serves.",
      iconName: "empathy",
    },
    {
      title: "Craft & Restraint",
      subtitle: "The discipline of international premium aesthetics",
      description:
        "True luxury and authority stem from what is eliminated. We practice typographic precision, generous whitespace, and purposeful motion.",
      iconName: "craft",
    },
    {
      title: "Uncompromising Integrity",
      subtitle: "Honest metrics, transparent partnerships",
      description:
        "We do not inflate vanity metrics or obscure campaign realities. We operate as an authentic, high-trust extension of our clients' leadership teams.",
      iconName: "integrity",
    },
  ],

  // Reusable 4-stage process
  processStages: [
    {
      number: "01",
      name: "Discovery & Alignment",
      headline: "Deconstructing the problem space",
      description:
        "We immerse ourselves in your business economics, customer archetypes, competitive friction, and commercial ambitions to pinpoint where value is created.",
      deliverables: ["Commercial Context Audit", "Audience Persona Framework", "Strategic Opportunity Brief"],
    },
    {
      number: "02",
      name: "Strategy & Creative Architecture",
      headline: "Designing the blueprint for resonance",
      description:
        "We translate discovery into a sharp strategic platform, defining the core narrative, visual language, and integrated campaign conceptual vectors.",
      deliverables: ["Brand & Creative Platform", "Visual & Verbal System", "Channel Execution Matrix"],
    },
    {
      number: "03",
      name: "Execution & Amplification",
      headline: "Bringing ideas to market with precision",
      description:
        "Our cross-functional teams produce cinema-grade assets, configure media distribution pipelines, and launch integrated multi-channel touchpoints.",
      deliverables: ["Asset Production Suite", "Targeted Media Deployment", "Conversion Infrastructure"],
    },
    {
      number: "04",
      name: "Measurement & Scaled Evolution",
      headline: "Refining impact through empirical data",
      description:
        "We monitor attribution signals, perform multivariate creative optimization, and iterate based on real commercial conversion performance.",
      deliverables: ["Transparent Reporting Dashboard", "Creative Iteration Cycle", "Long-Term Growth Roadmap"],
    },
  ],
};

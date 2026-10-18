import { SiteConfig } from "../types/index";

export const siteConfig: SiteConfig = {
  companyName: "Audyora",
  tagline: "Engineer Pipeline. Accelerate Revenue.",
  positioning:
    "We don't just generate leads. We build predictable, scalable B2B revenue engines for the world's most ambitious IT, Cybersecurity, and SaaS companies across North America and Europe.",
  description:
    "Audyora is a specialized B2B pipeline architecture and growth agency. We engineer custom outbound infrastructure, ABM campaigns, BANT-qualified prospect meetings, and high-deliverability email systems.",
  productionDomain: "https://homdo.services/",
  canonicalUrl: "https://homdo.services/",

  coordinates: {
    emailPlaceholder: "pipeline@audyora.com",
    phonePlaceholder: "+1 (888) 492-0198",
    whatsappPlaceholder: "+18884920198",
    addressPlaceholder: "Enterprise B2B Pipeline Operations (Global Distributed Delivery)",
    operatingHours: "Monday – Friday: 08:00 – 19:00 (EST / GMT / CET)",
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/audyora-b2b",
    twitter: "https://x.com/audyora_growth",
    instagram: "https://www.instagram.com/audyora.b2b",
    behance: "https://www.behance.net/audyora",
  },

  // 8 Core B2B Growth & Pipeline Architecture Disciplines
  services: [
    {
      id: "b2b-lead-generation",
      categoryNumber: "01",
      title: "B2B Lead Generation",
      tagline: "Turn cold markets into active, qualified sales opportunities.",
      businessProblem:
        "Sales teams spend 65%+ of their time prospecting instead of closing, burning expensive quota hours on unqualified or unreachable contacts.",
      clientValue:
        "We deploy hyper-targeted multi-touch outbound campaigns that identify, engage, and deliver Sales Qualified Leads (SQLs) directly onto your account executives' calendars.",
      keyDeliverables: [
        "TAM & Account Mapping",
        "Multi-Touch Outbound Cadences (Email + Phone + Social)",
        "Verified C-Level & VP-Level Decision Makers",
        "Guaranteed Meeting Attendance Protocols",
      ],
      iconSvg: "b2b-lead-generation",
      ctaText: "Scale Outbound Pipeline",
    },
    {
      id: "account-based-marketing",
      categoryNumber: "02",
      title: "Account-Based Marketing (ABM)",
      tagline: "Precision multi-stakeholder penetration for Tier-1 enterprise accounts.",
      businessProblem:
        "Enterprise deals require 6 to 10 decision-makers. Generic spray-and-pray marketing fails to engage complex enterprise buying committees.",
      clientValue:
        "We orchestrate 1:1 and 1:few bespoke ABM campaigns surrounding key enterprise accounts with tailored messaging, personalized assets, and multi-channel coverage.",
      keyDeliverables: [
        "Tier-1 Account Selection & Intent Profiling",
        "Buying Committee Mapping (Economic, Technical, User Buyers)",
        "Bespoke Hyper-Personalized Collateral",
        "Account-Level Engagement Tracking",
      ],
      iconSvg: "account-based-marketing",
      ctaText: "Launch ABM Motion",
    },
    {
      id: "demand-generation",
      categoryNumber: "03",
      title: "Demand Generation",
      tagline: "Build sustainable inbound and outbound pipeline gravity.",
      businessProblem:
        "Relying solely on sporadic inbound leads or ad-hoc cold calling creates volatile, unpredictable quarterly revenue swings.",
      clientValue:
        "We engineer integrated demand engines that pair high-intent outbound prospecting with high-value thought leadership syndication to build consistent monthly pipeline volume.",
      keyDeliverables: [
        "Full-Funnel Demand Architecture",
        "Lead Scoring & Intent Trigger Workflows",
        "Inbound Nurturing & Retargeting Loops",
        "Pipeline Velocity Optimization",
      ],
      iconSvg: "demand-generation",
      ctaText: "Build Demand Engine",
    },
    {
      id: "bant-qualification",
      categoryNumber: "04",
      title: "BANT Qualified Leads",
      tagline: "Prospects pre-screened for Budget, Authority, Need, and Timeline.",
      businessProblem:
        "Sales reps waste countless hours on 'discovery calls' with junior staff who have zero purchasing authority and no allocated budget.",
      clientValue:
        "Every lead passed to your team has been thoroughly vetted across all four BANT dimensions: confirmed budget, verified decision-making authority, defined business pain, and near-term buying timeline.",
      keyDeliverables: [
        "Rigorous BANT Qualification Criteria",
        "Call Recording & Transcript Verification",
        "Budget & Project Scope Validation",
        "Meeting Reschedule & Show-Up Guarantee",
      ],
      iconSvg: "bant-qualification",
      ctaText: "Access BANT Pipeline",
    },
    {
      id: "content-syndication",
      categoryNumber: "05",
      title: "Content Syndication",
      tagline: "Distribute your research and whitepapers to verified enterprise buyers.",
      businessProblem:
        "High-value proprietary whitepapers and benchmark reports often sit idle on company websites without reaching target enterprise budget holders.",
      clientValue:
        "We syndicate your content across targeted European and North American technology networks, capturing opt-in intent data from senior IT, SecOps, and SaaS leaders.",
      keyDeliverables: [
        "Targeted Content Syndication Channels",
        "Opt-In Intent & Consent Capture",
        "Tele-Verified Lead Screening",
        "Custom Filter Matching (Tech Stack, Headcount, Rev)",
      ],
      iconSvg: "content-syndication",
      ctaText: "Syndicate Your Content",
    },
    {
      id: "email-infrastructure",
      categoryNumber: "06",
      title: "Cold Email & Deliverability Infrastructure",
      tagline: "98%+ primary inbox deliverability engineered for enterprise scale.",
      businessProblem:
        "Google and Microsoft spam filters aggressively penalize cold outreach, sending company domains to spam and destroying outreach ROI.",
      clientValue:
        "We build dedicated outbound domain ecosystems with SPF, DKIM, DMARC, custom tracking domains, automated warmups, and inbox rotation to guarantee primary inbox placement.",
      keyDeliverables: [
        "Secondary Domain Architecture & DNS Hardening",
        "Automated Warmup & Deliverability Monitoring",
        "Spam-Trigger-Free Copywriting Architecture",
        "High-Volume Inbox Rotation Protocols",
      ],
      iconSvg: "email-infrastructure",
      ctaText: "Harden Deliverability",
    },
    {
      id: "data-cleansing",
      categoryNumber: "07",
      title: "Data Intelligence & ICP Cleansing",
      tagline: "Zero bounce rates. 100% verified decision-maker records.",
      businessProblem:
        "B2B CRM data decays at 30%+ annually. Outdated contact information results in high bounce rates, wasted SDR effort, and domain blacklisting.",
      clientValue:
        "We clean, enrich, and verify every contact record in your Total Addressable Market through multi-layered waterfall enrichment, phone verification, and real-time SMTP pinging.",
      keyDeliverables: [
        "Ideal Customer Profile (ICP) Blueprinting",
        "Real-Time SMTP & Catch-All Email Verification",
        "Direct Dial & Mobile Number Enrichment",
        "Technographic & Firmographic Tagging",
      ],
      iconSvg: "data-cleansing",
      ctaText: "Cleanse Target Data",
    },
    {
      id: "revenue-operations",
      categoryNumber: "08",
      title: "Pipeline Architecture & RevOps",
      tagline: "End-to-end outbound stack integration and cadence optimization.",
      businessProblem:
        "Disjointed sales tools, poor CRM attribution, and unscientific outreach copy prevent companies from systematically replicating outbound success.",
      clientValue:
        "We integrate your CRM (Salesforce, HubSpot), configure automated cadences (Outreach, Apollo, Salesloft), and run rigorous weekly A/B tests to maximize reply and meeting rates.",
      keyDeliverables: [
        "CRM & Sales Engagement Stack Setup",
        "Scientific A/B Hook & Subject Line Testing",
        "Attribution & Pipeline Conversion Reporting",
        "SDR Playbook & Objection Handling Frameworks",
      ],
      iconSvg: "revenue-operations",
      ctaText: "Optimize RevOps",
    },
  ],

  // Conceptual Pipeline Models (Case Studies representing B2B Software, CyberSec, and Enterprise IT)
  caseStudies: [
    {
      id: "cybersecurity-abm",
      title: "CyberSec Scale: Tier-1 Enterprise ABM Motion",
      category: "Brand Strategy", // Category mapped for filter
      scope: "Enterprise ABM, CISO Target Mapping, BANT Qualification",
      challenge:
        "A zero-trust cybersecurity platform struggled to penetrate Fortune 500 CISOs through standard cold email.",
      conceptApproach:
        "Engineered an account-based multi-touch architecture targeting 150 enterprise security committees with vulnerability research benchmarks and direct executive outreach.",
      intendedOutcome:
        "Generated 42 qualified enterprise security briefings within 90 days, delivering a 5.4x pipeline-to-spend ratio.",
      accentGradient: "from-blue-600/30 via-indigo-600/15 to-transparent",
      isConceptual: true,
    },
    {
      id: "cloud-devops-outbound",
      title: "DevOps Accelerator: High-Volume In-Market Prospecting",
      category: "Advertising",
      scope: "Data Cleansing, Multi-Domain Cold Infrastructure, TAM Discovery",
      challenge:
        "A Kubernetes infrastructure provider faced declining response rates and domain reputation degradation on their primary business domain.",
      conceptApproach:
        "Built 25 dedicated outbound domains with automated warmups, verified 18,000 DevOps leadership contacts, and launched 4 personalized problem-centric cadences.",
      intendedOutcome:
        "Restored primary inbox deliverability to 99.2% and established a recurring pipeline of 30+ BANT-qualified demos each month.",
      accentGradient: "from-cyan-500/30 via-blue-500/15 to-transparent",
      isConceptual: true,
    },
    {
      id: "saas-content-syndication",
      title: "FinTech Data: European Content Syndication Campaign",
      category: "Digital Experience",
      scope: "Content Syndication, GDPR Tele-Verification, Lead Nurturing",
      challenge:
        "A compliance SaaS company required qualified inbound interest across the UK, DACH, and Nordic regions with strict GDPR opt-in compliance.",
      conceptApproach:
        "Syndicated an annual regulatory compliance benchmark report across European financial networks, followed by tele-qualification to verify buying timeline.",
      intendedOutcome:
        "Delivered 350+ 100% GDPR-compliant opt-in contacts with verified budget timelines of under 6 months.",
      accentGradient: "from-violet-600/30 via-indigo-600/15 to-transparent",
      isConceptual: true,
    },
    {
      id: "revops-transformation",
      title: "Enterprise IT: Outbound Revenue Operations Architecture",
      category: "Media & Scale",
      scope: "Full-Funnel Pipeline Architecture, RevOps, HubSpot/Salesforce Cadences",
      challenge:
        "An enterprise IT managed services provider experienced unpredictable deal flow with inconsistent sales rep performance.",
      conceptApproach:
        "Standardized the complete outbound sales stack, instituted automated ICP enrichment triggers, and deployed continuous A/B testing on cadence copy.",
      intendedOutcome:
        "Cut the sales cycle by 24% while tripling SDR outbound meeting quota attainment within two fiscal quarters.",
      accentGradient: "from-sky-500/30 via-cyan-500/15 to-transparent",
      isConceptual: true,
    },
  ],

  // B2B Pipeline Pillars
  values: [
    {
      title: "100% GDPR & CAN-SPAM Compliant",
      subtitle: "Enterprise data governance without legal risk",
      description:
        "Strict adherence to global data privacy laws. Every outbound touchpoint operates within legal frameworks, protecting your corporate reputation.",
      iconName: "compliance",
    },
    {
      title: "Guaranteed ICP Matching",
      subtitle: "Zero meetings with irrelevant job titles",
      description:
        "We map your Total Addressable Market with surgical precision. Every prospect delivered matches your exact revenue, headcount, tech stack, and title criteria.",
      iconName: "icp",
    },
    {
      title: "Rapid 14-Day Deployment",
      subtitle: "From kickoff to live pipeline in two weeks",
      description:
        "We eliminate the traditional agency ramp-up delay. Our proven infrastructure and pre-warmed engines enable live outreach within 14 business days.",
      iconName: "speed",
    },
    {
      title: "Scientific A/B Optimization",
      subtitle: "Iterative testing for maximum conversion yield",
      description:
        "We treat outbound as an empirical science. Subject lines, value propositions, call-to-actions, and send timings are continually split-tested.",
      iconName: "testing",
    },
  ],

  // 4-Stage B2B Pipeline Methodology
  processStages: [
    {
      number: "01",
      name: "Strategy & TAM Discovery",
      headline: "Mapping your total addressable market",
      description:
        "We dissect your Ideal Customer Profile (ICP), map total market penetration opportunities, and build a verified database of target accounts and decision-makers.",
      deliverables: ["ICP Architecture Matrix", "Target Account List (TAL)", "Competitor Gap Analysis"],
    },
    {
      number: "02",
      name: "Infrastructure & Outbound Engine",
      headline: "Hardening deliverability and cadences",
      description:
        "We deploy secondary domain ecosystems, configure DNS security (SPF/DKIM/DMARC), and write hyper-personalized, value-first multi-touch sequences.",
      deliverables: ["Warm Inbox Ecosystem", "Hyper-Personalized Copy Cadence", "Domain Health Dashboard"],
    },
    {
      number: "03",
      name: "Outreach & BANT Qualification",
      headline: "Engaging prospects and screening intent",
      description:
        "Our team executes coordinated outreach across email, phone, and social, rigorously screening interested prospects for Budget, Authority, Need, and Timeline.",
      deliverables: ["Active Outbound Outreach", "BANT Lead Scorecard", "Confirmed Calendar Bookings"],
    },
    {
      number: "04",
      name: "Pipeline Scaling & RevOps",
      headline: "Iterative optimization and CRM alignment",
      description:
        "We analyze conversion bottlenecks, optimize messaging based on live market feedback, and scale outbound volume without compromising lead quality.",
      deliverables: ["A/B Conversion Report", "CRM Workflow Synchronization", "Quarterly Growth Roadmap"],
    },
  ],
};

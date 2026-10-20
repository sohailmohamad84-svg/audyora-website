export interface SocialLinks {
  linkedin: string;
  twitter: string;
  instagram: string;
  behance: string;
}

export interface BusinessCoordinates {
  emailPlaceholder: string;
  phonePlaceholder: string;
  whatsappPlaceholder: string;
  addressPlaceholder: string;
  operatingHours: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  categoryNumber: string;
  tagline: string;
  businessProblem: string;
  clientValue: string;
  keyDeliverables: string[];
  iconSvg: string;
  ctaText: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: "Brand Strategy" | "Advertising" | "Digital Experience" | "Media & Scale";
  scope: string;
  challenge: string;
  conceptApproach: string;
  intendedOutcome: string;
  accentGradient: string;
  isConceptual: true;
}

export interface BrandValue {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProcessStage {
  number: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  aiAutomationLayer?: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  positioning: string;
  description: string;
  productionDomain: string;
  canonicalUrl: string;
  coordinates: BusinessCoordinates;
  socials: SocialLinks;
  services: ServiceItem[];
  caseStudies: CaseStudyItem[];
  values: BrandValue[];
  processStages: ProcessStage[];
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  serviceInterest: string;
  projectDetails: string;
  consent: boolean;
  honeypot?: string;
}

export interface FormValidationErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
  serviceInterest?: string;
  projectDetails?: string;
  consent?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: FormValidationErrors;
}

export interface EnquirySubmissionResult {
  success: boolean;
  isConfigured: boolean;
  statusTitle: string;
  message: string;
  details?: string;
}

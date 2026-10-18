import { ContactFormData, EnquirySubmissionResult } from "../../types/index";

export interface IEnquiryService {
  submitEnquiry(data: ContactFormData): Promise<EnquirySubmissionResult>;
  isConfigured(): boolean;
}

import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";

export function ContactForm() {
  return <LeadCaptureForm inquiryType="contact" defaultSubject="Website enquiry" submitLabel="Send message" />;
}

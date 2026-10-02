import { useEffect } from "react";
import FAQSection from "@/components/FAQSection";
import EmergencyProtocol from "@/components/EmergencyProtocol";
import { updatePageMeta } from "@/lib/seo";

export default function FAQPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Frequently Asked Questions & Breakdown Guides | 501 Towing",
      description: "Answers to towing questions: pricing calculations, EV/Tesla safe towing, insurance reimbursement, response times, and breakdown safety tips.",
      canonicalUrl: "https://fiveoonetowing.com/faq",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FAQSection />
      <EmergencyProtocol />
    </div>
  );
}

import { useEffect } from "react";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import RateCalculatorPreview from "@/components/RateCalculatorPreview";
import EmergencyProtocol from "@/components/EmergencyProtocol";
import { updatePageMeta } from "@/lib/seo";

export default function ServicesPage() {
  useEffect(() => {
    updatePageMeta({
      title: "All Towing & Roadside Services | 501 Towing & Roadside",
      description: "Full directory of towing & recovery services in Central Arkansas: flatbed towing, EV transport, jump starts, lockouts, fuel delivery, and fleet accounts.",
      canonicalUrl: "https://fiveoonetowing.com/services",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Services />
      <TrustBar />
      <RateCalculatorPreview />
      <EmergencyProtocol />
    </div>
  );
}

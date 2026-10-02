import { useEffect } from "react";
import FleetSection from "@/components/FleetSection";
import TrustBar from "@/components/TrustBar";
import { updatePageMeta } from "@/lib/seo";

export default function FleetPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Our Fleet & Equipment | 501 Towing & Roadside - Benton, AR",
      description: "Explore our modern towing fleet: hydraulic low-approach flatbeds, medium-duty recovery wreckers, and rapid roadside assistance units.",
      canonicalUrl: "https://fiveoonetowing.com/fleet",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FleetSection />
      <TrustBar />
    </div>
  );
}

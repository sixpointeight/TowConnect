import { useEffect } from "react";
import CoverageSection from "@/components/CoverageSection";
import TrustBar from "@/components/TrustBar";
import { updatePageMeta } from "@/lib/seo";

export default function CoverageAreaPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Service Coverage Areas & ETAs | 501 Towing & Roadside",
      description: "Fast 15-30 minute emergency towing coverage across Benton, Bryant, Little Rock, North Little Rock, Maumelle, Conway, Hot Springs, and Central Arkansas.",
      canonicalUrl: "https://fiveoonetowing.com/coverage",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CoverageSection />
      <TrustBar />
    </div>
  );
}

import { useEffect } from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import RateCalculatorPreview from "@/components/RateCalculatorPreview";
import Services from "@/components/Services";
import FleetSection from "@/components/FleetSection";
import CoverageSection from "@/components/CoverageSection";
import EmergencyProtocol from "@/components/EmergencyProtocol";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";

export default function HomePage() {
  useEffect(() => {
    updatePageMeta({
      title: "501 Towing & Roadside | 24/7 Emergency Towing in Central Arkansas",
      description: "Fast, damage-free flatbed towing and 24/7 roadside assistance across Benton, Little Rock, Bryant, and Central AR. Under 30-min response. Call (501) 451-2151.",
      canonicalUrl: "https://fiveoonetowing.com/",
    });

    setStructuredData("homepage-local-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <RateCalculatorPreview />
      <Services />
      <FleetSection />
      <EmergencyProtocol />
      <CoverageSection />
      <ReviewsSection />
      <FAQSection />
      <About />
      <Contact />
    </>
  );
}
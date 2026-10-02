import { useEffect } from "react";
import { updatePageMeta } from "@/lib/seo";
import RateCalculator from "@/components/RateCalculator";

export default function RateCalculatorPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Towing Rate Calculator | Instant Estimate - 501 Towing & Roadside",
      description: "Calculate your towing estimate instantly with transparent three-leg pricing. Serving Benton, Little Rock, and Central Arkansas 24/7.",
      canonicalUrl: "https://fiveoonetowing.com/rate-calculator",
    });
  }, []);

  return <RateCalculator />;
}
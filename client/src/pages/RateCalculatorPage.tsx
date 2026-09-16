import { useEffect } from "react";
import RateCalculator from "@/components/RateCalculator";

export default function RateCalculatorPage() {
  useEffect(() => {
    const title = "Towing Rate Calculator | Instant Estimate - 501 Towing & Roadside";
    const description =
      "Calculate your towing estimate instantly with transparent three-leg pricing. Serving Benton, Little Rock, and Central Arkansas 24/7.";
    const canonicalUrl = "https://fiveoonetowing.com/rate-calculator";

    document.title = title;

    const setMeta = (selector: string, attributes: Record<string, string>) => {
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement(selector.startsWith("meta") ? "meta" : "link");
        document.head.appendChild(tag);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });

      return tag;
    };

    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: "Towing Rate Calculator | 501 Towing & Roadside",
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: "Get an instant towing estimate using our transparent rate calculator.",
    });
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: "Towing Rate Calculator | 501 Towing & Roadside",
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: "Get an instant towing estimate using our transparent rate calculator.",
    });
  }, []);

  return <RateCalculator />;
}
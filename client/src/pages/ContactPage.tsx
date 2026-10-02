import { useEffect } from "react";
import Contact from "@/components/Contact";
import TrustBar from "@/components/TrustBar";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";

export default function ContactPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Contact & 24/7 Dispatch Hub | 501 Towing & Roadside - Benton, AR",
      description: "Contact 501 Towing & Roadside in Benton, AR. 24/7 emergency dispatch at (501) 451-2151. Headquarters located at 600 S. East Street, Benton, AR 72015.",
      canonicalUrl: "https://fiveoonetowing.com/contact",
    });

    setStructuredData("contact-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Contact />
      <TrustBar />
    </div>
  );
}

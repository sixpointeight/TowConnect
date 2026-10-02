import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import CoverageSection from "@/components/CoverageSection";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";

export default function CoverageAreaPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Service Coverage Areas & ETAs | 501 Towing & Roadside - Central AR",
      description: "Fast 15-30 minute emergency towing coverage across Benton, Bryant, Little Rock, North Little Rock, Maumelle, Conway, Hot Springs, and Central Arkansas.",
      canonicalUrl: "https://fiveoonetowing.com/coverage",
    });

    setStructuredData("coverage-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CoverageSection />

      {/* Dedicated County Hub Links */}
      <section className="py-12 bg-card border-t border-border/60">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Looking for City-Specific Response Times & Road Information?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore our dedicated county dispatch hubs for localized ETAs, highway exit numbers, and landmark directions.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/coverage/saline-county"
              className="p-5 rounded-2xl glass-card border border-border/70 text-left hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-sm text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" />
                  Benton & Bryant Hub (Saline County)
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground">
                10–15 min ETA • HQ dispatch at 600 S. East Street • I-30 Exits 114–123
              </p>
            </Link>

            <Link
              href="/coverage/little-rock"
              className="p-5 rounded-2xl glass-card border border-border/70 text-left hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-sm text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" />
                  Little Rock & NLR Hub (Pulaski County)
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground">
                20–30 min ETA • Downtown, West LR, I-630, I-430 & I-40 corridors
              </p>
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />
    </div>
  );
}

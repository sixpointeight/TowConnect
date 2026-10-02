import { useEffect } from "react";
import { Link } from "wouter";
import { 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  CheckCircle, 
  Calculator,
  ArrowRight,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import { trackPhoneCall } from "@/lib/analytics";

import truckImage from "@assets/generated_images/tow_truck_501_towing_2.jpeg";

export default function SalineCountyPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Towing Service in Benton & Bryant, AR | Saline County 501 Towing",
      description: "Fast 10-15 minute emergency towing in Benton, Bryant, Bauxite, Haskell & Saline County, AR. Headquartered at 600 S. East St. 24/7 hotline: (501) 451-2151.",
      canonicalUrl: "https://fiveoonetowing.com/coverage/saline-county",
    });

    setStructuredData("saline-county-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  const handleCall = () => {
    trackPhoneCall("saline_county_page_call");
    window.location.href = "tel:+15014512151";
  };

  const neighborhoods = [
    "Downtown Benton & Historic District",
    "Bryant Corridor & Alcoa Exchange",
    "Interstate 30 Exits 114, 116, 117, 118, 121, 123",
    "Highway 5 & Reynolds Road",
    "Bauxite & Sardis Communities",
    "Haskell & Traskwood",
    "Shannon Hills & Alexander",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${truckImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-bold border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
              <MapPin className="h-3.5 w-3.5 mr-1" /> Saline County Operations HQ
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Towing & Roadside in <span className="text-gradient-accent">Benton & Bryant, AR</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              With our primary dispatch hub at 600 S. East Street in Benton, 501 Towing delivers the fastest response times in Saline County—averaging 10 to 15 minutes along I-30, Hwy 5, and local neighborhoods.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5"
              >
                <Phone className="h-5 w-5" />
                <span>Call Saline Dispatch: (501) 451-2151</span>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-6 rounded-xl bg-white/10 hover:bg-white/15 border-white/20 text-white font-bold"
              >
                <Link href="/rate-calculator">Calculate Tow Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                Saline County's Most Trusted Local Tow Provider
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether your car overheated near the Benton Walmart on Highway 5, you ran out of gas at Alcoa Road, or you were in a fender bender on I-30 near Exit 116, our drivers are already in the area.
              </p>
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/25 flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-xs font-bold text-foreground">
                  Typical Saline County Arrival Time: 10 to 15 Minutes
                </span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-border/70 shadow-lg">
              <h3 className="font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Key Saline County Areas Covered 24/7
              </h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {neighborhoods.map((n, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

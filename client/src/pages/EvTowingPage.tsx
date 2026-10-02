import { useEffect } from "react";
import { Link } from "wouter";
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  Phone, 
  CheckCircle, 
  AlertTriangle, 
  Battery, 
  ArrowRight,
  Calculator
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import { trackPhoneCall } from "@/lib/analytics";

import teslaImage from "@assets/generated_images/501_towing_loading_tesla.png";

export default function EvTowingPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Tesla & EV Towing Service | 501 Towing - Benton & Little Rock, AR",
      description: "Certified Tesla & EV flatbed towing in Central Arkansas. Zero-damage soft straps, low-angle loading, neutral-tow mode assistance. Call (501) 451-2151.",
      canonicalUrl: "https://fiveoonetowing.com/services/ev-towing",
    });

    setStructuredData("ev-towing-business-schema", LOCAL_BUSINESS_SCHEMA);

    const evServiceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tesla & EV Safe Towing",
      "provider": {
        "@type": "AutomotiveBusiness",
        "name": "501 Towing & Roadside",
        "telephone": "+1-501-451-2151"
      },
      "serviceType": "Electric Vehicle Towing",
      "areaServed": "Central Arkansas",
      "description": "Specialized flatbed towing and roadside assistance for Tesla, Rivian, Ford Lightning, and electric vehicles."
    };
    setStructuredData("ev-service-schema", evServiceSchema);
  }, []);

  const handleCall = () => {
    trackPhoneCall("ev_towing_page_call");
    window.location.href = "tel:+15014512151";
  };

  const evFeatures = [
    {
      title: "Zero-Damage Soft Harness Strapping",
      desc: "We secure electric vehicles over the rubber tread using high-tensile 8-point nylon basket straps. No metal hooks ever touch your custom alloy wheels, suspension arms, or delicate brake calipers.",
    },
    {
      title: "Low-Angle Rollback Loading",
      desc: "Our hydraulic flatbeds feature a shallow 10-degree approach angle to prevent battery belly pan scrapes or front splitter damage during winching.",
    },
    {
      title: "Tow Mode & 12V Auxiliary Boost",
      desc: "If your Tesla screen is unresponsive or the high-voltage pack is discharged, our technicians carry 12V auxiliary power bridges to unlock the electronic parking brake and activate Tow Mode.",
    },
    {
      title: "Wheel Skates & Free-Wheel Dollies",
      desc: "For electric vehicles with frozen drive units or locked all-wheel drive systems, we utilize specialized free-rolling skate dollies to load your car without motor drag.",
    },
  ];

  const modelsSupported = [
    "Tesla Model 3, Model Y, Model S, Model X, Cybertruck",
    "Rivian R1T & R1S",
    "Ford F-150 Lightning & Mustang Mach-E",
    "Hyundai Ioniq 5 / 6 & Kia EV6 / EV9",
    "Chevrolet Silverado EV, Blazer EV & Equinox EV",
    "Porsche Taycan & Audi e-tron",
    "BMW i4, iX, i7 & Mercedes EQ Series",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${teslaImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-bold border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
              <Zap className="h-3.5 w-3.5 mr-1" /> EV-Certified Flatbed Recovery
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Tesla & Electric Vehicle <span className="text-gradient-accent">Towing in Central AR</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Towing an electric vehicle incorrectly can destroy permanent-magnet motors and void manufacturer warranties. 501 Towing is Central Arkansas's certified EV specialist equipped with soft-strap flatbeds, wheel skates, and 12V auxiliary power.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5"
                data-testid="button-ev-call-hero"
              >
                <Phone className="h-5 w-5" />
                <span>Call EV Dispatch: (501) 451-2151</span>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-6 rounded-xl bg-white/10 hover:bg-white/15 border-white/20 text-white font-bold"
              >
                <Link href="/rate-calculator">
                  <Calculator className="h-4 w-4 mr-2 text-accent" />
                  Calculate Tow Rate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Procedures */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                Why Standard Tow Trucks Can Damage Electric Vehicles
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conventional wheel-lift wreckers drag vehicles by one axle while letting the other wheels spin. On an electric vehicle, the permanent-magnet drive motors generate electricity when the wheels turn, creating extreme heat that can melt the inverter and burn out the high-voltage motor within miles.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Arkansas drivers trust 501 Towing because we mandate 100% rollback flatbed transport with all 4 wheels off the road surface.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/70">
              <img
                src={teslaImage}
                alt="501 Towing loading Tesla on flatbed"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {evFeatures.map((feat, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-border/70 shadow-md">
                <h3 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Vehicles We Frequently Tow */}
          <div className="glass-card rounded-2xl p-8 border border-border/70 shadow-lg text-center mb-12">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Electric Vehicles We Frequently Recover in Central Arkansas
            </h3>
            <p className="text-xs text-muted-foreground mb-6 max-w-xl mx-auto">
              Our technicians have completed specific manufacturer tow procedures for all leading EV platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {modelsSupported.map((mod, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-muted text-foreground border border-border/60">
                  {mod}
                </span>
              ))}
            </div>
          </div>

          {/* Dispatch CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20 text-center">
            <h3 className="text-2xl font-black text-foreground mb-2">
              Need Your EV Towed Right Now?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
              Our nearest low-approach flatbed truck is ready to roll in Benton, Bryant, or Little Rock.
            </p>
            <Button
              size="lg"
              onClick={handleCall}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-black text-sm px-8 rounded-xl shadow-lg"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call (501) 451-2151 for 24/7 EV Dispatch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

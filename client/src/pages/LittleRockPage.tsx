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

import highwayImage from "@assets/generated_images/408-light-trail-highway.png";

export default function LittleRockPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Towing Service in Little Rock & North Little Rock, AR | 501 Towing",
      description: "24/7 fast flatbed towing & roadside assistance in Little Rock, North Little Rock, Maumelle & Pulaski County. Fast I-630 & I-430 dispatch. Call (501) 451-2151.",
      canonicalUrl: "https://fiveoonetowing.com/coverage/little-rock",
    });

    setStructuredData("little-rock-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  const handleCall = () => {
    trackPhoneCall("little_rock_page_call");
    window.location.href = "tel:+15014512151";
  };

  const zones = [
    "Downtown Little Rock & River Market",
    "West Little Rock (Chenal, Cantrell, Rodney Parham)",
    "Midtown, UAMS & Medical District",
    "North Little Rock (Argenta, Lakewood, McCain)",
    "Interstates I-630, I-430, I-30 & I-40 Corridors",
    "Maumelle & Highway 100",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${highwayImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-bold border-primary/40 text-primary-foreground bg-primary/20">
              <MapPin className="h-3.5 w-3.5 mr-1" /> Pulaski County 24/7 Metro Patrol
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              24/7 Towing in <span className="text-gradient-primary">Little Rock & North Little Rock</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Fast, damage-free flatbed towing, highway collision recovery, and roadside assistance across Little Rock, West Little Rock, and North Little Rock. Average 20 to 30 minute arrival.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5"
              >
                <Phone className="h-5 w-5" />
                <span>Call Little Rock Dispatch: (501) 451-2151</span>
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
                Rapid Metro Towing & Dealership Relocations
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you need a tow from the I-630 commute, a jumpstart in a Downtown parking deck, or transport to a dealership on University Ave or Col. Glenn Road, 501 Towing provides damage-free, upfront-priced transport.
              </p>
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/25 flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-xs font-bold text-foreground">
                  Typical Pulaski County Arrival Time: 20 to 30 Minutes
                </span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-border/70 shadow-lg">
              <h3 className="font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Metro Areas Monitored 24/7
              </h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {zones.map((z, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{z}</span>
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

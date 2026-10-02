import { useEffect } from "react";
import { Link } from "wouter";
import { 
  Truck, 
  ShieldCheck, 
  Clock, 
  Phone, 
  CheckCircle, 
  Building2, 
  FileText, 
  Calculator,
  ArrowRight,
  HardHat
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import { trackPhoneCall } from "@/lib/analytics";

import wreckerImage from "@assets/generated_images/501-towing-black-wrecker.png";

export default function CommercialTowingPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Commercial & Medium-Duty Towing | 501 Towing - Central Arkansas",
      description: "Heavy and medium-duty commercial towing for work vans, box trucks, dually pickups, equipment trailers, and fleet accounts in Benton & Little Rock, AR. Call (501) 451-2151.",
      canonicalUrl: "https://fiveoonetowing.com/services/commercial-towing",
    });

    setStructuredData("commercial-towing-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  const handleCall = () => {
    trackPhoneCall("commercial_towing_call");
    window.location.href = "tel:+15014512151";
  };

  const commercialVehicles = [
    {
      title: "Work Vans & Cargo Delivery Vans",
      desc: "High-roof Ford Transits, Mercedes Sprinters, Ram ProMasters, and Chevy Express vans.",
    },
    {
      title: "Medium-Duty Box Trucks & Cutaways",
      desc: "Moving trucks, box trucks up to Class 6, landscape dump trucks, and utility flatbeds.",
    },
    {
      title: "Dual-Rear-Wheel (Dually) Pickups",
      desc: "Ford F-350/F-450, Ram 3500, and Chevy Silverado 3500 loaded with trailers or heavy tools.",
    },
    {
      title: "Light Construction & Rental Equipment",
      desc: "Scissor lifts, compact tractors, skid steers, forklifts, and industrial compressors.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${wreckerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-bold border-accent/40 text-accent bg-accent/10">
              <HardHat className="h-3.5 w-3.5 mr-1" /> Commercial Fleet Solutions
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Commercial Fleet & <span className="text-gradient-accent">Medium-Duty Towing</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              When a commercial truck breaks down, business stops. 501 Towing delivers rapid medium-duty recovery, priority fleet response, and flexible commercial billing across Saline and Pulaski counties.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5"
              >
                <Phone className="h-5 w-5" />
                <span>Call Commercial Dispatch: (501) 451-2151</span>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-6 rounded-xl bg-white/10 hover:bg-white/15 border-white/20 text-white font-bold"
              >
                <Link href="/rate-calculator">Calculate Route Rates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Equipped for Heavy Work & Commercial Fleets
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard light-duty tow trucks lack the wheel-lift capacity and frame rigging needed for commercial vehicles. Our wreckers and reinforced flatbeds handle heavy commercial payloads with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {commercialVehicles.map((veh, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-border/70 shadow-md">
                <h3 className="font-bold text-base text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  {veh.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {veh.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Fleet Accounts Benefits Box */}
          <div className="glass-card rounded-2xl p-8 border border-border/70 shadow-xl mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Corporate Fleet Account Advantages
                </h3>
                <p className="text-xs text-muted-foreground">
                  Tailored for HVAC contractors, plumbers, delivery services, dealerships, and municipal fleets.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-xs text-muted-foreground mb-6">
              <div className="p-4 rounded-xl bg-card border border-border/60">
                <span className="font-bold text-foreground block mb-1">⚡ Priority Dispatch</span>
                Your vehicles receive first-position dispatch queuing to keep delivery deadlines intact.
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/60">
                <span className="font-bold text-foreground block mb-1">📄 Monthly Itemized Billing</span>
                Consolidated net-30 invoicing with full trip receipts and driver sign-off copies.
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/60">
                <span className="font-bold text-foreground block mb-1">🛡️ $1M+ Cargo Protection</span>
                Comprehensive insurance coverage protecting high-value equipment and tools in transit.
              </div>
            </div>

            <div className="text-center pt-2">
              <Button
                onClick={handleCall}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs px-6 rounded-xl"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                Set Up a Commercial Account: (501) 451-2151
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

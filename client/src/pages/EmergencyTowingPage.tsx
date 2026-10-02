import { useEffect } from "react";
import { Link } from "wouter";
import { 
  Truck, 
  Clock, 
  ShieldCheck, 
  Phone, 
  CheckCircle, 
  MapPin, 
  AlertTriangle, 
  Wrench, 
  Zap, 
  Calculator, 
  ArrowRight,
  FileText
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackPhoneCall, trackServiceInterest } from "@/lib/analytics";
import { updatePageMeta } from "@/lib/seo";

import emergencyImage from "@assets/generated_images/Emergency_roadside_assistance_service_0f19d632.png";
import wreckerImage from "@assets/generated_images/501-towing-black-wrecker.png";
import teslaImage from "@assets/generated_images/501_towing_loading_tesla.png";

export default function EmergencyTowingPage() {
  useEffect(() => {
    updatePageMeta({
      title: "24/7 Emergency Towing Services | 501 Towing - Central Arkansas",
      description: "Fast 24/7 emergency flatbed towing and accident recovery across Benton, Little Rock, and Bryant, AR. Average 15-30 min ETA. Call (501) 451-2151.",
      canonicalUrl: "https://fiveoonetowing.com/emergency-towing",
    });
  }, []);

  const handleCall = () => {
    trackPhoneCall("emergency_towing_page");
    window.location.href = "tel:+15014512151";
  };

  const towingServices = [
    {
      icon: Truck,
      title: "Flatbed Rollback Towing",
      eta: "15–25 min",
      description: "Safest method for all-wheel drive, luxury, electric, and lowered vehicles. Keeps all wheels elevated off the road surface.",
      details: [
        "Protects transmission and all-wheel-drive transfer cases",
        "Prevents tire wear and ground-clearance scrapes",
        "Soft nylon wheel harnesses with zero metal rim contact",
        "Direct transport to your mechanic, dealership, or residence",
      ],
    },
    {
      icon: Zap,
      title: "Tesla & EV Safe Towing",
      eta: "20–30 min",
      description: "Certified zero-damage procedures for Tesla Model 3/Y/S/X, Rivian, Ford Lightning, and all modern battery electric vehicles.",
      details: [
        "Electronic Tow Mode activation and 12V auxiliary booster",
        "Wheel-skate dollies for locked or immobilized electric motors",
        "No chain contact around high-voltage underbody battery trays",
        "Delivery to nearest Tesla Supercharger or certified body shop",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Accident Scene Recovery & Winching",
      eta: "15–20 min",
      description: "Heavy-duty hydraulic recovery for collisions, rollovers, highway pileups, and ditch extractions.",
      details: [
        "Heavy planetary winches capable of pulling out of steep ravines",
        "Full highway hazard mitigation and debris cleanup",
        "Secure storage yard available with 24/7 video monitoring",
        "Itemized documentation prepared for immediate insurance claims",
      ],
    },
    {
      icon: MapPin,
      title: "Long-Distance & Regional Transport",
      eta: "Scheduled",
      description: "Dependable cross-state and regional vehicle transport anywhere across Arkansas and neighboring states.",
      details: [
        "Transparent per-mile pricing with no surprise fuel surcharges",
        "Direct point-to-point delivery without depot transfers",
        "Full $1M+ cargo insurance during entire transit",
        "Ideal for private sales, vehicle auctions, and family moves",
      ],
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
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                24/7 Emergency Dispatch
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15">
                <Clock className="h-3.5 w-3.5 text-accent" /> Avg 15–25 Min Arrival
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              24/7 Emergency <span className="text-gradient-accent">Towing Services</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              When an unexpected breakdown, flat tire, or collision leaves you stranded, every second counts. 501 Towing provides immediate dispatch of modern hydraulic flatbeds and wreckers across Central Arkansas.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5"
                data-testid="button-emergency-call-hero"
              >
                <Phone className="h-5 w-5" />
                <span>Call Dispatch: (501) 451-2151</span>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-6 rounded-xl bg-white/10 hover:bg-white/15 border-white/20 text-white font-bold"
              >
                <Link href="/rate-calculator">
                  <Calculator className="h-4 w-4 mr-2 text-accent" />
                  Estimate Tow Cost
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-6 border-b border-border/60 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="text-2xl font-black text-accent mb-0.5">&lt; 25 min</div>
              <div className="text-xs text-muted-foreground font-medium">Average Highway ETA</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-black text-accent mb-0.5">$1,000,000+</div>
              <div className="text-xs text-muted-foreground font-medium">Cargo & Liability Insured</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-black text-accent mb-0.5">100% Soft Strap</div>
              <div className="text-xs text-muted-foreground font-medium">Zero Metal Rim Contact</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-black text-accent mb-0.5">365 Days</div>
              <div className="text-xs text-muted-foreground font-medium">Holidays & Storms Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Towing Services Grid */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-primary/30 text-primary">
              <Truck className="h-3.5 w-3.5 mr-1 text-accent" /> Dedicated Towing Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
              Specialized Towing for Every Vehicle & Situation
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We deploy the right truck and certified rigging equipment tailored to your specific vehicle's drivetrain and condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {towingServices.map((service, index) => (
              <Card key={index} className="glass-card rounded-2xl border-border/70 shadow-lg flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3 text-accent" /> {service.eta}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={handleCall}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs rounded-xl"
                  >
                    <Phone className="h-3.5 w-3.5 mr-1.5" />
                    Dispatch Driver for This Tow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* EV Towing Callout Box */}
          <div className="glass-card rounded-2xl p-8 max-w-5xl mx-auto border border-border/70 shadow-xl" id="ev-specialty">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                  <Zap className="h-3.5 w-3.5" /> Specialized EV Handling
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Electric Vehicles Require Certified Flatbed Transport
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dragging an electric vehicle or towing it with drive wheels on the ground can permanently destroy permanent-magnet motors and void your warranty. 501 Towing operators carry specialized wheel skates and low-approach flatbeds designed specifically for Tesla, Rivian, Ford Mach-E, and Hyundai/Kia EVs.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Button
                    onClick={handleCall}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs rounded-xl"
                  >
                    <Phone className="h-3.5 w-3.5 mr-1.5" />
                    Call for EV Dispatch
                  </Button>
                </div>
              </div>
              <div className="md:col-span-5">
                <img
                  src={teslaImage}
                  alt="Tesla flatbed tow"
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
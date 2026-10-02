import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Truck, 
  Wrench, 
  Car, 
  Battery, 
  Key, 
  Fuel, 
  AlertTriangle, 
  Zap, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  HardHat,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackServiceInterest, trackPhoneCall } from "@/lib/analytics";

import emergencyImage from "@assets/generated_images/Emergency_roadside_assistance_service_0f19d632.png";
import teslaImage from "@assets/generated_images/501_towing_loading_tesla.png";

type ServiceCategory = "all" | "towing" | "roadside" | "specialty" | "commercial";

interface ServiceItem {
  id: string;
  category: "towing" | "roadside" | "specialty" | "commercial";
  title: string;
  tag: string;
  eta: string;
  icon: any;
  description: string;
  features: string[];
  link: string;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [, setLocation] = useLocation();

  const services: ServiceItem[] = [
    {
      id: "flatbed_towing",
      category: "towing",
      title: "24/7 Emergency Flatbed Towing",
      tag: "Most Popular",
      eta: "15–25 min",
      icon: Truck,
      description: "Complete roll-back flatbed transport for vehicles disabled by engine failure, transmission issues, or electrical faults. Keeps all four wheels off the pavement.",
      features: [
        "Safe for all AWD, 4WD, and low-clearance vehicles",
        "Nylon wheel-strap system (no rim scratches)",
        "Rapid highway response across I-30, I-40, I-430",
        "Direct delivery to your chosen mechanic, home, or dealership",
      ],
      link: "/emergency-towing",
    },
    {
      id: "accident_recovery",
      category: "towing",
      title: "Accident Recovery & Winching",
      tag: "24/7 Emergency",
      eta: "15–20 min",
      icon: AlertTriangle,
      description: "Specialized scene recovery for collisions, rollover vehicles, and ditch extractions. We coordinate directly with local law enforcement and insurance providers.",
      features: [
        "Heavy-duty hydraulic winches for off-road recovery",
        "Debris cleanup and scene stabilization",
        "Secure storage yard available",
        "Itemized documentation for fast insurance claims",
      ],
      link: "/emergency-towing",
    },
    {
      id: "battery_jumpstart",
      category: "roadside",
      title: "Computerized Battery Jump Start",
      tag: "Rapid Roadside",
      eta: "15–20 min",
      icon: Battery,
      description: "Delivering high-amperage, surge-protected jump starts safe for modern onboard electronics, computers, and 12V auxiliary batteries in hybrids.",
      features: [
        "Surge-protected booster packs prevent ECU damage",
        "Alternator and battery voltage diagnostic check",
        "Service for cars, pickup trucks, SUVs, and vans",
        "Available in residential driveways or highway shoulders",
      ],
      link: "/roadside-assistance",
    },
    {
      id: "lockout_assistance",
      category: "roadside",
      title: "Zero-Damage Car Lockout Service",
      tag: "Non-Destructive",
      eta: "15–25 min",
      icon: Key,
      description: "Professional auto entry using precision pneumatic air wedges and coated reach tools. We unlock doors without scratching paint, tearing weatherstripping, or popping airbags.",
      features: [
        "100% damage-free door opening guarantee",
        "Works on electronic locks, smart keys, and manual pins",
        "Covers domestic, foreign, luxury, and work trucks",
        "Available 24 hours a day, 7 days a week",
      ],
      link: "/roadside-assistance",
    },
    {
      id: "flat_tire_change",
      category: "roadside",
      title: "Flat Tire Change & Air Delivery",
      tag: "Roadside Service",
      eta: "20–30 min",
      icon: Car,
      description: "Stuck with a puncture, blowout, or low pressure? We mount your spare tire safely with calibrated torque tools or supply high-output compressed air on-site.",
      features: [
        "Safe hydraulic jacking on soft or uneven shoulders",
        "Precision torque lug nut tightening to factory spec",
        "Inspection of spare tire pressure and roadworthiness",
        "Towing to local tire center if no spare is available",
      ],
      link: "/roadside-assistance",
    },
    {
      id: "fuel_delivery",
      category: "roadside",
      title: "Emergency Fuel & Fluid Delivery",
      tag: "Convenience",
      eta: "20–30 min",
      icon: Fuel,
      description: "Ran out of fuel on the interstate or a rural road? We deliver up to 5 gallons of fresh Regular 87, Premium 93, or Ultra-Low Sulfur Diesel directly to your tank.",
      features: [
        "Fresh, clean fuel delivered in EPA-approved containers",
        "Engine priming and restart assistance included",
        "Coolant and washer fluid delivery on request",
        "Enough range to comfortably reach the nearest gas station",
      ],
      link: "/roadside-assistance",
    },
    {
      id: "ev_specialty_towing",
      category: "specialty",
      title: "Tesla & Electric Vehicle Towing",
      tag: "EV Certified",
      eta: "20–30 min",
      icon: Zap,
      description: "Electric vehicles require specialized flatbed handling to avoid damaging sensitive regenerative drive units and high-voltage battery enclosures.",
      features: [
        "Tow-mode activation and 12V booster bridge support",
        "Wheel-skate dollies for locked or dead motors",
        "Soft-strap harness over tires (zero rim contact)",
        "Direct transport to Tesla Superchargers or certified repair centers",
      ],
      link: "/emergency-towing",
    },
    {
      id: "commercial_equipment",
      category: "commercial",
      title: "Commercial Fleet & Equipment Hauling",
      tag: "Fleet Accounts",
      eta: "Priority",
      icon: HardHat,
      description: "Dependable transport for commercial work trucks, cargo vans, trailers, scissor lifts, tractors, and light construction machinery across Arkansas.",
      features: [
        "Medium-duty wreckers and high-capacity flatbeds",
        "Priority commercial dispatch accounts with monthly billing",
        "Dealership and repair shop scheduled transfers",
        "Fully licensed by Arkansas Towing & Recovery Board",
      ],
      link: "/services",
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const handleServiceClick = (service: ServiceItem) => {
    trackServiceInterest(service.id);
    setLocation(service.link);
  };

  const handleCall = () => {
    trackPhoneCall("services_section_call");
    window.location.href = "tel:+15014512151";
  };

  return (
    <section id="services" className="py-20 bg-muted/20 relative" data-testid="section-services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5 mr-1 text-accent" /> Complete Towing & Roadside Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Full-Spectrum <span className="text-gradient-accent">Towing & Recovery Services</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            From sudden highway blowouts and dead batteries to specialized Tesla flatbed transport and heavy collision recovery, our certified crew handles every situation with care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Services" },
            { id: "towing", label: "Emergency Towing" },
            { id: "roadside", label: "Roadside Assistance" },
            { id: "specialty", label: "Tesla & EV Transport" },
            { id: "commercial", label: "Commercial & Fleet" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as ServiceCategory)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border border-border/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between border-border/70 overflow-hidden"
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3 text-accent" /> {service.eta}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-border/60 flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="w-full text-xs font-semibold rounded-xl border-border/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center gap-1.5"
                      onClick={() => handleServiceClick(service)}
                    >
                      <span>Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleCall}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl px-3"
                      title="Call for this service"
                    >
                      <Phone className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlight: The 501 Damage-Free Standard */}
        <div className="glass-card rounded-2xl p-8 lg:p-12 border border-border/70 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                <ShieldCheck className="h-3.5 w-3.5" />
                The 501 Safety & Quality Pledge
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Why Drivers Across Central Arkansas Choose 501 Towing
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                When you're stranded, you need more than just any tow truck; you need an operator who treats your vehicle with master precision. We invest in high-standard hydraulic equipment and rigorous WreckMaster safety protocols.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <div className="font-bold text-sm text-foreground mb-1 flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    100% Soft-Strap Rigging
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We never use metal chain wraps around your suspension or rims. High-tensile nylon straps safeguard expensive alloy wheels and alignments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <div className="font-bold text-sm text-foreground mb-1 flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Low-Approach Beds
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Our flatbeds feature shallow tilt angles engineered for lowered sports cars, long wheelbases, and aerodynamic front splitters.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <div className="font-bold text-sm text-foreground mb-1 flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    GPS Fleet Tracking
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Our digital dispatch system monitors traffic in real-time to assign the nearest operator, giving you reliable, accurate arrival times.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border/60">
                  <div className="font-bold text-sm text-foreground mb-1 flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Digital Receipt & Claims Help
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Immediate digital invoices emailed or texted to your phone for rapid reimbursement with your roadside assistance provider.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl shadow-lg shadow-accent/20"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Request Assistance: (501) 451-2151
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-border/80"
                >
                  <Link href="/rate-calculator">Calculate Tow Estimate</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 group">
                <img
                  src={teslaImage}
                  alt="501 Towing loading a Tesla Model 3 safely"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      EV Safe Handling Certified
                    </span>
                    <p className="text-sm font-semibold">
                      Specially trained for Tesla, Rivian, Mustang Mach-E & hybrid models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useEffect } from "react";
import { Link } from "wouter";
import { 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Battery, 
  Car, 
  Key, 
  Wrench, 
  Fuel, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Calculator
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackPhoneCall, trackServiceInterest } from "@/lib/analytics";
import { updatePageMeta } from "@/lib/seo";

import emergencyImage from "@assets/generated_images/Emergency_roadside_assistance_service_0f19d632.png";

export default function RoadsideAssistancePage() {
  useEffect(() => {
    updatePageMeta({
      title: "24/7 Roadside Assistance | Jump Start, Lockout, Flat Tire - 501 Towing",
      description: "Fast 24/7 roadside assistance in Little Rock, Benton, Bryant & Central AR. Dead battery jumps, car lockouts, flat tires & fuel delivery. Call (501) 451-2151.",
      canonicalUrl: "https://fiveoonetowing.com/roadside-assistance",
    });
  }, []);

  const handleCall = () => {
    trackPhoneCall("roadside_page_call");
    window.location.href = "tel:+15014512151";
  };

  const roadsideServices = [
    {
      icon: Battery,
      title: "Computerized Battery Jump Start",
      response: "15–20 min",
      description: "Dead battery at home, work, or on the road? We deliver surge-protected jump starts safe for modern ECUs, luxury vehicles, and hybrid 12V batteries.",
      features: [
        "Surge-protected booster packs prevent computer frying",
        "Battery terminal cleaning and voltage diagnostic test",
        "Covers cars, pickup trucks, SUVs, and commercial vans",
        "Alternator charging rate check included",
      ],
    },
    {
      icon: Key,
      title: "Zero-Damage Car Lockout Service",
      response: "15–25 min",
      description: "Keys locked inside the cabin or trunk? Our certified technicians use precision pneumatic air wedges and scratch-free reach tools for rapid entry.",
      features: [
        "100% damage-free door opening guarantee",
        "No scratched paint, torn weatherstripping, or bent frames",
        "Safe for push-button starts, electronic locks, and smart keys",
        "Available 24 hours a day, 7 days a week",
      ],
    },
    {
      icon: Car,
      title: "Flat Tire Change & Air Service",
      response: "20–30 min",
      description: "Suffered a tire blowout or puncture? We safely mount your inflated spare tire using calibrated torque wrenches or deliver high-volume air on-scene.",
      features: [
        "Safe hydraulic jacking on uneven highway shoulders",
        "Precision factory torque tightening on all lug nuts",
        "Spare tire pressure and tread integrity verification",
        "Tow transport to local tire shop if spare is flat or missing",
      ],
    },
    {
      icon: Fuel,
      title: "Emergency Fuel Delivery",
      response: "20–30 min",
      description: "Ran out of gas on I-30 or a rural county road? We deliver up to 5 gallons of fresh, clean fuel directly to your vehicle so you can reach safety.",
      features: [
        "Regular Unleaded (87), Premium (93), or Ultra-Low Sulfur Diesel",
        "EPA-compliant safety spill containers",
        "Engine cranking and fuel line priming assistance",
        "Sufficient fuel range to comfortably reach nearest service plaza",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Ditch & Mud Winch-Out Recovery",
      response: "15–25 min",
      description: "Slid into a slick Arkansas mud ditch, grassy median, or gravel bank? Our high-tonnage winches extract your vehicle without axle or bumper damage.",
      features: [
        "High-tensile synthetic winch lines with protective sleeves",
        "Gentle extraction angles prevent undercarriage damage",
        "Immediate safety assessment before driving back onto highway",
        "Covers adverse winter weather, ice, and storm washouts",
      ],
    },
    {
      icon: Wrench,
      title: "Minor On-Site Mechanical Help",
      response: "20–35 min",
      description: "Simple mechanical issues like loose battery clamps, disconnected sensor hoses, or stuck hood latches addressed immediately on the road.",
      features: [
        "Diagnostic code scanner check on request",
        "Fluid top-offs (coolant, power steering, oil) available",
        "Professional recommendation on whether car is safe to drive",
        "Seamless transition to flatbed tow if major repairs needed",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${emergencyImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                Live 24/7 Roadside Units
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15">
                <Clock className="h-3.5 w-3.5 text-accent" /> Avg 15–25 Min Response
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              24/7 Rapid <span className="text-gradient-accent">Roadside Assistance</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Dead battery in your driveway? Locked keys in your car at midnight? Blowout on Interstate 30? 501 Towing mobile roadside units are deployed across Central Arkansas to get you rolling again fast.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5"
                data-testid="button-roadside-call-hero"
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
                <a href="#roadside-services">View All Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" id="roadside-services">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-primary/30 text-primary">
              <Wrench className="h-3.5 w-3.5 mr-1 text-accent" /> Full Roadside Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
              Fast, Professional Roadside Help When You Need It Most
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every mobile roadside unit is equipped with commercial jump-packs, non-destructive lockout tools, high-output air compressors, and fresh fuel tanks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roadsideServices.map((service, index) => (
              <Card key={index} className="glass-card rounded-2xl border-border/70 shadow-lg flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3 text-accent" /> {service.response}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={handleCall}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs rounded-xl"
                  >
                    <Phone className="h-3.5 w-3.5 mr-1.5" />
                    Request {service.title.split(" ")[0]} Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
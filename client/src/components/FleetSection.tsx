import { useState } from "react";
import { Link } from "wouter";
import { 
  Truck, 
  ShieldCheck, 
  Wrench, 
  Zap, 
  Gauge, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackPhoneCall } from "@/lib/analytics";

import wreckerImage from "@assets/generated_images/501-towing-black-wrecker.png";
import teslaFlatbedImage from "@assets/generated_images/501_towing_loading_tesla.png";
import truckImage1 from "@assets/generated_images/tow_truck_501_towing_1.jpeg";
import roadsideUnitImage from "@assets/generated_images/Emergency_roadside_assistance_service_0f19d632.png";

interface FleetVehicle {
  id: string;
  name: string;
  role: string;
  image: string;
  specs: string[];
  capabilities: string[];
  bestFor: string;
}

export default function FleetSection() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("flatbed");

  const fleet: FleetVehicle[] = [
    {
      id: "flatbed",
      name: "Hydraulic Low-Approach Flatbed",
      role: "Light & Specialty Transport",
      image: teslaFlatbedImage,
      specs: [
        "10-degree ultra-shallow approach angle",
        "Dual Ramsey hydraulic winches",
        "21 ft high-strength aluminum deck",
        "Tire-basket 8-point nylon tie-down system",
      ],
      capabilities: [
        "Zero-clearance exotic and sports cars",
        "AWD, 4WD, and electric vehicles (Tesla, EV6, Rivian)",
        "Luxury sedans and lowered suspensions",
        "Motorcycles using specialized wheel chocks",
      ],
      bestFor: "Accidents, mechanical breakdowns, EV transport & high-value vehicles",
    },
    {
      id: "wrecker",
      name: "Medium & Heavy-Duty Recovery Wrecker",
      role: "Heavy Collision & Off-Road Recovery",
      image: wreckerImage,
      specs: [
        "Extendable hydraulic recovery boom",
        "Under-lift wheel grid with safety pins",
        "Dual 12,000 lb planetary winches",
        "Rigid steel outrigger stabilizers",
      ],
      capabilities: [
        "Overturned vehicles and ditch winch-outs",
        "Commercial work vans and box trucks",
        "Dual-rear-wheel trucks (F-350, Ram 3500)",
        "Tight parking garage extractions",
      ],
      bestFor: "Highway accident scenes, rollovers, mud/creek recovery, and heavy work trucks",
    },
    {
      id: "rapid_rollback",
      name: "Rapid-Response City Rollback",
      role: "Metro & Highway Express",
      image: truckImage1,
      specs: [
        "Rapid hydraulic deployment system",
        "High-visibility 360-degree LED strobe package",
        "Onboard computerized GPS dispatch terminal",
        "Auxiliary wheel-lift for secondary car towing",
      ],
      capabilities: [
        "Sub-20 minute dispatch across Benton & Little Rock",
        "Standard SUVs, pickups, and compact sedans",
        "Two-vehicle simultaneous towing capacity",
        "State trooper and police impound rotation",
      ],
      bestFor: "Rush-hour breakdowns, Interstate 30/40 cleared lanes & commute recovery",
    },
    {
      id: "roadside_unit",
      name: "Mobile Roadside Service Unit",
      role: "Rapid Mechanical Assistance",
      image: roadsideUnitImage,
      specs: [
        "High-output rotary air compressor system",
        "Commercial 12V/24V surge-protected battery pack",
        "Professional lockout air wedges and slimline tools",
        "Multi-grade fuel and coolant tanks",
      ],
      capabilities: [
        "Fast arrival in high-density traffic",
        "On-scene battery testing and replacement",
        "Pneumatic lug nut removal and spare mounting",
        "Non-invasive lock picking and door entry",
      ],
      bestFor: "Dead batteries, lockouts, flat tires, and fuel delivery without a tow truck",
    },
  ];

  const current = fleet.find((v) => v.id === selectedVehicle) || fleet[0];

  const handleCall = () => {
    trackPhoneCall("fleet_section_call");
    window.location.href = "tel:+15014512151";
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="fleet">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-accent/40 text-accent">
            <Truck className="h-3.5 w-3.5 mr-1" /> Built For Central Arkansas Roads
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Our Modern <span className="text-gradient-accent">Fleet & Equipment</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We don't rely on aging, rusty trucks. 501 Towing maintains a state-of-the-art fleet equipped with the latest low-approach flatbeds, zero-scratch straps, and high-tonnage recovery gear.
          </p>
        </div>

        {/* Vehicle Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {fleet.map((vehicle) => {
            const isSelected = selectedVehicle === vehicle.id;
            return (
              <button
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "glass-card hover:bg-muted text-foreground border-border/70"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-75">
                  {vehicle.role}
                </div>
                <div className="font-extrabold text-sm leading-snug">
                  {vehicle.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Vehicle Showcase Card */}
        <div className="glass-card rounded-2xl p-6 lg:p-10 border border-border/70 shadow-2xl max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image display */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-border/60 shadow-lg relative group">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-72 md:h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                  {current.role}
                </div>
              </div>
            </div>

            {/* Info and specifications */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  Equipment Specifications
                </span>
                <h3 className="text-2xl font-black text-foreground tracking-tight">
                  {current.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Best for: <strong className="text-foreground font-semibold">{current.bestFor}</strong>
                </p>
              </div>

              {/* Two lists: Specs & Capabilities */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1">
                    <Gauge className="h-3.5 w-3.5 text-primary" /> Key Rigging Specs
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {current.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-accent" /> Capabilities
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {current.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-border/60 flex items-center gap-3">
                <Button
                  onClick={handleCall}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl text-xs px-5 shadow-md"
                >
                  <Phone className="h-3.5 w-3.5 mr-1.5" />
                  Dispatch This Truck
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl text-xs border-border/80"
                >
                  <Link href="/rate-calculator">Get Route Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

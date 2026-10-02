import { useState } from "react";
import { Link } from "wouter";
import { 
  MapPin, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  Phone, 
  CheckCircle, 
  ArrowRight,
  Route
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackPhoneCall } from "@/lib/analytics";

interface CityZone {
  name: string;
  county: string;
  eta: string;
  majorRoutes: string[];
  status: "Immediate Dispatch" | "Rapid Response" | "Scheduled & Emergency";
  details: string;
}

export default function CoverageSection() {
  const [selectedCity, setSelectedCity] = useState<string>("Benton");

  const zones: CityZone[] = [
    {
      name: "Benton",
      county: "Saline County (HQ)",
      eta: "10–15 mins",
      majorRoutes: ["I-30 Exits 114–121", "Hwy 5", "Military Rd", "Edison Ave"],
      status: "Immediate Dispatch",
      details: "Our central headquarters is located at 600 S. East Street. Fastest arrival times across all Benton neighborhoods, schools, and shopping centers.",
    },
    {
      name: "Bryant",
      county: "Saline County",
      eta: "12–18 mins",
      majorRoutes: ["I-30 Exits 122–126", "Hwy 5", "Springhill Rd", "Reynolds Rd"],
      status: "Immediate Dispatch",
      details: "Dedicated units patrolling the Bryant corridor, Alcoa Exchange, and surrounding residential subdivisions 24 hours a day.",
    },
    {
      name: "Little Rock",
      county: "Pulaski County",
      eta: "20–30 mins",
      majorRoutes: ["I-630", "I-430", "I-30", "University Ave", "Chenal Pkwy"],
      status: "Rapid Response",
      details: "Full coverage across Downtown, Midtown, West Little Rock, and the medical district. Fast tow transport to all major Little Rock dealerships and shops.",
    },
    {
      name: "North Little Rock",
      county: "Pulaski County",
      eta: "25–35 mins",
      majorRoutes: ["I-40", "I-30", "JFK Blvd", "Maumelle Blvd", "MacArthur Dr"],
      status: "Rapid Response",
      details: "Serving Argenta, Lakewood, Park Hill, and the I-40 truck corridors with heavy wreckers and rapid rollback flatbeds.",
    },
    {
      name: "Maumelle",
      county: "Pulaski County",
      eta: "25–35 mins",
      majorRoutes: ["I-40 Exit 142", "Hwy 100 / Maumelle Blvd", "Carnahan Dr"],
      status: "Rapid Response",
      details: "Reliable highway breakdown assistance and residential towing throughout Maumelle Boulevard and industrial parks.",
    },
    {
      name: "Conway",
      county: "Faulkner County",
      eta: "30–40 mins",
      majorRoutes: ["I-40 Exits 125–129", "Hwy 65", "Harkrider St", "Dave Ward Dr"],
      status: "Scheduled & Emergency",
      details: "Emergency long-distance towing and vehicle transport between Conway universities, auto centers, and Saline/Pulaski county.",
    },
    {
      name: "Hot Springs",
      county: "Garland County",
      eta: "30–45 mins",
      majorRoutes: ["Hwy 70", "Hwy 270 Bypass", "Central Ave", "Martin Luther King Jr Blvd"],
      status: "Scheduled & Emergency",
      details: "Servicing the scenic Hwy 70 route connecting Benton and Hot Springs, Lake Hamilton, and Garland County communities.",
    },
    {
      name: "Cabot & Sherwood",
      county: "Lonoke / Pulaski County",
      eta: "30–45 mins",
      majorRoutes: ["US-67 / US-167", "Kiefer Blvd", "Wildwood Ave"],
      status: "Scheduled & Emergency",
      details: "Prompt flatbed transport and accident assistance along the northeastern Central Arkansas corridor.",
    },
    {
      name: "Alexander & Bauxite",
      county: "Saline County",
      eta: "15–20 mins",
      majorRoutes: ["Hwy 183", "Alexander Rd", "Bauxite Cutoff"],
      status: "Immediate Dispatch",
      details: "Immediate local dispatch for residential breakdowns, private driveways, and county roads in Saline County.",
    },
  ];

  const currentZone = zones.find((z) => z.name === selectedCity) || zones[0];

  const handleCall = () => {
    trackPhoneCall(`coverage_${selectedCity.toLowerCase()}`);
    window.location.href = "tel:+15014512151";
  };

  return (
    <section className="py-20 bg-muted/20 relative" id="coverage">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-primary/30 text-primary">
            <Navigation className="h-3.5 w-3.5 mr-1 text-accent" /> Service Area Coverage
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Serving All of <span className="text-gradient-accent">Central Arkansas</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Headquartered in Benton at 600 S. East Street, 501 Towing provides rapid response coverage across Saline, Pulaski, Garland, and Faulkner counties.
          </p>
        </div>

        {/* 2-Column Interactive Coverage Board */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* City selection buttons */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2 px-1">
              Select Your City / Area:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
              {zones.map((zone) => {
                const isSelected = selectedCity === zone.name;
                return (
                  <button
                    key={zone.name}
                    onClick={() => setSelectedCity(zone.name)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all text-xs sm:text-sm ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-md font-bold"
                        : "glass-card hover:bg-muted text-foreground border-border/60"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className={`h-4 w-4 ${isSelected ? "text-white" : "text-accent"}`} />
                      <span>{zone.name}</span>
                    </div>
                    <span className={`text-[11px] font-semibold ${isSelected ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {zone.eta}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Zone Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 lg:p-8 border border-border/70 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border/60">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {currentZone.county}
                </span>
                <h3 className="text-2xl font-black text-foreground tracking-tight">
                  {currentZone.name}, Arkansas
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                  {currentZone.status}
                </span>
              </div>
            </div>

            {/* Estimated Arrival Time Box */}
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-accent text-accent-foreground font-bold">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Average Emergency ETA
                  </div>
                  <div className="text-xl font-extrabold text-foreground">
                    {currentZone.eta}
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                onClick={handleCall}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs"
              >
                <Phone className="h-3.5 w-3.5 mr-1" />
                Call Now
              </Button>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {currentZone.details}
            </p>

            {/* Major Corridors Monitored */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2.5 flex items-center gap-1.5">
                <Route className="h-4 w-4 text-primary" /> Key Highway Corridors Monitored
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentZone.majorRoutes.map((route, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-card border border-border/60 text-foreground"
                  >
                    {route}
                  </span>
                ))}
              </div>
            </div>

            {/* Coverage Perks */}
            <div className="pt-4 border-t border-border/60 grid sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span>GPS Live Unit Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span>Zero Hidden Mileage Surcharges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span>Direct Drop-off at Any Local Shop</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span>24/7/365 On-Call Dispatch</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Don't see your specific town? We cover the entire state.
              </span>
              <Link
                href="/coverage"
                className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1"
              >
                Full Coverage Details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

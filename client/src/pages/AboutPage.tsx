import { useEffect } from "react";
import { Link } from "wouter";
import { 
  Users, 
  Award, 
  Clock, 
  Truck, 
  ShieldCheck, 
  CheckCircle, 
  Phone, 
  MapPin, 
  HeartHandshake,
  Star,
  Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import { trackPhoneCall } from "@/lib/analytics";

import teslaImage from "@assets/generated_images/501_towing_loading_tesla.png";
import technicianImage from "@assets/generated_images/Professional_towing_technician_c412a32f.png";
import fleetImage from "@assets/generated_images/501-towing-black-wrecker.png";

export default function AboutPage() {
  useEffect(() => {
    updatePageMeta({
      title: "About Us | 501 Towing & Roadside - Benton & Central AR",
      description: "Learn about 501 Towing & Roadside. Over 15 years of trusted towing, recovery, and emergency roadside service in Benton, Little Rock, and Central Arkansas.",
      canonicalUrl: "https://fiveoonetowing.com/about",
    });

    setStructuredData("about-local-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  const handleCall = () => {
    trackPhoneCall("about_page_call");
    window.location.href = "tel:+15014512151";
  };

  const values = [
    {
      title: "Honesty & Fair Pricing",
      desc: "We operate with total pricing transparency. We calculate real mileage with Google Maps and provide upfront quotes so you never face predatory surprise charges.",
    },
    {
      title: "Speed with Safety",
      desc: "Being stranded on highway shoulders like I-30 is dangerous. Our GPS dispatch routes the nearest truck immediately, keeping average arrival under 25 minutes.",
    },
    {
      title: "Zero-Damage Equipment",
      desc: "From 100% soft nylon wheel harnesses to ultra-shallow 10-degree hydraulic flatbed decks, our equipment is built to protect your luxury, EV, or classic vehicle.",
    },
    {
      title: "Community Roots",
      desc: "Our headquarters is right here at 600 S. East Street in Benton. We are proud Arkansans serving our neighbors, local businesses, and law enforcement daily.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${fleetImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-semibold border-accent/40 text-accent">
              <HeartHandshake className="h-3.5 w-3.5 mr-1" /> Over 15 Years Serving Arkansas
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              About <span className="text-gradient-accent">501 Towing & Roadside</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Family-owned, state-board licensed, and driven by a mission to bring respect, rapid response, and transparent pricing to the towing industry across Central Arkansas.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5"
              >
                <Phone className="h-5 w-5" />
                <span>Call (501) 451-2151</span>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-6 rounded-xl bg-white/10 hover:bg-white/15 border-white/20 text-white font-bold"
              >
                <Link href="/rate-calculator">
                  <Calculator className="h-4 w-4 mr-2 text-accent" />
                  View Pricing Model
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="py-8 bg-muted/40 border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-accent mb-1">15+</div>
              <div className="text-xs font-bold text-foreground">Years in Service</div>
              <div className="text-[11px] text-muted-foreground">Serving Saline & Pulaski Co.</div>
            </div>
            <div>
              <div className="text-3xl font-black text-accent mb-1">5,000+</div>
              <div className="text-xs font-bold text-foreground">Motorists Helped</div>
              <div className="text-[11px] text-muted-foreground">Accidents, jumps, tows</div>
            </div>
            <div>
              <div className="text-3xl font-black text-accent mb-1">100%</div>
              <div className="text-xs font-bold text-foreground">Damage-Free Pledge</div>
              <div className="text-[11px] text-muted-foreground">Soft-strap nylon harness</div>
            </div>
            <div>
              <div className="text-3xl font-black text-accent mb-1">$1M+</div>
              <div className="text-xs font-bold text-foreground">Insured & Bonded</div>
              <div className="text-[11px] text-muted-foreground">Full cargo protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story & Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto mb-20">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                Our Story: Redefining Towing in Arkansas
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                501 Towing & Roadside began with a single rollback truck and a determination to do things differently. For years, motorists had grown accustomed to rude operators, unexplained fees, and careless equipment that scratched wheels or damaged bumper covers.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We invested in the highest-grade aluminum flatbeds, precision non-destructive lockout kits, and ongoing WreckMaster and EV certifications. Today, our fleet handles hundreds of rescues each month across Benton, Bryant, Little Rock, North Little Rock, and surrounding Arkansas highways.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {values.map((val, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass-card border border-border/70">
                    <h3 className="font-bold text-sm text-foreground mb-1 flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {val.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-border/70 shadow-xl text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent shadow-lg bg-muted">
                  <img
                    src={technicianImage}
                    alt="Mike Johnson, Operations Manager"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-bold text-lg text-foreground">Mike Johnson</h3>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Lead Technician & Operations Manager
                </p>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "Our drivers understand that when someone calls us, they are having one of the most stressful days of their month. Our mission is to arrive swiftly, solve the problem safely, and treat every driver with genuine kindness."
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20 space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  State & Federal Compliance
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span>Arkansas Towing & Recovery Board Licensed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span>USDOT & Arkansas State Police Compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span>Commercial Liability & Cargo Coverage over $1,000,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
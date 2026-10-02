import { 
  Users, 
  Award, 
  Clock, 
  Truck, 
  ShieldCheck, 
  CheckCircle, 
  Phone,
  ArrowRight,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackPhoneCall } from "@/lib/analytics";

import teslaImage from "@assets/generated_images/501_towing_loading_tesla.png";
import technicianImage from "@assets/generated_images/Professional_towing_technician_c412a32f.png";

export default function About() {
  const stats = [
    { icon: Clock, number: "15+", label: "Years Serving Arkansas", desc: "Local family-owned & operated" },
    { icon: Users, number: "5,000+", label: "Motorists Rescued", desc: "Trusted by local drivers & fleets" },
    { icon: Award, number: "100%", label: "Damage-Free Goal", desc: "Nylon soft-strap rigging system" },
    { icon: ShieldCheck, number: "$1M+", label: "Insured & Bonded", desc: "Comprehensive liability & cargo" },
  ];

  const pillars = [
    {
      title: "Rapid Dispatch Infrastructure",
      desc: "Our dispatch center uses computerized GPS fleet positioning to route the closest wrecker or flatbed directly to you, minimizing dangerous shoulder wait times on busy interstates like I-30.",
    },
    {
      title: "State-of-the-Art Rigging",
      desc: "We invest in low-approach hydraulic aluminum beds and non-marring tire harnesses so high-end luxury vehicles, electric cars, and classic cruisers arrive in showroom condition.",
    },
    {
      title: "Zero-Surprise Pricing Guarantee",
      desc: "We despise predatory towing practices. All tow rates are calculated transparently by route mileage, and we give you an upfront price quote before dispatching our trucks.",
    },
    {
      title: "Community-First Values",
      desc: "Based in Benton at 600 S. East Street, we live and work in the same neighborhoods we serve. When you're stranded in the rain or at 2 AM, our operators treat you like family.",
    },
  ];

  const handleCall = () => {
    trackPhoneCall("about_section_call");
    window.location.href = "tel:+15014512151";
  };

  return (
    <section id="about" className="py-20 bg-muted/20 relative" data-testid="section-about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-primary/30 text-primary">
            <HeartHandshake className="h-3.5 w-3.5 mr-1 text-accent" /> Local • Dependable • Certified
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            About <span className="text-gradient-accent">501 Towing & Roadside</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Founded with a commitment to bring transparency, speed, and genuine hospitality to the towing industry across Central Arkansas.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center border border-border/70 shadow-md hover:border-accent/40 transition-colors"
              data-testid={`card-stat-${index}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-black text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-foreground">
                {stat.label}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Story & Values Split Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto mb-16">
          {/* Left Column: Mission & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              A Higher Standard for Towing & Emergency Recovery
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              When 501 Towing & Roadside was established in Saline County, our vision was simple: eliminate the frustration, long waits, and hidden fees that typically plague the towing experience.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Today, our certified drivers operate modern hydraulic wreckers and aluminum flatbeds out of our Benton operations hub. Whether you're a commuter stranded on the shoulder of Interstate 30, a commercial fleet manager managing deliveries, or an EV driver needing flatbed recovery, we treat your vehicle with total care.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5 flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-accent" />
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl shadow-lg shadow-accent/20"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call (501) 451-2151
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-border/80"
              >
                <a href="#contact">Send a Message</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Lead Tech & Certification Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Lead Technician Card */}
            <div className="glass-card rounded-2xl p-6 border border-border/70 shadow-xl text-center relative overflow-hidden">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent shadow-lg bg-muted">
                <img
                  src={technicianImage}
                  alt="Lead Technician & Operations Manager"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-team-member"
                />
              </div>
              <h4 className="font-extrabold text-lg text-foreground">Mike Johnson</h4>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                Lead Technician & Operations Manager
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed italic max-w-sm mx-auto">
                "We treat every vehicle as if it were our own family's. When you're stranded in an unfamiliar or dangerous spot, our first job is to bring you safety and peace of mind."
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-border/60">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  WreckMaster Certified
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  EV Recovery Specialist
                </span>
              </div>
            </div>

            {/* Regulatory Compliance Badge Box */}
            <div className="glass-card rounded-2xl p-5 border border-border/70 shadow-md space-y-2.5 text-xs">
              <div className="font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                State Regulatory & Safety Credentials
              </div>
              <ul className="space-y-1.5 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                  <span>Licensed by Arkansas Towing & Recovery Board</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                  <span>Comprehensive $1,000,000+ On-Hook Cargo Insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                  <span>Certified Non-Destructive Auto Entry Operators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
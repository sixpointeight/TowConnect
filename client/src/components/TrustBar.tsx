import { Clock, ShieldCheck, Zap, Award, ThumbsUp, MapPin } from "lucide-react";

export default function TrustBar() {
  const highlights = [
    {
      icon: Clock,
      title: "15–30 Min Response",
      desc: "Rapid highway & metro dispatch",
    },
    {
      icon: ShieldCheck,
      title: "$1M+ Insured & Bonded",
      desc: "Full comprehensive protection",
    },
    {
      icon: Zap,
      title: "EV & Tesla Certified",
      desc: "Damage-free neutral & wheel straps",
    },
    {
      icon: Award,
      title: "15+ Years in AR",
      desc: "Licensed & state board compliant",
    },
  ];

  return (
    <section aria-label="Key highlights" className="border-y border-border/60 bg-muted/40 py-6 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3.5 group">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 flex-shrink-0 shadow-sm">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

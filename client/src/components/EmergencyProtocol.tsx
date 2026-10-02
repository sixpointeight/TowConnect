import { 
  AlertTriangle, 
  ShieldAlert, 
  Phone, 
  MapPin, 
  FileText, 
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall } from "@/lib/analytics";

export default function EmergencyProtocol() {
  const steps = [
    {
      num: "01",
      title: "Hazard Lights & Safe Shoulder",
      desc: "Activate hazard flashers immediately. If vehicle is operable, pull fully onto the right shoulder as far away from moving highway traffic as possible.",
    },
    {
      num: "02",
      title: "Stay Protected",
      desc: "On high-speed corridors like I-30 or I-40, remain buckled inside your vehicle unless smoke or fire is present, or move safely behind a metal guardrail.",
    },
    {
      num: "03",
      title: "Identify Your Location",
      desc: "Look for highway mile markers, the nearest exit sign, or drop a GPS location pin in your phone maps app to give dispatch exact coordinates.",
    },
    {
      num: "04",
      title: "Call 501 Towing Immediately",
      desc: "Dial (501) 451-2151. Tell our dispatcher your vehicle year, make, model, any passengers with you, and whether you are in an AWD/EV vehicle.",
    },
    {
      num: "05",
      title: "File Insurance Claim",
      desc: "Our driver will text or email an official itemized invoice before leaving, ready to submit for full reimbursement under your roadside coverage.",
    },
  ];

  const handleCall = () => {
    trackPhoneCall("breakdown_protocol_call");
    window.location.href = "tel:+15014512151";
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="safety-checklist">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-4">
            <AlertTriangle className="h-3.5 w-3.5" />
            Highway Safety Protocol
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Stuck on the Highway? <span className="text-gradient-accent">Do This First</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Your safety is our #1 priority. Follow this straightforward 5-step checklist if your car breaks down or you're involved in an accident in Central Arkansas.
          </p>
        </div>

        {/* 5-Step Cards Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-card rounded-2xl p-5 border border-border/70 flex flex-col justify-between hover:border-accent/40 transition-colors shadow-md"
            >
              <div>
                <div className="text-3xl font-black text-accent/40 mb-2 font-mono">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-accent text-accent-foreground font-black flex-shrink-0 animate-pulse">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                24/7 Arkansas Emergency Dispatch
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Need Help Right Now?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Our nearest tow truck or roadside service unit will be enroute within minutes.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleCall}
            className="w-full sm:w-auto h-12 px-7 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-sm shadow-lg shadow-accent/25 flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Phone className="h-4 w-4" />
            <span>Call (501) 451-2151</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

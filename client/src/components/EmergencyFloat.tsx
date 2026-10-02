import { useState, useEffect } from "react";
import { Phone, AlertTriangle, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall } from "@/lib/analytics";

export default function EmergencyFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 200px
      if (window.scrollY > 200 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 200) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleCall = () => {
    trackPhoneCall("floating_emergency_bar");
    window.location.href = "tel:+15014512151";
  };

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      aria-label="Emergency quick call"
      className="fixed bottom-5 right-5 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative group">
        {/* Glowing backdrop pulse */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />

        <div className="relative flex items-center bg-slate-950/95 text-white border border-orange-500/40 rounded-full pl-4 pr-2 py-2 shadow-2xl backdrop-blur-xl gap-3">
          {/* Pulsing beacon */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
          </span>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[11px] font-semibold text-orange-400 tracking-wider uppercase flex items-center gap-1">
              <AlertTriangle className="h-3 w-3 inline" /> 24/7 Rapid Dispatch
            </span>
            <span className="text-sm font-bold tracking-tight text-white">
              (501) 451-2151
            </span>
          </div>

          <Button
            size="sm"
            onClick={handleCall}
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-4 py-2 shadow-md flex items-center gap-1.5"
            data-testid="button-floating-call"
          >
            <Phone className="h-4 w-4 animate-bounce" />
            <span>Call Now</span>
          </Button>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-slate-400 hover:text-white p-1 rounded-full transition-colors"
            title="Dismiss quick call bar"
            aria-label="Dismiss quick call bar"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

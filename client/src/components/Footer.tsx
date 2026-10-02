import { Link } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Calculator, 
  Truck, 
  ArrowUp,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall } from "@/lib/analytics";
import logoWhite from "@assets/generated_images/logo-white.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCall = () => {
    trackPhoneCall("footer_call_link");
    window.location.href = "tel:+15014512151";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-white/10 relative overflow-hidden" data-testid="footer">
      {/* Upper Footer Action Bar */}
      <div className="border-b border-white/10 py-10 bg-slate-900/60">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 rounded-2xl bg-accent text-accent-foreground font-black">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">
                Stranded in Central Arkansas? We're Already on Our Way.
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Average emergency response time under 25 minutes across Benton, Bryant, Little Rock, and beyond.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={handleCall}
              className="rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/25 flex items-center gap-2"
              data-testid="button-footer-call"
            >
              <Phone className="h-4 w-4" />
              <span>(501) 451-2151</span>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/rate-calculator">
                <Calculator className="h-4 w-4 mr-1.5 text-accent" />
                Calculate Rate
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src={logoWhite}
                alt="501 Towing & Roadside"
                className="h-12 w-auto mb-2"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Central Arkansas's premier 24/7 towing and emergency recovery provider. Delivering rapid, damage-free flatbed towing, roadside assistance, and honest Google Maps three-leg pricing.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Licensed by Arkansas Towing & Recovery Board</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>$1,000,000+ On-Hook Cargo & Liability Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>WreckMaster & EV Safe-Handling Certified</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Towing & Roadside Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/emergency-towing" className="hover:text-accent transition-colors">
                  24/7 Emergency Flatbed Towing
                </Link>
              </li>
              <li>
                <Link href="/roadside-assistance" className="hover:text-accent transition-colors">
                  Battery Jump Start Service
                </Link>
              </li>
              <li>
                <Link href="/roadside-assistance" className="hover:text-accent transition-colors">
                  Damage-Free Car Lockout Entry
                </Link>
              </li>
              <li>
                <Link href="/roadside-assistance" className="hover:text-accent transition-colors">
                  Flat Tire Change & Air Service
                </Link>
              </li>
              <li>
                <Link href="/roadside-assistance" className="hover:text-accent transition-colors">
                  Emergency Fuel & Fluid Delivery
                </Link>
              </li>
              <li>
                <Link href="/emergency-towing" className="hover:text-accent transition-colors">
                  Tesla & Electric Vehicle Towing
                </Link>
              </li>
              <li>
                <Link href="/emergency-towing" className="hover:text-accent transition-colors">
                  Accident Recovery & Winching
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors font-semibold text-slate-300">
                  View Full Services Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rate-calculator" className="hover:text-accent transition-colors">
                  Rate Calculator
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-accent transition-colors">
                  Fleet & Equipment
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="hover:text-accent transition-colors">
                  Coverage Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About 501 Towing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ & Guides
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent transition-colors">
                  Contact & Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch HQ Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters & Dispatch
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">501 Towing & Roadside</p>
                  <p>600 S. East Street</p>
                  <p>Benton, AR 72015</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <button
                  onClick={handleCall}
                  className="font-bold text-white hover:text-accent transition-colors"
                >
                  (501) 451-2151
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="truncate">fiveoonetowing@gmail.com</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-400 font-semibold">24/7/365 Non-Stop Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} 501 Towing & Roadside Service LLC. All rights reserved. | Benton & Central Arkansas.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
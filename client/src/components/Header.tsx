import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Truck, 
  Wrench, 
  Zap, 
  HelpCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import { trackPhoneCall, trackNavigation, trackEmergencyBanner } from "@/lib/analytics";
import logoBlack from "@assets/generated_images/logo-black.svg";
import logoWhite from "@assets/generated_images/logo-white.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const theme = useTheme();

  useEffect(() => {
    trackEmergencyBanner("view");
  }, []);

  const handleCall = (source: string = "header_cta") => {
    trackPhoneCall(source);
    window.location.href = "tel:+15014512151";
  };

  const navLinks = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Rate Calculator", href: "/rate-calculator", isRoute: true, highlight: true },
    { label: "Fleet & Tech", href: "/fleet", isRoute: true },
    { label: "Coverage", href: "/coverage", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "FAQ", href: "/faq", isRoute: true },
    { label: "Contact", href: "/#contact", isRoute: false },
  ];

  const servicesMenu = [
    {
      title: "Emergency Towing",
      description: "24/7 flatbed & wheel-lift accident recovery and breakdown towing",
      href: "/emergency-towing",
      icon: Truck,
      tag: "24/7 Available",
    },
    {
      title: "Roadside Assistance",
      description: "Jump starts, flat tire changes, lockout entry & emergency fuel",
      href: "/roadside-assistance",
      icon: Wrench,
      tag: "Under 25 min",
    },
    {
      title: "EV & Tesla Towing",
      description: "Zero-damage soft straps & specialized neutral-tow equipment",
      href: "/emergency-towing#ev-specialty",
      icon: Zap,
      tag: "EV Certified",
    },
    {
      title: "View All Services",
      description: "Full directory of light, medium, and heavy-duty towing solutions",
      href: "/services",
      icon: Sparkles,
      tag: "Full Catalog",
    },
  ];

  const handleLinkClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false);
    const dest = isRoute ? href.replace("/", "") || "home" : href.replace("#", "");
    trackNavigation(dest, "header");

    if (!isRoute) {
      const hash = href.includes("#") ? href.split("#")[1] : null;
      if (location !== "/") {
        // If not on home, navigate to home with hash
        window.location.href = href;
      } else if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Sleek Top Dispatch Status Bar */}
      <div className="bg-slate-950 text-slate-100 py-1.5 px-4 text-xs font-medium border-b border-white/10 relative z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Live Dispatch Pulse */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
              Live 24/7 Dispatch Active
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-slate-300">
              Central Arkansas: Benton, Little Rock, Bryant & Surrounding Areas
            </span>
          </div>

          {/* Quick links & Direct Contact */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>Avg ETA: 15–30 Mins</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={() => handleCall("top_bar")}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors group"
            >
              <Phone className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform" />
              <span>(501) 451-2151</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border/60 transition-colors">
        <div className="container mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={theme === "dark" ? logoWhite : logoBlack}
                alt="501 Towing & Roadside"
                className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
              <div className="hidden lg:flex flex-col">
                <span className="font-extrabold text-base tracking-tight leading-tight">
                  501 TOWING
                </span>
                <span className="text-[10px] font-semibold text-accent tracking-widest uppercase">
                  & Roadside Service
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location === "/" ? "text-primary bg-primary/10 font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                }`}
              >
                Home
              </Link>

              {/* Services Mega Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`text-sm font-medium bg-transparent hover:bg-muted/50 ${
                        location.startsWith("/emergency-towing") || location.startsWith("/roadside-assistance") || location.startsWith("/services")
                          ? "text-primary font-semibold"
                          : "text-foreground/80"
                      }`}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-3 p-4 w-[520px] bg-popover/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-2xl">
                        {servicesMenu.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group flex flex-col p-3 rounded-lg hover:bg-accent/10 transition-colors border border-transparent hover:border-accent/20"
                            onClick={() => handleLinkClick(item.href, true)}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                  <item.icon className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {item.title}
                                </span>
                              </div>
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent-foreground">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Other Navigation Links */}
              {navLinks.slice(1).map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                      location === item.href
                        ? "text-primary bg-primary/10 font-semibold"
                        : item.highlight
                        ? "text-accent font-semibold hover:bg-accent/10"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.highlight && <Calculator className="h-3.5 w-3.5" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleLinkClick(item.href, item.isRoute)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            {/* Right side CTAs */}
            <div className="flex items-center gap-2.5">
              <ThemeToggle />

              {/* Call Now Button with Glow */}
              <Button
                onClick={() => handleCall("header_cta_button")}
                className="relative group overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-4 md:px-5 py-2 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300"
                data-testid="button-emergency-call"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 animate-pulse" />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[10px] font-semibold text-orange-100 uppercase tracking-wider hidden sm:block">
                      24/7 Dispatch
                    </span>
                    <span className="text-sm font-extrabold tracking-tight">
                      (501) 451-2151
                    </span>
                  </div>
                </div>
              </Button>

              {/* Mobile Menu Hamburger */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-lg hover:bg-muted"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                data-testid="button-mobile-menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Drawer Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-border/60 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1 pb-2">
                {/* Emergency Dispatch Banner in Mobile Menu */}
                <div className="p-3 mb-2 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider">
                      Need Immediate Help?
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Dispatchers are on standby
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleCall("mobile_drawer_quick")}
                    className="bg-accent text-accent-foreground font-bold"
                  >
                    <Phone className="h-3.5 w-3.5 mr-1" />
                    Call
                  </Button>
                </div>

                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location === "/" ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:bg-muted"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/rate-calculator"
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                    location === "/rate-calculator" ? "bg-accent/15 text-accent font-bold" : "text-accent hover:bg-accent/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" /> Towing Rate Calculator
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-accent/20 px-2 py-0.5 rounded">
                    Instant
                  </span>
                </Link>

                {/* Services Group */}
                <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Our Services
                </div>
                <div className="pl-2 space-y-0.5">
                  <Link
                    href="/emergency-towing"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted flex items-center gap-2"
                  >
                    <Truck className="h-4 w-4 text-primary" />
                    <span>24/7 Emergency Towing</span>
                  </Link>
                  <Link
                    href="/roadside-assistance"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted flex items-center gap-2"
                  >
                    <Wrench className="h-4 w-4 text-primary" />
                    <span>Roadside Assistance</span>
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted flex items-center gap-2"
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>All Services Catalog</span>
                  </Link>
                </div>

                {/* Company & Support Links */}
                <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Information & Support
                </div>
                <div className="pl-2 space-y-0.5">
                  <Link
                    href="/fleet"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted block"
                  >
                    Our Fleet & Equipment
                  </Link>
                  <Link
                    href="/coverage"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted block"
                  >
                    Coverage Areas & ETA
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted block"
                  >
                    About 501 Towing
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted block"
                  >
                    Frequently Asked Questions
                  </Link>
                  <button
                    onClick={() => handleLinkClick("/#contact", false)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted block"
                  >
                    Contact & Location
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
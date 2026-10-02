import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  Truck, 
  Battery, 
  Car, 
  Key, 
  Fuel, 
  AlertCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackPhoneCall, trackNavigation } from "@/lib/analytics";

import heroImageTesla from "@assets/generated_images/501_towing_loading_tesla.png";
import heroImageWrecker from "@assets/generated_images/501-towing-black-wrecker.png";
import heroImageTruck2 from "@assets/generated_images/tow_truck_501_towing_2.jpeg";
import heroImageHighway from "@assets/generated_images/408-light-trail-highway.png";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string>("emergency_tow");

  const images = [
    { src: heroImageTesla, label: "Specialized EV & Tesla Flatbed Towing" },
    { src: heroImageWrecker, label: "Heavy & Medium Duty Recovery" },
    { src: heroImageTruck2, label: "Rapid Response Roadside & Highway Recovery" },
    { src: heroImageHighway, label: "24/7 Central Arkansas Highway Patrol & Towing" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleCall = (label: string) => {
    trackPhoneCall(`hero_${label}`);
    window.location.href = "tel:+15014512151";
  };

  const quickServices = [
    { id: "emergency_tow", name: "Emergency Tow", icon: Truck, eta: "15–25 min", desc: "Flatbed & wheel-lift recovery" },
    { id: "jumpstart", name: "Jump Start", icon: Battery, eta: "15–20 min", desc: "12V & hybrid battery boost" },
    { id: "flat_tire", name: "Flat Tire", icon: Car, eta: "20–30 min", desc: "Spare tire swap & air fill" },
    { id: "lockout", name: "Car Lockout", icon: Key, eta: "15–25 min", desc: "Damage-free rapid entry" },
    { id: "fuel", name: "Fuel Delivery", icon: Fuel, eta: "20–30 min", desc: "Gasoline & diesel delivered" },
  ];

  return (
    <section 
      id="home"
      aria-label="Hero section"
      className="relative min-h-[680px] lg:min-h-[740px] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Image Carousel with Smooth Crossfade */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
            idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${img.src})` }}
          aria-hidden="true"
        />
      ))}

      {/* Cinematic Multi-Layer Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/65 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 z-10" />
      <div className="absolute inset-0 hero-radial-bg opacity-70 z-10 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-20">
        <div className="max-w-3xl">
          {/* Trust & Dispatch Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live 24/7 Dispatch Available
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              Licensed, Bonded & $1M+ Insured
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-md">
              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              4.9★ Rated Central AR
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Fast, Reliable Towing & <br className="hidden sm:inline" />
            <span className="text-gradient-accent">Roadside Assistance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
            Stranded in Benton, Little Rock, Bryant, or anywhere in Central Arkansas? 
            Our modern fleet of hydraulic flatbeds and wreckers responds in <strong className="text-white font-semibold">15 to 30 minutes</strong> with damage-free handling and upfront, transparent pricing.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            {/* Primary Call Button */}
            <Button
              size="lg"
              onClick={() => handleCall("primary_button")}
              className="h-14 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-lg shadow-xl shadow-orange-500/25 transition-all duration-300 group flex items-center justify-center gap-3"
              data-testid="button-hero-call"
            >
              <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span>(501) 451-2151</span>
            </Button>

            {/* Instant Rate Calculator Link */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-7 rounded-xl bg-white/10 hover:bg-white/15 border-white/25 text-white font-bold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
              data-testid="button-hero-calculator"
            >
              <Link href="/rate-calculator">
                <Calculator className="h-5 w-5 text-accent" />
                <span>Instant Rate Estimate</span>
                <ArrowRight className="h-4 w-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Interactive Quick Service Picker Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Select What You Need:
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <Clock className="h-3 w-3" /> Trucks Ready For Immediate Dispatch
              </span>
            </div>

            {/* Quick Service Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {quickServices.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex flex-col items-center text-center p-2.5 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? "bg-accent/20 border-accent text-white shadow-lg shadow-accent/10"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <Icon className={`h-4 w-4 mb-1.5 ${isSelected ? "text-accent" : "text-slate-400"}`} />
                    <span className="font-semibold leading-tight">{service.name}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{service.eta}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Service Callout Banner */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <span className="text-slate-300">
                Selected: <strong className="text-white">{quickServices.find(s => s.id === selectedService)?.name}</strong> — {quickServices.find(s => s.id === selectedService)?.desc}
              </span>
              <button
                onClick={() => handleCall(`quick_${selectedService}`)}
                className="text-accent hover:text-amber-300 font-bold flex items-center gap-1 group"
              >
                <span>Dispatch Driver Now</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Image Label & Carousel Dots */}
      <div className="absolute bottom-4 right-4 z-20 hidden md:flex items-center gap-3 bg-slate-950/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-xs text-slate-300">
        <span className="truncate max-w-[260px] text-slate-200 font-medium">
          {images[currentImageIndex].label}
        </span>
        <div className="flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentImageIndex ? "w-5 bg-accent" : "w-1.5 bg-white/30"
              }`}
              title={`View slide ${idx + 1}`}
              aria-label={`View slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
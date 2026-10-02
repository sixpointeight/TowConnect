import { useState } from "react";
import { Link } from "wouter";
import { 
  Calculator, 
  MapPin, 
  Route, 
  ArrowRight, 
  CheckCircle, 
  ShieldAlert, 
  FileText, 
  DollarSign, 
  Sparkles,
  Phone,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AddressAutocomplete } from "@/components/ui/address-autocomplete";
import { RouteCalculation, RATES } from "@shared/types/maps";
import { trackRateCalculation, trackPhoneCall } from "@/lib/analytics";

export default function RateCalculatorPreview() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<RouteCalculation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    if (!pickup || !dropoff) {
      setError("Please provide both pickup and drop-off addresses.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/maps/calculate-route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pickupAddress: pickup, dropoffAddress: dropoff }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Unable to calculate route");
      }

      const data: RouteCalculation = await res.json();
      setResult(data);
      trackRateCalculation("Homepage Preview", data.enrouteMiles + data.loadedMiles + data.deadheadMiles, data.totalCost);
    } catch (err: any) {
      setError(err.message || "Failed to calculate route rate. Please call dispatch directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCall = () => {
    trackPhoneCall("rate_preview_call");
    window.location.href = "tel:+15014512151";
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/25 mb-4">
            <Calculator className="h-3.5 w-3.5" />
            100% Transparent Three-Leg Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Know Your Price <span className="text-gradient-accent">Before We Dispatch</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            No bait-and-switch. No surprise arrival surcharges. We calculate your exact route with Google Maps based on our Benton HQ, pickup spot, and destination.
          </p>
        </div>

        {/* 2-Column Interactive Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Interactive Quick Route Estimator */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Route className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground">Instant Tow Route Estimator</h3>
                  <p className="text-xs text-muted-foreground">Powered by real-time Google Maps distance API</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                Live Pricing
              </span>
            </div>

            <div className="space-y-4">
              <AddressAutocomplete
                id="preview-pickup"
                label="Pickup Location (Vehicle Current Spot)"
                placeholder="e.g. I-30 Exit 117, Benton, AR"
                value={pickup}
                onChange={setPickup}
                disabled={isLoading}
              />

              <AddressAutocomplete
                id="preview-dropoff"
                label="Drop-off Destination (Shop, Home, Dealership)"
                placeholder="e.g. 5400 S University Ave, Little Rock, AR"
                value={dropoff}
                onChange={setDropoff}
                disabled={isLoading}
              />

              <Button
                onClick={handleCalculate}
                disabled={isLoading || !pickup || !dropoff}
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Calculating Google Maps Route...
                  </>
                ) : (
                  <>
                    <Calculator className="h-4 w-4" />
                    Calculate Estimated Rate
                  </>
                )}
              </Button>

              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-xs text-destructive">
                  {error}
                </div>
              )}

              {/* Dynamic Calculation Result */}
              {result && (
                <div className="p-5 rounded-xl bg-accent/10 border border-accent/30 space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-accent/20 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      Route Calculation Summary
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      Loaded: {result.loadedMiles} mi
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Hookup Fee:</span>
                      <span className="font-semibold">${result.hookupFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Loaded ({result.loadedMiles} mi):</span>
                      <span className="font-semibold">${result.loadedRate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Enroute ({result.enrouteMiles} mi):</span>
                      <span className="font-semibold">${result.enrouteRate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Deadhead ({result.deadheadMiles} mi):</span>
                      <span className="font-semibold">${result.deadheadRate.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground block">Estimated Total Cost</span>
                      <span className="text-2xl font-black text-foreground">
                        ${result.totalCost.toFixed(2)}
                      </span>
                    </div>
                    <Button
                      onClick={handleCall}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs px-4"
                    >
                      <Phone className="h-3.5 w-3.5 mr-1.5" /> Book This Tow
                    </Button>
                  </div>
                </div>
              )}

              {/* Link to full calculator */}
              <div className="pt-2 text-center">
                <Link
                  href="/rate-calculator"
                  className="text-xs font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Need special equipment or multi-vehicle quote? Open Full Calculator
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Rate Breakdown & Guarantees */}
          <div className="lg:col-span-5 space-y-4">
            {/* Standard Rate Matrix Card */}
            <div className="glass-card rounded-2xl p-6 shadow-md border border-border/60">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-accent" />
                Standard Towing Rates
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-medium">Standard Hookup & Safety Rigging</span>
                  <span className="font-bold text-foreground">${RATES.HOOKUP}.00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-medium">Loaded Transport (Vehicle on Bed)</span>
                  <span className="font-bold text-foreground">${RATES.LOADED}.00 / mile</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-medium">Enroute Dispatch (Office → Pickup)</span>
                  <span className="font-bold text-foreground">${RATES.ENROUTE}.00 / mile</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground font-medium">Deadhead Return (Drop-off → Office)</span>
                  <span className="font-bold text-foreground">${RATES.DEADHEAD}.00 / mile</span>
                </div>
              </div>
            </div>

            {/* Insurance Reimbursement Card */}
            <div className="glass-card rounded-2xl p-6 shadow-md border border-border/60">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    Insurance Reimbursement Ready
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    We supply itemized digital receipts accepted by State Farm, GEICO, Progressive, Allstate, AAA, USAA, and Liberty Mutual for fast reimbursement.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["State Farm", "GEICO", "Progressive", "AAA", "USAA"].map((ins) => (
                      <span key={ins} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent block">
                  Questions About Pricing?
                </span>
                <span className="text-sm font-extrabold text-foreground">
                  Speak to Live Dispatcher
                </span>
              </div>
              <Button
                size="sm"
                onClick={handleCall}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs"
              >
                <Phone className="h-3.5 w-3.5 mr-1" />
                (501) 451-2151
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { 
  Calculator, 
  Phone, 
  Clock, 
  Truck, 
  Route, 
  ArrowRight, 
  Loader2, 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  MapPin, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AddressAutocomplete } from "@/components/ui/address-autocomplete";
import { trackPhoneCall, trackRateCalculation } from "@/lib/analytics";
import { RouteCalculation, RATES, OFFICE_ADDRESS } from "@shared/types/maps";

interface CalculationState {
  isLoading: boolean;
  error: string | null;
  result: RouteCalculation | null;
}

export default function RateCalculator() {
  const [pickupAddress, setPickupAddress] = useState<string>("");
  const [dropoffAddress, setDropoffAddress] = useState<string>("");
  const [calculation, setCalculation] = useState<CalculationState>({
    isLoading: false,
    error: null,
    result: null,
  });

  const calculateRouteRate = async () => {
    if (!pickupAddress || !dropoffAddress) {
      setCalculation((prev) => ({
        ...prev,
        error: "Please enter both pickup and drop-off addresses",
      }));
      return;
    }

    setCalculation({
      isLoading: true,
      error: null,
      result: null,
    });

    try {
      const response = await fetch("/api/maps/calculate-route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickupAddress,
          dropoffAddress,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to calculate route rate");
      }

      const routeCalculation: RouteCalculation = await response.json();

      setCalculation({
        isLoading: false,
        error: null,
        result: routeCalculation,
      });

      trackRateCalculation(
        "Route Calculation",
        routeCalculation.enrouteMiles + routeCalculation.loadedMiles + routeCalculation.deadheadMiles,
        routeCalculation.totalCost
      );
    } catch (error) {
      console.error("Error calculating route rate:", error);
      setCalculation({
        isLoading: false,
        error: error instanceof Error ? error.message : "Failed to calculate route rate",
        result: null,
      });
    }
  };

  const handleCall = () => {
    trackPhoneCall("rate_calculator_page");
    window.location.href = "tel:+15014512151";
  };

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-accent/40 text-accent">
            <Calculator className="h-3.5 w-3.5 mr-1" /> Accurate Google Maps Routing
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-foreground">
            Towing Rate <span className="text-gradient-accent">Calculator</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Get an instant, transparent estimate based on actual driving mileage. Our industry-standard three-leg pricing model accounts for enroute dispatch, loaded transport, and truck return to base.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Form & Rate Structure (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-border/70 shadow-xl space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-border/60">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Route className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Route & Address Details</h2>
                <p className="text-xs text-muted-foreground">Type your street, intersection, or city in Arkansas</p>
              </div>
            </div>

            <div className="space-y-4">
              <AddressAutocomplete
                id="pickup-address"
                label="Pickup Address (Vehicle Current Location)"
                placeholder="Enter pickup location (street address, city, state)"
                value={pickupAddress}
                onChange={setPickupAddress}
                disabled={calculation.isLoading}
              />

              <AddressAutocomplete
                id="dropoff-address"
                label="Drop-off Address (Destination Repair Shop / Home)"
                placeholder="Enter drop-off location (street address, city, state)"
                value={dropoffAddress}
                onChange={setDropoffAddress}
                disabled={calculation.isLoading}
              />

              <Button
                onClick={calculateRouteRate}
                disabled={!pickupAddress || !dropoffAddress || calculation.isLoading}
                className="w-full h-13 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                size="lg"
              >
                {calculation.isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Calculating Driving Miles...
                  </>
                ) : (
                  <>
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Instant Estimate
                  </>
                )}
              </Button>

              {calculation.error && (
                <div className="p-3.5 bg-destructive/10 border border-destructive/25 rounded-xl flex items-start gap-2.5 text-xs text-destructive">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>{calculation.error}</span>
                </div>
              )}

              {/* Three-Leg Pricing Formula Explained */}
              <div className="p-5 bg-card/60 border border-border/60 rounded-xl space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-accent" />
                  Standard Three-Leg Rate Schedule
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-background border border-border/40">
                    <span className="text-muted-foreground block text-[11px]">Base Hookup Fee</span>
                    <span className="font-extrabold text-foreground text-sm">${RATES.HOOKUP}.00</span>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">Safety hook & rigging</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-background border border-border/40">
                    <span className="text-muted-foreground block text-[11px]">Loaded Transport</span>
                    <span className="font-extrabold text-foreground text-sm">${RATES.LOADED.toFixed(2)}/mi</span>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">Pickup to drop-off</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-background border border-border/40">
                    <span className="text-muted-foreground block text-[11px]">Enroute Dispatch</span>
                    <span className="font-extrabold text-foreground text-sm">${RATES.ENROUTE.toFixed(2)}/mi</span>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">Benton HQ to pickup</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-background border border-border/40">
                    <span className="text-muted-foreground block text-[11px]">Deadhead Return</span>
                    <span className="font-extrabold text-foreground text-sm">${RATES.DEADHEAD.toFixed(2)}/mi</span>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">Drop-off back to base</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rate Breakdown Result (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-border/70 shadow-xl space-y-6">
            <div>
              <h2 className="text-lg font-bold text-foreground">Estimated Cost Breakdown</h2>
              <p className="text-xs text-muted-foreground">
                {calculation.result ? "Itemized calculation for your trip" : "Enter both addresses to generate estimate"}
              </p>
            </div>

            {calculation.result ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                {/* Visual Route Stepper */}
                <div className="p-4 rounded-xl bg-card border border-border/60 space-y-2.5 text-xs">
                  <div className="font-bold text-foreground flex items-center justify-between pb-2 border-b border-border/40">
                    <span className="flex items-center gap-1.5">
                      <Route className="h-4 w-4 text-primary" /> Route Legs
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Total: {(calculation.result.enrouteMiles + calculation.result.loadedMiles + calculation.result.deadheadMiles).toFixed(1)} miles
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Leg 1: Office → Pickup
                    </span>
                    <span className="font-bold text-foreground">{calculation.result.enrouteMiles} mi</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Leg 2: Loaded Transport
                    </span>
                    <span className="font-bold text-foreground">{calculation.result.loadedMiles} mi</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      Leg 3: Return to Office
                    </span>
                    <span className="font-bold text-foreground">{calculation.result.deadheadMiles} mi</span>
                  </div>
                </div>

                {/* Line Item Prices */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-border/40">
                    <span className="text-muted-foreground">Standard Hookup Fee:</span>
                    <span className="font-semibold text-foreground">${calculation.result.hookupFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/40">
                    <span className="text-muted-foreground">Loaded Rate ({calculation.result.loadedMiles} mi × ${RATES.LOADED}):</span>
                    <span className="font-semibold text-foreground">${calculation.result.loadedRate.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/40">
                    <span className="text-muted-foreground">Enroute Rate ({calculation.result.enrouteMiles} mi × ${RATES.ENROUTE}):</span>
                    <span className="font-semibold text-foreground">${calculation.result.enrouteRate.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/40">
                    <span className="text-muted-foreground">Deadhead Rate ({calculation.result.deadheadMiles} mi × ${RATES.DEADHEAD}):</span>
                    <span className="font-semibold text-foreground">${calculation.result.deadheadRate.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total Box */}
                <div className="p-4 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                      Estimated Total Price
                    </span>
                    <span className="text-3xl font-black text-foreground">
                      ${calculation.result.totalCost.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleCall}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-xl px-4 text-xs"
                  >
                    <Phone className="h-3.5 w-3.5 mr-1" />
                    Book Service
                  </Button>
                </div>

                <p className="text-[11px] text-muted-foreground text-center">
                  * Estimate grounded in driving route distance. Heavy winch extraction or off-road conditions may require special equipment adjustments.
                </p>
              </div>
            ) : (
              <div className="text-center py-12 px-4 rounded-xl bg-card border border-border/50 text-muted-foreground">
                <Truck className="h-10 w-10 mx-auto mb-3 opacity-40 text-primary" />
                <h3 className="font-bold text-sm text-foreground mb-1">Awaiting Route Addresses</h3>
                <p className="text-xs max-w-xs mx-auto">
                  Type your pickup and drop-off destinations to view exact driving miles and transparent pricing.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Insurance Reimbursement Guide Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border/70 shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">
                Need an Itemized Invoice for Roadside Insurance?
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                501 Towing issues comprehensive digital receipts accepted by State Farm, GEICO, Progressive, AAA, USAA, and Allstate for 100% claim reimbursement.
              </p>
            </div>
          </div>
          <Button
            onClick={handleCall}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs rounded-xl flex-shrink-0"
          >
            <Phone className="h-3.5 w-3.5 mr-1.5" />
            (501) 451-2151
          </Button>
        </div>
      </div>
    </div>
  );
}
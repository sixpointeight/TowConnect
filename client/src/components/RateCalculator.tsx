import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calculator, Clock, Truck, Route, ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AddressAutocomplete } from "@/components/ui/address-autocomplete";
import { trackPhoneCall, trackRateCalculation } from "@/lib/analytics";
import { RouteCalculation, RATES } from "@shared/types/maps";

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
      setCalculation(prev => ({ ...prev, error: "Please enter both pickup and drop-off addresses" }));
      return;
    }

    setCalculation({
      isLoading: true,
      error: null,
      result: null,
    });

    try {
      const response = await fetch('/api/maps/calculate-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupAddress,
          dropoffAddress,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to calculate route');
      }

      const routeCalculation: RouteCalculation = await response.json();
      
      setCalculation({
        isLoading: false,
        error: null,
        result: routeCalculation,
      });

      // Track rate calculation
      trackRateCalculation('Route Calculation', routeCalculation.enrouteMiles + routeCalculation.loadedMiles + routeCalculation.deadheadMiles, routeCalculation.totalCost);
    } catch (error) {
      console.error('Error calculating route rate:', error);
      setCalculation({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to calculate route rate',
        result: null,
      });
    }
  };

  const handleCall = () => {
    trackPhoneCall('rate_calculator');
    window.location.href = "tel:+15014512151";
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <Calculator className="h-8 w-8 text-primary" />
          Towing Rate Calculator
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Get an instant, accurate estimate using Google Maps routing. Our three-leg pricing includes pickup, transport, and return to office.
        </p>
        <Badge variant="outline" className="text-sm">
          <Clock className="h-3 w-3 mr-1" />
          Real-time distance calculation with Google Maps
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Address Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="h-5 w-5 text-primary" />
              Route Information
            </CardTitle>
            <CardDescription>
              Enter pickup and drop-off addresses for accurate rate calculation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pickup Address */}
            <AddressAutocomplete
              id="pickup-address"
              label="Pickup Address"
              placeholder="Enter pickup location (street address, city, state)"
              value={pickupAddress}
              onChange={setPickupAddress}
              disabled={calculation.isLoading}
            />

            {/* Drop-off Address */}
            <AddressAutocomplete
              id="dropoff-address"
              label="Drop-off Address"
              placeholder="Enter drop-off location (street address, city, state)"
              value={dropoffAddress}
              onChange={setDropoffAddress}
              disabled={calculation.isLoading}
            />

            {/* Calculate Button */}
            <Button
              onClick={calculateRouteRate}
              disabled={!pickupAddress || !dropoffAddress || calculation.isLoading}
              className="w-full"
              size="lg"
            >
              {calculation.isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Calculating Route...
                </>
              ) : (
                <>
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Rate
                </>
              )}
            </Button>

            {/* Error Display */}
            {calculation.error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-sm text-destructive">{calculation.error}</p>
              </div>
            )}

            {/* Pricing Information */}
            <div className="space-y-2 p-4 bg-muted/50 rounded-md">
              <h4 className="font-medium text-sm mb-2">Rate Structure:</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>• Enroute (Office → Pickup):</span>
                  <span className="font-medium">${RATES.ENROUTE}/mile</span>
                </div>
                <div className="flex justify-between">
                  <span>• Loaded (Pickup → Drop-off):</span>
                  <span className="font-medium">${RATES.LOADED}/mile</span>
                </div>
                <div className="flex justify-between">
                  <span>• Deadhead (Drop-off → Office):</span>
                  <span className="font-medium">${RATES.DEADHEAD}/mile</span>
                </div>
                <div className="flex justify-between border-t pt-1 mt-2">
                  <span>• Hookup Fee:</span>
                  <span className="font-medium">${RATES.HOOKUP}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Rate Breakdown</CardTitle>
            <CardDescription>
              {calculation.result ? "Your calculated route estimate" : "Enter addresses to see detailed pricing"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {calculation.result ? (
              <div className="space-y-4">
                {/* Route Visualization */}
                <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-sm flex items-center gap-2">
                    <Route className="h-4 w-4 text-primary" />
                    Route Breakdown
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>Enroute: Office → Pickup</span>
                      </div>
                      <span className="font-medium">{calculation.result.enrouteMiles} mi</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Loaded: Pickup → Drop-off</span>
                      </div>
                      <span className="font-medium">{calculation.result.loadedMiles} mi</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span>Deadhead: Drop-off → Office</span>
                      </div>
                      <span className="font-medium">{calculation.result.deadheadMiles} mi</span>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between py-2">
                    <span>Enroute ({calculation.result.enrouteMiles} mi × ${RATES.ENROUTE})</span>
                    <span className="font-medium">${calculation.result.enrouteRate.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2">
                    <span>Loaded ({calculation.result.loadedMiles} mi × ${RATES.LOADED})</span>
                    <span className="font-medium">${calculation.result.loadedRate.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2">
                    <span>Deadhead ({calculation.result.deadheadMiles} mi × ${RATES.DEADHEAD})</span>
                    <span className="font-medium">${calculation.result.deadheadRate.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2">
                    <span>Hookup Fee</span>
                    <span className="font-medium">${calculation.result.hookupFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Cost</span>
                      <span className="text-2xl text-primary">${calculation.result.totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button onClick={handleCall} className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Call for Service: (501) 451-2151
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>This is an accurate estimate based on Google Maps routing.</p>
                    <p className="mt-1">Final pricing may vary based on vehicle condition and road conditions.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Truck className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="mb-2">Enter pickup and drop-off addresses above</p>
                <p className="text-xs">We'll calculate the exact route using Google Maps</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contact Banner */}
      <Card className="mt-8 bg-accent/10 border-accent">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-accent-foreground">
              🚨 Need Emergency Service?
            </h3>
            <p className="text-muted-foreground mb-4">
              Available 24/7 for emergency towing and roadside assistance
            </p>
            <Button 
              onClick={handleCall} 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now: (501) 451-2151
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
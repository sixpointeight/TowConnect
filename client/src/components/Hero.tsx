import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_tow_truck_hero_13cb3500.png";

export default function Hero() {
  const handleGetHelp = () => {
    console.log("Get Help Now clicked - scrolling to contact");
    // todo: remove mock functionality
  };

  const handleCall = () => {
    console.log("Emergency call initiated");
    // todo: remove mock functionality
    window.location.href = "tel:+15551234567";
  };

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
      }}
      data-testid="section-hero"
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Reliable Towing
          <span className="block text-accent">24/7 Emergency Service</span>
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Professional towing and roadside assistance when you need it most. 
          Fast response times, fair pricing, and expert service across the metro area.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center text-white">
            <Clock className="h-5 w-5 mr-2 text-accent" />
            <span>24/7 Availability</span>
          </div>
          <div className="flex items-center text-white">
            <MapPin className="h-5 w-5 mr-2 text-accent" />
            <span>Metro-wide Coverage</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleCall}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            data-testid="button-hero-call"
          >
            <Phone className="h-5 w-5 mr-2" />
            (555) 123-TOWING
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={handleGetHelp}
            className="bg-background/20 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            data-testid="button-hero-help"
          >
            Get Help Now
          </Button>
        </div>
      </div>
    </section>
  );
}
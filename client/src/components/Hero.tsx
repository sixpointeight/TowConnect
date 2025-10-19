import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@assets/generated_images/tow_truck_501_towing_2.jpeg";
import heroImage2 from "@assets/generated_images/408-light-trail-highway.png";
import heroImage3 from "@assets/generated_images/501-towing-black-wrecker.png";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleGetHelp = () => {
    console.log("Get Help Now clicked - scrolling to contact");
    // todo: remove mock functionality
  };

  const handleCall = () => {
    console.log("Emergency call initiated");
    // todo: remove mock functionality
    window.location.href = "tel:+15014512151";
  };

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background carousel images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          }}
        />
      ))}
      {/* Content overlay */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          501 Towing & Roadside
          <span className="block text-accent">24/7 Emergency Service</span>
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Professional towing and roadside assistance when you need it most. 
          Fast response times, fair pricing, and expert service across Central Arkansas.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center text-white">
            <Clock className="h-5 w-5 mr-2 text-accent" />
            <span>24/7 Availability</span>
          </div>
          <div className="flex items-center text-white">
            <MapPin className="h-5 w-5 mr-2 text-accent" />
            <span>Central Arkansas Coverage</span>
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
            (501) 451-2151
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
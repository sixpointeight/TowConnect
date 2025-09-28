import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Wrench, Car, Clock, MapPin, Shield } from "lucide-react";
import emergencyImage from "@assets/generated_images/Emergency_roadside_assistance_service_0f19d632.png";

const services = [
  {
    icon: Truck,
    title: "Emergency Towing",
    description: "24/7 emergency towing for breakdowns, accidents, and roadside emergencies",
    features: ["Flatbed & wheel-lift trucks", "Accident recovery", "Long-distance towing"]
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description: "Quick roadside help to get you back on the road fast",
    features: ["Jump start service", "Flat tire changes", "Lockout assistance"]
  },
  {
    icon: Car,
    title: "Vehicle Transport",
    description: "Safe transport for non-running vehicles and specialty cars",
    features: ["Classic car transport", "Motorcycle towing", "Equipment hauling"]
  },
];

export default function Services() {
  const handleLearnMore = (service: string) => {
    console.log(`Learn more about ${service} service`);
    // todo: remove mock functionality
  };

  return (
    <section id="services" className="py-16 bg-muted/30" data-testid="section-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional towing and roadside assistance services designed to help you 
            when you need it most. Available 24/7 throughout the metro area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleLearnMore(service.title)}
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Choose Reliable Towing?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Fast Response Times</h4>
                  <p className="text-muted-foreground text-sm">
                    Average response time under 30 minutes for emergency calls
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Fully Licensed & Insured</h4>
                  <p className="text-muted-foreground text-sm">
                    Complete insurance coverage for your peace of mind
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Metro-wide Coverage</h4>
                  <p className="text-muted-foreground text-sm">
                    Serving the entire metropolitan area and surrounding regions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={emergencyImage}
              alt="Emergency roadside assistance"
              className="rounded-lg shadow-lg w-full"
              data-testid="img-emergency-service"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
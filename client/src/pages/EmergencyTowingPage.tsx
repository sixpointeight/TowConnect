import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Clock, Shield, Phone, CheckCircle, MapPin, AlertTriangle, Wrench } from "lucide-react";
import { trackPhoneCall, trackServiceInterest } from "@/lib/analytics";
import emergencyImage from "@assets/generated_images/Emergency_roadside_assistance_service_0f19d632.png";

export default function EmergencyTowingPage() {
  const handleCall = () => {
    trackPhoneCall('emergency_towing_page');
    window.location.href = "tel:+15014512151";
  };

  const handleServiceInquiry = () => {
    trackServiceInterest('emergency_towing_inquiry');
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const emergencyServices = [
    {
      icon: Truck,
      title: "Flatbed Towing",
      description: "Safest method for all-wheel drive and luxury vehicles",
      details: ["Protects transmission", "Prevents tire damage", "Weather protected"]
    },
    {
      icon: Wrench,
      title: "Wheel-Lift Towing",
      description: "Quick and efficient for front or rear-wheel drive cars",
      details: ["Fast deployment", "Cost effective", "Suitable for most vehicles"]
    },
    {
      icon: AlertTriangle,
      title: "Accident Recovery",
      description: "Specialized equipment for accident scenes and recoveries",
      details: ["Winch services", "Heavy duty recovery", "Scene cleanup assistance"]
    },
    {
      icon: MapPin,
      title: "Long-Distance Towing",
      description: "Reliable transport anywhere in Arkansas and beyond",
      details: ["Interstate towing", "Cross-state transport", "Secure tie-downs"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Fast Response Times",
      description: "Average response time under 30 minutes for emergency calls"
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete insurance coverage for your peace of mind"
    },
    {
      icon: MapPin,
      title: "State-wide Coverage",
      description: "Serving central Arkansas and surrounding areas"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-primary mr-3" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Emergency Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                24/7 Emergency Towing Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                When you're stranded on the road, every minute counts. Our emergency towing service 
                provides fast, reliable assistance with professional flatbed and wheel-lift trucks 
                available around the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  data-testid="button-emergency-call-hero"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (501) 451-2151
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleServiceInquiry}
                  data-testid="button-get-quote"
                >
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={emergencyImage}
                alt="Emergency towing service"
                className="rounded-lg shadow-xl w-full"
                data-testid="img-emergency-towing-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-accent text-accent-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <p className="font-semibold">
              In an emergency? Don't wait - call us immediately at (501) 451-2151
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Towing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional emergency towing with the right equipment for every situation. 
              Our fleet is equipped to handle any vehicle safely and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose 501 Towing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When you need emergency towing, you need a service you can trust. 
              Here's what makes us the preferred choice in central Arkansas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center" data-testid={`feature-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What to Do in an Emergency</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stay Safe</h4>
                    <p className="text-muted-foreground">
                      Pull over safely, turn on hazard lights, and move away from traffic if possible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Call Us Immediately</h4>
                    <p className="text-muted-foreground">
                      Dial (501) 451-2151 and provide your location and situation details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Wait in a Safe Location</h4>
                    <p className="text-muted-foreground">
                      Stay inside your vehicle or move to a safe area away from traffic while we respond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-accent" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-2xl font-bold mb-2">(501) 451-2151</p>
                  <p className="text-muted-foreground mb-6">Available 24/7 for emergencies</p>
                  <Button
                    size="lg"
                    onClick={handleCall}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    data-testid="button-emergency-call-contact"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
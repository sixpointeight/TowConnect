import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Shield, 
  Battery, 
  Car, 
  Key, 
  Wrench,
  Fuel,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { trackPhoneCall, trackServiceInterest } from "@/lib/analytics";
import emergencyImage from "@assets/generated_images/Emergency_roadside_assistance_service_0f19d632.png";

const roadsideServices = [
  {
    icon: Battery,
    title: "Jump Start Service",
    description: "Dead battery? We'll get you started quickly and safely",
    features: ["Professional equipment", "Safe jump procedures", "Battery testing available"],
    response: "15-30 minutes"
  },
  {
    icon: Car,
    title: "Flat Tire Change",
    description: "Tire troubles solved with professional tire changing service",
    features: ["Spare tire installation", "Lug nut safety check", "Tire pressure adjustment"],
    response: "20-35 minutes"
  },
  {
    icon: Key,
    title: "Lockout Assistance",
    description: "Locked out of your vehicle? We'll get you back in safely",
    features: ["Non-damage entry methods", "All vehicle types", "Key replacement referrals"],
    response: "15-25 minutes"
  },
  {
    icon: Fuel,
    title: "Emergency Fuel Delivery",
    description: "Ran out of gas? We'll bring fuel directly to your location",
    features: ["Clean fuel delivery", "Multiple fuel types", "Emergency containers included"],
    response: "20-40 minutes"
  },
  {
    icon: Wrench,
    title: "Minor Mechanical Issues",
    description: "Basic mechanical problems resolved on-site when possible",
    features: ["Belt repairs", "Hose connections", "Fluid top-offs"],
    response: "30-60 minutes"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Assistance",
    description: "Accident scene support and emergency coordination",
    features: ["Scene safety", "Traffic control", "Emergency services coordination"],
    response: "10-20 minutes"
  }
];

const coverageAreas = [
  "Little Rock",
  "North Little Rock", 
  "Conway",
  "Benton",
  "Bryant",
  "Cabot",
  "Sherwood",
  "Jacksonville",
  "Maumelle",
  "Hot Springs"
];

const emergencySteps = [
  {
    step: 1,
    title: "Stay Safe",
    description: "Pull over safely, turn on hazard lights, and exit the vehicle if it's safe to do so"
  },
  {
    step: 2,
    title: "Call Us",
    description: "Dial (501) 451-2151 immediately for 24/7 emergency roadside assistance"
  },
  {
    step: 3,
    title: "Provide Location",
    description: "Share your exact location, vehicle details, and nature of the problem"
  },
  {
    step: 4,
    title: "Wait Safely",
    description: "Stay in a safe location away from traffic while our team responds"
  }
];

export default function RoadsideAssistancePage() {
  const handleEmergencyCall = () => {
    trackPhoneCall('roadside_emergency_button');
    window.location.href = "tel:+15014512151";
  };

  const handleServiceInterest = (serviceName: string) => {
    trackServiceInterest(`roadside_${serviceName.toLowerCase().replace(' ', '_')}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent-foreground">
                24/7 Emergency Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Roadside Assistance
                <span className="text-accent block">When You Need It Most</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Professional roadside assistance available 24/7 throughout the Little Rock metro area. 
                From dead batteries to flat tires, we'll get you back on the road quickly and safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={handleEmergencyCall}
                  data-testid="button-hero-emergency-call"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (501) 451-2151
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#services">View Services</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={emergencyImage}
                alt="Professional roadside assistance service"
                className="rounded-lg shadow-xl w-full"
                data-testid="img-hero-roadside"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Always Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">&lt;30min</div>
              <div className="text-sm text-muted-foreground">Average Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16" data-testid="section-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadside Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive roadside assistance services to handle any emergency situation. 
              Our certified technicians are equipped to help with all common roadside issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadsideServices.map((service, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      Response: {service.response}
                    </div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4 justify-between"
                      onClick={() => handleServiceInterest(service.title)}
                      data-testid={`button-service-${index}`}
                    >
                      Need This Service?
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Emergency Procedures</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these steps when you experience a roadside emergency to ensure your safety 
              and get the help you need as quickly as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencySteps.map((step, index) => (
              <Card key={index} className="text-center" data-testid={`card-step-${index}`}>
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleEmergencyCall}
              data-testid="button-procedures-emergency-call"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (501) 451-2151
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Coverage Area</h2>
              <p className="text-muted-foreground mb-8">
                We provide comprehensive roadside assistance throughout the Little Rock metropolitan 
                area and surrounding communities. Our strategically located dispatch centers ensure 
                rapid response times across our entire service territory.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-accent mr-3" />
                  <span className="font-medium">Fully licensed and insured in all service areas</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-3" />
                  <span className="font-medium">GPS tracking for accurate location identification</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-accent mr-3" />
                  <span className="font-medium">Average response time under 30 minutes</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Cities We Serve:</h3>
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((city, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2"
                    data-testid={`badge-city-${index}`}
                  >
                    {city}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Don't see your city listed? Give us a call - we may still be able to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Roadside Assistance Now?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait when you're stranded. Our professional roadside assistance team is 
            standing by 24/7 to help you get back on the road safely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleEmergencyCall}
              data-testid="button-cta-emergency-call"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Emergency Line: (501) 451-2151
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/rate-calculator">Get Service Estimate</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-accent" />
              Licensed & Insured
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-accent" />
              24/7 Availability
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-accent" />
              Professional Service
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
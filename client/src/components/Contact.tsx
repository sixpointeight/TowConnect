import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmission, trackPhoneCall } from "@/lib/analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmission('contact_request');
    
    toast({
      title: "Request Received",
      description: "We'll contact you within 30 minutes for emergency services.",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      message: "",
    });
  };

  const handleEmergencyCall = () => {
    trackPhoneCall('contact_emergency_button');
    window.location.href = "tel:+15014512151";
  };

  return (
    <section id="contact" className="py-16 bg-muted/30" data-testid="section-contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Help Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Need immediate assistance? Call our emergency line or fill out the form 
            below and we'll contact you right away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Request Service</CardTitle>
              <CardDescription>
                Fill out this form for non-emergency requests or to get a quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="location">Current Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Street address or nearest intersection"
                    required
                    data-testid="input-location"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Describe Your Situation *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What type of service do you need? Any vehicle details?"
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button type="submit" className="w-full" data-testid="button-submit-request">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Emergency Call Card */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle className="text-accent">🚨 Emergency Service</CardTitle>
                <CardDescription>
                  For immediate roadside assistance and emergency towing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  onClick={handleEmergencyCall}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  data-testid="button-emergency-call-contact"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (501) 451-2151
                </Button>
                <p className="text-sm text-center mt-3 text-muted-foreground">
                  Average response time: Under 30 minutes
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Emergency Line</p>
                    <p className="text-muted-foreground">(501) 451-2151</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">fiveoonetowing@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">600 S. East Street, Benton, AR 72015</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">24/7 Emergency Service</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
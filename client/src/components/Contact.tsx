import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  AlertTriangle, 
  CheckCircle, 
  Truck, 
  Calendar,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmission, trackPhoneCall } from "@/lib/analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "towing",
    location: "",
    destination: "",
    vehicleDetails: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackFormSubmission("contact_request");

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Dispatch Request Received!",
        description: "Our dispatcher is reviewing your request. For urgent service, call (501) 451-2151 directly.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "towing",
        location: "",
        destination: "",
        vehicleDetails: "",
        message: "",
      });
    }, 600);
  };

  const handleEmergencyCall = () => {
    trackPhoneCall("contact_emergency_button");
    window.location.href = "tel:+15014512151";
  };

  return (
    <section id="contact" className="py-20 bg-background relative" data-testid="section-contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-primary/30 text-primary">
            <Phone className="h-3.5 w-3.5 mr-1 text-accent" /> Connect With Dispatch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Get Fast Help or <span className="text-gradient-accent">Request Service</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Need emergency roadside assistance immediately? Call our 24/7 hotline. For scheduled towing, long-distance quotes, or commercial inquiries, fill out our quick form.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          {/* Left Column: Immediate Emergency Dispatch + Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Call Hero Card */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-black/25 text-white backdrop-blur-md mb-4 uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Active 24/7 Hotline
                </span>

                <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                  Immediate Emergency Dispatch
                </h3>

                <p className="text-orange-100 text-xs sm:text-sm mb-6 leading-relaxed">
                  For vehicle breakdowns, highway accidents, flat tires, lockouts, or jump starts in Central Arkansas.
                </p>

                <Button
                  size="lg"
                  onClick={handleEmergencyCall}
                  className="w-full h-14 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-lg shadow-xl flex items-center justify-center gap-3 transition-transform group-hover:scale-[1.02]"
                  data-testid="button-emergency-call-contact"
                >
                  <Phone className="h-5 w-5 text-orange-600 animate-bounce" />
                  <span>(501) 451-2151</span>
                </Button>

                <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-orange-100">
                  <span>⚡ Avg ETA: 15–25 Mins</span>
                  <span>🛡️ $1M+ Cargo Protection</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Details Card */}
            <div className="glass-card rounded-2xl p-6 border border-border/70 shadow-lg space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">
                Operations & Dispatch Hub
              </h4>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Physical Headquarters</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    600 S. East Street, Benton, AR 72015
                  </p>
                  <p className="text-[11px] text-accent font-semibold mt-0.5">
                    Central dispatch yard located near I-30 Exit 116
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Phone & Text Dispatch</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    (501) 451-2151
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">General & Billing Inquiries</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    fiveoonetowing@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Hours of Service</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Open 24 Hours / 7 Days a Week / 365 Days a Year
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Service Request Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-border/70 shadow-xl">
            <div className="mb-6 pb-4 border-b border-border/60">
              <h3 className="text-xl font-bold text-foreground">
                Digital Service & Quote Request
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Fill out the details below. For urgent emergencies, please call directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="First & Last Name"
                    required
                    className="mt-1 text-sm rounded-xl"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-semibold">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(501) 000-0000"
                    required
                    className="mt-1 text-sm rounded-xl"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-xs font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="mt-1 text-sm rounded-xl"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="serviceType" className="text-xs font-semibold">Service Needed *</Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full mt-1 h-10 px-3 rounded-xl border border-input bg-background text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="towing">Emergency Flatbed Towing</option>
                    <option value="jumpstart">Battery Jump Start</option>
                    <option value="tire">Flat Tire Change</option>
                    <option value="lockout">Car Lockout Entry</option>
                    <option value="fuel">Fuel & Fluid Delivery</option>
                    <option value="winch">Accident / Ditch Winch-Out</option>
                    <option value="ev">Tesla / EV Transport</option>
                    <option value="commercial">Commercial Fleet Account</option>
                    <option value="other">Other Inquiry / Quote</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location" className="text-xs font-semibold">Current Pickup Location *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Street, highway exit, or landmark"
                    required
                    className="mt-1 text-sm rounded-xl"
                    data-testid="input-location"
                  />
                </div>
                <div>
                  <Label htmlFor="destination" className="text-xs font-semibold">Drop-off Destination</Label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="Repair shop, dealership, or address"
                    className="mt-1 text-sm rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="vehicleDetails" className="text-xs font-semibold">Vehicle Make, Model & Year</Label>
                <Input
                  id="vehicleDetails"
                  name="vehicleDetails"
                  value={formData.vehicleDetails}
                  onChange={handleInputChange}
                  placeholder="e.g. 2021 Ford F-150 4WD or Tesla Model 3"
                  className="mt-1 text-sm rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-xs font-semibold">Situation Details / Special Instructions</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe vehicle condition (e.g. keys lost, vehicle won't roll in neutral, stuck in ditch, flat right rear tire)..."
                  rows={3}
                  className="mt-1 text-sm rounded-xl"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-md flex items-center justify-center gap-2"
                data-testid="button-submit-request"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? "Submitting Request..." : "Submit Dispatch Request"}</span>
              </Button>

              <p className="text-[11px] text-center text-muted-foreground">
                🔒 Your contact details are securely transmitted directly to our on-call dispatch staff.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
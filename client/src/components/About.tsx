import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Truck } from "lucide-react";
import teslaImage from "@assets/generated_images/501_towing_loading_tesla.png";
import technicianImage from "@assets/generated_images/Professional_towing_technician_c412a32f.png";

const stats = [
  { icon: Clock, number: "15+", label: "Years Experience" },
  { icon: Users, number: "5,000+", label: "Customers Served" },
  { icon: Award, number: "24/7", label: "Emergency Service" },
];

export default function About() {
  return (
    <section id="about" className="py-16" data-testid="section-about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About 501 Towing & Roadside</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted local towing company with over 15 years of experience 
            serving the community with professional, reliable service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-elevate" data-testid={`card-stat-${index}`}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                501 Towing & Roadside started as a small family business with 
                a simple mission: provide fast, professional towing services when people 
                need help the most.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've grown into the most trusted towing company in Central Arkansas, 
                but we've never lost sight of our core values: reliability, professionalism, 
                and customer care.
              </p>
              <p className="text-muted-foreground">
                Today, our fleet of modern towing vehicles and trained technicians are ready 
                to help 24 hours a day, 7 days a week.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="secondary">Licensed</Badge>
              <Badge variant="secondary">Insured</Badge>
            </div>
          </div>
          <div className="relative">
            <img
              src={teslaImage}
              alt="501 Towing loading a Tesla"
              className="rounded-lg shadow-lg w-full"
              data-testid="img-company-fleet"
            />
          </div>
        </div>

        {/* Team Member */}
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
              <img
                src={technicianImage}
                alt="Professional technician"
                className="w-full h-full object-cover"
                data-testid="img-team-member"
              />
            </div>
            <h4 className="font-semibold mb-2">Mike Johnson</h4>
            <p className="text-sm text-muted-foreground mb-3">Lead Technician & Operations Manager</p>
            <p className="text-sm text-muted-foreground">
              "We treat every customer like family. When you're stranded, we're here to help."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
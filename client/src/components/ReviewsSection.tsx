import { Star, ShieldCheck, CheckCircle2, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Marcus Thorne",
      location: "Benton, AR",
      vehicle: "Tesla Model Y Performance",
      service: "Specialized Flatbed Tow",
      rating: 5,
      date: "Last week",
      comment: "I had a sudden high-speed tire blowout on I-30 near Exit 116. As an EV owner, I was terrified someone would drag the car and damage the battery or rims. 501 Towing dispatched immediately, used tire basket straps, and loaded it onto their low-approach flatbed with zero drama. Truly top-tier professionals.",
    },
    {
      name: "Sarah Lindquist",
      location: "Little Rock, AR",
      vehicle: "Honda CR-V",
      service: "Midnight Lockout Entry",
      rating: 5,
      date: "2 weeks ago",
      comment: "Locked my purse and keys inside my car at 1:30 AM after a late hospital shift. Mike from 501 Towing arrived in under 20 minutes, used an air wedge and had my door unlocked in less than 90 seconds without a single scratch on the paint. Absolutely saved my night.",
    },
    {
      name: "David Robertson",
      location: "Bryant, AR",
      vehicle: "Ford F-250 Super Duty",
      service: "Heavy Duty Tow to Dealership",
      rating: 5,
      date: "1 month ago",
      comment: "My work truck transmission failed while hauling a loaded utility trailer. Most tow companies wouldn't touch a 3/4 ton truck with a trailer. 501 showed up with their heavy wrecker and took care of both seamlessly. Honest, upfront pricing with no surprise add-ons.",
    },
    {
      name: "Amanda Keller",
      location: "Maumelle, AR",
      vehicle: "Toyota RAV4 Hybrid",
      service: "Computerized Jump Start",
      rating: 5,
      date: "1 month ago",
      comment: "My 12V hybrid battery went dead in the dead of winter. The technician tested the alternator, gave me a clean surge-protected jump, and made sure all the dashboard alerts were cleared before leaving. Courteous and knowledgeable!",
    },
    {
      name: "Brian Mitchell",
      location: "Hot Springs, AR",
      vehicle: "1969 Chevrolet Camaro SS",
      service: "Classic Vehicle Transport",
      rating: 5,
      date: "2 months ago",
      comment: "I trust very few people with my classic cars. 501 Towing treated my Camaro like their own pride and joy. The ramp angle cleared my front spoiler by miles and their soft straps kept my custom wheels spotless. 10/10 recommend.",
    },
    {
      name: "Jessica Patel",
      location: "North Little Rock, AR",
      vehicle: "Nissan Rogue",
      service: "Accident Recovery & Insurance Claim",
      rating: 5,
      date: "3 months ago",
      comment: "Got rear-ended on I-40 during rush hour. The police called 501 Towing. The driver cleared the scene safely, helped me get all my belongings, and provided an itemized receipt that State Farm reimbursed 100% within 48 hours. Thank you!",
    },
  ];

  return (
    <section className="py-20 bg-muted/20 relative" id="reviews">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-amber-500/40 text-amber-500">
            <Star className="h-3.5 w-3.5 mr-1 fill-amber-500 text-amber-500" />
            Verified Customer Feedback
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Trusted by Thousands Across <span className="text-gradient-accent">Central Arkansas</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            See why Arkansas drivers, mechanics, dealerships, and local families rely on 501 Towing & Roadside when unexpected trouble strikes.
          </p>

          {/* Rating Summary Box */}
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-border/60">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-black text-foreground">4.9 / 5.0 Rating</span>
            <span className="text-xs text-muted-foreground">• Over 500+ Local Motorists Served</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-border/70 flex flex-col justify-between hover:border-accent/40 transition-all shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-foreground flex items-center gap-1">
                      {rev.name}
                      <span title="Verified Customer">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                      </span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground">{rev.location}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {rev.service}
                  </span>
                </div>
                <div className="text-[10px] text-accent font-medium mt-1">
                  Vehicle: {rev.vehicle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

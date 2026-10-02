import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall } from "@/lib/analytics";
import { Link } from "wouter";

export default function FAQSection() {
  const faqs = [
    {
      q: "How quickly can a 501 Towing truck arrive at my breakdown location?",
      a: "Our average emergency arrival time is between 15 and 30 minutes in Benton, Bryant, and Little Rock. Because our trucks are strategically stationed near major arteries including I-30, I-430, and Highway 5, we can route the closest available unit with live GPS dispatch.",
    },
    {
      q: "Can you safely tow electric vehicles like Teslas and hybrids?",
      a: "Yes! All-electric vehicles require specialized rollback flatbed transport because their electric motors cannot spin freely without generating hazardous electrical feedback or overheating. We carry low-approach flatbeds, auxiliary battery booster bridges to unlock electronic gear selectors (Tow Mode), and 8-point nylon tire basket straps that avoid any rim or suspension contact.",
    },
    {
      q: "How does your three-leg towing rate calculation work?",
      a: "Unlike companies that hit you with surprise fees upon arrival, we calculate your total price transparently using Google Maps routing. It includes: (1) Enroute miles from our Benton dispatch center to your vehicle ($1.75/mi), (2) Loaded miles carrying your vehicle to your destination ($4.00/mi), (3) Deadhead miles for our truck returning to base ($1.50/mi), plus our flat $85.00 hookup fee. You can test your exact route anytime on our Towing Rate Calculator.",
    },
    {
      q: "Will my auto insurance or roadside plan (AAA, State Farm, GEICO, etc.) reimburse the tow?",
      a: "Yes. Almost all comprehensive or roadside insurance policies cover towing and roadside assistance under reimbursement terms. When our driver completes your service, we provide an itemized digital receipt detailing date, time, pickup/drop-off addresses, vehicle VIN, and line-item charges. You simply upload this invoice through your insurance app or agent for rapid reimbursement.",
    },
    {
      q: "What payment methods do you accept on-scene?",
      a: "Every 501 Towing driver is equipped with a secure mobile card reader. We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), contactless mobile pay (Apple Pay, Google Pay), company checks (for established commercial fleet accounts), and cash.",
    },
    {
      q: "Can you transport lowered sports cars, classic cars, or commercial dually pickups?",
      a: "Absolutely. Our fleet includes hydraulic rollback flatbeds with ultra-shallow 10-degree loading angles, ensuring zero bumper or splitter contact on lowered cars. For heavy dual-rear-wheel trucks, work vans, and machinery, our medium-duty wreckers and high-tonnage decks handle the weight safely.",
    },
    {
      q: "What information should I have ready when calling dispatch?",
      a: "To get a truck to you as fast as possible, please provide: (1) Your approximate location (cross street, highway mile marker, or business landmark), (2) Vehicle year, make, model, and color, (3) The nature of the problem (e.g., won't start, collision damage, flat tire, lockout), and (4) Where you'd like the car transported.",
    },
    {
      q: "Are you open on weekends, major holidays, and during severe Arkansas storms?",
      a: "Yes, 501 Towing operates 24 hours a day, 365 days a year without exception. Inclement weather—including ice, flash flooding, high winds, and severe thunderstorms—is when motorists need help most. Our operators are on standby around the clock.",
    },
  ];

  const handleCall = () => {
    trackPhoneCall("faq_section_call");
    window.location.href = "tel:+15014512151";
  };

  return (
    <section className="py-20 bg-background relative" id="faq">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold border-primary/30 text-primary">
            <HelpCircle className="h-3.5 w-3.5 mr-1 text-accent" /> Helpful Answers
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Got questions about towing procedures, insurance claims, EV handling, or pricing? Find clear answers below or call our 24/7 dispatch desk.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-border/70 shadow-xl mb-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/60 rounded-xl px-4 bg-card/60 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-sm sm:text-base py-4 hover:no-underline hover:text-accent transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Need More Help Box */}
        <div className="max-w-xl mx-auto text-center glass-card rounded-2xl p-6 border border-border/60">
          <h3 className="text-base font-bold text-foreground mb-1">
            Have a unique situation or need commercial contract towing?
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Our dispatch managers can answer questions and book customized vehicle relocations.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={handleCall}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs"
            >
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              Call Dispatch: (501) 451-2151
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-xs font-semibold"
            >
              <Link href="/rate-calculator">
                Calculate Rate <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";
import {
  FileText,
  Calculator,
  Truck,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import { trackPhoneCall } from "@/lib/analytics";

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 31, 2026";

  useEffect(() => {
    updatePageMeta({
      title: "Terms & Conditions | 501 Towing & Roadside Service LLC",
      description:
        "Review the Terms and Conditions for 501 Towing & Roadside Service LLC, including three-leg towing rate estimates, service authorization, EV transport procedures, payment terms, and Arkansas governing law.",
      canonicalUrl: "https://fiveoonetowing.com/terms-and-conditions",
    });

    setStructuredData("terms-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  const handleCall = () => {
    trackPhoneCall("terms_page_call");
    window.location.href = "tel:+15014512151";
  };

  const summaryCards = [
    {
      icon: Calculator,
      title: "Transparent Rate Estimates",
      desc: "Online calculator quotes reflect standard road-surface flatbed towing using Google Maps three-leg mileage.",
    },
    {
      icon: CheckCircle2,
      title: "Owner Authorization",
      desc: "By requesting dispatch, you confirm you are the registered owner or an authorized representative of the vehicle.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "Operated under Arkansas Towing & Recovery Board regulations with $1,000,000+ On-Hook Cargo & Liability coverage.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-slate-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-xs font-bold border-amber-500/40 text-amber-400 bg-amber-500/10"
          >
            <FileText className="h-3.5 w-3.5 mr-1.5" /> Service Agreement & Website Terms
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Terms & <span className="text-gradient-accent">Conditions</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            Please read these Terms and Conditions ("Terms") carefully before using{" "}
            <span className="text-white font-semibold">fiveoonetowing.com</span>, calculating a towing rate estimate, or dispatching a service truck from 501 Towing & Roadside Service LLC ("501 Towing," "we," "our," or "us").
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Effective & Last Updated: <strong className="text-white">{lastUpdated}</strong>
            </span>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {summaryCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-border/70 shadow-md"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-bold text-base text-foreground mb-1.5">
                    {card.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Terms Document Body */}
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-border/70 shadow-xl space-y-8 text-sm text-muted-foreground leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <FileText className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  1. Acceptance of Terms & Scope of Services
                </h2>
              </div>
              <p>
                By accessing <strong className="text-foreground">fiveoonetowing.com</strong>, submitting an online dispatch request, or authorizing towing or roadside assistance by phone, SMS, or in person, you agree to be bound by these Terms and Conditions.
              </p>
              <p>
                501 Towing & Roadside Service LLC provides 24/7 emergency flatbed towing, electric vehicle (EV) transport, accident recovery, winching, battery jump starts, non-destructive vehicle lockout entry, tire changes, and emergency fuel delivery throughout Benton, Bryant, Little Rock, Saline County, Pulaski County, and Central Arkansas.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Section 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Calculator className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  2. Towing Rate Calculator & Pricing Estimates
                </h2>
              </div>
              <p>
                Our website features an interactive Towing Rate Calculator powered by Google Maps routing to provide upfront transparency. Standard rate estimates are calculated using our three-leg mileage formula from our dispatch headquarters at <strong className="text-foreground">600 S. East Street, Benton, AR 72015</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Base Hookup Fee ($85.00):</strong> Standard flatbed hookup and 8-point soft-strap securement for an accessible passenger vehicle able to roll into neutral.
                </li>
                <li>
                  <strong className="text-foreground">Leg 1 – Enroute Mileage ($1.75/mile):</strong> Driving distance from our Benton dispatch yard to your pickup location.
                </li>
                <li>
                  <strong className="text-foreground">Leg 2 – Loaded Mileage ($4.00/mile):</strong> Driving distance transporting your vehicle from the pickup location to your designated drop-off destination.
                </li>
                <li>
                  <strong className="text-foreground">Leg 3 – Deadhead Return Mileage ($1.50/mile):</strong> Driving distance for the tow truck to return to our Benton dispatch base after drop-off.
                </li>
              </ul>
              <p>
                <strong className="text-foreground">Important Estimate Disclaimer:</strong> Online rate calculations are good-faith estimates for standard, unobstructed paved-surface flatbed tows. Additional labor or equipment charges may apply if on-scene conditions differ from standard pickup assumptions—such as off-road ditch winching, mud/ice extraction, severe collision damage, missing wheels/axles, locked transmissions or immobilized parking brakes requiring wheel skates/dollies, low-clearance parking garages, highway detour closures, or extended on-scene wait times requested by the customer. Our dispatcher or operator will communicate any applicable specialty equipment or recovery fees prior to performing additional work.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Section 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Truck className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  3. Customer Authorization, Lockouts & Safety Protocols
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Authority to Request Service:</strong> By requesting towing or roadside service, you represent and warrant that you are the legal owner, lessee, or authorized agent of the vehicle Owner.
                </li>
                <li>
                  <strong className="text-foreground">Lockout & Proof of Ownership:</strong> For vehicle lockout services, our technician may require valid photo identification and proof of vehicle ownership or registration (which may be verified immediately upon unlocking the vehicle).
                </li>
                <li>
                  <strong className="text-foreground">Passenger & Scene Safety:</strong> Due to federal and commercial motor carrier insurance regulations, customers may be required to arrange separate passenger transport if truck cab seating is unavailable or if highway safety conditions dictate. While on scene, customers and passengers must remain clear of hydraulic beds, winch cables, and active traffic lanes as directed by our operator.
                </li>
                <li>
                  <strong className="text-foreground">Personal Property Inside Vehicles:</strong> 501 Towing is not responsible for loose personal belongings, cash, electronics, firearms, or aftermarket valuables left unsecured inside a towed vehicle. Please remove high-value personal items prior to transport whenever safe to do so.
                </li>
              </ul>
            </div>

            <hr className="border-border/60" />

            {/* Section 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Zap className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  4. Electric Vehicles (EVs), Mechanical Condition & Pre-Existing Damage
                </h2>
              </div>
              <p>
                501 Towing utilizes WreckMaster and EV-safe flatbed loading procedures, including 8-point nylon tire harnesses, low-angle rollback beds, wheel skates, and 12V auxiliary power bridges to engage Transport/Tow Mode.
              </p>
              <p>
                However, the customer acknowledges that disabled, wrecked, rusted, mechanically modified, or severely discharged vehicles may have latent structural or electrical defects. 501 Towing is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-existing mechanical, drivetrain, battery, suspension, or body damage present prior to hookup.</li>
                <li>Damage resulting from corroded frame/recovery points, loose aftermarket body kits or splitters, or rotten tires failing during winching or transport.</li>
                <li>Electronic module resets, dead 12V/high-voltage battery cells, or alternator failures discovered during or after a surge-protected battery jump start.</li>
              </ul>
            </div>

            <hr className="border-border/60" />

            {/* Section 5 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <CreditCard className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  5. Payment Terms, Cancellations & Insurance Reimbursement
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Payment Due Upon Service:</strong> Unless prior commercial fleet billing or direct motor club dispatch has been arranged and verified by our office, full payment is due upon completion of the roadside service or upon delivery of the towed vehicle.
                </li>
                <li>
                  <strong className="text-foreground">Accepted Payment Methods:</strong> We accept major credit and debit cards (Visa, MasterCard, American Express, Discover), Apple Pay, Google Pay, cash, and approved commercial account checks.
                </li>
                <li>
                  <strong className="text-foreground">Insurance Reimbursement Invoices:</strong> Upon payment, we provide a comprehensive itemized digital receipt including VIN, pickup/drop-off addresses, mileage breakdown, and timestamps so you can submit it to your auto insurance company or roadside plan for reimbursement.
                </li>
                <li>
                  <strong className="text-foreground">Cancellation & Dry-Run Policy:</strong> If you need to cancel a dispatch request, please call <strong className="text-foreground">(501) 451-2151</strong> immediately. If a tow truck has already been dispatched and incurred enroute mileage or arrived on scene prior to cancellation ("dry run"), a reasonable dispatch/enroute fee may apply to cover fuel and operator time.
                </li>
              </ul>
            </div>

            <hr className="border-border/60" />

            {/* Section 6 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  6. Insurance Coverage, Claims & Limitation of Liability
                </h2>
              </div>
              <p>
                501 Towing & Roadside Service LLC is licensed by the Arkansas Towing & Recovery Board and maintains over $1,000,000 in commercial liability and On-Hook Cargo Insurance.
              </p>
              <p>
                In the unlikely event you believe damage occurred during hookup or transport, you must notify the operator or our dispatch office at <strong className="text-foreground">(501) 451-2151</strong> at the time of delivery (or within 24 hours for unattended after-hours shop drop-offs) and allow 501 Towing to inspect and photograph the vehicle prior to any repairs being performed.
              </p>
              <p>
                To the maximum extent permitted by Arkansas law, 501 Towing shall not be liable for indirect, incidental, consequential, or special damages—including lost wages, missed appointments, rental car expenses, or delays caused by traffic, severe weather, highway closures, or law enforcement directives.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Section 7 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Scale className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  7. Website Intellectual Property & Governing Law
                </h2>
              </div>
              <p>
                All text, logos, photography, custom graphics, rate calculator software, and design elements on <strong className="text-foreground">fiveoonetowing.com</strong> are the property of 501 Towing & Roadside Service LLC and may not be reproduced or scraped without written permission.
              </p>
              <p>
                These Terms and any dispute arising out of our website or towing services shall be governed by and construed in accordance with the laws of the <strong className="text-foreground">State of Arkansas</strong> and the rules of the Arkansas Towing & Recovery Board, with exclusive venue in the state or federal courts serving <strong className="text-foreground">Saline County, Arkansas</strong>.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Section 8 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  8. Contact Information
                </h2>
              </div>
              <p>
                For questions regarding these Terms and Conditions, commercial towing accounts, or billing support, please contact us:
              </p>
              <div className="rounded-xl bg-muted/60 border border-border/60 p-5 space-y-2 text-xs sm:text-sm">
                <p className="font-bold text-foreground text-base">
                  501 Towing & Roadside Service LLC
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>600 S. East Street, Benton, AR 72015</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <a
                    href="tel:+15014512151"
                    className="font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    (501) 451-2151
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <a
                    href="mailto:fiveoonetowing@gmail.com"
                    className="font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    fiveoonetowing@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20 text-center">
            <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2">
              Ready to Calculate Your Rate or Request a Tow?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
              Get an instant three-leg mileage quote online or speak directly with our 24/7 Benton & Little Rock dispatch desk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-black text-sm px-6 rounded-xl shadow-lg"
                data-testid="button-terms-call"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call (501) 451-2151
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl text-sm font-bold">
                <Link href="/rate-calculator">
                  <Calculator className="h-4 w-4 mr-2 text-accent" />
                  Open Rate Calculator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


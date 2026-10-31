import { useEffect } from "react";
import { Link } from "wouter";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  MapPin,
  Cookie,
  UserCheck,
  Phone,
  Mail,
  FileText,
  Clock,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { updatePageMeta, setStructuredData, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import { trackPhoneCall } from "@/lib/analytics";

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 31, 2026";

  useEffect(() => {
    updatePageMeta({
      title: "Privacy Policy | 501 Towing & Roadside Service LLC",
      description:
        "Learn how 501 Towing & Roadside Service LLC collects, uses, and protects your personal, vehicle, and location data across our website, rate calculator, and dispatch operations in Central Arkansas.",
      canonicalUrl: "https://fiveoonetowing.com/privacy-policy",
    });

    setStructuredData("privacy-business-schema", LOCAL_BUSINESS_SCHEMA);
  }, []);

  const handleCall = () => {
    trackPhoneCall("privacy_policy_page_call");
    window.location.href = "tel:+15014512151";
  };

  const quickHighlights = [
    {
      icon: Lock,
      title: "No Data Selling",
      desc: "We never sell, rent, or trade your personal contact details, phone number, or location data to third-party marketers.",
    },
    {
      icon: MapPin,
      title: "Purpose-Limited Location Use",
      desc: "Pickup and drop-off addresses entered into our Rate Calculator or dispatch forms are used strictly to calculate mileage estimates and route tow trucks.",
    },
    {
      icon: ShieldCheck,
      title: "Encrypted Payment Processing",
      desc: "On-scene card and mobile wallet transactions are processed via PCI-DSS compliant point-of-sale readers; we do not store raw card numbers.",
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
            className="mb-4 px-3 py-1 text-xs font-bold border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
          >
            <ShieldCheck className="h-3.5 w-3.5 mr-1.5" /> Data Protection & Transparency
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Privacy <span className="text-gradient-accent">Policy</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            501 Towing & Roadside Service LLC ("501 Towing," "we," "our," or "us") respects your privacy and is committed to protecting the personal, vehicle, and location information you share with us when requesting emergency roadside assistance, using our online Towing Rate Calculator, or browsing{" "}
            <span className="text-white font-semibold">fiveoonetowing.com</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Effective & Last Updated: <strong className="text-white">{lastUpdated}</strong>
            </span>
            <Link
              href="/terms-and-conditions"
              className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold"
            >
              <FileText className="h-3.5 w-3.5" />
              View Terms & Conditions →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {quickHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-border/70 shadow-md"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-bold text-base text-foreground mb-1.5">
                    {item.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Policy Document Body */}
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-border/70 shadow-xl space-y-8 text-sm text-muted-foreground leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Database className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  1. Information We Collect
                </h2>
              </div>
              <p>
                We collect information necessary to dispatch tow trucks accurately, calculate transparent mileage estimates, process payments, and provide documentation for auto insurance or warranty reimbursement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Contact & Identity Information:</strong> Your name, phone number, email address, and billing or mailing address when you call our dispatch desk, submit a digital service request, or receive an itemized digital invoice.
                </li>
                <li>
                  <strong className="text-foreground">Vehicle & Incident Information:</strong> Vehicle year, make, model, color, license plate number, Vehicle Identification Number (VIN), odometer reading, and details regarding the mechanical breakdown, lockout, or accident condition.
                </li>
                <li>
                  <strong className="text-foreground">Location & Routing Data:</strong> Pickup coordinates, highway mile markers, breakdown addresses, and destination addresses entered into our Towing Rate Calculator or shared with our dispatchers via phone, SMS, or web forms.
                </li>
                <li>
                  <strong className="text-foreground">Payment & Insurance Records:</strong> Payment method confirmation, transaction timestamps, and insurance carrier or motor club claim numbers needed to issue receipts for your reimbursement. Card transactions are processed through encrypted third-party payment terminals; we do not store full credit or debit card numbers on our servers.
                </li>
                <li>
                  <strong className="text-foreground">Technical & Usage Data:</strong> IP address, browser type, device operating system, referring pages, pages visited, and interaction events (such as clicking the phone call button or running a rate calculation).
                </li>
              </ul>
            </div>

            <hr className="border-border/60" />

            {/* Section 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Eye className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  2. How We Use Your Information
                </h2>
              </div>
              <p>
                501 Towing uses the collected information strictly for legitimate operational, safety, and legal purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Emergency Dispatch & Roadside Service:</strong> Locating your stranded vehicle, assigning the appropriate flatbed or recovery truck, and communicating estimated arrival times (ETAs) via phone call or SMS text message.
                </li>
                <li>
                  <strong className="text-foreground">Three-Leg Mileage Rate Calculation:</strong> Computing accurate distance estimates between our Benton dispatch headquarters (600 S. East Street, Benton, AR 72015), your pickup location, and your drop-off destination.
                </li>
                <li>
                  <strong className="text-foreground">Billing, Receipts & Insurance Reimbursement:</strong> Generating itemized tow tickets and digital invoices containing the details required by auto insurance companies and roadside assistance plans.
                </li>
                <li>
                  <strong className="text-foreground">Regulatory Compliance & Safety:</strong> Complying with Arkansas Towing & Recovery Board record-keeping rules, law enforcement requests, and motor carrier safety regulations.
                </li>
                <li>
                  <strong className="text-foreground">Website Performance & Analytics:</strong> Analyzing aggregate traffic trends to improve page speed, mobile usability, and service coverage across Saline, Pulaski, and surrounding Arkansas counties.
                </li>
              </ul>
            </div>

            <hr className="border-border/60" />

            {/* Section 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Cookie className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  3. Google Maps API, Analytics & Cookies
                </h2>
              </div>
              <p>
                Our website integrates trusted third-party tools to deliver real-time address autocomplete, route calculation, and site analytics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Google Maps Platform APIs:</strong> Our Rate Calculator uses Google Places Autocomplete and Google Routes/Directions APIs to resolve addresses and calculate driving mileage. Your use of these mapping features is also subject to the{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    Google Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Google Analytics (GA4):</strong> We use Google Analytics to measure anonymized website traffic, page views, and conversion events (such as rate calculator usage and dispatch phone clicks). You can opt out of Google Analytics tracking by installing the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>{" "}
                  or adjusting your browser's cookie settings.
                </li>
                <li>
                  <strong className="text-foreground">Local Storage & Preferences:</strong> We use browser local storage to remember interface preferences (such as dark/light display theme) so your experience remains consistent across visits.
                </li>
              </ul>
            </div>

            <hr className="border-border/60" />

            {/* Section 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Share2 className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  4. Information Sharing & Disclosure
                </h2>
              </div>
              <p>
                We do <strong className="text-foreground">not</strong> sell or rent your personal information to third parties. We only share information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Service Fulfillment:</strong> With our on-duty tow truck operators, dispatchers, and receiving repair shops or dealerships that you authorize us to deliver your vehicle to.
                </li>
                <li>
                  <strong className="text-foreground">Insurance & Commercial Fleet Accounts:</strong> With your designated auto insurance carrier, roadside assistance provider, or commercial fleet manager when you request direct verification or reimbursement documentation.
                </li>
                <li>
                  <strong className="text-foreground">Technology & Payment Processors:</strong> With infrastructure providers (such as cloud hosting, mapping APIs, and PCI-compliant credit card processors) bound by confidentiality and security obligations.
                </li>
                <li>
                  <strong className="text-foreground">Legal & Regulatory Authorities:</strong> When required by law, subpoena, court order, law enforcement agency, or the Arkansas Towing & Recovery Board.
                </li>
              </ul>
            </div>

            <hr className="border-border/60" />

            {/* Section 5 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Lock className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  5. Data Retention & Security
                </h2>
              </div>
              <p>
                We implement administrative, technical, and physical safeguards—including HTTPS/TLS encryption across our website and restricted access to dispatch records—to protect your personal information against unauthorized access, alteration, or disclosure.
              </p>
              <p>
                Tow tickets, invoices, and vehicle handling records are retained for the period required by Arkansas state towing regulations, tax laws, and commercial insurance policies, after which they are securely archived or destroyed.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Section 6 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <UserCheck className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  6. Your Privacy Rights & Choices
                </h2>
              </div>
              <p>
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request a copy of the personal information or service invoices we maintain about your tow or roadside service.</li>
                <li>Request correction of inaccurate contact or vehicle information in our records.</li>
                <li>Request deletion of non-mandatory personal data (subject to state regulatory retention requirements for towing and tax records).</li>
                <li>Opt out of non-essential communications at any time.</li>
              </ul>
              <p>
                Our services are intended for licensed motorists and adult vehicle owners. We do not knowingly collect personal information from children under 13 years of age.
              </p>
            </div>

            <hr className="border-border/60" />

            {/* Section 7 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-foreground">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight">
                  7. Contact Us Regarding Privacy
                </h2>
              </div>
              <p>
                If you have questions about this Privacy Policy, need a duplicate invoice for an insurance claim, or wish to exercise your privacy rights, please contact us directly:
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
              Need Immediate Roadside or Towing Assistance?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
              Our dispatchers are standing by 24/7/365 across Benton, Bryant, Little Rock, and Central Arkansas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-black text-sm px-6 rounded-xl shadow-lg"
                data-testid="button-privacy-call"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call (501) 451-2151
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl text-sm font-bold">
                <Link href="/terms-and-conditions">Read Terms & Conditions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


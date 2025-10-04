import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCall = () => {
    console.log("Footer emergency call");
    // todo: remove mock functionality
    window.location.href = "tel:+15014512151";
  };

  const handleNavClick = (section: string) => {
    console.log(`Footer navigation to ${section}`);
    // todo: remove mock functionality
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">501 Towing & Roadside</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted local towing company providing professional roadside 
              assistance and emergency towing services 24/7.
            </p>
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <button
                onClick={handleCall}
                className="text-sm hover:text-accent transition-colors"
                data-testid="button-footer-call"
              >
                (501) 451-2151
              </button>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">info@reliabletowing.com</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Emergency Towing</li>
              <li>Roadside Assistance</li>
              <li>Vehicle Transport</li>
              <li>Jump Start Service</li>
              <li>Flat Tire Changes</li>
              <li>Lockout Assistance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Service Area */}
          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <div className="flex items-start mb-3">
              <MapPin className="h-4 w-4 mr-2 mt-0.5" />
              <div className="text-sm text-primary-foreground/80">
                <p>600 S. East Street</p>
                <p>Benton, AR 72015</p>
                <p>24/7 Emergency Response</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Serving Benton, Little Rock, and surrounding Central Arkansas 
              regions with fast, reliable towing services.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} 501 Towing & Roadside. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
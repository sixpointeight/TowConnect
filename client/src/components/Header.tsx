import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { trackPhoneCall, trackNavigation, trackEmergencyBanner } from "@/lib/analytics";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import logoBlack from "@assets/generated_images/logo-black.svg";
import logoWhite from "@assets/generated_images/logo-white.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const theme = useTheme();

  // Track emergency banner view on component mount
  useEffect(() => {
    trackEmergencyBanner('view');
  }, []);

  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Rate Calculator", href: "/rate-calculator", isRoute: true },
    { label: "Services", href: "#services", isRoute: false },
    { label: "About", href: "#about", isRoute: false },
    { label: "Contact", href: "#contact", isRoute: false },
  ];

  const handleCall = () => {
    trackPhoneCall('header_button');
    window.location.href = "tel:+15014512151";
  };

  const handleNavClick = (href: string, isRoute: boolean) => {
    // Track navigation
    const destination = isRoute ? href.replace('/', '') || 'home' : href.replace('#', '');
    trackNavigation(destination, 'header');
    
    if (isRoute) {
      // Let Link component handle routing
    } else {
      // Handle anchor links for same-page navigation
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center">
        <p className="text-sm font-semibold">
          🚨 24/7 Emergency Towing Available - Call Now: (501) 451-2151
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img 
                  src={theme === 'dark' ? logoWhite : logoBlack} 
                  alt="501 Towing & Roadside" 
                  className="h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-foreground hover:text-primary transition-colors ${
                      location === item.href ? 'text-primary font-medium' : ''
                    }`}
                    data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className="text-foreground hover:text-primary transition-colors"
                    data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                onClick={handleCall}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                data-testid="button-emergency-call"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.isRoute ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-left text-foreground hover:text-primary transition-colors ${
                        location === item.href ? 'text-primary font-medium' : ''
                      }`}
                      data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href, item.isRoute)}
                      className="text-left text-foreground hover:text-primary transition-colors"
                      data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
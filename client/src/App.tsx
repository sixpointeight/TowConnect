import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch, useLocation } from "wouter";
import { initGA, trackPageView } from "@/lib/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyFloat from "@/components/EmergencyFloat";

import HomePage from "@/pages/HomePage";
import RateCalculatorPage from "@/pages/RateCalculatorPage";
import RoadsideAssistancePage from "@/pages/RoadsideAssistancePage";
import EmergencyTowingPage from "@/pages/EmergencyTowingPage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import FleetPage from "@/pages/FleetPage";
import CoverageAreaPage from "@/pages/CoverageAreaPage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import EvTowingPage from "@/pages/EvTowingPage";
import CommercialTowingPage from "@/pages/CommercialTowingPage";
import SalineCountyPage from "@/pages/SalineCountyPage";
import LittleRockPage from "@/pages/LittleRockPage";

// Component to track page views
function PageTracker() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top on route change (unless hash link)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    trackPageView(location);
  }, [location]);

  return null;
}

function App() {
  // Initialize Google Analytics on app load
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <PageTracker />
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/rate-calculator" component={RateCalculatorPage} />
                <Route path="/roadside-assistance" component={RoadsideAssistancePage} />
                <Route path="/emergency-towing" component={EmergencyTowingPage} />
                
                {/* Specific crawlable service endpoints */}
                <Route path="/services" component={ServicesPage} />
                <Route path="/services/ev-towing" component={EvTowingPage} />
                <Route path="/ev-towing" component={EvTowingPage} />
                <Route path="/services/commercial-towing" component={CommercialTowingPage} />
                <Route path="/commercial-towing" component={CommercialTowingPage} />

                {/* Specific crawlable coverage endpoints */}
                <Route path="/coverage" component={CoverageAreaPage} />
                <Route path="/coverage/saline-county" component={SalineCountyPage} />
                <Route path="/coverage/benton-bryant" component={SalineCountyPage} />
                <Route path="/coverage/little-rock" component={LittleRockPage} />
                <Route path="/coverage/pulaski-county" component={LittleRockPage} />

                {/* Core pages */}
                <Route path="/fleet" component={FleetPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/contact" component={ContactPage} />

                {/* Default route - redirect to home */}
                <Route component={HomePage} />
              </Switch>
            </main>
            <Footer />
            <EmergencyFloat />
          </div>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

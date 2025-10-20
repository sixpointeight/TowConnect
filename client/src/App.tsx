import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch, useLocation } from "wouter";
import { initGA, trackPageView } from "@/lib/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import RateCalculatorPage from "@/pages/RateCalculatorPage";
import RoadsideAssistancePage from "@/pages/RoadsideAssistancePage";
import EmergencyTowingPage from "@/pages/EmergencyTowingPage";
import AboutPage from "@/pages/AboutPage";

// Component to track page views
function PageTracker() {
  const [location] = useLocation();

  useEffect(() => {
    // Track page view on route change
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
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/rate-calculator" component={RateCalculatorPage} />
                <Route path="/roadside-assistance" component={RoadsideAssistancePage} />
                <Route path="/emergency-towing" component={EmergencyTowingPage} />
                <Route path="/about" component={AboutPage} />
                {/* Default route - redirect to home */}
                <Route component={HomePage} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

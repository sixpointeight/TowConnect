// Google Analytics Measurement ID - will be set via environment variable
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Declare gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not provided');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

// Track custom events
interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export const trackEvent = ({ action, category, label, value, ...customParams }: EventParams) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...customParams,
  });
};

// Predefined event tracking functions for common actions
export const trackPhoneCall = (source: string = 'unknown') => {
  trackEvent({
    action: 'phone_call',
    category: 'engagement',
    label: source,
    value: 1,
  });
};

export const trackRateCalculation = (serviceType: string, distance: number, total: number) => {
  trackEvent({
    action: 'rate_calculation',
    category: 'tool_usage',
    label: serviceType,
    value: Math.round(total),
    custom_parameters: {
      service_type: serviceType,
      distance: distance,
      estimated_total: total,
    },
  });
};

export const trackDistanceToolUsage = (method: string) => {
  trackEvent({
    action: 'distance_tool_used',
    category: 'tool_usage',
    label: method,
    value: 1,
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent({
    action: 'form_submit',
    category: 'engagement',
    label: formType,
    value: 1,
  });
};

export const trackNavigation = (destination: string, source: string = 'header') => {
  trackEvent({
    action: 'navigate',
    category: 'navigation',
    label: `${source}_to_${destination}`,
    value: 1,
  });
};

// Business-specific tracking
export const trackServiceInterest = (serviceType: string) => {
  trackEvent({
    action: 'service_interest',
    category: 'business',
    label: serviceType,
    value: 1,
  });
};

export const trackEmergencyBanner = (action: 'click' | 'view') => {
  trackEvent({
    action: `emergency_banner_${action}`,
    category: 'emergency',
    label: 'header_banner',
    value: 1,
  });
};
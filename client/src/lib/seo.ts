export interface PageMetaOptions {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function updatePageMeta(options: PageMetaOptions) {
  if (typeof document === "undefined") return;

  document.title = options.title;

  const setTag = (selector: string, tagName: "meta" | "link", attributes: Record<string, string>) => {
    let el = document.head.querySelector(selector) as HTMLElement | null;
    if (!el) {
      el = document.createElement(tagName);
      document.head.appendChild(el);
    }
    Object.entries(attributes).forEach(([k, v]) => {
      el?.setAttribute(k, v);
    });
  };

  setTag('meta[name="description"]', 'meta', { name: 'description', content: options.description });
  
  if (options.canonicalUrl) {
    setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: options.canonicalUrl });
    setTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: options.canonicalUrl });
  }
  
  setTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: options.title });
  setTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: options.description });
  setTag('meta[property="og:type"]', 'meta', { property: 'og:type', content: 'website' });
  setTag('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary_large_image' });
  setTag('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: options.title });
  setTag('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: options.description });
  
  if (options.ogImage) {
    setTag('meta[property="og:image"]', 'meta', { property: 'og:image', content: options.ogImage });
    setTag('meta[name="twitter:image"]', 'meta', { name: 'twitter:image', content: options.ogImage });
  }
}

/**
 * Injects or updates a JSON-LD structured data script in document.head
 */
export function setStructuredData(scriptId: string, data: Record<string, any>) {
  if (typeof document === "undefined") return;

  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement("script");
    scriptEl.id = scriptId;
    scriptEl.type = "application/ld+json";
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(data);
}

/**
 * Standard LocalBusiness / AutomotiveBusiness Schema for 501 Towing & Roadside
 */
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["AutomotiveBusiness", "AutoRepair", "EmergencyService"],
  "@id": "https://fiveoonetowing.com/#business",
  "name": "501 Towing & Roadside",
  "legalName": "501 Towing & Roadside Service LLC",
  "alternateName": "501 Towing",
  "url": "https://fiveoonetowing.com",
  "logo": "https://fiveoonetowing.com/assets/logo-black.png",
  "image": [
    "https://fiveoonetowing.com/assets/501-towing-black-wrecker.png",
    "https://fiveoonetowing.com/assets/501_towing_loading_tesla.png",
    "https://fiveoonetowing.com/assets/tow_truck_501_towing_2.jpeg"
  ],
  "description": "Professional 24/7 emergency flatbed towing, Tesla & EV safe recovery, accident winching, and roadside assistance serving Benton, Bryant, Little Rock, and Central Arkansas.",
  "telephone": "+1-501-451-2151",
  "email": "fiveoonetowing@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "600 S. East Street",
    "addressLocality": "Benton",
    "addressRegion": "AR",
    "postalCode": "72015",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.5645,
    "longitude": -92.5877
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Apple Pay, Google Pay, Insurance Billing",
  "areaServed": [
    {
      "@type": "City",
      "name": "Benton",
      "sameAs": "https://en.wikipedia.org/wiki/Benton,_Arkansas"
    },
    {
      "@type": "City",
      "name": "Bryant",
      "sameAs": "https://en.wikipedia.org/wiki/Bryant,_Arkansas"
    },
    {
      "@type": "City",
      "name": "Little Rock",
      "sameAs": "https://en.wikipedia.org/wiki/Little_Rock,_Arkansas"
    },
    {
      "@type": "City",
      "name": "North Little Rock",
      "sameAs": "https://en.wikipedia.org/wiki/North_Little_Rock,_Arkansas"
    },
    {
      "@type": "City",
      "name": "Maumelle"
    },
    {
      "@type": "City",
      "name": "Conway"
    },
    {
      "@type": "City",
      "name": "Hot Springs"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Saline County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Pulaski County"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Towing & Roadside Assistance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Flatbed Towing",
          "description": "24/7 rollback flatbed towing for passenger cars, AWDs, SUVs, and luxury vehicles."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tesla & EV Safe Towing",
          "description": "Specialized flatbed transport with neutral tow activation, wheel-skate dollies, and non-marring tire harnesses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accident Scene Recovery & Winching",
          "description": "Heavy-duty hydraulic recovery, vehicle rollover righting, and ditch winch-outs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Battery Jump Start Service",
          "description": "Computerized surge-protected jump starts for 12V and hybrid vehicles."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Damage-Free Car Lockout Service",
          "description": "Non-destructive auto entry using precision pneumatic air wedges and coated reach tools."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Flat Tire Change & Air Delivery",
          "description": "On-scene spare tire mounting with torque specification check."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Fuel & Fluid Delivery",
          "description": "On-demand delivery of 3-5 gallons of unleaded or diesel fuel directly to vehicle."
        }
      }
    ]
  }
};

/**
 * Helper to generate FAQPage JSON-LD schema
 */
export function generateFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

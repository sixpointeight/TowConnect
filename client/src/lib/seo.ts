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

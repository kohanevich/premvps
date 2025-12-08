# PremVPS SEO Metadata Reference

This document contains all the meta tags, structured data, and SEO considerations for the PremVPS website. These should be implemented in the HTML `<head>` section of each page.

## Homepage Meta Tags

### Basic Meta Tags
```html
<title>PremVPS – Ultra-Fast VPS Hosting in Europe | NVMe Cloud Servers</title>
<meta name="description" content="High-performance VPS hosting with AMD Ryzen CPUs and NVMe SSD storage. European data center, 99.95% uptime SLA, free migration, and first month free. Linux & Windows VPS plans available – scale your startup with PremVPS." />
<meta name="keywords" content="VPS hosting, cloud VPS, virtual server, NVMe hosting, AMD Ryzen VPS, Europe VPS, Linux VPS, Windows VPS, cheap VPS, affordable hosting" />
```

### Open Graph Tags (Social Media)
```html
<meta property="og:title" content="PremVPS – Ultra-Fast VPS Hosting in Europe" />
<meta property="og:description" content="High-performance VPS hosting with AMD Ryzen CPUs and NVMe SSD storage. First month free!" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://premvps.com" />
<meta property="og:image" content="https://premvps.com/og-image.jpg" />
<meta property="og:site_name" content="PremVPS" />
```

### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PremVPS – Ultra-Fast VPS Hosting" />
<meta name="twitter:description" content="High-performance VPS hosting with AMD Ryzen CPUs and NVMe SSD storage. First month free!" />
<meta name="twitter:image" content="https://premvps.com/twitter-card.jpg" />
```

---

## Plans & Pricing Page Meta Tags

```html
<title>VPS Plans & Pricing – PremVPS Cloud Hosting from €4/month</title>
<meta name="description" content="Choose from a range of PremVPS cloud VPS plans. All plans include DDR5 RAM, NVMe SSDs, unmetered bandwidth, and daily backups. From €4/month – find the perfect VPS for your needs, Linux or Windows." />
<meta name="keywords" content="VPS pricing, VPS plans, cheap VPS, cloud server pricing, NVMe VPS plans, affordable VPS hosting" />
```

---

## About Page Meta Tags

```html
<title>About PremVPS – Why Choose Our VPS Hosting Company</title>
<meta name="description" content="PremVPS is a modern VPS hosting provider committed to startups and small businesses. Learn about our mission, team, Tier III data center in Spain, and what makes us a top choice for high-performance, affordable cloud servers." />
<meta name="keywords" content="about PremVPS, VPS hosting company, cloud hosting provider, Tier III data center" />
```

---

## Contact Page Meta Tags

```html
<title>Contact PremVPS – 24/7 Support & Sales Inquiries</title>
<meta name="description" content="Need help or have questions? Contact PremVPS via form, email, or chat. Our team is here 24/7 to assist with VPS hosting inquiries, technical support, and free migration assistance." />
<meta name="keywords" content="contact PremVPS, VPS support, hosting support, VPS help" />
```

---

## Blog Page Meta Tags

```html
<title>PremVPS Blog – VPS Hosting Tips, Tutorials & News</title>
<meta name="description" content="Explore VPS hosting tips, tutorials, and company news on the PremVPS blog. Learn how to optimize your servers, choose the right plan, and get the latest updates from our team." />
<meta name="keywords" content="VPS tutorials, hosting tips, server optimization, VPS blog" />
```

---

## Structured Data (JSON-LD)

### Organization Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PremVPS",
  "url": "https://premvps.com",
  "logo": "https://premvps.com/logo.png",
  "description": "Ultra-fast VPS hosting on AMD Ryzen servers with NVMe storage. Serving clients worldwide from our European data center.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Valencia",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-XXX-XXX-XXX",
    "contactType": "Customer Support",
    "email": "support@premvps.com",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://twitter.com/premvps",
    "https://facebook.com/premvps",
    "https://linkedin.com/company/premvps"
  ]
}
```

### Product Schema (Plans Page - Example for VPS Standard)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "VPS Standard",
  "description": "Perfect for growing projects, e-commerce sites, and applications with moderate traffic. 3 vCPU @ 3.7 GHz, 8 GB DDR5 RAM, 100 GB NVMe SSD.",
  "brand": {
    "@type": "Brand",
    "name": "PremVPS"
  },
  "offers": {
    "@type": "Offer",
    "price": "12.00",
    "priceCurrency": "EUR",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://premvps.com/plans#standard"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

### FAQ Schema (Contact Page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I migrate my existing server to PremVPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer free migration. After sign-up, open a ticket with your current server details, and our team will transfer your data within 24-48 hours with minimal downtime."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major credit/debit cards and PayPal (plus bank transfer for annual contracts). Billing is month-to-month by default; you can also pay yearly to save 17%."
      }
    }
  ]
}
```

### Article Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Secure Your VPS in 10 Steps",
  "image": "https://premvps.com/blog/secure-vps.jpg",
  "author": {
    "@type": "Person",
    "name": "PremVPS Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PremVPS",
    "logo": {
      "@type": "ImageObject",
      "url": "https://premvps.com/logo.png"
    }
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01"
}
```

---

## Additional SEO Recommendations

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://premvps.com/sitemap.xml

# Disallow any admin or test areas if they exist
Disallow: /admin/
Disallow: /test/
```

### Sitemap.xml Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://premvps.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://premvps.com/plans</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://premvps.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://premvps.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://premvps.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Canonical URLs
Each page should have a canonical URL tag:
```html
<link rel="canonical" href="https://premvps.com/page-name" />
```

### hreflang Tags (for future multi-language support)
```html
<link rel="alternate" hreflang="en" href="https://premvps.com/" />
<link rel="alternate" hreflang="es" href="https://premvps.com/es/" />
<link rel="alternate" hreflang="x-default" href="https://premvps.com/" />
```

### Performance Optimization
- Ensure all images have proper width/height attributes
- Use lazy loading for images below the fold
- Implement proper caching headers
- Minify CSS and JavaScript
- Use WebP format for images where supported
- Implement a CDN for static assets
- Target Google PageSpeed score of 90+

### Analytics Implementation
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="VERIFICATION_CODE" />
```

---

## Target Keywords by Page

### Homepage
- Primary: VPS hosting, Cloud VPS, Ultra-fast VPS
- Secondary: AMD Ryzen VPS, NVMe hosting, European VPS
- Long-tail: free migration VPS, first month free VPS, affordable cloud hosting

### Plans Page
- Primary: VPS pricing, VPS plans, cheap VPS
- Secondary: cloud server plans, NVMe VPS plans
- Long-tail: €4 VPS, affordable Linux VPS, Windows VPS hosting

### About Page
- Primary: About PremVPS, VPS hosting company
- Secondary: Tier III data center, European hosting provider
- Long-tail: startup VPS hosting, small business cloud hosting

### Contact Page
- Primary: Contact VPS support, VPS help
- Secondary: 24/7 VPS support, hosting support
- Long-tail: free VPS migration help, VPS customer service

### Blog
- Primary: VPS tutorials, hosting tips, server guides
- Secondary: VPS security, server optimization
- Long-tail: how to secure VPS, Linux VPS tutorial, Windows server setup

---

## Conversion Tracking

### Key Conversion Events to Track
1. Plan selection/Get Started clicks
2. Contact form submissions
3. AI chatbot interactions
4. Newsletter signups
5. Phone/email clicks
6. Client portal logins

### Recommended Tools
- Google Analytics 4
- Google Search Console
- Hotjar or similar for heatmaps
- Facebook Pixel (if running ads)
- LinkedIn Insight Tag (for B2B)

---

## Local SEO (if applicable)

If PremVPS has a physical office, implement:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PremVPS",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Park",
    "addressLocality": "Valencia",
    "postalCode": "46000",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.4699",
    "longitude": "-0.3763"
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "telephone": "+34-XXX-XXX-XXX"
}
```

---

## Mobile Optimization Checklist

- [ ] Responsive design on all devices
- [ ] Touch-friendly buttons (min 44x44px)
- [ ] Fast mobile load time (<3s)
- [ ] No horizontal scrolling
- [ ] Readable font sizes (min 16px)
- [ ] Optimized images for mobile
- [ ] Mobile-friendly navigation
- [ ] Click-to-call on phone numbers
- [ ] Click-to-email on email addresses

---

## Accessibility (SEO Benefit)

- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] ARIA labels on interactive elements
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Keyboard navigation support
- [ ] Skip to content link
- [ ] Focus indicators visible
- [ ] Form labels properly associated

---

This metadata and structured data should be implemented across the site to maximize SEO performance and search engine visibility.

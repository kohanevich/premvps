import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = 'PremVPS - High-Performance VPS Hosting | AMD Ryzen NVMe Servers',
  description = 'Premium VPS hosting with AMD Ryzen 3.7GHz processors, NVMe SSD storage, and DDR5 RAM. Starting at €4/month. Free migration, daily backups, DDoS protection included.',
  image = 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?w=1200&h=630&fit=crop',
  url = 'https://premvps.com/'
}: SEOProps) {
  
  const faviconSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='100' y2='100' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232563eb'/%3E%3Cstop offset='1' stop-color='%231d4ed8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='20' fill='url(%23g)'/%3E%3Ctext x='50' y='70' font-size='60' font-weight='700' text-anchor='middle' fill='white' font-family='system-ui,sans-serif'%3EV%3C/text%3E%3C/svg%3E";
  
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>
      
      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href={faviconSvg} />
      <link rel="shortcut icon" href={faviconSvg} />
      <link rel="apple-touch-icon" sizes="180x180" href={faviconSvg} />
      
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="PremVPS Team" />
      <meta name="keywords" content="vps hosting, cloud server, virtual private server, amd ryzen, nvme ssd, ddr5 ram, europe vps, usa vps" />
      
      {/* Open Graph / Facebook / WhatsApp / LinkedIn / Telegram */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="PremVPS - High-Performance VPS Hosting Infrastructure" />
      <meta property="og:site_name" content="PremVPS" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="PremVPS - High-Performance VPS Hosting Infrastructure" />
    </Helmet>
  );
}
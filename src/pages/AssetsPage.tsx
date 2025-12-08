import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function AssetsPage() {
  const ogImageUrl = "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBkYXRhY2VudGVyJTIwYWJzdHJhY3QlMjBibHVlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUyMzQzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  // Simple "P" logo on blue background (Favicon)
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="100" fill="#2563EB"/>
  <path d="M160 128h112c61.9 0 112 50.1 112 112s-50.1 112-112 112h-48v96h-64V128z" fill="white"/>
</svg>`;

  // Full Brand Logo based on components/Logo.tsx
  const fullLogoSvg = `<svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#60A5FA" />
      <stop offset="50%" stopColor="#3B82F6" />
      <stop offset="100%" stopColor="#1E40AF" />
    </linearGradient>
  </defs>
  
  <!-- Icon Group (Scaled and positioned) -->
  <g transform="translate(0, 5)">
    <!-- Outer frame -->
    <rect x="9" y="9" width="22" height="22" rx="3" fill="none" stroke="#3B82F6" strokeWidth="1" />
    <!-- Inner chip -->
    <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#logoGradient)" />
    <!-- P letter -->
    <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
    <!-- Connectors -->
    <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
    <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
    <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
    <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
    <!-- Pins -->
    <rect x="5" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
    <rect x="5" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
    <rect x="5" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
    <rect x="32" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
    <rect x="32" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
    <rect x="32" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
  </g>

  <!-- Text Group -->
  <g transform="translate(45, 10)">
    <!-- PremVPS -->
    <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" letter-spacing="-0.02em">
      <tspan fill="#2563EB">Prem</tspan><tspan fill="#1F2937">VPS</tspan>
    </text>
    <!-- Cloud Hosting -->
    <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="10" fill="#6B7280" letter-spacing="0.1em" text-transform="uppercase">Cloud Hosting</text>
  </g>
</svg>`;

  const downloadSvg = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Brand Assets</h1>
      <p className="mb-8 text-gray-600">
        Use these assets for your website configuration (Logo, Favicon and Social Media Preview).
      </p>

      <Tabs defaultValue="logo" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="logo">Full Logo</TabsTrigger>
          <TabsTrigger value="favicon">Favicon</TabsTrigger>
          <TabsTrigger value="og-image">Social Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="logo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Full Brand Logo</CardTitle>
              <CardDescription>
                High resolution vector logo. Best for website headers and marketing materials.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center p-12 bg-white rounded-lg border border-dashed">
                <div className="w-64" dangerouslySetInnerHTML={{ __html: fullLogoSvg }} />
              </div>
              <div className="flex justify-center">
                <Button onClick={() => downloadSvg(fullLogoSvg, "premvps-logo.svg")}>Download Logo (SVG)</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favicon" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Favicon</CardTitle>
              <CardDescription>
                Upload this file in your site settings as the favicon.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg border border-dashed">
                <div className="w-32 h-32" dangerouslySetInnerHTML={{ __html: faviconSvg }} />
              </div>
              <div className="flex justify-center">
                <Button onClick={() => downloadSvg(faviconSvg, "favicon.svg")}>Download Favicon (SVG)</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="og-image" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Preview Image</CardTitle>
              <CardDescription>
                Right-click the image below and select "Save Image As..." to download it.
                Then upload it in your site settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video relative overflow-hidden rounded-lg border bg-gray-100">
                <img 
                  src={ogImageUrl} 
                  alt="PremVPS Social Preview" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center text-sm text-gray-500">
                Resolution: 1080p (approx). Suitable for Twitter, Facebook, and LinkedIn previews.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

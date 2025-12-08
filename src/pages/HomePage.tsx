import { Shield, Zap, Server, HeartHandshake, Eye, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import founderPhoto from 'figma:asset/1463f4bd1ca69fada0623b60b15b4544599bfe85.png';

interface HomePageProps {
  onOpenChat: () => void;
}

export function HomePage({ onOpenChat }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                <span>🎉</span>
                <span>Free Migration & No Setup Fees!</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
                Ultra‑Fast Cloud VPS Hosting – Powered by AMD Ryzen & NVMe
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-600">
                High-performance virtual servers with dedicated resources, free migration, and no hidden costs.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/plans"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center inline-block"
                >
                  View Plans
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
                >
                  Contact Sales
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl mb-1">99.95%</div>
                  <div className="text-xs text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">Tier III</div>
                  <div className="text-xs text-gray-600">Data Center</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">GDPR</div>
                  <div className="text-xs text-gray-600">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">Free</div>
                  <div className="text-xs text-gray-600">Migration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1651955784685-f969100bfc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBkYXRhJTIwY2VudGVyfGVufDF8fHx8MTc2NTE5OTk3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="High-speed NVMe VPS servers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-2xl text-blue-600">€4/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PremVPS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose PremVPS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge hardware with transparent pricing and exceptional support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* High Performance */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Premium Performance</h3>
              <p className="text-gray-600">
                Latest AMD 3.7 GHz CPUs, DDR5 RAM, and NVMe SSD storage for blazing-fast speed.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Total Transparency</h3>
              <p className="text-gray-600">
                Simple monthly pricing with no setup costs or hidden fees. Pay only for what you use.
              </p>
            </div>

            {/* Reliability & Security */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Premium Reliability</h3>
              <p className="text-gray-600">
                Hosted in a Tier III data center for 99.95% uptime. Includes free daily backups & DDoS protection for peace of mind.
              </p>
            </div>

            {/* Flexibility & Control */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Premium Control</h3>
              <p className="text-gray-600">
                Full root access on all VMs, with support for any OS. Deploy Linux or Windows (bring your license) or even your own custom ISO image.
              </p>
            </div>

            {/* Friendly Support */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Customer-Centric</h3>
              <p className="text-gray-600">
                Focused on startups and SMBs. Our experts migrate you for free and are ready with 24/7 support to help your project succeed.
              </p>
            </div>

            {/* Infrastructure */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Premium Infrastructure</h3>
              <p className="text-gray-600">
                Up to 2× better performance and 3× lower energy use than legacy setups with our AMD Ryzen infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Built for Innovators
            </h2>
            <p className="text-xl text-gray-600">
              For those who need the best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1662469567531-9ae8356d3788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzY1MTg1OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Startups and developers"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl mb-2 text-gray-900">Startups & Developers</h3>
              <p className="text-gray-600">
                Scalable infrastructure that won't break the budget. Get the performance you need to prototype and grow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1569021998480-a68f22f6ba86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBsYXB0b3AlMjBjb2ZmZWV8ZW58MXx8fHwxNzY1MTkxNzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Freelancers and entrepreneurs"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl mb-2 text-gray-900">Freelancers & Entrepreneurs</h3>
              <p className="text-gray-600">
                Focus on your clients and projects, not on server headaches. Our easy VPS and support let you deploy quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1762341116197-fb94a4f37173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NjUxMjQzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Small and medium businesses"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl mb-2 text-gray-900">Small & Medium Businesses</h3>
              <p className="text-gray-600">
                Reliable 24/7 hosting for your websites and applications. Professional infrastructure available on a startup-friendly model.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1489438497675-d1a8d6e0632e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzY1MTE0MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agencies and web studios"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl mb-2 text-gray-900">Agencies</h3>
              <p className="text-gray-600">
                Host multiple projects with ease. White-label solutions, templates, and priority support available to power your client sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Find Your Ideal VPS Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our VPS packages range from entry-level to enterprise, all with high-frequency CPUs and NVMe storage. 
              Choose a plan that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Small Plan */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
              <div className="mb-4">
                <h3 className="text-2xl text-gray-900 mb-2">Small</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-blue-600">€4</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">€40/year (save 17%)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">1 vCPU @ 3.7 GHz</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">2 GB DDR5 RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">25 GB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Unmetered 1 Gbps</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mb-6">
                Ideal for lightweight websites, blogs, test environments, and small side projects.
              </p>
              <Link
                to="/plans"
                className="block w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Standard Plan - Most Popular */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className="text-2xl text-gray-900 mb-2">Standard</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-blue-600">€12</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">€120/year (save 17%)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">3 vCPU @ 3.7 GHz</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">8 GB DDR5 RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">100 GB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Unmetered 1 Gbps</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mb-6">
                Perfect for growing projects, e-commerce sites, and applications with moderate traffic.
              </p>
              <Link
                to="/plans"
                className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
              <div className="mb-4">
                <h3 className="text-2xl text-gray-900 mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-blue-600">€60</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">€600/year (save 17%)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">8 vCPU @ 3.7 GHz</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">64 GB DDR5 RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">800 GB NVMe SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Unmetered 1 Gbps</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mb-6">
                Optimized for heavier workloads, Windows environments, and mission-critical applications.
              </p>
              <Link
                to="/plans"
                className="block w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need more power or a specific architecture (high-CPU, high-RAM, or large storage)?
            </p>
            <Link
              to="/plans"
              className="text-blue-600 hover:text-blue-700"
            >
              See our full price list →
            </Link>
          </div>
        </div>
      </section>

      {/* AI Advisor CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Not sure which plan you need?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Describe your project to our AI Assistant, and get a personalized plan recommendation!
          </p>
          <button
            onClick={onOpenChat}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Try the AI Advisor
          </button>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={founderPhoto}
                alt="Artem Kohanevich, Co-founder of PremVPS"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                  "For over 10 years in cloud hosting, I saw the focus shift to large clients. 
                  I dreamed of creating quality hosting for startups and small businesses – with 
                  modern tech and friendly support from day one. Now, we're here to work for you!"
                </p>
                <div>
                  <div className="text-gray-900">Artem Kohanevich</div>
                  <div className="text-gray-600">Co-founder of PremVPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Ready to supercharge your project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with PremVPS today and experience the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/plans"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Plans
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us for Custom Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
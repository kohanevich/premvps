import { useState, useEffect } from 'react';
import { Check, HelpCircle, Monitor, Server, Container, Disc, Truck, Database, Shield, Zap, Terminal, Settings, Headphones, DollarSign, X, Cpu, MemoryStick, HardDrive, Network, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlansPageProps {
  onOpenChat: () => void;
}

type Location = 'ES' | 'PL';
type BillingPeriod = 'monthly' | 'yearly';

interface Plan {
  id: string;
  name: string;
  vcpu: number;
  ram: number;
  storage: number;
  priceMonthly: number;
  description: string;
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'small',
    name: 'VPS Small',
    vcpu: 1,
    ram: 2,
    storage: 25,
    priceMonthly: 4,
    description: 'Ideal for lightweight websites, blogs, test environments, and small side projects.',
  },
  {
    id: 'basic',
    name: 'VPS Basic',
    vcpu: 2,
    ram: 4,
    storage: 50,
    priceMonthly: 7,
    description: 'Run multiple small applications or a larger website with low-to-moderate traffic.',
  },
  {
    id: 'standard',
    name: 'VPS Standard',
    vcpu: 3,
    ram: 8,
    storage: 100,
    priceMonthly: 12,
    description: 'Great for growing projects, e-commerce sites, or medium databases.',
    isPopular: true,
  },
  {
    id: 'pro',
    name: 'VPS Pro',
    vcpu: 4,
    ram: 16,
    storage: 200,
    priceMonthly: 20,
    description: 'High-performance needs – capable of handling multiple sites, forums, or applications for a small business.',
  },
  {
    id: 'power',
    name: 'VPS Power',
    vcpu: 6,
    ram: 32,
    storage: 400,
    priceMonthly: 34,
    description: 'For heavy workloads, large databases, or numerous concurrent users – suitable for production environments requiring consistent power.',
  },
  {
    id: 'enterprise',
    name: 'VPS Enterprise',
    vcpu: 8,
    ram: 64,
    storage: 800,
    priceMonthly: 60,
    description: 'Enterprise-level performance – handles mission-critical applications, high traffic, or virtualization of many instances.',
  },
];

const locations = [
  { code: 'ES' as Location, name: 'Spain', flag: '🇪🇸' },
  { code: 'PL' as Location, name: 'Poland', flag: '🇵🇱' },
];

export function PlansPage({ onOpenChat }: PlansPageProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location>('ES');
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Persist location selection
  useEffect(() => {
    const savedLocation = localStorage.getItem('premvps-location') as Location;
    if (savedLocation && ['ES', 'PL'].includes(savedLocation)) {
      setSelectedLocation(savedLocation);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('premvps-location', selectedLocation);
  }, [selectedLocation]);

  const calculatePrice = (monthlyPrice: number) => {
    if (billingPeriod === 'yearly') {
      return monthlyPrice * 10; // 10 months for 12 (2 months free)
    }
    return monthlyPrice;
  };

  const handleOpenOrderModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsOrderModalOpen(true);
    setSubmitStatus('idle');
    setFormData({ name: '', email: '' });
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedPlan(null);
    setFormData({ name: '', email: '' });
    setSubmitStatus('idle');
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const price = calculatePrice(selectedPlan.priceMonthly);
    const displayPrice = billingPeriod === 'monthly' ? price : Math.round(price / 12);

    const formPayload = {
      access_key: 'ac5f52b2-36b8-4556-ad18-ed4799095c0d',
      name: formData.name,
      email: formData.email,
      plan: selectedPlan.name,
      vcpu: selectedPlan.vcpu,
      ram: `${selectedPlan.ram} GB`,
      storage: `${selectedPlan.storage} GB`,
      price: `€${displayPrice}/month`,
      billing_period: billingPeriod,
      location: locations.find(l => l.code === selectedLocation)?.name,
      subject: `New VPS Order: ${selectedPlan.name}`,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          handleCloseOrderModal();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              VPS Hosting Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choose the perfect virtual server for your needs. All PremVPS plans run on high-performance 
              AMD Ryzen 3.7 GHz cores with NVMe SSD storage and DDR5 RAM for optimal speed. Every plan includes 
              unmetered traffic, one IPv4 address, and free daily backups + DDoS protection by default. 
              Linux or Windows OS supported on all plans (Windows license not included). Upgrade or downgrade 
              anytime as your requirements change.
            </p>
          </div>

          {/* Location Selector */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Select Data Center Location</h3>
                <p className="text-sm text-gray-600">Choose where your VPS will be hosted</p>
              </div>
              <div className="flex gap-4">
                {locations.map((location) => (
                  <button
                    key={location.code}
                    onClick={() => setSelectedLocation(location.code)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      selectedLocation === location.code
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <span className="text-2xl mr-2">{location.flag}</span>
                    <span>{location.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Billing Period Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const price = calculatePrice(plan.priceMonthly);
              const displayPrice = billingPeriod === 'monthly' ? price : Math.round(price / 12);
              
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-8 transition-all flex flex-col ${
                    plan.isPopular
                      ? 'border-2 border-blue-600 shadow-xl scale-105'
                      : 'border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl text-blue-600">€{displayPrice}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className="text-sm text-gray-500">
                        €{price} billed annually (2 months free)
                      </p>
                    )}
                    <p className="text-sm text-blue-600 mt-2">
                      📍 Location: {locations.find(l => l.code === selectedLocation)?.name}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5 mb-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">vCPU Cores</p>
                        <p className="text-gray-900 font-semibold">{plan.vcpu} @ 3.7 GHz</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MemoryStick className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">RAM Memory</p>
                        <p className="text-gray-900 font-semibold">{plan.ram} GB DDR5</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HardDrive className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">NVMe Storage</p>
                        <p className="text-gray-900 font-semibold">{plan.storage} GB</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Network className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">Bandwidth</p>
                        <p className="text-gray-900 font-semibold">Unmetered 1 Gbps</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500">IPv4 Address</p>
                        <p className="text-gray-900 font-semibold">1 Dedicated</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  <button
                    onClick={() => handleOpenOrderModal(plan)}
                    className={`w-full py-3 rounded-lg transition-colors mt-auto ${
                      plan.isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-12">
            All Plans Include
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Free Migration Assistance</h3>
              <p className="text-sm text-gray-600">We migrate your projects at no cost</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Free Daily Backups</h3>
              <p className="text-sm text-gray-600">Automated backups every day, with easy restore</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">DDoS Protection</h3>
              <p className="text-sm text-gray-600">Network-level protection against attacks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Unmetered 1 Gbps Bandwidth</h3>
              <p className="text-sm text-gray-600">No caps on data transfer</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                <Terminal className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Full Root Server Access</h3>
              <p className="text-sm text-gray-600">Complete control over your server</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                <Settings className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Choice of OS & Panels</h3>
              <p className="text-sm text-gray-600">Install various Linux distros or Windows</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                <Headphones className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">24/7 Monitoring & Support</h3>
              <p className="text-sm text-gray-600">Infrastructure monitored, support always available</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                <DollarSign className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">No Setup Fees</h3>
              <p className="text-sm text-gray-600">Start without any hidden costs or charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* OS & Software Options */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 text-center mb-6">
            Flexible OS and Software Options
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Deploy your VPS with your choice of operating system or application image. We support all major 
            Linux distributions (Ubuntu, Debian, AlmaLinux, etc.) and Windows Server (bring your own license) 
            on our platform. You can also upload your own ISO or custom server image to deploy any environment 
            you need – giving you full flexibility. Additionally, we offer one-click installation of popular 
            applications and control panels (Docker, cPanel/Plesk, etc.) to save you time.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-50 px-6 py-3 rounded-lg flex items-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" 
                alt="Ubuntu"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-700">Ubuntu</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg flex items-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-plain.svg" 
                alt="Debian"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-700">Debian</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg flex items-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-plain.svg" 
                alt="AlmaLinux"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-700">AlmaLinux</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg flex items-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" 
                alt="Windows Server"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-700">Windows Server</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg flex items-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" 
                alt="Docker"
                className="w-6 h-6 mr-2"
              />
              <span className="text-gray-700">Docker</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg flex items-center">
              <Disc className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-700">Custom ISO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl text-gray-900 mb-6">Important Information</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>All VPS include 1 IPv4 address. Unmetered traffic at 1 Gbps; fair use policy applies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Email ports (25, 465, 587) are blocked by default to prevent spam; contact support to enable if needed.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Windows Server OS can be installed (bring your own license).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Additional IPv4 addresses available as add-ons – contact us for pricing.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>You can start small and upgrade anytime with zero downtime – our cloud infrastructure makes scaling up as simple as a few clicks.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* AI Advisor CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8" />
            <h2 className="text-2xl md:text-3xl">Need help choosing the right plan?</h2>
          </div>
          <p className="text-lg text-blue-100 mb-6">
            Chat with our AI Advisor for a personalized recommendation based on your specific needs.
          </p>
          <button
            onClick={onOpenChat}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Talk to AI Advisor
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Ready to supercharge your project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started with PremVPS today – no setup fees, cancel anytime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plans" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
            <Link to="/contact" className="inline-block px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Contact Us for Custom Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {isOrderModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={handleCloseOrderModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl text-gray-900 mb-2">Order {selectedPlan.name}</h2>
            <p className="text-gray-600 mb-6">
              Fill in your details and we&apos;ll get back to you shortly to complete your order.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Plan:</span>
                <span className="text-gray-900">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Price:</span>
                <span className="text-blue-600">
                  €{billingPeriod === 'monthly' 
                    ? calculatePrice(selectedPlan.priceMonthly) 
                    : Math.round(calculatePrice(selectedPlan.priceMonthly) / 12)}/month
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Billing:</span>
                <span className="text-gray-900">{billingPeriod === 'monthly' ? 'Monthly' : 'Yearly'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Location:</span>
                <span className="text-gray-900">{locations.find(l => l.code === selectedLocation)?.name}</span>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 text-center">
                  ✓ Order submitted successfully! We&apos;ll contact you soon.
                </p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-center">
                  ✗ Something went wrong. Please try again.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseOrderModal}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
import { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle, Clock, HelpCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '4dfac090-cadd-4172-861c-569b92fa3a70',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError('Failed to send message. Please try again or contact us directly at support@premvps.com');
      }
    } catch (err) {
      setError('An error occurred. Please try again or contact us directly at support@premvps.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Contact Us
          </h1>
          <h2 className="text-2xl text-gray-600 max-w-4xl mx-auto">
            We're here to help 24/7 – Get in touch with the PremVPS team
          </h2>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl text-gray-900 mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Our team will reach out ASAP.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Phone / WhatsApp (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {error && (
                    <div className="mt-4 text-red-500 text-sm">
                      <AlertCircle className="w-5 h-5 inline-block mr-2" />
                      {error}
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">Email</h3>
                      <a href="mailto:support@premvps.com" className="text-blue-600 hover:text-blue-700">
                        support@premvps.com
                      </a>
                      <br />
                      <a href="mailto:sales@premvps.com" className="text-blue-600 hover:text-blue-700">
                        sales@premvps.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-600">Message us for quick support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">Support Hours</h3>
                      <p className="text-gray-600">
                        Our engineers are on-duty 24/7 for critical issues. Sales and general inquiries are 
                        answered quickly, typically within a few hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl text-gray-900 mb-4">Company Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>PureVPS Ltd</strong></p>
                  <p>86-90 Paul Street</p>
                  <p>London EC2A 4NE, England</p>
                  <p className="pt-2 text-sm text-gray-600">
                    Trading as <strong>PremVPS</strong>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl text-gray-900 mb-3">Need immediate help?</h3>
                <p className="text-gray-600 mb-4">
                  Existing customers can access 24/7 emergency support via the control panel or the hotline 
                  provided in your welcome email.
                </p>
                <a
                  href="https://cp.premvps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Client Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    How do I migrate my existing server to PremVPS?
                  </h3>
                  <p className="text-gray-600">
                    We offer free migration. After sign-up, open a ticket with your current server details, 
                    and our team will transfer your data within 24-48 hours with minimal downtime.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    Major credit/debit cards and PayPal (plus bank transfer for annual contracts). Billing is 
                    month-to-month by default; you can also pay yearly to save 17%.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    Can I upgrade or downgrade later?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our cloud is flexible. You can scale up to a larger plan at any time (the change is prorated). 
                    Downgrades are also possible; our support will assist to ensure a smooth transition.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    Do you offer managed services?
                  </h3>
                  <p className="text-gray-600">
                    By default, our VPS are self-managed (unmanaged), meaning you have full control. We do assist 
                    with basic issues and the environment is fully set up. If you need a fully managed solution, 
                    let us know – we plan to introduce managed service packages soon.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    Is there a money-back guarantee?
                  </h3>
                  <p className="text-gray-600">
                    We offer flexible month-to-month billing with no long-term contracts. You can cancel 
                    anytime without penalties. Plus, we provide free migration to help you get started 
                    risk-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our plans or reach out with any questions
          </p>
          <Link to="/plans" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View VPS Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
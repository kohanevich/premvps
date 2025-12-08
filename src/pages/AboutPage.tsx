import image_8e3c48619f18193348f9ebe098d6305125b3bfc4 from 'figma:asset/8e3c48619f18193348f9ebe098d6305125b3bfc4.png';
import { Server, Shield, Leaf, Users, Award, Globe } from 'lucide-react';
import artemPhoto from 'figma:asset/1463f4bd1ca69fada0623b60b15b4544599bfe85.png';
import pavelPhoto from 'figma:asset/758623d835e8150c663991e511f69c36e893b54f.png';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            About PremVPS – Why Choose Us
          </h1>
          <h2 className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Empowering startups and small businesses with cutting-edge hosting solutions
          </h2>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl text-gray-900 mb-6">Our Mission & Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                PremVPS was founded by experienced cloud engineers who believed that advanced hosting technology 
                should be accessible to everyone – not just large enterprises. We saw that many providers use 
                outdated hardware or overlook smaller clients' needs.
              </p>
              <p>
                Our mission is to change the game by offering high-performance, eco-friendly servers and truly 
                customer-centric service for startups, developers, and businesses of all sizes. We believe that 
                every project deserves premium infrastructure, regardless of budget.
              </p>
            </div>
          </div>

          {/* The PremVPS Difference */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl text-gray-900 mb-8">The PremVPS Difference</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                We don't just sell VPS – we provide a partner-like experience to help your project succeed. 
                PremVPS stands out by:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Modern Hardware</h3>
                    <p className="text-gray-600">
                      Using only modern, high-performance hardware (AMD Ryzen CPUs, fast NVMe storage) for up to 
                      2× better performance and 3× lower energy use than legacy setups.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Transparent Policies</h3>
                    <p className="text-gray-600">
                      Maintaining transparent policies with no hidden fees or tricky pricing, and no overselling 
                      of resources – you get what you pay for.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Personalized Support</h3>
                    <p className="text-gray-600">
                      Focusing on personalized support – our team assists with migrations, optimizations, and 
                      any questions, so you're never left stranded.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600">
                      Continuously innovating – from energy-efficient operations to developing new tools like 
                      our AI advisor, we leverage technology to improve your hosting experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center & Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">
            Data Center & Infrastructure
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">State-of-the-Art Data Centers</h3>
              <p className="text-gray-600 mb-6">
                PremVPS houses its servers in Tier III certified data centers in Valencia, Spain and Warsaw, Poland. 
                These facilities offer N+1 redundant power (up to 7 kW per rack), advanced cooling, and 24/7 on-site 
                security.
              </p>
              <p className="text-gray-600 mb-6">
                By partnering with top-tier data centers, we ensure your servers are in a secure, reliable environment 
                with excellent connectivity (multiple fiber uplinks to major European networks).
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Tier III Certified Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Server className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">N+1 Redundant Power & Cooling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Multiple Fiber Uplinks</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1651955784685-f969100bfc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBkYXRhJTIwY2VudGVyfGVufDF8fHx8MTc2NTE5OTk3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern data center infrastructure"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl text-gray-900 mb-4">Global Reach</h3>
            <p className="text-gray-600 mb-6">
              Our European cloud delivers low-latency to users across Europe and decent speeds to North America. 
              As we grow, we plan to expand to additional regions, so stay tuned!
            </p>
            <p className="text-gray-600">
              Our facility is ISO 27001 certified and fully GDPR compliant, so your data is handled with strict 
              European privacy standards.
            </p>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl text-gray-900">Green Hosting</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              We are committed to minimizing our carbon footprint. Our servers utilize energy-efficient components 
              (like AMD EPYC/Ryzen known for performance-per-watt) and our data centers use free cooling techniques 
              to reduce power usage.
            </p>
            
            <p className="text-gray-600">
              We also give second life to quality hardware where possible (server refurbishment) and follow 
              responsible e-waste recycling. By choosing PremVPS, you partner with a host that cares about sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Team/Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Leadership Team</h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <img
                src={artemPhoto}
                alt="Artem Kohanevich, Co-founder"
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl text-gray-900 mb-2">Artem Kohanevich</h3>
                <p className="text-blue-600 mb-4">Co-founder & CEO</p>
                <p className="text-gray-600">
                  Artem is a cloud entrepreneur with 15+ years in telecom and IT, who co-founded Ukrainian cloud operator GigaCloud and led it as CEO. 
                  Under his leadership, GigaCloud grew into one of Ukraine&apos;s leading IaaS providers with a network of data centers in Ukraine and the EU. 
                  At PremVPS, Artem shapes product vision and go-to-market strategy, focusing on making enterprise-grade cloud infrastructure accessible to startups and SMBs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <img
                src={image_8e3c48619f18193348f9ebe098d6305125b3bfc4}
                alt="Pavel Bahdanau, Co-founder"
                className="w-40 h-40 rounded-full object-cover p-[0px]"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl text-gray-900 mb-2">Pavel Bahdanau</h3>
                <p className="text-blue-600 mb-4">Co-founder & CTO</p>
                <p className="text-gray-600">
                  Pavel is a Linux engineer and infrastructure leader with 10+ years in hosting, cloud and fintech. 
                  He currently serves as CTO at Aventus Group and CEO of Aventus IT, building high-load, compliant platforms for financial services. 
                  At PremVPS, Pavel drives platform architecture and performance, and is the author of emuV, an open-source Linux driver that extends NVIDIA GPU memory on Linux.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-center">
              PremVPS is led by veterans of the hosting industry who have built cloud platforms used by thousands. 
              Our team is distributed across Spain and Eastern Europe, combining expertise in data centers, networking, 
              and support.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Ready to experience the PremVPS difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our plans or get in touch with us – we'd love to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plans" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View Our Plans
            </Link>
            <Link to="/contact" className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-xl">
                <span className="text-blue-500">Prem</span>
                <span className="text-white">VPS</span>
              </span>
            </div>
            <p className="text-sm mb-4">
              PremVPS – Ultra-fast VPS hosting on AMD Ryzen servers with NVMe storage. 
              Serving clients worldwide from our European data center.
            </p>
            <p className="text-sm text-gray-400">
              Empowering startups and small businesses with cutting-edge hosting solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/plans"
                  className="hover:text-blue-400 transition-colors"
                >
                  VPS Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  Why PremVPS
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@premvps.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@premvps.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@premvps.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  sales@premvps.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://cp.premvps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Client Portal →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} PremVPS. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rishi-green-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rishi Biolife Sciences</h3>
            <p className="text-gray-200 mb-4">
              India's first dedicated bio-pharma enterprise for animal and human healthcare, focused on innovation and quality.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-200 hover:text-white transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/research-development" className="text-gray-200 hover:text-white transition-colors">
                  R&D & Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-200">
              <p className="mb-2">Rishi Biolife Sciences,</p>
              <p className="mb-2">Hyderabad, India</p>
              <p className="mb-2">
                <a href="mailto:info@rishibiolife.com" className="hover:text-white transition-colors">
                  info@rishibiolife.com
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Rishi Biolife Sciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

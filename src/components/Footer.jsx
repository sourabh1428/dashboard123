import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Billing Software",
      links: [
        { label: "Invoicing", href: "/features/invoicing" },
        { label: "Inventory Management", href: "/features/inventory" },
        { label: "Financial Reports", href: "/features/reports" },
        { label: "Point of Sale", href: "/features/pos" },
        { label: "GST Compliance", href: "/features/gst" }
      ]
    },
    {
      title: "Industries",
      links: [
        { label: "Retail Stores", href: "/industries/retail" },
        { label: "Restaurants", href: "/industries/restaurants" },
        { label: "Service Providers", href: "/industries/services" },
        { label: "E-commerce", href: "/industries/ecommerce" },
        { label: "Wholesalers", href: "/industries/wholesale" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Blog", href: "/blog" },
        { label: "API Documentation", href: "/docs/api", external: true },
        { label: "Tutorials", href: "/tutorials" },
        { label: "Webinars", href: "/webinars" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://facebook.com/easibill", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "https://twitter.com/easibill", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/easibill", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/company/easibill", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "support@easibill.com" },
    { icon: <Phone size={16} />, text: "+91 800-123-4567" },
    { icon: <MapPin size={16} />, text: "Mumbai, India" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" data-section="footer">
      {/* Top Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a 
                href="/" 
                className="flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                <img 
                  src="https://img.icons8.com/fluency/50/bill.png" 
                  alt="Easibill Logo" 
                  className="h-8 w-auto" 
                />
                <span className="ml-2 text-white font-bold text-2xl">Easibill</span>
              </a>
              <p className="mt-4 text-gray-400">
                Simplify your billing process with our fast, reliable, and easy-to-use software designed for small businesses.
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h3 className="text-white font-medium mb-3">Stay Updated</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-800 text-white border border-gray-700 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
                  aria-label="Email Address"
                />
                <button 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center px-4 rounded-r-lg transition-colors hover:from-purple-700 hover:to-indigo-700"
                  aria-label="Subscribe to newsletter"
                  data-conversion-button="subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Get the latest updates, news and product offers.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="mt-6">
              <h3 className="text-white font-medium mb-3">Contact Us</h3>
              <ul className="space-y-2">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-purple-400 mr-2">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h3 className="text-white font-medium mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                    aria-label={`Follow us on ${social.label}`}
                    data-social-link={social.label.toLowerCase()}
                  >
                    <span className="text-purple-400">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          {footerLinks.map((group, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-medium text-lg mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        if (!link.external) {
                          e.preventDefault();
                          navigate(link.href);
                        }
                      }}
                    >
                      {link.label}
                      {link.external && <ExternalLink size={12} className="ml-1" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500">
              <p>© {currentYear} Easibill. All rights reserved.</p>
              <p className="mt-1">
                <span className="font-medium">Easibill</span> - Best Billing Service & Simple Billing Software
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-500">
              <a 
                href="/privacy" 
                className="hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/privacy');
                }}
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a 
                href="/terms" 
                className="hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/terms');
                }}
              >
                Terms of Service
              </a>
              <span>|</span>
              <a 
                href="/sitemap" 
                className="hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/sitemap');
                }}
              >
                Sitemap
              </a>
            </div>
          </div>
          
          {/* SEO Text */}
          <p className="mt-6 text-xs text-gray-600 max-w-5xl mx-auto text-center">
            Easibill is India's leading billing software for small businesses, retailers, and entrepreneurs. 
            Our easy-to-use billing service helps you create professional invoices, manage inventory, and grow your business. 
            Experience fast invoicing and streamlined local shop billing with Easibill today.
          </p>
          
          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6">
            <img 
              src="https://img.icons8.com/fluency/80x40/paypal.png" 
              alt="Secure Payments" 
              className="h-10" 
              loading="lazy" 
              width={80}
              height={40}
            />
            <img 
              src="https://img.icons8.com/color/80x40/000000/tax.png" 
              alt="GST Compliant" 
              className="h-10" 
              loading="lazy" 
              width={80}
              height={40}
            />
            <img 
              src="https://img.icons8.com/fluency/80x40/cloud-sync.png" 
              alt="Cloud Backup" 
              className="h-10" 
              loading="lazy" 
              width={80}
              height={40}
            />
            <img 
              src="https://img.icons8.com/fluency/80x40/24-7.png" 
              alt="24/7 Support" 
              className="h-10" 
              loading="lazy" 
              width={80}
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


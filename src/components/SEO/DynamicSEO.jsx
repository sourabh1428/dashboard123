// src/components/SEO/DynamicSEO.jsx
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';

export const DynamicSEO = ({ 
  title = "Easibill - #1 GST Billing Software for Small Business in India 2024",
  description = "Create professional GST invoices instantly with Easibill - India's fastest growing billing software. Perfect for retailers, wholesalers & small businesses. Start free trial now!",
  keywords = "billing software, GST billing software, invoice software",
  imageUrl = "https://easibill.site/assets/easibill-preview.png"
}) => {
  const location = useLocation();
  const canonicalUrl = `https://easibill.site${location.pathname}`;
  const navigate=useNavigate();
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Easibill",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web platform",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          }
        })}
      </script>
    </Helmet>
  );
};

// src/components/SEO/RichSnippets.jsx
export const RichSnippets = ({ reviews, faq }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Easibill",
          "review": reviews.map(review => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating
            },
            "author": {
              "@type": "Person",
              "name": review.author
            },
            "reviewBody": review.content
          })),
          "faqPage": {
            "@type": "FAQPage",
            "mainEntity": faq.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        })}
      </script>
    </Helmet>
  );
};

// src/components/Layout/SeoFooter.jsx
import React from 'react';


export const SeoFooter = () => {
  const navigate = useNavigate();

  const linkClasses = "cursor-pointer text-white hover:text-blue-400 transition-colors";

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Billing Software Features */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Billing Software Features</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  GST Billing
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Inventory Management
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Business Reports
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Quick Invoicing
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Retail Stores
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Wholesale Business
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Restaurants
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Service Providers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Blog
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  User Guides
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/lead')} className={linkClasses}>
                  Video Tutorials
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/case-studies')} className={linkClasses}>
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact & Support</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => navigate('/lead')} className={linkClasses}>
                  Contact Us
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/lead')} className={linkClasses}>
                  Customer Support
                </a>
              </li>
              <li>
                <a onClick={() => navigate('/lead')} className={linkClasses}>
                  Request Demo
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            Easibill is India's leading GST billing software for small businesses, retailers, and entrepreneurs. Our easy-to-use billing software helps you create professional invoices, manage inventory, and grow your business.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Easibill - New generation Billing Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

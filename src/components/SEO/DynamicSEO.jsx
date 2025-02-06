// src/components/SEO/DynamicSEO.jsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const DynamicSEO = ({ 
  title = "Easibill - #1 GST Billing Software for Small Business in India 2024",
  description = "Create professional GST invoices instantly with Easibill - India's fastest growing billing software. Perfect for retailers, wholesalers & small businesses. Start free trial now!",
  keywords = "billing software, GST billing software, invoice software",
  imageUrl = "https://easibill.site/assets/easibill-preview.png"
}) => {
  const location = useLocation();
  const canonicalUrl = `https://easibill.site${location.pathname}`;

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
export const SeoFooter = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Billing Software Features</h3>
            <ul className="space-y-2">
              <li><a href="/features/gst-billing">GST Billing</a></li>
              <li><a href="/features/inventory">Inventory Management</a></li>
              <li><a href="/features/reports">Business Reports</a></li>
              <li><a href="/features/invoicing">Quick Invoicing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="/industries/retail">Retail Stores</a></li>
              <li><a href="/industries/wholesale">Wholesale Business</a></li>
              <li><a href="/industries/restaurant">Restaurants</a></li>
              <li><a href="/industries/services">Service Providers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/guides">User Guides</a></li>
              <li><a href="/tutorials">Video Tutorials</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact & Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/support">Customer Support</a></li>
              <li><a href="/demo">Request Demo</a></li>
              <li><a href="/pricing">Pricing Plans</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600">
            Easibill is India's leading GST billing software for small businesses, 
            retailers, and entrepreneurs. Our easy-to-use billing software helps you 
            create professional invoices, manage inventory, and grow your business.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            © {new Date().getFullYear()} Easibill - GST Billing Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
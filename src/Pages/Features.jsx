import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ title, description, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
  >
    <div className="mb-4 text-purple-500">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900/20 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powerful Features for Your Business
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover all the tools you need to streamline your billing process and grow your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/lead')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg"
            >
              Contact Sales
            </button>
          </div>
        </motion.div>
      </section>

      {/* Main Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Everything You Need in One Platform</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive set of features helps you manage your billing, inventory, and business operations efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Invoicing"
            description="Create professional invoices in seconds with customizable templates and automatic calculations."
            icon={<img src="https://img.icons8.com/fluency/50/invoice.png" alt="Invoicing icon" className="h-12 w-12" width="50" height="50" />}
            delay={0.1}
          />
          <FeatureCard
            title="Inventory Management"
            description="Track stock levels, set alerts for low inventory, and manage product variations easily."
            icon={<img src="https://img.icons8.com/fluency/50/warehouse.png" alt="Inventory icon" className="h-12 w-12" width="50" height="50" />}
            delay={0.2}
          />
          <FeatureCard
            title="Financial Reports"
            description="Get insights into your business with detailed reports on sales, expenses, and profits."
            icon={<img src="https://img.icons8.com/fluency/50/combo-chart.png" alt="Reports icon" className="h-12 w-12" width="50" height="50" />}
            delay={0.3}
          />
          <FeatureCard
            title="Point of Sale"
            description="Fast and efficient checkout process with support for multiple payment methods."
            icon={<img src="https://img.icons8.com/fluency/50/card-in-use.png" alt="POS icon" className="h-12 w-12" width="50" height="50" />}
            delay={0.4}
          />
          <FeatureCard
            title="GST Compliance"
            description="Stay compliant with automatic GST calculations and filing assistance."
            icon={<img src="https://img.icons8.com/fluency/50/tax.png" alt="GST icon" className="h-12 w-12" width="50" height="50" />}
            delay={0.5}
          />
          <FeatureCard
            title="Multi-device Access"
            description="Access your billing software from anywhere, on any device with cloud synchronization."
            icon={<img src="https://img.icons8.com/fluency/50/cloud-sync.png" alt="Cloud icon" className="h-12 w-12" width="50" height="50" />}
            delay={0.6}
          />
        </div>
      </section>

      {/* Feature Detail Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {/* Invoicing Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Fast and Professional Invoicing</h2>
              <p className="text-gray-400 mb-6">
                Create and send professional invoices in seconds, not hours. Customize your invoice templates and automate your billing process.
              </p>
              <ul className="space-y-3">
                {['Customizable invoice templates', 'Automatic tax calculations', 'Recurring invoice scheduling', 'Multiple currency support', 'Digital signature options'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/features/invoicing')}
                className="mt-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg flex items-center gap-2 w-fit"
              >
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10"
            >
              <img
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=600&h=400&auto=format&fit=crop"
                alt="Invoicing screenshot"
                className="w-full h-auto"
                width="600"
                height="400"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Inventory Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 order-1 lg:order-0"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop"
                alt="Inventory screenshot"
                className="w-full h-auto"
                width="600"
                height="400"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-0 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Inventory Management</h2>
              <p className="text-gray-400 mb-6">
                Keep track of your products, monitor stock levels, and get alerts when inventory is running low.
              </p>
              <ul className="space-y-3">
                {['Real-time stock tracking', 'Barcode scanning integration', 'Automatic reorder alerts', 'Product categorization', 'Supplier management'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/features/inventory')}
                className="mt-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg flex items-center gap-2 w-fit"
              >
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Reporting Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Detailed Business Reports</h2>
              <p className="text-gray-400 mb-6">
                Get actionable insights into your business performance with detailed reports and analytics.
              </p>
              <ul className="space-y-3">
                {['Sales performance tracking', 'Expense analysis', 'Profit and loss statements', 'Customer purchase patterns', 'Export to PDF, Excel, or CSV'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/features/reporting')}
                className="mt-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg flex items-center gap-2 w-fit"
              >
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10"
            >
              <img
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=600&h=400&auto=format&fit=crop"
                alt="Reporting screenshot"
                className="w-full h-auto"
                width="600"
                height="400"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 my-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 border border-purple-500/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Easibill for their billing and inventory management needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/lead')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/demo')}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg"
            >
              Request Demo
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturesPage; 
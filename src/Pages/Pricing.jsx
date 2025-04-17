import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'For small businesses just getting started',
      monthlyPrice: 999,
      annualPrice: 9990,
      features: [
        'Unlimited invoices',
        'Up to 100 customers',
        'Basic inventory management',
        'Single user account',
        'Email support',
        'Mobile app access',
        'Basic reporting'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-gray-700 hover:bg-gray-600'
    },
    {
      name: 'Professional',
      description: 'For growing businesses with advanced needs',
      monthlyPrice: 1999,
      annualPrice: 19990,
      features: [
        'Unlimited invoices',
        'Unlimited customers',
        'Advanced inventory management',
        'Up to 5 user accounts',
        'Priority email & chat support',
        'Mobile app access',
        'Advanced reporting & analytics',
        'Document management',
        'Recurring invoices',
        'Multi-currency support'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
    },
    {
      name: 'Enterprise',
      description: 'For larger organizations with complex requirements',
      monthlyPrice: 3999,
      annualPrice: 39990,
      features: [
        'All Professional features',
        'Unlimited user accounts',
        'Dedicated account manager',
        'Phone, email & chat support',
        'Custom integrations',
        'API access',
        'Advanced security features',
        'Data migration assistance',
        'White-label options',
        'Custom reporting'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-700 hover:bg-gray-600'
    }
  ];

  const faqs = [
    {
      question: 'How long is the free trial?',
      answer: 'Our free trial lasts for 14 days. No credit card is required to start the trial, and you\'ll have full access to all features of the plan you choose.'
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we can also arrange alternative payment methods such as bank transfers or checks.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees for any of our plans. You only pay the listed price, and you can cancel at any time without penalty.'
    },
    {
      question: 'Do you offer discounts for non-profits or educational institutions?',
      answer: 'Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Please contact our sales team for more information.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'If you cancel your subscription, you\'ll have 30 days to download your data. After that period, your data will be permanently deleted from our servers for security and privacy reasons.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900/20 min-h-screen pt-24">
      {/* Header */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose the plan that's right for your business, with no hidden fees
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-sm mr-3 ${isAnnual ? 'text-gray-400' : 'text-white font-medium'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none"
            >
              <span
                className={`absolute left-0 inline-block h-6 w-12 rounded-full transition-colors ${
                  isAnnual ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              />
              <span
                className={`absolute h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ml-3 ${isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>
              Annual <span className="text-green-400 font-medium">(Save 20%)</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border ${
                plan.popular
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ₹{isAnnual ? Math.round(plan.annualPrice / 12).toLocaleString() : plan.monthlyPrice.toLocaleString()}
                  </span>
                  <span className="text-gray-400 ml-2">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-green-400 mt-1">
                      Billed annually (₹{plan.annualPrice.toLocaleString()})
                    </div>
                  )}
                </div>
                <button
                  onClick={() => navigate('/lead')}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors mb-8 ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
                <div className="border-t border-gray-800 pt-6">
                  <h4 className="text-white font-medium mb-4">Features include:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 border border-purple-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">Need a custom solution?</h2>
              <p className="text-gray-300 mb-6">
                Get in touch with our sales team to discuss your specific requirements and get a customized plan tailored to your business.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Custom integrations and API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Personalized onboarding and training</span>
                </li>
              </ul>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2 bg-white text-purple-900 hover:bg-gray-100 font-medium rounded-lg flex items-center gap-2 w-fit"
              >
                Contact Sales <ArrowRight size={16} />
              </button>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573167507387-dd4d44561edb?q=80&w=300&h=300&auto=format&fit=crop"
                alt="Enterprise"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about our pricing and plans
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3 flex items-start">
                <HelpCircle className="text-purple-500 mr-2 flex-shrink-0 mt-1" size={20} />
                <span>{faq.question}</span>
              </h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Try Easibill free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/lead')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => navigate('/lead')}
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

export default PricingPage; 
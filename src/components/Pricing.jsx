import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic Plan',
    price: '300',
    features: [
    'Order summaries',
      'Whatsapp messages for sales',
      'Download the reports'
    ]
  },
  {
    name: 'Pro Plan',
    price: '900',
    popular: true,
    features: [
      'Order summaries',
      'Whatsapp messages for sales',
      'Download the reports',
      'Send future campaigns using whatsapp',
      'AI contents',
    ]
  },
  {
    name: 'Enterprise Plan',
    price: '2000',
    features: [
      'Order summaries',
      'Whatsapp messages for sales',
      'Download the reports',
      'Send future campaigns using whatsapp',
      'AI contents',
      'Email messages for sales and marketing',
      'SMS messages for sales and marketing',
      'Email newsletters',
      'Social media integration',
      'Integration with CRM systems',
      'Integration with payment gateways',
    ]
  }
]

const Pricing = () => {
  return (
    <section className="container mx-auto px-6 py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Supercharge Your Analytics
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`bg-gray-900 p-6 rounded-lg ${plan.popular ? 'border-2 border-purple-600' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Rs: {plan.price}</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-purple-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className={plan.popular ? 'w-full bg-purple-600 hover: bg-purple-700 ':' w-full bg-white-600'} 
              variant={plan.popular ? 'default' : 'outline'}
            >
              Try it
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing


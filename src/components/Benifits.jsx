import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'Intuitive and customizable user interface',
  'Scalable for growing businesses',
  'Supports high read and write operations',
  'Tailored for local shops and small businesses',
  'Integrates with popular messaging platforms like WhatsApp',
  'Designed to meet the specific needs of local business owners'
]

const Benefits = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Easibill?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
            <p>{benefit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Benefits


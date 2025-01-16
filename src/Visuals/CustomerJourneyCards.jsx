import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, CreditCard, Send, Smartphone, Database, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: ShoppingBag,
    title: 'Customer Purchase',
    description: 'Customer enters the store and buys products',
    color: 'bg-purple-500'
  },
  {
    icon: CreditCard,
    secondaryIcon: Database,
    title: 'Payment and Data Storage',
    description: 'Process payment and store customer data securely',
    color: 'bg-blue-500'
  },
  {
    icon: Send,
    title: 'Invoice Sent',
    description: 'Send invoice via WhatsApp and email',
    color: 'bg-green-500'
  },
  {
    icon: Smartphone,
    title: 'Future Marketing',
    description: 'Send promotional offers via WhatsApp',
    color: 'bg-orange-500'
  },
]

const CustomerJourney = () => {
  return (
    <div className="min-h-screen gap-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Your Customer Journey
        </motion.h2>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />

          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              {...step}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const TimelineStep = ({ 
  icon: Icon, 
  secondaryIcon: SecondaryIcon, 
  title, 
  description, 
  color,
  index 
}) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex mb-12 items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Content Section */}
      <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-xl relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`absolute ${isEven ? '-right-6' : '-left-6'} top-1/2 transform -translate-y-1/2
            w-12 h-12 rounded-full ${color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="text-white" size={24} />
          </div>

          {SecondaryIcon && (
            <motion.div
              className="absolute -bottom-3 -right-3 w-8 h-8 bg-gray-700 rounded-full 
                flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <SecondaryIcon size={16} className="text-white" />
            </motion.div>
          )}

          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>

          {/* Connection Arrow */}
          <motion.div 
            className={`absolute top-1/2 transform -translate-y-1/2
              ${isEven ? '-right-16' : '-left-16'} text-gray-500`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowRight 
              size={24}
              className={isEven ? 'rotate-0' : 'rotate-180'}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Center Timeline Dot */}
      <motion.div
        className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${color} rounded-full`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 }}
      />
    </motion.div>
  )
}

export default CustomerJourney
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: '1',
    title: 'Data Collection',
    description: 'Gather and organize your business data from multiple sources, including sales, marketing, and customer interactions.'
  },
  {
    number: '2',
    title: 'Analysis',
    description: 'Our AI-powered analytics engine processes your data to identify patterns, trends, and insights.'
  },
  {
    number: '3',
    title: 'Visualization',
    description: 'View your data through intuitive dashboards and interactive charts for easy understanding.'
  },
  {
    number: '4',
    title: 'Prediction',
    description: 'Leverage machine learning algorithms to forecast future trends and outcomes.'
  },
  {
    number: '5',
    title: 'Action',
    description: 'Receive actionable recommendations to optimize your business strategies and operations.'
  },
  {
    number: '6',
    title: 'Iteration',
    description: 'Continuously refine your approach based on new data and insights for ongoing improvement.'
  }
]

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="process" className="container mx-auto px-6 py-20" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Our Data-Driven Process
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">{step.number}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Process


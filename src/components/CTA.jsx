import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { PieChart, LineChart } from 'lucide-react'

const CTA = () => {
  return (
    <section className="container mx-auto px-6 py-20 bg-gradient-transparent text-white">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Make Data-Driven Decisions?
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of businesses using MarketMe to transform their operations and drive growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
            Start Free Trial
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-center gap-12 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <PieChart className="w-16 h-16 text-purple-600" />
          <LineChart className="w-16 h-16 text-purple-600" />
        </motion.div>
      </div>
    </section>
  )
}

export default CTA


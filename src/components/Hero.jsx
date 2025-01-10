'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, BarChart } from './Charts'

const Hero = () => {
  const lineChartData = [
    { name: 'Jan', total: 4500 },
    { name: 'Feb', total: 3800 },
    { name: 'Mar', total: 5200 },
    { name: 'Apr', total: 4800 },
    { name: 'May', total: 6000 },
    { name: 'Jun', total: 5500 },
  ]

  const barChartData = [
    { name: 'Mon', total: 800 },
    { name: 'Tue', total: 950 },
    { name: 'Wed', total: 1100 },
    { name: 'Thu', total: 950 },
    { name: 'Fri', total: 1200 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24 bg-black-50 dark:bg-gray-900">
      <motion.div
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white-800 dark:text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Intelligent Insights for Agile Enterprises
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transform your business with smart automation, insightful analytics, and data-driven strategies. Stay ahead of the competition with MarketMe's cutting-edge platform.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Monthly Revenue</h3>
            </div>
            <div className="h-[200px] p-4">
              <LineChart data={lineChartData} />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Daily Sales</h3>
            </div>
            <div className="h-[200px] p-4">
              <BarChart data={barChartData} />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Product Share</h3>
            </div>
            <div className="h-[200px] p-4 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Pie Chart Coming Soon</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero


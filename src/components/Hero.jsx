'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { LineChart, BarChart } from './Charts'
import { ArrowRight, Play, MessageCircle } from 'lucide-react'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const [showNotification, setShowNotification] = useState(false)

  const lineChartData = [
    { name: 'Jan', total: 4500 },
    { name: 'Feb', total: 4700 },
    { name: 'Mar', total: 4900 },
    { name: 'Apr', total: 5200 },
    { name: 'May', total: 5500 },
    { name: 'Jun', total: 5800 },
    { name: 'Jul', total: 6100 },
    { name: 'Aug', total: 5900 },
    { name: 'Sep', total: 5700 },
    { name: 'Oct', total: 5600 },
    { name: 'Nov', total: 5300 },
    { name: 'Dec', total: 5000 },
  ];
  

  const barChartData = [
    { name: 'Mon', total: 850 },
    { name: 'Tue', total: 900 },
    { name: 'Wed', total: 950 },
    { name: 'Thu', total: 1000 },
    { name: 'Fri', total: 1050 },
    { name: 'Sat', total: 1025 },
    { name: 'Sun', total: 975 },
  ];
  

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

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ scale: 0.99, transition: { duration: 6 } })
      await controls.start({ scale: 1, transition: { duration: 6 } })
      sequence()
    }
    sequence()

    const notificationInterval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 800)
    }, 1500)

    return () => clearInterval(notificationInterval)
  }, [controls])

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
        <motion.h1 
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  Elevate Your Marketing Game with MarketMe
</motion.h1>

          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            MarketMe empowers local businesses to connect with their audience effortlessly. 
            Generate campaigns, manage customers, and grow your brand with cutting-edge tools designed for success.
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
              className="group px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
            >
              Get Started
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 5 : 0 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 text-lg font-semibold text-purple-400 border-2 border-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-colors duration-300 flex items-center justify-center"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              Watch Demo
              <motion.span
                className="ml-2"
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Play className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 gap-4"
          animate={controls}
        >
          <motion.div
            variants={itemVariants}
            className="col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-100">Monthly Revenue</h3>
            </div>
            <div className="h-[200px] p-4">
              <LineChart data={lineChartData} />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-100">Daily Sales</h3>
            </div>
            <div className="h-[200px] p-4">
              <BarChart data={barChartData} />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-100">WhatsApp Notifications</h3>
            </div>
            <div className="h-[200px] p-4 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: showNotification ? 1 : 0, y: showNotification ? 0 : -20 }}
                transition={{ duration: 0.3 }}
              >
                New message!
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

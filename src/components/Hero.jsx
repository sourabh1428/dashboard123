'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { LineChart, BarChart } from './Charts'
import { ArrowRight, Play, MessageCircle, Zap, Star } from 'lucide-react'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)
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

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  }

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 800)
    }, 5000)

    return () => clearInterval(notificationInterval)
  }, [])

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16 bg-transparent text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="w-full lg:w-1/2">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white-500 to-black-500"
          >
            Elevate Your Marketing Game with MarketMe
          </motion.h1>
          <motion.p 
            className="text-gray-200 text-base md:text-lg mb-6 max-w-2xl"
            variants={itemVariants}
          >
            MarketMe empowers local businesses to connect with their audience effortlessly. 
            Generate campaigns, manage customers, and grow your brand with cutting-edge tools designed for success.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group px-6 py-2 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
           
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className="col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-3 md:p-4" aria-label="Monthly Revenue Chart">
              <h3 className="text-base md:text-lg font-semibold text-gray-100">Monthly Revenue</h3>
            </div>
            <div className="h-[150px] md:h-[200px] p-2 md:p-4">
              <LineChart data={lineChartData} />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 md:p-4" aria-label="Daily Sales Chart">
              <h3 className="text-base md:text-lg font-semibold text-gray-100">Daily Sales</h3>
            </div>
            <div className="h-[150px] md:h-[200px] p-2 md:p-4">
              <BarChart data={barChartData} />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 md:p-4" aria-label="WhatsApp Notifications">
              <h3 className="text-base md:text-lg font-semibold text-gray-100">WhatsApp Notifications</h3>
            </div>
            <div className="h-[150px] md:h-[200px] p-2 md:p-4 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-lg">
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <motion.div
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs md:text-sm font-semibold"
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
      <motion.div 
        className="absolute top-4 left-4 md:top-10 md:left-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      >
        <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 filter drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute bottom-4 right-4 md:bottom-10 md:right-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      >
        <Star className="w-6 h-6 md:w-8 md:h-8 text-purple-400 filter drop-shadow-lg" />
      </motion.div>
    </section>
  )
}

export default Hero


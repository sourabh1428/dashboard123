'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import { FadeInSection } from '@/components/fade-in-section'
import Analytics from './components/Analytics'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FeatureShowcase from './components/FeatureShowCase'
import { BuyerAnalysis } from './components/BuyerAnalysis'
import { TaskAutomation } from './components/TaskAutomation'
import CustomerJourneyCards from './Visuals/CustomerJourneyCards'
import { ChevronUp } from 'lucide-react'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const containerRef = useRef(null)
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Adjusted transform values for smoother hero transition
  const heroOpacity = useTransform(
    scrollY,
    [0, window.innerHeight * 0.5, window.innerHeight], 
    [1, 1, 0]
  )
  const heroScale = useTransform(
    scrollY,
    [0, window.innerHeight * 0.5, window.innerHeight],
    [1, 1, 0.95]
  )
  
  const heroY = useTransform(
    scrollY,
    [0, window.innerHeight],
    [0, window.innerHeight * 0.3]
  )

  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const backgroundVariants = {
    initial: {
      backgroundPosition: "0% 0%",
    },
    animate: {
      backgroundPosition: "100% 100%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  // Enhanced section variants for smoother transitions
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smoother animation
      }
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50"
        style={{ scaleX }}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="relative">
          {/* Hero Section with improved transitions */}
          <motion.div 
            style={{ 
              opacity: heroOpacity, 
              scale: heroScale,
              y: heroY
            }} 
            className="relative z-20 min-h-screen flex items-center justify-center"
          >
            <FadeInSection>
              <Hero />
            </FadeInSection>
          </motion.div>
          
          {/* Content sections with improved spacing and animations */}
          <div className="container mx-auto px-4 py-16">
            <div className="space-y-48">
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <CustomerJourneyCards />
              </motion.div>
              
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <FeatureShowcase />
              </motion.div>
              
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <BuyerAnalysis />
              </motion.div>
              
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <TaskAutomation />
              </motion.div>
              
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <Analytics />
              </motion.div>
              
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <Process />
              </motion.div>
              
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <Pricing />
              </motion.div>
              
              <motion.div 
                variants={sectionVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }}
                className="py-16"
              >
                <CTA />
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
      
      {/* Enhanced floating elements */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/20 opacity-20 blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="fixed top-1/2 right-1/3 w-48 h-48 rounded-full bg-green-500/20 opacity-20 blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Enhanced scroll to top button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg z-50 hover:shadow-xl"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default App
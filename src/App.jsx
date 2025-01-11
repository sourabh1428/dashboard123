'use client'

import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
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

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-50"
        style={{ scaleX }}
      />
      <div className="min-h-screen bg-background text-foreground overflow-y-auto">
        <Navbar />
        <main>
          <FadeInSection>
            <Hero />
          </FadeInSection>
          
          <FadeInSection delay={0.2}>
            <CustomerJourneyCards />
          </FadeInSection>
          
          <FadeInSection delay={0.3}>
            <FeatureShowcase />
          </FadeInSection>
          
          <FadeInSection delay={0.4}>
            <BuyerAnalysis />
          </FadeInSection>
          
          <FadeInSection delay={0.5}>
            <TaskAutomation />
          </FadeInSection>
          
          <FadeInSection delay={0.6}>
            <Analytics />
          </FadeInSection>
          
          <FadeInSection delay={0.7}>
            <Process />
          </FadeInSection>
          
          <FadeInSection delay={0.8}>
            <Pricing />
          </FadeInSection>
          
          <FadeInSection delay={0.9}>
            <CTA />
          </FadeInSection>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App


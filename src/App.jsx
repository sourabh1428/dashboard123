'use client'

import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FeatureShowcase from './components/FeatureShowCase'

const App = () => {
  return (
   
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <FeatureShowcase/>
          <Partners />
          <Features />
          <Analytics />
          <Process />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
  
  )
}

export default App


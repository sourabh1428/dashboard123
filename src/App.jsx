'use client'

import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'


import Analytics from './components/Analytics'
import Process from './components/Process'

import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FeatureShowcase from './components/FeatureShowCase'
import { BuyerAnalysis } from './components/BuyerAnalysis'
import { TaskAutomation } from './components/TaskAutomation'
import CustomerJourney from './Visuals/CustomerJourney'
import CustomerJourneyCards from './Visuals/CustomerJourneyCards'


const App = () => {
  return (
   
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
       <CustomerJourneyCards/>
          <FeatureShowcase/>
     
          <BuyerAnalysis/>
          <TaskAutomation/>
      
          <Analytics />
          <Process />
     
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
  
  )
}

export default App


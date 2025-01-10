import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { LineChart, BarChart, PieChart } from './Charts.jsx'

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

  

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Intelligent Insights for Agile Enterprises
          </motion.h1>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl mb-8"
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
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <Card className="col-span-2 bg-gradient-to-br from-purple-900 to-indigo-900">
            <CardHeader>
              <CardTitle className="text-white">Monthly Revenue</CardTitle>
            </CardHeader>
            
          </Card>
          <Card className="bg-gradient-to-br from-pink-900 to-rose-900">
            <CardHeader>
              <CardTitle className="text-white">Daily Sales</CardTitle>
            </CardHeader>
          
          </Card>
          <Card className="bg-gradient-to-br from-indigo-900 to-blue-900">
            <CardHeader>
              <CardTitle className="text-white">Product Share</CardTitle>
            </CardHeader>

          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

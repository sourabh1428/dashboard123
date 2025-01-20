import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LineChart, BarChart, PieChart, TrendingUp, Zap, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from 'react-router'

const Analytics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const navigate = useNavigate();
  const [hoveredChart, setHoveredChart] = useState(null);

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const chartData = [
    { icon: LineChart, title: "Real-time Trends", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart, title: "Performance Metrics", color: "from-green-500 to-emerald-500" },
    { icon: PieChart, title: "Market Segmentation", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, title: "Growth Analytics", color: "from-orange-500 to-red-500" },
  ]

  const features = [
    { icon: Zap, title: "Real-time data visualization", description: "See your data come to life with instant updates and dynamic charts." },
    { icon: Target, title: "Customizable dashboards", description: "Create the perfect view of your data with drag-and-drop simplicity." },
    { icon: TrendingUp, title: "Predictive modeling", description: "Forecast trends and make data-driven decisions with AI-powered insights." },
  ]

  return (
    <section id="analytics" className="relative overflow-hidden py-20 lg:py-32" ref={ref}>
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              Unlock the Power of Data
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Our cutting-edge analytics platform empowers you to understand trends, predict outcomes, and make data-driven decisions that keep you ahead of the curve.
            </p>
            <motion.div 
              variants={containerVariants}
              className="space-y-6 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <feature.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/80 hover:to-purple-500/80 transition-all duration-300"
                onClick={() => navigate('/lead')}
              >
                Explore Analytics Features
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {chartData.map((chart, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredChart(index)}
                onHoverEnd={() => setHoveredChart(null)}
              >
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${chart.color}`}
                      animate={{
                        scale: hoveredChart === index ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.5, repeat: hoveredChart === index ? Infinity : 0 }}
                    >
                      <chart.icon className="text-white w-10 h-10" />
                    </motion.div>
                    <h3 className="text-center text-lg font-semibold text-white">{chart.title}</h3>
                    <AnimatePresence>
                      {hoveredChart === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-center text-white-400 mt-2 text-white"
                        >
                          Click to explore {chart.title.toLowerCase()} in detail.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32"></div>
    </section>
  )
}

export default Analytics


'use client'

import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { MoreHorizontal } from 'lucide-react'

const CircularProgress = ({ progress }) => {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <motion.svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <circle
        cx="80"
        cy="80"
        r={radius}
        fill="none"
        stroke="#374151"
        strokeWidth="12"
      />
      <motion.circle
        cx="80"
        cy="80"
        r={radius}
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        animate={{ 
          strokeDashoffset: [strokeDashoffset, circumference, strokeDashoffset] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  )
}

const Avatar = ({ className }) => (
  <div className={`bg-gray-700 rounded-full ${className}`}></div>
)

const Progress = ({ value, className }) => (
  <div className={`h-2 rounded-full ${className}`}>
    <motion.div
      className="h-full bg-purple-600 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: [`${value}%`, "100%", `${value}%`] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  </div>
)

const BuyerPersona = ({ name, progress }) => (
  <div className="flex items-center gap-3">
    <Avatar className="h-8 w-8" />
    <Progress value={progress} className="flex-1 bg-gray-700" />
  </div>
)

const Metric = () => {
  const controls = useAnimation()

  React.useEffect(() => {
    controls.start({
      x: [0, 20, 0],
      transition: { duration: 3, repeat: Infinity, ease: "linear" }
    })
  }, [controls])

  return (
    <motion.div className="flex gap-2 items-center" animate={controls}>
      <div className="h-2 w-16 bg-purple-600 rounded" />
      <div className="h-2 w-24 bg-gray-700 rounded" />
    </motion.div>
  )
}

const Card = ({ children, className }) => (
  <div className={`rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ children, className }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
)

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-semibold ${className}`}>
    {children}
  </h3>
)

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
)

 function BuyerAnalysis() {
  return (
    <section className="py-20 px-6 bg-gradient-transparent text-white text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-700">
              <CardTitle>Buyer Behavior Analysis</CardTitle>
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-5 gap-4 items-center">
                <div className="col-span-2">
                  <CircularProgress progress={75} />
                </div>
                <div className="col-span-3 space-y-4">
                  <Metric />
                  <Metric />
                  <Metric />
                </div>
              </div>
              <div className="space-y-4">
                <BuyerPersona name="Small Business Owner" progress={80} />
                <BuyerPersona name="E-commerce Entrepreneur" progress={65} />
                <BuyerPersona name="Retail Manager" progress={45} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-black text-transparent bg-clip-text "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Stay Ahead of Your Competition with Predictive Insights
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Leverage MarketMe's buyer behavior analysis tools to uncover insights that empower you to tailor your campaigns and engage with your customers more effectively.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(BuyerAnalysis)
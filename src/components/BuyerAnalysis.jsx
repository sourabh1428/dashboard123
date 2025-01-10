'use client'

import React from 'react'
import { motion } from "framer-motion"
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
      initial={{ rotate: -90 }}
      animate={{ rotate: 270 }}
      transition={{ duration: 2, ease: "easeInOut" }}
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
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}

const Avatar = ({ className }) => (
  <div className={`bg-gray-700 rounded-full ${className}`}></div>
)

const Progress = ({ value, className }) => (
  <div className={`h-2 rounded-full ${className}`}>
    <div
      className="h-full bg-purple-600 rounded-full"
      style={{ width: `${value}%` }}
    ></div>
  </div>
)

const BuyerPersona = ({ name, progress }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3"
  >
    <Avatar className="h-8 w-8" />
    <Progress value={progress} className="flex-1 bg-gray-700" />
  </motion.div>
)

const Metric = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex gap-2 items-center"
  >
    <div className="h-2 w-16 bg-purple-600 rounded" />
    <div className="h-2 w-24 bg-gray-700 rounded" />
  </motion.div>
)

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

export  function BuyerAnalysis() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-700">
              <CardTitle>Buyer Behaviour Analysis</CardTitle>
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-5 gap-4 items-center">
                <div className="col-span-2">
                  <CircularProgress progress={75} />
                </div>
                <div className="col-span-3 space-y-4">
                  <Metric delay={0.2} />
                  <Metric delay={0.3} />
                  <Metric delay={0.4} />
                </div>
              </div>
              <div className="space-y-4">
                <BuyerPersona name="Buyer Persona 1" progress={80} />
                <BuyerPersona name="Buyer Persona 2" progress={65} />
                <BuyerPersona name="Buyer Persona 3" progress={45} />
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
            className="text-4xl font-bold"
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
            Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import React from 'react'
import { motion } from "framer-motion"
import { Plus, MoreHorizontal } from 'lucide-react'

const tasks = [
  {
    title: "Research Buyer Persona for Product A",
    progress: 75
  },
  {
    title: "Create Marketing Budget for Campaign A",
    progress: 45
  },
  {
    title: "Write Ad Script for Buyer Persona A",
    progress: 30
  }
]

const Switch = () => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
  </label>
)

const Avatar = () => (
  <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center">
    <span className="text-xs text-white">AV</span>
  </div>
)

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Card = ({ children, className, ...props }) => (
  <div className={`bg-gray-900 border border-gray-800 rounded-lg overflow-hidden ${className}`} {...props}>
    {children}
  </div>
)

const TaskItem = ({ task, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50"
  >
    <Avatar />
    <div className="flex-1">
      <div className="text-sm font-medium text-white">{task.title}</div>
      <div className="h-2 w-full bg-gray-700 rounded mt-2">
        <motion.div
          className="h-full bg-purple-600 rounded"
          initial={{ width: 0 }}
          animate={{ width: `${task.progress}%` }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      </div>
    </div>
    <Switch />
  </motion.div>
)

export function TaskAutomation() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
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
            Automate Your Marketing Tasks with MarketMe
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Streamline your marketing campaigns with ease. Manage buyer personas, budget allocation, and ad scripts all in one platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Start Automating Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2 inline-block"
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h3 className="text-xl font-semibold">Your Tasks in MarketMe</h3>
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </div>
            <div className="p-6 space-y-4">
              {tasks.map((task, index) => (
                <TaskItem key={index} task={task} index={index} />
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center mt-6"
              >
                <Button className="rounded-full p-2 bg-gray-800 hover:bg-gray-700">
                  <Plus className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

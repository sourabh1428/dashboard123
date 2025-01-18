'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Building, Phone, Target, ChevronRight, ChevronLeft, Send, Briefcase, Globe } from 'lucide-react'

const questions = [
  { id: 1, label: "What's your name?", icon: User, type: "text", name: "name" },
  { id: 2, label: "What's your email address?", icon: Mail, type: "email", name: "email" },
  { id: 3, label: "What's your mobile number?", icon: Phone, type: "tel", name: "mobile" },
  { id: 4, label: "What's your company name?", icon: Briefcase, type: "text", name: "companyName" },
 
  { id: 5, label: "What's your industry?", icon: Globe, type: "text", name: "industry" },
  { id: 6, label: "Location", icon: Globe, type: "text", name: "industry" },
]

export default function Leads() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({})

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const QuestionComponent = ({ question }) => {
    const Icon = question.icon

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <label htmlFor={question.name} className="block text-xl font-semibold text-white flex items-center space-x-2">
          <Icon className="w-6 h-6" />
          <span>{question.label}</span>
        </label>
        {question.type === 'select' ? (
          <select
            id={question.name}
            name={question.name}
            value={formData[question.name] || ''}
            onChange={handleInputChange}
            className="w-full p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-md text-white placeholder-white placeholder-opacity-70 outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            type={question.type}
            id={question.name}
            name={question.name}
            value={formData[question.name] || ''}
            onChange={handleInputChange}
            className="w-full p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-md text-white placeholder-white placeholder-opacity-70 outline-none focus:ring-2 focus:ring-white"
            placeholder={`Enter your ${question.name.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
            required
          />
        )}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-white-500 to-black-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative overflow-hidden"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-8">We will contact you soon!</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              <QuestionComponent key={step} question={questions[step]} />
            </AnimatePresence>
            <div className="flex justify-between mt-8">
              {step > 0 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-white flex items-center space-x-2 hover:bg-opacity-30 transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </motion.button>
              )}
              {step < questions.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-4 py-2 bg-white rounded-lg text-purple-600 flex items-center space-x-2 ml-auto hover:bg-opacity-90 transition-all duration-200"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 bg-white rounded-lg text-purple-600 flex items-center space-x-2 ml-auto hover:bg-opacity-90 transition-all duration-200"
                >
                  <span>Submit</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </form>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === step ? 'bg-white' : 'bg-white bg-opacity-30'}`}
                  animate={{ scale: index === step ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


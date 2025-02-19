'use client'

import { motion } from 'framer-motion'

export const SmoothScrollWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="smooth-scroll-wrapper"
    >
      {children}
    </motion.div>
  )
}


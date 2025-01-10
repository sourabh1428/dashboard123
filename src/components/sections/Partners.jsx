'use client'

import { motion } from "framer-motion"

const partners = Array(6).fill(null)

export function Partners() {
  return (
    <section className="py-12 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {partners.map((_, i) => (
            <motion.img
              key={i}
              src="/placeholder.svg?height=40&width=120"
              alt={`Partner ${i + 1}`}
              className="h-8 opacity-50 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ opacity: 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


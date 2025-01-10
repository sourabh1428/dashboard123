'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Benefits", href: "#benefits" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
]

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-12">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="/placeholder.svg?height=32&width=120" 
            alt="Logo" 
            className="h-8" 
          />
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Log in
          </Button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-purple-600 hover:bg-purple-700">
              Sign up
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}


import React from 'react'
import { motion } from 'framer-motion'

const partners = [
  { id: 1, name: 'TechCorp', logo: 'https://via.placeholder.com/150?text=TechCorp' },
  { id: 2, name: 'InnovateCo', logo: 'https://via.placeholder.com/150?text=InnovateCo' },
  { id: 3, name: 'FutureTech', logo: 'https://via.placeholder.com/150?text=FutureTech' },
  { id: 4, name: 'DataDrive', logo: 'https://via.placeholder.com/150?text=DataDrive' },
  { id: 5, name: 'AIVentures', logo: 'https://via.placeholder.com/150?text=AIVentures' },
  { id: 6, name: 'CloudNine', logo: 'https://via.placeholder.com/150?text=CloudNine' },
  { id: 7, name: 'SmartSys', logo: 'https://via.placeholder.com/150?text=SmartSys' },
  { id: 8, name: 'NextGen', logo: 'https://via.placeholder.com/150?text=NextGen' },
]

const Partners = () => {
  return (
    <section className="container mx-auto px-6 py-12 border-t border-gray-800">
      <motion.h2
        className="text-2xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Trusted by Industry Leaders
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={partner.logo} alt={partner.name} className="w-32 h-12 object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Partners


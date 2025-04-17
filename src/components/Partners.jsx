import React from 'react'
import { motion } from 'framer-motion'

const partners = [
  { id: 1, name: 'TechCorp', logo: 'https://img.icons8.com/color/150/000000/microsoft.png' },
  { id: 2, name: 'InnovateCo', logo: 'https://img.icons8.com/color/150/000000/google-logo.png' },
  { id: 3, name: 'FutureTech', logo: 'https://img.icons8.com/color/150/000000/amazon.png' },
  { id: 4, name: 'DataDrive', logo: 'https://img.icons8.com/color/150/000000/salesforce.png' },
  { id: 5, name: 'AIVentures', logo: 'https://img.icons8.com/color/150/000000/ibm.png' },
  { id: 6, name: 'CloudNine', logo: 'https://img.icons8.com/color/150/000000/dropbox.png' },
  { id: 7, name: 'SmartSys', logo: 'https://img.icons8.com/color/150/000000/oracle-logo.png' },
  { id: 8, name: 'NextGen', logo: 'https://img.icons8.com/color/150/000000/intel.png' },
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


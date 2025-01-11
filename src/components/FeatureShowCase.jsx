import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Zap, Shield, Globe, Cpu, Cloud } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Effortless Campaigns', description: 'Create and launch campaigns with ease using MarketMe.' },
  { icon: Shield, title: 'Secure Data', description: 'Your customer data is safeguarded with enterprise-grade security.' },
  { icon: Globe, title: 'Reach Everywhere', description: 'Expand your business globally with our powerful tools.' },
  { icon: Cpu, title: 'AI-Driven Insights', description: 'Harness AI for actionable insights and smarter decisions.' },
  { icon: Cloud, title: 'Cloud-First Platform', description: 'MarketMe operates seamlessly on the cloud for reliability.' },
  { icon: ArrowUpRight, title: 'Scale with Ease', description: 'MarketMe grows with your business, no matter the size.' },
]

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500">
      <CardHeader>
        <Icon className="w-8 h-8 text-purple-400" />
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

const FeatureShowcase = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400">Features</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Unlock Growth with MarketMe
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover how MarketMe's innovative platform can transform your marketing efforts and drive success.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default FeatureShowcase

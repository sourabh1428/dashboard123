import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, FileText, Zap, Globe, Lock } from 'lucide-react'

const features = [
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your business performance with our cutting-edge analytics tools.',
    image: 'https://source.unsplash.com/random/800x600?analytics'
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: 'Team Collaboration',
    description: 'Foster seamless teamwork with built-in collaboration features and real-time updates.',
    image: 'https://source.unsplash.com/random/800x600?collaboration'
  },
  {
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: 'Smart Reporting',
    description: 'Generate comprehensive reports with a single click, saving time and improving decision-making.',
    image: 'https://source.unsplash.com/random/800x600?report'
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: 'Automation',
    description: 'Streamline your workflow with intelligent automation features that save time and reduce errors.',
    image: 'https://source.unsplash.com/random/800x600?automation'
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: 'Global Reach',
    description: 'Expand your business globally with our multi-language and multi-currency support.',
    image: 'https://source.unsplash.com/random/800x600?global'
  },
  {
    icon: <Lock className="w-12 h-12 text-primary" />,
    title: 'Enterprise Security',
    description: 'Protect your data with industry-leading security measures and compliance standards.',
    image: 'https://source.unsplash.com/random/800x600?security'
  }
]

const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <img 
            src={feature.image} 
            alt={feature.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div 
              className="text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {feature.icon}
            </motion.div>
          </div>
        </div>
        <CardHeader>
          <CardTitle>{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section id="features" className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Powerful Features to Supercharge Your Business
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Features


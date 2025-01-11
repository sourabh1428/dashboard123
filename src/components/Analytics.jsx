import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LineChart, BarChart, PieChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Analytics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="analytics" className="container mx-auto px-4 py-12 md:py-20 lg:py-24  bg-gradient-to-br from-gray-900 to-black text-white" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unlock the Power of Data with Advanced Analytics
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our cutting-edge analytics platform helps you understand trends, predict outcomes, and make data-driven decisions that keep you ahead of the curve. With MarketMe, you'll have access to:
          </p>
          <ul className="space-y-4 mb-8">
            <motion.li 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <LineChart className="text-primary" />
              <span>Real-time data visualization</span>
            </motion.li>
            <motion.li 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <BarChart className="text-primary" />
              <span>Customizable dashboards</span>
            </motion.li>
            <motion.li 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <PieChart className="text-primary" />
              <span>Predictive modeling and forecasting</span>
            </motion.li>
          </ul>
          <Button size="lg" className="text-lg px-8">
            Explore Analytics Features
          </Button>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              variants={chartVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: item * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item === 1 && <LineChart className="text-background" />}
                    {item === 2 && <BarChart className="text-background" />}
                    {item === 3 && <PieChart className="text-background" />}
                    {item === 4 && <LineChart className="text-background" />}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Analytics


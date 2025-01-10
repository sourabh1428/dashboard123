import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart } from '@/components/ui/chart'

const CustomerSales = () => {
  const salesData = Array.from({ length: 100 }, (_, i) => ({
    date: new Date(2023, 0, i + 1).toISOString().split('T')[0],
    sales: Math.floor(Math.random() * 10000) + 1000,
  }))

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Customer Sales Performance
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Sales Trend (Last 100 Days)</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <LineChart data={salesData} />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default CustomerSales


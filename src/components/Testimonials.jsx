import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, TechStart',
    content: 'MarketMe has revolutionized how we approach data analysis. The insights weve gained have been invaluable for our growth strategy.',
    rating: 5,
    image: 'https://source.unsplash.com/random/100x100?face-1'
  },
  {
    name: 'Jane Smith',
    position: 'Marketing Director, GrowthCo',
    content: 'The predictive analytics feature has helped us stay ahead of market trends. Is like having a crystal ball for our business!',
    rating: 5,
    image: 'https://source.unsplash.com/random/100x100?face-2'
  },
  {
    name: 'Mike Johnson',
    position: 'CTO, InnovateTech',
    content: 'The ease of use and powerful features make MarketMe a must-have tool for any data-driven organization.',
    rating: 5,
    image: 'https://source.unsplash.com/random/100x100?face-3'
  },
  {
    name: 'Sarah Lee',
    position: 'Data Scientist, AnalyticsPro',
    content: 'As a data scientist, Im impressed by the depth and accuracy of MarketMes analytics. Its a game-changer for our industry.',
    rating: 5,
    image: 'https://source.unsplash.com/random/100x100?face-4'
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-gray-900 py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


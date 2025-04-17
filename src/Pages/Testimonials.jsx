import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TestimonialCard = ({ name, role, company, image, quote, rating = 5, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
  >
    <div className="flex items-center mb-4">
      <div className="mr-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
          width="64"
          height="64"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-gray-400">{role}, {company}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <Star key={i + rating} size={18} className="text-gray-600" />
      ))}
    </div>
    <div className="relative">
      <Quote size={36} className="absolute -top-2 -left-2 text-purple-500/20" />
      <p className="text-gray-300 relative z-10 pl-3">{quote}</p>
    </div>
  </motion.div>
);

const TestimonialsPage = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, RetailTech',
      text: 'Easibill has transformed how we handle our invoicing and inventory management. The interface is intuitive, and our staff learned to use it quickly. Customer support has been exceptional whenever we had questions.',
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Owner, Chen Grocery',
      text: 'As a small business owner, I needed a billing solution that was affordable but powerful. Easibill delivered exactly what I needed without the complexity of other systems. Highly recommended!',
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: 3,
      name: 'Rajesh Sharma',
      role: 'Owner',
      company: "Sharma Electronics",
      text: "Easibill has transformed how we manage our inventory and billing. The software is intuitive and has helped us reduce billing errors by 90%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Priya Patel",
      role: "Manager",
      company: "Patel Grocery Store",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      quote: "We've been using Easibill for over a year now, and it has made our billing process so much faster. Our customers love the professional invoices.",
      rating: 5
    },
    {
      name: "Amit Verma",
      role: "CEO",
      company: "Verma Distributors",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      quote: "The inventory management features in Easibill have helped us optimize our stock levels and reduce wastage. Great value for money!",
      rating: 4
    },
    {
      name: "Sneha Gupta",
      role: "Finance Director",
      company: "Gupta Textiles",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
      quote: "Easibill's reporting features provide valuable insights into our business performance. It's like having a financial advisor built into your billing software.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Owner",
      company: "Singh Hardware Store",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      quote: "The GST compliance features have saved us countless hours of work. No more manual calculations or errors in tax filing.",
      rating: 4
    },
    {
      name: "Ananya Reddy",
      role: "Operations Manager",
      company: "Reddy Pharmaceuticals",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150&auto=format&fit=crop",
      quote: "Customer support is exceptional. Any time we've had questions, the team has been quick to respond and resolve our issues.",
      rating: 5
    },
    {
      name: "Mohammed Khan",
      role: "Owner",
      company: "Khan Fashion Outlet",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
      quote: "We tried several billing software options before settling on Easibill. The combination of features, ease of use, and price point is unbeatable.",
      rating: 5
    },
    {
      name: "Lakshmi Nair",
      role: "Director",
      company: "Nair Furniture",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      quote: "The ability to access our billing data from any device has been a game-changer. I can check on business performance even when I'm traveling.",
      rating: 4
    }
  ];

  const videoTestimonials = [
    {
      name: "Ravi Kumar",
      role: "CEO",
      company: "Kumar Enterprises",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&h=400&auto=format&fit=crop",
      videoUrl: "#"
    },
    {
      name: "Sunita Desai",
      role: "Owner",
      company: "Desai General Store",
      thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=600&h=400&auto=format&fit=crop",
      videoUrl: "#"
    },
    {
      name: "Naveen Joshi",
      role: "Director",
      company: "Joshi Trading Co.",
      thumbnail: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=600&h=400&auto=format&fit=crop",
      videoUrl: "#"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900/20 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that trust Easibill for their billing needs
          </p>
          <div className="flex justify-center mb-8">
            <div className="flex items-center bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
              <div className="flex mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <span className="text-white font-medium">4.8 out of 5 stars</span>
                <p className="text-sm text-gray-400">Based on 500+ reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Video Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Customers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch how businesses like yours are using Easibill to streamline their operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={`${video.name} testimonial`} 
                  className="w-full h-auto"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-purple-600 rounded-full p-4 cursor-pointer hover:bg-purple-700 transition-colors">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{video.name}</h3>
                <p className="text-gray-400">{video.role}, {video.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Testimonials from Real Users</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our customers are saying about their experience with Easibill
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              delay={index * 0.05}
            />
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 border border-purple-500/20 rounded-2xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Success Story: Royal Supermarket</h2>
              <p className="text-gray-300 mb-6">
                Learn how Royal Supermarket increased their operational efficiency by 40% and reduced billing errors by implementing Easibill.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-300">Reduced checkout time by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-300">Improved inventory accuracy to 99.8%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-300">Increased customer satisfaction scores</span>
                </li>
              </ul>
              <button
                onClick={() => navigate('/case-studies/royal-supermarket')}
                className="px-6 py-2 bg-white text-purple-900 hover:bg-gray-100 font-medium rounded-lg flex items-center gap-2 w-fit"
              >
                Read Case Study <ArrowRight size={16} />
              </button>
            </div>
            <div className="bg-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&h=600&auto=format&fit=crop"
                alt="Royal Supermarket" 
                className="w-full h-full object-cover"
                width="600"
                height="600"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Satisfied Customers</h2>
          <p className="text-gray-300 text-lg mb-8">
            Experience the benefits of Easibill for yourself. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/lead')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/lead')}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg"
            >
              Request Demo
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TestimonialsPage; 
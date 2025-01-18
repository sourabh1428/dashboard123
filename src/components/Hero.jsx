import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Zap, Star, BarChart, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const [text, setText] = useState('');
  const fullText = "Supercharge your buisness with Marketme";

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    };
    typeText();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.6
      } 
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 2 }
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br">
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            variants={itemVariants}
          >
            MarketMe
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-xl md:text-3xl mb-8 font-light"
            variants={itemVariants}
          >
            {text}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => navigate('/lead')}
              className="group px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Free Demo
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            { Icon: Zap, title: "Instant Insights", description: "Get real-time analytics and actionable insights" },
            { Icon: Target, title: "Precision Targeting", description: "Reach your ideal audience with AI-powered segmentation" },
            { Icon: TrendingUp, title: "Exponential Growth", description: "Scale your marketing efforts and boost ROI" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
            >
              <motion.div variants={iconVariants}>
                <item.Icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <BarChart className="w-8 h-8 text-purple-400" />
      </motion.div>
    </section>
  );
};

export default Hero;

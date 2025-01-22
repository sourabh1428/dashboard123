import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import ZoomInEffect from '@/Visuals/ZoomInEffect';

const Globe = () => (
  <motion.div
    className="absolute w-96 h-96 rounded-full"
    style={{
      background: 'radial-gradient(circle at 30% 30%, #4c1d95, #1e1b4b)',
      boxShadow: 'inset -30px -30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(139, 92, 246, 0.5)',
    }}
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    {/* Grid lines */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-full h-[1px] bg-purple-500/20"
        style={{
          top: `${(i + 1) * 12}%`,
          transform: `rotate(${i * 15}deg)`
        }}
      />
    ))}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-[1px] h-full bg-purple-500/20 left-1/2"
        style={{
          transform: `rotate(${i * 22.5}deg)`
        }}
      />
    ))}
  </motion.div>
);

const Star = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      delay: delay,
      repeat: Infinity,
    }}
  />
);

const Meteor = () => (
  <motion.div
    className="absolute w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent"
    initial={{ 
      top: "-5%",
      left: "100%",
      rotate: 45,
      opacity: 0 
    }}
    animate={{
      top: "100%",
      left: "-5%",
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      delay: Math.random() * 10,
      repeat: Infinity,
      repeatDelay: Math.random() * 10 + 5,
    }}
  />
);

const Hero = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [text, setText] = useState('');
  const fullText = "Supercharge your business with Marketme";

  useEffect(() => {
    let isMounted = true;
    const typeText = async () => {
      for (let i = 0; i <= fullText.length*2; i++) {
        if (!isMounted) break;
        setText(fullText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    };
    typeText();
    return () => {
      isMounted = false;
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    { Icon: Zap, title: "Instant Insights", description: "Get real-time analytics and actionable insights" },
    { Icon: Target, title: "Precision Targeting", description: "Reach your ideal audience with AI-powered segmentation" },
    { Icon: TrendingUp, title: "Exponential Growth", description: "Scale your marketing efforts and boost ROI" },
  ];

  return (
    <ZoomInEffect>
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-to-b">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
     
        
        {/* Meteors */}
        {[...Array(5)].map((_, i) => (
          <Meteor key={i} />
        ))}

        {/* Rotating Globe */}
        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
          <Globe />
        </div> */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-4 pt-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-black-400"
          >
            MarketMe
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl mb-8 text-gray-300"
          >
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => navigate('/lead')}
              className="group px-8 py-4 text-xl bg-gradient-to-r from-purple-600 to-white-600 rounded-full hover:from-purple-700 shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-sm"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  background: [
                    'linear-gradient(0deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                    'linear-gradient(180deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                    'linear-gradient(360deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <feature.Icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    </ZoomInEffect>
  );
};

export default React.memo(Hero);
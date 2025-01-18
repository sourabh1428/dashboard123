import React from 'react';
import { motion } from 'framer-motion';
import useParallax from '../hooks/useParallax';

const ParallaxBackground = () => {
  const { x, y } = useParallax(20);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8) 0%, rgba(0,0,0,0) 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: x * (i + 1),
            y: y * (i + 1),
          }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 30,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;


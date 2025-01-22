import React, { useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const ParallaxBackground = () => {
  // Move all hooks to the top level
  const [showNotification, setShowNotification] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Pre-calculate transform values
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Create static circle configurations
  const circles = useMemo(() => {
    const colors = [
      'rgba(147, 51, 234, 0.1)',  // Purple
      'rgba(59, 130, 246, 0.1)',   // Blue
      'rgba(236, 72, 153, 0.1)',   // Pink
      'rgba(52, 211, 153, 0.1)',   // Green
      'rgba(251, 146, 60, 0.1)'    // Orange
    ];

    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      color: colors[i],
      size: `${20 + (i * 5)}rem`,
      left: `${(i * 25) % 100}%`,
      top: `${(i * 20) % 100}%`,
      parallaxStrength: i + 1
    }));
  }, []);

  // WhatsApp notification timer
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Dark gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light" />
      </div>

      {/* Animated circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {circles.map((circle) => (
          <motion.div
            key={circle.id}
            className="absolute rounded-full blur-3xl transform-gpu will-change-transform"
            style={{
              background: `radial-gradient(circle, ${circle.color} 0%, transparent 70%)`,
              width: circle.size,
              height: circle.size,
              left: circle.left,
              top: circle.top,
            }}
            animate={{
              x: [0, 30 * circle.parallaxStrength, 0],
              rotate: [0, 360 * (circle.id % 2 ? 1 : -1), 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* WhatsApp Notification */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        style={{ x: xTransform }}
      >
        <div className="relative">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full shadow-lg"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {showNotification && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-2 -right-2"
            >
              <div className="bg-green-500 p-2 rounded-full shadow-lg">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ParallaxBackground;
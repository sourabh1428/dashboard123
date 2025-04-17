import React, { useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

/**
 * AdvancedBackground component creates a dynamic background with gradients
 * This component is extracted to optimize main thread work
 */
const AdvancedBackground = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [30, -30]);
  const rotateY = useTransform(mouseX, [-300, 300], [-30, 30]);

  // Pre-compute gradients at render time to avoid recalculations
  const gradients = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.15)`,
      size: Math.random() * 40 + 20,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      blur: Math.random() * 4 + 2,
      // Pre-compute animation values to reduce CPU work during animations
      animation: {
        x: [0, Math.random() * 30, 0],
        y: [0, Math.random() * 20, 0],
        scale: [1, 1 + Math.random() * 0.2, 1],
        opacity: [0.5, 0.5 + Math.random() * 0.3, 0.5],
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
      }
    })),
    []
  );

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none"
      style={{ perspective: 1000, rotateX, rotateY }}
    >
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-soft-light" />
      </div>
      {gradients.map((gradient) => (
        <motion.div
          key={gradient.id}
          className="absolute rounded-full transform-gpu"
          style={{
            background: `radial-gradient(circle, ${gradient.color} 0%, transparent 70%)`,
            width: `${gradient.size}rem`,
            height: `${gradient.size}rem`,
            left: `${gradient.position.x}%`,
          }}
          animate={{
            x: gradient.animation.x,
            y: gradient.animation.y,
            scale: gradient.animation.scale,
            opacity: gradient.animation.opacity,
          }}
          transition={{
            duration: gradient.animation.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: gradient.animation.delay,
          }}
        />
      ))}
    </motion.div>
  );
};

export default AdvancedBackground; 
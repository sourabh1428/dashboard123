import { useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";



export default GlowingBackground = () => {
    const { scrollY } = useScroll();
    const translateX = useTransform(scrollY, [0, 1000], [0, -200]);
    const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
    
    const gradients = useMemo(() => {
      return Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        color: [
          'rgba(107, 51, 234, 0.3)',
          'rgba(59, 130, 246, 0.3)',
          'rgba(236, 72, 153, 0.3)',
          'rgba(99, 102, 241, 0.3)',
          'rgba(139, 92, 246, 0.3)',
          'rgba(124, 58, 237, 0.3)',
          'rgba(67, 56, 202, 0.3)',
          'rgba(219, 39, 119, 0.3)'
        ][i],
        size: Math.random() * 40 + 30, // Increased size
        position: {
          x: (i * 15),  // More spread out
          y: (i * 10) + Math.random() * 60,
        }
      }));
    }, []);
  
    return (
      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
        </div>
        <div className="relative w-full h-full">
          {gradients.map((gradient) => (
            <motion.div
              key={gradient.id}
              className="absolute rounded-full blur-3xl transform-gpu"
              style={{
                background: `radial-gradient(circle, ${gradient.color} 0%, transparent 70%)`,
                width: `${gradient.size}rem`,
                height: `${gradient.size}rem`,
                left: `${gradient.position.x}%`,
                top: `${gradient.position.y}%`,
                x: translateX,
                rotate: rotate,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    );
  };
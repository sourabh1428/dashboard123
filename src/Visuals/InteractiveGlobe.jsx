import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const InteractiveGlobe = () => {
  const globeRef = useRef(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Advanced motion values with springs for smooth animation
  const rotateX = useSpring(useTransform(scrollY, [0, 1000], [-15, 45]), {
    stiffness: 100,
    damping: 30
  });
  const rotateY = useSpring(useTransform(scrollY, [0, 1000], [0, 720]), {
    stiffness: 100,
    damping: 30
  });
  const scale = useSpring(useTransform(scrollY, 
    [0, 300, 600, 900],
    [1, 1.5, 0.8, 1.2]
  ), {
    stiffness: 100,
    damping: 30
  });
  
  const perspective = useTransform(scrollY,
    [0, 500, 1000],
    [1000, 2000, 1000]
  );
  
  // Combined rotation including mouse movement
  const combinedRotateX = useSpring(useTransform(mouseY, (value) => value + rotateX.get()), {
    stiffness: 400,
    damping: 50
  });
  const combinedRotateY = useSpring(useTransform(mouseX, (value) => value + rotateY.get()), {
    stiffness: 400,
    damping: 50
  });
  
  // Dynamic lighting effect based on rotation
  const lighting = useTransform(
    combinedRotateY,
    [-360, 0, 360],
    ['30% 30%', '50% 50%', '70% 70%']
  );

  // Add mouse move event handler
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 10);
    mouseY.set((clientY - innerHeight / 2) / 10);
  };



  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-30 backdrop-filter-none">
      <div 
        ref={globeRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          className="relative"
          style={{
            perspective,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            className="w-96 h-96"
            style={{
              rotateX: combinedRotateX,
              rotateY: combinedRotateY,
              scale,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Main Globe Sphere */}
            <motion.div
              className="absolute w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle at ${lighting}, #4c1d95, #1e1b4b)`,
                boxShadow: 'inset -30px -30px 60px rgba(0,0,0,0.8), 0 0 60px rgba(139, 92, 246, 0.6)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* 3D Grid Lines */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`grid-${i}`}
                  className="absolute w-full h-full rounded-full border border-red-500/20"
                  style={{
                    transform: `rotateY(${i * 15}deg) rotateX(${i * 15}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                />
              ))}
              
              {/* Surface Details */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`detail-${i}`}
                  className="absolute rounded-full bg-purple-400/20"
                  style={{
                    width: `${Math.random() * 40 + 10}px`,
                    height: `${Math.random() * 40 + 10}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `translateZ(${Math.random() * 10}px)`,
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>

            {/* Orbiting Elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-full h-full rounded-full border border-purple-500/10"
                style={{
                  transform: `rotateY(${i * 60}deg) rotateX(${i * 30}deg)`,
                }}
              >
                <motion.div
                  className="absolute w-4 h-4 bg-purple-400 rounded-full"
                  style={{}}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            ))}

            {/* Dynamic Meteors */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`meteor-${i}`}
                className="absolute w-1 h-16 origin-top"
                style={{
                  background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.8), transparent)',
                  transformStyle: 'preserve-3d',
                }}
                initial={{ 
                  top: "-20%",
                  left: "120%",
                  rotateZ: 45,
                  rotateY: 0,
                  opacity: 0,
                }}
                animate={{
                  top: "120%",
                  left: "-20%",
                  rotateZ: 45,
                  rotateY: 360,
                  opacity: [0, 1, 0],
                  z: [-100, 100],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveGlobe;
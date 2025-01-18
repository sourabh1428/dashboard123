'use client'
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FeatureShowcase from './components/FeatureShowCase';
import { BuyerAnalysis } from './components/BuyerAnalysis';
import { TaskAutomation } from './components/TaskAutomation';
import CustomerJourneyCards from './Visuals/CustomerJourneyCards';
import ScrollToTopButton from './components/ScrollToTopButton';
import Leads from './components/Leads';
import DashboardStats from './components/DashboardStats';

const ParallaxSection = ({ children, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className="transform-gpu will-change-transform">
      {children}
    </motion.div>
  );
};

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className="transform-gpu will-change-transform"
      animate={{
        y: [0, -10, 0],
        rotateZ: [-0.5, 0.5, -0.5],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

const GlowingBackground = () => {
  const gradients = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      color: ['rgba(147, 51, 234, 0.1)', 'rgba(59, 130, 246, 0.1)', 'rgba(236, 72, 153, 0.1)'][i],
      size: Math.random() * 20 + 20,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      }
    }));
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
      </div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {gradients.map((gradient) => (
          <motion.div
            key={gradient.id}
            className="absolute rounded-full blur-3xl transform-gpu will-change-transform"
            style={{
              background: `radial-gradient(circle, ${gradient.color} 0%, transparent 70%)`,
              width: `${gradient.size}rem`,
              height: `${gradient.size}rem`,
              left: `${gradient.position.x}%`,
              top: `${gradient.position.y}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
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
    </>
  );
};

const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;
    const handleMouseMove = (e) => {
      frameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 10,
          y: (e.clientY / window.innerHeight - 0.5) * 10,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <motion.div
            ref={containerRef}
            className="min-h-screen relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GlowingBackground />

            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transform-gpu"
              style={{ scaleX }}
            />

            <div className="relative z-10">
              <Navbar />
              <main className="relative">
                <ParallaxSection offset={50}>
                  <Hero />
                </ParallaxSection>

                <div className="container mx-auto px-4 space-y-24 py-16">
                  {/* Wrap sections in LazyMotion and m components for better performance */}
                  <FloatingElement>
                    <CustomerJourneyCards />
                  </FloatingElement>

                  <ParallaxSection>
                    <FeatureShowcase />
                  </ParallaxSection>

                  <motion.div
                    className="transform-gpu perspective-1000"
                    style={{
                      transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
                    }}
                  >
                    <DashboardStats />
                  </motion.div>

                  <ParallaxSection offset={-30}>
                    <BuyerAnalysis />
                  </ParallaxSection>

                  <FloatingElement delay={0.1}>
                    <TaskAutomation />
                  </FloatingElement>

                  <ParallaxSection>
                    <Analytics />
                  </ParallaxSection>

                  <Process />

                  <FloatingElement delay={0.2}>
                    <Pricing />
                  </FloatingElement>

                  <ParallaxSection offset={20}>
                    <CTA />
                  </ParallaxSection>
                </div>
              </main>

              <Footer />
            </div>

            <ScrollToTopButton />
          </motion.div>
        }
      />

      <Route path="/lead" element={<Leads />} />
    </Routes>
  );
};

export default App;
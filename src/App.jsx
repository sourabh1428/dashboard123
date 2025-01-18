'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
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
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotateZ: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
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
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
      </div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${
                ['rgba(147, 51, 234, 0.2)', 'rgba(59, 130, 246, 0.2)', 'rgba(236, 72, 153, 0.2)'][i % 3]
              } 0%, transparent 70%)`,
              width: `${Math.random() * 40 + 20}rem`,
              height: `${Math.random() * 40 + 20}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.3 + 1],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
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
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50"
              style={{ scaleX }}
            />

            <div className="relative z-10">
              <Navbar />

              <main className="relative">
                <ParallaxSection offset={100}>
                  <Hero />
                </ParallaxSection>

                <div className="container mx-auto px-4 space-y-32 py-16">
                  <FloatingElement>
                    <CustomerJourneyCards />
                  </FloatingElement>

                  <ParallaxSection>
                    <FeatureShowcase />
                  </ParallaxSection>

                  <motion.div
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d",
                      transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
                    }}
                  >
                    <DashboardStats />
                  </motion.div>

                  <ParallaxSection offset={-50}>
                    <BuyerAnalysis />
                  </ParallaxSection>

                  <FloatingElement delay={0.2}>
                    <TaskAutomation />
                  </FloatingElement>

                  <ParallaxSection>
                    <Analytics />
                  </ParallaxSection>

                  <Process />

                  <FloatingElement delay={0.4}>
                    <Pricing />
                  </FloatingElement>

                  <ParallaxSection offset={30}>
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
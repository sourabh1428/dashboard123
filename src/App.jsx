import React, { useRef, useMemo, Suspense } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FeatureShowcase from "./components/FeatureShowCase";
import BuyerAnalysis from "./components/BuyerAnalysis";
import { TaskAutomation } from "./components/TaskAutomation";
import CustomerJourneyCards from "./Visuals/CustomerJourneyCards";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Leads from "./components/Leads";
import DashboardStats from "./components/DashboardStats";
import EnhancedAnimations from "./Visuals/EnhancedAnimation";
import LoadingSpinner from "./components/LoadingSpinner";
import SandBox from "./SandBox/SandBox";
import { SeoFooter } from "./components/SEO/DynamicSEO";


const Parallax = ({ children, speed = 10 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
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
        rotateZ: [-1, 1, -1],
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

const AdvancedBackground = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [30, -30]);
  const rotateY = useTransform(mouseX, [-300, 300], [-30, 30]);

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
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </motion.div>
  );
};

const DashboardSection = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <div className="space-y-16">
      <DashboardStats />
      <BuyerAnalysis />
      <TaskAutomation />
      <Analytics />
    </div>
  </Suspense>
);

const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const MemoizedDashboard = useMemo(() => <DashboardSection />, []);

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative min-h-screen bg-black">
              <motion.div
                ref={containerRef}
                className="relative z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                {/* Progress bar */}
                <motion.div
                  className="fixed top-0 left-0 right-0 h-1 z-50"
                  style={{
                    scaleX,
                    background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.7), rgba(59, 130, 246, 0.7), rgba(16, 185, 129, 0.7))',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                  }}
                />

                {/* Content with backdrop blur */}
                <div className="relative backdrop-blur-lg bg-black/20">
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Navbar />
                  </motion.div>

                  <main className="relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Hero />
                      </motion.div>
                    </AnimatePresence>

                    <div className="container mx-auto px-4 space-y-32 py-24 max-w-full">
                      <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      >
                        <CustomerJourneyCards />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      >
                        <FeatureShowcase />
                      </motion.div>

                      <div className="container mx-auto px-4 space-y-32 py-24 max-w-full">
                        {MemoizedDashboard}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <CTA />
                        <Pricing />
                      </motion.div>
                    </div>
                  </main>

                  <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Footer />
                  </motion.footer>
                  <SeoFooter />
                </div>
              </motion.div>

              <ScrollToTopButton />
            </div>
          }
        />

        <Route
          path="/lead"
          element={
            <motion.div
              className="relative min-h-screen bg-black overflow-x-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <EnhancedAnimations />
                <AdvancedBackground />
                <div className="relative z-10 backdrop-blur-lg bg-black/20">
                  <Leads />
                </div>
              </Suspense>
            </motion.div>
          }
        />
        <Route path="/sandbox" element={<SandBox/>}/>
      </Routes>
    </div>
  );
};


export default React.memo(App);
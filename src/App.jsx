import React, { useRef, useMemo, useEffect, lazy, Suspense, Navigate } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import LoadingSpinner from "./components/LoadingSpinner";
import ThemeSelector from "./components/ThemeSelector";
import { THEMES } from "./context/ThemeContext";
import AppThemeProvider from "./context/AppThemeProvider";
import { lazyImport, preloadCommonComponents } from "./utils/lazyImport.jsx";
import { SeoFooter } from "./components/SEO/DynamicSEO";
import { initializePerformanceOptimizations } from "./utils/performanceUtils";

// Use lazy loading for non-critical components
const FeatureShowcase = lazyImport(() => import("./components/FeatureShowCase"));
const CustomerJourneyCards = lazyImport(() => import("./Visuals/CustomerJourneyCards"));
const DashboardStats = lazyImport(() => import("./components/DashboardStats"), 'DashboardStats');
const BuyerAnalysis = lazyImport(() => import("./components/BuyerAnalysis"), 'BuyerAnalysis');
const TaskAutomation = lazyImport(() => import("./components/TaskAutomation"), 'TaskAutomation');
const LeadGeneration = lazyImport(() => import("./components/LeadGeneration"), 'LeadGeneration');
const Analytics = lazyImport(() => import("./components/Analytics"));
const Pricing = lazyImport(() => import("./components/Pricing"), 'Pricing');

// Pages
const FeaturesPage = lazyImport(() => import("./Pages/Features"));
const PricingPage = lazyImport(() => import("./Pages/Pricing"));
const TestimonialsPage = lazyImport(() => import("./Pages/Testimonials"));
const ContactPage = lazyImport(() => import("./Pages/Contact"));

// Split heavy background components to reduce main thread work
const AdvancedBackground = lazyImport(() => import("./components/AdvancedBackground"));

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

const DashboardSection = () => (
  <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><LoadingSpinner /></div>}>
    <div className="space-y-16">
      <DashboardStats />
      <BuyerAnalysis />
      <TaskAutomation />
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

  // Preload components after initial render
  useEffect(() => {
    // Preload after user interaction or idle time
    const handleUserInteraction = () => {
      // Use requestIdleCallback if available, otherwise setTimeout
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => preloadCommonComponents());
      } else {
        setTimeout(() => preloadCommonComponents(), 2000);
      }
      
      // Remove listeners after preloading
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    // Add event listeners for performance tracking
    const cleanup = trackPerformanceMetrics();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const PageLayout = React.memo(({ children }) => {
    return (
      <div className="relative min-h-screen">
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
              {children}
            </main>

            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Footer />
            </motion.footer>
          </div>
        </motion.div>

        <ScrollToTopButton />
        <ThemeSelector />
      </div>
    );
  });

  const HomePage = React.memo(() => (
    <PageLayout>
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
    </PageLayout>
  ));

  return (
    <AppThemeProvider defaultTheme={THEMES.GRADIENT}>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lead" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <div className="relative min-h-screen overflow-x-hidden">
                <div className="relative z-10">
                  <Navbar />
                  <LeadGeneration />
                  <Footer />
                </div>
                <ThemeSelector />
              </div>
            </Suspense>
          } />
          
          {/* Page Routes */}
          <Route path="/features" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <PageLayout><FeaturesPage /></PageLayout>
            </Suspense>
          } />
          <Route path="/pricing" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <PageLayout><PricingPage /></PageLayout>
            </Suspense>
          } />
          <Route path="/testimonials" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <PageLayout><TestimonialsPage /></PageLayout>
            </Suspense>
          } />
          
          {/* Redirect contact to lead page */}
          <Route path="/contact" element={<Navigate to="/lead" replace />} />
          
          {/* Feature Sub-pages */}
          <Route path="/features/invoicing" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <PageLayout><FeaturesPage /></PageLayout>
            </Suspense>
          } />
          <Route path="/features/inventory" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <PageLayout><FeaturesPage /></PageLayout>
            </Suspense>
          } />
          <Route path="/features/reporting" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
              <PageLayout><FeaturesPage /></PageLayout>
            </Suspense>
          } />
          
          {/* Redirect demo to lead page */}
          <Route path="/demo" element={<Navigate to="/lead" replace />} />
          <Route path="/login" element={<PageLayout><LoginComponent /></PageLayout>} />
          <Route path="/industries" element={<PageLayout><IndustriesComponent /></PageLayout>} />
        </Routes>
      </div>
    </AppThemeProvider>
  );
};

// Extract smaller components to reduce main bundle size
const LoginComponent = React.memo(() => (
  <div className="container max-w-md mx-auto px-4 py-24 min-h-[70vh]">
    <h1 className="text-2xl font-bold text-white mb-8">Login</h1>
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" className="w-full bg-gray-900/70 border border-gray-700 rounded-md py-2 px-3 text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input type="password" className="w-full bg-gray-900/70 border border-gray-700 rounded-md py-2 px-3 text-white" />
        </div>
        <div className="flex justify-between items-center">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-300">Remember me</span>
          </label>
          <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
        </div>
        <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700">Sign In</button>
      </form>
    </div>
  </div>
));

const IndustriesComponent = React.memo(() => (
  <div className="container mx-auto px-4 py-24 min-h-[70vh]">
    <h1 className="text-3xl font-bold text-white mb-12 text-center">Industries We Serve</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {['Retail Stores', 'Wholesale Business', 'Restaurants', 'Service Providers', 'Local Shop Billing'].map((industry, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
          <h3 className="text-xl font-semibold text-white mb-4">{industry}</h3>
          <p className="text-gray-300 mb-4">Custom solutions designed specifically for {industry.toLowerCase()} to streamline operations and boost revenue.</p>
          <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  </div>
));

// Track performance metrics
const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  // Report performance metrics
  const reportPerformance = () => {
    // Use Performance API to capture metrics
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
      console.log(`Page loaded in: ${pageLoadTime}ms`);
    }
    
    // Report Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(`LCP: ${lastEntry.startTime}ms`);
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      return () => {
        lcpObserver.disconnect();
      };
    }
  };
  
  // Defer execution
  window.addEventListener('load', reportPerformance);
  return () => window.removeEventListener('load', reportPerformance);
};

export default App;
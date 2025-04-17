/**
 * Performance Optimization Utilities
 * 
 * This module provides utilities for optimizing website performance
 * through code splitting, lazy loading, and resource prioritization.
 */

/**
 * Loads an external script asynchronously
 * 
 * @param {string} src - URL of the script to load
 * @param {Object} options - Additional options
 * @param {boolean} options.defer - Whether to defer the script loading
 * @param {boolean} options.async - Whether to load the script asynchronously
 * @param {string} options.id - ID for the script element
 * @param {Function} options.onLoad - Callback function to run when script loads
 * @param {Function} options.onError - Callback function to run on error
 * @returns {Promise} - Promise that resolves when the script loads
 */
export function loadScript(src, { defer = true, async = true, id, onLoad, onError } = {}) {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error('Script source URL is required'));
      return;
    }

    // Check if the script is already loaded
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.defer = defer;
    script.async = async;
    
    if (id) script.id = id;

    script.onload = () => {
      if (onLoad) onLoad();
      resolve();
    };

    script.onerror = (error) => {
      if (onError) onError(error);
      reject(error);
    };

    document.body.appendChild(script);
  });
}

/**
 * Lazy loads analytics scripts based on user interaction
 * 
 * @param {Object} scripts - Collection of analytics scripts to load
 * @param {string} scripts.googleAnalytics - Google Analytics script URL
 * @param {string} scripts.metaPixel - Meta Pixel script URL
 * @param {string} scripts.hotjar - Hotjar script URL
 */
export function loadAnalyticsOnInteraction(scripts = {}) {
  if (typeof window === 'undefined') return;

  let hasInteracted = false;
  const interactions = ['mousedown', 'keydown', 'touchstart', 'scroll'];

  const loadAnalytics = () => {
    if (hasInteracted) return;
    
    hasInteracted = true;
    
    // Cleanup event listeners
    interactions.forEach(event => {
      window.removeEventListener(event, loadAnalytics, { passive: true });
    });
    
    // Load each script if provided
    if (scripts.googleAnalytics) {
      loadScript(scripts.googleAnalytics, { 
        id: 'ga-script',
        onLoad: () => console.log('Google Analytics loaded') 
      });
    }
    
    if (scripts.metaPixel) {
      loadScript(scripts.metaPixel, { 
        id: 'meta-pixel',
        onLoad: () => console.log('Meta Pixel loaded')
      });
    }
    
    if (scripts.hotjar) {
      loadScript(scripts.hotjar, { 
        id: 'hotjar-script',
        onLoad: () => console.log('Hotjar loaded')
      });
    }
  };

  // Add event listeners with passive flag for better performance
  interactions.forEach(event => {
    window.addEventListener(event, loadAnalytics, { passive: true });
  });
  
  // Fallback - load after 5 seconds if no interaction
  setTimeout(loadAnalytics, 5000);
}

/**
 * Defers loading of non-critical JavaScript
 * 
 * @param {Function} callback - Function to execute when deferred
 * @param {number} delay - Delay in milliseconds
 */
export function deferNonCriticalJS(callback, delay = 3000) {
  if (typeof window === 'undefined') return;
  
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      setTimeout(callback, delay);
    });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(callback, delay);
  }
}

/**
 * Adds browser hints for preconnect and dns-prefetch
 * 
 * @param {string[]} domains - List of domains to add hints for
 */
export function addConnectionHints(domains = []) {
  if (typeof document === 'undefined' || !domains.length) return;
  
  domains.forEach(domain => {
    // Add preconnect
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = domain;
    document.head.appendChild(preconnect);
    
    // Add dns-prefetch as fallback
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = domain;
    document.head.appendChild(dnsPrefetch);
  });
}

/**
 * Initialize performance optimizations
 * 
 * @param {Object} options - Configuration options
 */
export function initializePerformanceOptimizations({
  analyticsScripts = {},
  connectionHints = [],
  deferredScripts = []
} = {}) {
  // Add connection hints for critical domains
  addConnectionHints(connectionHints);
  
  // Defer analytics loading until user interaction
  loadAnalyticsOnInteraction(analyticsScripts);
  
  // Load other non-critical scripts
  deferNonCriticalJS(() => {
    deferredScripts.forEach(script => {
      loadScript(script.src, script.options);
    });
  });
  
  // Register performance metrics collector
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Collect Core Web Vitals and other metrics
    // This is just a placeholder - in a real app you would send these to your analytics
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = {
          // Navigation Timing API
          pageLoadTime: window.performance.timing.loadEventEnd - window.performance.timing.navigationStart,
          domLoadTime: window.performance.timing.domComplete - window.performance.timing.domLoading,
          
          // Paint Timing API
          firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime,
          firstContentfulPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime,
        };
        
        console.log('Performance metrics:', perfData);
      }, 0);
    });
  }
}

export default {
  loadScript,
  loadAnalyticsOnInteraction,
  deferNonCriticalJS,
  addConnectionHints,
  initializePerformanceOptimizations
}; 
/**
 * Performance Utilities for Easibill
 * These functions help optimize loading and rendering performance
 */

/**
 * Preload important images to prevent layout shifts
 * @param {string[]} images Array of image URLs to preload
 */
export const preloadImages = (images = []) => {
  if (typeof window === 'undefined') return;
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

/**
 * Add preconnect hints for external domains
 * @param {string[]} domains Array of domains to preconnect to
 */
export const addPreconnect = (domains = []) => {
  if (typeof window === 'undefined') return;
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    
    // Add crossorigin attribute for font domains
    if (domain.includes('fonts.') || domain.includes('unsplash') || domain.includes('icons8')) {
      link.crossOrigin = 'anonymous';
    }
    
    document.head.appendChild(link);
  });
};

/**
 * Defer loading of non-critical scripts
 * @param {Object[]} scripts Array of script objects with src and options
 */
export const loadDeferredScripts = (scripts = []) => {
  if (typeof window === 'undefined') return;
  
  // Use Intersection Observer to load scripts when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When footer is visible, load non-critical scripts
        scripts.forEach(({src, options = {}}) => {
          const script = document.createElement('script');
          script.src = src;
          script.defer = true;
          
          // Add any additional attributes
          Object.keys(options).forEach(key => {
            script[key] = options[key];
          });
          
          document.body.appendChild(script);
        });
        
        // Disconnect observer after loading
        observer.disconnect();
      }
    });
  });
  
  // Observe the footer element as trigger for loading scripts
  const footer = document.querySelector('footer');
  if (footer) {
    observer.observe(footer);
  } else {
    // If no footer found, load after a delay
    setTimeout(() => {
      loadDeferredScripts(scripts);
    }, 3000);
  }
};

/**
 * Optimize loading of web fonts
 */
export const optimizeFonts = () => {
  if (typeof window === 'undefined') return;
  
  // Add font-display: swap to all font declarations
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-display: swap !important;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Performance optimization utilities
 */

/**
 * Defers non-critical resources loading until after page load
 */
export const deferNonCriticalResources = () => {
  // Defer non-critical CSS loading
  document.querySelectorAll('link[data-non-critical="true"]').forEach(link => {
    link.media = 'all';
  });
  
  // Defer non-critical JavaScript loading
  document.querySelectorAll('script[data-defer="true"]').forEach(script => {
    const newScript = document.createElement('script');
    Array.from(script.attributes).forEach(attr => {
      if (attr.name !== 'data-defer') {
        newScript.setAttribute(attr.name, attr.value);
      }
    });
    newScript.innerHTML = script.innerHTML;
    script.parentNode.replaceChild(newScript, script);
  });
};

/**
 * Sets appropriate image dimensions to avoid layout shifts
 */
export const setImageDimensions = () => {
  document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
    img.setAttribute('loading', 'lazy');
    // Set default dimensions if not provided to prevent CLS
    if (!img.width) img.style.width = '100%';
    if (!img.height) img.style.aspectRatio = '16/9';
  });
};

/**
 * Optimizes third-party script loading
 */
export const optimizeThirdPartyScripts = () => {
  // Find all third-party scripts
  document.querySelectorAll('script[src*="http"]').forEach(script => {
    if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
      script.setAttribute('defer', 'true');
    }
  });
};

/**
 * Initialize all performance optimizations
 */
export const initializePerformanceOptimizations = () => {
  // Critical domains to preconnect to
  const criticalDomains = [
    'https://img.icons8.com',
    'https://images.unsplash.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  // Critical images to preload
  const criticalImages = [
    'https://img.icons8.com/fluency/50/bill.png'
  ];
  
  // Defer loading of non-critical scripts
  const deferredScripts = [
    // Add third-party scripts here
    // { src: 'https://example.com/analytics.js', options: { id: 'analytics' } }
  ];
  
  // Apply optimizations
  addPreconnect(criticalDomains);
  preloadImages(criticalImages);
  optimizeFonts();
  
  // Defer non-critical scripts
  if (deferredScripts.length > 0) {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => loadDeferredScripts(deferredScripts), { timeout: 5000 });
    } else {
      setTimeout(() => loadDeferredScripts(deferredScripts), 3000);
    }
  }
  
  // Use requestIdleCallback if available, otherwise setTimeout
  const runWhenIdle = (callback) => {
    if (typeof window === 'undefined') return;
    
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => callback(), { timeout: 2000 });
    } else {
      setTimeout(callback, 50);
    }
  };
  
  // Set image dimensions immediately to prevent layout shifts
  setImageDimensions();
  
  // Run other optimizations when browser is idle
  runWhenIdle(() => {
    deferNonCriticalResources();
    optimizeThirdPartyScripts();
  });
}; 
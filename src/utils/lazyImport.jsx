import React, { lazy } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * Enhanced lazy loading utility with better code splitting and chunk naming
 * @param {Function} importFn - The import function (e.g., () => import('./Component'))
 * @param {string} [chunkName] - Optional name for the chunk to improve debugging
 * @returns {React.LazyExoticComponent} - The lazily loaded component
 */
export const lazyImport = (importFn, chunkName) => {
  // Enhanced import with better error handling and retry logic
  const enhancedImport = async () => {
    try {
      const module = await importFn();
      // Handle both default exports and named exports
      // If a module has no default export but we're trying to use it as one,
      // this will cause the "invalid element type" error
      if (module.default) {
        return module;
      } else if (chunkName && module[chunkName]) {
        // If there's a named export that matches chunkName, use it as default
        return { default: module[chunkName] };
      } else {
        console.error(`Component "${chunkName || 'unknown'}" not found in module`);
        // Return a fallback component to prevent crashes
        return { 
          default: () => <div className="error-boundary">Failed to load component</div> 
        };
      }
    } catch (error) {
      console.error(`Failed to load chunk "${chunkName || 'unknown'}"`, error);
      
      // Retry loading once after a short delay
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const module = await importFn();
        if (module.default) {
          return module;
        } else if (chunkName && module[chunkName]) {
          return { default: module[chunkName] };
        }
      } catch (retryError) {
        console.error(`Retry failed for "${chunkName || 'unknown'}"`, retryError);
      }
      
      // Return a fallback component
      return { 
        default: () => <div className="error-boundary">Failed to load component</div> 
      };
    }
  };
  
  return lazy(enhancedImport);
};

/**
 * Register common components for preloading
 * Call this function when the user interacts with the page
 * to start preloading components they might navigate to
 */
export const preloadCommonComponents = () => {
  // Preload components that are likely to be used - without blocking the main thread
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      import('../components/LeadGeneration');
      import('../components/Pricing');
    }, { timeout: 2000 });
  } else {
    setTimeout(() => {
      import('../components/LeadGeneration');
      import('../components/Pricing');
    }, 2000);
  }
};

/**
 * Preload a specific component based on user behavior
 * @param {string} componentPath - The path to the component
 */
export const preloadComponent = (componentPath) => {
  if (typeof window === 'undefined') return;
  
  const loadComponent = () => {
    import(/* @vite-ignore */ componentPath).catch(() => {
      // Silently fail if the component doesn't exist
      console.debug(`Preloading ${componentPath} failed`);
    });
  };
  
  // Use requestIdleCallback for better performance
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadComponent, { timeout: 2000 });
  } else {
    setTimeout(loadComponent, 100);
  }
}; 
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
      return module;
    } catch (error) {
      console.error(`Failed to load chunk "${chunkName || 'unknown'}"`, error);
      
      // Retry loading once after a short delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return importFn();
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
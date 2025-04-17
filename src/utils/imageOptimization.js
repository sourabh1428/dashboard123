/**
 * Image Optimization Utilities
 * 
 * This module provides utilities for optimizing images and implementing
 * best practices for image loading and rendering.
 */

/**
 * Gets the appropriate src URL for an image based on the device pixel ratio
 * and viewport size. This helps with responsive images and bandwidth optimization.
 * 
 * @param {string} src - The base image source URL
 * @param {Object} options - Configuration options
 * @param {number} options.width - The desired image width
 * @param {number} options.height - The desired image height
 * @param {string} options.format - Image format (webp, avif, jpg, etc.)
 * @param {number} options.quality - Image quality (1-100)
 * @returns {string} - Optimized image URL
 */
export function getOptimizedImageUrl(src, { width, height, format = 'webp', quality = 80 } = {}) {
  // If using a real image optimization service like Cloudinary, Imgix, etc.
  // you would construct the URL with their API parameters
  
  // This is a placeholder implementation
  // In a real app, replace with your image CDN/service logic
  if (!src) return '';
  
  // If the src is already a fully qualified URL (e.g., from a CDN)
  if (src.startsWith('http')) {
    // Example for Cloudinary-like service:
    // return `https://your-cloudinary-domain.com/image/upload/q_${quality},w_${width},h_${height},f_${format}/${imageId}`;
    return src;
  }
  
  // For local images stored in public directory
  // In a real implementation, you might use a more sophisticated approach
  return src;
}

/**
 * Creates an array of srcset URLs for responsive images
 * 
 * @param {string} src - Base image source
 * @param {number[]} widths - Array of width values for srcset
 * @param {string} format - Image format
 * @param {number} quality - Image quality
 * @returns {string} - Formatted srcset string
 */
export function generateSrcSet(src, widths = [640, 750, 828, 1080, 1200, 1920], format = 'webp', quality = 80) {
  return widths
    .map(w => {
      const url = getOptimizedImageUrl(src, { width: w, format, quality });
      return `${url} ${w}w`;
    })
    .join(', ');
}

/**
 * Generates appropriate sizes attribute for responsive images
 * 
 * @param {Object} breakpoints - Configuration for different screen breakpoints
 * @returns {string} - Formatted sizes attribute
 */
export function generateSizes(breakpoints = {
  sm: '100vw',
  md: '50vw',
  lg: '33vw',
  xl: '25vw'
}) {
  const sizes = [
    `(max-width: 640px) ${breakpoints.sm || '100vw'}`,
    `(max-width: 768px) ${breakpoints.md || '50vw'}`,
    `(max-width: 1024px) ${breakpoints.lg || '33vw'}`,
    breakpoints.xl || '25vw'
  ];
  
  return sizes.join(', ');
}

/**
 * Handles image loading errors by replacing with a fallback image
 * 
 * @param {Event} event - The error event from the image
 * @param {string} fallbackSrc - URL to a fallback image
 */
export function handleImageError(event, fallbackSrc = '/images/placeholder.webp') {
  if (event.target) {
    event.target.src = fallbackSrc;
    event.target.srcset = '';
  }
}

/**
 * Creates props for an optimized image component
 * 
 * @param {Object} options - Image configuration
 * @param {string} options.src - Image source URL
 * @param {string} options.alt - Alt text for the image
 * @param {number} options.width - Desired image width
 * @param {number} options.height - Desired image height
 * @param {string} options.format - Image format
 * @param {number} options.quality - Image quality
 * @param {boolean} options.lazy - Whether to use lazy loading
 * @returns {Object} - Props for an image element
 */
export function getOptimizedImageProps({
  src,
  alt = '',
  width,
  height,
  format = 'webp',
  quality = 80,
  lazy = true
}) {
  const optimizedSrc = getOptimizedImageUrl(src, { width, height, format, quality });
  const srcSet = generateSrcSet(src, [width, width * 2], format, quality);
  
  return {
    src: optimizedSrc,
    srcSet,
    alt,
    width,
    height,
    loading: lazy ? 'lazy' : 'eager',
    decoding: 'async',
    onError: (e) => handleImageError(e),
  };
}

/**
 * Preloads critical images for faster rendering
 * 
 * @param {string[]} imageSrcs - Array of image URLs to preload
 */
export function preloadCriticalImages(imageSrcs = []) {
  if (typeof window === 'undefined') return;
  
  imageSrcs.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.type = 'image/webp'; // Adjust based on your preferred format
    document.head.appendChild(link);
  });
}

/**
 * Creates an optimized image element with proper attributes
 * 
 * @param {Object} options - Image configuration
 * @returns {HTMLImageElement} - HTML image element
 */
export function createOptimizedImage({
  src,
  alt = '',
  width,
  height,
  className = '',
  format = 'webp',
  quality = 80,
  lazy = true,
  sizes
}) {
  const imgProps = getOptimizedImageProps({
    src,
    alt,
    width,
    height,
    format,
    quality,
    lazy
  });
  
  const img = document.createElement('img');
  img.src = imgProps.src;
  img.srcset = imgProps.srcSet;
  img.alt = imgProps.alt;
  img.width = imgProps.width;
  img.height = imgProps.height;
  img.loading = imgProps.loading;
  img.decoding = imgProps.decoding;
  img.className = className;
  
  if (sizes) {
    img.sizes = sizes;
  } else {
    img.sizes = generateSizes();
  }
  
  img.addEventListener('error', (e) => handleImageError(e));
  
  return img;
}

export default {
  getOptimizedImageUrl,
  generateSrcSet,
  generateSizes,
  handleImageError,
  getOptimizedImageProps,
  preloadCriticalImages,
  createOptimizedImage
}; 
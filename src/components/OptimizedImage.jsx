import React, { useState, useEffect } from 'react';

/**
 * OptimizedImage component that implements proper image loading patterns
 * - Uses explicit width/height to prevent layout shifts
 * - Implements lazy loading
 * - Adds loading and error states
 * - Supports responsive sizes with srcset
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy', 
  sizes = '100vw',
  srcSet = '',
  objectFit = 'cover',
  placeholderColor = '#121212'
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Use native lazy loading with JS fallback
  useEffect(() => {
    // Create a new image to preload
    if (error) return;
    
    const img = new Image();
    img.src = src;
    if (srcSet) img.srcset = srcSet;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, srcSet, error]);
  
  const style = {
    objectFit,
    backgroundColor: placeholderColor,
    transition: 'opacity 0.3s ease',
    opacity: loaded ? 1 : 0.5
  };
  
  if (error) {
    return (
      <div 
        className={className} 
        style={{ 
          width, 
          height, 
          backgroundColor: placeholderColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff60',
          fontSize: '0.8rem'
        }}
      >
        Failed to load image
      </div>
    );
  }
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      sizes={sizes}
      srcSet={srcSet}
      style={style}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
    />
  );
} 
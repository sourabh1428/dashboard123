import { StrictMode, useEffect, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
//ss
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { DynamicSEO } from './components/SEO/DynamicSEO'
import { initializePerformanceOptimizations } from './utils/performanceOptimization'
import { preloadCriticalImages } from './utils/imageOptimization'
import { FullPageLoader } from './components/LoadingSpinner'

// Critical images that should be preloaded
const CRITICAL_IMAGES = [
  '/logo.svg',
  '/dashboard-preview.webp',
]

// Domains to add connection hints for
const CONNECTION_HINTS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.googletagmanager.com',
]

// Analytics scripts to load on interaction
const ANALYTICS_SCRIPTS = {
  googleAnalytics: 'https://www.googletagmanager.com/gtag/js?id=G-H54PC2W756',
  metaPixel: 'https://connect.facebook.net/en_US/fbevents.js',
  hotjar: 'https://static.hotjar.com/c/hotjar-XXXXXXX.js',
}

// Performance optimization initialization
if (typeof window !== 'undefined') {
  // Initialize performance optimizations
  initializePerformanceOptimizations({
    analyticsScripts: ANALYTICS_SCRIPTS,
    connectionHints: CONNECTION_HINTS,
    deferredScripts: [
      // Add any other third-party scripts here
      { src: 'https://cdn.example.com/some-plugin.js', options: { id: 'plugin-script' } },
    ]
  })
  
  // Preload critical images
  preloadCriticalImages(CRITICAL_IMAGES)
}

// Lazy load App2 component
const App2Lazy = lazy(() => import('./App2,'))

// Root component with error boundary
const Root = () => {
  useEffect(() => {
    // Remove any splash screen or initial loading indicator
    const splashScreen = document.getElementById('splash-screen')
    if (splashScreen) {
      splashScreen.classList.add('fade-out')
      setTimeout(() => {
        splashScreen.remove()
      }, 500)
    }
  }, [])

  return (
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <DynamicSEO />
          <Suspense fallback={<FullPageLoader message="Loading application..." />}>
            <App2Lazy />
          </Suspense>
          <Analytics />
          <SpeedInsights />
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

// Mount the application
createRoot(document.getElementById('root')).render(<Root />)

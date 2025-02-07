import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
//ss
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter } from 'react-router'
import App2 from './App2,'
import { HelmetProvider } from 'react-helmet-async'
import { DynamicSEO, SeoFooter } from './components/SEO/DynamicSEO'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <DynamicSEO />
    <App2/>   

 
    <Analytics />
    <SpeedInsights />
    
    </HelmetProvider>
  </BrowserRouter>
  </StrictMode>,
)

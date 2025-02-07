import React from 'react'
import { Routes,Route } from 'react-router'
import App from './App'
import Leads from './components/Leads'
import CaseStudies from './components/Footer/CaseStudies'
//2

const App2 = () => {
  return (
    <div>

<Routes>
        <Route path="/lead" element={<Leads />} />
        <Route path="*" element={<App />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>

    </div>
  )
}

export default App2
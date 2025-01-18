import React from 'react'
import { Routes,Route } from 'react-router'
import App from './App'
import Leads from './components/Leads'

const App2 = () => {
  return (
    <div>

<Routes>
        <Route path="/lead" element={<Leads />} />
        <Route path="/" element={<App />} />
      </Routes>

    </div>
  )
}

export default App2
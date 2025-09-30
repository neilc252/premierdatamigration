import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import AI from './components/AI' // Import the new AI component
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/ai' element={<AI />} /> {/* This is the new route */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import './App.css'

// importing Navbar component
import Navbar from './components/Navbar'
// importing About component
import About from './components/About'
// importing Timeline component
import Timeline from './components/Timeline'
// importing Footer component
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      
      {/* About */}
      <div>
        <About />
      </div>
      
      {/* Timeline */}
      <div>
        <Timeline />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App

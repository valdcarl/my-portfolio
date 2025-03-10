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
      <div>
        <Navbar />
      </div>
      
      <div>
        <About />
      </div>

      <h1>WIP Portfolio Website</h1>
      <h3>Timeline In-Progress</h3>

      <div>
        <Timeline />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App

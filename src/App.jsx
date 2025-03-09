import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
// importing Timeline component
import Timeline from './components/Timeline'
// importing Footer component
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello, Placement for NavBar
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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

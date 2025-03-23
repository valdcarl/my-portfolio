import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  return (
    <>
    {/* Setting up routes */}
      <Router>
        <Routes>
            <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
    <Footer/>
    </>
  )
}

export default App

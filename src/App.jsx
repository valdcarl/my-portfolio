import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  return (
    <>
    {/* Setting up routes */}
      <div>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Hero />} />
                </Routes>
            </div>
        </Router>
      </div>
    <Footer/>
    </>
  )
}

export default App

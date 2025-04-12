import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/Projects'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {

  return (
    <>
        <Navbar />
            <main>
            <section id="hero">
                <Hero />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                {/* Replace with actual <Contact /> component */}
            </section>
        </main>
      <Footer />
    </>
  )
}

export default App

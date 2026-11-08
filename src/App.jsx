import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Security from './components/Security.jsx'
import Music from './components/Music.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Security />
        <Music />
        <Contact />
      </main>
      <footer className="foot wrap">
        <span>© {new Date().getFullYear()} Simon Aiahadjei Danquah</span>
        <span>Designed and coded by me, with React.</span>
      </footer>
    </>
  )
}

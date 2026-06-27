import Background from "./components/Background"
import CursorGlow from "./components/CursorGlow"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Leadership from "./components/Leadership"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import useReveal from "./hooks/useReveal"

export default function App() {
  useReveal()

  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Leadership />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
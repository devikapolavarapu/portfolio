import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleIntersection = () => {
      const scrollPosition = window.scrollY + 250 // Offset for active zonation
      
      // If we are at the top, activate home
      if (window.scrollY < 100) {
        setActiveSection("home")
        return
      }

      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleIntersection)
    handleIntersection() // Run once on mount
    return () => window.removeEventListener("scroll", handleIntersection)
  }, [])

  // Close menu on Esc key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-md border-b border-zinc-800/80 shadow-lg py-4"
          : "bg-transparent border-b border-white/10 py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center" aria-label="Main Navigation">
        {/* Logo / Branding */}
        <a
          href="#home"
          className="logo text-white no-underline focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1"
        >
          Devika Polavarapu
        </a>

        {/* Desktop Navigation Link Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1.5 py-0.5 ${
                activeSection === item.id
                  ? "text-amber-500 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/Devika_Polavarapu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-xs font-semibold border border-amber-500 hover:bg-amber-500 hover:text-white text-amber-500 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 p-2 rounded-lg"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-lg flex flex-col p-6 space-y-4 transition-all duration-300"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1 ${
                activeSection === item.id
                  ? "text-amber-500 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/Devika_Polavarapu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-lg transition focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}

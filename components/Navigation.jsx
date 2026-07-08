"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = ["home", "about", "experience", "projects", "skills", "leadership", "contact"]
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center gap-1 rounded-full border backdrop-blur-xl px-2 py-1.5 transition-all duration-500 ${
            scrolled
              ? "border-white/15 bg-[#0a0a0b]/80 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
              : "border-white/10 bg-[#0a0a0b]/50"
          }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="font-display font-bold text-base px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Nishant Puranik - back to top"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">NP</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#0a0a0b]/95 backdrop-blur-2xl" onClick={() => setMenuOpen(false)} />
        <div className="relative h-full flex flex-col items-center justify-center gap-2 px-8">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-display text-3xl font-bold py-3 transition-all duration-500 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${activeSection === item.id ? "text-purple-400" : "text-white hover:text-purple-300"}`}
              style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

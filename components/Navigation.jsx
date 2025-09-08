"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="flex justify-between p-3 md:p-6 w-full bg-neutral-800 items-center fixed top-0 left-0 right-0 z-50">
      <button
        onClick={() => scrollToSection("home")}
        className={`font-bold text-sm md:text-3xl transition-all duration-300 cursor-pointer ${
          activeSection === "home" ? "text-purple-400" : "text-white hover:text-purple-400"
        }`}
      >
        <span className="hidden md:inline">Nishant Puranik</span>
        <span className="md:hidden">Nish</span>
      </button>
      <div className="flex space-x-1 md:space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-all duration-300 cursor-pointer font-medium text-xs md:text-base ${
              activeSection === item.id
                ? "text-purple-400"
                : "text-gray-300 hover:text-purple-400"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

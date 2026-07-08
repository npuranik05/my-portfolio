"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Magnetic from "./Magnetic"

const FULL_NAME = "Nishant Puranik"
const FULL_BIO = "Into tech, good music, and building things people actually want to use."

export default function Hero() {
  const sectionRef = useRef(null)
  const photoRef = useRef(null)
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, nx: 0, ny: 0 })

  const [nameText, setNameText] = useState("")
  const [bioText, setBioText] = useState("")
  const [showBio, setShowBio] = useState(false)
  const [showResumeModal, setShowResumeModal] = useState(false)

  // Typewriter: name first, then bio
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setNameText(FULL_NAME)
      setBioText(FULL_BIO)
      setShowBio(true)
      return
    }
    let nameIndex = 0
    const nameTimer = setInterval(() => {
      if (nameIndex < FULL_NAME.length) {
        setNameText(FULL_NAME.slice(0, nameIndex + 1))
        nameIndex++
      } else {
        clearInterval(nameTimer)
        setShowBio(true)
      }
    }, 90)
    return () => clearInterval(nameTimer)
  }, [])

  useEffect(() => {
    if (!showBio || bioText.length === FULL_BIO.length) return
    let bioIndex = 0
    const bioTimer = setInterval(() => {
      if (bioIndex < FULL_BIO.length) {
        setBioText(FULL_BIO.slice(0, bioIndex + 1))
        bioIndex++
      } else {
        clearInterval(bioTimer)
      }
    }, 35)
    return () => clearInterval(bioTimer)
  }, [showBio])

  // Cursor-reactive spotlight, orbs, and photo tilt
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const handleMouseMove = (e) => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseRef.current = {
        x,
        y,
        nx: (x / rect.width - 0.5) * 2,
        ny: (y / rect.height - 0.5) * 2,
      }

      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const { nx, ny } = mouseRef.current
        if (photoRef.current) {
          photoRef.current.style.transform = `perspective(800px) rotateY(${nx * 8}deg) rotateX(${ny * -8}deg)`
        }
      })
    }

    const handleMouseLeave = () => {
      if (photoRef.current) {
        photoRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)"
      }
    }

    const section = sectionRef.current
    section?.addEventListener("mousemove", handleMouseMove)
    section?.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      section?.removeEventListener("mousemove", handleMouseMove)
      section?.removeEventListener("mouseleave", handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const downloadResume = () => setShowResumeModal(true)

  const openLink = (url) => {
    window.open(url, "_blank")
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const nameDone = nameText.length === FULL_NAME.length
  const bioDone = bioText.length === FULL_BIO.length

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex items-center min-h-screen px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-10 items-center py-28">
        {/* Left: text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-6 relative">
            {/* Invisible full name reserves space so typing never shifts the layout */}
            <span className="invisible" aria-hidden="true">
              {FULL_NAME}
            </span>
            <span className="absolute inset-0">
              <span className="hero-name">{nameText}</span>
              {!nameDone && <span className="type-cursor" />}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 relative">
            <span className="invisible" aria-hidden="true">
              {FULL_BIO}
            </span>
            <span className="absolute inset-0">
              {bioText}
              {(showBio || bioDone) && <span className="type-cursor" />}
            </span>
          </p>

          <div
            className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
            style={{ animationDelay: "0.4s" }}
          >
            <Magnetic>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-white text-neutral-900 font-semibold rounded-full px-8 py-4 text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Get in Touch
            </button>
            </Magnetic>

            <Magnetic>
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm border border-white/15 text-white font-semibold rounded-full px-8 py-4 text-sm sm:text-base transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </button>
            </Magnetic>
          </div>

          <div
            className="hero-reveal flex gap-4 justify-center lg:justify-start"
            style={{ animationDelay: "0.55s" }}
          >
            <button
              onClick={() => openLink("https://github.com/npuranik05")}
              className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 hover:text-white hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>

            <button
              onClick={() => openLink("https://www.linkedin.com/in/nishant-puranik-9484a6211/")}
              className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 hover:text-white hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 22.2 0 22.222 0h.003z" />
              </svg>
            </button>

            <button
              onClick={() => openLink("mailto:npuranik05@gmail.com")}
              className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 hover:text-white hover:border-pink-400/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: tilting photo */}
        <div className="hero-reveal order-1 lg:order-2 flex justify-center" style={{ animationDelay: "0.1s" }}>
          <div
            ref={photoRef}
            className="relative transition-transform duration-200 ease-out will-change-transform"
          >
            <div className="hero-ring absolute -inset-[3px] rounded-[28px]" />
            <div className="absolute -inset-8 rounded-[40px] bg-purple-500/20 blur-3xl" />
            <div className="relative w-[240px] sm:w-[280px] lg:w-[330px] aspect-[3/4] rounded-3xl overflow-hidden border-[3px] border-[#0a0a0b]">
              <Image
                src="/pfp-hero.jpg"
                alt="Nishant Puranik"
                width={540}
                height={720}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-reveal absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        style={{ animationDelay: "1s" }}
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <svg className="w-5 h-5 animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowResumeModal(false)}
          ></div>
          <div className="relative bg-[#111113] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-purple-500/10">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Resume Request</h3>
              <p className="text-gray-300 mb-6 text-lg">Please email me for my resume</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setShowResumeModal(false)
                    openLink("mailto:npuranik05@gmail.com")
                  }}
                  className="bg-white text-neutral-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                >
                  Email Me
                </button>
                <button
                  onClick={() => {
                    setShowResumeModal(false)
                    scrollToContact()
                  }}
                  className="bg-white/[0.04] border border-white/15 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:border-white/40"
                >
                  Go to Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

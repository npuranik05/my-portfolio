"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const [nameText, setNameText] = useState("")
  const [bioText, setBioText] = useState("")
  const [showBio, setShowBio] = useState(false)
  const [showResumeModal, setShowResumeModal] = useState(false)

  const fullName = "Nishant Puranik"
  const fullBio =
    "Engineer-in-training, curious about how code can create real impact."

  useEffect(() => {
    let nameIndex = 0
    const nameTimer = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameText(fullName.slice(0, nameIndex + 1))
        nameIndex++
      } else {
        clearInterval(nameTimer)
        setShowBio(true)
      }
    }, 100)

    return () => clearInterval(nameTimer)
  }, [])

  useEffect(() => {
    if (showBio) {
      let bioIndex = 0
      const bioTimer = setInterval(() => {
        if (bioIndex < fullBio.length) {
          setBioText(fullBio.slice(0, bioIndex + 1))
          bioIndex++
        } else {
          clearInterval(bioTimer)
        }
      }, 50)

      return () => clearInterval(bioTimer)
    }
  }, [showBio])

  const downloadResume = () => {
    setShowResumeModal(true)
  }

  const openLink = (url) => {
    window.open(url, "_blank")
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main id="home" className="flex flex-col items-center justify-center min-h-screen px-6 bg-neutral-800 relative">
      <div className="text-center">
        <div className="mb-8">
          <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto w-fit">
            <Image
              src="/Headshot.jpg"
              alt="Nishant Puranik"
              width={200}
              height={200}
              className="rounded-full border-4 border-black shadow-2xl shadow-purple-500/30"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center px-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {nameText}
            {nameText.length < fullName.length && <span className="animate-pulse">|</span>}
          </span>
        </h1>

        <div className="min-h-[40px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center px-4">
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl leading-relaxed text-center">
            {bioText}
            {showBio && bioText.length < fullBio.length && <span className="animate-pulse">|</span>}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-400/50 text-sm sm:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Get in Touch
            </span>
          </button>

          <button
            onClick={downloadResume}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-400/50 text-sm sm:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </span>
          </button>
        </div>

        <div className="flex gap-4 sm:gap-6 justify-center px-4">
          <button
            onClick={() => openLink("https://github.com/npuranik05")}
            className="social-button w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/30"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>

          <button
            onClick={() => openLink("https://www.linkedin.com/in/nishant-puranik-9484a6211/")}
            className="social-button w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 22.2 0 22.222 0h.003z" />
            </svg>
          </button>

          <button
            onClick={() => openLink("mailto:npuranik05@gmail.com")}
            className="social-button w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/30"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to About section"
        >
          <svg
            className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
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
          <div className="relative bg-neutral-800 border border-purple-500/30 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-purple-500/20">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
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
              <h3 className="text-2xl font-bold text-white mb-4">Resume Request</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Please email me for my resume
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setShowResumeModal(false)
                    openLink("mailto:npuranik05@gmail.com")
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Email Me
                </button>
                <button
                  onClick={() => {
                    setShowResumeModal(false)
                    scrollToContact()
                  }}
                  className="bg-neutral-700 border border-purple-500/30 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 hover:border-purple-400/50"
                >
                  Go to Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

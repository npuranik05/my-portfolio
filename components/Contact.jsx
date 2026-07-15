"use client"

import Reveal from "./Reveal"

const MailIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

export default function Contact() {
  const contactInfo = [
    {
      icon: <MailIcon />,
      label: "Email",
      handle: "npuranik05@gmail.com",
      link: "mailto:npuranik05@gmail.com",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      handle: "nishant-puranik",
      link: "https://www.linkedin.com/in/nishant-puranik-9484a6211/",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      handle: "@nishant.puranik",
      link: "https://www.instagram.com/nishant.puranik",
    },
  ]

  const handleContactClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      {/* Soft glow behind the CTA */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/50" />
            <span className="font-mono text-xs sm:text-sm text-purple-400 tracking-[0.3em]">06</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl md:text-9xl font-bold tracking-tight text-white text-center mb-10">
            Let's <span className="gradient-shimmer">Talk</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-center mb-20">
            I love working with people who are passionate about what they do. Whether you have a
            cool idea, need help with a project, or just want to chat - I'm here for it.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-10 px-1">
            Coffee Chat? <span className="gradient-shimmer">Hit me up</span>
          </h3>
        </Reveal>

        <div>
          {contactInfo.map((contact, index) => (
            <Reveal key={contact.label} delay={300 + index * 100}>
              <button
                onClick={() => handleContactClick(contact.link)}
                className="group relative w-full grid grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8 py-6 sm:py-8 px-1 sm:px-4 border-t border-white/10 text-left transition-all duration-500 hover:border-purple-400/40 overflow-hidden"
              >
                {/* Hover wash */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.07] via-pink-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <span className="relative font-mono text-sm text-neutral-600 group-hover:text-purple-300 transition-colors duration-500">
                  0{index + 1}
                </span>

                <div className="relative min-w-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-neutral-500 group-hover:text-purple-300 transition-colors duration-500">
                      {contact.icon}
                    </span>
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300">
                      {contact.label}
                    </span>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors duration-500 mt-2 truncate">
                    {contact.handle}
                  </p>
                </div>

                <span className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 transition-all duration-500 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white group-hover:rotate-45 group-hover:scale-110">
                  <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}

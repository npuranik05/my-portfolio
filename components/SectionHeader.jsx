"use client"

import { useRef, useEffect, useState } from "react"

export default function SectionHeader({ index, title }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = title.split(" ")
  let charCount = 0

  return (
    <div ref={ref}>
      <div className="flex items-center gap-4 mb-5">
        <span
          className={`font-mono text-xs sm:text-sm text-purple-400 tracking-[0.3em] transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          {index}
        </span>
        <div
          className={`h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent origin-left transition-transform duration-1000 ease-out ${
            visible ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-12 sm:mb-16 flex flex-wrap gap-x-[0.28em]">
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex overflow-hidden pb-1">
            {word.split("").map((char, ci) => {
              const delay = charCount++ * 22
              return (
                <span
                  key={ci}
                  className={`inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    visible ? "translate-y-0" : "translate-y-[115%]"
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {char}
                </span>
              )
            })}
          </span>
        ))}
      </h2>
    </div>
  )
}

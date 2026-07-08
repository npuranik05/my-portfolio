"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Site-wide dynamic effects and the shared backdrop:
 * - fixed background (color wash + grid + parallax glow orbs + grain) identical on every section
 * - gradient scroll progress bar along the top
 * - soft purple glow + small dot that follow the cursor (desktop only)
 */
export default function SiteFX() {
  const barRef = useRef(null)
  const glowRef = useRef(null)
  const dotRef = useRef(null)
  const orbARef = useRef(null)
  const orbBRef = useRef(null)
  const orbCRef = useRef(null)
  const rafRef = useRef(null)
  const [cursorEnabled, setCursorEnabled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const progress = doc.scrollTop / (doc.scrollHeight - doc.clientHeight || 1)
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const finePointer = window.matchMedia("(pointer: fine)").matches
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || reduceMotion) {
      return () => window.removeEventListener("scroll", onScroll)
    }

    setCursorEnabled(true)
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      }
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(700px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.09), transparent 65%)`
      }

      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const nx = (x / window.innerWidth - 0.5) * 2
        const ny = (y / window.innerHeight - 0.5) * 2
        if (orbARef.current) orbARef.current.style.transform = `translate(${nx * -35}px, ${ny * -35}px)`
        if (orbBRef.current) orbBRef.current.style.transform = `translate(${nx * 25}px, ${ny * 25}px)`
        if (orbCRef.current) orbCRef.current.style.transform = `translate(${nx * 18}px, ${ny * -18}px)`
      })
    }
    window.addEventListener("mousemove", onMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Fixed backdrop shared by every section */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0912] via-[#0a0a0d] to-[#0a0b10]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_0%,rgba(109,40,217,0.09),transparent_60%),radial-gradient(ellipse_80%_55%_at_85%_100%,rgba(37,99,235,0.07),transparent_60%),radial-gradient(ellipse_65%_50%_at_0%_55%,rgba(147,51,234,0.05),transparent_60%),radial-gradient(ellipse_50%_40%_at_100%_30%,rgba(219,39,119,0.04),transparent_60%)]" />
        <div className="site-grid absolute inset-0" />
        <div ref={orbARef} className="hero-orb hero-orb-a w-[560px] h-[560px] -top-40 -left-32 bg-purple-600/12" />
        <div ref={orbBRef} className="hero-orb hero-orb-b w-[500px] h-[500px] -bottom-32 -right-24 bg-blue-600/10" />
        <div ref={orbCRef} className="hero-orb hero-orb-a w-[400px] h-[400px] top-1/2 -left-24 bg-violet-600/8" />
        <div className="hero-orb w-[360px] h-[360px] top-1/4 right-1/4 bg-pink-600/5" />
        <div className="noise absolute inset-0 opacity-[0.035]" />
      </div>

      <div className="fixed top-0 left-0 right-0 h-[3px] z-[70] pointer-events-none">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400"
        />
      </div>

      <div ref={glowRef} className="fixed inset-0 pointer-events-none" />

      {cursorEnabled && (
        <div
          ref={dotRef}
          className="fixed top-0 left-0 z-[90] w-1.5 h-1.5 rounded-full bg-purple-300/90 pointer-events-none"
        />
      )}
    </>
  )
}

"use client"

import { useRef } from "react"

/** Card wrapper that tilts in 3D toward the cursor and shows a moving glare. */
export default function TiltCard({ children, className = "", max = 6, ...props }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 2 * max}deg) rotateX(${(0.5 - py) * 2 * max}deg) translateY(-4px)`
    el.style.setProperty("--gx", `${px * 100}%`)
    el.style.setProperty("--gy", `${py * 100}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ""
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`tilt-card ${className}`} {...props}>
      {children}
      <div className="tilt-glare" />
    </div>
  )
}

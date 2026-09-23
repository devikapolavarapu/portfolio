import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const handleMove = (e) => {
      if (!ticking) {
        const x = e.clientX
        const y = e.clientY
        requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("mousemove", handleMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl bg-amber-500/20 -translate-x-1/2 -translate-y-1/2 z-0 will-change-transform"
      style={{ top: 0, left: 0 }}
    />
  )
}
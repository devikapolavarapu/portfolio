import { useEffect, useRef } from "react"

export default function CursorGlow() {

  const glowRef = useRef(null)

  useEffect(() => {

    const handleMove = (e) => {

      if (!glowRef.current) return

      glowRef.current.style.left = e.clientX + "px"
      glowRef.current.style.top = e.clientY + "px"

    }

    window.addEventListener("mousemove", handleMove)

    return () => window.removeEventListener("mousemove", handleMove)

  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl bg-amber-500/20 -translate-x-1/2 -translate-y-1/2 z-0"
    />
  )
}
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show cursor on desktop (not touch devices)
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a, button, [role='button']")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <div
          className={`h-10 w-10 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 blur-xl transition-all duration-300 ${
            isHovering ? "scale-150 opacity-100" : "scale-100 opacity-50"
          }`}
        />
      </motion.div>
      
      {/* Inner cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div
          className={`h-4 w-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transition-all duration-300 ${
            isHovering ? "scale-150 ring-2 ring-purple-400/50" : "scale-100"
          }`}
        />
      </motion.div>
    </>
  )
}


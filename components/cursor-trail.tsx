"use client"

import { useEffect, useRef } from "react"

export function CursorTrail() {
  const trailRef = useRef<HTMLDivElement[]>([])
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const numTrails = 8
    const trails: HTMLDivElement[] = []

    for (let i = 0; i < numTrails; i++) {
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      trail.style.opacity = `${1 - i * 0.1}`
      trail.style.transform = `scale(${1 - i * 0.08})`
      document.body.appendChild(trail)
      trails.push(trail)
    }
    trailRef.current = trails

    let positions: { x: number; y: number }[] = Array(numTrails).fill({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      positions = positions.map((pos, i) => {
        const target = i === 0 ? mousePos.current : positions[i - 1]
        return {
          x: pos.x + (target.x - pos.x) * 0.3,
          y: pos.y + (target.y - pos.y) * 0.3,
        }
      })

      trails.forEach((trail, i) => {
        trail.style.left = `${positions[i].x - 10}px`
        trail.style.top = `${positions[i].y - 10}px`
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      trails.forEach((trail) => trail.remove())
    }
  }, [])

  return null
}

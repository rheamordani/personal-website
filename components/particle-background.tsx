"use client"

import { useEffect, useRef } from "react"

type ShapeType = "star" | "heart" | "circle" | "sparkle" | "blob"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
  rotation: number
  rotationSpeed: number
  shape: ShapeType
  wobble: number
  wobbleSpeed: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    const shapes: ShapeType[] = ["star", "heart", "circle", "sparkle", "blob"]

    const createParticles = () => {
      particles = []
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5 - 0.3, // slight upward drift
          size: Math.random() * 12 + 4,
          opacity: Math.random() * 0.6 + 0.3,
          hue: Math.random() * 80 + 280, // Pink to purple to cyan
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.03,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.02 + 0.01,
        })
      }
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    const drawStar = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5 - Math.PI / 2
        const outerX = Math.cos(angle) * size
        const outerY = Math.sin(angle) * size
        const innerAngle = angle + Math.PI / 5
        const innerX = Math.cos(innerAngle) * (size * 0.4)
        const innerY = Math.sin(innerAngle) * (size * 0.4)
        if (i === 0) {
          ctx.moveTo(outerX, outerY)
        } else {
          ctx.lineTo(outerX, outerY)
        }
        ctx.lineTo(innerX, innerY)
      }
      ctx.closePath()
      ctx.restore()
    }

    const drawHeart = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      const s = size * 0.6
      ctx.moveTo(0, s * 0.3)
      ctx.bezierCurveTo(-s, -s * 0.3, -s, -s, 0, -s * 0.5)
      ctx.bezierCurveTo(s, -s, s, -s * 0.3, 0, s * 0.3)
      ctx.closePath()
      ctx.restore()
    }

    const drawSparkle = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2
        ctx.moveTo(0, 0)
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size)
      }
      ctx.restore()
    }

    const drawBlob = (x: number, y: number, size: number, wobble: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6
        const r = size * (0.7 + 0.3 * Math.sin(wobble + i))
        const px = x + Math.cos(angle) * r
        const py = y + Math.sin(angle) * r
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()
    }

    const animate = () => {
      time += 0.016
      
      // Clear with slight trail effect
      ctx.fillStyle = "rgba(13, 8, 20, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Mouse interaction - particles bounce away from cursor
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150
          p.vx -= (dx / dist) * force * 0.3
          p.vy -= (dy / dist) * force * 0.3
        }

        // Add some wobble
        p.wobble += p.wobbleSpeed
        p.x += p.vx + Math.sin(p.wobble) * 0.5
        p.y += p.vy

        // Rotation
        p.rotation += p.rotationSpeed

        // Apply friction
        p.vx *= 0.99
        p.vy *= 0.99

        // Wrap around edges with some buffer
        if (p.x < -50) p.x = canvas.width + 50
        if (p.x > canvas.width + 50) p.x = -50
        if (p.y < -50) p.y = canvas.height + 50
        if (p.y > canvas.height + 50) p.y = -50

        // Draw with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 75%, ${p.opacity})`)
        gradient.addColorStop(0.5, `hsla(${p.hue}, 85%, 65%, ${p.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${p.hue}, 80%, 60%, 0)`)

        ctx.fillStyle = gradient
        ctx.strokeStyle = `hsla(${p.hue}, 90%, 80%, ${p.opacity * 0.8})`
        ctx.lineWidth = 1.5

        switch (p.shape) {
          case "star":
            drawStar(p.x, p.y, p.size, p.rotation)
            ctx.fill()
            break
          case "heart":
            drawHeart(p.x, p.y, p.size, p.rotation)
            ctx.fill()
            break
          case "circle":
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2)
            ctx.fill()
            break
          case "sparkle":
            drawSparkle(p.x, p.y, p.size, p.rotation)
            ctx.stroke()
            break
          case "blob":
            drawBlob(p.x, p.y, p.size, p.wobble)
            ctx.fill()
            break
        }
      })

      // Draw some extra sparkle bursts near mouse
      for (let i = 0; i < 3; i++) {
        const angle = time * 2 + (i * Math.PI * 2) / 3
        const sparkleX = mouseX + Math.cos(angle) * 30
        const sparkleY = mouseY + Math.sin(angle) * 30
        const sparkleSize = 3 + Math.sin(time * 5 + i) * 2

        ctx.fillStyle = `hsla(${320 + i * 20}, 90%, 80%, ${0.4 + Math.sin(time * 3) * 0.2})`
        ctx.beginPath()
        ctx.arc(sparkleX, sparkleY, sparkleSize, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

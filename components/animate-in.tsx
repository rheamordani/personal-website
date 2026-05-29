"use client"

import { useEffect, useRef, useState } from "react"

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimateIn({ children, delay = 0, className = "" }: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-8 blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  className = "",
}: {
  children: React.ReactNode[]
  staggerDelay?: number
  className?: string
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimateIn key={index} delay={index * staggerDelay}>
          {child}
        </AnimateIn>
      ))}
    </div>
  )
}

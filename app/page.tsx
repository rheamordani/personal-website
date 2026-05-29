"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { ParticleBackground } from "@/components/particle-background"
import { CursorTrail } from "@/components/cursor-trail"
import { AnimateIn } from "@/components/animate-in"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      <CursorTrail />
      
      <div className="relative z-10">
        {/* Big hero section at top */}
        <Hero />
        
        {/* Content sections */}
        <main className="mx-auto max-w-4xl px-6 pb-24 md:px-12">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <AnimateIn>
      <footer className="text-center py-12 text-sm text-muted-foreground border-t border-border/30">
        <p>
          Designed & built with{" "}
          <span className="text-pink-300">love</span>{" "}
          using{" "}
          <a
            href="https://nextjs.org"
            className="font-medium text-foreground hover:text-pink-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            className="font-medium text-foreground hover:text-purple-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </footer>
    </AnimateIn>
  )
}

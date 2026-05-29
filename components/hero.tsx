"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative px-6">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div 
          className={`absolute w-[500px] h-[500px] rounded-full border border-pink-500/10 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div 
          className={`absolute w-[700px] h-[700px] rounded-full border border-purple-500/10 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div 
          className={`absolute w-[900px] h-[900px] rounded-full border border-cyan-500/5 transition-all duration-1000 delay-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <p 
          className={`text-pink-300/80 text-sm tracking-[0.3em] uppercase mb-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          Hello, I&apos;m
        </p>
        
        <h1 
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="glow-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Rhea Mordani
          </span>
        </h1>
        
        <h2 
          className={`mt-6 text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-muted-foreground transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          CS @ University of Michigan
        </h2>
        
        <p 
          className={`mt-4 max-w-lg mx-auto text-muted-foreground/80 leading-relaxed transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building systems that scale. Breaking things, then fixing them better.
        </p>

        {/* Social links */}
        <div 
          className={`mt-8 flex items-center justify-center gap-6 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SocialLink href="https://github.com" label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://linkedin.com" label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
          </SocialLink>
          <SocialLink href="mailto:hello@rheamordani.com" label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </SocialLink>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`mt-16 transition-all duration-700 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-pink-500/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="group relative p-3 rounded-full glass-card hover:scale-110 transition-all duration-300"
      aria-label={label}
    >
      <span className="text-muted-foreground group-hover:text-pink-300 transition-colors duration-300">
        {children}
      </span>
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg -z-10" />
    </a>
  )
}

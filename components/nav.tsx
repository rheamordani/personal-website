"use client"

import { cn } from "@/lib/utils"

interface NavProps {
  activeSection: string
}

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
]

export function Nav({ activeSection }: NavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "group flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all duration-300",
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "h-px transition-all duration-300",
                  activeSection === item.id
                    ? "w-16 bg-gradient-to-r from-pink-400 to-purple-400"
                    : "w-8 bg-muted-foreground/50 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400"
                )}
              />
              <span className={cn(
                "transition-all duration-300",
                activeSection === item.id && "glow-text"
              )}>
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

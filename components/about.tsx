import { TiltCard } from "./tilt-card"
import { AnimateIn } from "./animate-in"

export function About() {
  const skills = [
    "Rust", "C/C++", "Python", "TypeScript", "Go",
    "PostgreSQL", "Redis", "Next.js", "React",
    "Distributed Systems", "Security", "Machine Learning"
  ]

  return (
    <section
      id="about"
      className="mb-24 scroll-mt-16"
      aria-label="About me"
    >
      <AnimateIn>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 glow-text bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          About Me
        </h2>
      </AnimateIn>

      <div className="space-y-6">
        <AnimateIn delay={100}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Hey! I&apos;m a junior at the <span className="text-pink-300 font-medium">University of Michigan</span> studying 
            Computer Science. I&apos;m passionate about building high-performance systems, diving deep into 
            database internals, and making computers go brrr.
          </p>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            When I&apos;m not writing Rust or debugging distributed systems, you can find me leading 
            <span className="text-purple-300 font-medium"> ProjectCSGirls Michigan</span>, hacking at hackathons, 
            or exploring the intersection of security and ML.
          </p>
        </AnimateIn>
        
        <AnimateIn delay={300}>
          <TiltCard>
            <div className="glass-card rounded-2xl p-6 mt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4 glow-text">
                Tech I Love
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="tech-tag px-3 py-1.5 rounded-full text-sm font-medium text-pink-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </AnimateIn>
      </div>
    </section>
  )
}

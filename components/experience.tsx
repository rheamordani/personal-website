import { TiltCard } from "./tilt-card"
import { AnimateIn } from "./animate-in"

interface ExperienceItemProps {
  dates: string
  title: string
  company: string
  companyUrl?: string
  description: string[]
  skills: string[]
}

const experiences: ExperienceItemProps[] = [
  {
    dates: "May 2026 — Present",
    title: "Software Engineering Intern",
    company: "ReadySet",
    companyUrl: "https://readyset.io",
    description: [
      "Contributing to ReadySet's core engine team — the systems layer of the product, working in Rust on database internals, query parsing, and AST design.",
      "Working on the SQL parsing and AST layer, which determines what shapes of SQL the engine can support.",
      "Currently redesigning ReadySet's representation of nested SELECT queries to fix a class of parser failures.",
    ],
    skills: ["Rust", "SQL", "Database Internals", "AST Design"],
  },
  {
    dates: "Jan 2026 — Present",
    title: "Undergraduate Researcher",
    company: "Stats & ML Lab @ UMich",
    description: [
      "Working under Prof. Shubhanshu Shekhar on anytime-valid stochastic trace estimation.",
      "Implementing and experimenting with Hutchinson's estimator in Python, analyzing accuracy–compute tradeoffs.",
    ],
    skills: ["Python", "Statistical Inference", "Linear Algebra", "ML Theory"],
  },
  {
    dates: "Jun 2023 — Dec 2024",
    title: "System Security Intern",
    company: "ACTION Institute @ UCSB",
    description: [
      "Developed a symbolic execution tool to detect vulnerabilities in smart contracts to price oracle manipulation attacks.",
      "Built a reputation-based system analyzing transaction features to flag potential attack transactions with 95% accuracy.",
    ],
    skills: ["Symbolic Execution", "Smart Contracts", "Security Research", "DeFi"],
  },
  {
    dates: "Sep 2025 — Present",
    title: "Blockchain Developer",
    company: "Michigan Blockchain",
    description: [
      "Built ForeverData for EigenLayer, extending EigenDA's 14-day data availability through Solidity smart contracts.",
      "Implemented cron-based backend jobs (TypeScript, Docker) to periodically index, verify, and re-store data.",
    ],
    skills: ["Solidity", "TypeScript", "Docker", "SQL"],
  },
]

function ExperienceItem({
  dates,
  title,
  company,
  companyUrl,
  description,
  skills,
  index,
}: ExperienceItemProps & { index: number }) {
  return (
    <AnimateIn delay={index * 150}>
      <li className="mb-8">
        <TiltCard>
          <div className="glass-card glow-border rounded-2xl p-6 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  {title}
                </h3>
                {companyUrl ? (
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-pink-300 transition-colors inline-flex items-center gap-1"
                  >
                    {company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-purple-300">{company}</span>
                )}
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider shrink-0">
                {dates}
              </span>
            </div>
            
            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              {description.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-pink-400 mt-1.5 shrink-0">
                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="tech-tag px-3 py-1 rounded-full text-xs font-medium text-pink-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </li>
    </AnimateIn>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-24 scroll-mt-16"
      aria-label="Work experience"
    >
      <AnimateIn>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 glow-text bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Experience
        </h2>
      </AnimateIn>
      <ul className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} index={index} />
        ))}
      </ul>
    </section>
  )
}

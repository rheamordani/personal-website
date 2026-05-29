import { TiltCard } from "./tilt-card"
import { AnimateIn } from "./animate-in"

interface ProjectItemProps {
  title: string
  event?: string
  date: string
  description: string
  skills: string[]
}

const projects: ProjectItemProps[] = [
  {
    title: "StepRight",
    event: "CalHacks 2025",
    date: "Oct 2025",
    description:
      "A web app recommending safe walking routes using crime and streetlight datasets. Implemented a modified Kruskal's MST algorithm and Google Routes API to optimize safety vs. distance.",
    skills: ["React", "Python", "Google Maps API", "Pandas"],
  },
  {
    title: "Spotify Social",
    event: "Blueprint 2025",
    date: "Feb 2025",
    description:
      "A web platform integrating with Spotify to make music listening social. Features song ranking, comparing new tracks against listening history, and visual analysis of music taste.",
    skills: ["React", "MongoDB", "JavaScript", "Spotify API"],
  },
  {
    title: "ForeverData",
    event: "Michigan Blockchain",
    date: "2025",
    description:
      "Extended EigenDA's 14-day data availability through Solidity smart contracts and automated persistence workflows.",
    skills: ["Solidity", "TypeScript", "Docker", "SQL"],
  },
  {
    title: "AgriData Platform",
    event: "NASA Space Apps 2024",
    date: "Oct 2024",
    description:
      "A dynamic web platform providing farmers access to critical NASA data for enhancing agricultural productivity.",
    skills: ["React", "JavaScript", "NASA APIs", "PHP"],
  },
  {
    title: "WISE Audio Visualizer",
    event: "NASA Space Apps 2023",
    date: "Oct 2023",
    description:
      "An algorithm that transforms infrared measurements from NASA's Wide-field Infrared Survey Explorer into audio output.",
    skills: ["Python", "Data Sonification", "NASA APIs"],
  },
  {
    title: "Secure Firmware Service",
    event: "MIT BeaverWorks",
    date: "2024",
    description:
      "Developed a secure firmware updating service in C. Learned reverse engineering, crypto protocol attacks, JTAG & UART probing.",
    skills: ["C", "Embedded Systems", "Security", "Cryptography"],
  },
]

function ProjectItem({ title, event, date, description, skills, index }: ProjectItemProps & { index: number }) {
  return (
    <AnimateIn delay={index * 100}>
      <TiltCard className="h-full">
        <div className="glass-card glow-border rounded-2xl p-6 h-full flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                {title}
              </h3>
              {event && (
                <span className="text-sm text-purple-300">{event}</span>
              )}
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider shrink-0">
              {date}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tech-tag px-2.5 py-1 rounded-full text-xs font-medium text-pink-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </AnimateIn>
  )
}

export function Projects() {
  const courses = [
    "EECS 280", "EECS 203", "Math 217", "Math 214", "Math 215", "Physics 240"
  ]

  return (
    <section
      id="projects"
      className="mb-24 scroll-mt-16"
      aria-label="Selected projects"
    >
      <AnimateIn>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 glow-text bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
          Projects
        </h2>
      </AnimateIn>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} index={index} />
        ))}
      </div>

      {/* Coursework */}
      <AnimateIn delay={600}>
        <TiltCard className="mt-12">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4 glow-text">
              Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="tech-tag px-3 py-1.5 rounded-full text-sm font-medium text-cyan-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </AnimateIn>

      {/* Leadership */}
      <AnimateIn delay={700}>
        <TiltCard className="mt-6">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4 glow-text">
              Leadership
            </h3>
            <div className="text-sm text-muted-foreground">
              <span className="text-pink-300 font-medium">ProjectCSGirls Fremont</span>
              <span> — President, Director of Recreation, Director of Curriculum</span>
              <p className="mt-2">
                Led weekly meetings for 30 middle school girls, delivered tech talks on cybersecurity and Java, 
                recruited 15 industry speakers, and organized 3 hackathons.
              </p>
            </div>
          </div>
        </TiltCard>
      </AnimateIn>
    </section>
  )
}

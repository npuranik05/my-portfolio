"use client"

import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

// Icons served from cdn.simpleicons.org. `color` overrides brands whose
// official mark is too dark for the near-black background. Skills without
// an available brand icon use a typographic `mark` instead.
const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Python", slug: "python" },
      { name: "Java", slug: "openjdk", color: "5382a1" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "C#", mark: "C#" },
      { name: "SQL", mark: "SQL" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
      { name: "MATLAB", mark: "MAT" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Flask", slug: "flask", color: "ffffff" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Keras", slug: "keras" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "Pandas", slug: "pandas", color: "ffffff" },
      { name: "Plotly", slug: "plotly", color: "636efa" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "PyTest", slug: "pytest" },
      { name: "JUnit", slug: "junit5" },
      { name: "Jest", slug: "jest" },
    ],
  },
  {
    label: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "SQLite", slug: "sqlite", color: "3fa6db" },
      { name: "AWS", mark: "AWS" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Swagger", slug: "swagger" },
    ],
  },
  {
    label: "Tools & Analytics",
    skills: [
      { name: "Git", slug: "git" },
      { name: "Linux", slug: "linux" },
      { name: "Jira", slug: "jira" },
      { name: "Power BI", mark: "PBI" },
      { name: "Tableau", mark: "TAB" },
      { name: "Excel", mark: "XLS" },
      { name: "Figma", slug: "figma" },
      { name: "MLflow", slug: "mlflow" },
    ],
  },
]

function SkillTile({ skill }) {
  const onMove = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      onMouseMove={onMove}
      className="group relative overflow-hidden flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-5 transition-all duration-300 hover:border-purple-400/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.45)] cursor-default"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(110px circle at var(--x, 50%) var(--y, 50%), rgba(168, 85, 247, 0.18), transparent 70%)",
        }}
      />
      <div className="h-9 flex items-center justify-center">
        {skill.slug ? (
          <img
            src={`https://cdn.simpleicons.org/${skill.slug}${skill.color ? `/${skill.color}` : ""}`}
            alt=""
            loading="lazy"
            className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="font-display text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 transition-transform duration-300 group-hover:scale-110">
            {skill.mark}
          </span>
        )}
      </div>
      <span className="text-xs sm:text-sm text-neutral-400 group-hover:text-white transition-colors duration-300 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  const certifications = [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      image: "/amazon.png",
    },
    {
      name: "Meta React Developer",
      issuer: "Coursera",
      image: "/meta.jpeg",
    },
    {
      name: "TensorFlow 2.0",
      issuer: "Udemy",
      image: "/udemy.png",
    },
  ]

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" title="Skills" />

        <div className="mb-20 space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.label}>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-purple-400 whitespace-nowrap">
                    {group.label}
                  </h3>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
              </Reveal>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-3">
                {group.skills.map((skill, index) => (
                  <Reveal key={skill.name} delay={Math.min(index * 40, 320)}>
                    <SkillTile skill={skill} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-purple-400 whitespace-nowrap">
                Actively Learning
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <Reveal key={cert.name} delay={index * 120}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-purple-400/40 hover:bg-white/[0.05] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="font-display font-bold text-white leading-tight mb-1 group-hover:text-purple-200 transition-colors duration-300">
                    {cert.name}
                  </div>
                  <div className="font-mono text-xs text-purple-300/80 mb-4">{cert.issuer}</div>
                  <div className="relative aspect-[4/3] bg-white rounded-xl border border-white/10 flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={cert.image}
                      alt={`${cert.name} logo`}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"
import TiltCard from "./TiltCard"

const GITHUB_URL = "https://github.com/npuranik05"

export default function Projects() {
  const projects = [
    {
      title: "GreenXV6 - Campus Air Quality Monitoring System",
      description:
        "Simulated a network of air quality sensors across campus as a kernel-level proof of concept in xv6, using a spinlock-protected zone-tracking structure and custom syscalls. Extended the scheduler to throttle processes in polluted zones while letting mitigator processes bypass lockout, plus per-process energy accounting via the timer interrupt.",
      image: "/greenxv6.png",
      technologies: ["C", "Operating Systems", "xv6", "Kernel Programming", "Scheduling Algorithms", "QEMU"],
      period: "January 2026 - May 2026",
      wide: true,
    },
    {
      title: "Vehicle Booking System",
      description:
        "A Python-based fleet management system for optimizing vehicle assignments and booking efficiency. Developed a Streamlit dashboard with live performance analytics and dynamic cost calculation, backed by a SQLite database with full CRUD operations.",
      image: "/vehicle-booking-system.jpg",
      technologies: ["Python", "Plotly", "SQLite", "Pandas", "OpenPyXL", "Streamlit", "GeoTab"],
      period: "May 2024 - August 2024",
    },
    {
      title: "Course Management Platform",
      description:
        "Architected a full-stack academic platform using the MERN stack with role-based access control for Admins, TAs, and Students. Built a secure REST API with JWT authentication, assignment sign-up scheduling with overlap detection, and a complete grading system with audit history and bulk CSV import.",
      image: "/task-management-dashboard.png",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "bcrypt"],
      period: "September 2025 - November 2025",
    },
    {
      title: "Aviation Fleet Management Database",
      description:
        "Designed a normalized airline operations database in 3NF, modeling complex entity relationships across fleet, maintenance, and scheduling data. Implemented SQL views and stored procedures to handle core business logic, then built a frontend demo to showcase realistic system behavior.",
      image: "/aviation-tracker.jpg",
      technologies: ["MySQL", "Python", "HTML/CSS", "JavaScript"],
      period: "August 2025 - September 2025",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "The site you're on right now. Designed and built with Next.js and Tailwind CSS, featuring cursor-reactive animations, scroll-triggered reveals, and a fully responsive layout. Constantly iterating on it to keep the design sharp and the experience fun to explore.",
      image: "/portfolio-website.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      period: "June 2025 - Ongoing",
    },
    {
      title: "Real Estate Management System",
      description:
        "Built a multi-user desktop app in JavaFX with secure login, role-based access, and housing data management via Derby DB. Created detailed UML diagrams and implemented distinct features.",
      image: "/real-estate-management.jpg",
      technologies: ["JavaFX", "Derby DB", "UML", "Java"],
      period: "January 2025 - March 2025",
    },
    {
      title: "Fantasy RPG Game",
      description:
        "Led development on a Unity-based RPG game, designing and implementing 34+ C# classes for combat, inventory, dialogue, and player progression systems. Created detailed UML diagrams.",
      image: "/fantasy-rpg-game.jpg",
      technologies: ["Unity", "C#", "Git", "UML"],
      period: "January 2025 - March 2025",
    },
  ]

  const openGithub = () => {
    window.open(GITHUB_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" title="Projects" />

        {/* GreenXV6 spans the full first row, then two symmetric rows of three */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) =>
            project.wide ? (
              <Reveal key={project.title} className="h-full sm:col-span-2 lg:col-span-3">
                <TiltCard
                  max={4}
                  onClick={openGithub}
                  role="link"
                  aria-label={`${project.title} on GitHub`}
                  className="group cursor-pointer h-full grid md:grid-cols-[0.9fr_1.1fr] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-purple-400/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative overflow-hidden min-h-[200px]">
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      width={700}
                      height={360}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  <div className="flex flex-col p-5 sm:p-7">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-2 font-mono text-[11px] text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-400/30">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
                          </span>
                          Most Recent
                        </span>
                        <span className="font-mono text-[11px] text-neutral-400 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                          {project.period}
                        </span>
                      </div>
                      <span className="w-9 h-9 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-neutral-500 transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex gap-x-3 gap-y-1.5 flex-wrap font-mono text-[11px] text-purple-300/80">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ) : (
              <Reveal key={project.title} delay={(index % 3) * 100} className="h-full">
                <TiltCard
                  onClick={openGithub}
                  role="link"
                  aria-label={`${project.title} on GitHub`}
                  className="group cursor-pointer h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-purple-400/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/90 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 font-mono text-[11px] text-neutral-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                      {project.period}
                    </span>
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm flex items-center justify-center text-neutral-400 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex gap-x-3 gap-y-1.5 flex-wrap font-mono text-[11px] text-purple-300/80">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  )
}

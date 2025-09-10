"use client"

import Image from "next/image"

/**
 * Projects Component
 * Displays Nishant Puranik's portfolio projects with interactive cards
 * Features: Responsive grid, hover effects, technology tags, single CTA button
 */
export default function Projects() {
  const projects = [
    {
      title: "Vehicle Booking System",
      description:
        "Developed a Python and Excel-based vehicle booking system for Metrolinx GO Transit, increasing booking efficiency by 58%. Led the entire project working with senior colleagues.",
      image: "/vehicle-booking-system.jpg",
      technologies: ["Python", "Excel", "Data Analysis", "GeoTab"],
      period: "May 2024 - August 2024",
    },
    {
      title: "PhishSense - AI Phishing Detection System",
      description:
        "Led development of an AI-powered phishing detection system using PyTorch and DistilBERT. Built FastAPI backend, React dashboard, and browser extension for real-time email scanning.",
      image: "/cyber.jpg",
      technologies: ["PyTorch", "FastAPI", "React", "PostgreSQL", "Docker"],
      period: "September 2025 – Present (In Progress)",
    },
    {
      title: "Aviation Fleet Management Database",
      description:
        "Led development of a database system for fleet operations with MySQL triggers and stored procedures. Built Flask web interface for querying fleet records and real-time dashboards.",
      image: "/aviation-tracker.jpg",
      technologies: ["MySQL", "Flask", "HTML/CSS", "JavaScript", "Python"],
      period: "August 2025 - September 2025",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Built and deployed a fully responsive portfolio using React and Tailwind CSS, showcasing projects, resume, and interactive components across devices. Integrated dynamic contact form.",
      image: "/portfolio-website.jpg",
      technologies: ["React", "Tailwind CSS", "JavaScript", "GitHub Pages"],
      period: "June 2025 - Present",
    },
    {
      title: "Real Estate Management System",
      description:
        "Built a multi-user desktop app in JavaFX with secure login, role-based access, and housing data management via Derby DB. Created detailed UML diagrams and implemented distinct features.",
      image: "/real-estate-management.jpg",
      technologies: ["JavaFX", "Derby DB", "UML", "Java"],
      period: "February 2025 - March 2025",
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

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const viewAllProjects = () => {
    window.open("https://github.com/npuranik05", "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 bg-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-purple-400 mb-20">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gradient-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.jpg"}
                  alt={project.title}
                  width={300}
                  height={150}
                  className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {project.period}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed text-xs line-clamp-3">{project.description}</p>
                <div className="flex gap-1 flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={viewAllProjects}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-8 py-3 text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-400/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View All Projects on GitHub
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToSkills}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to Skills section"
        >
          <svg
            className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

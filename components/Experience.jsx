"use client"

export default function Experience() {
  const experiences = [
    {
      title: "Non-Revenue Vehicle Fleet Analyst Intern",
      company: "Metrolinx GO Transit",
      location: "Toronto, ON",
      logo: "/metrolinx.jpg",
      period: "May 2024 - August 2024",
      description: [
        "At Metrolinx, I got to combine my technical skills with a huge real-world system: the fleet that keeps Toronto moving. I built a booking tool in Python and Excel that streamlined how teams reserved vehicles, making the process faster and easier for everyone. I also helped analyze fleet performance data using GeoTab and supported compliance tracking for equipment. Beyond the technical side, I learned what it's like to work inside a large organization and saw firsthand how technology can connect people across departments to make everyday operations smoother.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "VERYON",
      location: "United Kingdom",
      logo: "/veryon.jpeg",
      period: "May 2025 - August 2025",
      description: [
        "During my time at Veryon, I worked on their flagship aviation fleet management platform, Tracking+. A lot of my day-to-day was spent digging into big enterprise databases, writing and optimizing SQL queries, and fixing bugs that affected real customers. I loved the challenge of turning confusing issues into clear solutions and seeing the difference it made when clients could get the insights they needed without delay. Working alongside developers, QA, and product teams also taught me how much better things go when people bring different skills to the table and solve problems together.",
      ],
    },
  ]

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 bg-neutral-800 relative"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12 sm:mb-16 md:mb-20">Experience</h2>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-2 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 sm:border-4 border-neutral-800 z-10 shadow-lg shadow-purple-500/50 animate-pulse"></div>

                <div className="ml-8 sm:ml-20 gradient-card p-4 sm:p-6 md:p-8 rounded-xl w-full group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="mb-3 lg:mb-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-contain bg-white/10 p-2 self-start"
                      />
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-1 sm:mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-purple-300 font-semibold">
                          {exp.company} – {exp.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base bg-purple-500/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-purple-500/30 font-medium self-start lg:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="text-gray-300 leading-relaxed space-y-2 sm:space-y-3">
                    {exp.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-purple-400 mr-3 sm:mr-4 mt-1 sm:mt-2 text-xs sm:text-sm">●</span>
                        <span className="text-sm sm:text-base leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToProjects}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to Projects section"
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

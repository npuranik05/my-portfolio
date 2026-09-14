"use client"

import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer & Data Analyst",
      company: "MHIRJ",
      location: "Mississauga, ON",
      logo: "/mitsubishi.png",
      period: "May 2026 – Present",
      description: [
        "At MHIRJ, I work on analytics infrastructure for Mitsubishi's CRJ regional jet fleet, supporting 2,000+ aircraft and processing over a million operational records to power dashboards and forecasting tools used by top aviation operators. I'm currently working on forecasting systems that project fleet maintenance and lifecycle information years in advance, giving the company and its clients a clearer view of what's ahead.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "VERYON",
      location: "United Kingdom",
      logo: "/veryon.jpeg",
      period: "May 2025 – Aug 2025",
      description: [
        "During my time at Veryon, I worked on their flagship aviation fleet management platform, Tracking+. A lot of my day-to-day was spent digging into big enterprise databases, writing and optimizing SQL queries, and fixing bugs that affected real customers. I loved the challenge of turning confusing issues into clear solutions and seeing the difference it made when clients could get the insights they needed without delay. Working alongside developers, QA, and product teams also taught me how much better things go when people bring different skills to the table and solve problems together.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "Metrolinx GO Transit",
      location: "Toronto, ON",
      logo: "/metrolinx.jpg",
      period: "May 2024 – Aug 2024",
      description: [
        "At Metrolinx, I got to combine my technical skills with a huge real-world system: the fleet that keeps Toronto moving. I built a booking tool in Python and Excel that streamlined how teams reserved vehicles, making the process faster and easier for everyone. I also helped analyze fleet performance data using GeoTab and supported compliance tracking for equipment. Beyond the technical side, I learned what it's like to work inside a large organization and saw firsthand how technology can connect people across departments to make everyday operations smoother.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" title="Experience" />

        <div>
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="group grid md:grid-cols-[1fr_auto] gap-3 md:gap-10 py-10 sm:py-12 border-t border-white/10 transition-colors duration-500 hover:border-purple-400/40">
                <div className="font-mono text-sm text-neutral-500 pt-1.5 whitespace-nowrap md:text-right md:order-last group-hover:text-purple-300 transition-colors duration-500">
                  {exp.period}
                </div>

                <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
                  <div className="flex items-start gap-4 mb-5">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain bg-white/10 p-2 border border-white/10"
                    />
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-500">
                        {exp.title}
                      </h3>
                      <p className="text-purple-300/90 font-medium text-base sm:text-lg">
                        {exp.company} – {exp.location}
                      </p>
                    </div>
                  </div>

                  {exp.description.map((point, pointIndex) => (
                    <p
                      key={pointIndex}
                      className="text-neutral-400 leading-relaxed text-sm sm:text-base max-w-3xl group-hover:text-neutral-300 transition-colors duration-500"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}

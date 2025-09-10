"use client"

export default function Leadership() {
  const leadershipRoles = [
    {
      title: "Vice President of Events",
      organization: "AWARE",
      period: "Sept 2024 – Present",
      description: [
        "Spearheaded event strategy and programming for a mental health advocacy club, growing membership to 50+ active participants within one academic year.",
        "Designed and facilitated workshops and panel discussions on addiction awareness and stigma reduction, creating safe spaces for dialogue.",
        "Partnered with campus organizations and speakers, boosting event attendance by 40% compared to previous terms.",
      ],
    },
    {
      title: "Events Director",
      organization: "Western Red Cross",
      period: "Sept 2024 – Apr 2025",
      description: [
        "Directed planning and execution of campus-wide fundraising initiatives, including the flagship Rose Drive, engaging 300+ students and raising over $5,000 for humanitarian aid.",
        "Managed logistics, sponsorship outreach, and volunteer coordination, ensuring seamless delivery of multiple large-scale events.",
        "Strengthened community awareness of Red Cross initiatives through targeted promotional campaigns and cross-team collaboration.",
      ],
    },
    {
      title: "Residence Fire Marshal",
      organization: "Western University",
      period: "Sept 2023 – Apr 2024",
      description: [
        "Led fire safety training sessions for 100+ residents, teaching emergency procedures and safe evacuation practices.",
        "Coordinated and supervised monthly fire drills, achieving full compliance with university safety standards.",
        "Collaborated with residence advisors and campus security to enhance evacuation protocols and promote a culture of safety.",
      ],
    },
    {
      title: "Youth Leader & MC",
      organization: "Kannada Sangha Toronto",
      period: "Sept 2019 – June 2021",
      description: [
        "Served as Master of Ceremonies for cultural events and festivals, engaging audiences of 500–1,000+ attendees.",
        "Coordinated event logistics, performers, and volunteer teams to deliver impactful cultural showcases that celebrated Kannada traditions.",
        "Supported a thriving community of 1,000+ members, leading youth initiatives that promoted cultural pride and reduced barriers to involvement.",
      ],
    },
    {
      title: "Eco Coordinator",
      organization: "St. Joan of Arc Catholic Secondary School",
      period: "Sept 2021 – June 2023",
      description: [
        "Managed campus greenhouse operations and coordinated plant maintenance schedules throughout the academic year.",
        "Led peer mentorship programs in architectural design and sustainable development, facilitating collaborative learning sessions across multiple grade levels.",
        "Organized educational workshops on eco-friendly architecture and green building practices, promoting environmental awareness across the school community.",
      ],
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="leadership"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 bg-neutral-800 relative"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12 sm:mb-16 md:mb-20">Leadership & Community Involvement</h2>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

          <div className="space-y-8 sm:space-y-12">
            {leadershipRoles.map((role, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-2 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 sm:border-4 border-neutral-800 z-10 shadow-lg shadow-purple-500/50 animate-pulse"></div>

                <div className="ml-8 sm:ml-20 gradient-card p-4 sm:p-6 md:p-8 rounded-xl w-full group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="mb-3 lg:mb-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-1 sm:mb-2">
                        {role.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-purple-300 font-semibold">
                        {role.organization}
                      </p>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base bg-purple-500/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-purple-500/30 font-medium self-start lg:self-auto">
                      {role.period}
                    </span>
                  </div>

                  <ul className="text-gray-300 leading-relaxed space-y-2 sm:space-y-3">
                    {role.description.map((point, pointIndex) => (
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

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToContact}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to Contact section"
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

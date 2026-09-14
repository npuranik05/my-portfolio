"use client"

import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

export default function Leadership() {
  const leadershipRoles = [
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
      title: "Vice President of Events",
      organization: "AWARE",
      period: "Sept 2024 – Mar 2025",
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
      title: "Developer",
      organization: "Western Cyber Society",
      period: "Oct 2025 – Mar 2026",
      description: [
        "Collaborated on the design and development of a hybrid financial simulation framework combining deep learning with scenario-based market modeling.",
        "Led development of the LLM-driven scenario generation pipeline, translating market news and qualitative signals into structured economic assumptions for simulation.",
        "Supported model evaluation and validation by integrating scenario outputs into downstream risk analysis workflows.",
      ],
    },
  ]

  return (
    <section id="leadership" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="05" title="Leadership & Community Involvement" />

        <div>
          {leadershipRoles.map((role, index) => (
            <Reveal key={index} delay={(index % 3) * 100}>
              <div className="group grid md:grid-cols-[1fr_auto] gap-3 md:gap-10 py-10 sm:py-12 border-t border-white/10 transition-colors duration-500 hover:border-purple-400/40">
                <div className="font-mono text-sm text-neutral-500 pt-1.5 whitespace-nowrap md:text-right md:order-last group-hover:text-purple-300 transition-colors duration-500">
                  {role.period}
                </div>

                <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-500">
                    {role.title}
                  </h3>
                  <p className="text-purple-300/90 font-medium text-base sm:text-lg mb-5">
                    {role.organization}
                  </p>

                  <ul className="space-y-3 max-w-3xl">
                    {role.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <span className="mt-[0.55em] w-1.5 h-1.5 rounded-full bg-purple-400/70 shrink-0" />
                        <span className="text-neutral-400 leading-relaxed text-sm sm:text-base group-hover:text-neutral-300 transition-colors duration-500">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
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

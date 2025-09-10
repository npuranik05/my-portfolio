"use client"

/**
 * Skills & Certifications Component
 * Displays Nishant Puranik's technical skills and professional certifications
 * Features: Interactive hover effects, responsive grid layout, smooth scrolling navigation
 */
export default function Skills() {
  const skills = [
    { name: "Java", logo: "☕", color: "from-orange-600 to-red-600" },
    { name: "Python", logo: "🐍", color: "from-blue-500 to-yellow-400" },
    { name: "JavaScript", logo: "🟨", color: "from-yellow-400 to-yellow-600" },
    { name: "C#", logo: "🔷", color: "from-purple-600 to-blue-600" },
    { name: "C++", logo: "🔵", color: "from-blue-600 to-indigo-600" },
    { name: "C", logo: "🔸", color: "from-gray-600 to-gray-800" },
    { name: "HTML", logo: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS", logo: "🎨", color: "from-blue-400 to-blue-600" },
    { name: "SQL", logo: "🗄️", color: "from-indigo-500 to-purple-600" },
    { name: "Git", logo: "🌿", color: "from-orange-600 to-red-600" },
    { name: "MATLAB", logo: "📊", color: "from-orange-500 to-orange-700" },
    { name: "React", logo: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind", logo: "💨", color: "from-teal-400 to-cyan-500" },
    { name: "TypeScript", logo: "🔷", color: "from-blue-600 to-blue-800" },
    { name: "Node.js", logo: "🟢", color: "from-green-500 to-green-700" },
    { name: "AWS", logo: "☁️", color: "from-orange-400 to-yellow-500" },
  ]

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

  const scrollToLeadership = () => {
    const leadershipSection = document.getElementById("leadership")
    if (leadershipSection) {
      leadershipSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="skills" className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 bg-neutral-800 relative flex flex-col">
      <div className="max-w-6xl mx-auto flex-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12 sm:mb-16 md:mb-20 mt-8">Skills</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`group relative overflow-hidden bg-gradient-to-r ${skill.color} backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/30 hover:border-white/40`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                    {skill.logo}
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Actively Learning</h3>
          <p className="text-purple-300 text-sm text-center mb-8">Currently pursuing these courses</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm text-white rounded-xl border border-purple-500/30 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/60">
              <div className="p-4">
                <div className="text-center mb-3">
                  <div className="font-bold text-sm group-hover:text-purple-300 transition-colors duration-300 leading-tight mb-2">
                    AWS Cloud Practitioner Essentials
                  </div>
                  <div className="text-xs text-purple-300 mb-3">Amazon Web Services</div>
                </div>
                <div className="relative aspect-[4/3] bg-white rounded-lg border border-purple-400/50 flex items-center justify-center group-hover:border-purple-300 transition-colors duration-300 overflow-hidden shadow-lg p-4">
                  <img
                    src="/amazon.png"
                    alt="AWS Cloud Practitioner Essentials logo"
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm text-white rounded-xl border border-purple-500/30 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/60">
              <div className="p-4">
                <div className="text-center mb-3">
                  <div className="font-bold text-sm group-hover:text-purple-300 transition-colors duration-300 leading-tight mb-2">
                    Meta React Developer
                  </div>
                  <div className="text-xs text-purple-300 mb-3">Coursera</div>
                </div>
                <div className="relative aspect-[4/3] bg-white rounded-lg border border-purple-400/50 flex items-center justify-center group-hover:border-purple-300 transition-colors duration-300 overflow-hidden shadow-lg p-4">
                  <img
                    src="/meta.jpeg"
                    alt="Meta React Developer logo"
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm text-white rounded-xl border border-purple-500/30 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/60">
              <div className="p-4">
                <div className="text-center mb-3">
                  <div className="font-bold text-sm group-hover:text-purple-300 transition-colors duration-300 leading-tight mb-2">
                    TensorFlow 2.0
                  </div>
                  <div className="text-xs text-purple-300 mb-3">Udemy</div>
                </div>
                <div className="relative aspect-[4/3] bg-white rounded-lg border border-purple-400/50 flex items-center justify-center group-hover:border-purple-300 transition-colors duration-300 overflow-hidden shadow-lg p-4">
                  <img
                    src="/udemy.png"
                    alt="TensorFlow 2.0 logo"
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToLeadership}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to Leadership section"
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

"use client"

export default function About() {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience")
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 bg-neutral-800 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12 sm:mb-16 md:mb-20">Get to Know Me</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Outside of Work</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg text-center">
            Outside of tech I'm usually out exploring new places in the city, going on spontaneous adventures with friends, or just enjoying time making memories with the people around me. Music is a huge part of my life and one of my favorite ways to connect with others, whether it's sharing playlists, finding new songs, or having long conversations about what we're listening to.
            </p>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg text-center">
            What excites me most is building those genuine connections. I love meeting new people, hearing their stories, and discovering the little things we share that spark conversations and friendships I never expect.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToExperience}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to Experience section"
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

"use client"

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      text: "npuranik05@gmail.com",
      link: "mailto:npuranik05@gmail.com",
      label: "Drop me an email",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "💼",
      text: "linkedin.com/in/nishant-puranik-9484a6211",
      link: "https://www.linkedin.com/in/nishant-puranik-9484a6211/",
      label: "Connect on LinkedIn",
      color: "from-blue-500 to-blue-600",
    },
  ]

  const handleContactClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 bg-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="text-purple-400 font-bold">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16 space-y-4">
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            I love working with people who are passionate about what they do. Whether you have a cool idea, need help with a project, or just want to chat about tech - I'm here for it.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Every great project starts with a conversation. Let's talk about how we can make something meaningful together.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Coffee Chat? ☕</h3>
          <p className="text-gray-300 mb-6">
            I'm always up for a good conversation about technology, startups, or life in general. Let's grab a virtual
            coffee and see how we can work together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
              🎯 Available for freelance
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
              💡 Open to collaborations
            </span>
            <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm border border-green-500/30">
              🚀 Ready for new challenges
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => (
            <button
              key={index}
              onClick={() => handleContactClick(contact.link)}
              className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {contact.label}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{contact.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

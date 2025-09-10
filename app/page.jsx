import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Leadership from "@/components/Leadership"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="experience" className="min-h-screen">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section id="leadership" className="min-h-screen">
        <Leadership />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

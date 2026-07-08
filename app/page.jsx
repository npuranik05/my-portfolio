import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Leadership from "@/components/Leadership"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import SiteFX from "@/components/SiteFX"

export default function Home() {
  return (
    <div className="min-h-screen text-white antialiased">
      {/* SiteFX renders the shared fixed backdrop plus cursor/scroll effects */}
      <SiteFX />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}

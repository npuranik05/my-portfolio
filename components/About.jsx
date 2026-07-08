"use client"

import Image from "next/image"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" title="Get to Know Me" />

        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-purple-400 whitespace-nowrap">
                  Outside of Work
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/60 to-transparent" />
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={200}>
                <p className="text-neutral-300 leading-relaxed text-lg sm:text-xl lg:text-2xl">
                  When I'm not staring at a screen, I'm usually out somewhere in the city, half the
                  time with no real plan. Some of my favorite days have started with a friend
                  texting "you free?" and ended somewhere none of us expected. Music is a constant
                  through all of it. I'm always making playlists, sending people songs they didn't
                  ask for, and getting way too invested in arguments about what's actually good.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-neutral-300 leading-relaxed text-lg sm:text-xl lg:text-2xl">
                  Honestly, I just like people. Hearing where they're from, what they care about,
                  the random thing we somehow both know way too much about. Most of my closest
                  friendships started as conversations I didn't see coming, and I'd like to keep it
                  that way.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={350} className="justify-self-center">
            <div className="group relative w-64 sm:w-72 lg:w-full">
              <div className="absolute -inset-4 rounded-3xl bg-purple-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/Photo3.jpg"
                  alt="Watching the sunset with friends"
                  width={480}
                  height={840}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/50 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

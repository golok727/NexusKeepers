'use client'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="hero"
      className="grid place-items-center h-screen"
    >
      <header className="grid place-items-center bg-gradient-to-r from-PrimaryButton to-Accent bg-clip-text fade-in">
        <h1 className="font-bold lg:text-6xl text-xl text-center text-transparent">
          Embrace the Anime Art Revolution:
          <br />
          Unleashing Boundless Creativity Online
        </h1>
        <p className="text-gray-400 mt-10 slide-in anim-delay text-center">
          Unleash Your Artistic Brilliance: Elevate Your Anime Experience with{' '}
          <span className="font-bold dark:text-Primary text-black">
            Nexus Keepers{' '}
          </span>
          Anime Art.
        </p>

        <div className="flex gap-3 fade-in anim-delay">
          <button
            onClick={() => {
              window.scrollTo({ top: window.innerHeight })
            }}
            className="my-5 px-4 py-2 border-[1px] rounded border-PrimaryButton hover:scale-105 transition-transform duration-100"
          >
            Enter
          </button>

          <Link
            href={'/login'}
            className="my-5 px-4 py-2  rounded bg-PrimaryButton  text-white font-bold hover:scale-105 transition-transform duration-100"
          >
            Login
          </Link>
        </div>
      </header>
    </section>
  )
}

export default Hero

import React from 'react'
import WhoWeAreGrid from './WhoWeAreGrid'
import Link from 'next/link'

const WhoAreWe = () => {
  return (
    <div className="min-h-screen">
      <header className="mb-10">
        <h2 className="lg:text-4xl text-xl font-bold">
          Who Are <span className="text-PrimaryButton">We</span> ?
        </h2>
        <div className="lg:max-w-[100ch] my-3 dark:text-gray-400 text-gray-500">
          <p>
            Nexus Keepers is the ultimate app for{' '}
            <span className="inline-block bg-PrimaryButton text-white rounded-full px-2">
              anime art enthusiasts
            </span>{' '}
            providing a platform to unleash your artistic brilliance. <br />
            Join a vibrant community of creators, explore stunning artwork, and
            become a hero in your own anime-inspired world with Nexus Keepers
            Anime Art.
          </p>
        </div>
      </header>

      <h3 className="lg:text-3xl text-xl font-bold my-2">Our Heros</h3>
      <WhoWeAreGrid />

      <div className="my-10 flex justify-center items-center gap-3">
        <Link
          href={'/signup'}
          className="my-5 px-4 py-2  rounded bg-PrimaryButton  text-white font-bold hover:scale-105 transition-transform duration-100"
        >
          Get Started
        </Link>
        <span className="font-bold">it&apos;s free!!</span>
      </div>
    </div>
  )
}

export default WhoAreWe

'use client'
import React from 'react'
import Link from 'next/link'
import ToggleButton from './ToggleButton'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    link: '/showcase',
    text: 'Showcase',
    name: 'showcase',
  },
  {
    link: '/gallery',
    text: 'Gallery',
    name: 'gallery',
  },
  {
    link: '/collab',
    text: 'Collabrate',
    name: 'collab',
  },

  {
    link: '/aboutus',
    text: 'About Us',
    name: 'aboutus',
  },
]

const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-10 bg-opacity-70 dark:bg-opacity-40 dark:bg-black bg-white backdrop-blur-lg w-full border-b-[1px] border-b-gray-200 dark:border-b-gray-700  lg:px-3 py-3 px-4">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="font-bold">
            <Link href={'/'}>
              <span className="text-PrimaryButton">Nexus</span> Keepers
            </Link>
          </h1>
        </div>

        <nav className="text-sm font-medium text-gray-800 dark:text-gray-400">
          <ul className="flex gap-2">
            {navItems.map((item, idx) => {
              const isActive = pathname.startsWith(item.link)
              return (
                <li
                  key={idx}
                  className={`font-bold dark:font-normal dark:hover:text-gray-100 hover:text-gray-500 ${
                    isActive && 'text-PrimaryButton dark:text-PrimaryButton'
                  }`}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden lg:inline-flex">
          <ToggleButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar

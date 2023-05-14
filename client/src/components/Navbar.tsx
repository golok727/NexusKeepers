'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import ToggleButton from './ToggleButton'

const navItems = [
  {
    link: '/showcase',
    text: 'Showcase',
    name: 'showcase',
  },
  {
    link: '/pricing',
    text: 'Pricing',
    name: 'pricing',
  },
  {
    link: '/explore',
    text: 'Explore',
    name: 'explore',
  },
  {
    link: '/aboutus',
    text: 'About Us',
    name: 'aboutus',
  },
]

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(() => '')

  return (
    <div className="sticky top-0 dark:bg-zinc-900 bg-opacity-40 backdrop-blur-lg  w-full border-b-[1px] border-b-gray-200 dark:border-b-gray-700  lg:px-3 py-3 px-4">
      <div className="container max-w-4xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="font-bold" onClick={() => setActiveTab('')}>
            <Link href={'/'}>Nexus Keepers</Link>
          </h1>
        </div>

        <nav className="text-sm font-medium text-gray-400 dark:text-gray-500">
          <ul className="flex gap-2">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={` ${
                  item.name === activeTab
                    ? 'text-blue-500 '
                    : 'dark:hover:text-gray-100 hover:text-gray-500'
                }`}
              >
                <Link onClick={() => setActiveTab(item.name)} href={item.link}>
                  {item.text}
                </Link>
              </li>
            ))}
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

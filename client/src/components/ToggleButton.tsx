'use client'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

const ToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark' ?? true
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')

      localStorage.setItem('theme', 'light')
    }

    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <button
      className={`relative w-20 h-10 dark:bg-zinc-800 rounded-full border-[1px] dark:border-orange-500 border-zinc-300`}
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      <span
        className={`grid place-content-center  dark:bg-zinc-950 absolute w-7 aspect-square bg-orange-400 top-1/2 transform -translate-y-1/2 rounded-full ${
          isDarkMode ? 'right-2 ' : 'left-2'
        }`}
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  )
}

export default ToggleButton

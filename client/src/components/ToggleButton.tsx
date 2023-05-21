'use client'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

const ToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    localStorage.getItem('theme') !== null
      ? localStorage.getItem('theme') === 'dark'
      : true
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')

      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')

      localStorage.setItem('theme', 'dark')
    }
    setIsDarkMode((prev) => !prev)
  }
  return (
    <button
      className={`relative w-20 h-10 dark:bg-zinc-800 rounded-full border-[1px] dark:border-PrimaryButton text-PrimaryButton border-zinc-500`}
      onClick={() => toggleTheme()}
    >
      <span
        className={`grid place-content-center  dark:bg-zinc-950 absolute w-7 aspect-square bg-PrimaryButton dark:text-PrimaryButton text-white top-1/2 transform -translate-y-1/2 rounded-full ${
          isDarkMode ? 'right-2 ' : 'left-2'
        }`}
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  )
}

export default ToggleButton

'use client'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

const ToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem('theme') === 'dark'
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
      className={`relative w-20 h-10 dark:bg-zinc-800 rounded-full border-[1px] dark:border-PrimaryButton text-PrimaryButton border-zinc-500`}
      onClick={() => setIsDarkMode((prev) => !prev)}
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

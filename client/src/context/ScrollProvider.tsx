'use client'
import React, {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ScrollObserverContextType {
  scrollY: number
}

const ScrollContext = createContext<ScrollObserverContextType>({ scrollY: 0 })

interface Props {
  children: ReactNode
}
const ScrollProvider: FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider

export const useScroll = () => {
  const context = useContext(ScrollContext)

  return context
}

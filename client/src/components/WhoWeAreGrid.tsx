'use client'
import { characters } from '@/app/data'
import { useScroll } from '@/context/ScrollProvider'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
type CardProps = {
  character: Character
}
const Card: React.FC<CardProps> = ({ character: char }) => {
  const { scrollY } = useScroll()
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const { current: cardContainer } = cardRef

    if (cardContainer) {
      const { offsetTop, clientHeight } = cardContainer

      const cardBottom = offsetTop + clientHeight
      const isFullEntered = cardBottom < scrollY + window.innerHeight
      setIsVisible(isFullEntered)
    }
  }, [scrollY])

  return (
    <div
      tabIndex={0}
      ref={cardRef}
      className="relative group overflow-hidden border-[1px] dark:hover:border-gray-500 hover:border-gray-500 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer transition-all duration-300 h-fit hover:scale-[1.01]"
    >
      <div className="w-full h-[20rem]">
        <img className="object-cover w-full h-full" src={char.image} alt="" />
      </div>

      <section className="px-2 py-3">
        <h4 className="">
          <Link
            href={'_blank'}
            className="font-bold inline-block border-[1px] rounded-full px-3 border-red-500 dark:bg-transparent bg-red-500  text-white"
          >
            @<span>{char.name}</span>
          </Link>{' '}
          <span className="text-sm">, {char.title}:</span>
        </h4>

        <div className="grid">
          <p className=" text-sm font-light text-gray-700 dark:text-gray-400 py-3">
            {char.description}
          </p>
        </div>
      </section>

      <div
        className="absolute transition-opacity duration-500 inset-0 bg-slate-100 dark:bg-black  pointer-events-none "
        style={{ opacity: isVisible ? 0 : 0.4 }}
      ></div>
    </div>
  )
}

const WhoWeAreGrid = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
      {characters.map((character, idx) => (
        <Card key={idx} character={character} />
      ))}
    </div>
  )
}

export default WhoWeAreGrid

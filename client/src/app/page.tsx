import Hero from '@/components/Hero'
import WhoAreWe from '@/components/WhoAreWe'
import Wrapper from '@/components/Wrapper'

export default function Home() {
  return (
    <div className="">
      <Wrapper>
        {/* <h1 className="font-bold">Radhey Shyam</h1> */}
        <Hero />
        <WhoAreWe />
      </Wrapper>
    </div>
  )
}

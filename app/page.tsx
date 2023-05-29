import Image from 'next/image'
import { Banner, MostrarCards } from './components'
import { Information } from '@/components/Information/Information'

export default function Home() {
  return (
    <>
      <Banner />
      <Information />
      <MostrarCards />
    </>
  )
}

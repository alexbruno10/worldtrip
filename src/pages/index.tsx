import type { NextPage } from 'next'
import { Banner } from './components/Banner'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { TravelTypes } from './components/TravelTypes'

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Banner />
    <TravelTypes />
    <Content />
    </>
  )
}

export default Home
